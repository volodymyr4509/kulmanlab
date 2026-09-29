---
title: KulmanLab CAD — komandų žinynas
description: KulmanLab CAD komandų žinynas — išsamus vadovas apie kiekvieną braižymo, redagavimo, anotavimo, sluoksnių, matavimo ir failų komandą KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD komandos, nemokamas naršyklinis CAD, DXF redaktorius internete, braižymo komandos, kulmanlab komandos]
group: overview
order: 1
---

# KulmanLab CAD — komandų žinynas

Sveiki atvykę į **KulmanLab CAD** komandų žinyną. [KulmanLab CAD](https://kulmanlab.com) yra nemokamas naršyklinis CAD įrankis DXF failams braižyti, redaguoti ir eksportuoti — be diegimo. Naudokite šoninę juostą, kad naršytumėte visas prieinamas komandas, sugrupuotas pagal skydelius.

## Shapes

| Komanda | Ką daro |
|---------|---------|
| [Line](./commands/line/) | Nubrėžia tiesią liniją tarp dviejų taškų |
| [Polyline](./commands/polyline/) | Nubrėžia daugiaatkarpį atvirą kelią |
| [Rectangle](./commands/rectangle/) | Nubrėžia ašims lygiagretų stačiakampį |
| [Circle](./commands/circle/) | Nubrėžia apskritimą pagal centrą ir spindulį |
| [Arc](./commands/arc/) | Nubrėžia lanką per tris taškus |
| [Ellipse](./commands/ellipse/) | Nubrėžia elipsę pagal centrą ir dvi ašis |
| [Hatch](./commands/hatch/) | Užpildo sritį, supančią pasirinktą tašką, raštu |
| [Text](./commands/text/) | Padeda teksto užrašą drobėje |
| [Spline CV](./commands/spline-cv/) | Nubrėžia splainą dedant valdymo viršūnes |
| [Spline Fit](./commands/spline-fit/) | Nubrėžia splainą, einantį per spustelėtus taškus |

## Edit

| Komanda | Ką daro |
|---------|---------|
| [Move](./commands/move/) | Perkelia pasirinktus objektus į naują padėtį |
| [Copy](./commands/copy/) | Nukopijuoja pasirinktus objektus į naują padėtį |
| [Rotate](./commands/rotate/) | Pasuka pasirinktus objektus aplink bazinį tašką |
| [Mirror](./commands/mirror/) | Atspindi pasirinktus objektus per liniją |
| [Scale](./commands/scale/) | Keičia pasirinktų objektų mastelį aplink bazinį tašką |
| [Align](./commands/align/) | Perkelia, pasuka ir pasirinktinai keičia objektų mastelį taškų poromis |
| [Delete](./commands/delete/) | Pašalina pasirinktus objektus iš brėžinio |
| [Trim](./commands/trim/) | Apkerpa linijos atkarpą jos sankirtose |
| [Extend](./commands/extend/) | Pratęsia liniją iki artimiausios ribos sankirtos |
| [Offset](./commands/offset/) | Sukuria lygiagrečią objekto kopiją nurodytu atstumu |
| [Fillet](./commands/fillet/) | Suapvalina kampą tarp dviejų linijų, lankų ar polilinijos atkarpų liestiniu lanku |
| [Chamfer](./commands/chamfer/) | Nuskelia tiesų įstrižą kampą tarp dviejų linijų ar polilinijų |
| [Explode](./commands/explode/) | Suskaido poliliniją į atskirus linijų ir lankų objektus |
| [Undo](./commands/undo/) | Atšaukia paskutinį veiksmą |
| [Redo](./commands/redo/) | Pakartotinai atlieka paskutinį atšauktą veiksmą |
| [Array Grid](./commands/array-grid/) | Kartoja objektus stačiakampiame eilučių ir stulpelių tinklelyje |

## Annotate

| Komanda | Ką daro |
|---------|---------|
| [Leader](./commands/leader/) | Nubrėžia daugiašakės išnašos anotaciją su rodykle ir tekstu |
| [LeaderAdd](./commands/leader-add/) | Prideda papildomą šaką prie esamos daugiašakės išnašos |
| [LeaderRemove](./commands/leader-remove/) | Pašalina šaką iš esamos daugiašakės išnašos |
| [Dimension Linear](./commands/dim-linear/) | Prideda horizontalų ar vertikalų matmenį |
| [Dimension Aligned](./commands/dim-aligned/) | Prideda matmenį, sulygiuotą pagal du taškus |
| [Dimension Continue](./commands/dim-continue/) | Sugrandina naują matmenį nuo paskutinio |
| [Dimension Radius](./commands/dim-radius/) | Prideda spindulio matmenį apskritimui ar lankui |
| [Dimension Diameter](./commands/dim-diameter/) | Prideda skersmens matmenį apskritimui |
| [Dimension Angular](./commands/dim-angular/) | Prideda kampinį matmenį dviem linijoms, lankui ar apskritimui |

## Layer

| Komanda | Ką daro |
|---------|---------|
| [LayerManager](./commands/layer-manager/) | Prideda sluoksnius ir redaguoja kiekvieno užšaldymą, užraktą, spausdinimą, spalvą, linijos storį ir linijos tipą |
| [LayerMakeCurrent](./commands/layer-make-current/) | Nustato dabartinį sluoksnį pagal spustelėto objekto sluoksnį |
| [LayerMatch](./commands/layer-match/) | Priskiria pasirinktus objektus šaltinio objekto sluoksniui |
| [LayerIsolate](./commands/layer-isolate/) | Užšaldo visus sluoksnius, išskyrus pasirinktų objektų sluoksnius |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Atšildo visus sluoksnius vienu žingsniu |

## Layouts

| Komanda | Ką daro |
|---------|---------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Sukuria vaizdo langą popieriaus makete pasirinkus du kampus |
| [ViewportCopy](./commands/viewport-copy/) | Dubliuoja vaizdo langą į naują padėtį |
| [PageManager](./commands/page-manager/) | Redaguoja aktyvaus maketo popieriaus dydį ir mastelį |

## Navigate

| Komanda | Ką daro |
|---------|---------|
| [Pan](./commands/pan/) | Spustelėkite ir tempkite, kad perstumtumėte vaizdą |
| [Zoom In](./commands/zoom-in/) | Priartina vaizdą |
| [Zoom Out](./commands/zoom-out/) | Nutolina vaizdą |
| [Fit](./commands/fit/) | Pritaiko visus objektus lange |

## Measure

| Komanda | Ką daro |
|---------|---------|
| [Distance](./commands/distance/) | Išmatuoja atstumą tarp dviejų taškų |
| [Angle](./commands/angle/) | Išmatuoja kampą tarp trijų taškų |
| [Area](./commands/area/) | Išmatuoja daugiakampio plotą ir perimetrą |

## Styles

| Komanda | Ką daro |
|---------|---------|
| [Match Properties](./commands/match-properties/) | Nukopijuoja spalvą, sluoksnį ir kitas savybes iš vieno objekto kitiems |
| [Font Manager](./commands/font-manager/) | Naršo, pasirenka ir įkelia nuosavus TTF šriftus |
| [FontAdd](./commands/font-add/) | Įkelia nuosavą TTF šriftą tiesiai iš terminalo |
| [Hatch Manager](./commands/hatch-manager/) | Naršo brūkšniuotės raštų biblioteką ir įkelia .pat failus |
| [TextStyle](./commands/text-style/) | Kuria ir valdo įvardytus teksto stilius naujam Text |
| [LeaderStyle](./commands/leader-style/) | Kuria ir valdo įvardytus daugiašakių išnašų stilius |

## File

| Komanda | Ką daro |
|---------|---------|
| [Import](./commands/import/) | Atveria DXF ar JSON brėžinio failą |
| [New File](./commands/new-file/) | Pradeda naują tuščią brėžinį |
| [File Manager](./commands/file-manager/) | Naršo, pervadina ar ištrina naršyklėje išsaugotus brėžinius |
| [Print Manager](./commands/print-manager/) | Eksportuoja brėžinio sritį kaip vaizdą ar PDF |
| [Export Manager](./commands/export-manager/) | Atsisiunčia brėžinį kaip DXF ar JSON |
| [WipeStorage](./commands/wipestorage/) | Išvalo visus brėžinius iš naršyklės saugyklos |

## Atkūrimas

Jei programa strigsta kiekvieną kartą paleidžiant (pavyzdžiui, dirbant su itin didelėmis koordinatėmis), galite išvalyti visus vietoje saugomus duomenis pridėję `?reset` prie URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Tai ištrina viską iš naršyklės vietinės duomenų bazės ir pradeda naują tuščią brėžinį. Parametras `?reset` pats automatiškai pašalinamas iš URL. Naudokite tai kaip paskutinę priemonę, kai [WipeStorage](./commands/wipestorage/) nepasiekiamas, nes programa visiškai neįsikelia.

## Kaip veikia komandos

Kiekviena komanda vadovaujasi tuo pačiu principu:

1. **Aktyvavimas** — spustelėkite įrankių juostos mygtuką arba įveskite komandos pavadinimą terminale ekrano apačioje.
2. **Sekite raginimą** — terminalas rodo, kokio įvedimo tikimasi toliau.
3. **Užbaigimas ar atšaukimas** — dauguma komandų baigiasi automatiškai po paskutinio įvedimo. Bet kada paspauskite **Escape**, kad atšauktumėte.

## Objektų pasirinkimas

Kelios redagavimo komandos (Move, Copy, Rotate, Mirror, Scale, Delete) dalijasi ta pačia pasirinkimo elgsena:

- **Spustelėkite** objektą, kad jį pasirinktumėte ar panaikintumėte pasirinkimą.
- **Tempkite į dešinę** (iš kairės į dešinę) griežtam pasirinkimui — pasirenkami tik objektai, visiškai esantys rėmelyje.
- **Tempkite į kairę** (iš dešinės į kairę) kertančiam pasirinkimui — pasirenkamas kiekvienas objektas, kertantis rėmelį.
- Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą ir pereitumėte prie kito žingsnio.
