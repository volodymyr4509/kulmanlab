---
title: Hatch komanda — srities užpildymas raštu
description: Hatch komanda užpildo sritį, supančią pasirinktą tašką, raštu — bet kuris linijų, lankų, elipsių ir splainų derinys, kuris užsidaro, apriboja sritį, o viskas uždara viduje lieka kaip neužpildyta sala.
keywords: [CAD hatch komanda, srities užpildymas CAD, brūkšniuotės raštas CAD, ANSI31, SOLID užpildas, užpildas pagal ribą CAD, DXF HATCH objektas, kulmanlab]
group: shapes
order: 7
---

# Hatch

Komanda `hatch` užpildo sritį, supančią pasirinktą tašką, raštu. Riba iš anksto nebraižoma — ji imama iš to, kas jau yra drobėje, todėl keturios atskiros [Lines](../line/), susitinkančios galais, apriboja sritį lygiai kaip uždara [Polyline](../polyline/), o bet kuri uždara figūra viduje tampa sala, kurią užpildas praleidžia.

## Srities užpildymas

1. Terminale įveskite `hatch` arba spustelėkite įrankių juostos mygtuką **Hatch** (pavyzdžio piktograma).
2. **Spustelėkite tašką** srities, kurią norite užpildyti, viduje.
3. Komanda lieka aktyvi, todėl toliau spustelėdami užpildykite daugiau sričių — kiekvienas pasirinkimas sukuria savo `Hatch` objektą.
4. Baigę paspauskite **Enter**, **Space** arba **Escape**.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   spustelėkite išorinės
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   ribos viduje; apskritimas
  └─────────────┘        └─────────────┘   lieka kaip sala
```

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Užbaigia Hatch komandą |
| `Escape` | Užbaigia Hatch komandą (kaip Enter/Space) |

## Kas gali apriboti sritį

Ribą gali sudaryti bet koks šių objektų tipų derinys, jei jie jungiasi galas į galą be tarpo:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (sava uždara riba)
- [Ellipse](../ellipse/) (uždara arba atviras elipsinis lankas kaip didesnės kilpos dalis)
- [Polyline](../polyline/) (atvira ar uždara) ir [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Text, Multileader ir Dimension objektai niekada nelaikomi ribomis.

## Salos

Bet kas visiškai uždara, esantis pasirinktos srities viduje — apskritimas, uždara polilinija, kitos brūkšniuotės riba — tampa **sala**: užpildas sustoja prie jos krašto, o pati sala lieka tuščia. Įdėjus uždarą figūrą į kitą uždarą figūrą, užpildas kaitaliojasi — skylė užpildo viduje skylės viduje — laikantis tos pačios vidus/išorė taisyklės kiekviename lygyje.

## Kai pasirinkimas nepavyksta

Jei spustelėtas taškas neapribotas arba riba turi tarpą, terminalas paaiškina kodėl, užuot tyliai nieko nedaręs:

| Pranešimas | Reikšmė |
|------------|---------|
| "no boundary found" | Iš pasirinkto taško jokia kryptimi nieko nepataikyta — netoliese ribos nėra išvis |
| "point is not enclosed" | Netoliese riba yra, tačiau jos sudaryta figūra neapima jūsų spustelėto taško |
| "boundary is open" | Artimiausia riba kažkur turi tarpą — apeikite ją ir patikrinkite, ar kiekviena jungtis tiksli |
| "boundary too complex" | Ribos kilpos nepavyko uždaryti per apėjimo limitą — dažniausiai persidengiančių objektų raizgalynė |

Komanda po nepavykusio pasirinkimo lieka aktyvi — perskaitykite pranešimą, pataisykite brėžinį ar spustelėkite kitur ir bandykite dar kartą.

## Rašto pasirinkimas

Kiekviena nauja brūkšniuotė pradeda užpildyta `ANSI31` (arba tuo raštu, kurį naudojo *paskutinė* jūsų redaguota brūkšniuotė) — prieš braižant rašto pasirinkiklio nėra. Norėdami naudoti kitą raštą:

1. Pasirinkite esamą brūkšniuotę ir atverkite jos lauką **Pattern** savybių skydelyje — atsidaro raštų pasirinkiklis, pavadintų pavyzdžių tinklelis, sugrupuotas pagal tai, iš kur kiekvienas raštas kilo.
2. Spustelėkite raštą, kad jį pritaikytumėte — užpildas atsinaujina iškart.

Tas pasirinkimas taip pat tampa numatytuoju *kitai* brūkšniuotei, kurią sukursite komanda `hatch`, kaip ir sluoksnio ar spalvos pasirinkimas keliauja toliau. Taigi norėdami išbrūkšniuoti kelias naujas sritis konkrečiu raštu: užpildykite vieną sritį, vieną kartą nustatykite jos raštą, tada brūkšniuokite toliau — kiekvienas vėlesnis užpildas jau prasideda su tuo raštu.

Nuosavų `.pat` raštų failų įkėlimą ir visos bibliotekos naršymą žr. [Hatch Manager](../hatch-manager/).

**SOLID** yra paprastas įrašas raštų sąraše, o ne atskiras žymimasis langelis ar režimas — pasirinkite jį taip pat, kaip ANSI31 ar bet kurį kitą įvardytą raštą.

## Savybės

| Savybė | Reikšmė |
|--------|---------|
| Pattern | Rašto pavadinimas iš bendro raštų žodyno (žr. [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Keičia rašto linijų tarpų mastelį — didesnės reikšmės išskiria rašto linijas toliau viena nuo kitos |
| Pattern Angle | Pasuka raštą nepriklausomai nuo ribos |
| Origin X / Origin Y | Kur ankuruotas paties rašto pasikartojimas, brėžinio koordinatėmis |

Brūkšniuotės perkėlimas, pasukimas, atspindėjimas ar mastelio keitimas nešasi ir jos rašto padėtį, todėl užpildas lieka sulygiuotas su riba — po transformacijos nereikia iš naujo nustatyti mastelio ar kampo.

## Ribos redagavimas rankenėlėmis

Pasirinkta brūkšniuotė turi rankenėles ties savo riba taip, kaip Polyline turi jas viršūnėse — po vieną rankenėlę kiekviename kampe, kur susitinka du kraštai, ir po vieną kiekvieno krašto viduryje (uždara kilpa, pavyzdžiui, brūkšniuotas apskritimas ar elipsė, vietoj to turi rankenėles keturiuose savo ašių taškuose).

| Rankenėlė | Ką daro |
|-----------|---------|
| **Kampas** | Perkelia tą kampą. Tiesus kraštas seka tiksliai; lankas prisitaiko taip, kad toliau eitų per abu kaimynus; elipsės ar splaino kraštas gali nusileisti tik ant savo paties kreivės, todėl kampas prisitraukia prie artimiausio taško ant jos |
| **Krašto vidurys — linija, elipsė ar splainas** | Slenka visą kraštą; kraštai abiejose pusėse apkarpomi ar pratęsiami, kad liktų prie jo prijungti |
| **Krašto vidurys — lankas** | **Išlenkia** lanką per žymeklį, užuot jį stūmęs — abu galai lieka tiksliai ten, kur buvo, ir nieko kito ribose nejuda |
| **Center** (visos brūkšniuotės) | Aktyvuoja [Move](../move/) visai brūkšniuotei |

Tempimo peržiūra rodo ribą kaip brūkšninį kontūrą, o ne ištisinį užpildą, kol tempiate — pradinis užpildas lieka matomas po juo iki atleidimo, nes peržiūra gali piešti tik ant esamo, niekada nieko iš jo nepašalindama.

## DXF — HATCH objektas

Brūkšniuotės **importuojamos** iš `HATCH` objektų: KulmanLab skaito ribos geometriją kartu su rašto pavadinimu, masteliu ir kampu (DXF grupių kodai 70/41/52) — jis **neskaito** rašto pačių linijų apibrėžimų, įrašytų tiesiai faile. Vietoj to rašto pavadinimas ieškomas paties KulmanLab raštų bibliotekoje (įtaisytieji numatytieji plius bet kas, ką įkėlėte [Hatch Manager](../hatch-manager/)). Pavadinimas, kurio jūsų bibliotekoje nėra, grįžta prie ANSI31, kad brėžinys vis tiek atrodytų išbrūkšniuotas, ir vieną kartą užfiksuojama pastaba.

Splainu apribotos kilpos, įrašytos kitų programų (DXF ribos krašto tipas 4), kol kas neskaitomos.

Brūkšniuotės į DXF **eksportuojamos** kaip `HATCH` objektai. Ribos kilpos išeina su rašto pavadinimu (grupės kodas 2), vientiso užpildo vėliavėle (70) ir šios brūkšniuotės pačios kampu bei masteliu (52/41) — ir, skirtingai nei importo kelyje, išspręsti rašto linijų apibrėžimai taip pat įrašomi tiesiai į failą (78, su 53/43/44/45/46/79/49). Asimetrija sąmoninga: KulmanLab gali išspręsti pavadinimą pagal savo biblioteką, tačiau failą priimanti programa gali neturėti to rašto, todėl linijos keliauja kartu.

## Susijusios komandos

- [Hatch Manager](../hatch-manager/) — naršyti raštų biblioteką ir įkelti `.pat` failus
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — visos nešasi brūkšniuotės rašto padėtį kartu su ja
- [Delete](../delete/) — pašalina brūkšniuotę neliesdama objektų, kurie ją ribojo
