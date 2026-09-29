---
title: Match Properties — kopírování vlastností objektů v KulmanLab CAD
description: Příkaz MatchProperties zkopíruje barvu, hladinu a další sdílené vlastnosti ze zdrojového objektu na jeden nebo více cílových objektů. Přenáší vlastnosti stejným způsobem jako desktopové CAD nástroje.
keywords: [shoda vlastností CAD, kopírování vlastností objektu, MATCHPROP, shoda hladiny a barvy, přenos vlastností, kulmanlab match properties, přenesení vlastností, kopírování hladiny CAD]
group: style
order: 1
---

# Match Properties

Příkaz `MatchProperties` zkopíruje **vizuální vlastnosti a vlastnosti hladiny** ze zdrojového objektu na jeden nebo více cílových objektů. Přenášejí se pouze vlastnosti sdílené mezi typem zdrojového a cílového objektu — geometrie se nikdy nemění.

## Jak aktivovat

Klikněte na tlačítko **Match Properties** (ikona malířského válečku) v panelu Stroke, nebo napište `MatchProperties` do terminálu.

## Postup

**Nejdřív aktivovat, pak vybrat zdroj:**

1. Napište `MatchProperties` nebo klikněte na tlačítko v panelu nástrojů, když není nic předem vybráno.
2. **Klikněte na zdrojový objekt** — ten, jehož vlastnosti chcete zkopírovat.
3. **Klikněte na každý cílový objekt**, na který se mají zdrojové vlastnosti použít. Můžete klikat na více objektů postupně.
4. Chcete-li vlastnosti použít na skupinu najednou, **tažením výběrového rámečku** označte cíle.
5. Dokončíte stisknutím **Enter** nebo **Escape**.

**Nejdřív vybrat zdroj, pak aktivovat:**

1. Kliknutím vyberte jediný objekt.
2. Aktivujte `MatchProperties`. Vybraný objekt se automaticky použije jako zdroj.
3. Klikejte na cílové objekty nebo je vyberte tažením, poté dokončete stisknutím **Enter** nebo **Escape**.

## Jaké vlastnosti se kopírují

MatchProperties kopíruje vlastnosti, které patří do společné základní třídy zdroje a cíle. **Všechny typy objektů** minimálně sdílejí tyto vlastnosti:

| Vlastnost | Popis |
|-----------|-------|
| **Color** | Index barvy objektu (včetně „By Layer" / „By Block") |
| **Layer** | Hladina, do které objekt patří |

Když jsou zdroj a cíl stejného typu (např. oba jsou kóty), zkopírují se i další vlastnosti specifické pro daný typ — například výška textu, velikost šipky, nastavení přesahových čar.

Geometrie (souřadnice, poloměr, délka atd.) se nikdy neovlivňuje.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr oblastí nebo dokončí příkaz |
| `Escape` | Dokončí použití (pokud je zdroj nastaven), nebo zruší |

## Podrobnosti chování

- Samotný zdrojový objekt se nikdy neupravuje.
- Každé kliknutí nebo výběr tažením použije zdrojové vlastnosti okamžitě — potvrzovací krok neexistuje.
- Výběr oblastí se řídí standardními pravidly: tažení **doprava** pro přísný výběr (zcela obsažené), tažení **doleva** pro protínající výběr (jakýkoli průsečík).
- Kliknutí na zdrojový objekt jako na cíl se ignoruje.
- U objektů s textem (**Text**, **Dimensions**, **Multileaders**) se kopíruje pouze výška textu — písmo, tučné, kurzíva a další nastavení stylu textu se nepřenášejí.

## Související příkazy

- [LayerMatch](../layer-match/) — přesune vybrané objekty na stejnou hladinu jako zdroj (pouze vlastnost hladiny)
- [LayerMakeCurrent](../layer-make-current/) — nastaví aktuální kreslicí hladinu podle objektu, na který kliknete
