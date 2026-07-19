---
title: Distance — Rechte-lijnafstand Meten Tussen Twee Punten
description: Het Distance-commando meet de Euclidische afstand tussen twee aangeklikte punten en toont het resultaat tot 4 decimalen. Klik na het resultaat opnieuw om een nieuwe meting vanaf het laatste punt aan te schakelen.
keywords: [CAD afstand meten, distance commando, punt-tot-punt meting, rechte-lijnafstand, kulmanlab CAD meting]
group: measure
order: 1
---

# Distance

Het `distance`-commando meet de rechte-lijn- (Euclidische) afstand tussen twee aangeklikte punten en toont het resultaat in de terminal tot 4 decimalen. Het is een van drie meetcommando's — [Angle](../angle/) meet de hoekopening bij een hoekpunt, en [Area](../area/) meet de omsloten oppervlakte en omtrek van een veelhoek.

## Anatomie van een afstandsmeting

```
  ● eerste punt
   \
    \  previewlijn (live)
     \
      ● tweede punt    →  terminal: "Distance: 12.3456"
```

- **Eerste punt** — oorsprong van de meting.
- **Tweede punt** — eindpunt; het plaatsen ervan toont het resultaat direct.
- **Resultaat** — weergegeven in de terminal, niet op het canvas geplaatst.

## Een afstand meten

1. Typ `distance` in de terminal of klik op de **Distance**-werkbalkknop.
2. **Klik op het eerste punt**, of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
3. **Klik op het tweede punt** — de gemeten afstand verschijnt in de terminal. Coördinaatinvoer werkt hier ook.
4. **Klik opnieuw** (optioneel) om een nieuwe meting te starten. Het commando blijft actief.

Druk op elk moment op `Escape` om terug te gaan naar stap 2.

## Metingen aaneenschakelen

Nadat het resultaat is getoond, start klikken direct de volgende meting — het aangeklikte punt wordt het nieuwe eerste punt. Zo kunt u een reeks afstanden meten zonder het commando opnieuw te activeren.

## Distance versus Angle

| | Distance | Angle |
|---|---------|-------|
| Wat het meet | Rechte-lijnlengte | Binnenhoek bij een hoekpunt |
| Aantal klikken | 2 | 3 |
| Resultaatformaat | `12.3456` (eenheden) | `45.0000°` |
| Canvaspreview | Lijn van eerste punt naar cursor | Twee lijnen van hoekpunt naar cursor |
| Ideaal voor | Lengte van een opening of segment | Openingshoek tussen twee elementen |

## Coördinaatinvoer

In plaats van te klikken, kunt u een exacte positie voor beide punten typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten |
| `,` | X vergrendelen en doorgaan naar Y-invoer |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypt coördinaat bevestigen |
| `Escape` | Annuleren en terug naar stap 2 |

## Opmerkingen

- Resultaten worden **alleen in de terminal** getoond — er wordt niets aan de tekening toegevoegd.
- Het resultaat wordt uitgedrukt in dezelfde eenheden als de tekencoördinaten (geen eenheidsconversie).
- De precisie is altijd 4 decimalen.
