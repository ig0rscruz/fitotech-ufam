// Gera capacitor.config.json. Com SITE_URL definido, o app abre o site publicado
// (sempre atualizado); o service worker do site guarda uma cópia para uso offline.
const fs = require('fs');
const url = process.env.SITE_URL || '';
const cfg = {
  appId: 'br.edu.ufam.fitotech',
  appName: 'FitoTech',
  webDir: 'www',
  android: { allowMixedContent: false },
  plugins: { SplashScreen: { launchShowDuration: 800, backgroundColor: '#ffffff' } }
};
if (url) cfg.server = { url, cleartext: false };
fs.writeFileSync('capacitor.config.json', JSON.stringify(cfg, null, 2));
console.log('capacitor.config.json gerado', url ? '→ ' + url : '(modo offline, sem SITE_URL)');
