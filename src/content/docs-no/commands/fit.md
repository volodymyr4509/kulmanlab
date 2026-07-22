---
title: Fit-kommando — Ramm Inn Alle Entiteter i Viewporten med Ett Klikk
description: Fit-kommandoen beregner avgrensningsboksen for alle entiteter og justerer zoom og panorering slik at hver entitet er synlig med en liten margin. Dobbeltklikk på midtre museknapp utløser Fit uten å aktivere kommandoen.
keywords: [CAD tilpass visning, zoom til å passe, ramm inn alle entiteter, fit-kommando CAD, avgrensningsboks zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

Kommandoen `fit` beregner avgrensningsboksen for alle entiteter i tegningen og justerer både zoomnivå og panoreringsposisjon slik at hver entitet er synlig med en liten margin. Det er den raskeste måten å gjenopprette en tapt visning på, eller orientere deg etter å ha importert en DXF-fil.

## Tilpasse visningen

Klikk på **Fit**-knappen i verktøylinjen eller skriv `fit` i terminalen. Visningen justeres umiddelbart og kommandoen avsluttes — ingen interaksjon nødvendig.

**Dobbeltklikk på midtre museknapp** utløser den samme Fit-operasjonen når som helst uten å aktivere noen kommando — den raskeste snarveien for å tilbakestille en tapt visning midt i tegningen.

## Hvordan tilpasningen til avgrensningsboksen fungerer

1. Fit finner den akse-justerte avgrensningsboksen som omslutter alle entiteter (min X, maks X, min Y, maks Y).
2. Zoomnivået settes slik at den høyeste eller bredeste dimensjonen fyller lerretet med en margin.
3. Visningen sentreres på avgrensningsboksens midtpunkt.

| Tegningstilstand | Resultat |
|--------------|--------|
| Bredere enn høy | Zoom begrenset av bredden |
| Høyere enn bred | Zoom begrenset av høyden |
| Én enkelt entitet | Tilpasses rundt bare den entiteten |
| Tom tegning | Visningen endres ikke |

## Fit vs manuelle zoom-kontroller

| | Fit | Zoom In / Zoom Out | Rullehjul |
|---|-----|--------------------|-------------|
| Sentrerer på | Alle entiteter | Viewportens midtpunkt | Markøren |
| Trinnstørrelse | Automatisk (ett skudd) | 1,5× per trinn | ~1,1× per hakk |
| Best til | Gjenopprette tapt visning, orientering etter import | Steg inn/ut fra senteret | Presis markørstyrt zoom |

## Tastaturreferanse

Det finnes ingen tastatursnarvei for denne kommandoen. Bruk snarveien **dobbeltklikk på midtre museknapp** i stedet.

## Relaterte visningskommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Pan](../pan/) | Forskyver viewporten uten å zoome |
| [Zoom In](../zoom-in/) | Multipliserer zoom med 1,5× per steg |
| [Zoom Out](../zoom-out/) | Dividerer zoom med 1,5× per steg |
