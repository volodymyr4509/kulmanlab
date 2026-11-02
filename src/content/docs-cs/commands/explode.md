---
title: "Příkaz Explode — rozložení polylinie nebo bloku na části"
description: "Příkaz Explode rozloží polylinii na entity Line a Arc, nebo referenci bloku na entity, které kreslí její blok, na místě. Části vypadají přesně jako originál."
keywords: [CAD příkaz explode, rozložení polyline CAD, rozdělení polyline na úsečky, převod polyline na line a arc, kulmanlab]
group: edit
order: 19
---

# Explode

Příkaz `explode` rozloží [Polyline](../polyline/) na jednotlivé objekty [Line](../line/) a [Arc](../arc/) — jeden na segment, přesně tam, kde byly vrcholy polyline. Díly nahradí polyline na místě a zachovají její tloušťku čáry, barvu, hladinu a typ čáry.

Explode funguje na entitách **Polyline** a na **referencích bloků**.

## Použití příkazu explode

Dva způsoby spuštění, stejný princip jako u [Delete](../delete/):

**Nejdřív vybrat, pak explode** — nejrychlejší cesta:

1. Vyberte na plátně jednu nebo více polyline.
2. Napište `explode` do terminálu, nebo zvolte **Explode** v rozbalovací nabídce panelu Edit.

Vybrané polyline se rozloží okamžitě — bez samostatného potvrzení, protože už je něco vybráno.

**Nejdřív aktivovat, pak vybrat**:

1. Napište `explode` nebo zvolte **Explode** v rozbalovací nabídce, když není nic vybráno.
2. **Vyberte polylinie nebo reference bloků** — kliknutím přepínáte, tažením vyberete oblast.
3. Stiskněte **Enter** nebo **Space** pro potvrzení a rozložení vybraných polyline.

Při výběru se berou jen polylinie a reference bloků — kliknutí na Line, Circle nebo jinou entitu nic neudělá a tažení oblasti ignoruje vše ostatní uvnitř nebo napříč.

## Co z toho vznikne

Každý segment polyline se stane samostatným objektem:

- **Přímý segment** se stane objektem **Line**.
- **Obloukový segment** (z [volby Arc](../polyline/) příkazu Polyline) se stane objektem **Arc**, který přesně odpovídá středu, poloměru a rozsahu původního oblouku.

Každá výsledná Line a Arc zdědí od zdrojové polyline **tloušťku čáry, barvu, hladinu, typ čáry a měřítko typu čáry** — na vzhledu geometrie se nic nemění, jen z jednoho souvislého objektu Polyline je teď několik nezávislých objektů.

Z **reference bloku** se stanou entity, které kreslí její blok, umístěné tam, kde je reference ukazovala. Entity, které blok drží skryté — ostatní stavy dynamického bloku — se vynechají; každý atribut se stane obyčejným Text se svou hodnotou; části kreslené ByBlock převezmou barvu reference a části v hladině 0 její hladinu. Vnořený blok vyjde jako vlastní reference bloku, kterou můžete rozložit dál. Reference s rozdílným měřítkem v X a Y se nebere, protože její kružnice by se musely stát elipsami.

Rozložení lze vrátit jedním krokem pomocí [Undo](../undo/), jako každou jinou úpravu.

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Kliknutí** | Přidá do výběru nebo z něj odebere polylinii či referenci bloku pod kurzorem; kliknutí na jinou entitu nic neudělá |
| **Tažení doprava** (striktní) | Vybere jen polylinie a reference bloků celé uvnitř rámečku |
| **Tažení doleva** (křížové) | Vybere polylinie a reference bloků, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí a rozloží výběr |

## Podporované objekty

| Objekt | Podporováno |
|--------|-------------|
| Polyline / Rectangle | Ano |
| Reference bloku | Ano, pokud nemá rozdílné měřítko v X a Y |
| Line, Arc, Circle, Ellipse | Ne — není co rozkládat |
| Text, Spline, Dimension, Leader, Hatch | Ne |
