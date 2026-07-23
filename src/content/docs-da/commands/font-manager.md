---
title: Font Manager — Upload og Administrer Egne TTF-skrifttyper
description: Font Manager-kommandoen åbner en dialog til at gennemse, forhåndsvise og vælge skrifttyper, og til at uploade egne .ttf-filer. Uploadede skrifttyper gemmes i browseren og indlejres med navn i DXF-eksporter.
keywords: [font manager, brugerdefineret skrifttype CAD, upload ttf, brugerdefineret skrifttype CAD, google fonts CAD, tekstskrift CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Kommandoen `FontManager` åbner en dialog til at gennemse og vælge skrifttyper, og til at uploade dine egne `.ttf`-filer til brug i [Text](../text/)- og [Multileader](../leader/)-entiteter.

## Åbne Font Manager

- Skriv `FontManager` i terminalen, **eller**
- Klik på **Font Manager**-knappen i værktøjslinjen i [teksteditoren](../../interface/text-editor/).

## Skrifttypegrupper

| Gruppe | Indhold |
|-------|----------|
| **Default** | Den indbyggede grotesk-skrift — altid tilgængelig |
| **User** | Dine egne uploadede `.ttf`-skrifttyper (vises kun når du har tilføjet én) |
| **Free** | 15 medfølgende Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Almindelige OS-skrifttyper (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klik en hvilken som helst skrifttype i listen for at forhåndsvise den til højre — navn, alfabetprøve, et pangram og cifre.

## Uploade en brugerdefineret skrifttype

1. Klik **Add Font** i dialogens fodtekst (eller skriv `Font+` i terminalen for at åbne filvælgeren direkte).
2. Vælg en `.ttf`-fil. Kun TrueType-skrifttyper understøttes — `.otf` og `.woff`/`.woff2` understøttes ikke.
3. Filnavnet (uden filtypen) bliver skrifttypens navn i **User**-gruppen. For eksempel tilføjer upload af `MyFont.ttf` en skrifttype ved navn `MyFont`.

Uploadede skrifttyper gemmes permanent i browseren (IndexedDB) og indlæses automatisk igen næste gang du åbner KulmanLab CAD.

## Fjerne en brugerdefineret skrifttype

Hold markøren over en skrifttype i **User**-gruppen og klik på **×**-knappen ved siden af den. Indbyggede skrifttyper (Default, Free, System) kan ikke fjernes.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `↑` / `↓` | Flyt markeringen op eller ned i skrifttypelisten |
| `Escape` | Luk Font Manager |

## DXF-kompatibilitet

Skrifttypenavnet indlejres i eksporterede **MTEXT**-entiteter som en indbygget formateringskode, så en DXF, der rundtures gennem KulmanLab CAD, bevarer sin skrifttypetildeling. Brugerdefinerede skrifttype*filer* indlejres ikke i DXF'en — kun skrifttype*navnet* gør det. Hvis du genimporterer en tegning, der refererer til en brugerdefineret skrifttype, du ikke har uploadet på denne enhed, gengives teksten i standardskrifttypen, indtil du uploader en skrifttype med samme navn.

## Relaterede kommandoer

- [Text](../text/) — placerer tekstetiketterne som skrifttypevalgene gælder for
- [Match Properties](../match-properties/) — kopierer teksthøjde, men ikke skrifttype, mellem entiteter
