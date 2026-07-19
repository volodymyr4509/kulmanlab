---
title: Move Commando — Geselecteerde Entiteiten Verplaatsen
description: Het Move-commando verplaatst een of meer geselecteerde entiteiten met een basispunt en bestemming. Ondersteunt voorselectie, hoekvergrendeling en exacte afstandsinvoer. Na de verplaatsing blijven de entiteiten geselecteerd op hun nieuwe positie. Elk entiteitstype wordt ondersteund.
keywords: [CAD move commando, entiteiten verplaatsen CAD, objecten verplaatsen CAD, hoekvergrendeling verplaatsen, exacte afstand verplaatsen, grip move CAD, kulmanlab]
group: edit
order: 1
---

# Move

Het `move`-commando verplaatst geselecteerde entiteiten van een basispunt naar een bestemmingspunt. De verschuiving die op elke geselecteerde entiteit wordt toegepast, is de vector van basis naar bestemming. Na de verplaatsing blijven alle entiteiten geselecteerd op hun nieuwe positie, klaar voor verdere bewerkingen.

## Twee manieren om te starten

**Eerst voorselecteren, dan verplaatsen** — selecteer eerst entiteiten en activeer daarna:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `move` in de terminal of klik op de **Move**-werkbalkknop.
3. **Klik op het basispunt**, of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
4. **Klik op de bestemming** — alle geselecteerde entiteiten verschuiven met de vector basis→bestemming. Coördinaatinvoer werkt hier ook.

**Eerst activeren, dan selecteren** — start het commando zonder voorselectie:

1. Typ `move` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om individuele entiteiten te schakelen, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de selectie te bevestigen.
4. **Klik op het basispunt**, klik daarna op **de bestemming** (coördinaatinvoer beschikbaar bij beide stappen).

```
  Voor:                      Na:
  ● basis                       → ● bestemming
  [entiteit A]                      [entiteit A verplaatst]
  [entiteit B]                      [entiteit B verplaatst]
```

Een spookpreview van alle geselecteerde entiteiten volgt de cursor van het basispunt naar de bestemming, en toont het resultaat voordat u klikt.

## Coördinaatinvoer

Bij de basispunt- of bestemmingsstap kunt u een exacte positie typen in plaats van klikken:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Hoekvergrendeling en exacte afstand

Nadat het basispunt is ingesteld, controleert het commando op een 45°-vangas (0°, 45°, 90°, 135°, …). De richting **vergrendelt** wanneer de cursor ver genoeg van de basis staat en binnen één grip-breedte van de as ligt. Tijdens vergrendeling:

- Springt de spookpreview naar de as.
- Typ een afstand en druk op **Enter** om exact zo ver in de vergrendelde richting te verplaatsen.
- Klikken projecteert op de as, zodat de bestemming altijd exact erop ligt.

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Toevoegen aan de afstandswaarde |
| `-` | Negatieve afstand — keert richting om langs de as (alleen als eerste teken) |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Verplaatsing toepassen op de getypte afstand |

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Selectie bevestigen en doorgaan naar de basispuntfase |
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten, of afstand bij hoekvergrendeling |
| `,` | X vergrendelen en doorgaan naar Y-invoer |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Coördinaat bevestigen of verplaatsing toepassen op getypte afstand |
| `Escape` | Annuleren en resetten |

## Move activeren vanuit een grip

Klikken op de **middelpuntgrip** van een geselecteerde [Line](../line/) start Move automatisch, met het middelpunt al ingesteld als basispunt en de verplaatsingsfase actief. Dit is de snelste manier om een enkele lijn te herpositioneren zonder de selectiestap te doorlopen.

## Selectie tijdens het commando

Wanneer het commando start in de selectiefase:

| Methode | Gedrag |
|--------|-----------|
| **Klikken** | Schakelt de entiteit onder de cursor in/uit de selectie |
| **Slepen naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak vallen |
| **Slepen naar links** (kruisend) | Voegt entiteiten toe die de vakrand kruisen |
| **Enter** / **Spatie** | Bevestigt de selectie en gaat naar de basispuntfase |

## Na de verplaatsing

De verplaatste entiteiten blijven geselecteerd op hun nieuwe positie. Dit betekent dat u direct kunt:
- **Move** opnieuw uitvoeren om ze verder te verschuiven.
- [Copy](../copy/), [Rotate](../rotate/) of [Scale](../scale/) uitvoeren zonder opnieuw te selecteren.
- Op **Delete** drukken om ze te verwijderen.

## Move versus Copy

| | Move | Copy |
|---|------|------|
| Oorspronkelijke positie | Verlaten — entiteiten staan er niet meer | Behouden — originelen blijven op hun plaats |
| Aantal resultaten | Zelfde aantal entiteiten | Eén extra set per bewerking |
| Selectie na afloop | Verplaatste entiteiten geselecteerd op nieuwe positie | Gekopieerde entiteiten geselecteerd op nieuwe positie |
| Ideaal voor | Geometrie herpositioneren | Geometrie dupliceren |

## Ondersteunde entiteiten

Move werkt op elk entiteitstype: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader en alle andere. Alle entiteiten implementeren `translate(dx, dy)`, dus geen enkele is uitgesloten.
