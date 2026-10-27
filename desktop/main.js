// FitoTech - UFAM para Windows: abre o site publicado (sempre atualizado).
// Sem internet na primeira abertura, usa a cópia local do site embutida no instalador.
const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let cfg = {};
try { cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8')); } catch (e) { /* sem config: usa cópia local */ }
const SITE = process.env.SITE_URL || cfg.siteUrl || '';
const LOCAL = path.join(__dirname, 'www', 'index.html');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 860, minWidth: 360, minHeight: 500,
    title: 'FitoTech - UFAM', autoHideMenuBar: true, backgroundColor: '#f5f8f8',
    icon: path.join(__dirname, 'www', 'assets', 'icons', 'icon-256.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  const loadLocal = () => win.loadFile(LOCAL);
  win.webContents.on('did-fail-load', (_e, _code, _desc, url, isMain) => {
    if (isMain && /^https?:/.test(url)) loadLocal();
  });
  // links externos (tel:, sites) abrem fora do app
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => {
    const interno = (SITE && url.startsWith(SITE)) || url.startsWith('file:');
    if (!interno) { e.preventDefault(); shell.openExternal(url); }
  });
  if (SITE) win.loadURL(SITE); else loadLocal();
}

if (!app.requestSingleInstanceLock()) app.quit();
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
