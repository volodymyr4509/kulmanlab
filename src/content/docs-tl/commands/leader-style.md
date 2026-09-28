---
title: Utos na EstiloNgLeader — Pamahalaan ang mga estilo ng leader
description: Gumawa ng mga estilo ng CAD leader na may ulo ng palaso, kabit, puwang, pag-ikot, font, taas at kuwadro ng teksto.
keywords: [estilo ng CAD leader, estilo ng multileader, MLEADERSTYLE, ulo ng palaso CAD, kabit ng teksto, estilo ng DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Binubuksan ng utos na `EstiloNgLeader` ang tagapamahala ng mga estilong may pangalan. Kinokopya ng bawat bagong [Panuro](../leader/) ang mga setting ng *kasalukuyang* estilo sa paggawa nito.

## Pag-edit ng estilo

I-type ang `EstiloNgLeader` o i-click ang **Estilo ng Leader** sa panel ng anotasyon. Tinutukoy ng ✓ ang kasalukuyang estilo; gamitin ang lapis sa tabi ng pangalan upang palitan ito. Agad na nag-a-update ang preview gamit ang kaparehong renderer ng drawing.

| Field | Gamit |
|---|---|
| Kabit ng teksto | Itaas, Gitna, Ibaba o Salungguhit |
| Ulo / Laki ng palaso | Simbolo at laki sa dulo ng bawat braso |
| Puwang ng landing | Espasyo sa pagitan ng landing at teksto |
| Pag-ikot ng teksto | Anggulo ng label sa degrees |
| Estilo ng teksto | Isang beses na kinokopya ang font, taas, kapal at pahilig mula sa [TextStyle](../text-style/) |
| Font / Taas ng teksto | Typeface at taas ng label |
| Makapal / Pahilig | Magkahiwalay na text formatting |
| Kuwadro ng teksto | Parihabang kuwadro sa paligid ng label |

Kinokopya ng **Bago** ang napiling estilo. Hindi maaaring palitan ang pangalan o burahin ang `Standard`; hindi rin maaaring burahin ang kasalukuyang estilo. Ang **Gawing kasalukuyan** ay para lamang sa mga panurong gagawin pagkatapos — hindi nagbabago ang dati nang object. Kapag blangko, doble o hindi tanggap sa DXF ang pangalan, hindi magagamit ang **OK**. Nakatago ang na-import na annotative styles ngunit napapanatili ang datos.

## Pag-save at DXF

Nag-i-import at nag-e-export ang KulmanLab ng `MLEADERSTYLE` records. Nananatiling style fields ang pangalan, arrowhead at laki, landing gap, taas, text attachment, kuwadro at annotative flag. Sa export, itinuturo ng group `342` ang EstiloNgTeksto na tugma ang font, kapal, pahilig at taas; `Standard` ang gamit kung walang tugma. Hindi ginagawa ng DXF reference na ito na live link ang minsanang pagkopya sa app. Isinusulat ang iisang attachment value sa kaliwa at kanang DXF fields.

Tingnan din ang [Leader](../leader/), [LeaderAdd](../leader-add/) at [LeaderRemove](../leader-remove/).
