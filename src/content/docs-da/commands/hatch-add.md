---
title: HatchAdd-kommandoen — upload en .pat-skraveringsfil fra terminalen
description: HatchAdd åbner filvælgeren til upload af en .pat-mønsterfil uden først at åbne Hatch Manager. Alle mønstre, filen definerer, tilføjes på én gang.
keywords: [hatch add kommando, hatchadd kommando, upload pat fil terminal, brugerdefineret skraveringsmønster CAD, acad.pat, skraveringsbibliotek, kulmanlab]
group: style
order: 5
---

# HatchAdd

Kommandoen `HatchAdd` åbner systemets filvælger til upload af en `.pat`-skraveringsfil, uden først at åbne dialogen [Hatch Manager](../hatch-manager/). Det er den samme upload, som knappen **Add .pat File** i Hatch Manager udløser — HatchAdd er blot en direkte vej dertil fra terminalen.

## Upload en mønsterfil

1. Skriv `HatchAdd` i terminalen, eller klik **Add .pat File** i bunden af dialogen [Hatch Manager](../hatch-manager/).
2. Vælg en `.pat`-fil i systemvælgeren. Kun standardformatet for skraveringsmønstre accepteres.

Kommandoen slutter, så snart filvælgeren åbner — der følger ingen yderligere prompt, klik eller terminalinput. Mønstrene registreres og vises i gruppen **User**, så snart filen er valgt.

## Hvad der sker ved upload

- **En `.pat`-fil er en beholder, ikke ét mønster.** Én fil definerer typisk mange navngivne mønstre, og de tilføjes alle sammen. Det er her, HatchAdd adskiller sig fra [FontAdd](../font-add/), hvor én `.ttf` er én skrifttype.
- **Selve filen gemmes ikke.** Den læses én gang, deles op i sine mønstre, og hvert mønster gemmes for sig under sit eget navn. Derfor kan du fjerne ét mønster senere uden at forstyrre dem, der kom med det — og derfor viser gruppen **User** mønstre alfabetisk efter navn frem for efter hvilken fil de kom fra.
- **Et mønster med samme navn som et eksisterende erstatter det.** Det er den understøttede måde at lægge autoritative definitioner oven på KulmanLabs egne tilnærmelser: upload en rigtig `acad.pat`, og dens udgaver af `ANSI31` og de øvrige standardnavne overtager.
- **Mønstre gemmes pr. bruger, ikke pr. tegning.** De lever i browseren (IndexedDB), genindlæses automatisk næste gang du åbner KulmanLab CAD, og er tilgængelige i enhver tegning.
- **En fil uden gyldige mønsterdefinitioner tilføjer intet.** Biblioteket står nøjagtig, som det stod.

## Tastaturreference

HatchAdd har ingen tastaturinteraktion af sig selv — hele kommandoen er browserens native filvælgerdialog. Afbrydes den dialog (eller vælges ingen fil), forbliver mønsterbiblioteket uændret.

## Relaterede kommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Gennemse mønsterbiblioteket med live-forhåndsvisning, og fjern uploadede mønstre |
| [Hatch](../hatch/) | Fylder et lukket område med et mønster fra biblioteket |
| [FontAdd](../font-add/) | Den samme direkte upload-genvej til `.ttf`-skrifttyper |
