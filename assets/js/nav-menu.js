(function(){
  function init(){
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var btn = nav.querySelector('button');
    var hidden = nav.querySelector('.hidden-links');
  var visible = nav.querySelector('.visible-links');
    if (!btn || !hidden) return;

  var THRESHOLD = 900; // px, force hamburger under this width
  var forced = false;

    function updateButtonVisibility(){
      var hasItems = hidden.children && hidden.children.length > 0;
      // Explicitly set display so it overrides CSS `display: none` default
  btn.style.display = hasItems ? 'inline-block' : 'none';
  // Also manage the global `.hidden` class which sets visibility:hidden
  if (hasItems) btn.classList.remove('hidden'); else btn.classList.add('hidden');
      if (!hasItems){ closeMenu(); }
    }
    function openMenu(){
      hidden.classList.remove('hidden');
      btn.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeMenu(){
      hidden.classList.add('hidden');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggleMenu(){
      if (hidden.classList.contains('hidden')) openMenu(); else closeMenu();
    }

    function moveCandidatesToHidden(){
      if (!visible) return;
      var items = Array.from(visible.children).filter(function(li){
        return li.tagName === 'LI' && !li.classList.contains('persist') && !li.classList.contains('tail');
      });
      if (!items.length) return;
      items.forEach(function(li){ li.dataset.forced = '1'; hidden.appendChild(li); });
      updateButtonVisibility();
    }
    function restoreForcedToVisible(){
      if (!visible) return;
      var tail = visible.querySelector('li.tail');
      // Avoid :scope for better compatibility; filter children instead
      var items = Array.from(hidden.children).filter(function(el){
        return el.matches && el.matches('li[data-forced="1"]');
      });
      items.forEach(function(li){
        li.removeAttribute('data-forced');
        if (tail) visible.insertBefore(li, tail); else visible.appendChild(li);
      });
      updateButtonVisibility();
    }
    function applyForcedMode(){
      var w = window.innerWidth || document.documentElement.clientWidth || 0;
      var shouldForce = w < THRESHOLD;
      if (shouldForce && !forced){
        forced = true; moveCandidatesToHidden(); closeMenu();
      } else if (!shouldForce && forced){
        forced = false; restoreForcedToVisible(); closeMenu();
      }
      // If we are forcing or we actually have hidden items, make sure the button is visible
      var hasItems = hidden.children && hidden.children.length > 0;
      if (shouldForce || hasItems) {
        btn.style.display = 'inline-block';
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    }

    btn.addEventListener('click', function(e){ e.preventDefault(); toggleMenu(); });
    hidden.addEventListener('click', function(e){
      var a = e.target.closest('a');
      if (a) closeMenu();
    });
    document.addEventListener('click', function(e){
      if (!nav.contains(e.target)) closeMenu();
    });
    window.addEventListener('resize', function(){ applyForcedMode(); updateButtonVisibility(); });

    // Observe greedy-nav moving items between lists
    var obs = new MutationObserver(updateButtonVisibility);
    obs.observe(hidden, { childList: true });

    applyForcedMode();
    updateButtonVisibility();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
