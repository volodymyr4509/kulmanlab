---
sidebar_position: 15
title: Dimension Continue-Befehl — Bemaßungen von einer vorhandenen Basislinie verketten in KulmanLab CAD
description: Der Dimension Continue-Befehl verlängert eine Bemaßungskette ab der zweiten Maßhilfslinie der zuletzt platzierten Bemaßung. Er übernimmt automatisch Winkel, Versatz, Pfeilgröße und Texthöhe der Basisbemaßung. Funktioniert mit linearen und ausgerichteten Basislinien.
keywords: [CAD Bemaßung fortsetzen, dimcontinue, Bemaßungen verketten CAD, Basislinienbemaßung, Bemaßungsreihe fortsetzen, kulmanlab]
---

# Dimension Continue

Der `dimcontinue`-Befehl verkettet neue Bemaßungen ab der **zweiten Maßhilfslinie** einer vorhandenen Bemaßung. Jedes neue Segment wird entlang der gleichen Messachse und im gleichen Bemaßungslinienversatz wie die Basisbemaßung platziert. Alle Stileigenschaften — Pfeilgröße, Texthöhe, Maßhilfslinienlängen — werden automatisch von der Basis übernommen.

## So sehen verkettete Bemaßungen aus

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (Basis-  p3           p4
           ext2 → neuer Start)
```

Jedes Rechteck ist ein separates `DIMENSION`-Element. Sie teilen die gleiche Bemaßungslinienposition und Messrichtung.

## Eine Kette starten

1. Geben Sie `dimcontinue` im Terminal ein oder klicken Sie auf die Schaltfläche **Dimension Continue** in der Symbolleiste.
2. **Wenn gerade eine Bemaßung platziert wurde** — der Befehl nimmt sie automatisch als Basis (kein Klick erforderlich).
3. **Wenn keine aktuelle Bemaßung vorhanden ist** — klicken Sie auf eine vorhandene Bemaßung, um sie als Basis zu verwenden.
4. **Nächsten Maßhilfslinien-Ursprung klicken** — eine Vorschau zeigt die neue Bemaßung während der Mausbewegung. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
5. Weiterklicken (oder eingeben), um die Kette zu verlängern. Jede platzierte Bemaßung wird automatisch zur neuen Basis.
6. **Enter**, **Space** oder **Escape** drücken, um die Kette zu beenden.

## Was von der Basisbemaßung übernommen wird

| Eigenschaft | Von der Basis übernommen |
|-------------|--------------------------|
| Messrichtung / Winkel | Ja — für die gesamte Kette gesperrt |
| Bemaßungslinienversatz (Abstand von den gemessenen Punkten) | Ja |
| Pfeilgröße | Ja |
| Texthöhe | Ja |
| Maßhilfslinienversatz und -verlängerung | Ja |
| Textausrichtung | Ja |
| Stilname | Ja |
| Farbe, Ebene | Nicht übernommen — verwendet aktuelle Ebene |

## Sperrung der Messrichtung

Die Messrichtung der Kette ist **auf den Winkel der Basisbemaßung fixiert**:

- Lineare Basis (H) → alle Fortsetzungen messen horizontalen Abstand (Δ X).
- Lineare Basis (V) → alle Fortsetzungen messen vertikalen Abstand (Δ Y).
- Ausgerichtete Basis in beliebigem Winkel → alle Fortsetzungen messen entlang dieses Winkels.

Die Richtung kann nicht mitten in der Kette geändert werden. Starten Sie eine neue [Dimension Linear](../dim-linear/)- oder [Dimension Aligned](../dim-aligned/)-Bemaßung, um in einer anderen Richtung zu bemaßen.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate bestätigen oder die Kette beenden, wenn keine Eingabe läuft |
| `Space` / `Escape` | Kette beenden |

## Dimension Continue vs neu beginnen

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Startpunkt | Fixiert an letzter Basis-ext2 | Beliebig klicken |
| Winkel | Auf Basis gesperrt | Frei |
| Versatz | Von Basis übernommen | Durch Mauszeiger oder Eingabe festgelegt |
| Stil | Von Basis übernommen | Aktueller Stil |
| Geeignet für | Kumulative Messungen entlang einer Reihe | Erste Bemaßung oder Richtungswechsel |

## Beschriftungen nach der Platzierung bearbeiten — simple mode

**Doppelklicken** Sie auf eine beliebige Bemaßung in der Kette, um den Texteditor im **simple** mode zu öffnen. Jedes Segment ist unabhängig und kann einzeln bearbeitet werden.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | Übernimmt den Wert und schließt den Editor |
| Mehrzeilig | Nicht unterstützt |

Siehe [Texteditor — simple mode](../../interface/text-editor/#simple-mode) für die vollständige Referenz.

## DXF — DIMENSION-Elemente

Jedes Segment in der Kette wird als unabhängiges `DIMENSION`-Element in der DXF-Datei gespeichert. Sie sind in der Datei nicht verknüpft — sie teilen Eigenschaften, weil sie von derselben Basis erstellt wurden, aber jedes kann nach der Platzierung einzeln bearbeitet werden.
