---
title: Příkaz HatchAdd — nahrání souboru vzorů šraf .pat z terminálu
description: Příkaz HatchAdd otevře dialog pro výběr souboru a nahraje soubor vzorů .pat, aniž byste museli nejprve otevírat Hatch Manager. Přidají se najednou všechny vzory, které soubor definuje.
keywords: [příkaz hatch add, příkaz hatchadd, nahrání pat souboru terminál, vlastní vzor šrafy CAD, acad.pat, knihovna vzorů šraf, kulmanlab]
group: style
order: 5
---

# HatchAdd

Příkaz `HatchAdd` otevře systémový dialog pro výběr souboru a nahraje soubor vzorů šraf `.pat`, aniž byste museli nejprve otevírat dialog [Hatch Manager](../hatch-manager/). Je to stejné nahrání, jaké spouští tlačítko **Add .pat File** v Hatch Manageru — HatchAdd je jen přímá cesta k němu z terminálu.

## Nahrání souboru vzorů

1. Napište `HatchAdd` do terminálu, nebo klikněte na **Add .pat File** v patičce dialogu [Hatch Manager](../hatch-manager/).
2. V systémovém dialogu vyberte soubor `.pat`. Přijímá se pouze standardní formát vzorů šraf.

Příkaz skončí, jakmile se otevře dialog výběru souboru — žádná další výzva, kliknutí ani vstup v terminálu. Vzory se zaregistrují a objeví se ve skupině **User**, jakmile je soubor vybrán.

## Co se při nahrání stane

- **Soubor `.pat` je kontejner, nikoli jediný vzor.** Jeden soubor běžně definuje mnoho pojmenovaných vzorů a všechny se přidají společně. V tom se HatchAdd hlavně liší od [FontAdd](../font-add/), kde jeden `.ttf` je jedno písmo.
- **Samotný soubor se neuchovává.** Přečte se jednou, rozdělí na své vzory a každý vzor se uloží zvlášť pod svým názvem. Proto můžete později odstranit jeden vzor, aniž by to narušilo ostatní, které dorazily spolu s ním — a proto skupina **User** řadí vzory abecedně podle názvu, nikoli podle souboru, z něhož pocházejí.
- **Vzor, jehož název odpovídá existujícímu, jej nahradí.** Je to podporovaný způsob, jak nainstalovat autoritativní definice místo vlastních aproximací KulmanLab: nahrajte skutečný `acad.pat` a jeho verze `ANSI31` a dalších standardních názvů převezmou vládu.
- **Vzory se ukládají pro uživatele, ne pro výkres.** Žijí v prohlížeči (IndexedDB), při dalším otevření KulmanLab CAD se automaticky načtou a jsou dostupné pro každý výkres.
- **Soubor bez platných definic vzorů nepřidá nic.** Knihovna zůstane přesně tak, jak byla.

## Přehled kláves

HatchAdd nemá žádnou vlastní klávesovou interakci — celým příkazem je nativní dialog pro výběr souboru v prohlížeči. Zrušení tohoto dialogu (nebo nevybrání žádného souboru) ponechá knihovnu vzorů beze změny.

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [Hatch Manager](../hatch-manager/) | Procházení knihovny vzorů se živým náhledem vzorku a odstraňování nahraných vzorů |
| [Hatch](../hatch/) | Vyplní uzavřenou oblast vzorem z knihovny |
| [FontAdd](../font-add/) | Stejná zkratka přímého nahrání pro písma `.ttf` |
