---
title: Linijos storio pasirinkiklis įrankių juostoje — brūkšnio pločio valdymas KulmanLab CAD
description: Linijos storio pasirinkiklis KulmanLab CAD įrankių juostoje nustato brūkšnio plotį, taikomą visiems naujai nubraižytiems objektams. Palaiko standartines DXF linijos storio reikšmes nuo 0,00 mm iki 2,11 mm plius ByLayer ir Default režimus.
keywords: [CAD linijos storis, brūkšnio plotis, linijos plotis, DXF linijos storis, ByLayer linijos storis, kulmanlab]
group: interface
order: 5
---

# Lineweight

Įrankių juostoje esantis **lineweight** ženkliukas valdo brūkšnio plotį, priskiriamą kiekvienam naujam nubraižytam objektui. Spustelėkite jį, kad atvertumėte išskleidžiamąjį pasirinkiklį.

## Parinktys

| Reikšmė | Reikšmė |
|---------|---------|
| **From Layer** | Objektas paveldi linijos storį, apibrėžtą jo sluoksnyje. Tikrasis rodomas plotis priklauso nuo sluoksnio nustatymo. |
| **Default** | Naudoja numatytąjį programos plotį — atvaizduojamas kaip plona linija (1 px). DXF neperrašo sluoksnio nustatymo. |
| **0.00 mm – 2.11 mm** | Aiškus fiksuotas plotis. Objektas neša šią reikšmę nepriklausomai nuo savo sluoksnio linijos storio. |

Prieinamos standartinės DXF linijos storio reikšmės: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 ir 2,11 mm.

## Kaip taikoma

Pasirinktas linijos storis taikomas kiekvienam po pakeitimo sukurtam objektui. Jis nekeičia esamų objektų atgaline data.

Norėdami pakeisti esamų objektų linijos storį, pasirinkite juos ir redaguokite lauką **Lineweight** savybių skydelyje arba naudokite [MatchProperties](../../commands/match-properties/), kad nukopijuotumėte iš kito objekto.

## Atvaizdavimas

Linijos storiai atvaizduojami **3,78 px kiekvienam mm** masteliu (96 dpi). 0,25 mm linija ekrane yra maždaug 1 px pločio; 1,00 mm linija — maždaug 4 px. Labai plonos reikšmės (0,00 mm ir neigiamos) visada atvaizduojamos bent 0,5 px, kad išliktų matomos bet kokiu mastelio lygiu.

## DXF suderinamumas

Linijos storio reikšmės DXF `LWPOLYLINE`, `LINE`, `CIRCLE` ir kituose objektų įrašuose saugomos kaip sveikieji skaičiai milimetro šimtosiomis (pvz., 25 = 0,25 mm). **From Layer** saugoma kaip `-1`, o **Default** kaip `-3`, atitinkant DXF specifikaciją. Failai keliauja be praradimų bet kurioje su DXF suderinamoje programoje.
