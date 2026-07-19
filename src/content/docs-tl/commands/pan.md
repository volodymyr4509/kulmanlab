---
title: "Pan Command — Click-and-Drag na Pag-navigate sa Viewport"
description: "Ang Pan command ay pumapasok sa isang persistent na drag-to-scroll mode. I-click at i-drag ang kahit saan sa canvas para ilipat ang view nang hindi binabago ang zoom level. Gumagana ang middle-click drag anumang oras nang hindi kinakailangang i-activate ang Pan."
keywords: [CAD pan viewport, pan command, i-drag para mag-navigate, canvas scroll CAD, viewport navigation, kulmanlab]
group: navigate
order: 1
---

# Pan

Pumapasok ang `pan` command sa isang persistent na drag-to-scroll mode — i-click at i-drag ang kahit saan sa canvas para ilipat ang view. Hindi nagbabago ang zoom level. Nananatiling aktibo ang Pan mode hanggang pindutin mo ang `Escape`, kaya puwede kang mag-drag nang paulit-ulit sa isang activation.

## Pag-pan sa View

1. I-type ang `pan` sa terminal o i-click ang **Pan** button sa toolbar.
2. **I-click at i-drag** ang kahit saan sa canvas para ilipat ang view.
3. Bitawan at i-drag ulit kung ilang beses mang kailangan.
4. Pindutin ang `Escape` para lumabas sa pan mode.

## Middle-Click Drag — Pag-pan nang Hindi Ina-activate ang Command

Ang pinakamabilis na paraan para mag-pan: **hawakan ang middle mouse button at i-drag** anumang oras, kahit may ibang aktibong command. Hindi kailangan ng pag-activate ng command. Kapag binitawan ang middle button, babalik ka sa dating estado.

## Pan kumpara sa Zoom Control

| Aksyon | Epekto | Kailangan ba ng Pan mode? |
|--------|--------|-------------------|
| Left-click drag (Pan mode) | Inililipat ang viewport | Oo |
| Middle-click drag | Inililipat ang viewport | Hindi — laging gumagana |
| Scroll wheel | Nag-zzoom papunta sa cursor | Hindi — laging gumagana |
| Double-click ng middle button | Fit sa lahat ng entity | Hindi — laging gumagana |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Nag-step ng zoom nang 1.5× | Hindi |
| [Fit](../fit/) | Fit ang lahat ng entity sa view | Hindi |

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Escape` | Lumabas sa pan mode |

## Mga Tip

- Gamitin ang scroll wheel para mag-zoom papunta sa target area, tapos i-pan para i-fine-tune ang posisyon.
- Ang **pag-double-click sa middle mouse button** ay agad na nagpi-trigger ng [Fit](../fit/) — ang pinakamabilis na paraan para i-reset ang nawalang view.
- Kung nasa gitna ka ng command (hal., naglalagay ng line endpoint), mag-middle-click drag para mag-pan nang hindi kinakansela ang command.
