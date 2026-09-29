---
title: Mirror komanda — objektų atspindėjimas per dviejų taškų ašį
description: Mirror komanda atspindi pasirinktus objektus per atspindžio liniją, apibrėžtą dviem spustelėjimais. Originalai visada išlaikomi — Mirror sukuria naujas atspindėtas kopijas. Atspindžio ašis gali būti bet kokiu kampu ir prisitraukia prie 45° žingsnių.
keywords: [CAD mirror komanda, objektų atspindėjimas CAD, simetrija CAD, objektų apvertimas CAD, atspindžio ašis CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Komanda `mirror` sukuria atspindėtas pasirinktų objektų kopijas per dviejų taškų ašį. Originalai **visada išlaikomi** — skirtingai nei [Move](../move/) ar [Rotate](../rotate/), Mirror niekada nekeičia esamų objektų; ji tik prideda naujus.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada atspindėti** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `mirror` arba spustelėkite įrankių juostos mygtuką **Mirror**.
3. **Spustelėkite pirmą atspindžio ašies tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
4. **Spustelėkite antrą tašką** — atspindėtos kopijos padedamos ir komanda išeina. Koordinačių įvedimas veikia ir čia.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `mirror` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. **Spustelėkite pirmą tašką**, tada **antrą tašką** atspindžio ašies (abiejuose žingsniuose galimas koordinačių įvedimas).

```
  Originalas:        Atspindžio ašis:    Rezultatas:
                     |
  [objektas A]  →    |    →    [objektas A] + [atspindėtas A]
                     |
```

Gyva atspindėtų kopijų peržiūra seka žymeklį, kol išdėstote antrą ašies tašką.

## Atspindžio ašis

Ašis yra begalinė tiesė, einanti per du spustelėtus taškus. Ji gali būti bet kokiu kampu:

- Perkelkite žymeklį arti **45° prisitraukimo ašies** (0°, 45°, 90°, 135°, …) ir ašis užsirakina ties tuo kampu — naudinga švariems horizontaliems, vertikaliems ar įstrižiems atspindžiams.
- Spustelėkite už prisitraukimo zonos, kad gautumėte laisvo kampo ašį.

## Koordinačių įvedimas

Bet kuriame ašies taško žingsnyje vietoj spustelėjimo galite įvesti tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą |
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę |
| `Escape` | Atšaukia ir atstato |

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelį |
| **Enter** / **Space** | Patvirtina pasirinkimą |

## Kas atspindima

Palaikomas kiekvienas objekto tipas. Geometrija atspindima per ašį matematiškai:

| Objektas | Kas keičiasi |
|----------|--------------|
| Line | Abu galai atspindimi |
| Circle | Centras atspindimas; spindulys nekinta |
| Arc | Centras atspindimas; pradžios ir galo kampai perskaičiuojami per ašį |
| Ellipse | Centras atspindimas; didžiosios ašies kryptis apverčiama per ašį |
| Polyline / Rectangle | Kiekviena viršūnė atspindima |
| Text | Atspindimas inkaro taškas; teksto eilutė **neapverčiama** |
| Spline | Visos valdymo viršūnės / apibrėžiantys taškai atspindimi |

## Mirror ir Copy

| | Mirror | Copy |
|---|--------|------|
| Originalai | Visada išlaikomi | Visada išlaikomi |
| Naujo objekto padėtis | Atspindėta per ašį | Nustumta poslinkio vektoriumi |
| Geriausiai tinka | Simetriškiems dizainams, dvipusiams elementams | Geometrijos kartojimui bet kuria kryptimi |
