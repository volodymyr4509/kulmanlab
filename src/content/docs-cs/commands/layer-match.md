---
title: LayerMatch — přiřazení vrstev objektů podle zdroje
description: Příkaz LayerMatch přiřadí jednomu nebo více cílovým objektům vrstvu zdrojového objektu, na který kliknete.
keywords: [shoda vrstev, přiřazení vrstvy CAD, změna vrstvy kulmanlab, správa vrstev CAD]
group: layer
order: 3
---

# LayerMatch

Příkaz `LayerMatch` přiřadí vybraným objektům vrstvu zdrojového objektu, na který kliknete. Je to nejrychlejší způsob, jak přesunout skupinu objektů na správnou vrstvu bez otevírání [Layer Manageru](../layer-manager/).

## Postup

**Nejdřív vybrat, pak přiřadit**:

1. Vyberte objekty, jejichž vrstvu chcete změnit.
2. Napište `LayerMatch` nebo klikněte na tlačítko **Layer Match** v panelu nástrojů (ikona štětce).
3. **Klikněte na zdrojový objekt** — ten, jehož vrstvu chcete zkopírovat.
4. Všechny vybrané objekty se okamžitě přesunou na vrstvu zdrojového objektu.

**Nejdřív aktivovat, pak vybrat**:

1. Napište `LayerMatch` nebo klikněte na tlačítko v panelu nástrojů, když není nic vybráno.
2. **Vyberte cílové objekty** — kliknutím přepínáte jednotlivé objekty, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení výběru.
4. **Klikněte na zdrojový objekt** — jeho vrstva se použije na všechny cíle.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr cílů a přejde do fáze výběru zdroje |
| `Escape` | Reset — návrat k výběru cílů, nebo úplné zrušení |

## Podrobnosti chování

- Mění se pouze vlastnost `layer` — barva, typ čáry, tloušťka čáry a geometrie zůstávají nedotčeny.
- Samotný zdrojový objekt se neupravuje.
- Příkaz skončí po kliknutí na zdroj.
- Kliknutí na prázdné plátno ve fázi výběru zdroje nic neudělá.
