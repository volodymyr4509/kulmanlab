---
title: LayerMatch — Entiteitlagen Aanpassen aan een Bron
description: Het LayerMatch-commando wijst de laag van een of meer doelentiteiten opnieuw toe aan de laag van een bronentiteit die u aanklikt.
keywords: [laag matchen, laag matchen CAD, laag opnieuw toewijzen kulmanlab, CAD laagbeheer]
group: layer
order: 2
---

# LayerMatch

Het `LayerMatch`-commando wijst de laag van geselecteerde entiteiten opnieuw toe aan de laag van een bronentiteit die u aanklikt. Het is de snelste manier om een groep objecten naar de juiste laag te verplaatsen zonder de Layer Manager te openen.

## Werkwijze

**Eerst selecteren, dan matchen**:

1. Selecteer de entiteiten waarvan u de laag wilt wijzigen.
2. Typ `LayerMatch` of klik op de werkbalkknop **Layer Match** (verficoon).
3. **Klik op het bronobject** — degene waarvan u de laag wilt overnemen.
4. Alle geselecteerde entiteiten verplaatsen onmiddellijk naar de laag van het bronobject.

**Eerst activeren, dan selecteren**:

1. Typ `LayerMatch` of klik op de werkbalkknop zonder dat er iets geselecteerd is.
2. **Kies doelobjecten** — klik om individuele entiteiten aan of uit te schakelen, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de selectie te bevestigen.
4. **Klik op het bronobject** — de laag ervan wordt toegepast op alle doelobjecten.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Doelselectie bevestigen en doorgaan naar de bronkeuzefase |
| `Escape` | Resetten — terug naar doelselectie of volledig annuleren |

## Gedragsdetails

- Alleen de eigenschap `layer` wordt gewijzigd — kleur, lijntype, lijndikte en geometrie blijven ongewijzigd.
- Het bronobject zelf wordt niet aangepast.
- Het commando sluit af nadat de bron is aangeklikt.
- Klikken op een leeg deel van het canvas tijdens de bronkeuzefase doet niets.
