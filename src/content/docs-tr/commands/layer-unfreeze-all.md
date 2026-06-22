---
sidebar_position: 38
title: LayerUnfreezeAll Komutu — KulmanLab CAD'de Tüm Katmanları Çöz
description: LayerUnfreezeAll komutu, çizimdeki tüm katmanları tek adımda çözer. Genellikle LayerIsolate sonrasında tam görünürlüğü geri yüklemek için kullanılır. Kilitleme ve yazdırma bayrakları değiştirilmez.
keywords: [CAD layer unfreeze all komutu, katmanları çöz CAD, tüm katmanları göster CAD, kulmanlab]
---

# LayerUnfreezeAll

`layer unfreeze all` komutu, çizimdeki tüm katmanları tek adımda çözer ve önceden gizlenmiş tüm katmanların görünürlüğünü geri yükler.

## Nasıl Kullanılır

Terminale `layer unfreeze all` yazın veya **LayerUnfreezeAll** düğmesine basın — tüm katmanlar hemen görünür hale gelir. Nesne seçimine gerek yoktur.

## Ne Zaman Kullanılır

Genellikle [LayerIsolate](./layer-isolate) sonrasında: odaklı düzenleme için katmanları izole edin, ardından tam görünüme dönmek için LayerUnfreezeAll çalıştırın.

## Davranış Ayrıntıları

| Konu | Davranış |
|------|---------|
| Ne değişir | Yalnızca **Donduruldu** bayrağı → çözüldü |
| Ne **değişmez** | **Kilitlendi** ve **Yazdır** bayrakları — değişmez |
| Onay istemleri | Yok — komut hemen çalışır |
| Nesne seçimi | Gerekli değil |
