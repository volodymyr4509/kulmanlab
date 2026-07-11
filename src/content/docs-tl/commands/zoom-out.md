---
title: "Zoom Out Command — Bawasan ang Zoom ng Viewport nang 1.5× Bawat Step sa KulmanLab CAD"
description: "Hinahati ng Zoom Out command ang kasalukuyang zoom level nang 1.5× at agad na magsasara. Naka-center sa midpoint ng viewport. Gamitin ang scroll wheel para mag-zoom out papunta sa cursor para sa mas mainam na control."
keywords: [CAD zoom out, bawasan ang viewport zoom, zoom out command, overview CAD, 1.5x zoom step, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Hinahati ng `zoomout` command ang kasalukuyang zoom level nang **1.5×** (katumbas ng pagpaparami nang ~0.667) at agad na magsasara, naka-center sa midpoint ng viewport. Ito ang kabaligtaran ng [Zoom In](../zoom-in/).

## Pag-zoom Out

I-click ang **Zoom Out** button sa toolbar o i-type ang `zoomout` sa terminal. Agad na naa-apply ang zoom at magsasara ang command — walang kailangang i-click sa canvas.

## Paano Gumagana ang 1.5× Step

| Kasalukuyang zoom | Pagkatapos ng isang Zoom Out |
|-------------|-------------------|
| 1.50× | 1.00× |
| 2.25× | 1.50× |
| 10.00× | 6.67× |
| 0.015× | 0.01× (naka-floor) |

Palaging ipinapakita ang zoom level sa **kanang-ibabang sulok** ng canvas. Ang lower limit ay **0.01×**; wala nang mangyayari sa mga susunod na step.

## Toolbar Zoom-Out kumpara sa Scroll Wheel

| | Zoom Out button | Scroll wheel |
|---|----------------|-------------|
| Center ng zoom | Midpoint ng viewport | Posisyon ng cursor |
| Laki ng step | 1.5× bawat click | ~1.1× bawat tick |
| Kailangan ba ng activation | Hindi | Hindi — laging gumagana |
| Pinakamainam para sa | Pag-step palayo para makita ang mas malawak na context | Smooth, cursor-anchored na zoom-out |

## Keyboard Reference

Walang keyboard shortcut para sa command na ito. Gamitin sa halip ang scroll wheel — gumagana ito anumang oras nang hindi kinakailangang i-activate ang anumang command.

## Mga Kaugnay na View Command

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Zoom In](../zoom-in/) | Pinaparami ang zoom nang 1.5× bawat step |
| [Fit](../fit/) | Nire-reset ang zoom para makita ang lahat ng entity |
| [Pan](../pan/) | Inililipat ang viewport nang hindi nag-zzoom |
