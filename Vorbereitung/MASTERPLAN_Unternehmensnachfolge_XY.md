# MASTERPLAN: Neue Website Unternehmensnachfolge
## Projekt: XY Unternehmensnachfolge | Version 1.0
### Erstellt für Claude Haiku (Implementierungs-Instanz)

---

> **WICHTIG FÜR HAIKU:** Dieser Plan ist deine einzige Wahrheitsquelle. Weiche nicht ab. Jede Sektion hat ein klares Ziel, eine klare Logik und klare Inhalte. Du programmierst – du entscheidest nicht strategisch. Bei Unklarheiten: Halte dich an den Plan.

---

## TEIL 0: PROJEKT-KONTEXT & RAHMENBEDINGUNGEN

### 0.1 Was ist dieses Projekt?
Eine vollständig neu konzipierte, fertig programmierte Landing Page für den Bereich Unternehmensnachfolge eines Schweizer Finanzdienstleisters. Der Firmenname lautet im Code und auf der Seite durchgängig **"XY"** (Platzhalter für spätere Integration).

### 0.2 Zweck der Seite
Qualifizierte Leads generieren – konkret: Erstgespräche mit KMU-Unternehmern in der Schweiz. Jede Designentscheidung, jeder Text, jede Struktur dient diesem einen Ziel.

### 0.3 Zielgruppe (SEHR PRÄZISE)
- Schweizer KMU-Unternehmer, 50–65 Jahre
- Firmeninhaber / Aktionäre von Unternehmen mit CHF 1–30 Mio. Umsatz, 5–200 Mitarbeitende
- Sie denken gerade (oft zum ersten Mal ernsthaft) über ihre Nachfolge nach
- Sie sind nicht zwingend digital-affin
- Sie vertrauen Menschen, nicht Systemen
- Sie haben Angst, ihrem Lebenswerk nicht gerecht zu werden
- **Sie wissen noch nicht, welche Nachfolgeoption die richtige ist**

### 0.4 Sprachen
Die Seite wird in 4 Sprachen gebaut:
1. **Deutsch (DE)** – Hauptsprache, wird zuerst gebaut
2. **Französisch (FR)** – zweite Priorität
3. **Italienisch (IT)** – dritte Priorität
4. **Englisch (EN)** – vierte Priorität

Haiku baut zuerst die vollständige DE-Version. Danach werden FR, IT, EN als separate Dateien ergänzt. Alle Texte werden mit Platzhaltern gekennzeichnet, die übersetzt werden können.

### 0.5 Technische Rahmenbedingungen
- **Stack:** Reines HTML5 / CSS3 / Vanilla JavaScript – kein Framework, kein Build-Tool
- **Warum:** Maximale Portabilität für spätere VZ-Integration; läuft sofort im Browser ohne Installation
- **Responsive:** Mobile-first Design, drei Breakpoints: 375px / 768px / 1280px
- **Performance-Ziel:** Ladezeit unter 2 Sekunden, keine externen Abhängigkeiten ausser Google Fonts
- **Dateistruktur:** Alle Dateien in einem Ordner, selbst-contained

### 0.6 Design-System (1:1 VZ-Referenz)
```
Farben:
  --color-primary:     #003366   /* VZ Dunkelblau */
  --color-secondary:   #005A9C   /* VZ Mittelblau */
  --color-accent:      #0078C8   /* VZ Hellblau / CTA */
  --color-text:        #1A1A1A   /* Fast Schwarz */
  --color-text-light:  #666666   /* Grau für Subtext */
  --color-bg:          #FFFFFF   /* Weiss */
  --color-bg-light:    #F5F7FA   /* Sehr helles Grau für Sektionen */
  --color-bg-dark:     #002244   /* Sehr dunkles Blau für dunkle Sektionen */
  --color-border:      #E0E6ED   /* Zarte Linie */
  --color-success:     #2E7D32   /* Grün für Bestätigungen */

Typografie:
  Font-Family: 'Source Sans Pro', sans-serif (Google Fonts)
  H1:    48px / 56px line-height / weight 700 / color primary
  H2:    36px / 44px / weight 600 / color primary
  H3:    24px / 32px / weight 600 / color text
  H4:    18px / 26px / weight 600 / color text
  Body:  16px / 26px / weight 400 / color text
  Small: 14px / 22px / weight 400 / color text-light
  Caption: 12px / 18px / weight 400 / color text-light

Abstände (8px Grid):
  --space-xs:   8px
  --space-sm:   16px
  --space-md:   24px
  --space-lg:   40px
  --space-xl:   64px
  --space-2xl:  96px
  --space-3xl:  128px

Schatten:
  --shadow-sm:  0 2px 8px rgba(0,0,0,0.08)
  --shadow-md:  0 4px 16px rgba(0,0,0,0.12)
  --shadow-lg:  0 8px 32px rgba(0,0,0,0.16)

Radius:
  --radius-sm:  4px
  --radius-md:  8px
  --radius-lg:  16px

Buttons:
  Primary: bg accent, text white, padding 14px 28px, radius 4px, font-weight 600
  Secondary: border 2px accent, text accent, bg transparent, gleiche Maße
  Hover Primary: bg #006AB8 (leicht dunkler), transition 200ms
```

---

## TEIL 1: STRATEGISCHE ARCHITEKTUR

### 1.1 Der zentrale strategische Unterschied zur aktuellen Seite

Die aktuelle Seite denkt aus **Angebots-Perspektive**: "Was bieten wir an?"
Die neue Seite denkt aus **Aktionärs-Perspektive**: "Was beschäftigt den Unternehmer gerade?"

**Konsequenz für den Aufbau:**
1. Erst: Situation des Unternehmers adressieren (Emotionen, Fragen, Unsicherheiten)
2. Dann: Lösung und Kompetenz zeigen
3. Zuletzt: Konkreter nächster Schritt (CTA)

### 1.2 Der Kern-USP (muss auf der ganzen Seite spürbar sein)

**"Wir begleiten den Aktionär – nicht nur die Transaktion."**

Das bedeutet konkret:
- **Vor dem Verkauf:** Firma optimieren, private Situation analysieren (5–8 Jahre früher als Wettbewerb)
- **Während des Verkaufs:** Vollständige M&A-Begleitung mit interdisziplinärem Team
- **Nach dem Verkauf:** Pensionierungsplanung, Nachlassplanung, Vermögensverwaltung

Dies ist fundamental anders als alle anderen Anbieter (Big4, Boutiquen, Banken, Treuhänder) die nur die Transaktion begleiten.

### 1.3 Beweis-Architektur (Trust Building)
Jede Behauptung braucht einen Beweis. Die Seite arbeitet mit vier Trust-Layern:

| Behauptung | Beweis |
|---|---|
| Grösster Player CH | "40–50 Transaktionen jährlich / #1 laut Dealsuite" |
| Viel Erfahrung | "200+ abgeschlossene Projekte / 10+ Jahre" |
| Interdisziplinär | Team-Darstellung: Juristen, Banker, Treuhänder, Unternehmer, Headhunter |
| Ganzheitlich | Visualisierung: Vor / Während / Nach der Transaktion |
| Wirklich gut | Echte Kundenstimmen mit Namen und Firma |
| Aktiv im Markt | Aktuelle Verkaufsmandate (zeigt: wir arbeiten gerade) |

### 1.4 SEO / GEO Strategie

**Primäre Keywords (DE):**
- Unternehmensnachfolge Schweiz
- Firma verkaufen Schweiz
- Nachfolgeregelung KMU Schweiz
- Unternehmensverkauf Beratung Schweiz
- Firmenbewertung KMU Schweiz
- Unternehmensnachfolge Beratung Zürich / Basel / Bern / Genf

**GEO-Targeting:** Standortreferenzen in Texten (Zürich, Bern, Basel, Genf, St. Gallen, Luzern) ohne separate Seiten zu bauen – via natürlichem Text-Kontext.

**Strukturelle SEO-Massnahmen:**
- Klare H1 / H2 / H3 Hierarchie
- Meta Title: max 60 Zeichen, Keyword zuerst
- Meta Description: max 155 Zeichen, CTA enthalten
- Schema.org Markup: Organization + Service + FAQ
- Ladezeit < 2 Sekunden
- Alt-Texte auf allen Bildern
- Canonical URL gesetzt
- Open Graph Tags für LinkedIn/Social Sharing

**Meta Tags DE:**
```html
<title>Unternehmensnachfolge Schweiz | XY – Nr. 1 für KMU</title>
<meta name="description" content="Schweizer Marktführer für KMU-Nachfolgen. 200+ abgeschlossene Projekte, 40–50 Transaktionen pro Jahr. Kostenloses Erstgespräch vereinbaren.">
```

---

## TEIL 2: SEITENSTRUKTUR (VOLLSTÄNDIG)

Die Seite besteht aus **9 Sektionen** in dieser exakten Reihenfolge:

```
SECTION 0 – NAVIGATION (Sticky Header)
SECTION 1 – HERO (Situation adressieren)
SECTION 2 – SOCIAL PROOF BAR (Zahlen, schnell)
SECTION 3 – NACHFOLGE-SZENARIEN (Welcher Weg passt zu mir?)
SECTION 4 – UNSER ANSATZ: VOR / WÄHREND / NACH (USP visualisiert)
SECTION 5 – WARUM XY? (Team & Kompetenz)
SECTION 6 – AKTUELLE MANDATE (Marktaktivität)
SECTION 7 – KUNDENSTIMMEN (Vertrauen)
SECTION 8 – WISSENSBEREICH (Lead Nurturing, SEO)
SECTION 9 – FINALER CTA + FOOTER
```

---

## TEIL 3: DETAILLIERTE SEKTION-SPEZIFIKATIONEN

---

### SECTION 0 – STICKY NAVIGATION

**Ziel:** Orientierung, jederzeit erreichbarer CTA, Vertrauensmarke

**Design:**
- Höhe: 72px Desktop / 60px Mobile
- Hintergrund: Weiss mit leichtem Schatten (shadow-sm)
- Beim Scrollen: wird sticky, leichter Schatten verstärkt sich
- Links: XY Logo (SVG Platzhalter) | Navigation Links | CTA Button

**Navigation Links (Desktop):**
Unser Ansatz | Nachfolgeoptionen | Team | Mandate | Kontakt

**Navigation Links (Mobile):**
Hamburger Menu → vollbild Overlay, Dunkelblau, weisse Schrift

**Rechts immer sichtbar:**
Button Primary: "Kostenloses Erstgespräch" → scrollt zu SECTION 9 / Ankerlink

**Sprachumschalter:**
DE | FR | IT | EN – klein, oben rechts, ohne Flaggen, plain Text

---

### SECTION 1 – HERO

**Ziel:** Den Unternehmer in seiner Situation abholen. Sofort Relevanz schaffen. Einen klaren nächsten Schritt anbieten.

**Layout:**
- Volle Viewport-Höhe (min 600px)
- Hintergrund: Dunkelblau (#003366) mit sehr subtiler geometrischer Textur (CSS, kein Bild)
- Zwei-Spalten-Layout Desktop: Links Text (60%), Rechts visuelles Element (40%)
- Mobile: Single Column, Text oben, Visual unten

**Linke Seite – Text:**

```
EYEBROW (klein, uppercase, accent-farbe, letter-spacing):
"Unternehmensnachfolge · Schweiz"

H1 (weiss, gross, bold):
"Ihr Lebenswerk verdient
den richtigen Nachfolger."

SUBTEXT (weiss, 70% opacity, max 400px):
"Die Übergabe Ihres Unternehmens ist eine der
wichtigsten Entscheidungen Ihres Lebens.
Wir begleiten Sie – lange bevor der Prozess beginnt,
bis lange nachdem er abgeschlossen ist."

CTA GRUPPE:
[Kostenloses Erstgespräch vereinbaren]  ← Primary Button, weiss auf accent
[Unsere Projekte ansehen]               ← Secondary Button, weiss outline

VERTRAUENSZEILE darunter (klein, weiss 60% opacity):
"Das erste Gespräch ist kostenlos und unverbindlich."
```

**Rechte Seite – Visual:**
Ein animiertes, CSS-basiertes Element das die drei Nachfolgepfade symbolisiert:
Ein Kreis ("Ihr Unternehmen") mit drei Linien die zu drei Icons führen:
- Familie (Haus-Icon)
- Management (Person-Icon)
- Extern (Pfeil-Icon)
Einfache, saubere SVG-Grafik – kein Stockfoto.

**Mobile Anpassung:**
H1 auf 36px reduzieren. Visual nach unten, kompakter. Beide CTAs stapeln sich.

---

### SECTION 2 – SOCIAL PROOF BAR

**Ziel:** Sofort Grösse und Erfahrung kommunizieren. 5 Sekunden reichen.

**Layout:**
- Schmale Sektion: 120px Höhe Desktop
- Hintergrund: #F5F7FA (sehr hell)
- 4 Kennzahlen nebeneinander, durch vertikale Linien getrennt
- Mobile: 2x2 Grid

**Kennzahlen:**

```
[200+]          [40–50]              [10+]              [#1]
Abgeschlossene  Transaktionen        Jahre              Schweizer
Transaktionen   pro Jahr             Erfahrung          Marktführer*

                                                *laut Dealsuite Ranking
```

**Design Details:**
- Zahl: 40px, bold, color primary
- Label: 13px, color text-light, uppercase, letter-spacing
- Asterisk-Erklärung: 11px, ganz rechts unten in der Bar

---

### SECTION 3 – NACHFOLGE-SZENARIEN

**Ziel:** Dem Besucher helfen sich selbst einzuordnen. "Welcher Weg passt zu mir?" – Zielgruppenführung ohne Überladung.

**Strategische Überlegung (WICHTIG):**
Wir strukturieren NICHT nach Lösung (FBO/MBO/Extern) sondern zuerst nach **Situation/Frage** des Unternehmers. Erst danach zeigen wir die Lösung.

**Layout Desktop:**
- Section Header zentriert
- Darunter: 3 Karten nebeneinander, gleiche Breite, gleiche Höhe
- Karten haben Hover-Effekt (leichter Schatten, borderline blau)

**Section Header:**
```
EYEBROW: "Ihr nächster Schritt"
H2: "Welche Situation beschreibt Sie am besten?"
SUBTEXT: "Jede Nachfolge ist einzigartig. Wir finden gemeinsam den richtigen Weg."
```

**Karte 1 – Familiennachfolge (FBO)**
```
Icon: SVG Familienhaus / Generationen (einfach, blau)

SITUATION (kursiv, text-light):
"Mein Kind oder ein Familienmitglied
soll die Firma übernehmen."

TITEL (H3, bold):
Familieninterne Nachfolge

TEXT:
Der Generationenwechsel birgt Chancen und Risiken.
Wir sorgen für Fairness, klare Strukturen und
einen reibungslosen Übergang – für alle Beteiligten.

THEMEN (kleine Tags):
Generationenwechsel · Unternehmensbewertung · Steueroptimierung
Aktionärsbindungsvertrag · Familienkonflikte vermeiden

CTA Link: "Mehr erfahren →"
```

**Karte 2 – Management Buy Out (MBO)**
```
Icon: SVG Team/Gruppe von Personen

SITUATION (kursiv):
"Meine Geschäftsleitung oder
Mitarbeitende sollen übernehmen."

TITEL: Management Buy Out (MBO)

TEXT:
Eine Übergabe an vertraute Personen schafft
Kontinuität. Wir strukturieren die Finanzierung
und begleiten beide Seiten durch den Prozess.

THEMEN:
Finanzierungsstruktur · Schrittweise Übergabe
Management-Auswahl · Vertragsgestaltung

CTA Link: "Mehr erfahren →"
```

**Karte 3 – Verkauf an Dritte (MBI / Strategisch)**
```
Icon: SVG Handshake / Verbindung

SITUATION (kursiv):
"Ich suche einen externen Käufer
für mein Unternehmen."

TITEL: Verkauf an externen Käufer

TEXT:
Mit über 200 abgeschlossenen Projekten und einem
breiten Käufernetzwerk finden wir den Partner,
der zu Ihrem Unternehmen und Ihrer Vision passt.

THEMEN:
Käufersuche · Unternehmensbewertung · Due Diligence
Verhandlungsführung · Strukturierung der Transaktion

CTA Link: "Mehr erfahren →"
```

**Unter den Karten:**
```
Kleiner Hinweis-Text (zentriert, text-light):
"Noch unsicher, welcher Weg der richtige ist?
Im kostenlosen Erstgespräch analysieren wir Ihre Situation gemeinsam."
[Jetzt Termin vereinbaren] ← Secondary Button
```

---

### SECTION 4 – UNSER ANSATZ: VOR / WÄHREND / NACH

**Ziel:** Den einzigartigen USP von XY visualisieren. Dies ist die wichtigste Differenzierungs-Sektion.

**Strategischer Kern:**
Alle anderen zeigen einen Transaktionsprozess. Wir zeigen einen Aktionärs-Lebensweg.

**Layout:**
- Dunkle Sektion: Hintergrund #003366 (Dunkelblau), weisse Schrift
- Volle Breite
- Horizontale Timeline mit 3 Phasen auf Desktop
- Vertikale Timeline auf Mobile

**Section Header (weiss):**
```
EYEBROW (accent-farbe): "Unser Ansatz"
H2 (weiss): "Wir begleiten Sie – nicht nur beim Verkauf."
SUBTEXT (weiss 70%):
"Die meisten Berater steigen ein, wenn der Verkauf beginnt.
Wir beginnen bis zu 8 Jahre früher – und hören nicht auf,
wenn der Vertrag unterschrieben ist."
```

**Timeline Visualisierung:**

```
Phase 1          →→→→→→→→→→→      Phase 2          →→→→→→→→→→→      Phase 3
[HEUTE]                           [TRANSAKTION]                      [MORGEN]
5–8 Jahre vorher                  Der eigentliche Prozess            Nach dem Verkauf

VOR DEM VERKAUF                   WÄHREND DES VERKAUFS               NACH DEM VERKAUF

• Firma analysieren               • Unternehmensbewertung            • Pensionierungsplanung
• Optimierungspotenzial           • Käufer-/Nachfolgersuche          • Nachlassplanung
  identifizieren                  • Strukturierung der               • Vermögensanlage
• Liegenschaft &                    Transaktion                      • Steueroptimierung
  Liquidität optimieren           • Due Diligence                      (Kapitalgewinn)
• Lohn/Dividenden-                • Verhandlungsführung              • Vermögensverwaltung
  Verhältnis prüfen               • Vertragsabschluss                • Familiäre Übergabe
• Private Vorsorge planen
• Timing definieren

[Grüner Haken Icon]               [Blauer Pfeil Icon]                [Goldener Stern Icon]
```

**Unter der Timeline:**
```
Hervorgehobene Box (weiss auf dunkelblau, border weiss):
"Der entscheidende Unterschied: Bei XY steht der Aktionär im Mittelpunkt –
nicht die Transaktion. Das bedeutet für Sie: mehr Zeit, bessere Vorbereitung,
optimierter Verkaufspreis und finanzielle Sicherheit nach dem Verkauf."
```

---

### SECTION 5 – WARUM XY? TEAM & KOMPETENZ

**Ziel:** Konkrete Beweise liefern. Das interdisziplinäre Team als Stärke zeigen.

**Layout:** Hintergrund weiss. Zwei Unter-Sektionen.

**Sub-Sektion 5A: Die Zahlen (bereits als Bar gezeigt, hier mit Kontext)**

```
H2: "Der grösste Spezialist für KMU-Nachfolgen in der Schweiz."

SUBTEXT:
"Laut Dealsuite, der führenden Schweizer M&A-Datenbank,
sind wir Jahr für Jahr der aktivste Akteur im KMU-Segment."
```

**4 Fact-Boxen (gleiche Struktur wie Social Proof, aber mit mehr Kontext):**

```
Box 1: 200+ Transaktionen
"Über 200 erfolgreich abgeschlossene Projekte in mehr als 30 Branchen –
von der Bäckerei bis zum Technologieunternehmen."

Box 2: 40–50 pro Jahr
"Jährlich begleiten wir 40 bis 50 Unternehmensnachfolgen in der Deutschschweiz,
Romandie und im Tessin."

Box 3: 10+ Jahre
"Seit über 10 Jahren spezialisiert auf KMU-Nachfolgen –
mit jedem Projekt wächst unsere Erfahrung."

Box 4: CHF 1–30 Mio.
"Unser Fokus: Unternehmen mit einem Umsatz von CHF 1 bis 30 Millionen –
der Bereich wo wir wirklich den Unterschied machen."
```

**Sub-Sektion 5B: Das interdisziplinäre Team**

```
H3: "Nicht nur Berater. Ein vollständiges Expertenteam."

SUBTEXT:
"Andere Anbieter kommen mit einem oder zwei Spezialisten.
Wir bringen ein Team mit, das alle Dimensionen Ihrer Nachfolge abdeckt."

6 Rollen-Karten (3x2 Grid, oder horizontal scrollbar Mobile):

[Icon Jurist/Anwalt]          [Icon Banker/Finanz]      [Icon Treuhänder]
Anwälte                        Banker & Finanzexperten   Treuhänder
Rechtliche Absicherung         Bewertung & Finanzierung  Steueroptimierung
und Vertragsgestaltung         der Transaktion           und Strukturierung

[Icon Wirtschaftsprüfer]       [Icon Unternehmer]        [Icon Headhunter]
Wirtschaftsprüfer              Erfahrene Unternehmer     Headhunter & Netzwerk
Due Diligence und              Die selbst verkauft       Käufersuche und
Finanzanalyse                  haben. Echte Empathie.    Management-Besetzung
```

---

### SECTION 6 – AKTUELLE VERKAUFSMANDATE

**Ziel:** Beweisen dass wir aktiv im Markt sind. Käufer anziehen. Glaubwürdigkeit zeigen.

**Strategischer Nutzen:**
Diese Sektion dient ZWEI Zielgruppen gleichzeitig:
1. Verkäufer sehen: "Die haben immer gute Mandate" → Vertrauen
2. Käufer sehen: "Hier finde ich Unternehmen zu kaufen" → Neues Publikum

**Layout:**
- Hintergrund: #F5F7FA
- Section Header
- Grid: 2x2 Desktop / 1x1 Mobile (Karten stacken)
- "Alle Mandate ansehen" CTA

**Section Header:**
```
EYEBROW: "Aktuelle Mandate"
H2: "Unternehmen, die wir gerade betreuen."
SUBTEXT: "Diese Auswahl zeigt einen Teil unserer aktuellen Verkaufsmandate.
Alle Angaben sind anonymisiert."
```

**Mandat-Karte Struktur (4 Karten als Beispiele):**
```
[Farbiger Balken oben: accent-blau]
BRANCHE-TAG: z.B. "Produktion & Industrie"
TITEL: Kurze anonymisierte Beschreibung
KENNZAHLEN (3 Icons):
  📍 Region: z.B. "Deutschschweiz"
  💰 Umsatz: z.B. "CHF 5–10 Mio."
  👥 Mitarbeitende: z.B. "25–50 MA"
KURZBESCHREIBUNG: 2 Sätze max.
[Button: "Details anfragen"]
```

**Beispiel-Mandate (Platzhalter – werden mit echten Daten befüllt):**

Mandat 1: "Hochrentabler Produktionsbetrieb im Maschinenbau" | Deutschschweiz | CHF 8–12 Mio. | 30–50 MA
Mandat 2: "Führendes Dienstleistungsunternehmen im IT-Sektor" | Zürich/Umgebung | CHF 3–6 Mio. | 15–25 MA
Mandat 3: "Etablierter Fachhandel mit starker Marktstellung" | Zentralschweiz | CHF 5–8 Mio. | 20–35 MA
Mandat 4: "Erfolgreicher Handwerksbetrieb mit gutem Ruf" | Bern/Umgebung | CHF 2–4 Mio. | 10–20 MA

**Unter Grid:**
```
[Alle aktuellen Mandate ansehen →] ← Secondary Button, zentriert
```

---

### SECTION 7 – KUNDENSTIMMEN

**Ziel:** Emotionalen Beweis liefern. Echte Menschen, echte Geschichten.

**Layout:**
- Hintergrund: Weiss
- 3 Testimonials, horizontal auf Desktop, stacked auf Mobile
- Optional: Slider für Mobile

**Section Header:**
```
EYEBROW: "Kundenstimmen"
H2: "Was unsere Kunden sagen."
SUBTEXT: "Über 200 Unternehmer haben uns ihr Lebenswerk anvertraut."
```

**Testimonial Karte Struktur:**
```
[Grosses Anführungszeichen, accent-farbe, dekorativ]

ZITAT (18px, kursiv, text farbe, max 3 Sätze):
"[Echtes Kundenzitat hier einfügen]"

TRENNLINIE

FOTO: Kreisausschnitt, 60px Durchmesser (oder Initials-Avatar als Fallback)
NAME: "Vorname Nachname" (bold)
FIRMA: "Firmenname, Kanton" (text-light)
DATUM: "Monat Jahr" (klein, text-light)

[Optional: Link "Ganze Geschichte lesen →"]
```

**Platzhalter-Testimonials (MÜSSEN mit echten ersetzt werden):**

```
Testimonial 1:
"Wir haben mit mehreren Beratern gesprochen. XY war der einzige,
der sich wirklich für unsere Situation nach dem Verkauf interessiert hat.
Das hat unsere Entscheidung leicht gemacht."
– [Name Platzhalter], [Firma Platzhalter], Zürich, 2023

Testimonial 2:
"Der Prozess war komplex, aber wir haben uns nie allein gelassen gefühlt.
Die Kombination aus juristischem, steuerlichem und emotionalem Support
hat den Unterschied gemacht."
– [Name Platzhalter], [Firma Platzhalter], Bern, 2024

Testimonial 3:
"Ich dachte, ich würde meinen Betrieb an irgendjemanden verkaufen.
XY hat mir geholfen, den richtigen Nachfolger zu finden –
jemanden, der die Werte meines Unternehmens weiterlebt."
– [Name Platzhalter], [Firma Platzhalter], Basel, 2023
```

---

### SECTION 8 – WISSENSBEREICH

**Ziel:** Vertrauen durch Expertise aufbauen. SEO-relevante Inhalte platzieren. Lead-Nurturing.

**Strategische Platzierung:** Bewusst NACH den Conversion-Sektionen – wer noch nicht überzeugt ist, kann hier mehr lesen. Wer bereits überzeugt ist, scrollt einfach weiter.

**Layout:**
- Hintergrund: #F5F7FA
- Tabs: "Häufige Fragen" | "Merkblätter & Ratgeber" | "Videos"
- Default Tab: "Häufige Fragen"

**Section Header:**
```
EYEBROW: "Wissen & Ressourcen"
H2: "Alles was Sie zur Unternehmensnachfolge wissen müssen."
```

**Tab 1: FAQ (SEO-kritisch)**
Accordion-Format. Mindestens 8 Fragen. Klare, ehrliche Antworten. Kein Marketing-Sprech.

```
FAQ-Fragen:
1. "Wann ist der richtige Zeitpunkt für die Nachfolgeplanung?"
2. "Was ist meine Firma wirklich wert?"
3. "Wie finde ich den passenden Käufer?"
4. "Was passiert mit meinen Mitarbeitenden beim Verkauf?"
5. "Welche steuerlichen Konsequenzen hat ein Firmenverkauf?"
6. "Wie lange dauert ein Nachfolgeprozess?"
7. "Was kostet die Beratung durch XY?"
8. "Was ist der Unterschied zwischen FBO, MBO und einem externen Verkauf?"
```

**Tab 2: Merkblätter & Ratgeber**
3–4 Content-Karten (Icon + Titel + kurze Beschreibung + Download/Anfragen CTA)
```
• "10 Tipps für Ihre Nachfolgeplanung" – Merkblatt (PDF)
• "Unternehmensbewertung: Was ist meine Firma wert?" – Ratgeber
• "Steueroptimierung beim Firmenverkauf" – Merkblatt
• "Checkliste: Vorbereitung der Firmenübergabe" – Checkliste
```

**Tab 3: Videos**
3–4 Video-Thumbnails (externe Links / Einbettung)
Jedes mit: Titel, Dauer, Berater-Name

---

### SECTION 9 – FINALER CTA

**Ziel:** Conversion. Der Besucher der bis hier gescrollt hat, ist interessiert. Jetzt muss der Schritt zur Kontaktaufnahme maximal einfach sein.

**Layout:**
- Dunkle Sektion: Hintergrund #003366
- Zentrierter Content, maximal fokussiert
- Keine Ablenkung

**Content:**
```
H2 (weiss, gross, zentriert):
"Bereit für den nächsten Schritt?"

SUBTEXT (weiss 70%, zentriert, max 500px):
"Das erste Gespräch ist kostenlos und unverbindlich.
In 30 Minuten klären wir, wo Sie stehen und welche
Möglichkeiten Sie haben."

[Kostenloses Erstgespräch vereinbaren]
← Grosser Primary Button, Weiss auf Accent

KONTAKT-ALTERNATIVEN (klein, unterhalb):
Oder kontaktieren Sie uns direkt:
📞 [Telefon Platzhalter]  ·  ✉ [E-Mail Platzhalter]

VERTRAUENS-ZEILE:
🔒 Diskret · Unverbindlich · Kostenlos
```

**Kontaktformular (optional, aber empfohlen als Alternative zum Telefon):**
Minimales Inline-Formular: Name | Telefon | "Bitte kontaktieren Sie mich"
Keine unnötigen Felder. Datenschutz-Checkbox. Submit Button.

---

### FOOTER

```
4-Spalten Desktop / 2-Spalten Tablet / 1-Spalte Mobile

Spalte 1: XY Logo + kurze Beschreibung (2 Sätze) + Social Links (LinkedIn primär)

Spalte 2: Navigation
Nachfolgeoptionen
Unser Ansatz
Team
Mandate
Kontakt

Spalte 3: Ressourcen
Merkblätter
FAQ
Videos
Seminare

Spalte 4: Kontakt
[Adresse Platzhalter]
[Telefon Platzhalter]
[E-Mail Platzhalter]
[Termin vereinbaren Button]

Footer Bottom Bar:
© 2025 XY | Rechtliche Hinweise | Datenschutz | Impressum
Sprache: DE | FR | IT | EN
```

---

## TEIL 4: TECHNISCHE IMPLEMENTIERUNG (FÜR HAIKU)

### 4.1 Dateistruktur

```
/xy-unternehmensnachfolge/
├── index.html              ← Hauptdatei (Deutsch)
├── index-fr.html           ← Französisch (später)
├── index-it.html           ← Italienisch (später)
├── index-en.html           ← Englisch (später)
├── css/
│   ├── reset.css           ← CSS Reset / Normalisierung
│   ├── variables.css       ← Design-System Variablen
│   ├── typography.css      ← Typografie
│   ├── components.css      ← Buttons, Karten, Tags
│   ├── layout.css          ← Grid, Spacing, Container
│   ├── sections.css        ← Sektionsspezifische Styles
│   ├── navigation.css      ← Sticky Nav, Mobile Menu
│   ├── animations.css      ← Scroll-Animationen, Hover
│   └── responsive.css      ← Media Queries
├── js/
│   ├── main.js             ← Hauptlogik
│   ├── navigation.js       ← Sticky Nav, Mobile Menu
│   ├── tabs.js             ← Wissensbereich Tabs
│   ├── accordion.js        ← FAQ Accordion
│   ├── animations.js       ← Scroll-basierte Animationen (IntersectionObserver)
│   └── form.js             ← Kontaktformular Validierung
├── assets/
│   ├── icons/              ← SVG Icons (inline-fähig)
│   │   ├── family.svg
│   │   ├── management.svg
│   │   ├── external.svg
│   │   ├── lawyer.svg
│   │   ├── banker.svg
│   │   ├── trustee.svg
│   │   ├── auditor.svg
│   │   ├── entrepreneur.svg
│   │   └── headhunter.svg
│   ├── logo/
│   │   └── xy-logo.svg     ← Platzhalter Logo
│   └── images/             ← Wenn echte Bilder vorhanden (Testimonials)
└── README.md               ← Integrations-Anleitung für VZ
```

### 4.2 HTML Grundstruktur (index.html)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <title>Unternehmensnachfolge Schweiz | XY – Nr. 1 für KMU</title>
  <meta name="description" content="Schweizer Marktführer für KMU-Nachfolgen. 200+ Projekte, 40–50 Transaktionen/Jahr. Kostenloses Erstgespräch.">
  <meta name="keywords" content="Unternehmensnachfolge Schweiz, Firma verkaufen Schweiz, KMU Nachfolge, Firmenbewertung">
  <link rel="canonical" href="[URL Platzhalter]">
  
  <!-- Open Graph (LinkedIn/Social) -->
  <meta property="og:title" content="Unternehmensnachfolge Schweiz | XY">
  <meta property="og:description" content="Der Schweizer Marktführer für KMU-Nachfolgen. 200+ abgeschlossene Projekte.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="[OG Image Platzhalter]">
  
  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "XY Unternehmensnachfolge",
    "description": "Spezialist für KMU-Unternehmensnachfolgen in der Schweiz",
    "serviceType": "Business Succession Planning",
    "areaServed": "CH"
  }
  </script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/navigation.css">
  <link rel="stylesheet" href="css/sections.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- SECTION 0: Navigation -->
  <nav id="main-nav" class="nav-sticky">...</nav>
  
  <!-- SECTION 1: Hero -->
  <section id="hero" class="section-hero">...</section>
  
  <!-- SECTION 2: Social Proof Bar -->
  <section id="proof-bar" class="section-proof">...</section>
  
  <!-- SECTION 3: Nachfolge-Szenarien -->
  <section id="szenarien" class="section-szenarien">...</section>
  
  <!-- SECTION 4: Unser Ansatz -->
  <section id="ansatz" class="section-ansatz section-dark">...</section>
  
  <!-- SECTION 5: Warum XY -->
  <section id="kompetenz" class="section-kompetenz">...</section>
  
  <!-- SECTION 6: Aktuelle Mandate -->
  <section id="mandate" class="section-mandate section-light">...</section>
  
  <!-- SECTION 7: Kundenstimmen -->
  <section id="testimonials" class="section-testimonials">...</section>
  
  <!-- SECTION 8: Wissensbereich -->
  <section id="wissen" class="section-wissen section-light">...</section>
  
  <!-- SECTION 9: Finaler CTA -->
  <section id="kontakt" class="section-cta section-dark">...</section>
  
  <!-- Footer -->
  <footer id="footer">...</footer>
  
  <!-- JavaScript -->
  <script src="js/navigation.js"></script>
  <script src="js/tabs.js"></script>
  <script src="js/accordion.js"></script>
  <script src="js/animations.js"></script>
  <script src="js/form.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

### 4.3 Animations-Logik

```javascript
// Scroll-Animationen mit IntersectionObserver (kein GSAP nötig)
// Elemente die reinscrollen: fade-in + slide-up
// Zahlen in Section 2: Counter-Animation (0 → Zielzahl)
// Karten: staggered Einblenden (Karte 1 → 100ms delay → Karte 2 → 200ms → Karte 3)
// Timeline Section 4: Linien zeichnen sich beim Reinscollen
// Kein aggressives Autoplay, keine ablenkenden Animationen
```

### 4.4 Performance-Regeln für Haiku

- KEINE externen JavaScript-Libraries ausser Google Fonts
- Alle Icons als inline SVG oder als separate SVG-Dateien die inline eingebunden werden
- Bilder: lazy loading (`loading="lazy"`) auf alle `<img>` ausser Hero
- Hero: kein schweres Bild – reines CSS Hintergrundelement
- CSS: Keine `@import` chains. Alle files direkt im `<head>` verlinkt.
- Kein jQuery. Kein Bootstrap. Kein Tailwind.
- Alle Animationen: `prefers-reduced-motion` Media Query berücksichtigen

### 4.5 Accessibility

- Alle interaktiven Elemente keyboard-navigierbar
- ARIA-Labels auf allen Icon-only Buttons
- Color Contrast: AA Standard (WCAG 2.1)
- Alt-Text auf allen Bildern
- `<lang>` Attribut korrekt gesetzt

---

## TEIL 5: CONTENT-STRATEGIE & PLATZHALTER-SYSTEM

### 5.1 Platzhalter-Kennzeichnung

Alle Texte die noch durch echte Inhalte ersetzt werden müssen, werden wie folgt gekennzeichnet:

```html
<!-- [PLATZHALTER: Echtes Kundenzitat einfügen] -->
<!-- [PLATZHALTER: Telefonnummer einfügen] -->
<!-- [PLATZHALTER: Mandat-Daten aktualisieren] -->
```

### 5.2 Inhalt der Platzhalter (was wird noch benötigt)

| Sektion | Was fehlt noch | Priorität |
|---|---|---|
| Navigation | Echte Kontaktdaten | Hoch |
| Hero | Finales Hauptfoto oder Visual entscheiden | Mittel |
| Testimonials | 3 echte Kundenzitate mit Name, Firma | KRITISCH |
| Mandate | 4 aktuelle anonymisierte Mandate | Hoch |
| Team | Fotos und Bio der Berater | Mittel |
| FAQ | Finale Antworten prüfen | Mittel |
| Footer | Adresse, Telefon, Email | Hoch |

### 5.3 Ton und Sprache

**Grundprinzipien für alle Texte:**
- Direkte Ansprache: "Sie" (Hochdeutsch, nicht Schweizerdeutsch)
- Kurze Sätze. Maximal 20 Wörter pro Satz.
- Keine Floskeln ("wir bieten massgeschneiderte Lösungen")
- Keine Superlative ohne Beweis
- Fakten statt Adjektive
- Empathie zeigen: Den Unternehmer in seiner Situation ernst nehmen
- Nie herablassend, nie übermässig werbend

**Verboten:**
- "massgeschneidert"
- "ganzheitlich" (ausser in sehr spezifischem Kontext)
- "auf Augenhöhe"
- "wir nehmen uns Zeit für Sie"
- "Ihr Vertrauen ist unser wichtigstes Gut"

---

## TEIL 6: ANWEISUNGEN FÜR HAIKU (IMPLEMENTIERUNGS-INSTANZ)

### 6.1 Was Haiku tut

Haiku baut die vollständige, produktionsfertige HTML/CSS/JS Website basierend auf diesem Plan. Haiku entscheidet nicht strategisch – er implementiert präzise.

### 6.2 Reihenfolge der Implementierung

```
Schritt 1: CSS Variables + Reset + Typography
Schritt 2: Gemeinsame Komponenten (Buttons, Karten, Tags, Icons)
Schritt 3: Navigation (Desktop + Mobile)
Schritt 4: Section 1 – Hero (mit CSS-Visual)
Schritt 5: Section 2 – Social Proof Bar (mit Counter-Animation)
Schritt 6: Section 3 – Nachfolge-Szenarien (3 Karten)
Schritt 7: Section 4 – Ansatz Timeline (Vor/Während/Nach)
Schritt 8: Section 5 – Kompetenz (Zahlen + Team-Grid)
Schritt 9: Section 6 – Mandate (4 Karten Grid)
Schritt 10: Section 7 – Testimonials (3 Karten)
Schritt 11: Section 8 – Wissensbereich (Tabs + FAQ + Merkblätter)
Schritt 12: Section 9 – Finaler CTA + Kontaktformular
Schritt 13: Footer
Schritt 14: Responsive (Mobile + Tablet Anpassungen)
Schritt 15: Animationen (IntersectionObserver, Counter, Stagger)
Schritt 16: SEO (Schema.org, Meta, Alt-Texte)
Schritt 17: README.md (Integrations-Anleitung für VZ)
```

### 6.3 Qualitätsprüfung (Haiku führt vor Abschluss durch)

```
□ Alle 9 Sektionen vorhanden und vollständig
□ Design-System korrekt umgesetzt (Farben, Fonts, Spacing)
□ Navigation sticky und funktionsfähig (Desktop + Mobile)
□ Alle CTAs verlinkt (intern: Ankerlinks)
□ Counter-Animation in Section 2
□ FAQ Accordion funktioniert
□ Tabs in Section 8 funktionieren
□ Kontaktformular mit Validierung
□ Responsive auf 375px / 768px / 1280px getestet
□ Platzhalter alle korrekt markiert
□ Schema.org eingebunden
□ Ladezeit optimiert (keine unnötigen Ressourcen)
□ Accessibility: Keyboard-Navigation, Alt-Texte, ARIA-Labels
□ Sprach-Switcher im Header vorhanden (de/fr/it/en)
```

### 6.4 Was Haiku NICHT tut

- Kein strategisches Umbauen der Seitenstruktur
- Keine Änderung der Textstrategie ohne Rückfrage
- Keine externen JS-Libraries hinzufügen
- Kein WordPress, kein CMS, keine Backend-Logik
- Keine echten Daten (Mandate, Testimonials) erfinden – immer als `[PLATZHALTER: ...]` kennzeichnen
- Den Firmenname NIEMALS als echten VZ-Namen verwenden – immer "XY"

---

## TEIL 7: SPÄTERE PROJEKTPHASEN (NICHT JETZT UMSETZEN)

### Phase 2 – Unterseiten
```
/familiennachfolge      ← Detailseite Familieninterne Nachfolge
/management-buy-out     ← Detailseite MBO
/firma-verkaufen        ← Detailseite Externer Verkauf
/unternehmensbewertung  ← Detailseite Bewertung
/team                   ← Team-Seite mit Beratern
/referenzen             ← Alle abgeschlossenen Projekte
/mandate                ← Aktuelle Verkaufsmandate (erweiterbar)
```

### Phase 3 – Interaktive Elemente
```
• Nachfolge-Check: Kurzer Fragebogen → Empfehlung welcher Weg passt
• Firmenbewertungs-Rechner: Einfache Schätzung
• Kalender-Integration: Direkte Terminbuchung (Calendly o.ä.)
```

### Phase 4 – Interaktive Präsentationen
```
• Ablösung von PowerPoint durch web-basierte Präsentations-Seite
• Personalisierbar pro Mandat / Kundensituation
• Professioneller Auftritt im Beauty Contest
```

### Phase 5 – Mehrsprachigkeit
```
• FR Version
• IT Version
• EN Version
• Pro Sprache: lokale SEO-Anpassung
```

---

## TEIL 8: ERFOLGSMESSUNG

### KPIs (messbar nach Go-Live)

| KPI | Baseline heute | Ziel (6 Monate) |
|---|---|---|
| Organischer Traffic (Google) | [Zu messen] | +50% |
| Verweildauer auf Seite | [Zu messen] | > 2:30 Min |
| Scroll-Tiefe | [Zu messen] | > 60% Seite |
| CTA Klicks ("Termin vereinbaren") | [Zu messen] | > 3% der Besucher |
| Formular-Submissions | [Zu messen] | > 1% der Besucher |
| Qualifizierte Leads/Monat | [Zu messen] | +30% |

### Tracking Setup (für VZ-Integration)
```
• Google Analytics 4: Events auf alle CTA-Buttons
• Scroll-Tracking: 25% / 50% / 75% / 100%
• Section Views als GA4 Events
• Formular-Submit als Conversion-Event
• Optional: Hotjar / Microsoft Clarity für Heatmaps
```

---

*Ende des Masterplans. Version 1.0 – Erstellt auf Basis des strategischen Briefings.*
*Nächster Schritt: Haiku erhält diesen Plan und beginnt mit der Implementierung.*
