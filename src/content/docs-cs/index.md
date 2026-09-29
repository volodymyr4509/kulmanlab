---
title: KulmanLab CAD — přehled příkazů
description: Přehled příkazů KulmanLab CAD — kompletní průvodce každým příkazem pro kreslení, úpravy, anotace, hladiny, měření a práci se soubory v KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, příkazy CAD, bezplatné CAD v prohlížeči, online editor DXF, příkazy pro kreslení, příkazy kulmanlab]
group: overview
order: 1
---

# KulmanLab CAD — přehled příkazů

Vítejte v přehledu příkazů **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) je bezplatný CAD nástroj v prohlížeči pro kreslení, úpravy a export souborů DXF — bez nutnosti instalace. Pomocí postranního panelu procházejte všechny dostupné příkazy seskupené podle panelů.

## Shapes

| Příkaz | Co dělá |
|--------|---------|
| [Line](./commands/line/) | Nakreslí přímou úsečku mezi dvěma body |
| [Polyline](./commands/polyline/) | Nakreslí vícesegmentovou otevřenou cestu |
| [Rectangle](./commands/rectangle/) | Nakreslí obdélník zarovnaný s osami |
| [Circle](./commands/circle/) | Nakreslí kružnici podle středu a poloměru |
| [Arc](./commands/arc/) | Nakreslí oblouk přes tři body |
| [Ellipse](./commands/ellipse/) | Nakreslí elipsu podle středu a dvou os |
| [Hatch](./commands/hatch/) | Vyplní oblast obklopující vybraný bod vzorem |
| [Text](./commands/text/) | Umístí na plátno textový popisek |
| [Spline CV](./commands/spline-cv/) | Nakreslí spline umístěním řídicích vrcholů |
| [Spline Fit](./commands/spline-fit/) | Nakreslí spline procházející kliknutými body |

## Edit

| Příkaz | Co dělá |
|--------|---------|
| [Move](./commands/move/) | Přesune vybrané objekty na novou pozici |
| [Copy](./commands/copy/) | Zkopíruje vybrané objekty na novou pozici |
| [Rotate](./commands/rotate/) | Otočí vybrané objekty kolem základního bodu |
| [Mirror](./commands/mirror/) | Zrcadlí vybrané objekty podle přímky |
| [Scale](./commands/scale/) | Změní měřítko vybraných objektů kolem základního bodu |
| [Align](./commands/align/) | Posune, otočí a volitelně změní měřítko objektů pomocí dvojic bodů |
| [Delete](./commands/delete/) | Odstraní vybrané objekty z výkresu |
| [Trim](./commands/trim/) | Ořízne segment úsečky v jejích průsečících |
| [Extend](./commands/extend/) | Prodlouží úsečku k nejbližšímu průsečíku s hranicí |
| [Offset](./commands/offset/) | Vytvoří rovnoběžnou kopii objektu v zadané vzdálenosti |
| [Fillet](./commands/fillet/) | Zaoblí roh mezi dvěma úsečkami, oblouky nebo segmenty polyline tečným obloukem |
| [Chamfer](./commands/chamfer/) | Seřízne přímý úhlopříčný roh mezi dvěma úsečkami nebo polyline |
| [Explode](./commands/explode/) | Rozloží polyline na jednotlivé objekty Line a Arc |
| [Undo](./commands/undo/) | Vrátí poslední akci |
| [Redo](./commands/redo/) | Znovu provede poslední vrácenou akci |
| [Array Grid](./commands/array-grid/) | Zopakuje objekty v pravoúhlé mřížce řádků a sloupců |

## Annotate

| Příkaz | Co dělá |
|--------|---------|
| [Leader](./commands/leader/) | Nakreslí anotaci multileader se šipkou a textem |
| [LeaderAdd](./commands/leader-add/) | Přidá další rameno k existujícímu multileaderu |
| [LeaderRemove](./commands/leader-remove/) | Odebere rameno z existujícího multileaderu |
| [Dimension Linear](./commands/dim-linear/) | Přidá vodorovnou nebo svislou kótu |
| [Dimension Aligned](./commands/dim-aligned/) | Přidá kótu zarovnanou podle dvou bodů |
| [Dimension Continue](./commands/dim-continue/) | Naváže novou kótu z poslední |
| [Dimension Radius](./commands/dim-radius/) | Přidá kótu poloměru ke kružnici nebo oblouku |
| [Dimension Diameter](./commands/dim-diameter/) | Přidá kótu průměru ke kružnici |
| [Dimension Angular](./commands/dim-angular/) | Přidá úhlovou kótu ke dvěma úsečkám, oblouku nebo kružnici |

## Layer

| Příkaz | Co dělá |
|--------|---------|
| [LayerManager](./commands/layer-manager/) | Přidává hladiny a upravuje u každé zmrazení, zámek, tisk, barvu, tloušťku čáry a typ čáry |
| [LayerMakeCurrent](./commands/layer-make-current/) | Nastaví aktuální hladinu podle hladiny objektu, na který kliknete |
| [LayerMatch](./commands/layer-match/) | Přiřadí vybrané objekty ke hladině zdrojového objektu |
| [LayerIsolate](./commands/layer-isolate/) | Zmrazí všechny hladiny kromě hladin vybraných objektů |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Rozmrazí všechny hladiny jedním krokem |

## Layouts

| Příkaz | Co dělá |
|--------|---------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Vytvoří výřez v papírovém rozvržení výběrem dvou rohů |
| [ViewportCopy](./commands/viewport-copy/) | Zduplikuje výřez na novou pozici |
| [PageManager](./commands/page-manager/) | Upraví velikost papíru a měřítko aktivního rozvržení |

## Navigate

| Příkaz | Co dělá |
|--------|---------|
| [Pan](./commands/pan/) | Kliknutím a tažením posune okno |
| [Zoom In](./commands/zoom-in/) | Přiblíží okno |
| [Zoom Out](./commands/zoom-out/) | Oddálí okno |
| [Fit](./commands/fit/) | Přizpůsobí okno všem objektům |

## Measure

| Příkaz | Co dělá |
|--------|---------|
| [Distance](./commands/distance/) | Změří vzdálenost mezi dvěma body |
| [Angle](./commands/angle/) | Změří úhel mezi třemi body |
| [Area](./commands/area/) | Změří plochu a obvod mnohoúhelníku |

## Styles

| Příkaz | Co dělá |
|--------|---------|
| [Match Properties](./commands/match-properties/) | Zkopíruje barvu, hladinu a další vlastnosti z jednoho objektu na jiné |
| [Font Manager](./commands/font-manager/) | Prochází, vybírá a nahrává vlastní písma TTF |
| [FontAdd](./commands/font-add/) | Nahraje vlastní písmo TTF přímo z terminálu |
| [Hatch Manager](./commands/hatch-manager/) | Prochází knihovnu vzorů šraf a nahrává soubory .pat |
| [TextStyle](./commands/text-style/) | Vytváří a spravuje pojmenované styly textu pro nový Text |
| [LeaderStyle](./commands/leader-style/) | Vytváří a spravuje pojmenované styly multileaderů |

## File

| Příkaz | Co dělá |
|--------|---------|
| [Import](./commands/import/) | Otevře soubor výkresu DXF nebo JSON |
| [New File](./commands/new-file/) | Zahájí nový prázdný výkres |
| [File Manager](./commands/file-manager/) | Prochází, přejmenovává nebo maže výkresy uložené v prohlížeči |
| [Print Manager](./commands/print-manager/) | Exportuje oblast výkresu jako obrázek nebo PDF |
| [Export Manager](./commands/export-manager/) | Stáhne výkres jako DXF nebo JSON |
| [WipeStorage](./commands/wipestorage/) | Vymaže všechny výkresy z úložiště prohlížeče |

## Obnovení

Pokud aplikace při každém spuštění havaruje (například po práci s extrémně velkými souřadnicemi), můžete vymazat všechna lokálně uložená data přidáním `?reset` k adrese URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Tím se smaže vše z lokální databáze prohlížeče a zahájí se nový prázdný výkres. Parametr `?reset` se z adresy URL sám automaticky odstraní. Použijte to jako poslední možnost, když je [WipeStorage](./commands/wipestorage/) nedostupný, protože se aplikace vůbec nenačte.

## Jak příkazy fungují

Každý příkaz se řídí stejným vzorem:

1. **Aktivace** — klikněte na tlačítko v panelu nástrojů nebo napište název příkazu do terminálu ve spodní části obrazovky.
2. **Sledujte výzvu** — terminál ukazuje, jaký vstup se očekává dále.
3. **Dokončení nebo zrušení** — většina příkazů se po posledním vstupu dokončí automaticky. Kdykoli stiskněte **Escape** pro zrušení.

## Výběr objektů

Několik editačních příkazů (Move, Copy, Rotate, Mirror, Scale, Delete) sdílí stejné chování výběru:

- **Kliknutím** na objekt jej vyberete nebo zrušíte výběr.
- **Tažení doprava** (zleva doprava) pro přísný výběr — vyberou se pouze objekty zcela uvnitř rámečku.
- **Tažení doleva** (zprava doleva) pro protínající výběr — vybere se každý objekt, který rámeček protíná.
- Stisknutím **Enter** nebo **Space** potvrdíte výběr a přejdete k dalšímu kroku.
