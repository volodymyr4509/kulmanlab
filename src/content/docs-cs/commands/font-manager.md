---
title: Příkaz Font Manager — nahrávání a správa vlastních písem TTF
description: Příkaz Font Manager otevře dialog pro procházení, náhled a výběr písem a pro nahrávání vlastních souborů .ttf. Nahraná písma se ukládají v prohlížeči a při exportu do DXF se vkládají podle názvu.
keywords: [správce písem, vlastní písmo CAD, nahrání ttf, vlastní typ písma CAD, google fonts CAD, písmo textu CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Příkaz `FontManager` otevře dialog pro procházení a výběr písem a pro nahrávání vlastních souborů `.ttf` k použití v objektech [Text](../text/) a [Multileader](../leader/).

## Otevření Font Manageru

- Napište `FontManager` do terminálu, **nebo**
- klikněte na tlačítko **Font Manager** v panelu nástrojů [textového editoru](../../interface/text-editor/).

## Skupiny písem

| Skupina | Obsah |
|---------|-------|
| **Default** | Vestavěné bezpatkové písmo — vždy dostupné |
| **User** | Vaše vlastní nahraná písma `.ttf` (zobrazí se, až nějaké přidáte) |
| **Free** | 15 přibalených písem Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Běžná systémová písma (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Kliknutím na libovolné písmo v seznamu si jej zobrazíte v náhledu vpravo — název, ukázku abecedy, pangram a číslice.

## Nahrání vlastního písma

1. Klikněte na **Add Font** v patičce dialogu (nebo napište [`FontAdd`](../font-add/) do terminálu pro přímé otevření dialogu výběru souboru).
2. Vyberte soubor `.ttf`. Podporována jsou pouze písma TrueType — `.otf` a `.woff`/`.woff2` ne.
3. Název souboru (bez přípony) se stane názvem písma ve skupině **User**. Například nahráním `MyFont.ttf` se přidá písmo s názvem `MyFont`.

Nahraná písma se trvale ukládají v prohlížeči (IndexedDB) a při dalším otevření KulmanLab CAD se automaticky načtou.

## Odstranění vlastního písma

Najeďte kurzorem na písmo ve skupině **User** a klikněte na tlačítko **×** vedle něj. Vestavěná písma (Default, Free, System) odstranit nelze.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `↑` / `↓` | Posune výběr nahoru nebo dolů v seznamu písem |
| `Escape` | Zavře Font Manager |

## Kompatibilita s DXF

Název písma se do exportovaných objektů **MTEXT** vkládá jako vložený formátovací kód, takže DXF, který projde přes KulmanLab CAD tam a zpět, si zachová přiřazení písma. *Soubory* vlastních písem se do DXF nevkládají — pouze *název* písma. Pokud znovu importujete výkres odkazující na vlastní písmo, které jste na tomto zařízení nenahráli, text se vykreslí výchozím písmem, dokud nenahrajete písmo se stejným názvem.

## Související příkazy

- [Text](../text/) — umísťuje textové popisky, na které se volba písma vztahuje
- [Match Properties](../match-properties/) — kopíruje mezi objekty výšku textu, ale ne písmo
