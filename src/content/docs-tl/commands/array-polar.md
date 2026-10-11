---
title: "ArrayPolar Command — Kopyahin ang mga bagay sa paligid ng gitna sa KulmanLab CAD"
description: "Kinokopya ng ArrayPolar command ang mga napiling bagay sa paligid ng isang gitnang punto — takdang bilang ng item na nakakalat sa buong ikot o bahagi nito, na may mga kopyang umiikot habang nagpapaligid o nagpapanatili ng sarili nilang oryentasyon."
keywords: ["CAD polar array", "pabilog na pattern CAD", "kopyahin ang mga bagay sa paligid ng punto CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Gumagawa ang `ArrayPolar` command ng mga kopya ng mga napiling bagay sa paligid ng gitnang punto, pantay na nakakalat sa buong ikot o bahagi nito. Ang orihinal ang unang item; bawat ibang item ay kopyang iniikot sa paligid ng gitna — o inilipat lang sa paligid nito, kung i-off mo ang Rotate.

## Paggawa ng polar array

1. Piliin ang mga bagay, pagkatapos ay i-type ang `arraypolar` sa terminal o i-click ang **Array Polar** button sa toolbar. Kapag sinimulan nang walang napili, hihilingin muna nitong piliin mo sila — pindutin ang **Enter** o **Space** para kumpirmahin.
2. **I-click ang gitna** na paiikutan ng mga kopya, o mag-type ng `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. Suriin ang array. Live na pino-preview ang lahat ng kopya, at ipinapakita ng terminal ang `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — pindutin ang letra ng opsyon para baguhin ito.
4. Pindutin ang **Enter** o **Space** para gawin ang mga kopya. Nananatili ang mga orihinal kung nasaan sila at nabubura ang pagpili.

## Mga opsyon

| Opsyon | Key | Epekto |
|---|---|---|
| Items | `I` | Ilan ang item, kasama ang orihinal — buong numero mula 2 hanggang 1024. Nagsisimula sa 6. |
| Angle | `A` | Digri mula sa isang item patungo sa susunod, pakaliwa; ang negatibong anggulo ay pakanan. Hanggang 180°. |
| Fill | `F` | Digri mula sa unang item hanggang sa huli. Ang 360 (default) ay buong ikot; ang mas maliit na numero ay nagkakalat ng mga item sa bahagi nito. Ang negatibo ay pakanan. Hanggang 360°. |
| Rotate | `R` | On (default): umiikot ang bawat kopya habang nagpapaligid. Off: inililipat ang bawat kopya sa puwesto nito at nakaharap sa parehong direksyon ng orihinal. Agad na nagpapalit — walang numerong ita-type. |

- Ang Angle at Fill ay dalawang paraan ng pagsasabi ng iisang bagay, kaya ang pagbabago sa isa ay nire-restate ang isa pa. Sa buong ikot, humihinto ang huling item isang hakbang bago ang una; sa bahagi ng ikot, lumalapag ito eksakto sa fill angle.
- Para magbago ng numero, pindutin ang letra ng opsyon nito. Naka-prefill ang prompt ng kasalukuyang halaga — mag-type para palitan ito, pagkatapos ay pindutin ang **Enter** o **Space**; ang pagkumpirma nang walang pagbabago ay iiwan ang array gaya ng dati.
- Buong numero lang ang tinatanggap ng Items; decimal at nangunguna na `-` para sa pakanan ang tinatanggap ng Angle at Fill. Tinatanggihan ang anggulo o fill na 0, gayundin ang anggulong higit sa 180° o fill na higit sa 360° — sinasabi ng terminal kung bakit.
- Ang Angle na masyadong maliit para magkasya ang lahat ng item ay nag-aalis ng mga walang espasyo, at iuulat ng terminal ang bagong bilang.
- Gumagana sa bawat uri ng entity: ang bawat kopya ay ang orihinal na iniikot sa paligid ng gitna, o inilipat, eksakto gaya ng gagawin ng [Rotate](../rotate/) at [Move](../move/).

## Sanggunian sa keyboard

| Key | Aksyon |
|---|---|
| `Enter` / `Space` | Kumpirmahin ang pagpili, array, o na-type na numero |
| `I` `A` `F` `R` | Baguhin ang Items, Angle, o Fill sa pag-type ng numero; i-toggle ang Rotate |
| `0`–`9`, `.`, `-` | I-type ang numero (`.` at `-` para lang sa Angle at Fill, `-` muna) |
| `Backspace` | Burahin ang huling na-type na character |
| `Escape` | Kanselahin |
