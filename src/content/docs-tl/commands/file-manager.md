---
title: File Manager — Thumbnail Grid, Rename & Delete
description: Binubuksan ng File Manager command ang thumbnail grid ng bawat na-save na drawing — i-click ang isang thumbnail para buksan ito, palitan ang pangalan sa lugar, o burahin nang may kumpirmasyon.
keywords: [file manager CAD, recent files CAD, palitan ang pangalan ng drawing, burahin ang drawing, thumbnail grid CAD, i-restore ang drawing, buksan muli ang DXF, browser storage CAD, KulmanLab files, mga saved drawing, IndexedDB CAD, i-back up ang CAD drawing]
group: file
order: 3
---

# File Manager

Binubuksan ng `TagapamahalaNgFile` command ang isang **thumbnail grid** ng bawat drawing na na-save sa local storage ng iyong browser, nakaayos ayon sa huling pagkaka-save ng bawat isa. Gamitin ito para buksan muli ang isang naunang drawing, palitan ang pangalan nito, o burahin ito.

## Pagbukas ng File Manager

- I-type ang `TagapamahalaNgFile` sa terminal, **o**
- I-click ang **File Manager** toolbar button (history icon) sa File panel sa tuktok ng screen.

Nagbubukas ang panel sa kaliwang bahagi ng canvas, at awtomatikong nagsasara sa sandaling magsimula ka ng ibang command o mag-[import](../import/) ng file — kaya hindi ito kailanman naiiwan sa ibabaw ng drawing na hindi pa nito nakalista. Muli itong nagbubukas nang may bagong listahan sa bawat pagkakataon.

## Ang thumbnail grid

Ang bawat na-save na drawing ay isang card na nagpapakita ng live-rendered na thumbnail nito, ang pangalan nito, at kung kailan ito huling na-update. Ang mga thumbnail ay ginagawa sa mismong oras tuwing bubukas ang panel — walang naka-pre-render o naka-store — kaya ang isang card ay nagpapakita ng placeholder icon nang saglit habang ginuguhit ang thumbnail nito. Lumalabas din ang parehong placeholder kung nabigo ang paggawa nito, o kung talagang wala pang entity ang drawing.

| Aksyon | Paano |
|--------|-----|
| **Buksan** ang isang drawing | I-click ang thumbnail nito — pinapalitan ang kasalukuyang laman ng canvas |
| **Palitan ang pangalan** | I-click ang pencil icon, o i-double-click ang pangalan |
| **Burahin** | I-click ang trash icon, pagkatapos ay kumpirmahin |

Kung wala pang na-save na file, ipinapakita ng panel ang "No files saved". Kung mas marami ang file kaysa sa kasya sa isang screen, lumalabas ang **Page 1 of N** na kontrol sa ilalim ng grid.

Ang card ng file na kasalukuyang bukas sa editor ay minamarkahan ng accent-colored na singsing, at **walang delete button** — ang pagbura sa bukas na file ay mag-wa-wipe sa naka-store nitong data habang ipinapakita pa rin ito ng canvas, at ang susunod na pag-edit ay ise-save lang itong muli agad. Available pa rin ang pagpapalit ng pangalan nito.

## Pagbura ng file

Ang pag-click sa trash icon ay hindi agad nagbubura — nag-a-arm ito ng confirmation overlay sa card na iyon ("Delete this file?" na may mga button na **Delete** / **Cancel**), dahil permanente ang pagbura at hindi na maibabalik pa. Ang pag-click sa **Cancel**, pag-click sa trash icon ng ibang card, o pag-click sa ibang bahagi ng card ay nag-aalis sa pending na kumpirmasyon nang hindi nagbubura ng anuman.

## Pagpapalit ng pangalan ng file

I-click ang pencil icon (o i-double-click ang pangalan ng file) para i-edit ito sa lugar, pagkatapos ay pindutin ang **Enter** para kumpirmahin o ang **Escape** para kanselahin. Tinatanggihan ang isang rename kung ang bagong pangalan ay:

- walang laman, o mas mahaba sa 100 character,
- ginagamit na ng ibang na-save na file (case-insensitive),
- nagtatapos sa isang tuldok, o
- isang Windows-reserved na device name tulad ng `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, o `LPT1`–`LPT9`.

Ang mga character na hindi valid sa pangalan ng file (`\ / : * ? " < > |`) ay awtomatikong tinatanggal habang nagta-type ka. Ang pagpapalit ng pangalan ay nagbabago lang ng label — hindi nito naaapektuhan ang posisyon ng drawing sa grid, dahil ito ay nakaayos ayon sa huling pagkaka-save, hindi ayon sa pangalan.

## I-back up ang iyong trabaho — hindi permanente ang browser storage

Sino-save ng KulmanLab ang mga drawing sa **IndexedDB**, isang database na built-in sa iyong browser:

- Naka-store ang mga file **lokal lang sa iyong device** — walang ina-upload sa anumang server.
- Ang bawat browser at device ay may sariling independiyenteng storage. Ang isang drawing na na-save sa Chrome sa isang computer ay hindi lumalabas sa Firefox, o sa ibang makina.
- Ang storage na ito ay **puwedeng mabura nang walang babala** — sa pamamagitan ng pag-clear ng site data o browsing history, pagkaubos ng disk space, paggamit ng private/incognito window, muling pag-install ng browser o OS, o paglipat ng device. Wala sa mga ito ang nagbibigay sa iyo ng pagkakataong mabawi ang nawala.

**Ang tanging maaasahang paraan para mapanatiling ligtas ang isang drawing ay ang [i-export](../export-manager/) ito patungo sa sarili mong storage.** Gamitin ang `.json` (native na format ng KulmanLab) hangga't maaari — pinapanatili nito ang bawat entity nang eksakto; gamitin ang `.dxf` kapag kailangan mo ng compatibility sa ibang CAD tools. Gawin ito para sa anumang mawawalan ka ng loob kung mawala, at bago mag-clear ng browser data, lumipat ng browser o device, o itago ang makina nang matagal.

## Awtomatikong pag-load ng file sa startup

Kapag binuksan mo ang KulmanLab CAD, awtomatikong nilo-load ng app ang **pinakahuling binagong file** mula sa storage. Hindi mo na kailangang manu-manong buksan ito mula sa File Manager sa bawat pagkakataon.

## Pamamahala ng storage

Walang fixed na limitasyon sa bilang ng mga drawing na puwede mong i-save, ngunit finite ang browser storage. Kung mapapansin mo ang mga babala tungkol sa storage, tanggalin ang mga mas lumang file mula sa File Manager — o mas mainam, i-export muna ang mga ito para walang mawala.

Para tanggalin ang lahat ng saved drawing nang sabay-sabay, gamitin ang [WipeStorage](../wipestorage/) command.

## Mga pangalan ng file

Ang mga bagong gawa at na-import na file ay nakakakuha ng plain na pangalan — walang naka-bake na timestamp. Kung ginagamit na ang pangalang iyon, awtomatikong idinaragdag ang isang Finder/Explorer-style na suffix (`plan (2)`, `plan (3)`, …) para walang ma-overwrite. Puwede mo palaging bigyan ang isang file ng mas malinaw na pangalan pagkatapos gamit ang [rename](#pagpapalit-ng-pangalan-ng-file).

## Kaugnay na commands

- [Import](../import/) — i-load ang isang drawing mula sa iyong file system patungo sa browser storage
- [Export Manager](../export-manager/) — i-download ang isang drawing patungo sa iyong file system
- [New File](../new-file/) — simulan ang isang blangkong drawing (awtomatiko ring na-save)
- [WipeStorage](../wipestorage/) — burahin ang lahat ng saved files mula sa browser storage
