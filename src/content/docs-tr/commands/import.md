---
sidebar_position: 46
title: Import Komutu — KulmanLab CAD'de DXF veya JSON Dosyası Aç
description: Import komutu, standart dosya seçimi iletişim kutusunu açar veya sürüklenen dosyayı kabul eder. Geçerli çizim içe aktarılanla değiştirilir. Dosya zaman damgası eklenerek IndexedDB'ye kaydedilir.
keywords: [CAD import komutu, DXF dosyası aç tarayıcı, DXF içe aktar çevrimiçi, CAD dosyası aç, kulmanlab]
---

# Import

`import` komutu, cihazınızdan bir çizim dosyası açar ve düzenleyiciye yükler. DXF ve KulmanLab CAD'in özel JSON formatı desteklenir.

## İki İçe Aktarma Yöntemi

- **Araç çubuğu düğmesi / Terminal**: **Import**'a tıklayın veya `import` yazın — standart dosya seçimi iletişim kutusu açılır.
- **Sürükle ve bırak**: `.dxf` veya `.json` dosyasını doğrudan tuvale sürükleyin — dosya hemen yüklenir.

## DXF'den Ne İçe Aktarılır

| DXF Nesnesi | Kod | İçe aktarılır mı? |
|------------|-----|------------------|
| Çizgi | `LINE` | Evet |
| Çoklu çizgi | `LWPOLYLINE` | Evet |
| Daire | `CIRCLE` | Evet |
| Yay | `ARC` | Evet |
| Elips | `ELLIPSE` | Evet |
| Spline | `SPLINE` | Evet |
| Metin | `TEXT` / `MTEXT` | Evet |
| Ölçüler | `DIMENSION` | Evet |
| Gösterge | `MLEADER` | Evet |
| 3B cisimler, tarama, bloklar | Çeşitli | Hayır — yok sayılır |

## Dosya Adlandırma ve Depolama

İçe aktarma sırasında dosya adına **otomatik olarak zaman damgası eklenir** — aynı dosya önceki sürümlerin üzerine yazmadan birden fazla kez içe aktarılabilir:

```
schematic.dxf → schematic_2026-01-15_14:32:07
```

Dosya tarayıcının **IndexedDB**'sine kaydedilir — bu cihaz ve tarayıcıda yerel olarak.

## Geçerli Çizime Ne Olur

Geçerli çizim **değiştirilir** — birleştirilmez. Çalışmanızı korumak için içe aktarmadan önce geçerli çizimi [Export](./export) ile kaydedin.

## Başlangıçta

KulmanLab CAD açıldığında IndexedDB'den **en son kaydedilen çizim** otomatik olarak yüklenir. Ek bir işlem gerekmez.

## Sorun Giderme

| Sorun | Çözüm |
|-------|-------|
| Dosya açılmıyor | Dosyanın `.dxf` veya `.json` olduğunu ve bozulmadığını kontrol edin |
| Bazı nesneler eksik | Desteklenmeyebilirler (3B cisimler, bloklar) — normal davranış |
| Çizim boş görünüyor | [Fit](./fit) deneyin — nesneler görünür alanın dışında olabilir |
| Büyük dosya hatası | Çok büyük DXF dosyaları (1000+ nesne) birkaç saniye sürebilir |

## Import - Files Karşılaştırması

| | Import | Files |
|---|--------|-------|
| Kaynak | Cihazdan dosya | Tarayıcıda önceden kaydedilen çizimler |
| Nereye bakılır | Dosya sistemi | Tarayıcı IndexedDB deposu |
| En iyi | Harici DXF dosyalarını açma | Önceki çalışmayı geri yükleme |
