---
title: Polyline komanda — daugiaatkarpių kelių braižymas kaip vieno objekto
description: Polyline komanda nubrėžia bet kokį skaičių sujungtų tiesių ar lankų atkarpų, saugomų kaip vienas LWPOLYLINE objektas. Klavišu A perjunkite Arc režimą liestinės tąsos lankų atkarpoms. Viršūnių ir atkarpų vidurio rankenėlės leidžia po sukūrimo pakeisti bet kurios kelio dalies, tiesios ar lenktos, formą.
keywords: [CAD polyline komanda, polilinijos braižymas CAD, daugiaatkarpis kelias CAD, polilinijos lanko atkarpa, LWPOLYLINE bulge, LWPOLYLINE DXF, polilinijos formos keitimas, viršūnės rankenėlė CAD, polilinijos poslinkis, kulmanlab]
group: shapes
order: 2
---

# Polyline

Komanda `polyline` nubrėžia sujungtą kelią iš bet kokio skaičiaus tiesių ar lankų atkarpų, visas saugomas kaip vienas `LWPOLYLINE` objektas. Kadangi visas kelias yra vienas objektas, jį pasirinkus pasirenkamos visos atkarpos iš karto — visą figūrą galite perkelti, pasukti ar pakeisti jos mastelį vienu veiksmu. Tai esminis skirtumas nuo sugrandintų [Lines](../line/), kur kiekviena atkarpa yra nepriklausomas objektas.

Polilinijos gali būti ir **uždaros**: [Rectangle](../rectangle/) komanda naudoja tą patį `LWPOLYLINE` objektą su nustatyta uždarymo vėliavėle.

## Polilinijos braižymas

1. Terminale įveskite `polyline` arba spustelėkite įrankių juostos mygtuką **Polyline**.
2. **Spustelėkite pirmą tašką** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite kiekvieną kitą tašką** — kiekvienas spustelėjimas prideda atkarpą. Koordinačių įvedimas veikia kiekviename žingsnyje.
4. Paspauskite **Enter** arba **Space**, kad užbaigtumėte (reikia bent 2 padėtų taškų).

```
  ●──────●
  1-as   2-as
          \
           \  3 atkarpa (rengiama — žymeklis čia)
            ●  ← spustelėkite, kad pridėtumėte, Enter/Space užbaigia
```

Paspaudus **Escape** bet kada, atmetami visi padėti taškai ir komanda išeina.

## Lanko atkarpos braižymas

Paspauskite **A** bet kuriuo metu po pirmos viršūnės, kad perjungtumėte Arc režimą — tas pats įterptosios parinkties principas, kurį naudoja [Rotate](../rotate/) parinktis `Copy`. Raginimas rodo dabartinę būseną kaip `[Arc=true]` / `[Arc=false]`, o dar kartą paspaudus **A** ji grąžinama atgal, todėl vienoje polilinijoje galite laisvai maišyti tieses ir lankų atkarpas.

```
  ●──────●
  1-as   2-as  ← paspauskite A: [Arc=true]
          ╲
           ╲   lanko atkarpa (rengiama)
            ●  ← spustelėkite, kad pridėtumėte
```

Kai įjungtas Arc režimas, kiekviena nauja atkarpa yra **liestinės tąsos lankas** — numatytoji lanko elgsena, be papildomų parinkčių centrui, spinduliui ar krypčiai. Lankas prasideda liestinai tam, kas buvo iškart prieš jį: liestinai ankstesnės atkarpos krypčiai, jei ji buvo linija, arba liestinai ankstesnio lanko galui, jei tai buvo lankas. Pati pirmoji polilinijos atkarpa (be ankstesnės atkarpos, kuriai galėtų būti liestinė) pagal numatytuosius nustatymus eina tiksliai į rytus.

Perjungus atgal į `[Arc=false]`, tęsiamos tiesios atkarpos nuo ten, kur nusileido paskutinė viršūnė, ir galite vėl perjungti kitam lankui — perjungimų skaičius vienoje polilinijoje neribojamas.

## Koordinačių įvedimas

Užuot spustelėję, įveskite tikslią bet kurios viršūnės padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte viršūnę.

## Kampo užraktas ir tikslus atkarpos ilgis

Tarp bet kurių dviejų nuosekliai einančių taškų galioja ta pati 45° prisitraukimo logika kaip [Line](../line/#kampo-užraktas-ir-tikslaus-ilgio-įvedimas) komandoje. Kai užrakinta ašiai:

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie atkarpos ilgio |
| `-` | Neigiamas ilgis — apverčia kryptį išilgai ašies (tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Padeda kitą tašką įvestu atstumu |

Dabartinis sukauptas ilgis rodomas terminalo raginime realiuoju laiku. Spustelėjimas užrakinus projektuojamas į ašį, todėl nauja viršūnė nusileidžia tiksliai ant jos.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą arba atkarpos ilgį, kai kampas užrakintas |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `A` | Perjungia Arc režimą kitai atkarpai (po pirmos viršūnės, kai nevyksta joks įvedimas) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę ar ilgį arba užbaigia poliliniją, jei nieko neįvesta ir yra ≥ 2 taškai |
| `Space` | Užbaigia poliliniją (kaip Enter, kai nevyksta joks įvedimas) |
| `Escape` | Atmeta visus taškus ir išeina |

## Redagavimas rankenėlėmis — viršūnės ir atkarpų vidurio taškai

Pasirinkta polilinija rodo du rankenėlių tipus:

| Rankenėlė | Padėtis | Ką daro |
|-----------|---------|---------|
| **Vertex** | Kiekviename padėtame taške | Tempkite, kad perkeltumėte tą viršūnę; visos sujungtos atkarpos išsitempia ją sekdamos |
| **Segment midpoint** | Kiekvienos atkarpos vidurys | Tempkite, kad perkeltumėte **abu** tos atkarpos galus kartu, išlaikant atkarpos ilgį ir kampą |

Atkarpos vidurio rankenėlė unikali polilinijoms — ji leidžia pastumti atskirą atkarpą į šoną nekeičiant jos ilgio. Ant [Line](../line/) vidurio rankenėlė vietoj to aktyvuoja Move komandą visam objektui.

**Lanko atkarpa** čiuopiama taip pat kaip tiesi — tempiant bet kurią galinę viršūnę ar atkarpos vidurio rankenėlę pakeičiama lanko forma, išlaikant jo išlinkį (apimamą kampą) pastovų ir perkonstruojant per naują padėtį, tas pats prisitaikymas, kurį naudoja atskiro [Arc](../arc/) objekto rankenėlės.

Vienos rankenėlės „perkelti visą poliliniją" nėra. Visam keliui perkelti naudokite komandą [Move](../move/).

## Polilinijų pasirinkimas

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Pasirenka poliliniją, jei spustelėjimas patenka į aptikimo atstumą nuo bet kurios atkarpos |
| **Tempimas į dešinę** (griežtas) | Visos viršūnės turi patekti į rėmelį |
| **Tempimas į kairę** (kertantis) | Bet kuri atkarpa, kertanti rėmelio ribą, pasirenka visą poliliniją |

Kadangi polilinija yra vienas objektas, kertantis pasirinkimas, kuris paliečia bet kurią atkarpą, pasirenka visas atkarpas.

## Palaikomos redagavimo komandos

Polilinijos palaiko visas bendras transformacijas, plius offset, trim, extend, fillet ir chamfer — lankų atkarpas visos jos palaiko, išskyrus Chamfer, kuris renkasi tik **tiesią** atkarpą (lanko atkarpos nusklembti negalima — vietoj to naudokite [Fillet](../fillet/) arba pirmiausia ją apkirpkite):

| Komanda | Kas nutinka polilinijai |
|---------|-------------------------|
| [Move](../move/) | Perkelia visas viršūnes tuo pačiu poslinkiu |
| [Copy](../copy/) | Sukuria identišką poliliniją naujoje vietoje |
| [Rotate](../rotate/) | Pasuka visas viršūnes aplink pasirinktą bazinį tašką |
| [Mirror](../mirror/) | Atspindi visas viršūnes per atspindžio ašį |
| [Scale](../scale/) | Vienodai keičia visų viršūnių mastelį nuo bazinio taško |
| [Offset](../offset/) | Sukuria lygiagrečią poliliniją fiksuotu statmenu atstumu — lankų atkarpos nustumiamos į naują spindulį, kaip ir atskiras [Arc](../arc/) |
| [Trim](../trim/) | Pašalina polilinijos dalį tarp dviejų sankirtos taškų, tiesias ir lankų atkarpas vienodai |
| [Extend](../extend/) | Ištempia pirmą ar paskutinę polilinijos atkarpą iki kitos ribos — galinė lanko atkarpa auga išilgai savo apskritimo |
| [Fillet](../fillet/) | Suapvalina kampą tarp dviejų **gretimų** atkarpų, tiesių ar lankų, liestiniu lanku, įterptu į poliliniją kaip nauja atkarpa su išlinkiu |
| [Chamfer](../chamfer/) | Nusklembia kampą tik tarp dviejų **gretimų tiesių** atkarpų; lanko atkarpa tame kampe renkant praleidžiama |
| [Delete](../delete/) | Pašalina poliliniją iš brėžinio |
| [Explode](../explode/) | Suskaido poliliniją į atskirus Line ir Arc objektus, po vieną kiekvienai atkarpai |

Vienos polilinijos atkarpos suapvalinimas kito objekto, o ne jos pačios gretimos atkarpos atžvilgiu, nelieka paprastu redagavimu vietoje — kas gaunama (sujungimas į vieną naują poliliniją, sujungtą suapvalinimo lanku), žr. [Fillet](../fillet/).

## Savybės

Kai polilinija pasirinkta, savybių skydelis rodo:

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
| Closed | Ar paskutinė viršūnė jungiasi atgal su pirma |
| Vertex Count | Bendras viršūnių skaičius |
| Vertices | Visų viršūnių koordinačių sąrašas |

## Polyline ir Line — kada kurią naudoti

| | Polyline | Line |
|---|---------|------|
| Objektų skaičius | Vienas `LWPOLYLINE` visam keliui | Vienas `LINE` kiekvienai atkarpai |
| Uždara figūra | Taip (uždarymo vėliavėlė) | Ne |
| Lankų atkarpos | Taip, kiekvienai atkarpai per `Arc` jungiklį | Ne — lenkta atkarpa reikalauja atskiro [Arc](../arc/) objekto |
| Trim / Extend | Taip | Taip — atkarpa po atkarpos |
| Atkarpos vidurio rankenėlė | Perkelia visą atkarpą | Aktyvuoja Move objektui |
| Geriausiai tinka | Kontūrams, apybraižoms, figūroms, kurias laikote vientisas | Konstrukcinėms linijoms, geometrijai, kurią apkirpsite |

## DXF — LWPOLYLINE objektas

Polilinijos DXF faile saugomos kaip `LWPOLYLINE` objektai. Visos savybės — viršūnių koordinatės, uždarymo vėliavėlė, spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis — keliauja be praradimų. Stačiakampiai, nubraižyti [Rectangle](../rectangle/) komanda, taip pat saugomi kaip `LWPOLYLINE` (uždara, keturios viršūnės) ir DXF lygyje nuo jų neatskiriami.

Kiekviena viršūnė taip pat neša **išlinkį (bulge)** (DXF grupės kodas 42) — 0 tiesiai atkarpai iki kitos viršūnės arba ženklinė ketvirčio kampo tangento išlinkio reikšmė lenktai (teigiamas išlinkis sukasi prieš laikrodžio rodyklę, neigiamas — pagal). Išlinkiai keliauja be praradimų, todėl polilinija su lankų atkarpomis, importuota iš kitos CAD programos DXF, atvaizduojama, pasirenkama, redaguojama rankenėlėmis, apkarpoma, pratęsiama ir brūkšniuojama lygiai kaip nubraižyta čia su Arc parinktimi.

`LWPOLYLINE` objektai iš bet kurios su DXF suderinamos programos (LibreCAD, FreeCAD ir kt.) redaktoriuje skaitomi atgal kaip visiškai redaguojamos polilinijos.
