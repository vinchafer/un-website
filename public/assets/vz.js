/* ============================================================
   XY XxxxxZentrum — Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ------- Modal (Termin vereinbaren) -------
  function openModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      e.preventDefault();
      openModal(openBtn.getAttribute('data-modal-open'));
      return;
    }
    var closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      e.preventDefault();
      closeModal(closeBtn.getAttribute('data-modal-close'));
      return;
    }
    if (e.target.classList && e.target.classList.contains('vz-modal-backdrop')) {
      e.target.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.vz-modal-backdrop.open');
      if (open) { open.classList.remove('open'); document.body.style.overflow = ''; }
      var nav = document.querySelector('.vz-mobile-nav.open');
      if (nav) nav.classList.remove('open');
    }
  });

  // ------- Mobile menu -------
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-mobile-nav-toggle]');
    if (btn) {
      e.preventDefault();
      var nav = document.querySelector('.vz-mobile-nav');
      if (nav) nav.classList.toggle('open');
    }
    var close = e.target.closest('[data-mobile-nav-close]');
    if (close) {
      var n = document.querySelector('.vz-mobile-nav');
      if (n) n.classList.remove('open');
    }
  });

  // ------- Termin-Form Submit (fake) -------
  document.addEventListener('submit', function (e) {
    var form = e.target.closest('[data-termin-form]');
    if (form) {
      e.preventDefault();
      var confirmEl = form.querySelector('[data-termin-confirm]');
      form.style.display = 'none';
      if (confirmEl) confirmEl.style.display = 'block';
    }
  });

  // ------- Nachfolge-Check (Quiz) -------
  var checkRoot = document.querySelector('[data-nachfolge-check]');
  if (checkRoot) {
    var questions = [
      {
        q: 'In welchem Zeithorizont planen Sie die Übergabe Ihres Unternehmens?',
        opts: [
          { label: 'Innerhalb der nächsten 2 Jahre', score: { extern: 2, mbo: 2, fbo: 1 } },
          { label: 'In 3 bis 5 Jahren', score: { extern: 3, mbo: 2, fbo: 2 } },
          { label: 'In mehr als 5 Jahren', score: { extern: 2, mbo: 3, fbo: 3 } },
          { label: 'Noch unklar', score: { extern: 1, mbo: 1, fbo: 1 } }
        ]
      },
      {
        q: 'Gibt es in Ihrer Familie einen möglichen Nachfolger?',
        opts: [
          { label: 'Ja, ein Familienmitglied ist interessiert und geeignet', score: { fbo: 5 } },
          { label: 'Ja, aber noch unsicher', score: { fbo: 3, mbo: 1 } },
          { label: 'Nein, keine Option', score: { extern: 3, mbo: 3 } }
        ]
      },
      {
        q: 'Gibt es im Management eine Person, die das Unternehmen übernehmen könnte?',
        opts: [
          { label: 'Ja, es gibt eine klare Kandidatin oder einen Kandidaten', score: { mbo: 5 } },
          { label: 'Vielleicht, aber noch nicht geprüft', score: { mbo: 3, extern: 1 } },
          { label: 'Nein, kein Management-Kandidat', score: { extern: 4 } }
        ]
      },
      {
        q: 'Wie wichtig ist Ihnen ein hoher Verkaufserlös?',
        opts: [
          { label: 'Sehr wichtig, es ist meine Altersvorsorge', score: { extern: 4, mbo: 1 } },
          { label: 'Wichtig, aber nicht das Entscheidende', score: { extern: 2, mbo: 2, fbo: 2 } },
          { label: 'Weniger wichtig, Kontinuität hat Vorrang', score: { fbo: 3, mbo: 3 } }
        ]
      },
      {
        q: 'Was ist Ihnen beim Nachfolger am wichtigsten?',
        opts: [
          { label: 'Weiterführung im gleichen Geist', score: { fbo: 3, mbo: 3 } },
          { label: 'Bestes finanzielles Angebot', score: { extern: 4 } },
          { label: 'Arbeitsplätze erhalten', score: { mbo: 3, extern: 2, fbo: 2 } },
          { label: 'Diskrete, schnelle Abwicklung', score: { extern: 3 } }
        ]
      }
    ];

    var currentIdx = 0;
    var scores = { extern: 0, mbo: 0, fbo: 0 };

    function renderQuestion() {
      if (currentIdx >= questions.length) {
        renderResult();
        return;
      }
      var q = questions[currentIdx];
      var progress = questions.map(function (_, i) {
        return '<span' + (i <= currentIdx ? ' class="active"' : '') + '></span>';
      }).join('');
      var options = q.opts.map(function (o, i) {
        return '<button type="button" class="vz-check-option" data-idx="' + i + '">' + o.label + '</button>';
      }).join('');
      checkRoot.innerHTML =
        '<div class="vz-check-progress">' + progress + '</div>' +
        '<div class="vz-eyebrow">Frage ' + (currentIdx + 1) + ' von ' + questions.length + '</div>' +
        '<p class="vz-check-question">' + q.q + '</p>' +
        '<div class="vz-check-options">' + options + '</div>';

      checkRoot.querySelectorAll('.vz-check-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = +btn.getAttribute('data-idx');
          var s = q.opts[idx].score || {};
          for (var k in s) { scores[k] = (scores[k] || 0) + s[k]; }
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
          body: 'Ihre Antworten deuten darauf hin, dass ein Verkauf an einen externen Käufer — etwa einen strategischen Investor oder ein branchennahes Unternehmen — der passende Weg sein könnte. Wir unterstützen Sie bei der Bewertung, der diskreten Käufersuche und der Verhandlungsführung.'
        },
        mbo: {
          title: 'Ein Management Buy-out könnte der passende Weg sein.',
          body: 'Ihre Antworten deuten darauf hin, dass eine Übergabe an bestehende Führungskräfte eine gute Option für Sie sein könnte. Ein MBO schafft Kontinuität und erhält das Wissen im Unternehmen. Wir strukturieren die Finanzierung und begleiten beide Seiten.'
        },
        fbo: {
          title: 'Eine familieninterne Nachfolge bietet sich an.',
          body: 'Ihre Antworten deuten auf eine familieninterne Übergabe hin. Dieser Weg bewahrt das Lebenswerk in der Familie. Wir begleiten die fairen Strukturen zwischen Generationen, die Bewertung und die steuerliche Optimierung.'
        }
      };
      var r = results[max];
      checkRoot.innerHTML =
        '<div class="vz-eyebrow">Ihre Ersteinschätzung</div>' +
        '<h3 style="font-size:1.35rem;color:var(--vz-primary);margin:0 0 12px;">' + r.title + '</h3>' +
        '<p style="margin:0 0 20px;line-height:1.6;">' + r.body + '</p>' +
        '<p style="margin:0 0 20px;color:var(--vz-text-muted);font-size:0.9rem;">Diese Ersteinschätzung ersetzt kein persönliches Gespräch. In einem kostenlosen Erstgespräch analysieren wir Ihre individuelle Situation.</p>' +
        '<a href="#" data-modal-open="termin-modal" class="vz-btn">Kostenloses Erstgespräch vereinbaren</a> ' +
        '<button type="button" class="vz-btn vz-btn--ghost" data-check-restart>Check neu starten</button>';

      var restart = checkRoot.querySelector('[data-check-restart]');
      if (restart) restart.addEventListener('click', function () {
        currentIdx = 0; scores = { extern: 0, mbo: 0, fbo: 0 }; renderQuestion();
      });
    }

    renderQuestion();
  }

  // ------- Filter (Referenzen + Mandate) -------
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
          if (!filters[k] || filters[k] === '') continue;
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
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        selects.forEach(function (s) { s.value = ''; });
        applyFilter();
      });
    }
    applyFilter();
  }
})();
