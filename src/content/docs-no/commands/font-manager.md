---
title: Font Manager — Last Opp og Administrer Egne TTF-skrifttyper
description: Font Manager-kommandoen åpner en dialog for å bla gjennom, forhåndsvise og velge skrifttyper, og for å laste opp egne .ttf-filer. Opplastede skrifttyper lagres i nettleseren og bygges inn med navn i DXF-eksporter.
keywords: [font manager, egendefinert skrift CAD, last opp ttf, egendefinert skrifttype CAD, google fonts CAD, tekstskrift CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Kommandoen `FontManager` åpner en dialog for å bla gjennom og velge skrifttyper, og for å laste opp dine egne `.ttf`-filer til bruk i [Text](../text/)- og [Multileader](../leader/)-entiteter.

## Åpne Font Manager

- Skriv `FontManager` i terminalen, **eller**
- Klikk på **Font Manager**-knappen i verktøylinjen til [teksteditoren](../../interface/text-editor/).

## Skriftgrupper

| Gruppe | Innhold |
|-------|----------|
| **Default** | Den innebygde grotesk-skriften — alltid tilgjengelig |
| **User** | Dine egne opplastede `.ttf`-skrifter (vises kun når du har lagt til én) |
| **Free** | 15 medfølgende Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Vanlige OS-skrifter (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klikk en hvilken som helst skrift i listen for å forhåndsvise den til høyre — navn, alfabetprøve, et pangram og siffer.

## Laste opp en egendefinert skrift

1. Klikk **Add Font** i dialogens bunntekst (eller skriv `Font+` i terminalen for å åpne filvelgeren direkte).
2. Velg en `.ttf`-fil. Kun TrueType-skrifter støttes — `.otf` og `.woff`/`.woff2` støttes ikke.
3. Filnavnet (uten filtypen) blir skriftens navn i **User**-gruppen. For eksempel legger opplasting av `MyFont.ttf` til en skrift kalt `MyFont`.

Opplastede skrifter lagres permanent i nettleseren (IndexedDB) og lastes automatisk inn på nytt neste gang du åpner KulmanLab CAD.

## Fjerne en egendefinert skrift

Hold markøren over en skrift i **User**-gruppen og klikk på **×**-knappen ved siden av den. Innebygde skrifter (Default, Free, System) kan ikke fjernes.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `↑` / `↓` | Flytt markeringen opp eller ned i skriftlisten |
| `Escape` | Lukk Font Manager |

## DXF-kompatibilitet

Skriftnavnet bygges inn i eksporterte **MTEXT**-entiteter som en innebygd formateringskode, slik at en DXF som rundturer gjennom KulmanLab CAD beholder skrifttildelingen sin. Egendefinerte skrift*filer* bygges ikke inn i DXF-en — kun skrift*navnet* gjør det. Hvis du importerer på nytt en tegning som refererer til en egendefinert skrift du ikke har lastet opp på denne enheten, gjengis teksten i standardskriften inntil du laster opp en skrift med samme navn.

## Relaterte kommandoer

- [Text](../text/) — plasserer tekstetikettene som skriftvalgene gjelder for
- [Match Properties](../match-properties/) — kopierer teksthøyde, men ikke skrift, mellom entiteter
