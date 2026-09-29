---
title: Rectangle komanda — ašims lygiagrečių stačiakampių braižymas KulmanLab CAD
description: Rectangle komanda sukuria ašims lygiagretų stačiakampį iš dviejų priešingų kampų. Rezultatas yra uždara LWPOLYLINE su keturiomis viršūnėmis — padėjus tapati bet kuriai kitai polilinijai, todėl taikomos visos polilinijos redagavimo komandos.
keywords: [CAD rectangle komanda, stačiakampio braižymas CAD, ašims lygiagretus stačiakampis, uždara polilinija CAD, LWPOLYLINE DXF, stačiakampio redagavimas rankenėlėmis, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Komanda `rectangle` nubrėžia ašims lygiagretų stačiakampį, apibrėžtą dviem priešingų kampų spustelėjimais. Rezultatas saugomas kaip **uždara `LWPOLYLINE`** su keturiomis viršūnėmis — po vieną kiekviename kampe. Atskiro stačiakampio objekto tipo nėra: sukūrus figūra elgiasi lygiai kaip bet kuri kita [Polyline](../polyline/) ir taikomas kiekvienas polilinijos redagavimas.

## Stačiakampio braižymas

1. Terminale įveskite `rectangle` arba spustelėkite įrankių juostos mygtuką **Rectangle**.
2. **Spustelėkite pirmą kampą** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite priešingą kampą** — stačiakampis padedamas iškart ir komanda išeina. Koordinačių įvedimas veikia ir čia. Arba vietoj to paspauskite `D`, kad įvestumėte tikslų plotį ir aukštį — žr. [Matmenų įvedimas](#matmenų-įvedimas) žemiau.

```
  ● (pirmas spustelėjimas)───┐
  |                          |
  |   gyva peržiūra seka     |
  |   žymeklį po 2 žingsnio  |
  └──────────────────────────● (antras spustelėjimas)
```

Du spustelėjimai gali būti bet kokia įstrižai priešingų kampų pora — viršutinis kairysis + apatinis dešinysis, arba apatinis kairysis + viršutinis dešinysis ir t. t. Tvarka nesvarbi.

## Koordinačių įvedimas

Bet kuriame kampo žingsnyje galite įvesti tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte kampą.

## Matmenų įvedimas

Užuot spustelėję antrą kampą, iškart po pirmo kampo paspauskite `D`, kad pereitumėte prie įvedamo pločio × aukščio:

1. **Įveskite plotį** ir paspauskite **Enter**.
2. **Įveskite aukštį** ir paspauskite **Enter** — raginimas dabar prašo pasirinkti stačiakampio kryptį.
3. **Judinkite žymeklį** aplink pirmą kampą — stačiakampis gyvai rodomas tame iš keturių kvadrantų (aukštyn-kairėn, aukštyn-dešinėn, žemyn-kairėn, žemyn-dešinėn), virš kurio šiuo metu yra žymeklis.
4. **Spustelėkite**, kad padėtumėte jį ta kryptimi.

Dar kartą paspauskite `D` krypties pasirinkimo žingsnyje, kad iš naujo įvestumėte plotį ir aukštį, užpildytus tuo, ką ką tik įvedėte.

Plotis ir aukštis pamenami iš paskutinio jūsų nurodytų matmenų stačiakampio: abiejuose raginimuose ankstesnė reikšmė pasirodo iš anksto užpildyta ir paruošta patvirtinti **Enter**, arba galite tiesiog pradėti rinkti, kad ją pakeistumėte nauju skaičiumi.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba (Dimension režime) pločio/aukščio lauką |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `D` | Po pirmo kampo pereina prie matmenų įvedimo; krypties pasirinkimo žingsnyje iš naujo įveda plotį/aukštį |
| `Enter` | Patvirtina įvestą koordinatę, plotį ar aukštį |
| `Escape` | Atšaukia |

Kraštinės visada horizontalios ir vertikalios — kampo užrakto stačiakampio komandai nėra.

## Redagavimas rankenėlėmis — formos keitimas po sukūrimo

Pasirinktas stačiakampis rodo rankenėles kiekvienoje viršūnėje ir kiekvienos kraštinės viduryje:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Corner** | Kiekviena iš 4 viršūnių | Tempkite, kad perkeltumėte tą viršūnę; dvi gretimos kraštinės išsitempia ją sekdamos — priešingas kampas lieka nekintamas |
| **Side midpoint** | Kiekvienos iš 4 kraštinių vidurys | Tempkite, kad perkeltumėte abu tos kraštinės galus kartu, išlaikant kraštinės ilgį ir kampą |

Kampo rankenėlės tempimas paverčia stačiakampį nestačiakampiu keturkampiu. Jei reikia tik kito dydžio stačiakampio, tempkite kampą išlaikydami kraštines maždaug ortogonalias arba ištrinkite jį ir nubraižykite naują.

## Stačiakampių pasirinkimas

Kadangi stačiakampis yra polilinija, pasirinkimas veikia taip pat:

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka ant bet kurios iš keturių kraštinių |
| **Tempimas į dešinę** (griežtas) | Visos keturios viršūnės turi būti pasirinkimo rėmelyje |
| **Tempimas į kairę** (kertantis) | Bet kuri kraštinė, kertanti rėmelio ribą, pasirenka visą stačiakampį |

## Palaikomos redagavimo komandos

Taikomos visos polilinijos redagavimo komandos. Trim ir Extend skirtos tik [Line](../line/) ir su stačiakampiais neveikia:

| Komanda | Kas nutinka stačiakampiui |
|---------|---------------------------|
| [Move](../move/) | Perkelia visas keturias viršūnes tuo pačiu poslinkiu |
| [Copy](../copy/) | Sukuria identišką stačiakampį naujoje vietoje |
| [Rotate](../rotate/) | Pasuka visas keturias viršūnes aplink pasirinktą bazinį tašką |
| [Mirror](../mirror/) | Atspindi visas keturias viršūnes per atspindžio ašį |
| [Scale](../scale/) | Vienodai keičia visų keturių viršūnių mastelį nuo bazinio taško |
| [Offset](../offset/) | Sukuria lygiagretų (sumažintą ar padidintą) stačiakampį fiksuotu atstumu |
| [Delete](../delete/) | Pašalina stačiakampį iš brėžinio |

## Savybės

Kai stačiakampis pasirinktas, savybių skydelis rodo tuos pačius laukus kaip bet kuriai polilinijai:

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
| Closed | Stačiakampiui visada `true` |
| Vertex Count | Nepakeistam stačiakampiui visada `4` |
| Vertices | Visų keturių kampų koordinatės |

## Rectangle, Polyline ir Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Kaip braižyti | 2 spustelėjimai (kampai) | Spustelėti kiekvieną viršūnę | Spustelėti kiekvieną galą |
| Objekto tipas | Uždara `LWPOLYLINE` | Atvira ar uždara `LWPOLYLINE` | `LINE` kiekvienai atkarpai |
| Kraštinės visada ortogonalios | Taip (sukūrimo metu) | Ne | Ne |
| Trim / Extend | Ne | Ne | Taip |
| Geriausiai tinka | Dėžėms, rėmams, stačiakampėms sritims | Savavališkiems kontūrams ir keliams | Pavienėms atkarpoms, konstrukcinėms linijoms |

## DXF — LWPOLYLINE objektas

Stačiakampiai saugomi kaip uždaros `LWPOLYLINE` su keturiomis viršūnėmis. Visos savybės — viršūnių koordinatės, spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis — keliauja be praradimų.

DXF nėra atskiro `RECTANGLE` tipo. Vėl atvėrus failą, figūra pasirodo kaip uždara keturių viršūnių polilinija, o ne stačiakampis. Bet kuri DXF peržiūros programa ar redaktorius, palaikantis `LWPOLYLINE` (LibreCAD, FreeCAD ir kt.), ją parodys teisingai.
