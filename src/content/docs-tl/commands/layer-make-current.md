---
title: LayerMakeCurrent — Gawing Current ang Layer ng Entity
description: Ise-set ng LayerMakeCurrent command ang current drawing layer para tumugma sa layer ng entity na kine-click mo.
keywords: [layer make current, i-set ang current layer CAD, kulmanlab layer management]
group: layer
order: 1
---

# LayerMakeCurrent

Ise-set ng `LayerMakeCurrent` command ang **current drawing layer** sa kung anumang layer ang kinabibilangan ng na-click na entity. Awtomatikong maguguhit ang mga bagong entity sa layer na iyon.

## Paggamit

1. I-type ang `LayerMakeCurrent` sa terminal o i-click ang **Make Current** toolbar button (eyedropper icon).
2. **I-click ang kahit anong entity** sa canvas.
3. Napapdate ang current layer para tumugma sa layer ng entity na iyon. Agad na natatapos ang command.

## Detalye ng Pag-uugali

- Kapag nag-click ka sa walang laman na canvas (walang na-hit na entity), ipapakita ng terminal ang `no object found` at mananatiling aktibo ang command para makasubok ka ulit.
- Ang current layer setting lang ang nagbabago — walang na-modify na entities.
- Makikita ang na-update na layer sa layer selector sa toolbar.
