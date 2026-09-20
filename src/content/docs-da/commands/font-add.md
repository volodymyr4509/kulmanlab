---
title: FontAdd — Upload en brugerdefineret TTF-skrifttype fra terminalen
description: FontAdd-kommandoen åbner systemets filvælger til at uploade en .ttf-skrifttype, uden først at åbne dialogen Font Manager. Det er den samme upload, som knappen "Add Font" i Font Manager udløser, her tilgængelig som sin egen terminalkommando.
keywords: [font add kommando, fontadd kommando, upload ttf terminal, brugerdefineret skrifttype CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Kommandoen `SkrifttypeTilføj` åbner systemets filvælger til at uploade en brugerdefineret `.ttf`-skrifttype, uden først at åbne dialogen [Font Manager](../font-manager/). Det er den samme upload, som knappen **Add Font** i Font Manager udløser — FontAdd er bare en direkte vej dertil fra terminalen.

## Uploade en skrifttype

1. Skriv `SkrifttypeTilføj` i terminalen, eller klik **Add Font** i bunden af dialogen [Font Manager](../font-manager/).
2. Vælg en `.ttf`-fil i systemets filvælger. Kun TrueType-skrifttyper understøttes — `.otf` og `.woff`/`.woff2` understøttes ikke.

Kommandoen afsluttes, så snart filvælgeren åbner — der følger ikke yderligere klik eller terminalinput. Skrifttypen registreres og vises i **User**-gruppen, så snart filen er valgt.

## Hvad der sker ved upload

- Filnavnet (uden filtypen) bliver skrifttypens navn. At uploade `MyFont.ttf` tilføjer en skrifttype ved navn `MyFont`.
- At uploade en fil, hvis navn matcher en eksisterende brugerdefineret skrifttype, **erstatter** den.
- Skrifttypen gemmes permanent i browseren (IndexedDB) og indlæses automatisk igen næste gang du åbner KulmanLab CAD — den er ikke knyttet til den aktuelle tegning.

## Tastaturreference

FontAdd har ingen egen tastaturinteraktion — hele kommandoen består af browserens indbyggede filvælgerdialog. At annullere den dialog (eller ikke vælge nogen fil) efterlader skrifttypelisten uændret.

## Relaterede kommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Font Manager](../font-manager/) | Gennemse, forhåndsvis, vælg og fjern skrifttyper, inklusive dine egne uploads |
| [Text](../text/) | Placerer tekstetiketterne som skrifttypevalgene gælder for |
