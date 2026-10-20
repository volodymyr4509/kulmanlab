---
title: "Amri ya PointInterval — weka nukta kwa umbali uliowekwa kando ya kitu"
description: "Amri ya PointInterval huweka nukta kwa umbali unaoandika kando ya mstari, polyline, tao, duara, elipsi au spline, ikianzia kwenye ncha uliyobofya karibu nayo, na kuzionyesha awali unapoandika urefu."
keywords: ["nukta kwa vipindi CAD", "nukta kwa umbali uliowekwa kwenye mstari CAD", "pima kando ya kitu CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Amri ya `NuktaKwaVipindi` huweka [nukta](../point/) kwa umbali uliowekwa kando ya kitu, kama vile kuweka alama za vituo kando ya njia. Kitu chenyewe hakibadiliki: nukta ni viumbe vipya kwenye safu na rangi ya sasa, vinavyofaa kunasa.

## Kuweka nukta kwa vipindi

1. Andika `NuktaKwaVipindi` kwenye terminal au chagua **Point Interval** kutoka menyu kunjuzi ya array kwenye paneli ya Edit.
2. **Bofya kitu karibu na ncha ya kuanzia** — mstari, polyline, tao, duara, elipsi au spline. Kingine chochote hukataliwa, na unaweza kuchagua tena.
3. **Andika urefu wa kipindi.** Nukta huonyeshwa kwenye kitu unapoandika.
4. Bonyeza **Enter** au **Space** kuziweka. Amri huisha.

## Nukta zinapokwenda

- Nukta ya kwanza huenda kipindi kimoja kutoka mwanzo na nyingine hufuata kwa kipindi kimoja kati yao, zikipimwa kando ya kitu pamoja na mikunjo. Hakuna nukta kwenye mwanzo wenyewe.
- Kwenye kitu kilicho wazi — mstari, polyline wazi, tao, sehemu ya elipsi au spline wazi — upimaji huanza kwenye ncha uliyobofya karibu nayo. Kinachobaki kwenye ncha ya mbali hakiwekewi alama: ncha ya mbali hupata nukta tu kipindi kinapotoshea kamili.
- Kwenye kitu kilichofungwa — duara, polyline iliyofungwa, elipsi kamili au spline iliyofungwa — upimaji huanza kwenye mwanzo wa kitu chenyewe, popote unapobofya: duara kutoka pembe 0 kinyume na saa, polyline iliyofungwa kutoka kipeo chake cha kwanza. Nukta husimama kabla ya mwanzo.
- Urefu wa 0 au chini, mrefu kuliko kitu, au unaotoa nukta zaidi ya 32767 hukataliwa: terminal hueleza sababu na kuufuta ili uandike tena.

Backspace hufuta herufi ya mwisho. Escape huanza upya, ili uchague kitu kingine. Enter au Space kabla ya kuchagua kitu humaliza amri.

---

*Yanayohusiana: [Point Divide](../point-divide/) kwa kugawanya kitu katika idadi ya urefu sawa, na [Point](../point/) kwa nukta moja moja.*
