---
sidebar_position: 10
title: Leader Command — Gumuhit ng Multileader Annotations na may Arrowhead at Text sa KulmanLab CAD
description: "Ginuguhit ng Leader command ang apat na phase na multileader annotation: arrowhead tip, dogleg elbow, text position, at na-type na label. Awtomatikong nag-a-adjust ang text direction base sa posisyon ng dogleg. Import-only sa DXF — hindi isinusulat ang mga leader kapag nag-save."
keywords: [CAD leader command, multileader annotation, leader CAD, arrow label annotation, dogleg leader, text direction CAD, kulmanlab]
---

# Leader

Ginuguhit ng `leader` command ang multileader annotation sa apat na hakbang: isang arrowhead na tumatama sa isang feature, isang leader line na yumuyuko sa isang dogleg, isang text anchor, at isang na-type na label. Sa lahat ng annotation command, ang Leader lamang ang may kasamang interactive text-input phase na may blinking cursor preview.

## Anatomiya ng Multileader

```
  ◄── arrowhead tip  (step 2 — tumatama sa feature)
      \
       \  leader line
        \
         ●──── dogleg (step 3) ──── text anchor (step 4)
                                    Label text  (step 5)
```

- **Arrowhead tip** — ang matulis na dulo na nakalagay sa feature na minamarkahan.
- **Dogleg** — ang elbow kung saan yumuyuko ang leader line patungo sa text.
- **Text anchor** — kung saan nakaposisyon ang label. Awtomatikong nag-a-align ang text sa kaliwa o kanan.

## Pagguhit ng Leader

1. I-type ang `leader` sa terminal o i-click ang **Leader** button sa toolbar.
2. **I-click ang arrowhead tip**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang dogleg** — ang yuko sa leader. Naka-lock ang angle sa 45° increments; mag-type ng haba at pindutin ang **Enter** para sa eksaktong paglalagay. O i-type ang `X,Y` para maglagay ng absolute coordinate.
4. **I-click ang text position** — kung saan nagja-jangkla ang label. Pareho ang mga opsyon: click, angle-lock + haba, o `X,Y`.
5. **I-type ang label text** — nag-a-update nang live ang canvas preview na may blinking cursor. Pindutin ang **Enter** para ilagay.

## Coordinate Entry (Lahat ng Point Phase)

Sa anumang point-picking na hakbang (tip, dogleg, text position), puwede kang mag-type ng eksaktong coordinate sa halip na mag-click:

1. I-type ang value ng X (digits, `.`, o `-`).
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]` na kumpirmang naka-lock ang X.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang punto.

## Angle Locking (Steps 3 at 4)

Pagkatapos ng bawat nailagay na punto, naka-snap ang command sa 45° axes kapag sapat na kalayo ang cursor. Habang naka-lock:
- Naka-snap ang preview sa axis.
- Mag-type ng haba at pindutin ang **Enter** para ilagay ang susunod na punto sa eksaktong distansyang iyon.

Magkasalungat ang angle locking at coordinate entry — sa sandaling mag-type ka ng digit nang walang naunang `,`, ipapakahulugan ito ng command bilang distansya (dapat aktibo ang angle lock). Para maglagay ng absolute coordinate sa halip, magsimula sa X number na sinusundan ng comma.

## Pag-edit ng Text Label

Habang nagta-type ng label sa step 5, puwede kang mag-navigate at mag-edit ng text bago ilagay:

| Key | Aksyon |
|-----|--------|
| Anumang printable character | Iipasok sa posisyon ng cursor |
| `←` / `→` | Ilipat ang cursor pakaliwa o pakanan |
| `Backspace` | Burahin ang character sa kaliwa ng cursor |
| `Delete` | Burahin ang character sa kanan ng cursor |
| `Enter` | Ilagay ang leader |

## Awtomatikong Text Direction

Nag-a-adjust ang text alignment base sa posisyon ng cursor kaugnay ng dogleg:

| Posisyon ng cursor | Text direction |
|-----------------|---------------|
| Sa **kanan** ng dogleg | Left-to-right mula sa text anchor |
| Sa **kaliwa** ng dogleg | Right-to-left (naka-anchor sa kanang panig) |

Walang kailangang manual na pag-adjust — igalaw ang cursor sa panig kung saan mo gustong ilagay ang label at automatic na tama ang pagkaka-align nito.

## Keyboard Reference

**Point Phases (tip, dogleg, text position)**

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang pag-type ng X coordinate (tapos `,` para i-lock ang X at ilagay ang Y) |
| `,` | Kumpirmahin ang X at lumipat sa Y entry |
| `0`–`9`, `.`, `-` | Bumuo ng distansya kapag naka-angle-lock |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate o distansya |

**Text Input Phase**

| Key | Aksyon |
|-----|--------|
| Printable character | Iipasok sa cursor |
| `←` / `→` | Ilipat ang cursor |
| `Backspace` | Burahin sa kaliwa |
| `Delete` | Burahin sa kanan |
| `Enter` | Ilagay ang leader |

| Key | Aksyon |
|-----|--------|
| `Escape` | Kanselahin at bumalik sa step 2 |

## Pag-edit ng Umiiral na Leader

**I-double-click** ang nailagay na multileader para buksan muli ang text editor sa **rich** mode. Sa rich mode, puwede kang mag-apply ng bold, italic, at per-character font o height overrides, at maglagay ng line breaks gamit ang `Enter`. Pindutin ang **Escape** para i-commit at isara.

Tingnan ang [Text Editor — rich mode](../../interface/text-editor/#rich-mode) para sa kumpletong reference.

## Pagdagdag at Pagtanggal ng mga Arm

- Para magdagdag ng extra arrowhead arm sa umiiral na leader: [Leader+](../leader-add/)
- Para tanggalin ang isang arm mula sa leader na may dalawa o higit pang arm: [Leader−](../leader-remove/)

## DXF — Import Only

**Import-only ang mga leader.** Nababasa at naipapakita nang tama ang mga `MLEADER` entities mula sa DXF files, pero **hindi isinusulat** ang mga leader na iginuhit sa editor kapag nag-save ng DXF file. Gamitin ang mga leader para sa visual annotation; iwasan ang pag-asa sa kanila para sa round-trip workflows.
