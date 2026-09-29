---
title: Fillet komanda — kampo suapvalinimas liestiniu lanku
description: Fillet komanda suapvalina kampą tarp dviejų Line, Arc ar Polyline atkarpų nurodyto spindulio liestiniu lanku. Suapvalinus paties polilinijos kampą, lankas įterpiamas vietoje; suapvalinus tarp atvirų polilinijų, abi pusės sujungiamos į vieną naują poliliniją.
keywords: [CAD fillet komanda, kampo suapvalinimas CAD, suapvalinimo lankas, liestinis lankas, polilinijos suapvalinimas, lanko suapvalinimas, kulmanlab]
group: edit
order: 11
---

# Fillet

Komanda `fillet` suapvalina kampą tarp dviejų [Line](../line/), [Arc](../arc/) ar [Polyline](../polyline/) atkarpų įterpdama nurodyto spindulio liestinį lanką ir apkirpdama (ar sujungdama) pasirinktus objektus iki vietos, kur prasideda lankas.

Fillet veikia su **Line, Arc ir Polyline** objektais — įskaitant paties polilinijos tiesias ar lanko atkarpas.

## Fillet naudojimas

1. Terminale įveskite `fillet` arba spustelėkite įrankių juostos mygtuką **Fillet**.
2. **Įveskite suapvalinimo spindulį** ir paspauskite **Enter**.
3. **Spustelėkite pirmą liniją, lanką ar polilinijos atkarpą** — dalis, ant kurios spustelėjate, nustato, kuri bet kokios sankirtos pusė paliekama.
4. **Užveskite žymeklį ant antro objekto** — brūkšninė lanko peržiūra rodo gautą suapvalinimą. Perkelkite žymeklį į pusę, kurią norite palikti.
5. **Spustelėkite**, kad pritaikytumėte.

```
  Prieš:                      Po suapvalinimo (spindulys r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pusės pasirinkimas kertantiems objektams

Kai du objektai kertasi, suapvalinimas taikomas kampui, nustatytam pagal spustelėjimo vietas — paliekama kiekvieno objekto dalis **toje pačioje pusėje kaip žymeklis**.

- Spustelėkite arti vieno pirmo objekto galo, kad pasirinktumėte tą pusę.
- Perkelkite žymeklį į norimą antro objekto pusę — brūkšninė peržiūra atnaujinama gyvai.

## Ką komanda sukuria

Rezultatas priklauso nuo to, ką pasirinkote:

- **Dvi atskiros Line/Arc** arba bet kuri pora, į kurią nepatenka atvira polilinija: abi apkarpomos iki liestinės taškų **T1**/**T2**, ir tarp jų įterpiamas naujas Arc objektas.
- **Dvi tos pačios polilinijos atkarpos, dalijančios kampinę viršūnę**: naujo objekto nėra — suapvalinimas tampa paties polilinijos dalimi. Kampinė viršūnė pakeičiama dviem liestinės taškais, o lankas tarp jų saugomas kaip to krašto išlinkis (bulge), tiksliai taip, kaip suapvalintas polilinijos kampas keliauja per DXF.
- **Bet kas kita, susijęs su atvira polilinija** — dvi skirtingos atviros polilinijos, arba atvira polilinija ir atskira Line/Arc: abi sujungiamos į **vieną naują poliliniją**, kiekviena pusė paliekama iki savo liestinės taško ir sujungiama suapvalinimo lanku kaip dar viena atkarpa su išlinkiu, pakeičiant pradinius objektus.

Įterptas ar pratęstas lankas paveldi dabartinius linijos storio, spalvos, sluoksnio ir linijos tipo nustatymus (arba paties polilinijos, kai ji įtraukiama į ją).

## Kampai be tikro apvalinamo kampo

Jei dvi pasirinktos atkarpos jau susitinka liestiniu būdu bendroje viršūnėje — tiesus polilinijos kampas arba linija, sklandžiai pereinanti į liestinę lanko atkarpą — nėra tikro kampo, kurį apvalintų kuris nors apskritimas. Fillet tai aptinka ir atsisako su `cannot fillet: no tangent circle fits there`, užuot nubrėžęs paklydusią kilpą.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie spindulio reikšmės |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Patvirtina įvestą spindulį ir pereina prie objektų pasirinkimo |
| `Escape` | Atšaukia ir atstato |

## Palaikomi objektai

| Objektas | Palaikomas |
|----------|------------|
| Line | Taip |
| Arc | Taip |
| Polyline (tiesi ar lanko atkarpa) | Taip |
| Circle, Ellipse | Ne |
| Text, Spline, Dimension, Leader | Ne |

## Fillet ir Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Kampo tipas | Suapvalintas lankas | Tiesus nuskėlimas |
| Įvestis | Vienas spindulys | Du atstumai (d1, d2) |
| Įterpiamas objektas | Arc | Line |
| Palaikomi objektai | Lines, Arcs ir Polylines (tiesios ar lanko atkarpos) | Lines ir Polylines (tik tiesios atkarpos) |
