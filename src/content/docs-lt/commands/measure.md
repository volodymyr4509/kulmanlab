---
title: "Komanda Measure — atstumų, ilgių, kampų ir plotų skaitymas aplink žymeklį"
description: "Komanda Measure skaito brėžinį aplink žymeklį jį judinant — atstumą iki artimiausios geometrijos, sutikto objekto ilgį ar spindulį, kampą, kuriuo susitinka linijos — o spustelėjus pateikia uždaros srities plotą ir perimetrą. Brėžinyje niekas nesikeičia."
keywords: ["CAD matavimo komanda", "ploto ir perimetro matavimas CAD", "atstumo matavimas realiu laiku CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Komanda `Matavimas` skaito brėžinį aplink žymeklį jį judinant, nereikia rinkti taškų: kaip toli yra artimiausia geometrija, kokio ilgio ar kiek apvali ji yra ir kokiu kampu susitinka linijos. Spustelėjus uždaros srities viduje gaunamas jos plotas ir perimetras. Brėžinyje niekas nesikeičia.

## Matavimas

1. Terminale įveskite `Matavimas` arba spustelėkite **Measure** — pirmąjį skydelio Measure mygtuką.
2. **Judinkite žymeklį.** Iš jo komanda žvelgia į dešinę, aukštyn, į kairę ir žemyn ieškodama artimiausios geometrijos ir parodo rastą.
3. **Spustelėkite uždaros srities viduje**, kad ji būtų užpildyta ir būtų galima perskaityti jos plotą ir perimetrą — žr. toliau.
4. Norėdami baigti, paspauskite **Enter**, **Space** arba **Escape**.

## Ką rodo

- **Atstumas skersai** — nuo to, ką žymeklis sutinka vienoje pusėje, iki to, ką sutinka kitoje, horizontaliai ir vertikaliai. Jei kažkas yra tik vienoje pusėje, atstumas skaičiuojamas nuo žymeklio. Kiekvienas galas, kuris ką nors sutinka, turi mažą užpildytą tašką; galas prie žymeklio jo neturi.
- **Ilgis arba spindulys** — kiekvienas komandos pasiektas objektas išryškinamas su jo ilgiu arba spinduliu, jei jis yra apskritimo dalis.
- **Kampas** — kur susitinka dvi pasiektos tiesios linijos, užrašomas kampas tarp jų; status kampas pažymimas mažu kvadratėliu.

Ilgiai ir kampai užrašomi taip, kaip juos užrašo dabartinis [DimensionStyle](../dimension-style/), jo vienetų formatu ir tikslumu.

## Plotas ir perimetras

Spustelėjus uždaros srities viduje, ji užpildoma, o jos plotas ir perimetras įrašomi į raginimą ir istoriją. Sritis randama taip, kaip ją randa [Hatch](../hatch/): atskiros linijos, susitinkančios galas į galą, uždaro sritį kaip polilinija, o viskas, kas uždara viduje, paliekama kaip sala — jos kraštas įskaičiuojamas į perimetrą, o plotas atimamas.

Plotas yra paprastas skaičius kvadratiniais brėžinio vienetais — pėdos ir coliai ploto užrašyti negali — o perimetras seka vienetų formatą. Spustelėkite kitos srities viduje, kad ją išmatuotumėte. Jei taško neaptveria nieko uždaro, terminalas pasako kodėl, tais pačiais pranešimais kaip Hatch: no boundary found, point is not enclosed arba boundary is open.

## Verta žinoti

- Matuoja pagal linijas, lankus, apskritimus, elipses, polilinijas ir splainus; ilgiai ir plotai tikslūs, įskaitant elipses ir splainus.
- Užšaldytų sluoksnių objektai ignoruojami; užrakintų sluoksnių objektai matuojami.
- Dideliame brėžinyje ji žiūri tik į tai, kas arti žymeklio, todėl išlieka greita.

---

*Susiję: [Distance](../distance/), [Angle](../angle/) ir [Area](../area/) matavimams tarp pasirinktų taškų, ir [Hatch](../hatch/) — kaip randamos uždaros sritys.*
