---
title: Extend Command — Verleng Lijneinde tot Dichtstbijzijnde Rand
description: Het commando Extend verlengt het dichtstbijzijnde eindpunt van een aangewezen Line tot het dichtstbijzijnde snijpunt met een andere entiteit. Een live preview toont de verlengde lijn voordat u klikt. Extend werkt alleen op Line-entiteiten en negeert Text, Spline en Multileader als randen.
keywords: [CAD extend commando, lijn verlengen CAD, lijn verlengen tot rand, lijneinde verlengen, hover extend preview, kulmanlab]
group: edit
order: 9
---

# Extend

Het commando `extend` verlengt het dichtstbijzijnde eindpunt van een [Line](../line/) tot het dichtstbijzijnde snijpunt dat deze zou vormen met een andere entiteit in de tekening. Beweeg de cursor bij het eindpunt dat u wilt verlengen — een preview toont de verlengde lijn — klik dan om toe te passen.

Extend werkt **alleen op Line-entiteiten**. De randen waar de lijn naartoe verlengt, kunnen elk ander entiteittype zijn, behalve Text, Mtext, Multileader en Spline.

## Een lijn verlengen

1. Typ `extend` in de terminal of klik op de werkbalkknop **Extend**.
2. **Beweeg de cursor bij een uiteinde van een lijn** — de preview toont de lijn verlengd tot de dichtstbijzijnde rand in die richting.
3. **Klik** om de verlenging toe te passen.

Het commando blijft actief na elke verlenging, zodat u meerdere lijnen achter elkaar kunt verlengen. Druk op **Escape** om af te sluiten.

```
  Voor:                        Na:

  ──────           |           ──────────────|
  (korte lijn)     (rand)      (verlengd tot rand)
```

## Hoe het eindpunt wordt gekozen

Het commando kijkt welk eindpunt zich dichter bij de cursor bevindt:

- Cursor **dichter bij het eindpunt** → het einde wordt voorwaarts verlengd langs de lijnrichting.
- Cursor **dichter bij het startpunt** → het begin wordt achterwaarts verlengd (in de tegenovergestelde richting).

Er wordt een straal uitgezonden vanaf het gekozen eindpunt langs de lijnrichting, en het **dichtstbijzijnde snijpunt** langs die straal met een andere entiteit (met uitzondering van de lijn zelf en de genegeerde typen) wordt het nieuwe eindpunt.

Als er in die richting geen snijpunt wordt gevonden, verschijnt er geen preview en heeft klikken geen effect.

## Uitzonderingen voor randen

De volgende entiteittypen worden genegeerd als rand — een lijn verlengt niet naar deze toe:

- Text / Mtext
- Multileader
- Spline

Alle andere typen (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungeren als geldige randen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` | Sluit de extend-modus af |

## Ondersteunde entiteiten

| Entiteit | Kan worden verlengd? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nee |
| Polyline / Rectangle | Nee |
| Text, Spline, Dimension, Leader | Nee |

## Extend versus Trim

| | Extend | Trim |
|---|--------|------|
| Wat het doet | Verlengt een lijneinde tot een rand | Verwijdert een segment van een lijn |
| Trigger | Beweeg de cursor bij het eindpunt om te verlengen | Beweeg de cursor over het segment om te knippen |
| Resultaat | Lijneinde beweegt naar buiten | Lijn wordt gesplitst of verkort |
| Beide | Alleen lijnen | Alleen lijnen |
