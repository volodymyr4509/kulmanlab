---
title: "Measure-kommando — aflæs afstande, længder, vinkler og arealer omkring markøren"
description: "Measure-kommandoen aflæser tegningen omkring markøren, mens du flytter den — afstanden til nærmeste geometri, længden eller radius af det, den møder, vinklen hvor linjer mødes — og giver et lukket områdes areal og omkreds med et klik. Intet i tegningen ændres."
keywords: ["CAD målekommando", "mål areal og omkreds CAD", "live afstandsmåling CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Kommandoen `measure` aflæser tegningen omkring markøren, mens du flytter den, uden punkter at vælge: hvor langt der er på tværs til nærmeste geometri, hvor lang eller rund den geometri er, og vinklen hvor linjer mødes. Et klik inden i et lukket område giver dets areal og omkreds. Intet i tegningen ændres.

## Måling

1. Skriv `measure` i terminalen eller klik på **Measure**, den første knap i panelet Measure.
2. **Flyt markøren.** Herfra kigger kommandoen mod højre, op, mod venstre og ned efter nærmeste geometri og viser, hvad den finder.
3. **Klik inden i et lukket område** for at fylde det og aflæse dets areal og omkreds — se nedenfor.
4. Tryk **Enter**, **Space** eller **Escape** for at afslutte.

## Hvad den viser

- **Afstand på tværs** — fra det, markøren møder på den ene side, til det, den møder på den anden, vandret og lodret. Hvis kun den ene side har noget, løber afstanden fra markøren. Hver ende, der møder noget, har en lille udfyldt prik; en ende ved markøren har ingen.
- **Længde eller radius** — hvert objekt, kommandoen når, fremhæves med sin længde, eller sin radius, når det er en del af en cirkel.
- **Vinkel** — hvor to nåede rette linjer mødes, skrives vinklen mellem dem; en ret vinkel markeres med en lille firkant.

Længder og vinkler skrives, som den aktuelle [DimensionStyle](../dimension-style/) skriver dem, i dens enhedsformat og præcision.

## Areal og omkreds

Et klik inden i et lukket område fylder det og lægger dets areal og omkreds i prompten og historikken. Området findes, som [Hatch](../hatch/) finder et: separate linjer, der mødes ende mod ende, lukker et område ligesom en polylinje, og alt lukket inden i det udelades som en ø — dens kant tæller med i omkredsen, og dens areal trækkes fra.

Arealet er et almindeligt tal i kvadrat-tegningsenheder — fod og tommer kan ikke skrive et — mens omkredsen følger enhedsformatet. Klik inden i et andet område for at måle det. Hvis intet lukket omgiver punktet, siger terminalen hvorfor, med samme beskeder som Hatch: no boundary found, point is not enclosed eller boundary is open.

## Godt at vide

- Den måler mod linjer, buer, cirkler, ellipser, polylinjer og splines; længder og arealer er nøjagtige, også for ellipser og splines.
- Objekter på frosne lag ignoreres; objekter på låste lag måles.
- I en stor tegning ser den kun på det, der er nær markøren, så den forbliver hurtig.

---

*Relateret: [Distance](../distance/), [Angle](../angle/) og [Area](../area/) til målinger mellem punkter, du vælger, og [Hatch](../hatch/) til hvordan lukkede områder findes.*
