---
title: Distance — tiesaus atstumo tarp dviejų taškų matavimas
description: Distance komanda matuoja Euklido atstumą tarp dviejų spustelėtų taškų ir parodo rezultatą 4 skaitmenų po kablelio tikslumu. Spustelėjus po rezultato, sugrandinamas naujas matavimas nuo paskutinio taško.
keywords: [atstumo matavimas CAD, distance komanda, matavimas tarp dviejų taškų, tiesus atstumas, kulmanlab CAD matavimas]
group: measure
order: 1
---

# Distance

Komanda `distance` matuoja tiesų (Euklido) atstumą tarp dviejų spustelėtų taškų ir išspausdina rezultatą terminale 4 skaitmenų po kablelio tikslumu. Tai viena iš trijų matavimo komandų — [Angle](../angle/) matuoja kampinį atsivėrimą viršūnėje, o [Area](../area/) matuoja daugiakampio apribotą plotą ir perimetrą.

## Atstumo matavimo anatomija

```
  ● pirmas taškas
   \
    \  peržiūros linija (gyvai)
     \
      ● antras taškas    →  terminalas: "Distance: 12.3456"
```

- **Pirmas taškas** — matavimo pradžia.
- **Antras taškas** — galo taškas; jį padėjus rezultatas iškart išspausdinamas.
- **Rezultatas** — rodomas terminale, o ne drobėje.

## Atstumo matavimas

1. Terminale įveskite `distance` arba spustelėkite įrankių juostos mygtuką **Distance**.
2. **Spustelėkite pirmą tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite antrą tašką** — išmatuotas atstumas pasirodo terminale. Koordinačių įvedimas veikia ir čia.
4. **Spustelėkite dar kartą** (pasirinktinai), kad pradėtumėte naują matavimą. Komanda lieka aktyvi.

Paspaudus `Escape` bet kuriuo metu grįžtama į 2 žingsnį.

## Matavimų grandinimas

Kai rodomas rezultatas, spustelėjimas iškart pradeda kitą matavimą — spustelėtas taškas tampa nauju pirmu tašku. Taip galite išmatuoti atstumų seką neaktyvuodami komandos iš naujo.

## Distance ir Angle

| | Distance | Angle |
|---|---------|-------|
| Ką matuoja | Tiesios jungties ilgį | Vidinį kampą viršūnėje |
| Spustelėjimų skaičius | 2 | 3 |
| Rezultato formatas | `12.3456` (vienetai) | `45.0000°` |
| Peržiūra drobėje | Atkarpa nuo pirmo taško iki žymeklio | Dvi atkarpos nuo viršūnės iki žymeklio |
| Geriausiai tinka | Tarpo ar atkarpos ilgiui | Atsivėrimo kampui tarp dviejų elementų |

## Koordinačių įvedimas

Užuot spustelėję, galite įvesti tikslią bet kurio taško padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Patvirtinkite paspausdami **Enter**.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę |
| `Escape` | Atšaukia ir grįžta į 2 žingsnį |

## Pastabos

- Rezultatai rodomi **tik terminale** — į brėžinį nieko nepridedama.
- Rezultatas išreiškiamas tais pačiais vienetais kaip brėžinio koordinatės (be vienetų konvertavimo).
- Tikslumas visada 4 skaitmenys po kablelio.
