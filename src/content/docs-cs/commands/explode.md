---
title: Příkaz Explode — rozložení polyline na objekty Line a Arc
description: Příkaz Explode rozloží Polyline na jednotlivé objekty Line a Arc, jeden na segment, přímo na místě. Každý díl zachová tloušťku čáry, barvu, vrstvu a typ čáry původní polyline. Funguje pouze na objektech Polyline.
keywords: [CAD příkaz explode, rozložení polyline CAD, rozdělení polyline na úsečky, převod polyline na line a arc, kulmanlab]
group: edit
order: 16
---

# Explode

Příkaz `explode` rozloží [Polyline](../polyline/) na jednotlivé objekty [Line](../line/) a [Arc](../arc/) — jeden na segment, přesně tam, kde byly vrcholy polyline. Díly nahradí polyline na místě a zachovají její tloušťku čáry, barvu, vrstvu a typ čáry.

Explode funguje pouze na objektech **Polyline**.

## Použití příkazu explode

Dva způsoby spuštění, stejný princip jako u [Delete](../delete/):

**Nejdřív vybrat, pak explode** — nejrychlejší cesta:

1. Vyberte na plátně jednu nebo více polyline.
2. Napište `explode` do terminálu, nebo klikněte na tlačítko **Explode** v panelu Edit.

Vybrané polyline se rozloží okamžitě — bez samostatného potvrzení, protože už je něco vybráno.

**Nejdřív aktivovat, pak vybrat**:

1. Napište `explode` nebo klikněte na tlačítko v panelu nástrojů, když není nic vybráno.
2. **Vyberte polyline** — kliknutím přepínáte výběr, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení a rozložení vybraných polyline.

Při výběru se berou v úvahu pouze polyline — kliknutí na Line, Circle nebo jiný objekt nic neudělá a tažení oblasti ignoruje vše kromě polyline uvnitř ní nebo se s ní protínajících.

## Co z toho vznikne

Každý segment polyline se stane samostatným objektem:

- **Přímý segment** se stane objektem **Line**.
- **Obloukový segment** (z [volby Arc](../polyline/) příkazu Polyline) se stane objektem **Arc**, který přesně odpovídá středu, poloměru a rozsahu původního oblouku.

Každá výsledná Line a Arc zdědí od zdrojové polyline **tloušťku čáry, barvu, vrstvu, typ čáry a měřítko typu čáry** — na vzhledu geometrie se nic nemění, jen z jednoho souvislého objektu Polyline je teď několik nezávislých objektů.

Rozložení lze vrátit jedním krokem pomocí [Undo](../undo/), jako každou jinou úpravu.

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepne polyline pod kurzorem do/z výběru; kliknutí na objekt jiného typu nic neudělá |
| **Tažení doprava** (přísný) | Vybere pouze polyline celé uvnitř rámečku |
| **Tažení doleva** (protínající) | Vybere polyline, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí a rozloží vybrané polyline |

## Podporované objekty

| Objekt | Podporováno |
|--------|-------------|
| Polyline / Rectangle | Ano |
| Line, Arc, Circle, Ellipse | Ne — není co rozkládat |
| Text, Spline, Dimension, Leader, Hatch | Ne |
