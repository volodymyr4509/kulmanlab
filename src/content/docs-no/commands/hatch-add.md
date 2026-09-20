---
title: HatchAdd-kommandoen — last opp en .pat-skraveringsfil fra terminalen
description: HatchAdd åpner filvelgeren for å laste opp en .pat-mønsterfil uten å åpne Hatch Manager først. Alle mønstrene filen definerer legges til på én gang.
keywords: [hatch add kommando, hatchadd kommando, laste opp pat fil terminal, egendefinert skraveringsmønster CAD, acad.pat, mønsterbibliotek, kulmanlab]
group: style
order: 5
---

# HatchAdd

Kommandoen `SkraveringLeggTil` åpner systemets filvelger for å laste opp en `.pat`-skraveringsfil, uten å åpne dialogen [Hatch Manager](../hatch-manager/) først. Det er den samme opplastingen som knappen **Add .pat File** i Hatch Manager utløser — HatchAdd er bare en direkte vei dit fra terminalen.

## Laste opp en mønsterfil

1. Skriv `SkraveringLeggTil` i terminalen, eller klikk **Add .pat File** nederst i dialogen [Hatch Manager](../hatch-manager/).
2. Velg en `.pat`-fil i systemvelgeren. Bare standardformatet for skraveringsmønstre godtas.

Kommandoen avsluttes så snart filvelgeren åpnes — det følger ingen flere spørsmål, klikk eller terminalinnskrivinger. Mønstrene registreres og dukker opp i gruppen **User** så snart filen er valgt.

## Hva som skjer ved opplasting

- **En `.pat`-fil er en beholder, ikke ett mønster.** Én fil definerer gjerne mange navngitte mønstre, og alle legges til sammen. Her skiller HatchAdd seg fra [FontAdd](../font-add/), der én `.ttf` er én skrift.
- **Selve filen tas ikke vare på.** Den leses én gang, deles opp i mønstrene sine, og hvert mønster lagres for seg under sitt eget navn. Derfor kan du fjerne ett mønster senere uten å røre dem som kom sammen med det — og derfor lister gruppen **User** dem alfabetisk etter navn i stedet for etter hvilken fil de kom fra.
- **Et mønster med samme navn som et eksisterende erstatter det.** Dette er den støttede måten å legge autoritative definisjoner over KulmanLabs egne tilnærminger på: last opp en ekte `acad.pat`, så overtar dens utgaver av `ANSI31` og de andre standardnavnene.
- **Mønstre lagres per bruker, ikke per tegning.** De ligger i nettleseren (IndexedDB), lastes inn automatisk neste gang du åpner KulmanLab CAD, og er tilgjengelige i alle tegninger.
- **En fil uten gyldige mønsterdefinisjoner legger ikke til noe.** Biblioteket står nøyaktig som det stod.

## Tastaturreferanse

HatchAdd har ingen egen tastaturinteraksjon — hele kommandoen er nettleserens innebygde filvelgerdialog. Avbryter du den dialogen (eller velger ingen fil), forblir mønsterbiblioteket uendret.

## Relaterte kommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Bla i mønsterbiblioteket med levende forhåndsvisning, og fjerne opplastede mønstre |
| [Hatch](../hatch/) | Fyller et lukket område med et mønster fra biblioteket |
| [FontAdd](../font-add/) | Den samme direkte opplastingssnarveien for `.ttf`-skrifter |
