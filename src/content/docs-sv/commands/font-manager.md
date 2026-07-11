---
title: Font Manager-kommandot — Ladda upp och hantera anpassade TTF-typsnitt i KulmanLab CAD
description: Font Manager-kommandot öppnar en dialogruta för att bläddra bland, förhandsgranska och välja typsnitt, samt för att ladda upp dina egna .ttf-filer. Uppladdade typsnitt sparas i webbläsaren och bäddas in med namn i DXF-exporter.
keywords: [font manager, anpassat typsnitt CAD, ladda upp ttf, anpassad fontfamilj CAD, google fonts CAD, typsnitt för text CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

`FontManager`-kommandot öppnar en dialogruta för att bläddra bland och välja typsnitt, samt för att ladda upp dina egna `.ttf`-filer för användning i [Text](../text/)- och [Multileader](../leader/)-entiteter.

## Öppna Font Manager

- Skriv `FontManager` i terminalen, **eller**
- Klicka på knappen **Font Manager** i verktygsfältet för [texteditorn](../../interface/text-editor/).

## Typsnittsgrupper

| Grupp | Innehåll |
|-------|----------|
| **Default** | Det inbyggda sans-serif-typsnittet — alltid tillgängligt |
| **User** | Dina egna uppladdade `.ttf`-typsnitt (visas endast när du har lagt till ett) |
| **Free** | 15 medföljande Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Vanliga OS-typsnitt (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klicka på valfritt typsnitt i listan för att förhandsgranska det till höger — namn, alfabetprov, ett pangram och siffror.

## Ladda upp ett anpassat typsnitt

1. Klicka på **Add Font** i dialogrutans sidfot (eller skriv `Font+` i terminalen för att öppna filväljaren direkt).
2. Välj en `.ttf`-fil. Endast TrueType-typsnitt stöds — `.otf` och `.woff`/`.woff2` stöds inte.
3. Filnamnet (utan filändelsen) blir typsnittets namn i gruppen **User**. Att till exempel ladda upp `MyFont.ttf` lägger till ett typsnitt med namnet `MyFont`.

Uppladdade typsnitt sparas permanent i webbläsaren (IndexedDB) och laddas automatiskt nästa gång du öppnar KulmanLab CAD.

## Ta bort ett anpassat typsnitt

Håll muspekaren över ett typsnitt i gruppen **User** och klicka på knappen **×** bredvid det. Inbyggda typsnitt (Default, Free, System) kan inte tas bort.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `↑` / `↓` | Flyttar markeringen upp eller ner i typsnittslistan |
| `Escape` | Stänger Font Manager |

## DXF-kompatibilitet

Typsnittsnamnet bäddas in i exporterade **MTEXT**-entiteter som en infogad formateringskod, så en DXF som rundturas genom KulmanLab CAD behåller sin typsnittstilldelning. Anpassade typsnitts*filer* bäddas inte in i DXF:en — endast typsnittets *namn* gör det. Om du importerar om en ritning som refererar till ett anpassat typsnitt som du inte har laddat upp på den här enheten, renderas texten med standardtypsnittet tills du laddar upp ett typsnitt med samma namn.

## Relaterade kommandon

- [Text](../text/) — placerar de textetiketter som typsnittsvalen tillämpas på
- [Match Properties](../match-properties/) — kopierar texthöjd, men inte typsnitt, mellan entiteter
