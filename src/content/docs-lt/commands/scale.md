---
title: Scale komanda — objektų dydžio keitimas vienodai aplink bazinį tašką
description: Scale komanda vienodai keičia pasirinktų objektų dydį įvestu koeficientu aplink fiksuotą bazinį tašką. Koeficientas visada įvedamas klaviatūra — mastelio nustatymo spustelėjimu nėra. Koeficientas didesnis nei 1 didina; mažesnis nei 1 mažina. Palaikomas kiekvienas objekto tipas.
keywords: [CAD scale komanda, objektų dydžio keitimas CAD, objektų mastelis CAD, vienodas mastelis CAD, mastelio koeficientas CAD, didinimas mažinimas CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Komanda `scale` vienodai keičia pasirinktų objektų dydį aplink bazinį tašką. Visi atstumai nuo bazinio taško dauginami iš mastelio koeficiento — koeficientas `2` padvigubina visus matmenis, `0.5` juos perpus sumažina. Koeficientas visada įvedamas rinkimu; mastelio nustatymo spustelėjimu nėra.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada keisti mastelį** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `scale` arba spustelėkite įrankių juostos mygtuką **Scale**.
3. **Spustelėkite bazinį tašką** — fiksuotą tašką, kuris keičiant mastelį nejuda. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
4. **Įveskite mastelio koeficientą** ir paspauskite **Enter**.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `scale` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. **Spustelėkite bazinį tašką** (galimas koordinačių įvedimas), tada įveskite koeficientą.

```
  Bazė ●                Bazė ●
        [objektas]  →         [didesnis objektas]
  koeficientas = 2 → atstumai nuo ● padvigubėja
```

## Mastelio koeficiento įvedimas

Padėjus bazinį tašką, terminalas rodo `enter scale factor:` ir laukia įvedimo klaviatūra:

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie koeficiento |
| `-` | Neigiamas koeficientas (tik pirmas simbolis — pirmiausia apverčia, tada keičia mastelį) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Pritaiko mastelį įvestu koeficientu |

Koeficientas turi būti nelygus nuliui. Įprastos reikšmės:

| Koeficientas | Poveikis |
|--------------|----------|
| `2` | Padvigubina visus matmenis |
| `0.5` | Perpus sumažina visus matmenis |
| `1.5` | Padidina 50 % |
| `-1` | Atspindi per bazinį tašką (lygu 180° pasukimui) |

Renkant gyvos peržiūros nėra — pakeistas rezultatas pasirodo tik paspaudus **Enter**.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą |
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą (bazinio taško fazė) arba mastelio koeficientą (koeficiento fazė) |
| `,` | Užrakina X ir pereina prie Y įvedimo (bazinio taško fazė) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina koordinatę arba pritaiko mastelį |
| `Escape` | Atšaukia ir atstato |

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelį |
| **Enter** / **Space** | Patvirtina pasirinkimą |

## Kas keičiamas masteliu

Palaikomi visi objektų tipai. Kiekvienas objektas keičia savo geometrijos mastelį bazinio taško atžvilgiu:

| Objektas | Kas keičiasi |
|----------|--------------|
| Line | Abu galai nutolsta nuo bazinio taško |
| Circle | Centras keičia mastelį nuo bazinio taško; spindulys dauginamas iš koeficiento |
| Arc | Centras keičia mastelį; spindulys dauginamas iš koeficiento; kampai nekinta |
| Ellipse | Centras keičia mastelį; abiejų pusašių ilgiai dauginami iš koeficiento |
| Polyline / Rectangle | Kiekviena viršūnė keičia mastelį nuo bazinio taško |
| Text | Inkaro taškas keičia mastelį; aukštis dauginamas iš koeficiento |
| Spline | Visos valdymo viršūnės / apibrėžiantys taškai keičia mastelį |
