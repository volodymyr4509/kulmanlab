---
title: Import — KulmanLab CAD'de DXF veya JSON Dosyası Aç
description: DXF veya KulmanLab JSON dosyalarını KulmanLab CAD'de açmak için Import komutunu kullanın. Çizgiler, daireler, yaylar, çoklu çizgiler, spline'lar, metinler, ölçüler ve göstergeleri destekler.
keywords: [DXF dosyasını içe aktar, tarayıcıda DXF aç, çevrimiçi CAD dosyası içe aktar, DXF dosyası aç, DXF görüntüleyici tarayıcı, JSON CAD içe aktar, KulmanLab import, ücretsiz CAD DXF görüntüleyici, çizim yükle, DXF tarayıcıya]
group: file
order: 1
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
| Hatch | `HATCH` | Desenin adı, ölçeği ve açısı okunur; desen kitaplığınızda olmayan bir ad ANSI31'e geri döner. [Hatch](../hatch/)'e bakın |

Katman tanımları ve çizgi türü tabloları da mevcutsa DXF dosyasından içe aktarılır.

Desteklenmeyen DXF türlerini kullanan nesneler sessizce atlanır — çizimin geri kalanı yine de yüklenir.

## Dosya Adlandırma ve Depolama

İçe aktarılan dosya orijinal adını korur. Bu ad zaten başka bir kaydedilmiş çizim tarafından kullanılıyorsa, mevcut girişin asla üzerine yazılmaması için otomatik olarak bir Finder/Explorer tarzı ek eklenir (`myplan (2)`, `myplan (3)`, …). Dosyayı daha sonra [File Manager](../file-manager/#bir-dosyayı-yeniden-adlandırma) üzerinden yeniden adlandırabilirsiniz.

Çizim içe aktarma sonrasında tarayıcı deposuna (IndexedDB) otomatik olarak kaydedilir, böylece [File Manager](../file-manager/) panelinde görünür ve sayfa yeniden yüklemelerinde de kaybolmaz.

## Geçerli Çizime Ne Olur

İçe aktarma, geçerli tuvali değiştirir. Birleştirme veya ekleme yoktur. Kaydedilmemiş değişiklikleriniz varsa, önce geçerli çizimi [dışa aktarın](../export-manager/).

## Başlangıçta

KulmanLab, sayfa yüklendiğinde en son düzenlenen dosyayı otomatik olarak yeniden açar. Kayıtlı dosya yoksa varsayılan örnek çizim yüklenir.

## Sorun Giderme

| Sorun | Olası neden | Çözüm |
|---------|-------------|-----|
| İçe aktarma sonrası tuval boş | DXF nesneleri desteklenmeyen türleri kullanıyor (örn. INSERT) | Nesneler atlandı — terminal atlanan her türü sayısıyla listeler, örneğin `Could not read INSERT: 12`. Geçerli bir çizim olmayan bir dosya şunu bildirir: `Could not read <file>: not a valid drawing file` |
| Import düğmesi hiçbir şey yapmıyor | Tarayıcı dosya seçiciyi engelledi | Düğmeye bir kez daha tıklayın; bazı tarayıcılar yeni bir kullanıcı hareketi gerektirir |
| Ölçüler yanlış görünüyor | DXF, standart dışı ölçü geometrisi yazan bir araçtan | Kaynak uygulamadan güncel DXF sürümü kullanarak yeniden dışa aktarın |

## İlgili Komutlar

- [Export Manager](../export-manager/) — mevcut çizimi DXF veya JSON olarak indirir
- [File Manager](../file-manager/) — tarayıcıda kaydedilen çizimlere göz atar ve geri yükler
- [New File](../new-file/) — boş çizim başlatır
