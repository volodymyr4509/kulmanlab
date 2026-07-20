---
title: Polyline — Zana Hanyoyi masu Sassa da Yawa a matsayin Abu Ɗaya
description: Umarnin Polyline yana zana kowace adadin sassa da aka haɗa waɗanda aka ajiye su a matsayin abin LWPOLYLINE ɗaya. Grips na vertex da tsakiyar-sashe suna barka ka sake tsara kowace sashi na hanyar bayan ƙirƙira. Yana goyon bayan offset; ba ya goyon bayan trim ko extend.
keywords: [umarnin polyline CAD, zana polyline CAD, hanya mai sassa da yawa CAD, LWPOLYLINE DXF, sake tsara polyline, grip na vertex CAD, offset polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

Umarnin `polyline` yana zana hanya mai haɗuwa na kowace adadin sassa madaidaici, dukkansu an ajiye su a matsayin abin `LWPOLYLINE` ɗaya. Domin dukkan hanyar abu ɗaya ne, zaɓen ta yana zaɓen kowace sashi lokaci ɗaya — motsa, juya, ko canza girman dukkan sifar a aiki ɗaya. Wannan shine babban bambanci daga layukan da aka sarƙa ([Lines](../line/)), inda kowace sashi abu ne mai zaman kansa.

Polylines suma za su iya kasancewa **an rufe**: umarnin [Rectangle](../rectangle/) yana amfani da abin `LWPOLYLINE` iri ɗaya tare da tutar rufewa an saita ta.

## Zana polyline

1. Rubuta `polyline` a tashar umarni ko danna maɓallin kayan aiki na **Polyline**.
2. **Danna tabo na farko**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna kowace tabo mai biyowa** — kowace dannawa yana ƙara sashi. Shigar da daidaitawa yana aiki a kowane mataki.
4. Danna **Enter** ko **Space** don kammalawa (yana bukatar aƙalla tabo 2 an sanya su).

```
  ●──────●
  na 1   na 2
          \
           \  sashi na 3 (a tsari — mai nuni a nan)
            ●  ← danna don ƙarawa, Enter/Space don kammalawa
```

Dannawa **Escape** a kowane lokaci yana kawar da dukkan tabon da aka sanya kuma yana fita daga umarnin.

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga kowace vertex:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya vertex.

## Kulle-kusurwa da tsawon sashi madaidaici

Irin dabarar snap na 45° kamar umarnin [Line](../line/#angle-locking-and-exact-length-input) yana aiki tsakanin kowace tabo biyu masu jerawa. Yayin an kulle zuwa axis:

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa tsawon sashi |
| `-` | Tsawo mara kyau — yana juya shugabanci a kan axis (haruf na farko kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya tabon na gaba a nisan da aka rubuta |

Tsawon da aka tara na yanzu yana bayyana a tambayar tashar umarni a lokaci na rai. Dannawa yayin an kulle yana kwabewa a kan axis don haka sabuwar vertex tana sauka a kanta daidai.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X, ko tsawon sashi yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko tsawo da aka rubuta, ko kammala polyline idan babu abin da aka rubuta kuma ≥ tabo 2 sun kasance |
| `Space` | Kammala polyline (iri ɗaya da Enter idan babu shigarwa a tsari) |
| `Escape` | Kawar da dukkan tabo ka fita |

## Gyaran grip — vertices da tsakiyar sassa

Polyline da aka zaɓa yana nuna nauʼukan grip guda biyu:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Vertex** | A kowace tabo da aka sanya | Ja don sake matsayin wannan vertex; dukkan sassan da aka haɗa suna miƙewa don bi |
| **Tsakiyar sashi** | Tsakiyar kowace sashi | Ja don motsa **ƙarshe biyun** na wannan sashi tare, tare da kiyaye tsawo da kusurwar sashi |

Grip na tsakiyar-sashi na musamman ne ga polylines — yana barka ka jawo sashi guda ɗaya a gefe ba tare da canza tsawonsa ba. A kan [Line](../line/), grip na tsakiya yana kunna umarnin Move ga dukkan abin maimakon.

Babu grip guda ɗaya na "motsa dukkan polyline". Don motsa dukkan hanya, yi amfani da umarnin [Move](../move/).

## Zaɓen polylines

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓen polyline idan dannawa ta kasance cikin nisa na gwajin-buga daga kowace sashi |
| **Ja dama** (mai tsauri) | Dukkan vertices dole ne su faɗi cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Kowace sashi da ta taɓa gefen akwatin yana zaɓen dukkan polyline |

Domin polyline abu ɗaya ne, zaɓi mai haɗuwa da ke taɓa kowace sashi yana zaɓen dukkan sassan.

## Umarnin gyara da ake goyon baya

Polylines suna goyon bayan dukkan canjin gaba ɗaya da offset, amma **ba** trim ko extend ba (waɗannan ga [Line](../line/) kaɗai):

| Umarni | Abin da ke faruwa da polyline |
|---------|------------------------------|
| [Move](../move/) | Yana motsa dukkan vertices da motsi iri ɗaya |
| [Copy](../copy/) | Yana ƙirƙirar polyline iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya dukkan vertices a kewayen tabon tushe da aka zaɓa |
| [Mirror](../mirror/) | Yana yin madubi na dukkan vertices a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman dukkan vertices iri ɗaya daga tabon tushe |
| [Offset](../offset/) | Yana ƙirƙirar polyline mai daidaici a nisa ta hankalta kwaɓe |
| [Delete](../delete/) | Yana cire polyline daga zanen |

## Abubuwan

Idan polyline ya zaɓa, panel na abubuwa yana nuna:

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
| Closed | Ko vertex na ƙarshe ya haɗu komawa zuwa na farko |
| Vertex Count | Adadin dukkan vertices |
| Vertices | Jerin daidaitawa na dukkan vertices |

## Polyline da Line — yaushe za a yi amfani da wanne

| | Polyline | Line |
|---|---------|------|
| Adadin abubuwa | `LWPOLYLINE` ɗaya ga dukkan hanya | `LINE` ɗaya ga kowane sashi |
| Sifa rufe | Eh (tutar rufewa) | Aʼa |
| Trim / Extend | Aʼa | Eh — sashi bayan sashi |
| Grip na tsakiyar-sashi | Yana motsa dukkan sashi | Yana kunna Move ga abin |
| Mafi kyau don | Wajaje, contours, sifofi da za ka riƙe cikakke | Layukan gini, geometry da za ka yanke |

## DXF — Abin LWPOLYLINE

Ana ajiye polylines a matsayin abubuwan `LWPOLYLINE` a fayil ɗin DXF. Dukkan abubuwan — daidaitawar vertex, tutar rufewa, launi, layer, nauʼin layi, girman nauʼin layi, da kauri — suna juyawa ba tare da asara ba. Rectangles da aka zana da umarnin [Rectangle](../rectangle/) suma ana ajiye su a matsayin `LWPOLYLINE` (rufe, vertices huɗu) kuma ba za a iya banbanta su a matakin DXF ba.

Abubuwan `LWPOLYLINE` daga kowace manhaja mai dacewa da DXF (LibreCAD, FreeCAD, da sauransu) ana karanta su a matsayin polylines da za a iya gyarawa cikakke a editan.
