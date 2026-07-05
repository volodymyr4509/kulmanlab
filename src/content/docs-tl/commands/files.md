---
sidebar_position: 3
title: Files — Recent Files Panel sa KulmanLab CAD
description: Binubuksan ng Files command ang Recent Files panel — mag-browse ng lahat ng drawing na naka-save sa iyong browser, i-restore ang alinman sa mga ito sa canvas, o tanggalin ang mga hindi mo na kailangan.
keywords: [recent files CAD, file history browser CAD, i-restore ang drawing, buksan muli ang DXF, browser storage CAD, KulmanLab files, mga saved drawing, IndexedDB CAD, pamahalaan ang mga drawing]
---

# Files

Binubuksan ng **Files** command ang **Recent Files** panel — isang listahan ng lahat ng drawing na na-save sa local storage ng iyong browser. Gamitin ito para buksan muli ang isang naunang drawing o alisin ang mga file na hindi mo na kailangan.

## Paano buksan ang Recent Files panel

I-click ang **Files** toolbar button (history icon) sa File panel sa tuktok ng screen. Nagbubukas ang panel sa kaliwang bahagi ng canvas.

## Recent Files panel

Ang bawat entry sa listahan ay nagpapakita ng pangalan ng file at dalawang action button:

| Button | Aksyon |
|--------|--------|
| ✓ **Restore** | I-load ang drawing sa canvas — pinapalitan ang kasalukuyang content |
| ✕ **Delete** | Tanggalin nang permanente ang file mula sa browser storage |

Kung wala pang na-save na file, ipinapakita ng panel ang "No files saved".

## Paano naka-store ang mga file

Sino-save ng KulmanLab ang mga drawing sa **IndexedDB** — isang persistent na in-browser database. Ibig sabihin nito:

- Nananatili ang mga file kahit mag-reload ang page o mag-restart ang browser.
- Naka-store ang mga file **lokal sa iyong device** — hindi ito ina-upload sa anumang server.
- Ang bawat browser at device ay may sariling independiyenteng storage. Ang isang drawing na na-save sa Chrome sa isang computer ay hindi available sa Firefox o sa ibang makina.
- Ang pag-clear ng site data ng browser ay magbubura sa lahat ng saved files.

## Awtomatikong pag-load ng file sa startup

Kapag binuksan mo ang KulmanLab CAD, awtomatikong nilo-load ng app ang **pinakahuling binagong file** mula sa storage. Hindi mo na kailangang manu-manong buksan ito mula sa Files panel sa bawat pagkakataon.

## Pamamahala ng storage

Walang fixed na limitasyon sa bilang ng mga drawing na puwede mong i-save, ngunit finite ang browser storage. Kung mapapansin mo ang mga babala tungkol sa storage, tanggalin ang mga mas lumang file mula sa Files panel.

Para tanggalin ang lahat ng saved drawing nang sabay-sabay, gamitin ang [WipeStorage](../wipestorage/) command.

## Mga pangalan ng file at versioning

Ang bawat file ay may timestamp sa pangalan nito (hal. `myplan_May22_14:30:00.dxf`). Awtomatikong idinadagdag ang timestamp na ito kapag [nag-import](../import/) ka ng file, tinitiyak na ang muling pag-import ng parehong source file ay gagawa ng bagong entry sa halip na i-overwrite ang naunang version.

## Kaugnay na commands

- [Import](../import/) — i-load ang isang drawing mula sa iyong file system patungo sa browser storage
- [Export](../export/) — i-download ang isang drawing patungo sa iyong file system
- [New File](../new-file/) — simulan ang isang blangkong drawing (awtomatiko ring na-save)
- [WipeStorage](../wipestorage/) — burahin ang lahat ng saved files mula sa browser storage
