---
title: Rectangle — Zana Murabbaʼi mai Kusurwa Huɗu a KulmanLab CAD
description: Umarnin Rectangle yana ƙirƙirar murabbaʼi mai daidaici da axis daga kusurwoyi biyu masu adawa. Sakamako LWPOLYLINE ne mai rufe da vertices huɗu — iri ɗaya da kowace polyline daban da zarar an sanya shi, don haka kowace umarnin gyara na polyline yana aiki a kansa.
keywords: [umarnin rectangle CAD, zana murabbaʼi CAD, murabbaʼi mai daidaici da axis, polyline rufe CAD, LWPOLYLINE DXF, gyaran grip na murabbaʼi, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Umarnin `rectangle` yana zana murabbaʼi mai daidaici da axis wanda aka bayyana da dannawa biyu na kusurwoyi masu adawa. Ana ajiye sakamako a matsayin **`LWPOLYLINE` mai rufe** tare da vertices huɗu — ɗaya a kowace kusurwa. Babu wani nauʼin abu na rectangle na musamman: bayan ƙirƙira sifar tana aiki daidai kamar kowace [Polyline](../polyline/) daban kuma kowace gyaran polyline yana aiki a kanta.

## Zana murabbaʼi

1. Rubuta `rectangle` a tashar umarni ko danna maɓallin kayan aiki na **Rectangle**.
2. **Danna kusurwa ta farko**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna kusurwa mai adawa** — ana sanya murabbaʼi nan take kuma umarnin yana fita. Shigar da daidaitawa yana aiki a nan ma.

```
  ● (dannawa ta farko)────────────┐
  |                          |
  |   preview mai rai yana bin |
  |   mai nuni bayan mataki 2  |
  └──────────────────────────● (dannawa ta biyu)
```

Dannawa biyun na iya kasancewa kowace nauʼi na kusurwoyi masu adawa a diagonal — hagu-sama + dama-ƙasa, ko hagu-ƙasa + dama-sama, da sauransu. Tsari ba ya damuwa.

## Shigar da daidaitawa

A kowace kusurwa za ka iya rubuta matsayi madaidaici:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya kusurwar.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Enter` | Tabbatar da daidaitawar da aka rubuta |
| `Escape` | Soke |

Gefunan koyaushe a kwance da a tsaye ne — babu kulle-kusurwa ga umarnin rectangle.

## Gyaran grip — sake tsara bayan ƙirƙira

Rectangle da aka zaɓa yana nuna grips a kowace vertex kuma a tsakiyar kowace gefe:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Kusurwa** | Kowace ɗaya daga cikin vertices 4 | Ja don motsa wannan vertex; gefuna biyu makwabta suna miƙewa don bi — kusurwar mai adawa yana ci gaba da tsaye |
| **Tsakiyar gefe** | Tsakiyar kowace ɗaya daga cikin gefuna 4 | Ja don motsa ƙarshe biyun na wannan gefe tare, tare da kiyaye tsawo da kusurwar gefen |

Jan grip na kusurwa yana mayar da rectangle zuwa mahauba mai kusurwa huɗu wanda ba murabbaʼi ba ne. Idan kana bukatar murabbaʼi kawai mai girman daban, ja kusurwa yayin kiyaye gefuna kusan orthogonal, ko share shi ka zana sabon.

## Zaɓen murabbaʼai

Domin murabbaʼi polyline ne, zaɓi yana aiki iri ɗaya:

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓen idan dannawa ta sauka a kowace gefe hudu |
| **Ja dama** (mai tsauri) | Dukkan vertices huɗu dole ne su kasance cikin akwatin zaɓi |
| **Ja hagu** (mai haɗuwa) | Kowace gefe da ta taɓa gefen akwatin yana zaɓen dukkan murabbaʼi |

## Umarnin gyara da ake goyon baya

Dukkan umarnin gyara na polyline suna aiki. Trim da Extend ga [Line](../line/) kaɗai ne kuma ba sa aiki akan murabbaʼai:

| Umarni | Abin da ke faruwa da murabbaʼi |
|---------|-------------------------------|
| [Move](../move/) | Yana motsa dukkan vertices huɗu da motsi iri ɗaya |
| [Copy](../copy/) | Yana ƙirƙirar murabbaʼi iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya dukkan vertices huɗu a kewayen tabon tushe da aka zaɓa |
| [Mirror](../mirror/) | Yana yin madubi na dukkan vertices huɗu a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman dukkan vertices huɗu iri ɗaya daga tabon tushe |
| [Offset](../offset/) | Yana ƙirƙirar murabbaʼi mai daidaici (ciki ko waje) a nisa kwaɓe |
| [Delete](../delete/) | Yana cire murabbaʼi daga zanen |

## Abubuwan

Idan murabbaʼi ya zaɓa, panel na abubuwa yana nuna filayen iri ɗaya kamar kowace polyline:

**Gaba ɗaya**

| Abu | Tsoho | Ma'ana |
|----------|---------|---------|
| Launi | 256 (ByLayer) | Alamar launi ta ACI |
| Layer | `0` | Sanya layer |
| Nauʼin layi | ByLayer | Tsarin nauʼin layi mai suna |
| Girman nauʼin layi | 1 | Abin da aka canza girman tsarin nauʼin layi |
| Kauri | 0 | Kaurin extrusion |

**Geometry**

| Abu | Ma'ana |
|----------|---------|
| Closed | Koyaushe `true` ga murabbaʼi |
| Vertex Count | Koyaushe `4` ga murabbaʼi wanda ba a canza shi ba |
| Vertices | Daidaitawar dukkan kusurwoyi huɗu |

## Rectangle da Polyline da Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Yadda ake zanawa | Dannawa 2 (kusurwoyi) | Danna kowace vertex | Danna kowace ƙarshe |
| Nauʼin abu | `LWPOLYLINE` rufe | `LWPOLYLINE` buɗe ko rufe | `LINE` ga kowane sashi |
| Gefuna koyaushe orthogonal | Eh (a ƙirƙira) | Aʼa | Aʼa |
| Trim / Extend | Aʼa | Aʼa | Eh |
| Mafi kyau don | Akwatuna, frames, yankunan mai kusurwa huɗu | Wajaje da hanyoyi masu sabani | Sassa daban-daban, layukan gini |

## DXF — Abin LWPOLYLINE

Ana ajiye murabbaʼai a matsayin abubuwan `LWPOLYLINE` rufe tare da vertices huɗu. Dukkan abubuwan — daidaitawar vertex, launi, layer, nauʼin layi, girman nauʼin layi, da kauri — suna juyawa ba tare da asara ba.

Babu wani nauʼin `RECTANGLE` na musamman a DXF. Idan an sake buɗe fayil, sifar tana bayyana a matsayin polyline rufe mai vertices huɗu maimakon murabbaʼi. Kowane mai kallon DXF ko editan da ke goyon bayan `LWPOLYLINE` (LibreCAD, FreeCAD, da sauransu) zai nuna shi daidai.
