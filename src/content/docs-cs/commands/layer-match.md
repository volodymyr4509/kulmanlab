---
title: LayerMatch — přiřazení hladin objektů podle zdroje
description: Příkaz LayerMatch přiřadí jednomu nebo více cílovým objektům hladinu zdrojového objektu, na který kliknete.
keywords: [shoda hladin, přiřazení hladiny CAD, změna hladiny kulmanlab, správa hladin CAD]
group: layer
order: 3
---

# LayerMatch

Příkaz `LayerMatch` přiřadí vybraným objektům hladinu zdrojového objektu, na který kliknete. Je to nejrychlejší způsob, jak přesunout skupinu objektů na správnou hladinu bez otevírání [Layer Manageru](../layer-manager/).

## Postup

**Nejdřív vybrat, pak přiřadit**:

1. Vyberte objekty, jejichž hladinu chcete změnit.
2. Napište `LayerMatch` nebo klikněte na tlačítko **Layer Match** v panelu nástrojů (ikona štětce).
3. **Klikněte na zdrojový objekt** — ten, jehož hladinu chcete zkopírovat.
4. Všechny vybrané objekty se okamžitě přesunou na hladinu zdrojového objektu.

**Nejdřív aktivovat, pak vybrat**:

1. Napište `LayerMatch` nebo klikněte na tlačítko v panelu nástrojů, když není nic vybráno.
2. **Vyberte cílové objekty** — kliknutím přepínáte jednotlivé objekty, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení výběru.
4. **Klikněte na zdrojový objekt** — jeho hladina se použije na všechny cíle.

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
