---
sidebar_position: 4
title: Texteditor — Rich-Text-Formatierung in KulmanLab CAD
description: Der KulmanLab CAD-Texteditor ermöglicht das Platzieren mehrzeiliger, reich formatierter MTEXT-Beschriftungen mit Fett, Kursiv, Durchgestrichen, zeichenweiser Schriftart- und Höhenüberschreibung, Zeilenumbruch und vollständiger Cursornavigation.
keywords: [CAD Texteditor, MTEXT, Fett Kursiv CAD, Textformatierung CAD, mehrzeiliger Text CAD, Zeilenumbruch CAD, kulmanlab]
---

# Texteditor

Der Texteditor öffnet sich, wenn Sie eine neue Textbeschriftung mit dem `text`-Befehl platzieren oder auf eine vorhandene Text-Entität doppelklicken. Er unterstützt mehrzeiligen Inhalt, zeichenweise Formatierung und Zeilenumbruch.

## Den Editor öffnen

| Aktion | Ergebnis |
|--------|----------|
| `text`-Befehl → Position klicken | Erstellt eine neue Text-Entität und öffnet den Editor |
| Auf eine vorhandene Text-Entität doppelklicken | Öffnet den Editor für diese Entität erneut |
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

Das Dropdown listet eine kuratierte Auswahl plattformübergreifender Schriftarten auf (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). Die oberste Option **Arial** ist die Standardschriftart.

- **Mit einer Auswahl** — überschreibt die Schriftart nur für die ausgewählten Zeichen.
- **Keine Auswahl** — wendet die Schriftart auf die gesamte Entität an.

Das Dropdown zeigt die Schriftart des Zeichens links vom Cursor an, wenn keine Auswahl vorhanden ist.

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

## Zeilenumbruch

Wenn eine Text-Entität eine **Referenzbreite** festgelegt hat, werden lange Zeilen an Wortgrenzen weich umgebrochen, um in diese Breite zu passen.

Um die Referenzbreite festzulegen oder zu ändern, während die Entität ausgewählt ist, ziehen Sie die **Größenänderungs-Griffpunkte** — die schmalen Rechtecke an den linken und rechten Kanten des gestrichelten Begrenzungsrahmens. Der Inhalt wird beim Ziehen in Echtzeit neu angeordnet.

Das Setzen der Referenzbreite auf null (Griffpunkte zusammenziehen oder den Wert im Eigenschaftenpanel löschen) entfernt den Zeilenumbruch und lässt Zeilen frei wachsen.

## Mehrzeiliger Text

Drücken Sie `Enter`, um einen harten Zeilenumbruch einzufügen. Jede harte Zeile ist unabhängig — `Home` und `End` navigieren nur innerhalb der aktuellen harten Zeile.

Harte Zeilenumbrüche und zeichenweise Formatierung werden im MTEXT-Format gespeichert und überleben einen vollständigen DXF-Durchlauf.

## DXF-Kompatibilität

Text-Entitäten werden als **MTEXT** in DXF-Dateien gespeichert. Fett und Kursiv werden als `\L`, `\K`, `\O` und Inline-Schriftartwechsel (`\f`) kodiert. Die zeichenweise Höhe wird als `\H` kodiert. Alle Formatierungen werden beim Export beibehalten und sind von LibreCAD, FreeCAD und anderen DXF-kompatiblen Anwendungen lesbar.
