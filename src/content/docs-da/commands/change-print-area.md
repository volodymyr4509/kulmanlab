---
title: ChangePrintArea — beskær Print Managers eksport til et rektangel
description: Kommandoen ChangePrintArea vælger to modstående hjørner på lærredet for at fastsætte det område, Print Manager eksporterer. Understøtter indtastede X,Y-koordinater og snap, og husker området separat for modelrummet og for hvert layout.
keywords: [CAD udskriftsområde, beskær CAD-eksport, change print area kommando, print manager beskæring, CAD eksportområde, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Kommandoen `SkiftUdskriftsområde` fastsætter det rektangulære område, som [Print Manager](../print-manager/) eksporterer. Den kører på det bare lærred med Print Manager skjult og tager to modstående hjørner — de samme to klik som [Rectangle](../rectangle/), så indtastede koordinater og snap opfører sig præcis som der.

## Vælge et område

1. Skriv `SkiftUdskriftsområde` i terminalen, eller klik på **Change Area** i Print Managers sidepanel. Print Manager skjules, og lærredet bliver interaktivt.
2. **Klik på det første hjørne**, eller skriv `X,Y` og tryk **Enter** for en nøjagtig koordinat.
3. **Klik på det modstående hjørne**, eller skriv `X,Y` igen.

Print Manager åbner igen med det nye område i forhåndsvisningen, der tilpasses områdets nøjagtige billedformat.

Hjørnerne snapper til greb og skæringspunkter som ethvert andet punktvalg, så du kan beskære efter tegnet geometri i stedet for på øjemål. Rækkefølgen af de to hjørner er ligegyldig — modstående hjørner giver samme rektangel.

Tryk `Escape` for at annullere. Der skrives intet, så Print Manager åbner igen med det område, den allerede havde.

## Hvor området huskes

Valget gemmes pr. kontekst, ikke globalt:

| Kontekst | Plads |
|---|---|
| Modelrum | Én fælles plads |
| Hvert layout | Sin egen plads, holdt adskilt |

At åbne Print Manager igen i samme layout — eller i modelrummet — genskaber den konteksts seneste beskæring i stedet for at nulstille den, og at skifte mellem layouts lader hvert layouts område være urørt.

Dette holdes kun i hukommelsen. Genindlæsning af siden rydder alle gemte områder, og Print Manager falder tilbage til standardværdierne nedenfor.

## Standardområde

Uden noget gemt for den aktuelle kontekst åbner Print Manager på:

| Kontekst | Standard |
|---|---|
| Modelrum | Den omsluttende kasse om alle objekter — samme udstrækning som [Fit](../fit/) zoomer til |
| Hvert layout | Hele arket |

## Relaterede kommandoer

| Kommando | Hvad den gør |
|---|---|
| [Print Manager](../print-manager/) | Eksportvinduet, området gælder for |
| [Rectangle](../rectangle/) | Samme tohjørnevalg, men tegner en polylinje |
| [Fit](../fit/) | Zoomer til den udstrækning, modelrummet bruger som standard |
