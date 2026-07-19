---
title: move — Ausgewählte Entitäten über einen Basispunkt verschieben
description: Der Befehl move verschiebt eine oder mehrere ausgewählte Entitäten von einem Basispunkt zu einem Zielpunkt. Unterstützt Vorauswahl, Winkelsperre und genaue Entfernungseingabe. Nach dem Verschieben bleiben die Entitäten an ihrer neuen Position ausgewählt. Jeder Entitätstyp wird unterstützt.
keywords: [CAD move Befehl, Entitäten verschieben CAD, Objekte bewegen CAD, Winkelsperre verschieben, genaue Entfernung verschieben, Griffpunkt verschieben CAD, kulmanlab]
group: edit
order: 1
---

# Move

Der Befehl `move` verschiebt ausgewählte Entitäten von einem Basispunkt zu einem Zielpunkt. Die auf jede ausgewählte Entität angewendete Verschiebung ist der Vektor von Basis zu Ziel. Nach dem Verschieben bleiben alle Entitäten an ihrer neuen Position ausgewählt und sind bereit für weitere Bearbeitungen.

## Zwei Möglichkeiten zum Starten

**Zuerst auswählen, dann verschieben** — wählen Sie zuerst Entitäten aus und aktivieren Sie dann den Befehl:

1. Wählen Sie eine oder mehrere Entitäten auf der Zeichenfläche aus.
2. Geben Sie `move` im Terminal ein oder klicken Sie auf die Schaltfläche **Move** in der Symbolleiste.
3. **Klicken Sie auf den Basispunkt** oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
4. **Klicken Sie auf das Ziel** — alle ausgewählten Entitäten verschieben sich um den Basis→Ziel-Vektor. Koordinateneingabe funktioniert hier ebenfalls.

**Aktivieren, dann auswählen** — Befehl ohne Auswahl starten:

1. Geben Sie `move` ein oder klicken Sie auf die Schaltfläche in der Symbolleiste.
2. **Objekte auswählen** — klicken zum Umschalten einzelner Entitäten oder ziehen zur Flächenauswahl.
3. Drücken Sie **Enter** oder **Space** zur Bestätigung der Auswahl.
4. **Klicken Sie auf den Basispunkt**, dann **klicken Sie auf das Ziel** (Koordinateneingabe bei beiden Schritten verfügbar).

```
  Vorher:                    Nachher:
  ● Basis                       → ● Ziel
  [Entität A]                      [Entität A verschoben]
  [Entität B]                      [Entität B verschoben]
```

Eine Geistervorschau aller ausgewählten Entitäten folgt dem Cursor vom Basispunkt zum Ziel und zeigt das Ergebnis vor dem Klicken.

## Koordinateneingabe

Beim Basispunkt- oder Zielschritt geben Sie eine genaue Position anstelle eines Klicks ein:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter** zum Bestätigen.

## Winkelsperre und genaue Entfernung

Nachdem der Basispunkt gesetzt ist, überwacht der Befehl eine 45°-Einrastachse (0°, 45°, 90°, 135°, …). Die Richtung **sperrt** wenn der Cursor weit genug vom Basispunkt entfernt und innerhalb einer Griffbreite der Achse ist. Bei aktiver Sperre:

- Die Geistervorschau rastet auf die Achse ein.
- Geben Sie eine Entfernung ein und drücken Sie **Enter**, um genau so weit entlang der gesperrten Richtung zu verschieben.
- Das Klicken projiziert auf die Achse, sodass das Ziel immer genau auf ihr liegt.

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Zum Entfernungswert anhängen |
| `-` | Negative Entfernung — kehrt die Richtung entlang der Achse um (nur als erstes Zeichen) |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Verschiebung in der getippten Entfernung anwenden |

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen und zur Basispunkt-Phase wechseln |
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten oder Entfernung bei Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Koordinate bestätigen oder Verschiebung bei getippter Entfernung anwenden |
| `Escape` | Abbrechen und zurücksetzen |

## Move über einen Griffpunkt aktivieren

Das Anklicken des **Mittelpunkt-Griffpunkts** einer ausgewählten [Linie](../line/) startet move automatisch, wobei der Mittelpunkt bereits als Basispunkt gesetzt und die Verschiebungsphase aktiv ist. Dies ist der schnellste Weg, eine einzelne Linie neu zu positionieren, ohne den Auswahlschritt durchlaufen zu müssen.

## Auswahl während des Befehls

Wenn der Befehl in der Auswahlphase startet:

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet die Entität unter dem Cursor in die Auswahl hinein/heraus |
| **Rechts ziehen** (streng) | Fügt vollständig innerhalb des Rahmens liegende Entitäten hinzu |
| **Links ziehen** (schneidend) | Fügt Entitäten hinzu, die die Rahmengrenze schneiden |
| **Enter** / **Space** | Bestätigt die Auswahl und wechselt zur Basispunkt-Phase |

## Nach dem Verschieben

Die verschobenen Entitäten bleiben an ihrer neuen Position ausgewählt. Das bedeutet, Sie können sofort:
- **Move** erneut ausführen, um sie weiter zu verschieben.
- [Copy](../copy/), [Rotate](../rotate/) oder [Scale](../scale/) ausführen, ohne erneut auszuwählen.
- **Delete** drücken, um sie zu entfernen.

## move vs. copy

| | move | copy |
|---|------|------|
| Ursprüngliche Position | Aufgegeben — Entitäten sind nicht mehr dort | Behalten — Originale bleiben an Ort und Stelle |
| Anzahl der Ergebnisse | Gleiche Anzahl an Entitäten | Ein zusätzlicher Satz pro Operation |
| Auswahl danach | Verschobene Entitäten an neuer Position ausgewählt | Kopierte Entitäten an neuer Position ausgewählt |
| Am besten für | Geometrie neupositionieren | Geometrie duplizieren |

## Unterstützte Entitäten

move funktioniert mit jedem Entitätstyp: Linie, Polylinie, Rechteck, Kreis, Bogen, Ellipse, Text, Spline, Bemaßung, Führungslinie und alle anderen. Alle Entitäten implementieren `translate(dx, dy)`, sodass keine ausgeschlossen sind.
