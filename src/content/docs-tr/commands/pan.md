---
sidebar_position: 42
title: Pan Komutu — KulmanLab CAD'de Çizim Görünümünü Kaydır
description: Pan komutu, çizim görünümünü ölçeği değiştirmeden kaydırır. Ayrıca orta fare düğmesi basılı tutularak (diğer komutlar sırasında bile her zaman çalışır) veya Boşluk tuşuyla kullanılabilir.
keywords: [CAD pan komutu, görünümü kaydır CAD, tuvali sürükle CAD, orta fare düğmesi pan, kulmanlab]
---

# Pan

`pan` komutu, çizim görünümünü kaydırır (ölçeklendirmeden). Çizim geometrisi değişmez — yalnızca bakış açısı hareket eder.

## Pan'ı Başlatma

**Komut modu Pan**:
1. `pan` yazın veya araç çubuğundaki **Pan** düğmesine basın.
2. Herhangi bir yönde **tıklayıp sürükleyin**.
3. Pan modundan çıkmak için **Escape** tuşuna basın.

**Orta fare düğmesi (her zaman kullanılabilir)**:
- **Orta fare düğmesini (tekerleği) basılı tutun** ve sürükleyin — başka bir komut çalışırken bile her zaman çalışır. Bıraktıktan sonra önceki komuta döner.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` | Pan modundan çıkar |

> Not: hareketin kendisi için klavye kısayolu yoktur. Herhangi bir komut sırasında pan için — orta fare düğmesini kullanın.

## Pan - Zoom Karşılaştırması

| | Pan | Zoom |
|---|-----|------|
| Ne değişir | Görünüm konumu | Ölçek (yakınlaştırma seviyesi) |
| Geometri | Değişmez | Değişmez |
| Kısayol | Orta fare düğmesi | Fare tekerleği |

## İpuçları

- **Kaydırma + Pan**: Yakınlaştırma için fare tekerleği, kaydırma için orta düğme — komutlar arasında geçiş yapmadan en hızlı gezinme.
- **Orta düğmeye çift tıkla**: Manuel Pan yerine — orta düğmeye çift tıklamak tüm çizimi görmek için [Fit](./fit) komutunu çalıştırır.
- **Komut sırasında Pan**: Mevcut komutu kesintiye uğratmadan (örneğin Line noktaları yerleştirirken) geçici Pan için orta düğmeyi basılı tutun.
