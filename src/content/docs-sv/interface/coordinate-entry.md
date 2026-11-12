---
title: "Koordinatinmatning — skriv exakta, relativa och polära punkter"
description: "Varhelst ett kommando ber om en punkt kan du skriva den i stället för att klicka: X,Y för en exakt position, @X,Y för att mäta från den senaste punkten och avstånd<vinkel för en polär punkt. Knappen Rel låter varje inskriven punkt börja som relativ."
keywords: ["koordinatinmatning CAD", "relativa koordinater CAD", "polära koordinater CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinatinmatning

Varhelst ett kommando ber om en punkt — början på en [Line](../../commands/line/), ett hörn av en [Rectangle](../../commands/rectangle/), baspunkten för en [Move](../../commands/move/) eller ett grepp du drar — kan du skriva den i stället för att klicka. Börja skriva ett tal så visar terminalen vad du skriver; tryck **Enter** eller **Space** för att placera punkten.

## Fyra sätt att skriva en punkt

| Du skriver | Punkten ligger |
|---|---|
| `100,50` | Vid X 100, Y 50 |
| `@100,50` | 100 i X och 50 i Y från den senaste punkten |
| `100<45` | 100 från origo, i 45° |
| `@100<45` | 100 från den senaste punkten, i 45° |

Vinklar anges i grader, moturs från X-axeln, så `@50<90` är 50 rakt upp och `@50<180` 50 åt vänster. Båda värdena får vara negativa.

## Den senaste punkten

`@` mäter från den senaste punkt som klickats eller skrivits i något kommando — föregående kommandos sista klick räknas, och likaså ett grepp du just har dragit. Finns ingen senaste punkt än läses `@100,50` som `100,50`. Den senaste punkten glöms när du växlar mellan modellrymd och layout, och när en ritning öppnas.

## Rel: relativt som standard

Knappen **Rel** i kontrollfältet låter varje inskriven punkt börja som relativ: så fort du skriver första siffran sätts ett `@` framför, så `100,50` blir `@100,50`. Tryck **Backsteg** över `@` för att göra just den punkten absolut. Finns ingen senaste punkt än läggs inget `@` till. Rel är av som standard och sparas med kontrollfältets övriga knappar.

## Tangenter medan du skriver

| Tangent | Verkan |
|---|---|
| `0`–`9`, `.`, `-` | Skriv talet; `-` bara i början |
| `@` | Gör punkten relativ, i början av X |
| `,` eller **Space** | Avsluta X och gå till Y |
| `<` | Avsluta X som avstånd och gå till dess vinkel |
| **Enter** eller **Space** | Placera punkten när Y har ett värde |
| **←** **→** **Home** **End** | Flytta markören inom värdet du skriver |
| **Backspace** | Radera före markören; i början av ett tomt Y, gå tillbaka till X |

En punkt som inte går att läsa som tal stannar kvar i terminalen så att du kan rätta den. Varje inskriven punkt lämnar en rad i terminalhistoriken så som du skrev den — `Inmatat @100<45` — före kommandots rad med var den hamnade.

## Inskrivna punkter och vinkelspårning

När markören är låst till en vinkelspårningsstråle ger ett inskrivet tal ett avstånd längs strålen i stället för ett X. Skriver du `@` först börjar en hel punkt, så `@100,50` fungerar även på en låst stråle.

---

*Relaterat: [Avståndsspårning](../distance-tracking/) för att skriva en längd längs en låst riktning, och [Vector Pins](../vector-pins/) för att mäta från en fäst punkt.*
