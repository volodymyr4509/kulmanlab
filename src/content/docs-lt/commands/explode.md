---
title: Explode komanda — polilinijos skaidymas į Line ir Arc objektus
description: Explode komanda suskaido Polyline į atskirus Line ir Arc objektus, po vieną kiekvienai atkarpai, vietoje. Kiekviena dalis išlaiko pradinės polilinijos linijos storį, spalvą, sluoksnį ir linijos tipą. Veikia tik su Polyline objektais.
keywords: [CAD explode komanda, polilinijos skaidymas CAD, polilinijos skaidymas į linijas, polilinijos konvertavimas į line ir arc, kulmanlab]
group: edit
order: 16
---

# Explode

Komanda `explode` suskaido [Polyline](../polyline/) į atskirus [Line](../line/) ir [Arc](../arc/) objektus — po vieną kiekvienai atkarpai, tiksliai ten, kur buvo pačios polilinijos viršūnės. Dalys pakeičia polilinija vietoje ir išlaiko jos linijos storį, spalvą, sluoksnį ir linijos tipą.

Explode veikia tik su **Polyline** objektais.

## Explode naudojimas

Du paleidimo būdai, kaip ir [Delete](../delete/):

**Pirmiausia pasirinkti, tada skaidyti** — greičiausias kelias:

1. Drobėje pasirinkite vieną ar kelias polilinijas.
2. Terminale įveskite `explode` arba spustelėkite mygtuką **Explode** Edit skydelyje.

Pasirinktos polilinijos suskaidomos iškart — be atskiro patvirtinimo žingsnio, nes kažkas jau pasirinkta.

**Pirmiausia aktyvuoti, tada pasirinkti**:

1. Įveskite `explode` arba spustelėkite įrankių juostos mygtuką nieko nepasirinkę.
2. **Pasirinkite polilinijas** — spustelėkite, kad perjungtumėte, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte ir suskaidytumėte pasirinktas polilinijas.

Pasirenkant paimamos tik polilinijos — spustelėjimas ant Line, Circle ar bet kurio kito objekto nieko nedaro, o srities tempimas ignoruoja viską, išskyrus polilinijas, esančias jos viduje ar ją kertančias.

## Kas gaunama

Kiekviena polilinijos atkarpa tampa atskiru objektu:

- **Tiesi atkarpa** tampa **Line**.
- **Lanko atkarpa** (iš Polyline [Arc parinkties](../polyline/)) tampa **Arc**, tiksliai atitinkančiu pradinės kreivės centrą, spindulį ir apimtį.

Kiekvienas gautas Line ir Arc paveldi pradinės polilinijos **linijos storį, spalvą, sluoksnį, linijos tipą ir linijos tipo mastelį** — geometrijos išvaizda nekinta, tik vietoj vieno sujungto Polyline dabar yra keli nepriklausomi objektai.

Skaidymą galima atšaukti vienu žingsniu su [Undo](../undo/), kaip ir bet kurį kitą redagavimą.

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą polilinijos pasirinkimą; spustelėjimas ant ne polilinijos objekto nieko nedaro |
| **Tempimas į dešinę** (griežtas) | Pasirenka tik polilinijas, visiškai esančias rėmelyje |
| **Tempimas į kairę** (kertantis) | Pasirenka polilinijas, kertančias rėmelio ribą |
| **Enter** / **Space** | Patvirtina ir suskaido pasirinktas polilinijas |

## Palaikomi objektai

| Objektas | Palaikomas |
|----------|------------|
| Polyline / Rectangle | Taip |
| Line, Arc, Circle, Ellipse | Ne — nėra ko skaidyti |
| Text, Spline, Dimension, Leader, Hatch | Ne |
