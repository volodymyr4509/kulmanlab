---
title: Fillet-Befehl — Ecke mit einem Tangentenbogen abrunden
description: Der Fillet-Befehl rundet eine Ecke zwischen zwei Line-, Arc- oder Polyline-Segmenten mit einem Tangentenbogen des angegebenen Radius ab. Das Abrunden der eigenen Ecke einer Polylinie fügt den Bogen direkt ein; das Abrunden über eine offene Polylinie hinweg verschmilzt beide Seiten zu einer neuen Polylinie.
keywords: [CAD-Fillet-Befehl, Ecke abrunden CAD, Fillet-Bogen, Tangentenbogen, Polylinie Fillet, Bogen Fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

Der `Abrunden`-Befehl rundet eine Ecke zwischen zwei [Line](../line/)-, [Arc](../arc/)- oder [Polyline](../polyline/)-Segmenten ab, indem er einen Tangentenbogen des angegebenen Radius einfügt und die gewählten Elemente bis zu diesem Punkt zurückschneidet (oder zusammenführt).

Fillet funktioniert mit **Line-, Arc- und Polyline**-Elementen — einschließlich der geraden und Bogensegmente einer Polylinie.

## Fillet verwenden

1. Geben Sie `Abrunden` im Terminal ein oder klicken Sie auf die Schaltfläche **Fillet** in der Symbolleiste.
2. **Fillet-Radius eingeben** und **Enter** drücken.
3. **Erste Linie, Bogen oder Polylinien-Segment klicken** — der geklickte Bereich bestimmt, welche Seite eines Schnittpunkts behalten wird.
4. **Über das zweite Element hovern** — eine gestrichelte Bogenvorschau zeigt das resultierende Fillet. Bewegen Sie den Mauszeiger auf die Seite, die Sie behalten möchten.
5. **Klicken**, um anzuwenden.

```
  Vorher:                     Nachher (Radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Seitenauswahl bei sich schneidenden Elementen

Wenn sich zwei Elemente kreuzen, wird das Fillet an der durch die Klickpositionen definierten Ecke angewendet — der Teil jedes Elements auf **der Seite des Mauszeigers** wird behalten.

- Klicken Sie nahe einem Ende des ersten Elements, um diese Hälfte auszuwählen.
- Bewegen Sie den Mauszeiger zur gewünschten Hälfte des zweiten Elements — die gestrichelte Vorschau wird live aktualisiert.

## Was der Befehl erstellt

Das Ergebnis hängt davon ab, was Sie ausgewählt haben:

- **Zwei eigenständige Lines/Arcs**, oder jedes Paar ohne eine offene Polylinie: beide werden bis zu den Tangentenpunkten **T1**/**T2** zurückgeschnitten, und ein neues Arc-Element wird zwischen ihnen eingefügt.
- **Zwei Segmente derselben Polylinie, die sich einen Eckpunkt teilen**: kein neues Element — das Fillet wird Teil der Polylinie selbst. Der Eckpunkt wird durch die beiden Tangentenpunkte ersetzt, und der Bogen dazwischen wird als Bulge dieser Kante gespeichert — genau so, wie eine abgerundete Polylinien-Ecke über DXF hin- und zurückübertragen wird.
- **Alles andere mit einer offenen Polylinie** — zwei verschiedene offene Polylinien, oder eine offene Polylinie und eine eigenständige Line/Arc: beide werden zu einer **einzigen neuen Polylinie** zusammengeführt, wobei jede Seite bis zu ihrem Tangentenpunkt erhalten und durch den Fillet-Bogen als weiteres Bulge-Segment verbunden wird; die ursprünglichen Elemente werden ersetzt.

Der eingefügte oder verlängerte Bogen übernimmt die aktuellen Einstellungen für Linienstärke, Farbe, Ebene und Linientyp (bzw. die der Polylinie selbst, wenn er in sie eingeht).

## Ecken ohne echten Winkel zum Abrunden

Wenn sich die beiden gewählten Segmente an einem gemeinsamen Eckpunkt bereits tangential treffen — eine gerade Polylinien-Ecke, oder eine Linie, die glatt in ein tangential fortgesetztes Bogensegment übergeht — gibt es keine echte Ecke, die ein Kreis abrunden könnte. Fillet erkennt dies und verweigert die Aktion mit `cannot fillet: no tangent circle fits there`, anstatt eine unerwünschte Schleife zu zeichnen.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Radiuswert hinzufügen |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` / `Space` | Eingegebenen Radius bestätigen und zur Elementauswahl wechseln |
| `Escape` | Abbrechen und zurücksetzen |

## Unterstützte Elemente

| Element | Unterstützt |
|---------|------------|
| Line | Ja |
| Arc | Ja |
| Polyline (gerades oder Bogensegment) | Ja |
| Circle, Ellipse | Nein |
| Text, Spline, Dimension, Leader | Nein |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Eckentyp | Abgerundeter Bogen | Gerader Schnitt |
| Eingabe | Ein Radius | Zwei Abstände (d1, d2) |
| Eingefügtes Element | Arc | Line |
| Unterstützte Elemente | Lines, Arcs und Polylines (gerade oder Bogensegmente) | Lines und Polylines (nur gerade Segmente) |
