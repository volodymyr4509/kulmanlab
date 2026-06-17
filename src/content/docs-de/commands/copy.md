---
sidebar_position: 3
title: Copy-Befehl — Elemente an einer neuen Position duplizieren in KulmanLab CAD
description: Der Copy-Befehl erstellt verschobene Duplikate ausgewählter Elemente, während die Originale an ihrer Position verbleiben. Unterstützt Vorauswahl, Winkelsperre und genaue Abstandseingabe. Die Kopien werden platziert und der Befehl endet; Originale bleiben unverändert.
keywords: [CAD-Kopierbefehl, Elemente duplizieren CAD, Objekte kopieren CAD, Geometrie klonen CAD, Winkelsperre kopieren, exakter Abstand kopieren, kulmanlab]
---

# Copy

Der `copy`-Befehl erstellt verschobene Duplikate ausgewählter Elemente und platziert sie mit einem Versatz vom Basispunkt zum Ziel — die Originale bleiben genau an ihrer Stelle. Dies ist der wesentliche Unterschied zu [Move](./move): Copy fügt der Zeichnung neue Elemente hinzu; Move verschiebt vorhandene.

## Zwei Arten zu starten

**Vorauswahl, dann kopieren** — zuerst Elemente auswählen, dann aktivieren:

1. Ein oder mehrere Elemente auf der Zeichenfläche auswählen.
2. `copy` im Terminal eingeben oder auf die Schaltfläche **Copy** in der Symbolleiste klicken.
3. **Basispunkt klicken**, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
4. **Ziel klicken** — Duplikate erscheinen am Basis→Ziel-Versatz. Koordinateneingabe funktioniert hier ebenfalls.

**Aktivieren, dann auswählen** — Befehl ohne Auswahl starten:

1. `copy` eingeben oder auf die Symbolleisten-Schaltfläche klicken.
2. **Objekte auswählen** — klicken Sie zum Ein-/Ausschalten einzelner Elemente oder ziehen Sie zur Flächenauswahl.
3. **Enter** oder **Space** drücken, um die Auswahl zu bestätigen.
4. **Basispunkt klicken**, dann **Ziel klicken** (Koordinateneingabe bei beiden Schritten verfügbar).

```
  Vorher:               Nachher:
  [Element A]           [Element A]  ← Originale unverändert
  [Element B]           [Element B]
                        [Kopie von A] ← neue Elemente
                        [Kopie von B]
```

Eine Geistervorschau der Kopien folgt dem Mauszeiger vom Basispunkt zum Ziel.

## Koordinateneingabe

Beim Basispunkt- oder Ziel-Schritt eine genaue Position eingeben anstatt zu klicken:

1. X-Wert eingeben.
2. `,` drücken — das Terminal zeigt `[X], [Y{cursor}]`.
3. Y-Wert eingeben.
4. **Enter** drücken, um zu bestätigen.

## Winkelsperre und exakter Abstand

Nachdem der Basispunkt gesetzt wurde, rastet der Befehl an 45°-Achsen (0°, 45°, 90°, 135°, …) ein, wenn der Mauszeiger weit genug entfernt und nahe der Achse ist. Bei Sperre einen Abstand eingeben und **Enter** drücken, um die Kopien genau an diesem Versatz zu platzieren.

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Zum Abstandswert hinzufügen |
| `-` | Negativer Abstand — kehrt Richtung entlang der Achse um (nur erstes Zeichen) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Kopien am eingegebenen Abstand platzieren |

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen und zur Basispunkt-Phase wechseln |
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten oder Abstand bei Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Koordinate bestätigen oder Kopie beim eingegebenen Abstand anwenden |
| `Escape` | Abbrechen und zurücksetzen |

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet das Element unter dem Mauszeiger in die Auswahl ein/aus |
| **Nach rechts ziehen** (streng) | Fügt Elemente hinzu, die vollständig innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Fügt Elemente hinzu, die die Rahmengrenze schneiden |
| **Enter** / **Space** | Bestätigt die Auswahl |

## Nach dem Kopieren

Die **Originale bleiben ausgewählt** — die neuen Kopien werden der Zeichnung hinzugefügt, aber die Auswahl wird gelöscht und der Befehl endet. Um sofort mit den Kopien zu arbeiten, führen Sie Copy erneut auf der Auswahl aus oder starten Sie einen neuen Befehl.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originale | Bleiben an ihrer Position | Werden von der ursprünglichen Position entfernt |
| Ergebnisanzahl | Erhöht sich um die Anzahl der kopierten Elemente | Unverändert |
| Nach der Operation | Originale noch ausgewählt | Verschobene Elemente an neuer Position ausgewählt |
| Geeignet für | Geometrie wiederholen, symmetrische Layouts | Geometrie neu positionieren |

## Unterstützte Elemente

Copy funktioniert mit jedem Elementtyp. Alle Elemente implementieren intern `translate(dx, dy)`, sodass keines ausgeschlossen ist.
