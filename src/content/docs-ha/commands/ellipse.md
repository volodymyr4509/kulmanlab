---
title: Ellipse — Zana Ellipse mai Juyawa ta Tsakiya da Axes Biyu
description: Umarnin Ellipse yana zana ellipse a dannawa uku — tsakiya, ƙarshen axis na farko (kowace shugabanci), sannan tsawon axis na biyu. Axes biyun koyaushe suna ta hankalta da juna. Kowace semi-axis tana da grip nata don sake girma mai zaman kansa bayan sanyawa. Cikakken juyawa a DXF a matsayin abubuwan ELLIPSE.
keywords: [umarnin ellipse CAD, zana ellipse CAD, ellipse mai juyawa CAD, axes na ellipse, abin ELLIPSE na DXF, gyaran grip na ellipse, adadin axis, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Umarnin `ellipse` yana zana ellipse ta amfani da dannawa uku: tabon tsakiya, ƙarshen semi-axis na farko (babba) a kowace kusurwa, da tsawon semi-axis na biyu (ƙarami). Axes biyun koyaushe suna ta hankalta da juna — ana samun shugabancin axis na biyu kai tsaye daga na farko.

## Zana ellipse

1. Rubuta `ellipse` a tashar umarni ko danna maɓallin kayan aiki na **Ellipse**.
2. **Danna tabon tsakiya**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna ƙarshen axis na farko** — yana saita duka shugabanci da tsawon semi-axis na farko. Shigar da daidaitawa yana aiki a nan ma.
4. **Saita tsawon axis na biyu** — motsa mai nuni ta hankalta a kan axis na farko, sannan danna ko rubuta tsawo.

```
               ● ← ƙarshen axis na farko (mataki na 3)
              /
  tsakiya ●  /  ← axis na farko (kowace kusurwa)
            |
            ● ← mai nuni a nan yana saita tsawon axis na biyu (mataki na 4)
```

Ana sanya ellipse bayan mataki na 4 kuma umarnin yana fita.

## Shigar da axis — dannawa, daidaitawa, ko tsawo da aka rubuta

**Tsakiya (mataki na 2):** danna ko rubuta `X,Y` don matsayi madaidaici.

**Ƙarshen axis na farko (mataki na 3):** danna, ko rubuta `X,Y` don daidaitawa madaidaiciya. Kulle-kusurwa kuma yana snap zuwa matakan 45° — yayin an kulle, rubuta tsawo ka danna **Enter** don sanya ƙarshen a wannan nisan daidai.

**Axis na biyu (mataki na 4):** tsawon da aka rubuta koyaushe akwai — babu bukatar kulle-kusurwa. Shugabanci an riga an kwaɓe shi ta hankalta a kan axis na farko; rubutu yana saita tsawon kawai.

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa tsawon axis (mataki na axis na biyu) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya ƙarshen axis a tsawon da aka rubuta |

## Shigar da daidaitawa (tsakiya da ƙarshen axis na farko)

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X (matakan tsakiya/axis-na-farko), ko tsawon axis yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko tsawo da aka rubuta |
| `Escape` | Soke ka sake saita |

## Gyaran grip — sake girma na axis mai zaman kansa

Ellipse da aka zaɓa yana nuna grips guda biyar:

| Grip | Adadi | Aikinsa |
|------|-------|--------------|
| **Tsakiya** | 1 | Yana motsa dukkan ellipse; axes biyun basu canzawa |
| **Ƙarshen axis babba** | 2 (ƙarshen adawa na axis mafi tsawo) | Ja don sake girman tsawon semi-axis babba; girman axis ƙarami cikakke yana ci gaba da tsaye |
| **Ƙarshen axis ƙarami** | 2 (ƙarshen adawa na axis mafi guntu) | Ja don sake girman tsawon semi-axis ƙarami; axis babba ba ya canzawa |

Grips na axis babba da ƙarami suna aiki daban — za ka iya sake tsara ellipse ba tare da sake gudanar da umarnin ba.

## Zaɓen ellipses

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓe idan dannawa ta sauka kusa da wajen ellipse |
| **Ja dama** (mai tsauri) | Akwatin dubawa mai daidaici da axis na ellipse dole ne ya dace gaba ɗaya cikin akwatin zaɓi |
| **Ja hagu** (mai haɗuwa) | Kowane sashe na wajen ellipse da ya taɓa gefen akwatin zaɓi yana zaɓen shi |

## Umarnin gyara da ake goyon baya

| Umarni | Abin da ke faruwa da ellipse |
|---------|-----------------------------|
| [Move](../move/) | Yana motsa tsakiya; axes biyun basu canzawa |
| [Copy](../copy/) | Yana ƙirƙirar ellipse iri ɗaya a sabon tsakiya |
| [Rotate](../rotate/) | Yana juya matsayin tsakiya da vector na axis babba da kusurwa iri ɗaya |
| [Mirror](../mirror/) | Yana yin madubi na tsakiya kuma yana sake lissafa shugabancin axis babba a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman matsayin tsakiya kuma yana ninka tsawon semi-axis biyu da abin da aka canza girmarsa |
| [Offset](../offset/) | Yana ƙirƙirar ellipse concentric an motsa waje ko ciki da nisa kwaɓe |
| [Delete](../delete/) | Yana cire ellipse |

## Abubuwan

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
| Center X / Center Y | Tsakiyar ellipse |
| Major Axis X / Major Axis Y | Vector daga tsakiya zuwa ƙarshen axis babba (yana kunshe da shugabanci da tsawo) |
| Axis Ratio | Adadin semi-axis ƙarami zuwa semi-axis babba (0 < ratio ≤ 1) |
| Start Angle / End Angle | Kusurwar parametric a digiri; duka biyu 0°/360° ga ellipse cikakke |

## Ellipse da Circle — yaushe za a yi amfani da wanne

| | Ellipse | Circle |
|---|---------|--------|
| Axes | Semi-axes biyu mai zaman kansu a kowace kusurwa | Radius ɗaya, mai daidaici |
| Juyawa | Za a iya sanya shi a kowace kusurwa | Babu juyawa |
| Shigarwar rubutu | Tsawo ga kowace axis | Radius kaɗai |
| Sake girma na grip | Babba da ƙarami mai zaman kansu | Dukkan tabo huɗu na cardinal daidai |
| Mafi kyau don | Kallo na oblique, fasaloli na oval, ramukan perspective | Fasaloli na zagaye masu daidaici |

## DXF — Abin ELLIPSE

Ana ajiye ellipses a matsayin abubuwan `ELLIPSE` a fayil ɗin DXF. Tsarin yana ajiye tabon tsakiya, cikakken vector na axis babba (shugabanci + tsawo), da adadin axis. Juyawa, sifa, da dukkan abubuwan salo suna juyawa ba tare da asara ba. Da'ira **ba** a ajiye ta a matsayin ellipse mai lalacewa ba — nauʼin abubuwa biyun suna ci gaba da rabuwa a model na DXF.
