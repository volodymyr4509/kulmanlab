---
sidebar_position: 21
title: Chamfer-Befehl — Gerade Ecke zwischen zwei Linien schneiden in KulmanLab CAD
description: Der Chamfer-Befehl verbindet zwei Line- oder Polyline-Elemente mit einem geraden diagonalen Schnitt. Sie geben zwei Abstände an — je einen entlang jedes Elements — und der Befehl kürzt beide auf diese Punkte zurück und fügt eine verbindende Linie ein.
keywords: [CAD-Chamfer-Befehl, Fase Linie CAD, diagonaler Eckschnitt, abgeschrägte Ecke CAD, kulmanlab]
---

# Chamfer

Der `chamfer`-Befehl schneidet eine gerade diagonale Ecke zwischen zwei [Line](../line/)- oder [Polyline](../polyline/)-Elementen. Sie geben an, wie weit zurück entlang jedes Elements geschnitten werden soll (d1 und d2), und der Befehl kürzt beide Elemente auf diese Punkte zurück und fügt eine verbindende Linie zwischen ihnen ein.

Gleiche Abstände erzeugen einen symmetrischen 45°-Schnitt; unterschiedliche Abstände erzeugen eine asymmetrische Fase.

Chamfer funktioniert mit **Line- und Polyline**-Elementen.

## Chamfer verwenden

1. Geben Sie `chamfer` im Terminal ein oder klicken Sie auf die Schaltfläche **Chamfer** in der Symbolleiste.
2. **Ersten Chamfer-Abstand eingeben** (d1 — Abstand entlang des ersten Elements) und **Enter** drücken.
3. **Zweiten Chamfer-Abstand eingeben** (d2 — Abstand entlang des zweiten Elements) und **Enter** drücken.
4. **Erstes Element klicken** — der geklickte Bereich bestimmt, welche Seite einer Schnittlinie behalten wird.
5. **Über das zweite Element hovern** — eine gestrichelte Linienvorschau zeigt den resultierenden Chamfer-Schnitt. Bewegen Sie den Mauszeiger auf die Seite, die Sie behalten möchten.
6. **Klicken**, um anzuwenden. Beide Elemente werden gekürzt und die Chamfer-Linie wird eingefügt.

```
  Vorher (d1=5, d2=8):         Nachher:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Seitenauswahl

Wenn sich zwei Linien kreuzen, wird die Fase an der durch die Klickpositionen definierten Ecke angewendet — der Teil jedes Elements auf **der Seite des Mauszeigers** wird behalten.

- Klicken Sie nahe einem Ende des ersten Elements, um diese Hälfte auszuwählen.
- Bewegen Sie den Mauszeiger zur gewünschten Hälfte des zweiten Elements — die gestrichelte Vorschau wird live aktualisiert.

Bei Polylinien bestimmt die Klickposition, welches **Segment** der Polylinie beteiligt ist, und der nächste Scheitelpunkt auf der Schnittseite wird gekürzt.

## Was der Befehl erstellt

- Der Endpunkt des ersten Elements (oder Polylinienscheitelpunkt) nächstgelegen zum Schnittpunkt wird auf den Punkt **T1** verschoben, der d1 entlang des ersten Elements vom Schnittpunkt liegt.
- Der Endpunkt des zweiten Elements (oder Polylinienscheitelpunkt) nächstgelegen zum Schnittpunkt wird auf den Punkt **T2** verschoben, der d2 entlang des zweiten Elements vom Schnittpunkt liegt.
- Ein neues Line-Element wird von **T1** nach **T2** eingefügt.

Die eingefügte Linie übernimmt die aktuellen Einstellungen für Linienstärke, Farbe, Ebene und Linientyp.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum aktuellen Abstandswert hinzufügen |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebenen Abstand bestätigen und fortfahren |
| `Escape` | Abbrechen und zurücksetzen |

## Unterstützte Elemente

| Element | Unterstützt |
|---------|------------|
| Line | Ja |
| Polyline / Rectangle | Ja |
| Arc, Circle, Ellipse | Nein |
| Text, Spline, Dimension, Leader | Nein |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Eckentyp | Gerader Schnitt | Abgerundeter Bogen |
| Eingabe | Zwei Abstände (d1, d2) | Ein Radius |
| Eingefügtes Element | Line | Arc |
| Unterstützte Elemente | Lines und Polylines | Nur Lines |
