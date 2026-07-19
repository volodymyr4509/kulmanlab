---
title: Font Manager-commando — Aangepaste TTF-lettertypen Uploaden
description: Het Font Manager-commando opent een dialoogvenster voor het bladeren, bekijken en selecteren van lettertypen, en voor het uploaden van eigen .ttf-bestanden. Geüploade lettertypen worden in de browser opgeslagen en op naam ingesloten in DXF-exports.
keywords: [font manager, aangepast lettertype CAD, ttf uploaden, aangepast font CAD, google fonts CAD, tekstlettertype CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Het `FontManager`-commando opent een dialoogvenster voor het bladeren en selecteren van lettertypen, en voor het uploaden van eigen `.ttf`-bestanden voor gebruik in [Text](../text/)- en [Multileader](../leader/)-entiteiten.

## Font Manager openen

- Typ `FontManager` in de terminal, **of**
- Klik op de knop **Font Manager** in de werkbalk van de [teksteditor](../../interface/text-editor/).

## Lettertypegroepen

| Groep | Inhoud |
|-------|----------|
| **Default** | Het ingebouwde schreefloze lettertype — altijd beschikbaar |
| **User** | Uw eigen geüploade `.ttf`-lettertypen (alleen zichtbaar zodra u er één heeft toegevoegd) |
| **Free** | 15 meegeleverde Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Veelgebruikte OS-lettertypen (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klik op een lettertype in de lijst om het rechts te bekijken — naam, alfabetvoorbeeld, een pangram en cijfers.

## Een aangepast lettertype uploaden

1. Klik op **Add Font** onderaan het dialoogvenster (of typ `Font+` in de terminal om de bestandskiezer direct te openen).
2. Kies een `.ttf`-bestand. Alleen TrueType-lettertypen worden ondersteund — `.otf` en `.woff`/`.woff2` niet.
3. De bestandsnaam (zonder extensie) wordt de naam van het lettertype in de groep **User**. Als u bijvoorbeeld `MyFont.ttf` uploadt, wordt een lettertype met de naam `MyFont` toegevoegd.

Geüploade lettertypen worden permanent in de browser opgeslagen (IndexedDB) en worden automatisch opnieuw geladen de volgende keer dat u KulmanLab CAD opent.

## Een aangepast lettertype verwijderen

Beweeg over een lettertype in de groep **User** en klik op de knop **×** ernaast. Ingebouwde lettertypen (Default, Free, System) kunnen niet worden verwijderd.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `↑` / `↓` | Verplaats de selectie omhoog of omlaag in de lettertypelijst |
| `Escape` | Sluit de Font Manager |

## DXF-compatibiliteit

De naam van het lettertype wordt ingesloten in geëxporteerde **MTEXT**-entiteiten als een inline opmaakcode, zodat een DXF die via KulmanLab CAD heen en weer gaat zijn lettertypetoewijzing behoudt. Aangepaste lettertype*bestanden* worden niet in de DXF ingesloten — alleen de lettertype*naam*. Als u een tekening opnieuw importeert die verwijst naar een aangepast lettertype dat u niet op dit apparaat heeft geüpload, wordt de tekst weergegeven in het standaardlettertype totdat u een lettertype met dezelfde naam uploadt.

## Gerelateerde commando's

- [Text](../text/) — plaatst de tekstlabels waarop lettertypekeuzes van toepassing zijn
- [Match Properties](../match-properties/) — kopieert tekstgrootte, maar niet het lettertype, tussen entiteiten
