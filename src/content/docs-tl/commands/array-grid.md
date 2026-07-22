---
title: Array Grid Command — Ulitin ang mga Entity sa mga Row at Column
description: Gumagawa ang Array Grid command ng rectangular grid ng mga kopya mula sa mga napiling entity — i-type ang bilang ng row, column, at ang espasyo sa pagitan nila direkta sa terminal, hindi kailangang mag-click ng anumang point.
keywords: [CAD array command, arraygrid, rectangular array CAD, grid pattern CAD, ulitin ang entity CAD, kopyahin ang array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Gumagawa ang `ArrayGrid` command ng rectangular grid ng mga kopya mula sa mga napiling entity — ilagay ang bilang ng row, bilang ng column, at ang espasyo sa pagitan nila, lahat ay ini-type sa terminal. Ang orihinal na seleksyon ay sumasakop sa cell na row 0, column 0; ang bawat ibang cell ay isang na-translate na kopya.

## Dalawang paraan para magsimula

**Pre-select, tapos array** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `arraygrid` sa terminal (sapat na ang `arr` — walang kalabuan) o i-click ang **Array Grid** button sa toolbar.
3. I-type ang bilang ng **row** at pindutin ang **Enter**.
4. I-type ang bilang ng **column** at pindutin ang **Enter**.
5. I-type ang **espasyo sa pagitan ng mga row** at pindutin ang **Enter**.
6. I-type ang **espasyo sa pagitan ng mga column** at pindutin ang **Enter** — agad na nagagawa ang grid.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `arraygrid` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle ang bawat entity, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. Ituloy ang row → column → espasyo ng row → espasyo ng column tulad ng nasa itaas.

```
  2 row x 3 column:

  [B] [B] [B]   <- row 1 (na-translate na kopya)
  [A] [A] [A]   <- row 0: orihinal na seleksyon, kopya pakanan
```

> Kailangan lang ng terminal ng sapat na mga letra para hindi malabo — ang pag-type ng `arr` at pagpindot ng **Enter** ay direktang nagpapa-activate ng Array Grid, dahil walang ibang pangalan ng command na nagsisimula sa tatlong letrang iyon (Arc, Area, Align, at Angle lahat ay naghihiwalay nang mas maaga).

## Row, column, at espasyo

| Prompt | Tumatanggap | Mga Tala |
|--------|-------------|----------|
| Row | Positibong buong numero (1, 2, 3…) | Digit lang — walang decimal point o sign |
| Column | Positibong buong numero (1, 2, 3…) | Digit lang — walang decimal point o sign |
| Espasyo ng row | May sign na decimal (hal. `10`, `-5.5`) | Distansya sa pagitan ng mga row; ang negative ay nagbabalik ng direksyon |
| Espasyo ng column | May sign na decimal (hal. `10`, `-5.5`) | Distansya sa pagitan ng mga column; ang negative ay nagbabalik ng direksyon |

Sa 1 row at 1 column, walang kopyang nagagawa — ang command ay lumalabas nang hindi binabago ang drawing.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon at magpatuloy sa row prompt |
| `0`–`9` | Ilagay ang mga digit para sa row o column |
| `0`–`9`, `.`, `-` | Ilagay ang mga digit para sa espasyo ng row/column (`-` bilang unang character lang) |
| `Backspace` | Burahin ang huling na-type na character ng kasalukuyang prompt |
| `Enter` | Kumpirmahin ang kasalukuyang prompt at magpatuloy sa susunod |
| `Escape` | Burahin ang mga na-type na row/column/espasyo na value at bumalik sa selection phase |

## Seleksyon habang tumatakbo ang command

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor papasok/palabas ng seleksyon |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa boundary ng box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon at magpatuloy sa row prompt |

## Pagkatapos ng array

Idinaragdag ang mga bagong kopya sa drawing at lumalabas ang command — nili-clear ang orihinal na seleksyon. Patakbuhin ulit ang **Array Grid**, o magsimula ng bagong command.

## Array Grid kumpara sa Copy

| | Array Grid | Copy |
|---|-----------|------|
| Pagpili ng point | Wala — ini-type ang row, column, at espasyo | Ang base point at destination ay kina-click (o ini-type) |
| Mga nagawang kopya | Row × Column − 1 | Eksaktong 1 bawat copy operation |
| Layout | Regular na rectangular grid | Kahit saan, sa anumang offset |
| Pinakaangkop para sa | Pag-uulit ng isang unit sa regular na pattern (butas, tile, fastener) | Isang solong duplicate sa sarbitraryong posisyon |

## Mga suportadong entity

Gumagana ang Array Grid sa bawat entity type. Ipinapatupad ng lahat ng entity ang `translate(dx, dy)` sa loob — ang parehong operation na ginagamit ng [Copy](../copy/) at [Move](../move/) — kaya wala mang hindi kasama.
