---
title: Rectangle Komutu — Eksenlere Paralel Dikdörtgenler Çiz
description: Rectangle komutu, iki karşıt köşeden eksenlere paralel dikdörtgen oluşturur. Sonuç, dört köşeli kapalı LWPOLYLINE'dır — bir kez yerleştirildikten sonra diğer çoklu çizgilerle özdeştir, dolayısıyla her çoklu çizgi düzenleme komutu ona uygulanır.
keywords: [CAD rectangle komutu, dikdörtgen çiz CAD, eksenlere paralel dikdörtgen, kapalı çoklu çizgi CAD, LWPOLYLINE DXF, dikdörtgen tutamaç düzenleme, kulmanlab]
group: shapes
order: 3
---

# Rectangle

`Dikdörtgen` komutu, iki karşıt köşe tıklamasıyla tanımlanan eksenlere paralel dikdörtgen çizer. Sonuç, dört köşede birer köşe noktası olan **kapalı `LWPOLYLINE`** olarak saklanır. Ayrılmış bir dikdörtgen nesne türü yoktur: oluşturulduktan sonra şekil, diğer [Çoklu Çizgi](../polyline/) gibi tam olarak davranır ve her çoklu çizgi düzenlemesi ona uygulanır.

## Dikdörtgen Çizimi

1. Terminale `Dikdörtgen` yazın veya araç çubuğundaki **Rectangle** düğmesine tıklayın.
2. **Birinci köşeyi tıklayın** veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Karşıt köşeyi tıklayın** — dikdörtgen anında yerleştirilir ve komut çıkar. Koordinat girişi burada da çalışır. Ya da tam bir genişlik ve yükseklik girmek için bunun yerine `D` tuşuna basın — aşağıdaki [Ölçü Girişi](#ölçü-girişi) bölümüne bakın.

```
  ● (birinci tıklama)────────────┐
  |                              |
  |   canlı önizleme imleci      |
  |   adım 2'den sonra takip eder|
  └──────────────────────────────● (ikinci tıklama)
```

İki tıklama, köşegen karşıt köşelerin herhangi bir çifti olabilir — sol üst + sağ alt, veya sol alt + sağ üst, vb. Sıra önemli değildir.

## Koordinat Girişi

Her iki köşe adımında da tam konum yazabilirsiniz:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Köşeyi yerleştirmek için **Enter** tuşuna basın.

## Ölçü Girişi

İkinci bir köşeyi tıklamak yerine, yazılı genişlik × yükseklik girişine geçmek için birinci köşeden hemen sonra `D` tuşuna basın:

1. **Genişliği yazın** ve **Enter** tuşuna basın.
2. **Yüksekliği yazın** ve **Enter** tuşuna basın — istem artık dikdörtgen için bir yön seçmenizi ister.
3. **İmleci** birinci köşe etrafında **hareket ettirin** — dikdörtgen, imlecin o an üzerinde bulunduğu çeyrekte (sol üst, sağ üst, sol alt, sağ alt) canlı olarak önizlenir.
4. **Tıklayın** — o yönde yerleştirilir.

Yön seçimi adımında genişlik ve yüksekliği, az önce yazdığınızla önceden doldurulmuş şekilde yeniden girmek için `D` tuşuna tekrar basın.

Genişlik ve yükseklik, en son ölçülendirdiğiniz dikdörtgenden hatırlanır: her iki istemde de önceki değer önceden doldurulmuş ve **Enter** ile onaylanmaya hazır olarak görünür, ya da yeni bir sayıyla değiştirmek için doğrudan yazmaya başlayabilirsiniz.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini, ya da (Ölçü Girişi modunda) genişlik/yükseklik alanını başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `D` | Birinci köşeden sonra Ölçü Girişine geçer; yön adımında genişlik/yüksekliği yeniden girer |
| `Enter` | Yazılan koordinatı, genişliği veya yüksekliği onaylar |
| `Escape` | İptal eder |

Kenarlar her zaman yatay ve dikeydir — dikdörtgen komutu için açı kilitleme yoktur.

## Tutamaç Düzenleme — Oluşturma Sonrası Yeniden Şekillendirme

Seçili bir dikdörtgen, her köşede ve her kenarın orta noktasında tutamaçlar gösterir:

| Tutamaç | Konum | Ne yapar |
|------|----------|--------------|
| **Köşe** | 4 köşenin her biri | Sürükleyerek o köşeyi taşır; iki bitişik kenar geride kalır — karşıt köşe sabit kalır |
| **Kenar orta noktası** | 4 kenarın her birinin merkezi | Sürükleyerek o kenarın her iki ucunu birlikte ötelemek, kenarın uzunluğunu ve açısını korur |

Köşe tutamacını sürüklemek dikdörtgeni dikdörtgen olmayan bir dörtgene dönüştürür. Yalnızca farklı boyutta bir dikdörtgen istiyorsanız, kenarları yaklaşık dik açıda tutarak bir köşeyi sürükleyin ya da silin ve yeni bir tane çizin.

## Dikdörtgen Seçimi

Dikdörtgen bir çoklu çizgi olduğundan, seçim aynı şekilde çalışır:

| Yöntem | Davranış |
|--------|-----------|
| **Tıklama** | Tıklama dört kenardan herhangi birine denk gelirse seçer |
| **Sağa sürükleme** (katı) | Dört köşenin tamamı seçim kutusunun içinde olmalıdır |
| **Sola sürükleme** (çapraz) | Kutu sınırını kesen herhangi bir kenar tüm dikdörtgeni seçer |

## Desteklenen Düzenleme Komutları

Tüm çoklu çizgi düzenleme komutları geçerlidir. Trim ve Extend yalnızca [Çizgi](../line/) için olup dikdörtgenlerde çalışmaz:

| Komut | Dikdörtgene ne olur |
|---------|-------------------------------|
| [Move](../move/) | Dört köşenin tamamını aynı yer değiştirmeyle ötelemek |
| [Copy](../copy/) | Yeni konumda özdeş dikdörtgen oluşturur |
| [Rotate](../rotate/) | Dört köşenin tamamını seçilen temel nokta etrafında döndürür |
| [Mirror](../mirror/) | Dört köşenin tamamını yansıtma ekseni üzerinden yansıtır |
| [Scale](../scale/) | Dört köşenin tamamını temel noktadan düzgün şekilde ölçekler |
| [Offset](../offset/) | Sabit mesafede paralel (içe veya dışa) dikdörtgen oluşturur |
| [Delete](../delete/) | Dikdörtgeni çizimden kaldırır |

## Özellikler

Bir dikdörtgen seçildiğinde özellikler paneli, herhangi bir çoklu çizgiyle aynı alanları gösterir:

**Genel**

| Özellik | Varsayılan | Anlam |
|----------|---------|---------|
| Renk | 256 (Katmana Göre) | ACI renk dizini |
| Katman | `0` | Katman ataması |
| Çizgi türü | Katmana Göre | Adlandırılmış çizgi türü deseni |
| Çizgi türü ölçeği | 1 | Çizgi türü desenindeki ölçek faktörü |
| Kalınlık | 0 | Ekstrüzyon kalınlığı |

**Geometri**

| Özellik | Anlam |
|----------|---------|
| Kapalı | Dikdörtgen için her zaman `true` |
| Köşe Sayısı | Değiştirilmemiş dikdörtgen için her zaman `4` |
| Köşeler | Dört köşenin koordinatları |

## Rectangle - Polyline - Line Karşılaştırması

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Nasıl çizilir | 2 tıklama (köşeler) | Her köşeyi tıklayın | Her uç noktayı tıklayın |
| Nesne türü | Kapalı `LWPOLYLINE` | Açık veya kapalı `LWPOLYLINE` | Segment başına `LINE` |
| Kenarlar her zaman dik açılı | Evet (oluşturulduğunda) | Hayır | Hayır |
| Trim / Extend | Hayır | Hayır | Evet |
| En iyi | Kutular, çerçeveler, dikdörtgen alanlar | Keyfi ana hatlar ve yollar | Münferit segmentler, yapım çizgileri |

## DXF — LWPOLYLINE nesnesi

Dikdörtgenler, dört köşeli kapalı `LWPOLYLINE` nesneleri olarak kaydedilir. Tüm özellikler — köşe koordinatları, renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık — kayıpsız round-trip yapar.

DXF'de ayrılmış `RECTANGLE` türü yoktur. Bir dosya yeniden açıldığında şekil, dikdörtgen yerine kapalı dört köşeli çoklu çizgi olarak görünür. `LWPOLYLINE`'ı destekleyen herhangi bir DXF görüntüleyici veya düzenleyici (LibreCAD, FreeCAD, vb.) bunu doğru şekilde görüntüler.
