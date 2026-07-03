---
sidebar_position: 3
title: "Zoom Out-kommandot — Minska vyportens zoom med 1,5× per steg i KulmanLab CAD"
description: "Zoom Out-kommandot dividerar den aktuella zoomnivån med 1,5× och avslutas omedelbart. Centreras på vyportens mittpunkt. Använd scrollhjulet för att zooma ut mot markören för finare kontroll."
keywords: [CAD zooma ut, minska vyportzoom, zoom out-kommando, översikt CAD, "1,5x zoomsteg", kulmanlab]
---

# Zoom Out

`zoomout`-kommandot dividerar den aktuella zoomnivån med **1,5×** (motsvarar att multiplicera med ~0,667) och avslutas omedelbart, centrerat på vyportens mittpunkt. Det är motsatsen till [Zoom In](../zoom-in/).

## Zooma ut

Klicka på **Zoom Out**-knappen i verktygsfältet eller skriv `zoomout` i terminalen. Zoomen appliceras omedelbart och kommandot avslutas — inget klick på ritytan krävs.

## Så fungerar 1,5×-steget

| Aktuell zoom | Efter en Zoom Out |
|-------------|-------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (minimigräns) |

Zoomnivån visas alltid i ritytans **nedre högra hörn**. Den nedre gränsen är **0,01×**; ytterligare steg gör ingenting.

## Zoom out i verktygsfältet jämfört med scrollhjulet

| | Zoom Out-knapp | Scrollhjul |
|---|----------------|-------------|
| Zoomcentrum | Vyportens mittpunkt | Markörens position |
| Stegstorlek | 1,5× per klick | ~1,1× per klick |
| Aktivering krävs | Nej | Nej — fungerar alltid |
| Bäst för | Steg bakåt för att se mer kontext | Mjuk, markörförankrad utzoomning |

## Snabbreferens tangentbord

Det finns inga tangentbordsgenvägar för det här kommandot. Använd scrollhjulet istället — det fungerar när som helst utan att aktivera något kommando.

## Relaterade vykommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Zoom In](../zoom-in/) | Multiplicerar zoomen med 1,5× per steg |
| [Fit](../fit/) | Återställer zoomen så alla entiteter visas |
| [Pan](../pan/) | Förskjuter vyporten utan att zooma |
