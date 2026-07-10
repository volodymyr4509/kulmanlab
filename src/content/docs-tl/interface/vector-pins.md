---
sidebar_position: 5
title: "Vector Pins — Mag-snap sa mga Reference Line na Dumadaan sa mga Naka-pin na Punto sa KulmanLab CAD"
description: "Hinahayaan ka ng Vector Pins na mag-pin ng snap point sa pamamagitan ng pag-hover dito nang kalahating segundo, pagkatapos ay subaybayan ang cursor sa mga dashed na pahalang at patayong reference line na dumadaan sa naka-pin na punto — ihanay ang bagong geometry sa mga umiiral na punto nang walang construction line."
keywords: [vector pins, object snap tracking, mga reference line, pagsubaybay ng paghahanay, snap tracking CAD, mga construction line, kulmanlab]
---

# Vector Pins

Ang **Vector Pins** ay isang tulong sa pagguhit na nagpapahintulot na ihanay ang bagong geometry sa mga umiiral na punto nang hindi gumuguhit ng construction line. Mag-hover sa isang snap point nang kalahating segundo para *i-pin* ito — ang pin ay magpo-project ng mga hindi nakikitang pahalang at patayong reference line, at ang cursor ay sasapit sa mga ito tuwing lalapit. Ito ang katumbas sa KulmanLab CAD ng object snap tracking sa mga desktop na CAD application.

Ang tampok ay kinokontrol ng **Pins** toggle sa control bar (katabi ng Grid, Snap, at ANGL). Ito ay **naka-on bilang default**, at ang setting ay nananatili sa pagitan ng mga session.

## Pag-pin ng punto

1. Magsimula ng command na humihingi ng punto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), at iba pa.
2. Ilipat ang cursor sa isang snap point ng umiiral na geometry — isang marker ng endpoint, midpoint, o center.
3. **Panatilihing nakatigil ang cursor nang 500 ms.** Ang marker ay magiging solid na accent na **parisukat** — naka-pin na ang punto.
4. Ulitin para mag-pin ng kasindami ng kailangan mo. Bawat pin ay patuloy na nagpo-project ng mga reference line nito.

Gumagana rin ang pag-pin sa labas ng command: ang pag-hover sa isang **grip** ng napiling entity ay nagpi-pin dito sa parehong paraan.

## Pagsubaybay sa mga reference line

Bawat naka-pin na punto ay nagpo-project ng dalawang hindi nakikitang reference line — isang **pahalang** at isang **patayo** — na dumadaan sa eksaktong mga coordinate nito. Habang ginagalaw mo ang cursor:

- Sa loob ng **12 px** mula sa patayong linya ng isang pin, ang cursor ay sasapit dito: isang dashed na accent na linya ang iginuguhit sa buong view na dumadaan sa pin, at isang **X marker** ang nagpapakita ng na-snap na posisyon. Ang iyong X coordinate ay ngayon *eksaktong* X ng pin.
- Ganoon din ang nalalapat sa pahalang na linya para sa Y coordinate ng pin.
- Malapit sa isang linya ng bawat oryentasyon — kahit mula sa **dalawang magkaibang pin** — ang cursor ay sasapit sa kanilang **intersection**, at ipapakita ang parehong dashed na linya. Nilalagay nito ang punto nang eksakto sa (X ng pin A, Y ng pin B).

```
                    ┆ (dashed, patayong linya ng pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← cursor na naka-snap sa intersection:
                    ┆    X mula sa pin B, Y mula sa pin A
                    ┆
                    ■ pin B
```

Ang mga na-snap na coordinate ay kinukuha nang direkta mula sa pin, kaya eksakto ang paghahanay — walang rounding o floating-point na paglihis.

## Priyoridad ng snap

Ang mga karaniwang geometry snap — endpoint, midpoint, center, at intersection — ay **may priyoridad** kaysa sa mga reference line ng pin. Kung ang cursor ay mas malapit sa isang point snap kaysa sa reference line, mananalo ang point snap. Pinupunan ng pin tracking ang mga puwang sa pagitan ng geometry; hindi nito kailanman hinahadlangan ang pag-snap sa mismong geometry.

## Pagsasama sa angle lock

Ang vector pins ay gumagana kasabay ng angle tracking (ang **ANGL** toggle sa control bar). Kapag ni-lock ng isang command ang cursor sa isang angle-tracking ray:

- Ang cursor ay nananatiling nakatali sa naka-lock na direksyon.
- Ang pag-snap ng pin ay lumilipat sa pagtutok sa **mga intersection ng naka-lock na ray sa mga reference line ng pin** (sa unahan lamang ng pinagmulan ng ray).

Sinasagot nito ang mga tanong tulad ng *"saan tumatawid ang 45° na direksyon mula sa aking huling punto sa taas ng center ng bilog na iyon?"* — i-lock ang anggulo, at ang cursor ay pupuwesto sa punto ng pagtawid. Gumagana ang ray snapping sa bawat command na may angle locking: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader, at ViewportCopy.

## Siklo ng buhay ng pin

Ang mga pin ay para sa kasalukuyang operasyon, hindi bilang permanenteng marker. Ang lahat ng pin ay binubura kapag:

| Kaganapan | Dahilan |
|-----------|---------|
| Isang **bagong command** ang tumakbo | Bawat operasyon ay nagsisimula sa malinis na hanay ng mga reference |
| Pinindot ang **Escape** | Karaniwang kanselahin-lahat na gawi |
| Ang **Pins** toggle ay pinatay | Ang pagpatay sa tampok ay nag-aalis ng estado nito |
| Paglipat sa pagitan ng **model at paper space** | Ang mga coordinate ng pin ay para sa isang space lamang |

Sa loob ng iisang command maaari kang mag-pin, gumuhit, mag-pin ulit, at magpatuloy — nananatili ang mga pin sa bawat pag-click ng multi-point na command tulad ng Polyline.

## Karaniwang workflow

Pagguhit ng linyang nagsisimula nang direkta sa ilalim ng center ng isang bilog:

1. I-type ang `line` (o i-click ang Line button).
2. Mag-hover sa **center marker** ng bilog nang kalahating segundo — magiging accent na parisukat ito.
3. Ilipat ang cursor pababa: malapit sa patayong linya ng bilog, ang cursor ay lalapat sa dashed na reference line.
4. Mag-click — ang linya ay magsisimula nang eksakto sa X coordinate ng bilog.
5. Ipagpatuloy ang linya gaya ng dati; ang pin ay mananatiling magagamit para sa mga susunod na punto.

## Mga Tala

- Ang 500 ms na hover ay gumagana sa anumang snap marker na maaabot ng cursor — kabilang ang mga snap point na lumilitaw sa gitna ng command.
- Ang pag-hover sa puntong naka-pin na ay walang epekto; walang pag-unpin sa pamamagitan ng hover. Burahin ang mga pin gamit ang **Escape** o sa pagpatay ng **Pins**.
- Ang snap distance para sa mga reference line ay parehong 12 screen pixel na ginagamit ng karaniwang point snapping, kaya pare-pareho ang pakiramdam sa anumang zoom level.
- Ang mga naka-pin na punto ay iginuguhit bilang mga accent na parisukat kapalit ng kanilang karaniwang snap marker.
