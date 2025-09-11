(function(){
  function onReady(fn){ if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn);} else { fn(); } }
  onReady(function(){
    var nav = document.getElementById('site-nav');
    if(!nav) return;
    var btn = nav.querySelector('button.hamburger');
    var hidden = nav.querySelector('.hidden-links');
    var visible = nav.querySelector('.visible-links');
    if(!btn || !hidden || !visible) return;

    var THRESHOLD = 900;
    var forced = false;

    function openMenu(){ hidden.classList.remove('hidden'); btn.classList.add('is-open'); btn.setAttribute('aria-expanded','true'); }
    function closeMenu(){ hidden.classList.add('hidden'); btn.classList.remove('is-open'); btn.setAttribute('aria-expanded','false'); }
    function toggleMenu(){ if(hidden.classList.contains('hidden')) openMenu(); else closeMenu(); }

    function updateButtonState(){
      var hasItems = hidden.children && hidden.children.length > 0;
      if(hasItems){ btn.style.display='inline-flex'; btn.classList.remove('hidden'); } else { btn.style.display='none'; btn.classList.add('hidden'); closeMenu(); }
    }

    function moveNonPersistToHidden(){
      var items = Array.from(visible.children).filter(function(li){ return li.tagName==='LI' && !li.classList.contains('persist') && !li.classList.contains('tail'); });
      if(!items.length) return;
      items.forEach(function(li){ li.dataset.forced='1'; hidden.appendChild(li); });
    }
    function restoreForcedToVisible(){
      var tail = visible.querySelector('li.tail');
      Array.from(hidden.children).filter(function(el){ return el.matches && el.matches('li[data-forced="1"]'); }).forEach(function(li){
        li.removeAttribute('data-forced');
        if(tail) visible.insertBefore(li, tail); else visible.appendChild(li);
      });
    }
    function applyForcedMode(){
      var w = window.innerWidth || document.documentElement.clientWidth || 0;
      var shouldForce = w < THRESHOLD;
      if(shouldForce && !forced){ forced = true; moveNonPersistToHidden(); closeMenu(); }
      else if(!shouldForce && forced){ forced = false; restoreForcedToVisible(); closeMenu(); }
      var hasItems = hidden.children && hidden.children.length > 0;
      if(shouldForce || hasItems){ btn.style.display='inline-flex'; btn.classList.remove('hidden'); } else { btn.style.display='none'; btn.classList.add('hidden'); }
    }

    // Use capture to run before jQuery's handler and stop propagation to avoid double-toggle
    btn.addEventListener('click', function(e){
      e.preventDefault();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      e.stopPropagation();
      toggleMenu();
    }, true);
    hidden.addEventListener('click', function(e){ var a=e.target.closest('a'); if(a) closeMenu(); });
    document.addEventListener('click', function(e){ if(!nav.contains(e.target)) closeMenu(); });
    window.addEventListener('resize', function(){ applyForcedMode(); updateButtonState(); });

    var obs = new MutationObserver(function(){ updateButtonState(); });
    obs.observe(hidden, { childList:true });

    applyForcedMode();
    updateButtonState();
  });
})();
