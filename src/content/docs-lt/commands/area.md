---
title: Area komanda — daugiakampio ploto ir perimetro matavimas
description: Area komanda matuoja apribotą plotą ir perimetrą daugiakampio, apibrėžto 3 ar daugiau spustelėtų taškų, naudodama batų raištelių formulę. Palaiko kampu užrakintą kryptinį įvedimą ir nuolatinį rezultato paryškinimą drobėje.
keywords: [CAD ploto matavimas, area komanda, daugiakampio ploto skaičiuoklė, perimetro matavimas, batų raištelių formulė, kulmanlab CAD matavimas]
group: measure
order: 3
---

# Area

Komanda `area` matuoja apribotą plotą ir perimetrą daugiakampio, apibrėžto trijų ar daugiau spustelėtų taškų, ir išspausdina abu rezultatus terminale 4 skaitmenų po kablelio tikslumu. Tai trečioji matavimo komanda šalia [Distance](../distance/) (tiesios linijos ilgis) ir [Angle](../angle/) (vidinis kampas viršūnėje).

## Ploto matavimo anatomija

```
  ● pirmas taškas
   \
    \
     ● antras taškas
      \
       \             (brūkšninė) uždarančiojo krašto peržiūra
        ●───────────────┐
      trečias taškas    │  (brūkšninė) kito krašto peržiūra iki žymeklio
                         ✕ žymeklis  →  terminalas: "Area: 12.3456  Perimeter: 45.6789"
```

- **Viršūnės** — kiekvienas spustelėtas (ar įvestas) taškas tampa daugiakampio viršūne; patvirtinti kraštai piešiami ištisiniai, o vidus užpildomas permatomu paryškinimu.
- **Peržiūros kraštai** — brūkšninės linijos rodo laukiantį kraštą nuo paskutinės viršūnės iki žymeklio ir uždarantįjį kraštą nuo žymeklio atgal iki pirmos viršūnės, kad matytumėte figūrą prieš ją patvirtindami.
- **Uždarantysis kraštas** — pirmo taško niekada nespaudžiate iš naujo; paspaudus Enter daugiakampis uždaromas automatiškai.

## Ploto matavimas

1. Terminale įveskite `area` arba spustelėkite įrankių juostos mygtuką **Area** (Measure skydelio apatinė eilutė).
2. **Spustelėkite pirmą tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite kiekvieną papildomą viršūnę** iš eilės aplink figūrą. Koordinačių įvedimas veikia kiekviename žingsnyje.
4. Kai padėti bent **3 taškai**, paspauskite **Enter** (be laukiančio koordinatės ar atstumo įvedimo), kad uždarytumėte daugiakampį ir apskaičiuotumėte rezultatą.
5. Terminalas išspausdina `Area: <reikšmė>  Perimeter: <reikšmė>`, o uždaras daugiakampis — užpildas, kontūras ir viršūnių rankenėlės — lieka paryškintas drobėje.
6. **Spustelėkite bet kur, paspauskite bet kurį klavišą arba `Escape`**, kad atmestumėte rezultatą ir užbaigtumėte komandą.

## Kampo užraktas ir tikslus atstumas

Padėjus pirmą viršūnę, judant link vieno iš sukonfigūruotų kampo sekimo žingsnių (10°, 15°, 20°, 30°, 45° ar 90°, nustatomų įrankių juostos išskleidžiamajame meniu), kitas kraštas užrakinamas šia kryptimi:

- Krašto peržiūra prisitraukia prie užrakintos krypties, o kampo sekimo indikatorius piešiamas prie inkaro viršūnės.
- Įveskite ilgį ir paspauskite **Enter**, kad kita viršūnė būtų padėta tiksliai tokiu atstumu užrakinta kryptimi.
- Spustelėjus užrakinus (be įvesto ilgio), viršūnė padedama žymeklio projekcijoje į užrakintą kryptį.

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda prie krašto ilgio reikšmės |
| `-` | Neigiamas ilgis (tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda kitą viršūnę įvestu ilgiu |

## Daugiakampio uždarymas

- Enter uždaro figūrą tik kai padėtos **3 ar daugiau** viršūnių — su mažiau tai neveikia.
- Kraštas nuo paskutinės viršūnės atgal iki pirmos pridedamas automatiškai ir įskaičiuojamas tiek į plotą, tiek į perimetrą.
- Taškus galima dėti bet kokia tvarka (pagal ar prieš laikrodžio rodyklę) — rezultatas abiem atvejais tas pats.

## Area, Distance ir Angle

| | Area | Distance | Angle |
|---|------|----------|-------|
| Ką matuoja | Daugiakampio apribotą plotą ir perimetrą | Tiesios linijos ilgį | Vidinį kampą viršūnėje |
| Spustelėjimų skaičius | 3 ar daugiau, uždaroma Enter | 2 | 3 |
| Rezultato formatas | `12.3456  Perimeter: 45.6789` | `12.3456` (vienetai) | `45.0000°` |
| Peržiūra drobėje | Užpildytas daugiakampis su brūkšniniu uždarančiuoju kraštu | Linija nuo pirmo taško iki žymeklio | Dvi linijos nuo viršūnės iki abiejų galų |
| Po rezultato | Atmeskite bet kokiu įvedimu, tada komanda išeina | Spustelėkite, kad sugrandintumėte naują matavimą | Spustelėkite, kad sugrandintumėte naują matavimą |
| Geriausiai tinka | Apribotoms sritims, kambario ar plokštės plotui | Tarpo ar atkarpos ilgiui | Atsivėrimo kampui tarp dviejų elementų |

## Koordinačių įvedimas

Užuot spustelėję, galite įvesti tikslią padėtį bet kuriai viršūnei:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba krašto ilgio įvedimą užrakinus kampą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Patvirtina įvestą koordinatę ar ilgį (tik Enter); su 3+ viršūnėmis ir be laukiančio įvedimo uždaro daugiakampį |
| `Escape` | Renkant viršūnes atmeta jas ir pradeda iš naujo nuo pirmo taško; parodžius rezultatą, atmeta jį ir išeina |

## Pastabos

- Plotas apskaičiuojamas pagal [batų raištelių formulę](https://en.wikipedia.org/wiki/Shoelace_formula) ir visada pateikiamas kaip teigiama reikšmė, nepriklausomai nuo spustelėjimo tvarkos.
- Savikertantys daugiakampiai (kraštai, kurie kertasi) vis tiek duoda skaitinį rezultatą, tačiau reikšmė gali neatitikti vizualiai apribotos srities — kad plotas būtų prasmingas, spustelėjimo tvarka turi būti nesikertanti.
- Rezultatai rodomi **tik terminale ir kaip laikinas paryškinimas drobėje** — į brėžinį kaip nuolatinis objektas nieko nepridedama.
- Skirtingai nei Distance ir Angle, Area **nesigrandina** automatiškai į naują matavimą — atmetę rezultatą, dar kartą paleiskite `area`, kad išmatuotumėte kitą daugiakampį.
- Tikslumas visada 4 skaitmenys po kablelio tiek plotui, tiek perimetrui, tais pačiais vienetais kaip brėžinio koordinatės (be vienetų konvertavimo).
