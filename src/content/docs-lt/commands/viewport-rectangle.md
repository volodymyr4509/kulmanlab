---
title: ViewportRectangle komanda — vaizdo lango sukūrimas makete
description: ViewportRectangle komanda sukuria vaizdo langą popieriaus makete pasirinkdama du priešingus kampus. Vaizdo langas rodo modelio erdvės objektus numatytuoju maketo masteliu.
keywords: [stačiakampis vaizdo langas, vaizdo lango kūrimas, maketo vaizdo langas, popieriaus erdvės vaizdo langas, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Komanda `ViewportRectangle` sukuria naują vaizdo langą aktyviame popieriaus makete pasirinkdama du priešingus kampus. Prieinama tik maketo erdvėje.

## Vaizdo lango sukūrimas

1. Persijunkite į popieriaus maketą naudodami skirtuką ekrano apačioje.
2. Terminale įveskite `ViewportRectangle` arba spustelėkite įrankių juostos mygtuką **Viewport Rectangle**.
3. **Spustelėkite pirmą kampą** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
4. **Spustelėkite priešingą kampą** — vaizdo langas padedamas iškart. Koordinačių įvedimas veikia ir čia.

Naujas vaizdo langas rodo visą modelį numatytuoju maketo masteliu. Naudokite pelės ratuką vaizdo lango viduje, kad priartintumėte, arba tempkite vidurinį klavišą, kad slinktumėte modelio vaizdą.

## Koordinačių įvedimas

Bet kuriame kampo žingsnyje galite įvesti tikslią koordinatę:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte tašką.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Enter` | Patvirtina įvestą koordinatę |
| `Escape` | Atšaukia |

## Vaizdo lango redagavimas

Padėję vaizdo langą, spustelėkite jį, kad pasirinktumėte:

- **Tempkite kraštus ar kampus**, kad pakeistumėte dydį.
- **Tempkite centrinę rankenėlę**, kad jį perkeltumėte.
- Naudokite **mastelio pasirinkiklį** valdymo juostoje, kad nustatytumėte tikslų mastelį (pvz., 1:50). Norėdami įvesti mastelį, kurio sąraše nėra, įveskite jį tiesiai į įvesties lauką išskleidžiamojo meniu apačioje — priima santykio formatą (`1:200`, `5:1`) arba paprastą dešimtainį skaičių (`0.005`), tada paspauskite **Enter**.
- Spustelėkite vaizdo langą dešiniuoju klavišu ir naudokite **Lock**, kad išvengtumėte netyčinių pakeitimų.

## Pastabos

- ViewportRectangle prieinamas tik tada, kai aktyvus popieriaus maketo skirtukas. Paleidus jį modelio erdvėje, parodomas klaidos pranešimas ir komanda išeina.
- Esamam vaizdo langui nukopijuoti naudokite [ViewportCopy](../viewport-copy/).
