---
title: "Zoom Out-kommando — Reducér Viewportens Zoom med 1.5× pr. Trin"
description: "Zoom Out-kommandoen dividerer det aktuelle zoomniveau med 1.5× og afslutter med det samme. Centreret på viewportens midtpunkt. Brug rullehjulet for at zoome ud mod markøren for finere kontrol."
keywords: [CAD zoom ud, reducér viewport-zoom, zoom ud-kommando, oversigt CAD, 1.5x zoom-trin, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Kommandoen `zoomout` dividerer det aktuelle zoomniveau med **1,5×** (svarer til at multiplicere med ~0,667) og afslutter med det samme, centreret på viewportens midtpunkt. Det er det omvendte af [Zoom In](../zoom-in/).

## Zoome ud

Klik på **Zoom Out**-knappen i værktøjslinjen eller skriv `zoomout` i terminalen. Zoomen anvendes øjeblikkeligt, og kommandoen afsluttes — intet klik på lærredet nødvendigt.

## Hvordan 1,5×-trinnet fungerer

| Aktuel zoom | Efter én Zoom Out |
|-------------|-------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (gulv) |

Zoomniveauet vises altid i **nederste højre hjørne** af lærredet. Den nedre grænse er **0,01×**; yderligere trin gør ingenting.

## Værktøjslinje-zoom-ud vs rullehjul

| | Zoom Out-knap | Rullehjul |
|---|----------------|-------------|
| Zoom-centrum | Viewportens midtpunkt | Markørposition |
| Trinstørrelse | 1,5× pr. klik | ~1,1× pr. hak |
| Kræver aktivering | Nej | Nej — fungerer altid |
| Bedst til | At træde tilbage for at se mere kontekst | Jævn, markørforankret zoom-ud |

## Tastaturreference

Der er ingen tastaturgenveje til denne kommando. Brug rullehjulet i stedet — det fungerer når som helst uden at aktivere nogen kommando.

## Relaterede visningskommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Zoom In](../zoom-in/) | Multiplicerer zoom med 1,5× pr. trin |
| [Fit](../fit/) | Nulstiller zoom for at vise alle entiteter |
| [Pan](../pan/) | Forskyder viewporten uden at zoome |
