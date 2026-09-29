---
title: Text komanda — MTEXT užrašų dėjimas KulmanLab CAD
description: Text komanda deda daugiaeilį, turtingai formatuotą MTEXT užrašą. Spustelėkite padėtį, rinkite iššokančiame redaktoriuje ir paspauskite Escape, kad patvirtintumėte. Dukart spustelėkite bet kurį esamą užrašą, kad vėl atvertumėte redaktorių.
keywords: [CAD text komanda, MTEXT, teksto užrašo dėjimas CAD, teksto anotacija CAD, pusjuodis kursyvas CAD, daugiaeilis tekstas CAD, kulmanlab]
group: markup
order: 0
---

# Text

Komanda `text` deda daugiaeilį teksto užrašą. Spustelėjus padėtį drobėje, atsidaro iššokantis redaktorius **išplėstiniu** režimu — galite rinkti turinį, taikyti pusjuodį/kursyvą/pabraukimą/perbraukimą atskiriems simboliams, keisti šriftus ir aukščius bei įterpti eilučių lūžius. Paspauskite **Escape**, kad patvirtintumėte ir uždarytumėte redaktorių.

Pilną redaktoriaus nuorodą, įskaitant **išplėstinio** ir **paprastojo** režimų palyginimą, žr. puslapyje [Teksto redaktorius](../../interface/text-editor/).

## Teksto užrašo dėjimas

1. Terminale įveskite `text` arba spustelėkite įrankių juostos mygtuką **Text**.
2. **Spustelėkite inkaro padėtį** drobėje. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. Virš naujo užrašo atsidaro **teksto redaktoriaus iššokantis langas**. Įveskite turinį.
4. Paspauskite **Escape**, kad patvirtintumėte užrašą ir uždarytumėte redaktorių.

Naujas Text nukopijuoja šriftą, aukštį, pusjuodį, kursyvą, eilučių tarpą, horizontalų lygiavimą ir rėmelį iš dabartinio [TextStyle](../text-style/). Įtaisytasis `Standard` stilius naudoja **1 brėžinio vieneto** aukštį ir Left lygiavimą.

## Esamo užrašo redagavimas

**Dukart spustelėkite** bet kurį teksto užrašą drobėje, kad vėl atvertumėte to užrašo redaktorių.

## Inkaro koordinačių įvedimas

Užuot spustelėję, įveskite tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte inkarą ir atvertumėte redaktorių.

## Klavišų nuoroda

**Inkaro fazė**

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę |

**Teksto redaktoriaus fazė** (pilną nuorodą žr. [Teksto redaktorius](../../interface/text-editor/))

| Klavišas | Veiksmas |
|----------|----------|
| Bet kuris spausdinamas simbolis | Įterpia žymeklio vietoje |
| `Backspace` / `Delete` | Ištrina gretimą simbolį ar pasirinkimą |
| `Enter` | Įterpia eilutės lūžį |
| `←` / `→` | Perkelia žymeklį |
| `Home` / `End` | Peršoka į kietos eilutės pradžią / pabaigą |
| `Escape` | Patvirtina ir uždaro redaktorių |

## Redagavimas rankenėlėmis — perkėlimas

Pasirinktas teksto užrašas atskleidžia vieną rankenėlę inkaro taške:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Anchor** | Teksto apatinis kairysis kampas | Tempkite, kad perkeltumėte užrašą |

## Teksto pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka, jei spustelėjimas patenka į pasuktą teksto apribojantį stačiakampį |
| **Tempimas į dešinę** (griežtas) | Visi keturi apribojančio stačiakampio kampai turi būti pasirinkimo srityje |
| **Tempimas į kairę** (kertantis) | Pasirenka bet koks teksto apribojančio stačiakampio ir pasirinkimo srities persidengimas |

## Palaikomos redagavimo komandos

| Komanda | Kas nutinka tekstui |
|---------|---------------------|
| [Move](../move/) | Perkelia inkaro tašką |
| [Copy](../copy/) | Sukuria identišką užrašą naujoje vietoje |
| [Rotate](../rotate/) | Pasuka inkaro padėtį ir prideda kampą prie Rotation Degree |
| [Mirror](../mirror/) | Atspindi inkaro tašką per atspindžio ašį (teksto eilutė neapverčiama) |
| [Scale](../scale/) | Keičia inkaro padėties mastelį ir padaugina aukštį iš mastelio koeficiento |
| [Delete](../delete/) | Pašalina užrašą |

Text nepalaiko **Offset**, **Trim** ar **Extend**.

## Savybės

Kai teksto užrašas pasirinktas, savybių skydelis rodo:

**Bendrosios**

| Savybė | Numatyta | Reikšmė |
|--------|----------|---------|
| Color | 256 (ByLayer) | ACI spalvos indeksas |
| Layer | `0` | Sluoksnio priskyrimas |

**Geometrija**

| Savybė | Reikšmė |
|--------|---------|
| Position X / Position Y | Inkaro taško koordinatės |
| Height | Bazinis teksto aukštis brėžinio vienetais, sukūrimo metu nukopijuotas iš dabartinio TextStyle |
| Rotation Degree | Pasukimas prieš laikrodžio rodyklę laipsniais |

**Savybės**

| Savybė | Reikšmė |
|--------|---------|
| Content | Teksto eilutė (MTEXT įterptieji kodai išsaugomi) |
| Attachment Point | Lygiavimo kodas (1 = viršuje kairėje … 9 = apačioje dešinėje) |
| Horizontal Alignment | Left, Center, Right ar Justify referencinio pločio ribose |
| Reference Width | Plotis, naudojamas lūžiui ir pastraipos lygiavimui; `0` reiškia jokio aiškaus pločio |
| Line Spacing | Daugiklis, taikomas tarp teksto eilučių |
| Frame | Nubrėžia stačiakampį rėmelį aplink tekstą |

Text neturi savybių Linetype, Linetype Scale ar Thickness.

## DXF — MTEXT objektas

Teksto užrašai DXF faile saugomi kaip **MTEXT** objektai. Pusjuodis ir kursyvas naudoja įterptuosius šrifto perjungimo kodus (`\f`), pabraukimas naudoja `\L`/`\l`, perbraukimas naudoja `\K`/`\k`, o atskirų simbolių aukščio pakeitimai naudoja `\H`. Referencinis plotis, eilučių tarpas, pastraipos lygiavimas, pasukimas ir prijungimas taip pat keliauja. Teksto rėmelis eksportuojamas su MTEXT rėmelio vėliavėle ir AutoCAD suderinamu krašto masteliu.

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [TextStyle](../text-style/) | Nustato formatavimo numatytąsias reikšmes, kopijuojamas naujai sukurto Text |
| [FontManager](../font-manager/) | Valdo šriftus, prieinamus Text ir TextStyle |
