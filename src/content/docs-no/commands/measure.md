---
title: "Measure-kommando — les av avstander, lengder, vinkler og arealer rundt markøren"
description: "Measure-kommandoen leser av tegningen rundt markøren mens du flytter den — avstanden til nærmeste geometri, lengden eller radiusen til det den møter, vinkelen der linjer møtes — og gir med et klikk arealet og omkretsen til et lukket område. Ingenting i tegningen endres."
keywords: ["CAD målekommando", "mål areal og omkrets CAD", "live avstandsmåling CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Kommandoen `measure` leser av tegningen rundt markøren mens du flytter den, uten punkter å velge: hvor langt det er til nærmeste geometri, hvor lang eller rund den geometrien er, og vinkelen der linjer møtes. Et klikk inne i et lukket område gir arealet og omkretsen. Ingenting i tegningen endres.

## Måling

1. Skriv `measure` i terminalen eller klikk på **Measure**, den første knappen i panelet Measure.
2. **Flytt markøren.** Herfra ser kommandoen mot høyre, opp, mot venstre og ned etter nærmeste geometri og viser hva den finner.
3. **Klikk inne i et lukket område** for å fylle det og lese av areal og omkrets — se nedenfor.
4. Trykk **Enter**, **Space** eller **Escape** for å avslutte.

## Hva den viser

- **Avstand på tvers** — fra det markøren møter på den ene siden til det den møter på den andre, vannrett og loddrett. Hvis bare én side har noe, går avstanden fra markøren. Hver ende som møter noe har en liten utfylt prikk; en ende ved markøren har ingen.
- **Lengde eller radius** — hvert objekt kommandoen når, fremheves med lengden sin, eller radiusen når det er en del av en sirkel.
- **Vinkel** — der to nådde rette linjer møtes, skrives vinkelen mellom dem; en rett vinkel merkes med en liten firkant.

Lengder og vinkler skrives slik gjeldende [DimensionStyle](../dimension-style/) skriver dem, i dens enhetsformat og presisjon.

## Areal og omkrets

Et klikk inne i et lukket område fyller det og legger arealet og omkretsen i forespørselen og historikken. Området finnes slik [Hatch](../hatch/) finner et: separate linjer som møtes ende mot ende, lukker et område akkurat som en polylinje, og alt lukket innenfor utelates som en øy — kanten teller med i omkretsen og arealet trekkes fra.

Arealet er et vanlig tall i kvadrat-tegningsenheter — fot og tommer kan ikke skrive et — mens omkretsen følger enhetsformatet. Klikk inne i et annet område for å måle det. Hvis ingenting lukket omgir punktet, sier terminalen hvorfor, med samme meldinger som Hatch: no boundary found, point is not enclosed eller boundary is open.

## Greit å vite

- Den måler mot linjer, buer, sirkler, ellipser, polylinjer og splines; lengder og arealer er nøyaktige, også for ellipser og splines.
- Objekter på frosne lag ignoreres; objekter på låste lag måles.
- I en stor tegning ser den bare på det som er nær markøren, så den holder seg rask.

---

*Relatert: [Distance](../distance/), [Angle](../angle/) og [Area](../area/) for målinger mellom punkter du velger, og [Hatch](../hatch/) for hvordan lukkede områder finnes.*
