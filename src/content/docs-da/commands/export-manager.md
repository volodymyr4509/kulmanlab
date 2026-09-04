---
title: Export Manager — Download tegninger som DXF eller JSON
description: Hent den aktuelle tegning som DXF eller JSON. Begge bærer alle elementtyper — geometri, tekst, mål, henvisninger og skraveringer — sammen med lag og linjetyper.
keywords: [eksportér DXF, eksportér CAD-fil, download DXF i browser, gem DXF online, eksportér JSON CAD, KulmanLab eksport, download CAD-fil, DXF-eksport, gem tegning som fil, DXF-download]
group: file
order: 6
---

# Export Manager

Kommandoen `exportmanager` downloader den aktuelle tegning til dit filsystem. To formater er tilgængelige, vist som kort side om side: **DXF** til kompatibilitet med andre CAD-værktøjer og **JSON** til fuld troskab inden for KulmanLab CAD — hvert kort viser præcis hvilke entitetstyper det format indeholder.

## Sådan eksporterer du

1. Klik på værktøjslinjeknappen **Export** (downloadikon) i filpanelet, eller skriv `exportmanager` i terminalen.
2. Popup'en **Export Manager** åbnes og viser JSON- og DXF-kortene side om side, hver med en liste over hvad der eksporteres.
3. Klik på et kort for at vælge format — **JSON** eller **DXF**.
4. Klik på knappen **Export \<FORMAT\>**. Filen downloades automatisk til din standardmappe for downloads.

Tryk på `Escape` for at lukke popup'en uden at eksportere.

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
- Mål (lineær, justeret, fortsat, radius, diameter)
- Leaders (multiledelinjer)
- Hatches, inklusive deres mønster, skalering, vinkel og origin
- Layers og Linetypes

### DXF-eksport

Alle entitetstyper er inkluderet:

- Lines, Circles, Arcs, Ellipses, Polylines (eksporteret som `LWPOLYLINE`), Splines
- Text
- Mål (lineær, justeret, fortsat, radius, diameter)
- Leaders (multiledelinjer)
- Hatches, inklusive deres mønster, skalering, vinkel og origin
- Layers og Linetypes

Filen skrives som AC1032 DXF, så en tegning eksporteret fra KulmanLab åbner med sine påtegninger i behold i andre DXF-kyndige værktøjer i stedet for at ankomme som ren geometri.

Hvad hvert modtagende program så gør med den, varierer stadig — DXF-understøttelse er forskellig fra værktøj til værktøj, og et ældre kan ignorere elementer, som et nyere læser. Skal en tegning se identisk ud alle steder, fanger [Print Manager](../print-manager/) den i stedet som PDF eller billede.

## Navn på den eksporterede fil

Den downloadede fil får navn efter den aktuelle tegningsfil (f.eks. `myplan.json`). Filtypen ændres for at matche det valgte format.

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
