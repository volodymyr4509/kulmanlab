---
sidebar_position: 46
title: Import — KulmanLab CAD'de DXF veya JSON Dosyası Aç
description: DXF veya KulmanLab JSON dosyalarını KulmanLab CAD'de açmak için Import komutunu kullanın. Çizgiler, daireler, yaylar, çoklu çizgiler, spline'lar, metinler, ölçüler ve göstergeleri destekler.
keywords: [DXF dosyasını içe aktar, tarayıcıda DXF aç, çevrimiçi CAD dosyası içe aktar, DXF dosyası aç, DXF görüntüleyici tarayıcı, JSON CAD içe aktar, KulmanLab import, ücretsiz CAD DXF görüntüleyici, çizim yükle, DXF tarayıcıya]
---

# Import

**Import** komutu, yerel dosya sisteminizden mevcut bir çizimi KulmanLab CAD'e yükler. Hem standart **DXF** formatı hem de KulmanLab'ın kendi **JSON** formatı desteklenir.

## Dosya Nasıl İçe Aktarılır

1. Ekranın üstündeki Dosya panelindeki araç çubuğunda **Import** düğmesine (klasör simgesi) tıklayın.
2. Tarayıcınızın dosya seçici penceresi açılır. Çizim dosyanıza gidin ve seçin.
3. Çizim hemen tuvale yüklenir. Görünüm penceresi tüm nesnelere otomatik olarak sığdırılır.

Alternatif olarak, bir dosyayı doğrudan tuvale sürükleyip bırakabilirsiniz.

## Desteklenen Dosya Formatları

| Format | Uzantı | Ne zaman kullanılır |
|--------|-----------|-------------|
| **DXF** | `.dxf` | FreeCAD, LibreCAD veya diğer CAD araçlarından çizimler |
| **JSON** *(yerel)* | `.json` | KulmanLab CAD'den daha önce kaydedilen çizimler — tam doğruluk |

## DXF'den Neler İçe Aktarılır

KulmanLab aşağıdaki DXF nesne türlerini ayrıştırır:

| Nesne türü | DXF kodu | Notlar |
|-------------|----------|-------|
| Çizgi | `LINE` | |
| Daire | `CIRCLE` | |
| Yay | `ARC` | |
| Elips | `ELLIPSE` | |
| Çoklu çizgi | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Metin | `TEXT`, `MTEXT` | |
| Ölçü | `DIMENSION` | |
| Çoklu Gösterge | `MULTILEADER` | |

Katman tanımları ve çizgi türü tabloları da mevcutsa DXF dosyasından içe aktarılır.

Desteklenmeyen DXF türlerini kullanan nesneler sessizce atlanır — çizimin geri kalanı yine de yüklenir.

## Dosya Adlandırma ve Depolama

Bir dosyayı içe aktardığınızda, dosya adına zaman damgası eklenir (örneğin `myplan_May22_14:30:00.dxf`). Bu, [Son Dosyalar](./files) bölümünde aynı çizimin birden fazla sürümünü ad çakışması olmadan saklamanızı sağlar. Dosya adı zaten bir zaman damgası içeriyorsa, olduğu gibi kullanılır.

Çizim içe aktarma sonrasında tarayıcı deposuna (IndexedDB) otomatik olarak kaydedilir, böylece [Files](./files) panelinde görünür ve sayfa yeniden yüklemelerinde de kaybolmaz.

## Geçerli Çizime Ne Olur

İçe aktarma, geçerli tuvali değiştirir. Birleştirme veya ekleme yoktur. Kaydedilmemiş değişiklikleriniz varsa, önce geçerli çizimi [dışa aktarın](./export).

## Başlangıçta

KulmanLab, sayfa yüklendiğinde en son düzenlenen dosyayı otomatik olarak yeniden açar. Kayıtlı dosya yoksa varsayılan örnek çizim yüklenir.

## Sorun Giderme

| Sorun | Olası neden | Çözüm |
|---------|-------------|-----|
| İçe aktarma sonrası tuval boş | DXF nesneleri desteklenmeyen türleri kullanıyor (örn. HATCH, INSERT) | Nesneler atlandı — terminaldeki "nesne bulunamadı" mesajını kontrol edin |
| Import düğmesi hiçbir şey yapmıyor | Tarayıcı dosya seçiciyi engelledi | Düğmeye bir kez daha tıklayın; bazı tarayıcılar yeni bir kullanıcı hareketi gerektirir |
| Ölçüler yanlış görünüyor | DXF, standart dışı ölçü geometrisi yazan bir araçtan | Kaynak uygulamadan güncel DXF sürümü kullanarak yeniden dışa aktarın |

## İlgili Komutlar

- [Export](./export) — mevcut çizimi DXF veya JSON olarak indirir
- [Files](./files) — tarayıcıda kaydedilen çizimlere göz atar ve geri yükler
- [New File](./new-file) — boş çizim başlatır
