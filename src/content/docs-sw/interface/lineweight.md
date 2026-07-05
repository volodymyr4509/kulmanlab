---
sidebar_position: 3
title: "Lineweight Toolbar Picker — Control Stroke Width in KulmanLab CAD"
description: "Kichaguo cha uzito wa mstari kwenye upau wa zana wa KulmanLab CAD huweka upana wa mstari unaotumiwa kwa vipande vyote vipya unavyochora. Inasaidia thamani za kawaida za uzito wa mstari wa DXF kutoka 0.00 mm hadi 2.11 mm pamoja na hali za ByLayer na Default."
keywords: [CAD lineweight, stroke width, line width, DXF lineweight, ByLayer lineweight, kulmanlab]
---

# Lineweight

Chipu ya **uzito wa mstari** kwenye upau wa zana inadhibiti upana wa mstari uliowekwa kwa kila kipande kipya unachochora. Ibonyeze kufungua menyu ya kuchagua.

## Chaguo

| Thamani | Maana |
|---------|-------|
| **From Layer** | Kipande hurith uzito wa mstari uliofafanuliwa kwenye safu yake. Upana halisi unaoonyeshwa unategemea mipangilio ya safu. |
| **Default** | Hutumia upana wa chaguo-msingi wa programu — hutolewa kama mstari mwembamba (px 1). Haibatilishi mipangilio ya safu katika DXF. |
| **0.00 mm – 2.11 mm** | Upana maalum uliowekwa. Kipande kinabeba thamani hii bila kujali uzito wa mstari wa safu yake. |

Thamani za kawaida za uzito wa mstari wa DXF zinapatikana: 0.00, 0.05, 0.09, 0.13, 0.15, 0.18, 0.20, 0.25, 0.30, 0.35, 0.40, 0.50, 0.53, 0.60, 0.70, 0.80, 0.90, 1.00, 1.06, 1.20, 1.40, 1.58, 2.00, na 2.11 mm.

## Jinsi inavyotumika

Uzito wa mstari uliochaguliwa unatumika kwa kila kipande kilichoundwa baada ya mabadiliko. Haibadilishi vipande vilivyopo kwa njia ya kurudisha nyuma.

Kubadilisha uzito wa mstari wa vipande vilivyopo, vichague na uhariri uga wa **Lineweight** kwenye paneli ya sifa, au tumia [MatchProperties](../../commands/match-properties/) kuinakili kutoka kwa kipande kingine.

## Kutolewa

Uzito wa mstari hutolewa kwa kiwango cha **px 3.78 kwa mm** (dpi 96). Mstari wa 0.25 mm una upana wa takriban px 1 kwenye skrini; mstari wa 1.00 mm una takriban px 4. Thamani nyembamba sana (0.00 mm na hasi) daima hutolewa kama px 0.5 angalau ili zibaki zinazoonekana katika kiwango chochote cha zoom.

## Uoanifu wa DXF

Thamani za uzito wa mstari huhifadhiwa kama nambari kamili katika sehemu mia za milimita (mfano 25 = 0.25 mm) katika rekodi za vipande vya DXF `LWPOLYLINE`, `LINE`, `CIRCLE`, na nyingine. **From Layer** huhifadhiwa kama `-1` na **Default** kama `-3`, kulingana na maelezo ya DXF. Faili hufanywa safari ya kwenda na kurudi bila kupoteza katika programu yoyote inayooana na DXF.
