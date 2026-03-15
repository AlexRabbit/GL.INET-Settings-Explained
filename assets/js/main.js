(function () {
  'use strict';

  var STORAGE_KEY = 'gli-modem-guide-lang';
  var currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'en';

  function applyTranslations(lang) {
    if (typeof I18N === 'undefined') return;
    var get = I18N.get;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key) el.textContent = get(lang, key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = get(lang, key);
    });
    document.documentElement.lang = lang === 'zh-Hans' ? 'zh-Hans' : lang === 'zh-Hant' ? 'zh-Hant' : lang;
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang);
    currentLang = lang;
  }

  function setLangOptionSelected(lang) {
    var opts = document.querySelectorAll('.lang-option');
    opts.forEach(function (o) {
      o.setAttribute('aria-selected', o.getAttribute('data-lang') === lang ? 'true' : 'false');
      o.classList.toggle('selected', o.getAttribute('data-lang') === lang);
    });
  }

  var langToggle = document.querySelector('.lang-toggle');
  var langDropdown = document.getElementById('lang-dropdown');
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', function () {
      var open = langDropdown.getAttribute('hidden') === null;
      if (open) {
        langDropdown.setAttribute('hidden', '');
        langToggle.setAttribute('aria-expanded', 'false');
      } else {
        langDropdown.removeAttribute('hidden');
        langToggle.setAttribute('aria-expanded', 'true');
        setLangOptionSelected(currentLang);
      }
    });
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (lang) {
          applyTranslations(lang);
          setLangOptionSelected(lang);
          langDropdown.setAttribute('hidden', '');
          langToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (langDropdown.getAttribute('hidden') === null && !langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.setAttribute('hidden', '');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  applyTranslations(currentLang);
  setLangOptionSelected(currentLang);

  var sections = document.querySelectorAll('.section-card[id], .section-card.intro');
  var navLinks = document.querySelectorAll('.nav-list a');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----- Motion narrative: scroll-triggered reveal -----
  function observeReveal() {
    if (!sections.length) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
    // Reveal intro immediately when page loads (story entry)
    var intro = document.querySelector('.section-card.intro');
    if (intro) {
      requestAnimationFrame(function () {
        intro.classList.add('revealed');
      });
    }
  }

  // If reduced motion, show all sections without waiting for scroll
  if (prefersReducedMotion) {
    sections.forEach(function (s) { s.classList.add('revealed'); });
  } else {
    observeReveal();
  }

  // ----- Active nav highlight -----
  function setActiveLink() {
    var scrollY = window.scrollY || window.pageYOffset;
    var headerOffset = 56;
    var current = '';

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id && !section.classList.contains('intro')) return;
      var top = section.getBoundingClientRect().top + scrollY - headerOffset;
      var height = section.offsetHeight;
      if (scrollY >= top - 10 && scrollY < top + height) {
        current = id || '';
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#' && !current) {
        link.classList.add('active');
      } else if (href && href.startsWith('#') && href.slice(1) === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(setActiveLink);
  }, { passive: true });
  window.addEventListener('load', setActiveLink);

  // ----- Hamburger menu toggle -----
  var menuToggle = document.querySelector('.menu-toggle');
  var sidebar = document.getElementById('sidebar-nav');
  var backdrop = document.getElementById('sidebar-backdrop');
  function openMenu() {
    document.body.classList.add('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    if (menuToggle) menuToggle.setAttribute('aria-label', 'Close menu');
  }
  function closeMenu() {
    document.body.classList.remove('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.setAttribute('aria-label', 'Open menu');
  }
  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    var open = document.body.classList.contains('menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }
  if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 900px)').matches) closeMenu();
    });
  });

  // ----- Smooth scroll when clicking sidebar links -----
  // (Always animate; if "Reduce motion" is on in Brave/OS, use shorter duration)
  var headerOffset = 56;
  var scrollDuration = prefersReducedMotion ? 400 : 650;
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }
  function smoothScrollTo(y, onDone) {
    var startY = window.scrollY || window.pageYOffset;
    var diff = y - startY;
    if (Math.abs(diff) < 5) {
      if (onDone) onDone();
      return;
    }
    var startTime = null;
    function step(now) {
      if (startTime == null) startTime = now;
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / scrollDuration, 1);
      var ease = easeOutQuart(progress);
      window.scrollTo({ left: 0, top: Math.round(startY + diff * ease), behavior: 'auto' });
      if (progress < 1) {
        requestAnimationFrame(step);
      } else if (onDone) {
        onDone();
      }
    }
    requestAnimationFrame(step);
  }
  navLinks.forEach(function (link) {
    if (link.classList.contains('nav-made-by')) return;
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var id = href.slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        var top = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        var targetY = Math.max(0, top - headerOffset);
        smoothScrollTo(targetY, function () {
          history.replaceState(null, '', href);
        });
      }
    });
  });
})();
