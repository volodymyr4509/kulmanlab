---
title: Offset komanda — lygiagrečių kopijų kūrimas fiksuotu atstumu
description: Offset komanda sukuria lygiagrečią Line, Circle, Arc, Ellipse ar Polyline kopiją įvestu atstumu. Atstumas įvedamas vieną kartą ir naudojamas keliems poslinkiams. Pusės spustelėjimas nustato, kuria kryptimi atsiranda kopija. Palaikomi penki objektų tipai.
keywords: [CAD offset komanda, lygiagreti kopija CAD, linijos poslinkis CAD, apskritimo poslinkis CAD, polilinijos poslinkis CAD, koncentrinis poslinkis, kulmanlab]
group: edit
order: 10
---

# Offset

Komanda `offset` sukuria lygiagrečią objekto kopiją fiksuotu statmenu atstumu. Atstumą įvedate vieną kartą, tada spustelite objektus ir pasirenkate pusę — komanda lieka paruošta tuo pačiu atstumu, todėl vienoje sesijoje galite atlikti kelių objektų poslinkį.

Palaikomi objektų tipai: **Line, Circle, Arc, Ellipse, Polyline** (įskaitant Rectangles).

## Offset naudojimas

1. Terminale įveskite `offset` arba spustelėkite įrankių juostos mygtuką **Offset**.
2. **Įveskite poslinkio atstumą** ir paspauskite **Enter** arba **Space**.
3. **Spustelėkite objektą**, kurį norite nustumti — jei objektas nėra palaikomo tipo, pasirodo klaidos pranešimas ir galite spustelėti kitą objektą.
4. **Perkelkite žymeklį** į pusę, kurioje turi atsirasti kopija — seka gyva peržiūra.
5. **Spustelėkite**, kad padėtumėte nustumtą kopiją.

Po kiekvieno padėjimo komanda grįžta į 3 žingsnį **tuo pačiu atstumu**, paruošta kitam poslinkiui. Paspauskite **Enter** arba **Space** laukdami kito objekto pasirinkimo, kad užbaigtumėte komandą, arba **Escape**, kad grįžtumėte į atstumo įvedimo žingsnį.

```
  Atstumas: 10

  ─────────────────    ← pradinė linija
  ─────────────────    ← nustumta kopija (10 vienetų žemiau)
```

## Poslinkio elgsena pagal objektą

| Objektas | Kaip apskaičiuojamas poslinkis |
|----------|--------------------------------|
| **Line** | Lygiagreti linija, pastumta statmenai pradinei krypčiai |
| **Circle** | Koncentrinis apskritimas; spustelėjus išorėje → didesnis spindulys, viduje → mažesnis spindulys |
| **Arc** | Koncentrinis lankas naujo spindulio; išlaikomas tas pats kampinis plotis |
| **Ellipse** | Abi pusašės padidinamos ar sumažinamos tuo pačiu atstumu |
| **Polyline** | Kiekviena atkarpa nustumiama atskirai; gretimos nustumtos atkarpos kampuose sujungiamos įstrižai |

**Circle**, **Arc** ir **Ellipse** atveju: jei poslinkis į vidų sumažintų bet kurį spindulį ar pusašę iki nulio ar mažiau, poslinkis netaikomas.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie atstumo reikšmės |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` (renkant atstumą) | Patvirtina įvestą atstumą ir pereina prie objekto pasirinkimo |
| `Enter` / `Space` (neveikiant, laukiant kito objekto pasirinkimo) | Užbaigia Offset komandą |
| `Escape` | Atstato į atstumo įvedimo žingsnį |

## Darbo eigos pastaba

Atstumas lieka nustatytas, kol nepaspausite **Escape**. Dėl to efektyvu nustumti daug objektų tokiu pat tarpu — atstumą įveskite vieną kartą, tada iš eilės spustelėkite ir pasirinkite pusę kiekvienam objektui.

## Offset ir Copy

| | Offset | Copy |
|---|--------|------|
| Poslinkis | Statmenas objekto geometrijai | Savavališkas vektorius (bazė → paskirtis) |
| Palaikomi objektai | Line, Circle, Arc, Ellipse, Polyline | Visi objektų tipai |
| Atstumo įvedimas | Įvedamas prieš pasirenkant objektą | Įvedamas ar spustelimas po objekto pasirinkimo |
| Geriausiai tinka | Lygiagrečioms linijoms, koncentriniams apskritimams, į vidų/išorę nustumtiems keliams | Dublikatų padėjimui savavališkose vietose |
