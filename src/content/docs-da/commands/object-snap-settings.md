---
title: "ObjectSnapSettings-kommando — Alle indstillinger i kontrollinjen"
description: "ObjectSnapSettings-kommandoen åbner ét vindue med alle kontrollinjens indstillinger — snap, tangentsnap, vinkelsporing, nåle, indtastet input, lasso og visning — hver forklaret ved siden af listen med en lille tegning."
keywords: ["indstillinger for objektsnap CAD", "tangentsnap CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Kommandoen `Fastgørelsesindstillinger` åbner ét vindue, der samler alle kontrollinjens indstillinger. Hver indstilling forklares ved siden af listen, med en lille tegning. Åbn det med tandhjulsknappen i kontrollinjen, eller skriv `Fastgørelsesindstillinger`. At ændre en indstilling her er det samme som at skifte dens knap i linjen.

## Indstillingerne

### Hvor markøren lander

| Kontrollinje | Hvad den gør |
|---|---|
| `Snap` | Markøren springer til nærmeste gitterpunkt, så de punkter du vælger lander på runde koordinater. Fastgørelse til et objekt nær markøren vinder stadig. Gitterafstanden følger zoomen. |
| `TANG` | Mens en linje tegnes fra et punkt, så før markøren hen hvor den lige ville røre en cirkel, bue, ellipse eller spline, og den fastgøres der. Virker i Linje, Polylinje og andre kommandoer og når enden af en linje eller polylinje trækkes. |

### Hjælpelinjer under tegning

| Kontrollinje | Hvad den gør |
|---|---|
| `ANGL` | Når markøren kommer tæt på en af disse vinkler fra sidste punkt, låser den i den retning, vist som en stiplet stråle. Mens den er låst, skriv en længde og tryk Enter for at sætte punktet så langt ude. |
| `Pins` | Hvil markøren et øjeblik på et fastgørelsespunkt for at nåle det. Et nålet punkt sender vandrette og lodrette hjælpelinjer ud, og markøren fastgøres til dem og til hvor de krydser. |
| `Dist` | Det sidst nålede punkt bruges som startpunkt: når markøren låser på en vinkel fra nålen, skriv en længde og tryk Enter for at sætte punktet så langt fra den. Kræver vektornåle. |

### Indtastning og markering

| Kontrollinje | Hvad den gør |
|---|---|
| `Rel` | Et indtastet X,Y-punkt måles fra det sidst valgte punkt, som om det startede med @. Tilbage fjerner @ for et punkt i tegningens egne koordinater. Slået fra skriver du selv @ for en forskydning. |
| `Lasso` | Tryk og træk på et tomt område for at tegne en fri løkke om det du vil have, i stedet for et rektangel. Det løkken omfatter, bliver markeret. |

### Visning

| Kontrollinje | Hvad den gør |
|---|---|
| `Grid` | Viser baggrundsgitteret. Afstanden ændres når du zoomer. At slå det fra stopper ikke fastgørelse til gitteret. |
| `LWT` | Tegner linjer i deres linjetykkelse, så tungere linjer ser tykkere ud. Slået fra tegnes hver linje tyndt, hvilket kan gøre en tæt tegning lettere at læse. |

**ANGL** har en egen række til trinnet: vælg 10°, 20°, 30°, 45° eller 90°, eller vælg **Tilpasset** og skriv en vilkårlig vinkel fra 1° til 180°.

Tangentsnap, relativt input og lasso er slået fra som standard. **Nulstil til standard** sætter alle indstillinger tilbage til startstilstanden.

---

*Relateret: [Vector Pins](../../interface/vector-pins/), [Afstandssporing](../../interface/distance-tracking/), [Gitter & Snap](../../interface/grid-snap/), [Koordinatindtastning](../../interface/coordinate-entry/)*
