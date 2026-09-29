---
title: Hatch Manager komanda — .pat raštų naršymas ir įkėlimas
description: Hatch Manager komanda atveria dialogą brūkšniuotės raštams naršyti su gyva pavyzdžio peržiūra ir nuosavų .pat raštų failų įkėlimui. Įkelti failai išsaugomi naršyklėje ir uždengia to paties pavadinimo įtaisytuosius raštus.
keywords: [brūkšniuočių tvarkytuvė, nuosavas brūkšniuotės raštas CAD, pat failo įkėlimas, acad.pat, brūkšniuotės raštų biblioteka, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Komanda `HatchManager` atveria dialogą brūkšniuotės raštams naršyti su gyva pavyzdžio peržiūra ir nuosavų `.pat` raštų failų įkėlimui, naudojamų su [Hatch](../hatch/).

## Hatch Manager atvėrimas

Terminale įveskite `HatchManager`. Tai atskira nuo raštų pasirinkiklio, kuris atsidaro spustelėjus brūkšniuotės lauką **Pattern** — pasirinkiklis parenka raštą vienai brūkšniuotei, o Hatch Manager yra vieta, kur pridedate ar šalinate `.pat` failus.

## Raštų grupės

| Grupė | Turinys |
|-------|---------|
| **User** | Raštai iš jūsų pačių įkeltų `.pat` failų, suskirstyti į pogrupius pagal tai, iš kurio failo kiekvienas kilo (rodoma tik kai jau įkėlėte) |
| **Standard** | `SOLID` plius šio brėžinio paties raštų lentelė — kiekvienas naujas brėžinys prasideda su ta pačia įtaisytąja biblioteka, kaip ir jo sluoksniai bei linijų tipai |

Spustelėkite bet kurį sąrašo raštą (arba naudokite `↑`/`↓`), kad peržiūrėtumėte jį dešinėje — pavyzdys nupieštas tuo pačiu kodu, kuriuo drobė užpildo, todėl tai tiksliai tai, ką rodys brėžinys, plius rašto pavadinimas, aprašymas ir linijų skaičius.

## Nuosavo raštų failo įkėlimas

1. Spustelėkite **Add .pat File** dialogo apačioje.
2. Pasirinkite `.pat` failą — standartinį brūkšniuotės raštų formatą. Vienas failas paprastai apibrėžia daug įvardytų raštų vienu metu; visi jie pasirodo kaip atskiri įrašai, sugrupuoti pagal to failo pavadinimą.
3. Įkelti failai išsaugomi naršyklėje visam laikui (IndexedDB), rikiuojami nuo naujausiai pridėto ir automatiškai įkeliami kitą kartą atvėrus KulmanLab CAD.

Įkėlus failą, apibrėžiantį raštą tuo pačiu pavadinimu kaip įtaisytasis, numatytasis **uždengiamas** — tai palaikomas būdas gauti autoritetingus Autodesk raštų apibrėžimus: įkelkite tikrą `acad.pat` ir jo ANSI31 bei kitų standartinių pavadinimų versijos perima iš KulmanLab aproksimacijų.

Jei brėžinys nurodo rašto pavadinimą, kurio nėra jūsų bibliotekoje — importuotą iš DXF, naudojusio raštą iš `acad.pat`, kurio neįkėlėte — brūkšniuotė vis tiek atvaizduojama, naudojant `ANSI31` kaip pakaitą, užuot grįžusi prie plokščio užpildo be rašto.

## Raštų failo pašalinimas

Spustelėkite **×** šalia failo pavadinimo grupėje **User**, kad pašalintumėte jį ir kiekvieną jo apibrėžtą raštą. Bet kuri brūkšniuotė, jau naudojanti vieną iš tų raštų, iškart grįžta prie `ANSI31`. Įtaisytųjų **Standard** raštų pašalinti negalima.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `↑` / `↓` | Perkelia pasirinkimą aukštyn ar žemyn raštų sąraše |
| `Escape` | Uždaro Hatch Manager |

## Susijusios komandos

- [Hatch](../hatch/) — užpildo pasirinktą sritį šiuo metu pasirinktu raštu
- [Font Manager](../font-manager/) — tas pats įkėlimo/naršymo principas, tik nuosavų šriftų, o ne brūkšniuotės raštų
