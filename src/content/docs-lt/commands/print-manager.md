---
title: Print Manager — brėžinio eksportas kaip PNG, JPEG, WebP ar PDF
description: PrintManager komanda atveria Print Manager — atskirą eksporto langą su gyva peržiūra, tiksliai atitinkančia eksportuotą failą, Quality/DPI nustatymu, formato pasirinkikliu, Default/Monochrome/Blueprint spausdinimo stiliumi ir pasirinktiniu srities apkirpimu. Palaiko PNG, JPEG, WebP ir PDF.
keywords: [CAD eksportas į PNG, CAD eksportas į PDF, CAD brėžinio spausdinimas, spausdinimo tvarkytuvė, spausdinimo kokybė DPI, vienspalvis eksportas, blueprint spausdinimo stilius, kulmanlab eksportas]
group: file
order: 4
---

# Print Manager

Komanda `PrintManager` atveria **Print Manager** — atskirą eksporto langą su gyva peržiūros drobe, formato pasirinkikliu (PNG / JPEG / WebP / PDF), spausdinimo Style pasirinkikliu (Default / Monochrome / Blueprint) ir pasirinktiniu srities apkirpimu. Nieko nesiunčiama į fizinį spausdintuvą; išvestis atsisiunčiama kaip failas.

## Print Manager atvėrimas

Spustelėkite įrankių juostos mygtuką **Print** arba terminale įveskite `PrintManager`. Print Manager atsidaro iškart, rodydamas dabartinio vaizdo peržiūrą.

Peržiūra atvaizduojama tuo pačiu kodu ir tokiu pat pikselių skyra kaip failas, kurį galiausiai eksportuosite — Quality, Style ar eksporto srities pakeitimas iškart perpiešia peržiūrą, todėl tai, ką matote, yra tai, kas atsisiunčiama, o ne apytikslis vaizdas.

## Print Manager išdėstymas

Lange yra du skydeliai:
- **Kairioji šoninė juosta** — visi eksporto valdikliai.
- **Dešinysis skydelis** — gyva peržiūros drobė, atsinaujinanti keičiant nustatymus.

### Šoninės juostos valdikliai

| Valdiklis | Aprašymas |
|-----------|-----------|
| **Change Area** | Apkirpti iki pasirinktinio stačiakampio drobėje (žr. žemiau) — iš tikrųjų apkerpa eksportuojamą vaizdą, įskaitant maketą su popieriaus erdve, o ne tik peržiūrą ekrane |
| **Quality** išskleidžiamasis meniu | Nustato eksporto skiriamąją gebą (žr. žemiau) |
| **Style** išskleidžiamasis meniu | Default, Monochrome arba Blueprint — žr. *Spausdinimo stiliai* žemiau. Pagal numatytuosius nustatymus Monochrome švariai spaudai |
| **Format** išskleidžiamasis meniu | PNG, JPEG, WebP arba PDF |
| **Export** mygtukas | Sugeneruoja ir atsisiunčia failą |

## Spausdinimo stiliai

**Style** išskleidžiamasis meniu valdo ir objektų braižymo spalvą, ir puslapio foną:

| Stilius | Rašalas | Puslapio fonas |
|---------|---------|----------------|
| **Default** | Kiekvieno objekto sava spalva | Baltas |
| **Monochrome** *(numatytasis)* | Vientisa juoda, nepriklausomai nuo objekto/sluoksnio spalvos | Baltas |
| **Blueprint** | Vientisa balta, nepriklausomai nuo objekto/sluoksnio spalvos | Sodri Prūsijos mėlyna su blankiu atskaitos tinkleliu |

Blueprint atkuria tradicinės ciantipinės architektūrinės spaudos išvaizdą — baltos linijos ant tamsiai mėlyno lapo. Jo atskaitos tinklelis dydinamas lapo, o ne DPI atžvilgiu, todėl atrodo vienodo tankio bet kokiu Quality nustatymu, užuot tankėjęs didėjant skyrai.

## Kokybė ir skiriamoji geba

**Quality** išskleidžiamasis meniu nustato DPI, kuriuo atvaizduojamas eksportas:

| Kokybė | DPI |
|--------|-----|
| Draft | 72 |
| Normal *(numatytoji)* | 150 |
| Presentation | 300 |
| Max | 600 |

Aukštesnė Quality sukuria didesnį, ryškesnį vaizdą tokio paties fizinio dydžio — linijų storiai auga kartu su skyra, todėl linija popieriuje išlaiko tą patį *fizinį* storį bet kokiu Quality nustatymu, o ne atrodo plonesnė didėjant DPI. Vienintelė išimtis — plaukelis (linijos storis `0`), įprastai apibrėžiamas kaip „ploniausia linija, kurią gali nubrėžti išvesties įrenginys" — jis kiekviename Quality lygyje lieka fiksuoto 1 pikselio pločio, užuot keitęsis, kaip ir gyvoje drobėje.

Quality pakeitimas iškart perpiešia peržiūrą, todėl prieš eksportuodami matote tikrą ryškumą (ir failo dydžio kompromisą).

## Pasirinktinės eksporto srities pasirinkimas

Pagal numatytuosius nustatymus peržiūra rodo visų modelio erdvės objektų apribojantį stačiakampį — tą patį užimamą plotą, prie kurio priartina [Fit](../fit/) — arba visą lapą makete. Norėdami eksportuoti konkrečią sritį:

1. Spustelėkite **Change Area** arba terminale įveskite [`ChangePrintArea`](../change-print-area/) — Print Manager paslepiamas ir drobė tampa interaktyvi.
2. **Spustelėkite pirmą kampą** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite priešingą kampą** — Print Manager vėl atsidaro su pasirinkta sritimi peržiūroje.

Kampai prisitraukia prie rankenėlių ir sankirtų kaip ir bet kuriame kitame taško pasirinkime, todėl galite apkirpti pagal nubrėžtą geometriją, o ne iš akies.

Paspauskite `Escape` renkant sritį, kad atšauktumėte ir atkurtumėte ankstesnę sritį.

Peržiūros drobė dinamiškai keičia dydį, kad atitiktų pasirinktos srities **tikslų kraštinių santykį**, todėl peržiūra tiksli iki pikselio.

Pasirinkta sritis pamenama atskirai modelio erdvei ir kiekvienam maketui, kol perkrausite puslapį — žr. [ChangePrintArea](../change-print-area/).

## Eksporto formatai

| Formatas | Geriausiai tinka | Pastabos |
|----------|------------------|----------|
| **PNG** | Be praradimų, ryškioms linijoms | Style puslapio fonas įkeptas, be permatomumo |
| **JPEG** | Mažesniam failui dalijimuisi | 95% kokybė, nedidelis suspaudimas |
| **WebP** | Mažiausiam failui internetui | Ta pati 95% kokybė, geresnis suspaudimas nei JPEG |
| **PDF** | Dokumentams, paruoštiems spausdinti | Vaizdas įterptas į PDF konteinerį pasirinktos Quality DPI, dydintas taip, kad puslapis būtų spausdinamas tikruoju fiziniu masteliu |

Eksportuotas failas pavadinamas `kulman-<timestamp>.<ext>` ir atsisiunčiamas automatiškai.

## Eksporto skiriamoji geba ir fonas

- **Modelio erdvės / vaizdo lango eksportas**: apribotas iki 2000 × 2000 pikselių numatytosios Normal (150 DPI) Quality, proporcingai keičiamas pagal pasirinktą sritį; riba keičiasi ir su Quality — Draft riboja žemiau, Presentation ir Max aukščiau (iki 8000 × 8000 esant Max/600 DPI).
- **Maketo (popieriaus erdvės) eksportas**: dydinamas tiesiai pagal maketo popieriaus matmenis pasirinktu DPI — pvz., A4 lapas (210 × 297 mm) esant Normal kokybei eksportuojamas maždaug 1240 × 1754 px — todėl jam netaikoma 2000 px vaizdo lango riba.
- Fonas seka pasirinktą spausdinimo **Style** — baltas Default ir Monochrome, sodri Prūsijos mėlyna Blueprint (žr. *Spausdinimo stiliai* aukščiau).
- Sluoksniai, pažymėti kaip **nespausdinami**, iš eksporto išskiriami.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Escape` (renkant sritį) | Atšaukia srities pasirinkimą, atkuria ankstesnę sritį |
| `Escape` (Print Manager) | Uždaro Print Manager |
