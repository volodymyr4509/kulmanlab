---
title: Utos na EstiloNgTeksto — Pamahalaan ang mga estilo ng teksto
description: Gumawa ng mga estilo ng tekstong CAD na may font, taas, kapal, pahilig, pagitan ng linya, hanay at kuwadro.
keywords: [estilo ng teksto CAD, font ng CAD, kuwadro ng teksto, paghahanay ng teksto, estilo ng DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Binubuksan ng utos na `EstiloNgTeksto` ang tagapamahala ng estilo. Gumawa ng mga estilong may pangalan, baguhin ang kanilang mga default, at piliin ang *kasalukuyang* estilo. Kinokopya ng bawat bagong [Teksto](../text/) ang mga setting ng kasalukuyang estilo sa paggawa nito.

## Paggamit sa tagapamahala

I-type ang `EstiloNgTeksto` o i-click ang **Estilo ng teksto** sa panel ng anotasyon. Tinutukoy ng ✓ ang kasalukuyang estilo; i-double-click ang isang hilera upang gawin itong kasalukuyan.

| Field | Gamit |
|---|---|
| Palitan ang pangalan | Gamitin ang lapis sa tabi ng pangalan upang i-edit ito sa listahan; hindi mapapalitan ang `Standard`. |
| Font / Taas | Typeface at kinakailangang positibong taas. Ang sero o negatibong halaga ay nagiging `1`; halaga lang na higit sa `0` ang tinatanggap. |
| Makapal / Pahilig | Magkahiwalay na formatting switch |
| Pagitan ng linya | Espasyo sa pagitan ng mga linya |
| Pahalang na hanay | Kaliwa, gitna, kanan o pantay sa magkabilang gilid |
| Kuwadro | Parihabang kuwadro sa paligid ng bagong teksto |

Ginagamit ng preview ang kaparehong renderer ng canvas at nagpapakita ng dalawang linya. Agad na nagbabago ang font, taas, kapal, pahilig, kuwadro, pagitan ng linya at paghahanay; ipinapakita ng bilang ang fit zoom. Ang bagong estilo ay **kaliwa** ang default na hanay.

Kinokopya ng **Bago** ang napiling estilo. Hindi matatanggal ng **Burahin** ang `Standard` o ang kasalukuyang estilo. Ang **Gawing kasalukuyan** ay para lamang sa tekstong gagawin pagkatapos; hindi nagbabago ang dati nang teksto. Kapag blangko, doble o hindi tanggap sa DXF ang pangalan, hindi magagamit ang **OK**. Nakatago ang na-import na annotative styles ngunit napapanatili ang datos ng mga ito.

## Pag-save at DXF

Pinapanatili sa DXF text styles ang pangalan, font files, bold, italic, at annotative flag. Isinusulat ng KulmanLab ang STYLE group `40` bilang `0` (variable height) at ang huling height sa group `42`; kaya hindi pinapalitan ng fixed STYLE height ang sariling text height ng dimension style. KulmanLab defaults per text ang frame, line spacing, at horizontal alignment, hindi DXF STYLE table fields.
