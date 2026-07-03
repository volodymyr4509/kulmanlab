---
sidebar_position: 37
title: LayerIsolate Komutu — KulmanLab CAD'de Seçilenler Dışındaki Tüm Katmanları Dondur
description: LayerIsolate komutu, seçili nesnelerin bulunduğu katmanlar dışındaki tüm katmanları dondurur. Seçim otomatik olarak temizlenir. Geri yüklemek için LayerUnfreezeAll kullanın.
keywords: [CAD layer isolate komutu, katmanı izole et CAD, katmanları dondur CAD, yalnızca geçerli katmanı göster, kulmanlab]
---

# LayerIsolate

`layer isolate` komutu, seçili nesnelerin bulunduğu katmanlar **dışındaki** tüm katmanları dondurur. Bu, diğer tüm katmanları görünmez hale getirerek belirli katmanlara odaklanmanızı sağlar.

## İki Başlatma Yöntemi

**Önce seç** — nesneleri seçin, ardından etkinleştirin:

1. Görünür kalmasını istediğiniz katmanlardaki **bir veya daha fazla nesne seçin**.
2. `layer isolate` yazın veya **LayerIsolate** düğmesine basın — katmanlar hemen uygulanır.

**Etkinleştir, sonra seç**:

1. `layer isolate` yazın veya düğmeye basın.
2. **Bir nesneye tıklayın** — o nesnenin katmanı izole edilir ve komut tamamlanır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` | Değişiklik yapmadan iptal eder |

## Davranış Ayrıntıları

| Konu | Davranış |
|------|---------|
| Dondurulmamış katmanlar | Dondurulmamış kalır — izolasyon zaten çözülmüş katmanlara dokunmaz |
| Komut sonrası | Nesne seçimi temizlenir |
| Komut tamamlanır | Uygulandıktan sonra otomatik |

## Çözme

Tüm katmanları çözmek ve normal görüntüleme moduna dönmek için [LayerUnfreezeAll](../layer-unfreeze-all/) kullanın.
