---
title: "Point Command — maglagay ng mga punto sa guhit sa KulmanLab CAD"
description: "Naglalagay ang Point command ng punto sa bawat click, na-type na X,Y o distansya sa kahabaan ng naka-lock na direksyon, hanggang sa Enter, Space o Escape. Ang mga punto ay iginuguhit bilang tuldok, dala ang kasalukuyang layer at kulay, at naglalakbay bilang mga DXF POINT entity."
keywords: ["CAD point command", "maglagay ng punto CAD", "DXF POINT entity", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Naglalagay ang `Punto` command ng punto sa bawat pagpili at nananatiling aktibo hanggang pindutin mo ang Enter, Space o Escape. Ang punto ay isang posisyon na walang laki: iginuguhit ito bilang maliit na tuldok at dala ang kasalukuyang layer at kulay. Sine-save ito bilang `POINT` entity.

## Paglalagay ng mga punto

1. I-type ang `Punto` sa terminal o i-click ang **Point**, ang huling button sa Shapes panel.
2. **Mag-click** kung saan mapupunta ang punto, o mag-type ng `X,Y` at pindutin ang **Enter** para sa eksaktong posisyon. Bawat pagpili ay naglalagay ng punto at nilo-log ng terminal ang mga coordinate nito; nananatiling aktibo ang command para sa susunod.
3. O i-lock ang direksyon mula sa isang [vector pin](../../interface/vector-pins/) at mag-type ng distansya — eksaktong ganoon kalayo sa kahabaan nito lalapag ang punto.
4. Pindutin ang **Enter**, **Space** o **Escape** para tapusin. Natatapos lang ng Enter at Space kapag walang tina-type.

## Itsura ng punto

Iginuguhit ang punto bilang tuldok na may radius na 1 px sa bawat zoom level, kaya nananatili itong nakikita kapag nag-zoom out at hindi lumalaki kapag nag-zoom in. Hindi pa nababasa ang point style ng guhit (`$PDMODE` at `$PDSIZE`), kaya tuldok ang bawat punto, anuman ang sabihin ng DXF.

## Pag-edit ng mga punto

May isang grip ang napiling punto, na gumagalaw dito. Kinukuha ng box selection ang punto kapag nasa loob ito ng box, sa anumang direksyon ng drag.

Gumagana ang [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) at [Scale](../scale/) sa mga punto gaya ng sa anumang ibang entity. Ipinapakita ng property window ang Position X at Position Y, pati kulay at layer.

## DXF — POINT entity

Binabasa ang mga punto mula sa DXF at isinusulat dito bilang `POINT` entity na may posisyon, kulay at layer (group code 10/20, 62 at 8), at naglalakbay din sa na-save na JSON. Dati ay nilalaktawan ang mga ito sa import. Inililista ng [Export Manager](../export-manager/) ang Points sa sarili nitong hilera, kaya maaari mo silang ibukod sa export.

---

*Kaugnay: [Line](../line/) para sa parehong coordinate entry, at [Vector Pins](../../interface/vector-pins/) para sa paglalagay ng punto sa itinakdang distansya sa kahabaan ng direksyon.*
