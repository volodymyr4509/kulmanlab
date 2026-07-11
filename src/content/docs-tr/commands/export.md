---
title: Export — KulmanLab CAD'de Çizimleri DXF veya JSON Olarak İndir
description: Export komutu, mevcut çizimi DXF (uyumluluk) veya JSON (yerel format) dosyası olarak indirir. JSON, ölçüler ve göstergeler dahil tüm nesneleri korur; DXF, diğer CAD araçlarıyla uyumludur.
keywords: [DXF dışa aktar, CAD dosyası dışa aktar, DXF tarayıcıda indir, DXF çevrimiçi kaydet, JSON CAD dışa aktar, KulmanLab export, CAD dosyası indirme, DXF dışa aktarma, çizimi dosyaya kaydet, DXF indirme]
group: file
order: 5
---

# Export

**Export** komutu, mevcut çizimi dosya sisteminize indirir. İki format mevcuttur: diğer CAD araçlarıyla uyumluluk için **DXF** ve KulmanLab CAD içinde tam doğruluklu kaydetme için **JSON**.

## Nasıl Dışa Aktarılır

1. Dosya panelindeki araç çubuğunda **Export** düğmesine (indirme simgesi) tıklayın.
2. **Dışa Aktarma Yöneticisi** açılır penceresi açılır.
3. Format seçmek için bir format kartına tıklayın — **JSON** veya **DXF**.
4. **Export** düğmesine tıklayın. Dosya otomatik olarak varsayılan indirmeler klasörünüze indirilir.

## Format Seçimi

| Format | Uzantı | En iyi | Sınırlamalar |
|--------|-----------|----------|-------------|
| **JSON** *(yerel)* | `.json` | KulmanLab CAD'de yeniden açmak için çalışmayı kaydetme | Diğer CAD araçlarıyla uyumlu değil |
| **DXF** | `.dxf` | FreeCAD, LibreCAD, vb. ile paylaşma | Ölçüler ve göstergeler dışa aktarılmaz |

**JSON ne zaman kullanılır:** çalışmanızın tam bir kopyasını kaydetmek istediğinizde. JSON, KulmanLab'ın yerel formatıdır ve ölçüler, göstergeler ve tüm katman verileri dahil her nesneyi tam olarak korur.

**DXF ne zaman kullanılır:** çizimi başka bir CAD uygulaması kullanan birine teslim etmeniz gerektiğinde. Dışa aktarılan dosya AC1012 DXF formatını kullanır ve DXF uyumlu araçların çoğunda açılabilir.

## Format Başına Dışa Aktarılanlar

### JSON dışa aktarımı

Tüm nesne türleri dahildir:

- Çizgiler, daireler, yaylar, elipsler, çoklu çizgiler, spline'lar, metinler
- Ölçüler (doğrusal, hizalı, zincirleme, yarıçap, çap)
- Çoklu göstergeler
- Katman tanımları ve çizgi türü tabloları

### DXF dışa aktarımı

Yalnızca geometri nesneleri dahildir:

- Çizgiler, daireler, yaylar, elipsler, çoklu çizgiler (`LWPOLYLINE` olarak dışa aktarılır), spline'lar, metinler
- Katman tanımları ve çizgi türü tabloları

**DXF'e dahil edilmeyenler:** ölçü nesneleri ve çoklu göstergeler. Bunlar, standart DXF'de sadakatle temsil edilemeyen KulmanLab'a özgü veri yapıları kullanır. Çiziminizde ek açıklamalar varsa, bunları görsel olarak yakalamak için JSON veya [Print](../print/) kullanın.

## Dışa Aktarılan Dosya Adı

İndirilen dosya, mevcut çizim dosyasından sonra adlandırılır (örneğin `myplan_May22_14:30:00.json`). Uzantı seçilen formatla eşleşecek şekilde değişir.

## Export - Print Farkı

| Özellik | Export | Print |
|---------|--------|-------|
| Çıktı | Vektör kaynak dosyası (.dxf / .json) | Raster görüntü (.png / .jpeg / .webp / .pdf) |
| Diğer araçlarda düzenlenebilir | Evet (DXF) | Hayır |
| Katmanları ve çizgi türlerini korur | Evet | Hayır (düz olarak işlenir) |
| Ölçüleri ve göstergeleri yakalar | Yalnızca JSON | Evet |

Düzenlenebilir bir dosyaya ihtiyacınız olduğunda **Export** kullanın. Görsel bir anlık görüntüye ihtiyacınız olduğunda [Print](../print/) kullanın.

## İlgili Komutlar

- [Import](../import/) — DXF veya JSON dosyası açar
- [Print](../print/) — tuvali PNG, JPEG, WebP veya PDF görüntüsü olarak dışa aktarır
- [Files](../files/) — tarayıcı deposuna kaydedilmiş çizimlere göz atar
