---
title: ClipboardCopy-Befehl — Elemente in die Systemzwischenablage kopieren
description: Der ClipboardCopy-Befehl schreibt ausgewählte Elemente als JSON-Text in die Systemzwischenablage, zusammen mit den Layern und Linientypen, auf die sie verweisen, sodass sie mit ClipboardPaste in eine andere Zeichnung oder einen anderen Browser-Tab eingefügt werden können.
keywords: [CAD Zwischenablage kopieren, Elemente zwischen Zeichnungen kopieren, CAD Objekte in Zwischenablage, Strg+C CAD, Kopieren zwischen Tabs, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Der `ClipboardCopy`-Befehl schreibt die ausgewählten Elemente als JSON-Text in Ihre **Systemzwischenablage**. Da er die echte Zwischenablage verwendet und keinen internen Puffer, überlebt die kopierte Geometrie außerhalb der Zeichnung: Fügen Sie sie mit [ClipboardPaste](../clipboard-paste/) in eine andere Datei, einen zweiten Browser-Tab oder ein später geöffnetes Fenster ein.

Das ist der Unterschied zu [Copy](../copy/): Copy dupliziert Elemente in einem Zug innerhalb der aktuellen Zeichnung, während ClipboardCopy sie an einen Ort legt, von dem aus sie in einer völlig anderen Zeichnung abgerufen werden können.

## Zwei Arten zu starten

**Vorauswahl, dann kopieren** — der schnelle Weg:

1. Ein oder mehrere Elemente auf der Zeichenfläche auswählen.
2. `Strg+C` drücken (`Cmd+C` unter macOS) oder `ClipboardCopy` im Terminal eingeben.
3. Die Elemente werden sofort in die Zwischenablage geschrieben und der Befehl endet.

**Aktivieren, dann auswählen** — ohne Auswahl starten:

1. `Strg+C` drücken oder `ClipboardCopy` bei leerer Auswahl eingeben.
2. Die Eingabeaufforderung lautet **pick objects to copy — Enter or Space to confirm**.
3. **Objekte auswählen** — klicken Sie zum Ein-/Ausschalten einzelner Elemente oder ziehen Sie zur Flächenauswahl.
4. **Enter** oder **Space** drücken, um die Auswahl zu kopieren und zu beenden.

Wird **Enter** oder **Space** ohne Auswahl gedrückt, endet der Befehl einfach, ohne die Zwischenablage zu berühren.

## Was kopiert wird

Die Zwischenablage-Nutzlast enthält mehr als reine Geometrie, damit ein Einfügen in eine fremde Zeichnung dennoch richtig aussieht:

| Bestandteil | Zweck |
|-------------|-------|
| **Elemente** | Die vollständige serialisierte Form jedes ausgewählten Elements |
| **Referenzpunkt** | Die linke untere Ecke der kombinierten Ausdehnung der Auswahl — daran richtet ClipboardPaste den Mauszeiger aus |
| **Layer** | Nur die Layer, auf die die kopierten Elemente tatsächlich verweisen, per Name |
| **Linientypen** | Nur die Linientypen, auf die die kopierten Elemente tatsächlich verweisen, per Name |

Nur *referenzierte* Tabelleneinträge wandern mit — nicht die vollständigen Layer- und Linientyp-Tabellen der Quellzeichnung. Schraffurmuster werden gar nicht mitgegeben und müssen es auch nicht: Die Mustertabelle einer Zeichnung ist der eingebaute Standardsatz, und alle von Ihnen hochgeladenen `.pat`-Dateien liegen in einem benutzerbezogenen Speicher, der ohnehin über Tabs hinweg geteilt wird — eine eingefügte Schraffur findet ihr Muster also selbst.

## Bestätigung

Bei Erfolg meldet das Terminal, wie viele Elemente geschrieben wurden:

```
3 entities copied to clipboard
```

Verweigert der Browser den Zugriff auf die Zwischenablage, zeigt das Terminal **Copy failed: clipboard access denied** und es wird nichts geschrieben. Das ist eine Browser-Berechtigungsentscheidung, kein Zeichnungsfehler — siehe [Zwischenablage-Berechtigungen](#zwischenablage-berechtigungen) unten.

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet das Element unter dem Mauszeiger in die Auswahl ein/aus |
| **Nach rechts ziehen** (streng) | Fügt Elemente hinzu, die vollständig innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Fügt Elemente hinzu, die die Rahmengrenze schneiden |
| **Enter** / **Space** | Bestätigt die Auswahl und kopiert |

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Strg+C` / `Cmd+C` | ClipboardCopy aktivieren |
| `Enter` / `Space` | Aktuelle Auswahl kopieren, oder beenden, wenn nichts ausgewählt ist |
| `Escape` | Abbrechen ohne zu kopieren |

## Zwischenablage-Berechtigungen

Das Schreiben in die Systemzwischenablage erfordert eine Browser-Berechtigung. In der Praxis wird ein per Tastendruck ausgelöstes Kopieren in aktuellen Desktop-Browsern ohne Nachfrage gewährt, aber eine Seite, die den Fokus verloren hat, oder ein Browser mit strengen Zwischenablage-Einstellungen kann es verweigern. Erscheint die Zugriffsmeldung, klicken Sie einmal auf die Zeichenfläche, um der Seite den Fokus zu geben, und versuchen Sie es erneut.

Da die Nutzlast gewöhnlicher JSON-Text ist, ersetzt sie alles, was Sie danach kopieren — eine Textzeile, eine URL. Kopieren Sie erneut, bevor Sie einfügen, wenn Sie die Zwischenablage zwischenzeitlich anderweitig verwendet haben.

## Unterstützte Elemente

ClipboardCopy funktioniert mit jedem Elementtyp. Elemente werden mit demselben Mechanismus serialisiert, den auch der native `.json`-Export verwendet, sodass unterwegs nichts verloren geht.

## Siehe auch

- [ClipboardPaste](../clipboard-paste/) — die Zwischenablage zurücklesen und die Elemente platzieren
- [Copy](../copy/) — Elemente innerhalb der aktuellen Zeichnung duplizieren
- [Export Manager](../export-manager/) — eine ganze Zeichnung als DXF oder JSON speichern
