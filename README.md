# XY Unternehmensnachfolge — Landing Page

Vollständige, produktionsfertige Landing Page für den Bereich Unternehmensnachfolge.
Reines HTML/CSS/JavaScript — keine Frameworks, keine Build-Tools, keine externen Dependencies.

## Technischer Stack

- HTML5 / CSS3 / Vanilla JavaScript
- Google Fonts (Source Sans Pro) — einziger externer Request
- Keine npm-Dependencies
- Responsive: 375px / 768px / 1024px / 1280px
- Single-File-Architektur (`public/index.html`)

## Deployment (Vercel)

```bash
# Option 1: Vercel CLI
vercel

# Option 2: GitHub → Vercel Dashboard
# 1. Repo zu GitHub pushen
# 2. Vercel mit GitHub verbinden
# 3. Output Directory: "public" (bereits in vercel.json konfiguriert)
# 4. Deploy ist automatisch — keine Build-Steps nötig
```

Lokales Testen:
```bash
python -m http.server 8000 --directory public
# → http://localhost:8000
```

## Struktur

```
/09-UN-Website/
├── public/
│   └── index.html          ← Hauptdatei (CSS + JS inline, alles in einer Datei)
├── vercel.json             ← Minimale Vercel-Konfiguration
├── package.json            ← Projekt-Metadaten (keine Dependencies)
├── README.md               ← Diese Datei
└── Vorbereitung/           ← Konzept- und Strategiedokumente
```

## Integration in bestehende Website

1. `public/index.html` öffnen — enthält CSS + JS inline
2. Platzhalter ersetzen (suche nach `[PLATZHALTER:`)
3. Logo-SVG in Navigation und Footer ersetzen
4. CSS-Variablen in `:root` an Corporate Design anpassen (falls nötig)
5. In Drupal oder bestehendes CMS integrieren, oder via Vercel standalone deployen

## Platzhalter-Übersicht

| Platzhalter | Wo | Priorität |
|---|---|---|
| `XY` (Firmenname) | Überall | Hoch |
| Logo SVG | Navigation, Footer | Hoch |
| `[PLATZHALTER: Telefon]` | CTA-Section, Footer | Kritisch |
| `[PLATZHALTER: E-Mail]` | CTA-Section, Footer | Kritisch |
| `[PLATZHALTER: Adresse]` | Footer | Mittel |
| Testimonials (3 Stück) | Section 7 | Kritisch |
| Mandate (4 Stück) | Section 6 | Hoch |
| Team-Fotos (optional) | Section 5 | Niedrig |
| LinkedIn-URL | Footer | Niedrig |
| Canonical URL | `<head>` | Hoch |
| OG Image | `<head>` | Mittel |

## Seitenstruktur (9 Sektionen)

| # | ID | Inhalt |
|---|---|---|
| 0 | `#main-nav` | Sticky Navigation + Mobile Menu |
| 1 | `#hero` | Hero mit SVG-Diagramm, 2 CTAs |
| 2 | `#proof-bar` | Social Proof: 4 Kennzahlen mit Counter-Animation |
| 3 | `#szenarien` | Nachfolge-Szenarien + interaktiver Nachfolge-Check |
| 4 | `#ansatz` | Timeline: Vor / Während / Nach |
| 5 | `#kompetenz` | Zahlen + interdisziplinäres Team |
| 6 | `#mandate` | Aktuelle Verkaufsmandate |
| 7 | `#testimonials` | Kundenstimmen |
| 8 | `#wissen` | FAQ / Merkblätter / Videos (Tabs) |
| 9 | `#kontakt` | Finaler CTA + Kontaktformular |

## SEO

- Schema.org JSON-LD: `ProfessionalService` + `FAQPage` (8 Fragen)
- Meta Title / Description optimiert (DE)
- Open Graph Tags für LinkedIn / Social Sharing
- Canonical URL gesetzt
- H1 / H2 / H3 Hierarchie sauber
- Ladezeit-Ziel: < 2 Sekunden (keine externen Bilder, nur inline SVG)

## Barrierefreiheit

- Keyboard-Navigation auf allen interaktiven Elementen
- `focus-visible` Outline (2px solid accent)
- ARIA Labels, Roles, States (nav, tablist, tab, tabpanel, dialog)
- `aria-expanded` auf Accordion-Items und Hamburger
- `aria-hidden="true"` auf dekorativen SVGs
- `prefers-reduced-motion` — alle Animationen deaktivierbar
- WCAG 2.1 AA Kontraste (weiss auf `#003366` = 9.8:1)

## Interaktive Funktionen

| Feature | Implementierung |
|---|---|
| Sticky Nav + Shadow | `IntersectionObserver` / scroll event |
| Hamburger Menu | CSS transform + JS toggle |
| Smooth Scroll | CSS `scroll-behavior: smooth` |
| Active Nav Highlighting | `IntersectionObserver` |
| Counter Animation | `requestAnimationFrame`, ease-out |
| Scroll Reveal | `IntersectionObserver`, staggered delays |
| Timeline Animation | `IntersectionObserver`, CSS width transition |
| Nachfolge-Check | Vanilla JS Scoring-Logik (FBO/MBO/extern) |
| FAQ Accordion | JS max-height toggle |
| Tab Navigation | JS class switching |
| Formular-Validierung | Client-seitig, kein Backend-Submit (Prototyp) |

## Dateigrösse

- Aktuell: ~140 KB (HTML + inline CSS + inline JS, vor Gzip)
- Mit Gzip: ~35–45 KB geschätzt
- Keine externen Bilder — nur inline SVG
- Einziger externer Request: Google Fonts

## Version History

- **v1.0** (April 2026): Vollständige DE-Version mit allen 9 Sektionen
