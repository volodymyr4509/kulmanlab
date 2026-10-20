---
title: "Amri ya PointDivide — weka nukta kwa urefu sawa kando ya kitu"
description: "Amri ya PointDivide hugawanya mstari, polyline, tao, duara, elipsi au spline katika vipande vya urefu sawa na kuweka nukta kwenye kila mgawanyo, ikionyesha awali unapoandika idadi ya vipande."
keywords: ["amri ya kugawanya CAD", "gawanya mstari katika sehemu sawa CAD", "nukta kando ya kitu CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Amri ya `GawanyaKwaNukta` huweka [nukta](../point/) zinazogawanya kitu katika vipande vya urefu sawa. Kitu chenyewe hakibadiliki: nukta ni viumbe vipya kwenye safu na rangi ya sasa, vinavyofaa kunasa.

## Kugawanya kitu

1. Andika `GawanyaKwaNukta` kwenye terminal au chagua **Point Divide** kutoka menyu kunjuzi ya array kwenye paneli ya Edit.
2. **Bofya kitu** — mstari, polyline, tao, duara, elipsi au spline. Kingine chochote hukataliwa, na unaweza kuchagua tena.
3. **Andika idadi ya vipande**, nambari kamili kutoka 2 hadi 32767. Nukta huonyeshwa kwenye kitu unapoandika.
4. Bonyeza **Enter** au **Space** kuziweka. Amri huisha.

## Nukta zinapokwenda

- Nafasi hupimwa kwa urefu kando ya kitu, si kwa pembe, kwa hivyo elipsi au spline hukatwa katika vipande vya urefu sawa. Vipande vya tao vya polyline hufuatwa kando ya mkunjo wao.
- Kwenye kitu kilicho wazi — mstari, polyline wazi, tao, sehemu ya elipsi au spline wazi — nukta huenda kati ya vipande, kamwe si kwenye ncha: vipande 5 hutoa nukta 4.
- Kwenye kitu kilichofungwa — duara, polyline iliyofungwa, elipsi kamili au spline iliyofungwa — nukta huzunguka kote kutoka mwanzo wake, ambao pia hupata nukta: duara huanza kwenye pembe 0, polyline iliyofungwa kwenye kipeo chake cha kwanza. Vipande 5 hutoa nukta 5.
- Nambari nje ya 2–32767 hukataliwa: terminal hueleza sababu na kuifuta ili uandike tena.

Backspace hufuta tarakimu ya mwisho. Escape huanza upya, ili uchague kitu kingine. Enter au Space kabla ya kuchagua kitu humaliza amri.

---

*Yanayohusiana: [Point Interval](../point-interval/) kwa nukta kwa umbali uliowekwa, [Point](../point/) kwa nukta moja moja, na [ArrayPolar](../array-polar/) kwa kurudia vitu badala ya nukta.*
