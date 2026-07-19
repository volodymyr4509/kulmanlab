---
title: Delete Command — Verwijder Entiteiten uit de Tekening
description: Het commando Delete verwijdert geselecteerde entiteiten permanent (ongedaan te maken). Vooraf geselecteerde entiteiten worden direct verwijderd zonder bevestigingsstap. De Delete-toets werkt als globale sneltoets, zelfs zonder het commando te activeren. Ondersteunt selecteren met één klik en per gebied.
keywords: [CAD delete commando, entiteiten verwijderen CAD, objecten wissen CAD, delete toets CAD, verwijderen ongedaan maken CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Het commando `delete` verwijdert geselecteerde entiteiten uit de tekening. Verwijderingen worden vastgelegd in de [Undo](../undo/)-geschiedenis en kunnen tot 20 stappen worden teruggedraaid. Er is geen apart bevestigingsvenster voor "verwijderen bevestigen" — bevestiging is één toetsdruk.

## Twee manieren om te verwijderen

**Eerst selecteren, dan verwijderen** — de snelste route:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `delete` in de terminal, klik op de werkbalkknop **Delete**, **of druk direct op de `Delete`-toets**.

Entiteiten worden direct verwijderd — geen extra bevestigingsstap.

**Eerst activeren, dan selecteren**:

1. Typ `delete` of klik op de werkbalkknop (zonder dat er iets geselecteerd is).
2. **Selecteer objecten** — klik om aan/uit te zetten, of sleep om per gebied te selecteren.
3. Druk op **Enter**, **Spatie** of **Delete** om te bevestigen en de geselecteerde entiteiten te verwijderen.

## Sneltoets Delete

De `Delete`-toets op het toetsenbord werkt als een **globale sneltoets** — als er momenteel entiteiten zijn geselecteerd, verwijdert het indrukken ervan deze direct, zelfs zonder het commando Delete in de terminal te openen. Dit is de snelste werkwijze voor verwijdering in één stap:

```
Klik op entiteit → druk op Delete-toets → klaar
```

## Selectie tijdens het commando

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Zet de entiteit onder de cursor aan/uit in de selectie |
| **Sleep naar rechts** (strikt) | Selecteert alleen entiteiten die volledig binnen het vak vallen |
| **Sleep naar links** (kruisend) | Selecteert entiteiten die de rand van het vak snijden |
| **Enter** / **Spatie** / **Delete** | Bevestigt en verwijdert geselecteerde entiteiten |

## Verwijderde entiteiten herstellen

Verwijderingen kunnen ongedaan worden gemaakt met het commando [Undo](../undo/) (typ `undo` of gebruik de werkbalkknop). Tot **20 stappen** kunnen per bestand worden teruggedraaid, en de geschiedenis blijft behouden na het herladen van de pagina. Als u meer dan 20 verwijderingen heeft uitgevoerd zonder op te slaan, kunnen eerdere verwijderingen niet meer worden hersteld.

## Ondersteunde entiteiten

Delete werkt op elk entiteittype — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader en alle andere.
