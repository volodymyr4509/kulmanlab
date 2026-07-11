---
title: Wipe Storage Command — Burahin ang Lahat ng Browser Data sa KulmanLab CAD
description: Permanenteng binubura ng wipestorage command ang lahat ng file, layer, linetype, at undo history na naka-save sa browser. Kailangang i-type ang YES para kumpirmahin. Gamitin kapag nire-reset ang isang sirang o overfilled na local database.
keywords: [CAD wipe storage, burahin ang browser data CAD, i-reset ang CAD app, tanggalin ang local files CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

Permanenteng binubura ng `wipestorage` command ang **lahat ng data na naka-store sa browser** para sa KulmanLab CAD — bawat saved file, layer at linetype table, at undo history. Awtomatikong nag-re-reload ang page pagkatapos nito.

:::danger Hindi na maibabalik
Hindi na maaaring bawiin ang aksyong ito. Tinatanggal ang lahat ng file na naka-store sa browser. I-export muna ang anumang drawing na gusto mong panatilihin bilang `.json` o `.dxf` files bago patakbuhin ang command na ito.
:::

## Kailan ito gagamitin

- Sira ang browser storage at nabibigo ang app na mag-load o mag-save ng mga file.
- Gusto mong ganap na i-reset ang app sa isang malinis na estado.
- Naglilipat ka ng browser o device at hindi mo na kailangan ang local na kopya.

## Paano ito patakbuhin

1. I-type ang `wipestorage` sa terminal at pindutin ang **Enter**.
2. Ipoprompt ng terminal: *Wipe all browser local storage? Type YES to confirm*
3. I-type ang `YES` (anumang capitalisation) at pindutin ang **Enter**.

Tinatanggal ng app ang database at nire-reload ang page. Kung mag-type ka ng iba maliban sa `YES` at pindutin ang **Enter**, o pindutin ang **Escape**, kinakansela ang command at walang tatanggalin.

## Ano ang tatanggalin

| Data | Tatanggalin |
|------|---------|
| Lahat ng file na naka-save sa browser | Oo |
| Layer at linetype tables para sa bawat file | Oo |
| Undo / redo history para sa bawat file | Oo |

Ang data lang na naka-store nang lokal sa **browser na ito** ang maaapektuhan. Ang mga file na na-export mo na bilang `.json` o `.dxf` ay hindi maaapektuhan.
