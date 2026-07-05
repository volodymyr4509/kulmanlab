---
sidebar_position: 1
title: "Move Command — I-translate ang mga Napiling Entity gamit ang Base Point sa KulmanLab CAD"
description: "Ginagalaw ng Move command ang isa o higit pang napiling entity gamit ang base point at destination. Sinusuportahan ang pre-selection, angle locking, at exact distance input. Pagkatapos ng move, nananatiling naka-select ang mga entity sa bago nilang posisyon. Sinusuportahan ang bawat entity type."
keywords: [CAD move command, i-translate ang entity CAD, igalaw ang objects CAD, angle lock move, exact distance move, grip move CAD, kulmanlab]
---

# Move

Ginagalaw ng `move` command ang mga napiling entity mula sa isang base point patungo sa isang destination point. Ang displacement na ilalapat sa bawat napiling entity ay ang vector mula base papuntang destination. Pagkatapos ng move, nananatiling naka-select ang lahat ng entity sa bago nilang posisyon, handa na para sa karagdagang pag-edit.

## Dalawang paraan para magsimula

**Pre-select, tapos move** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `move` sa terminal o i-click ang **Move** button sa toolbar.
3. **I-click ang base point**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
4. **I-click ang destination** — lilipat ang lahat ng napiling entity ayon sa base→destination vector. Gumagana rin dito ang coordinate input.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `move` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle ang bawat entity, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. **I-click ang base point**, tapos **i-click ang destination** (available ang coordinate entry sa parehong hakbang).

```
  Before:                    After:
  ● base                       → ● destination
  [entity A]                      [entity A moved]
  [entity B]                      [entity B moved]
```

Sinusundan ng ghost preview ng lahat ng napiling entity ang cursor mula sa base point papunta sa destination, ipinapakita ang resulta bago ka mag-click.

## Coordinate entry

Sa base-point o destination na hakbang, mag-type ng eksaktong posisyon sa halip na mag-click:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipinapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para kumpirmahin.

## Angle locking at exact distance

Kapag naitakda na ang base point, sinusubaybayan ng command ang 45° snap axis (0°, 45°, 90°, 135°, …). Nag-**lo-lock** ang direksyon kapag malayo na ang cursor mula sa base at nasa loob ng isang grip width mula sa axis. Habang naka-lock:

- Nag-i-snap ang ghost preview sa axis.
- Mag-type ng distance at pindutin ang **Enter** para gumalaw nang eksakto sa distance na iyon kasunod ng naka-lock na direksyon.
- Ang pag-click ay nag-p-project papunta sa axis, kaya laging nasa eksaktong axis ang destination.

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag sa distance value |
| `-` | Negative distance — binabaligtad ang direksyon sa axis (unang character lang) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilapat ang move sa na-type na distance |

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon at magpatuloy sa base-point phase |
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry, o distance kapag angle-locked |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang coordinate o ilapat ang move sa na-type na distance |
| `Escape` | Kanselahin at i-reset |

## Pag-activate ng Move mula sa grip

Ang pag-click sa **midpoint grip** ng napiling [Line](../line/) ay awtomatikong naglulunsad ng Move, kasama na ang midpoint bilang base point at aktibo na ang move phase. Ito ang pinakamabilis na paraan para muling i-position ang isang linya nang hindi na dumadaan sa selection step.

## Seleksyon habang tumatakbo ang command

Kapag nagsimula ang command sa selection phase:

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor papasok/palabas ng seleksyon |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa boundary ng box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon at lumilipat sa base-point phase |

## Pagkatapos ng move

Nananatiling naka-select ang mga ginalaw na entity sa bago nilang posisyon. Ibig sabihin, agad mong magagawa ang mga sumusunod:
- Patakbuhin muli ang **Move** para higit pa silang igalaw.
- Patakbuhin ang [Copy](../copy/), [Rotate](../rotate/), o [Scale](../scale/) nang hindi na kailangang mag-select ulit.
- Pindutin ang **Delete** para tanggalin sila.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Orihinal na posisyon | Nabakante — wala na ang mga entity roon | Napapanatili — nananatili sa lugar ang mga orihinal |
| Bilang ng resulta | Parehong bilang ng entity | Isang karagdagang set kada operation |
| Seleksyon pagkatapos | Naka-select ang mga ginalaw na entity sa bagong posisyon | Naka-select ang mga kinopyang entity sa bagong posisyon |
| Pinakaangkop para sa | Muling pag-position ng geometry | Pagdo-duplicate ng geometry |

## Mga suportadong entity

Gumagana ang Move sa bawat entity type: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, at lahat ng iba pa. Ipinapatupad ng lahat ng entity ang `translate(dx, dy)` kaya wala mang hindi kasama.
