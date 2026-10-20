---
title: "PointDivide-kommando — placera punkter med lika längder längs ett objekt"
description: "PointDivide-kommandot delar en linje, polylinje, båge, cirkel, ellips eller spline i lika långa delar och placerar en punkt vid varje delning, med förhandsvisning medan du skriver antalet delar."
keywords: ["CAD dela-kommando", "dela linje i lika delar CAD", "punkter längs objekt CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Kommandot `DelaMedPunkter` placerar [punkter](../point/) som delar ett objekt i lika långa delar. Själva objektet ändras inte: punkterna är nya entiteter på aktuellt lager och i aktuell färg, praktiska att fästa mot.

## Dela ett objekt

1. Skriv `DelaMedPunkter` i terminalen eller välj **Point Divide** i matrisrullgardinen i panelen Edit.
2. **Klicka på objektet** — en linje, polylinje, båge, cirkel, ellips eller spline. Allt annat avvisas, och du kan välja igen.
3. **Skriv antalet delar**, ett heltal från 2 till 32767. Punkterna förhandsvisas på objektet medan du skriver.
4. Tryck **Enter** eller **Space** för att placera dem. Kommandot avslutas.

## Var punkterna hamnar

- Avståndet mäts som längd längs objektet, inte som vinkel, så en ellips eller spline delas i lika långa bitar. Bågsegment i en polylinje följs längs sin kurva.
- På ett öppet objekt — en linje, öppen polylinje, båge, delvis ellips eller öppen spline — hamnar punkterna mellan delarna, aldrig på ändarna: 5 delar ger 4 punkter.
- På ett slutet objekt — en cirkel, sluten polylinje, hel ellips eller sluten spline — går punkterna hela vägen runt från dess start, som också får en punkt: en cirkel börjar vid vinkel 0, en sluten polylinje vid dess första nod. 5 delar ger 5 punkter.
- Ett tal utanför 2–32767 avvisas: terminalen säger varför och rensar det, så att du kan skriva igen.

Backsteg raderar sista siffran. Escape börjar om, så att du kan välja ett annat objekt. Enter eller Space innan ett objekt är valt avslutar kommandot.

---

*Relaterat: [Point Interval](../point-interval/) för punkter med fast avstånd, [Point](../point/) för enskilda punkter och [ArrayPolar](../array-polar/) för att upprepa objekt i stället för punkter.*
