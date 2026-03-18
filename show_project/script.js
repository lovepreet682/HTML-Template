(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'dark';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function initTheme() {
    setTheme(getPreferredTheme());
    updateThemeToggleLabel();
  }

  function updateThemeToggleLabel() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.setAttribute('aria-label', getCurrentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function setupThemeToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    updateThemeToggleLabel();
    btn.addEventListener('click', function () {
      var next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      setTheme(next);
      updateThemeToggleLabel();
    });
  }

  initTheme();
  setupThemeToggle();

  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
      document.body.style.overflow = navLinks.classList.contains('is-open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  function setupScrollActiveNav() {
    var sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    var sections = sectionIds
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var navLinkBySectionId = {};
    sectionIds.forEach(function (id) {
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (link) navLinkBySectionId[id] = link;
    });

    function setActiveSection(activeId) {
      sectionIds.forEach(function (id) {
        var link = navLinkBySectionId[id];
        if (link) link.classList.toggle('active', id === activeId);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        var intersectingIds = [];
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.target.id) {
            intersectingIds.push(entry.target.id);
          }
        });
        if (intersectingIds.length === 0) return;
        var activeId = sectionIds.find(function (id) { return intersectingIds.indexOf(id) !== -1; });
        if (activeId) setActiveSection(activeId);
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    setActiveSection(sectionIds[0]);
  }

  setupScrollActiveNav();
})();
