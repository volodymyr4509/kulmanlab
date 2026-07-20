---
title: Line — Zanawa, Sarƙawa, Yankewa da Tsawaita Layi
description: Umarnin Line yana zana sassan layi madaidaici ɗaya-ɗaya waɗanda za a iya sarƙa su ƙarshe-zuwa-ƙarshe. Lines shine kaɗai nauʼin abu wanda Trim da Extend ke aiki a kansa. Cikakken juyawa a DXF a matsayin abubuwan LINE.
keywords: [umarnin line CAD, zana layi madaidaici CAD, sarƙar sassan layi, yanke layi CAD, tsawaita layi CAD, kulle-kusurwa CAD, abin LINE na DXF, kulmanlab]
group: shapes
order: 1
---

# Line

Umarnin `line` yana zana sassan layi madaidaici ɗaya-ɗaya, waɗanda ake ajiye su a matsayin abubuwan `LINE` daban a model na DXF. Bayan kowane sashi umarnin yana ci gaba da zama a aiki kuma yana sake amfani da ƙarshen a matsayin sabon tabon farawa, don haka za ka iya gina hanyoyi masu haɗuwa sashi ɗaya bayan wani. Ba kamar [Polyline](../polyline/) ba, layukan da aka sarƙa suna ci gaba da zama abubuwa masu zaman kansu — kowanne ana iya yanke shi, tsawaita shi, ko share shi ba tare da shafar makwaftansa ba.

## Zana layuka

1. Rubuta `line` a tashar umarni ko danna maɓallin kayan aiki na **Line**.
2. **Danna tabon farawa**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna tabon ƙarshe** — ana sanya sashen kuma ƙarshen ya zama sabon tabon farawa. Shigar da daidaitawa yana aiki a nan ma.
4. Ci gaba da dannawa (ko rubutu) don sarƙa ƙarin sassa.
5. Danna **Enter** ko **Escape** don tsayawa.

```
  ●──────────●──────────●──────────●
 farawa   dannawa 2  dannawa 3   Enter don kammalawa
            (ya zama sabon farawa kai tsaye)
```

Kana bukatar sashi guda ɗaya kawai? Danna **Enter** ko **Escape** nan take bayan mataki na 3.

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga farawa ko kowace tabo mai biyowa:

1. Rubuta ƙimar X (lambobi, `.`, ko `-`).
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya tabon.

## Kulle-kusurwa da shigar da tsawo madaidaici

Yayin da kake motsa mai nuni bayan sanya tabo, umarnin yana kula da axis na snap na 45° (0°, 45°, 90°, 135°, …). Kusurwar tana **kulle** idan:

- mai nuni ya kai nisa na aƙalla **5 × girman grip** daga tsayayye, **kuma**
- yana cikin **girman grip ɗaya** na nisa ta hankalta daga axis mafi kusa.

Idan an kulle preview yana snap zuwa axis kuma za ka iya shigar da tsawo madaidaici:

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar tsawon |
| `-` | Tsawo mara kyau — yana juya shugabanci a kan axis (haruf na farko kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya ƙarshen a nisan da aka rubuta |

Ana nuna ƙimar da aka tara a lokaci na rai a tashar umarni (misali `click end point or enter length: 12.5`). Danna yayin kulle kuma ana kwabe dannawar a kan axis, don haka ƙarshen koyaushe yana kansa daidai.

Motsawa baya kusa da tabon tsayayye yana wanke kulle.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X, ko nisa yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko tsawo da aka rubuta, ko kammala sarƙa idan babu abin da aka rubuta |
| `Escape` | Kammala sarƙa ka fita |

## Gyaran grip — mikewar ƙarshe

Layi da aka zaɓa yana nuna grips guda uku:

| Grip | Ina | Aikinsa |
|------|-------|--------------|
| **Farawa** | Ƙarshe na farko | Ja don sake matsayi — ƙarshen yana ci gaba da tsaye |
| **Tsakiya** | Tsakiyar layin | Yana kunna **Move** ga dukkan layin |
| **Ƙarshe** | Ƙarshe na biyu | Ja don sake matsayi — farawa yana ci gaba da tsaye |

Mikewar ƙarshe ɗaya ba ya taɓa shafar ɗayan. Wannan ya bambanta da gyaran grip a [Polyline](../polyline/), inda motsa vertex ke sake tsara dukkan hanya.

## Zaɓen layuka

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓen layin idan dannawa ta kasance cikin nisa na gwajin-buga daga sashen |
| **Ja dama** (mai tsauri) | Ana zaɓen layin ne kawai idan ƙarshen biyu suka faɗi cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Ana zaɓen layin idan kowane sashe na sashen ya taɓa gefen akwatin |

## Umarnin gyara da ake goyon baya

Lines shine abu ɗaya **kaɗai** wanda [Trim](../trim/) da [Extend](../extend/) ke aiki a kansa. Dukkan umarnin canzawa na yau da kullum suma suna aiki:

| Umarni | Abin da ke faruwa da layi |
|---------|------------------------|
| [Move](../move/) | Yana motsa ƙarshe biyun da motsi iri ɗaya |
| [Copy](../copy/) | Yana ƙirƙirar layi iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya ƙarshe biyun a kewayen tabon tushe da aka zaɓa |
| [Mirror](../mirror/) | Yana yin madubi na ƙarshe biyun a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman ƙarshe biyun iri ɗaya daga tabon tushe |
| [Offset](../offset/) | Yana ƙirƙirar layi mai daidaici a nisa ta hankalta kwaɓe |
| [Trim](../trim/) | Yana yanke layin a mahaɗa — **layuka kaɗai** |
| [Extend](../extend/) | Yana tsawaita ƙarshen mafi kusa zuwa iyaka — **layuka kaɗai** |
| [Delete](../delete/) | Yana cire layin daga zanen |

## Abubuwan

Idan layi ya zaɓa, panel na abubuwa yana nuna kowace filin da rikodin `LINE` na DXF ke ɗauke da shi:

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
| Start X / Start Y | Daidaitawar ƙarshe na farko |
| End X / End Y | Daidaitawar ƙarshe na biyu |

Dukkan filayen ana iya gyara su kai tsaye a panel ba tare da sake gudanar da umarnin ba.

## Line da Polyline — yaushe za a yi amfani da wanne

| | Line | Polyline |
|---|------|---------|
| Adadin abubuwa | `LINE` ɗaya ga kowane sashi | `LWPOLYLINE` ɗaya ga dukkan hanya |
| Trim / Extend | Eh — sashi bayan sashi | Aʼa |
| Sifa rufe | Aʼa | Eh (tutar rufewa) |
| Gyaran grip | Miƙe ƙarshe daban-daban | Motsa kowace vertex a hanyar |
| Mafi kyau don | Layukan gini, sassa ɗaya-ɗaya, geometry da za ka yanke | Contours, wajaje, sifofi da za ka riƙe cikakke |

## DXF — Abin LINE

Ana ajiye layuka a matsayin abubuwan `LINE` a fayil ɗin DXF. Kowane abu — daidaitawar farawa/ƙarshe, launi, layer, nauʼin layi, girman nauʼin layi, da kauri — suna juyawa ba tare da asara ba. Idan ka buɗe DXF wanda ke ɗauke da abubuwan `LINE`, suna zama abubuwan `Line` da za a iya gyarawa cikakke a editan.

Layukan da aka zana a editan ana kuma rubuta su a matsayin abubuwan `LINE` a ajiyewa, don haka ana iya karanta su ta LibreCAD, FreeCAD, da kowace manhaja mai dacewa da DXF.
