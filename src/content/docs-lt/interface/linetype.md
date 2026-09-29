---
title: Linijos tipo pasirinkiklis įrankių juostoje — brūkšnių raštų valdymas KulmanLab CAD
description: Linijos tipo pasirinkiklis KulmanLab CAD įrankių juostoje nustato brūkšnių raštą, taikomą visiems naujai nubraižytiems objektams. Palaiko visus linijų tipus, įkeltus iš dabartinio DXF failo, plius įtaisytąsias ByLayer, ByBlock ir Continuous parinktis.
keywords: [CAD linijos tipas, brūkšnių raštas, brūkšninė linija, DXF linijos tipas, ByLayer linijos tipas, kulmanlab]
group: interface
order: 4
---

# Linetype

Įrankių juostoje esantis **linetype** ženkliukas valdo brūkšnių raštą, priskiriamą kiekvienam naujam nubraižytam objektui. Spustelėkite jį, kad atvertumėte išskleidžiamąjį pasirinkiklį.

## Parinktys

| Reikšmė | Reikšmė |
|---------|---------|
| **From Layer** | Objektas paveldi linijos tipą, apibrėžtą jo sluoksnyje. DXF rodoma kaip `ByLayer`. |
| **ByBlock** | Objektas paveldi bloko, kuriam priklauso, linijos tipą. Už bloko ribų regimo poveikio neturi. |
| **Continuous** | Vientisa nepertraukiama linija — be brūkšnių rašto. |
| **Įvardyti linijų tipai** | Bet kuris linijos tipas, įkeltas iš dabartinio DXF failo (pvz., `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Išskleidžiamajame meniu rodoma kiekvieno rašto gyva peržiūra ir jo apibrėžimo eilutė. |

## Kaip taikoma

Pasirinktas linijos tipas taikomas kiekvienam po pakeitimo sukurtam objektui. Jis nekeičia esamų objektų atgaline data.

Norėdami pakeisti esamų objektų linijos tipą, pasirinkite juos ir redaguokite lauką **Linetype** savybių skydelyje arba naudokite [MatchProperties](../../commands/match-properties/), kad nukopijuotumėte iš kito objekto.

## Linijos tipo mastelis

Kiekvienas objektas taip pat turi savybę **Linetype Scale** (numatytoji `1`). Brūkšnių raštas dauginamas iš šio koeficiento. Reikšmė `2` padaro brūkšnius dvigubai ilgesnius; `0.5` — perpus trumpesnius. Redaguokite ją savybių skydelyje pasirinkę objektą.

## Prieinami linijų tipai

Išskleidžiamajame meniu išvardyti tik linijų tipai, esantys šiuo metu įkeltame DXF faile. Ką tik sukurtame faile yra tik `ByLayer`, `ByBlock` ir `Continuous`. Kai importuojate DXF, visi failo `$LTYPE` lentelėje apibrėžti linijų tipai tampa prieinami.

Jei jums reikia konkretaus linijos tipo (pvz., `DASHED2`), kurio nėra sąraše, importuokite DXF failą, kuriame jis yra — tada linijos tipas pasirodys pasirinkiklyje dabartinei sesijai.

## DXF suderinamumas

Linijų tipų pavadinimai saugomi kaip eilutės objektų įrašuose. `ByLayer` ir `ByBlock` yra standartinės DXF vietos rezervavimo reikšmės. Visi įvardyti linijų tipai ir jų brūkšnių raštai eksportuojant išsaugomi tiksliai ir keliauja be praradimų LibreCAD, FreeCAD ir kitose su DXF suderinamose programose.
