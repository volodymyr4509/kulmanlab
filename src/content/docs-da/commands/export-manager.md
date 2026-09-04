---
title: Export Manager — Download tegninger som DXF eller JSON
description: Hent tegningen som DXF eller JSON, og vælg pr. elementtype hvad der kommer med. Begge bærer geometri, tekst, mål, henvisninger, skraveringer, lag og linjetyper.
keywords: [eksportér DXF, eksportér CAD-fil, download DXF i browser, gem DXF online, eksportér JSON CAD, KulmanLab eksport, download CAD-fil, DXF-eksport, gem tegning som fil, DXF-download]
group: file
order: 6
---

# Export Manager

Kommandoen `exportmanager` henter den aktuelle tegning ned på dit filsystem. To formater ligger side om side — **DXF** til kompatibilitet med andre CAD-værktøjer og **JSON** til fuldtro gemninger inde i KulmanLab CAD — og hvert har sin egen tjekliste over, hvad der skal i filen.

## Sådan eksporterer du

1. Klik på værktøjslinjeknappen **Export** (downloadikon) i filpanelet, eller skriv `exportmanager` i terminalen.
2. Popuppen **Export Manager** åbner med to kolonner, **JSON** og **DXF**, der hver viser tegningens elementtyper med et afkrydsningsfelt og et antal.
3. Fjern fluebenet ved det, du vil udelade. Alt er sat til fra start.
4. Klik **Export JSON** eller **Export DXF**. Filen hentes til din standardmappe, og popuppen lukker.

Tryk på `Escape` for at lukke popup'en uden at eksportere.

## Vælg hvad der skal eksporteres

Begge kolonner viser de samme elementtyper, hver med et antal af, hvor mange der er i tegningen:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Alt er afkrydset, når popuppen åbner, så eksporterer du med det samme, får du hele tegningen. Fjern fluebenet ved en type for at udelade den fra netop den fil.

- **De to kolonner er uafhængige.** At fjerne fluebenet ved Hatches under DXF ændrer ikke, hvad **Export JSON** producerer — hvert format har sit eget valg.
- **En type, du ikke har, er nedtonet.** En række med antallet `0` kan ikke afkrydses, så listen fungerer også som en hurtig opgørelse over tegningen.
- **Tallene er et øjebliksbillede.** De tages, når popuppen åbner, og opdateres ikke, hvis tegningen ændrer sig bagved. Luk og åbn igen for at forny dem.
- **Intet slettes.** Fluebenene former kun den eksporterede fil; selve tegningen røres ikke.

**Linear Dimensions** dækker lineære, tilpassede og fortsatte mål: én elementtype skabt af tre forskellige kommandoer. Radius, diameter og vinkel har hver sin række.

Til en skærefil fjerner du fluebenet ved Text, de fire målrækker, Leaders og Hatches og klikker **Export DXF** — se [at forberede en DXF til laserskæring](/da/blog/prepare-dxf-for-laser-cutting/).

## Valg af format

| Format | Filtype | Bedst til | Begrænsninger |
|--------|---------|-----------|----------------|
| **JSON** *(indbygget)* | `.json` | At gemme arbejde til genåbning i KulmanLab CAD | Ikke kompatibel med andre CAD-værktøjer |
| **DXF** | `.dxf` | Deling med FreeCAD, LibreCAD osv. | Hvor meget der overlever, afhænger af modtagerprogrammet |

**Hvornår skal du bruge JSON:** når som helst du vil gemme en komplet kopi af dit arbejde. JSON er KulmanLabs indbyggede format og bevarer hver entitet præcist — inklusive mål, ledelinjer, hatches og alle lagdata.

**Hvornår skal du bruge DXF:** når du skal overdrage tegningen til nogen, der bruger et andet CAD-program. Den eksporterede fil bruger AC1032 DXF-format og kan åbnes i de fleste DXF-kompatible værktøjer.

## Hvad der eksporteres pr. format

### JSON-eksport

Alle entitetstyper er inkluderet:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Mål (lineær, justeret, fortsat, radius, diameter, vinkel)
- Leaders (multiledelinjer)
- Hatches, inklusive deres mønster, skalering, vinkel og origin
- Layers og Linetypes

### DXF-eksport

Alle entitetstyper er inkluderet:

- Lines, Circles, Arcs, Ellipses, Polylines (eksporteret som `LWPOLYLINE`), Splines
- Text
- Mål (lineær, justeret, fortsat, radius, diameter, vinkel)
- Leaders (multiledelinjer)
- Hatches, inklusive deres mønster, skalering, vinkel og origin
- Layers og Linetypes

Filen skrives som AC1032 DXF, så en tegning eksporteret fra KulmanLab åbner med sine påtegninger i behold i andre DXF-kyndige værktøjer i stedet for at ankomme som ren geometri.

Hvad hvert modtagende program så gør med den, varierer stadig — DXF-understøttelse er forskellig fra værktøj til værktøj, og et ældre kan ignorere elementer, som et nyere læser. Skal en tegning se identisk ud alle steder, fanger [Print Manager](../print-manager/) den i stedet som PDF eller billede.

## Navn på den eksporterede fil

Den downloadede fil får navn efter den aktuelle tegningsfil (f.eks. `myplan.json`). Filtypen ændres for at matche det valgte format. En tegning, der aldrig er blevet navngivet, eksporteres som `drawing.dxf` eller `drawing.json`.

## Forskel mellem Export Manager og Print Manager

| Funktion | Export Manager | Print Manager |
|----------|--------|-------|
| Output | Vektor-kildefil (.dxf / .json) | Rasterbillede (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andre værktøjer | Ja (DXF) | Nej |
| Bevarer layers & linetypes | Ja | Nej (rendret fladt) |
| Fanger mål & ledelinjer | Ja | Ja |

Brug **Export Manager**, når du har brug for en redigerbar fil. Brug [Print Manager](../print-manager/), når du har brug for et visuelt øjebliksbillede.

## Relaterede kommandoer

- [Import](../import/) — åbn en DXF- eller JSON-fil
- [Print Manager](../print-manager/) — eksportér lærredet som et PNG-, JPEG-, WebP- eller PDF-billede
- [File Manager](../file-manager/) — gennemse tegninger gemt i browserlager
