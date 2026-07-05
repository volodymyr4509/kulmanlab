---
sidebar_position: 2
title: "Zoom In Command — I-magnify ang Viewport nang 1.5× Bawat Step sa KulmanLab CAD"
description: "Pinaparami ng Zoom In command ang kasalukuyang zoom level nang 1.5× at agad na magsasara. Naka-center sa midpoint ng viewport. Zoom range na 0.01–10,000. Gamitin ang scroll wheel para mag-zoom papunta sa cursor sa halip."
keywords: [CAD zoom in, i-magnify ang viewport, zoom command CAD, 1.5x zoom step, kulmanlab]
---

# Zoom In

Pinaparami ng `zoomin` command ang kasalukuyang zoom level nang **1.5×** at agad na magsasara, naka-center sa midpoint ng viewport. Ito ang toolbar equivalent ng isang scroll-wheel tick na naka-zoom papunta sa center ng screen sa halip na sa cursor.

## Pag-zoom In

I-click ang **Zoom In** button sa toolbar o i-type ang `zoomin` sa terminal. Agad na naa-apply ang zoom at magsasara ang command — walang kailangang i-click sa canvas.

## Paano Gumagana ang 1.5× Step

| Kasalukuyang zoom | Pagkatapos ng isang Zoom In |
|-------------|------------------|
| 1.00× | 1.50× |
| 1.50× | 2.25× |
| 10.00× | 15.00× |
| 6,667× | 10,000× (naka-cap) |

Palaging ipinapakita ang zoom level sa **kanang-ibabang sulok** ng canvas sa tabi ng `zoom` label. Ang upper limit ay **10,000×**; wala nang mangyayari sa mga susunod na step.

## Toolbar Zoom-In kumpara sa Scroll Wheel

| | Zoom In button | Scroll wheel |
|---|--------------|-------------|
| Center ng zoom | Midpoint ng viewport | Posisyon ng cursor |
| Laki ng step | 1.5× bawat click | ~1.1× bawat tick |
| Kailangan ba ng activation | Hindi | Hindi — laging gumagana |
| Pinakamainam para sa | Coarse na navigation | Precise, naka-target sa cursor na zoom |

## Keyboard Reference

Walang keyboard shortcut para sa command na ito. Gamitin sa halip ang scroll wheel — gumagana ito anumang oras nang hindi kinakailangang i-activate ang anumang command.

## Mga Kaugnay na View Command

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Hinahati ang zoom nang 1.5× bawat step |
| [Fit](../fit/) | Nire-reset ang zoom para makita ang lahat ng entity |
| [Pan](../pan/) | Inililipat ang viewport nang hindi nag-zzoom |
