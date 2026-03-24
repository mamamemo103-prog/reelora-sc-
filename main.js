(function () {
  'use strict';

  var header = document.querySelector('.rl-head');
  var toggle = document.querySelector('.rl-burger');
  var menu = document.getElementById('rl-menu');

  if (header && toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('rl-show');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('rl-show');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('[data-rl-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-rl-filter') || 'all';
      document.querySelectorAll('[data-rl-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('[data-category]').forEach(function (card) {
        var c = card.getAttribute('data-category') || '';
        card.style.display = cat === 'all' || c === cat ? '' : 'none';
      });
    });
  });
})();
