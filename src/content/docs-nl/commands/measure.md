---
title: "Measure-opdracht — afstanden, lengtes, hoeken en oppervlakten rond de cursor aflezen"
description: "De opdracht Measure leest de tekening rond de cursor af terwijl u die beweegt — de afstand tot de dichtstbijzijnde geometrie, de lengte of straal van wat hij tegenkomt, de hoek waar lijnen samenkomen — en geeft met een klik de oppervlakte en omtrek van een gesloten gebied. Er verandert niets in de tekening."
keywords: ["CAD meetopdracht", "oppervlakte en omtrek meten CAD", "live afstandsmeting CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

De opdracht `Meten` leest de tekening rond de cursor af terwijl u die beweegt, zonder punten te kiezen: hoe ver de dichtstbijzijnde geometrie is, hoe lang of rond die geometrie is en de hoek waar lijnen samenkomen. Een klik in een gesloten gebied geeft de oppervlakte en omtrek. Er verandert niets in de tekening.

## Meten

1. Typ `Meten` in de terminal of klik op **Measure**, de eerste knop in het paneel Measure.
2. **Beweeg de cursor.** Vanaf daar kijkt de opdracht naar rechts, omhoog, naar links en omlaag naar de dichtstbijzijnde geometrie en toont wat hij vindt.
3. **Klik in een gesloten gebied** om het te vullen en de oppervlakte en omtrek af te lezen — zie hieronder.
4. Druk op **Enter**, **Space** of **Escape** om te stoppen.

## Wat het toont

- **Afstand dwars** — van wat de cursor aan de ene kant tegenkomt tot wat hij aan de andere kant tegenkomt, horizontaal en verticaal. Heeft maar één kant iets, dan loopt de afstand vanaf de cursor. Elk uiteinde dat iets raakt heeft een kleine gevulde stip; een uiteinde bij de cursor niet.
- **Lengte of straal** — elk object dat de opdracht bereikt wordt uitgelicht met zijn lengte, of zijn straal wanneer het deel van een cirkel is.
- **Hoek** — waar twee bereikte rechte lijnen samenkomen, wordt de hoek ertussen geschreven; een rechte hoek wordt gemarkeerd met een klein vierkantje.

Lengtes en hoeken worden geschreven zoals de huidige [DimensionStyle](../dimension-style/) ze schrijft, in zijn eenheidnotatie en nauwkeurigheid.

## Oppervlakte en omtrek

Een klik in een gesloten gebied vult het en zet de oppervlakte en omtrek in de prompt en de geschiedenis. Het gebied wordt gevonden zoals [Hatch](../hatch/) het vindt: losse lijnen die uiteinde aan uiteinde samenkomen sluiten een gebied net als een polylijn, en alles wat erbinnen gesloten is blijft als eiland buiten beschouwing — zijn rand telt mee in de omtrek en zijn oppervlakte wordt afgetrokken.

De oppervlakte is een gewoon getal in vierkante tekeneenheden — voet en inch kunnen er geen schrijven — terwijl de omtrek de eenheidnotatie volgt. Klik in een ander gebied om het te meten. Omsluit niets gesloten het punt, dan zegt de terminal waarom, met dezelfde meldingen als Hatch: no boundary found, point is not enclosed of boundary is open.

## Goed om te weten

- Het meet tegen lijnen, bogen, cirkels, ellipsen, polylijnen en splines; lengtes en oppervlakten zijn exact, ook voor ellipsen en splines.
- Objecten op bevroren lagen worden genegeerd; objecten op vergrendelde lagen worden gemeten.
- In een grote tekening kijkt het alleen naar wat dicht bij de cursor ligt, zodat het vlot blijft.

---

*Gerelateerd: [Distance](../distance/), [Angle](../angle/) en [Area](../area/) voor metingen tussen punten die u kiest, en [Hatch](../hatch/) voor hoe gesloten gebieden worden gevonden.*
