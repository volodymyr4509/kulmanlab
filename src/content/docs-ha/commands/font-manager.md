---
title: Font Manager — Loda da Sarrafa Fonts na TTF na Musamman
description: Umarnin Font Manager yana buɗe akwatin tattaunawa don bincika, dubawa, da zaɓen fonts, da kuma loda fayilolin .ttf naka. Ana ajiye fonts da aka loda a burauza kuma an haɗa su da suna a fitarwar DXF.
keywords: [font manager, font na musamman CAD, loda ttf, font na musamman CAD, google fonts CAD, font na rubutu CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Umarnin `FontManager` yana buɗe akwatin tattaunawa don bincikawa da zaɓen fonts, da kuma loda fayilolin `.ttf` naka don amfani a abubuwan [Text](../text/) da [Multileader](../leader/).

## Buɗe Font Manager

- Rubuta `FontManager` a tashar umarni, **ko**
- Danna maɓallin **Font Manager** a kayan aiki na [naʼurar gyaran rubutu](../../interface/text-editor/).

## Ƙungiyoyin font

| Ƙungiya | Abin ciki |
|-------|----------|
| **Default** | Font ɗin sans-serif da aka gina — koyaushe akwai |
| **User** | Fonts ɗin `.ttf` da ka loda da kanka (ana nuna su ne kawai bayan ka ƙara ɗaya) |
| **Free** | Google Fonts guda 15 da aka haɗa (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Fonts na OS na yau da kullum (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Danna kowane font a jerin don dubawarsa a dama — suna, misalin haruffa, pangram, da lambobi.

## Loda font na musamman

1. Danna **Add Font** a ƙasan akwatin tattaunawa (ko rubuta `Font+` a tashar umarni don buɗe mai zaɓen fayil kai tsaye).
2. Zaɓi fayil na `.ttf`. Fonts na TrueType kaɗai ake goyon baya — `.otf` da `.woff`/`.woff2` ba a goyon baya.
3. Sunan fayil (ba tare da ƙari ba) ya zama sunan font a ƙungiyar **User**. Misali, loda `MyFont.ttf` yana ƙara font mai suna `MyFont`.

Ana ajiye fonts da aka loda na dindindin a burauza (IndexedDB) kuma suna sake loda kai tsaye a lokacin gaba da ka buɗe KulmanLab CAD.

## Cire font na musamman

Riƙe mai nuni a kan font a ƙungiyar **User** ka danna maɓallin **×** kusa da shi. Ba za a iya cire fonts da aka gina (Default, Free, System) ba.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `↑` / `↓` | Motsa zaɓi sama ko ƙasa a jerin fonts |
| `Escape` | Rufe Font Manager |

## Dacewa da DXF

Ana haɗa sunan font a cikin abubuwan **MTEXT** da aka fitar a matsayin lambar tsari a ciki, don haka DXF wanda ya juya ta KulmanLab CAD yana kiyaye sanya font ɗinsa. *Fayilolin* font na musamman ba a haɗa su a DXF ba — sunan font kaɗai ake haɗawa. Idan ka sake shigo da zane wanda ke nuni zuwa font na musamman da ba ka loda a wannan na'urar ba, rubutu yana bayyana a font na tsoho har sai ka loda font da suna iri ɗaya.

## Umarni masu alaƙa

- [Text](../text/) — yana sanya alamun rubutu waɗanda zaɓen font ke shafarsu
- [Match Properties](../match-properties/) — yana kwafin tsayin rubutu, amma ba font ba, tsakanin abubuwa
