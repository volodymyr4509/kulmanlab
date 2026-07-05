---
title: ViewportCopy Command — Kopyahin ang Viewport sa KulmanLab CAD
description: Kinokopya ng ViewportCopy command ang napiling viewport sa bagong posisyon sa parehong layout, habang pinapanatili ang scale at model view settings. Sinusuportahan ang eksaktong coordinate entry, angle locking, at typed distance input.
keywords: [viewport copy, kopyahin ang viewport, kopyahin ang viewport layout, angle lock viewport, eksaktong coordinate viewport, kulmanlab]
---

# ViewportCopy

Kinokopya ng `ViewportCopy` command ang isang viewport sa bagong posisyon, habang pinapanatili ang scale at model center nito. Available lang sa layout space.

## Pagkopya ng Viewport

1. Lumipat sa paper layout tab.
2. Opsyonal na i-click ang isang viewport para i-pre-select ito.
3. I-type ang `ViewportCopy` sa terminal o i-click ang **Viewport Copy** toolbar button.
4. Kung walang na-pre-select na viewport, **i-click ang viewport** na kokopyahin.
5. **I-click ang base point** — ang reference para sa displacement. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
6. **I-click ang destination** — malalagay ang viewport sa base→destination offset. O gamitin ang coordinate entry / angle lock.

Pagkatapos ilagay, mananatiling aktibo ang command — i-click ang ibang destination para maglagay ng isa pang kopya ng parehong viewport. Pindutin ang **Enter**, **Space**, o **Escape** para tapusin.

## Coordinate Entry

Sa hakbang ng base-point at destination, puwede kang mag-type ng eksaktong coordinate sa halip na mag-click:

1. I-type ang X value.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang Y value.
4. Pindutin ang **Enter** para kumpirmahin.

## Angle Locking at Eksaktong Distansya

Pagkatapos ma-set ang base point, ang command ay nag-snap sa 45° axes (0°, 45°, 90°, 135°, …) kapag naka-align ang cursor. Habang naka-lock:

- Nag-snap ang preview sa axis.
- Mag-type ng distansya at pindutin ang **Enter** para ilagay ang kopya sa eksaktong offset na iyon sa direksyon ng lock.

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa distance value |
| `-` | Negatibong distansya (binabaligtad ang direksyon; unang character lang) |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Ilagay ang kopya sa na-type na distansya |

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry, o distansya kapag naka-angle-lock |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Enter` | Kumpirmahin ang na-type na coordinate o distansya |
| `Enter` / `Space` | Tapusin (kapag walang input na isinasagawa) |
| `Escape` | Kanselahin at i-reset |

## Mga Tala

- Available lang ang ViewportCopy kapag aktibo ang paper layout tab.
- Namamana ng kinopyang viewport ang parehong scale, model center, locked state, at dimensions ng orihinal.
- Para gumawa ng bagong viewport mula sa simula, gamitin ang [ViewportRectangle](../viewport-rectangle/).
