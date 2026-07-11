---
title: "Undo Command — Step Back Through Drawing History in KulmanLab CAD"
description: "Amri ya Undo hubatilisha kitendo cha mwisho cha kuchora hatua moja kwa wakati. Hadi hatua 20 huhifadhiwa kwa kila faili na kubaki kwenye kivinjari baada ya kupakia upya ukurasa. Kufanya kitendo kipya baada ya kufuta kunafuta rafu ya redo."
keywords: [CAD undo command, undo history CAD, reverse action CAD, undo steps CAD, browser persistent undo, kulmanlab]
group: edit
order: 13
---

# Undo

Amri ya `undo` hubatilisha mabadiliko ya mwisho kwenye mchoro — hatua moja kwa kila mwito. Kila ongezeko, ufutaji, au uhariri wa vipande hurekodiwa kama ingizo tofauti la historia. Undo husogea nyuma kupitia maingizo haya kwa mpangilio wa nyuma.

## Jinsi ya kufuta

- Andika `undo` kwenye terminal, au
- Bonyeza kitufe cha **Undo** kwenye upau wa zana.

Kila mwito hubatilisha kitendo kimoja kilichorekodiwa. Iita mara kwa mara kusogea nyuma zaidi.

## Tabia ya historia

| Maelezo | Thamani |
|---------|---------|
| Hatua kwa kila faili | Hadi **20** |
| Uhifadhi | Kivinjari (IndexedDB / localStorage), kwa kila jina la faili |
| Husalia baada ya kupakia upya ukurasa | Ndiyo — historia inarejeshwa unapofungua tena faili |
| Kitendo kipya baada ya kufuta | Hufuta maingizo yote ya redo mbele ya nafasi ya sasa |
| Ingizo kongwe likiwa rafu imejaa | Hudondoshwa kutoa nafasi kwa mabadiliko mapya zaidi |

Kila mabadiliko ya kipande hurekodiwa: kuchora vipande vipya, kufuta vipande, uhariri wa vishiko vya nukta za mwisho, kutumia Move, Rotate, Scale, Mirror, Trim, Extend, na Offset vyote huunda maingizo ya historia.

## Undo dhidi ya Redo

| | Undo | Redo |
|---|------|------|
| Mwelekeo | Husogea **nyuma** kupitia historia | Husogea **mbele** kupitia maingizo yaliyofutwa |
| Inapatikana wakati | Kitendo kimoja kilichorekodiwa angalau kipo | Undo angalau moja imefanywa na hakuna kitendo kipya kilichochukuliwa |
| Inafutwa na | Hakuna — historia inakusanyika hadi kikomo cha hatua 20 | Kitendo chochote kipya cha kuchora |

Tumia [Redo](../redo/) kurudisha kitendo kilichofutwa. Vitufe vya upau wa zana huwa vijivu wakati mwelekeo husika haupatikani.
