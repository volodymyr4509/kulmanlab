---
title: Export Manager — Çizimleri DXF veya JSON Olarak İndirin
description: Çizimi DXF veya JSON olarak indirin, varlık türü bazında neyin gireceğini işaretleyerek. İkisi de geometri, metin, ölçüler, kılavuz çizgileri ve taramaları taşır.
keywords: [DXF dışa aktar, CAD dosyası dışa aktar, tarayıcıda DXF indir, DXF online kaydet, JSON CAD dışa aktar, KulmanLab dışa aktarma, CAD dosyası indir, DXF dışa aktarma, çizimi dosyaya kaydet, DXF indirme]
group: file
order: 6
---

# Export Manager

`DışaAktarmaYöneticisi` komutu geçerli çizimi dosya sisteminize indirir. İki biçim yan yana durur — diğer CAD araçlarıyla uyum için **DXF** ve KulmanLab CAD içinde tam sadakatli kayıtlar için **JSON** — ve her birinin dosyaya neyin konacağına dair kendi listesi vardır.

## Nasıl dışa aktarılır

1. Dosya panelinde araç çubuğundaki **Export** düğmesine (indirme simgesi) tıklayın veya terminale `DışaAktarmaYöneticisi` yazın.
2. **Export Manager** penceresi iki sütunla açılır, **JSON** ve **DXF**; her biri çizimin varlık türlerini bir onay kutusu ve sayıyla listeler.
3. Dışarıda bırakmak istediklerinizin işaretini kaldırın. Başlangıçta hepsi işaretlidir.
4. **Export JSON** ya da **Export DXF** düğmesine tıklayın. Dosya varsayılan indirme klasörünüze iner ve pencere kapanır.

Dışa aktarmadan açılır pencereyi kapatmak için `Escape` tuşuna basın.

## Neyin dışa aktarılacağını seçme

İki sütun da aynı varlık türlerini listeler, her birinin yanında çizimdeki adediyle:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Pencere açıldığında hepsi işaretlidir, dolayısıyla hemen dışa aktarmak size çizimin tamamını verir. Bir türün işaretini kaldırırsanız yalnızca o dosyanın dışında kalır.

- **İki sütun birbirinden bağımsızdır.** DXF tarafında Hatches işaretini kaldırmak **Export JSON** çıktısını değiştirmez; her biçim kendi seçimini tutar.
- **Sahip olmadığınız tür soluk görünür.** Adedi `0` olan satır işaretlenemez, böylece liste aynı zamanda çizimin hızlı bir dökümü olur.
- **Sayılar anlık bir görüntüdür.** Pencere açıldığında alınır ve arkada çizim değişirse güncellenmez. Yenilemek için kapatıp yeniden açın.
- **Hiçbir şey silinmez.** İşaretin kaldırılması yalnızca dışa aktarılan dosyayı biçimlendirir; çizimin kendisine dokunulmaz.

**Linear Dimensions**, doğrusal, hizalanmış ve sürdürülmüş ölçüleri kapsar: üç farklı komutun ürettiği tek bir varlık türü. Yarıçap, çap ve açı ise ayrı satırlara sahiptir.

Kesim dosyası için Text, dört ölçü satırı, Leaders ve Hatches işaretlerini kaldırıp **Export DXF** düğmesine basın — bkz. [lazer kesim için DXF hazırlama](/tr/blog/prepare-dxf-for-laser-cutting/).

## Format seçimi

| Format | Uzantı | En iyi kullanım | Sınırlamalar |
|--------|--------|------------------|---------------|
| **JSON** *(yerel)* | `.json` | KulmanLab CAD'de yeniden açmak için çalışmayı kaydetme | Diğer CAD araçlarıyla uyumlu değil |
| **DXF** | `.dxf` | FreeCAD, LibreCAD vb. ile paylaşma | Ne kadarının korunacağı, açan uygulamaya bağlıdır |

**JSON ne zaman kullanılır:** çalışmanızın tam bir kopyasını kaydetmek istediğinizde her zaman. JSON, KulmanLab'ın yerel formatıdır ve ölçüler, yön çizgileri, hatch'ler ve tüm katman verileri dahil her varlığı tam olarak korur.

**DXF ne zaman kullanılır:** çizimi başka bir CAD uygulaması kullanan birine teslim etmeniz gerektiğinde. Dışa aktarılan dosya AC1032 DXF formatını kullanır ve çoğu DXF uyumlu araçta açılabilir.

## Her formatta neler dışa aktarılır

### JSON dışa aktarma

Her varlık türü dahildir:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Ölçüler (linear, aligned, continued, radius, diameter, açı)
- Leaders (multileader'lar)
- Hatches, deseni, ölçeği, açısı ve başlangıç noktasıyla birlikte
- Layers ve Linetypes

### DXF dışa aktarma

Her varlık türü dahildir:

- Lines, Circles, Arcs, Ellipses, Polylines (`LWPOLYLINE` olarak dışa aktarılır), Splines
- Text
- Ölçüler (linear, aligned, continued, radius, diameter, açı)
- Leaders (multileader'lar)
- Hatches, deseni, ölçeği, açısı ve başlangıç noktasıyla birlikte
- Layers ve Linetypes

Dosya AC1032 DXF olarak yazılır; böylece KulmanLab'dan dışa aktarılan bir çizim, çıplak geometri olarak varmak yerine DXF okuyabilen diğer araçlarda açıklamaları yerinde açılır.

Alıcı uygulamanın bununla ne yapacağı yine de değişir — DXF desteği araçtan araca farklıdır ve eski bir sürüm, yeni bir sürümün okuduğu varlıkları yok sayabilir. Bir çizimin her yerde birebir aynı görünmesi gerekiyorsa, [Print Manager](../print-manager/) onu bunun yerine PDF veya görüntü olarak yakalar.

## Dışa aktarılan dosyanın adı

İndirilen dosya, geçerli çizim dosyasının adını alır (örn. `myplan.json`). Uzantı, seçilen formata uyacak şekilde değişir. Hiç adlandırılmamış bir çizim `drawing.dxf` veya `drawing.json` olarak dışa aktarılır.

## Export Manager ile Print Manager Arasındaki Fark

| Özellik | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Çıktı | Vektör kaynak dosyası (.dxf / .json) | Raster görüntü (.png / .jpeg / .webp / .pdf) |
| Diğer araçlarda düzenlenebilir | Evet (DXF) | Hayır |
| Layer'ları ve linetype'ları korur | Evet | Hayır (düz olarak render edilir) |
| Ölçüleri ve leader'ları yakalar | Evet | Evet |

Düzenlenebilir bir dosyaya ihtiyacınız olduğunda **Export Manager**'ı kullanın. Görsel bir anlık görüntüye ihtiyacınız olduğunda [Print Manager](../print-manager/)'ı kullanın.

## İlgili komutlar

- [Import](../import/) — bir DXF veya JSON dosyası açın
- [Print Manager](../print-manager/) — tuvali PNG, JPEG, WebP veya PDF görüntüsü olarak dışa aktarın
- [File Manager](../file-manager/) — tarayıcı depolamasında kayıtlı çizimlere göz atın
