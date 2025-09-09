(function(){
  function toText(html){
    var div = document.createElement('div');
    div.innerHTML = html;
    return (div.textContent || div.innerText || '').trim();
  }
  function notify(el, ok){
    var old = el.textContent;
    el.textContent = ok ? 'Copied' : 'Failed';
    el.setAttribute('aria-live','polite');
    setTimeout(function(){ el.textContent = old; }, 1200);
  }
  function handleClick(e){
    var btn = e.currentTarget;
    var container = btn.closest('[data-citation]');
    if(!container) return;
    var html = container.getAttribute('data-citation');
    var text = toText(html);
    navigator.clipboard.writeText(text).then(function(){
      notify(btn, true);
    }).catch(function(){
      // fallback
      try{
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        notify(btn, ok);
      }catch(_){ notify(btn, false); }
    });
  }
  function init(){
    document.querySelectorAll('.citation-copy-btn').forEach(function(btn){
      btn.removeEventListener('click', handleClick);
      btn.addEventListener('click', handleClick);
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{ init(); }
})();
