---
sidebar_position: 48
title: Files Komutu — KulmanLab CAD'de Kaydedilen Çizimleri Görüntüle ve Geri Yükle
description: Files komutu, tarayıcının IndexedDB'sinde kaydedilen çizimlerin listesini görüntüler. Kaydedilen herhangi bir çizimi geri yükleyin, silin veya indirin. Başlangıçta en yenisi otomatik olarak yüklenir.
keywords: [CAD files komutu, çizimi geri yükle CAD, kaydedilen dosyalar listesi CAD, tarayıcı IndexedDB, kulmanlab]
---

# Files

`files` komutu, tarayıcının yerel deposunda (IndexedDB) kaydedilen çizimlerin listesini açar. Buradan herhangi bir çizimi geri yükleyebilir, silebilir veya indirebilirsiniz.

## Files Panelini Açma

Araç çubuğundaki **Files** düğmesine basın veya terminale `files` yazın. Kaydedilen çizimler adlar ve tarihlerle birlikte listelenir.

## Her Çizim için Düğmeler

| Düğme | İşlem |
|-------|-------|
| **Restore** | Çizimi düzenleyiciye yükler (mevcut olanın yerini alır) |
| **Delete** | Çizimi depodan siler (geri alınamaz) |

## "Dosya Yok" Durumu

Kaydedilen çizim yoksa "Kaydedilen dosya yok" mesajı görüntülenir. Çizim üzerinde herhangi bir işlem yapın veya dosya içe aktarın — listede görünecektir.

## IndexedDB Deposu

| Özellik | Ayrıntılar |
|---------|-----------|
| **Depo türü** | IndexedDB (tarayıcıda yerel) |
| **Görünürlük** | Yalnızca bu cihaz ve tarayıcıda |
| **Site temizleme** | Site verilerini silmek tüm çizimleri temizler |
| **Boyut sınırı** | Sabit sınır yok, ancak cihaz kapasitesi son sınır |

Çizimler tarayıcılar veya cihazlar arasında **senkronize edilmez**. Cihazlar arasında transfer için [Export](../export/) → JSON → [Import](../import/) kullanın.

## Başlangıçta Otomatik Yükleme

KulmanLab CAD açıldığında **en son kaydedilen çizim** otomatik olarak yüklenir. Depo boşsa yeni boş çizim açılır.

## Dosya Adlandırma ve Sürümleme

Bir DXF dosyası [içe aktarıldığında](../import/) ada **zaman damgası** eklenir, böylece aynı dosya önceki sürümlerin üzerine yazmadan birden fazla kez içe aktarılabilir. Örneğin: `schematic_2026-01-15_14:32:07`.

## İlgili Komutlar

- [Import](../import/) — cihazdan dosya açar
- [Export](../export/) — çizimi cihaza indirir
- [WipeStorage](../wipestorage/) — depodan tüm çizimleri siler
- [New File](../new-file/) — yeni boş çizim başlatır
