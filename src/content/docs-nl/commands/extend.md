---
title: Extend Command — Entiteit tot Dichtstbijzijnde Rand Verlengen
description: Het commando Extend verlengt het dichtstbijzijnde eindpunt van een aangewezen Line, Arc, Ellipse of open Polyline tot het dichtstbijzijnde snijpunt met een andere entiteit. Een live preview toont de verlengde entiteit voordat u klikt.
keywords: [CAD extend commando, lijn verlengen CAD, boog verlengen CAD, ellips verlengen CAD, polylijn verlengen CAD, entiteit verlengen tot rand, hover extend preview, kulmanlab]
group: edit
order: 9
---

# Extend

Het commando `Verlengen` verlengt het dichtstbijzijnde eindpunt van een aangewezen [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) of open [Polyline](../polyline/) tot het dichtstbijzijnde snijpunt dat deze zou vormen met een andere entiteit in de tekening. Beweeg de cursor bij het eindpunt dat u wilt verlengen — een preview toont de verlengde entiteit — klik dan om toe te passen.

Alleen entiteiten met een echt eindpunt kunnen worden verlengd. Een [Circle](../circle/) en een volledige (360°) Ellipse zijn altijd gesloten vormen zonder eindpunt, dus die kunnen nooit worden verlengd — hetzelfde geldt voor een gesloten Polyline of Rectangle. Een gedeeltelijke Ellipse (een elliptische boog) en een Arc hebben wel eindpunten en worden op dezelfde manier verlengd als een Line.

## Een entiteit verlengen

1. Typ `Verlengen` in de terminal of klik op de werkbalkknop **Extend**.
2. **Beweeg de cursor bij een uiteinde** van de entiteit die u wilt verlengen — de preview toont deze verlengd tot de dichtstbijzijnde rand in die richting.
3. **Klik** om de verlenging toe te passen.

Het commando blijft actief na elke verlenging, zodat u kunt doorgaan met bewegen en klikken om meer entiteiten te verlengen. Druk op **Enter**, **Space** of **Escape** om af te sluiten.

```
  Voor:                        Na:

  ──────           |           ──────────────|
  (korte lijn)     (rand)      (verlengd tot rand)
```

## Hoe het eindpunt wordt gekozen

Het commando kijkt welk uiteinde zich dichter bij de cursor bevindt:

- **Line en open Polyline** — cursor dichter bij het eindpunt verlengt het einde voorwaarts; cursor dichter bij het startpunt verlengt het begin achterwaarts.
- **Arc en gedeeltelijke Ellipse** — cursor dichter bij een van de hoekuiteinden laat de boog in die richting groeien, rond hetzelfde middelpunt en dezelfde straal (of dezelfde ellipsvorm), tot deze de volgende rand bereikt.

Er wordt een straal — of, voor Arc en Ellipse, de eigen onderliggende cirkel of curve van de entiteit — uitgezonden vanaf het gekozen uiteinde, en het **dichtstbijzijnde snijpunt** met een andere entiteit (met uitzondering van de entiteit zelf en de genegeerde typen) wordt het nieuwe eindpunt.

Als er in die richting geen snijpunt wordt gevonden, verschijnt er geen preview en heeft klikken geen effect.

## Uitzonderingen voor randen

De volgende entiteittypen worden genegeerd als rand — een entiteit verlengt niet naar deze toe:

- Text / Mtext
- Multileader
- Spline

Alle andere typen (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungeren als geldige randen.

Als het eerste of laatste segment van een Polyline zelf een boogsegment is (getekend met de Arc-schakelaar), laat verlengen de boog langs zijn eigen cirkel groeien — net zoals bij het verlengen van een op zichzelf staande Arc — in plaats van het als een recht segment te behandelen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Space` | Sluit de extend-modus af |
| `Escape` | Sluit de extend-modus af |

## Ondersteunde entiteiten

| Entiteit | Kan worden verlengd? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Ellipse | Ja — alleen als het al een gedeeltelijke boog is; een volledige ellips heeft geen eindpunt |
| Circle | Nee — altijd een gesloten vorm zonder eindpunt |
| Polyline (open) | Ja |
| Polyline (gesloten) / Rectangle | Nee — altijd een gesloten vorm zonder eindpunt |
| Text, Spline, Dimension, Leader | Nee |

## Extend versus Trim

| | Extend | Trim |
|---|--------|------|
| Wat het doet | Verlengt het eindpunt van een entiteit tot een rand | Verwijdert een segment van een entiteit |
| Trigger | Beweeg de cursor bij het eindpunt om te verlengen | Beweeg de cursor over het segment om te knippen |
| Resultaat | Eindpunt beweegt naar buiten | Entiteit wordt gesplitst of verkort |
| Ondersteunde entiteiten | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
