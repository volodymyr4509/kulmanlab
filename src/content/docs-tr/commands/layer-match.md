---
sidebar_position: 36
title: LayerMatch Komutu — KulmanLab CAD'de Nesneleri Başka Bir Nesnenin Katmanına Taşı
description: LayerMatch komutu, seçili nesneleri kaynak nesnenin katmanına taşır. Önce komutu etkinleştirin — hedefleri seçmek için tıklayın veya sürükleyin — ardından kaynağı tıklayın. Komut otomatik olarak tamamlanır.
keywords: [CAD layer match komutu, nesneleri katmana taşı CAD, nesne katmanını yeniden ata, kulmanlab]
---

# LayerMatch

`layer match` komutu, bir veya daha fazla nesneyi başka bir (kaynak) nesnenin katmanına taşır. Bu, [Match Properties](../match-properties/) komutunun yalnızca katmanlar için olan karşılığıdır.

## Nasıl Kullanılır

1. `layer match` yazın veya araç çubuğundaki **LayerMatch** düğmesine basın.
2. **Hedef nesneleri seçin** — katmanını değiştirmek istediğiniz nesneleri tıklayın veya sürükleyerek seçin.
3. Hedef seçimini onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. **Kaynak nesneyi tıklayın** — katmanını kullanmak istediğiniz nesne. Tüm hedef nesneler bu katmana taşınır ve komut tamamlanır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Hedef seçimini onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Davranış Ayrıntıları

| Konu | Davranış |
|------|---------|
| Ne değişir | Yalnızca **katman** özniteliği — renk, çizgi türü ve geometri değişmez |
| Kaynak nesne | Değişmez |
| Komut tamamlanır | Kaynağa tıklandıktan sonra otomatik |

## İlgili Komutlar

- [Match Properties](../match-properties/) — tüm özellikleri kopyalar (yalnızca katman değil)
- [Layer Make Current](../layer-make-current/) — geçerli katmanı ayarlar
