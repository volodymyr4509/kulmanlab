---
title: Arc komanda — trijų taškų lankų braižymas apibrėžtinio apskritimo metodu
description: Arc komanda nubrėžia apskritimo lanką per tiksliai tris spustelėtus taškus naudodama apibrėžtinio apskritimo geometriją. Pradžios ir galo rankenėlės leidžia po padėjimo nutempti lanko galus į naują kampą ir spindulį. Pilnas DXF keitimasis kaip ARC objektai.
keywords: [CAD arc komanda, trijų taškų lankas CAD, apibrėžtinio apskritimo lankas, lanko braižymas CAD, ARC DXF objektas, lanko redagavimas rankenėlėmis, kulmanlab]
group: shapes
order: 5
---

# Arc

Komanda `arc` nubrėžia apskritimo lanką per tris jūsų spustelėtus taškus. Lankas apskaičiuojamas kaip vienintelis apibrėžtinis apskritimas, einantis per visus tris taškus — nereikia tiesiogiai nurodyti centro ar spindulio. Lankas eina nuo pirmo spustelėjimo iki trečio, praeidamas per antrą.

## Lanko braižymas

1. Terminale įveskite `arc` arba spustelėkite įrankių juostos mygtuką **Arc**.
2. **Spustelėkite pirmą tašką** — vieną lanko galą. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite antrą tašką** — tašką, per kurį lankas turi praeiti (valdo kreivumą ir kryptį). Koordinačių įvedimas veikia ir čia.
4. **Spustelėkite trečią tašką** — kitą lanko galą. Lankas padedamas ir komanda išeina. Koordinačių įvedimas veikia ir čia.

```
           ● (2-as spustelėjimas — taškas ant kreivės)
          / \
         /   \
        ●     ●
     1-as       3-ias
```

Linijos peržiūra jungia pirmus du spustelėjimus, kol dedate trečią. Nuo antro spustelėjimo gyva lanko peržiūra seka žymeklį.

> **Kolinearūs taškai**: jei visi trys taškai guli ant vienos tiesės, lanko apskaičiuoti neįmanoma ir objektas nepadedamas. Perkelkite antrą tašką nuo linijos ir bandykite dar kartą.

## Kiti būdai nubraižyti lanką

Numatytasis būdas – trys taškai. Kai kuriuose raginimuose terminalas rodo parinktis laužtiniuose skliaustuose, pavyzdžiui, `[Center=false]` — įveskite parinkties raidę, kad ją įjungtumėte (`[Center=true]`), ir dar kartą, kad išjungtumėte. Jas derinant lanką galima nubraižyti dar šešiais būdais:

| Būdas | Įjungti | Paskutinis žingsnis |
|---|---|---|
| Start, Center, End | `C` | galinis taškas |
| Start, Center, Angle | `C`, `A` | kampas |
| Start, Center, Length | `C`, `L` | stygos ilgis |
| Start, End, Angle | `E` | kampas |
| Start, End, Direction | `E`, `D` | liestinės kryptis |
| Start, End, Radius | `E`, `R` | spindulys |

- Paskutiniame kiekvieno būdo žingsnyje, išskyrus Start, Center, End, įveskite skaičių ir paspauskite **Enter** arba **Space**, arba pajudinkite žymeklį ir spustelėkite — žymeklis nuskaitomas kaip tas skaičius (kryptis kampui ar liestinės krypčiai, atstumas stygos ilgiui ar spinduliui).
- Teigiamas kampas eina nuo pradžios prieš laikrodžio rodyklę, neigiamas – pagal. 0° kampas ar pilni apsisukimai lanko nesukuria, ir terminalas tai pasako.
- Teigiamas stygos ilgis ar spindulys renkasi trumpesnį kelią, neigiamas – ilgesnį. Už skersmenį ilgesnė styga ar už pusę stygos mažesnis spindulys atmetamas, o terminalas nurodo ribą.
- Start, Center, End naudoja tik galinio taško kryptį nuo centro: lankas eina nuo pradžios prieš laikrodžio rodyklę ten, kur ta kryptis kerta apskritimą. Liestinės kryptis – kryptis laipsniais nuo X ašies, kuria lankas palieka savo pradžią.
- Norėdami pasirinkti centrą prieš pradžios tašką, pačiame pirmame raginime įveskite `C`.
- Parinkčių raidės priklauso nuo sąsajos kalbos; čia rodomos angliškos.

## Koordinačių įvedimas

Bet kuriame iš trijų žingsnių vietoj spustelėjimo galite įvesti tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte tašką.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę |
| `C` `E` `A` `L` `D` `R` | Parinkties įjungimas ar išjungimas: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Atmeta visus padėtus taškus ir išeina |

## Redagavimas rankenėlėmis — galų ir spindulio koregavimas

Pasirinktas lankas atskleidžia tris rankenėles:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Center** | Apibrėžtinio apskritimo geometrinis centras | Perkelia visą lanką; spindulys ir kampai nekinta |
| **Start** | Pirmas lanko galas | Tempkite, kad perkeltumėte pradžią išilgai apibrėžtinio apskritimo — keičia ir pradžios kampą, ir spindulį |
| **End** | Paskutinis lanko galas | Tempkite, kad perkeltumėte galą išilgai apibrėžtinio apskritimo — keičia ir galo kampą, ir spindulį |

Tempiant pradžios ar galo rankenėlę, ji perkeliama į tempimo vietą ir iš naujos padėties centro atžvilgiu perskaičiuojamas ir kampas, ir spindulys. Priešingas galas lieka nekintamas.

## Lankų pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka šalia lanko kreivės (ne stygos) |
| **Tempimas į dešinę** (griežtas) | Visi išilgai lanko paskirstyti mėginių taškai turi būti rėmelio viduje |
| **Tempimas į kairę** (kertantis) | Pasirenka, jei bet kuris lanko mėginio taškas patenka į rėmelį |

## Palaikomos redagavimo komandos

| Komanda | Kas nutinka lankui |
|---------|--------------------|
| [Move](../move/) | Perkelia centrą; spindulys ir kampai nekinta |
| [Copy](../copy/) | Sukuria identišką lanką naujoje vietoje |
| [Rotate](../rotate/) | Pasuka centrą ir pastumia pradžios/galo kampus pasukimo dydžiu |
| [Mirror](../mirror/) | Atspindi centrą ir apverčia pradžios/galo kampus per atspindžio ašį |
| [Scale](../scale/) | Keičia centro padėties mastelį ir padaugina spindulį iš mastelio koeficiento |
| [Offset](../offset/) | Sukuria koncentrinį lanką didesniu ar mažesniu spinduliu, tas pats kampinis plotis |
| [Delete](../delete/) | Pašalina lanką |

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
| Center X / Center Y | Apibrėžtinio apskritimo centras |
| Radius | Apibrėžtinio apskritimo spindulys |
| Start Angle | Kampas laipsniais, kur prasideda lankas (matuojamas nuo teigiamos X ašies) |
| End Angle | Kampas laipsniais, kur baigiasi lankas |

## Arc ir Circle — kada kurį naudoti

| | Arc | Circle |
|---|-----|--------|
| Apimtis | Dalinė — nuo pirmo iki trečio spustelėjimo | Pilni 360° |
| Įvedimo būdas | Trys taškai ant kreivės | Centras + spindulys (spustelėjimas ar įvedimas) |
| Įvedimas klaviatūra | X,Y koordinatė kiekvienam taškui | Spindulio reikšmė (centras taip pat priima X,Y) |
| Dydžio keitimas po padėjimo | Tempkite pradžios/galo rankenėles | Tempkite bet kurią pagrindinę rankenėlę |
| Geriausiai tinka | Suapvalinimams, užapvalintiems kampams, lenktiems keliams | Pilnoms skylėms, apvaliems elementams |

## DXF — ARC objektas

Lankai DXF faile saugomi kaip `ARC` objektai, išsaugant centro koordinates, spindulį, pradžios kampą ir galo kampą. Visos savybės — įskaitant spalvą, sluoksnį, linijos tipą, linijos tipo mastelį ir storį — keliauja tam ir atgal be praradimų. Bet kuri su DXF suderinama programa (LibreCAD, FreeCAD ir kt.) juos skaito kaip standartinius lankus.
