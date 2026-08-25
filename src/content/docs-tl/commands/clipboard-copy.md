---
title: Utos na ClipboardCopy — Kopyahin ang mga entity sa clipboard ng sistema
description: Isinusulat ng utos na ClipboardCopy ang mga piniling entity sa clipboard ng sistema bilang tekstong JSON, kasama ang mga layer at linetype na tinutukoy ng mga ito, upang mai-paste sa ibang guhit o ibang tab ng browser gamit ang ClipboardPaste.
keywords: [kopya sa clipboard CAD, pagkopya ng entity sa pagitan ng mga guhit, kopyahin ang CAD object, Ctrl+C CAD, pagkopya sa pagitan ng mga tab, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Isinusulat ng utos na `ClipboardCopy` ang mga piniling entity sa **clipboard ng iyong sistema** bilang tekstong JSON. Dahil totoong clipboard ang ginagamit nito at hindi buffer sa memorya, nakaliligtas ang kinopyang geometry sa labas ng guhit: i-paste ito sa ibang file, sa pangalawang tab ng browser, o sa bintanang bubuksan mo mamaya gamit ang [ClipboardPaste](../clipboard-paste/).

Ito ang pagkakaiba nito sa [Copy](../copy/): dinodoble ng Copy ang mga entity sa loob ng kasalukuyang guhit sa isang kilos, samantalang inilalagay sila ng ClipboardCopy sa isang lugar na maaabot mula sa isang ganap na ibang guhit.

## Dalawang paraan ng pagsisimula

**Pumili muna, saka kopyahin** — ang mabilis na daan:

1. Pumili ng isa o higit pang entity sa canvas.
2. Pindutin ang `Ctrl+C` (`Cmd+C` sa macOS), o i-type ang `ClipboardCopy` sa terminal.
3. Agad na naisusulat ang mga entity sa clipboard at natatapos ang utos.

**Buhayin muna, saka pumili** — magsimula nang walang piniling anuman:

1. Pindutin ang `Ctrl+C` o i-type ang `ClipboardCopy` habang walang pinili.
2. Ipinapakita ng prompt ang **pick objects to copy — Enter or Space to confirm**.
3. **Pumili ng mga bagay** — mag-click upang isali o alisin ang bawat entity sa pinili, o mag-drag upang pumili ayon sa lugar.
4. Pindutin ang **Enter** o **Space** upang kopyahin ang pinili at lumabas.

Ang pagpindot ng **Enter** o **Space** nang walang pinili ay basta nagtatapos sa utos nang hindi ginagalaw ang clipboard.

## Ano ang kinokopya

Higit pa sa hubad na geometry ang dala ng laman ng clipboard, upang manatiling tama ang hitsura kapag na-paste sa isang di-kilalang guhit:

| Bahagi | Layunin |
|--------|---------|
| **Mga entity** | Ang buong serialisadong anyo ng bawat piniling entity |
| **Punto ng sanggunian** | Ang kaliwang ibabang sulok ng pinagsamang hangganan ng pinili — ang isinasabit ng ClipboardPaste sa cursor |
| **Mga layer** | Tanging ang mga layer na talagang tinutukoy ng kinopyang entity, ayon sa pangalan |
| **Mga linetype** | Tanging ang mga linetype na talagang tinutukoy ng kinopyang entity, ayon sa pangalan |

Ang mga *tinutukoy* na tala lamang sa talahanayan ang sumasama sa kopya — hindi ang buong talahanayan ng layer at linetype ng pinagmulang guhit. Hindi na isinasama ang mga hatch pattern at hindi naman kailangan: ang talahanayan ng pattern ng isang guhit ay ang nakapaloob na default na hanay, at ang anumang `.pat` na na-upload mo ay nasa imbakang pang-gumagamit na ibinabahagi na sa pagitan ng mga tab, kaya ang na-paste na hatch ang mismong humahanap sa sariling pattern nito.

## Kumpirmasyon

Kapag nagtagumpay, iniuulat ng terminal kung ilang entity ang naisulat:

```
3 entities copied to clipboard
```

Kung tatanggihan ng browser ang pag-akses sa clipboard, ipinapakita ng terminal ang **Copy failed: clipboard access denied** at walang naisusulat. Desisyon iyon ng browser tungkol sa pahintulot, hindi kamalian ng guhit — tingnan ang [Mga pahintulot sa clipboard](#mga-pahintulot-sa-clipboard) sa ibaba.

## Pagpili habang tumatakbo ang utos

| Paraan | Kilos |
|--------|-------|
| **Click** | Isinasali o inaalis ang entity sa ilalim ng cursor sa pinili |
| **Drag pakanan** (mahigpit) | Idinaragdag ang mga entity na buong nasa loob ng kahon |
| **Drag pakaliwa** (tumatawid) | Idinaragdag ang mga entity na tumatawid sa gilid ng kahon |
| **Enter** / **Space** | Kinukumpirma ang pinili at kinokopya |

## Sanggunian sa keyboard

| Key | Aksyon |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Buhayin ang ClipboardCopy |
| `Enter` / `Space` | Kopyahin ang kasalukuyang pinili, o lumabas kung walang pinili |
| `Escape` | Kanselahin nang hindi kumokopya |

## Mga pahintulot sa clipboard

Kailangan ng pahintulot ng browser upang makasulat sa clipboard ng sistema. Sa praktika, ang pagkopyang pinasimulan ng pagpindot sa key ay ipinagkakaloob nang walang tanong sa kasalukuyang mga desktop browser, ngunit maaaring tumanggi ang pahinang nawalan ng focus, o browser na mahigpit ang mga setting sa clipboard. Kung lumitaw ang mensahe ng tinanggihang akses, mag-click nang isang beses sa canvas upang ibalik ang focus sa pahina at subukan muli.

Dahil karaniwang tekstong JSON ang laman, papalitan ito ng anumang kokopyahin mo pagkatapos — isang linya ng teksto o isang link. Kumopya muli bago mag-paste kung ginamit mo ang clipboard sa ibang bagay sa pagitan.

## Mga suportadong entity

Gumagana ang ClipboardCopy sa lahat ng uri ng entity. Sineserialisa ang mga entity gamit ang parehong mekanismo ng katutubong pag-export na `.json`, kaya walang nawawala sa daan.

## Tingnan din

- [ClipboardPaste](../clipboard-paste/) — basahin muli ang clipboard at ilagay ang mga entity
- [Copy](../copy/) — doblehin ang mga entity sa loob ng kasalukuyang guhit
- [Export Manager](../export-manager/) — i-save ang buong guhit bilang DXF o JSON
