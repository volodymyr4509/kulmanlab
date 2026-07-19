---
title: Mirror Commando — Entiteiten Spiegelen over een Tweepuntsas
description: Het Mirror-commando spiegelt geselecteerde entiteiten over een spiegellijn gedefinieerd door twee klikken. De originelen blijven altijd behouden — Mirror maakt nieuwe gespiegelde kopieën. De spiegelas kan onder elke hoek staan en vangt op stappen van 45°.
keywords: [CAD mirror commando, entiteiten spiegelen CAD, spiegelsymmetrie CAD, objecten omdraaien CAD, spiegelas CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Het `mirror`-commando maakt gespiegelde kopieën van geselecteerde entiteiten, gereflecteerd over een tweepuntsas. De originelen blijven **altijd behouden** — in tegenstelling tot [Move](../move/) of [Rotate](../rotate/) wijzigt Mirror nooit bestaande entiteiten; het voegt alleen nieuwe toe.

## Twee manieren om te starten

**Eerst voorselecteren, dan spiegelen** — selecteer eerst entiteiten en activeer daarna:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `mirror` in de terminal of klik op de **Mirror**-werkbalkknop.
3. **Klik op het eerste punt** van de spiegelas, of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
4. **Klik op het tweede punt** — de gespiegelde kopieën worden geplaatst en het commando sluit af. Coördinaatinvoer werkt hier ook.

**Eerst activeren, dan selecteren** — start het commando zonder voorselectie:

1. Typ `mirror` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om te schakelen, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de selectie te bevestigen.
4. **Klik op het eerste punt**, klik daarna op **het tweede punt** van de spiegelas (coördinaatinvoer beschikbaar bij beide stappen).

```
  Origineel:          Spiegelas:           Resultaat:
                     |
  [entiteit A]  →    |    →    [entiteit A] + [gespiegelde A]
                     |
```

Een live preview van de gespiegelde kopieën volgt de cursor terwijl u het tweede aspunt positioneert.

## Spiegelas

De as is een oneindige lijn door de twee aangeklikte punten. Deze kan onder elke hoek staan:

- Beweeg de cursor dicht bij een **45°-vangas** (0°, 45°, 90°, 135°, …) en de as vergrendelt op die hoek — handig voor nette horizontale, verticale of diagonale spiegelingen.
- Klik buiten de vangzone voor een vrije hoek.

## Coördinaatinvoer

Bij elke asstap kunt u een exacte positie typen in plaats van klikken:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Selectie bevestigen |
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten |
| `,` | X vergrendelen en doorgaan naar Y-invoer |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypt coördinaat bevestigen |
| `Escape` | Annuleren en resetten |

## Selectie tijdens het commando

| Methode | Gedrag |
|--------|-----------|
| **Klikken** | Schakelt de entiteit onder de cursor |
| **Slepen naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak vallen |
| **Slepen naar links** (kruisend) | Voegt entiteiten toe die het vak kruisen |
| **Enter** / **Spatie** | Bevestigt de selectie |

## Wat wordt gespiegeld

Elk entiteitstype wordt ondersteund. Geometrie wordt wiskundig gereflecteerd over de as:

| Entiteit | Wat er verandert |
|--------|-------------|
| Lijn | Beide eindpunten gespiegeld |
| Cirkel | Middelpunt gespiegeld; radius ongewijzigd |
| Boog | Middelpunt gespiegeld; start- en eindhoek herberekend over de as |
| Ellips | Middelpunt gespiegeld; richting van de hoofdas omgedraaid over de as |
| Polylijn / Rechthoek | Elk hoekpunt gespiegeld |
| Tekst | Ankerpunt gespiegeld; tekststring wordt **niet** omgekeerd |
| Spline | Alle controlepunten / fit-punten gespiegeld |

## Mirror versus Copy

| | Mirror | Copy |
|---|--------|------|
| Originelen | Altijd behouden | Altijd behouden |
| Positie nieuwe entiteit | Gespiegeld over een as | Verschoven met een verplaatsingsvector |
| Ideaal voor | Symmetrische ontwerpen, bilaterale kenmerken | Herhalende geometrie in elke richting |
