---
title: Export Manager — Ladda ner ritningar som DXF eller JSON
description: Ladda ned ritningen som DXF eller JSON. Båda bär varje objekttyp — geometri, text, mått, hänvisningar, skrafferingar — tillsammans med lager och linjetyper.
keywords: [exportera DXF, exportera CAD-fil, ladda ner DXF webbläsare, spara DXF online, exportera JSON CAD, KulmanLab export, ladda ner CAD-fil, DXF-export, spara ritning som fil, DXF-nedladdning]
group: file
order: 6
---

# Export Manager

Kommandot `exportmanager` laddar ner den aktuella ritningen till ditt filsystem. Två format är tillgängliga, visade som kort sida vid sida: **DXF** för kompatibilitet med andra CAD-verktyg och **JSON** för lagring med full trohet inom KulmanLab CAD — varje kort listar exakt vilka entitetstyper det formatet innehåller.

## Så exporterar du

1. Klicka på verktygsfältsknappen **Export** (nedladdningsikon) i filpanelen, eller skriv `exportmanager` i terminalen.
2. Popup-fönstret **Export Manager** öppnas och visar JSON- och DXF-korten sida vid sida, vart och ett med en lista över vad som exporteras.
3. Klicka på ett kort för att välja format — **JSON** eller **DXF**.
4. Klicka på knappen **Export \<FORMAT\>**. Filen laddas automatiskt ner till din standardmapp för nedladdningar.

Tryck på `Escape` för att stänga popup-fönstret utan att exportera.

## Välja ett format

| Format | Filändelse | Bäst för | Begränsningar |
|--------|------------|----------|----------------|
| **JSON** *(nativ)* | `.json` | Spara arbete för att öppna igen i KulmanLab CAD | Inte kompatibelt med andra CAD-verktyg |
| **DXF** | `.dxf` | Delning med FreeCAD, LibreCAD, osv. | Hur mycket som överlever beror på det mottagande programmet |

**När du ska använda JSON:** när du vill spara en fullständig kopia av ditt arbete. JSON är KulmanLabs nativa format och bevarar varje entitet exakt — inklusive mått, ledare, hatchmönster och all lagerdata.

**När du ska använda DXF:** när du behöver lämna över ritningen till någon som använder en annan CAD-applikation. Den exporterade filen använder AC1032 DXF-format och kan öppnas i de flesta DXF-kompatibla verktyg.

## Vad som exporteras per format

### JSON-export

Varje entitetstyp ingår:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Mått (linjär, justerad, fortsatt, radie, diameter)
- Leaders (multiledare)
- Hatches, inklusive deras mönster, skala, vinkel och ursprung
- Layers och Linetypes

### DXF-export

Varje entitetstyp ingår:

- Lines, Circles, Arcs, Ellipses, Polylines (exporterade som `LWPOLYLINE`), Splines
- Text
- Mått (linjär, justerad, fortsatt, radie, diameter)
- Leaders (multiledare)
- Hatches, inklusive deras mönster, skala, vinkel och ursprung
- Layers och Linetypes

Filen skrivs som AC1032-DXF, så en ritning som exporterats från KulmanLab öppnas med sina anteckningar i behåll i andra DXF-kunniga verktyg i stället för att komma fram som ren geometri.

Vad varje mottagande program sedan gör med den varierar fortfarande — DXF-stödet skiljer sig mellan verktyg, och ett äldre kan förbise objekt som ett nyare läser. Måste en ritning se likadan ut överallt fångar [Print Manager](../print-manager/) den i stället som PDF eller bild.

## Namn på exporterad fil

Den nedladdade filen namnges efter den aktuella ritningsfilen (t.ex. `myplan.json`). Filändelsen ändras för att matcha det valda formatet.

## Skillnad mellan Export Manager och Print Manager

| Funktion | Export Manager | Print Manager |
|----------|-----------------|-----------------|
| Utdata | Vektorkällfil (.dxf / .json) | Rasterbild (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andra verktyg | Ja (DXF) | Nej |
| Bevarar layers & linetypes | Ja | Nej (renderas platt) |
| Fångar mått & leaders | Ja | Ja |

Använd **Export Manager** när du behöver en redigerbar fil. Använd [Print Manager](../print-manager/) när du behöver en visuell ögonblicksbild.

## Relaterade kommandon

- [Import](../import/) — öppna en DXF- eller JSON-fil
- [Print Manager](../print-manager/) — exportera ritytan som en PNG-, JPEG-, WebP- eller PDF-bild
- [File Manager](../file-manager/) — bläddra bland ritningar sparade i webbläsarlagring
