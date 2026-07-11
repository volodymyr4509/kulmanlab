---
title: "Mirror Command — I-reflect ang mga Entity sa Kabila ng Two-Point Axis sa KulmanLab CAD"
description: "Nire-reflect ng Mirror command ang napiling entity sa kabila ng mirror line na tinutukoy ng dalawang click. Palaging napapanatili ang mga orihinal — gumagawa ang Mirror ng mga bagong na-mirror na kopya. Puwedeng nasa anumang angle ang mirror axis at nag-s-snap ito sa 45° increments."
keywords: [CAD mirror command, i-reflect ang entity CAD, mirror symmetry CAD, i-flip ang objects CAD, mirror axis CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Gumagawa ang `mirror` command ng mga na-mirror na kopya ng napiling entity, na na-reflect sa kabila ng isang two-point axis. **Palaging napapanatili** ang mga orihinal — hindi tulad ng [Move](../move/) o [Rotate](../rotate/), hindi kailanman binabago ng Mirror ang mga umiiral na entity; nagdaragdag lang ito ng mga bago.

## Dalawang paraan para magsimula

**Pre-select, tapos mirror** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `mirror` sa terminal o i-click ang **Mirror** button sa toolbar.
3. **I-click ang unang punto** ng mirror axis, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
4. **I-click ang ikalawang punto** — ilalagay ang mga na-mirror na kopya at lumalabas ang command. Gumagana rin dito ang coordinate input.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `mirror` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. **I-click ang unang punto**, tapos **i-click ang ikalawang punto** ng mirror axis (available ang coordinate entry sa parehong hakbang).

```
  Original:          Mirror axis:        Result:
                     |
  [entity A]    →    |    →    [entity A] + [mirrored A]
                     |
```

Sinusundan ng live preview ng mga na-mirror na kopya ang cursor habang inaayos mo ang ikalawang punto ng axis.

## Mirror axis

Ang axis ay isang walang-hanggang linya na dumadaan sa dalawang na-click na punto. Puwede itong nasa anumang angle:

- Ilapit ang cursor sa isang **45° snap axis** (0°, 45°, 90°, 135°, …) at mag-l-lock ang axis sa angle na iyon — kapaki-pakinabang para sa malinis na horizontal, vertical, o diagonal na reflection.
- Mag-click nang malayo sa snap zone para sa isang free-angle axis.

## Coordinate entry

Sa alinman sa axis-point na hakbang, mag-type ng eksaktong posisyon sa halip na mag-click:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipinapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para kumpirmahin.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon |
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate |
| `Escape` | Kanselahin at i-reset |

## Seleksyon habang tumatakbo ang command

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon |

## Ano ang na-mirror

Sinusuportahan ang bawat entity type. Mathematically na-reflect ang geometry sa kabila ng axis:

| Entity | Ano ang nagbabago |
|--------|-------------|
| Line | Na-reflect ang parehong endpoint |
| Circle | Na-reflect ang center; hindi nagbabago ang radius |
| Arc | Na-reflect ang center; nirerecalculate ang start at end angle sa kabila ng axis |
| Ellipse | Na-reflect ang center; na-flip ang direksyon ng major axis sa kabila ng axis |
| Polyline / Rectangle | Na-reflect ang bawat vertex |
| Text | Na-reflect ang anchor point; **hindi** binabaligtad ang text string |
| Spline | Na-reflect ang lahat ng control vertex / fit point |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Mga orihinal | Laging napapanatili | Laging napapanatili |
| Posisyon ng bagong entity | Na-reflect sa kabila ng isang axis | Naka-offset ng isang displacement vector |
| Pinakaangkop para sa | Symmetric na disenyo, bilateral na feature | Pag-uulit ng geometry sa anumang direksyon |
