---
title: Line Komutu — KulmanLab CAD'de Çizgi Çiz, Zincirle, Kırp ve Uzat
description: Line komutu, uçtan uca zincirlenebilen ayrı düz çizgi segmentleri çizer. Çizgiler, Trim ve Extend işlemlerinin uygulandığı tek nesne türüdür. DXF LINE nesneleri olarak tam round-trip.
keywords: [CAD line komutu, düz çizgi çiz CAD, segmentleri zincirle, çizgiyi kırp CAD, çizgiyi uzat CAD, açı kilidi CAD, DXF LINE nesnesi, kulmanlab]
group: shapes
order: 1
---

# Line

`line` komutu, DXF modelinde ayrı `LINE` nesneleri olarak saklanan ayrı düz çizgi segmentleri çizer. Her segmentten sonra komut aktif kalır ve uç noktayı yeni başlangıç noktası olarak yeniden kullanır, böylece bir seferde bir segment oluşturarak bağlantılı yollar oluşturabilirsiniz. [Polyline](../polyline/) komutunun aksine, zincirlenen çizgiler bağımsız nesneler olarak kalır — her biri komşularını etkilemeden kırpılabilir, uzatılabilir veya silinebilir.

## Çizgi Çizimi

1. Terminale `line` yazın veya araç çubuğundaki **Line** düğmesine basın.
2. **Başlangıç noktasını tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Bitiş noktasını tıklayın** — segment yerleştirilir ve bitiş noktası bir sonraki başlangıç olur. Burada koordinat girişi de çalışır.
4. Daha fazla segment zincirlemek için tıklamaya (veya yazmaya) devam edin.
5. Tamamlamak için **Enter** veya **Escape** tuşuna basın.

```
  ●──────────●──────────●──────────●
 Başlangıç  2. tıklama  3. tıklama   Tamamlamak için Enter
            (otomatik olarak sonraki başlangıç olur)
```

Yalnızca bir segment mi gerekiyor? 3. adımdan hemen sonra **Enter** veya **Escape** tuşuna basın.

## Koordinat Girişi

Tıklamak yerine başlangıç veya herhangi bir sonraki nokta için kesin konum girin:

1. X değerini yazın (rakamlar, `.` veya `-`).
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Noktayı yerleştirmek için **Enter** tuşuna basın.

## Açı Kilidi ve Kesin Uzunluk Girişi

Bir nokta yerleştirdikten sonra imleci hareket ettirdiğinizde, komut 45°'lik yakalama eksenlerini (0°, 45°, 90°, 135°, ...) izler. Açı şu durumda **kilitlenir**:

- İmleç çapadan en az **5 × tutamaç boyutu** uzaktaysa, **ve**
- En yakın eksene **1 tutamaç boyutu** içinde dik mesafedeyse.

Kilitlendiğinde önizleme eksene yapışır ve kesin uzunluk girebilirsiniz:

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Uzunluk değerine rakam ekler |
| `-` | Negatif uzunluk — eksen boyunca yönü değiştirir (yalnızca ilk karakter) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Bitiş noktasını girilen mesafeye yerleştirir |

Biriktirilen değer terminalde gerçek zamanlı görüntülenir (örneğin `click end point or enter length: 12.5`). Eksen kilitliyken tıklama eksene yansıtılır, bu nedenle bitiş noktası her zaman tam olarak eksen üzerinde yer alır.

İmleci çapaya yakın getirmek kilidi kaldırır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini veya açı kilitliyken mesafeyi başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı veya uzunluğu onaylar ya da giriş yoksa zinciri tamamlar |
| `Escape` | Zinciri tamamlar ve çıkar |

## Tutamaç Düzenleme — Uç Noktaları Uzatma

Seçili çizgi üç tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|---------|-------|----------|
| **Başlangıç** | Birinci uç nokta | Sürükleyerek taşıyın — bitiş sabit kalır |
| **Orta** | Çizginin merkezi | Tüm çizgi için **Move**'u etkinleştirir |
| **Bitiş** | İkinci uç nokta | Sürükleyerek taşıyın — başlangıç sabit kalır |

Bir uç noktayı uzatmak hiçbir zaman diğerini etkilemez. Bu, [Polyline](../polyline/) tutamaç düzenlemesinden farklıdır; orada bir köşeyi taşımak tüm yolun şeklini değiştirir.

## Çizgi Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | Tıklama segment algılama mesafesi içindeyse seçer |
| **Sağa sürükleme** (katı) | Yalnızca her iki uç nokta da çerçevenin içindeyse seçer |
| **Sola sürükleme** (çapraz) | Segmentin herhangi bir parçası çerçeve sınırını kesiyorsa seçer |

## Desteklenen Düzenleme Komutları

Çizgiler, [Trim](../trim/) ve [Extend](../extend/) işlemlerinin uygulandığı **tek** nesnedir. Tüm standart dönüşüm komutları da geçerlidir:

| Komut | Çizgiye ne olur |
|-------|----------------|
| [Move](../move/) | Her iki uç noktayı eşit kaymaya taşır |
| [Copy](../copy/) | Yeni konumda özdeş çizgi oluşturur |
| [Rotate](../rotate/) | Her iki uç noktayı seçilen temel nokta etrafında döndürür |
| [Mirror](../mirror/) | Her iki uç noktayı ayna ekseni boyunca yansıtır |
| [Scale](../scale/) | Her iki uç noktayı temel noktadan eşit ölçekler |
| [Offset](../offset/) | Sabit dik mesafede paralel çizgi oluşturur |
| [Trim](../trim/) | Çizgiyi kesişimlerde kırpar — **yalnızca çizgiler** |
| [Extend](../extend/) | En yakın uç noktayı sınıra uzatır — **yalnızca çizgiler** |
| [Delete](../delete/) | Çizgiyi çizimden siler |

## Özellikler

Çizgi seçildiğinde, özellikler paneli tüm `LINE` DXF kayıt alanlarını gösterir:

**Genel**

| Özellik | Varsayılan | Değer |
|---------|-----------|-------|
| Renk | 256 (ByLayer) | ACI renk indeksi |
| Katman | `0` | Katman ataması |
| Çizgi türü | ByLayer | Adlandırılmış çizgi türü deseni |
| Çizgi türü ölçeği | 1 | Çizgi türü deseni ölçek faktörü |
| Kalınlık | 0 | Ekstrüzyon kalınlığı |

**Geometri**

| Özellik | Değer |
|---------|-------|
| Başlangıç X / Başlangıç Y | Birinci uç noktanın koordinatları |
| Bitiş X / Bitiş Y | İkinci uç noktanın koordinatları |

Tüm alanlar komutu yeniden başlatmadan panelde doğrudan düzenlenebilir.

## Line - Polyline Karşılaştırması — Ne Zaman Ne Kullanılır

| | Line | Polyline |
|---|------|---------|
| Nesne sayısı | Segment başına bir `LINE` | Tüm yol için bir `LWPOLYLINE` |
| Trim / Extend | Evet — segment bazında | Hayır |
| Kapalı şekil | Hayır | Evet (kapatma bayrağı) |
| Tutamaç düzenleme | Ayrı uç noktaları uzatma | Yol boyunca herhangi bir köşeyi taşıma |
| En iyi | İnşaat çizgileri, ayrı segmentler, kırpılacak geometri | Bütün kalan kontürler, ana hatlar, şekiller |

## DXF — LINE Nesnesi

Çizgiler DXF dosyasında `LINE` nesneleri olarak saklanır. Başlangıç/bitiş koordinatları, renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık dahil her özellik kayıpsız round-trip yapar. `LINE` nesneleri içeren bir DXF açtığınızda, bunlar düzenleyicide tam olarak düzenlenebilir `Line` nesnelerine dönüşür.

Düzenleyicide çizilen çizgiler kaydedildiğinde de `LINE` nesneleri olarak yazılır, dolayısıyla LibreCAD, FreeCAD ve DXF uyumlu diğer uygulamalar tarafından okunabilir.
