---
title: Angle — vidinio kampo viršūnėje matavimas trimis taškais
description: Angle komanda matuoja vidinį kampą (0°–180°) viršūnėje, apibrėžtoje trimis spustelėtais taškais. Spustelėkite pirmą galą, viršūnę, antrą galą. Rezultatas rodomas terminale 4 skaitmenų po kablelio tikslumu.
keywords: [CAD kampo matavimas, trijų taškų kampas, vidinis kampas CAD, kampo matavimo komanda, viršūnės kampas, kulmanlab]
group: measure
order: 2
---

# Angle

Komanda `angle` matuoja vidinį kampą viršūnėje, kurią sudaro dvi linijų atkarpos per tris spustelėtus taškus. Rezultatas — visada tarp 0° ir 180° — rodomas terminale 4 skaitmenų po kablelio tikslumu. Tai viena iš trijų matavimo komandų — [Distance](../distance/) matuoja tiesios linijos ilgį, o [Area](../area/) matuoja daugiakampio apribotą plotą ir perimetrą.

## Kampo matavimo anatomija

```
  ● pirmas taškas (pirmo spindulio galas)
   \
    \  pirmo spindulio peržiūra
     \
      ● viršūnė (3 žingsnis)
     /
    /  antro spindulio peržiūra (iki žymeklio)
   /
  ● trečias taškas  →  terminalas: "Angle: 45.0000°"
```

- **Pirmas taškas** — vienas kampo galas (2 žingsnis).
- **Viršūnė** — kampas, kuriame matuojamas kampas (3 žingsnis).
- **Trečias taškas** — kitas kampo galas (4 žingsnis).

## Kampo matavimas

1. Terminale įveskite `angle` arba spustelėkite įrankių juostos mygtuką **Angle**.
2. **Spustelėkite pirmą tašką** — vieną kampo petį. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite viršūnę** — kampą, kuriame susitinka du pečiai. Koordinačių įvedimas veikia ir čia.
4. **Spustelėkite trečią tašką** — antrojo peties galą. Koordinačių įvedimas veikia ir čia. Padėjus šį tašką, išspausdinamas rezultatas.
5. **Spustelėkite dar kartą** (pasirinktinai), kad pradėtumėte naują matavimą, kai spustelėtas taškas tampa nauju pirmu tašku.

## Vidinio kampo konvencija

Komanda kampą apskaičiuoja naudodama dviejų spindulių iš viršūnės skaliarinę sandaugą:

- **Visada vidinis**: rezultatas yra mažesnis kampas, tarp 0° ir 180°.
- Galų spustelėjimo tvarka rezultato nekeičia — svarbi tik viršūnės padėtis.
- Kolinearūs taškai (visi trys ant vienos linijos) grąžina 0° arba 180°.

## Matavimų grandinimas

Kai pasirodo rezultatas, spustelėjimas iškart pradeda kitą matavimą — spustelėtas taškas tampa nauju pirmu tašku. Komanda niekada automatiškai neišeina, kol nepaspausite `Escape`.

## Angle ir Distance

| | Angle | Distance |
|---|-------|----------|
| Ką matuoja | Vidinį kampą viršūnėje | Tiesios linijos ilgį |
| Spustelėjimų skaičius | 3 | 2 |
| Rezultato formatas | `45.0000°` | `12.3456` (vienetai) |
| Peržiūra drobėje | Dvi linijos nuo viršūnės iki abiejų galų | Linija nuo pirmo taško iki žymeklio |
| Geriausiai tinka | Atsivėrimo kampui tarp dviejų elementų | Tarpo ar atkarpos ilgiui |

## Koordinačių įvedimas

Užuot spustelėję, galite įvesti tikslią padėtį bet kuriam iš trijų taškų:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

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
- Tikslumas visada 4 skaitmenys po kablelio laipsniais.
