---
sidebar_position: 1
title: LayerMatch — I-reassign ang Layer ng Entity Ayon sa Source sa KulmanLab CAD
description: Nire-reassign ng LayerMatch command ang layer ng isa o higit pang target entities para tumugma sa layer ng source entity na kine-click mo.
keywords: [layer match, i-match ang layer CAD, i-reassign ang layer kulmanlab, CAD layer management]
---

# LayerMatch

Nire-reassign ng `LayerMatch` command ang layer ng mga napiling entities para tumugma sa layer ng source entity na kine-click mo. Ito ang pinakamabilis na paraan para ilipat ang isang grupo ng objects sa tamang layer nang hindi binubuksan ang Layer Manager.

## Workflow

**Mag-pre-select muna, pagkatapos i-match**:

1. Piliin ang mga entities na gusto mong baguhin ang layer.
2. I-type ang `LayerMatch` o i-click ang **Layer Match** toolbar button (paint icon).
3. **I-click ang source object** — yung entity na gusto mong kopyahin ang layer.
4. Agad na lilipat ang lahat ng napiling entities sa layer ng source object.

**I-activate muna, pagkatapos pumili**:

1. I-type ang `LayerMatch` o i-click ang toolbar button nang walang napili.
2. **Pumili ng target objects** — mag-click para i-toggle ang bawat entity o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang selection.
4. **I-click ang source object** — ilalapat ang layer nito sa lahat ng targets.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang target selection at magpatuloy sa source-pick phase |
| `Escape` | I-reset — bumalik sa target selection o kanselahin nang buo |

## Detalye ng Pag-uugali

- Ang `layer` property lamang ang nagbabago — hindi nagagalaw ang color, linetype, lineweight, at geometry.
- Hindi nababago ang source object mismo.
- Natatapos ang command pagkatapos ma-click ang source.
- Walang mangyayari kapag nag-click sa walang laman na canvas habang nasa source-pick phase.
