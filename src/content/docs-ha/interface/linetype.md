---
title: Mai Zaɓen Nauʼin Layi — Sarrafa Tsarin Dash a KulmanLab CAD
description: Mai zaɓen nauʼin layi a kayan aikin KulmanLab CAD yana saita tsarin dash da ake amfani da shi ga dukkan abubuwan da aka zana sabo. Yana goyon bayan dukkan nauʼukan layi da aka loda daga fayil ɗin DXF na yanzu tare da zaɓuɓɓukan ByLayer, ByBlock, da Continuous da aka gina.
keywords: [nauʼin layi CAD, tsarin dash, layi mai dash, nauʼin layi na DXF, nauʼin layi ByLayer, kulmanlab]
group: interface
order: 3
---

# Linetype

Chip na **nauʼin layi** a kayan aiki yana sarrafa tsarin dash da aka sanya ga kowace sabuwar abu da kake zana. Danna shi don buɗe dropdown na mai zaɓe.

## Zaɓuɓɓuka

| Ƙima | Ma'ana |
|-------|---------|
| **From Layer** | Abin yana gado nauʼin layi da aka bayyana a layer ɗinsa. Ana nuna shi a matsayin `ByLayer` a DXF. |
| **ByBlock** | Abin yana gado nauʼin layi na block wanda yake ciki. Ba shi da tasiri mai gani a waje na block. |
| **Continuous** | Layi cikakke mara-karyewa — babu tsarin dash. |
| **Nauʼukan layi masu suna** | Kowace nauʼin layi da aka loda daga fayil ɗin DXF na yanzu (misali `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Dropdown yana nuna preview mai rai na kowace tsari da mahrukin ma'anarta. |

## Yadda take shafarwa

Ana amfani da nauʼin layi da aka zaɓa ga kowace abu da aka ƙirƙira bayan canjin. Ba ta shafar abubuwan da ke akwai ba a baya.

Don canza nauʼin layi na abubuwan da ke akwai, zaɓi su ka gyara filin **Linetype** a panel na abubuwa, ko yi amfani da [MatchProperties](../../commands/match-properties/) don kwafinsa daga wani abu.

## Girman nauʼin layi

Kowace abu kuma tana da abin **Linetype Scale** (tsoho `1`). Ana ninka tsarin dash da wannan abin. Ƙima na `2` yana sa dash suna tsawon sau biyu; `0.5` yana sa su rabin tsawo. Gyara shi a panel na abubuwa bayan ka zaɓi abu.

## Nauʼukan layi da ake da su

Dropdown yana lissafa kawai nauʼukan layi da ke cikin fayil ɗin DXF da aka loda a yanzu. Fayil da aka ƙirƙira kwanan nan yana ɗauke da `ByLayer`, `ByBlock`, da `Continuous` kaɗai. Idan ka shigo da DXF, dukkan nauʼukan layi da aka bayyana a teburin `$LTYPE` na fayil ɗin za su zama a samuwa.

Idan kana bukatar nauʼin layi na musamman (misali `DASHED2`) wanda ba ya cikin jerin, shigo da fayil na DXF wanda ke ɗauke da shi — nauʼin layin zai bayyana a mai zaɓen don zaman na yanzu.

## Dacewa da DXF

Ana ajiye sunayen nauʼin layi a matsayin mahrukai a rikodin abu. `ByLayer` da `ByBlock` su ne ƙima na sentinel na yau da kullum na DXF. Dukkan nauʼukan layi masu suna da tsarin dash ɗinsu ana kiyaye su daidai a fitarwa kuma suna juyawa ba tare da asara ba a LibreCAD, FreeCAD, da wasu manhajoji masu dacewa da DXF.
