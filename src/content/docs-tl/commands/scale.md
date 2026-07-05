---
sidebar_position: 5
title: "Scale Command — I-resize nang Uniform ang mga Entity Paikot sa Base Point sa KulmanLab CAD"
description: "Ini-resize ng Scale command ang napiling entity nang uniform gamit ang na-type na factor paikot sa isang nakapirming base point. Palaging keyboard-entered ang factor — walang click-to-set-scale. Ang factor na higit sa 1 ay nagpapalaki; mas mababa sa 1 ay nagpapaliit. Sinusuportahan ang bawat entity type."
keywords: [CAD scale command, i-resize ang entity CAD, i-scale ang objects CAD, uniform scale CAD, scale factor CAD, palakihin paliitin CAD, kulmanlab]
---

# Scale

Ini-resize ng `scale` command ang napiling entity nang uniform paikot sa isang base point. Ang lahat ng distansya mula sa base point ay pinaparami ng scale factor — dinodoble ng factor na `2` ang lahat ng dimensyon, at hinahati sa kalahati ng `0.5`. Palaging in-e-enter ang factor sa pamamagitan ng pag-type; walang click-to-set-scale.

## Dalawang paraan para magsimula

**Pre-select, tapos scale** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `scale` sa terminal o i-click ang **Scale** button sa toolbar.
3. **I-click ang base point** — ang nakapirming punto na hindi gumagalaw habang nag-s-scale. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
4. **I-type ang scale factor** at pindutin ang **Enter**.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `scale` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. **I-click ang base point** (available ang coordinate entry), tapos i-type ang factor.

```
  Base ●                Base ●
        [entity]   →          [larger entity]
  factor = 2 → distances from ● are doubled
```

## Pag-type ng scale factor

Kapag nailagay na ang base point, ipapakita ng terminal ang `enter scale factor:` at maghihintay ng keyboard input:

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa factor |
| `-` | Negative factor (unang character lang — binabaligtad muna bago mag-scale) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilapat ang scale gamit ang na-type na factor |

Dapat non-zero ang factor. Karaniwang value:

| Factor | Epekto |
|--------|--------|
| `2` | Dinodoble ang lahat ng dimensyon |
| `0.5` | Hinahati sa kalahati ang lahat ng dimensyon |
| `1.5` | Nagdaragdag ng 50% |
| `-1` | Ni-mi-mirror sa kabila ng base point (katumbas ng 180° rotation) |

Walang live preview habang nagta-type — lalabas lang ang na-scale na resulta pagkatapos pindutin ang **Enter**.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon |
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry (base-point phase), o scale factor (factor phase) |
| `,` | I-lock ang X at lumipat sa Y entry (base-point phase) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang coordinate o ilapat ang scale |
| `Escape` | Kanselahin at i-reset |

## Seleksyon habang tumatakbo ang command

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon |

## Ano ang na-scale

Sinusuportahan ang lahat ng entity type. Ini-scale ng bawat entity ang sarili nitong geometry nang relatibo sa base point:

| Entity | Ano ang nagbabago |
|--------|-------------|
| Line | Na-scale ang parehong endpoint palayo sa base point |
| Circle | Na-scale ang center mula sa base point; pinaparami ang radius ng factor |
| Arc | Na-scale ang center; pinaparami ang radius ng factor; hindi nagbabago ang angles |
| Ellipse | Na-scale ang center; pinaparami ng factor ang parehong semi-axis length |
| Polyline / Rectangle | Na-scale ang bawat vertex mula sa base point |
| Text | Na-scale ang anchor point; pinaparami ng factor ang height |
| Spline | Na-scale ang lahat ng control vertex / fit point |
