---
title: "Utos na EstiloNgSukat — gumawa at mamahala ng pinangalanang istilo ng sukat"
description: "Gumawa ng CAD dimension styles para sa arrow, extension line, center mark, text, precision, alignment, at DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# EstiloNgSukat

Binubuksan ng utos ang dialog para gumawa, mag-edit, mag-preview, at pumili ng pinangalanang istilo ng sukat. Kinokopya ng bagong linear, aligned, radius, diameter, at angular dimension ang kasalukuyang istilo kapag ginawa; hindi live-linked ang dati nang sukat.

## Buksan ang dialog

I-type ang lokal na utos sa terminal o i-click ang **Dimension Style** sa panel na **Annotate**. Nasa kaliwa ang mga nakikitang istilo; check mark ang kasalukuyan at lapis ang pagpapalit ng pangalan.

## Mga linya at palaso

**Palaso 1 / Palaso 2 · Laki ng palaso · Agwat ng ext. linya · Ekstensyon ng ext. linya · Marka ng sentro · Laki ng marka ng sentro**

Itakda nang hiwalay ang dalawang arrowhead, laki ng arrow, offset at extension ng extension line, at uri at laki ng center mark (`Wala`, `Mark`, o `Lines`).

## Teksto

**Estilo ng teksto · Font · Taas ng teksto · Kuwadro ng teksto · Puwang ng teksto · Kabit ng teksto · Nakahanay na teksto · Katumpakan · Katumpakan ng anggulo**

Kinokontrol ng text section ang mabilisang kopya mula Estilo ng teksto, font, taas, bold, italic, frame, gap, isa sa siyam na attachment position, alignment sa dimension line, at linear/angular precision. Isang beses lang kumokopya ng values ang Estilo ng teksto at hindi ito live link.

Parehong renderer ng canvas ang gamit ng preview. Magpalit sa linear, radius, diameter, at angular sample para suriin ang arrow, center mark, text position, precision, at frame.

## Gumawa at mamahala ng mga istilo

Dinuduplicate ng **Bago** ang napiling istilo. Hindi mapapalitan ang pangalan o mabubura ang `Standard`, at hindi rin mabubura ang kasalukuyang istilo. Dapat natatangi, hindi blangko, at valid sa DXF ang pangalan. Nakatago ngunit napapanatili ang imported annotative styles.

## Itakda ang kasalukuyang istilo

Ginagawang template ng **Itakda bilang kasalukuyan** ang napiling istilo para sa bagong sukat; pareho ang pagpipilian sa Annotate panel. Kinokopya ang values sa paggawa. Minamana naman ng Dimension Continue ang buong anyo ng base dimension.

## I-save o itapon

Sabay na inilalapat ng **OK** ang rename, add, delete, properties, at current style. Itinatapon ng **Close**, pag-click sa background, o `Escape` ang changes.

## Pagkakatugma sa DXF

Nag-iimport at nag-eexport ang KulmanLab ng pinangalanang `DIMSTYLE` records kasama ang magkahiwalay na arrow, extension line, text, precision, center mark, frame, text-style reference, at annotative flag. Sa import, mas mataas ang priyoridad ng entity-specific `DSTYLE` overrides.

Sa export, variable height (`40 = 0`) ang gamit ng referenced `STYLE` at nasa group `42` ang huling height. Hindi nito hinahayaang palitan ng fixed text-style height ang sariling text height ng dimension style.

## Kaugnay na mga utos

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
