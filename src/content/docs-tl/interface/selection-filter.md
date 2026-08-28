---
title: Filter ng seleksyon — Paliitin ang maramihang seleksyon ayon sa katangian
description: Kapag maraming entity ang napili, ang icon ng filter sa ulo ng property panel ay nagbubukas ng popup na may buhay na mga checklist para sa Uri, Layer, Kulay, Lineweight at Linetype, binuo mula sa kung ano talaga ang nasa seleksyon, upang mapaliit ang malaki at halo-halong pinili bago ang maramihang pag-edit.
keywords: [filter ng seleksyon, pag-filter ng seleksyon CAD, faceted filter, pagpapaliit ng seleksyon, maramihang pag-edit CAD, filter ng property panel, kulmanlab]
group: interface
order: 7
---

# Filter ng seleksyon

Ang pagpili ng maraming entity nang sabay ay nagbubukas sa property panel sa view nitong maramihang seleksyon ("Selection (N)"). Ang **icon ng filter** katabi ng pindutang isara ay nagpapahintulot sa iyong paliitin ang seleksyong iyon ayon sa katangian bago ito i-edit nang maramihan.

## Pagbubukas ng filter

1. Pumili ng ilang entity — mag-drag ng selection box, mag-Shift-click, o pindutin ang Ctrl+A.
2. I-click ang **icon ng filter** (embudo) sa ulo ng property panel.
3. May bubukas na popup sa ilalim ng pindutan, na may checklist para sa bawat katangiang talagang nag-iiba sa loob ng seleksyon.

## Mga faset

Hanggang limang faset ang maipapakita ng popup, bawat isa ay binubuo nang buhay mula sa kasalukuyang seleksyon:

| Faset | Mga halagang ipinapakita |
|-------|--------------------------|
| **Uri** | Pangalan ng uri ng entity (Line, Circle, Hatch, …) |
| **Layer** | Pangalan ng layer, may kasamang kulay na tugma sa layer na iyon |
| **Kulay** | ACI color index |
| **Lineweight** | Halaga ng lineweight |
| **Linetype** | Pangalan ng linetype |

Lumilitaw lamang ang isang faset kung ang seleksyon ay talagang may higit sa isang natatanging halaga para dito — ang pagpili ng sampung linyang pawang nasa iisang layer ay hindi magpapakita ng faset na Layer, dahil ang paglalagay ng tsek doon ay walang mapapaliit. Ang mga entity na wala talagang taglay na isang katangian (halimbawa, ang Hatch at Text ay walang lineweight ni linetype) ay basta hindi binibilang sa faset na iyon — at hindi rin sila kailanman naisasantabi nito.

## Pagpapaliit ng seleksyon

Tsekan ang isa o higit pang halaga sa alinmang faset upang paliitin ang seleksyon sa mga entity na tumutugma sa **lahat** ng natsekang faset (kailangang tumugma ang isang entity sa hindi bababa sa isang natsekang halaga sa *bawat* faset na iyong hinipo, hindi lamang sa isa). Ang mga checkbox at bilang ng bawat faset ay sumasalamin sa kung saan na napaliit ng *ibang* natsekang faset, kaya hindi kailanman itinatago ng isang faset ang sarili nitong natsekang mga pagpipilian — ang karaniwang asal ng faceted na paghahanap.

Ang bilang ng resulta ay nag-a-update nang buhay habang nagtsetsek at nag-aalis ka ng tsek, at napapaliit din ang mismong seleksyon sa canvas — hindi ito basta filter sa pagpapakita: ang mga entity na hindi na tumutugma ay talagang inaalis sa pagkakapili, handa nang i-edit mo nang maramihan ang eksaktong subset na iyong sinala.

## Pag-alis ng mga filter

Gamitin ang reset na kontrol ng popup upang alisin ang lahat ng tsek at bumalik sa buong orihinal na seleksyon, o isara ang popup (muli itong magbubukas nang may bagong batayan sa susunod na pag-click mo sa icon ng filter sa ibang seleksyon).

## Kaugnay

- [Match Properties](../../commands/match-properties/) — kopyahin ang mga katangian mula sa isang entity patungo sa iba, kapag napaliit mo na kung alin ang mga iyon
- [LayerIsolate](../../commands/layer-isolate/) — isang alternatibo sa antas ng layer kapag nais mong ihiwalay ayon sa layer lamang, anuman ang kasalukuyang napili
