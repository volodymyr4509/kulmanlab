---
title: KulmanLab CAD — Sanggunian ng mga Command
description: Sanggunian ng mga command sa KulmanLab CAD — kumpletong gabay sa bawat command para sa pagguhit, pag-edit, markup, layer, pagsukat, at file sa KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, mga command sa CAD, libreng CAD sa browser, DXF editor online, mga command sa pagguhit, kulmanlab commands]
---

# KulmanLab CAD — Sanggunian ng mga Command

Maligayang pagdating sa command reference ng **KulmanLab CAD**. Ang [KulmanLab CAD](https://kulmanlab.com) ay isang libreng browser-based na CAD tool para sa pagguhit, pag-edit, at pag-export ng mga DXF file — walang kailangang i-install. Gamitin ang sidebar para mag-browse sa lahat ng available na command na nakapangkat ayon sa panel.

## Mga Hugis

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Line](./commands/line/) | Gumuhit ng straight na linya sa pagitan ng dalawang punto |
| [Polyline](./commands/polyline/) | Gumuhit ng multi-segment na open path |
| [Rectangle](./commands/rectangle/) | Gumuhit ng axis-aligned na rectangle |
| [Circle](./commands/circle/) | Gumuhit ng circle gamit ang center at radius |
| [Arc](./commands/arc/) | Gumuhit ng arc sa tatlong punto |
| [Ellipse](./commands/ellipse/) | Gumuhit ng ellipse gamit ang center at dalawang axis |
| [Text](./commands/text/) | Maglagay ng text label sa canvas |
| [Spline CV](./commands/spline-cv/) | Gumuhit ng spline sa pamamagitan ng paglalagay ng control vertex |
| [Spline Fit](./commands/spline-fit/) | Gumuhit ng spline na dumadaan sa mga na-click na punto |

## Edit

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Move](./commands/move/) | Ilipat ang mga napiling entity sa bagong posisyon |
| [Copy](./commands/copy/) | Kopyahin ang mga napiling entity sa bagong posisyon |
| [Rotate](./commands/rotate/) | I-rotate ang mga napiling entity sa paligid ng base point |
| [Mirror](./commands/mirror/) | I-mirror ang mga napiling entity sa kabilang panig ng linya |
| [Scale](./commands/scale/) | I-scale ang mga napiling entity mula sa base point |
| [Delete](./commands/delete/) | Alisin ang mga napiling entity sa drawing |
| [Trim](./commands/trim/) | Putulin ang line segment sa mga intersection nito |
| [Extend](./commands/extend/) | Palawigin ang linya hanggang sa pinakamalapit na boundary intersection |
| [Offset](./commands/offset/) | Gumawa ng parallel na kopya ng entity sa tiyak na distansya |
| [Fillet](./commands/fillet/) | I-round ang sulok sa pagitan ng dalawang linya gamit ang tangent arc |
| [Chamfer](./commands/chamfer/) | Gumawa ng straight diagonal na sulok sa pagitan ng dalawang linya o polyline |
| [Undo](./commands/undo/) | I-undo ang huling aksyon |
| [Redo](./commands/redo/) | I-redo ang huling na-undo na aksyon |

## Markup

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Leader](./commands/leader/) | Gumuhit ng multileader annotation na may arrowhead at text |
| [Leader+](./commands/leader-add/) | Magdagdag ng extra na arm sa umiiral na multileader |
| [Leader−](./commands/leader-remove/) | Alisin ang isang arm mula sa umiiral na multileader |
| [Dimension Linear](./commands/dim-linear/) | Magdagdag ng horizontal o vertical na dimension |
| [Dimension Aligned](./commands/dim-aligned/) | Magdagdag ng dimension na naka-align sa dalawang punto |
| [Dimension Continue](./commands/dim-continue/) | Ikadena ang bagong dimension mula sa huling dimension |
| [Dimension Radius](./commands/dim-radius/) | Magdagdag ng radius dimension sa circle o arc |
| [Dimension Diameter](./commands/dim-diameter/) | Magdagdag ng diameter dimension sa circle |
| [Dimension Angular](./commands/dim-angular/) | Magdagdag ng angular dimension sa dalawang linya, arc, o circle |

## Layer

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Itakda ang kasalukuyang layer para tumugma sa layer ng na-click na entity |
| [LayerMatch](./commands/layer-match/) | Baguhin ang layer ng mga napiling entity para tumugma sa layer ng source entity |
| [LayerIsolate](./commands/layer-isolate/) | I-freeze ang lahat ng layer maliban sa mga layer ng napiling entity |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | I-unfreeze ang lahat ng layer sa isang hakbang |

## Mga Layout

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Gumawa ng viewport sa paper layout sa pamamagitan ng pagpili ng dalawang sulok |
| [ViewportCopy](./commands/viewport-copy/) | I-duplicate ang viewport sa bagong posisyon |
| [PageManager](./commands/page-manager/) | I-edit ang paper size at scale para sa aktibong layout |

## Pag-navigate

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Pan](./commands/pan/) | I-click at i-drag para ilipat ang viewport |
| [Zoom In](./commands/zoom-in/) | I-zoom in ang viewport |
| [Zoom Out](./commands/zoom-out/) | I-zoom out ang viewport |
| [Fit](./commands/fit/) | I-fit ang lahat ng entity sa viewport |

## Pagsukat

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Distance](./commands/distance/) | Sukatin ang distansya sa pagitan ng dalawang punto |
| [Angle](./commands/angle/) | Sukatin ang angle sa pagitan ng tatlong punto |

## Estilo

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Kopyahin ang kulay, layer, at iba pang property mula sa isang entity papunta sa iba |

## File

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Import](./commands/import/) | Buksan ang DXF o JSON drawing file |
| [New File](./commands/new-file/) | Simulan ang bagong blangkong drawing |
| [Files](./commands/files/) | Mag-browse at ibalik ang mga kamakailang drawing |
| [Print](./commands/print/) | I-export ang drawing area bilang image o PDF |
| [Export](./commands/export/) | I-download ang drawing bilang DXF o JSON |
| [WipeStorage](./commands/wipestorage/) | Burahin ang lahat ng drawing mula sa browser storage |

## Pagbawi

Kung nag-crash ang app sa bawat startup (halimbawa, pagkatapos gumamit ng napakalaking coordinate), puwede mong burahin ang lahat ng locally stored na data sa pamamagitan ng pagdagdag ng `?reset` sa URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Binubura nito ang lahat mula sa local database ng browser at nagsisimula ng bagong blangkong drawing. Awtomatikong tinatanggal ng `?reset` parameter ang sarili nito sa URL. Gamitin ito bilang huling opsyon kapag hindi ma-access ang [WipeStorage](./commands/wipestorage/) dahil hindi na talaga nag-lo-load ang app.

## Paano Gumagana ang mga Command

Sinusunod ng bawat command ang parehong pattern:

1. **I-activate** — i-click ang toolbar button o i-type ang pangalan ng command sa terminal sa ilalim ng screen.
2. **Sundin ang prompt** — ipinapakita ng terminal kung anong input ang inaasahan sunod.
3. **Tapusin o kanselahin** — karamihan sa mga command ay awtomatikong natatapos pagkatapos ng huling input. Pindutin ang **Escape** anumang oras para kanselahin.

## Pagpili ng mga Object

Maraming edit command (Move, Copy, Rotate, Mirror, Scale, Delete) ang may parehong selection behavior:

- **I-click** ang isang entity para piliin o alisin ito sa pagkakapili.
- **I-drag pakanan** (kaliwa papuntang kanan) para sa strict selection — mapipili lang ang mga entity na buong nasa loob ng box.
- **I-drag pakaliwa** (kanan papuntang kaliwa) para sa crossing selection — mapipili ang anumang entity na sumasalubong sa box.
- Pindutin ang **Enter** o **Space** para kumpirmahin ang selection at magpatuloy sa susunod na hakbang.
