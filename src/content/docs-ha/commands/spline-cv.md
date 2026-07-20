---
title: Spline CV — Zana B-splines ta Sanya Control Vertices
description: Umarnin Spline CV yana zana B-spline mai cubic ta sanya control vertices. Ana jawo curve zuwa vertices amma tana wucewa ne kawai ta na farko da na ƙarshe (clamped knots). Ana iya ja kowace grip na CV don sake tsara curve bayan sanyawa. Cikakken juyawa a DXF a matsayin abubuwan SPLINE.
keywords: [umarnin spline CAD, control vertices na B-spline, spline clamped CAD, zana spline CAD, abin SPLINE na DXF, gyaran grip na spline, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Umarnin `splinecv` yana zana **B-spline mai cubic** ta sanya control vertices (CVs). Ana jawo curve da aka samu zuwa kowace CV amma ba ta wucewa ta cikinsu ba — sai a vertex na farko da na ƙarshe, inda **clamped knots** ke kwaɓe curve daidai. Wannan yana ba ka iko na yanayin sifa mai fahimta: ja vertex don tura curve zuwa gare ta ba tare da tilasta ta taɓa kowace tabo ba.

## Zana spline ta control vertices

1. Rubuta `splinecv` a tashar umarni ko danna maɓallin kayan aiki na **Spline CV**.
2. **Danna don sanya control vertices** — kowace dannawa yana ƙara vertex. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. Danna **Enter** don kammalawa (ana bukatar aƙalla vertices 2).

```
  CV ●         ● CV
      \       /
       \     /    ← curve an jawo zuwa CVs
        \   /         amma ba ta wucewa ta cikinsu ba
  CV ●   ●   ● CV (farko/ƙarshe: curve tana taɓawa a nan)
```

Preview mai rai yana sabuntawa yayin da kake motsa mai nuni bayan kowace vertex, yana nuna yadda spline zai kama tare da tabon na gaba a matsayin mai nuni. Danna **Escape** don kawar da dukkan vertices da aka sanya ka fita.

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga kowace control vertex:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya vertex.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawar da aka rubuta, ko kammala spline idan babu shigarwa a tsari kuma ≥ vertices 2 sun kasance |
| `Escape` | Kawar da dukkan vertices ka fita |

## Gyaran grip — sake tsarawa ta control vertices

Spline na CV da aka zaɓa yana nuna grip ɗaya ga kowace control vertex:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Control vertex** | A kowace matsayin CV | Ja don motsa wannan CV — curve yana sake tsara kansa zuwa sabon matsayi |

Babu grip na "motsa dukkan spline". Don matsar da dukkan spline, yi amfani da umarnin [Move](../move/).

## Zaɓen CV splines

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓe idan dannawa ta sauka kusa da kowace tabo a kan curve |
| **Ja dama** (mai tsauri) | Dukkan tabon dubawa a kan curve dole ne su kasance cikin akwatin zaɓi |
| **Ja hagu** (mai haɗuwa) | Kowace sashe na curve da ya taɓa gefen akwatin zaɓi yana zaɓen ta |

## Umarnin gyara da ake goyon baya

| Umarni | Abin da ke faruwa da spline |
|---------|---------------------------|
| [Move](../move/) | Yana motsa dukkan control vertices da motsi iri ɗaya |
| [Copy](../copy/) | Yana ƙirƙirar spline iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya dukkan CVs a kewayen tabon tushe da aka zaɓa |
| [Mirror](../mirror/) | Yana yin madubi na dukkan CVs a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman dukkan CVs iri ɗaya daga tabon tushe |
| [Delete](../delete/) | Yana cire spline |

Splines ba su goyon bayan **Offset**, **Trim**, ko **Extend** ba.

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
| Degree | Digiri na polynomial — koyaushe 3 (cubic) |
| Control Vertices | Daidaitawar dukkan CVs |
| Fit Points | Babu-kome ga CV splines; ana cika shi ga fit-point splines kaɗai |

## Spline CV da Spline Fit — wanne za a yi amfani da shi

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Curve tana wucewa ta tabo | Na farko da ƙarshe kaɗai (clamped) | Kowace tabo da aka danna daidai |
| Sarrafa sifa | Jan CVs zuwa yanki | Motsa fit points wanda curve dole ne ya taɓa |
| Sakamako na gyaran grip | CV yana motsawa → curve an jawo | Fit point yana motsawa → curve an sake lissafa |
| Mafi kyau don | Curves masu tsafta na hoto, hanyoyi masu kyauta | Curves da dole ne su kai daidaitawa na musamman |

## DXF — Abin SPLINE (siffar control-vertex)

CV splines ana ajiye su a matsayin abubuwan `SPLINE` a fayil ɗin DXF, suna ajiye digiri, knot vector, da dukkan daidaitawar control vertex. Dukkan abubuwan — launi, layer, nauʼin layi, girman nauʼin layi, da kauri — suna juyawa ba tare da asara ba. Ana saita `splineFlag` zuwa `9` (CV spline) don haka sifar ta wanzu a sake loda. Kowace manhajar DXF wanda ke goyon bayan abubuwan `SPLINE` tare da bayanan CV yana karanta waɗannan daidai.
