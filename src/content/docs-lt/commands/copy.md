---
title: Copy komanda — objektų dubliavimas naujoje vietoje
description: Copy komanda sukuria perkeltus pasirinktų objektų dublikatus palikdama originalus vietoje. Palaiko išankstinį pasirinkimą, kampo užraktą ir tikslų atstumo įvedimą. Kopijos padedamos ir komanda išeina; originalai lieka nepakeisti.
keywords: [CAD copy komanda, objektų dubliavimas CAD, CAD objektų kopijavimas, geometrijos klonavimas CAD, kampo užraktas kopijuojant, tikslus atstumas kopijuojant, kulmanlab]
group: edit
order: 2
---

# Copy

Komanda `copy` sukuria perkeltus pasirinktų objektų dublikatus ir padeda juos pasislinkusius nuo bazinio taško iki paskirties — originalai lieka lygiai ten, kur buvo. Tai vienintelis esminis skirtumas nuo [Move](../move/): Copy prideda naujus objektus į brėžinį; Move perkelia esamus.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada kopijuoti** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `copy` arba spustelėkite įrankių juostos mygtuką **Copy**.
3. **Spustelėkite bazinį tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
4. **Spustelėkite paskirtį** — dublikatai atsiranda bazė→paskirtis poslinkiu. Koordinačių įvedimas veikia ir čia.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `copy` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte atskirus objektus, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. **Spustelėkite bazinį tašką**, tada **paskirtį** (abiejuose žingsniuose galimas koordinačių įvedimas).

```
  Prieš:                Po:
  [objektas A]          [objektas A]  ← originalai nepaliesti
  [objektas B]          [objektas B]
                        [A kopija] ← nauji objektai
                        [B kopija]
```

Kopijų šešėlinė peržiūra seka žymeklį nuo bazinio taško iki paskirties.

## Koordinačių įvedimas

Bazinio taško ar paskirties žingsnyje vietoj spustelėjimo galite įvesti tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

## Kampo užraktas ir tikslus atstumas

Nustačius bazinį tašką, komanda prisitraukia prie 45° ašių (0°, 45°, 90°, 135°, …), kai žymeklis pakankamai toli ir šalia ašies. Užrakinus įveskite atstumą ir paspauskite **Enter**, kad kopijos būtų padėtos tiksliai tokiu poslinkiu.

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda prie atstumo reikšmės |
| `-` | Neigiamas atstumas — apverčia kryptį išilgai ašies (tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda kopijas įvestu atstumu |

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą ir pereina į bazinio taško fazę |
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba atstumą, kai kampas užrakintas |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina koordinatę arba pritaiko kopiją įvestu atstumu |
| `Escape` | Atšaukia ir atstato |

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą į pasirinkimą / iš jo |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelio ribą |
| **Enter** / **Space** | Patvirtina pasirinkimą |

## Po kopijavimo

**Originalai lieka pasirinkti** — naujos kopijos pridedamos į brėžinį, tačiau pasirinkimas išvalomas ir komanda išeina. Norėdami iškart dirbti su kopijomis, dar kartą paleiskite Copy su pasirinkimu arba pradėkite naują komandą.

## Copy ir Move

| | Copy | Move |
|---|------|------|
| Originalai | Lieka vietoje | Pašalinami iš pradinės padėties |
| Rezultatų skaičius | Padidėja nukopijuotų objektų skaičiumi | Nekinta |
| Po operacijos | Originalai vis dar pasirinkti | Perkelti objektai pasirinkti naujoje vietoje |
| Geriausiai tinka | Geometrijos kartojimui, simetriškiems išdėstymams | Geometrijos perkėlimui |

## Palaikomi objektai

Copy veikia su kiekvienu objekto tipu. Visi objektai viduje įgyvendina `translate(dx, dy)`, todėl nieko neišskiriama.
