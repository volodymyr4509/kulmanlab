---
sidebar_position: 26
title: Dimension Linear Komutu — KulmanLab CAD'de Yatay ve Dikey Ölçüler
description: Dimension Linear komutu, iki nokta arasında yatay veya dikey ölçü yerleştirir. Yön otomatik belirlenir veya H/V tuşlarıyla sabitlenir. Dim Continue ile zincir ölçüleri destekler.
keywords: [CAD dimension linear komutu, yatay ölçü CAD, dikey ölçü CAD, doğrusal ölçü CAD, DXF DIMENSION, kulmanlab]
---

# Dimension Linear

`dim linear` komutu, iki yakalama noktası arasında yatay veya dikey ölçü yerleştirir.

## Doğrusal Ölçü Anatomisi

```
       ← metin →
  ┌────────────────┐  ← ölçü çizgisi
  |                |
  ●                ●  ← yakalama noktaları
```

- **Yakalama noktaları**: tıklanan iki geometri noktası.
- **Uzatma çizgileri**: yakalama noktalarından ölçü çizgisine.
- **Ölçü çizgisi**: yatay veya dikey, ok ve değer metniyle.

## Doğrusal Ölçü Nasıl Eklenir

1. Terminale `dim linear` yazın veya **Dim Linear** düğmesine basın.
2. **Birinci yakalama noktasını tıklayın** (veya `X,Y` + Enter girin).
3. **İkinci yakalama noktasını tıklayın** (veya koordinatları girin).
4. **Ölçü çizgisi yerleştirme konumunu tıklayın** — geometriden uzaklığı ayarlamak için sürükleyin.

## Otomatik Yön Belirleme

| Noktalara göre imleç konumu | Yönelim |
|-----------------------------|---------|
| İmleç her iki noktanın üstünde veya altında | Yatay (ΔX ölçer) |
| İmleç her iki noktanın solunda veya sağında | Dikey (ΔY ölçer) |

## H/V Tuşlarıyla Yönü Sabitleme

Birinci yakalama noktasını ayarladıktan sonra:
- Zorunlu yatay ölçü için **H** tuşuna basın.
- Zorunlu dikey ölçü için **V** tuşuna basın.

## Uzaklık Girişi

Her iki yakalama noktasını ayarladıktan sonra, tıklamak yerine sayısal uzaklık değeri (geometriden ölçü çizgisine olan mesafe) girin ve Enter tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı veya uzaklık girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `H` | Yatay yönü sabitler |
| `V` | Dikey yönü sabitler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya uzaklığı uygular |
| `Escape` | İptal eder ve sıfırlar |

## Zincir Ölçüler

Bu ölçünün uç noktasından ölçüm zincirine devam etmek için [Dim Continue](./dim-continue) kullanın.

## Dim Linear - Dim Aligned Karşılaştırması

| | Dim Linear | Dim Aligned |
|---|------------|-------------|
| Ne ölçer | Yatay veya dikey bileşen | Noktalar arası düz mesafe |
| Ölçü çizgisi açısı | Her zaman 0° veya 90° | Noktalar arası vektöre paralel |
| En iyi | Dikdörtgen geometri | Eğimli nesneler, pahlar |

## DXF — DIMENSION Nesnesi

Doğrusal ölçüler DXF'de "linear" türüyle `DIMENSION` nesnesi olarak saklanır. DXF uyumlu programlarda tam round-trip.
