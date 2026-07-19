---
title: Dimension Linear — Horizontale en Verticale Maatvoering
description: Het Dimension Linear-commando meet de horizontale of verticale afstand tussen twee punten. De maatlijn is altijd op de as uitgelijnd — druk op H of V om de oriëntatie te vergrendelen, of laat de cursorpositie automatisch beslissen. Volledige DXF-roundtrip als DIMENSION-entiteiten.
keywords: [CAD dimension linear, horizontale maatvoering CAD, verticale maatvoering CAD, dimlinear, H V oriëntatievergrendeling, maatlijnverschuiving, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Het `dimlinear`-commando plaatst een horizontale of verticale maatvoering tussen twee hulplijnoorsprongen. De maatlijn loopt altijd ofwel perfect horizontaal ofwel perfect verticaal — hij kan niet op een willekeurige hoek worden geplaatst. Gebruik [Dimension Aligned](../dim-aligned/) wanneer u een maatvoering parallel aan een diagonale lijn nodig heeft.

## Anatomie van een lineaire maatvoering

```
  |←————— 5.00 —————→|
  |                   |
  ●  (hulplijn 1)     ●  (hulplijn 2)
  p1                  p2
```

- **Hulplijnen** — lopen loodrecht op de maatlijn vanaf elk gemeten punt.
- **Maatlijn** — horizontaal (meet X-afstand) of verticaal (meet Y-afstand).
- **Waarde** — de geprojecteerde afstand langs de gekozen as, niet de ware afstand tussen de punten.

## Een lineaire maatvoering plaatsen

1. Typ `dimlinear` in de terminal of klik op de **Dimension Linear**-werkbalkknop.
2. **Klik op de oorsprong van de eerste hulplijn** (p1), of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
3. **Klik op de oorsprong van de tweede hulplijn** (p2). Coördinaatinvoer werkt hier ook.
4. **Beweeg de cursor** om de maatlijn te positioneren. De oriëntatie wordt automatisch bepaald op basis van de cursorpositie.
5. **Klik** om te plaatsen, of typ een verschuivingsafstand en druk op **Enter** voor nauwkeurige plaatsing.

## Automatische oriëntatiedetectie

Wanneer geen oriëntatie is vastgezet, leest het commando de cursorpositie ten opzichte van de twee gemeten punten:

| Cursorpositie | Gedetecteerde oriëntatie | Wat wordt gemeten |
|-----------------|---------------------|-----------------|
| Boven of onder de punten | Horizontaal | Δ X tussen p1 en p2 |
| Links of rechts van de punten | Verticaal | Δ Y tussen p1 en p2 |

Druk op **H** om horizontaal te vergrendelen of **V** om verticaal te vergrendelen, op elk moment tijdens de plaatsingsfase. Eenmaal vergrendeld, verandert de oriëntatie niet meer als u de cursor beweegt.

## Getypte verschuivingsafstand

Typ een getal tijdens het plaatsen om de maatlijn op een exacte afstand van de gemeten punten vast te zetten:

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de verschuivingsafstand |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` / `Spatie` | Plaatsen op de getypte afstand |

De kant van de cursor (boven/onder voor horizontaal, links/rechts voor verticaal) bepaalt het teken — de maatlijn verschijnt aan de kant waar de cursor zich op dat moment bevindt.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten (p1/p2-fasen), of verschuivingsafstand (plaatsingsfase) |
| `,` | X vergrendelen en doorgaan naar Y-invoer (p1/p2-fasen) |
| `H` | Horizontale oriëntatie vergrendelen (alleen plaatsingsfase) |
| `V` | Verticale oriëntatie vergrendelen (alleen plaatsingsfase) |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` / `Spatie` | Getypt coördinaat of verschuiving bevestigen |
| `Escape` | Annuleren |

## Dimension Linear versus Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| As | Altijd H of V | Parallel aan de gemeten lijn |
| Meet | Alleen X- of Y-component | Ware Euclidische afstand |
| H/V-toetsen | Ja — oriëntatie vergrendelen | Nee — volgt altijd p1→p2 |
| Ideaal voor | Orthogonale layouts, plattegronden | Diagonale elementen, hoeksneden |

## Het label bewerken — simple-modus

**Dubbelklik** op een geplaatste lineaire maatvoering om de tekstverwerker in **simple**-modus te openen. De editor wordt vooraf gevuld met de huidige gerenderde waarde, zodat u de cursor kunt positioneren en deze direct kunt bewerken.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Lettertype / Hoogte | Geldt meteen voor het **hele** label |
| Opmaak per teken | Niet ondersteund |
| `Enter` | Bevestigt de waarde en sluit de editor |
| Meerdere regels | Niet ondersteund |

Zie [Tekstverwerker — simple-modus](../../interface/text-editor/#simple-mode) voor de volledige referentie.

## Maatvoeringen aaneenschakelen

Om meer maatvoeringen toe te voegen die doorlopen vanaf de laatste hulplijn, gebruikt u [Dimension Continue](../dim-continue/) direct nadat u deze heeft geplaatst.

## DXF — DIMENSION-entiteit

Lineaire maatvoeringen worden opgeslagen als `DIMENSION`-entiteiten met `rotationDeg` ingesteld op `0` (horizontaal) of `90` (verticaal). Hulplijnoorsprongen, positie van de maatlijn, tekstpositie, gemeten waarde, pijlstijl, teksthoogte en alle weergavevlaggen blijven zonder verlies behouden bij de roundtrip.
