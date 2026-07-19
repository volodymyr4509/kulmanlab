---
title: Rotate-Befehl — Entitäten um einen Basispunkt drehen
description: Der Rotate-Befehl dreht ausgewählte Entitäten um einen gewählten Basispunkt. Der Winkel kann präzise eingegeben oder per Klick festgelegt werden — die Cursorrichtung vom Basispunkt zum Klick bestimmt den Winkel. Positive Winkel drehen in DXF-Koordinaten gegen den Uhrzeigersinn.
keywords: [CAD Rotate-Befehl, Entitäten drehen CAD, Objekte drehen Winkel, Gegen-Uhrzeigersinn-Drehung CAD, Winkel eingeben drehen, kulmanlab]
group: edit
order: 3
---

# Rotate

Der `rotate`-Befehl dreht ausgewählte Entitäten um einen Basispunkt. Sie legen den Drehwinkel entweder durch Eingabe einer Gradzahl oder per Klick fest — der Winkel wird aus der Richtung zwischen Basispunkt und Klickposition berechnet.

## Zwei Startmöglichkeiten

**Zuerst auswählen, dann drehen** — wählen Sie zuerst Entitäten aus, dann aktivieren Sie den Befehl:

1. Wählen Sie eine oder mehrere Entitäten auf der Zeichenfläche aus.
2. Geben Sie `rotate` im Terminal ein oder klicken Sie auf die **Rotate**-Schaltfläche in der Werkzeugleiste.
3. **Klicken Sie den Basispunkt** — den Drehmittelpunkt. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
4. **Geben Sie einen Winkel ein und drücken Sie Enter**, oder **klicken Sie**, um den Winkel aus der Cursorrichtung festzulegen.

**Zuerst aktivieren, dann auswählen** — starten Sie den Befehl ohne Auswahl:

1. Geben Sie `rotate` ein oder klicken Sie auf die Werkzeugleistenschaltfläche.
2. **Objekte auswählen** — einzeln anklicken oder per Bereich ziehen.
3. Drücken Sie **Enter** oder **Space**, um die Auswahl zu bestätigen.
4. **Klicken Sie den Basispunkt** (Koordinateneingabe verfügbar), dann legen Sie den Winkel fest.

```
  Vorher:            Nachher (90°-Drehung um ●):
                        ╔══╗
  ●  [Entität]   →   ● ║    ║
                        ╚══╝
```

Eine Live-Geistervorschau der gedrehten Entitäten folgt dem Cursorwinkel, nachdem der Basispunkt gesetzt wurde.

## Winkel festlegen

**Eingegebener Winkel** — geben Sie jederzeit nach dem Setzen des Basispunkts eine Gradzahl ein. Die Vorschau rastet am eingegebenen Winkel ein, während Sie vor dem Drücken von Enter noch anpassen können.

**Geklickter Winkel** — wenn kein Wert eingegeben wurde, setzt ein Klick den Winkel auf `atan2(CursorY − BasisY, CursorX − BasisX)` — die Richtung vom Basispunkt zum Klick in Grad.

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Winkelwert hinzufügen |
| `-` | Negativer Winkel (nur als erstes Zeichen) |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Drehung beim eingegebenen Winkel anwenden |

## Winkelrichtung

Winkel folgen der **DXF-Konvention**:

- **Positive** Werte drehen in Zeichnungskoordinaten (Y nach oben) **gegen den Uhrzeigersinn**.
- Auf dem Bildschirm, wo die Y-Achse invertiert ist (Y nach unten), erscheinen positive Winkel **im Uhrzeigersinn**.

Häufige Werte: `90` = Vierteldrehung, `180` = halbe Drehung, `-90` = entgegengesetzte Vierteldrehung.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen |
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten (Basispunktphase) oder Winkelwert (Winkelphase) |
| `,` | X sperren und zu Y-Eingabe wechseln (Basispunktphase) |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Koordinate bestätigen oder Drehung anwenden |
| `Escape` | Abbrechen und zurücksetzen |

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Schaltet die Entität unter dem Cursor um |
| **Nach rechts ziehen** (streng) | Fügt vollständig im Rahmen liegende Entitäten hinzu |
| **Nach links ziehen** (schneidend) | Fügt den Rahmen schneidende Entitäten hinzu |
| **Enter** / **Space** | Bestätigt die Auswahl |

## Unterstützte Entitäten

Rotate funktioniert bei jedem Entitätstyp. Die Geometrie jeder Entität wird um den Basispunkt gedreht — zum Beispiel verschiebt ein Circle seinen Mittelpunkt, während der Radius gleich bleibt; ein Arc verschiebt seinen Mittelpunkt und verschiebt Start- und Endwinkel um den Drehbetrag; eine Text-Entität verschiebt ihren Ankerpunkt und addiert den Winkel zu ihrer Rotationsgrad-Eigenschaft.
