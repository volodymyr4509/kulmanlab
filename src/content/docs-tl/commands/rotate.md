---
sidebar_position: 2
title: "Rotate Command — I-rotate ang mga Entity Paikot sa Base Point sa KulmanLab CAD"
description: "Inii-rotate ng Rotate command ang napiling entity paikot sa piniling base point. Puwedeng i-type nang eksakto ang angle o itakda sa pamamagitan ng pag-click — ang direksyon ng cursor mula sa base point papunta sa click ang nagtatakda ng angle. Counter-clockwise ang positive angle sa DXF coordinates."
keywords: [CAD rotate command, i-rotate ang entity CAD, i-rotate ang objects angle, counter-clockwise rotation CAD, typed angle rotate, kulmanlab]
---

# Rotate

Inii-rotate ng `rotate` command ang napiling entity paikot sa isang base point. Itinatakda mo ang rotation angle sa pamamagitan ng pag-type ng numero sa degrees o sa pamamagitan ng pag-click — kinakalkula ang angle mula sa direksyon sa pagitan ng base point at ng posisyon ng click.

## Dalawang paraan para magsimula

**Pre-select, tapos rotate** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `rotate` sa terminal o i-click ang **Rotate** button sa toolbar.
3. **I-click ang base point** — ang sentro ng rotation. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
4. **Mag-type ng angle at pindutin ang Enter**, o **mag-click** para itakda ang angle mula sa direksyon ng cursor.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `rotate` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. **I-click ang base point** (available ang coordinate entry), tapos itakda ang angle.

```
  Before:            After (90° rotation around ●):
                        ╔══╗
  ●  [entity]    →   ● ║    ║
                        ╚══╝
```

Sinusundan ng live ghost preview ng na-rotate na entity ang angle ng cursor pagkatapos maitakda ang base point.

## Pagtatakda ng angle

**Typed angle** — mag-type ng numero (sa degrees) anumang oras pagkatapos mailagay ang base point. Nag-s-snap ang preview sa na-type na angle habang tinitignan mo pa ito bago pindutin ang Enter.

**Click angle** — kung walang na-type na value, ang pag-click ay nagtatakda ng angle na katumbas ng `atan2(cursorY − baseY, cursorX − baseX)` — ang direksyon mula sa base point papunta sa click, sa degrees.

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa angle value |
| `-` | Negative angle (unang character lang) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilapat ang rotation sa na-type na angle |

## Direksyon ng angle

Sumusunod ang mga angle sa **DXF convention**:

- Ang **positive** na value ay nag-r-rotate nang **counter-clockwise** sa drawing coordinates (Y-up).
- Sa screen, kung saan naka-invert ang Y-axis (Y-down), lumilitaw ang positive angle nang **clockwise**.

Karaniwang value: `90` = quarter turn, `180` = half turn, `-90` = kabaligtaran na quarter turn.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon |
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry (base-point phase), o angle value (angle phase) |
| `,` | I-lock ang X at lumipat sa Y entry (base-point phase) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang coordinate o ilapat ang rotation |
| `Escape` | Kanselahin at i-reset |

## Seleksyon habang tumatakbo ang command

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon |

## Mga suportadong entity

Gumagana ang Rotate sa bawat entity type. Nire-rotate ang geometry ng bawat entity paikot sa base point — halimbawa, gagalaw ang center ng isang Circle habang mananatili ang radius; gagalaw ang center ng isang Arc at magbabago ang start at end angle nito ayon sa halaga ng rotation; gagalaw ang anchor point ng isang Text entity at idadagdag ang angle sa Rotation Degree property nito.
