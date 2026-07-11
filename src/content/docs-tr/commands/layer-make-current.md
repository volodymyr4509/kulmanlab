---
title: LayerMakeCurrent Komutu — KulmanLab CAD'de Geçerli Katmanı Nesneye Göre Ayarla
description: LayerMakeCurrent komutu, tıkladığınız nesnenin katmanına göre geçerli aktif katmanı ayarlar. Katman yöneticisini açmadan katmanlar arasında geçiş yapmak için kullanışlıdır.
keywords: [CAD layer make current komutu, geçerli katmanı ayarla CAD, katman değiştir CAD, kulmanlab]
group: layer
order: 1
---

# LayerMakeCurrent

`layer make current` komutu, mevcut bir nesneye tıklayarak geçerli aktif katmanı ayarlar. Yeni katman araç çubuğundaki ilgili alanda görüntülenir ve sonraki tüm nesneler bu katmanda çizilir.

## Geçerli Katmanı Ayarlama

1. Terminale `layer make current` yazın veya **LayerMakeCurrent** düğmesine basın.
2. **Bir nesneye tıklayın** — geçerli katman tıklanan nesnenin katmanına değişir.

Komut tıklamadan hemen sonra tamamlanır.

## Kullanım Senaryoları

- Birden fazla katmanınız var ve mevcut bir nesneyle aynı katmanda çizmek istiyorsunuz.
- Katman adını hatırlamıyorsunuz — o katmandaki nesneye tıklamanız yeterli.
- Katman yöneticisini açıp ada göre aramaktan daha hızlı.

## İlgili Katman Komutları

| Komut | Ne yapar |
|-------|----------|
| [LayerMatch](../layer-match/) | Seçili nesneleri başka bir nesnenin katmanına taşır |
| [LayerIsolate](../layer-isolate/) | Seçili nesnelerin bulunduğu katmanlar dışındaki tüm katmanları dondurur |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Tüm katmanları çözer |
