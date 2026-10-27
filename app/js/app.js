/* FitoTech - UFAM — lógica do aplicativo (sem dependências externas). */
(() => {
  'use strict';
  const PLANTAS = (window.PLANTAS || []).slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  const byId = Object.fromEntries(PLANTAS.map(p => [p.id, p]));
  let main = document.getElementById('main');

  // ---------- utilitários ----------
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const fmt = (n, d = 1) => (n == null || isNaN(n)) ? '—' : Number(n).toLocaleString('pt-BR', { maximumFractionDigits: d });
  const num = v => { const n = parseFloat(String(v).replace(',', '.')); return isNaN(n) ? null : n; };
  const store = {
    get(k, d) { try { const v = localStorage.getItem('fc.' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('fc.' + k, JSON.stringify(v)); } catch (e) { /* armazenamento indisponível */ } },
    del(k) { try { localStorage.removeItem('fc.' + k); } catch (e) { /* ignore */ } }
  };
  const debounce = (fn, ms = 200) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
  const foto = p => (p.fotos[0] || {}).src || 'assets/icons/icon-192.png';
  // capa ilustrada: assets/img/capas/<id>.jpg (se não existir, usa a foto real)
  const capaSrc = p => `assets/img/capas/${p.id}.jpg`;
  const capaImg = (p, attrs = '') => `<img ${attrs} src="${capaSrc(p)}" data-fb="${foto(p)}" onerror="this.onerror=null;this.src=this.dataset.fb" alt="Ilustração de ${esc(p.nome)}">`;

  // ---------- perfil de uso: paciente × profissional ----------
  const perfil = () => store.get('perfil', '');
  const isPro = () => perfil() === 'pro';
  const RESTRITO = ['atendimento', 'calculadora'];
  const NAV = {
    pro: { top: [['plantas', 'Espécies'], ['atendimento', 'Atendimento'], ['calculadora', 'Calculadora'], ['identificar', 'Identificar'], ['glossario', 'Glossário'], ['instalar', 'Apps']],
      tab: [['inicio', '⌂', 'Início'], ['plantas', '❦', 'Espécies'], ['atendimento', '✚', 'Atender'], ['calculadora', '⚖', 'Calcular'], ['mais', '☰', 'Mais']] },
    pac: { top: [['plantas', 'Plantas'], ['identificar', 'Identificar'], ['cuidados', 'Cuidados'], ['glossario', 'Glossário'], ['instalar', 'Apps']],
      tab: [['inicio', '⌂', 'Início'], ['plantas', '❦', 'Plantas'], ['cuidados', '♥', 'Cuidados'], ['emergencia', '☎', 'Emergência'], ['mais', '☰', 'Mais']] }
  };
  function renderNav(active) {
    const p = perfil();
    const nav = NAV[p === 'pro' ? 'pro' : 'pac'];
    const on = k => (k === active || (active === 'planta' && k === 'plantas')) ? ' class="active"' : '';
    document.getElementById('topnav').innerHTML = p ? nav.top.map(([k, l]) => `<a href="#/${k}"${on(k)}>${l}</a>`).join('') : '';
    const tb = document.getElementById('tabbar');
    tb.innerHTML = p ? nav.tab.map(([k, i, l]) => `<a href="#/${k === 'inicio' ? '' : k}"${on(k)}><span aria-hidden="true">${i}</span>${l}</a>`).join('') : '';
    tb.hidden = !p; document.body.classList.toggle('no-tabbar', !p);
    const chip = document.getElementById('perfilChip');
    chip.hidden = !p;
    chip.textContent = p === 'pro' ? '🩺 Profissional' : '🧑 Paciente';
    chip.title = 'Trocar perfil de uso';
  }

  // ---------- condições do paciente (chaves usadas em data.js → riscos) ----------
  const COND_GROUPS = [
    ['Situações', { gestante: 'Gestante', lactante: 'Lactante (amamentando)', idoso: 'Idoso (≥ 60 anos)', cirurgia: 'Cirurgia programada', dirige: 'Dirige / opera máquinas', alcoolismo: 'Uso abusivo de álcool', polifarmacia: 'Polifarmácia (≥ 5 medicamentos)', menstruacao: 'Período menstrual' }],
    ['Comorbidades', { has: 'Hipertensão arterial', hipotensao: 'Hipotensão', diabetes: 'Diabetes / hipoglicemia', hiv: 'HIV / AIDS', desnutricao: 'Deficiência alimentar / desnutrição', hepatopatia: 'Doença hepática (hepatite, cirrose)', nefropatia: 'Doença renal', cardiopatia: 'Cardiopatia / arritmia / ICC', coagulopatia: 'Distúrbio de coagulação', gastrite: 'Gastrite / úlcera péptica', calculo: 'Cálculo ou obstrução biliar', intestinal: 'Doença intestinal (Crohn, colite, SII, obstrução)', hemorroidas: 'Hemorroidas', autoimune: 'Doença autoimune', transplante: 'Transplantado', tuberculose: 'Tuberculose', epilepsia: 'Epilepsia / convulsões', depressao_grave: 'Depressão grave / endógena', ansiedade_panico: 'Pânico / ansiedade intensa / insônia', hipertireoidismo: 'Hipertireoidismo', tireoide: 'Hipotireoidismo', hipocalemia: 'Hipocalemia / distúrbio eletrolítico', asma: 'Asma', cancer_hormonal: 'Câncer hormônio-dependente / endometriose / miomas', cancer_prostata: 'Suspeita de câncer de próstata', cancer_biliar: 'Câncer de vias biliares / pâncreas', ferida_exsudativa: 'Ferida com necessidade de drenagem', taquicardia: 'Taquicardia (FC > 100)', bradicardia: 'Bradicardia (FC < 60)' }],
    ['Alergias', { alergia_asteraceae: 'Alergia a Asteraceae (camomila, calêndula, arnica...)', alergia_amendoim: 'Alergia a amendoim' }],
    ['Medicamentos em uso', { m_anticoag: 'Anticoagulantes / antiagregantes (varfarina, AAS, clopidogrel)', m_aine: 'Anti-inflamatórios (AINEs)', m_antihipertensivo: 'Anti-hipertensivos', m_diuretico: 'Diuréticos', m_digoxina: 'Digoxina / antiarrítmicos', m_hipoglicemiante: 'Insulina / hipoglicemiantes', m_antirretroviral: 'Antirretrovirais (TARV)', m_contraceptivo: 'Anticoncepcional oral', m_hormonal: 'TRH / estrogênios / tamoxifeno', m_levotiroxina: 'Levotiroxina', m_antidepressivo: 'Antidepressivos (ISRS, IMAO, tricíclicos)', m_sedativo: 'Sedativos / benzodiazepínicos / depressores do SNC', m_anticonvulsivante: 'Anticonvulsivantes', m_imunossupressor: 'Imunossupressores (ciclosporina...)', m_estatina: 'Estatinas', m_hepatotoxico: 'Fármacos hepatotóxicos (paracetamol, metotrexato, isoniazida)', m_teofilina: 'Teofilina', m_cyp1a2: 'Fármacos metabolizados por CYP1A2' }]
  ];
  const COND = Object.assign({}, ...COND_GROUPS.map(g => g[1]));

  // ---------- busca inteligente ----------
  const SYN = {
    'tosse': ['expectorante', 'bronquite', 'catarro'], 'pressao alta': ['hipertensao'], 'enjoo': ['nausea', 'cinetose'],
    'azia': ['dispepsia', 'queimacao'], 'ma digestao': ['dispepsia'], 'estomago': ['dispepsia', 'gastrite'], 'intestino preso': ['constipacao'],
    'prisao de ventre': ['constipacao'], 'nervoso': ['ansiedade'], 'calmante': ['ansiedade', 'sedativo'], 'sono': ['insonia'],
    'dormir': ['insonia'], 'gripe': ['resfriado'], 'queimado': ['queimadura'], 'machucado': ['ferida'], 'corte': ['ferida'],
    'colesterol': ['dislipidemia', 'hiperlipidemia'], 'calorao': ['fogacho'], 'menopausa': ['climaterio'], 'variz': ['varizes', 'insuficiencia venosa'],
    'coluna': ['lombalgia'], 'dor nas costas': ['lombalgia'], 'junta': ['dor articular'], 'labirintite': ['vertigem'], 'zumbido': ['tinnitus'],
    'xixi': ['urinar', 'diuretico'], 'inchaco': ['edema', 'retencao'], 'triste': ['depressao'], 'cansado': ['cansaco', 'fadiga'], 'boca': ['gengivite', 'afta'],
    'dor de garganta': ['garganta', 'gargarejo'], 'diarreia': ['diarreia'], 'vomito': ['nausea']
  };
  const IDX = PLANTAS.map(p => ({
    p,
    f: [
      ['nome', 100, norm([p.nome, ...p.populares].join(' | '))],
      ['nome científico', 90, norm(p.cientificoCompleto + ' ' + p.sinonimia)],
      ['sintoma/queixa', 70, norm(p.tags.join(' | '))],
      ['indicação', 50, norm(p.memento.indicacoes)],
      ['característica', 25, norm([p.familia, p.parte, p.porte, 'flor ' + p.flor, p.via].join(' | '))],
      ['outras seções', 4, norm([p.memento.formas, p.memento.posologia, p.memento.contraindicacoes, p.memento.interacoes, p.memento.precaucoes].join(' '))]
    ]
  }));
  function expand(q) {
    const nq = norm(q).trim();
    const terms = new Set([nq]);
    for (const [k, vs] of Object.entries(SYN)) if (nq.includes(k)) vs.forEach(v => terms.add(nq.replace(k, v)));
    return [...terms].filter(Boolean);
  }
  function search(q, { therapeuticOnly = false } = {}) {
    const variants = expand(q);
    if (!variants.length) return [];
    const res = [];
    for (const it of IDX) {
      let best = { score: 0, why: '' };
      for (const v of variants) {
        const tokens = v.split(/\s+/).filter(t => t.length > 1);
        if (!tokens.length) continue;
        let total = 0, why = '', all = true;
        for (const t of tokens) {
          let hit = 0, w = '';
          for (const [label, weight, text] of it.f) {
            if (therapeuticOnly && weight < 50 && label !== 'nome') continue;
            const i = text.indexOf(t);
            if (i >= 0) { const bonus = (i === 0 || /[\s|(-]/.test(text[i - 1])) ? 1 : 0.6; if (weight * bonus > hit) { hit = weight * bonus; w = label; } }
          }
          if (!hit) { all = false; break; }
          total += hit; if (!why) why = w;
        }
        if (all && total > best.score) best = { score: total, why };
      }
      if (best.score) res.push({ p: it.p, ...best });
    }
    // menções só em seções secundárias (ex.: contraindicações) aparecem apenas se não houver nada melhor
    const fortes = res.filter(r => r.why !== 'outras seções');
    return (fortes.length ? fortes : res).sort((a, b) => b.score - a.score || a.p.nome.localeCompare(b.p.nome));
  }
  const highlight = (text, q) => {
    const t = esc(text); if (!q) return t;
    const words = norm(q).split(/\s+/).filter(w => w.length > 2);
    if (!words.length) return t;
    const n = norm(t); let out = '', i = 0;
    const marks = [];
    words.forEach(w => { let k = n.indexOf(w); while (k >= 0) { marks.push([k, k + w.length]); k = n.indexOf(w, k + 1); } });
    marks.sort((a, b) => a[0] - b[0]);
    for (const [a, b] of marks) { if (a < i) continue; out += t.slice(i, a) + '<mark>' + t.slice(a, b) + '</mark>'; i = b; }
    return out + t.slice(i);
  };

  // ---------- alertas resumidos ----------
  function alertBadges(p, max = 6) {
    const r = p.riscos, b = [];
    b.push(p.rx ? '<span class="badge warn" title="Venda sob prescrição médica">℞ Prescrição</span>' : '<span class="badge info" title="Isento de prescrição">MIP</span>');
    if (r.gestante && r.gestante[0] === 'c') b.push('<span class="badge bad" title="Contraindicado na gestação">🤰 Gestação</span>');
    else if (r.gestante) b.push('<span class="badge warn" title="Cautela na gestação">🤰 Cautela</span>');
    if (r.m_anticoag || r.coagulopatia) b.push(`<span class="badge ${(r.m_anticoag || r.coagulopatia)[0] === 'c' ? 'bad' : 'warn'}" title="Risco de sangramento / anticoagulantes">🩸 Sangramento</span>`);
    const graves = Object.keys(r).filter(k => k.startsWith('m_') && r[k][0] === 'c').length;
    if (graves) b.push(`<span class="badge bad" title="Interações medicamentosas contraindicadas">💊 ${graves} interaç${graves > 1 ? 'ões' : 'ão'} grave${graves > 1 ? 's' : ''}</span>`);
    if (r.hepatopatia && r.hepatopatia[0] === 'c') b.push('<span class="badge bad" title="Contraindicado em doença hepática">Fígado</span>');
    if (p.idade) b.push(`<span class="badge ${p.idade.nivel === 'c' ? 'bad' : 'warn'}" title="${esc(p.idade.txt)}">👶 ≥ ${p.idade.min} anos</span>`);
    if (/hypericum/.test(p.id)) b.push('<span class="badge warn" title="Fotossensibilização">☀️ Sol</span>');
    if (/T[óo]pica|externo/i.test(p.via) && !/Oral/.test(p.via)) b.push('<span class="badge ok">Uso externo</span>');
    return b.slice(0, max).join('');
  }

  // ---------- roteador ----------
  const routes = {};
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
    return { name: parts[0] || 'inicio', arg: parts[1], q: new URLSearchParams(qs || '') };
  }
  function go() {
    const r = parseHash();
    let view = routes[r.name] || routes.inicio;
    if (!perfil() && r.name !== 'emergencia') view = routes.perfil;          // 1ª abertura: escolher perfil
    else if (!isPro() && RESTRITO.includes(r.name)) view = routes.restrito;   // paciente não acessa áreas técnicas
    renderNav(r.name);
    // contêiner novo a cada navegação: descarta ouvintes de eventos da página anterior
    const fresh = main.cloneNode(false); main.replaceWith(fresh); main = fresh;
    view(r);
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', go);
  const setTitle = t => { document.title = t ? t + ' · FitoTech - UFAM' : 'FitoTech - UFAM'; };

  // ---------- ESCOLHA DE PERFIL ----------
  routes.perfil = () => {
    setTitle('Bem-vindo');
    const atual = perfil();
    main.innerHTML = `
      <section class="gate">
        <img class="gate-logo" src="assets/icons/logo.png" alt="Logo FitoTech - UFAM" width="200" height="200">
        <h1>Bem-vindo ao FitoTech - UFAM</h1>
        <p class="muted">Cartilha Digital de Fitoterapia baseada no Memento Fitoterápico da Farmacopeia Brasileira (Anvisa).</p>
        <h2 class="sec">Como você vai usar o aplicativo?</h2>
        <div class="grid grid-2 sec">
          <div class="card gate-opt ${atual === 'pac' ? 'sel' : ''}">
            <div class="gate-ico">🧑</div>
            <h3>Sou paciente / cidadão</h3>
            <p class="small">Informações de <b>segurança</b> sobre as plantas, quando <b>não</b> usar, identificação e telefones de emergência.</p>
            <p class="small muted">Doses, cálculos de preparo, formulações e receituário ficam restritos a profissionais de saúde.</p>
            <button class="btn ghost" type="button" id="goPac">Entrar como paciente</button>
          </div>
          <div class="card gate-opt ${atual === 'pro' ? 'sel' : ''}">
            <div class="gate-ico">🩺</div>
            <h3>Sou profissional de saúde</h3>
            <p class="small">Médicos, enfermeiros, farmacêuticos, nutricionistas e estudantes da área sob supervisão. Acesso completo: posologia, manipulação, calculadora, atendimento e receituário.</p>
            <label class="check"><input type="checkbox" id="decl"><span class="small">Declaro que sou profissional de saúde habilitado(a) ou estudante da área sob supervisão, e que usarei as informações com responsabilidade.</span></label>
            <button class="btn sec" type="button" id="goPro" disabled>Entrar como profissional</button>
          </div>
        </div>
        <div class="callout warn sec small"><b>Por que perguntamos?</b> A indicação de dose, a prescrição e a manipulação de fitoterápicos devem ser feitas por profissionais habilitados. Preparar ou usar plantas por conta própria, em doses ou formas inadequadas, pode causar intoxicação, interações perigosas com medicamentos e outros danos à saúde.</div>
        <p class="center small sec"><a href="#/emergencia">☎ Emergência / intoxicação</a></p>
      </section>`;
    const decl = main.querySelector('#decl'), goPro = main.querySelector('#goPro');
    decl.addEventListener('change', () => { goPro.disabled = !decl.checked; });
    main.querySelector('#goPac').addEventListener('click', () => { store.set('perfil', 'pac'); location.hash = '#/'; go(); });
    goPro.addEventListener('click', () => { if (!decl.checked) return; store.set('perfil', 'pro'); location.hash = '#/'; go(); });
  };
  routes.restrito = () => {
    setTitle('Área restrita');
    main.innerHTML = `
      <div class="card gate center" style="margin-top:20px">
        <div class="gate-ico">🔒</div>
        <h1>Área restrita a profissionais de saúde</h1>
        <p>Cálculo de doses, formulações, atendimento e receituário exigem formação técnica. Usar plantas em dose ou preparo errado pode causar intoxicação.</p>
        <p><b>Converse com um profissional de saúde</b> (unidade básica de saúde, farmácia, médico, enfermeiro, nutricionista) antes de usar qualquer planta medicinal.</p>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/cuidados">Ver cuidados com plantas</a><a class="btn ghost" href="#/perfil">Sou profissional de saúde</a></div>
      </div>`;
  };
  routes.cuidados = () => {
    setTitle('Cuidados');
    main.innerHTML = `
      <div class="page-head"><h1>Cuidados com plantas medicinais</h1><p>Natural não significa inofensivo. Plantas têm substâncias ativas, assim como os remédios.</p></div>
      <div class="grid grid-2">
        <div class="card callout ok"><strong class="t">✔ Faça assim</strong><ul>
          <li>Converse com um profissional de saúde <b>antes</b> de usar qualquer planta.</li>
          <li>Conte ao médico, enfermeiro ou farmacêutico quais plantas e chás você usa.</li>
          <li>Prefira produtos registrados na Anvisa ou manipulados com receita.</li>
          <li>Use só a planta, a parte e a quantidade orientadas, pelo tempo combinado.</li>
          <li>Pare o uso e procure atendimento se sentir algo diferente.</li></ul></div>
        <div class="card callout bad"><strong class="t">✖ Não faça</strong><ul>
          <li>Não aumente a dose por conta própria nem misture várias plantas.</li>
          <li>Não use plantas na gravidez, na amamentação ou em crianças sem orientação.</li>
          <li>Não substitua remédios receitados por chás.</li>
          <li>Não use planta que você não sabe identificar com certeza (nomes populares se repetem).</li>
          <li>Não prepare tinturas, extratos ou cápsulas em casa.</li></ul></div>
      </div>
      <div class="card sec"><h2>Atenção redobrada se você…</h2>
        <div class="chips">${['está grávida ou amamentando', 'tem pressão alta ou baixa', 'tem diabetes', 'vive com HIV / usa antirretrovirais', 'usa anticoagulante (ex.: varfarina, AAS)', 'tem doença no fígado ou rins', 'tem problema no coração', 'vai fazer cirurgia', 'usa antidepressivo ou calmante', 'tem alergia a camomila ou margarida'].map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <p class="small muted sec">Em cada ficha de planta, veja a seção <b>“Pode fazer mal”</b>.</p></div>
      <div class="card callout bad sec emerg-strip"><span><strong>Passou mal depois de usar uma planta?</strong> Ligue já.</span>
        <span class="btn-row"><a class="btn danger small" href="tel:08007226001">Disque-Intoxicação 0800 722 6001</a><a class="btn danger small" href="tel:192">SAMU 192</a></span></div>`;
  };

  // ---------- INÍCIO ----------
  routes.inicio = () => {
    setTitle('');
    const sug = ['ansiedade', 'insônia', 'dispepsia', 'tosse', 'constipação', 'náusea', 'menopausa', 'ferida', 'dor articular', 'gengivite'];
    main.innerHTML = `
      <section class="hero">
        <div class="hero-top"><img src="assets/icons/icon-192.png" alt="" width="64" height="64"><div><h1>FitoTech - UFAM</h1>
        <p>${isPro() ? 'Cartilha Digital de Fitoterapia: as 28 espécies do Memento Fitoterápico (Anvisa), com segurança em primeiro lugar.' : 'Conheça as plantas medicinais do Memento Fitoterápico (Anvisa) e saiba quando elas podem fazer mal.'}</p></div></div>
        <form class="searchbox" id="homeSearch" role="search">
          <input type="search" name="q" placeholder="Buscar por nome popular, científico ou sintoma…" aria-label="Buscar planta" autocomplete="off">
        </form>
        <div class="chips" style="margin-top:10px">${sug.map(s => `<a class="chip" href="#/plantas?q=${encodeURIComponent(s)}">${esc(s)}</a>`).join('')}</div>
      </section>
      <div class="grid grid-3">
        ${(isPro() ? [
          ['#/atendimento', '✚', 'Atendimento clínico', 'Sinais vitais, comorbidades e medicamentos → triagem de segurança e receituário.'],
          ['#/plantas', '❦', 'As 28 espécies', 'Fichas completas: indicação, preparo, posologia, contraindicações e interações.'],
          ['#/calculadora', '⚖', 'Calculadora de preparo', 'Quantidade de planta seca/fresca por volume de água, tinturas e doses.'],
          ['#/identificar', '◉', 'Identificador visual', 'Fotos com o que faz bem (✔) e o que faz mal (✖) em cada planta.'],
          ['#/glossario', 'Aa', 'Glossário técnico', 'Infusão, decocção, maceração, tintura e outros termos.'],
          ['#/emergencia', '☎', 'Emergência e intoxicação', 'SAMU 192, Disque-Intoxicação 0800 722 6001 e outros.']
        ] : [
          ['#/plantas', '❦', 'As 28 plantas', 'Para que servem, quando não usar e quais remédios podem interagir.'],
          ['#/cuidados', '♥', 'Cuidados importantes', 'Natural não é inofensivo: o que fazer e o que evitar.'],
          ['#/identificar', '◉', 'Identificar planta', 'Compare fotos e veja a parte que faz bem (✔) e a que faz mal (✖).'],
          ['#/glossario', 'Aa', 'Glossário', 'O que é infusão, decocção, tintura…'],
          ['#/emergencia', '☎', 'Emergência e intoxicação', 'SAMU 192, Disque-Intoxicação 0800 722 6001 e outros.'],
          ['#/perfil', '🩺', 'Sou profissional de saúde', 'Acesso a doses, calculadora, atendimento e receituário.']
        ]).map(([h, i, t, d]) => `<a class="card tile" href="${h}"><span class="ico">${i}</span><span><h3>${t}</h3><p>${d}</p></span></a>`).join('')}
      </div>
      <div class="card callout bad emerg-strip" style="margin-top:12px">
        <span><strong>Suspeita de intoxicação?</strong> Ligue para o Disque-Intoxicação (Anvisa) ou SAMU.</span>
        <span class="btn-row"><a class="btn danger small" href="tel:08007226001">0800 722 6001</a><a class="btn danger small" href="tel:192">SAMU 192</a></span>
      </div>
      <p class="disclaimer">Ferramenta de apoio ao profissional de saúde. Não substitui a avaliação clínica nem a consulta ao Memento Fitoterápico (Anvisa, 2016). Conteúdo das monografias reproduzido da fonte oficial.</p>`;
    main.querySelector('#homeSearch').addEventListener('submit', e => { e.preventDefault(); location.hash = '#/plantas?q=' + encodeURIComponent(e.target.q.value); });
  };

  // ---------- LISTA / BUSCA ----------
  const FILTERS = {
    oral: ['Uso oral', p => /Oral/.test(p.via)], topico: ['Uso externo', p => /T[óo]pica|externo/i.test(p.via)],
    mip: ['Isento de prescrição', p => !p.rx], rx: ['Sob prescrição', p => p.rx],
    gest: ['Sem contraindicação na gestação', p => !p.riscos.gestante], chas: ['Tem preparo caseiro (chá)', p => p.populacao.length > 0]
  };
  routes.plantas = (r) => {
    setTitle('Espécies');
    const q0 = r.q.get('q') || '';
    main.innerHTML = `
      <div class="page-head"><h1>Espécies do Memento</h1><p>Busque por nome popular, científico, sintoma/queixa ou característica (ex.: "flor amarela", "raiz", "árvore").</p></div>
      <form class="searchbox" role="search" onsubmit="return false"><input id="q" type="search" value="${esc(q0)}" placeholder="Ex.: ansiedade, Matricaria, boldo, tosse…" aria-label="Buscar" autocomplete="off"></form>
      <div class="list-tools chips" id="filters">${Object.entries(FILTERS).filter(([k]) => isPro() || k !== 'chas').map(([k, [l]]) => `<button class="chip" type="button" data-f="${k}" aria-pressed="false">${l}</button>`).join('')}</div>
      <p class="muted small" id="count" aria-live="polite"></p>
      <div class="grid grid-auto" id="list"></div>`;
    const input = main.querySelector('#q'), list = main.querySelector('#list'), count = main.querySelector('#count');
    const active = new Set();
    const render = () => {
      const q = input.value.trim();
      let items = q ? search(q) : PLANTAS.map(p => ({ p }));
      items = items.filter(({ p }) => [...active].every(k => FILTERS[k][1](p)));
      count.textContent = q ? `${items.length} resultado(s) para "${q}"` : `${items.length} espécie(s)`;
      list.innerHTML = items.length ? items.map(({ p, why }) => `
        <a class="card plant-card" href="#/planta/${p.id}">
          <div class="ph">${capaImg(p, 'loading="lazy"')}</div>
          <div class="bd">
            <h3>${highlight(p.nome, q)}</h3>
            <div class="sci">${highlight(p.cientifico, q)}</div>
            <div class="why">${highlight(p.memento.indicacoes.slice(0, 120), q)}${p.memento.indicacoes.length > 120 ? '…' : ''}</div>
            ${why && why !== 'nome' ? `<div class="small muted">Encontrado em: ${esc(why)}</div>` : ''}
            <div class="badges">${alertBadges(p, 4)}</div>
          </div>
        </a>`).join('') : `<div class="empty card">Nada encontrado. Tente outro termo (ex.: "digestão", "sono", "pele").</div>`;
    };
    input.addEventListener('input', debounce(() => { history.replaceState(null, '', '#/plantas' + (input.value ? '?q=' + encodeURIComponent(input.value) : '')); render(); }, 150));
    main.querySelector('#filters').addEventListener('click', e => {
      const b = e.target.closest('[data-f]'); if (!b) return;
      const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
      on ? active.add(b.dataset.f) : active.delete(b.dataset.f); render();
    });
    render();
  };

  // ---------- FICHA DA ESPÉCIE ----------
  const SECTIONS = [
    ['indicacoes', 'Indicações terapêuticas'], ['contraindicacoes', 'Contraindicações'], ['precaucoes', 'Precauções de uso'],
    ['interacoes', 'Interações medicamentosas'], ['adversos', 'Efeitos adversos'], ['formas', 'Formas farmacêuticas'],
    ['posologia', 'Via de administração e posologia'], ['tempo', 'Tempo de utilização'], ['superdosagem', 'Superdosagem'],
    ['prescricao', 'Prescrição'], ['quimica', 'Principais classes químicas']
  ];
  routes.planta = (r) => {
    const p = byId[r.arg];
    if (!p) { main.innerHTML = '<div class="empty card">Espécie não encontrada. <a href="#/plantas">Ver todas</a></div>'; return; }
    setTitle(p.nome);
    const contra = Object.entries(p.riscos).filter(([, v]) => v[0] === 'c');
    const atenc = Object.entries(p.riscos).filter(([, v]) => v[0] === 'a');
    const partsOk = p.partes.filter(x => x.ok), partsNo = p.partes.filter(x => !x.ok);
    const pro = isPro();
    // slide 0 = capa ilustrada; demais = fotos reais (a 1ª foto real fica desfocada ao fundo da capa)
    let slides = [{ src: capaSrc(p), capa: true, credito: 'Ilustração — equipe FitoTech - UFAM', link: '', obs: '' }, ...p.fotos];
    const SEC_PAC = ['indicacoes', 'contraindicacoes', 'precaucoes', 'interacoes', 'adversos', 'superdosagem'];
    const secoes = pro ? SECTIONS : SECTIONS.filter(([k]) => SEC_PAC.includes(k));
    main.innerHTML = `
      <p><a href="#/plantas">← ${pro ? 'Espécies' : 'Plantas'}</a></p>
      <div class="ficha-top">
        <div class="gallery">
          <div class="main"><div class="gbg" id="gbg" style="background-image:url('${foto(p)}')"></div><img id="gimg" src="${capaSrc(p)}" alt="${esc(p.nome)}">
            <div class="overlay-tags">${partsOk.map(x => `<span class="ok">${esc(x.parte)}</span>`).join('')}${partsNo.slice(0, 2).map(x => `<span class="no">${esc(x.parte)}</span>`).join('')}</div>
          </div>
          <div class="thumbs" role="list">${slides.map((f, i) => `<button type="button" data-i="${i}" aria-current="${i === 0}" aria-label="${f.capa ? 'Ilustração' : 'Foto ' + i}"><img loading="lazy" src="${f.src}" alt=""></button>`).join('')}</div>
          <div class="credit" id="gcred"></div>
        </div>
        <div>
          <h1>${esc(p.nome)}</h1>
          <div class="sci" style="font-size:1.05rem">${esc(p.cientificoCompleto)}</div>
          <div class="badges" style="margin:10px 0">${alertBadges(p, 9)}</div>
          <dl class="kv">
            <dt>Nomes populares</dt><dd>${esc(p.populares.join(', '))}</dd>
            <dt>Família</dt><dd>${esc(p.familia)}</dd>
            ${p.sinonimia ? `<dt>Sinonímia</dt><dd><i>${esc(p.sinonimia)}</i></dd>` : ''}
            <dt>Parte utilizada</dt><dd>${esc(p.parte)}</dd>
            <dt>Via</dt><dd>${esc(p.via)}</dd>
            <dt>Tempo máximo</dt><dd>${esc(p.tempoMax)}</dd>
            <dt>Prescrição</dt><dd>${p.rx ? 'Somente sob prescrição médica' : 'Isento de prescrição médica'}</dd>
          </dl>
          ${pro ? `<div class="btn-row" style="margin-top:12px">
            ${p.calc.length ? `<a class="btn" href="#/calculadora?p=${p.id}">⚖ Calcular preparo</a>` : ''}
            <a class="btn ghost" href="#/atendimento?p=${p.id}">✚ Usar no atendimento</a>
          </div>` : `<div class="callout info small" style="margin-top:12px">🩺 <b>Não use por conta própria.</b> A dose, o preparo e o tempo de uso devem ser orientados por um profissional de saúde. Leve esta ficha à sua consulta e informe os remédios que você usa.</div>`}
        </div>
      </div>

      <div class="goodbad sec">
        <div class="callout ok"><strong class="t">✔ Faz bem / indicado para</strong>${esc(p.memento.indicacoes)}
          <ul class="clean parts" style="margin-top:8px">${partsOk.map(x => `<li><span class="dot ok">✔</span><span><b>${esc(x.parte)}</b> — ${esc(x.txt)}</span></li>`).join('')}</ul></div>
        <div class="callout bad"><strong class="t">✖ Pode fazer mal</strong>
          <ul class="clean parts">${partsNo.map(x => `<li><span class="dot no">✖</span><span><b>${esc(x.parte)}</b> — ${esc(x.txt)}</span></li>`).join('')}
          ${contra.map(([k, v]) => `<li><span class="dot no">⛔</span><span><b>${esc(COND[k] || k)}</b> — ${esc(v[1])}</span></li>`).join('')}
          ${p.idade && p.idade.nivel === 'c' ? `<li><span class="dot no">👶</span><span>${esc(p.idade.txt)}</span></li>` : ''}
          ${!partsNo.length && !contra.length ? '<li>Hipersensibilidade aos componentes. Veja precauções abaixo.</li>' : ''}</ul></div>
      </div>
      ${atenc.length ? `<div class="callout warn sec"><strong class="t">⚠ Atenção (usar com cautela / monitorar)</strong><ul class="clean">${atenc.map(([k, v]) => `<li><b>${esc(COND[k] || k)}:</b> ${esc(v[1])}</li>`).join('')}${p.idade && p.idade.nivel === 'a' ? `<li><b>Idade:</b> ${esc(p.idade.txt)}</li>` : ''}</ul></div>` : ''}

      ${pro ? `<div class="card sec">
        <h2>Modo de preparo e formulação</h2>
        <div class="tabs" role="tablist">
          <button role="tab" aria-selected="true" data-t="pop">Para a população</button>
          <button role="tab" aria-selected="false" data-t="mag">Uso clínico / manipulação</button>
        </div>
        <div data-p="pop">${p.populacao.length ? `<ol class="steps">${p.populacao.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : `<div class="callout warn">Não há preparo caseiro previsto no Memento para esta espécie. Orientar o uso apenas de <b>produto industrializado ou manipulado</b>, conforme a posologia clínica.</div>`}
          <p class="small muted" style="margin-top:8px">Medidas caseiras: 1 xícara de chá = 150 mL · 1 colher de sopa = 15 mL · 1 colher de chá = 5 mL.</p></div>
        <div data-p="mag" hidden><ul>${p.magistral.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
          <p class="small muted">Via: ${esc(p.via)} · Tempo máximo: ${esc(p.tempoMax)}</p></div>
      </div>` : ''}

      ${secoes.map(([k, t], i) => `<details class="sec" ${i < 4 ? 'open' : ''}><summary>${t}</summary><div class="in"><p>${esc(p.memento[k])}</p>${k === 'superdosagem' ? '<p><a class="btn danger small" href="tel:08007226001">☎ Disque-Intoxicação 0800 722 6001</a> <a class="btn danger small" href="tel:192">SAMU 192</a></p>' : ''}</div></details>`).join('')}
      <p class="disclaimer">Fonte: Memento Fitoterápico da Farmacopeia Brasileira, 1ª ed. (Anvisa, 2016). Classificação de alertas: curadoria da equipe a partir da monografia.</p>`;
    const gimg = main.querySelector('#gimg'), gal = main.querySelector('.gallery .main');
    let cur = 0;
    const setPhoto = i => {
      const f = slides[i]; if (!f) return;
      cur = i;
      gimg.src = f.src;
      gal.classList.toggle('is-capa', !!f.capa);
      if (!f.capa) main.querySelector('#gbg').style.backgroundImage = `url('${f.src}')`;
      main.querySelectorAll('.thumbs button').forEach((b, k) => b.setAttribute('aria-current', k === i));
      main.querySelector('#gcred').innerHTML = `${f.capa ? '' : 'Foto: '}${f.link ? `<a href="${esc(f.link)}" target="_blank" rel="noopener">${esc(f.credito)}</a>` : esc(f.credito)}${f.obs ? ' — ' + esc(f.obs) : ''}`;
    };
    // sem ilustração para esta espécie: remove o slide da capa e mostra a foto real
    gimg.addEventListener('error', () => {
      if (!slides[cur] || !slides[cur].capa) return;
      slides = slides.slice(1);
      main.querySelector('.thumbs').innerHTML = slides.map((f, i) => `<button type="button" data-i="${i}" aria-label="Foto ${i + 1}"><img loading="lazy" src="${f.src}" alt=""></button>`).join('');
      main.querySelector('.thumbs').hidden = slides.length < 2;
      setPhoto(0);
    });
    setPhoto(0);
    main.querySelector('.thumbs')?.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setPhoto(+b.dataset.i); });
    tabs(main.querySelector('.tabs'));
  };
  function tabs(el) {
    if (!el) return;
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-t]'); if (!b) return;
      el.querySelectorAll('[data-t]').forEach(x => x.setAttribute('aria-selected', x === b));
      el.parentElement.querySelectorAll('[data-p]').forEach(x => { x.hidden = x.dataset.p !== b.dataset.t; });
    });
  }

  // ---------- ATENDIMENTO ----------
  const CASOS = [
    { titulo: 'Climatério + hipertensão', pac: { nome: 'M.S.', idade: 52, sexo: 'F', peso: 72, altura: 160, pas: 150, pad: 95, fc: 82 }, cond: ['m_antihipertensivo'], queixa: 'fogacho', meds: 'Losartana 50 mg 1x/dia' },
    { titulo: 'HIV em TARV + resfriado', pac: { nome: 'J.P.', idade: 34, sexo: 'M', peso: 68, altura: 175, pas: 118, pad: 76, fc: 88, temp: 37.6 }, cond: ['hiv', 'm_antirretroviral'], queixa: 'resfriado', meds: 'Tenofovir + lamivudina + dolutegravir' },
    { titulo: 'Gestante com ansiedade', pac: { nome: 'A.C.', idade: 28, sexo: 'F', peso: 64, altura: 165, pas: 110, pad: 70, fc: 92 }, cond: ['gestante'], queixa: 'ansiedade', meds: 'Sulfato ferroso, ácido fólico' },
    { titulo: 'Idoso anticoagulado com dispepsia', pac: { nome: 'J.R.', idade: 71, sexo: 'M', peso: 54, altura: 170, pas: 135, pad: 85, fc: 56 }, cond: ['m_anticoag', 'm_digoxina', 'cardiopatia'], queixa: 'dispepsia', meds: 'Varfarina 5 mg, digoxina 0,25 mg, furosemida' }
  ];
  const emptyAtend = () => ({ pac: {}, cond: {}, queixa: '', meds: '', obs: '', rx: [] });
  function vitals(pac) {
    const out = { auto: {}, notes: [] };
    const idade = num(pac.idade), peso = num(pac.peso), alt = num(pac.altura), pas = num(pac.pas), pad = num(pac.pad), fc = num(pac.fc), glic = num(pac.glic), temp = num(pac.temp), spo2 = num(pac.spo2);
    if (idade != null && idade >= 60) out.auto.idoso = 1;
    if (peso && alt) {
      const m = alt > 3 ? alt / 100 : alt; const imc = peso / (m * m); out.imc = imc;
      if (idade != null && idade >= 60) out.imcClass = imc < 22 ? ['Baixo peso (idoso)', 'warn'] : imc <= 27 ? ['Eutrofia (idoso)', 'ok'] : ['Sobrepeso (idoso)', 'warn'];
      else out.imcClass = imc < 18.5 ? ['Baixo peso', 'warn'] : imc < 25 ? ['Peso adequado', 'ok'] : imc < 30 ? ['Sobrepeso', 'warn'] : imc < 35 ? ['Obesidade grau I', 'bad'] : imc < 40 ? ['Obesidade grau II', 'bad'] : ['Obesidade grau III', 'bad'];
      if (imc < 18.5 || (idade >= 60 && imc < 22)) out.auto.desnutricao = 1;
    }
    if (pas && pad) {
      let c;
      if (pas >= 180 || pad >= 110) c = ['HAS estágio 3', 'bad']; else if (pas >= 160 || pad >= 100) c = ['HAS estágio 2', 'bad'];
      else if (pas >= 140 || pad >= 90) c = ['HAS estágio 1', 'bad']; else if (pas < 90 || pad < 60) c = ['Hipotensão', 'warn'];
      else if (pas >= 130 || pad >= 85) c = ['Pré-hipertensão', 'warn']; else if (pas >= 120 || pad >= 80) c = ['PA normal', 'ok']; else c = ['PA ótima', 'ok'];
      out.paClass = c;
      if (pas >= 140 || pad >= 90) out.auto.has = 1;
      if (pas < 90 || pad < 60) out.auto.hipotensao = 1;
      if (pas >= 180 || pad >= 110) out.notes.push(['bad', 'PA ≥ 180/110 mmHg: avaliar urgência/emergência hipertensiva. Se houver dor no peito, falta de ar, déficit neurológico ou cefaleia intensa → SAMU 192.']);
    }
    if (fc) {
      out.fcClass = fc > 100 ? ['Taquicardia', 'warn'] : fc < 60 ? ['Bradicardia', 'warn'] : ['FC normal', 'ok'];
      if (fc > 100) out.auto.taquicardia = 1; if (fc < 60) out.auto.bradicardia = 1;
      if (fc > 150 || fc < 40) out.notes.push(['bad', 'Frequência cardíaca crítica: avaliar imediatamente / SAMU 192.']);
    }
    if (glic) {
      out.glicClass = glic < 70 ? ['Hipoglicemia', 'bad'] : glic >= 200 ? ['Hiperglicemia', 'bad'] : glic >= 100 ? ['Glicemia elevada', 'warn'] : ['Glicemia normal', 'ok'];
      if (glic >= 200 || glic < 70) out.auto.diabetes = 1;
      if (glic < 54) out.notes.push(['bad', 'Glicemia < 54 mg/dL: hipoglicemia grave — tratar imediatamente.']);
    }
    if (temp) { out.tempClass = temp >= 37.8 ? ['Febre', 'warn'] : temp < 35 ? ['Hipotermia', 'bad'] : ['Afebril', 'ok']; if (temp >= 39.5) out.notes.push(['warn', 'Febre alta: investigar causa antes de indicar fitoterápico.']); }
    if (spo2) { out.spo2Class = spo2 < 90 ? ['Hipoxemia grave', 'bad'] : spo2 < 95 ? ['SpO₂ baixa', 'warn'] : ['SpO₂ normal', 'ok']; if (spo2 < 90) out.notes.push(['bad', 'SpO₂ < 90%: emergência — SAMU 192.']); }
    return out;
  }
  function avaliar(p, st, v) {
    const ativos = { ...v.auto, ...Object.fromEntries(Object.entries(st.cond).filter(([, on]) => on)) };
    const motivos = [];
    for (const [k, [nv, txt]] of Object.entries(p.riscos)) if (ativos[k]) motivos.push([nv, `${COND[k] || k}: ${txt}`]);
    const idade = num(st.pac.idade);
    if (p.idade && idade != null && idade < p.idade.min) motivos.push([p.idade.nivel, `Idade (${idade} anos): ${p.idade.txt}`]);
    motivos.sort((a, b) => a[0] === b[0] ? 0 : a[0] === 'c' ? -1 : 1);
    const status = motivos.some(m => m[0] === 'c') ? 'bad' : motivos.length ? 'warn' : 'ok';
    return { status, motivos };
  }

  routes.atendimento = (r) => {
    setTitle('Atendimento');
    let st = store.get('atend', emptyAtend());
    if (r.q.get('p') && byId[r.q.get('p')]) st.foco = r.q.get('p');
    const prof = store.get('prof', { nome: '', registro: '', local: '' });
    const V = (k) => esc(st.pac[k] ?? '');
    main.innerHTML = `
      <div class="page-head"><h1>Atendimento clínico</h1><p>Registre os dados do paciente, a queixa e veja quais espécies são compatíveis, exigem atenção ou estão contraindicadas.</p></div>
      <div class="card callout info small">🔒 Os dados ficam <b>apenas neste aparelho</b> (não são enviados a servidor). Use iniciais em vez do nome completo (LGPD).</div>
      <div class="card sec"><div class="btn-row" style="align-items:center"><b class="small">Casos clínicos de exemplo:</b>${CASOS.map((c, i) => `<button class="chip" type="button" data-caso="${i}">${esc(c.titulo)}</button>`).join('')}<button class="btn ghost small" type="button" id="novo">↺ Novo atendimento</button></div></div>

      <form id="fAtend" class="stack sec" autocomplete="off" onsubmit="return false">
        <div class="card">
          <h2>1. Paciente e sinais vitais</h2>
          <div class="fields">
            <div class="field" style="grid-column:span 2"><label for="nome">Paciente (iniciais)</label><input id="nome" name="nome" type="text" value="${V('nome')}"></div>
            <div class="field"><label for="idade">Idade (anos)</label><input id="idade" name="idade" type="number" inputmode="numeric" min="0" max="120" value="${V('idade')}"></div>
            <div class="field"><label for="sexo">Sexo</label><select id="sexo" name="sexo"><option value="">—</option><option value="F" ${st.pac.sexo === 'F' ? 'selected' : ''}>Feminino</option><option value="M" ${st.pac.sexo === 'M' ? 'selected' : ''}>Masculino</option><option value="O" ${st.pac.sexo === 'O' ? 'selected' : ''}>Outro</option></select></div>
            <div class="field"><label for="peso">Peso (kg)</label><input id="peso" name="peso" type="number" inputmode="decimal" step="0.1" value="${V('peso')}"></div>
            <div class="field"><label for="altura">Altura (cm)</label><input id="altura" name="altura" type="number" inputmode="decimal" value="${V('altura')}"></div>
            <div class="field"><label for="pas">PA sistólica (mmHg)</label><input id="pas" name="pas" type="number" inputmode="numeric" value="${V('pas')}"></div>
            <div class="field"><label for="pad">PA diastólica (mmHg)</label><input id="pad" name="pad" type="number" inputmode="numeric" value="${V('pad')}"></div>
            <div class="field"><label for="fc">Freq. cardíaca (bpm)</label><input id="fc" name="fc" type="number" inputmode="numeric" value="${V('fc')}"></div>
            <div class="field"><label for="glic">Glicemia (mg/dL)</label><input id="glic" name="glic" type="number" inputmode="numeric" value="${V('glic')}"></div>
            <div class="field"><label for="temp">Temperatura (°C)</label><input id="temp" name="temp" type="number" inputmode="decimal" step="0.1" value="${V('temp')}"></div>
            <div class="field"><label for="spo2">SpO₂ (%)</label><input id="spo2" name="spo2" type="number" inputmode="numeric" value="${V('spo2')}"></div>
          </div>
          <div id="vsum" class="vitals-sum sec"></div>
          <div id="vnotes"></div>
        </div>
        ${COND_GROUPS.map(([g, items], gi) => `
          <details class="sec" ${gi < 2 ? 'open' : ''}><summary>${gi + 2}. ${g}</summary><div class="in">
            <div class="checks">${Object.entries(items).map(([k, l]) => `<label class="check" data-k="${k}"><input type="checkbox" name="c_${k}" ${st.cond[k] ? 'checked' : ''}><span>${esc(l)}<span class="auto-tag small muted"></span></span></label>`).join('')}</div>
            ${g === 'Medicamentos em uso' ? `<div class="field sec"><label for="meds">Medicamentos (nome, dose, posologia)</label><textarea id="meds" name="meds">${esc(st.meds)}</textarea></div>` : ''}
          </div></details>`).join('')}
        <div class="card">
          <h2>6. Queixa principal</h2>
          <div class="field"><label for="queixa">Sintoma / queixa</label><input id="queixa" name="queixa" type="search" placeholder="Ex.: ansiedade, dispepsia, tosse, insônia…" value="${esc(st.queixa)}"></div>
          <div class="chips sec">${['ansiedade', 'insônia', 'dispepsia', 'náusea', 'constipação', 'diarreia', 'resfriado', 'tosse', 'fogacho', 'dor articular', 'varizes', 'ferida', 'gengivite', 'cansaço', 'próstata', 'zumbido'].map(s => `<button type="button" class="chip" data-q="${esc(s)}">${esc(s)}</button>`).join('')}</div>
          <div class="field sec"><label for="obs">Observações clínicas</label><textarea id="obs" name="obs" placeholder="Anamnese, exame físico, conduta…">${esc(st.obs)}</textarea></div>
        </div>
      </form>

      <section class="card sec" id="resultado" aria-live="polite"></section>
      <section class="card sec" id="receita"></section>`;

    const form = main.querySelector('#fAtend');
    const save = () => store.set('atend', st);
    const readForm = () => {
      const fd = new FormData(form);
      ['nome', 'idade', 'sexo', 'peso', 'altura', 'pas', 'pad', 'fc', 'glic', 'temp', 'spo2'].forEach(k => { st.pac[k] = fd.get(k) || ''; });
      st.cond = {}; for (const k of Object.keys(COND)) if (fd.get('c_' + k)) st.cond[k] = 1;
      st.queixa = fd.get('queixa') || ''; st.meds = fd.get('meds') || ''; st.obs = fd.get('obs') || '';
      const nm = Object.keys(st.cond).filter(k => k.startsWith('m_')).length;
      if (nm >= 5) st.cond.polifarmacia = 1;
    };
    const renderAll = () => { renderVitals(); renderResults(); renderRx(); };
    const renderVitals = () => {
      const v = vitals(st.pac);
      const cell = (t, val, c) => c ? `<div><span class="small muted">${t}</span><b>${val}</b><span class="badge ${c[1]}">${c[0]}</span></div>` : '';
      main.querySelector('#vsum').innerHTML =
        cell('IMC', v.imc ? fmt(v.imc) + ' kg/m²' : '', v.imcClass) + cell('Pressão arterial', `${esc(st.pac.pas)}/${esc(st.pac.pad)} mmHg`, v.paClass) +
        cell('Freq. cardíaca', esc(st.pac.fc) + ' bpm', v.fcClass) + cell('Glicemia', esc(st.pac.glic) + ' mg/dL', v.glicClass) +
        cell('Temperatura', esc(st.pac.temp) + ' °C', v.tempClass) + cell('SpO₂', esc(st.pac.spo2) + '%', v.spo2Class);
      main.querySelector('#vnotes').innerHTML = v.notes.map(([c, t]) => `<div class="callout ${c} sec">⚠ ${esc(t)}</div>`).join('');
      main.querySelectorAll('.check[data-k]').forEach(l => {
        const k = l.dataset.k, on = !!v.auto[k];
        l.classList.toggle('auto', on);
        l.querySelector('.auto-tag').textContent = on ? ' · detectado pelos dados' : '';
      });
      const isF = st.pac.sexo === 'F' || !st.pac.sexo;
      ['gestante', 'lactante', 'menstruacao'].forEach(k => { const el = main.querySelector(`.check[data-k="${k}"]`); if (el) el.style.display = isF ? '' : 'none'; });
      const pr = main.querySelector('.check[data-k="cancer_prostata"]'); if (pr) pr.style.display = st.pac.sexo === 'F' ? 'none' : '';
    };
    const renderResults = () => {
      const v = vitals(st.pac);
      const box = main.querySelector('#resultado');
      const q = st.queixa.trim();
      let lista = q ? search(q, { therapeuticOnly: true }).map(x => x.p) : [];
      if (st.foco && !lista.includes(byId[st.foco])) lista.unshift(byId[st.foco]);
      const showAll = box.dataset.all === '1';
      const base = (showAll || !lista.length) ? PLANTAS : lista;
      const avals = base.map(p => ({ p, ...avaliar(p, st, v) }));
      const order = { ok: 0, warn: 1, bad: 2 };
      avals.sort((a, b) => order[a.status] - order[b.status] || a.p.nome.localeCompare(b.p.nome));
      const n = s => avals.filter(a => a.status === s).length;
      const ativos = [...Object.keys(v.auto), ...Object.keys(st.cond)].filter((k, i, arr) => arr.indexOf(k) === i);
      box.innerHTML = `
        <h2>Resultado da triagem ${q && !showAll ? `para "${esc(q)}"` : '(todas as espécies)'}</h2>
        <p class="small muted">Fatores considerados: ${ativos.length ? ativos.map(k => esc(COND[k] || k)).join(', ') : 'nenhum marcado'}${st.pac.idade ? ` · idade ${esc(st.pac.idade)} anos` : ''}.</p>
        <div class="badges sec"><span class="badge ok">✔ ${n('ok')} compatível(is)</span><span class="badge warn">⚠ ${n('warn')} com atenção</span><span class="badge bad">⛔ ${n('bad')} contraindicada(s)</span></div>
        ${q && !lista.length ? `<div class="callout warn sec">Nenhuma espécie do Memento tem indicação para "${esc(q)}". Mostrando a triagem de segurança de todas.</div>` : ''}
        ${q && n('ok') === 0 && lista.length && !showAll ? `<div class="callout bad sec"><strong class="t">Nenhuma opção segura para este paciente.</strong>Considere medidas não farmacológicas, outra abordagem terapêutica ou encaminhamento.</div>` : ''}
        <div class="sec">${avals.map(({ p, status, motivos }) => `
          <div class="result ${status}">
            <span class="st" aria-hidden="true">${status === 'ok' ? '✔' : status === 'warn' ? '!' : '⛔'}</span>
            <div style="flex:1">
              <h3><a href="#/planta/${p.id}">${esc(p.nome)}</a> <span class="sci small">${esc(p.cientifico)}</span></h3>
              <div class="small muted">${esc(p.memento.indicacoes.slice(0, 140))}${p.memento.indicacoes.length > 140 ? '…' : ''}</div>
              ${motivos.length ? `<ul>${motivos.map(([nv, t]) => `<li><span class="badge ${nv === 'c' ? 'bad' : 'warn'}">${nv === 'c' ? 'Contraindicado' : 'Atenção'}</span> ${esc(t)}</li>`).join('')}</ul>` : '<div class="small" style="color:var(--ok)">Sem contraindicações para os dados informados.</div>'}
              ${status !== 'bad' ? `<div class="btn-row" style="margin-top:6px"><button class="btn small" type="button" data-rx="${p.id}">+ Prescrever</button>${p.calc.length ? `<a class="btn ghost small" href="#/calculadora?p=${p.id}">Calcular</a>` : ''}</div>` : ''}
            </div>
          </div>`).join('')}</div>
        ${q && lista.length ? `<p class="sec"><button class="btn ghost small" type="button" id="toggleAll">${showAll ? 'Mostrar só as indicadas para a queixa' : 'Ver triagem de todas as 28 espécies'}</button></p>` : ''}`;
    };
    const rxOptions = p => [
      ...p.calc.map(c => c.nome), ...(p.populacao.length ? ['Preparo caseiro (ver orientação)'] : []), ...p.magistral, 'Outro (descrever)'
    ];
    const renderRx = () => {
      const box = main.querySelector('#receita');
      const v = vitals(st.pac);
      if (!st.rx.length) { box.innerHTML = '<h2>Receituário</h2><p class="muted">Clique em <b>+ Prescrever</b> em uma espécie compatível para montar a receita.</p>'; return; }
      box.innerHTML = `
        <h2>Receituário</h2>
        <div class="fields">
          <div class="field" style="grid-column:span 2"><label for="pnome">Profissional</label><input id="pnome" data-prof="nome" type="text" value="${esc(prof.nome)}"></div>
          <div class="field"><label for="preg">Registro (CRM/COREN/CRF/CRN)</label><input id="preg" data-prof="registro" type="text" value="${esc(prof.registro)}"></div>
          <div class="field"><label for="ploc">Unidade / local</label><input id="ploc" data-prof="local" type="text" value="${esc(prof.local)}"></div>
        </div>
        ${st.rx.map((it, i) => { const p = byId[it.id]; const a = avaliar(p, st, v); return `
          <div class="card sec" data-i="${i}">
            <div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><h3>${i + 1}. ${esc(p.nome)} <span class="sci small">${esc(p.cientifico)}</span></h3><button class="btn ghost small" type="button" data-del="${i}" aria-label="Remover">✕</button></div>
            <div class="fields">
              <div class="field" style="grid-column:1/-1"><label>Forma / preparo</label><select data-k="forma">${rxOptions(p).map(o => `<option ${o === it.forma ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select></div>
              <div class="field" style="grid-column:1/-1"><label>Posologia</label><textarea data-k="posologia">${esc(it.posologia)}</textarea></div>
              <div class="field"><label>Duração</label><input type="text" data-k="duracao" value="${esc(it.duracao)}"></div>
              <div class="field"><label>Via</label><input type="text" data-k="via" value="${esc(it.via)}"></div>
            </div>
            <p class="small muted" style="margin-top:6px">Tempo máximo (Memento): ${esc(p.tempoMax)}</p>
            ${a.motivos.length ? `<div class="callout warn small">${a.motivos.map(m => esc(m[1])).join('<br>')}</div>` : ''}
          </div>`; }).join('')}
        <div class="btn-row sec"><button class="btn" type="button" id="btnPrint">🖨 Imprimir / salvar PDF</button><button class="btn ghost" type="button" id="share">↗ Compartilhar texto</button></div>`;
    };
    const rxText = () => {
      const v = vitals(st.pac); const d = new Date().toLocaleDateString('pt-BR');
      let t = `RECEITUÁRIO — FITOTERAPIA\nPaciente: ${st.pac.nome || '—'}  Idade: ${st.pac.idade || '—'}  Data: ${d}\n`;
      if (v.imc || st.pac.pas) t += `PA: ${st.pac.pas || '—'}/${st.pac.pad || '—'} mmHg · FC: ${st.pac.fc || '—'} bpm · Peso: ${st.pac.peso || '—'} kg · IMC: ${v.imc ? fmt(v.imc) : '—'}\n`;
      st.rx.forEach((it, i) => { const p = byId[it.id]; t += `\n${i + 1}. ${p.nome} (${p.cientifico}) — ${p.parte}\n   ${it.forma}\n   ${it.via}. ${it.posologia}\n   Duração: ${it.duracao}\n`; });
      t += `\nSuspender o uso e procurar atendimento se houver reação adversa. Intoxicação: Disque-Intoxicação 0800 722 6001 · SAMU 192.\n${prof.nome || ''} ${prof.registro ? '— ' + prof.registro : ''}`;
      return t;
    };
    const printRx = () => {
      const v = vitals(st.pac); const d = new Date().toLocaleDateString('pt-BR');
      document.getElementById('print').innerHTML = `
        <div class="rx-head"><h1>Receituário — Fitoterapia</h1><div>${esc(prof.local || '')}</div></div>
        <p><b>Paciente:</b> ${esc(st.pac.nome || '________________')} &nbsp; <b>Idade:</b> ${esc(st.pac.idade || '—')} &nbsp; <b>Data:</b> ${d}</p>
        <p style="font-size:10pt">PA ${esc(st.pac.pas || '—')}/${esc(st.pac.pad || '—')} mmHg · FC ${esc(st.pac.fc || '—')} bpm · Peso ${esc(st.pac.peso || '—')} kg · Altura ${esc(st.pac.altura || '—')} cm · IMC ${v.imc ? fmt(v.imc) : '—'}</p>
        <p><b>Uso ${esc([...new Set(st.rx.map(x => x.via.split(' ')[0].toLowerCase()))].join(' / '))}</b></p>
        ${st.rx.map((it, i) => { const p = byId[it.id]; return `<div class="rx-item"><b>${i + 1}. ${esc(p.nome)}</b> (<i>${esc(p.cientifico)}</i>) — ${esc(p.parte)}<br>${esc(it.forma)}<br>${esc(it.posologia)}<br>Duração: ${esc(it.duracao)}</div>`; }).join('')}
        <div class="rx-alert"><b>Orientações:</b> não exceder a dose; suspender e procurar o serviço de saúde em caso de reação adversa; informar o uso de fitoterápicos em consultas e antes de cirurgias. Intoxicação: Disque-Intoxicação 0800 722 6001 · SAMU 192.</div>
        <div class="rx-sign"><div>${esc(prof.nome || 'Assinatura e carimbo')}<br>${esc(prof.registro || '')}</div></div>
        <div class="rx-foot">Gerado pelo FitoTech - UFAM com base no Memento Fitoterápico da Farmacopeia Brasileira (Anvisa, 2016).</div>`;
      window.print();
    };

    form.addEventListener('input', debounce(() => { readForm(); save(); renderAll(); }, 250));
    form.addEventListener('change', () => { readForm(); save(); renderAll(); });
    main.addEventListener('click', e => {
      const t = e.target;
      if (t.dataset.q) { form.queixa.value = t.dataset.q; readForm(); save(); renderResults(); main.querySelector('#resultado').scrollIntoView({ behavior: 'smooth' }); }
      if (t.dataset.caso) { const c = CASOS[+t.dataset.caso]; st = { ...emptyAtend(), pac: { ...c.pac }, cond: Object.fromEntries(c.cond.map(k => [k, 1])), queixa: c.queixa, meds: c.meds }; save(); go(); }
      if (t.id === 'novo') { if (confirm('Limpar os dados deste atendimento?')) { store.set('atend', emptyAtend()); history.replaceState(null, '', '#/atendimento'); go(); } }
      if (t.id === 'toggleAll') { const b = main.querySelector('#resultado'); b.dataset.all = b.dataset.all === '1' ? '0' : '1'; renderResults(); }
      if (t.dataset.rx) {
        const p = byId[t.dataset.rx]; const opts = rxOptions(p);
        st.rx.push({ id: p.id, forma: opts[0], posologia: p.calc[0] ? p.calc[0].freq : (p.magistral[0] || ''), duracao: p.tempoMax, via: p.via });
        save(); renderRx(); main.querySelector('#receita').scrollIntoView({ behavior: 'smooth' });
      }
      if (t.dataset.del) { st.rx.splice(+t.dataset.del, 1); save(); renderRx(); }
      if (t.id === 'btnPrint') printRx();
      if (t.id === 'share') {
        const txt = rxText();
        if (navigator.share) navigator.share({ title: 'Receituário fitoterápico', text: txt }).catch(() => {});
        else navigator.clipboard?.writeText(txt).then(() => alert('Texto copiado.'));
      }
    });
    main.querySelector('#receita').addEventListener('input', e => {
      const el = e.target;
      if (el.dataset.prof) { prof[el.dataset.prof] = el.value; store.set('prof', prof); return; }
      const card = el.closest('[data-i]'); if (!card || !el.dataset.k) return;
      st.rx[+card.dataset.i][el.dataset.k] = el.value; save();
    });
    renderAll();
  };

  // ---------- CALCULADORA ----------
  const PREP = {
    infusao: ['Ferva a água e desligue o fogo.', 'Despeje a água sobre a planta (ou coloque a planta na água recém-fervida).', 'Tampe e deixe em repouso por 5 a 15 minutos (abafado).', 'Coe e use em seguida. Não reaproveite a planta; descarte o chá após 24 h.'],
    decoccao: ['Coloque a planta (raízes, cascas, partes duras) na água fria.', 'Leve ao fogo e ferva em fogo baixo por 10 a 20 minutos, com a panela tampada.', 'Desligue, deixe repousar 10–15 min e coe.', 'Complete com água até o volume inicial, se necessário. Usar em até 24 h.'],
    tintura: ['Meça a tintura com seringa dosadora ou copo graduado.', 'Dilua no volume de água indicado.', 'Use imediatamente após a diluição.'],
    droga: ['Usar a droga vegetal pesada em balança (cápsulas manipuladas ou pó).', 'Respeitar a dose diária total e o número de tomadas.']
  };
  const CH = 1, SOPA = 3; // g por colher (chá/sopa) — equivalência do Memento (Lippia: 2–3 colheres de chá ≈ 2–3 g)

  // ---- avaliação de risco conforme a dose informada ----
  const DIAS_OVR = { 'lippia-sidoides': 30 };
  function diasMax(p) {
    if (DIAS_OVR[p.id]) return DIAS_OVR[p.id];
    const m = p.tempoMax.match(/(\d+)(?:\s*a\s*(\d+))?\s*(dia|semana|m[eê]s|meses|ano)/i);
    if (!m) return null;
    const n = +(m[2] || m[1]), u = norm(m[3]);
    return n * (u.startsWith('dia') ? 1 : u.startsWith('semana') ? 7 : u.startsWith('ano') ? 365 : 30);
  }
  const maxVezes = freq => { const ns = (freq.match(/\d+/g) || []).map(Number).filter(n => n <= 8); return ns.length ? Math.max(...ns) : null; };
  function riscoDose(p, c, { dose, vez, dias, fresca }) {
    const it = []; // [nível, texto]
    const faixa = c.tipo === 'tintura' ? c.mlT : c.g;
    const un = c.tipo === 'tintura' ? 'mL' : 'g';
    const por = c.tipo === 'droga' ? 'por dia' : 'por dose';
    if (faixa && dose) {
      const [mn, mx] = faixa;
      if (dose < mn) it.push(['warn', `<b>Dose abaixo</b> da faixa do Memento (${fmt(mn)}–${fmt(mx)} ${un} ${por}): pode não ter efeito terapêutico.`]);
      else if (dose <= mx) it.push(['ok', `Dose dentro da faixa do Memento (${fmt(mn)}–${fmt(mx)} ${un} ${por}).`]);
      else {
        const r = dose / mx;
        it.push([r > 1.5 ? 'bad' : 'warn', `<b>Dose ${fmt((r - 1) * 100, 0)}% acima do máximo</b> (${fmt(mx)} ${un} ${por}). Risco de superdosagem — ${esc(p.memento.superdosagem)}`]);
      }
      if (faixa && dose && vez) it.push(['info', `Total diário: <b>${fmt(dose * vez, 2)} ${un}</b>${c.tipo === 'droga' ? '' : ` (${vez}× ${fmt(dose, 2)} ${un})`}.`]);
    }
    const mv = c.tipo === 'droga' ? null : maxVezes(c.freq);
    if (mv && vez > mv) it.push(['bad', `<b>${vez} doses por dia</b> excede o máximo previsto (${mv}/dia: ${esc(c.freq)}). A dose diária total fica acima do recomendado.`]);
    const dm = diasMax(p);
    if (dias) {
      const naoEstab = /n[ãa]o estabelecido/i.test(p.tempoMax);
      if (dm && dias > dm && naoEstab) it.push(['warn', `<b>${fmt(dias, 0)} dias</b> excede o período avaliado em estudo (${esc(p.tempoMax)}). Reavaliar o paciente.`]);
      else if (dm && dias > dm) it.push(['bad', `<b>${fmt(dias, 0)} dias</b> ultrapassa o tempo máximo de uso (${esc(p.tempoMax)}). ${esc(p.memento.tempo)}`]);
      else if (dm) it.push(['ok', `Duração dentro do tempo máximo (${esc(p.tempoMax)}).`]);
      else it.push(['warn', `Tempo máximo de uso não estabelecido no Memento — reavaliar o paciente periodicamente.`]);
    }
    if (fresca) it.push(['warn', 'Planta fresca: o teor de água e de princípios ativos varia; a conversão (×3) é uma estimativa. Prefira a droga vegetal seca.']);
    const contra = Object.entries(p.riscos).filter(([, v]) => v[0] === 'c');
    const atenc = Object.entries(p.riscos).filter(([, v]) => v[0] === 'a');
    // paciente em atendimento (se houver dados preenchidos)
    const st = store.get('atend', null);
    let pac = '';
    if (st && st.pac && (st.pac.idade || Object.keys(st.cond || {}).length)) {
      const a = avaliar(p, st, vitals(st.pac));
      const lab = { ok: ['ok', '✔ Sem contraindicações para o paciente em atendimento'], warn: ['warn', '⚠ Paciente em atendimento: usar com atenção'], bad: ['bad', '⛔ CONTRAINDICADO para o paciente em atendimento'] }[a.status];
      if (a.status === 'bad') it.push(['bad', 'Paciente em atendimento possui contraindicação para esta espécie.']);
      else if (a.status === 'warn') it.push(['warn', 'Paciente em atendimento requer cautela com esta espécie.']);
      pac = `<div class="callout ${lab[0]} sec small"><strong class="t">${lab[1]}${st.pac.nome ? ` (${esc(st.pac.nome)}${st.pac.idade ? ', ' + esc(st.pac.idade) + ' anos' : ''})` : ''}</strong>${a.motivos.map(m => esc(m[1])).join('<br>')}</div>`;
    }
    const nivel = it.some(x => x[0] === 'bad') ? 'bad' : it.some(x => x[0] === 'warn') ? 'warn' : 'ok';
    const titulo = { ok: '✔ Dose e duração dentro dos parâmetros do Memento', warn: '⚠ Atenção à dose ou ao uso', bad: '⛔ Risco elevado — revise a prescrição' }[nivel];
    const ico = { ok: '✔', warn: '⚠', bad: '⛔', info: 'ℹ' };
    return `
      <div class="risk sec">
        <div class="callout ${nivel}"><strong class="t">${titulo}</strong>
          <ul class="clean small">${it.map(([n, t]) => `<li class="r-${n}">${ico[n]} ${t}</li>`).join('')}</ul>
          ${nivel === 'bad' ? '<p class="small" style="margin:8px 0 0">Em caso de ingestão acima do recomendado: <a href="tel:08007226001"><b>Disque-Intoxicação 0800 722 6001</b></a> · <a href="tel:192"><b>SAMU 192</b></a></p>' : ''}
        </div>
        ${pac}
        <details class="sec risk-ci" ${contra.length ? 'open' : ''}><summary>Contraindicações e cuidados — confirme antes de orientar</summary>
          <ul class="clean small">
            ${contra.map(([k, v]) => `<li><span class="badge bad">Contraindicado</span> <b>${esc(COND[k] || k)}</b> — ${esc(v[1])}</li>`).join('')}
            ${p.idade ? `<li><span class="badge ${p.idade.nivel === 'c' ? 'bad' : 'warn'}">Idade</span> ${esc(p.idade.txt)}</li>` : ''}
            ${atenc.map(([k, v]) => `<li><span class="badge warn">Atenção</span> <b>${esc(COND[k] || k)}</b> — ${esc(v[1])}</li>`).join('')}
            ${!contra.length && !atenc.length && !p.idade ? `<li>${esc(p.memento.contraindicacoes)}</li>` : ''}
          </ul></details>
      </div>`;
  }
  routes.calculadora = (r) => {
    setTitle('Calculadora');
    const plantasCalc = PLANTAS.filter(p => p.calc.length);
    const pid = r.q.get('p') && byId[r.q.get('p')]?.calc.length ? r.q.get('p') : '';
    main.innerHTML = `
      <div class="page-head"><h1>Calculadora de posologia e preparo</h1><p>Quantidade de planta seca ou fresca por volume de água, diluição de tinturas e dose total do tratamento — com base no Memento.</p></div>
      <div class="grid grid-2">
        <div class="card stack">
          <div class="field"><label for="cp">Espécie</label><select id="cp"><option value="">Personalizado (regra de três)</option>${plantasCalc.map(p => `<option value="${p.id}" ${p.id === pid ? 'selected' : ''}>${esc(p.nome)} — ${esc(p.cientifico)}</option>`).join('')}</select></div>
          <div id="cin"></div>
        </div>
        <div class="card calc-out" id="cout" aria-live="polite"></div>
      </div>
      <div class="card sec small muted">
        <b>Medidas de referência:</b> 1 xícara de chá = 150 mL · 1 copo americano = 190 mL · 1 colher de sopa = 15 mL · 1 colher de chá = 5 mL · 1 mL ≈ 20 gotas.
        Massa aproximada de erva seca rasurada: 1 colher de chá ≈ 1 g; 1 colher de sopa ≈ 3 g (varia com a planta — prefira balança).
        Planta fresca: usar ≈ 3 vezes a massa da planta seca (estimativa pelo teor de água).</div>`;
    const sel = main.querySelector('#cp'), cin = main.querySelector('#cin'), cout = main.querySelector('#cout');
    let s = {};
    const build = () => {
      const p = byId[sel.value];
      if (!p) {
        s = { custom: true, g: 2, ml: 150, alvo: 500 };
        cin.innerHTML = `<p class="small muted">Informe a receita de referência e o volume que deseja preparar.</p>
          <div class="fields"><div class="field"><label for="cg">Planta (g)</label><input id="cg" type="number" step="0.1" value="2"></div>
          <div class="field"><label for="cml">Água (mL)</label><input id="cml" type="number" value="150"></div>
          <div class="field"><label for="calvo">Quero preparar (mL)</label><input id="calvo" type="number" value="500"></div></div>
          <label class="check sec"><input type="checkbox" id="cfresca"><span>Usar planta fresca</span></label>`;
      } else {
        s = { p, i: 0 };
        cin.innerHTML = `
          <div class="field"><label for="cpre">Preparação</label><select id="cpre">${p.calc.map((c, i) => `<option value="${i}">${esc(c.nome)}</option>`).join('')}</select></div>
          <div id="cdyn"></div>`;
        buildPreset();
        cin.querySelector('#cpre').addEventListener('change', e => { s.i = +e.target.value; buildPreset(); calc(); });
      }
      calc();
    };
    const buildPreset = () => {
      const c = s.p.calc[s.i]; const d = cin.querySelector('#cdyn');
      const freqN = parseInt((c.freq.match(/\d+/) || ['1'])[0], 10);
      if (c.tipo === 'tintura') {
        d.innerHTML = `<div class="fields sec"><div class="field"><label for="cdose">Tintura por dose (mL)</label><input id="cdose" type="number" step="0.5" min="${c.mlT[0]}" max="${c.mlT[1]}" value="${c.mlT[0]}"></div>
          <div class="field"><label for="cml">Água (mL)</label><input id="cml" type="number" value="${c.ml}"></div>
          <div class="field"><label for="cvez">Vezes ao dia</label><input id="cvez" type="number" min="1" max="6" value="${freqN}"></div>
          <div class="field"><label for="cdias">Dias de tratamento</label><input id="cdias" type="number" min="1" value="7"></div></div>`;
      } else if (c.tipo === 'droga') {
        d.innerHTML = `<div class="fields sec"><div class="field"><label for="cdose">Dose diária (g)</label><input id="cdose" type="number" step="0.1" min="${c.g[0]}" max="${c.g[1]}" value="${c.g[0]}"></div>
          <div class="field"><label for="ccap">Cápsula de (mg)</label><input id="ccap" type="number" step="50" value="500"></div>
          <div class="field"><label for="cdias">Dias de tratamento</label><input id="cdias" type="number" min="1" value="7"></div></div>`;
      } else {
        const g = c.g || [null, null];
        d.innerHTML = `<div class="fields sec">
          <div class="field"><label for="cdose">Planta seca por dose (g)</label><input id="cdose" type="number" step="0.1" ${g[0] != null ? `min="${g[0]}" max="${g[1]}" value="${g[0]}"` : 'value="" placeholder="informar"'}></div>
          <div class="field"><label for="cml">Água por dose (mL)</label><input id="cml" type="number" value="${c.ml}"></div>
          <div class="field"><label for="cvez">Doses por dia</label><input id="cvez" type="number" min="1" max="6" value="${freqN}"></div>
          <div class="field"><label for="cdias">Dias de tratamento</label><input id="cdias" type="number" min="1" value="7"></div></div>
          <label class="check sec"><input type="checkbox" id="cfresca"><span>Vou usar planta <b>fresca</b></span></label>`;
      }
    };
    const val = id => num(cin.querySelector('#' + id)?.value);
    const calc = () => {
      if (s.custom) {
        const g = val('cg'), ml = val('cml'), alvo = val('calvo'), fresca = cin.querySelector('#cfresca')?.checked;
        if (!g || !ml || !alvo) { cout.innerHTML = '<p class="muted">Preencha os campos.</p>'; return; }
        const need = g / ml * alvo * (fresca ? 3 : 1);
        cout.innerHTML = `<h2>Resultado</h2><p>Para <b>${fmt(alvo, 0)} mL</b> use</p><p class="big">${fmt(need, 2)} g</p>
          <p>de planta ${fresca ? 'fresca' : 'seca'} (≈ ${fmt(need / SOPA, 1)} colher(es) de sopa).</p>
          <p class="small muted">Concentração: ${fmt(g / ml * 100, 2)}% (p/v) — ${fmt(g, 2)} g em ${fmt(ml, 0)} mL.</p>`;
        return;
      }
      const p = s.p, c = p.calc[s.i];
      const vez = val('cvez') || 1, dias = val('cdias') || 1;
      let html = `<h2>${esc(p.nome)}</h2><p class="small muted">${esc(c.nome)} · ${esc(c.freq)}</p>`;
      if (c.tipo === 'tintura') {
        const dose = val('cdose'), ml = val('cml');
        html += `<p>Em cada dose:</p><p class="big">${fmt(dose, 1)} mL de tintura</p><p>(≈ ${fmt(dose * 20, 0)} gotas) diluídos em <b>${fmt(ml, 0)} mL de água</b>.</p>
          <p>Por dia: ${fmt(dose * vez, 1)} mL · Tratamento (${fmt(dias, 0)} dias): <b>${fmt(dose * vez * dias, 0)} mL</b> de tintura.</p>`;
      } else if (c.tipo === 'droga') {
        const dose = val('cdose'), cap = val('ccap') || 500;
        html += `<p>Dose diária:</p><p class="big">${fmt(dose, 2)} g</p><p>= ${fmt(dose * 1000 / cap, 1)} cápsula(s) de ${fmt(cap, 0)} mg por dia.</p>
          <p>Tratamento (${fmt(dias, 0)} dias): <b>${fmt(dose * dias, 1)} g</b> de droga vegetal.</p>`;
      } else {
        const dose = val('cdose'), ml = val('cml') || c.ml, fresca = cin.querySelector('#cfresca')?.checked;
        if (!dose) { cout.innerHTML = html + `<div class="callout warn">${c.g ? 'Informe a dose.' : 'O Memento não fixa a massa de planta para este preparo. Informe a quantidade conforme o Formulário Fitoterápico da Farmacopeia Brasileira ou orientação do prescritor.'}</div>`; return; }
        const m = dose * (fresca ? 3 : 1);
        html += `<p>Em cada dose:</p><p class="big">${fmt(m, 2)} g</p>
          <p>de planta ${fresca ? '<b>fresca</b>' : 'seca'} (≈ ${fmt(m / CH, 1)} colher(es) de chá ou ${fmt(m / SOPA, 1)} de sopa) em <b>${fmt(ml, 0)} mL</b> de água.</p>
          <p class="small muted">Concentração: ${fmt(dose / ml * 100, 2)}% (p/v) de planta seca.</p>
          <div class="callout info"><b>Preparando o dia todo de uma vez:</b> ${fmt(m * vez, 1)} g em ${fmt(ml * vez, 0)} mL (${vez} dose${vez > 1 ? 's' : ''} de ${fmt(ml, 0)} mL). Guardar em garrafa térmica e consumir em até 24 h.</div>
          <p class="sec">Tratamento (${fmt(dias, 0)} dias): <b>${fmt(m * vez * dias, 0)} g</b> de planta ${fresca ? 'fresca' : 'seca'}.</p>`;
        if (c.mlObs) html += `<p class="small muted">${esc(c.mlObs)}</p>`;
      }
      html += riscoDose(p, c, { dose: val('cdose'), vez: c.tipo === 'droga' ? 1 : vez, dias, fresca: !!cin.querySelector('#cfresca')?.checked });
      html += `<h3 class="sec">Modo de preparo —${c.tipo === 'infusao' ? 'infusão' : c.tipo === 'decoccao' ? 'decocção' : c.tipo === 'tintura' ? 'diluição da tintura' : 'droga vegetal'}</h3><ol class="steps">${PREP[c.tipo].map(x => `<li>${esc(x)}</li>`).join('')}</ol>
        <p class="small sec">Tempo máximo de uso: <b>${esc(p.tempoMax)}</b>. <a href="#/planta/${p.id}">Ver contraindicações</a></p>`;
      cout.innerHTML = html;
    };
    sel.addEventListener('change', () => { history.replaceState(null, '', '#/calculadora' + (sel.value ? '?p=' + sel.value : '')); build(); });
    cin.addEventListener('input', calc); cin.addEventListener('change', calc);
    build();
  };

  // ---------- GLOSSÁRIO ----------
  const GLOSS = [
    ['Infusão (infuso)', 'Preparação em que se verte água fervente sobre a planta e se mantém o recipiente tampado por tempo determinado (geralmente 5–15 min). Indicada para partes delicadas: folhas, flores, inflorescências e partes com óleos voláteis.'],
    ['Decocção (decocto)', 'Preparação em que a planta é fervida junto com a água por tempo determinado (10–20 min). Indicada para partes duras: raízes, rizomas, cascas, caules e sementes.'],
    ['Maceração (macerado)', 'Contato da planta com líquido (água, álcool ou óleo) à temperatura ambiente, por horas ou dias, com agitação ocasional. Usada para substâncias que se degradam com o calor ou para extrair mucilagens.'],
    ['Tintura', 'Preparação alcoólica ou hidroalcoólica obtida da droga vegetal por maceração ou percolação. A proporção indica planta:solvente — ex.: 1:5 = 1 g de planta para 5 mL de tintura; 1:10 = 1 g para 10 mL.'],
    ['Alcoolatura', 'Preparação alcoólica obtida de planta fresca (em geral 1:2 em etanol), por maceração.'],
    ['Extrato fluido', 'Preparação líquida em que 1 mL corresponde a 1 g da droga vegetal (1:1), em solvente hidroalcoólico.'],
    ['Extrato mole', 'Extrato de consistência pastosa obtido pela evaporação parcial do solvente.'],
    ['Extrato seco', 'Extrato em pó obtido pela evaporação total do solvente, geralmente padronizado em um marcador (ex.: 1,2% de apigenina). A razão droga:extrato (DER), como 5:1, indica quantas partes de droga deram 1 parte de extrato.'],
    ['Extrato glicólico', 'Extrato em propilenoglicol, usado em cremes, géis e pomadas.'],
    ['Extrato padronizado', 'Extrato com teor definido de uma substância ou grupo (marcador), garantindo reprodutibilidade da dose.'],
    ['Droga vegetal', 'Planta medicinal ou suas partes, após processos de coleta, secagem e estabilização, usada como matéria-prima.'],
    ['Droga vegetal rasurada', 'Droga vegetal cortada em fragmentos, adequada para chás.'],
    ['Planta medicinal', 'Espécie vegetal, cultivada ou não, usada com propósitos terapêuticos.'],
    ['Fitoterápico', 'Produto obtido exclusivamente de matérias-primas ativas vegetais, com eficácia e segurança comprovadas (medicamento fitoterápico) ou baseadas na tradição de uso (produto tradicional fitoterápico).'],
    ['Chá medicinal', 'Droga vegetal destinada ao preparo por infusão, decocção ou maceração em água, para uso pelo consumidor.'],
    ['Marcador', 'Substância ou classe química usada para controle de qualidade e padronização do fitoterápico.'],
    ['Posologia', 'Dose, intervalo entre doses e duração do tratamento.'],
    ['Colutório', 'Solução para bochechos, com ação na cavidade oral. Não deve ser engolida.'],
    ['Bochecho e gargarejo', 'Uso tópico na boca (bochecho) ou na garganta (gargarejo), sem ingerir o líquido.'],
    ['Compressa', 'Pano ou gaze embebido no preparado (quente ou frio), aplicado sobre a pele.'],
    ['Cataplasma', 'Planta triturada (fresca ou seca) misturada a água ou farinha, aplicada diretamente sobre a pele.'],
    ['Inalação', 'Aspiração do vapor do preparado. Contraindicada para algumas espécies (ex.: alecrim-pimenta, por irritação).'],
    ['Gel, creme e pomada', 'Formas de uso tópico: gel (base aquosa), creme (emulsão água/óleo) e pomada (base oleosa/gordurosa).'],
    ['q.s.p.', '“Quantidade suficiente para” — completar até o volume ou massa final.'],
    ['p/v (%)', 'Peso por volume: gramas de soluto em 100 mL. Ex.: 2 g em 100 mL = 2% p/v.'],
    ['MIP', 'Medicamento isento de prescrição. No Memento, cada monografia informa se o fitoterápico é isento ou “somente sob prescrição médica”.'],
    ['Categoria de risco C (gestação)', 'Estudos em animais mostraram risco ou não foram feitos, e não há estudos adequados em gestantes. Usar só se o benefício justificar o risco, com orientação médica.'],
    ['CYP450 (citocromo P450)', 'Enzimas hepáticas que metabolizam fármacos. Plantas indutoras (ex.: hipérico) reduzem o efeito de outros medicamentos; inibidoras podem aumentá-lo.'],
    ['Glicoproteína P (P-gp)', 'Transportador que expulsa fármacos das células; sua inibição pode aumentar a exposição a medicamentos (ex.: dabigatrana).'],
    ['Fotossensibilização', 'Reação da pele à luz solar aumentada pelo uso da planta (ex.: hipérico).'],
    ['Colagogo e colerético', 'Colerético: aumenta a produção de bile; colagogo: estimula sua eliminação para o intestino (ex.: boldo). Contraindicados na obstrução biliar.'],
    ['Antidispéptico', 'Alivia sintomas de má digestão (dispepsia): plenitude, queimação, gases.'],
    ['Emenagogo', 'Estimula o fluxo menstrual / a musculatura uterina — motivo de contraindicação na gestação.'],
    ['Hepatotoxicidade', 'Lesão do fígado causada por substância (ex.: kava-kava em doses altas).'],
    ['Antraquinonas / antranoides', 'Substâncias laxativas estimulantes (sene, cáscara-sagrada). Uso prolongado causa perda de potássio e dependência.'],
    ['Asteraceae', 'Família botânica de camomila, calêndula, alcachofra e equinácea. Pessoas alérgicas a uma podem reagir às outras.']
  ];
  routes.glossario = () => {
    setTitle('Glossário');
    main.innerHTML = `
      <div class="page-head"><h1>Glossário técnico</h1><p>Termos de fitoterapia e farmacotécnica usados no Memento.</p></div>
      <div class="card"><h2>Infusão × Decocção × Maceração × Tintura</h2>
        <div class="table-wrap"><table>
          <thead><tr><th></th><th>Infusão</th><th>Decocção</th><th>Maceração</th><th>Tintura</th></tr></thead>
          <tbody>
            <tr><th>Como</th><td>Água fervente vertida sobre a planta; recipiente tampado</td><td>Planta fervida junto com a água</td><td>Planta em líquido à temperatura ambiente</td><td>Planta em álcool/hidroálcool por dias (maceração ou percolação)</td></tr>
            <tr><th>Temperatura</th><td>Água a ~100 °C, fogo desligado</td><td>Fervura (~100 °C) contínua</td><td>Ambiente (sem calor)</td><td>Ambiente</td></tr>
            <tr><th>Tempo</th><td>5–15 min</td><td>10–20 min de fervura</td><td>Horas a dias</td><td>Em geral 7–14 dias de preparo</td></tr>
            <tr><th>Partes</th><td>Folhas, flores, inflorescências (delicadas, aromáticas)</td><td>Raízes, cascas, rizomas, sementes (duras)</td><td>Partes ricas em mucilagem ou substâncias sensíveis ao calor</td><td>Qualquer droga vegetal; proporção definida (1:5, 1:10)</td></tr>
            <tr><th>Validade</th><td>Usar logo; até 24 h</td><td>Até 24 h</td><td>Curta (aquosa); maior em álcool/óleo</td><td>Longa (meses), em frasco âmbar</td></tr>
            <tr><th>Exemplos</th><td>Camomila, maracujá, boldo, espinheira-santa</td><td>Valeriana, cimicifuga, unha-de-gato</td><td>—</td><td>Alho 1:5, calêndula 1:10, gengibre</td></tr>
          </tbody></table></div></div>
      <div class="searchbox sec"><input id="gq" type="search" placeholder="Buscar termo…" aria-label="Buscar no glossário"></div>
      <div class="grid grid-2 sec" id="gl"></div>`;
    const gl = main.querySelector('#gl'), gq = main.querySelector('#gq');
    const render = () => { const q = norm(gq.value); gl.innerHTML = GLOSS.filter(([t, d]) => !q || norm(t + ' ' + d).includes(q)).map(([t, d]) => `<div class="card"><h3>${esc(t)}</h3><p class="small" style="margin:0">${esc(d)}</p></div>`).join('') || '<div class="empty">Nenhum termo.</div>'; };
    gq.addEventListener('input', render); render();
  };

  // ---------- IDENTIFICADOR VISUAL ----------
  const IDF = {
    parte: { folha: /folha/i, flor: /flor|infloresc/i, raiz: /raiz|ra[íi]zes|rizoma/i, casca: /casca/i, 'semente/fruto/bulbo': /semente|fruto|bulbo/i, gel: /gel/i },
    porte: { erva: /erva/i, arbusto: /arbust/i, 'árvore': /[áa]rvore/i, trepadeira: /trepadeira/i, 'suculenta/palmeira': /suculenta|palmeira/i },
    flor: { amarela: /amarel/i, branca: /branc/i, 'roxa/rosa': /roxa|rosa|lil[áa]s/i, 'laranja/vermelha': /laranja|vermelh/i, 'sem flor vistosa': /sem flor/i }
  };
  routes.identificar = () => {
    setTitle('Identificar');
    main.innerHTML = `
      <div class="page-head"><h1>Identificador visual</h1><p>Compare a planta com as fotos de referência. Em cada imagem: <span class="badge ok">✔ parte que faz bem (medicinal)</span> e <span class="badge bad">✖ parte ou uso que faz mal</span>.</p></div>
      <div class="card">
        <h2>Tem uma foto da planta?</h2>
        <p class="small muted">Tire ou escolha uma foto para comparar lado a lado com as referências. A imagem fica só no seu aparelho.</p>
        <div class="btn-row"><label class="btn" for="ufile">📷 Tirar/escolher foto</label><input id="ufile" type="file" accept="image/*" capture="environment" hidden>
          <a class="btn ghost" href="https://identify.plantnet.org/pt-br" target="_blank" rel="noopener">Identificação por IA (Pl@ntNet) ↗</a></div>
        <div id="cmp" class="compare sec" hidden></div>
        <div class="callout warn sec small"><b>Atenção:</b> nunca indique uma planta sem certeza botânica. Nomes populares se repetem (ex.: “boldo-do-chile” × “boldo-brasileiro”; “alecrim-pimenta” × alecrim-de-cozinha). Na dúvida, prefira o produto industrializado/manipulado.</div>
      </div>
      <div class="card sec">
        ${Object.entries(IDF).map(([g, opts]) => `<div class="sec"><b class="small">${g === 'parte' ? 'Parte usada' : g === 'porte' ? 'Porte' : 'Cor da flor'}:</b> <span class="chips" style="display:inline-flex">${Object.keys(opts).map(o => `<button class="chip" type="button" data-g="${g}" data-o="${esc(o)}" aria-pressed="false">${esc(o)}</button>`).join('')}</span></div>`).join('')}
      </div>
      <div class="grid grid-auto idgrid sec" id="idl"></div>`;
    const sel = { parte: new Set(), porte: new Set(), flor: new Set() };
    let userImg = null, cmpId = null;
    const idl = main.querySelector('#idl'), cmp = main.querySelector('#cmp');
    const field = { parte: p => p.parte, porte: p => p.porte, flor: p => p.flor };
    const render = () => {
      const items = PLANTAS.filter(p => Object.entries(sel).every(([g, set]) => !set.size || [...set].some(o => IDF[g][o].test(field[g](p)))));
      idl.innerHTML = items.map(p => `
        <div class="card plant-card">
          <div class="ph" style="position:relative"><img loading="lazy" src="${foto(p)}" alt="${esc(p.nome)}"></div>
          <div class="bd"><h3>${esc(p.nome)}</h3><div class="sci">${esc(p.cientifico)}</div>
            <div class="small muted">${esc(p.porte)} · flor ${esc(p.flor)}</div>
            <div class="mini-parts">${p.partes.map(x => `<span class="${x.ok ? 'ok' : 'no'}">${x.ok ? '✔' : '✖'} ${esc(x.parte)}</span>`).join('')}</div>
            <div class="btn-row"><a class="btn small" href="#/planta/${p.id}">Ficha</a>${userImg ? `<button class="btn ghost small" type="button" data-cmp="${p.id}">Comparar</button>` : ''}</div></div>
        </div>`).join('') || '<div class="empty card">Nenhuma espécie com essas características.</div>';
    };
    const renderCmp = () => {
      if (!userImg) { cmp.hidden = true; return; }
      const p = byId[cmpId];
      cmp.hidden = false;
      cmp.innerHTML = `<figure><img src="${userImg}" alt="Sua foto"><figcaption>Sua foto</figcaption></figure>
        <figure>${p ? `<img src="${foto(p)}" alt="${esc(p.nome)}"><figcaption><b>${esc(p.nome)}</b> — ${p.partes.map(x => (x.ok ? '✔ ' : '✖ ') + esc(x.parte)).join(' · ')}</figcaption>` : '<div class="empty">Toque em “Comparar” em uma espécie abaixo.</div>'}</figure>`;
    };
    main.querySelector('#ufile').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      if (userImg) URL.revokeObjectURL(userImg);
      userImg = URL.createObjectURL(f); renderCmp(); render();
    });
    main.addEventListener('click', e => {
      const b = e.target.closest('[data-g]');
      if (b) { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); on ? sel[b.dataset.g].add(b.dataset.o) : sel[b.dataset.g].delete(b.dataset.o); render(); }
      const c = e.target.closest('[data-cmp]');
      if (c) { cmpId = c.dataset.cmp; renderCmp(); cmp.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });
    render();
  };

  // ---------- EMERGÊNCIA ----------
  const FONES = [
    ['192', 'SAMU', 'Urgência e emergência médica — 24 h, gratuito', '🚑', true],
    ['0800 722 6001', 'Disque-Intoxicação (Anvisa / Renaciat)', 'Orientação sobre intoxicações e envenenamentos — 24 h, gratuito', '☠', true],
    ['193', 'Corpo de Bombeiros', 'Resgate, acidentes, afogamentos', '🚒'],
    ['190', 'Polícia Militar', 'Segurança pública', '🚓'],
    ['188', 'CVV — Centro de Valorização da Vida', 'Apoio emocional e prevenção do suicídio — 24 h', '💬'],
    ['199', 'Defesa Civil', 'Desastres e situações de risco', '⛑'],
    ['136', 'Disque Saúde (Ministério da Saúde)', 'Informações sobre o SUS', 'ℹ']
  ];
  routes.emergencia = () => {
    setTitle('Emergência');
    const meus = store.get('fones', []);
    main.innerHTML = `
      <div class="page-head"><h1>Emergência e intoxicação</h1><p>Toque no número para ligar.</p></div>
      <div class="grid grid-2">${FONES.map(([n, t, d, i, prim]) => `<a class="card call ${prim ? 'primary' : ''}" href="tel:${n.replace(/\D/g, '')}"><span class="ico">${i}</span><span style="flex:1"><b>${t}</b><br><span class="small muted">${d}</span></span><span class="num">${n}</span></a>`).join('')}</div>
      <div class="card sec">
        <h2>CIATox e contatos locais</h2>
        <p class="small muted">Adicione o Centro de Informação e Assistência Toxicológica (CIATox) do seu estado ou outros números úteis. A lista nacional está no site da <a href="https://abracit.org.br" target="_blank" rel="noopener">Abracit</a>. Ficam salvos neste aparelho.</p>
        <div id="meus"></div>
        <form id="addF" class="fields sec"><div class="field"><label for="fn">Nome</label><input id="fn" type="text" required placeholder="CIATox do meu estado"></div><div class="field"><label for="ft">Telefone</label><input id="ft" type="tel" required placeholder="0800 ..."></div><div class="field" style="justify-content:flex-end"><button class="btn" type="submit">Adicionar</button></div></form>
      </div>
      <div class="grid grid-2 sec">
        <div class="card"><h2>Suspeita de intoxicação por planta</h2><ol class="steps">
          <li>Afaste o paciente da planta/produto e mantenha a calma.</li>
          <li><b>Não provoque vômito</b> e não dê leite, óleo ou outras “receitas” sem orientação.</li>
          <li>Ligue para o <b>Disque-Intoxicação 0800 722 6001</b> ou CIATox. Se houver convulsão, desmaio, falta de ar ou alteração do ritmo cardíaco → <b>SAMU 192</b>.</li>
          <li>Informe: nome da planta ou produto, parte usada, quantidade, horário, via (oral, pele), idade e peso, sintomas.</li>
          <li>Leve a embalagem, a receita ou uma amostra da planta ao atendimento.</li></ol></div>
        <div class="card"><h2>Sinais de alarme</h2><ul>
          <li>Rebaixamento de consciência, confusão, convulsão</li><li>Falta de ar, inchaço de lábios/língua (anafilaxia)</li>
          <li>Palpitações, arritmia, dor no peito</li><li>Vômitos ou diarreia intensos com desidratação</li>
          <li>Sangramentos (especialmente com anticoagulantes)</li><li>Pele ou olhos amarelados, urina escura (lesão hepática)</li></ul>
          <p class="small muted">Plantas com sintomas de superdosagem descritos no Memento: guaraná (arritmias, convulsões), castanha-da-índia (hemólise, dano renal), kava-kava (lesão hepática), sene e cáscara-sagrada (perda de potássio), valeriana (bradicardia).</p></div>
      </div>`;
    const box = main.querySelector('#meus');
    const draw = () => { box.innerHTML = meus.length ? meus.map((m, i) => `<div class="card call" style="margin-top:8px"><a href="tel:${esc(m.t.replace(/[^\d+]/g, ''))}" style="flex:1;text-decoration:none;color:inherit"><b>${esc(m.n)}</b><br><span class="num" style="font-size:1.1rem">${esc(m.t)}</span></a><button class="btn ghost small" type="button" data-rm="${i}" aria-label="Remover">✕</button></div>`).join('') : '<p class="muted small">Nenhum contato adicionado.</p>'; };
    main.querySelector('#addF').addEventListener('submit', e => { e.preventDefault(); meus.push({ n: e.target.fn.value.trim(), t: e.target.ft.value.trim() }); store.set('fones', meus); e.target.reset(); draw(); });
    box.addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (b) { meus.splice(+b.dataset.rm, 1); store.set('fones', meus); draw(); } });
    draw();
  };

  // ---------- INSTALAR / APPS ----------
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; });
  const CFG = (() => {
    const c = Object.assign({ owner: '', repo: '' }, window.APP_CONFIG || {});
    if (!c.owner && location.hostname.endsWith('github.io')) { c.owner = location.hostname.split('.')[0]; c.repo = location.pathname.split('/').filter(Boolean)[0] || (c.owner + '.github.io'); }
    return c;
  })();
  routes.instalar = () => {
    setTitle('Apps');
    const rel = CFG.owner ? `https://github.com/${CFG.owner}/${CFG.repo}/releases/latest` : '';
    const dl = f => rel ? `${rel}/download/${f}` : '';
    const ua = navigator.userAgent;
    const plat = /android/i.test(ua) ? 'android' : /iphone|ipad|ipod/i.test(ua) ? 'ios' : /windows/i.test(ua) ? 'windows' : 'outro';
    const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    main.innerHTML = `
      <div class="page-head"><h1>Instalar o aplicativo</h1><p>Todas as versões abrem o mesmo site, sempre atualizado. Sem internet, usam a última versão salva.</p></div>
      ${standalone ? '<div class="callout ok">✔ Você já está usando o app instalado.</div>' : ''}
      <div class="grid grid-2 sec">
        <div class="card" ${plat === 'android' ? 'style="border-color:var(--brand)"' : ''}><h2>🤖 Android</h2>
          <p>Baixe o APK e permita “instalar apps de fontes desconhecidas”. Ou, no Chrome, use “Instalar app”.</p>
          <div class="btn-row">${rel ? `<a class="btn" href="${dl('FitoTech.apk')}">Baixar APK</a>` : '<span class="badge warn">Link disponível após publicar no GitHub</span>'}<button class="btn ghost" type="button" data-install>Instalar pelo navegador</button></div></div>
        <div class="card" ${plat === 'windows' ? 'style="border-color:var(--brand)"' : ''}><h2>🪟 Windows</h2>
          <p>Baixe o instalador (.exe). Ou, no Edge/Chrome, clique no ícone de instalar na barra de endereço.</p>
          <div class="btn-row">${rel ? `<a class="btn" href="${dl('FitoTech-Setup.exe')}">Baixar para Windows</a>` : '<span class="badge warn">Link disponível após publicar no GitHub</span>'}<button class="btn ghost" type="button" data-install>Instalar pelo navegador</button></div></div>
        <div class="card" ${plat === 'ios' ? 'style="border-color:var(--brand)"' : ''}><h2>🍎 iPhone / iPad</h2>
          <ol class="steps"><li>Abra este site no <b>Safari</b>.</li><li>Toque em <b>Compartilhar</b> (□↑).</li><li>Escolha <b>Adicionar à Tela de Início</b>.</li></ol>
          <p class="small muted">O ícone abre em tela cheia, como um app. (Publicar na App Store exige conta Apple Developer paga.)</p></div>
        <div class="card"><h2>🌐 Site</h2><p>Acesse de qualquer navegador:</p><p><code>${esc(location.origin + location.pathname)}</code></p>
          <div class="btn-row"><button class="btn ghost" type="button" id="copyUrl">Copiar link</button>${rel ? `<a class="btn ghost" href="${rel}" target="_blank" rel="noopener">Todas as versões ↗</a>` : ''}</div></div>
      </div>`;
    main.addEventListener('click', async e => {
      if (e.target.closest('[data-install]')) {
        if (deferredPrompt) { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; }
        else alert(plat === 'ios' ? 'No iPhone use Safari → Compartilhar → Adicionar à Tela de Início.' : 'Use o menu do navegador → “Instalar app” / “Adicionar à tela inicial”.');
      }
      if (e.target.id === 'copyUrl') navigator.clipboard?.writeText(location.origin + location.pathname).then(() => alert('Link copiado.'));
    });
  };

  // ---------- MAIS / SOBRE ----------
  routes.mais = () => {
    setTitle('Mais');
    main.innerHTML = `<div class="page-head"><h1>Mais</h1></div><div class="grid grid-2">${[
      ['#/identificar', '◉', 'Identificador visual', 'Fotos com partes boas (✔) e prejudiciais (✖).'], ['#/glossario', 'Aa', 'Glossário', 'Infusão, decocção, maceração, tintura…'],
      ['#/emergencia', '☎', 'Emergência', 'SAMU, Disque-Intoxicação, CIATox.'], ['#/instalar', '⬇', 'Instalar o app', 'Android, Windows, iPhone.'],
      ['#/sobre', 'ⓘ', 'Sobre e referências', 'Fontes, equipe e avisos.'],
      ...(isPro() ? [] : [['#/cuidados', '♥', 'Cuidados com plantas', 'O que fazer e o que evitar.']]),
      ['#/perfil', '👤', 'Trocar perfil', isPro() ? 'Você está como profissional de saúde.' : 'Você está como paciente.']
    ].map(([h, i, t, d]) => `<a class="card tile" href="${h}"><span class="ico">${i}</span><span><h3>${t}</h3><p>${d}</p></span></a>`).join('')}</div>`;
  };
  routes.sobre = () => {
    setTitle('Sobre');
    main.innerHTML = `
      <div class="page-head"><h1>Sobre o FitoTech - UFAM</h1></div>
      <div class="card stack">
        <p>Protótipo de aplicativo para profissionais de saúde (médicos, enfermeiros, farmacêuticos, nutricionistas) com acesso rápido e fundamentado a posologia, contraindicações e interações das 28 espécies do <b>Memento Fitoterápico da Farmacopeia Brasileira</b>.</p>
        <h2>Referências</h2>
        <ul><li>BRASIL. Agência Nacional de Vigilância Sanitária. <i>Memento Fitoterápico da Farmacopeia Brasileira</i>. 1. ed. Brasília: Anvisa, 2016 (RDC nº 84/2016).</li>
          <li>BRASIL. Anvisa. <i>Formulário de Fitoterápicos da Farmacopeia Brasileira</i> (medidas caseiras de referência).</li>
          <li>Sociedade Brasileira de Cardiologia. <i>Diretrizes Brasileiras de Hipertensão Arterial</i> – 2020 (classificação da PA).</li>
          <li>OMS — classificação do IMC; Lipschitz (1994) — IMC em idosos.</li></ul>
        <h2>Fotos</h2><p class="small">Wikimedia Commons (licenças livres; o link de cada foto aparece na ficha) e anotações da equipe.</p>
        <h2>Equipe</h2><p class="small">Igor Santana, Ana Beatriz, Lorrana Rocha, Pedro Anveres, Luiz Henrique, Lousianne Kelly e Emanuelly.</p>
        <h2>Privacidade</h2><p class="small">Nenhum dado é enviado a servidores. Atendimentos e contatos ficam somente no armazenamento local do aparelho.</p>
        <div class="callout warn small">Ferramenta educacional e de apoio à decisão. Não substitui o julgamento clínico, a monografia oficial ou a bula do produto.</div>
        <div class="btn-row"><button class="btn ghost small" type="button" id="clearAll">Apagar dados salvos neste aparelho</button></div>
      </div>`;
    main.querySelector('#clearAll').addEventListener('click', () => { if (confirm('Apagar atendimento, dados do profissional e contatos salvos?')) { ['atend', 'prof', 'fones'].forEach(store.del); alert('Dados apagados.'); } });
  };

  // ---------- tema, offline, service worker ----------
  const themeBtn = document.getElementById('themeBtn');
  const applyTheme = t => { if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme'); };
  applyTheme(store.get('theme', ''));
  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark'; applyTheme(next); store.set('theme', next);
  });
  const off = document.getElementById('offline');
  const net = () => { off.hidden = navigator.onLine; };
  window.addEventListener('online', net); window.addEventListener('offline', net); net();
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
  go();
})();
