---
title: Utos na ClipboardPaste — I-paste ang mga entity mula sa clipboard ng sistema
description: Binabasa ng utos na ClipboardPaste mula sa clipboard ng sistema ang mga entity na isinulat noon ng ClipboardCopy at inilalagay ang mga ito sa piniling punto ng pagsingit, habang idinaragdag ang mga layer at linetype na wala sa patutunguhang guhit.
keywords: [paste sa clipboard CAD, pag-paste ng entity sa pagitan ng mga guhit, i-paste ang CAD object, Ctrl+V CAD, pag-paste sa pagitan ng mga tab, pagsasama ng layer sa pag-paste, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Binabasa ng utos na `IdikitMulaClipboard` ang mga entity na isinulat ng [ClipboardCopy](../clipboard-copy/) sa **clipboard ng sistema** at inilalagay ang mga ito sa kasalukuyang guhit sa puntong pipiliin mo. Dahil tunay na clipboard ng sistema ito, maaaring ibang guhit ang pinagmulan, ibang tab ng browser, o isang sesyon mula sa mas maaga sa araw na iyon.

## Paano mag-paste

1. Pindutin ang `Ctrl+V` (`Cmd+V` sa macOS), o i-type ang `IdikitMulaClipboard` sa terminal.
2. Ipinapakita ng prompt ang **reading clipboard…** habang ipinapasa ng browser ang tekstong nasa clipboard.
3. Kapag naiload na, nagiging **pick insertion point** ang prompt at sumusunod sa cursor ang preview ng geometry.
4. **Mag-click** upang ilagay ang mga entity. Naidaragdag sila sa guhit at nananatiling pinili.

Nakasabit ang preview sa **punto ng sanggunian** ng kopya — ang kaliwang ibabang sulok ng pinagsamang hangganan ng orihinal na pinili. Nasa ilalim ng cursor mo ang sulok na iyon, kaya eksaktong napapanatili ang ayos ng mga kinopyang entity sa isa't isa.

## Ano ang nangyayari sa pag-paste

| Hakbang | Kilos |
|---------|-------|
| **Bagong pagkakakilanlan** | Bawat na-paste na entity ay binibigyan ng bagong id, kaya ang dalawang pag-paste ay nagbubunga ng dalawang magkahiwalay na hanay |
| **Paglilipat** | Inilalayo ang mga entity nang cursor − punto ng sanggunian |
| **Pagsasama ng layer** | Bawat tinutukoy na layer na wala sa patutunguhang guhit ay idinaragdag ayon sa pangalan |
| **Pagsasama ng linetype** | Bawat tinutukoy na linetype na wala sa patutunguhang guhit ay idinaragdag ayon sa pangalan |
| **Pinili** | Nabubura ang naunang pinili at ang mga na-paste na entity ang nagiging pinili |

### Pagsasama ng mga layer at linetype

Idinaragdag ang mga talang nawawala; **hindi ginagalaw ang mga umiiral na**. Kung may dalang layer na `WALLS` na pula ang clipboard samantalang may `WALLS` nang asul ang patutunguhan, ang depinisyon ng patutunguhan ang mananaig at doon sasama ang mga na-paste na entity — magiging asul sila. Walang muling ipinapakahulugan ang pag-paste sa patutunguhang guhit.

Mahalaga ito kapag kumokopya sa pagitan ng mga guhit na magkaiba ang kombensiyon sa layer: tingnan ang [Layer Manager](../layer-manager/) pagkatapos mag-paste mula sa ibang guhit kung hindi inaasahan ang mga kulay.

## Kapag walang maipa-paste ang clipboard

Tanging ang nilikha ng ClipboardCopy ang tinatanggap ng ClipboardPaste. Anumang iba sa clipboard — payak na teksto, isang link, isang larawan, JSON mula sa ibang aplikasyon — ay tinatanggihan at iniuulat ng terminal:

```
Clipboard has no copied entities
```

Kung tuluyang tinanggihan ng browser ang pag-akses sa clipboard, ang mensahe ay **Clipboard access denied**. Pareho silang nagtatapos sa utos nang hindi binabago ang guhit.

## Sanggunian sa keyboard

| Key | Aksyon |
|-----|--------|
| `Ctrl+V` / `Cmd+V` | Buhayin ang ClipboardPaste |
| `Escape` | Kanselahin — itinatapon ang mga entity at walang naidaragdag |

Ligtas ang pagkansela habang nasa yugto ng pagbabasa: kung sasagot lamang ang clipboard matapos mong kanselahin o magsimula ng ibang utos, itinatapon ang huli nang dumating na resulta sa halip na guluhin ang anumang aktibo noon.

## Pagkopya sa pagitan ng mga tab

Ang karaniwang daloy sa pagitan ng mga guhit:

1. Buksan ang pinagmulang guhit, piliin ang geometry, pindutin ang `Ctrl+C`.
2. Lumipat sa kabilang tab — o magbukas ng pangalawang tab ng app at mag-load ng ibang file.
3. Pindutin ang `Ctrl+V` at i-click ang isang punto ng pagsingit.

Iisa ang pinagmulan ng dalawang tab at magkabahagi sila sa clipboard ng sistema, kaya walang ina-upload at walang server na sangkot. Nananatiling tekstong JSON sa sarili mong clipboard ang laman sa buong panahon.

## Mga suportadong entity

Bawat uri ng entity na kayang isulat ng ClipboardCopy ay kayang basahing muli ng ClipboardPaste — sa parehong serialisasyon na ginagamit ng katutubong format na `.json`.

## Tingnan din

- [ClipboardCopy](../clipboard-copy/) — isulat ang pinili sa clipboard
- [Copy](../copy/) — doblehin ang mga entity sa loob ng kasalukuyang guhit
- [Layer Manager](../layer-manager/) — suriin ang mga layer na dinala ng pag-paste
