---
title: "Komanda Explode — polilinijos ar bloko išskaidymas į dalis"
description: "Komanda Explode išskaido poliliniją į jos Line ir Arc objektus, o bloko nuorodą — į objektus, kuriuos braižo jos blokas, toje pačioje vietoje. Dalys atrodo lygiai kaip originalas."
keywords: [CAD explode komanda, polilinijos skaidymas CAD, polilinijos skaidymas į linijas, polilinijos konvertavimas į line ir arc, kulmanlab]
group: edit
order: 19
---

# Explode

Komanda `explode` suskaido [Polyline](../polyline/) į atskirus [Line](../line/) ir [Arc](../arc/) objektus — po vieną kiekvienai atkarpai, tiksliai ten, kur buvo pačios polilinijos viršūnės. Dalys pakeičia polilinija vietoje ir išlaiko jos linijos storį, spalvą, sluoksnį ir linijos tipą.

Explode veikia **Polyline** objektus ir **blokų nuorodas**.

## Explode naudojimas

Du paleidimo būdai, kaip ir [Delete](../delete/):

**Pirmiausia pasirinkti, tada skaidyti** — greičiausias kelias:

1. Drobėje pasirinkite vieną ar kelias polilinijas.
2. Terminale įveskite `explode` arba skydelio Edit išskleidžiamajame meniu pasirinkite **Explode**.

Pasirinktos polilinijos suskaidomos iškart — be atskiro patvirtinimo žingsnio, nes kažkas jau pasirinkta.

**Pirmiausia aktyvuoti, tada pasirinkti**:

1. Įveskite `explode` arba išskleidžiamajame meniu pasirinkite **Explode**, kai niekas nepažymėta.
2. **Pažymėkite polilinijas ar blokų nuorodas** — spustelėkite, kad perjungtumėte, arba vilkite, kad pažymėtumėte sritį.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte ir suskaidytumėte pasirinktas polilinijas.

Žymint imamos tik polilinijos ir blokų nuorodos — spustelėjus Line, Circle ar kitą objektą nieko nevyksta, o srities vilkimas nepaiso visko kito viduje ar kertančio ribą.

## Kas gaunama

Kiekviena polilinijos atkarpa tampa atskiru objektu:

- **Tiesi atkarpa** tampa **Line**.
- **Lanko atkarpa** (iš Polyline [Arc parinkties](../polyline/)) tampa **Arc**, tiksliai atitinkančiu pradinės kreivės centrą, spindulį ir apimtį.

Kiekvienas gautas Line ir Arc paveldi pradinės polilinijos **linijos storį, spalvą, sluoksnį, linijos tipą ir linijos tipo mastelį** — geometrijos išvaizda nekinta, tik vietoj vieno sujungto Polyline dabar yra keli nepriklausomi objektai.

**Bloko nuoroda** tampa objektais, kuriuos braižo jos blokas, padėtais ten, kur juos rodė nuoroda. Objektai, kuriuos blokas laiko paslėptus — kitos dinaminio bloko būsenos — praleidžiami; kiekvienas atributas tampa paprastu Text su savo reikšme; ByBlock nubraižytos dalys perima nuorodos spalvą, o 0 sluoksnio dalys — jos sluoksnį. Įdėtas blokas išeina kaip atskira bloko nuoroda, kurią galite išskaidyti toliau. Nuoroda su skirtingu X ir Y masteliu neimama, nes jos apskritimai turėtų virsti elipsėmis.

Skaidymą galima atšaukti vienu žingsniu su [Undo](../undo/), kaip ir bet kurį kitą redagavimą.

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Prideda prie žymėjimo arba pašalina poliliniją ar bloko nuorodą po žymekliu; spustelėjus kitą objektą nieko nevyksta |
| **Vilkimas į dešinę** (griežtas) | Pažymi tik polilinijas ir blokų nuorodas, esančias visiškai rėmelio viduje |
| **Vilkimas į kairę** (kertantis) | Pažymi polilinijas ir blokų nuorodas, kertančias rėmelio ribą |
| **Enter** / **Space** | Patvirtina ir išskaido žymėjimą |

## Palaikomi objektai

| Objektas | Palaikomas |
|----------|------------|
| Polyline / Rectangle | Taip |
| Bloko nuoroda | Taip, nebent X ir Y mastelis skiriasi |
| Line, Arc, Circle, Ellipse | Ne — nėra ko skaidyti |
| Text, Spline, Dimension, Leader, Hatch | Ne |
