---
title: Leader+ Commando — Pijlpuntarm Toevoegen aan een Multileader
description: Het Leader+-commando voegt een nieuwe pijlpuntarm toe aan een bestaande multileader. De nieuwe arm deelt de dogleg, tekst en alle opmaak van de geselecteerde leader. Twee klikken — leader selecteren, nieuwe tip plaatsen.
keywords: [CAD leader arm toevoegen, leader+ commando, pijl toevoegen aan leader, multileader arm, kulmanlab]
group: markup
order: 2
---

# Leader+

Het `leader+`-commando voegt een nieuwe pijlpuntarm toe aan een bestaande multileader. De nieuwe arm loopt van de bestaande dogleg van de leader naar een nieuwe pijlpunt-tip die u aanklikt. Alle opmaak — dogleg-positie, tekst, pijlpunttype en grootte — wordt overgenomen van de geselecteerde leader.

## Een arm toevoegen

1. Typ `leader+` in de terminal.
2. **Klik op een bestaande multileader** om deze te selecteren.
3. **Klik de nieuwe pijlpunt-tip**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat. Een previewlijn loopt van de cursor naar de dogleg van de leader.

De arm wordt geplaatst en het commando blijft actief — u kunt direct op een andere leader klikken om meer armen toe te voegen. Druk op **Enter**, **Spatie** of **Escape** om te voltooien.

```
  Voor:                          Na:
  ◄── arm 1                      ◄── arm 1
       \                               \
        ●──── dogleg ──── tekst          ●──── dogleg ──── tekst
                                       /
                                  arm 2 ──►  (nieuwe tip die u aanklikte)
```

## Coördinaatinvoer voor de tip

In plaats van klikken kunt u een exacte positie typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal bevestigt dat X vergrendeld is.
3. Typ de Y-waarde.
4. Druk op **Enter** om te plaatsen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Begin X-coördinaat te typen |
| `,` | X vergrendelen en overgaan naar Y-invoer |
| `Enter` | Getypte coördinaat bevestigen en arm plaatsen |
| `Enter` / `Spatie` | Voltooien (wanneer er geen invoer bezig is) |
| `Escape` | Annuleren en resetten |

## Opmerkingen

- Alleen **Multileader**-entiteiten kunnen worden geselecteerd — klikken op een ander entiteitstype doet niets.
- De nieuwe arm ontstaat bij de bestaande dogleg; u kiest alleen waar de pijlpunt-tip komt.
- Er is geen limiet aan het aantal armen dat een multileader kan hebben.

## Gerelateerde commando's

| Commando | Wat het doet |
|---------|-------------|
| [Leader](../leader/) | Maak een gloednieuwe multileader vanaf nul |
| [Leader−](../leader-remove/) | Verwijder een arm van een multileader met twee of meer |
