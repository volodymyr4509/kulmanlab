---
title: Spline Fit — interpoliuojančių splainų braižymas per spustelėtus taškus
description: Spline Fit komanda nubrėžia kubinį splainą, kuris eina tiksliai per kiekvieną spustelėtą tašką. Viduje kreivė saugoma ir su apibrėžiančiais taškais, ir su apskaičiuotomis valdymo viršūnėmis. Tempiant apibrėžiančio taško rankenėlę perinterpoliuojama visa kreivė. Pilnas DXF keitimasis kaip SPLINE objektai.
keywords: [CAD splaino fit komanda, interpoliuojantis splainas CAD, splainas per taškus, sklandžios kreivės braižymas CAD, SPLINE DXF apibrėžiantys taškai, splaino redagavimas rankenėlėmis, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Komanda `splinefit` nubrėžia kubinį splainą, einantį per kiekvieną jūsų spustelėtą tašką — interpoliuojančią kreivę. Skirtingai nei [Spline CV](../spline-cv/), kur kreivė tik traukiama link valdymo viršūnių, čia kreivė verčiama pataikyti į kiekvieną spustelėtą koordinatę tiksliai. Viduje redaktorius pritaiko valdymo viršūnes tam pasiekti, ir tos CV DXF faile saugomos kartu su apibrėžiančiais taškais.

## Splaino braižymas per apibrėžiančius taškus

1. Terminale įveskite `splinefit` arba spustelėkite įrankių juostos mygtuką **Spline Fit**.
2. **Spustelėkite, kad padėtumėte apibrėžiančius taškus** — kreivė praeis per kiekvieną. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. Paspauskite **Enter**, kad užbaigtumėte (reikia bent 2 taškų).

```
  ●──────●──────●──────●  ← kreivė eina tiksliai per kiekvieną spustelėjimą
  p1     p2     p3     p4
```

Gyva peržiūra rodo dabartinę interpoliuotą kreivę judinant žymeklį, įskaitant numatomą kitą tašką žymeklio vietoje. Paspauskite **Escape**, kad atmestumėte visus padėtus taškus ir išeitumėte.

## Koordinačių įvedimas

Užuot spustelėję, įveskite tikslią bet kurio apibrėžiančio taško padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte apibrėžiantį tašką.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Patvirtina įvestą koordinatę (tik Enter) arba užbaigia splainą, jei nevyksta joks įvedimas ir yra ≥ 2 taškai |
| `Escape` | Atmeta visus taškus ir išeina |

## Redagavimas rankenėlėmis — formos keitimas per apibrėžiančius taškus

Pasirinktas fit splainas atskleidžia po vieną rankenėlę kiekvienam apibrėžiančiam taškui:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Fit point** | Kiekvienoje spustelėtoje padėtyje | Tempkite, kad perkeltumėte tą apibrėžiantį tašką — visa kreivė perinterpoliuojama, kad praeitų per naują padėtį |

Vienos rankenėlės tempimas perpritaiko visą kreivę, o ne tik gretimas atkarpas. Tai skiriasi nuo polilinijos redagavimo rankenėlėmis, kur viršūnės perkėlimas keičia tik dviejų gretimų atkarpų formą.

Rankenėlės „perkelti visą splainą" nėra. Visam splainui perkelti naudokite komandą [Move](../move/).

## Fit splainų pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka šalia bet kurio kreivės taško |
| **Tempimas į dešinę** (griežtas) | Visi mėginių taškai išilgai kreivės turi būti pasirinkimo rėmelyje |
| **Tempimas į kairę** (kertantis) | Ją pasirenka bet kuri kreivės dalis, kertanti pasirinkimo rėmelio ribą |

## Palaikomos redagavimo komandos

| Komanda | Kas nutinka splainui |
|---------|----------------------|
| [Move](../move/) | Perkelia visus apibrėžiančius taškus ir perskaičiuotas CV tuo pačiu poslinkiu |
| [Copy](../copy/) | Sukuria identišką splainą naujoje vietoje |
| [Rotate](../rotate/) | Pasuka visus apibrėžiančius taškus aplink pasirinktą bazinį tašką |
| [Mirror](../mirror/) | Atspindi visus apibrėžiančius taškus per atspindžio ašį |
| [Scale](../scale/) | Vienodai keičia visų apibrėžiančių taškų mastelį nuo bazinio taško |
| [Trim](../trim/) | Apkerpa splainą jo sankirtose — kiekvienas gabalas yra ta pati kreivė mažesniame ruože |
| [Delete](../delete/) | Pašalina splainą |

Splainai palaiko **Trim**, bet nepalaiko **Offset** ar **Extend**.

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
| Fit Points | Visų spustelėtų taškų, per kuriuos eina kreivė, koordinatės |
| Control Vertices | Viduje apskaičiuotos CV, naudojamos kreivei atvaizduoti |

## Spline Fit ir Spline CV — kurį naudoti

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kreivė eina per taškus | Per kiekvieną spustelėtą tašką tiksliai | Tik per pirmą ir paskutinį (suspausta) |
| Rankenėlės redagavimo poveikis | Apibrėžiantis taškas pasislenka → visa kreivė perinterpoliuojama | CV pasislenka → kreivė pritraukiama link naujos padėties |
| Formos nuspėjamumas | Aukštas — kreivė seka spustelėjimus | Žemesnis — kreivė atsilieka nuo CV |
| Geriausiai tinka | Kreivėms, kurios turi pataikyti į konkrečias koordinates | Sklandžioms estetinėms kreivėms, laisvos formos keliams |

## DXF — SPLINE objektas (apibrėžiančių taškų forma)

Fit splainai DXF faile saugomi kaip `SPLINE` objektai, išsaugant ir apibrėžiančių taškų koordinates, ir apskaičiuotas valdymo viršūnes. `splineFlag` nustatomas į `8` (fit splainas), kad perkraunanti programa žinotų, kurią taškų rinkinį rodyti kaip redaguojamas rankenėles. Visos savybės — spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis — keliauja be praradimų. DXF programos, palaikančios fit splainus (LibreCAD, FreeCAD), rodys apibrėžiančius taškus kaip pirminius redaguojamus duomenis.
