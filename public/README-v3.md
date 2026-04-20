# UN-Website v3 — Perfektionsphase

## WAS WURDE GEÄNDERT (nach User-Feedback)

### Design — Shell exakte VZ-Kopie
- Utility Bar (oberste Zeile) mit Links rechts
- Weisses Header mit Logo links, Hauptnavigation mit Dropdowns (hover), CTA rechts
- Hamburger nur auf Mobile
- Quicklinks-Bar grau hinterlegt
- Schrift: Inter, 17px Base, VZ-typische Grössen
- Farben: #004388 (Primary), #C95321 (Orange), #f4f6f9 (bg-alt)

### Hauptseiten-Sektionen
1. **Hero** — Titel aus ALT ("Ihr Lebenswerk verdient den richtigen Nachfolger"), Roger Hofstetter Box RECHTS (nicht unten)
2. **Proof Bar** — 3 Zahlen (VZ-MA raus), animiert mit Count-Up
3. **Shortcut Bar** NEU — schmale Leiste "| Referenzen | Aktuelle Mandate |" für gestresste Unternehmer
4. **Szenarien** — 3-Wege-Karten mit SVG-Icons aus ALT
5. **Nachfolge-Check** — 5 Fragen mit Scoring-Logik (aus ALT übernommen)
6. **Ansatz (Vor/Während/Nach)** — neue Version bleibt
7. **Team** — kompakt, 6 Karten à 1 Zeile (aus ALT kompakter gemacht)
8. **Referenzen** — 4 pro Reihe, Logo oben + Tabelle (Branche/Region/Grösse/Abschluss), KEIN Fliesstext
9. **Mandate** — orange Header + Titel + Tabelle (Branche/Region/MA/Rechtsform/EBIT, KEIN Preis)
10. **Käufer & Investoren** — neues Layout, alte Texte
11. **Wissen & Ressourcen** — Tabs: FAQ + Merkblätter + Videos (aus ALT)
12. **CTA Final** — Dark-Gradient

### "Zukunft planen, Zukunft sichern" — KOMPLETT ENTFERNT (User-Wunsch)
### Konkurrenz-Bashing — ALLES entfernt (validiert mit grep)

### Detailseiten
- **Referenzen** (4): Prominenter 16:9 Inhaber-Bild-Platzhalter, Testimonial-Box, Fakten-Sidebar
- **Mandate** (10): Lebensmittelhändler-Layout 1:1 (Profil→Käufer→Ziel→Fakten→Nächster Schritt), Berater INLINE (quer, nicht Sidebar) nach "Nächster Schritt"
- **Nachfolgewege** (FBO/MBO/Extern): DEUTLICH ausgebaut — jede Seite hat 8-10 Sections mit Listen, Subsections, konkrete Zahlen und Vorgehen. Die Inhalte sind aus realer M&A-Erfahrung gestaltet.
- **Zeitpunkt** (Vor/Während/Nach): wie neue Version

## DATEIEN (24 HTML + 2 Assets)

```
public/
├── index.html                    (die neue Hauptseite)
├── referenzen.html               (Übersicht mit Filter)
├── mandate.html                  (Übersicht mit Filter, gleiche Tabellenlogik)
├── assets/
│   ├── vz.css                    (Shared Stylesheet, ~1400 Zeilen)
│   ├── vz.js                     (Shared JS)
│   └── roger-hofstetter.svg      (Platzhalter — ersetzen!)
├── referenzen/*.html             (4 Referenzprojekte)
├── mandate/*.html                (10 Mandate)
├── unternehmensnachfolge/*.html  (3 Wege: FBO, MBO, Extern — ausführlich)
└── zeitpunkt/*.html              (3 Phasen)
```

## WAS NOCH ZU TUN IST

1. **Roger Hofstetter Foto** — `/assets/roger-hofstetter.svg` durch echtes JPG/WebP ersetzen (gleichen Dateinamen behalten oder in HTML anpassen)
2. **Inhaber-Fotos** der Referenzen — Platzhalter `<!-- [PLATZHALTER: ... -->` an 2 Stellen pro Referenzseite
3. **Telefon/E-Mail** — aktuell `+41 44 123 45 67` / `roger.hofstetter@xy.ch`
4. **PDF-Downloads** auf Mandat-Seiten — aktuell `href="#"`

## DEPLOYMENT

```bash
# Alte public/ Sicherung
cd "C:\Claude Projekte\09 - UN-Website"
git add -A && git commit -m "Backup v2 vor v3"

# Neue public/ einspielen (ZIP entpacken, alte public/ ersetzen)
git add -A
git commit -m "v3: Vollständige Überarbeitung nach User-Feedback"
git push
# Vercel auto-deployt
```
