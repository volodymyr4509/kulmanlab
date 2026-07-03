---
sidebar_position: 4
title: "Amri ya Circle — Chora Duara kwa Kituo na Radi katika KulmanLab CAD"
description: "Amri ya Circle inaweka duara kwa kubonyeza pointi ya kituo kisha kubonyeza au kuandika radi. Vipeo vinne vya kardinali hukuruhusu kubadilisha ukubwa wa radi kwa kuburuta bila kuendesha tena amri. Mzunguko kamili wa DXF kama vipengele vya CIRCLE."
keywords: [amri ya circle ya CAD, chora duara CAD, uingizaji wa radi ya duara, kubadilisha ukubwa wa duara kwa kipeo, kipengele cha CIRCLE DXF, dimradius duara, kulmanlab]
---

# Circle

Amri ya `circle` inachora duara kwa kubainisha kituo na radi. Kwanza unabonyeza au kuandika kituo, kisha unabonyeza au kuandika radi — baada ya hatua hiyo, duara linawekwa na amri inamaliza.

## Kuchora duara

1. Andika `circle` kwenye terminal au bonyeza kitufe cha upau wa zana cha **Circle**.
2. **Bonyeza kituo** — mahali ambapo duara litazunguka. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu halisi.
3. **Bonyeza pointi ya radi** au **andika thamani ya radi** na ubonyeze **Enter**. Duara linawekwa mara moja.

```
        ● (pointi ya radi — bonyeza au andika)
       /
      / ← radi
     /
    ● kituo
```

Hakikisho la duara hai linafuatilia kishale baada ya kuweka kituo ili uweze kuona ukubwa kabla ya kuthibitisha.

## Uingizaji wa kuratibu ya kituo

Badala ya kubonyeza kituo, andika nafasi halisi:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka kituo.

## Uingizaji wa radi kwa maandishi

| Hali | Jinsi ya kuingiza |
|------|-------------------|
| Bonyeza nafasi ya radi | Bonyeza pointi yoyote — umbali kutoka kituo ni radi |
| Andika radi | Andika nambari (kwa mfano `50`) na ubonyeze **Enter** |
| Radi hasi | Hairuhusiwi; ingiza tena thamani chanya |

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X au thamani ya radi |
| `,` | Funga X na uhamie uingizaji wa Y (kwa kuratibu ya kituo) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au radi iliyoandikwa |
| `Escape` | Ghairi na uondoke |

## Uhariri wa kipeo — kubadilisha ukubwa wa radi kwa kuburuta

Duara lililochaguliwa linaonyesha vipeo vitano:

| Kipeo | Nafasi | Kinachofanya |
|-------|--------|--------------|
| **Center** | Katikati ya duara | Husongesha duara lote; radi haibadiliki |
| **Left** | Pointi ya kushoto zaidi kwenye duara | Buruta ili kubadilisha radi; kituo kinabaki |
| **Right** | Pointi ya kulia zaidi kwenye duara | Buruta ili kubadilisha radi; kituo kinabaki |
| **Top** | Pointi ya juu zaidi kwenye duara | Buruta ili kubadilisha radi; kituo kinabaki |
| **Bottom** | Pointi ya chini zaidi kwenye duara | Buruta ili kubadilisha radi; kituo kinabaki |

Kuburuta kipeo chochote cha kardinali (Left, Right, Top, Bottom) hubadilisha radi hadi umbali kutoka kwa kituo hadi nafasi ya kuburuta. Kituo kinabaki mahali pake.

## Kuchagua duara

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua ikiwa klik inashuka karibu na mkondo wa duara (si eneo la ndani) |
| **Buruta kulia** (mkali) | Pointi za sampuli zilizosambazwa kando ya duara lazima zote ziwe ndani ya sanduku |
| **Buruta kushoto** (makutano) | Pointi yoyote ya sampuli kwenye duara inayoanguka ndani ya sanduku hulichagua |

## Amri za uhariri zinazosaidiwa

| Amri | Kinachotokea kwa duara |
|------|----------------------|
| [Move](../move/) | Hutafsiri kituo; radi haibadiliki |
| [Copy](../copy/) | Huunda duara linalofanana katika nafasi mpya |
| [Rotate](../rotate/) | Huzungusha nafasi ya kituo (duara lenyewe haliwezi kutofautiana kwa mzunguko) |
| [Mirror](../mirror/) | Huakisi nafasi ya kituo; radi haibadiliki |
| [Scale](../scale/) | Hupima ukubwa wa nafasi ya kituo na kuzidisha radi kwa kiwango cha ukubwa |
| [Offset](../offset/) | Huunda duara mseto kwa radi kubwa au ndogo |
| [Delete](../delete/) | Huondoa duara |

## Mali

**Jumla**

| Mali | Chaguomsingi | Maana |
|------|-------------|-------|
| Color | 256 (ByLayer) | Faharasa ya rangi ya ACI |
| Layer | `0` | Ugawaji wa safu |
| Linetype | ByLayer | Muundo wa aina ya mstari uliopewa jina |
| Linetype Scale | 1 | Kiwango cha ukubwa kwenye muundo wa aina ya mstari |
| Thickness | 0 | Unene wa kuchomeka |

**Jiometri**

| Mali | Maana |
|------|-------|
| Center X / Center Y | Nafasi ya kituo cha duara |
| Radius | Radi ya duara |

## Circle dhidi ya Arc — lini kutumia lipi

| | Circle | Arc |
|---|--------|-----|
| Upeo | 360° kamili | Sehemu — kutoka pointi ya kwanza hadi ya tatu |
| Uingizaji | Kituo + radi | Pointi tatu kwenye mkondo |
| Kubadilisha ukubwa baada ya kuweka | Buruta kipeo chochote cha kardinali | Buruta vipeo vya mwanzo/mwisho |
| Bora zaidi kwa | Mashimo kamili, vipengele vya mviringo | Vipande vya pembe, kona za mviringo |

## DXF — kipengele cha CIRCLE

Duara huhifadhiwa kama vipengele vya `CIRCLE` katika faili ya DXF, vikihifadhi kuratibu za kituo na radi. Mali zote — ikiwa ni pamoja na rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — huzunguka bila kupoteza. Programu yoyote inayolingana na DXF (LibreCAD, FreeCAD, n.k.) inasoma hizi kama duara la kawaida.
