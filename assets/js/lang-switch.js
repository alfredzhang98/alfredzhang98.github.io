(function(){
  const NAME_MAP = { 'en': 'Qingyu Zhang', 'zh-CN': '张清宇' };
  // Tag label mapping by language (data-tag remains original for logic)
  const TAG_TEXT = {
    'RA': { 'en': 'RA', 'zh-CN': '研究助理' }
  };
  function setLangActive(lang){
    try {
      var bar = document.getElementById('lang-switch');
      if (!bar) return;
      bar.querySelectorAll('.lang-btn').forEach(function(btn){
        var on = btn.dataset.lang === lang;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    } catch(e){}
  }
  function replaceNameInContent(lang){
    try {
      var to = NAME_MAP[lang];
      var from = (lang === 'zh-CN') ? NAME_MAP['en'] : NAME_MAP['zh-CN'];
      if (!to || !from) return;
      var scopes = document.querySelectorAll('.page__content, .project-card, .project-funding-inline, .card-preview, .card-title, h1, h2, h3');
      scopes.forEach(function(root){
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        var node;
        while ((node = walker.nextNode())){
          var t = node.nodeValue;
          if (t && t.indexOf(from) !== -1) node.nodeValue = t.split(from).join(to);
        }
      });
    } catch(e){}
  }
  function startNameFixObserver(lang){
    try {
      var last = 0;
      var obs = new MutationObserver(function(){
        var now = Date.now();
        if (now - last < 200) return;
        last = now;
        replaceNameInContent(lang);
      });
      obs.observe(document.body, { childList: true, subtree: true, characterData: true });
      setTimeout(function(){ try { obs.disconnect(); } catch(e){} }, 10000); // stop after 10s
    } catch(e){}
  }
  function setAuthorName(lang){
    try {
      const name = NAME_MAP[lang];
      if (!name) return;
      // Visible author name
      document.querySelectorAll('.author__name').forEach(function(el){ el.textContent = name; });
      // Avatar alt text
      document.querySelectorAll('.author__avatar img[alt]').forEach(function(img){ img.setAttribute('alt', name); });
    } catch(e){}
  }
  function setTagLabels(lang){
    try {
      // Card chips
      document.querySelectorAll('.project-card .card-chips .chip[data-tag]').forEach(function(el){
        const key = el.dataset.tag;
        if (TAG_TEXT[key] && TAG_TEXT[key][lang]) el.textContent = TAG_TEXT[key][lang];
      });
      // Toolbar filter buttons
      document.querySelectorAll('#projects-tags .pf-btn[data-tag]').forEach(function(el){
        const key = el.dataset.tag;
        if (TAG_TEXT[key] && TAG_TEXT[key][lang]) el.textContent = TAG_TEXT[key][lang];
        if (key === '') el.textContent = (lang === 'zh-CN') ? '全部' : 'All';
      });
    } catch(e){}
  }
  function fixLangSwitchLabels(){
    try {
      var en = document.querySelector('#lang-switch .lang-btn[data-lang="en"]');
      var zh = document.querySelector('#lang-switch .lang-btn[data-lang="zh-CN"]');
      var sep = document.querySelector('#lang-switch .sep');
      if (en) en.textContent = 'EN';
      if (sep) sep.textContent = '|';
      if (zh) zh.textContent = '中文';
    } catch(e){}
  }
  function replaceNameInContent(lang){
    try {
      var to = NAME_MAP[lang];
      var from = (lang === 'zh-CN') ? NAME_MAP['en'] : NAME_MAP['zh-CN'];
      if (!to) return;
      var scopes = document.querySelectorAll('body');
      var variants = [];
      if (lang === 'zh-CN') {
        variants = [from, '张庆余']; // known wrong variant by translator
      } else if (lang === 'en') {
        variants = [from, 'Qinyu Zhang'];
      }
      scopes.forEach(function(root){
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        var node;
        while ((node = walker.nextNode())){
          var t = node.nodeValue;
          if (!t) continue;
          variants.forEach(function(v){ if (v && t.indexOf(v) !== -1) t = t.split(v).join(to); });
          node.nodeValue = t;
        }
      });
    } catch(e){}
  }
  function loadGoogleTranslate(cb){
    if (window.google && window.google.translate) { cb(); return; }
    var gt = document.createElement('script');
    gt.src = '//translate.google.com/translate_a/element.js?cb=__gtInit';
    window.__gtInit = function(){ cb(); };
    document.head.appendChild(gt);
  }
  function initTranslate(){
    try {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,zh-CN',
        autoDisplay: false
      }, 'google_translate_element');
    } catch(e){}
  }
  function switchTo(lang){
    var select = document.querySelector('.goog-te-combo');
    if (!select) return;
    select.value = lang;
    select.dispatchEvent(new Event('change'));
    try { localStorage.setItem('site_lang', lang); } catch(e){}
    setLangActive(lang);
    fixLangSwitchLabels();
    // Apply name and tag fixes shortly after translation kicks in
    setTimeout(function(){ fixLangSwitchLabels(); setAuthorName(lang); setTagLabels(lang); replaceNameInContent(lang); }, 600);
    setTimeout(function(){ fixLangSwitchLabels(); setAuthorName(lang); setTagLabels(lang); replaceNameInContent(lang); }, 1500);
    setTimeout(function(){ fixLangSwitchLabels(); setAuthorName(lang); setTagLabels(lang); replaceNameInContent(lang); }, 3000);
    startNameFixObserver(lang);
  }
  function ensureHiddenUI(){
    var css = document.getElementById('gt-hide-style');
    if (css) return;
    css = document.createElement('style');
    css.id = 'gt-hide-style';
    css.textContent = [
      '.goog-te-banner-frame, .goog-te-banner, .goog-te-banner-frame.skiptranslate{display:none!important;}',
      '.goog-te-gadget-icon, .goog-te-gadget, .goog-te-gadget-simple{display:none!important;}',
      '#goog-gt-tt, .goog-te-balloon-frame{display:none!important;}',
      'iframe.skiptranslate{display:none!important;}',
      'html{margin-top:0!important;}',
      'body{top:0!important;position:relative!important;}'
    ].join(' ');
    document.head.appendChild(css);
  }
  function boot(){
    ensureHiddenUI();
    var host = document.createElement('div');
    host.id = 'google_translate_element';
    host.style.display = 'none';
    document.body.appendChild(host);
  loadGoogleTranslate(function(){
      initTranslate();
      var saved = null; try { saved = localStorage.getItem('site_lang'); } catch(e){}
      if (saved) {
        setLangActive(saved);
        setTimeout(function(){ switchTo(saved); }, 700);
      }
      // If no saved, ensure default English name and persist
      if (!saved) {
    setAuthorName('en'); setTagLabels('en'); setLangActive('en'); replaceNameInContent('en'); fixLangSwitchLabels();
        try { localStorage.setItem('site_lang', 'en'); } catch(e){}
      }
    });
    var bar = document.getElementById('lang-switch');
    if (bar){
      bar.addEventListener('click', function(e){
        var a = e.target.closest('.lang-btn');
        if (!a) return;
        e.preventDefault();
        var lang = a.dataset.lang;
        if (lang) switchTo(lang);
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
