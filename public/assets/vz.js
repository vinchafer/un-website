/* ============================================================
   XY XxxxxZentrum — JavaScript v3
   ============================================================ */

(function () {
  'use strict';

  /* ------- Header scroll shadow ------- */
  var header = document.getElementById('vz-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 10) header.classList.add('nav-scrolled');
      else header.classList.remove('nav-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------- Mobile Menu ------- */
  var hamburger = document.getElementById('vz-hamburger');
  var mobileMenu = document.getElementById('vz-mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ------- Modal (Termin) ------- */
  function openModal(id) {
    var m = document.getElementById(id);
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }
  function closeModal(id) {
    var m = document.getElementById(id);
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  }
  window.openTerminDialog = function () { openModal('termin-modal'); };

  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) { e.preventDefault(); openModal(openBtn.getAttribute('data-modal-open')); return; }
    var closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) { e.preventDefault(); closeModal(closeBtn.getAttribute('data-modal-close')); return; }
    if (e.target.classList && e.target.classList.contains('vz-modal-backdrop')) {
      e.target.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.vz-modal-backdrop.open');
      if (open) { open.classList.remove('open'); document.body.style.overflow = ''; }
    }
  });

  /* ------- Termin-Form Submit via Formspree ------- */
  /* TODO: Formspree-ID ersetzen: https://formspree.io/f/ERSETZEN */
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/ERSETZEN';

  document.addEventListener('submit', function (e) {
    var form = e.target.closest('[data-termin-form]');
    if (!form) return;
    e.preventDefault();
    var submitBtn = form.querySelector('[type="submit"]');
    var confirmEl = form.parentElement.querySelector('[data-termin-confirm]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Wird gesendet…'; }

    var data = new FormData(form);
    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      form.style.display = 'none';
      if (confirmEl) confirmEl.style.display = 'block';
    })
    .catch(function () {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Termin anfragen'; }
      alert('Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.');
    });
  });

  /* ------- Count-Up Animation (Zahlen) ------- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = 0;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      // ease-out-cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (target - start) * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('.counter');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  /* ------- Reveal on scroll ------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(function (r) { revealObserver.observe(r); });
  }

  /* ------- Nachfolge-Check (aus ALT, optimiert) ------- */
  var checkContainer = document.getElementById('check-steps-container');
  if (checkContainer) {
    /* Skeleton anzeigen bis JS bereit */
    checkContainer.innerHTML =
      '<div class="check-skeleton">' +
        '<div class="check-skeleton-line wide"></div>' +
        '<div class="check-skeleton-line medium"></div>' +
        '<div class="check-skeleton-btn"></div>' +
        '<div class="check-skeleton-btn"></div>' +
        '<div class="check-skeleton-btn"></div>' +
      '</div>';

    var questions = [
      {
        q: 'In welchem Zeithorizont planen Sie die Übergabe Ihres Unternehmens?',
        opts: [
          { label: 'Innerhalb der nächsten 2 Jahre',  score: { extern: 2, mbo: 2, fbo: 1 } },
          { label: 'In 3 bis 5 Jahren',               score: { extern: 3, mbo: 2, fbo: 2 } },
          { label: 'In mehr als 5 Jahren',            score: { extern: 2, mbo: 3, fbo: 3 } },
          { label: 'Noch unklar',                     score: { extern: 1, mbo: 1, fbo: 1 } }
        ]
      },
      {
        q: 'Gibt es in Ihrer Familie einen möglichen Nachfolger?',
        opts: [
          { label: 'Ja, ein Familienmitglied ist interessiert und geeignet', score: { fbo: 5 } },
          { label: 'Ja, aber noch unsicher',                                 score: { fbo: 3, mbo: 1 } },
          { label: 'Nein, keine Option',                                     score: { extern: 3, mbo: 3 } }
        ]
      },
      {
        q: 'Gibt es im Management eine Person, die das Unternehmen übernehmen könnte?',
        opts: [
          { label: 'Ja, es gibt eine klare Kandidatin oder einen Kandidaten', score: { mbo: 5 } },
          { label: 'Vielleicht, aber noch nicht geprüft',                     score: { mbo: 3, extern: 1 } },
          { label: 'Nein, kein Management-Kandidat',                          score: { extern: 4 } }
        ]
      },
      {
        q: 'Wie wichtig ist Ihnen ein möglichst hoher Verkaufserlös?',
        opts: [
          { label: 'Sehr wichtig, er ist meine Altersvorsorge',  score: { extern: 4, mbo: 1 } },
          { label: 'Wichtig, aber nicht das Entscheidende',      score: { extern: 2, mbo: 2, fbo: 2 } },
          { label: 'Weniger wichtig, Kontinuität hat Vorrang',   score: { fbo: 3, mbo: 3 } }
        ]
      },
      {
        q: 'Was ist Ihnen beim Nachfolger am wichtigsten?',
        opts: [
          { label: 'Weiterführung im gleichen Geist',       score: { fbo: 3, mbo: 3 } },
          { label: 'Bestes finanzielles Angebot',           score: { extern: 4 } },
          { label: 'Arbeitsplätze erhalten',                score: { mbo: 3, extern: 2, fbo: 2 } },
          { label: 'Diskrete, schnelle Abwicklung',         score: { extern: 3 } }
        ]
      }
    ];

    var currentIdx = 0;
    var scores = { extern: 0, mbo: 0, fbo: 0 };
    var progressLabel = document.getElementById('check-progress-label');
    var progressFill = document.getElementById('check-progress-fill');

    function renderQuestion() {
      if (currentIdx >= questions.length) { renderResult(); return; }
      var q = questions[currentIdx];
      if (progressLabel) progressLabel.textContent = 'Frage ' + (currentIdx + 1) + ' von ' + questions.length;
      if (progressFill) progressFill.style.width = ((currentIdx + 1) / questions.length * 100) + '%';

      var options = q.opts.map(function (o, i) {
        return '<button type="button" class="check-option" data-idx="' + i + '"><span>' + o.label + '</span></button>';
      }).join('');
      checkContainer.innerHTML =
        '<p class="check-question">' + q.q + '</p>' +
        '<div class="check-options">' + options + '</div>';

      checkContainer.querySelectorAll('.check-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = +btn.getAttribute('data-idx');
          var s = q.opts[idx].score || {};
          for (var k in s) scores[k] = (scores[k] || 0) + s[k];
          currentIdx++;
          renderQuestion();
        });
      });
    }

    function renderResult() {
      var max = 'extern';
      if (scores.mbo > scores[max]) max = 'mbo';
      if (scores.fbo > scores[max]) max = 'fbo';
      var results = {
        extern: {
          title: 'Ein externer Verkauf passt vermutlich zu Ihnen.',
          body: 'Ihre Antworten deuten darauf hin, dass ein Verkauf an einen externen Käufer — etwa einen strategischen Investor oder ein branchennahes Unternehmen — der passende Weg sein könnte. Wir unterstützen Sie bei der Bewertung, der diskreten Käufersuche und der Verhandlungsführung.',
          link: 'unternehmensnachfolge/firmenverkauf.html'
        },
        mbo: {
          title: 'Ein Management Buy-out könnte der passende Weg sein.',
          body: 'Ihre Antworten deuten darauf hin, dass eine Übergabe an bestehende Führungskräfte eine gute Option für Sie sein könnte. Ein MBO schafft Kontinuität und erhält das Wissen im Unternehmen. Wir strukturieren die Finanzierung und begleiten beide Seiten.',
          link: 'unternehmensnachfolge/management-buy-out.html'
        },
        fbo: {
          title: 'Eine familieninterne Nachfolge bietet sich an.',
          body: 'Ihre Antworten deuten auf eine familieninterne Übergabe hin. Dieser Weg bewahrt das Lebenswerk in der Familie. Wir begleiten die fairen Strukturen zwischen Generationen, die Bewertung und die steuerliche Optimierung.',
          link: 'unternehmensnachfolge/familieninterne-nachfolge.html'
        }
      };
      var r = results[max];
      if (progressLabel) progressLabel.textContent = 'Ihre Ersteinschätzung';
      if (progressFill) progressFill.style.width = '100%';
      checkContainer.innerHTML =
        '<div class="check-result">' +
          '<p class="check-result-title">' + r.title + '</p>' +
          '<p class="check-result-body">' + r.body + '</p>' +
          '<p style="color:var(--vz-text-muted);font-size:14px;margin:0 0 20px;">Diese Ersteinschätzung ersetzt kein persönliches Gespräch. In einem kostenlosen Erstgespräch analysieren wir Ihre individuelle Situation.</p>' +
          '<div class="check-result-ctas">' +
            '<a href="#" onclick="openTerminDialog();return false;" class="btn btn-primary">Kostenloses Erstgespräch</a>' +
            '<a href="' + r.link + '" class="btn btn-secondary">Mehr zu diesem Weg</a>' +
            '<button type="button" class="btn btn-ghost" data-check-restart>Check neu starten</button>' +
          '</div>' +
        '</div>';
      var restart = checkContainer.querySelector('[data-check-restart]');
      if (restart) restart.addEventListener('click', function () {
        currentIdx = 0; scores = { extern: 0, mbo: 0, fbo: 0 }; renderQuestion();
      });
    }
    renderQuestion();
  }

  /* ------- FAQ Accordion ------- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isOpen = btn.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      var answer = btn.nextElementSibling;
      if (answer) answer.classList.toggle('open', isOpen);
    });
  });

  /* ------- Tabs (Wissen-Sektion) ------- */
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('aria-controls');
      var parent = btn.closest('#wissen, .tab-container') || document;
      parent.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      parent.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ------- Filter (Referenzen / Mandate) ------- */
  var filterRoot = document.querySelector('[data-filter-root]');
  if (filterRoot) {
    var selects = filterRoot.querySelectorAll('[data-filter]');
    var items = filterRoot.querySelectorAll('[data-item]');
    var countEl = filterRoot.querySelector('[data-filter-count]');
    var emptyEl = filterRoot.querySelector('[data-filter-empty]');
    var resetBtn = filterRoot.querySelector('[data-filter-reset]');

    function applyFilter() {
      var filters = {};
      selects.forEach(function (s) { filters[s.getAttribute('data-filter')] = s.value; });
      var visible = 0;
      items.forEach(function (item) {
        var show = true;
        for (var k in filters) {
          if (!filters[k]) continue;
          var attr = item.getAttribute('data-' + k) || '';
          if (attr.split(',').map(function (v) { return v.trim(); }).indexOf(filters[k]) === -1) {
            show = false; break;
          }
        }
        item.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (countEl) countEl.textContent = visible + ' ' + (visible === 1 ? 'Eintrag' : 'Einträge');
      if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';
    }
    selects.forEach(function (s) { s.addEventListener('change', applyFilter); });
    if (resetBtn) resetBtn.addEventListener('click', function () {
      selects.forEach(function (s) { s.value = ''; });
      applyFilter();
    });
    applyFilter();
  }
})();
