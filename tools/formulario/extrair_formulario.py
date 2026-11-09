"""Extrai as monografias do Formulário de Fitoterápicos (FFFB 3ª ed.) usando a posição das linhas no PDF."""
import re, json, sys
import pymupdf

PDF, OUT = sys.argv[1], sys.argv[2]
doc = pymupdf.open(PDF)
HDR = re.compile(r'3ª edição\s+–\s+(FT\d{3}-\d{2})')
SECS = {
    'NOMENCLATURA POPULAR': 'popular', 'SINONÍMIA': 'sinonimia', 'ORIENTAÇÕES PARA O PREPARO': 'preparo',
    'EMBALAGEM E ARMAZENAMENTO': 'embalagem', 'ADVERTÊNCIAS': 'advertencias', 'ADVERTÊNCIA': 'advertencias',
    'INDICAÇÕES': 'indicacoes', 'INDICAÇÃO': 'indicacoes', 'MODO DE USAR': 'modo', 'REFERÊNCIAS': 'refs', 'REFERÊNCIA': 'refs',
}
CAPS = re.compile(r'^[A-ZÁÉÍÓÚÂÊÔÃÕÇÀ][A-ZÁÉÍÓÚÂÊÔÃÕÇÀ ]{2,}$')
FORM = re.compile(r'^Fórmula(?:\s+(\d+))?\s*(\(.*)?$')
CIT = re.compile(r'\s*\((?=[^()]*\d{4})[^()]*\)')


def clean(s):
    s = re.sub(r'\s+', ' ', s).strip()
    s = CIT.sub('', s)
    s = re.sub(r'\s+([.,;:])', r'\1', s)
    return s.strip()


# 1) linhas por monografia, na ordem de leitura
mono, order = {}, []
for pg in doc:
    blocks = pg.get_text('dict')['blocks']
    head = pg.get_text()[:250]
    m = HDR.search(head)
    if not m:
        continue
    code = m.group(1)
    if code not in mono:
        mono[code] = []
        order.append(code)
    for b in blocks:
        if b.get('type') != 0:
            continue
        for l in b['lines']:
            t = ''.join(s['text'] for s in l['spans']).strip()
            x0, y0, x1, y1 = l['bbox']
            if not t or y0 < 62:  # cabeçalho da página
                continue
            if HDR.search(t):
                continue
            mono[code].append({'t': t, 'x': x0, 'y': (y0 + y1) / 2, 'pg': pg.number})


def build_rows(tl, qx):
    """Monta linhas da tabela (componente, quantidade) a partir das posições."""
    tl = sorted(tl, key=lambda r: (r['pg'], round(r['y'])))
    clusters = []
    for r in tl:
        if clusters and clusters[-1][0]['pg'] == r['pg'] and abs(clusters[-1][0]['y'] - r['y']) < 3:
            clusters[-1].append(r)
        else:
            clusters.append([r])
    rows, pending = [], None
    for c in clusters:
        comp = ' '.join(r['t'] for r in sorted(c, key=lambda r: r['x']) if r['x'] < qx - 8)
        qty = ' '.join(r['t'] for r in sorted(c, key=lambda r: r['x']) if r['x'] >= qx - 8)
        if comp and qty:
            rows.append([((pending + ' ') if pending else '') + comp, qty]); pending = None
        elif comp:
            if re.match(r'^Fase\b', comp):
                rows.append([comp, '']); pending = None
            elif rows and (comp[:1].islower() or comp.startswith('q.s')) and pending is None:
                rows[-1][0] += ' ' + comp
            else:
                pending = (pending + ' ' + comp) if pending else comp
        elif qty:
            if pending:
                rows.append([pending, qty]); pending = None
            elif rows:
                rows[-1][1] += ' ' + qty
    if pending:
        rows.append([pending, ''])
    return rows


res = []
for code in order:
    L = mono[code]
    i, name = 0, []
    while i < len(L) and L[i]['t'] not in SECS:
        name.append(L[i]['t']); i += 1
    rec = {'codigo': code, 'cientifico': clean(' '.join(name)), 'grupos': []}
    buf, sec, region = {}, None, 'head'
    group = formula = None
    table, qx = None, None

    def flush_table():
        global table
        if table is not None and formula is not None:
            formula['itens'] = build_rows(table, qx)
        table = None

    while i < len(L):
        ln = L[i]; t = ln['t']; i += 1
        if t in SECS:
            flush_table()
            sec = SECS[t]
            if sec not in ('popular', 'sinonimia'):
                region = 'text'
            continue
        if region != 'text' and CAPS.match(t) and t not in ('COMPONENTES', 'QUANTIDADE'):
            flush_table(); region = 'formulas'
            group = {'forma': t.capitalize(), 'formulas': []}; rec['grupos'].append(group)
            continue
        if region != 'text' and (FORM.match(t) and (region == 'formulas' or sec in ('popular', 'sinonimia'))):
            flush_table(); region = 'formulas'
            mf = FORM.match(t)
            formula = {'n': int(mf.group(1) or 1), 'ref': (mf.group(2) or '').strip('(). '), 'itens': []}
            if group is None:
                group = {'forma': 'Formulação', 'formulas': []}; rec['grupos'].append(group)
            group['formulas'].append(formula)
            continue
        if region == 'formulas':
            if t == 'Componentes':
                flush_table(); table = []
                # posição da coluna "Quantidade" (mesma altura, mais à direita)
                qx = next((o['x'] for o in L[i:i + 3] if o['t'] == 'Quantidade'), ln['x'] + 150)
                continue
            if t == 'Quantidade' and table is not None and not table:
                continue
            if table is not None:
                table.append(ln); continue
            if formula is not None and not formula['itens'] and formula['ref'] and not formula['ref'].endswith(')'):
                formula['ref'] = (formula['ref'] + ' ' + t).strip('(). ')  # referência em 2 linhas
            continue
        if sec:
            buf.setdefault(sec, []).append(t)
    flush_table()
    for k, v in buf.items():
        if k != 'refs':
            rec[k] = clean(' '.join(v))
    res.append(rec)

json.dump(res, open(OUT, 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print('monografias:', len(res), '| fórmulas:', sum(len(g['formulas']) for r in res for g in r['grupos']))
