---
title: "Measure-kommando — läs av avstånd, längder, vinklar och areor runt markören"
description: "Measure-kommandot läser av ritningen runt markören medan du flyttar den — avståndet till närmaste geometri, längden eller radien på det den möter, vinkeln där linjer möts — och ger med ett klick arean och omkretsen för ett slutet område. Ingenting i ritningen ändras."
keywords: ["CAD mätkommando", "mät area och omkrets CAD", "live avståndsmätning CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Kommandot `Mät` läser av ritningen runt markören medan du flyttar den, utan punkter att välja: hur långt det är till närmaste geometri, hur lång eller rund den geometrin är och vinkeln där linjer möts. Ett klick inuti ett slutet område ger dess area och omkrets. Ingenting i ritningen ändras.

## Mäta

1. Skriv `Mät` i terminalen eller klicka på **Measure**, den första knappen i panelen Measure.
2. **Flytta markören.** Därifrån tittar kommandot åt höger, uppåt, åt vänster och nedåt efter närmaste geometri och visar vad det hittar.
3. **Klicka inuti ett slutet område** för att fylla det och läsa av dess area och omkrets — se nedan.
4. Tryck **Enter**, **Space** eller **Escape** för att avsluta.

## Vad det visar

- **Avstånd tvärs över** — från det markören möter på ena sidan till det den möter på den andra, vågrätt och lodrätt. Om bara en sida har något går avståndet från markören. Varje ände som möter något har en liten fylld prick; en ände vid markören har ingen.
- **Längd eller radie** — varje objekt kommandot når lyfts fram med sin längd, eller sin radie när det är en del av en cirkel.
- **Vinkel** — där två nådda raka linjer möts skrivs vinkeln mellan dem; en rät vinkel markeras med en liten kvadrat.

Längder och vinklar skrivs som gällande [DimensionStyle](../dimension-style/) skriver dem, i dess enhetsformat och precision.

## Area och omkrets

Ett klick inuti ett slutet område fyller det och lägger dess area och omkrets i uppmaningen och historiken. Området hittas som [Hatch](../hatch/) hittar ett: separata linjer som möts ände mot ände sluter ett område precis som en polylinje, och allt slutet inuti lämnas utanför som en ö — dess kant räknas med i omkretsen och dess area dras av.

Arean är ett vanligt tal i kvadratiska ritningsenheter — fot och tum kan inte skriva en area — medan omkretsen följer enhetsformatet. Klicka inuti ett annat område för att mäta det. Om inget slutet omger punkten säger terminalen varför, med samma meddelanden som Hatch: no boundary found, point is not enclosed eller boundary is open.

## Bra att veta

- Det mäter mot linjer, bågar, cirklar, ellipser, polylinjer och splines; längder och areor är exakta, även för ellipser och splines.
- Objekt på frysta lager ignoreras; objekt på låsta lager mäts.
- I en stor ritning tittar det bara på det som är nära markören, så det förblir snabbt.

---

*Relaterat: [Distance](../distance/), [Angle](../angle/) och [Area](../area/) för mätningar mellan punkter du väljer, och [Hatch](../hatch/) för hur slutna områden hittas.*
