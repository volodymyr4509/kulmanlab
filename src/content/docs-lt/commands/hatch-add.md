---
title: HatchAdd komanda — .pat brūkšniuotės raštų failo įkėlimas iš terminalo
description: HatchAdd komanda atveria jūsų failų pasirinkiklį, kad įkeltumėte .pat raštų failą, iš pradžių neatvėrus Hatch Manager. Vienu metu pridedami visi failo apibrėžti raštai.
keywords: [hatch add komanda, hatchadd komanda, pat failo įkėlimas terminale, nuosavas brūkšniuotės raštas CAD, acad.pat, brūkšniuotės raštų biblioteka, kulmanlab]
group: style
order: 5
---

# HatchAdd

Komanda `HatchAdd` atveria jūsų sistemos failų pasirinkiklį, kad įkeltumėte `.pat` brūkšniuotės raštų failą, iš pradžių neatvėrus [Hatch Manager](../hatch-manager/) dialogo. Tai tas pats įkėlimas, kurį paleidžia Hatch Manager mygtukas **Add .pat File** — HatchAdd yra tiesiog tiesioginis kelias į jį iš terminalo.

## Raštų failo įkėlimas

1. Terminale įveskite `HatchAdd` arba spustelėkite **Add .pat File** [Hatch Manager](../hatch-manager/) dialogo apačioje.
2. Sistemos pasirinkiklyje pasirinkite `.pat` failą. Priimamas tik standartinis brūkšniuotės raštų formatas.

Komanda baigiasi, kai tik atsidaro failų pasirinkiklis — jokio tolesnio raginimo, spustelėjimo ar terminalo įvedimo. Raštai užregistruojami ir pasirodo grupėje **User**, kai tik failas pasirenkamas.

## Kas nutinka įkėlus

- **`.pat` failas yra konteineris, o ne vienas raštas.** Vienas failas paprastai apibrėžia daug įvardytų raštų ir visi jie pridedami kartu. Tuo HatchAdd daugiausia skiriasi nuo [FontAdd](../font-add/), kur vienas `.ttf` yra vienas šriftas.
- **Pats failas nesaugomas.** Jis perskaitomas vieną kartą, suskaidomas į savo raštus, ir kiekvienas raštas išsaugomas atskirai savo pavadinimu. Todėl vėliau galite pašalinti vieną raštą netrikdydami kitų, atkeliavusių kartu — ir todėl grupė **User** išvardija raštus abėcėlės tvarka pagal pavadinimą, o ne pagal failą, iš kurio jie kilo.
- **Raštas, kurio pavadinimas sutampa su esamu, jį pakeičia.** Tai palaikomas būdas įdiegti autoritetingus apibrėžimus vietoj KulmanLab pačių aproksimacijų: įkelkite tikrą `acad.pat` ir jo `ANSI31` bei kitų standartinių pavadinimų versijos perims.
- **Raštai saugomi naudotojui, o ne brėžiniui.** Jie gyvena naršyklėje (IndexedDB), automatiškai įkeliami kitą kartą atvėrus KulmanLab CAD ir prieinami kiekvienam brėžiniui.
- **Failas be tinkamų raštų apibrėžimų nieko nepridės.** Biblioteka lieka tiksliai tokia, kokia buvo.

## Klavišų nuoroda

HatchAdd neturi savo klaviatūros sąveikos — visa komanda yra naršyklės vietinis failų pasirinkimo dialogas. Atšaukus tą dialogą (ar nepasirinkus failo), raštų biblioteka nekinta.

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Hatch Manager](../hatch-manager/) | Naršyti raštų biblioteką su gyva pavyzdžio peržiūra ir šalinti įkeltus raštus |
| [Hatch](../hatch/) | Užpildo uždarą sritį raštu iš bibliotekos |
| [FontAdd](../font-add/) | Tas pats tiesioginio įkėlimo spartusis kelias `.ttf` šriftams |
