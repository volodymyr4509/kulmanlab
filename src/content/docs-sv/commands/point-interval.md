---
title: "PointInterval-kommando — placera punkter med fast avstånd längs ett objekt"
description: "PointInterval-kommandot placerar punkter med ett inskrivet avstånd längs en linje, polylinje, båge, cirkel, ellips eller spline, från änden du klickar närmast, med förhandsvisning medan du skriver längden."
keywords: ["punkter med intervall CAD", "punkter med fast avstånd längs linje CAD", "CAD mät längs objekt", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Kommandot `PunkterMedIntervall` placerar [punkter](../point/) med fast avstånd längs ett objekt, som när man markerar sektioner längs en sträcka. Själva objektet ändras inte: punkterna är nya entiteter på aktuellt lager och i aktuell färg, praktiska att fästa mot.

## Punkter med ett intervall

1. Skriv `PunkterMedIntervall` i terminalen eller välj **Point Interval** i matrisrullgardinen i panelen Edit.
2. **Klicka på objektet nära änden att börja från** — en linje, polylinje, båge, cirkel, ellips eller spline. Allt annat avvisas, och du kan välja igen.
3. **Skriv intervallets längd.** Punkterna förhandsvisas på objektet medan du skriver.
4. Tryck **Enter** eller **Space** för att placera dem. Kommandot avslutas.

## Var punkterna hamnar

- Den första punkten hamnar ett intervall in från starten och resten följer med ett intervalls avstånd, mätt längs objektet, kurvor inräknade. Ingen punkt hamnar på själva starten.
- På ett öppet objekt — en linje, öppen polylinje, båge, delvis ellips eller öppen spline — mäts från den ände du klickade närmast. Det som blir över vid den bortre änden lämnas omarkerat: den bortre änden får en punkt bara när intervallet går jämnt ut.
- På ett slutet objekt — en cirkel, sluten polylinje, hel ellips eller sluten spline — mäts från objektets egen start, var du än klickar: en cirkel från vinkel 0 moturs, en sluten polylinje från dess första nod. Punkterna slutar före starten.
- En längd på 0 eller mindre, längre än objektet eller en som skulle ge fler än 32767 punkter avvisas: terminalen säger varför och rensar den, så att du kan skriva igen.

Backsteg raderar sista tecknet. Escape börjar om, så att du kan välja ett annat objekt. Enter eller Space innan ett objekt är valt avslutar kommandot.

---

*Relaterat: [Point Divide](../point-divide/) för att dela ett objekt i ett antal lika långa delar och [Point](../point/) för enskilda punkter.*
