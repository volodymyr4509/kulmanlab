---
title: "Explode-kommando — dela upp en polylinje eller ett block i sina delar"
description: "Explode-kommandot delar upp en polylinje i dess Line- och Arc-entiteter, eller en blockreferens i de entiteter dess block ritar, på plats. Delarna ser exakt ut som originalet."
keywords: [CAD explode-kommando, explodera polylinje CAD, dela upp polylinje i linjer, konvertera polylinje till line och arc, kulmanlab]
group: edit
order: 19
---

# Explode

`DelaUpp`-kommandot delar upp en [Polyline](../polyline/) i dess enskilda [Line](../line/)- och [Arc](../arc/)-entiteter — en per segment, exakt där polylinjens egna hörnpunkter låg. Delarna ersätter polylinjen på plats och behåller dess linjetjocklek, färg, lager och linjetyp.

Explode fungerar på **Polyline**-entiteter och **blockreferenser**.

## Använda explode

Två sätt att köra det, samma mönster som [Delete](../delete/):

**Markera först, sedan explodera** — den snabbaste vägen:

1. Markera en eller flera polylinjer på ritytan.
2. Skriv `DelaUpp` i terminalen, eller välj **Explode** i rullgardinsmenyn i panelen Edit.

De markerade polylinjerna exploderas omedelbart — inget separat bekräftelsesteg, eftersom något redan är markerat.

**Aktivera, sedan markera**:

1. Skriv `DelaUpp` eller välj **Explode** i rullgardinsmenyn när inget är markerat.
2. **Markera polylinjer eller blockreferenser** — klicka för att växla, eller dra för att markera ett område.
3. Tryck på **Enter** eller **Mellanslag** för att bekräfta och explodera de markerade polylinjerna.

Under markeringen tas bara polylinjer och blockreferenser med — ett klick på en Line, Circle eller någon annan entitet gör ingenting, och en områdesdragning ignorerar allt annat inuti eller som korsar den.

## Vad som kommer ut

Varje segment av polylinjen blir sin egen entitet:

- Ett **rakt segment** blir en **Line**.
- Ett **bågsegment** (från Polylines [Arc-alternativ](../polyline/)) blir en **Arc**, som exakt matchar den ursprungliga kurvans centrum, radie och svep.

Varje resulterande Line och Arc ärver källpolylinjens **linjetjocklek, färg, lager, linjetyp och linjetypsskala** — inget ändras i hur geometrin ser ut, bara att det nu är flera oberoende entiteter istället för en sammanhängande polylinje.

En **blockreferens** blir de entiteter dess block ritar, placerade där referensen visade dem. Entiteter som blocket håller dolda — ett dynamiskt blocks andra tillstånd — utelämnas; varje attribut blir en vanlig Text med sitt värde; delar ritade ByBlock tar referensens färg, och delar på lager 0 dess lager. Ett nästlat block kommer ut som en egen blockreferens, som du i sin tur kan dela upp. En referens skalad olika i X och Y tas inte med, eftersom dess cirklar skulle behöva bli ellipser.

Explosionen kan ångras i ett enda steg med [Undo](../undo/), precis som all annan redigering.

## Markering under kommandot

| Metod | Beteende |
|-------|----------|
| **Klick** | Lägger till eller tar bort polylinjen eller blockreferensen under markören ur markeringen; ett klick på en annan entitet gör ingenting |
| **Dra åt höger** (strikt) | Markerar bara polylinjer och blockreferenser helt inuti rutan |
| **Dra åt vänster** (korsande) | Markerar polylinjer och blockreferenser som skär rutans kant |
| **Enter** / **Space** | Bekräftar och delar upp markeringen |

## Entiteter som stöds

| Entitet | Stöds |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Blockreferens | Ja, om den inte är skalad olika i X och Y |
| Line, Arc, Circle, Ellipse | Nej — inget att explodera |
| Text, Spline, Dimension, Leader, Hatch | Nej |
