---
title: Font Manager komanda — nuosavų TTF šriftų įkėlimas ir valdymas
description: Font Manager komanda atveria dialogą šriftams naršyti, peržiūrėti ir pasirinkti bei nuosavų .ttf failų įkėlimui. Įkelti šriftai išsaugomi naršyklėje ir DXF eksportuose įterpiami pagal pavadinimą.
keywords: [šriftų tvarkytuvė, nuosavas šriftas CAD, ttf įkėlimas, nuosavas šrifto tipas CAD, google fonts CAD, teksto šriftas CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Komanda `FontManager` atveria dialogą šriftams naršyti ir pasirinkti bei nuosavų `.ttf` failų įkėlimui, naudojamiems [Text](../text/) ir [Multileader](../leader/) objektuose.

## Font Manager atvėrimas

- Terminale įveskite `FontManager`, **arba**
- spustelėkite mygtuką **Font Manager** [teksto redaktoriaus](../../interface/text-editor/) įrankių juostoje.

## Šriftų grupės

| Grupė | Turinys |
|-------|---------|
| **Default** | Įtaisytasis be užraitų šriftas — visada prieinamas |
| **User** | Jūsų pačių įkelti `.ttf` šriftai (rodoma tik kai pridėjote bent vieną) |
| **Free** | 15 pridėtų Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Įprasti OS šriftai (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Spustelėkite bet kurį sąrašo šriftą, kad peržiūrėtumėte jį dešinėje — pavadinimas, abėcėlės pavyzdys, pangrama ir skaitmenys.

## Nuosavo šrifto įkėlimas

1. Spustelėkite **Add Font** dialogo apačioje (arba terminale įveskite [`FontAdd`](../font-add/), kad tiesiogiai atvertumėte failų pasirinkiklį).
2. Pasirinkite `.ttf` failą. Palaikomi tik TrueType šriftai — `.otf` ir `.woff`/`.woff2` nepalaikomi.
3. Failo pavadinimas (be plėtinio) tampa šrifto pavadinimu grupėje **User**. Pavyzdžiui, įkėlus `MyFont.ttf` pridedamas šriftas, vadinamas `MyFont`.

Įkelti šriftai išsaugomi naršyklėje visam laikui (IndexedDB) ir automatiškai įkeliami kitą kartą atvėrus KulmanLab CAD.

## Nuosavo šrifto pašalinimas

Užveskite žymeklį ant šrifto grupėje **User** ir spustelėkite šalia esantį mygtuką **×**. Įtaisytųjų šriftų (Default, Free, System) pašalinti negalima.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `↑` / `↓` | Perkelia pasirinkimą aukštyn ar žemyn šriftų sąraše |
| `Escape` | Uždaro Font Manager |

## DXF suderinamumas

Šrifto pavadinimas įterpiamas į eksportuotus **MTEXT** objektus kaip įterptas formatavimo kodas, todėl per KulmanLab CAD keliavęs DXF išlaiko šrifto priskyrimą. Nuosavų šriftų *failai* į DXF neįterpiami — tik šrifto *pavadinimas*. Jei iš naujo importuojate brėžinį, nurodantį nuosavą šriftą, kurio šiame įrenginyje neįkėlėte, tekstas atvaizduojamas numatytuoju šriftu, kol neįkelsite šrifto tuo pačiu pavadinimu.

## Susijusios komandos

- [Text](../text/) — deda teksto užrašus, kuriems taikomi šriftų pasirinkimai
- [Match Properties](../match-properties/) — kopijuoja teksto aukštį, bet ne šriftą, tarp objektų
