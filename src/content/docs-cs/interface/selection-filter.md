---
title: Selection Filter — zúžení vícenásobného výběru podle vlastnosti
description: Když je vybráno mnoho objektů, ikona filtru v záhlaví panelu vlastností otevře vyskakovací okno se živými seznamy pro Type, Layer, Color, Lineweight a Linetype, sestavenými z toho, co výběr skutečně obsahuje, takže lze velký smíšený výběr před hromadnou úpravou zúžit.
keywords: [filtr výběru, filtrování výběru CAD, fazetový filtr, zúžení výběru, hromadná úprava CAD, filtr v panelu vlastností, kulmanlab]
group: interface
order: 7
---

# Selection Filter

Výběr mnoha objektů najednou otevře panel vlastností v zobrazení vícenásobného výběru („Selection (N)"). **Ikona filtru** vedle zavíracího tlačítka umožňuje výběr před hromadnou úpravou zúžit podle vlastnosti.

## Otevření filtru

1. Vyberte několik objektů — tažením výběrového rámečku, Shift-kliknutím nebo Ctrl+A.
2. Klikněte na **ikonu filtru** (nálevka) v záhlaví panelu vlastností.
3. Pod tlačítkem se otevře vyskakovací okno se seznamem pro každou vlastnost, která se napříč výběrem skutečně liší.

## Fazety

Vyskakovací okno může zobrazit až pět fazet, každou sestavenou živě z aktuálního výběru:

| Fazeta | Zobrazené hodnoty |
|--------|-------------------|
| **Type** | Název typu objektu (Line, Circle, Hatch, …) |
| **Layer** | Název hladiny, s barevným vzorkem odpovídajícím dané hladině |
| **Color** | Index barvy ACI |
| **Lineweight** | Hodnota tloušťky čáry |
| **Linetype** | Název typu čáry |

Fazeta se objeví, jen pokud výběr skutečně obsahuje pro danou vlastnost více než jednu odlišnou hodnotu — výběr deseti úseček na téže hladině nezobrazí fazetu Layer, protože její zaškrtnutí by nemohlo nic zúžit. Objekty, které danou vlastnost vůbec nenesou (Hatch a Text například nemají tloušťku čáry ani typ čáry), se do této fazety prostě nepočítají — a nikdy nejsou jí ani vyloučeny.

## Zúžení výběru

Zaškrtněte jednu nebo více hodnot v libovolné fazetě a výběr se zúží na objekty odpovídající **všem** zaškrtnutým fazetám (objekt musí odpovídat alespoň jedné zaškrtnuté hodnotě v *každé* fazetě, které jste se dotkli, nejen v jedné). Zaškrtávací políčka a počty každé fazety odrážejí to, na co už zúžily *ostatní* zaškrtnuté fazety, takže fazeta nikdy neskrývá své vlastní již zaškrtnuté možnosti — standardní chování fazetového vyhledávání.

Počet výsledků se živě aktualizuje při zaškrtávání a odškrtávání a samotný výběr na plátně se zúží tak, aby odpovídal — nejde jen o zobrazovací filtr, objekty, které už neodpovídají, se skutečně odznačí, připravené k hromadné úpravě přesně té podmnožiny, na kterou jste filtrovali.

## Vymazání filtrů

Použijte ovládací prvek reset ve vyskakovacím okně, čímž vymažete všechna zaškrtnutí a vrátíte se k plnému původnímu výběru, nebo okno zavřete (při dalším kliknutí na ikonu filtru u nového výběru se otevře s novým výchozím stavem).

## Související

- [Match Properties](../../commands/match-properties/) — kopírování vlastností z jednoho objektu na jiné, jakmile jste zúžili, které to mají být
- [LayerIsolate](../../commands/layer-isolate/) — alternativa na úrovni hladin, když chcete izolovat pouze podle hladiny, nezávisle na aktuálním výběru
