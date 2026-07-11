---
title: "Align Command — I-translate, I-rotate, at I-scale ang mga Entity gamit ang Point Pairs sa KulmanLab CAD"
description: "Muling pinopositio ng Align command ang mga napiling entity gamit ang isa o dalawang pares ng source/destination point — pinagsasama ang translate, rotate, at opsyonal na uniform scale sa isang operasyon. Gumagana ito tulad ng pinagsamang Move + Rotate + Scale."
keywords: [CAD align command, i-align ang entity CAD, translate rotate scale, point pair alignment, katumbas ng AutoCAD ALIGN, kulmanlab]
group: edit
order: 6
---

# Align

Muling pinopositio ng `align` command ang mga napiling entity gamit ang isa o dalawang pares ng source/destination point. Kapag isang pares lang, kumikilos ito nang eksaktong tulad ng [Move](../move/) (translate lang). Kapag dalawang pares, ini-rotate rin nito ang seleksyon para tumugma ang direksyon ng source-papuntang-source sa direksyon ng destination-papuntang-destination, at maaari itong i-scale nang opsyonal para tumugma ang haba ng source segment sa haba ng destination segment — translate, rotate, at scale sa iisang operasyon.

## Dalawang paraan para magsimula

**Pre-select, tapos i-align** — piliin muna ang mga entity, pagkatapos i-activate:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `align` sa terminal o i-click ang **Align** button sa toolbar.
3. **I-click ang unang source point (S1)**, tapos **i-click ang unang destination point (D1)**.
4. **I-click ang ikalawang source point (S2)**, o pindutin ang **Enter** para agad na ilapat ang isang translate-only na alignment.
5. **I-click ang ikalawang destination point (D2)**.
6. Sagutin ang scale prompt: pindutin ang **Y** para mag-scale, o **N** / **Enter** para panatilihin ang orihinal na sukat.

**Activate, tapos select** — simulan ang command nang walang naka-select:

1. I-type ang `align` o i-click ang toolbar button.
2. **Piliin ang mga object** — mag-click para i-toggle ang bawat entity, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin ang seleksyon.
4. Ituloy sa S1 → D1 → S2 → D2 → scale prompt gaya ng nasa itaas.

> Kailangan lang ng terminal ng sapat na mga letra para hindi maging malabo — ang pag-type ng `al` at pagpindot ng **Enter** ay direktang nag-a-activate ng Align, dahil walang ibang command na nagsisimula sa dalawang letrang iyon.

## Anatomiya ng isang alignment

```
  Mga source point (sa mga entity):    Mga destination point:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resulta: ni-translate ang seleksyon para dumapo ang S1 sa D1,
  pagkatapos ay ini-rotate sa paligid ng D1 para tumugma ang
  direksyon ng S1→S2 sa direksyon ng D1→D2 — at, kung pipiliin
  mong mag-scale, binabago ang sukat para maging |D1D2| ang |S1S2|.
```

Sinusundan ng ghost preview ang cursor sa bawat hakbang: preview ng paglipat habang inilalagay ang D1, pagkatapos ay dashed na naka-ikot na preview kapag inilalagay na ang D2.

## Alignment na isang punto (translate lang)

Pagkatapos mailagay ang D1, pindutin ang **Enter** sa halip na i-click ang ikalawang source point. Ni-translate ang seleksyon ayon sa S1→D1 vector — walang rotation o scale — kapareho ng isang [Move](../move/) na gumagamit ng S1 bilang base point at D1 bilang destination.

## Alignment na dalawang punto (translate + rotate + opsyonal na scale)

Kapag nailagay na ang parehong S2 at D2:

- **Rotation angle** — ang pagkakaiba sa pagitan ng destination direction (`D1 → D2`) at source direction (`S1 → S2`).
- **Scale prompt** — lalabas ang `scale objects to alignment points? [Yes/No] <N>`, na may **No** bilang default:
  - Pindutin ang **Y** para i-scale din nang pantay-pantay ang seleksyon sa paligid ng D1 para maging distansya ng `D1–D2` ang distansya ng `S1–S2`.
  - Pindutin ang **N** o **Enter** para panatilihin ang orihinal na sukat — translate at rotate lang ang ilalapat.

Ang pagpindot ng anumang key sa scale prompt ay agad na naglalapat ng alignment — walang hiwalay na hakbang ng kumpirmasyon pagkatapos pumili ng Yes o No.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang seleksyon at magpatuloy sa S1 phase |
| `Enter` (sa hakbang ng S2) | Laktawan ang rotation — ilapat ang translate-only na alignment gamit ang S1 at D1 |
| `Y` | Ilapat ang alignment na may scale |
| `N` / `Enter` (sa scale prompt) | Ilapat ang alignment nang walang scale |
| `Escape` | Habang naglalagay ng punto: itinatapon ang mga nailagay na punto at bumabalik sa selection phase; kapag walang naka-select: kinakansela ang command |

## Seleksyon habang tumatakbo ang command

Kapag nagsimula ang command sa selection phase:

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor papasok/palabas ng seleksyon |
| **Drag right** (strict) | Idinaragdag ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Idinaragdag ang mga entity na tumatawid sa boundary ng box |
| **Enter** / **Space** | Kinukumpirma ang seleksyon at lumilipat sa S1 phase |

## Pagkatapos mag-align

Nananatiling naka-select ang mga na-align na entity sa bago nilang posisyon, at awtomatikong natatapos ang command — patakbuhin muli ang **Align**, o lumipat sa [Move](../move/), [Rotate](../rotate/), o [Scale](../scale/) nang hindi na kailangang mag-select ulit.

## Align kumpara sa Move

| | Align | Move |
|---|-------|------|
| Mga pares ng punto | 1 (translate lang) o 2 (translate + rotate + scale) | 1 (translate lang) |
| Rotation | Oo, gamit ang ikalawang pares ng punto | Hindi |
| Scaling | Opsyonal, gamit ang ikalawang pares ng punto | Hindi |
| Pinakaangkop para sa | Pag-fit ng isang hugis sa iba gamit ang mga reference point | Simpleng muling pag-position |

## Mga suportadong entity

Gumagana ang Align sa bawat entity type na sinusuportahan ng Move, Rotate, at Scale — ang parehong `translate`, `rotate`, at `scale` na operasyon na ginagamit ng mga command na iyon ay inilalapat nang sunud-sunod, kaya wala mang hindi kasama.
