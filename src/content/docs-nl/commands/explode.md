---
title: Explode-commando — Splits een Polyline op in Line- en Arc-entiteiten
description: Het Explode-commando splitst een polylijn ter plekke op in de afzonderlijke Line- en Arc-entiteiten, één per segment. Elk stuk behoudt de lijndikte, kleur, laag en lijntype van de bronpolylijn. Werkt alleen op Polyline-entiteiten.
keywords: [CAD explode-commando, polylijn exploderen CAD, polylijn opsplitsen in lijnen, polylijn omzetten naar line en arc, kulmanlab]
group: edit
order: 16
---

# Explode

Het `Opsplitsen`-commando splitst een [Polyline](../polyline/) op in de afzonderlijke [Line](../line/)- en [Arc](../arc/)-entiteiten — één per segment, precies waar de eigen hoekpunten van de polylijn lagen. De stukken vervangen de polylijn ter plekke en behouden de lijndikte, kleur, laag en lijntype ervan.

Explode werkt alleen op **Polyline**-entiteiten.

## Explode gebruiken

Twee manieren om het uit te voeren, hetzelfde patroon als [Delete](../delete/):

**Eerst selecteren, dan exploderen** — de snelste weg:

1. Selecteer één of meer polylijnen op het canvas.
2. Typ `Opsplitsen` in de terminal, of klik op de knop **Explode** in het Edit-paneel.

De geselecteerde polylijnen worden direct geëxplodeerd — geen aparte bevestigingsstap, omdat er al iets geselecteerd is.

**Activeren, dan selecteren**:

1. Typ `Opsplitsen` of klik op de werkbalkknop zonder dat er iets is geselecteerd.
2. **Selecteer polylijnen** — klik om te schakelen, of sleep om op gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de geselecteerde polylijnen te bevestigen en te exploderen.

Tijdens het selecteren worden alleen polylijnen opgepikt — klikken op een Line, Circle of een andere entiteit doet niets, en een gebiedssleep negeert alles behalve de polylijnen erbinnen of die het kruisen.

## Wat eruit komt

Elk segment van de polylijn wordt zijn eigen entiteit:

- Een **recht segment** wordt een **Line**.
- Een **boogsegment** (uit Polylines [Arc-optie](../polyline/)) wordt een **Arc**, die precies overeenkomt met het middelpunt, de straal en de zwaai van de oorspronkelijke curve.

Elke resulterende Line en Arc erft de **lijndikte, kleur, laag, lijntype en lijntypeschaal** van de bronpolylijn — er verandert niets aan hoe de geometrie eruitziet, alleen dat het nu meerdere onafhankelijke entiteiten zijn in plaats van één verbonden polylijn.

De explosie is in één stap ongedaan te maken met [Undo](../undo/), net als elke andere bewerking.

## Selectie tijdens het commando

| Methode | Gedrag |
|---------|--------|
| **Klik** | Schakelt de polylijn onder de cursor in/uit de selectie; klikken op een niet-polylijn-entiteit doet niets |
| **Sleep naar rechts** (strikt) | Selecteert alleen polylijnen die volledig binnen het vak vallen |
| **Sleep naar links** (kruisend) | Selecteert polylijnen die de vakgrens kruisen |
| **Enter** / **Spatie** | Bevestigt en explodeert de geselecteerde polylijnen |

## Ondersteunde entiteiten

| Entiteit | Ondersteund |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Line, Arc, Circle, Ellipse | Nee — niets om te exploderen |
| Text, Spline, Dimension, Leader, Hatch | Nee |
