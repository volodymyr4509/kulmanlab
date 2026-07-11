---
title: Match Properties — Kopyahin ang Entity Properties sa KulmanLab CAD
description: Kinokopya ng MatchProperties command ang kulay, layer, at iba pang shared properties mula sa source entity patungo sa isa o higit pang target entities. Nagta-match ng properties sa parehong paraan tulad ng ginagawa ng desktop CAD tools.
keywords: [match properties CAD, kopyahin ang entity properties, MATCHPROP, i-match ang layer color, transfer properties, kulmanlab match properties, paint properties, kopyahin ang layer CAD]
group: style
order: 1
---

# Match Properties

Kinokopya ng `MatchProperties` command ang **visual at layer properties** mula sa source entity patungo sa isa o higit pang target entities. Ang mga properties lang na shared sa pagitan ng source at target entity types ang ini-transfer — hindi kailanman binabago ang geometry.

## Paano i-activate

I-click ang **Match Properties** toolbar button (paint roller icon) sa Style panel, o i-type ang `MatchProperties` sa terminal.

## Workflow

**I-activate muna, pagkatapos piliin ang source:**

1. I-type ang `MatchProperties` o i-click ang toolbar button nang walang naka-pre-select.
2. **I-click ang source entity** — ang entity na ang properties nito ang gusto mong kopyahin.
3. **I-click ang bawat target entity** para i-apply ang source properties. Puwede kang mag-click ng maraming entity nang paisa-isa.
4. Para i-apply sa isang grupo nang sabay-sabay, **mag-drag ng selection box** sa mga target.
5. Pindutin ang **Enter** o **Escape** para tapusin.

**Pre-select muna ang source, pagkatapos i-activate:**

1. I-click ang isang entity para piliin ito.
2. I-activate ang `MatchProperties`. Awtomatikong gagamitin ang napiling entity bilang source.
3. I-click ang mga target entity o mag-drag-select, pagkatapos ay pindutin ang **Enter** o **Escape** para tapusin.

## Anong mga properties ang kinokopya

Kinokopya ng MatchProperties ang mga properties na kabilang sa isang shared base class sa pagitan ng source at target. Sa pinakamababa, ang mga sumusunod na properties ay shared ng **lahat ng entity types**:

| Property | Paglalarawan |
|----------|-------------|
| **Color** | Ang color index ng entity (kasama ang "By Layer" / "By Block") |
| **Layer** | Ang layer kung saan kabilang ang entity |

Kapag pareho ang entity type ng source at target (halimbawa, parehong dimensions), kinokopya rin ang mga karagdagang type-specific properties — halimbawa, text height, arrow size, extension line settings.

Hindi kailanman naaapektuhan ang geometry (coordinates, radius, length, atbp.).

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang area selection o tapusin ang command |
| `Escape` | Tapusin ang pag-apply (kung naka-set na ang source) o kanselahin |

## Detalye ng Behaviour

- Hindi kailanman binabago ang source entity mismo.
- Ang bawat click o drag-select ay agad na nag-a-apply ng source properties — walang confirmation step.
- Sumusunod ang area selection sa standard rules: mag-drag pa**kanan** para sa strict selection (fully enclosed), mag-drag pa**kaliwa** para sa crossing selection (anumang intersection).
- Hindi pinapansin ang pag-click sa source entity bilang target.
- Para sa mga entity na may text (**Text**, **Dimensions**, **Multileaders**), text height lang ang kinokopya — hindi tinu-tugma ang font, bold, italic, at iba pang text style settings.

## Kaugnay na commands

- [LayerMatch](../layer-match/) — ilipat ang mga napiling entity sa parehong layer ng source (layer property lang)
- [LayerMakeCurrent](../layer-make-current/) — itakda ang kasalukuyang drawing layer mula sa isang na-click na entity
