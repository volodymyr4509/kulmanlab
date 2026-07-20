---
title: Offset — Ƙirƙiri Kwafi masu Daidaici a Nisa Kwaɓe
description: Umarnin Offset yana ƙirƙirar kwafi mai daidaici na Line, Circle, Arc, Ellipse, ko Polyline a nisan da aka rubuta. Ana shigar da nisan sau ɗaya kuma ana sake amfani da shi ga offsets masu yawa. Dannawa a gefe yana bayyana wace shugabanci kwafin ke bayyana. Ana goyon bayan nauʼukan abu guda biyar.
keywords: [umarnin offset CAD, kwafi mai daidaici CAD, offset layi CAD, offset da'ira CAD, offset polyline CAD, offset concentric, kulmanlab]
group: edit
order: 10
---

# Offset

Umarnin `offset` yana ƙirƙirar kwafi mai daidaici na abu a nisa ta hankalta kwaɓe. Ka rubuta nisan sau ɗaya, sannan ka danna abubuwa ka zaɓi gefe — umarnin yana ci gaba da zama a shirye a nisan iri ɗaya don ka iya yin offset ga abubuwa masu yawa a zaman ɗaya.

Nauʼukan abu da ake goyon baya: **Line, Circle, Arc, Ellipse, Polyline** (ciki har da Rectangles).

## Amfani da offset

1. Rubuta `offset` a tashar umarni ko danna maɓallin kayan aiki na **Offset**.
2. **Rubuta nisan offset** ka danna **Enter** ko **Space**.
3. **Danna abu** don yin offset — idan abin ba nauʼin da ake goyon baya ba ne, saƙon kuskure yana bayyana kuma za ka iya danna wani abu daban.
4. **Motsa mai nuni** zuwa gefen da kwafin ya kamata ya bayyana — preview mai rai yana bi.
5. **Danna** don sanya kwafin offset.

Bayan kowace sanyawa umarnin yana komawa mataki na 3 a **nisa iri ɗaya**, a shirye don offset na gaba. Danna **Escape** don sake saita zuwa mataki na shigar da nisa.

```
  Nisa: 10

  ─────────────────    ← layin asali
  ─────────────────    ← kwafin offset (unit 10 a ƙasa)
```

## Hali na offset ga kowace abu

| Abu | Yadda ake lissafa offset |
|--------|---------------------------|
| **Line** | Layi mai daidaici an motsa shi ta hankalta ga shugabancin asali |
| **Circle** | Da'ira concentric; danna waje → radius mafi girma, ciki → radius mafi ƙarami |
| **Arc** | Baka concentric a sabon radius; ana kiyaye zango na kusurwa iri ɗaya |
| **Ellipse** | Semi-axes biyu suna ƙaruwa ko raguwa da nisa iri ɗaya |
| **Polyline** | Kowace sashe offset daban; sassan offset makwabta suna miter a kusurwoyi |

Ga **Circle**, **Arc**, da **Ellipse**: idan offset ta ciki za ta rage radius ko semi-axis zuwa sifili ko ƙasa, ba a yin amfani da offset.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar nisan |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` / `Space` | Tabbatar da nisan da aka rubuta ka ci gaba zuwa zaɓen abu |
| `Escape` | Sake saita zuwa mataki na shigar da nisa |

## Bayanin tsarin aiki

Nisan yana ci gaba da tsaye har sai ka danna **Escape**. Wannan yana sa ya zama mai inganci don yin offset ga abubuwa masu yawa a mataki iri ɗaya — rubuta nisan sau ɗaya, sannan danna ka zaɓi gefe ga kowane abu a jere.

## Offset da Copy

| | Offset | Copy |
|---|--------|------|
| Motsi | Ta hankalta ga geometry na abu | Vector mai sabani (tushe → manufa) |
| Abubuwan da ake goyon baya | Line, Circle, Arc, Ellipse, Polyline | Dukkan nauʼukan abu |
| Shigar da nisa | An rubuta kafin zaɓen abu | An rubuta ko danna bayan zaɓi |
| Mafi kyau don | Layuka masu daidaici, da'irori concentric, hanyoyi na ciki/waje | Sanya kwafi a matsayi masu sabani |
