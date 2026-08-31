---
title: LayerManager — Pamahalaan ang Lahat ng Layer sa Isang Table
description: Binubuksan ng utos na LayerManager ang isang talahanayan ng lahat ng layer sa guhit, na nagbibigay-daan sa iyong magdagdag ng layer, magbura ng hindi ginagamit, at i-edit mismo sa hilera ang freeze, lock, plot, kulay, lineweight at linetype ng bawat isa.
keywords: [tagapamahala ng layer, talahanayan ng layer CAD, pamahalaan ang layer CAD, magdagdag ng layer CAD, magbura ng layer CAD, alisin ang hindi ginagamit na layer, freeze lock plot layer, pamamahala ng layer kulmanlab]
group: layer
order: 1
---

# LayerManager

Binubuksan ng utos na `LayerManager` ang isang talahanayang naglilista ng bawat layer sa guhit, kung saan ang **Freeze**, **Lock**, **Plot**, **Kulay**, **Lineweight** at **Linetype** ay direktang nae-edit sa loob ng hilera. Ito ang sentrong lugar upang magdagdag ng layer, magbura ng hindi ginagamit, at ayusin kung paano kumikilos ang mga umiiral — ang ibang utos sa layer ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) ay tig-iisang tiyak na gawain ang ginagampanan nang hindi ito binubuksan.

## Pagbukas ng Layer Manager

- I-type ang `LayerManager` sa terminal, **o**
- I-click ang **Layer Manager** button sa layer panel.

Bubukas ang dialog bilang lumulutang na panel; walang kailangang piliin muna.

## Ang layer table

| Column | Ano ang kinokontrol nito |
|--------|-----------------------------|
| Name | Ang pangalan ng layer, ipinapakita bilang read-only sa table (itinatakda isang beses, sa paglikha) |
| Freeze | Itinatago ang mga entity ng layer at hindi isinasama sa selection hanggang ma-unfreeze |
| Lock | Pinipigilan ang pag-edit ng mga entity sa layer, nang hindi ito itinatago |
| Plot | Kung isasama ang mga entity ng layer kapag nagprint o nag-export sa PDF |
| Color | Ang ACI color ng layer — i-click ang swatch para buksan ang color picker |
| Lineweight | Ang lineweight ng layer — i-click ang chip para buksan ang lineweight picker |
| Linetype | Ang dash pattern ng layer — i-click ang chip para buksan ang linetype picker |
| ✕ | Binubura ang layer kapag walang gumagamit nito — tingnan ang [Pagbura ng layer](#pagbura-ng-layer) |

Agad na may epekto ang pag-toggle ng Freeze, Lock, o Plot — walang hiwalay na save step. Ang mga entity na naka-set sa **ByLayer** para sa kulay, lineweight, o linetype (ang default) ay susunod sa itinakda mo rito; hindi maaapektuhan ang mga entity na may sariling explicit na override.

## Pagdagdag ng layer

1. I-click ang **+ Add Layer** sa ibaba ng table.
2. Mag-type ng pangalan at pindutin ang **Enter** para kumpirmahin, o **Escape** para kanselahin.

Maaaring maglaman ng mga letra, numero, espasyo, at `_`, `-`, `$` ang pangalan ng layer. Tatanggihan ang pangalang blangko, ginagamit na, o may ibang character, kasama ang inline error, at mananatiling bukas ang row para sa isa pang pagsubok.

Ang mga bagong layer ay nagsisimula na **hindi naka-freeze, hindi naka-lock, plottable**, na may kulay 7 (puti/itim), lineweight na Default, at linetype na Continuous — ang parehong default na itinatakda ng [Import](../import/) sa layer `0` sa isang blangkong drawing.

## Pagbura ng layer

Nagtatapos ang bawat hilera sa pindutang **✕** na nag-aalis ng layer sa guhit. Agaran ang pagbura — walang hakbang ng pagkumpirma — ngunit inaalok lamang ito para sa mga layer na walang umaasa:

| Sitwasyon | Kalagayan ng pindutan |
|-----------|------------------------|
| Walang laman ang layer | Aktibo — *Delete layer* |
| Nakatalaga ang layer sa kahit isang entity | Hindi aktibo — *Cannot delete: assigned to at least one entity* |
| Layer `0` | Wala talagang pindutan |

**Saklaw ng "ginagamit" ang buong guhit**, hindi lamang ang nakikita mo. Ang entity na nasa isang layout (paper space) ay kasingbigat ng bilang ng isang nasa model space, kaya maaaring mukhang walang laman ang isang layer sa screen at tumanggi pa ring maburá. Walang pinagkaiba ang mga naka-freeze na layer: itinatago lamang ng freeze ang mga entity ngunit hindi inaalis ang pagkakatalaga, kaya ang naka-freeze na layer na may lamang entity ay nananatiling hindi mabubura.

Hindi kailanman mabubura ang layer `0`. Ito ang panghaliling layer na garantisadong taglay ng bawat guhit, kaya hindi na ito nilalagyan ng pindutan sa halip na ipakitang hindi aktibo.

### "…is now in use and can't be deleted"

Paminsan-minsan ay mukhang magagamit ang ✕ ngunit tinatanggihan ang pag-click sa pamamagitan ng banner sa itaas ng panel:

```
"WALLS" is now in use and can't be deleted
```

Hindi ito magkasalungat. Ang pag-alam kung aling mga layer ang ginagamit ay nangangahulugang lalakarin ang bawat entity sa guhit, kaya iniimbak ang resulta at muling binubuo lamang kapag nagbago ang bilang ng entity — mura sa daan-daang entity, hindi sa daan-daang libo. Ang paglipat ng umiiral na entity sa isang layer ay hindi nagbabago sa bilang na iyon, kaya maaaring saglit na maluma ang hindi-aktibong kalagayan ng hilera. Muling sinusuri ng pag-click mula sa simula bago magbura ng anuman — kaya nangyayari ang pagtanggi sa mismong pag-click sa halip na maglaho ang layer habang may tumutukoy pa rito.

Isara ang banner sa pamamagitan ng sarili nitong **✕**. Buo pa rin ang layer.

## Ang hindi mo magagawa dito

Hindi ipinapakita ng talahanayan kung aling layer ang *kasalukuyan*; itinatakda iyon mula sa dropdown ng layer panel o sa pamamagitan ng [LayerMakeCurrent](../layer-make-current/), hindi mula sa dialog na ito. Nakatakda rin ang pangalan ng layer sa paglikha — maaaring burahin at likhaing muli ang isang layer, ngunit hindi papalitan ang pangalan nito.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` | Kumpirmahin ang pangalan ng bagong layer (habang nagdaragdag) |
| `Escape` | Kanselahin ang pagdagdag ng layer, o isara ang dialog |

## Kaugnay na commands

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Itakda ang kasalukuyang layer para tumugma sa layer ng na-click na entity |
| [LayerMatch](../layer-match/) | Baguhin ang layer ng mga napiling entity para tumugma sa layer ng source entity |
| [LayerIsolate](../layer-isolate/) | I-freeze ang lahat ng layer maliban sa mga layer ng napiling entity |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | I-unfreeze ang lahat ng layer sa isang hakbang |
