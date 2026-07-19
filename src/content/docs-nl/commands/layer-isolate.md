---
title: LayerIsolate — Bevries Alle Lagen Behalve Geselecteerde
description: Het LayerIsolate-commando bevriest elke laag behalve die van de geselecteerde objecten, zodat u zich kunt focussen op specifieke geometrie zonder iets te verwijderen.
keywords: [laag isoleren, lagen bevriezen CAD, laag isoleren kulmanlab, CAD laagbeheer]
group: layer
order: 3
---

# LayerIsolate

Het `LayerIsolate`-commando bevriest elke laag **behalve** die van de geselecteerde objecten. Gebruik het om snel te focussen op specifieke geometrie zonder iets permanent te verbergen of verwijderen — ontdooi met [LayerUnfreezeAll](../layer-unfreeze-all/) wanneer u klaar bent.

## Twee manieren om te starten

**Eerst selecteren, dan isoleren** — selecteer eerst entiteiten en activeer dan:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `LayerIsolate` in de terminal of klik op de werkbalkknop **Layer Isolate**.
3. De lagen van de geselecteerde entiteiten blijven zichtbaar; alle andere worden onmiddellijk bevroren.

**Eerst activeren, dan selecteren**:

1. Typ `LayerIsolate` of klik op de werkbalkknop.
2. **Kies objecten** — klik op individuele entiteiten of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om te bevestigen — isolatie wordt toegepast.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Selectie bevestigen en isolatie toepassen |
| `Escape` | Annuleren en selectie wissen |

## Gedragsdetails

- Alle lagen die **niet** in de selectie voorkomen, worden bevroren.
- Lagen die **wel** in de selectie voorkomen, blijven ontdooid, zelfs als ze eerder bevroren waren.
- De selectie wordt gewist nadat isolatie is toegepast.
- Het commando sluit automatisch af na toepassing.

## Isolatie ongedaan maken

Voer [LayerUnfreezeAll](../layer-unfreeze-all/) uit om alle lagen in één stap weer zichtbaar te maken.
