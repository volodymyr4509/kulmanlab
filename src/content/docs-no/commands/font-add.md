---
title: FontAdd — Last opp en egendefinert TTF-skrift fra terminalen
description: FontAdd-kommandoen åpner systemets filvelger for å laste opp en .ttf-skrift, uten å først åpne Font Manager-dialogen. Det er den samme opplastingen som knappen «Add Font» i Font Manager utløser, tilgjengelig her som en egen terminalkommando.
keywords: [font add kommando, fontadd kommando, laste opp ttf terminal, egendefinert skrift CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Kommandoen `SkriftLeggTil` åpner systemets filvelger for å laste opp en egendefinert `.ttf`-skrift, uten å først åpne [Font Manager](../font-manager/)-dialogen. Det er den samme opplastingen som knappen **Add Font** i Font Manager utløser — FontAdd er bare en direkte vei dit fra terminalen.

## Laste opp en skrift

1. Skriv `SkriftLeggTil` i terminalen, eller klikk **Add Font** i bunnteksten på [Font Manager](../font-manager/)-dialogen.
2. Velg en `.ttf`-fil i systemets filvelger. Kun TrueType-skrifter støttes — `.otf` og `.woff`/`.woff2` støttes ikke.

Kommandoen avsluttes så snart filvelgeren åpnes — det følger ikke noe videre klikk eller terminalinntasting. Skriften registreres og vises i **User**-gruppen så snart filen er valgt.

## Hva som skjer ved opplasting

- Filnavnet (uten filtypen) blir skriftens navn. Å laste opp `MyFont.ttf` legger til en skrift kalt `MyFont`.
- Å laste opp en fil hvis navn matcher en eksisterende egendefinert skrift **erstatter** den.
- Skriften lagres permanent i nettleseren (IndexedDB) og lastes automatisk inn på nytt neste gang du åpner KulmanLab CAD — den er ikke knyttet til den aktive tegningen.

## Tastaturreferanse

FontAdd har ingen egen tastaturinteraksjon — hele kommandoen består av nettleserens innebygde filvelgerdialog. Å avbryte den dialogen (eller ikke velge noen fil) lar skriftlisten være uendret.

## Relaterte kommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Font Manager](../font-manager/) | Bla gjennom, forhåndsvis, velg og fjern skrifter, inkludert dine egne opplastinger |
| [Text](../text/) | Plasserer tekstetikettene som skriftvalgene gjelder for |
