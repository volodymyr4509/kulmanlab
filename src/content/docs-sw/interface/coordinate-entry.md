---
title: "Uingizaji wa viwianishi — nukta kamili, za kulinganisha na polar"
description: "Popote amri inapoomba nukta, iandike badala ya kubofya: X,Y kwa mahali kamili, @X,Y kupima kutoka nukta ya mwisho, na umbali<pembe kwa nukta ya polar. Kitufe cha Rel hufanya kila nukta iliyoandikwa ianze kwa kulinganisha."
keywords: ["uingizaji wa viwianishi CAD", "viwianishi vya kulinganisha CAD", "viwianishi vya polar CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Uingizaji wa viwianishi

Popote amri inapoomba nukta — mwanzo wa [Line](../../commands/line/), kona ya [Rectangle](../../commands/rectangle/), nukta ya msingi ya [Move](../../commands/move/), au grip unayoburuta — unaweza kuiandika badala ya kubofya. Anza kuandika nambari na terminal huonyesha unachoandika; bonyeza **Enter** au **Space** kuweka nukta.

## Njia nne za kuandika nukta

| Unaandika | Nukta iko |
|---|---|
| `100,50` | Kwenye X 100, Y 50 |
| `@100,50` | 100 kwa X na 50 kwa Y kutoka nukta ya mwisho |
| `100<45` | 100 kutoka asili, kwa 45° |
| `@100<45` | 100 kutoka nukta ya mwisho, kwa 45° |

Pembe ziko kwa digrii, kinyume cha saa kutoka mhimili wa X, kwa hivyo `@50<90` ni 50 juu moja kwa moja na `@50<180` ni 50 kushoto. Thamani yoyote inaweza kuwa hasi.

## Nukta ya mwisho

`@` hupima kutoka nukta ya mwisho iliyobofywa au kuandikwa katika amri yoyote — kubofya kwa mwisho kwa amri iliyotangulia huhesabiwa, na grip uliyoiburuta sasa hivi pia. Kama bado hakuna nukta ya mwisho, `@100,50` husomwa kama `100,50`. Nukta ya mwisho husahaulika unapohama kati ya model space na mpangilio, na mchoro unapofunguliwa.

## Rel: kulinganisha kwa chaguo-msingi

Kitufe cha **Rel** kwenye upau wa udhibiti hufanya kila nukta iliyoandikwa ianze kwa kulinganisha: mara tu unapoandika tarakimu ya kwanza, `@` huwekwa mbele yake, kwa hivyo `100,50` huwa `@100,50`. Bonyeza **Backspace** juu ya `@` kufanya nukta hiyo moja kuwa kamili. Kama bado hakuna nukta ya mwisho, `@` haiongezwi. Rel imezimwa kwa chaguo-msingi na hukumbukwa pamoja na vitufe vingine vya upau wa udhibiti.

## Vitufe wakati wa kuandika

| Kitufe | Athari |
|---|---|
| `0`–`9`, `.`, `-` | Andika nambari; `-` mwanzoni tu |
| `@` | Fanya nukta iwe ya kulinganisha, mwanzoni mwa X |
| `,` au **Space** | Maliza X na uende kwa Y |
| `<` | Maliza X kama umbali na uende kwa pembe yake |
| **Enter** au **Space** | Weka nukta Y ikiwa na thamani |
| **←** **→** **Home** **End** | Sogeza kishale ndani ya thamani inayoandikwa |
| **Backspace** | Futa kabla ya kishale; mwanzoni mwa Y tupu, rudi kwa X |

Nukta isiyosomeka kama nambari hubaki kwenye terminal ili uirekebishe. Kila nukta iliyoandikwa huacha mstari katika historia ya terminal jinsi ulivyoiandika — `Imeandikwa @100<45` — kabla ya mstari wa amri unaosema ilipotua.

## Nukta zilizoandikwa na ufuatiliaji wa pembe

Kishale kikiwa kimefungwa kwenye mwale wa ufuatiliaji wa pembe, kuandika nambari hutoa umbali kando ya mwale huo badala ya X. Ukiandika `@` kwanza, nukta kamili huanza, kwa hivyo `@100,50` hufanya kazi hata kwenye mwale uliofungwa.

---

*Yanayohusiana: [Ufuatiliaji wa umbali](../distance-tracking/) kuandika urefu kando ya mwelekeo uliofungwa, na [Vector Pins](../vector-pins/) kupima kutoka nukta iliyobanwa.*
