(function(){
  function balanceNavPadding(){
    var nav = document.querySelector('#site-nav.greedy-nav .visible-links');
    if(!nav) return;
    var titleLi = nav.querySelector('li:first-child');
    var themeLi = nav.querySelector('li#theme-toggle');
    var hamburger = document.querySelector('#site-nav .greedy-nav__toggle') || document.querySelector('.greedy-nav__toggle');
    var leftW = titleLi ? Math.ceil(titleLi.getBoundingClientRect().width) : 0;
    var rightW = 0;
    if (themeLi) rightW += Math.ceil(themeLi.getBoundingClientRect().width);
    if (hamburger && getComputedStyle(hamburger).display !== 'none') rightW += Math.ceil(hamburger.getBoundingClientRect().width);
    nav.style.paddingLeft = (leftW + 16) + 'px';
    nav.style.paddingRight = (rightW + 16) + 'px';
  }
  function onReady(fn){
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn();
  }
  onReady(function(){
    balanceNavPadding();
    window.addEventListener('resize', function(){
      clearTimeout(window.__navBalanceTimer);
      window.__navBalanceTimer = setTimeout(balanceNavPadding, 100);
    });
  });
})();
