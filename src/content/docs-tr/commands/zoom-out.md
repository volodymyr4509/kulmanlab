---
sidebar_position: 44
title: ZoomOut Komutu — KulmanLab CAD'de Uzaklaştır
description: ZoomOut komutu görünümü 1,5× küçültür. Araç çubuğu düğmesi pencere merkezi etrafında uzaklaştırır; fare tekerleği imleç konumu etrafında uzaklaştırır. Minimum ölçek 0,01×.
keywords: [CAD zoom out komutu, uzaklaştır CAD, görünümü küçült CAD, kulmanlab]
---

# ZoomOut

`zoom out` komutu görünümü **1,5× küçültür** (mevcut ölçeği 1,5'e böler). Her çalıştırmada dünya koordinatlarında daha fazla alan görüntülenir ve nesneler daha küçük görünür.

## Nasıl Kullanılır

- Terminale `zoom out` yazın, veya
- Araç çubuğundaki **ZoomOut** düğmesine basın (pencere merkezi etrafında uzaklaştırır), veya
- **Fare tekerleğini aşağı döndürün** (imleç konumu etrafında uzaklaştırır).

## Sınırlamalar

| Parametre | Değer |
|-----------|-------|
| Her adım faktörü | ÷ 1,5 |
| Minimum ölçek | 0,01× |

Minimum ölçeğe ulaşıldığında komut devre dışı kalır.

## Araç Çubuğu Düğmesi - Fare Tekerleği Karşılaştırması

| | Araç çubuğu düğmesi / komut | Fare tekerleği |
|---|----------------------------|--------------------|
| Uzaklaştırma merkezi | Pencere merkezi | İmleç konumu |
| Adım | ÷ 1,5 sabit | ÷ 1,5 sabit |
| Erişilebilirlik | Her zaman | Her zaman |

## ZoomOut - ZoomIn Karşılaştırması

| | ZoomOut | ZoomIn |
|---|---------|--------|
| Yön | Uzaklaştırır (küçültür) | Yakınlaştırır (büyütür) |
| Adım | ÷ 1,5 | × 1,5 |
| Sınır | Min 0,01× | Maks 10 000× |
