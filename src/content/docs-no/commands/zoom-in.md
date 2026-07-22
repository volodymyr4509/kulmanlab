---
title: "Zoom In-kommando — Forstørr Viewporten med 1,5× per Steg"
description: "Zoom In-kommandoen multipliserer gjeldende zoomnivå med 1,5× og avslutter umiddelbart. Sentrert på viewportens midtpunkt. Zoomområde 0,01–10 000. Bruk rullehjulet for å zoome mot markøren i stedet."
keywords: [CAD zoom inn, forstørr viewport, zoom-kommando CAD, 1.5x zoom-steg, kulmanlab]
group: navigate
order: 2
---

# Zoom In

Kommandoen `zoomin` multipliserer gjeldende zoomnivå med **1,5×** og avslutter umiddelbart, sentrert på viewportens midtpunkt. Det er verktøylinje-motstykket til ett rullehjulhakk zoomet mot skjermens senter i stedet for markøren.

## Zoome inn

Klikk på **Zoom In**-knappen i verktøylinjen eller skriv `zoomin` i terminalen. Zoomen brukes umiddelbart, og kommandoen avsluttes — ikke noe klikk på lerretet nødvendig.

## Hvordan 1,5×-steget fungerer

| Gjeldende zoom | Etter én Zoom In |
|-------------|------------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6 667× | 10 000× (tak) |

Zoomnivået vises alltid i **nedre høyre hjørne** av lerretet ved siden av `zoom`-etiketten. Den øvre grensen er **10 000×**; ytterligere steg gjør ingenting.

## Verktøylinje-zoom-inn vs rullehjul

| | Zoom In-knapp | Rullehjul |
|---|--------------|-------------|
| Zoom-senter | Viewportens midtpunkt | Markørposisjon |
| Trinnstørrelse | 1,5× per klikk | ~1,1× per hakk |
| Krever aktivering | Nei | Nei — fungerer alltid |
| Best til | Grov navigasjon | Presis, markørstyrt zoom |

## Tastaturreferanse

Det finnes ingen tastatursnarveier for denne kommandoen. Bruk rullehjulet i stedet — det fungerer når som helst uten å aktivere noen kommando.

## Relaterte visningskommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Dividerer zoom med 1,5× per steg |
| [Fit](../fit/) | Tilbakestiller zoom for å vise alle entiteter |
| [Pan](../pan/) | Forskyver viewporten uten å zoome |
