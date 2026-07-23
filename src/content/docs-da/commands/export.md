---
title: Export — Download Tegninger som DXF eller JSON i KulmanLab CAD
description: Export-kommandoen downloader den aktuelle tegning som en DXF- eller JSON (native) fil. JSON bevarer alle entiteter inklusive mål og ledere; DXF er kompatibel med andre CAD-værktøjer.
keywords: [eksportér DXF, eksportér CAD-fil, download DXF browser, gem DXF online, eksportér JSON CAD, KulmanLab eksport, CAD-fil download, DXF-eksport, gem tegning til fil, DXF-download]
group: file
order: 5
---

# Export

Kommandoen **Export** downloader den aktuelle tegning til dit filsystem. To formater er tilgængelige: **DXF** til kompatibilitet med andre CAD-værktøjer og **JSON** til gemning med fuld nøjagtighed inden for KulmanLab CAD.

## Sådan eksporterer du

1. Klik på **Export**-knappen (downloadikon) i værktøjslinjen i File-panelet.
2. **Export Manager**-vinduet åbnes.
3. Klik et formatkort for at vælge format — **JSON** eller **DXF**.
4. Klik **Export**-knappen. Filen downloades automatisk til din standard downloadmappe.

## Vælge et format

| Format | Filtype | Bedst til | Begrænsninger |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Gemme arbejde for at genåbne i KulmanLab CAD | Ikke kompatibel med andre CAD-værktøjer |
| **DXF** | `.dxf` | Deling med FreeCAD, LibreCAD osv. | Mål og ledere eksporteres ikke |

**Hvornår du bør bruge JSON:** når som helst du vil gemme en fuldstændig kopi af dit arbejde. JSON er KulmanLabs native format og bevarer hver entitet nøjagtigt — inklusive mål, ledere og alle lagdata.

**Hvornår du bør bruge DXF:** når du skal overdrage tegningen til nogen, der bruger en anden CAD-applikation. Den eksporterede fil bruger AC1012 DXF-format og kan åbnes i de fleste DXF-kompatible værktøjer.

## Hvad der eksporteres pr. format

### JSON-eksport

Alle entitetstyper inkluderes:

- Linjer, cirkler, buer, ellipser, polylinjer, splines, tekst
- Mål (lineær, justeret, kædet, radius, diameter)
- Multileaders
- Lagdefinitioner og linetype-tabeller

### DXF-eksport

Kun geometri-entiteter inkluderes:

- Linjer, cirkler, buer, ellipser, polylinjer (eksporteret som `LWPOLYLINE`), splines, tekst
- Lagdefinitioner og linetype-tabeller

**Ikke inkluderet i DXF:** dimension-entiteter og multileaders. Disse bruger KulmanLab-specifikke datastrukturer, der ikke kan repræsenteres troværdigt i standard-DXF. Hvis din tegning har annotationer, brug JSON eller [Print](../print/) til at fange dem visuelt.

## Navn på eksporteret fil

Den downloadede fil får navnet fra den aktuelle tegnefil (f.eks. `myplan_May22_14:30:00.json`). Filtypen ændres til at matche det valgte format.

## Forskellen mellem Export og Print

| Funktion | Export | Print |
|---------|--------|-------|
| Output | Vektor-kildefil (.dxf / .json) | Rasterbillede (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andre værktøjer | Ja (DXF) | Nej |
| Bevarer lag og linetyper | Ja | Nej (gengivet fladt) |
| Fanger mål og ledere | Kun JSON | Ja |

Brug **Export**, når du har brug for en redigerbar fil. Brug [Print](../print/), når du har brug for et visuelt øjebliksbillede.

## Relaterede kommandoer

- [Import](../import/) — åbn en DXF- eller JSON-fil
- [Print](../print/) — eksportér lærredet som et PNG-, JPEG-, WebP- eller PDF-billede
- [Files](../files/) — gennemse tegninger gemt i browserlagring
