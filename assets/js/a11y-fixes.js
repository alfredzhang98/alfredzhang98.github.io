(function(){
  function ensureFormFieldIdentifiers(){
    try {
      var fields = document.querySelectorAll('input, select, textarea');
      var counter = 0;
      fields.forEach(function(el){
        // Ignore disabled or inside hidden iframe/containers (best-effort)
        if (el.disabled) return;
        // If both id and name are missing, assign stable auto values
        var hasId = !!el.getAttribute('id');
        var hasName = !!el.getAttribute('name');
        if (!hasId && !hasName){
          var auto = 'field-' + (++counter);
          el.setAttribute('id', auto);
          el.setAttribute('name', auto);
        }
      });

      // Google Translate select may be injected without a name; add one if missing
      var gt = document.getElementById('goog-te-combo');
      if (gt) {
        if (!gt.getAttribute('name')) gt.setAttribute('name', 'language');
        if (!gt.getAttribute('id')) gt.setAttribute('id', 'goog-te-combo');
      }
    } catch (e) {
      // silent
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureFormFieldIdentifiers);
  } else {
    ensureFormFieldIdentifiers();
  }

  // Also observe late-injected nodes (e.g., Google Translate)
  var obs;
  try {
    obs = new MutationObserver(function(mutations){
      var needRun = false;
      for (var i=0;i<mutations.length;i++){
        if (mutations[i].addedNodes && mutations[i].addedNodes.length){ needRun = true; break; }
      }
      if (needRun) ensureFormFieldIdentifiers();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  } catch (_) {}
})();
