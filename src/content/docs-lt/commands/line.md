---
title: Line komanda — linijų braižymas, grandinimas, apkirpimas ir pratęsimas
description: Line komanda nubrėžia atskiras tiesių linijų atkarpas, kurias galima grandinti galas į galą. Linijos yra vienintelis objekto tipas, su kuriuo veikia Trim ir Extend. Pilnas DXF keitimasis kaip LINE objektai.
keywords: [CAD line komanda, tiesios linijos braižymas CAD, linijų atkarpų grandinimas, linijos apkirpimas CAD, linijos pratęsimas CAD, kampo užraktas CAD, DXF LINE objektas, kulmanlab]
group: shapes
order: 1
---

# Line

Komanda `line` nubrėžia atskiras tiesių linijų atkarpas, saugomas kaip atskiri `LINE` objektai DXF modelyje. Po kiekvienos atkarpos komanda lieka aktyvi ir panaudoja galinį tašką kaip naują pradžios tašką, todėl galite kurti sujungtus kelius po vieną atkarpą. Skirtingai nei [Polyline](../polyline/), sugrandintos linijos lieka nepriklausomi objektai — kiekvieną galima apkirpti, pratęsti ar ištrinti nepaveikiant kaimynų.

## Linijų braižymas

1. Terminale įveskite `line` arba spustelėkite įrankių juostos mygtuką **Line**.
2. **Spustelėkite pradžios tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite galo tašką** — atkarpa padedama, o galinis taškas tampa kitos atkarpos pradžia. Koordinačių įvedimas veikia ir čia.
4. Toliau spustelėkite (arba renkite), kad sugrandintumėte daugiau atkarpų.
5. Paspauskite **Enter**, **Space** arba **Escape**, kad sustotumėte.

```
  ●──────────●──────────●──────────●
 pradžia   2-as spustelėjimas  3-as spustelėjimas   Enter/Space baigia
            (automatiškai tampa kita pradžia)
```

Reikia tik vienos atkarpos? Paspauskite **Enter**, **Space** arba **Escape** iškart po 3 žingsnio.

## Koordinačių įvedimas

Užuot spustelėję, galite įvesti tikslią padėtį pradžios ar bet kuriam vėlesniam taškui:

1. Įveskite X reikšmę (skaitmenys, `.` arba `-`).
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte tašką.

## Kampo užraktas ir tikslaus ilgio įvedimas

Judindami žymeklį po taško padėjimo, komanda stebi 45° prisitraukimo ašį (0°, 45°, 90°, 135°, …). Kampas **užsirakina**, kai:

- žymeklis yra bent **5 × rankenėlės dydžio** atstumu nuo inkaro, **ir**
- yra per **1 rankenėlės dydį** statmenu atstumu nuo artimiausios ašies.

Kai užrakinta, peržiūra prisitraukia prie ašies ir galite įvesti tikslų ilgį:

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie ilgio reikšmės |
| `-` | Neigiamas ilgis — apverčia kryptį išilgai ašies (tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda galinį tašką įvestu atstumu |

Sukaupta reikšmė rodoma gyvai terminale (pvz., `click end point or enter length: 12.5`). Spustelėjus užrakinus, spustelėjimas projektuojamas į ašį, todėl galinis taškas visada guli tiksliai ant jos.

Grįžus arti inkaro taško, užraktas atsileidžia.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba atstumą, kai kampas užrakintas |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę ar ilgį arba užbaigia grandinę, jei nieko neįvesta |
| `Space` | Tas pats kaip `Enter` — užbaigia grandinę, nebent renkamas ilgis, tuomet patvirtina tą ilgį |
| `Escape` | Užbaigia grandinę ir išeina |

## Redagavimas rankenėlėmis — galų tempimas

Pasirinkta linija rodo tris rankenėles:

| Rankenėlė | Kur | Ką daro |
|-----------|-----|---------|
| **Start** | Pirmas galas | Tempkite, kad perkeltumėte — galas lieka nekintamas |
| **Midpoint** | Linijos vidurys | Aktyvuoja **Move** visai linijai |
| **End** | Antras galas | Tempkite, kad perkeltumėte — pradžia lieka nekintama |

Vieno galo ištempimas niekada neveikia kito. Tai skiriasi nuo [Polyline](../polyline/) redagavimo rankenėlėmis, kur viršūnės perkėlimas pakeičia visą kelią.

## Linijų pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka liniją, jei spustelėjimas yra spustelėjimo aptikimo atstumu nuo atkarpos |
| **Tempimas į dešinę** (griežtas) | Linija pasirenkama tik jei abu galai patenka į rėmelį |
| **Tempimas į kairę** (kertantis) | Linija pasirenkama, jei bet kuri atkarpos dalis kerta rėmelio ribą |

## Palaikomos redagavimo komandos

Linijos yra **vienintelis** objektas, su kuriuo veikia [Trim](../trim/) ir [Extend](../extend/). Taip pat taikomos visos standartinės transformavimo komandos:

| Komanda | Kas nutinka linijai |
|---------|---------------------|
| [Move](../move/) | Perkelia abu galus tuo pačiu poslinkiu |
| [Copy](../copy/) | Sukuria identišką liniją naujoje vietoje |
| [Rotate](../rotate/) | Pasuka abu galus aplink pasirinktą bazinį tašką |
| [Mirror](../mirror/) | Atspindi abu galus per atspindžio ašį |
| [Scale](../scale/) | Vienodai keičia abiejų galų mastelį nuo bazinio taško |
| [Offset](../offset/) | Sukuria lygiagrečią liniją fiksuotu statmenu atstumu |
| [Trim](../trim/) | Perpjauna liniją sankirtose — **tik linijoms** |
| [Extend](../extend/) | Ištempia artimiausią galą iki ribos — **tik linijoms** |
| [Delete](../delete/) | Pašalina liniją iš brėžinio |

## Savybės

Kai linija pasirinkta, savybių skydelis rodo kiekvieną lauką, kurį neša DXF `LINE` įrašas:

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
| Start X / Start Y | Pirmojo galo koordinatės |
| End X / End Y | Antrojo galo koordinatės |

Visi laukai redaguojami tiesiogiai skydelyje neperleidžiant komandos iš naujo.

## Line ir Polyline — kada kurią naudoti

| | Line | Polyline |
|---|------|----------|
| Objektų skaičius | Vienas `LINE` kiekvienai atkarpai | Vienas `LWPOLYLINE` visam keliui |
| Trim / Extend | Taip — atkarpa po atkarpos | Ne |
| Uždara figūra | Ne | Taip (uždarymo vėliavėlė) |
| Redagavimas rankenėlėmis | Atskirų galų tempimas | Bet kurios viršūnės perkėlimas keliu |
| Geriausiai tinka | Konstrukcinėms linijoms, pavienėms atkarpoms, geometrijai, kurią apkirpsite | Kontūrams, apybraižoms, figūroms, kurias laikote vientisas |

## DXF — LINE objektas

Linijos DXF faile saugomos kaip `LINE` objektai. Kiekviena savybė — pradžios/galo koordinatės, spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis — keliauja tam ir atgal be praradimų. Atvėrus DXF, kuriame yra `LINE` objektų, jie redaktoriuje tampa visiškai redaguojamais `Line` objektais.

Redaktoriuje nubrėžtos linijos išsaugant taip pat rašomos kaip `LINE` objektai, todėl jas gali skaityti LibreCAD, FreeCAD ir bet kuri kita su DXF suderinama programa.
