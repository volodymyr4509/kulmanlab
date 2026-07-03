---
sidebar_position: 10
title: Extend-kommandot — Förläng en linjeändpunkt till närmaste gräns i KulmanLab CAD
description: Extend-kommandot förlänger den närmaste ändpunkten på en linje du hovrar över till den närmaste skärningen med en annan entitet. En live-förhandsgranskning visar den förlängda linjen innan du klickar. Extend fungerar endast på Line-entiteter och ignorerar Text, Spline och Multileader som gränser.
keywords: [CAD extend-kommando, förläng linje CAD, sträck linje till gräns, förläng linjeändpunkt, hover-förhandsgranskning extend, kulmanlab]
---

# Extend

`extend`-kommandot förlänger den närmaste ändpunkten på en [Line](../line/) till den närmaste skärningen den skulle bilda med en annan entitet i ritningen. Hovra nära den ändpunkt du vill förlänga — en förhandsgranskning visar den förlängda linjen — klicka sedan för att verkställa.

Extend fungerar endast på **Line-entiteter**. Gränserna linjen förlängs mot kan vara vilken annan entitetstyp som helst utom Text, Mtext, Multileader och Spline.

## Förläng en linje

1. Skriv `extend` i terminalen eller klicka på **Extend**-knappen i verktygsfältet.
2. **Hovra nära ena änden av en linje** — förhandsgranskningen visar linjen förlängd till närmaste gräns i den riktningen.
3. **Klicka** för att verkställa förlängningen.

Kommandot förblir aktivt efter varje förlängning så att du kan förlänga flera linjer i följd. Tryck på **Escape** för att avsluta.

```
  Before:                      After:

  ──────           |           ──────────────|
  (short line)     (boundary)  (extended to boundary)
```

## Hur ändpunkten väljs

Kommandot ser vilken ändpunkt markören är närmast:

- Markören **närmare slutpunkten** → slutet förlängs framåt längs linjens riktning.
- Markören **närmare startpunkten** → startpunkten förlängs bakåt (i motsatt riktning).

En stråle kastas från den valda ändpunkten längs linjens riktning, och den **närmaste skärningen** längs den strålen med någon annan entitet (exklusive linjen själv och de ignorerade typerna) blir den nya ändpunkten.

Om ingen skärning hittas i den riktningen visas ingen förhandsgranskning och ett klick gör ingenting.

## Undantagna gränser

Följande entitetstyper ignoreras som gränser — en linje förlängs inte för att möta dem:

- Text / Mtext
- Multileader
- Spline

Alla andra typer (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungerar som giltiga gränser.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Escape` | Avsluta extend-läget |

## Entiteter som stöds

| Entitet | Kan förlängas? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nej |
| Polyline / Rectangle | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Extend jämfört med Trim

| | Extend | Trim |
|---|--------|------|
| Vad det gör | Förlänger en linjeändpunkt till en gräns | Tar bort ett segment av en linje |
| Utlösare | Hovra nära ändpunkten som ska förlängas | Hovra över segmentet som ska klippas |
| Resultat | Linjeändpunkten flyttas utåt | Linjen delas eller förkortas |
| Båda | Endast linjer | Endast linjer |
