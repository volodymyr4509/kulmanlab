---
sidebar_position: 12
title: "Amri ya Leader+ — Ongeza Mkono wa Mshale kwenye Multileader Iliyopo katika KulmanLab CAD"
description: "Amri ya Leader+ inaongeza mkono mpya wa mshale kwenye multileader iliyopo. Mkono mpya unashiriki dogleg, maandishi, na mtindo wote wa kiongozi kilichochaguliwa. Mibonyezo miwili — chagua kiongozi, weka ncha mpya."
keywords: [CAD leader add arm, leader+ command, add arrow to leader, multileader arm, kulmanlab]
---

# Leader+

Amri ya `leader+` inaongeza mkono mpya wa mshale kwenye multileader iliyopo. Mkono mpya unaoelekea kutoka kwenye dogleg iliyopo ya kiongozi hadi ncha mpya ya mshale unayobonyeza. Mtindo wote — nafasi ya dogleg, maandishi, aina ya mshale, na ukubwa — unaarithi kutoka kwa kiongozi kilichochaguliwa.

## Kuongeza mkono

1. Andika `leader+` kwenye terminal.
2. **Bonyeza multileader iliyopo** kuichagua.
3. **Bonyeza ncha mpya ya mshale**, au andika `X,Y` na bonyeza **Enter** kwa kuratibu sahihi. Mstari wa mwanga unaonyeshwa kutoka kwa mshale hadi kwenye dogleg ya kiongozi.

Mkono unawekwa na amri inabaki hai — unaweza mara moja kubonyeza kiongozi kingine kuongeza mikono zaidi. Bonyeza **Enter**, **Space**, au **Escape** kumaliza.

```
  Kabla:                         Baada:
  ◄── mkono wa 1                 ◄── mkono wa 1
       \                               \
        ●──── dogleg ──── maandishi     ●──── dogleg ──── maandishi
                                       /
                              mkono wa 2 ──►  (ncha mpya uliyobonyeza)
```

## Uingizaji wa kuratibu kwa ncha

Badala ya kubonyeza, unaweza kuandika nafasi sahihi:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inathibitisha X imefungwa.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza kuandika kuratibu ya X |
| `,` | Funga X na hamia uingizaji wa Y |
| `Enter` | Thibitisha kuratibu iliyoandikwa na weka mkono |
| `Enter` / `Space` | Maliza (wakati hakuna uingizaji unaoendelea) |
| `Escape` | Ghairi na anza upya |

## Maelezo

- Vitu vya **Multileader** pekee ndivyo vinavyoweza kuchaguliwa — kubonyeza aina nyingine yoyote ya kitu hakuna athari yoyote.
- Mkono mpya unatoka kwenye dogleg iliyopo; unachagua tu mahali ambapo ncha ya mshale inaenda.
- Hakuna kikomo cha idadi ya mikono ambayo multileader inaweza kuwa nayo.

## Amri zinazohusiana

| Amri | Inafanya nini |
|------|--------------|
| [Leader](./leader) | Unda multileader mpya kabisa kutoka mwanzo |
| [Leader−](./leader-remove) | Ondoa mkono kutoka kwa multileader yenye mikono miwili au zaidi |
