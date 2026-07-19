---
title: "Leader− Commando — Verwijder een Pijlarm van een Multileader"
description: "Het Leader−-commando verwijdert één pijlarm van een multileader die er twee of meer heeft. Beweeg de cursor naar de te verwijderen arm — de dichtstbijzijnde arm wordt gemarkeerd. De knik, tekst en overige armen blijven behouden."
keywords: [CAD leader arm verwijderen, leader- commando, pijl verwijderen van leader, multileader arm verwijderen, kulmanlab]
group: markup
order: 3
---

# Leader−

Het `leader-`-commando verwijdert één pijlarm van een bestaande multileader. Het tekstlabel, de knik en alle overige armen blijven behouden — alleen de geselecteerde arm wordt verwijderd. Van een multileader met slechts één arm kan de arm niet worden verwijderd.

## Een arm verwijderen

1. Typ `leader-` in de terminal.
2. **Klik op een multileader** die twee of meer armen heeft. Als de aangeklikte leader slechts één arm heeft, toont de terminal een foutmelding en wacht op een geldige selectie.
3. **Beweeg de cursor naar de arm** die u wilt verwijderen — de dichtstbijzijnde arm wordt gemarkeerd met een marker.
4. **Klik** om die arm te verwijderen.

De arm wordt verwijderd en het commando blijft actief — u kunt direct op een andere leader (of dezelfde) klikken om meer armen te verwijderen. Druk op **Enter**, **Spatie** of **Escape** om te voltooien.

```
  Voor:                     Na:
  ◄── arm 1                 ◄── arm 1
       \                          \
        ●──── knik ──── tekst     ●──── knik ──── tekst
       /
  arm 2 ──►  ← deze arm verwijderd
```

## Hoe de dichtstbijzijnde arm wordt bepaald

Het commando meet de loodrechte afstand van de cursor tot de lijnsegmenten van elke arm (inclusief het segment van het laatste armpunt naar de knik). De arm met de kleinste afstand wordt gemarkeerd en wordt bij een klik verwijderd.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Verwijderen van armen voltooien |
| `Escape` | Annuleren en resetten |

## Opmerkingen

- Een leader met **slechts één arm** is beschermd — u moet eerst een arm toevoegen voordat u er een kunt verwijderen.
- De positie van de knik en de tekstinhoud blijven altijd behouden, ongeacht welke arm wordt verwijderd.

## Gerelateerde commando's

| Commando | Wat het doet |
|---------|-------------|
| [Leader](../leader/) | Maak een nieuwe multileader vanaf nul |
| [Leader+](../leader-add/) | Voeg een arm toe aan een bestaande multileader |
