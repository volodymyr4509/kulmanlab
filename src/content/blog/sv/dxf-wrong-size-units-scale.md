---
title: "Varför din DXF öppnades i fel storlek (och hur du fixar det)"
description: "En DXF som öppnas 25,4 gånger för liten eller 1000 gånger för stor är en enhetsmiss, inte en trasig fil. Så hittar du förhållandet, skalar om och kontrollerar."
keywords: [DXF fel skala, DXF fel storlek, DXF enheter, DXF mm eller tum, DXF importerad för liten, DXF skalfaktor, DXF 25.4, rätta DXF-skala, DXF enheter stämmer inte, skala om DXF]
date: 2026-09-04
author: KulmanLab
tag: Guide
---

En DXF öppnas och detaljen som ska vara 40 mm bred mäter 1,575. Eller så kommer en planritning i storlek med ett helt kvarter. Filen är inte trasig och ingen har gjort något fel — ritningen stämmer, och det som tappades bort på vägen var talet som hörde till den.

Det är värt att förstå innan du skalar om något, för rättningen tar tio sekunder så snart du vet vilket förhållande du har framför dig, och att gissa är hur man hinner såga fel storlek två gånger.

## DXF bär knappt några enheter

En DXF lagrar koordinater som nakna tal. En linje från `0,0` till `40,0` är fyrtio *någonting* lång. Formatet fäster ingen enhet vid en koordinat, och det finns inte heller någonstans att göra det — talet *är* geometrin.

Det närmaste är en huvudvariabel som heter `$INSUNITS`, en enda kod för hela filen: `1` för tum, `4` för millimeter, `6` för meter, och så vidare. Två saker gör den svagare än den låter. Den är ett enda värde för en hel ritning och kan därför inte beskriva en fil som satts ihop av blandade källor. Och den är rådgivande, inte bindande: många program läser den bara när en ritning *infogas* i en annan och struntar i den när du helt enkelt öppnar filen, på den rimliga grunden att den som öppnar en ritning oftast vet vad hen ritat.

Så "40" reser oskadd och "millimeter" gör det inte. Varje DXF i fel storlek du någonsin kommer att få är exakt den meningen.

## Bestäm förhållandet först

Mät ett drag vars verkliga mått du faktiskt känner: en håldiameter, en plåtkant, ett standardiserat hålavstånd. Dela måttet det borde vara med måttet det mäter. Resultatet är nästan alltid ett av dessa:

| Förhållande | Vad som hänt |
|---|---|
| **25,4** | Ritad i tum, läses som millimeter |
| **0,03937** | Ritad i millimeter, läses som tum |
| **1000** | Ritad i meter, läses som millimeter |
| **0,001** | Ritad i millimeter, läses som meter |
| **12** | Fot läses som tum |
| **304,8** | Fot läses som millimeter |

Står ditt tal där har du en ren enhetsmiss och inget annat, och resten tar en minut.

Står det inte där — 1,37, säg, eller 3,2 — stanna. Det är inget enhetsproblem, och att skala om ger en ritning som är fel på ett långt svårare sätt att upptäcka. Hoppa till sista avsnittet.

## Rättningen

Du behöver något som mäter och något som skalar. Alla CAD-verktyg klarar det; så här går det till i [KulmanLab](https://kulmanlab.com/sv/), som öppnar en DXF i en webbläsarflik utan installation:

1. Öppna filen — dra den till sidan, eller använd [Import](/sv/docs/commands/import/).
2. Kör [Distance](/sv/docs/commands/distance/) och peka ut de två ändarna på ditt kända drag. Snappningen spelar roll här: ta de verkliga ändpunkterna, inte någonstans i närheten, annars bakar du in ditt eget fel i faktorn.
3. Dela. Känt mått ÷ uppmätt mått. Ett 40 mm-hål som visar 1,575 ger 40 ÷ 1,575 ≈ **25,4**.
4. Markera allt, kör [Scale](/sv/docs/commands/scale/), välj en baspunkt och skriv in faktorn.

Baspunkten står stilla medan allt annat rör sig, så lägg den där du kan resonera om den: ett hörn på detaljen, eller origo. För en ritning som är på väg till skärning är origo oftast det vettiga valet.

Det hjälper att KulmanLab inte har någon egen enhetsinställning. Koordinater är bara tal, vilket är precis det tillstånd du vill ha en ritning i medan du räknar ut vad dess tal betyder. Ingen omräkning sker bakom ryggen på dig och det finns inget att kämpa emot.

## Kontrollera rättningen innan du litar på den

Mät ett *andra* drag, någon annanstans i ritningen, vars verkliga mått du också känner. Och kontrollera det sedan.

Det är steget folk hoppar över, och det enda som fångar det otäcka fallet. Om den andra mätningen nu stämmer var ritningen genomgående i fel enheter och är nu genomgående i rätt. Klart.

Om den andra mätningen *fortfarande* är fel, och fel med ett annat belopp, var det aldrig en enkel enhetsmiss. Du har just skalat en osammanhängande ritning, vilket är värre än där du började, eftersom felet inte längre är ett rent förhållande som någon kan upptäcka.

[Area](/sv/docs/commands/area/) är en användbar andra åsikt här, särskilt på skivmaterial. Area skalar med faktorns *kvadrat*, så ett längdfel på 25,4 dyker upp som ett areafel på 645 — en avvikelse som är svår att prata bort.

## Så slipper du det nästa gång

Enheter tappas bort mellan människor, så lösningen bor där också.

**Säg enheten när du skickar filen.** En rad i meddelandet. "Alla mått i mm." Det kostar ingenting och tar bort hela problemet.

**Skicka med ett referensmått.** Ange ett verkligt mått — "yttre plåten är 300 mm bred". Nu kan mottagaren verifiera filen i stället för att anta, och om något ändå gick fel löser hen det på en minut utan att höra av sig.

**Fråga, när det är du som tar emot.** Kommer en fil in utan angivna enheter och du står i begrepp att skära material, är ett meddelande billigare än en förstörd skiva.

**Rita i de enheter din utdata förväntar sig.** Laserskärning, CNC och de flesta tillverkningsflöden förväntar sig millimeter. Ska filen dit, rita i millimeter så återstår ingen omräkning att göra fel. Se [att förbereda en DXF för laserskärning](/sv/blog/prepare-dxf-for-laser-cutting/).

## När det inte är ett enhetsproblem

Var ditt förhållande ingen ren enhetsomräkning är de troliga orsakerna av ett annat slag:

- **Ritningen blandar skalor.** Någon ritade en del i 1:1 och klistrade in en detalj i 1:5, eller så infogades ett block med en skalfaktor som aldrig rättades. Laga den felande geometrin, inte hela filen.
- **Du mätte geometri i pappersrymden.** En ritningshuvud eller anteckningsram ritas i arkstorlek, inte modellstorlek. Mät något som hör till själva objektet.
- **Du mätte fel sak.** Ett nominellt 40 mm-hål kan vara ritat till 39,8 för passningens skull, och en "300 mm"-panel kan vara 300 till utsidan av en fals du inte ser. Välj ett drag med en otvetydig kant.

I vart och ett av dessa fall är svaret att ta reda på vad ritningen faktiskt är, inte att skala den. En ritning vars delar motsäger varandra fortsätter kosta dig material tills någon öppnar den och tittar.

---

*Relaterat: [Distance](/sv/docs/commands/distance/) för att mäta, [Scale](/sv/docs/commands/scale/) för rättningen, [Area](/sv/docs/commands/area/) för andra åsikten, och [Export Manager](/sv/docs/commands/export-manager/) för vad varje format tar med sig när du skickar tillbaka den.*
