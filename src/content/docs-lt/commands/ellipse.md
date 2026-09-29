---
title: Ellipse komanda — pasuktų elipsių braižymas pagal centrą ir dvi ašis
description: Ellipse komanda nubrėžia elipsę trimis spustelėjimais — centras, pirmosios ašies galas (bet kokia kryptimi), tada antrosios ašies ilgis. Abi ašys visada statmenos. Kiekviena pusašė po padėjimo turi savo rankenėlę nepriklausomam dydžio keitimui. Pilnas DXF keitimasis kaip ELLIPSE objektai.
keywords: [CAD ellipse komanda, elipsės braižymas CAD, pasukta elipsė CAD, elipsės ašys, ELLIPSE DXF objektas, elipsės redagavimas rankenėlėmis, ašių santykis, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Komanda `ellipse` nubrėžia elipsę trimis spustelėjimais: centro tašku, pirmosios (didžiosios) pusašės galu bet kokiu kampu ir antrosios (mažosios) pusašės ilgiu. Abi ašys visada statmenos viena kitai — antrosios ašies kryptis išvedama automatiškai iš pirmosios.

## Elipsės braižymas

1. Terminale įveskite `ellipse` arba spustelėkite įrankių juostos mygtuką **Ellipse**.
2. **Spustelėkite centro tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite pirmosios ašies galą** — nustato ir pirmosios pusašės kryptį, ir ilgį. Koordinačių įvedimas veikia ir čia.
4. **Nustatykite antrosios ašies ilgį** — perkelkite žymeklį statmenai pirmajai ašiai, tada spustelėkite arba įveskite ilgį.

```
               ● ← pirmosios ašies galas (3 žingsnis)
              /
  centras ●  /  ← pirmoji ašis (bet koks kampas)
            |
            ● ← čia žymeklis nustato antrosios ašies ilgį (4 žingsnis)
```

Elipsė padedama po 4 žingsnio ir komanda išeina.

## Ašių įvedimas — spustelėjimu, koordinate ar įvestu ilgiu

**Centras (2 žingsnis):** spustelėkite arba įveskite `X,Y`, kad gautumėte tikslią padėtį.

**Pirmosios ašies galas (3 žingsnis):** spustelėkite arba įveskite `X,Y`, kad gautumėte tikslią koordinatę. Kampo užraktas taip pat prisitraukia prie 45° žingsnių — užrakinus įveskite ilgį ir paspauskite **Enter**, kad galas būtų padėtas tiksliai tokiu atstumu.

**Antroji ašis (4 žingsnis):** įvestas ilgis visada prieinamas — kampo užrakto nereikia. Kryptis jau nustatyta statmenai pirmajai ašiai; įvedimas nustato tik ilgį.

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie ašies ilgio (antrosios ašies fazė) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda ašies galą įvestu ilgiu |

## Koordinačių įvedimas (centras ir pirmosios ašies galas)

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad patvirtintumėte.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą (centro/pirmosios ašies fazės) arba ašies ilgį, kai kampas užrakintas |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę ar ilgį |
| `Escape` | Atšaukia ir atstato |

## Redagavimas rankenėlėmis — nepriklausomas ašių dydžio keitimas

Pasirinkta elipsė atskleidžia penkias rankenėles:

| Rankenėlė | Kiekis | Ką daro |
|-----------|--------|---------|
| **Center** | 1 | Perkelia visą elipsę; abi ašys nekinta |
| **Major axis endpoints** | 2 (priešingi ilgesnės ašies galai) | Tempkite, kad pakeistumėte didžiosios pusašės ilgį; mažosios ašies absoliutus dydis išlieka pastovus |
| **Minor axis endpoints** | 2 (priešingi trumpesnės ašies galai) | Tempkite, kad pakeistumėte mažosios pusašės ilgį; didžioji ašis nekinta |

Didžiosios ir mažosios ašių rankenėlės nepriklausomos — elipsės formą galite pakeisti neperleisdami komandos iš naujo.

## Elipsių pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka šalia elipsės kontūro |
| **Tempimas į dešinę** (griežtas) | Elipsės apribojantis stačiakampis, lygiagretus ašims, turi visiškai tilpti pasirinkimo rėmelyje |
| **Tempimas į kairę** (kertantis) | Ją pasirenka bet kuri elipsės kontūro dalis, kertanti pasirinkimo rėmelio ribą |

## Palaikomos redagavimo komandos

| Komanda | Kas nutinka elipsei |
|---------|---------------------|
| [Move](../move/) | Perkelia centrą; abi ašys nekinta |
| [Copy](../copy/) | Sukuria identišką elipsę naujame centre |
| [Rotate](../rotate/) | Pasuka centro padėtį ir didžiosios ašies vektorių tuo pačiu kampu |
| [Mirror](../mirror/) | Atspindi centrą ir perskaičiuoja didžiosios ašies kryptį per atspindžio ašį |
| [Scale](../scale/) | Keičia centro padėties mastelį ir abiejų pusašių ilgius padaugina iš koeficiento |
| [Offset](../offset/) | Sukuria koncentrinę elipsę, nustumtą į išorę ar vidų fiksuotu atstumu |
| [Delete](../delete/) | Pašalina elipsę |

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
| Center X / Center Y | Elipsės centras |
| Major Axis X / Major Axis Y | Vektorius nuo centro iki didžiosios ašies galo (koduoja ir kryptį, ir ilgį) |
| Axis Ratio | Mažosios pusašės ir didžiosios pusašės santykis (0 < santykis ≤ 1) |
| Start Angle / End Angle | Parametriniai kampai laipsniais; pilnai elipsei abu yra 0°/360° |

## Ellipse ir Circle — kada kurią naudoti

| | Ellipse | Circle |
|---|---------|--------|
| Ašys | Dvi nepriklausomos pusašės bet kokiu kampu | Vienas spindulys, simetriškas |
| Pasukimas | Galima padėti bet kokiu kampu | Be pasukimo |
| Įvedimas klaviatūra | Kiekvienos ašies ilgis | Tik spindulys |
| Dydžio keitimas rankenėle | Didžioji ir mažoji nepriklausomai | Visi keturi pagrindiniai taškai vienodai |
| Geriausiai tinka | Įstrižiems vaizdams, ovaliems elementams, perspektyvinėms skylėms | Simetriškiems apvaliems elementams |

## DXF — ELLIPSE objektas

Elipsės DXF faile saugomos kaip `ELLIPSE` objektai. Formatas išsaugo centro tašką, visą didžiosios ašies vektorių (kryptis + ilgis) ir ašių santykį. Pasukimas, forma ir visos stiliaus savybės keliauja be praradimų. Apskritimas **nesaugomas** kaip išsigimusi elipsė — abu objektų tipai DXF modelyje išlieka atskiri.
