---
title: "Copy Command — Duplicate ang mga Entity sa Bagong Posisyon"
description: "Gumagawa ang Copy command ng mga na-translate na duplicate ng napiling entity habang nananatili ang mga orihinal sa lugar. Sinusuportahan ang pre-selection, angle locking, at exact distance input. Inilalagay ang mga kopya at lumalabas ang command; hindi nagbabago ang mga orihinal."
keywords: [CAD copy command, duplicate entity CAD, kopyahin ang objects CAD, i-clone ang geometry CAD, angle lock copy, exact distance copy, kulmanlab]
group: edit
order: 2
---

# Copy

Gumagawa ang `copy` command ng mga na-translate na duplicate ng napiling entity at inilalagay ang mga ito nang naka-offset mula sa base point patungo sa isang destination — nananatili ang mga orihinal nang eksakto kung saan sila naroroon. Ito ang pangunahing pagkakaiba mula sa [Move](../move/): idinaragdag ng Copy ang bagong entity sa drawing; inililipat ng Move ang mga umiiral na.

## Dalawang paraan para magsimula

**Pre-select, tapos copy** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `copy` sa terminal o i-click ang **Copy** button sa toolbar.
3. **I-click ang base point**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
4. **I-click ang destination** — lalabas ang mga duplicate sa base→destination offset. Gumagana rin dito ang coordinate input.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `copy` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle ang bawat entity, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. **I-click ang base point**, tapos **i-click ang destination** (available ang coordinate entry sa parehong hakbang).

```
  Before:               After:
  [entity A]            [entity A]  ← originals untouched
  [entity B]            [entity B]
                        [copy of A] ← new entities
                        [copy of B]
```

Sinusundan ng ghost preview ng mga kopya ang cursor mula sa base point papunta sa destination.

## Coordinate entry

Sa base-point o destination na hakbang, mag-type ng eksaktong posisyon sa halip na mag-click:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipinapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para kumpirmahin.

## Angle locking at exact distance

Kapag naitakda na ang base point, nag-s-snap ang command sa 45° axes (0°, 45°, 90°, 135°, …) kapag malayo na ang cursor at malapit sa axis. Habang naka-lock, mag-type ng distance at pindutin ang **Enter** para ilagay ang mga kopya sa eksaktong offset na iyon.

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag sa distance value |
| `-` | Negative distance — binabaligtad ang direksyon sa axis (unang character lang) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilagay ang mga kopya sa na-type na distance |

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon at magpatuloy sa base-point phase |
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry, o distance kapag angle-locked |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang coordinate o ilapat ang copy sa na-type na distance |
| `Escape` | Kanselahin at i-reset |

## Seleksyon habang tumatakbo ang command

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor papasok/palabas ng seleksyon |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa boundary ng box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon |

## Pagkatapos ng copy

**Ang mga orihinal ang nananatiling naka-select** — idinaragdag sa drawing ang mga bagong kopya ngunit nili-clear ang seleksyon at lumalabas ang command. Para agad na magamit ang mga kopya, patakbuhin muli ang Copy sa seleksyon, o magsimula ng bagong command.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Mga orihinal | Nananatili sa lugar | Tinatanggal mula sa orihinal na posisyon |
| Bilang ng resulta | Dumadami ayon sa bilang ng kinopyang entity | Hindi nagbabago |
| Pagkatapos ng operation | Naka-select pa rin ang mga orihinal | Naka-select ang mga ginalaw na entity sa bagong posisyon |
| Pinakaangkop para sa | Pag-uulit ng geometry, symmetric na layout | Muling pag-position ng geometry |

## Mga suportadong entity

Gumagana ang Copy sa bawat entity type. Ipinapatupad ng lahat ng entity ang `translate(dx, dy)` sa loob kaya wala mang hindi kasama.
