---
title: Extend — Förläng en Entitet till Närmaste Gräns
description: Extend-kommandot förlänger den närmaste ändpunkten på en Line, Arc, Ellipse eller öppen Polyline du hovrar över till den närmaste skärningen med en annan entitet. En live-förhandsgranskning visar den förlängda entiteten innan du klickar.
keywords: [CAD extend-kommando, förläng linje CAD, förläng båge CAD, förläng ellips CAD, förläng polylinje CAD, förläng entitet till gräns, hover-förhandsgranskning extend, kulmanlab]
group: edit
order: 9
---

# Extend

`Förläng`-kommandot förlänger den närmaste ändpunkten på en [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) eller öppen [Polyline](../polyline/) du hovrar över till den närmaste skärningen den skulle bilda med en annan entitet i ritningen. Hovra nära den ändpunkt du vill förlänga — en förhandsgranskning visar den förlängda entiteten — klicka sedan för att verkställa.

Endast entiteter med en verklig ändpunkt kan förlängas. En [Circle](../circle/) och en fullständig (360°) Ellipse är alltid slutna former utan ändpunkt, så de kan aldrig förlängas — detsamma gäller en stängd Polyline eller Rectangle. En partiell Ellipse (en elliptisk båge) och en Arc har ändpunkter och förlängs på samma sätt som en Line.

## Förläng en entitet

1. Skriv `Förläng` i terminalen eller klicka på **Extend**-knappen i verktygsfältet.
2. **Hovra nära ena änden** av entiteten du vill förlänga — förhandsgranskningen visar den förlängd till närmaste gräns i den riktningen.
3. **Klicka** för att verkställa förlängningen.

Kommandot förblir aktivt efter varje förlängning, så du kan fortsätta hovra och klicka för att förlänga fler entiteter. Tryck på **Enter**, **Space** eller **Escape** för att avsluta.

```
  Före:                      Efter:

  ──────           |           ──────────────|
  (kort linje)     (gräns)     (förlängd till gräns)
```

## Hur ändpunkten väljs

Kommandot ser vilken ände markören är närmast:

- **Line och öppen Polyline** — markören närmare slutpunkten förlänger slutet framåt; markören närmare startpunkten förlänger starten bakåt.
- **Arc och partiell Ellipse** — markören närmare en av de vinkelmässiga ändarna får bågen att växa i den riktningen, runt samma centrum och radie (eller samma ellipsform), tills den når nästa gräns.

En stråle — eller, för Arc och Ellipse, entitetens egen underliggande cirkel eller kurva — kastas från den valda änden, och den **närmaste skärningen** med någon annan entitet (exklusive entiteten själv och de ignorerade typerna) blir den nya ändpunkten.

Om ingen skärning hittas i den riktningen visas ingen förhandsgranskning och ett klick gör ingenting.

## Undantagna gränser

Följande entitetstyper ignoreras som gränser — en entitet förlängs inte för att möta dem:

- Text / Mtext
- Multileader

Alla andra typer (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) fungerar som giltiga gränser.

Om en Polylines första eller sista segment i sig är ett bågsegment (ritat med Arc-växeln) gör en förlängning att bågen växer längs sin egen cirkel — precis som att förlänga en fristående Arc — istället för att behandlas som ett rakt segment.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Avsluta extend-läget |
| `Escape` | Avsluta extend-läget |

## Entiteter som stöds

| Entitet | Kan förlängas? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Ellipse | Ja — endast om den redan är en partiell båge; en fullständig ellips har ingen ändpunkt |
| Circle | Nej — alltid en sluten form utan ändpunkt |
| Polyline (öppen) | Ja |
| Polyline (stängd) / Rectangle | Nej — alltid en sluten form utan ändpunkt |
| Text, Spline, Dimension, Leader | Nej |

## Extend jämfört med Trim

| | Extend | Trim |
|---|--------|------|
| Vad det gör | Förlänger en entitets ändpunkt till en gräns | Tar bort ett segment av en entitet |
| Utlösare | Hovra nära ändpunkten som ska förlängas | Hovra över segmentet som ska klippas |
| Resultat | Ändpunkten flyttas utåt | Entiteten delas eller förkortas |
| Entiteter som stöds | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
