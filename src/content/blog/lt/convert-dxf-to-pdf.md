---
title: "Kaip konvertuoti DXF į PDF (tinkamu masteliu)"
description: "Konvertuokite DXF į PDF nemokamai naršyklėje — įskaitant tikslų mastelį, pavyzdžiui, 1:50 ant A3, ko konvertavimo svetainės nemoka. Be diegimo, be paskyros."
keywords: [DXF konvertavimas į PDF, DXF į PDF nemokamai, DXF į PDF internete, DXF į PDF mastelis, DXF spausdinimas masteliu, DXF į PDF konverteris, CAD brėžinys į PDF, DXF PDF A3, PDF mastelis 1:50, DXF į PDF be AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Vadovas
---

Norėdami konvertuoti DXF į PDF, atverkite jį naršykliniame CAD redaktoriuje ir eksportuokite — be diegimo, be paskyros, o failas lieka jūsų kompiuteryje. Jei PDF turi teisingai matuotis atspausdintas, reikia popieriaus maketo ir tikslaus mastelio — tai dalis, kurią dauguma konverterių visiškai praleidžia.

Būtent tas skirtumas ir yra viso šio vadovo esmė. Bendrosios paskirties failų konverteris duoda jūsų brėžinio paveikslėlį. PDF su masteliu duoda brėžinį, prie kurio galima priglausti liniuotę.

## Greitas būdas: tiesiog sukurti PDF

Kai reikia tik kažko skaitomo, ką nusiųsti el. paštu ar pridėti:

1. Atverkite [app.kulmanlab.com](https://app.kulmanlab.com) ir nutempkite savo `.dxf` ant drobės arba naudokite mygtuką **Import** failų skydelyje.
2. Spustelėkite mygtuką **Print** arba įveskite `printmanager`.
3. Nustatykite **Format** į **PDF**.
4. Spustelėkite **Export**. Failas atsisiunčiamas.

Štai ir viskas. Peržiūros skydelis atvaizduojamas tuo pačiu kodu ir ta pačia skyra kaip eksportuotas failas, todėl tai, ką matote, yra tai, ką gaunate, o ne apytikslis vaizdas.

Vieną dalyką verta žinoti: **PDF išlaiko viską, kas ekrane** — matmenis, tekstą, brūkšniavimą, išnašas — išdėstytus tiksliai taip, kaip nubraižyta. DXF eksportas neša visa tai taip pat, todėl pasirinkimas tarp jų nėra apie tai, kas išlieka. Tai apie tai, ko reikia gavėjui: PDF, jei jam reikia tik skaityti ar spausdinti, DXF, jei reikia redaguoti.

## Teisingas būdas: konvertuoti tiksliu masteliu

Jei kas nors pagal tai matuos ar statys, „telpa puslapyje" nepakanka. Brėžinys masteliu 1:50 reiškia, kad 1 mm popieriuje yra 50 mm tikrovėje, o tai galioja tik jei nustatote tai sąmoningai.

1. **Persijunkite į popieriaus maketą.** Spustelėkite maketo skirtuką ekrano apačioje — mygtukas **+** prideda naują. Maketai yra popieriaus erdvė; modelio erdvė neturi puslapio, į kurį galėtų būti keičiamas mastelis.
2. **Nustatykite lapą.** Įveskite `pagemanager` arba dešiniuoju klavišu spustelėkite maketo skirtuką ir pasirinkite **Page Manager**. Pasirinkite popieriaus formatą (A4, A3, A2, Letter…) ir orientaciją.
3. **Padėkite vaizdo langą.** Įveskite `viewportrectangle` ir pasirinkite du priešingus kampus. Vaizdo langas yra langas į jūsų modelį.
4. **Nustatykite mastelį.** Su aktyviu vaizdo langu naudokite **mastelio pasirinkiklį** valdymo juostoje. Pasirinkite standartinį santykį arba įveskite savo — jis priima santykio formatą (`1:200`, `5:1`) arba paprastą dešimtainį skaičių (`0.005`), tada Enter.
5. **Eksportuokite.** Print Manager → PDF → Export.

PDF dydinamas taip, kad puslapis būtų spausdinamas tikruoju fiziniu masteliu. Spausdinkite 100 % — jokio „pritaikyti prie puslapio", kuris tyliai viską perskaičiuoja ir paneigia darbą — ir matmenys popieriuje bus teisingi.

Jei vėliau pakeisite popieriaus dydį ar mastelį, esami vaizdo langai proporcingai perskaičiuojami, todėl maketas nesubyra.

## Kokybės nustatymo pasirinkimas

**Quality** išskleidžiamasis meniu nustato DPI, kuriuo atvaizduojamas PDF:

| Quality | DPI | Naudoti |
|---|---|---|
| Draft | 72 | Greitam patikrinimui, mažiausias failas |
| Normal | 150 | Numatytoji — tinka A4 el. laiškų priedams |
| Presentation | 300 | Kažko, ką žmonės žiūrės iš arti, spausdinimui |
| Max | 600 | Dideliems formatams, smulkioms detalėms |

Linijų storiai keičiasi kartu su skyra, todėl linija bet kokiu nustatymu popieriuje išlaiko tą patį *fizinį* storį — aukštesnė Quality duoda ryškesnę liniją, o ne plonesnę. Išimtis yra plaukelis (linijos storis `0`), kuris pagal konvenciją kiekviename lygyje lieka vienu pikseliu.

## Spausdinimo stiliai

**Style** išskleidžiamasis meniu keičia rašalą ir puslapį:

- **Monochrome** — vientisa juoda ant baltos, ir numatytasis. To norite viskam, kas eina ant popieriaus: spalvoti sluoksniai, gerai skaitomi ekrane, lazeriniame spausdintuve virsta purvinai pilkais.
- **Default** — kiekvieno objekto sava spalva, baltas puslapis.
- **Blueprint** — baltos linijos ant sodrios Prūsijos mėlynos, tradicinio ciantipo stiliumi. Pristatymui, o ne dirbtuvei.

## Konvertavimas tik brėžinio dalies

**Change Area** apkerpa eksportą iki stačiakampio, kurį pasirenkate drobėje. Ji apkerpa tikrąjį eksportuojamą failą, o ne tik peržiūrą, ir veikia tiek makete, tiek modelio erdvėje.

Kampai prisitraukia prie rankenėlių ir sankirtų kaip ir bet kuriame kitame taško pasirinkime, todėl galite apkirpti pagal nubrėžtą geometriją, užuot vertinę iš akies — naudinga, kai lape yra keturi mazgai, o jums reikia tik trečio.

## Ko šis įrankis nedaro

Sąžiningi apribojimai, prieš jais pasikliaujant:

- **PDF yra rastrinis vaizdas PDF konteineryje, o ne vektorius.** Ties A4 ir Normal Quality to nesimato. Ties A1, arba kam nors labai priartinus detalę, vektorinis PDF iš darbalaukio CAD paketo bus ryškesnis. Dideliems formatams padidinkite Quality iki Presentation ar Max — bet vektoriniu jis netampa.
- **Nieko nesiunčiama į fizinį spausdintuvą.** Gaunate failą; jo atspausdinimas yra jūsų spausdintuvo darbas.
- **Tik darbalaukio naršyklės** — Chrome, Firefox, Safari, Edge. Mobiliosios versijos nėra.
- **Tik 2D, DXF, o ne DWG.** Jei jūsų failas yra `.dwg`, paprašykite siuntėjo eksportuoti DXF.

## Kada naudoti ką nors kita

**Bendrosios paskirties failų konverteris** (CloudConvert, Zamzar ir panašūs) tinka, jei iš tikrųjų reikia tik paveikslėlio ir nesvarbu, kokio dydžio jis išsispausdins. Jie greiti ir tvarko formatus, kurių niekas kitas netvarko. Jie nepateiks 1:50 ant A3.

**Darbalaukio CAD** — LibreCAD, QCAD ar AutoCAD, jei jį turite — sukuria vektorinius PDF ir yra teisingas atsakymas dideliems techniniams brėžiniams, kurie bus tinkamai spausdinami ir kruopščiai tikrinami.

**Šis įrankis** didžiajai vidurinei daliai: DXF, kurio jums šiandien reikia kaip teisingu masteliu suformatuoto, anotuoto PDF, nieko neįdiegus.

## Prieš siunčiant

- Mastelis nustatytas sąmoningai vaizdo lange, o ne paliktas taip, kaip tilpo
- Popieriaus formatas atitinka tai, ant ko gavėjas iš tikrųjų spausdins
- Quality padidinta virš Normal, jei tai eina ant kažko didesnio nei A4
- Monochrome stilius, nebent aiškiai norite spalvų
- PDF vieną kartą atvertas patikrinti prieš pridedant
- Gavėjui pasakyta spausdinti 100 %, o ne „pritaikyti prie puslapio"

Ta paskutinė eilutė išgelbsti daugiau brėžinių su masteliu nei bet kas kita šiame sąraše.

---

*Susiję: [Print Manager](/lt/docs/commands/print-manager/) — kiekvienas eksporto nustatymas, [Page Manager](/lt/docs/commands/page-manager/) — popieriaus dydis ir maketo mastelis, [ViewportRectangle](/lt/docs/commands/viewport-rectangle/) — vaizdo langų padėjimas ir mastelio keitimas ir [Import](/lt/docs/commands/import/) — ką KulmanLab skaito iš DXF.*
