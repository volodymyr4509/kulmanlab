---
sidebar_position: 2
title: "Zoom In-kommandot — Förstora vyporten med 1,5× per steg i KulmanLab CAD"
description: "Zoom In-kommandot multiplicerar den aktuella zoomnivån med 1,5× och avslutas omedelbart. Centreras på vyportens mittpunkt. Zoomintervall 0,01–10 000. Använd scrollhjulet för att zooma mot markören istället."
keywords: [CAD zooma in, förstora vyport, zoom-kommando CAD, "1,5x zoomsteg", kulmanlab]
---

# Zoom In

`zoomin`-kommandot multiplicerar den aktuella zoomnivån med **1,5×** och avslutas omedelbart, centrerat på vyportens mittpunkt. Det är verktygsfältets motsvarighet till ett klick på scrollhjulet, fast zoomat mot skärmens centrum istället för markören.

## Zooma in

Klicka på **Zoom In**-knappen i verktygsfältet eller skriv `zoomin` i terminalen. Zoomen appliceras omedelbart och kommandot avslutas — inget klick på ritytan krävs.

## Så fungerar 1,5×-steget

| Aktuell zoom | Efter en Zoom In |
|-------------|------------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6 667× | 10 000× (maxgräns) |

Zoomnivån visas alltid i ritytans **nedre högra hörn** bredvid `zoom`-etiketten. Den övre gränsen är **10 000×**; ytterligare steg gör ingenting.

## Zoom in i verktygsfältet jämfört med scrollhjulet

| | Zoom In-knapp | Scrollhjul |
|---|--------------|-------------|
| Zoomcentrum | Vyportens mittpunkt | Markörens position |
| Stegstorlek | 1,5× per klick | ~1,1× per klick |
| Aktivering krävs | Nej | Nej — fungerar alltid |
| Bäst för | Grov navigering | Precis, markörriktad zoom |

## Snabbreferens tangentbord

Det finns inga tangentbordsgenvägar för det här kommandot. Använd scrollhjulet istället — det fungerar när som helst utan att aktivera något kommando.

## Relaterade vykommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Dividerar zoomen med 1,5× per steg |
| [Fit](../fit/) | Återställer zoomen så alla entiteter visas |
| [Pan](../pan/) | Förskjuter vyporten utan att zooma |
