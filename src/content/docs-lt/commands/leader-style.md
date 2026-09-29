---
title: LeaderStyle komanda — įvardytų išnašų stilių kūrimas ir valdymas
description: Kurkite ir valdykite įvardytus CAD išnašų stilius su rodyklės, rodyklės dydžio, lentynėlės tarpo, teksto prijungimo, pasukimo, šrifto, aukščio, formatavimo ir rėmelio numatytosiomis reikšmėmis.
keywords: [išnašos stilius CAD, multileader stilius, MLEADERSTYLE, CAD rodyklės stilius, išnašos teksto prijungimas, išnašos lentynėlės tarpas, išnašos stilius DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Komanda `LeaderStyle` atveria dialogą įvardytiems išnašų stiliams kurti, redaguoti ir pasirinkti. Kiekviena nauja [Leader](../leader/) sukūrimo metu nukopijuoja *dabartinio* stiliaus išnašos ir teksto nustatymus.

## Leader Style dialogo atvėrimas

- Terminale įveskite `LeaderStyle`, **arba**
- spustelėkite mygtuką **Leader Style** Annotate skydelyje.

Sąrašas kairėje apima kiekvieną matomą išnašos stilių. Varnelė žymi dabartinį stilių. Spustelėkite stilių, kad jį redaguotumėte; pieštuku šalia jo pavadinimo jį pervadinkite.

## Išnašos nustatymai

| Laukas | Ką valdo |
|--------|----------|
| Text Attachment | Kur lentynėlė susitinka su užrašu: Top, Middle, Bottom ar Underline |
| Arrowhead | Simbolis kiekvienos šakos smaigalyje, pasirenkamas iš vaizdinio rodyklių pasirinkiklio |
| Arrow Size | Rodyklės dydis brėžinio vienetais |
| Landing Gap | Tarpas tarp lentynėlės galinio taško ir teksto |
| Text Rotation | Užrašo pasukimas laipsniais; išvalius lauką grąžinama į `0` |

## Teksto nustatymai

| Laukas | Ką valdo |
|--------|----------|
| Text Style | Greitai užpildo Font, Text Height, Bold ir Italic iš įvardyto [TextStyle](../text-style/) |
| Font | Naujos išnašos užrašo šrifto tipas |
| Text Height | Užrašo aukštis brėžinio vienetais |
| Bold / Italic | Nepriklausomos formatavimo numatytosios reikšmės |
| Frame Text | Nubrėžia stačiakampį rėmelį aplink užrašą |

Text Style yra vienkartinis greitas užpildymas, o ne gyva nuoroda. Bet kurios nukopijuotos reikšmės redagavimas nekeičia šaltinio teksto stiliaus, o vėlesni to teksto stiliaus pakeitimai neatnaujina išnašos stiliaus.

Peržiūra naudoja tą patį daugiašakės išnašos atvaizdavimo įrankį kaip drobė ir atsinaujina iškart. Jos mastelio rodmuo rodo mastelį, naudotą pilnai rodyklei, lentynėlei ir tekstui sutalpinti peržiūroje.

## Stilių kūrimas, pervadinimas ir ištrynimas

- **New** dubliuoja pasirinktą stilių pagal kitą laisvą pavadinimą (`Leader1`, `Leader2`, …).
- Naudokite pieštuką stiliaus eilutėje, kad jį pervadintumėte. `Standard` pervadinti negalima.
- **Delete** pašalina pasirinktą stilių tik tada, kai jis nėra nei `Standard`, nei dabartinis stilius.

Pavadinimai turi būti netušti, unikalūs net tarp paslėptų stilių ir tinkami DXF. Pavadinimai, turintys `< > / \ " : ; ? * | , = \``, atmetami, o **OK** lieka išjungtas, kol kiekvienas matomas stilius neturi tinkamo pavadinimo.

Anotatyvūs stiliai, importuoti iš DXF, šiuo metu paslėpti, nes anotatyvus mastelio keitimas dar neatvaizduojamas. Jų įrašai lieka brėžinyje ir įrašomi atgal nepakeisti, nebent matoma stilių lentelė kitaip išsaugoma.

## Dabartinio stiliaus nustatymas

**Set Current** padaro pasirinktą stilių numatytuoju būsimoms išnašoms. Išskleidžiamasis meniu šalia **Leader Style** Annotate skydelyje suteikia tą patį pasirinkimą neatidarant dialogo.

Išnašos stilius nukopijuojamas sukūrimo metu. Esamos išnašos nėra gyvai susietos ir nekinta, kai stilius redaguojamas, pervadinamas ar ištrinamas.

## Pakeitimų išsaugojimas ar atmetimas

Visi redagavimai atliekami su kopijomis. **OK** kartu pritaiko pervadinimus, pridėjimus, ištrynimus, savybių pakeitimus ir dabartinio stiliaus pasirinkimą. **Close**, lango uždarymo mygtukas, spustelėjimas ant fono ar `Escape` juos atmeta.

| Klavišas | Veiksmas |
|----------|----------|
| `↑` / `↓` | Naršyti stilių sąrašą, kai fokusas ne įvesties lauke |
| `Escape` | Atmeta pakeitimus ir uždaro dialogą |

## DXF suderinamumas

KulmanLab importuoja ir eksportuoja `MLEADERSTYLE` įrašus. Pavadinimas, rodyklė, rodyklės dydis, lentynėlės tarpas, teksto aukštis, teksto prijungimas, rėmelis ir anotatyvumo vėliavėlė keliauja kaip įvardyto stiliaus laukai. Eksportuojant grupė `342` nurodo TextStyle, kurio šriftas, pusjuodis, kursyvas ir aukštis atitinka LeaderStyle, grįžtant prie `Standard`, kai joks stilius neatitinka. Ši DXF nuoroda nepadaro programos greito užpildymo gyva nuoroda. Vienas Text Attachment nustatymas rašomas ir į kairįjį, ir į dešinįjį prijungimo laukus, todėl lieka teisingas, kai išnaša AutoCAD pakeičia pusę.

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Leader](../leader/) | Braižo daugiašakę išnašą pagal dabartinį išnašos stilių |
| [LeaderAdd](../leader-add/) | Prideda rodyklės šaką prie esamos išnašos |
| [LeaderRemove](../leader-remove/) | Pašalina šaką iš išnašos su keliomis šakomis |
| [TextStyle](../text-style/) | Pateikia teksto nustatymus per greito užpildymo pasirinkiklį |
