---
title: Hatch-Befehl — Eine Fläche mit einem Muster füllen
description: Der Hatch-Befehl füllt den Bereich um einen angeklickten Punkt mit einem Muster — jede Kombination aus Linien, Bögen, Ellipsen und Splines, die sich schließt, umschließt einen Bereich, und jede geschlossene Form darin bleibt als ungefüllte Insel bestehen.
keywords: [CAD Hatch-Befehl, Fläche füllen CAD, Hatch-Muster CAD, ANSI31, SOLID-Füllung, Randfüllung CAD, DXF HATCH-Element, kulmanlab]
group: shapes
order: 7
---

# Hatch

Der Befehl `Schraffur` füllt den Bereich um einen angeklickten Punkt mit einem Muster. Die Randkontur wird nicht vorher gezeichnet — sie ergibt sich aus dem, was bereits auf der Zeichenfläche vorhanden ist, sodass vier separate [Lines](../line/), die Ende an Ende zusammentreffen, einen Bereich genauso umschließen wie eine geschlossene [Polyline](../polyline/), und jede geschlossene Form darin wird zu einer Insel, die die Füllung unangetastet lässt.

## Eine Fläche füllen

1. Geben Sie `Schraffur` im Terminal ein oder klicken Sie auf die Werkzeugleisten-Schaltfläche **Hatch** (das Muster-Symbol).
2. **Klicken Sie auf einen Punkt** innerhalb der Fläche, die Sie füllen möchten.
3. Der Befehl bleibt aktiv, sodass Sie weiterklicken können, um weitere Flächen zu füllen — jeder Klick erzeugt sein eigenes `Hatch`-Element.
4. Drücken Sie **Enter**, **Space** oder **Escape**, wenn Sie fertig sind.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   innerhalb der äußeren
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   Grenze klicken; der Kreis
  └─────────────┘        └─────────────┘   bleibt als Insel bestehen
```

## Tastaturübersicht

| Taste | Aktion |
|-----|--------|
| `Enter` / `Space` | Den Hatch-Befehl beenden |
| `Escape` | Den Hatch-Befehl beenden (wie Enter/Space) |

## Was eine Randkontur bilden kann

Jede Kombination der folgenden Elementtypen kann eine Randkontur bilden, in beliebiger Zusammensetzung, solange sie ohne Lücke Ende an Ende verbunden sind:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (eigene geschlossene Kontur)
- [Ellipse](../ellipse/) (geschlossen, oder ein offener elliptischer Bogen als Teil einer größeren Schleife)
- [Polyline](../polyline/) (offen oder geschlossen) und [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Text-, Multileader- und Bemaßungselemente werden niemals als Randkontur behandelt.

## Inseln

Alles, was vollständig innerhalb des von Ihnen angeklickten Bereichs geschlossen ist — ein Kreis, eine geschlossene Polyline, die Randkontur eines anderen Hatch — wird zu einer **Insel**: Die Füllung endet an ihrer Kante, und die Insel selbst bleibt leer. Setzen Sie eine geschlossene Form in eine andere geschlossene Form, und die Füllung wechselt sich ab, Loch in Füllung in Loch, nach derselben Innen-/Außen-Regel auf jeder Ebene.

## Wenn ein Klick fehlschlägt

Wenn der angeklickte Punkt nicht umschlossen ist oder die Randkontur eine Lücke hat, erklärt das Terminal den Grund, statt stillschweigend nichts zu tun:

| Meldung | Bedeutung |
|---------|-----------|
| "no boundary found" | In keiner Richtung vom angeklickten Punkt aus wurde etwas getroffen — es gibt überhaupt keine Randkontur in der Nähe |
| "point is not enclosed" | In der Nähe existiert eine Randkontur, aber die Form, die sie bildet, enthält den angeklickten Punkt nicht |
| "boundary is open" | Die nächstgelegene Randkontur hat irgendwo eine Lücke — verfolgen Sie sie und prüfen Sie, ob jede Verbindung exakt ist |
| "boundary too complex" | Die Randschleife konnte innerhalb des Durchlauflimits nicht geschlossen werden — meist ein Gewirr überlappender Elemente |

Der Befehl bleibt nach einem fehlgeschlagenen Klick aktiv — lesen Sie die Meldung, korrigieren Sie die Zeichnung oder klicken Sie an anderer Stelle, und versuchen Sie es erneut.

## Ein Muster wählen

Jeder neue Hatch startet gefüllt mit `ANSI31` (oder dem Muster, das der *zuletzt* bearbeitete Hatch verwendet hat) — es gibt keine Musterauswahl vor dem Zeichnen. Um ein anderes Muster zu verwenden:

1. Wählen Sie einen vorhandenen Hatch aus und öffnen Sie dessen Feld **Pattern** im Eigenschaftenfenster — dies öffnet die Musterauswahl, ein Raster benannter Muster-Vorschauen, gruppiert danach, woher jedes Muster stammt.
2. Klicken Sie auf ein Muster, um es anzuwenden — die Füllung wird sofort aktualisiert.

Diese Auswahl wird auch zur Vorgabe für den *nächsten* Hatch, den Sie mit dem Befehl `Schraffur` erstellen, genauso wie die Wahl eines Layers oder einer Farbe übernommen wird. Um also mehrere neue Flächen mit einem bestimmten Muster zu schraffieren: eine Fläche füllen, ihr Muster einmal festlegen, dann weiter schraffieren — jede Füllung danach beginnt bereits mit diesem angewendeten Muster.

Siehe [Hatch Manager](../hatch-manager/) zum Hochladen eigener `.pat`-Musterdateien und zum Durchsuchen der vollständigen Bibliothek.

**SOLID** ist ein normaler Eintrag in der Musterliste, kein separates Kontrollkästchen oder Modus — wählen Sie es genauso, wie Sie ANSI31 oder ein anderes benanntes Muster wählen würden.

## Eigenschaften

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Pattern | Der Mustername, aus dem gemeinsamen Muster-Vokabular (siehe [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Skaliert den Linienabstand des Musters — größere Werte spreizen die Musterlinien weiter auseinander |
| Pattern Angle | Dreht das Muster unabhängig von der Randkontur |
| Origin X / Origin Y | Wo die eigene Wiederholung des Musters verankert ist, in Zeichnungskoordinaten |

Das Verschieben, Drehen, Spiegeln oder Skalieren eines Hatch nimmt dessen Musterplatzierung mit, sodass die Füllung an der Randkontur ausgerichtet bleibt — Sie müssen Skalierung oder Winkel nach einer Transformation nicht neu einstellen.

## Griffbearbeitung der Randkontur

Ein ausgewählter Hatch greift seine Randkontur so, wie eine Polyline ihre Eckpunkte greift — ein Griff an jeder Ecke, an der zwei Kanten aufeinandertreffen, und einer in der Mitte jeder Kante (eine geschlossene Schleife wie ein schraffierter Kreis oder eine Ellipse greift stattdessen an ihren vier Achsenpunkten).

| Griff | Was er bewirkt |
|-------|-----------------|
| **Ecke** | Verschiebt diese Ecke. Eine gerade Kante folgt exakt; ein Bogen passt sich neu an, um weiterhin durch beide Nachbarn zu verlaufen; eine Ellipsen- oder Spline-Kante kann nur irgendwo auf ihrer eigenen Kurve landen, sodass die Ecke am nächstgelegenen Punkt darauf einrastet |
| **Kantenmitte — Linien-, Ellipsen- oder Spline-Kante** | Verschiebt die gesamte Kante; die Kanten auf beiden Seiten werden gekürzt oder verlängert, um mit ihr verbunden zu bleiben |
| **Kantenmitte — Bogenkante** | **Wölbt** den Bogen durch den Cursor, statt ihn zu verschieben — beide Enden bleiben genau dort, wo sie waren, und sonst bewegt sich nichts in der Randkontur |
| **Mittelpunkt** (gesamter Hatch) | Aktiviert [Move](../move/) für den gesamten Hatch |

Eine Zieh-Vorschau zeigt die Randkontur als gestrichelte Umrisslinie statt als durchgehende Füllung, während Sie ziehen — die ursprüngliche Füllung bleibt darunter sichtbar, bis Sie loslassen, da eine Vorschau nur über dem malen kann, was bereits vorhanden ist, niemals etwas davon entfernen kann.

## DXF — HATCH-Element

Hatch-Elemente werden aus `HATCH`-Elementen **importiert**: KulmanLab liest die Randgeometrie zusammen mit Mustername, Skalierung und Winkel (DXF-Gruppencodes 70/41/52) — es liest **nicht** die eigenen Linien-Definitionen des Musters, die inline in die Datei geschrieben werden. Stattdessen wird der Mustername in KulmanLabs eigener Musterbibliothek nachgeschlagen (eingebaute Standards plus alles, was Sie im [Hatch Manager](../hatch-manager/) hochgeladen haben). Ein Name, der nicht in Ihrer Bibliothek ist, fällt auf ANSI31 zurück, sodass die Zeichnung weiterhin schraffiert erscheint, und ein Hinweis wird einmal protokolliert.

Splinebegrenzte Schleifen, die von anderen Anwendungen geschrieben wurden (DXF-Randkantentyp 4), werden noch nicht gelesen.

Schraffuren werden als `HATCH`-Elemente nach DXF **exportiert**. Die Randschleifen gehen zusammen mit dem Musternamen (Gruppencode 2), dem Vollflächen-Flag (70) sowie Winkel und Maßstab dieser Schraffur (52/41) hinaus — und anders als beim Import werden auch die aufgelösten Musterlinien inline geschrieben (78, mit 53/43/44/45/46/79/49). Die Asymmetrie ist Absicht: KulmanLab kann einen Namen in der eigenen Bibliothek auflösen, die empfangende Anwendung hat dieses Muster aber vielleicht nicht — also reisen die Linien mit.

## Verwandte Befehle

- [Hatch Manager](../hatch-manager/) — die Musterbibliothek durchsuchen und `.pat`-Dateien hochladen
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — alle nehmen die Musterplatzierung des Hatch mit
- [Delete](../delete/) — löscht den Hatch, ohne die Elemente zu beeinträchtigen, die seine Randkontur bildeten
