---
title: Scale-Befehl — Entitäten gleichmäßig um einen Basispunkt skalieren in KulmanLab CAD
description: Der Scale-Befehl skaliert ausgewählte Entitäten gleichmäßig um einen festgelegten Basispunkt mit einem eingegebenen Faktor. Der Faktor wird immer über die Tastatur eingegeben — es gibt kein Klicken zum Festlegen der Skalierung. Ein Faktor größer als 1 vergrößert; kleiner als 1 verkleinert. Jeder Entitätstyp wird unterstützt.
keywords: [CAD Scale-Befehl, Entitäten skalieren CAD, Objekte skalieren CAD, gleichmäßige Skalierung CAD, Skalierungsfaktor CAD, vergrößern verkleinern CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Der `scale`-Befehl skaliert ausgewählte Entitäten gleichmäßig um einen Basispunkt. Alle Abstände vom Basispunkt werden mit dem Skalierungsfaktor multipliziert — ein Faktor von `2` verdoppelt alle Abmessungen, `0.5` halbiert sie. Der Faktor wird immer durch Tastatureingabe festgelegt; es gibt kein Klicken zum Festlegen der Skalierung.

## Zwei Startmöglichkeiten

**Zuerst auswählen, dann skalieren** — wählen Sie zuerst Entitäten aus, dann aktivieren Sie den Befehl:

1. Wählen Sie eine oder mehrere Entitäten auf der Zeichenfläche aus.
2. Geben Sie `scale` im Terminal ein oder klicken Sie auf die **Scale**-Schaltfläche in der Werkzeugleiste.
3. **Klicken Sie den Basispunkt** — den festen Punkt, der sich während der Skalierung nicht bewegt. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
4. **Geben Sie den Skalierungsfaktor ein** und drücken Sie **Enter**.

**Zuerst aktivieren, dann auswählen** — starten Sie den Befehl ohne Auswahl:

1. Geben Sie `scale` ein oder klicken Sie auf die Werkzeugleistenschaltfläche.
2. **Objekte auswählen** — einzeln anklicken oder per Bereich ziehen.
3. Drücken Sie **Enter** oder **Space**, um die Auswahl zu bestätigen.
4. **Klicken Sie den Basispunkt** (Koordinateneingabe verfügbar), dann geben Sie den Faktor ein.

```
  Basis ●                Basis ●
        [Entität]   →          [größere Entität]
  Faktor = 2 → Abstände von ● werden verdoppelt
```

## Skalierungsfaktor eingeben

Nachdem der Basispunkt gesetzt wurde, zeigt das Terminal `Skalierungsfaktor eingeben:` und wartet auf Tastatureingabe:

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Faktor hinzufügen |
| `-` | Negativer Faktor (nur als erstes Zeichen — invertiert dann skaliert) |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Skalierung mit dem eingegebenen Faktor anwenden |

Der Faktor darf nicht null sein. Häufige Werte:

| Faktor | Auswirkung |
|--------|------------|
| `2` | Verdoppelt alle Abmessungen |
| `0.5` | Halbiert alle Abmessungen |
| `1.5` | Vergrößert um 50 % |
| `-1` | Spiegelt am Basispunkt (entspricht einer 180°-Drehung) |

Es gibt keine Live-Vorschau während der Eingabe — das skalierte Ergebnis erscheint erst nach dem Drücken von **Enter**.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen |
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten (Basispunktphase) oder Skalierungsfaktor (Faktorphase) |
| `,` | X sperren und zu Y-Eingabe wechseln (Basispunktphase) |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Koordinate bestätigen oder Skalierung anwenden |
| `Escape` | Abbrechen und zurücksetzen |

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Schaltet die Entität unter dem Cursor um |
| **Nach rechts ziehen** (streng) | Fügt vollständig im Rahmen liegende Entitäten hinzu |
| **Nach links ziehen** (schneidend) | Fügt den Rahmen schneidende Entitäten hinzu |
| **Enter** / **Space** | Bestätigt die Auswahl |

## Was skaliert wird

Alle Entitätstypen werden unterstützt. Jede Entität skaliert ihre Geometrie relativ zum Basispunkt:

| Entität | Was sich ändert |
|---------|----------------|
| Line | Beide Endpunkte werden vom Basispunkt weg skaliert |
| Circle | Mittelpunkt wird vom Basispunkt skaliert; Radius wird mit dem Faktor multipliziert |
| Arc | Mittelpunkt wird skaliert; Radius wird mit dem Faktor multipliziert; Winkel bleiben unverändert |
| Ellipse | Mittelpunkt wird skaliert; beide Halbachsenlängen werden mit dem Faktor multipliziert |
| Polylinie / Rectangle | Jeder Eckpunkt wird vom Basispunkt skaliert |
| Text | Ankerpunkt wird skaliert; Höhe wird mit dem Faktor multipliziert |
| Spline | Alle Kontrollpunkte / Fit-Punkte werden skaliert |
