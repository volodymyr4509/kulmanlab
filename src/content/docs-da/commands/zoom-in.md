---
title: "Zoom In-kommando — Forstør Viewporten med 1.5× pr. Trin"
description: "Zoom In-kommandoen multiplicerer det aktuelle zoomniveau med 1.5× og afslutter med det samme. Centreret på viewportens midtpunkt. Zoomområde 0.01–10.000. Brug rullehjulet for at zoome mod markøren i stedet."
keywords: [CAD zoom ind, forstør viewport, zoom-kommando CAD, 1.5x zoom-trin, kulmanlab]
group: navigate
order: 2
---

# Zoom In

Kommandoen `zoomin` multiplicerer det aktuelle zoomniveau med **1,5×** og afslutter med det samme, centreret på viewportens midtpunkt. Det er værktøjslinje-modstykket til ét rullehjulshak zoomet mod skærmens centrum i stedet for markøren.

## Zoome ind

Klik på **Zoom In**-knappen i værktøjslinjen eller skriv `zoomin` i terminalen. Zoomen anvendes øjeblikkeligt, og kommandoen afsluttes — intet klik på lærredet nødvendigt.

## Hvordan 1,5×-trinnet fungerer

| Aktuel zoom | Efter én Zoom In |
|-------------|------------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (loft) |

Zoomniveauet vises altid i **nederste højre hjørne** af lærredet ved siden af `zoom`-etiketten. Den øvre grænse er **10.000×**; yderligere trin gør ingenting.

## Værktøjslinje-zoom-ind vs rullehjul

| | Zoom In-knap | Rullehjul |
|---|--------------|-------------|
| Zoom-centrum | Viewportens midtpunkt | Markørposition |
| Trinstørrelse | 1,5× pr. klik | ~1,1× pr. hak |
| Kræver aktivering | Nej | Nej — fungerer altid |
| Bedst til | Grov navigation | Præcis, markørstyret zoom |

## Tastaturreference

Der er ingen tastaturgenveje til denne kommando. Brug rullehjulet i stedet — det fungerer når som helst uden at aktivere nogen kommando.

## Relaterede visningskommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Dividerer zoom med 1,5× pr. trin |
| [Fit](../fit/) | Nulstiller zoom for at vise alle entiteter |
| [Pan](../pan/) | Forskyder viewporten uden at zoome |
