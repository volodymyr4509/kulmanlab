---
title: "Explode-opdracht — een polylijn of blok in zijn delen opsplitsen"
description: "De opdracht Explode splitst een polylijn in haar Line- en Arc-entiteiten, of een blokverwijzing in de entiteiten die haar blok tekent, ter plekke. De delen zien er precies uit als het origineel."
keywords: [CAD explode-commando, polylijn exploderen CAD, polylijn opsplitsen in lijnen, polylijn omzetten naar line en arc, kulmanlab]
group: edit
order: 19
---

# Explode

Het `Opsplitsen`-commando splitst een [Polyline](../polyline/) op in de afzonderlijke [Line](../line/)- en [Arc](../arc/)-entiteiten — één per segment, precies waar de eigen hoekpunten van de polylijn lagen. De stukken vervangen de polylijn ter plekke en behouden de lijndikte, kleur, laag en lijntype ervan.

Explode werkt op **Polyline**-entiteiten en **blokverwijzingen**.

## Explode gebruiken

Twee manieren om het uit te voeren, hetzelfde patroon als [Delete](../delete/):

**Eerst selecteren, dan exploderen** — de snelste weg:

1. Selecteer één of meer polylijnen op het canvas.
2. Typ `Opsplitsen` in de terminal, of kies **Explode** in het uitklapmenu van het Edit-paneel.

De geselecteerde polylijnen worden direct geëxplodeerd — geen aparte bevestigingsstap, omdat er al iets geselecteerd is.

**Activeren, dan selecteren**:

1. Typ `Opsplitsen` of kies **Explode** in het uitklapmenu terwijl niets geselecteerd is.
2. **Selecteer polylijnen of blokverwijzingen** — klik om te wisselen, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de geselecteerde polylijnen te bevestigen en te exploderen.

Tijdens het selecteren worden alleen polylijnen en blokverwijzingen opgepikt — klikken op een Line, Circle of andere entiteit doet niets, en een gebiedssleep negeert al het andere erin of erdoorheen.

## Wat eruit komt

Elk segment van de polylijn wordt zijn eigen entiteit:

- Een **recht segment** wordt een **Line**.
- Een **boogsegment** (uit Polylines [Arc-optie](../polyline/)) wordt een **Arc**, die precies overeenkomt met het middelpunt, de straal en de zwaai van de oorspronkelijke curve.

Elke resulterende Line en Arc erft de **lijndikte, kleur, laag, lijntype en lijntypeschaal** van de bronpolylijn — er verandert niets aan hoe de geometrie eruitziet, alleen dat het nu meerdere onafhankelijke entiteiten zijn in plaats van één verbonden polylijn.

Een **blokverwijzing** wordt de entiteiten die haar blok tekent, geplaatst waar de verwijzing ze toonde. Entiteiten die het blok verborgen houdt — de andere toestanden van een dynamisch blok — vallen weg; elk attribuut wordt een gewone Text met zijn waarde; delen die ByBlock zijn getekend nemen de kleur van de verwijzing over, en delen op laag 0 haar laag. Een genest blok komt eruit als een eigen blokverwijzing, die u op zijn beurt kunt opsplitsen. Een verwijzing die in X en Y verschillend geschaald is, wordt niet opgepikt, omdat haar cirkels ellipsen zouden moeten worden.

De explosie is in één stap ongedaan te maken met [Undo](../undo/), net als elke andere bewerking.

## Selectie tijdens het commando

| Methode | Gedrag |
|---------|--------|
| **Klik** | Zet de polylijn of blokverwijzing onder de cursor in of uit de selectie; klikken op een andere entiteit doet niets |
| **Naar rechts slepen** (strikt) | Selecteert alleen polylijnen en blokverwijzingen die volledig binnen het kader liggen |
| **Naar links slepen** (kruisend) | Selecteert polylijnen en blokverwijzingen die de rand van het kader snijden |
| **Enter** / **Space** | Bevestigt en splitst de selectie op |

## Ondersteunde entiteiten

| Entiteit | Ondersteund |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Blokverwijzing | Ja, tenzij in X en Y verschillend geschaald |
| Line, Arc, Circle, Ellipse | Nee — niets om te exploderen |
| Text, Spline, Dimension, Leader, Hatch | Nee |
