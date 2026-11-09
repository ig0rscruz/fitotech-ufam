// Baixa uma foto (Wikimedia Commons) para cada espécie nova do Formulário e atualiza credits.json.
const fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const OUT = path.join(ROOT, 'app/assets/img/especies');
global.window = {}; require(path.join(ROOT, 'app/js/formulario.js'));
const E = window.FORMULARIO.especies;
const UA = { 'User-Agent': 'FitoTechUFAM/1.0 (projeto academico; app de fitoterapia)' };
const credits = JSON.parse(fs.readFileSync(path.join(OUT, 'credits.json'), 'utf8'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function get(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429 || r.status >= 500) { await sleep(4000 * (i + 1)); continue; }
    return r;
  }
  throw new Error('limite de requisições');
}
async function summary(lang, title) {
  const r = await get(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
  if (!r.ok) return null; const j = await r.json();
  return j.thumbnail ? { src: j.thumbnail.source.replace(/\/\d+px-/, '/960px-'), orig: j.originalimage ? j.originalimage.source : j.thumbnail.source } : null;
}
async function commons(q) {
  const u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=' + encodeURIComponent(q + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime&iiurlwidth=960';
  const j = await (await get(u)).json();
  if (!j.query) return null;
  const p = Object.values(j.query.pages).sort((a, b) => a.index - b.index).find(x => /jpeg|png/.test(x.imageinfo[0].mime));
  return p ? { src: p.imageinfo[0].thumburl, orig: p.imageinfo[0].descriptionurl, title: p.title } : null;
}
(async () => {
  const falhas = [];
  for (const p of E) {
    if (credits[p.id] && fs.existsSync(path.join(OUT, credits[p.id].file))) { console.log('já tem', p.id); continue; }
    let info = null;
    try {
      info = await summary('en', p.wiki) || await summary('en', p.cientifico.split(' ').slice(0, 2).join('_')) ||
        await summary('pt', p.cientifico.split(' ').slice(0, 2).join('_')) || await commons(p.cientifico.split(' ').slice(0, 2).join(' '));
      if (!info) { falhas.push(p.id); console.log('SEM FOTO', p.id); continue; }
      let img = await get(info.src);
      if (!img.ok || !/^image\//.test(img.headers.get('content-type') || '')) { await sleep(1500); img = await get(info.src.replace(/\/\d+px-/, '/500px-')); }
      if (!img.ok || !/^image\//.test(img.headers.get('content-type') || '')) { falhas.push(p.id); console.log('IMAGEM INVÁLIDA', p.id); continue; }
      const buf = Buffer.from(await img.arrayBuffer());
      const ext = /\.png/i.test(info.src) ? 'png' : 'jpg';
      const fn = p.id + '.' + ext;
      fs.writeFileSync(path.join(OUT, fn), buf);
      const file = info.title ? info.title.replace(/^File:/, '') : decodeURIComponent(info.orig.split('/').pop().split('?')[0]);
      credits[p.id] = { file: fn, commons: info.title ? info.orig : 'https://commons.wikimedia.org/wiki/File:' + file };
      console.log('ok', p.id, Math.round(buf.length / 1024) + 'KB', file.slice(0, 60));
    } catch (e) { falhas.push(p.id); console.log('ERRO', p.id, e.message); }
    await sleep(1800);
  }
  fs.writeFileSync(path.join(OUT, 'credits.json'), JSON.stringify(credits, null, 1));
  console.log('falhas:', falhas.join(', ') || 'nenhuma');
})();
