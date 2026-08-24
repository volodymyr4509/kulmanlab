---
title: Export Manager — Çizimleri DXF veya JSON Olarak İndirin
description: Export Manager, geçerli çizimi DXF veya JSON (yerel) dosya olarak indirir. Her format, hangi varlık türlerini taşıdığını yan yana tam olarak listeler, böylece indirmeden önce DXF'nin neyi dışarıda bıraktığını görürsünüz — şu anda hatch'ler, ölçüler, yön çizgileri ve metin.
keywords: [DXF dışa aktar, CAD dosyası dışa aktar, tarayıcıda DXF indir, DXF online kaydet, JSON CAD dışa aktar, KulmanLab dışa aktarma, CAD dosyası indir, DXF dışa aktarma, çizimi dosyaya kaydet, DXF indirme]
group: file
order: 6
---

# Export Manager

`exportmanager` komutu, geçerli çizimi dosya sisteminize indirir. Yan yana kartlar olarak gösterilen iki format mevcuttur: diğer CAD araçlarıyla uyumluluk için **DXF** ve KulmanLab CAD içinde tam sadakatle kaydetmek için **JSON** — her kart, o formatın hangi varlık türlerini taşıdığını tam olarak listeler.

## Nasıl dışa aktarılır

1. Dosya panelinde araç çubuğundaki **Export** düğmesine (indirme simgesi) tıklayın veya terminale `exportmanager` yazın.
2. **Export Manager** açılır penceresi, JSON ve DXF kartlarını yan yana göstererek açılır; her biri neyin dışa aktarıldığını (ve DXF için neyin dışarıda bırakıldığını) listeler.
3. Formatı seçmek için bir karta tıklayın — **JSON** veya **DXF**.
4. **Export \<FORMAT\>** düğmesine tıklayın. Dosya otomatik olarak varsayılan indirilenler klasörünüze indirilir.

Dışa aktarmadan açılır pencereyi kapatmak için `Escape` tuşuna basın.

## Format seçimi

| Format | Uzantı | En iyi kullanım | Sınırlamalar |
|--------|--------|------------------|---------------|
| **JSON** *(yerel)* | `.json` | KulmanLab CAD'de yeniden açmak için çalışmayı kaydetme | Diğer CAD araçlarıyla uyumlu değil |
| **DXF** | `.dxf` | FreeCAD, LibreCAD vb. ile paylaşma | Hatch'ler, ölçüler, yön çizgileri ve metin dışa aktarılmaz |

**JSON ne zaman kullanılır:** çalışmanızın tam bir kopyasını kaydetmek istediğinizde her zaman. JSON, KulmanLab'ın yerel formatıdır ve ölçüler, yön çizgileri, hatch'ler ve tüm katman verileri dahil her varlığı tam olarak korur.

**DXF ne zaman kullanılır:** çizimi başka bir CAD uygulaması kullanan birine teslim etmeniz gerektiğinde. Dışa aktarılan dosya AC1032 DXF formatını kullanır ve çoğu DXF uyumlu araçta açılabilir.

## Her formatta neler dışa aktarılır

### JSON dışa aktarma

Her varlık türü dahildir:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Ölçüler (linear, aligned, continued, radius, diameter)
- Leaders (multileader'lar)
- Hatches, deseni, ölçeği, açısı ve başlangıç noktasıyla birlikte
- Layers ve Linetypes

### DXF dışa aktarma

Yalnızca geometri varlıkları dahildir:

- Lines, Circles, Arcs, Ellipses, Polylines (`LWPOLYLINE` olarak dışa aktarılır), Splines
- Layers ve Linetypes

**DXF'ye dışa aktarılmaz:** hatch'ler, ölçüler, leader'lar ve metin. Ölçüler ve leader'lar, standart DXF'de sadakatle temsil edilemeyen KulmanLab'a özgü veri yapıları kullanır; hatch'ler DXF'den içe aktarılabilse de henüz DXF'ye hiç dışa aktarılmaz; metin dışa aktarma da henüz uygulanmamıştır. Çiziminizde bunlardan herhangi biri varsa, onları yakalamak için JSON veya [Print Manager](../print-manager/) kullanın.

## Dışa aktarılan dosyanın adı

İndirilen dosya, geçerli çizim dosyasının adını alır (örn. `myplan.json`). Uzantı, seçilen formata uyacak şekilde değişir.

## Export Manager ile Print Manager Arasındaki Fark

| Özellik | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Çıktı | Vektör kaynak dosyası (.dxf / .json) | Raster görüntü (.png / .jpeg / .webp / .pdf) |
| Diğer araçlarda düzenlenebilir | Evet (DXF) | Hayır |
| Layer'ları ve linetype'ları korur | Evet | Hayır (düz olarak render edilir) |
| Ölçüleri ve leader'ları yakalar | Yalnızca JSON | Evet |

Düzenlenebilir bir dosyaya ihtiyacınız olduğunda **Export Manager**'ı kullanın. Görsel bir anlık görüntüye ihtiyacınız olduğunda [Print Manager](../print-manager/)'ı kullanın.

## İlgili komutlar

- [Import](../import/) — bir DXF veya JSON dosyası açın
- [Print Manager](../print-manager/) — tuvali PNG, JPEG, WebP veya PDF görüntüsü olarak dışa aktarın
- [File Manager](../file-manager/) — tarayıcı depolamasında kayıtlı çizimlere göz atın
