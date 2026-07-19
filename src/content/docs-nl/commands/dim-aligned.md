---
title: Dimension Aligned — Ware Afstand op Elke Hoek
description: Het Dimension Aligned-commando meet de werkelijke rechte-lijnafstand tussen twee punten. De maatlijn loopt parallel aan de p1→p2-lijn op elke hoek — in tegenstelling tot Dimension Linear, dat beperkt is tot horizontaal of verticaal. Volledige DXF-roundtrip als DIMENSION-entiteiten.
keywords: [CAD dimension aligned, dimaligned, diagonale maatvoering CAD, ware afstand maatvoering, hoekmaatvoering CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Het `dimaligned`-commando plaatst een maatvoering die de **ware rechte-lijnafstand** tussen twee punten meet. De maatlijn loopt parallel aan de lijn die de twee punten verbindt, zodat deze op elke hoek kan staan. Dit is het belangrijkste verschil met [Dimension Linear](../dim-linear/), dat beperkt is tot horizontaal of verticaal.

## Anatomie van een uitgelijnde maatvoering

```
     ●  p2
    /|
   / |  (hulplijn 2, loodrecht op maatlijn)
  /  |
 /←5.00→/
/  /
●  /  (hulplijn 1, loodrecht op maatlijn)
p1
```

- **Hulplijnen** — loodrecht op de maatlijn, getekend vanaf elk gemeten punt.
- **Maatlijn** — parallel aan p1→p2, verschoven naar één kant op basis van de cursorpositie.
- **Waarde** — de ware Euclidische afstand `|p1 – p2|`.

## Een uitgelijnde maatvoering plaatsen

1. Typ `dimaligned` in de terminal of klik op de **Dimension Aligned**-werkbalkknop.
2. **Klik op de oorsprong van de eerste hulplijn** (p1), of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
3. **Klik op de oorsprong van de tweede hulplijn** (p2). Coördinaatinvoer werkt hier ook.
4. **Beweeg de cursor** naar één kant om de loodrechte verschuiving van de maatlijn in te stellen.
5. **Klik** om te plaatsen, of typ een verschuivingsafstand en druk op **Enter** voor nauwkeurige plaatsing.

## Getypte verschuivingsafstand

Typ een getal tijdens het plaatsen om de maatlijn op een exacte loodrechte afstand van de p1→p2-lijn vast te zetten:

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de verschuiving |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` / `Spatie` | Plaatsen op de getypte verschuiving |

De kant van de cursor bepaalt aan welke kant de maatlijn verschijnt.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten (p1/p2-fasen), of verschuivingsafstand (plaatsingsfase) |
| `,` | X vergrendelen en doorgaan naar Y-invoer (p1/p2-fasen) |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` / `Spatie` | Getypt coördinaat of verschuiving bevestigen |
| `Escape` | Annuleren |

## Dimension Aligned versus Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Hoek van maatlijn | Parallel aan p1→p2 — elke hoek | Altijd horizontaal of verticaal |
| Meet | Ware Euclidische afstand | Alleen X- of Y-component |
| H/V-oriëntatievergrendeling | Nee | Ja — toetsen `H` en `V` |
| Ideaal voor | Diagonale elementen, hoeksneden | Orthogonale layouts, op raster uitgelijnde onderdelen |

## Het label bewerken — simple-modus

**Dubbelklik** op een geplaatste uitgelijnde maatvoering om de tekstverwerker in **simple**-modus te openen. De editor wordt vooraf gevuld met de huidige gerenderde waarde, zodat u de cursor kunt positioneren en deze direct kunt bewerken.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Lettertype / Hoogte | Geldt meteen voor het **hele** label |
| Opmaak per teken | Niet ondersteund |
| `Enter` | Bevestigt de waarde en sluit de editor |
| Meerdere regels | Niet ondersteund |

Zie [Tekstverwerker — simple-modus](../../interface/text-editor/#simple-mode) voor de volledige referentie.

## Maatvoeringen aaneenschakelen

Om meer maatvoeringen toe te voegen die doorlopen vanaf de tweede hulplijn van deze, gebruikt u [Dimension Continue](../dim-continue/) — deze vergrendelt op dezelfde meethoek als deze uitgelijnde maatvoering.

## DXF — DIMENSION-entiteit (aligned-type)

Uitgelijnde maatvoeringen worden opgeslagen als `DIMENSION`-entiteiten met `dimType = 1` (aligned). Hulplijnoorsprongen, positie van de maatlijn, tekstpositie, gemeten waarde, rotatie, pijlstijl en alle weergavevlaggen blijven zonder verlies behouden bij de roundtrip.
