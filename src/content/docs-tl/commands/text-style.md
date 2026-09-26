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
| Pangalan | Natatanging pangalan; hindi mapapalitan ang `Standard` |
| Font / Taas | Typeface at takdang taas; `0` = itinatakda bawat teksto |
| Makapal / Pahilig | Magkahiwalay na formatting switch |
| Pagitan ng linya | Espasyo sa pagitan ng mga linya |
| Pahalang na hanay | Kaliwa, gitna, kanan o pantay sa magkabilang gilid |
| Kuwadro | Parihabang kuwadro sa paligid ng bagong teksto |

Kinokopya ng **Bago** ang napiling estilo. Hindi matatanggal ng **Burahin** ang `Standard` o ang kasalukuyang estilo. Ang **Gawing kasalukuyan** ay para lamang sa tekstong gagawin pagkatapos; hindi nagbabago ang dati nang teksto. Kapag blangko, doble o hindi tanggap sa DXF ang pangalan, hindi magagamit ang **OK**. Nakatago ang na-import na annotative styles ngunit napapanatili ang datos ng mga ito.

## Pag-save at DXF

Sine-save ng **OK** ang mga pagbabago; itinatapon naman ng **Isara** o `Escape` ang mga ito. Gamitin ang `↑` at `↓` upang lumipat sa listahan. Bahagi ng DXF text style ang pangalan, mga font file, taas, kapal, pahilig at annotative flag. Ang kuwadro, pagitan ng linya at paghahanay ay mga default ng bawat teksto sa KulmanLab, hindi mga field ng talahanayang STYLE.

Tingnan din ang [Text](../text/), [FontManager](../font-manager/) at [MatchProperties](../match-properties/).
