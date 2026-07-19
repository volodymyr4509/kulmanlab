---
title: Grid & Snap — I-align ang mga Drawing sa Regular na Grid
description: Ang Grid at Snap toggle sa KulmanLab CAD ay nag-o-overlay ng reference grid sa canvas at nagla-lock sa galaw ng cursor papunta sa mga grid point. Awtomatikong umaadapt ang grid spacing sa kasalukuyang zoom level para laging magpakita ng round na model values.
keywords: [CAD grid, mag-snap sa grid, grid spacing, mga tulong sa pagguhit, kulmanlab, grid dots, orthogonal snap]
group: interface
order: 1
---

# Grid & Snap

May dalawang toggle button sa control bar na nagbibigay-daan sa iyo na mag-overlay ng reference grid at i-lock ang cursor sa mga intersection nito habang gumuguhit.

| Button | Ano ang ginagawa nito |
|--------|-------------|
| **Grid** | Nagpapakita ng visual na dot o line grid sa canvas |
| **Snap** | Nagla-lock sa cursor papunta sa pinakamalapit na grid point kapag walang mas malapit na geometry snap |

Independiyente ang dalawang toggle — puwede mong ipakita ang grid nang walang snapping, mag-snap nang walang ipinapakitang grid, o gamitin ang dalawa nang sabay.

## Pag-enable ng Grid at Snap

I-click ang **Grid** o **Snap** sa control bar toolbar. Naka-highlight ang active state. Napapanatili ang mga setting sa mga susunod na session.

Kapag naka-enable ang **Snap**, awtomatikong nagpapalit ang display ng grid mula sa lines papunta sa **dots** — minamarkahan ng mga dots ang eksaktong mga punto kung saan mag-s-snap ang cursor.

## Adaptive na Grid Spacing

Awtomatikong nag-a-adjust ang grid spacing habang nag-zo-zoom ka para laging komportable ang layo ng mga grid line sa screen (~40 px). Ang step ay palaging "magandang" numero — multiple ng 1, 2, o 5 sa anumang power of ten:

| Halimbawang zoom / model scale | Grid step |
|---------------------------|-----------|
| Naka-zoom out (malaking area) | 100, 500, 1000 … |
| Katamtamang zoom | 10, 20, 50 … |
| Naka-zoom in (fine detail) | 1, 2, 5 … |
| Napakalapit | 0.1, 0.2, 0.5 … |

Ibig sabihin nito, bawat snap point ay napapadpad sa round na coordinate sa model space — walang naiipong floating-point offset.

## Snap priority

**Palaging mas prayoridad ang endpoint at intersection snap kaysa sa grid.** Mag-s-snap lang ang cursor sa grid point kapag wala itong kalapit na geometry snap candidate (endpoint, midpoint, center, o intersection).

Ibig sabihin, puwede kang gumuhit nang naka-enable ang snap-to-grid at mag-snap pa rin nang tumpak sa umiiral na geometry kapag lumapit nang sapat ang cursor dito. Ang grid ay fallback lang, hindi override.

## Layout mode

- **Model space** — pinupuno ng mga dots o lines ang buong visible na canvas area.
- **Layout (paper) space** — naka-clip ang mga dots sa paper rectangle at hindi lumalampas dito.
- **Sa loob ng viewport** — sinusunod ng grid ang model coordinate system sa scale ng viewport, kaya naka-align ang mga dots sa parehong model units anuman ang viewport magnification.

## Karaniwang Workflow

1. I-on ang **Grid** at **Snap** bago simulan ang drawing na nangangailangan ng regular na spacing.
2. Mag-zoom sa level kung saan tumutugma ang grid step sa gusto mong increment (hal. mag-zoom hanggang 10 units ang layo ng mga dots).
3. Gumuhit — awtomatikong mag-s-snap ang cursor sa mga grid point. Normal pa ring mag-s-snap sa umiiral na geometry kapag malapit ka rito.
4. I-off ang **Snap** kapag kailangan mo ng malayang galaw ng cursor o gusto mong mag-snap lang sa geometry.
