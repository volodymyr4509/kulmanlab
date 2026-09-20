---
title: Hatch-kommando — Fyll ett område med ett mönster
description: Hatch-kommandot fyller området runt en klickad punkt med ett mönster — vilken kombination som helst av linjer, bågar, ellipser och splines som sluter sig omsluter ett område, och varje sluten form däri lämnas som en ofylld ö.
keywords: [CAD hatch-kommando, fyll område CAD, hatch-mönster CAD, ANSI31, SOLID-fyllning, kantfyllning CAD, DXF HATCH-entitet, kulmanlab]
group: shapes
order: 7
---

# Hatch

Kommandot `Skraffering` fyller området runt en klickad punkt med ett mönster. Konturen ritas inte i förväg — den kommer från det som redan finns på ritytan, så fyra separata [Lines](../line/) som möts ände mot ände omsluter ett område precis som en sluten [Polyline](../polyline/) gör, och varje sluten form däri blir en ö som fyllningen lämnar orörd.

## Fylla ett område

1. Skriv `Skraffering` i terminalen eller klicka på verktygsfältsknappen **Hatch** (mönsterikonen).
2. **Klicka på en punkt** inuti det område du vill fylla.
3. Kommandot förblir aktivt, så fortsätt klicka för att fylla fler områden — varje klick skapar sin egen `Hatch`-entitet.
4. Tryck på **Enter**, **Space** eller **Escape** när du är klar.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klicka innanför den yttre
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   konturen; cirkeln förblir
  └─────────────┘        └─────────────┘   en ö
```

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Avsluta Hatch-kommandot |
| `Escape` | Avsluta Hatch-kommandot (samma som Enter/Space) |

## Vad som kan bilda en kontur

Vilken kombination som helst av dessa entitetstyper kan bilda en kontur, i vilken sammansättning som helst, så länge de ansluter ände mot ände utan något mellanrum:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (sin egen slutna kontur)
- [Ellipse](../ellipse/) (sluten, eller en öppen elliptisk båge som en del av en större slinga)
- [Polyline](../polyline/) (öppen eller sluten) och [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Text-, Multileader- och Dimension-entiteter behandlas aldrig som konturer.

## Öar

Allt som är helt slutet inuti det område du klickade på — en cirkel, en sluten polylinje, konturen på en annan hatch — blir en **ö**: fyllningen stannar vid dess kant och ön själv förblir tom. Placera en sluten form inuti en annan sluten form och fyllningen växlar, hål i en fyllning i ett hål, enligt samma inne/ute-regel på varje nivå.

## När ett val misslyckas

Om punkten du klickade på inte är omsluten, eller konturen har ett hål, förklarar terminalen varför i stället för att tyst inte göra något:

| Meddelande | Betydelse |
|------------|-----------|
| "no boundary found" | Inget träffades i någon riktning från den klickade punkten — det finns ingen kontur alls i närheten |
| "point is not enclosed" | Det finns en kontur i närheten, men formen den bildar innehåller inte punkten du klickade på |
| "boundary is open" | Den närmaste konturen har ett hål någonstans — spåra den och kontrollera att varje skarv är exakt |
| "boundary too complex" | Konturslingan kunde inte slutas inom genomgångsgränsen — vanligtvis ett trassel av överlappande entiteter |

Kommandot förblir aktivt efter ett misslyckat val — läs meddelandet, korrigera ritningen eller klicka någon annanstans, och försök igen.

## Välja ett mönster

Varje ny hatch börjar fylld med `ANSI31` (eller vilket mönster den *senast* redigerade hatchen använde) — det finns ingen mönsterväljare innan du ritar. För att använda ett annat mönster:

1. Välj en befintlig hatch och öppna dess **Pattern**-fält i egenskapspanelen — detta öppnar mönsterväljaren, ett rutnät av namngivna swatcher grupperade efter varifrån varje mönster kommer.
2. Klicka på ett mönster för att tillämpa det — fyllningen uppdateras omedelbart.

Det valet blir också standard för nästa hatch du skapar med `Skraffering`-kommandot, på samma sätt som att välja ett lager eller en färg förs vidare. Så för att hatcha flera nya områden med ett visst mönster: fyll ett område, ställ in dess mönster en gång, och fortsätt hatcha — varje fyllning efter det börjar redan med det mönstret tillämpat.

Se [Hatch Manager](../hatch-manager/) för att ladda upp dina egna `.pat`-mönsterfiler och bläddra i hela biblioteket.

**SOLID** är en vanlig post i mönsterlistan, ingen separat kryssruta eller ett eget läge — välj det på samma sätt som du skulle välja ANSI31 eller något annat namngivet mönster.

## Egenskaper

| Egenskap | Betydelse |
|----------|-----------|
| Pattern | Mönstrets namn, från det delade mönstervokabuläret (se [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Skalar mönstrets linjeavstånd — större värden sprider mönsterlinjerna längre ifrån varandra |
| Pattern Angle | Roterar mönstret oberoende av konturen |
| Origin X / Origin Y | Var mönstrets egen upprepning är förankrad, i ritningskoordinater |

Att flytta, rotera, spegla eller skala en hatch för med sig mönsterplaceringen, så fyllningen förblir justerad med konturen — du behöver inte ställa in skalan eller vinkeln på nytt efter en transformation.

## Handtagsredigering av konturen

En vald hatch griper sin kontur på samma sätt som en Polyline griper sina hörnpunkter — ett handtag i varje hörn där två kanter möts, och ett i mitten av varje kant (en sluten slinga som en hatch av en cirkel eller ellips griper i stället i sina fyra axelpunkter).

| Handtag | Vad det gör |
|---------|-------------|
| **Hörn** | Flyttar det hörnet. En rak kant följer exakt; en båge anpassar sig på nytt för att fortsätta gå genom båda sina grannar; en ellips- eller splinekant kan bara landa någonstans på sin egen kurva, så hörnet fäster vid närmaste punkt på den |
| **Kantmitt — linje-, ellips- eller splinekant** | Skjuter hela kanten; kanterna på båda sidor beskärs eller förlängs för att förbli förenade med den |
| **Kantmitt — bågkant** | **Böjer** bågen genom pekaren i stället för att skjuta den — båda ändarna förblir exakt där de var, och inget annat i konturen rör sig |
| **Centrum** (hela hatchen) | Aktiverar [Move](../move/) för hela hatchen |

En dra-förhandsvisning visar konturen som en streckad kontur i stället för en solid fyllning medan du drar — den ursprungliga fyllningen förblir synlig underneath tills du släpper, eftersom en förhandsvisning bara kan måla ovanpå det som redan finns, aldrig ta bort något från det.

## DXF — HATCH-entitet

Hatchar **importeras** från `HATCH`-entiteter: KulmanLab läser konturgeometrin tillsammans med mönstrets namn, skala och vinkel (DXF-gruppkoder 70/41/52) — den läser **inte** mönstrets egna linjedefinitioner som är inbäddade i filen. Istället slås mönsternamnet upp i KulmanLabs eget mönsterbibliotek (inbyggda standarder plus allt du har laddat upp i [Hatch Manager](../hatch-manager/)). Ett namn som inte finns i ditt bibliotek faller tillbaka till ANSI31 så att ritningen fortfarande läses som hatchad, och en anteckning loggas en gång.

Splinbegränsade slingor skrivna av andra applikationer (DXF-gränskanttyp 4) läses ännu inte.

Skrafferingar **exporteras** till DXF som `HATCH`-objekt. Gränsslingorna följer med mönsternamnet (gruppkod 2), flaggan för heltäckande fyllning (70) och den här skrafferingens egen vinkel och skala (52/41) — och till skillnad från importvägen skrivs även mönstrets upplösta linjedefinitioner in i filen (78, med 53/43/44/45/46/79/49). Asymmetrin är avsiktlig: KulmanLab kan slå upp ett namn i sitt eget bibliotek, men programmet som tar emot filen har kanske inte det mönstret, så linjerna följer med.

## Relaterade kommandon

- [Hatch Manager](../hatch-manager/) — bläddra i mönsterbiblioteket och ladda upp `.pat`-filer
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — för alla med sig hatchens mönsterplacering
- [Delete](../delete/) — tar bort hatchen utan att påverka de entiteter som bildade dess kontur
