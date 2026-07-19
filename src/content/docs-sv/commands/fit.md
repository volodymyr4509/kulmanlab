---
title: "Fit-kommandot — Rama in alla entiteter i vyporten med ett klick"
description: "Fit-kommandot beräknar avgränsningsrutan för alla entiteter och justerar zoom och panorering så att alla entiteter blir synliga med en liten marginal. Dubbelklick med mittenmusknappen utlöser Fit utan att aktivera kommandot."
keywords: [CAD anpassa vy, zooma till anpassa, rama in alla entiteter, fit-kommando CAD, avgränsningsruta zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

`fit`-kommandot beräknar avgränsningsrutan för alla entiteter i ritningen och justerar både zoomnivå och panoreringsposition så att alla entiteter blir synliga med en liten marginal. Det är det snabbaste sättet att återfå en förlorad vy eller orientera dig efter att ha importerat en DXF-fil.

## Anpassa vyn

Klicka på **Fit**-knappen i verktygsfältet eller skriv `fit` i terminalen. Vyn justeras omedelbart och kommandot avslutas — ingen interaktion krävs.

**Dubbelklick med mittenmusknappen** utlöser samma Fit-operation när som helst utan att aktivera något kommando — den snabbaste genvägen för att återställa en förlorad vy mitt i ritandet.

## Så fungerar anpassningen av avgränsningsrutan

1. Fit hittar den axelparallella avgränsningsrutan som omsluter alla entiteter (min X, max X, min Y, max Y).
2. Zoomnivån sätts så att den högre eller bredare dimensionen fyller ritytan med en marginal.
3. Vyn centreras på avgränsningsrutans mittpunkt.

| Ritningens tillstånd | Resultat |
|--------------|--------|
| Bredare än hög | Zoom begränsas av bredden |
| Högre än bred | Zoom begränsas av höjden |
| En enda entitet | Anpassar sig runt just den entiteten |
| Tom ritning | Vyn ändras inte |

## Fit jämfört med manuell zoomkontroll

| | Fit | Zoom In / Zoom Out | Scrollhjul |
|---|-----|--------------------|-------------|
| Centreras på | Alla entiteter | Vyportens mittpunkt | Markören |
| Stegstorlek | Automatisk (ett skott) | 1,5× per steg | ~1,1× per klick |
| Bäst för | Återfå förlorad vy, orientering efter import | Steg in/ut från centrum | Precis markörriktad zoom |

## Snabbreferens tangentbord

Det finns ingen tangentbordsgenväg för det här kommandot. Använd genvägen **dubbelklick med mittenmusknappen** istället.

## Relaterade vykommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Pan](../pan/) | Förskjuter vyporten utan att zooma |
| [Zoom In](../zoom-in/) | Multiplicerar zoomen med 1,5× per steg |
| [Zoom Out](../zoom-out/) | Dividerar zoomen med 1,5× per steg |
