---
title: Export Manager — Ladda ner ritningar som DXF eller JSON
description: Ladda ned ritningen som DXF eller JSON och bocka för per objekttyp vad som följer med. Båda bär geometri, text, mått, hänvisningar och skrafferingar.
keywords: [exportera DXF, exportera CAD-fil, ladda ner DXF webbläsare, spara DXF online, exportera JSON CAD, KulmanLab export, ladda ner CAD-fil, DXF-export, spara ritning som fil, DXF-nedladdning]
group: file
order: 6
---

# Export Manager

Kommandot `exportmanager` laddar ned den aktuella ritningen till ditt filsystem. Två format står sida vid sida — **DXF** för kompatibilitet med andra CAD-verktyg och **JSON** för fullständigt trogna sparningar inuti KulmanLab CAD — och vart och ett har sin egen checklista över vad som ska in i filen.

## Så exporterar du

1. Klicka på verktygsfältsknappen **Export** (nedladdningsikon) i filpanelen, eller skriv `exportmanager` i terminalen.
2. Popup-fönstret **Export Manager** öppnas med två kolumner, **JSON** och **DXF**, som var för sig listar ritningens objekttyper med kryssruta och antal.
3. Bocka ur det du vill utelämna. Allt är förbockat från början.
4. Klicka på **Export JSON** eller **Export DXF**. Filen laddas ned till din standardmapp och fönstret stängs.

Tryck på `Escape` för att stänga popup-fönstret utan att exportera.

## Välja vad som exporteras

Båda kolumnerna listar samma objekttyper, var och en med antalet i ritningen:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Allt är förbockat när fönstret öppnas, så exporterar du direkt får du hela ritningen. Bocka ur en typ för att hålla den utanför just den filen.

- **De två kolumnerna är oberoende.** Att bocka ur Hatches under DXF påverkar inte vad **Export JSON** ger — varje format behåller sitt eget val.
- **En typ du inte har är nedtonad.** En rad med antalet `0` går inte att bocka i, så listan fungerar också som en snabb inventering av ritningen.
- **Antalen är en ögonblicksbild.** De tas när fönstret öppnas och uppdateras inte om ritningen ändras bakom. Stäng och öppna igen för att förnya dem.
- **Ingenting raderas.** Urbockningen formar bara den exporterade filen; själva ritningen lämnas orörd.

**Linear Dimensions** täcker linjära, riktade och fortsatta mått: en enda objekttyp skapad av tre olika kommandon. Radie, diameter och vinkel har var sin rad.

För en skärfil bockar du ur Text, de fyra måttraderna, Leaders och Hatches och klickar på **Export DXF** — se [att förbereda en DXF för laserskärning](/sv/blog/prepare-dxf-for-laser-cutting/).

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
- Mått (linjär, justerad, fortsatt, radie, diameter, vinkel)
- Leaders (multiledare)
- Hatches, inklusive deras mönster, skala, vinkel och ursprung
- Layers och Linetypes

### DXF-export

Varje entitetstyp ingår:

- Lines, Circles, Arcs, Ellipses, Polylines (exporterade som `LWPOLYLINE`), Splines
- Text
- Mått (linjär, justerad, fortsatt, radie, diameter, vinkel)
- Leaders (multiledare)
- Hatches, inklusive deras mönster, skala, vinkel och ursprung
- Layers och Linetypes

Filen skrivs som AC1032-DXF, så en ritning som exporterats från KulmanLab öppnas med sina anteckningar i behåll i andra DXF-kunniga verktyg i stället för att komma fram som ren geometri.

Vad varje mottagande program sedan gör med den varierar fortfarande — DXF-stödet skiljer sig mellan verktyg, och ett äldre kan förbise objekt som ett nyare läser. Måste en ritning se likadan ut överallt fångar [Print Manager](../print-manager/) den i stället som PDF eller bild.

## Namn på exporterad fil

Den nedladdade filen namnges efter den aktuella ritningsfilen (t.ex. `myplan.json`). Filändelsen ändras för att matcha det valda formatet. En ritning som aldrig fått ett namn exporteras som `drawing.dxf` eller `drawing.json`.

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
