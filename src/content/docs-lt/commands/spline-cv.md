---
title: Spline CV komanda — B-splainų braižymas dedant valdymo viršūnes
description: Spline CV komanda nubrėžia kubinį B-splainą dedant valdymo viršūnes. Kreivė traukiama link viršūnių, bet eina tik per pirmą ir paskutinę (suspaustos mazgai). Kiekvieną CV rankenėlę po padėjimo galima tempti, kad pakeistumėte kreivės formą. Pilnas DXF keitimasis kaip SPLINE objektai.
keywords: [CAD splaino komanda, B-splainas valdymo viršūnės, suspaustas splainas CAD, splaino braižymas CAD, SPLINE DXF objektas, splaino redagavimas rankenėlėmis, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Komanda `splinecv` nubrėžia **kubinį B-splainą** dedant valdymo viršūnes (CV). Gauta kreivė traukiama link kiekvieno CV, bet per juos neina — išskyrus pačią pirmą ir paskutinę viršūnę, kur **suspausti mazgai** kreivę ankeruoja tiksliai. Tai suteikia intuityvią formos kontrolę: patraukite viršūnę ir kreivė pasisuka link jos, neverčiama liesti kiekvieno taško.

## Splaino braižymas valdymo viršūnėmis

1. Terminale įveskite `splinecv` arba spustelėkite įrankių juostos mygtuką **Spline CV**.
2. **Spustelėkite, kad padėtumėte valdymo viršūnes** — kiekvienas spustelėjimas prideda viršūnę. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. Paspauskite **Enter**, kad užbaigtumėte (reikia bent 2 viršūnių).

```
  CV ●         ● CV
      \       /
       \     /    ← kreivė traukiama link CV,
        \   /         bet per jas neina
  CV ●   ●   ● CV (pradžia/galas: kreivė čia liečiasi)
```

Gyva peržiūra po kiekvienos viršūnės atsinaujina judinant žymeklį, rodydama, kaip splainas atrodys su kitu tašku žymeklio vietoje. Paspauskite **Escape**, kad atmestumėte visas padėtas viršūnes ir išeitumėte.

## Koordinačių įvedimas

Užuot spustelėję, įveskite tikslią bet kurios valdymo viršūnės padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte viršūnę.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Patvirtina įvestą koordinatę (tik Enter) arba užbaigia splainą, jei nevyksta joks įvedimas ir yra ≥ 2 viršūnės |
| `Escape` | Atmeta visas viršūnes ir išeina |

## Redagavimas rankenėlėmis — formos keitimas per valdymo viršūnes

Pasirinktas CV splainas atskleidžia po vieną rankenėlę kiekvienai valdymo viršūnei:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Valdymo viršūnė** | Kiekvienoje CV padėtyje | Tempkite, kad perkeltumėte tą CV — kreivė keičia formą link naujos padėties |

Rankenėlės „perkelti visą splainą" nėra. Visam splainui perkelti naudokite komandą [Move](../move/).

## CV splainų pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka šalia bet kurio kreivės taško |
| **Tempimas į dešinę** (griežtas) | Visi mėginių taškai išilgai kreivės turi būti pasirinkimo rėmelyje |
| **Tempimas į kairę** (kertantis) | Ją pasirenka bet kuri kreivės dalis, kertanti pasirinkimo rėmelio ribą |

## Palaikomos redagavimo komandos

| Komanda | Kas nutinka splainui |
|---------|----------------------|
| [Move](../move/) | Perkelia visas valdymo viršūnes tuo pačiu poslinkiu |
| [Copy](../copy/) | Sukuria identišką splainą naujoje vietoje |
| [Rotate](../rotate/) | Pasuka visas CV aplink pasirinktą bazinį tašką |
| [Mirror](../mirror/) | Atspindi visas CV per atspindžio ašį |
| [Scale](../scale/) | Vienodai keičia visų CV mastelį nuo bazinio taško |
| [Delete](../delete/) | Pašalina splainą |

Splainai nepalaiko **Offset**, **Trim** ar **Extend**.

## Savybės

**Bendrosios**

| Savybė | Numatyta | Reikšmė |
|--------|----------|---------|
| Color | 256 (ByLayer) | ACI spalvos indeksas |
| Layer | `0` | Sluoksnio priskyrimas |
| Linetype | ByLayer | Įvardytas linijos tipo raštas |
| Linetype Scale | 1 | Linijos tipo rašto mastelio daugiklis |
| Thickness | 0 | Ištempimo storis |

**Geometrija**

| Savybė | Reikšmė |
|--------|---------|
| Degree | Polinomo laipsnis — visada 3 (kubinis) |
| Control Vertices | Visų CV koordinatės |
| Fit Points | CV splainams tuščia; užpildoma tik splainams su apibrėžiančiais taškais |

## Spline CV ir Spline Fit — kurį naudoti

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kreivė eina per taškus | Tik per pirmą ir paskutinį (suspausta) | Per kiekvieną spustelėtą tašką tiksliai |
| Formos kontrolė | Traukti CV link srities | Perkelti apibrėžiančius taškus, per kuriuos kreivė turi praeiti |
| Rankenėlės redagavimo poveikis | CV pasislenka → kreivė pritraukiama | Apibrėžiantis taškas pasislenka → kreivė perinterpoliuojama |
| Geriausiai tinka | Sklandžioms estetinėms kreivėms, laisvos formos keliams | Kreivėms, kurios turi pataikyti į konkrečias koordinates |

## DXF — SPLINE objektas (valdymo viršūnių forma)

CV splainai DXF faile saugomi kaip `SPLINE` objektai, išsaugant laipsnį, mazgų vektorių ir visų valdymo viršūnių koordinates. Visos savybės — spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis — keliauja be praradimų. `splineFlag` nustatomas į `9` (CV splainas), todėl forma išsaugoma perkraunant. Bet kuri DXF programa, palaikanti `SPLINE` objektus su CV duomenimis, juos skaito teisingai.
