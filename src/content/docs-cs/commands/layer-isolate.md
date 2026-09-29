---
title: LayerIsolate — zmrazení všech vrstev kromě vybraných v KulmanLab CAD
description: Příkaz LayerIsolate zmrazí každou vrstvu kromě těch, které používají vybrané objekty, takže se můžete soustředit na konkrétní geometrii, aniž byste cokoli mazali.
keywords: [izolace vrstvy, zmrazení vrstev CAD, izolovat vrstvu kulmanlab, správa vrstev CAD]
group: layer
order: 4
---

# LayerIsolate

Příkaz `LayerIsolate` zmrazí každou vrstvu **kromě** těch, do kterých patří vybrané objekty. Použijte jej, když se chcete rychle soustředit na konkrétní geometrii, aniž byste cokoli trvale skrývali nebo mazali — až budete hotovi, zmrazení zrušíte příkazem [LayerUnfreezeAll](../layer-unfreeze-all/).

## Dva způsoby spuštění

**Nejdřív vybrat, pak izolovat** — nejprve vyberte objekty, poté příkaz aktivujte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `LayerIsolate` do terminálu nebo klikněte na tlačítko **Layer Isolate** v panelu nástrojů.
3. Vrstvy vybraných objektů zůstanou viditelné; všechny ostatní se okamžitě zmrazí.

**Nejdřív aktivovat, pak vybrat**:

1. Napište `LayerIsolate` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — klikejte na jednotlivé objekty nebo tažením vyberte oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení — izolace se použije.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr a použije izolaci |
| `Escape` | Zruší a vymaže výběr |

## Podrobnosti chování

- Všechny vrstvy, které ve výběru **nejsou** zastoupeny, se nastaví jako zmrazené.
- Vrstvy, které zastoupeny **jsou**, zůstanou rozmrazené, i když byly předtím zmrazené.
- Po použití izolace se výběr vymaže.
- Příkaz po použití skončí automaticky.

## Vrácení izolace

Spusťte [LayerUnfreezeAll](../layer-unfreeze-all/), čímž všechny vrstvy jedním krokem zase zviditelníte.
