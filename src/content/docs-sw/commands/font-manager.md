---
title: Font Manager Command — Upload and Manage Custom TTF Fonts in KulmanLab CAD
description: "Amri ya Font Manager hufungua mazungumzo ya kuvinjari, kuhakiki mapema, na kuchagua fonti, na kwa kupakia faili zako mwenyewe za .ttf. Fonti zilizopakiwa huhifadhiwa kwenye kivinjari na kuwekwa ndani kwa jina katika usafirishaji wa DXF."
keywords: [font manager, fonti maalum CAD, pakia ttf, aina ya herufi maalum CAD, google fonts CAD, fonti ya maandishi CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Amri ya `FontManager` hufungua mazungumzo ya kuvinjari na kuchagua fonti, na kwa kupakia faili zako mwenyewe za `.ttf` kwa matumizi katika vipengele vya [Text](../text/) na [Multileader](../leader/).

## Kufungua Font Manager

- Andika `FontManager` kwenye terminal, **au**
- Bonyeza kitufe cha **Font Manager** kwenye upau wa zana wa [text editor](../../interface/text-editor/).

## Vikundi vya fonti

| Kikundi | Yaliyomo |
|---------|----------|
| **Default** | Fonti ya sans-serif iliyojengwa ndani — inapatikana kila wakati |
| **User** | Fonti zako mwenyewe za `.ttf` ulizopakia (huonyeshwa tu baada ya kuongeza moja) |
| **Free** | Google Fonts 15 zilizojumuishwa (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Fonti za kawaida za OS (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Bonyeza fonti yoyote kwenye orodha ili kuiona kwa hakiki upande wa kulia — jina, sampuli ya alfabeti, pangramu, na tarakimu.

## Kupakia fonti maalum

1. Bonyeza **Add Font** chini ya mazungumzo (au andika `Font+` kwenye terminal ili kufungua kichagua faili moja kwa moja).
2. Chagua faili ya `.ttf`. Fonti za TrueType pekee ndizo zinazotumika — `.otf` na `.woff`/`.woff2` hazitumiki.
3. Jina la faili (bila kiambishi) linakuwa jina la fonti kwenye kikundi cha **User**. Kwa mfano, kupakia `MyFont.ttf` huongeza fonti iitwayo `MyFont`.

Fonti zilizopakiwa huhifadhiwa kabisa kwenye kivinjari (IndexedDB) na hupakiwa upya kiotomatiki wakati ujao unapofungua KulmanLab CAD.

## Kuondoa fonti maalum

Weka kishale juu ya fonti kwenye kikundi cha **User** kisha bonyeza kitufe cha **×** kilicho karibu nayo. Fonti zilizojengwa ndani (Default, Free, System) haziwezi kuondolewa.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `↑` / `↓` | Sogeza uteuzi juu au chini kwenye orodha ya fonti |
| `Escape` | Funga Font Manager |

## Ulinganifu wa DXF

Jina la fonti limewekwa ndani ya vipengele vya **MTEXT** vilivyosafirishwa kama msimbo wa uumbizaji wa ndani ya mstari, hivyo DXF iliyopitia mzunguko kamili kupitia KulmanLab CAD inaendelea kuwa na mgawo wake wa fonti. *Faili* za fonti maalum hazijawekwa ndani ya DXF — ni *jina* la fonti pekee. Ukileta tena mchoro unaorejelea fonti maalum ambayo hujaipakia kwenye kifaa hiki, maandishi yataonyeshwa kwa fonti chaguo-msingi mpaka upakie fonti yenye jina hilo hilo.

## Amri zinazohusiana

- [Text](../text/) — huweka lebo za maandishi ambazo uchaguzi wa fonti unahusika nazo
- [Match Properties](../match-properties/) — hunakili urefu wa maandishi, lakini si fonti, kati ya vipengele
