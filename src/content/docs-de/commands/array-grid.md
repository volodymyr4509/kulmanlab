---
title: Array-Grid-Befehl — Elemente in Zeilen und Spalten wiederholen
description: Der Array-Grid-Befehl erstellt ein rechteckiges Raster aus Kopien der ausgewählten Elemente — geben Sie die Anzahl der Zeilen, Spalten und den Abstand dazwischen direkt im Terminal ein, ohne Punkte anzuklicken.
keywords: [CAD Array-Befehl, arraygrid, rechteckiges Array CAD, Rastermuster CAD, Elemente wiederholen CAD, Array kopieren CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Der `ArrayGrid`-Befehl erstellt ein rechteckiges Raster aus Kopien der ausgewählten Elemente — geben Sie die Anzahl der Zeilen, die Anzahl der Spalten und den Abstand dazwischen ein, alles am Terminal getippt. Die ursprüngliche Auswahl belegt die Zelle Zeile 0, Spalte 0; jede andere Zelle ist eine verschobene Kopie.

## Zwei Arten zu starten

**Vorauswahl, dann array** — zuerst Elemente auswählen, dann aktivieren:

1. Ein oder mehrere Elemente auf der Zeichenfläche auswählen.
2. `arraygrid` im Terminal eingeben (schon `arr` genügt — eindeutig) oder auf die Schaltfläche **Array Grid** in der Symbolleiste klicken.
3. Die Anzahl der **Zeilen** eingeben und **Enter** drücken.
4. Die Anzahl der **Spalten** eingeben und **Enter** drücken.
5. Den **Abstand zwischen Zeilen** eingeben und **Enter** drücken.
6. Den **Abstand zwischen Spalten** eingeben und **Enter** drücken — das Raster wird sofort erstellt.

**Aktivieren, dann auswählen** — Befehl ohne Auswahl starten:

1. `arraygrid` eingeben oder auf die Symbolleisten-Schaltfläche klicken.
2. **Objekte auswählen** — klicken Sie zum Ein-/Ausschalten einzelner Elemente oder ziehen Sie zur Flächenauswahl.
3. **Enter** oder **Space** drücken, um die Auswahl zu bestätigen.
4. Weiter mit Zeilen → Spalten → Zeilenabstand → Spaltenabstand wie oben.

```
  2 Zeilen x 3 Spalten:

  [B] [B] [B]   <- Zeile 1 (verschobene Kopien)
  [A] [A] [A]   <- Zeile 0: ursprüngliche Auswahl, Kopien nach rechts
```

> Das Terminal benötigt nur so viele Buchstaben, wie zur Eindeutigkeit nötig sind — die Eingabe von `arr` und Drücken von **Enter** aktiviert Array Grid direkt, da kein anderer Befehlsname mit diesen drei Buchstaben beginnt (Arc, Area, Align und Angle unterscheiden sich bereits früher).

## Zeilen, Spalten und Abstand

| Eingabe | Akzeptiert | Hinweise |
|---------|-----------|----------|
| Zeilen | Positive ganze Zahlen (1, 2, 3…) | Nur Ziffern — kein Dezimalpunkt oder Vorzeichen |
| Spalten | Positive ganze Zahlen (1, 2, 3…) | Nur Ziffern — kein Dezimalpunkt oder Vorzeichen |
| Zeilenabstand | Vorzeichenbehaftete Dezimalzahl (z. B. `10`, `-5.5`) | Abstand zwischen Zeilen; negativ kehrt die Richtung um |
| Spaltenabstand | Vorzeichenbehaftete Dezimalzahl (z. B. `10`, `-5.5`) | Abstand zwischen Spalten; negativ kehrt die Richtung um |

Bei 1 Zeile und 1 Spalte werden keine Kopien erstellt — der Befehl endet, ohne die Zeichnung zu verändern.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen und zur Zeilen-Eingabe wechseln |
| `0`–`9` | Ziffern für Zeilen oder Spalten eingeben |
| `0`–`9`, `.`, `-` | Ziffern für Zeilen-/Spaltenabstand eingeben (`-` nur als erstes Zeichen) |
| `Backspace` | Zuletzt eingegebenes Zeichen der aktuellen Eingabe löschen |
| `Enter` | Aktuelle Eingabe bestätigen und zur nächsten wechseln |
| `Escape` | Eingegebene Zeilen-/Spalten-/Abstandswerte löschen und zur Auswahlphase zurückkehren |

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet das Element unter dem Mauszeiger in die Auswahl ein/aus |
| **Nach rechts ziehen** (streng) | Fügt Elemente hinzu, die vollständig innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Fügt Elemente hinzu, die die Rahmengrenze schneiden |
| **Enter** / **Space** | Bestätigt die Auswahl und wechselt zur Zeilen-Eingabe |

## Nach dem Array

Die neuen Kopien werden der Zeichnung hinzugefügt und der Befehl endet — die ursprüngliche Auswahl wird gelöscht. Führen Sie **Array Grid** erneut aus oder starten Sie einen neuen Befehl.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Punkte anklicken | Keine — Zeilen, Spalten und Abstand werden eingetippt | Basispunkt und Ziel werden angeklickt (oder eingetippt) |
| Erstellte Kopien | Zeilen × Spalten − 1 | Genau 1 pro Kopiervorgang |
| Anordnung | Regelmäßiges rechteckiges Raster | Beliebig, in jedem Abstand |
| Am besten für | Wiederholung einer Einheit in einem regelmäßigen Muster (Bohrungen, Fliesen, Befestigungselemente) | Ein einzelnes Duplikat an einer beliebigen Position |

## Unterstützte Elemente

Array Grid funktioniert mit jedem Elementtyp. Alle Elemente implementieren intern `translate(dx, dy)` — dieselbe Operation, die [Copy](../copy/) und [Move](../move/) verwenden —, sodass keines ausgeschlossen ist.
