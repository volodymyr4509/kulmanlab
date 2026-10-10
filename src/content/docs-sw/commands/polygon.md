---
title: "Amri ya Polygon — chora poligoni za kawaida kutoka katikati au ukingo katika KulmanLab CAD"
description: "Amri ya Polygon huchora poligoni ya kawaida yenye pande 3 hadi 1024 kutoka katikati yake na kipenyo-nusu, au kutoka ukingo mmoja. Matokeo ni LWPOLYLINE iliyofungwa, kwa hivyo amri zote za kuhariri polyline zinatumika."
keywords: ["amri ya poligoni CAD", "chora poligoni ya kawaida CAD", "hexagoni oktagoni pentagoni CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Amri ya `polygon` huchora poligoni ya kawaida — pande na pembe zote sawa — yenye pande 3 hadi 1024. Andika `polygon` kwenye terminal. Matokeo ni **`LWPOLYLINE` iliyofungwa**, kwa hivyo ikishawekwa hufanya kazi kama [Polyline](../polyline/) nyingine yoyote na uhariri wote wa polyline unatumika.

## Kuchora poligoni

1. Andika `polygon` kwenye terminal na weka **idadi ya pande** — nambari kamili kutoka 3 hadi 1024 — kisha bonyeza **Enter** au **Space**. Kiashiria hujazwa awali na idadi uliyotumia mara ya mwisho (4 mara ya kwanza); anza kuandika ili kuibadilisha. Kitu kingine chochote hukataliwa na hubaki kwenye kiashiria ili kisahihishwe.
2. **Bofya katikati**, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu halisi. Bonyeza `E` kwanza ili kuanza kutoka ukingo badala yake (tazama chini).
3. **Bofya kipenyo-nusu** — poligoni huonyeshwa moja kwa moja — au andika kipenyo-nusu na ubonyeze **Enter** au **Space**.
4. Poligoni huwekwa na amri huisha.

## Chaguo

| Chaguo | Kitufe | Athari |
|---|---|---|
| Edge | `E` | Nukta ya kwanza huwa ncha moja ya ukingo badala ya katikati. Chagua ncha ya pili; pembe nyingine hujengwa kinyume cha saa, upande wa kushoto wa ukingo kutoka ncha ya kwanza hadi ya pili. Bonyeza `E` tena kurudi katikati. |
| Inside | `I` | Imewashwa kwa chaguo-msingi na hudumishwa kutoka poligoni moja hadi nyingine. Imewashwa: pembe ziko kwenye duara la kipenyo-nusu kilichotolewa. Imezimwa: poligoni iko nje ya duara hilo, na katikati ya kila ukingo juu yake. |

- Kubofya huweka pembe (Inside imewashwa) au katikati ya ukingo (Inside imezimwa) hasa mahali kielekezi kilipo, kwa hivyo kielekezi pia huamua mwelekeo.
- Kipenyo-nusu kilichoandikwa hakina mwelekeo wa kulenga, kwa hivyo poligoni hukaa na ukingo wake wa chini ukiwa mlalo — isipokuwa kufunga pembe kumewashwa, ambapo hufuata pembe iliyofungwa.
- Kila chaguo hutolewa katika hatua yake na linaweza kubadilishwa hata nambari inapoandikwa.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|---|---|
| `0`–`9`, `.` | Andika idadi ya pande, kipenyo-nusu, kuratibu au urefu |
| `E` | Washa au zima Edge (hatua ya nukta ya kwanza) |
| `I` | Washa au zima Inside (hatua ya kipenyo-nusu) |
| `Enter` / `Space` | Thibitisha idadi ya pande au kipenyo-nusu |
| `Escape` | Ghairi |

## DXF — kiumbe LWPOLYLINE

Poligoni huhifadhiwa kama `LWPOLYLINE` iliyofungwa yenye kipeo kimoja kwa kila pembe; DXF haina aina maalum ya poligoni. Sifa zote — kuratibu za vipeo, rangi, safu, aina ya mstari, kipimo cha aina ya mstari na unene — huhamishwa bila hasara, na kionyeshi chochote cha DXF huisoma kama polyline iliyofungwa.
