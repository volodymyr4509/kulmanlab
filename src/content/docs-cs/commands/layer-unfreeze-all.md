---
title: LayerUnfreezeAll — rozmrazení všech vrstev v KulmanLab CAD
description: Příkaz LayerUnfreezeAll zruší příznak zmrazení u každé vrstvy výkresu jedním krokem.
keywords: [rozmrazení vrstev, rozmrazit všechny vrstvy CAD, správa vrstev kulmanlab]
group: layer
order: 5
---

# LayerUnfreezeAll

Příkaz `LayerUnfreezeAll` okamžitě zruší příznak zmrazení u **každé vrstvy** výkresu. Není třeba žádný výběr ani potvrzení — spustí se a skončí jedním krokem.

## Použití

Napište `LayerUnfreezeAll` do terminálu nebo klikněte na tlačítko **Unfreeze All** v panelu nástrojů (ikona slunce). Všechny zmrazené vrstvy se okamžitě zviditelní.

## Kdy použít

Obvykle se používá po [LayerIsolate](../layer-isolate/) k obnovení všech vrstev do běžného viditelného stavu.

## Podrobnosti chování

- Platí pro všechny vrstvy bez ohledu na jejich aktuální stav.
- Neovlivňuje příznaky zámku ani tisku — mění se pouze příznak zmrazení.
- Příkaz skončí okamžitě bez jakýchkoli výzev.
