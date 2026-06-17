---
sidebar_position: 20
title: Fillet-Befehl — Ecke zwischen zwei Linien abrunden in KulmanLab CAD
description: Der Fillet-Befehl verbindet zwei Line-Elemente mit einem Tangentenbogen des angegebenen Radius und kürzt jede Linie bis zum Tangentenpunkt zurück. Eine gestrichelte Bogenvorschau hilft Ihnen, die richtige Ecke vor dem Klicken auszuwählen.
keywords: [CAD-Fillet-Befehl, Ecke abrunden CAD, Fillet-Bogen, Tangentenbogen zwei Linien, kulmanlab]
---

# Fillet

Der `fillet`-Befehl rundet die Ecke zwischen zwei [Line](./line)-Elementen ab, indem er einen Tangentenbogen des angegebenen Radius einfügt und jede Linie bis zum Punkt zurückschneidet, an dem der Bogen beginnt. Das Ergebnis ist eine glatte, abgerundete Ecke, die beide Linien verbindet.

Fillet funktioniert **nur mit Line-Elementen**.

## Fillet verwenden

1. Geben Sie `fillet` im Terminal ein oder klicken Sie auf die Schaltfläche **Fillet** in der Symbolleiste.
2. **Fillet-Radius eingeben** und **Enter** drücken.
3. **Erste Linie klicken** — der geklickte Bereich bestimmt, welche Seite eines Schnittpunkts behalten wird.
4. **Über die zweite Linie hovern** — eine gestrichelte Bogenvorschau zeigt das resultierende Fillet. Bewegen Sie den Mauszeiger auf die Seite, die Sie behalten möchten.
5. **Klicken**, um anzuwenden. Beide Linien werden gekürzt und der Bogen wird eingefügt.

```
  Vorher:                     Nachher (Radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Seitenauswahl bei sich schneidenden Linien

Wenn sich zwei Linien kreuzen, wird das Fillet an der durch die Klickpositionen definierten Ecke angewendet — der Teil jeder Linie auf **der Seite des Mauszeigers** wird behalten.

- Klicken Sie nahe einem Ende der ersten Linie, um diese Hälfte auszuwählen.
- Bewegen Sie den Mauszeiger zur gewünschten Hälfte der zweiten Linie — die gestrichelte Vorschau wird live aktualisiert.

## Was der Befehl erstellt

- Der der Schnittpunkt nächste Endpunkt der ersten Linie wird zum Tangentenpunkt **T1** verschoben.
- Der der Schnittpunkt nächste Endpunkt der zweiten Linie wird zum Tangentenpunkt **T2** verschoben.
- Ein neues Arc-Element wird von **T1** nach **T2** eingefügt, tangential zu beiden Linien.

Der eingefügte Bogen übernimmt die aktuellen Einstellungen für Linienstärke, Farbe, Ebene und Linientyp.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Radiuswert hinzufügen |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebenen Radius bestätigen und zur Linienauswahl wechseln |
| `Escape` | Abbrechen und zurücksetzen |

## Unterstützte Elemente

| Element | Unterstützt |
|---------|------------|
| Line | Ja — sowohl als erstes als auch als zweites Element |
| Arc, Circle, Ellipse, Polyline | Nein |
| Text, Spline, Dimension, Leader | Nein |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Eckentyp | Abgerundeter Bogen | Gerader Schnitt |
| Eingabe | Ein Radius | Zwei Abstände (d1, d2) |
| Eingefügtes Element | Arc | Line |
| Unterstützte Elemente | Nur Lines | Lines und Polylines |
