---
title: Příkaz FontAdd — nahrání vlastního písma TTF z terminálu
description: Příkaz FontAdd otevře systémový dialog pro výběr souboru a nahraje písmo .ttf, aniž byste museli nejprve otevírat dialog Font Manager. Je to stejné nahrání, jaké spouští tlačítko Add Font ve Font Manageru, dostupné jako samostatný příkaz terminálu.
keywords: [CAD příkaz přidání písma, příkaz fontadd, nahrání ttf terminál, vlastní písmo CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Příkaz `FontAdd` otevře systémový dialog pro výběr souboru a nahraje vlastní písmo `.ttf`, aniž byste museli nejprve otevírat dialog [Font Manager](../font-manager/). Je to stejné nahrání, jaké spouští tlačítko **Add Font** ve Font Manageru — FontAdd je jen přímá cesta k němu z terminálu.

## Nahrání písma

1. Napište `FontAdd` do terminálu, nebo klikněte na **Add Font** v patičce dialogu [Font Manager](../font-manager/).
2. V systémovém dialogu vyberte soubor `.ttf`. Podporována jsou pouze písma TrueType — `.otf` a `.woff`/`.woff2` ne.

Příkaz skončí, jakmile se otevře dialog výběru souboru — žádná další výzva, kliknutí ani vstup v terminálu. Písmo se zaregistruje a objeví se ve skupině **User**, jakmile je soubor vybrán.

## Co se při nahrání stane

- Název souboru (bez přípony) se stane názvem písma. Nahráním `MyFont.ttf` se přidá písmo s názvem `MyFont`.
- Nahráním souboru, jehož název odpovídá existujícímu vlastnímu písmu, se toto písmo **nahradí**.
- Písmo se trvale uloží v prohlížeči (IndexedDB) a při dalším otevření KulmanLab CAD se automaticky načte — není vázáno na aktuální výkres.

## Přehled kláves

FontAdd nemá žádnou vlastní klávesovou interakci — celým příkazem je nativní dialog pro výběr souboru v prohlížeči. Zrušení tohoto dialogu (nebo nevybrání žádného souboru) ponechá seznam písem beze změny.

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [Font Manager](../font-manager/) | Procházení, náhled, výběr a odstraňování písem, včetně vlastních nahraných |
| [Text](../text/) | Umísťuje textové popisky, na které se volba písma vztahuje |
