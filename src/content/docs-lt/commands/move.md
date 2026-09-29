---
title: Move komanda — pasirinktų objektų perkėlimas pagal bazinį tašką
description: Move komanda perkelia vieną ar kelis pasirinktus objektus pagal bazinį tašką ir paskirtį. Palaiko išankstinį pasirinkimą, kampo užraktą ir tikslų atstumo įvedimą. Po perkėlimo objektai lieka pasirinkti naujoje vietoje. Palaikomas kiekvienas objekto tipas.
keywords: [CAD move komanda, objektų perkėlimas CAD, CAD objektų perkėlimas, kampo užraktas move, tikslus atstumas move, perkėlimas rankenėle CAD, kulmanlab]
group: edit
order: 1
---

# Move

Komanda `move` perkelia pasirinktus objektus iš bazinio taško į paskirties tašką. Poslinkis, taikomas kiekvienam pasirinktam objektui, yra vektorius nuo bazės iki paskirties. Po perkėlimo visi objektai lieka pasirinkti naujoje vietoje, paruošti tolesniems redagavimams.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada perkelti** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `move` arba spustelėkite įrankių juostos mygtuką **Move**.
3. **Spustelėkite bazinį tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
4. **Spustelėkite paskirtį** — visi pasirinkti objektai pasislenka bazė→paskirtis vektoriumi. Koordinačių įvedimas veikia ir čia.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `move` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte atskirus objektus, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. **Spustelėkite bazinį tašką**, tada **paskirtį** (abiejuose žingsniuose galimas koordinačių įvedimas).

```
  Prieš:                     Po:
  ● bazė                       → ● paskirtis
  [objektas A]                    [objektas A perkeltas]
  [objektas B]                    [objektas B perkeltas]
```

Visų pasirinktų objektų šešėlinė peržiūra seka žymeklį nuo bazinio taško iki paskirties, parodydama rezultatą prieš spustelint.

## Koordinačių įvedimas

Bazinio taško ar paskirties žingsnyje vietoj spustelėjimo galite įvesti tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

## Kampo užraktas ir tikslus atstumas

Nustačius bazinį tašką, komanda stebi 45° prisitraukimo ašį (0°, 45°, 90°, 135°, …). Kryptis **užsirakina**, kai žymeklis pakankamai toli nuo bazės ir per vieną rankenėlės plotį nuo ašies. Kai užrakinta:

- Šešėlinė peržiūra prisitraukia prie ašies.
- Įveskite atstumą ir paspauskite **Enter**, kad perkeltumėte tiksliai tiek užrakinta kryptimi.
- Spustelėjimas projektuojamas į ašį, todėl paskirtis visada guli tiksliai ant jos.

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda prie atstumo reikšmės |
| `-` | Neigiamas atstumas — apverčia kryptį išilgai ašies (tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Pritaiko perkėlimą įvestu atstumu |

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą ir pereina į bazinio taško fazę |
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba atstumą, kai kampas užrakintas |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina koordinatę arba pritaiko perkėlimą įvestu atstumu |
| `Escape` | Atšaukia ir atstato |

## Move aktyvavimas iš rankenėlės

Spustelėjus pasirinktos [Line](../line/) **vidurio rankenėlę**, Move paleidžiamas automatiškai, kai vidurio taškas jau nustatytas kaip bazinis taškas, o perkėlimo fazė aktyvi. Tai greičiausias būdas perkelti vieną liniją neperžengiant pasirinkimo žingsnio.

## Pasirinkimas komandos metu

Kai komanda prasideda pasirinkimo fazėje:

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą į pasirinkimą / iš jo |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelio ribą |
| **Enter** / **Space** | Patvirtina pasirinkimą ir pereina į bazinio taško fazę |

## Po perkėlimo

Perkelti objektai lieka pasirinkti naujoje vietoje. Tai reiškia, kad galite iškart:
- Vėl paleisti **Move**, kad juos dar pastumtumėte.
- Paleisti [Copy](../copy/), [Rotate](../rotate/) ar [Scale](../scale/) nepasirinkdami iš naujo.
- Paspausti **Delete**, kad juos pašalintumėte.

## Move ir Copy

| | Move | Copy |
|---|------|------|
| Pradinė padėtis | Atlaisvinama — objektų ten nebėra | Išlieka — originalai lieka vietoje |
| Rezultatų skaičius | Tiek pat objektų | Vienas papildomas rinkinys kiekvienai operacijai |
| Pasirinkimas po to | Perkelti objektai pasirinkti naujoje vietoje | Nukopijuoti objektai pasirinkti naujoje vietoje |
| Geriausiai tinka | Geometrijos perkėlimui | Geometrijos dubliavimui |

## Palaikomi objektai

Move veikia su kiekvienu objekto tipu: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader ir visais kitais. Visi objektai įgyvendina `translate(dx, dy)`, todėl nė vienas neišskiriamas.
