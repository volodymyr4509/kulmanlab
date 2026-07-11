---
title: "Linetype Toolbar Picker — Control Dash Patterns in KulmanLab CAD"
description: "Kichaguo cha aina ya mstari kwenye upau wa zana wa KulmanLab CAD huweka mfumo wa deshi unaotumiwa kwa vipande vyote vipya unavyochora. Inasaidia aina zote za mstari zilizopakiwa kutoka faili ya DXF ya sasa pamoja na chaguo za ByLayer, ByBlock, na Continuous zilizojengwa ndani."
keywords: [CAD linetype, dash pattern, dashed line, DXF linetype, ByLayer linetype, kulmanlab]
group: interface
order: 3
---

# Linetype

Chipu ya **aina ya mstari** kwenye upau wa zana inadhibiti mfumo wa deshi uliowekwa kwa kila kipande kipya unachochora. Ibonyeze kufungua menyu ya kuchagua.

## Chaguo

| Thamani | Maana |
|---------|-------|
| **From Layer** | Kipande hurith aina ya mstari iliyofafanuliwa kwenye safu yake. Inaonyeshwa kama `ByLayer` katika DXF. |
| **ByBlock** | Kipande hurith aina ya mstari ya kizuizi kinachomiliki. Haina athari inayoonekana nje ya kizuizi. |
| **Continuous** | Mstari mzima usiovunjika — hakuna mfumo wa deshi. |
| **Aina za mstari zilizopewa jina** | Aina yoyote ya mstari iliyopakiwa kutoka faili ya DXF ya sasa (mfano `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Menyu ya kuchagua inaonyesha hakiki ya moja kwa moja ya kila mfumo na mnyororo wake wa ufafanuzi. |

## Jinsi inavyotumika

Aina ya mstari iliyochaguliwa inatumika kwa kila kipande kilichoundwa baada ya mabadiliko. Haibadilishi vipande vilivyopo kwa njia ya kurudisha nyuma.

Kubadilisha aina ya mstari ya vipande vilivyopo, vichague na uhariri uga wa **Aina ya mstari** kwenye paneli ya sifa, au tumia [MatchProperties](../../commands/match-properties/) kuinakili kutoka kwa kipande kingine.

## Kiwango cha aina ya mstari

Kila kipande pia kina sifa ya **Kiwango cha Aina ya Mstari** (chaguo-msingi `1`). Mfumo wa deshi huzidishwa na kipengele hiki. Thamani ya `2` hufanya deshi kuwa refu mara mbili; `0.5` huzifanya kuwa nusu ya urefu. Ihariri kwenye paneli ya sifa baada ya kuchagua kipande.

## Aina za mstari zinazopatikana

Menyu ya kuchagua inaorodhesha tu aina za mstari zilizopo katika faili ya DXF iliyopakiwa kwa sasa. Faili iliyoundwa upya ina `ByLayer`, `ByBlock`, na `Continuous` tu. Ukiagiza DXF, aina zote za mstari zilizofafanuliwa katika jedwali la `$LTYPE` la faili huwa zinapatikana.

Ukihitaji aina maalum ya mstari (mfano `DASHED2`) ambayo haipo kwenye orodha, agiza faili ya DXF inayoiwa — aina ya mstari itaonekana kwenye kichaguo kwa kikao cha sasa.

## Uoanifu wa DXF

Majina ya aina ya mstari huhifadhiwa kama minyororo katika rekodi za vipande. `ByLayer` na `ByBlock` ni thamani za kistari za kawaida za DXF. Aina zote za mstari na mifumo yao ya deshi huhifadhiwa hasa wakati wa kusafirisha na hufanywa safari ya kwenda na kurudi bila kupoteza katika LibreCAD, FreeCAD, na programu nyingine zinazooana na DXF.
