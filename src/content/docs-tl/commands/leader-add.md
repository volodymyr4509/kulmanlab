---
title: Leader+ — Magdagdag ng Arrowhead Arm sa Umiiral na Multileader
description: Nagdaragdag ang Leader+ command ng bagong arrowhead arm sa umiiral na multileader. Ang bagong arm ay pareho ang dogleg, text, at lahat ng styling ng napiling leader. Dalawang click — piliin ang leader, ilagay ang bagong tip.
keywords: [CAD leader add arm, leader+ command, magdagdag ng arrow sa leader, multileader arm, kulmanlab]
group: markup
order: 2
---

# Leader+

Nagdaragdag ang `leader+` command ng bagong arrowhead arm sa umiiral na multileader. Ang bagong arm ay itinuturo mula sa umiiral na dogleg ng leader papunta sa bagong arrowhead tip na iyong kli-click. Lahat ng styling — posisyon ng dogleg, text, arrowhead type, at size — ay minamana mula sa napiling leader.

## Pagdagdag ng Arm

1. I-type ang `leader+` sa terminal.
2. **I-click ang umiiral na multileader** para piliin ito.
3. **I-click ang bagong arrowhead tip**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate. May preview line na nagpapakita mula sa cursor papunta sa dogleg ng leader.

Nailalagay ang arm at nananatiling aktibo ang command — puwede mo agad i-click ang ibang leader para magdagdag pa ng mga arm. Pindutin ang **Enter**, **Space**, o **Escape** para tapusin.

```
  Before:                        After:
  ◄── arm 1                      ◄── arm 1
       \                               \
        ●──── dogleg ──── text          ●──── dogleg ──── text
                                       /
                                  arm 2 ──►  (bagong tip na kinlik mo)
```

## Coordinate Entry para sa Tip

Sa halip na mag-click, puwede kang mag-type ng eksaktong posisyon:

1. I-type ang value ng X.
2. Pindutin ang `,` — kinukumpirma ng terminal na naka-lock ang X.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang pag-type ng X coordinate |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Enter` | Kumpirmahin ang na-type na coordinate at ilagay ang arm |
| `Enter` / `Space` | Tapusin (kapag walang input na isinasagawa) |
| `Escape` | Kanselahin at i-reset |

## Mga Tala

- Tanging **Multileader** entities lang ang puwedeng piliin — walang mangyayari kapag ni-click ang ibang entity type.
- Ang bagong arm ay nagsisimula sa umiiral na dogleg; ang pinipili mo lang ay kung saan pupunta ang arrowhead tip.
- Walang limitasyon sa bilang ng arm na puwedeng magkaroon ang isang multileader.

## Kaugnay na mga Command

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Leader](../leader/) | Gumawa ng bagong-bagong multileader mula sa simula |
| [Leader−](../leader-remove/) | Alisin ang isang arm mula sa multileader na may dalawa o higit pa |
