---
title: "Zoom Out-kommando — Reduser Viewportens Zoom med 1,5× per Steg"
description: "Zoom Out-kommandoen dividerer gjeldende zoomnivå med 1,5× og avslutter umiddelbart. Sentrert på viewportens midtpunkt. Bruk rullehjulet for å zoome ut mot markøren for finere kontroll."
keywords: [CAD zoom ut, reduser viewport-zoom, zoom ut-kommando, oversikt CAD, 1.5x zoom-steg, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Kommandoen `zoomout` dividerer gjeldende zoomnivå med **1,5×** (tilsvarer å multiplisere med ~0,667) og avslutter umiddelbart, sentrert på viewportens midtpunkt. Det er det motsatte av [Zoom In](../zoom-in/).

## Zoome ut

Klikk på **Zoom Out**-knappen i verktøylinjen eller skriv `zoomout` i terminalen. Zoomen brukes umiddelbart, og kommandoen avsluttes — ikke noe klikk på lerretet nødvendig.

## Hvordan 1,5×-steget fungerer

| Gjeldende zoom | Etter én Zoom Out |
|-------------|-------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (gulv) |

Zoomnivået vises alltid i **nedre høyre hjørne** av lerretet. Den nedre grensen er **0,01×**; ytterligere steg gjør ingenting.

## Verktøylinje-zoom-ut vs rullehjul

| | Zoom Out-knapp | Rullehjul |
|---|----------------|-------------|
| Zoom-senter | Viewportens midtpunkt | Markørposisjon |
| Trinnstørrelse | 1,5× per klikk | ~1,1× per hakk |
| Krever aktivering | Nei | Nei — fungerer alltid |
| Best til | Å gå tilbake for å se mer kontekst | Jevn, markørforankret zoom-ut |

## Tastaturreferanse

Det finnes ingen tastatursnarveier for denne kommandoen. Bruk rullehjulet i stedet — det fungerer når som helst uten å aktivere noen kommando.

## Relaterte visningskommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Zoom In](../zoom-in/) | Multipliserer zoom med 1,5× per steg |
| [Fit](../fit/) | Tilbakestiller zoom for å vise alle entiteter |
| [Pan](../pan/) | Forskyver viewporten uten å zoome |
