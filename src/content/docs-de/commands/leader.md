---
sidebar_position: 10
title: Befehl Leader — Mehrfachführungslinien-Anmerkungen mit Pfeilspitze und Text in KulmanLab CAD zeichnen
description: "Der Befehl leader zeichnet eine vierphasige Mehrfachführungslinien-Anmerkung: Pfeilspitze, Knickpunkt, Textposition und getippte Beschriftung. Die Textausrichtung passt sich automatisch basierend auf der Knickposition an. Nur Import in DXF — Führungslinien werden beim Speichern nicht geschrieben."
keywords: [CAD leader Befehl, Mehrfachführungslinie Anmerkung, Führungslinie CAD, Pfeil Beschriftung Anmerkung, Knick Führungslinie, Textausrichtung CAD, kulmanlab]
---

# Leader

Der Befehl `leader` zeichnet eine Mehrfachführungslinien-Anmerkung in vier Schritten: eine Pfeilspitze, die ein Merkmal berührt, eine Führungslinie, die sich an einem Knickpunkt biegt, einen Textanker und eine getippte Beschriftung. Von allen Anmerkungsbefehlen ist Leader der einzige mit einer interaktiven Texteingabephase mit blinkender Cursor-Vorschau.

## Aufbau einer Mehrfachführungslinie

```
  ◄── Pfeilspitze  (Schritt 2 — berührt das Merkmal)
      \
       \  Führungslinie
        \
         ●──── Knickpunkt (Schritt 3) ──── Textanker (Schritt 4)
                                           Beschriftungstext  (Schritt 5)
```

- **Pfeilspitze** — das spitze Ende, das am zu bemaßenden Merkmal platziert wird.
- **Knickpunkt** — der Ellbogen, an dem sich die Führungslinie zum Text hin biegt.
- **Textanker** — wo die Beschriftung positioniert wird. Text wird automatisch links oder rechts ausgerichtet.

## Eine Führungslinie zeichnen

1. Geben Sie `leader` im Terminal ein oder klicken Sie auf die Schaltfläche **Leader** in der Symbolleiste.
2. **Klicken Sie auf die Pfeilspitze** oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Klicken Sie auf den Knickpunkt** — den Bogen in der Führungslinie. Der Winkel rastet in 45°-Schritten ein; geben Sie eine Länge ein und drücken Sie **Enter** für präzise Platzierung. Oder geben Sie `X,Y` für eine absolute Koordinate ein.
4. **Klicken Sie auf die Textposition** — wo die Beschriftung verankert wird. Dieselben Optionen gelten: klicken, Winkelsperre + Länge oder `X,Y`.
5. **Geben Sie den Beschriftungstext ein** — die Vorschau auf der Zeichenfläche aktualisiert sich live mit einem blinkenden Cursor. Drücken Sie **Enter** zum Platzieren.

## Koordinateneingabe (alle Punktphasen)

Bei jedem Punktauswahlschritt (Spitze, Knick, Textposition) können Sie anstelle eines Klicks eine genaue Koordinate eingeben:

1. Geben Sie den X-Wert ein (Ziffern, `.` oder `-`).
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{cursor}]` und bestätigt, dass X gesperrt ist.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter** zum Platzieren des Punktes.

## Winkelsperre (Schritte 3 und 4)

Nach jedem platzierten Punkt rastet der Befehl auf 45°-Achsen ein, wenn der Cursor weit genug entfernt ist. Während die Sperre aktiv ist:
- Die Vorschau rastet auf die Achse ein.
- Geben Sie eine Länge ein und drücken Sie **Enter**, um den nächsten Punkt in genau diesem Abstand zu platzieren.

Winkelsperre und Koordinateneingabe schließen sich gegenseitig aus — sobald Sie eine Ziffer ohne vorheriges `,` eingeben, interpretiert der Befehl dies als Entfernung (Winkelsperre muss aktiv sein). Um stattdessen eine absolute Koordinate einzugeben, beginnen Sie mit der X-Zahl gefolgt von einem Komma.

## Textbeschriftung bearbeiten

Während Sie die Beschriftung in Schritt 5 eingeben, können Sie den Text navigieren und bearbeiten, bevor Sie ihn platzieren:

| Taste | Aktion |
|-------|--------|
| Beliebiges druckbares Zeichen | An der Cursorposition einfügen |
| `←` / `→` | Cursor nach links oder rechts bewegen |
| `Backspace` | Zeichen links vom Cursor löschen |
| `Delete` | Zeichen rechts vom Cursor löschen |
| `Enter` | Führungslinie platzieren |

## Automatische Textausrichtung

Die Textausrichtung passt sich der Cursorposition relativ zum Knickpunkt an:

| Cursorposition | Textausrichtung |
|----------------|----------------|
| **Rechts** vom Knickpunkt | Von links nach rechts ab dem Textanker |
| **Links** vom Knickpunkt | Von rechts nach links (auf der rechten Seite verankert) |

Keine manuelle Anpassung nötig — bewegen Sie den Cursor auf die Seite, auf der Sie die Beschriftung möchten, und sie wird korrekt ausgerichtet.

## Tastaturkürzel

**Punktphasen (Spitze, Knick, Textposition)**

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinate eingeben (dann `,` um X zu sperren und Y einzugeben) |
| `,` | X bestätigen und zu Y-Eingabe wechseln |
| `0`–`9`, `.`, `-` | Entfernung aufbauen, wenn Winkelsperre aktiv |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Getippte Koordinate oder Entfernung bestätigen |

**Texteingabephase**

| Taste | Aktion |
|-------|--------|
| Druckbares Zeichen | An Cursorposition einfügen |
| `←` / `→` | Cursor bewegen |
| `Backspace` | Links löschen |
| `Delete` | Rechts löschen |
| `Enter` | Führungslinie platzieren |

| Taste | Aktion |
|-------|--------|
| `Escape` | Abbrechen und auf Schritt 2 zurücksetzen |

## Arme hinzufügen und entfernen

- Um einer vorhandenen Führungslinie einen zusätzlichen Pfeilspitzen-Arm hinzuzufügen: [Leader+](./leader-add)
- Um einen Arm von einer Führungslinie mit zwei oder mehr Armen zu entfernen: [Leader−](./leader-remove)

## DXF — nur Import

**Führungslinien sind nur importierbar.** `MLEADER`-Entitäten aus DXF-Dateien werden korrekt gelesen und angezeigt, aber im Editor gezeichnete Führungslinien werden beim Speichern einer DXF-Datei **nicht geschrieben**. Verwenden Sie Führungslinien für visuelle Anmerkungen; verlassen Sie sich nicht auf sie für Arbeitsabläufe, die auf gegenseitige Kompatibilität angewiesen sind.
