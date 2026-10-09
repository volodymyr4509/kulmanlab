---
title: Import — Buksan ang mga DXF o JSON File sa KulmanLab CAD
description: Gamitin ang Import command para buksan ang mga DXF o KulmanLab JSON file sa KulmanLab CAD. Sinusuportahan ang lines, circles, arcs, polylines, splines, text, dimensions, at leaders.
keywords: [i-import ang DXF file, buksan ang DXF sa browser, i-import ang CAD file online, buksan ang DXF file, DXF viewer browser, i-import ang JSON CAD, KulmanLab import, libreng CAD DXF viewer, i-load ang drawing, DXF papunta sa browser]
group: file
order: 1
---

# Import

Ino-load ng **Import** command ang isang umiiral na drawing mula sa iyong local file system patungo sa KulmanLab CAD. Parehong sinusuportahan ang standard na **DXF** format at ang sariling **JSON** format ng KulmanLab.

## Paano mag-import ng file

1. I-click ang **Import** toolbar button (folder icon) sa File panel sa tuktok ng screen.
2. Magbubukas ang file picker ng iyong browser. Mag-navigate patungo sa iyong drawing file at piliin ito.
3. Agad na mag-lo-load ang drawing sa canvas. Awtomatikong nag-a-adjust ang viewport para makasya ang lahat ng entities.

Bilang alternatibo, puwede mo ring i-drag at i-drop ang isang file nang direkta sa canvas.

## Mga sinusuportahang file format

| Format | Extension | Kailan gagamitin |
|--------|-----------|-------------------|
| **DXF** | `.dxf` | Mga drawing mula sa FreeCAD, LibreCAD, o iba pang CAD tools |
| **JSON** *(native)* | `.json` | Mga drawing na dati nang na-save mula sa KulmanLab CAD — full fidelity |

## Ano ang na-i-import mula sa DXF

Ini-parse ng KulmanLab ang mga sumusunod na DXF entity types:

| Entity type | DXF code | Mga tala |
|-------------|----------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |
| Hatch | `HATCH` | Nababasa ang pangalan, scale, at angle ng pattern; ang pangalan na wala sa pattern library mo ay babalik sa ANSI31. Tingnan ang [Hatch](../hatch/) |

Ini-import din ang layer definitions at linetype tables mula sa DXF file kapag mayroon.

Ang mga entity na gumagamit ng unsupported DXF types ay tahimik na nili-skip — nag-lo-load pa rin ang natitirang bahagi ng drawing.

## Pangalan ng file at storage

Pinapanatili ng na-import na file ang orihinal nitong pangalan. Kung ang pangalang iyon ay ginagamit na ng ibang naka-save na drawing, awtomatikong idinaragdag ang isang suffix na estilong Finder/Explorer (`myplan (2)`, `myplan (3)`, …) para hindi na ma-overwrite ang umiiral na entry. Maaari mong palitan ang pangalan ng file pagkatapos mula sa [File Manager](../file-manager/#pagpapalit-ng-pangalan-ng-file).

Awtomatikong na-save ang drawing sa browser storage (IndexedDB) pagkatapos ng import, kaya lilitaw ito sa [File Manager](../file-manager/) panel at mananatili kahit mag-reload ang page.

## Ano ang mangyayari sa kasalukuyang drawing

Pinapalitan ng pag-import ang kasalukuyang canvas. Walang merge o append. Kung mayroon kang unsaved changes, [i-export](../export-manager/) muna ang kasalukuyang drawing.

## Sa startup

Awtomatikong binubuksan muli ng KulmanLab ang huling na-edit na file kapag nag-load ang page. Kung walang saved files, ang default na sample drawing ang lo-load-in.

## Troubleshooting

| Problema | Malamang na sanhi | Ayos |
|---------|-------------|-----|
| Walang laman ang canvas pagkatapos mag-import | Gumagamit ang DXF entities ng unsupported types (hal. INSERT) | Nili-skip ang mga entity — inililista ng terminal ang bawat nilaktawang type kasama ang bilang, halimbawa `Could not read INSERT: 12`. Ang file na hindi talaga valid na guhit ay nag-uulat ng `Could not read <file>: not a valid drawing file` |
| Walang ginagawa ang Import button | Na-block ng browser ang file picker | I-click muli ang button; kailangan ng ilang browser ng bagong user gesture |
| Mali ang itsura ng Dimensions | DXF mula sa tool na sumusulat ng non-standard dimension geometry | I-export muli mula sa source app gamit ang kasalukuyang bersyon ng DXF |

## Kaugnay na commands

- [Export Manager](../export-manager/) — i-download ang kasalukuyang drawing bilang DXF o JSON
- [File Manager](../file-manager/) — mag-browse at mag-restore ng mga drawing na naka-save sa browser
- [New File](../new-file/) — simulan ang isang blangkong drawing
