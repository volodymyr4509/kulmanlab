---
title: Redo Command — I-apply Muli ang mga Na-undo na Aksyon
description: Ina-apply muli ng Redo command ang huling aksyon na binaligtad ng Undo, na sumusulong sa history stack. Available lang ang Redo pagkatapos ng Undo at kinu-clear ito sa sandaling may bagong drawing action na gagawin.
keywords: [CAD redo command, redo history CAD, i-apply muli ang aksyon CAD, undo redo CAD, browser persistent redo, kulmanlab]
group: edit
order: 14
---

# Redo

Sumusulong ang `redo` command sa undo history, na inilalapat muli ang mga aksyong binaligtad ng [Undo](../undo/). Available lang ang Redo kapag umatras ka gamit ang Undo at wala ka pang ginawang bagong pagbabago.

## Paano Mag-redo

- I-type ang `redo` sa terminal, o
- I-click ang **Redo** button sa toolbar.

Bawat invocation ay ina-apply muli ang isang dating na-undo na aksyon. Ulitin ito para sumulong sa lahat ng available na redo entries.

## Ugali ng Redo Stack

| Detalye | Ugali |
|--------|-----------|
| Available pagkatapos ng | Isa o higit pang hakbang ng [Undo](../undo/) |
| Kinu-clear ng | **Anumang bagong drawing action** — pagdaragdag, pag-edit, o pagtanggal ng entity |
| Storage | Browser, bawat file — nananatili kahit mag-reload ng page (basta walang bagong aksyon na ginawa bago mag-reload) |
| Pinakamataas na depth | Hanggang 20 entries (parehong pool ng Undo) |

Kapag may bagong entity na iginuhit, tinanggal, o binago, kinu-clear ang redo stack at hindi na maibabalik ang mga entry na iyon. Ang mga na-undo lang na aksyon na hindi pa na-supersede ng bagong gawain ang maaaring i-redo.

## Redo kumpara sa Undo

| | Redo | Undo |
|---|------|------|
| Direksyon | Sumusulong sa mga na-undo na entry | Umaatras sa history |
| Available kapag | Pagkatapos ng kahit isang Undo, na walang ginawang bagong aksyon | May kahit isang itinalang aksyon |
| Kinu-clear ng | Anumang bagong drawing action | Wala |

Naka-grey out ang toolbar Redo button kapag walang entry na puwedeng i-redo. Gamitin muna ang [Undo](../undo/) para makagawa ng redo entries.
