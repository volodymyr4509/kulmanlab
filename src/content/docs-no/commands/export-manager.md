---
title: Export Manager — Last ned tegninger som DXF eller JSON
description: Export Manager laster ned den gjeldende tegningen som en DXF- eller JSON-fil (innebygd). Hvert format viser nøyaktig hvilke entitetstyper det inneholder, side om side, slik at du kan se før nedlasting hva DXF utelater — for øyeblikket hatcher, mål, ledelinjer og tekst.
keywords: [eksporter DXF, eksporter CAD-fil, last ned DXF nettleser, lagre DXF online, eksporter JSON CAD, KulmanLab eksport, last ned CAD-fil, DXF-eksport, lagre tegning som fil, DXF-nedlasting]
group: file
order: 6
---

# Export Manager

Kommandoen `exportmanager` laster ned den gjeldende tegningen til filsystemet ditt. To formater er tilgjengelige, vist som kort side om side: **DXF** for kompatibilitet med andre CAD-verktøy og **JSON** for lagring med full nøyaktighet i KulmanLab CAD — hvert kort viser nøyaktig hvilke entitetstyper det formatet inneholder.

## Slik eksporterer du

1. Klikk på verktøylinjeknappen **Export** (nedlastingsikon) i filpanelet, eller skriv `exportmanager` i terminalen.
2. Popup-vinduet **Export Manager** åpnes og viser JSON- og DXF-kortene side om side, hvert med en liste over hva som eksporteres (og for DXF, hva som utelates).
3. Klikk på et kort for å velge format — **JSON** eller **DXF**.
4. Klikk på knappen **Export \<FORMAT\>**. Filen lastes automatisk ned til standard nedlastingsmappe.

Trykk `Escape` for å lukke popup-vinduet uten å eksportere.

## Velge et format

| Format | Filtype | Best til | Begrensninger |
|--------|---------|----------|----------------|
| **JSON** *(innebygd)* | `.json` | Lagre arbeid for gjenåpning i KulmanLab CAD | Ikke kompatibel med andre CAD-verktøy |
| **DXF** | `.dxf` | Deling med FreeCAD, LibreCAD osv. | Hatcher, mål, ledelinjer og tekst eksporteres ikke |

**Når du bør bruke JSON:** når som helst du vil lagre en komplett kopi av arbeidet ditt. JSON er KulmanLabs innebygde format og bevarer hver entitet nøyaktig — inkludert mål, ledelinjer, hatcher og alle lagdata.

**Når du bør bruke DXF:** når du må overlevere tegningen til noen som bruker en annen CAD-applikasjon. Den eksporterte filen bruker AC1032 DXF-format og kan åpnes i de fleste DXF-kompatible verktøy.

## Hva som eksporteres per format

### JSON-eksport

Alle entitetstyper er inkludert:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Mål (lineær, justert, fortsatt, radius, diameter)
- Leaders (multi-ledelinjer)
- Hatches, inkludert mønster, skalering, vinkel og origo
- Layers og Linetypes

### DXF-eksport

Kun geometrientiteter er inkludert:

- Lines, Circles, Arcs, Ellipses, Polylines (eksportert som `LWPOLYLINE`), Splines
- Layers og Linetypes

**Eksporteres ikke til DXF:** hatcher, mål, ledelinjer og tekst. Mål og ledelinjer bruker KulmanLab-spesifikke datastrukturer som ikke kan representeres troverdig i standard-DXF; hatcher eksporteres ikke til DXF i det hele tatt ennå, selv om de importeres derfra; teksteksport er heller ikke implementert ennå. Hvis tegningen din har noen av disse, bruk JSON eller [Print Manager](../print-manager/) for å fange dem.

## Navn på eksportert fil

Den nedlastede filen får navn etter gjeldende tegningsfil (f.eks. `myplan.json`). Filtypen endres for å matche det valgte formatet.

## Forskjell mellom Export Manager og Print Manager

| Funksjon | Export Manager | Print Manager |
|----------|-----------------|-----------------|
| Utdata | Vektorkildefil (.dxf / .json) | Rasterbilde (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andre verktøy | Ja (DXF) | Nei |
| Bevarer layers & linetypes | Ja | Nei (rendret flatt) |
| Fanger mål & ledelinjer | Kun JSON | Ja |

Bruk **Export Manager** når du trenger en redigerbar fil. Bruk [Print Manager](../print-manager/) når du trenger et visuelt øyeblikksbilde.

## Relaterte kommandoer

- [Import](../import/) — åpne en DXF- eller JSON-fil
- [Print Manager](../print-manager/) — eksporter lerretet som et PNG-, JPEG-, WebP- eller PDF-bilde
- [File Manager](../file-manager/) — bla gjennom tegninger lagret i nettleserlagring
