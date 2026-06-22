---
sidebar_position: 27
title: Dimension Aligned Komutu — KulmanLab CAD'de Eğimli Mesafe Ölçüleri
description: Dimension Aligned komutu, iki yakalama noktası arasında hizalanmış ölçü yerleştirir ve açıdan bağımsız olarak aralarındaki düz mesafeyi ölçer. Dim Continue ile zincir ölçüleri destekler.
keywords: [CAD dimension aligned komutu, hizalı ölçü CAD, eğimli ölçü CAD, eğri boyunca mesafe CAD, kulmanlab]
---

# Dimension Aligned

`dim aligned` komutu, iki yakalama noktası arasındaki çizgiyle hizalanmış ölçü yerleştirir. Yalnızca yatay veya dikey bileşeni ölçen [Dim Linear](./dim-linear) komutunun aksine, Dim Aligned herhangi bir açıda iki nokta arasındaki **düz mesafeyi** ölçer.

## Hizalı Ölçü Anatomisi

```
   ●——————●  ← yakalama noktaları
    \      \
     ●——→←——●  ← ölçü çizgisi (vektöre paralel)
      [metin]
```

Ölçü çizgisi yakalama noktaları arasındaki vektöre **paralel**dir.

## Hizalı Ölçü Nasıl Eklenir

1. Terminale `dim aligned` yazın veya **Dim Aligned** düğmesine basın.
2. **Birinci yakalama noktasını tıklayın** (veya `X,Y` + Enter girin).
3. **İkinci yakalama noktasını tıklayın** (veya koordinatları girin).
4. **Ölçü çizgisi yerleştirme konumunu tıklayın** — geometriden uzaklığı ayarlamak için sürükleyin.

## Uzaklık Girişi

Her iki yakalama noktasını ayarladıktan sonra, tam olarak bu mesafeye yerleştirmek için sayısal uzaklık değeri girin ve Enter tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı veya uzaklık girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya uzaklığı uygular |
| `Escape` | İptal eder ve sıfırlar |

## Zincir Ölçüler

Bu ölçünün uç noktasından ölçüm zincirine devam etmek için [Dim Continue](./dim-continue) kullanın.

## Dim Aligned - Dim Linear Karşılaştırması

| | Dim Aligned | Dim Linear |
|---|-------------|-----------|
| Ne ölçer | Noktalar arası düz mesafe | Yatay veya dikey bileşen |
| Ölçü çizgisi açısı | Noktalar arası vektöre paralel | Her zaman 0° veya 90° |
| En iyi | Eğimli nesneler, pahlar, üçgensel hesaplamalar | Eksenlere paralel mesafeler |

## DXF — DIMENSION Nesnesi

"Aligned" türüyle `DIMENSION` nesnesi olarak saklanır. DXF uyumlu programlarda tam round-trip.
