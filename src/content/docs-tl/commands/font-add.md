---
title: FontAdd — I-upload ang Custom TTF Font Mula sa Terminal
description: Binubuksan ng FontAdd command ang file picker ng system para mag-upload ng .ttf font, nang hindi muna binubuksan ang Font Manager dialog. Ito ang parehong upload na ini-trigger ng "Add Font" button sa Font Manager, available dito bilang sarili nitong terminal command.
keywords: [font add command, fontadd command, upload ttf terminal, custom font CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Binubuksan ng `MagdagdagFont` command ang file picker ng system para mag-upload ng custom `.ttf` font, nang hindi muna binubuksan ang [Font Manager](../font-manager/) dialog. Ito ang parehong upload na ini-trigger ng **Add Font** button sa Font Manager — ang FontAdd ay direktang daan lang papunta doon mula sa terminal.

## Pag-upload ng font

1. I-type ang `MagdagdagFont` sa terminal, o i-click ang **Add Font** sa footer ng [Font Manager](../font-manager/) dialog.
2. Pumili ng `.ttf` file sa file picker ng system. TrueType fonts lang ang suportado — hindi suportado ang `.otf` at `.woff`/`.woff2`.

Natatapos ang command sa sandaling mabuksan ang file picker — walang susunod na click o terminal input. Naka-register ang font at lalabas sa grupong **User** sa sandaling mapili ang file.

## Ano ang nangyayari sa pag-upload

- Ang pangalan ng file (walang extension) ang magiging pangalan ng font. Ang pag-upload ng `MyFont.ttf` ay magdaragdag ng font na pinangalanang `MyFont`.
- Ang pag-upload ng file na ang pangalan ay tugma sa isang umiiral nang custom font ay **papalitan** ito.
- Permanenteng naka-save ang font sa browser (IndexedDB) at awtomatikong nire-reload sa susunod na buksan mo ang KulmanLab CAD — hindi ito nakatali sa kasalukuyang drawing.

## Keyboard reference

Walang sariling keyboard interaction ang FontAdd — ang buong command ay binubuo lang ng native na file picker dialog ng browser. Ang pag-cancel sa dialog na iyon (o hindi pagpili ng file) ay hindi magbabago sa listahan ng font.

## Kaugnay na commands

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Font Manager](../font-manager/) | I-browse, i-preview, piliin, at alisin ang mga font, kasama ang sarili mong mga upload |
| [Text](../text/) | Naglalagay ng mga text label na kinakapitan ng mga pinili sa font |
