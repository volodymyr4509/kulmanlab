---
title: ChangePrintArea — beskjær Print Managers eksport til et rektangel
description: Kommandoen ChangePrintArea velger to motstående hjørner på lerretet for å angi området Print Manager eksporterer. Støtter innskrevne X,Y-koordinater og snapping, og husker området separat for modellrommet og for hver layout.
keywords: [CAD utskriftsområde, beskjære CAD-eksport, change print area kommando, print manager beskjæring, CAD eksportområde, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Kommandoen `EndreUtskriftsområde` angir det rektangulære området som [Print Manager](../print-manager/) eksporterer. Den kjører på det tomme lerretet med Print Manager skjult og tar to motstående hjørner — de samme to klikkene som [Rectangle](../rectangle/), så innskrevne koordinater og snapping oppfører seg helt likt.

## Velge et område

1. Skriv `EndreUtskriftsområde` i terminalen, eller klikk **Change Area** i sidepanelet i Print Manager. Print Manager skjules og lerretet blir interaktivt.
2. **Klikk på det første hjørnet**, eller skriv `X,Y` og trykk **Enter** for en nøyaktig koordinat.
3. **Klikk på det motstående hjørnet**, eller skriv `X,Y` på nytt.

Print Manager åpnes igjen med det nye området i forhåndsvisningen, som tilpasses områdets nøyaktige sideforhold.

Hjørnene snapper til grep og skjæringspunkter som ethvert annet punktvalg, så du kan beskjære mot tegnet geometri i stedet for på øyemål. Rekkefølgen på de to hjørnene spiller ingen rolle — motstående hjørner gir samme rektangel.

Trykk `Escape` for å avbryte. Ingenting skrives, så Print Manager åpnes igjen med området den allerede hadde.

## Hvor området huskes

Valget lagres per kontekst, ikke globalt:

| Kontekst | Plass |
|---|---|
| Modellrom | Én delt plass |
| Hver layout | Sin egen plass, holdt separat |

Å åpne Print Manager igjen i samme layout — eller i modellrommet — gjenoppretter den kontekstens siste beskjæring i stedet for å nullstille den, og å bytte mellom layouter lar hver layouts område være urørt.

Dette holdes bare i minnet. Å laste siden på nytt tømmer alle lagrede områder, og Print Manager faller tilbake til standardverdiene nedenfor.

## Standardområde

Uten noe lagret for gjeldende kontekst åpner Print Manager på:

| Kontekst | Standard |
|---|---|
| Modellrom | Omsluttende rektangel for alle objekter — samme utstrekning som [Fit](../fit/) zoomer til |
| Hver layout | Hele arket |

## Relaterte kommandoer

| Kommando | Hva den gjør |
|---|---|
| [Print Manager](../print-manager/) | Eksportvinduet området gjelder for |
| [Rectangle](../rectangle/) | Samme tohjørnesvalg, men tegner en polylinje |
| [Fit](../fit/) | Zoomer til utstrekningen modellrommet bruker som standard |
