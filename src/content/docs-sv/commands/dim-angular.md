---
sidebar_position: 9
title: Dimension Angular — Mät vinklar mellan linjer, bågar och cirklar i KulmanLab CAD
description: DimensionAngular-kommandot placerar en vinkelmåttannotation på linjer, bågar eller cirklar. Stödjer tvålinjevinkel, bågspann och cirkelsektorlägen.
keywords: [vinkelmått CAD, vinkelmått, mät vinkel mellan linjer, DimensionAngular, bågmått, vinkelannotation, CAD vinkelmarkering, kulmanlab vinkelmått]
---

# Dimension Angular

`DimensionAngular`-kommandot placerar en **vinkelmått**-bågannotation på ritningen. Det mäter och märker vinkeln mellan två linjer, spannet av en båge eller en sektor av en cirkel.

## Hur man aktiverar

Klicka på **Dimension Angular**-knappen i verktygsfältet i Markup-panelen, eller skriv `DimensionAngular` i terminalen.

## Tre inmatningslägen

Det första klicket avgör vilket läge som används:

### Två linjer

1. **Klicka på den första linjen.** Markörens position avgör vilken sida av linjen som används.
2. **Klicka på den andra linjen.** De två linjerna måste skära varandra (skärningen beräknas automatiskt; den behöver inte vara synlig på skärmen).
3. **Klicka för att placera** måttbågen. Flytta markören för att välja radien och vilken vinkelsektor som märks — annotationen följer markören till vilken sida av hörnpunkten du än befinner dig på.

Parallella linjer kan inte bilda ett vinkelmått; kommandot ignorerar det andra klicket om linjerna inte skär varandra.

### Båge

1. **Klicka på en båge.** Måttet skapas omedelbart från bågens startvinkel till dess slutvinkel, med bågens centrum som hörnpunkt.
2. **Klicka för att placera** måttbågen vid önskad radie.

### Cirkel

1. **Klicka på en cirkel.** Den första vinkeländpunkten fäster mot den närmaste punkten på cirkeln.
2. **Klicka på en andra punkt** på cirkeln för att definiera den andra vinkeländpunkten.
3. **Klicka för att placera** måttbågen.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Escape` | Avbryt och återgå till första valet |

## Beteendedetaljer

- Måttbågen ritas alltid på den sida av hörnpunkten där du placerar den — flytta markören över hörnpunkten för att växla till den supplementära vinkeln.
- Den uppmätta vinkeln visas i grader och uppdateras live medan du flyttar markören under placeringen.
- Den resulterande annotationen är en fullständig `DimensionAngular`-entitet lagrad på det aktuella lagret. Dess utseendeegenskaper (pilstorlek, texthöjd, hjälplinjelängd) kan justeras i Properties-panelen.
- Vinkelmått ingår i JSON-export men stöds inte av DXF-exportören.

## Redigera etiketten — enkelt läge

**Dubbelklicka** på ett placerat vinkelmått för att öppna textredigeraren i **enkelt** läge. Redigeraren är förifylld med det aktuella visade värdet så att du kan placera markören och redigera det direkt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Tillämpas på **hela** etiketten samtidigt |
| Teckenspecifik formatering | Stöds inte |
| `Enter` | Bekräftar värdet och stänger redigeraren |
| Flera rader | Stöds inte |

Se [Textredigerare — enkelt läge](../interface/text-editor#simple-mode) för fullständig referens.

## Relaterade kommandon

- [Dimension Linear](../dim-linear/) — horisontellt eller vertikalt mått
- [Dimension Aligned](../dim-aligned/) — mått inriktat mot två punkter
- [Dimension Radius](../dim-radius/) — radiemått för bågar och cirklar
- [Dimension Diameter](../dim-diameter/) — diametermått för cirklar
