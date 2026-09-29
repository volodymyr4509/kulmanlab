---
title: FontAdd komanda — nuosavo TTF šrifto įkėlimas iš terminalo
description: FontAdd komanda atveria jūsų sistemos failų pasirinkiklį, kad įkeltumėte .ttf šriftą, iš pradžių neatvėrus Font Manager dialogo. Tai tas pats įkėlimas, kurį paleidžia Font Manager mygtukas Add Font, prieinamas kaip atskira terminalo komanda.
keywords: [CAD šrifto pridėjimo komanda, fontadd komanda, ttf įkėlimas terminale, nuosavas šriftas CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Komanda `FontAdd` atveria jūsų sistemos failų pasirinkiklį, kad įkeltumėte nuosavą `.ttf` šriftą, iš pradžių neatvėrus [Font Manager](../font-manager/) dialogo. Tai tas pats įkėlimas, kurį paleidžia Font Manager mygtukas **Add Font** — FontAdd yra tiesiog tiesioginis kelias į jį iš terminalo.

## Šrifto įkėlimas

1. Terminale įveskite `FontAdd` arba spustelėkite **Add Font** [Font Manager](../font-manager/) dialogo apačioje.
2. Sistemos pasirinkiklyje pasirinkite `.ttf` failą. Palaikomi tik TrueType šriftai — `.otf` ir `.woff`/`.woff2` nepalaikomi.

Komanda baigiasi, kai tik atsidaro failų pasirinkiklis — jokio tolesnio raginimo, spustelėjimo ar terminalo įvedimo. Šriftas užregistruojamas ir pasirodo grupėje **User**, kai tik failas pasirenkamas.

## Kas nutinka įkėlus

- Failo pavadinimas (be plėtinio) tampa šrifto pavadinimu. Įkėlus `MyFont.ttf` pridedamas šriftas, vadinamas `MyFont`.
- Įkėlus failą, kurio pavadinimas sutampa su esamu nuosavu šriftu, tas šriftas **pakeičiamas**.
- Šriftas išsaugomas naršyklėje visam laikui (IndexedDB) ir automatiškai įkeliamas kitą kartą atvėrus KulmanLab CAD — jis nesusietas su dabartiniu brėžiniu.

## Klavišų nuoroda

FontAdd neturi savo klaviatūros sąveikos — visa komanda yra naršyklės vietinis failų pasirinkimo dialogas. Atšaukus tą dialogą (ar nepasirinkus failo), šriftų sąrašas nekinta.

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Font Manager](../font-manager/) | Naršyti, peržiūrėti, pasirinkti ir šalinti šriftus, įskaitant nuosavus įkeltus |
| [Text](../text/) | Deda teksto užrašus, kuriems taikomi šriftų pasirinkimai |
