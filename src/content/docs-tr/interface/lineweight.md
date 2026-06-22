---
sidebar_position: 3
title: Çizgi Kalınlığı — KulmanLab CAD Arayüz Referansı
description: Çizgi kalınlığı (LWEIGHT) mm cinsinden belirtilir ve DXF baskı kalınlığını tanımlar. ByLayer kullanımı önerilir. 0,00 mm = 1 piksel. Standart DXF kalınlık değerleri tablosu.
keywords: [CAD çizgi kalınlığı, lineweight CAD, DXF LWEIGHT, çizgi genişliği CAD, kulmanlab]
---

# Çizgi Kalınlığı

**Çizgi kalınlığı** (LWEIGHT), bir nesnenin mm cinsinden baskı/dışa aktarım kalınlığını tanımlar. Ekrandaki görsel kalınlık mevcut ölçeğe göre değişebilir.

## ByLayer, ByBlock ve Açık Değer

| Mod | Açıklama |
|-----|----------|
| **ByLayer** (önerilen) | Nesne, katmanın çizgi kalınlığını devralır. Katmanı değiştir → tüm nesneler güncellenir. |
| **ByBlock** | Nesne, eklendiği bloğun çizgi kalınlığını devralır. |
| **Açık değer** | Nesneye doğrudan çizgi kalınlığı atanır — katman değişikliklerinden etkilenmez. |

## Standart DXF Çizgi Kalınlığı Değerleri

| mm | Notlar |
|----|--------|
| 0,00 | 1 piksel (minimum görünür kalınlık) |
| 0,05 | |
| 0,09 | |
| 0,13 | |
| 0,15 | |
| 0,18 | |
| 0,20 | |
| 0,25 | |
| 0,30 | |
| 0,35 | |
| 0,40 | |
| 0,50 | |
| 0,53 | |
| 0,60 | |
| 0,70 | |
| 0,80 | |
| 0,90 | |
| 1,00 | |
| 1,06 | |
| 1,20 | |
| 1,40 | |
| 1,58 | |
| 2,00 | |
| 2,11 | |

DXF standardı yalnızca bu değerlere izin verir. Diğer değerler en yakın standart değere yuvarlanır.

## DXF'te Depolama

Çizgi kalınlıkları DXF'te her nesnenin `LWEIGHT` özniteliği olarak saklanır. KulmanLab CAD, dışa aktarma sırasında bu değerleri korur ve içe aktarma sırasında okur.
