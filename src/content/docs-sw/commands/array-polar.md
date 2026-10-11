---
title: "Amri ya ArrayPolar — nakili vitu kuzunguka kituo katika KulmanLab CAD"
description: "Amri ya ArrayPolar hunakili vitu vilivyochaguliwa kuzunguka nukta ya kati — idadi iliyowekwa ya vipengee vilivyotandazwa kwenye mzunguko kamili au sehemu yake, na nakala zinazogeuka zinapozunguka au kudumisha mwelekeo wake."
keywords: ["polar array CAD", "muundo wa mviringo CAD", "nakili vitu kuzunguka nukta CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Amri ya `ArrayPolar` hutengeneza nakala za vitu vilivyochaguliwa kuzunguka nukta ya kati, zilizotandazwa sawasawa kwenye mzunguko kamili au sehemu yake. Asili ni kipengee cha kwanza; kila kipengee kingine ni nakala iliyozungushwa kuzunguka kituo — au kuhamishwa tu kukizunguka, ukizima Rotate.

## Kuchora polar array

1. Chagua vitu, kisha andika `arraypolar` kwenye terminal au bofya kitufe cha **Array Polar** kwenye upau wa zana. Ikianzishwa bila uteuzi, hukuomba uvichague kwanza — bonyeza **Enter** au **Space** kuthibitisha.
2. **Bofya kituo** ambacho nakala zitazunguka, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu halisi.
3. Kagua array. Nakala zote huonyeshwa moja kwa moja, na terminal huonyesha `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — bonyeza herufi ya chaguo ili kulibadilisha.
4. Bonyeza **Enter** au **Space** kutengeneza nakala. Asili hubaki mahali zilipo na uteuzi huondolewa.

## Chaguo

| Chaguo | Kitufe | Athari |
|---|---|---|
| Items | `I` | Idadi ya vipengee, pamoja na asili — nambari kamili kutoka 2 hadi 1024. Huanza kwa 6. |
| Angle | `A` | Digrii kutoka kipengee kimoja hadi kinachofuata, kinyume cha saa; pembe hasi hufuata mwelekeo wa saa. Hadi 180°. |
| Fill | `F` | Digrii kutoka kipengee cha kwanza hadi cha mwisho. 360 (chaguo-msingi) ni mzunguko kamili; nambari ndogo hutandaza vipengee kwenye sehemu yake. Hasi hufuata mwelekeo wa saa. Hadi 360°. |
| Rotate | `R` | Imewashwa (chaguo-msingi): kila nakala hugeuka inapozunguka. Imezimwa: kila nakala huhamishwa hadi mahali pake na kuelekea upande ule ule wa asili. Hubadilika papo hapo — hakuna nambari ya kuandika. |

- Angle na Fill ni njia mbili za kusema kitu kile kile, kwa hivyo kubadilisha moja hubadilisha nyingine. Kwenye mzunguko kamili kipengee cha mwisho husimama hatua moja kabla ya cha kwanza; kwenye sehemu ya mzunguko hutua hasa kwenye pembe ya kujaza.
- Ili kubadilisha nambari, bonyeza herufi ya chaguo lake. Kiashiria hujazwa awali na thamani ya sasa — andika ili kuibadilisha, kisha bonyeza **Enter** au **Space**; kuthibitisha bila mabadiliko huacha array kama ilivyokuwa.
- Items hukubali nambari kamili tu; Angle na Fill hukubali desimali na `-` mwanzoni kwa mwelekeo wa saa. Pembe au kujaza 0 hukataliwa, vilevile pembe zaidi ya 180° au kujaza zaidi ya 360° — terminal hueleza sababu.
- Angle ndogo mno kutosha vipengee vyote huacha vile visivyo na nafasi, na terminal huripoti idadi mpya.
- Hufanya kazi kwa kila aina ya kiumbe: kila nakala ni asili iliyozungushwa kuzunguka kituo, au kuhamishwa, hasa kama [Rotate](../rotate/) na [Move](../move/) zingefanya.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|---|---|
| `Enter` / `Space` | Thibitisha uteuzi, array au nambari iliyoandikwa |
| `I` `A` `F` `R` | Badilisha Items, Angle au Fill kwa kuandika nambari; geuza Rotate |
| `0`–`9`, `.`, `-` | Andika nambari (`.` na `-` kwa Angle na Fill pekee, `-` kwanza) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Escape` | Ghairi |
