---
title: Texteditor — Rich- und Simple-Modus in KulmanLab CAD
description: Der KulmanLab CAD-Texteditor hat zwei Modi — rich (zeichenweise Formatierung, mehrzeilig, Zeilenumbruch für Text und Multileader) und simple (einheitlicher Stil, einzeilig für Bemaßungselemente). Ein mode chip in der Kopfzeile zeigt den aktiven Modus an.
keywords: [CAD Texteditor, MTEXT, Fett Kursiv CAD, Textformatierung CAD, mehrzeiliger Text CAD, Zeilenumbruch CAD, rich Texteditor, simple Texteditor, Bemaßungstexteditor, eigene Schriftart CAD, TTF hochladen CAD, kulmanlab]
group: interface
order: 5
---

# Texteditor

Der Texteditor öffnet sich, wenn Sie eine bearbeitbare Entität platzieren oder doppelklicken. Ein kleiner **mode chip** in der Kopfzeile — **rich** (Akzentfarbe) oder **simple** (gedämpft) — zeigt an, welcher Modus für die aktuelle Entität aktiv ist.

## Editor-Modi

### Rich mode

Verwendet von: **Text** (MTEXT-Beschriftungen) und **Multileader**-Annotationen.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Strikethrough | Zeichenweise (gilt für Auswahl oder gesamte Entität wenn keine Auswahl) |
| Font und Height | Zeichenweise Überschreibung oder Entitätsstandard |
| `Enter` | Fügt einen harten Zeilenumbruch ein |
| `Shift+←/→` | Erweitert oder verkleinert eine Textauswahl |
| `Home` / `End` | Zum Anfang / Ende der aktuellen harten Zeile springen |
| Zeilenumbruch | Unterstützt über Referenzbreite-Griffpunkte |

### Simple mode

Verwendet von: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Der Editor ist mit der aktuellen Bemaßungsbeschriftung vorbelegt, sodass Sie den Cursor positionieren und den Wert direkt bearbeiten können.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Verfügbar — gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | **Übernimmt** den Wert und schließt den Editor (kein Zeilenumbruch) |
| Mehrzeilig | Nicht unterstützt |
| Zeilenumbruch | Nicht unterstützt |

## Den Editor öffnen

| Aktion | Ergebnis |
|--------|----------|
| `text`-Befehl → Position klicken | Erstellt eine neue Text-Entität und öffnet den Editor (**rich**) |
| Auf eine vorhandene **Text**-Entität doppelklicken | Öffnet den Editor im **rich** mode erneut |
| Auf einen vorhandenen **Multileader** doppelklicken | Öffnet den Editor im **rich** mode |
| Auf eine **Bemaßungs**-Entität doppelklicken | Öffnet den Editor im **simple** mode |
| `Escape` im Editor | Schließt den Editor und behält alle Änderungen bei |

## Werkzeugleiste

Die Werkzeugleiste schwebt über dem Begrenzungsrahmen des Textes und bleibt beim Verschieben oder Zoomen an der Entität verankert.

### Fett · Kursiv · Durchgestrichen

| Schaltfläche | Kürzel | Funktion |
|--------------|--------|----------|
| **F** | — | Fett umschalten |
| *K* | — | Kursiv umschalten |
| ~~D~~ | — | Durchgestrichen umschalten |

**Wie das Umschalten angewendet wird:**

- **Mit einer Textauswahl** — der Stil wird nur auf die ausgewählten Zeichen angewendet.
- **Keine Auswahl, Cursor in vorhandenem Text** — schaltet den Stil für die gesamte Entität um (alle Segmente).
- **Leerer Text oder neue Entität** — der Stil wird im leeren Segment gespeichert und auf alle Zeichen angewendet, die ab diesem Punkt eingegeben werden.

Die Schaltfläche erscheint hervorgehoben (aktiv), wenn jedes Zeichen in der aktuellen Auswahl — oder das Zeichen unmittelbar links vom Cursor — diesen Stil gesetzt hat.

### Schriftart

Das Dropdown gruppiert die verfügbaren Schriftarten in **Default** (die integrierte Sans-Serif-Schriftart), **User** (Ihre eigenen hochgeladenen Schriftarten, sofern vorhanden), **Free** (eine Auswahl gebündelter Google Fonts) und **System** (gängige Betriebssystem-Schriftarten wie Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console und Impact).

- **Mit einer Auswahl** — überschreibt die Schriftart nur für die ausgewählten Zeichen.
- **Keine Auswahl** — wendet die Schriftart auf die gesamte Entität an.

Das Dropdown zeigt die Schriftart des Zeichens links vom Cursor an, wenn keine Auswahl vorhanden ist.

Nicht auf die integrierte Liste beschränkt — klicken Sie auf die Schaltfläche **Font Manager** in der Werkzeugleiste, um eine eigene `.ttf`-Datei hochzuladen und sie der Gruppe **User** hinzuzufügen. Siehe [Font Manager](../../commands/font-manager/) für Details.

### Höhe

Das Zahlenfeld legt die **Versalhöhe** (Höhe eines Großbuchstabens) in Zeichnungseinheiten fest.

- **Mit einer Auswahl** — überschreibt die Höhe für die ausgewählten Zeichen, unabhängig von der Basishöhe der Entität.
- **Keine Auswahl** — ändert die Basishöhe der Entität (gilt für alle Zeichen ohne individuelle Höhenüberschreibung).

Das Feld zeigt die Höhe des Zeichens links vom Cursor an. Lassen Sie es leer, um den Entitätsstandard zu verwenden.

## Cursor und Navigation

| Taste | Aktion |
|-------|--------|
| `←` / `→` | Cursor ein Zeichen nach links oder rechts bewegen |
| `Home` | Zum Anfang der aktuellen harten Zeile springen |
| `End` | Zum Ende der aktuellen harten Zeile springen |
| `Shift` + `←` / `→` | Auswahl erweitern oder verkleinern |
| `Backspace` | Zeichen links löschen (oder die Auswahl) |
| `Delete` | Zeichen rechts löschen (oder die Auswahl) |
| `Enter` | Zeilenumbruch einfügen |
| `Escape` | Editor schließen |

Die Cursorhöhe passt sich automatisch an die Versalhöhe des angrenzenden Zeichens an, einschließlich der kleineren Größe für tiefgestellten und hochgestellten Text.

## Kopieren, ausschneiden und einfügen

| Taste | Aktion |
|-------|--------|
| `Ctrl+C` / `Cmd+C` | Ausgewählten Text kopieren |
| `Ctrl+X` / `Cmd+X` | Ausgewählten Text ausschneiden |
| `Ctrl+V` / `Cmd+V` | Am Cursor einfügen |

Kopieren und Ausschneiden erfordern eine aktive Textauswahl. Eingefügter Text ist immer unformatiert — er übernimmt die Formatierung (Fett, Kursiv, Schriftart, Höhe), die bereits am Cursor vorhanden ist, anstatt die Formatierung beizubehalten, die er beim Kopieren hatte.

Im **Rich mode** bleiben Zeilenumbrüche im eingefügten Text erhalten. Im **Simple mode** werden Zeilenumbrüche entfernt, da Bemaßungsbeschriftungen einzeilig sind.

## Zeilenumbruch

Wenn eine Text-Entität eine **Referenzbreite** festgelegt hat, werden lange Zeilen an Wortgrenzen weich umgebrochen, um in diese Breite zu passen.

Um die Referenzbreite festzulegen oder zu ändern, während die Entität ausgewählt ist, ziehen Sie die **Größenänderungs-Griffpunkte** — die schmalen Rechtecke an den linken und rechten Kanten des gestrichelten Begrenzungsrahmens. Der Inhalt wird beim Ziehen in Echtzeit neu angeordnet.

Das Setzen der Referenzbreite auf null (Griffpunkte zusammenziehen oder den Wert im Eigenschaftenpanel löschen) entfernt den Zeilenumbruch und lässt Zeilen frei wachsen.

## Mehrzeiliger Text

Drücken Sie `Enter`, um einen harten Zeilenumbruch einzufügen. Jede harte Zeile ist unabhängig — `Home` und `End` navigieren nur innerhalb der aktuellen harten Zeile.

Harte Zeilenumbrüche und zeichenweise Formatierung werden im MTEXT-Format gespeichert und überleben einen vollständigen DXF-Durchlauf.

## DXF-Kompatibilität

Text-Entitäten werden als **MTEXT** in DXF-Dateien gespeichert. Fett und Kursiv werden als `\L`, `\K`, `\O` und Inline-Schriftartwechsel (`\f`) kodiert. Die zeichenweise Höhe wird als `\H` kodiert. Alle Formatierungen werden beim Export beibehalten und sind von LibreCAD, FreeCAD und anderen DXF-kompatiblen Anwendungen lesbar.
