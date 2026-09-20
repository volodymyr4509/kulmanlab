---
title: Explode-kommandot — Dela upp en Polyline i Line- och Arc-entiteter
description: Explode-kommandot delar upp en polylinje på plats i dess enskilda Line- och Arc-entiteter, en per segment. Varje del behåller linjetjocklek, färg, lager och linjetyp från källpolylinjen. Fungerar endast på Polyline-entiteter.
keywords: [CAD explode-kommando, explodera polylinje CAD, dela upp polylinje i linjer, konvertera polylinje till line och arc, kulmanlab]
group: edit
order: 16
---

# Explode

`DelaUpp`-kommandot delar upp en [Polyline](../polyline/) i dess enskilda [Line](../line/)- och [Arc](../arc/)-entiteter — en per segment, exakt där polylinjens egna hörnpunkter låg. Delarna ersätter polylinjen på plats och behåller dess linjetjocklek, färg, lager och linjetyp.

Explode fungerar endast på **Polyline**-entiteter.

## Använda explode

Två sätt att köra det, samma mönster som [Delete](../delete/):

**Markera först, sedan explodera** — den snabbaste vägen:

1. Markera en eller flera polylinjer på ritytan.
2. Skriv `DelaUpp` i terminalen, eller klicka på knappen **Explode** i Edit-panelen.

De markerade polylinjerna exploderas omedelbart — inget separat bekräftelsesteg, eftersom något redan är markerat.

**Aktivera, sedan markera**:

1. Skriv `DelaUpp` eller klicka på verktygsfältsknappen utan att något är markerat.
2. **Markera polylinjer** — klicka för att växla, eller dra för att markera efter område.
3. Tryck på **Enter** eller **Mellanslag** för att bekräfta och explodera de markerade polylinjerna.

Endast polylinjer plockas upp under markeringen — att klicka på en Line, Circle eller någon annan entitet gör ingenting, och en områdesdragning ignorerar allt utom polylinjerna inuti eller som korsar rutan.

## Vad som kommer ut

Varje segment av polylinjen blir sin egen entitet:

- Ett **rakt segment** blir en **Line**.
- Ett **bågsegment** (från Polylines [Arc-alternativ](../polyline/)) blir en **Arc**, som exakt matchar den ursprungliga kurvans centrum, radie och svep.

Varje resulterande Line och Arc ärver källpolylinjens **linjetjocklek, färg, lager, linjetyp och linjetypsskala** — inget ändras i hur geometrin ser ut, bara att det nu är flera oberoende entiteter istället för en sammanhängande polylinje.

Explosionen kan ångras i ett enda steg med [Undo](../undo/), precis som all annan redigering.

## Markering under kommandot

| Metod | Beteende |
|-------|----------|
| **Klick** | Växlar polylinjen under muspekaren in/ur markeringen; att klicka på en entitet som inte är en polylinje gör ingenting |
| **Dra höger** (strikt) | Markerar endast polylinjer helt inom rutan |
| **Dra vänster** (korsande) | Markerar polylinjer som korsar rutans gräns |
| **Enter** / **Mellanslag** | Bekräftar och exploderar de markerade polylinjerna |

## Entiteter som stöds

| Entitet | Stöds |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Line, Arc, Circle, Ellipse | Nej — inget att explodera |
| Text, Spline, Dimension, Leader, Hatch | Nej |
