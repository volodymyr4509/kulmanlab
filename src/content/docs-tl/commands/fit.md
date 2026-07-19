---
title: "Fit — I-frame ang Lahat ng Entity sa Viewport sa Isang Click"
description: "Kinakalkula ng Fit command ang bounding box ng lahat ng entity at ina-adjust ang zoom at pan para makita ang bawat entity nang may maliit na margin. Ang double-click ng middle mouse button ay nagpapa-trigger ng Fit nang hindi kailangang i-activate ang command."
keywords: [CAD fit view, zoom to fit, i-frame ang lahat ng entity, fit command CAD, bounding box zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

Kinakalkula ng `fit` command ang bounding box ng lahat ng entity sa drawing at ina-adjust ang zoom level at pan position para makita ang bawat entity nang may maliit na margin. Ito ang pinakamabilis na paraan para mabawi ang nawalang view o mag-orient pagkatapos mag-import ng DXF file.

## Pag-fit ng View

I-click ang **Fit** button sa toolbar o i-type ang `fit` sa terminal. Agad na ina-adjust ang view at magsasara ang command — walang kailangang interaction.

**I-double-click ang middle mouse button** para i-trigger ang parehong Fit operation anumang oras nang hindi kailangang i-activate ang anumang command — ang pinakamabilis na shortcut para i-reset ang nawalang view habang gumagawa.

## Paano Gumagana ang Bounding Box Fit

1. Hinahanap ng Fit ang axis-aligned na bounding box na sumasaklaw sa lahat ng entity (min X, max X, min Y, max Y).
2. Naitatakda ang zoom level para punuin ng mas mataas o mas malapad na dimension ang canvas nang may margin.
3. Naka-center ang view sa midpoint ng bounding box.

| Estado ng drawing | Resulta |
|--------------|--------|
| Mas malapad kaysa mataas | Nalilimita ang zoom ng width |
| Mas mataas kaysa malapad | Nalilimita ang zoom ng height |
| Iisang entity | Fit sa paligid lang ng entity na iyon |
| Walang laman na drawing | Hindi nagbabago ang view |

## Fit kumpara sa Manual Zoom Control

| | Fit | Zoom In / Zoom Out | Scroll Wheel |
|---|-----|--------------------|-------------|
| Naka-center sa | Lahat ng entity | Midpoint ng viewport | Cursor |
| Laki ng step | Automatic (isang beses lang) | 1.5× bawat step | ~1.1× bawat tick |
| Pinakamainam para sa | Pagbawi ng nawalang view, pag-orient pagkatapos mag-import | Pag-step palapit/palayo mula sa center | Precise na zoom na naka-target sa cursor |

## Keyboard Reference

Walang keyboard shortcut para sa command na ito. Gamitin sa halip ang **middle mouse button double-click** shortcut.

## Mga Kaugnay na View Command

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Pan](../pan/) | Inililipat ang viewport nang hindi nag-zzoom |
| [Zoom In](../zoom-in/) | Pinaparami ang zoom nang 1.5× bawat step |
| [Zoom Out](../zoom-out/) | Hinahati ang zoom nang 1.5× bawat step |
