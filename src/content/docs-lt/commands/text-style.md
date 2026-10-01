---
title: TextStyle komanda — įvardytų teksto stilių kūrimas ir valdymas
description: Kurkite ir valdykite įvardytus CAD teksto stilius su šrifto, aukščio, pusjuodžio, kursyvo, eilučių tarpo, lygiavimo ir teksto rėmelio numatytosiomis reikšmėmis. Naujas Text naudoja dabartinį stilių.
keywords: [teksto stilius CAD, CAD šrifto stilius, įvardytas teksto stilius, teksto stilių tvarkytuvė, pusjuodis kursyvas tekstas CAD, teksto rėmelis CAD, teksto eilučių tarpas CAD, teksto lygiavimas CAD, teksto stilius DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Komanda `TextStyle` atveria dialogą su visų brėžinio įvardytų teksto stilių sąrašu. Kurkite stilius, redaguokite jų formatavimo numatytąsias reikšmes ir pasirinkite, kuris yra *dabartinis*. Naujas [Text](../text/) sukūrimo metu nukopijuoja dabartinio stiliaus nustatymus.

## Text Style dialogo atvėrimas

- Terminale įveskite `TextStyle`, **arba**
- spustelėkite mygtuką **Text Style** Annotate skydelyje.

Dialogas atsidaro kaip plaukiojantis langas: kairėje išvardyti visi stiliai, dešinėje — pasirinkto savybės.

## Stilių sąrašas

Kiekviena eilutė rodo stiliaus pavadinimą. Varnelė žymi *dabartinį* stilių — tą, kurį naudoja naujas Text.

| Žymė | Reikšmė |
|------|---------|
| ✓ | Tai *dabartinis* stilius — naujas Text nukopijuoja jo formatavimo numatytąsias reikšmes |

Spustelėkite eilutę, kad ją pasirinktumėte redagavimui; dukart spustelėkite, kad ją pasirinktumėte **ir** padarytumėte dabartine vienu žingsniu. Pieštuku šalia stiliaus pavadinimo pervadinkite jį vietoje. `Standard` pervadinti negalima.

## Stiliaus redagavimas

Pasirinkus stilių, jo savybės yra dešinėje:

| Laukas | Ką valdo |
|--------|----------|
| Font | Šrifto tipas, pasirenkamas iš to paties sąrašo, kurį valdo [FontManager](../font-manager/) — įkelkite ten nuosavą šriftą ir jis pasirodys ir čia. |
| Height | Privalomas teigiamas teksto aukštis. Nauji ir seni stiliai su nuliniu ar neigiamu aukščiu naudoja `1`; tvarkytuvė priima reikšmes, didesnes nei `0`. |
| Bold / Italic | Perjunkite kiekvieną nepriklausomai; virš jų esantis gyvas pavyzdys atsinaujina iškart. |
| Line Spacing | Daugiklis, taikomas tarp teksto eilučių. `1` naudoja įprastą tarpą; didesnės reikšmės eilutes išskiria toliau viena nuo kitos. |
| Horizontal Alignment | Numatytasis pastraipos lygiavimas naujam Text: Left, Center, Right ar Justify. |
| Frame | Nubrėžia stačiakampį rėmelį aplink naują Text, sukurtą su stiliumi. |

Peržiūra piešia dviejų eilučių pangramą tuo pačiu atvaizdavimo įrankiu kaip Text drobėje. Šriftas, aukštis, pusjuodis, kursyvas, rėmelis, eilučių tarpas ir horizontalus lygiavimas visi atsinaujina iškart; mastelio rodmuo rodo mastelį, naudotą peržiūrai sutalpinti. Nauji stiliai pagal numatytuosius nustatymus turi **Left** lygiavimą.

Anotatyvūs stiliai, importuoti iš DXF, šiuo metu paslėpti, nes anotatyvus mastelio keitimas dar neatvaizduojamas. Jų įrašai išsaugomi, bet šiame dialoge jų pasirinkti ar redaguoti negalima.

Pavadinimas, kuris tuščias, jau naudojamas kito stiliaus arba turi simbolį, kurio DXF failas negali talpinti (`< > / \ " : ; ? * | , = \``), atmetamas su klaida eilutėje, o **OK** lieka išjungtas, kol kiekvieno stiliaus pavadinimas nebus tinkamas.

## Stilių kūrimas ir ištrynimas

- **New** dubliuoja pasirinktą stilių — visas jo formatavimo numatytąsias reikšmes — pagal kitą laisvą pavadinimą (`Style1`, `Style2`, …) ir pasirenka jį redagavimui.
- **Delete** pašalina pasirinktą stilių, bet tik kai jis nėra nei `Standard`, nei dabartinis stilius; kitu atveju mygtukas išjungtas.

## Dabartinio stiliaus nustatymas

**Set Current** padaro pasirinktą stilių tuo, su kuriuo kuriamas naujas Text, ir yra išjungtas, kai tas stilius jau dabartinis. Tas pats perjungimas prieinamas neatidarant dialogo: išskleidžiamasis meniu šalia **Text Style** Annotate skydelyje išvardija kiekvieną matomą stilių.

Stilius yra *šablonas sukūrimo momentu*. Šriftas, aukštis, pusjuodis, kursyvas, eilučių tarpas, lygiavimas ir rėmelis nukopijuojami ant naujo Text objekto; objektas nėra gyvai susietas su stiliumi. Vėlesnis stiliaus redagavimas ar ištrynimas esamo Text nepakeičia.

## Pakeitimų išsaugojimas ar atmetimas

Kiekvienas čia atliktas redagavimas veikia stilių lentelės kopiją. **OK** įrašo kopijas atgal — pervadinimai, nauji stiliai, ištrynimai ir dabartinio stiliaus pasirinkimas įsigalioja kartu — ir uždaro dialogą. **Close** (arba `Escape`) atmeta viską, ar spustelėjote New, Delete, ar žymimąjį langelį, ir palieka brėžinį tiksliai tokį, koks buvo.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `↑` / `↓` | Perkelia pasirinkimą aukštyn ar žemyn stilių sąraše |
| `Escape` | Atmeta pakeitimus ir uždaro dialogą |

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Text](../text/) | Braižo teksto užrašą — šriftą, storį ir aukštį ima iš dabartinio teksto stiliaus |
| [FontManager](../font-manager/) | Naršyti, pasirinkti ir įkelti nuosavus šriftus, iš kurių semiasi teksto stiliaus laukas Font |
| [MatchProperties](../match-properties/) | Kopijuoja teksto objekto aukštį kitiems — ne šriftą, pusjuodį ar kursyvą |

## DXF suderinamumas

Pavadinimas, šriftų failai, pusjuodis, kursyvas ir anotatyvumo vėliavėlė išsaugomi DXF teksto stiliuose. KulmanLab STYLE grupę `40` rašo kaip `0` (kintamas aukštis), o paskutinį naudotą aukštį — grupėje `42`; fiksuotas STYLE aukštis neperrašo matmenų stiliaus teksto aukščio. Rėmelis, eilučių tarpas ir horizontalus lygiavimas yra KulmanLab numatytosios reikšmės kiekvienam tekstui, o ne DXF STYLE lentelės laukai.
