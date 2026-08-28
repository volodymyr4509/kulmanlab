---
title: Avståndsspårning — Skriv en exakt längd från en fäst punkt
description: Dist-knappen låter den senaste vektornålen fungera som ankaret som vinkelspårningen mäter från, så att du kan skriva en exakt längd och placera en punkt på ett precist avstånd och i en precis vinkel från en befintlig punkt — även formens första punkt.
keywords: [avståndsinmatning CAD, skriva exakt längd CAD, Dist-knapp, avståndsspårning från nålar, polär spårning CAD, direkt avståndsinmatning, kulmanlab]
group: interface
order: 3
---

# Avståndsspårning

**Avståndsspårning** låter dig placera en punkt genom att skriva en exakt längd i stället för att klicka. Den styrs av knappen **Dist** i kontrollfältet, bredvid [Pins](../vector-pins/) och ANGL, och är **på som standard**, med inställningen bevarad mellan sessioner.

Det den tillför är snävt men användbart: den låter den **senaste vektornålen** fungera som ankaret som vinkelspårningen mäter från. Utan den kan ett kommando bara mäta från en punkt det redan själv samlat in — vilket betyder att formens *första* punkt inte har något alls att mäta från.

## De tre knapparna samverkar

Avståndsspårning står inte på egna ben. Två andra knappar måste vara i rätt läge innan du kan skriva en längd:

| Knapp | Roll |
|-------|------|
| **Pins** | Ger referenspunkten. Håll pekaren över en fästpunkt i 500 ms för att fästa den — se [Vector Pins](../vector-pins/). |
| **ANGL** | Ger vinkeln. Avståndsspårning blir tillgänglig först när pekaren är vinkellåst, så ANGL måste vara satt till ett steg (10°, 20°, 30°, 45°, 90°) och inte till Off. |
| **Dist** | Tillåter att nålen används som ankare i stället för enbart kommandots egen punkt. |

Med Pins och Dist på men ANGL på **Off** händer ingenting: det finns ingen låst riktning att mäta en längd längs.

## Hur Pins och Dist hänger ihop

Avståndsspårning är meningslös med nålarna avstängda, så de två knapparna hålls i takt:

- **Slå på Pins** slår även på **Dist**.
- **Slå av Pins** slår även av **Dist**.
- **Slå på Dist** slår på **Pins** om det inte redan var på.
- **Slå av Dist** lämnar **Pins på**.

Dist kan alltså aldrig vara aktivt medan Pins är inaktivt, men du kan behålla nålspårningen för uppriktning och stänga av avståndsspårningen — praktiskt när du vill ha referenslinjer utan att pekaren låser mot en nål när du siktade på din egen senaste punkt.

## Placera en punkt på ett exakt avstånd

1. Slå på **Pins** och **Dist**, och sätt **ANGL** till ett vinkelsteg.
2. Starta ett kommando som ber om en punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) och så vidare.
3. **Fäst en referenspunkt**: håll pekaren över en befintlig fästpunkt tills markören blir en fylld fyrkant.
4. För pekaren bort från nålen, ungefär i den vinkel du vill ha. När den närmar sig ett av ANGL-stegen **låses** riktningen — en spårningsindikator visas från nålen.
5. **Skriv längden** och tryck **Enter** eller **Space**. Punkten placeras exakt så långt från nålen, längs den låsta vinkeln.

Prompten i terminalen talar om när du kan skriva. I låst läge lyder den:

```
pick start point or enter length: [ ]
```

och värdet du skriver visas inom hakparenteserna.

## Varför den första punkten spelar roll

Det är fallet som annars vore omöjligt. Anta att en linje ska börja exakt 250 enheter till höger om ett befintligt hörn:

1. Starta [Line](../../commands/line/).
2. Fäst det befintliga hörnet.
3. För åt höger tills riktningen låser vid 0°.
4. Skriv `250`, tryck **Enter**.

Linjen börjar nu 250 enheter från hörnet, utan hjälpgeometri och utan huvudräkning. Utan Dist har kommandot Line ännu inte samlat in någon punkt, så det finns ingenting att mäta en skriven längd *från* — du kunde bara klicka på ett ungefär, eller dra en hjälplinje och radera den efteråt.

För den **andra och följande** punkten har kommandot redan sitt eget ankare (föregående punkt), och det används först. Nålen används som alternativ bara när ditt eget ankare inte är låst, så att fästa något kapar inte en låsning du redan har.

## Att skriva fryser låsningen

Så snart du börjar skriva siffror slutar ankaret att ändras. Vilken punkt som än var låst när första siffran kom förblir ankare tills du bekräftar eller tömmer fältet — att röra musen mitt i inmatningen flyttar inte tyst mätningen till en annan nål eller till kommandots egen punkt.

## Tangentbordsreferens

| Tangent | Åtgärd |
|---------|--------|
| `0`–`9`, `.` | Lägg till i längden |
| `-` | Negativ längd — vänder riktningen längs den låsta vinkeln (endast första tecknet) |
| `Backspace` | Radera sista tecknet |
| `Enter` / `Space` | Placera punkten på den skrivna längden |
| `Escape` | Avbryt kommandot; låsning och skrivet värde rensas |

Att skriva en längd är valfritt. Med riktningen låst kan du fortfarande klicka, och punkten projiceras på den låsta vinkeln.

## Var det fungerar

Avståndsspårning finns i varje kommando som ber dig peka ut punkter:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) och [ViewportCopy](../../commands/viewport-copy/).

## Se även

- [Vector Pins](../vector-pins/) — att fästa punkter och spåra längs deras referenslinjer
- [Grid & Snap](../grid-snap/) — de övriga precisionshjälpmedlen i kontrollfältet
- [Distance](../../commands/distance/) — att mäta ett befintligt avstånd i stället för att skriva ett nytt
