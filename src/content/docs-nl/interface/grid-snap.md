---
title: Raster & Snap — Tekeningen uitlijnen op een regelmatig raster
description: De Raster- en Snap-schakelaars in KulmanLab CAD tonen een referentieraster op het canvas en vergrendelen de cursorbeweging op rasterpunten. De rasterafstand past zich automatisch aan het huidige zoomniveau aan, zodat altijd ronde modelwaarden worden getoond.
keywords: [CAD raster, snappen naar raster, rasterafstand, tekenhulpmiddelen, kulmanlab, rasterpunten, orthogonaal snappen]
group: interface
order: 1
---

# Raster & Snap

Twee schakelknoppen in de bedieningsbalk laten u een referentieraster tonen en de cursor vergrendelen op de snijpunten ervan tijdens het tekenen.

| Knop | Functie |
|--------|-------------|
| **Raster** | Toont een visueel punt- of lijnraster op het canvas |
| **Snap** | Vergrendelt de cursor op het dichtstbijzijnde rasterpunt wanneer er geen dichterbij gelegen geometrie-snap is |

De twee schakelaars zijn onafhankelijk — u kunt het raster tonen zonder te snappen, snappen zonder het raster te tonen, of beide samen gebruiken.

## Raster en snap inschakelen

Klik op **Raster** of **Snap** in de bedieningsbalk. De actieve status wordt gemarkeerd. Instellingen worden bewaard tussen sessies.

Wanneer **Snap** is ingeschakeld, schakelt het raster automatisch over van lijnen naar **punten** — de punten markeren de exacte posities waarop de cursor zal snappen.

## Adaptieve rasterafstand

De rasterafstand past zich automatisch aan wanneer u zoomt, zodat rasterlijnen altijd een comfortabele afstand op het scherm hebben (~40 px). De stap is altijd een "mooi" getal — een veelvoud van 1, 2 of 5 bij elke macht van tien:

| Voorbeeld zoom / modelschaal | Rasterstap |
|---------------------------|-----------|
| Uitgezoomd (groot gebied) | 100, 500, 1000 … |
| Gemiddelde zoom | 10, 20, 50 … |
| Ingezoomd (fijn detail) | 1, 2, 5 … |
| Zeer dichtbij | 0,1, 0,2, 0,5 … |

Dit betekent dat elk snappunt terechtkomt op een ronde coördinaat in de modelruimte — er accumuleren geen floating-point afwijkingen.

## Snapprioriteit

**Eindpunt- en snijpunt-snaps hebben altijd voorrang op het raster.** De cursor snapt alleen naar een rasterpunt wanneer deze niet in de buurt is van een geometrie-snapkandidaat (eindpunt, middelpunt, centrum of snijpunt).

Dit betekent dat u kunt tekenen met snappen-naar-raster ingeschakeld en toch precies kunt snappen naar bestaande geometrie wanneer de cursor er dichtbij genoeg langs komt. Het raster is een terugvaloptie, geen overschrijving.

## Layoutmodus

- **Modelruimte** — punten of lijnen vullen het volledige zichtbare canvasgebied.
- **Layout(papier)ruimte** — punten worden begrensd tot de papierrechthoek en reiken er niet buiten.
- **Binnen een viewport** — het raster volgt het modelcoördinatensysteem op de schaal van de viewport, zodat punten zijn uitgelijnd met dezelfde modeleenheden, ongeacht de vergroting van de viewport.

## Typische workflow

1. Schakel **Raster** en **Snap** in voordat u begint met een tekening die regelmatige afstand vereist.
2. Zoom naar het niveau waarop de rasterstap overeenkomt met uw gewenste increment (bijv. zoom totdat de punten 10 eenheden uit elkaar liggen).
3. Teken — de cursor snapt automatisch naar rasterpunten. Bestaande geometrie snapt nog steeds normaal wanneer u er dichtbij bent.
4. Schakel **Snap** uit wanneer u vrije cursorbeweging nodig heeft of alleen naar geometrie wilt snappen.
