---
title: Çizgi Türü — KulmanLab CAD Arayüz Referansı
description: Çizgi türü (LTYPE) bir nesnenin kesik çizgi, noktalı, sürekli veya diğer DXF standart desenlerle nasıl görüneceğini tanımlar. ByLayer (önerilen), ByBlock veya açık değer olarak ayarlanabilir.
keywords: [CAD çizgi türü, linetype CAD, DXF LTYPE, çizgi deseni CAD, kesik çizgi CAD, kulmanlab]
group: interface
order: 3
---

# Çizgi Türü

**Çizgi türü** (LTYPE), bir nesnenin ekranda ve dışa aktarılan DXF'te nasıl görüneceğini tanımlar: sürekli, kesik çizgi, noktalı veya diğer standart DXF desenleri.

## ByLayer, ByBlock ve Açık Değer

| Mod | Açıklama |
|-----|----------|
| **ByLayer** (önerilen) | Nesne, katmanın çizgi türünü devralır. Katmanı değiştir → tüm nesneler güncellenir. |
| **ByBlock** | Nesne, eklendiği bloğun çizgi türünü devralır. |
| **Açık değer** | Nesneye doğrudan çizgi türü atanır — katman değişikliklerinden etkilenmez. |

## Standart DXF Çizgi Türleri

| Çizgi türü adı | Görünüm | Açıklama |
|----------------|---------|----------|
| `CONTINUOUS` | ————— | Sürekli düz çizgi |
| `DASHED` | – – – – | Kesik çizgi |
| `DOTTED` | · · · · | Noktalı çizgi |
| `DASHDOT` | – · – · | Kesik-nokta deseni |
| `DASHDOT2` | –·–·–· | Daha küçük kesik-nokta deseni |
| `CENTER` | –··–·· | Merkez çizgisi deseni (uzun-kısa-kısa) |
| `HIDDEN` | - - - - | Gizli kenara göre kesik çizgi |

## Çizgi Türü Ölçeği (LTSCALE)

Çizgi türü ölçeği (LTSCALE), çizgi türü deseninin tekrarlama aralığını kontrol eder. Küçük değer → sık tekrar (desen çok küçük görünür); büyük değer → seyrek tekrar.

- Ölçek, katman özelliklerinden veya nesne özelliklerinden ayarlanabilir.
- Değişiklik yalnızca ölçeklendirilmiş çizgi türlerine etki eder; CONTINUOUS etkilenmez.

## DXF'te Depolama

DXF dosyalarında çizgi türleri `TABLES` bölümünde (`LTYPE` tablosu) tanımlanır ve her nesne bu tanımlara atıfta bulunur. KulmanLab CAD, DXF'i içe aktarırken bu tabloyu okur ve dışa aktarırken standart DXF çizgi türü adlarını yazar.
