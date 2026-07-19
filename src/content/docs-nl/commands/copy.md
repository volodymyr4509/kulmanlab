---
title: Copy Command — Dupliceer Entiteiten op een Nieuwe Positie
description: Het commando Copy maakt verplaatste duplicaten van geselecteerde entiteiten en laat de originelen op hun plaats. Ondersteunt vooraf selecteren, hoekvergrendeling en exacte afstandsinvoer. De kopieën worden geplaatst en het commando sluit af; originelen blijven ongewijzigd.
keywords: [CAD copy commando, entiteiten dupliceren CAD, objecten kopiëren CAD, geometrie klonen CAD, hoekvergrendeling kopiëren, exacte afstand kopiëren, kulmanlab]
group: edit
order: 2
---

# Copy

Het commando `copy` maakt verplaatste duplicaten van geselecteerde entiteiten en plaatst deze verschoven van een basispunt naar een bestemming — de originelen blijven precies waar ze zijn. Dit is het belangrijkste verschil met [Move](../move/): Copy voegt nieuwe entiteiten toe aan de tekening; Move verplaatst bestaande entiteiten.

## Twee manieren om te starten

**Eerst selecteren, dan kopiëren** — selecteer eerst entiteiten en activeer daarna:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `copy` in de terminal of klik op de werkbalkknop **Copy**.
3. **Klik op het basispunt**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
4. **Klik op de bestemming** — duplicaten verschijnen op de verschuiving basispunt→bestemming. Coördinaatinvoer werkt hier ook.

**Eerst activeren, dan selecteren** — start het commando zonder dat er iets geselecteerd is:

1. Typ `copy` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om afzonderlijke entiteiten aan/uit te zetten, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de selectie te bevestigen.
4. **Klik op het basispunt**, klik daarna op de **bestemming** (coördinaatinvoer beschikbaar bij beide stappen).

```
  Voor:                  Na:
  [entiteit A]           [entiteit A]  ← originelen onaangetast
  [entiteit B]            [entiteit B]
                          [kopie van A] ← nieuwe entiteiten
                          [kopie van B]
```

Een ghost-preview van de kopieën volgt de cursor van het basispunt naar de bestemming.

## Coördinaatinvoer

Bij de stap voor basispunt of bestemming kunt u in plaats van klikken een exacte positie typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Hoekvergrendeling en exacte afstand

Nadat het basispunt is ingesteld, klikt het commando vast op assen van 45° (0°, 45°, 90°, 135°, …) wanneer de cursor ver genoeg weg en dicht bij de as is. Terwijl vergrendeld, typt u een afstand en drukt u op **Enter** om de kopieën op precies die verschuiving te plaatsen.

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Toevoegen aan de afstandswaarde |
| `-` | Negatieve afstand — keert de richting langs de as om (alleen als eerste teken) |
| `Backspace` | Verwijder het laatst getypte teken |
| `Enter` | Plaats kopieën op de getypte afstand |

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Bevestig selectie en ga verder naar de basispuntfase |
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer, of afstand bij hoekvergrendeling |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig coördinaat of pas kopie toe op getypte afstand |
| `Escape` | Annuleer en reset |

## Selectie tijdens het commando

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Zet de entiteit onder de cursor aan/uit in de selectie |
| **Sleep naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak vallen |
| **Sleep naar links** (kruisend) | Voegt entiteiten toe die de rand van het vak snijden |
| **Enter** / **Spatie** | Bevestigt de selectie |

## Na het kopiëren

De **originelen blijven geselecteerd** — de nieuwe kopieën worden aan de tekening toegevoegd, maar de selectie wordt gewist en het commando sluit af. Om direct met de kopieën te werken, voert u Copy opnieuw uit op de selectie, of start u een nieuw commando.

## Copy versus Move

| | Copy | Move |
|---|------|------|
| Originelen | Blijven op hun plaats | Verwijderd van de oorspronkelijke positie |
| Aantal resultaten | Neemt toe met het aantal gekopieerde entiteiten | Ongewijzigd |
| Na bewerking | Originelen nog steeds geselecteerd | Verplaatste entiteiten geselecteerd op nieuwe positie |
| Beste voor | Geometrie herhalen, symmetrische layouts | Geometrie herpositioneren |

## Ondersteunde entiteiten

Copy werkt op elk entiteittype. Alle entiteiten implementeren intern `translate(dx, dy)`, dus er wordt niets uitgesloten.
