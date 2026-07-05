---
title: KulmanLab CAD — Komut Referansı
description: KulmanLab CAD komut referansı — KulmanLab CAD'deki tüm çizim, düzenleme, açıklama, katman, ölçüm ve dosya komutları için eksiksiz kılavuz.
keywords: [KulmanLab, KulmanLab CAD, CAD komutları, ücretsiz tarayıcı CAD, çevrimiçi DXF düzenleyici, çizim komutları, kulmanlab komutları]
---

# KulmanLab CAD — Komut Referansı

**KulmanLab CAD** komut referansına hoş geldiniz. [KulmanLab CAD](https://kulmanlab.com), kurulum gerektirmeden DXF dosyaları çizmek, düzenlemek ve dışa aktarmak için ücretsiz bir tarayıcı tabanlı CAD aracıdır. Mevcut tüm komutlara bölümlere göre gruplandırılmış olarak göz atmak için kenar çubuğunu kullanın.

## Şekiller

| Komut | Ne yapar |
|-------|----------|
| [Line](./commands/line/) | İki nokta arasında düz çizgi çizer |
| [Polyline](./commands/polyline/) | Çok segmentli yol çizer |
| [Rectangle](./commands/rectangle/) | Eksenlere paralel dikdörtgen çizer |
| [Circle](./commands/circle/) | Merkez ve yarıçapa göre daire çizer |
| [Arc](./commands/arc/) | Üç nokta üzerinden yay çizer |
| [Ellipse](./commands/ellipse/) | Merkez ve iki eksen üzerinden elips çizer |
| [Text](./commands/text/) | Tuvale metin etiketi yerleştirir |
| [Spline CV](./commands/spline-cv/) | Kontrol noktaları yerleştirerek spline çizer |
| [Spline Fit](./commands/spline-fit/) | Tıklanan noktalardan geçen spline çizer |

## Düzenle

| Komut | Ne yapar |
|-------|----------|
| [Move](./commands/move/) | Seçili nesneleri yeni konuma taşır |
| [Copy](./commands/copy/) | Seçili nesneleri yeni konuma kopyalar |
| [Rotate](./commands/rotate/) | Seçili nesneleri temel nokta etrafında döndürür |
| [Mirror](./commands/mirror/) | Seçili nesneleri bir çizgi boyunca aynalar |
| [Scale](./commands/scale/) | Seçili nesneleri temel nokta etrafında ölçekler |
| [Delete](./commands/delete/) | Seçili nesneleri çizimden siler |
| [Trim](./commands/trim/) | Kesişimlerde çizgi parçasını kırpar |
| [Extend](./commands/extend/) | Çizgiyi en yakın sınır kesişimine kadar uzatır |
| [Offset](./commands/offset/) | Belirli bir mesafede nesnenin paralel kopyasını oluşturur |
| [Fillet](./commands/fillet/) | İki çizgi arasındaki köşeyi teğet yayla yuvarlar |
| [Chamfer](./commands/chamfer/) | İki çizgi veya çoklu çizgi arasına düz köşegen pah kesar |
| [Undo](./commands/undo/) | Son işlemi geri alır |
| [Redo](./commands/redo/) | Son geri alınan işlemi yineler |

## Açıklama

| Komut | Ne yapar |
|-------|----------|
| [Leader](./commands/leader/) | Ok ve metinle çok segmentli gösterge çizer |
| [Leader+](./commands/leader-add/) | Mevcut göstergeye ek dal ekler |
| [Leader−](./commands/leader-remove/) | Mevcut göstergeden dal kaldırır |
| [Dimension Linear](./commands/dim-linear/) | Yatay veya dikey ölçü ekler |
| [Dimension Aligned](./commands/dim-aligned/) | İki noktaya hizalanmış ölçü ekler |
| [Dimension Continue](./commands/dim-continue/) | Önceki ölçüye zincir ölçü ekler |
| [Dimension Radius](./commands/dim-radius/) | Daire veya yay için yarıçap ölçüsü ekler |
| [Dimension Diameter](./commands/dim-diameter/) | Daire için çap ölçüsü ekler |
| [Dimension Angular](./commands/dim-angular/) | İki çizgi, yay veya daire için açısal ölçü ekler |

## Katman

| Komut | Ne yapar |
|-------|----------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Tıklanan nesneye göre geçerli katmanı ayarlar |
| [LayerMatch](./commands/layer-match/) | Seçili nesneleri kaynak nesnenin katmanına yeniden atar |
| [LayerIsolate](./commands/layer-isolate/) | Seçili nesnelerin katmanları dışındaki tüm katmanları dondurur |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Tüm katmanları tek adımda çözer |

## Yerleşim

| Komut | Ne yapar |
|-------|----------|
| [ViewportRectangle](./commands/viewport-rectangle/) | İki köşe seçerek kağıt yerleşiminde görünüm penceresi oluşturur |
| [ViewportCopy](./commands/viewport-copy/) | Görünüm penceresini yeni konuma kopyalar |
| [PageManager](./commands/page-manager/) | Aktif yerleşimin kağıt boyutunu ve ölçeğini düzenler |

## Gezinme

| Komut | Ne yapar |
|-------|----------|
| [Pan](./commands/pan/) | Görünümü taşımak için tıklayıp sürükler |
| [Zoom In](./commands/zoom-in/) | Görünümü yakınlaştırır |
| [Zoom Out](./commands/zoom-out/) | Görünümü uzaklaştırır |
| [Fit](./commands/fit/) | Tüm nesneleri görünüm penceresine sığdırır |

## Ölçüm

| Komut | Ne yapar |
|-------|----------|
| [Distance](./commands/distance/) | İki nokta arasındaki mesafeyi ölçer |
| [Angle](./commands/angle/) | Üç nokta arasındaki açıyı ölçer |

## Stil

| Komut | Ne yapar |
|-------|----------|
| [Match Properties](./commands/match-properties/) | Renk, katman ve diğer özellikleri bir nesneden diğerlerine kopyalar |

## Dosya

| Komut | Ne yapar |
|-------|----------|
| [Import](./commands/import/) | DXF veya JSON çizim dosyası açar |
| [New File](./commands/new-file/) | Yeni boş çizim başlatır |
| [Files](./commands/files/) | Son çizimleri görüntüler ve geri yükler |
| [Print](./commands/print/) | Çizim alanını resim veya PDF olarak dışa aktarır |
| [Export](./commands/export/) | Çizimi DXF veya JSON formatında indirir |
| [WipeStorage](./commands/wipestorage/) | Tarayıcı deposundan tüm çizimleri temizler |

## Kurtarma

Uygulama her başlatmada çöküyorsa (örneğin çok büyük koordinatlarla çalışmadan sonra), URL'ye `?reset` ekleyerek tüm yerel olarak kaydedilen verileri temizleyebilirsiniz:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Bu işlem tarayıcının yerel veritabanından her şeyi siler ve yeni boş bir çizim başlatır. `?reset` parametresi URL'den otomatik olarak kaldırılır. Bunu yalnızca [WipeStorage](./commands/wipestorage/) kullanılamadığında, yani uygulama hiç yüklenmediğinde son çare olarak kullanın.

## Komutlar Nasıl Çalışır

Her komut aynı kalıbı izler:

1. **Etkinleştir** — araç çubuğundaki düğmeye basın veya ekranın altındaki terminale komut adını yazın.
2. **İstemi takip et** — terminal bir sonraki beklenen girişi gösterir.
3. **Tamamla veya iptal et** — çoğu komut son girişten sonra otomatik olarak tamamlanır. İptal etmek için istediğiniz zaman **Escape** tuşuna basın.

## Nesne Seçimi

Birkaç düzenleme komutu (Move, Copy, Rotate, Mirror, Scale, Delete) aynı seçim davranışını paylaşır:

- Seçmek veya seçimi kaldırmak için nesneye **tıklayın**.
- **Sağa sürükleyin** (soldan sağa) katı seçim için — yalnızca çerçevenin tamamen içindeki nesneler seçilir.
- **Sola sürükleyin** (sağdan sola) çapraz seçim için — çerçeveyle kesişen herhangi bir nesne seçilir.
- Seçimi onaylamak ve sonraki adıma geçmek için **Enter** veya **Boşluk** tuşuna basın.
