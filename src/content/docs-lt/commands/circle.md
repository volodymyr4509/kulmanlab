---
title: Circle komanda — apskritimų braižymas pagal centrą ir spindulį
description: Circle komanda padeda apskritimą spustelėjus centro tašką, o tada spustelėjus arba įvedus spindulį. Keturios pagrindinės rankenėlės leidžia keisti spindulį temptuku neperleidžiant komandos iš naujo. Pilnas DXF keitimasis kaip CIRCLE objektai.
keywords: [CAD circle komanda, apskritimo braižymas CAD, apskritimo spindulio įvedimas, apskritimo dydžio keitimas rankenėle, CIRCLE DXF objektas, dimradius apskritimas, kulmanlab]
group: shapes
order: 4
---

# Circle

Komanda `circle` nubrėžia apskritimą, apibrėžtą centro tašku ir spinduliu. Spustelėjus centrą, spindulį galite nustatyti arba spustelėję antrą tašką drobėje, arba įvesdami tikslų skaičių — abi parinktys veikia tuo pačiu metu.

## Apskritimo braižymas

1. Terminale įveskite `circle` arba spustelėkite įrankių juostos mygtuką **Circle**.
2. **Spustelėkite centro tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. Nustatykite spindulį — arba:
   - **Spustelėkite bet kurį tašką** drobėje — atstumas nuo centro tampa spinduliu, arba
   - **Įveskite spindulį** ir paspauskite **Enter**, kad gautumėte tikslią reikšmę.

Apskritimas padedamas iškart ir komanda išeina.

```
  centras ●
          \  spindulio linijos peržiūra
           \
            ● ← spustelėkite čia arba įveskite skaičių
```

Spindulio fazėje gyva peržiūra rodo apskritimą dabartiniu žymeklio atstumu ir taip pat nubrėžia spindulio liniją nuo centro iki dabartinio taško.

## Centro koordinačių įvedimas

Užuot spustelėję, galite įvesti centro padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte centrą ir pereitumėte prie spindulio įvedimo.

## Spindulio įvedimas

Padėjus centrą, iškart renkant kaupiama spindulio reikšmė:

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie spindulio reikšmės |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda apskritimą įvestu spinduliu |

Sukaupta reikšmė rodoma terminalo raginime (pvz., `enter radius of circle: 25`). Peržiūra atsinaujina rodydama įvestą spindulį, o žymeklis valdo spindulio linijos žymeklio kryptį.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą (centro fazė) arba spindulio skaitmenį (spindulio fazė) |
| `,` | Užrakina X ir pereina prie Y įvedimo (centro fazė) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę ar spindulį |
| `Escape` | Atšaukia ir atstato |

## Redagavimas rankenėlėmis — spindulio keitimas

Pasirinktas apskritimas atskleidžia penkias rankenėles:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Center** | Centro taškas | Perkelia visą apskritimą; spindulys nekinta |
| **Left** | Kairiausias taškas (centras − spindulys) | Tempkite, kad nustatytumėte naują spindulį = atstumas iki centro |
| **Right** | Dešiniausias taškas (centras + spindulys) | Tempkite, kad nustatytumėte naują spindulį = atstumas iki centro |
| **Top** | Viršutinis taškas | Tempkite, kad nustatytumėte naują spindulį = atstumas iki centro |
| **Bottom** | Apatinis taškas | Tempkite, kad nustatytumėte naują spindulį = atstumas iki centro |

Visos keturios pagrindinės rankenėlės elgiasi vienodai — naujas spindulys lygus atstumui nuo centro iki tempimo vietos. Centras lieka nekintamas.

## Apskritimų pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka šalia apskritimo linijos |
| **Tempimas į dešinę** (griežtas) | Visas apribojantis kvadratas (centras ± spindulys) turi būti rėmelio viduje |
| **Tempimas į kairę** (kertantis) | Apskritimą pasirenka bet kuri apskritimo linijos dalis, kertanti ar liečianti rėmelio ribą |

## Palaikomos redagavimo komandos

| Komanda | Kas nutinka apskritimui |
|---------|-------------------------|
| [Move](../move/) | Perkelia centrą; spindulys nekinta |
| [Copy](../copy/) | Sukuria identišką apskritimą naujame centre |
| [Rotate](../rotate/) | Pasuka centrą aplink bazinį tašką; spindulys nekinta |
| [Mirror](../mirror/) | Atspindi centrą per atspindžio ašį; spindulys nekinta |
| [Scale](../scale/) | Keičia centro padėties mastelį ir padaugina spindulį iš mastelio koeficiento |
| [Offset](../offset/) | Sukuria koncentrinį apskritimą didesniu ar mažesniu spinduliu |
| [Delete](../delete/) | Pašalina apskritimą |

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
| Center X / Center Y | Centro taško koordinatės |
| Radius | Apskritimo spindulys brėžinio vienetais |

## Circle ir Arc — kada kurį naudoti

| | Circle | Arc |
|---|--------|-----|
| Apimtis | Pilni 360° | Dalinė — apibrėžta pradžios ir galo kampu |
| Kaip braižyti | Centras + spindulys | Trys taškai ant kreivės |
| Įvedimas klaviatūra | Spindulio reikšmė | Nėra — tik spustelėjimas |
| Dydžio keitimo rankenėlė | 4 pagrindiniai taškai | Pradžios ir galo taškai (kampas + spindulys) |
| Matmenų žymėjimas | Spindulys: [Dim Radius](../dim-radius/) · Skersmuo: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Geriausiai tinka | Pilnoms skylėms, varžtų apskritimams, apvaliems elementams | Suapvalinimams, dalinėms kreivėms, lenktiems keliams |

## DXF — CIRCLE objektas

Apskritimai DXF faile saugomi kaip `CIRCLE` objektai. Centro koordinatės, spindulys, spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis keliauja tam ir atgal be praradimų. Bet kuri su DXF suderinama programa juos skaito kaip standartinius apskritimus.
