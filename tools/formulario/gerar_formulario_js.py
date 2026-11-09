"""Gera app/js/formulario.js a partir das monografias extraídas do Formulário de Fitoterápicos (FFFB 3ª ed., 2026).
- monografias: texto e fórmulas do Formulário (por código FT)
- especies: fichas das espécies que não estão no Memento, no mesmo formato de data.js
- calcExtra: presets de calculadora (preparações extemporâneas) para espécies do Memento
"""
import json, re, sys

SRC, MEM_IDS, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
CRED = json.load(open(sys.argv[4], encoding='utf8')) if len(sys.argv) > 4 else {}
mono = json.load(open(SRC, encoding='utf8'))
memento = set(json.load(open(MEM_IDS, encoding='utf8')))

ALIAS = {'monteverdia-ilicifolia': 'maytenus-ilicifolia', 'mentha-x': 'mentha-piperita'}


def key(n):
    if n.startswith('Salix'):
        return 'salix-spp'
    if n.startswith('Crataegus'):
        return 'crataegus-spp'
    w = '-'.join(n.split()[:2]).lower()
    w = re.sub(r'[^a-z-]', '', w)
    return ALIAS.get(w, w)


# família, porte, cor da flor, título na Wikipédia (en) para a foto
CUR = {
    'achillea-millefolium': ('Asteraceae', 'Erva perene', 'branca', 'Achillea_millefolium'),
    'achyrocline-satureioides': ('Asteraceae', 'Erva / subarbusto', 'amarela', 'Achyrocline_satureioides'),
    'aloysia-polystachya': ('Verbenaceae', 'Arbusto', 'branca', 'Aloysia_polystachya'),
    'alpinia-zerumbet': ('Zingiberaceae', 'Erva grande com rizoma', 'branca/rosada', 'Alpinia_zerumbet'),
    'alternanthera-brasiliana': ('Amaranthaceae', 'Erva', 'branca', 'Alternanthera_brasiliana'),
    'anacardium-occidentale': ('Anacardiaceae', 'Árvore', 'rosada', 'Cashew'),
    'arctium-lappa': ('Asteraceae', 'Erva bienal', 'roxa', 'Arctium_lappa'),
    'arnica-montana': ('Asteraceae', 'Erva perene', 'amarela', 'Arnica_montana'),
    'baccharis-trimera': ('Asteraceae', 'Subarbusto (erva)', 'branca', 'Baccharis_trimera'),
    'bidens-pilosa': ('Asteraceae', 'Erva anual', 'branca com centro amarelo', 'Bidens_pilosa'),
    'casearia-sylvestris': ('Salicaceae', 'Árvore pequena', 'branca', 'Casearia_sylvestris'),
    'cinnamomum-verum': ('Lauraceae', 'Árvore', 'amarelo-esverdeada', 'Cinnamomum_verum'),
    'citrus-aurantium': ('Rutaceae', 'Árvore', 'branca', 'Bitter_orange'),
    'cordia-verbenacea': ('Boraginaceae', 'Arbusto', 'branca', 'Varronia_curassavica'),
    'crataegus-spp': ('Rosaceae', 'Arbusto / árvore pequena', 'branca', 'Crataegus_monogyna'),
    'curcuma-longa': ('Zingiberaceae', 'Erva com rizoma', 'branca/amarela', 'Turmeric'),
    'cymbopogon-citratus': ('Poaceae', 'Erva (capim)', 'sem flor vistosa', 'Cymbopogon_citratus'),
    'echinacea-angustifolia': ('Asteraceae', 'Erva perene', 'roxa/rosa', 'Echinacea_angustifolia'),
    'erythrina-mulungu': ('Fabaceae', 'Árvore', 'laranja/vermelha', 'Erythrina_verna'),
    'eucalyptus-globulus': ('Myrtaceae', 'Árvore', 'branca', 'Eucalyptus_globulus'),
    'eugenia-uniflora': ('Myrtaceae', 'Arbusto / árvore pequena', 'branca', 'Eugenia_uniflora'),
    'foeniculum-vulgare': ('Apiaceae', 'Erva perene', 'amarela', 'Fennel'),
    'glycyrrhiza-glabra': ('Fabaceae', 'Erva perene / subarbusto', 'roxa/lilás', 'Liquorice'),
    'hamamelis-virginiana': ('Hamamelidaceae', 'Arbusto', 'amarela', 'Hamamelis_virginiana'),
    'illicium-verum': ('Schisandraceae', 'Árvore', 'vermelha', 'Illicium_verum'),
    'justicia-pectoralis': ('Acanthaceae', 'Erva', 'lilás', 'Justicia_pectoralis'),
    'lavandula-angustifolia': ('Lamiaceae', 'Subarbusto (arbusto)', 'roxa/lilás', 'Lavandula_angustifolia'),
    'leonurus-cardiaca': ('Lamiaceae', 'Erva perene', 'rosa/lilás', 'Leonurus_cardiaca'),
    'libidibia-ferrea': ('Fabaceae', 'Árvore', 'amarela', 'Libidibia_ferrea'),
    'lippia-alba': ('Verbenaceae', 'Arbusto', 'lilás', 'Lippia_alba'),
    'malva-sylvestris': ('Malvaceae', 'Erva', 'roxa/rosa', 'Malva_sylvestris'),
    'melissa-officinalis': ('Lamiaceae', 'Erva perene', 'branca', 'Lemon_balm'),
    'mentha-piperita': ('Lamiaceae', 'Erva perene', 'lilás', 'Peppermint'),
    'mikania-glomerata': ('Asteraceae', 'Trepadeira', 'branca', 'Mikania_glomerata'),
    'mikania-laevigata': ('Asteraceae', 'Trepadeira', 'branca', 'Mikania_laevigata'),
    'myracrodruon-urundeuva': ('Anacardiaceae', 'Árvore', 'sem flor vistosa', 'Myracrodruon_urundeuva'),
    'olea-europaea': ('Oleaceae', 'Árvore', 'branca', 'Olive'),
    'panax-ginseng': ('Araliaceae', 'Erva perene', 'branca', 'Panax_ginseng'),
    'persea-americana': ('Lauraceae', 'Árvore', 'amarelo-esverdeada', 'Avocado'),
    'phyllanthus-niruri': ('Phyllanthaceae', 'Erva', 'sem flor vistosa', 'Phyllanthus_niruri'),
    'pimpinella-anisum': ('Apiaceae', 'Erva anual', 'branca', 'Anise'),
    'plantago-lanceolata': ('Plantaginaceae', 'Erva', 'sem flor vistosa', 'Plantago_lanceolata'),
    'plantago-major': ('Plantaginaceae', 'Erva', 'sem flor vistosa', 'Plantago_major'),
    'plectranthus-barbatus': ('Lamiaceae', 'Arbusto (subarbusto)', 'roxa', 'Coleus_barbatus'),
    'polygala-senega': ('Polygalaceae', 'Erva perene', 'branca', 'Polygala_senega'),
    'punica-granatum': ('Lythraceae', 'Arbusto / árvore pequena', 'laranja/vermelha', 'Pomegranate'),
    'rosmarinus-officinalis': ('Lamiaceae', 'Arbusto', 'roxa/lilás', 'Rosemary'),
    'salix-spp': ('Salicaceae', 'Árvore', 'sem flor vistosa', 'Salix_purpurea'),
    'salvia-officinalis': ('Lamiaceae', 'Subarbusto (arbusto)', 'roxa', 'Salvia_officinalis'),
    'sambucus-australis': ('Adoxaceae', 'Arbusto / árvore pequena', 'branca', 'Sambucus_australis'),
    'sambucus-nigra': ('Adoxaceae', 'Arbusto / árvore pequena', 'branca', 'Sambucus_nigra'),
    'silybum-marianum': ('Asteraceae', 'Erva anual / bienal', 'roxa', 'Silybum_marianum'),
    'symphytum-officinale': ('Boraginaceae', 'Erva perene', 'roxa/rosa', 'Symphytum_officinale'),
    'tanacetum-parthenium': ('Asteraceae', 'Erva perene', 'branca com centro amarelo', 'Tanacetum_parthenium'),
    'taraxacum-officinale': ('Asteraceae', 'Erva perene', 'amarela', 'Taraxacum_officinale'),
    'vaccinium-macrocarpon': ('Ericaceae', 'Arbusto rasteiro', 'rosa', 'Vaccinium_macrocarpon'),
    'vaccinium-myrtillus': ('Ericaceae', 'Arbusto', 'rosa', 'Vaccinium_myrtillus'),
    'vitex-agnus-castus': ('Lamiaceae', 'Arbusto', 'roxa/lilás', 'Vitex_agnus-castus'),
    'zea-mays': ('Poaceae', 'Erva anual', 'sem flor vistosa', 'Maize'),
}

NUM = {'um': 1, 'uma': 1, 'dois': 2, 'duas': 2, 'três': 3, 'tres': 3, 'quatro': 4, 'cinco': 5, 'seis': 6, 'sete': 7, 'oito': 8, 'dez': 10, 'doze': 12}


def n2i(w):
    w = w.lower()
    return int(w) if w.isdigit() else NUM.get(w)


def parse_list(s):
    """'1 a 3' -> {1,2,3}; '1, 4 e 5' -> {1,4,5}"""
    out = set()
    for part in re.split(r',|\se\s', s):
        m = re.match(r'\s*(\d+)\s*a\s*(\d+)', part)
        if m:
            out |= set(range(int(m.group(1)), int(m.group(2)) + 1))
        else:
            m = re.match(r'\s*(\d+)', part)
            if m:
                out.add(int(m.group(1)))
    return out


SEG = re.compile(r'F[óo]rmulas?\s+((?:\d+(?:\s*(?:a|,|e)\s*)?)+)\s*:')


def segments(text):
    """Divide 'Fórmula 1: ... Fórmulas 2 a 4: ...' -> {n: trecho}; '*' = texto comum."""
    res = {}
    ms = list(SEG.finditer(text or ''))
    if not ms:
        res['*'] = text or ''
        return res
    if ms[0].start() > 0:
        res['*'] = text[:ms[0].start()].strip()
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else len(text)
        chunk = text[m.end():end].strip()
        for n in parse_list(m.group(1)):
            res[n] = (res.get(n, '') + ' ' + chunk).strip()
    return res


def seg_for(segs, n):
    return segs.get(n) or segs.get('*') or ''


def sentences(t):
    return [s.strip() for s in re.split(r'(?<=[.;])\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ])', t or '') if s.strip()]


# ---- regras de risco (advertências do Formulário) ----
RULES = [
    ('gestante', r'gesta[çn]|grávid|gravidez'),
    ('lactante', r'lacta[çn]|lactant|amament'),
    ('alergia_asteraceae', r'asteraceae|compositae'),
    ('m_anticoag', r'anticoagul|antiagreg|varfarina|ácido acetilsalic|antiplaquet'),
    ('coagulopatia', r'(?<!anti)coagula|hemorrag|sangramento'),
    ('cirurgia', r'cirurgi'),
    ('m_antihipertensivo', r'anti-?hipertens|hipotensor'),
    ('has', r'(?<!anti-)(?<!anti)hipertens[ãa]o(?! intracran)|pressão alta'),
    ('hipotensao', r'(?<!anti)hipotens[ãa]o'),
    ('m_hipoglicemiante', r'hipoglicem(?:iante|ic)|insulina|antidiab'),
    ('diabetes', r'diab[ée]t'),
    ('hepatopatia', r'hep[áa]t(?!otóx)|fígado|cirrose'),
    ('m_hepatotoxico', r'amiodarona|metotrexato|cetoconazol|anabolizant|paracetamol|hepatotóx'),
    ('nefropatia', r'\brenai?s?\b|\brins\b|nefr'),
    ('cardiopatia', r'card[íi]ac|cardiopat|arritm'),
    ('gastrite', r'gastrite|[úu]lcera|dispepsia hipersecretora'),
    ('calculo', r'biliar|litíase|cálculos? (?:biliar|renal|renais)|obstrução das vias'),
    ('intestinal', r'obstrução intestinal|intestin\w+ inflamat|crohn|colite|intestino irritável'),
    ('m_sedativo', r'sedativ|depressor\w* do sistema nervoso|benzodiaz|hipnótic|barbitúr'),
    ('m_antidepressivo', r'antidepress|imao|inibidores? da monoamino|recaptação de serotonina'),
    ('epilepsia', r'epilep|convuls'),
    ('tireoide', r'tire[óo]ide|tireoid|levotirox'),
    ('cancer_hormonal', r'estrog[êe]n\w* ?-?depend|hormônio-?depend|câncer de mama|tumores? hormon'),
    ('m_hormonal', r'reposição de estrog|reposição hormonal|tamoxifeno|estrogênios'),
    ('m_contraceptivo', r'contracep|anticoncep'),
    ('m_digoxina', r'digox|cardiotôn|digitál'),
    ('m_diuretico', r'diurétic'),
    ('hipocalemia', r'hipocalem|potássio'),
    ('m_imunossupressor', r'imunossupress|ciclosporina|tacrolimo'),
    ('transplante', r'transplant'),
    ('autoimune', r'autoimun|auto-imun'),
    ('hiv', r'\bhiv\b|\baids\b'),
    ('m_antirretroviral', r'antirretrovir|antiretrovir|inibidores? de protease'),
    ('asma', r'\basma'),
    ('dirige', r'dirigir|operar máquinas'),
    ('alcoolismo', r'alcoolist|etilist'),
    ('m_aine', r'anti-inflamatórios não esteroid|\baines?\b'),
]
CTX_C = re.compile(r'contraindic|não (?:deve|devem) ser (?:utilizad|usad|associad|administrad)|não (?:utilizar|usar|associar|administrar)|não é recomendad|evitar o uso|proibid', re.I)
SKIP = re.compile(r'hipersensibilidade aos componentes', re.I)


TRIG_A = re.compile(r'cuidad|cautela|atenção|monitor|risco|pode causar|podem causar|pode ocorrer|pode haver|podendo|pode potencializar|pode aumentar|pode reduzir|pode interferir', re.I)


def level_at(s, pos, default):
    """Nível pelo gatilho mais próximo ANTES do termo: 'não utilizar…' (c) × 'cuidado/risco de…' (a)."""
    pre = s[:pos]
    c = [m.end() for m in CTX_C.finditer(pre)]
    a = [m.end() for m in TRIG_A.finditer(pre)]
    lc, la = (c[-1] if c else -1), (a[-1] if a else -1)
    if lc < 0 and la < 0:
        return default
    return 'c' if lc > la else 'a'


def classify(adv):
    riscos = {}
    for s in sentences(adv):
        low = s.lower()
        tint = bool(re.search(r'tintura|teor alcoólico', low))
        default = 'c' if CTX_C.search(s) else 'a'
        for k, pat in RULES:
            m = re.search(pat, low)
            if not m:
                continue
            if k == 'hepatopatia' and re.search(r'amiodarona|metotrexato|cetoconazol|anabolizant|paracetamol', low):
                continue  # frase sobre fármacos hepatotóxicos, não sobre doença hepática
            lvl = 'a' if tint else level_at(s, m.start(), default)
            txt = ('Tintura: ' if tint else '') + s
            txt = txt if len(txt) <= 220 else txt[:217].rsplit(' ', 1)[0] + '…'
            if k not in riscos or (riscos[k][0] == 'a' and lvl == 'c'):
                riscos[k] = [lvl, txt]
    return riscos


def idade(adv):
    vals, txts = [], []
    for s in sentences(adv):
        low = s.lower()
        if re.search(r'tintura|teor alcoólico', low):
            continue
        for m in re.finditer(r'acima de (\d+) anos', low):
            vals.append(int(m.group(1))); txts.append(s)
        for m in re.finditer(r'menores de (\d+) anos', low):
            vals.append(int(m.group(1))); txts.append(s)
        if re.search(r'\buso adulto\b', low) and 'pediátrico' not in low:
            vals.append(18); txts.append(s)
    if not vals:
        return None
    mn = min(vals)
    t = next((x for x in txts if str(mn) in x), txts[0])
    t = t if len(t) <= 200 else t[:197].rsplit(' ', 1)[0] + '…'
    return {'min': mn, 'nivel': 'c', 'txt': t}


def tempo_max(adv):
    pats = [r'não (?:utilizar|usar|deve ser usad\w|deve ser utilizad\w|exceder)[^.]{0,40}?(?:por )?(?:mais de|período (?:maior|superior) (?:que|a)) (\w+) (dias?|semanas?|mes(?:es)?)',
            r'duração (?:máxima|recomendada)[^.]{0,30}?(?:até|de) (\w+) (dias?|semanas?|mes(?:es)?)']
    for p in pats:
        m = re.search(p, (adv or '').lower())
        if m and n2i(m.group(1)):
            n = n2i(m.group(1)); u = m.group(2)
            u = 'dias' if u.startswith('dia') else 'semanas' if u.startswith('semana') else 'meses'
            if n == 1:
                u = {'dias': 'dia', 'semanas': 'semana', 'meses': 'mês'}[u]
            return f'Até {n} {u}'
    return 'Não estabelecido (ver advertências)'


TAGS = [
    (r'dispép|digest', ['dispepsia', 'má digestão']), (r'flatul', ['gases', 'flatulência']), (r'espasm|cólica', ['cólica']),
    (r'dismenorr|menstrua', ['cólica menstrual']), (r'ansiedade', ['ansiedade', 'nervosismo']), (r'insônia|sono', ['insônia']),
    (r'tosse', ['tosse']), (r'expector|secreç|catarr', ['catarro', 'expectorante']), (r'resfriad|gripe', ['resfriado', 'gripe']),
    (r'broncod|bronqu|vias aéreas|respirat', ['respiratório', 'bronquite']), (r'diarr', ['diarreia']), (r'constip|laxat', ['constipação', 'intestino preso']),
    (r'náusea|enjoo|vômito', ['náusea', 'enjoo']), (r'urin|diur', ['queixas urinárias', 'diurético']), (r'cálculo', ['pedra nos rins']),
    (r'cicatriz|feridas?|lesões cutâneas|lesões de pele|lesões da pele', ['ferida', 'cicatrização']), (r'contus|hematoma|entorse', ['contusão', 'hematoma', 'pancada']),
    (r'inflama', ['inflamação']), (r'gengiv|cavidade oral|cavidade bucal|afta|estomatite|bucal', ['gengivite', 'afta', 'inflamação da boca']),
    (r'garganta|faring|orofaring', ['dor de garganta']), (r'articula|reumát|artrite|artrose|osteoart', ['dor articular']), (r'lombalg|dor lombar', ['dor nas costas', 'lombalgia']),
    (r'hemorroid', ['hemorroidas']), (r'variz|venos|circulat', ['varizes', 'pernas pesadas']), (r'queimadura', ['queimadura']),
    (r'acne|dermat|pele|eczema', ['pele']), (r'fadiga|astenia|cansaço', ['cansaço', 'fadiga']), (r'colesterol|lipíd|dislipid', ['colesterol']),
    (r'enxaqueca|cefaleia', ['dor de cabeça', 'enxaqueca']), (r'climatério|menopausa|fogach', ['menopausa', 'fogacho']), (r'pré-menstrual|tpm', ['tpm']),
    (r'hepát|fígado|hepatoprot', ['fígado']), (r'apetite', ['falta de apetite']), (r'micose|fúng|candid', ['micose']),
    (r'infecção urinária|infecções urinárias|cistite|trato urinário', ['infecção urinária']), (r'cardíac|coração', ['coração']),
    (r'dor\b|analg', ['dor']), (r'febre|febril', ['febre']), (r'antissépt|antimicrob|bacter', ['antisséptico']), (r'piolh|pediculose', ['piolho']),
]


def tags_of(txt):
    low = (txt or '').lower(); out = []
    for p, ts in TAGS:
        if re.search(p, low):
            out += [t for t in ts if t not in out]
    return out


VEH = re.compile(r'q\.s|excipient|água|álcool|gel base|pomada|creme|base|açúcar|xarope|propilenoglicol|polietilenoglicol|metilparabeno|glicerina|sabonete|fase', re.I)


def part_of(item):
    t = item
    m = re.search(r'(?:extrato|óleo|tintura|suco)[^,]*?\b(?:da|do|das|dos)\s+(.+)$', t, re.I)
    if m:
        t = m.group(1)
    return t.strip().capitalize()


def via_of(modo):
    low = (modo or '').lower(); o = 'uso oral' in low; e = 'uso externo' in low or 'uso tópico' in low
    return 'Oral e tópica' if o and e else 'Tópica' if e else 'Oral'


def qty_g(q):
    m = re.match(r'^\s*(\d+(?:,\d+)?)\s*(?:a\s*(\d+(?:,\d+)?))?\s*g\b', q or '')
    if not m:
        return None
    a = float(m.group(1).replace(',', '.')); b = float((m.group(2) or m.group(1)).replace(',', '.'))
    return [a, b]


def qty_ml(q):
    m = re.match(r'^\s*(\d+)\s*mL', q or '')
    return int(m.group(1)) if m else None


def freq_of(t):
    m = re.search(r'(?:de\s+)?(\w+)(?:\s+(?:a|ou)\s+(\w+))?\s+vez(?:es)?\s+ao\s+dia', (t or '').lower())
    if not m:
        return ''
    a = n2i(m.group(1)); b = n2i(m.group(2)) if m.group(2) else None
    if not a:
        return ''
    return (f'{a} a {b} vezes ao dia' if b else (f'{a} vez ao dia' if a == 1 else f'{a} vezes ao dia'))


def fmt_items(f):
    return '; '.join(f'{c} {q}'.strip() for c, q in f['itens'])


# ---- monografias -> espécies ----
by_sp = {}
for r in mono:
    r['especie'] = key(r['cientifico'])
    m = re.search(r'\((córtex|semente|folha|raiz|planta inteira)\)', r['cientifico'])
    r['rotulo'] = m.group(1) if m else ''
    r['populares'] = [p.strip().capitalize() for p in re.split(r',\s*|\s+e\s+|;\s*', (r.get('popular') or '').rstrip('.')) if p.strip()]
    by_sp.setdefault(r['especie'], []).append(r)

calc_extra, especies = {}, []
for sp, ms in by_sp.items():
    calc = []
    for r in ms:
        prep, modo = segments(r.get('preparo', '')), segments(r.get('modo', ''))
        for g in r['grupos']:
            if not g['forma'].lower().startswith('preparação extemporânea'):
                continue
            for f in g['formulas']:
                if len(f['itens']) < 2:
                    continue
                gr = qty_g(f['itens'][0][1]); ml = next((qty_ml(q) for c, q in f['itens'][1:] if re.match('água', c, re.I)), None)
                if not gr or not ml:
                    continue
                p = seg_for(prep, f['n']).lower()
                tipo = 'decoccao' if 'decoc' in p else 'maceracao' if 'macera' in p else 'infusao'
                mtxt = seg_for(modo, f['n'])
                fq = freq_of(mtxt) or 'conforme o Formulário'
                if re.search(r'aplicar|compressa|gargarej|bochech|banho|lavar', mtxt.lower()) and not re.search(r'tomar', mtxt.lower()):
                    fq += ' (uso externo)'
                rot = f" ({r['rotulo']})" if r['rotulo'] else ''
                calc.append({'nome': f"Formulário{rot}, F{f['n']} — {f['itens'][0][0].lower()} {f['itens'][0][1]} / {ml} mL", 'tipo': tipo,
                             'g': gr, 'ml': ml, 'freq': fq, 'mlObs': ('Preparo: ' + seg_for(prep, f['n']))[:240], 'fonte': 'FFFB'})
    if sp in memento:
        if calc:
            calc_extra[sp] = calc
        continue
    c = CUR[sp]
    adv = ' '.join(r.get('advertencias', '') for r in ms)
    multi = len(ms) > 1
    ind = ' '.join((f"[{r['rotulo'] or r['cientifico'].split(';')[0]}] " if multi else '') + r.get('indicacoes', '') for r in ms).strip()
    modo_all = ' '.join((f"[{r['rotulo'] or r['cientifico'].split(';')[0]}] " if multi else '') + r.get('modo', '') for r in ms).strip()
    pops = []
    for r in ms:
        for p in r['populares']:
            if p not in pops:
                pops.append(p)
    partes = []
    for r in ms:
        for g in r['grupos']:
            for f in g['formulas']:
                for it, q in f['itens'][:1]:
                    if not VEH.search(it):
                        pt = part_of(it)
                        if pt and pt not in partes:
                            partes.append(pt)
    pop_steps, mag = [], []
    for r in ms:
        prep, modo = segments(r.get('preparo', '')), segments(r.get('modo', ''))
        for g in r['grupos']:
            for f in g['formulas']:
                line = f"{g['forma']} (F{f['n']}): {fmt_items(f)}."
                how = seg_for(modo, f['n'])
                if g['forma'].lower().startswith('preparação extemporânea'):
                    pop_steps.append(f"{line} {seg_for(prep, f['n'])} {how}".strip())
                else:
                    mag.append(f"{line} {how}".strip())
    grupos_txt = '; '.join(sorted({g['forma'] for r in ms for g in r['grupos']}))
    sin = '; '.join(r.get('sinonimia', '') for r in ms if r.get('sinonimia'))
    nome = pops[0] if pops else sp
    especies.append({
        'id': sp, 'nome': nome, 'populares': pops, 'fonte': 'ff', 'ff': [r['codigo'] for r in ms],
        'cientifico': re.sub(r'\s*\((córtex|semente|folha|raiz|planta inteira)\)', '', ms[0]['cientifico']).split(';')[0].split(' e/ou ')[0].strip(),
        'cientificoCompleto': '; '.join(dict.fromkeys(re.sub(r'\s*\((córtex|semente|folha|raiz|planta inteira)\)', '', r['cientifico']) for r in ms)),
        'familia': c[0], 'sinonimia': sin, 'parte': ', '.join(partes) + '.' if partes else 'Ver fórmulas.',
        'via': via_of(modo_all), 'tempoMax': tempo_max(adv), 'rx': None, 'porte': c[1], 'flor': c[2], 'wiki': c[3],
        'tags': tags_of(ind), 'partes': [{'parte': p, 'ok': True, 'txt': 'Parte usada nas fórmulas do Formulário.'} for p in partes],
        'riscos': classify(adv), 'idade': idade(adv), 'populacao': pop_steps, 'magistral': mag, 'calc': calc, 'fotos': ([{'src': 'assets/img/especies/' + CRED[sp]['file'], 'credito': 'Wikimedia Commons', 'link': CRED[sp].get('commons', ''), 'obs': CRED[sp].get('obs', '')}] if sp in CRED else []),
        'memento': {'indicacoes': ind, 'contraindicacoes': adv, 'precaucoes': '', 'adversos': '', 'interacoes': '', 'formas': grupos_txt,
                    'posologia': modo_all, 'tempo': '', 'superdosagem': '', 'prescricao': 'Preparação do Formulário de Fitoterápicos da Farmacopeia Brasileira (manipulação / farmácia viva).', 'quimica': ''},
    })

# nomes populares repetidos: acrescenta o nome científico abreviado
import collections, os
mem_names = json.load(open(os.path.join(os.path.dirname(MEM_IDS), 'mem_names.json'), encoding='utf8'))
cont = collections.Counter([e['nome'] for e in especies] + mem_names)
for e in especies:
    if cont[e['nome']] > 1:
        g, sp = e['cientifico'].split()[:2]
        e['nome'] = f"{e['nome']} ({g[0]}. {sp})"
monos_out = [{k: r.get(k) for k in ('codigo', 'cientifico', 'rotulo', 'especie', 'populares', 'sinonimia', 'grupos', 'preparo', 'advertencias', 'indicacoes', 'modo')} for r in mono]
header = ('/* Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed. (Anvisa, 2026) — 85 monografias.\n'
          ' * monografias: texto e fórmulas reproduzidos do Formulário (citações bibliográficas removidas).\n'
          ' * especies: fichas das espécies que não estão no Memento (riscos extraídos das advertências — revisar).\n'
          ' * calcExtra: preparações extemporâneas do Formulário para a calculadora. Gerado por build_ff.py. */\n')
js = header + 'window.FORMULARIO = ' + json.dumps({'monografias': monos_out, 'especies': especies, 'calcExtra': calc_extra}, ensure_ascii=False, indent=1) + ';\n'
open(OUT, 'w', encoding='utf8', newline='\n').write(js)
print('monografias', len(monos_out), '| espécies novas', len(especies), '| presets extra p/ Memento', sum(len(v) for v in calc_extra.values()),
      '| presets novas', sum(len(e['calc']) for e in especies), '| KB', len(js.encode()) // 1024)
