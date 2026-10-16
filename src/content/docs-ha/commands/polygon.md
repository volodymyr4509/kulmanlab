---
title: "Umarnin Polygon — zana polygon na yau da kullum daga tsakiya ko gefe a KulmanLab CAD"
description: "Umarnin Polygon yana zana polygon na yau da kullum mai gefuna 3 zuwa 1024 daga tsakiyarsa da radius, ko daga gefe ɗaya. Sakamakon LWPOLYLINE ce a rufe, don haka duk umarnin gyaran polyline suna aiki a kanta."
keywords: ["umarnin polygon na CAD", "zana polygon na yau da kullum CAD", "hexagon octagon pentagon CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Umarnin `Poligon` yana zana polygon na yau da kullum — duk gefuna da kusurwoyi daidai — mai gefuna 3 zuwa 1024. Rubuta `Poligon` a tashar umarni. Sakamakon **`LWPOLYLINE` ce a rufe**, don haka bayan an sanya ta tana yin kamar kowace [Polyline](../polyline/) kuma duk gyaran polyline yana aiki.

## Zana polygon

1. Rubuta `Poligon` a tashar umarni ka shigar da **adadin gefuna** — cikakkiyar lamba daga 3 zuwa 1024 — sannan ka danna **Enter** ko **Space**. Umarnin yana zuwa da adadin da ka yi amfani da shi na ƙarshe (4 a karon farko); fara rubutu don maye gurbinsa. Duk wani abu daban ana ƙin shi kuma yana tsayawa a umarnin don a gyara.
2. **Danna tsakiya**, ko ka rubuta `X,Y` ka danna **Enter** don ainihin haɗin kai. Danna `E` da farko don farawa daga gefe maimakon haka (duba ƙasa).
3. **Danna radius** — ana ganin polygon kai tsaye — ko ka rubuta radius ka danna **Enter** ko **Space**.
4. Ana sanya polygon kuma umarnin ya ƙare.

## Zaɓuɓɓuka

| Zaɓi | Maɓalli | Tasiri |
|---|---|---|
| Edge | `E` | Wuri na farko ya zama ƙarshen gefe maimakon tsakiya. Zaɓi ƙarshe na biyu; sauran kusurwoyin ana gina su gaba da agogo, a hagu na gefen daga ƙarshe na farko zuwa na biyu. Danna `E` kuma don komawa tsakiya. |
| Inside | `I` | A kunne ne ta tsoho kuma ana riƙe shi daga polygon zuwa na gaba. A kunne: kusurwoyi suna kan da'irar radius da aka bayar. A kashe: polygon yana wajen wannan da'ira, tare da tsakiyar kowane gefe a kanta. |

- Danna yana sanya kusurwa (Inside a kunne) ko tsakiyar gefe (Inside a kashe) daidai inda siginar take, don haka siginar tana tantance alkibla kuma.
- Radius da aka rubuta ba shi da inda zai nufa, don haka polygon yana zama da gefensa na ƙasa a kwance — sai dai idan kulle kusurwa yana kunne, to yana bin kusurwar da aka kulle.
- Ana ba da kowane zaɓi a matakinsa kuma ana iya sauya shi ko da ana rubuta lamba.

## Jagorar madannai

| Maɓalli | Aiki |
|---|---|
| `0`–`9`, `.` | Rubuta adadin gefuna, radius, haɗin kai ko tsawo |
| `E` | Kunna ko kashe Edge (matakin wuri na farko) |
| `I` | Kunna ko kashe Inside (matakin radius) |
| `Enter` / `Space` | Tabbatar da adadin gefuna ko radius |
| `Escape` | Soke |

## DXF — abin LWPOLYLINE

Ana adana polygon a matsayin `LWPOLYLINE` a rufe mai vertex ɗaya ga kowace kusurwa; DXF ba shi da nau'in polygon na musamman. Duk kaddarori — haɗin kan vertex, launi, layer, nau'in layi, ma'aunin nau'in layi da kauri — suna wucewa ba tare da asara ba, kuma kowane mai kallon DXF yana karanta shi a matsayin polyline a rufe.
