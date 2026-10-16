---
title: "Kaip nubraižyti šešiakampį ar varžtų apskritimą CAD programoje (Polygon ir polinis masyvas)"
description: "Nubraižykite taisyklingą daugiakampį iš centro ir spindulio arba iš vienos kraštinės, tada pakartokite skyles varžtų apskritime poliniu masyvu — nemokamai naršyklėje, su tiksliai įvestomis reikšmėmis."
keywords: [šešiakampio braižymas CAD, taisyklingas daugiakampis CAD, polinis masyvas CAD, varžtų apskritimo brėžinys, skylių išdėstymas CAD, apskritas raštas CAD, šešiabriaunės veržlės brėžinys, aštuonkampio braižymas CAD, dalijamojo apskritimo skersmuo PCD, nemokamas daugiakampio įrankis CAD]
date: 2026-10-11
author: KulmanLab
tag: Vadovas
---

Norėdami nubraižyti taisyklingą daugiakampį CAD programoje, nurodykite kraštinių skaičių, pasirinkite centrą, tada spindulį — arba pasirinkite vieną kraštinę, ir likusi dalis išsiaiškės pati. Norėdami nubraižyti varžtų apskritimą, nubraižykite vieną skylę ir pakartokite ją aplink centrą poliniu masyvu. Šis vadovas daro abu dalykus, su tiksliais skaičiais, naršyklėje adresu [app.kulmanlab.com](https://app.kulmanlab.com) — nemokamai, be diegimo, o failas niekada nepalieka jūsų kompiuterio.

Kuriame [KulmanLab](https://kulmanlab.com), todėl žemiau pateikti žingsniai naudoja jo komandas. Idėjos — plotis tarp briaunų ir tarp kampų, dalijamojo apskritimo skersmuo, ar kopijos sukasi apeidamos — yra tos pačios bet kurioje CAD programoje.

## Taisyklingo daugiakampio braižymas

Taisyklingas daugiakampis turi lygias kraštines ir kampus: šešiakampis veržlei, aštuonkampis ženklui, penkiakampis dekoratyviam iškirpimui. KulmanLab tai komanda **Polygon**.

1. Terminale įveskite `Daugiakampis` arba naudokite mygtuką Polygon skydelyje Shapes.
2. Įveskite **kraštinių skaičių** — bet kurį sveikąjį skaičių nuo 3 iki 1024 — ir paspauskite **Enter**. Raginimas iš anksto užpildytas skaičiumi, kurį naudojote paskutinį kartą.
3. **Spustelėkite centrą** arba įveskite `X,Y` tiksliam taškui.
4. **Spustelėkite spindulį** arba jį įveskite ir paspauskite **Enter**.

Rezultatas — viena uždara polilinija, todėl veikia viskas, ką galima daryti su polilinija: perkelti, sukti, atitraukti, keisti mastelį.

### Tarp briaunų ar tarp kampų?

Čia dažniausiai suklystama. „Spindulys“ gali reikšti du skirtingus atstumus, o šešiakampis nurodomas vienu ar kitu, priklausomai nuo to, ką braižote:

| | Matuojama iki | Tipinis naudojimas |
|---|---|---|
| **Inside įjungta** (numatytoji) | Kampų | Forma, kuri turi tilpti duotame apskritime |
| **Inside išjungta** | Kiekvienos kraštinės vidurio | Forma su duotu pločiu tarp briaunų — veržlės, varžtų galvutės, raktų dydžiai |

Paspauskite `I` spindulio raginime, kad perjungtumėte. Šešiabriaunė veržlė parduodama pagal plotį tarp briaunų, todėl naudokite **Inside išjungta** ir įveskite jo *pusę*. M8 veržlei, kurios plotis tarp briaunų 13 mm:

1. `Daugiakampis`, tada `6` kraštinėms, tada spustelėkite arba įveskite centrą.
2. Paspauskite `I`, kad išjungtumėte Inside.
3. Įveskite `6.5` ir paspauskite **Enter**.

Briaunos yra lygiai 13 mm viena nuo kitos; kampai siekia 7,51 mm nuo centro, t. y. maždaug 15 mm tarp kampų. Jei spindulį įvedate, o ne spustelite, daugiakampis guli žemiausia kraštine horizontaliai, plokščiai žemyn. Jei spustelite, jis orientaciją perima iš spustelėjimo vietos.

### Iš vienos kraštinės

Kartais žinote kraštinės ilgį, o ne spindulį — pavyzdžiui, aštuonkampį stalviršį su 20 mm kraštinėmis. Paspauskite `E` pirmojo taško raginime, kad persijungtumėte į režimą **Edge**, ir pasirinkite abu vienos kraštinės galus. Likusios viršūnės sudaromos prieš laikrodžio rodyklę, kairėje nuo tos kraštinės. Įvedus `0,0`, o tada `20,0`, 20 mm kraštinė atsiduria išilgai X ašies, o daugiakampis — virš jos.

## Varžtų apskritimo braižymas

Varžtų apskritimas — brėžiniuose „PCD“ — tai žiedas vienodais tarpais išdėstytų skylių aplink centrą. Nubraižote vieną skylę ir ją pakartojate. KulmanLab tai **ArrayPolar**.

Paimkime šešias 6,6 mm skyles 50 mm dalijamojo apskritimo skersmens apskritime, kurio centras koordinačių pradžioje:

1. **Nubraižykite pirmąją skylę.** Paleiskite `Apskritimas`, centrą įveskite kaip `25` `,` `0` — pusė PCD išilgai X ašies —, paspauskite **Enter**, tada įveskite spindulį `3.3` ir paspauskite **Enter**.
2. **Pasirinkite ją** spustelėdami apskritimą.
3. **Paleiskite polinį masyvą.** Įveskite `ApskritiminisMasyvas` arba naudokite mygtuką ArrayPolar skydelyje Edit.
4. **Pasirinkite rašto centrą** — įveskite `0,0`.
5. Terminalas parodo masyvą tokį, koks jis yra — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — o penkios kopijos rodomos gyvai. Paspauskite **Enter**, kad priimtumėte.

Tai ir visas varžtų apskritimas. Norėdami kitokio skaičiaus, prieš patvirtindami paspauskite `I` ir įveskite elementų skaičių — originalas skaičiuojamas kaip vienas, o kampas tarp jų apskaičiuojamas už jus. Arba paspauskite `A` ir vietoj to įveskite tarpą laipsniais; užpildymo kampas perrašomas, kad atitiktų.

Keletas svarbių detalių:

- **Fill** — tai kampas nuo pirmojo elemento iki paskutinio. Numatytieji 360° paskirsto elementus per visą apskritimą; mažesnis skaičius paskirsto juos per lanką — pavyzdžiui, skylių eilę per ketvirtį apsisukimo. Neigiamas kampas eina pagal laikrodžio rodyklę.
- **Rotate** lemia, ar kiekviena kopija sukasi apeidama. Apvalioms skylėms tai nesvarbu. Grioveliui, dantukui ar kampuotei svarbu: įjungta — kiekviena kopija nukreipta į centrą kaip originalas; išjungta — kiekviena kopija išlaiko originalo orientaciją ir tik perkeliama į vietą. Paspauskite `R`, kad perjungtumėte prieš patvirtindami.
- Masyvas sukuria **kopijas** — originalas lieka savo vietoje, o kiekvienas elementas yra įprastas objektas, kurį vėliau galite redaguoti.

## Viskas kartu: flanšas

Nubraižykite šešiakampį kaip kontūrą, apskritimą viduryje kaip angą ir varžtų apskritimą tvirtinimo skylėms. Trys komandos, kiekvienas matmuo įvestas tiksliai, ir nieko nereikia matuoti ekrane.

Jei detalė keliauja lazeriniam pjovimui, ištrinkite pagalbinį apskritimą, kurį nubraižėte dalijamajam apskritimui rasti — jis būtų išpjautas kaip ir viskas kita — ir patikrinkite failą pagal mūsų vadovą [DXF paruošimas pjovimui lazeriu](/lt/blog/prepare-dxf-for-laser-cutting/). Daugiakampis iš prigimties yra uždaras kontūras — dažniausia priežastis, kodėl pjovimo paslaugos atmeta failus.

## Ko tai nedaro

- **Tik taisyklingi daugiakampiai.** Visos kraštinės lygios. Netaisyklingas kontūras — forma su kelių ilgesnėmis kraštinėmis — yra [polilinija](/lt/docs/commands/polyline/), kurią braižote taškas po taško.
- **Tik 2D.** Braižomi plokšti kontūrai. Negausite sumodeliuotos veržlės ar sriegiuoto varžto.
- **Tik kompiuterių naršyklės** — Chrome, Firefox, Safari ir Edge. Mobiliosios versijos nėra.

---

*Susiję: [Polygon](/lt/docs/commands/polygon/) ir [ArrayPolar](/lt/docs/commands/array-polar/) — visos parinktys ir klavišai, [Circle](/lt/docs/commands/circle/) — tiksliems spinduliams įvesti, ir [ArrayGrid](/lt/docs/commands/array-grid/) — objektams kartoti eilutėmis ir stulpeliais, o ne aplink centrą.*
