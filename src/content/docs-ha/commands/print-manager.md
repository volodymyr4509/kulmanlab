---
title: Print Manager — Fitar da Zanen a matsayin PNG, JPEG, WebP, ko PDF
description: Umarnin PrintManager yana buɗe Print Manager — taga na fitarwa na musamman tare da preview mai rai wanda ya dace daidai da fayil ɗin da za a fitar, saitin Quality/DPI, mai zaɓen tsari, salon bugawa Default/Monochrome/Blueprint, da zaɓen yanki na zaɓi. Yana goyon bayan PNG, JPEG, WebP, da PDF.
keywords: [fitar da PNG CAD, fitar da PDF CAD, buga zane CAD, print manager, ingancin bugawa DPI, fitar da monochrome, salon bugawa blueprint, fitar da kulmanlab]
group: file
order: 4
---

# Print Manager

Umarnin `SarrafaBugawa` yana buɗe **Print Manager** — taga na fitarwa na musamman tare da canvas na preview mai rai, mai zaɓen tsari (PNG / JPEG / WebP / PDF), mai zaɓen Style (Default / Monochrome / Blueprint), da yankewar yanki na zaɓi. Babu abin da ake aikawa zuwa firinta na jiki; ana sauke fitarwar a matsayin fayil.

## Buɗe Print Manager

Danna maɓallin kayan aiki na **Print** ko rubuta `SarrafaBugawa` a tashar umarni. Print Manager yana buɗewa nan take yana nuna preview na viewport na yanzu.

Ana bayar da preview ta hanyar hanyar code guda ɗaya daidai, a daidai girman pixel guda, kamar fayil ɗin da za ka fitar a ƙarshe — canza Quality, Style, ko yankin fitarwa yana sake bayar da preview nan take, don haka abin da kake gani shi ne abin da ake sauka, ba kusanci ba ne.

## Tsarin Print Manager

Taga tana da panels guda biyu:
- **Sidebar na hagu** — dukkan bakan fitarwa.
- **Panel na dama** — canvas na preview mai rai wanda ke sabuntawa yayin da kake canza saitunan.

### Bakan Sidebar

| Bakan | Bayani |
|---------|-------------|
| **Change Area** | Yanke zuwa murabbaʼi na musamman a kan canvas (duba ƙasa) — yana yanke hoton da za a fitar da gaske, har ma a kan tsari mai sararin takarda, ba kawai preview na allo ba |
| Dropdown na **Quality** | Yana saita ƙudurin fitarwa (duba ƙasa) |
| Dropdown na **Style** | Default, Monochrome, ko Blueprint — duba *Salon bugawa* a ƙasa. Monochrome kai tsaye don fitarwar bugawa mai tsafta |
| Dropdown na **Format** | PNG, JPEG, WebP, ko PDF |
| Maɓallin **Export** | Ƙirƙira da sauke fayil |

## Salon bugawa

Dropdown na **Style** yana sarrafa duka launin tawada wanda ake zana entities dashi da bangon shafi:

| Style | Tawada | Bangon shafi |
|-------|--------|--------------|
| **Default** | Launin kowace entity na kanta | Fari |
| **Monochrome** *(tsoho)* | Baki mai ƙarfi, ko da menene launin entity/layer | Fari |
| **Blueprint** | Fari mai ƙarfi, ko da menene launin entity/layer | Shuɗi mai zurfi na Prussian, tare da rigar tunani mai laushi |

Blueprint yana sake haifar da kamannin bugawar gine-gine ta gargajiya ta cyanotype — layukan fari a kan takarda mai shuɗi mai duhu. Ana auna girman rigar tunaninsa dangane da girman shafi ba DPI ba, don haka yana bayyana da kauri iri ɗaya a kowane saitin Quality maimakon ya ƙara kauri yayin da ƙuduri ke ƙaruwa.

## Inganci da ƙuduri

Menu na **Quality** yana saita DPI wanda ake bayarwa dashi:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(tsoho)* | 150 |
| Presentation | 300 |
| Max | 600 |

Inganci mafi girma yana samar da hoto mafi girma da tsabta a girman zahiri iri ɗaya — kaurin layi yana daidaitawa tare da ƙuduri, don haka layi yana ci gaba da kauri *na zahiri* iri ɗaya a takarda a kowane saitin Quality, maimakon ya bayyana siriri yayin da DPI ke ƙaruwa. Kawai togiya ita ce layin gashi (kauri `0`), wanda ake bayyanawa gargajiya a matsayin "layin da ya fi siriri da na'urar fitarwa za ta iya zanawa" — ya ci gaba da faɗi mai tsayayye na pixel 1 a kowane matakin Quality, daidai yadda yake nuna hali a kan canvas mai rai.

Canza Quality yana sake bayarwa da preview nan take, don haka kake ganin tsabta ta gaskiya (da daidaita girman fayil) kafin fitarwa.

## Zaɓen yankin fitarwa na musamman

Ta tsohuwa preview yana nuna akwatin da ya kewaye dukkan abubuwa a sararin Model — girman guda da [Fit](../fit/) ke kusantowa — ko duk takardar a kan shimfida. Don fitar da wani yanki takamaimai:

1. Danna **Change Area** — Print Manager yana ɓoyewa kuma canvas yana zama mai hulɗa.
2. **Danna kusurwa ta farko** na murabbaʼin fitarwa.
3. **Danna kusurwa mai adawa** — Print Manager yana sake buɗewa tare da yankin da aka zaɓa a preview.

Danna `Escape` yayin zaɓen yanki don soke da mayar da yankin da ya gabata.

Canvas na preview yana sake girma kai tsaye don ya dace da **adadin girma madaidaici** na yankin da aka zaɓa, don haka preview yana daidaici ga pixel.

Ana tuna yankin da aka zaɓa daban ga sararin Model da kowane shimfida har sai ka sake loda shafin — duba [ChangePrintArea](../change-print-area/).

## Tsarin fitarwa

| Tsari | Mafi kyau don | Bayanai |
|--------|----------|-------|
| **PNG** | Ba tare da asara ba, layuka masu tsafta | An haɗa bangon shafi na Style, babu bayyanawa |
| **JPEG** | Fayil ƙarami don raba | Inganci 95%, matsawa kaɗan |
| **WebP** | Fayil mafi ƙaranci don yanar gizo | Inganci 95% iri ɗaya, matsawa mafi kyau fiye da JPEG |
| **PDF** | Takardu a shirye don bugawa | Hoto an haɗa a cikin akwatin PDF a DPI na Quality da aka zaɓa, an auna girmansa domin a buga shafi a ainihin girman zahiri |

Fayil ɗin da aka fitar ana masa suna `kulman-<timestamp>.<ext>` kuma yana sauka kai tsaye.

## Ƙuduri na fitarwa da bango

- **Fitar da model space / viewport**: an iyakance zuwa pixel 2000 × 2000 a saitin tsoho na Normal (150 DPI), an canza girmarsa daidai gwargwado ga yankin da aka zaɓa; iyakar tana daidaitawa tare da Quality shima — Draft yana da iyaka mafi ƙaranci, Presentation da Max suna da iyaka mafi girma (har zuwa pixel 8000 × 8000 a Max/600 DPI).
- **Fitar da tsari (sararin takarda)**: an auna girmansa kai tsaye daga ma'aunan takarda na tsari a DPI da aka zaɓa — misali takardar A4 (mm 210 × 297) a Quality na Normal tana fita a kusan pixel 1240 × 1754 — don haka ba ta ƙarƙashin iyakar pixel 2000 na viewport ba.
- Bango yana bin **Style** na bugawa da aka zaɓa — fari don Default da Monochrome, shuɗi mai zurfi na Prussian don Blueprint (duba *Salon bugawa* a sama).
- Layers da aka yi wa alama a matsayin **marasa-buga** ana banza da su daga fitarwa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Escape` (yayin zaɓen yanki) | Soke zaɓen yanki, mayar da yankin da ya gabata |
| `Escape` (a Print Manager) | Rufe Print Manager |
