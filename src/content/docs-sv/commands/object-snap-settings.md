---
title: "ObjectSnapSettings-kommando — Alla inställningar i kontrollfältet"
description: "ObjectSnapSettings-kommandot öppnar ett fönster med alla kontrollfältets inställningar — fästning, tangentfästning, vinkelspårning, nålar, inskriven inmatning, lasso och visning — var och en förklarad bredvid listan med en liten teckning."
keywords: ["inställningar för objektfästning CAD", "tangentfästning CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Kommandot `Fästinställningar` öppnar ett fönster som samlar alla kontrollfältets inställningar. Varje inställning förklaras bredvid listan, med en liten teckning. Öppna det med kugghjulsknappen i kontrollfältet, eller skriv `Fästinställningar`. Att ändra en inställning här är detsamma som att växla dess knapp i fältet.

## Inställningarna

### Var markören hamnar

| Kontrollfält | Vad den gör |
|---|---|
| `Snap` | Markören hoppar till närmaste rutnätspunkt, så att punkterna du väljer hamnar på jämna koordinater. Fästning mot ett objekt nära markören går fortfarande före. Rutnätets steg följer zoomen. |
| `TANG` | Medan en linje ritas från en punkt, för markören dit där den precis skulle nudda en cirkel, båge, ellips eller spline så fäster den där. Fungerar i Linje, Polylinje och andra kommandon och när änden på en linje eller polylinje dras. |

### Hjälplinjer vid ritning

| Kontrollfält | Vad den gör |
|---|---|
| `ANGL` | När markören kommer nära en av dessa vinklar från senaste punkten låses den i den riktningen, visad som en streckad stråle. Medan den är låst, skriv en längd och tryck Enter för att placera punkten så långt bort. |
| `Pins` | Låt markören vila ett ögonblick på en fästpunkt för att nåla fast den. En fastnålad punkt skickar ut vågräta och lodräta hjälplinjer, och markören fäster mot dem och där de korsas. |
| `Dist` | Den senast fastnålade punkten blir startpunkt: när markören låses på en vinkel från nålen, skriv en längd och tryck Enter för att placera punkten så långt från den. Kräver vektornålar. |

### Inmatning och markering

| Kontrollfält | Vad den gör |
|---|---|
| `Rel` | En inskriven X,Y-punkt mäts från den senast valda punkten, som om den började med @. Backsteg tar bort @ för en punkt i ritningens egna koordinater. Avstängt skriver du själv @ för en förskjutning. |
| `Lasso` | Tryck och dra på tom yta för att rita en fri slinga runt det du vill ha, i stället för en rektangel. Det slingan omfattar markeras. |

### Visning

| Kontrollfält | Vad den gör |
|---|---|
| `Grid` | Visar bakgrundsrutnätet. Avståndet ändras när du zoomar. Att stänga av det stoppar inte fästning mot rutnätet. |
| `LWT` | Ritar linjer med sin linjetjocklek, så att tyngre linjer ser tjockare ut. Avstängt ritas varje linje tunt, vilket kan göra en tät ritning lättare att läsa. |

**ANGL** har en egen rad för steget: välj 10°, 20°, 30°, 45° eller 90°, eller välj **Anpassad** och skriv en valfri vinkel från 1° till 180°.

Tangentfästning, relativ inmatning och lasso är avstängda som standard. **Återställ standard** återställer alla inställningar till startläget.

---

*Relaterat: [Vector Pins](../../interface/vector-pins/), [Avståndsspårning](../../interface/distance-tracking/), [Rutnät & Snap](../../interface/grid-snap/), [Koordinatinmatning](../../interface/coordinate-entry/)*
