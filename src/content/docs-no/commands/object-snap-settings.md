---
title: "ObjectSnapSettings-kommando — Alle innstillinger i kontrollinjen"
description: "ObjectSnapSettings-kommandoen åpner ett vindu med alle kontrollinjens innstillinger — festing, tangentfesting, vinkelsporing, nåler, inntastet inndata, lasso og visning — hver forklart ved siden av listen med en liten tegning."
keywords: ["innstillinger for objektfesting CAD", "tangentfesting CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Kommandoen `Festeinnstillinger` åpner ett vindu som samler alle kontrollinjens innstillinger. Hver innstilling forklares ved siden av listen, med en liten tegning. Åpne det med tannhjulknappen i kontrollinjen, eller skriv `Festeinnstillinger`. Å endre en innstilling her er det samme som å slå knappen i linjen av eller på.

## Innstillingene

### Hvor markøren lander

| Kontrollinje | Hva den gjør |
|---|---|
| `Snap` | Markøren hopper til nærmeste rutenettpunkt, slik at punktene du velger havner på runde koordinater. Festing til et objekt nær markøren går fortsatt foran. Rutenettets steg følger zoomen. |
| `TANG` | Mens en linje tegnes fra et punkt, før markøren dit den akkurat ville berøre en sirkel, bue, ellipse eller spline, så fester den seg der. Virker i Linje, Polylinje og andre kommandoer, og når enden av en linje eller polylinje dras. |

### Hjelpelinjer under tegning

| Kontrollinje | Hva den gjør |
|---|---|
| `ANGL` | Når markøren kommer nær en av disse vinklene fra siste punkt, låses den i den retningen, vist som en stiplet stråle. Mens den er låst, skriv en lengde og trykk Enter for å sette punktet så langt ute. |
| `Pins` | La markøren hvile et øyeblikk på et festepunkt for å nåle det. Et nålet punkt sender ut vannrette og loddrette hjelpelinjer, og markøren fester seg til dem og der de krysser. |
| `Dist` | Det sist nålede punktet blir startpunkt: når markøren låses på en vinkel fra nålen, skriv en lengde og trykk Enter for å sette punktet så langt fra den. Krever vektornåler. |

### Inndata og utvalg

| Kontrollinje | Hva den gjør |
|---|---|
| `Rel` | Et innskrevet X,Y-punkt måles fra det sist valgte punktet, som om det begynte med @. Tilbake fjerner @ for et punkt i tegningens egne koordinater. Avslått skriver du selv @ for en forskyvning. |
| `Lasso` | Trykk og dra på tomt område for å tegne en fri løkke rundt det du vil ha, i stedet for et rektangel. Det løkken omfatter, blir valgt. |

### Visning

| Kontrollinje | Hva den gjør |
|---|---|
| `Grid` | Viser bakgrunnsrutenettet. Avstanden endres når du zoomer. Å slå det av stopper ikke festing til rutenettet. |
| `LWT` | Tegner linjer med sin linjetykkelse, slik at tyngre linjer ser tykkere ut. Avslått tegnes hver linje tynt, noe som kan gjøre en tett tegning lettere å lese. |

**ANGL** har en egen rad for trinnet: velg 10°, 20°, 30°, 45° eller 90°, eller velg **Egendefinert** og skriv en vilkårlig vinkel fra 1° til 180°.

Tangentfesting, relativ inndata og lasso er av som standard. **Tilbakestill til standard** setter alle innstillinger tilbake til startstilstanden.

---

*Relatert: [Vector Pins](../../interface/vector-pins/), [Avstandssporing](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Koordinatinndata](../../interface/coordinate-entry/)*
