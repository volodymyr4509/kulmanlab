---
sidebar_position: 5
title: Export — Ladda ner ritningar som DXF eller JSON i KulmanLab CAD
description: Export-kommandot laddar ner den aktuella ritningen som en DXF- () eller JSON-fil (nativ). JSON bevarar alla entiteter inklusive dimensioner och ledare; DXF är kompatibelt med  och andra CAD-verktyg.
keywords: [exportera DXF, exportera CAD-fil, ladda ner DXF webbläsare, spara DXF online, exportera JSON CAD, KulmanLab export, CAD-filnedladdning, DXF-export, spara ritning till fil, DXF-nedladdning]
---

# Export

**Export**-kommandot laddar ner den aktuella ritningen till ditt filsystem. Två format är tillgängliga: **DXF** för kompatibilitet med andra CAD-verktyg och **JSON** för sparningar med full trohet inom KulmanLab CAD.

## Så här exporterar du

1. Klicka på verktygsfältsknappen **Export** (nedladdningsikon) i File-panelen.
2. Popup-fönstret **Export-hanteraren** öppnas.
3. Klicka på ett formatkort för att välja format — **JSON** eller **DXF**.
4. Klicka på knappen **Export**. Filen laddas ner automatiskt till din standardmapp för nedladdningar.

## Välja ett format

| Format | Filändelse | Bäst för | Begränsningar |
|--------|-----------|----------|-------------|
| **JSON** *(nativt)* | `.json` | Spara arbete för att öppna igen i KulmanLab CAD | Inte kompatibelt med andra CAD-verktyg |
| **DXF** | `.dxf` | Dela med , FreeCAD, LibreCAD, etc. | Dimensioner och ledare exporteras inte |

**När du ska använda JSON:** när du vill spara en fullständig kopia av ditt arbete. JSON är KulmanLabs nativa format och bevarar varje entitet exakt — inklusive dimensioner, ledare och all lagerdata.

**När du ska använda DXF:** när du behöver lämna över ritningen till någon som använder ett annat CAD-program. Den exporterade filen använder DXF-formatet AC1012 och kan öppnas i de flesta DXF-kompatibla verktyg.

## Vad som exporteras per format

### JSON-export

Alla entitetstyper inkluderas:

- Linjer, cirklar, bågar, ellipser, polylinjer, splines, text
- Dimensioner (linjär, justerad, fortsatt, radie, diameter)
- Multileaders
- Lagerdefinitioner och linjetypstabeller

### DXF-export

Endast geometrientiteter inkluderas:

- Linjer, cirklar, bågar, ellipser, polylinjer (exporteras som `LWPOLYLINE`), splines, text
- Lagerdefinitioner och linjetypstabeller

**Ingår inte i DXF:** dimensionsentiteter och multileaders. Dessa använder KulmanLab-specifika datastrukturer som inte kan representeras troget i standard-DXF. Om din ritning har annoteringar, använd JSON eller [Print](../print/) för att fånga dem visuellt.

## Exporterat filnamn

Den nedladdade filen namnges efter den aktuella ritningsfilen (t.ex. `myplan_May22_14:30:00.json`). Filändelsen ändras för att matcha det valda formatet.

## Skillnaden mellan Export och Print

| Funktion | Export | Print |
|---------|--------|-------|
| Utdata | Vektorkällfil (.dxf / .json) | Rasterbild (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andra verktyg | Ja (DXF) | Nej |
| Bevarar lager och linjetyper | Ja | Nej (renderas platt) |
| Fångar dimensioner och ledare | Endast JSON | Ja |

Använd **Export** när du behöver en redigerbar fil. Använd [Print](../print/) när du behöver en visuell ögonblicksbild.

## Relaterade kommandon

- [Import](../import/) — öppna en DXF- eller JSON-fil
- [Print](../print/) — exportera ritytan som en PNG-, JPEG-, WebP- eller PDF-bild
- [Files](../files/) — bläddra bland ritningar sparade i webbläsarens lagring
