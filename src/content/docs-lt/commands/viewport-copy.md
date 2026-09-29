---
title: ViewportCopy komanda — vaizdo lango dubliavimas KulmanLab CAD
description: ViewportCopy komanda dubliuoja pasirinktą vaizdo langą į naują padėtį tame pačiame makete, išlaikydama mastelį ir modelio vaizdo nustatymus. Palaiko tikslų koordinačių įvedimą, kampo užraktą ir atstumo įvedimą.
keywords: [vaizdo lango kopija, vaizdo lango dubliavimas, maketo vaizdo lango kopijavimas, kampo užraktas vaizdo langas, tikslios koordinatės vaizdo langas, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Komanda `ViewportCopy` nukopijuoja vaizdo langą į naują padėtį, išlaikydama jo mastelį ir modelio centrą. Prieinama tik maketo erdvėje.

## Vaizdo lango kopijavimas

1. Persijunkite į popieriaus maketo skirtuką.
2. Pasirinktinai spustelėkite vaizdo langą, kad jį iš anksto pasirinktumėte.
3. Terminale įveskite `ViewportCopy` arba spustelėkite įrankių juostos mygtuką **Viewport Copy**.
4. Jei vaizdo langas iš anksto nepasirinktas, **spustelėkite vaizdo langą**, kurį norite kopijuoti.
5. **Spustelėkite bazinį tašką** — atskaitos tašką poslinkiui. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
6. **Spustelėkite paskirtį** — vaizdo langas padedamas bazė→paskirtis poslinkiu. Arba naudokite koordinačių įvedimą / kampo užraktą.

Po padėjimo komanda lieka aktyvi — spustelėkite kitą paskirtį, kad padėtumėte dar vieną to paties vaizdo lango kopiją. Paspauskite **Enter**, **Space** arba **Escape**, kad užbaigtumėte.

## Koordinačių įvedimas

Bazinio taško ir paskirties žingsniuose vietoj spustelėjimo galite įvesti tikslią koordinatę:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

## Kampo užraktas ir tikslus atstumas

Nustačius bazinį tašką, komanda prisitraukia prie 45° ašių (0°, 45°, 90°, 135°, …), kai žymeklis susilygiuoja. Kai užrakinta:

- Peržiūra prisitraukia prie ašies.
- Įveskite atstumą ir paspauskite **Enter**, kad padėtumėte kopiją tiksliai tokiu poslinkiu užrakinta kryptimi.

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie atstumo reikšmės |
| `-` | Neigiamas atstumas (apverčia kryptį; tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda kopiją įvestu atstumu |

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba atstumą, kai kampas užrakintas |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Enter` | Patvirtina įvestą koordinatę ar atstumą |
| `Enter` / `Space` | Užbaigia (kai nevyksta joks įvedimas) |
| `Escape` | Atšaukia ir atstato |

## Pastabos

- ViewportCopy prieinamas tik tada, kai aktyvus popieriaus maketo skirtukas.
- Nukopijuotas vaizdo langas paveldi tą patį mastelį, modelio centrą, užrakinimo būseną ir matmenis kaip originalas.
- Naują vaizdo langą nuo nulio sukurkite komanda [ViewportRectangle](../viewport-rectangle/).
