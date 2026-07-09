---
sidebar_position: 7
title: Befehl align — Entitäten mit Punktpaaren verschieben, drehen und skalieren in KulmanLab CAD
description: Der Befehl align positioniert ausgewählte Entitäten mit ein oder zwei Quell-/Zielpunktpaaren neu — er kombiniert Verschieben, Drehen und optionales Skalieren in einem einzigen Vorgang. Funktioniert wie ein kombiniertes Move + Rotate + Scale.
keywords: [CAD align Befehl, Entitäten ausrichten CAD, verschieben drehen skalieren, Punktpaar-Ausrichtung, AutoCAD ALIGN Äquivalent, kulmanlab]
---

# Align

Der Befehl `align` positioniert ausgewählte Entitäten mit ein oder zwei Quell-/Zielpunktpaaren neu. Mit einem Punktpaar verhält er sich genau wie [Move](../move/) (nur Verschieben). Mit zwei Punktpaaren dreht er die Auswahl zusätzlich so, dass die Quelle-zu-Quelle-Richtung mit der Ziel-zu-Ziel-Richtung übereinstimmt, und kann optional so skalieren, dass die Quellstrecke der Zielstrecke entspricht — Verschieben, Drehen und Skalieren in einem einzigen Vorgang.

## Zwei Möglichkeiten zum Starten

**Zuerst auswählen, dann ausrichten** — wählen Sie zuerst Entitäten aus und aktivieren Sie dann den Befehl:

1. Wählen Sie eine oder mehrere Entitäten auf der Zeichenfläche aus.
2. Geben Sie `align` im Terminal ein oder klicken Sie auf die Schaltfläche **Align** in der Symbolleiste.
3. **Klicken Sie auf den ersten Quellpunkt (S1)**, dann **auf den ersten Zielpunkt (D1)**.
4. **Klicken Sie auf den zweiten Quellpunkt (S2)**, oder drücken Sie **Enter**, um jetzt eine reine Verschiebung anzuwenden.
5. **Klicken Sie auf den zweiten Zielpunkt (D2)**.
6. Beantworten Sie die Skalierungsabfrage: **Y** für Skalierung, oder **N** / **Enter**, um die Originalgröße beizubehalten.

**Aktivieren, dann auswählen** — Befehl ohne Auswahl starten:

1. Geben Sie `align` ein oder klicken Sie auf die Schaltfläche in der Symbolleiste.
2. **Objekte auswählen** — klicken zum Umschalten einzelner Entitäten oder ziehen zur Flächenauswahl.
3. Drücken Sie **Enter** oder **Space** zur Bestätigung der Auswahl.
4. Fahren Sie fort mit S1 → D1 → S2 → D2 → Skalierungsabfrage wie oben.

> Das Terminal benötigt nur so viele Buchstaben, wie zur eindeutigen Identifizierung nötig sind — die Eingabe von `al` und **Enter** aktiviert Align direkt, da kein anderer Befehlsname mit diesen beiden Buchstaben beginnt.

## Aufbau einer Ausrichtung

```
  Quellpunkte (auf den Entitäten):     Zielpunkte:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Ergebnis: Die Auswahl wird so verschoben, dass S1 auf D1 landet,
  dann um D1 gedreht, sodass die S1→S2-Richtung mit der D1→D2-
  Richtung übereinstimmt — und, falls gewünscht, so skaliert, dass
  |S1S2| zu |D1D2| wird.
```

Eine Geistervorschau folgt dem Cursor bei jedem Schritt: eine Verschiebungsvorschau beim Setzen von D1, dann eine gedrehte (gestrichelte) Vorschau, sobald D2 positioniert wird.

## Ausrichtung mit einem Punkt (nur Verschieben)

Nachdem D1 gesetzt wurde, drücken Sie **Enter** anstelle eines Klicks auf einen zweiten Quellpunkt. Die Auswahl wird um den S1→D1-Vektor verschoben — ohne Drehung oder Skalierung — identisch zu einem [Move](../move/) mit S1 als Basispunkt und D1 als Ziel.

## Ausrichtung mit zwei Punkten (Verschieben + Drehen + optionales Skalieren)

Sobald S2 und D2 beide gesetzt sind:

- **Drehwinkel** — die Differenz zwischen der Zielrichtung (`D1 → D2`) und der Quellrichtung (`S1 → S2`).
- **Skalierungsabfrage** — `scale objects to alignment points? [Yes/No] <N>` erscheint, mit **No** als Standard:
  - Drücken Sie **Y**, um die Auswahl zusätzlich gleichmäßig um D1 zu skalieren, sodass der Abstand `S1–S2` zum Abstand `D1–D2` wird.
  - Drücken Sie **N** oder **Enter**, um die Originalgröße beizubehalten — es werden nur Verschiebung und Drehung angewendet.

Das Drücken einer Taste bei der Skalierungsabfrage wendet die Ausrichtung sofort an — es gibt keinen separaten Bestätigungsschritt nach der Wahl von Ja oder Nein.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen und zur S1-Phase wechseln |
| `Enter` (im S2-Schritt) | Drehung überspringen — reine Verschiebung mit S1 und D1 anwenden |
| `Y` | Ausrichtung mit Skalierung anwenden |
| `N` / `Enter` (bei der Skalierungsabfrage) | Ausrichtung ohne Skalierung anwenden |
| `Escape` | Während der Punktauswahl: verwirft die Punkte und kehrt zur Auswahlphase zurück; ohne Auswahl: bricht den Befehl ab |

## Auswahl während des Befehls

Wenn der Befehl in der Auswahlphase startet:

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet die Entität unter dem Cursor in die Auswahl hinein/heraus |
| **Rechts ziehen** (streng) | Fügt vollständig innerhalb des Rahmens liegende Entitäten hinzu |
| **Links ziehen** (schneidend) | Fügt Entitäten hinzu, die die Rahmengrenze schneiden |
| **Enter** / **Space** | Bestätigt die Auswahl und wechselt zur S1-Phase |

## Nach dem Ausrichten

Die ausgerichteten Entitäten bleiben an ihrer neuen Position ausgewählt, und der Befehl endet automatisch — führen Sie **Align** erneut aus, oder wechseln Sie zu [Move](../move/), [Rotate](../rotate/) oder [Scale](../scale/), ohne erneut auszuwählen.

## align vs. move

| | align | move |
|---|-------|------|
| Punktpaare | 1 (nur Verschieben) oder 2 (Verschieben + Drehen + Skalieren) | 1 (nur Verschieben) |
| Drehung | Ja, mit zweitem Punktpaar | Nein |
| Skalierung | Optional, mit zweitem Punktpaar | Nein |
| Am besten für | Eine Form anhand von Referenzpunkten auf eine andere anpassen | Einfaches Neupositionieren |

## Unterstützte Entitäten

align funktioniert mit jedem Entitätstyp, der von Move, Rotate und Scale unterstützt wird — dieselben `translate`-, `rotate`- und `scale`-Operationen dieser Befehle werden nacheinander angewendet, sodass keine ausgeschlossen sind.
