---
title: Angle — Meet de Binnenhoek bij een Hoekpunt met Drie Punten
description: Het commando Angle meet de binnenhoek (0°–180°) bij een hoekpunt bepaald door drie geklikte punten. Klik eerste-uiteinde, hoekpunt, tweede-uiteinde. Resultaat weergegeven in de terminal met 4 decimalen.
keywords: [CAD hoekmeting, drie punts hoek, binnenhoek CAD, hoek meten commando, hoekpunt hoek, kulmanlab]
group: measure
order: 2
---

# Angle

Het commando `angle` meet de binnenhoek bij een hoekpunt gevormd door twee lijnsegmenten via drie geklikte punten. Het resultaat — altijd tussen 0° en 180° — wordt in de terminal weergegeven met 4 decimalen. Het is een van de drie meetcommando's — [Distance](../distance/) meet de lengte van een rechte lijn, en [Area](../area/) meet de omsloten oppervlakte en omtrek van een polygoon.

## Anatomie van een hoekmeting

```
  ● eerste punt (uiteinde van eerste straal)
   \
    \  preview van eerste straal
     \
      ● hoekpunt (stap 3)
     /
    /  preview van tweede straal (naar cursor)
   /
  ● derde punt  →  terminal: "Angle: 45.0000°"
```

- **Eerste punt** — een uiteinde van de hoek (stap 2).
- **Hoekpunt** — de hoek waarbij de hoek wordt gemeten (stap 3).
- **Derde punt** — het andere uiteinde van de hoek (stap 4).

## Een hoek meten

1. Typ `angle` in de terminal of klik op de werkbalkknop **Angle**.
2. **Klik op het eerste punt** — een armuiteinde van de hoek. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik op het hoekpunt** — de hoek waar de twee armen samenkomen. Coördinaatinvoer werkt hier ook.
4. **Klik op het derde punt** — het tweede armuiteinde. Coördinaatinvoer werkt hier ook. Het plaatsen van dit punt drukt het resultaat af.
5. **Klik opnieuw** (optioneel) om een nieuwe meting te starten vanaf die klik als nieuw eerste punt.

## Conventie voor de binnenhoek

Het commando berekent de hoek met het inproduct van de twee stralen vanaf het hoekpunt:

- **Altijd intern**: het resultaat is de kleinste hoek, tussen 0° en 180°.
- De volgorde waarin u de uiteinden klikt, heeft geen invloed op het resultaat — alleen de positie van het hoekpunt is van belang.
- Collineaire punten (alle drie op één lijn) leveren 0° of 180° op.

## Metingen aan elkaar koppelen

Nadat het resultaat verschijnt, start klikken direct de volgende meting — het geklikte punt wordt het nieuwe eerste punt. Het commando sluit nooit automatisch af totdat u op `Escape` drukt.

## Angle versus Distance

| | Angle | Distance |
|---|-------|---------|
| Wat het meet | Binnenhoek bij een hoekpunt | Lengte van een rechte lijn |
| Aantal klikken | 3 | 2 |
| Resultaatformaat | `45.0000°` | `12.3456` (eenheden) |
| Canvaspreview | Twee lijnen van hoekpunt naar beide uiteinden | Lijn van eerste punt naar cursor |
| Beste voor | Openingshoek tussen twee elementen | Lengte van een opening of segment |

## Coördinaatinvoer

In plaats van klikken kunt u een exacte positie typen voor elk van de drie punten:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig getypte coördinaat |
| `Escape` | Annuleer en reset naar stap 2 |

## Opmerkingen

- Resultaten worden alleen weergegeven in de **terminal** — er wordt niets aan de tekening toegevoegd.
- De precisie is altijd 4 decimalen in graden.
