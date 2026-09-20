---
title: HatchAdd-kommandot — ladda upp en .pat-skrafferingsfil från terminalen
description: HatchAdd öppnar filväljaren för att ladda upp en .pat-mönsterfil utan att först öppna Hatch Manager. Alla mönster som filen definierar läggs till på en gång.
keywords: [hatch add kommando, hatchadd kommando, ladda upp pat fil terminal, eget skrafferingsmönster CAD, acad.pat, mönsterbibliotek, kulmanlab]
group: style
order: 5
---

# HatchAdd

Kommandot `LäggTillSkraffering` öppnar systemets filväljare för att ladda upp en `.pat`-skrafferingsfil, utan att först öppna dialogen [Hatch Manager](../hatch-manager/). Det är samma uppladdning som knappen **Add .pat File** i Hatch Manager utlöser — HatchAdd är bara en direkt väg dit från terminalen.

## Ladda upp en mönsterfil

1. Skriv `LäggTillSkraffering` i terminalen, eller klicka på **Add .pat File** längst ned i dialogen [Hatch Manager](../hatch-manager/).
2. Välj en `.pat`-fil i systemväljaren. Endast standardformatet för skrafferingsmönster godtas.

Kommandot avslutas så snart filväljaren öppnas — ingen ytterligare fråga, klick eller terminalinmatning följer. Mönstren registreras och dyker upp i gruppen **User** så snart filen har valts.

## Vad som händer vid uppladdning

- **En `.pat`-fil är en behållare, inte ett enda mönster.** En fil definierar vanligtvis många namngivna mönster, och alla läggs till tillsammans. Det är här HatchAdd skiljer sig från [FontAdd](../font-add/), där en `.ttf` är ett typsnitt.
- **Själva filen sparas inte.** Den läses en gång, delas upp i sina mönster, och varje mönster sparas för sig under sitt eget namn. Därför kan du ta bort ett mönster senare utan att röra dem som kom med det — och därför listar gruppen **User** dem i bokstavsordning efter namn i stället för efter vilken fil de kom från.
- **Ett mönster vars namn stämmer med ett befintligt ersätter det.** Det är det avsedda sättet att lägga auktoritativa definitioner ovanpå KulmanLabs egna approximationer: ladda upp en riktig `acad.pat`, så tar dess versioner av `ANSI31` och de övriga standardnamnen över.
- **Mönster sparas per användare, inte per ritning.** De lever i webbläsaren (IndexedDB), laddas om automatiskt nästa gång du öppnar KulmanLab CAD, och är tillgängliga i varje ritning.
- **En fil utan giltiga mönsterdefinitioner lägger inte till något.** Biblioteket står precis som det stod.

## Tangentbordsreferens

HatchAdd har ingen egen tangentbordsinteraktion — hela kommandot är webbläsarens inbyggda filväljardialog. Avbryts den dialogen (eller väljs ingen fil) lämnas mönsterbiblioteket oförändrat.

## Relaterade kommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Bläddra i mönsterbiblioteket med levande förhandsvisning och ta bort uppladdade mönster |
| [Hatch](../hatch/) | Fyller ett slutet område med ett mönster ur biblioteket |
| [FontAdd](../font-add/) | Samma direktuppladdningsgenväg för `.ttf`-typsnitt |
