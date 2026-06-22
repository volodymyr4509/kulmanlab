---
sidebar_position: 2
title: Polyline Komutu — KulmanLab CAD'de Çok Segmentli Yolları Tek Nesne Olarak Çiz
description: Polyline komutu, tek bir LWPOLYLINE nesnesi olarak saklanan herhangi sayıda bağlantılı segmenti çizer. Köşe ve segment orta nokta tutamaçları, oluşturma sonrasında yolun herhangi bir bölümünü yeniden şekillendirmeye olanak tanır. Offset'i destekler; Trim ve Extend'i desteklemez.
keywords: [CAD polyline komutu, çoklu çizgi çiz CAD, çok segmentli yol CAD, LWPOLYLINE DXF, çoklu çizgiyi yeniden şekillendir, köşe tutamacı CAD, çoklu çizgi ofseti, kulmanlab]
---

# Polyline

`polyline` komutu, tek bir `LWPOLYLINE` nesnesi olarak saklanan herhangi sayıda düz segmentten oluşan bağlantılı yol çizer. Tüm yol tek bir nesne olduğundan, seçmek her segmenti aynı anda seçer — tüm şekli tek bir işlemle taşıyın, döndürün veya ölçeklendirin. Bu, her segmentin bağımsız nesne olduğu zincirleme [Lines](./line) komutundan temel farktır.

Çoklu çizgiler ayrıca **kapatılabilir**: [Rectangle](./rectangle) komutu kapatma bayrağı ayarlanmış aynı `LWPOLYLINE` nesnesini kullanır.

## Çoklu Çizgi Çizimi

1. Terminale `polyline` yazın veya araç çubuğundaki **Polyline** düğmesine basın.
2. **Birinci noktayı tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Her sonraki noktayı tıklayın** — her tıklama bir segment ekler. Her adımda koordinat girişi çalışır.
4. Tamamlamak için **Enter** veya **Boşluk** tuşuna basın (en az 2 yerleştirilen nokta gerekir).

```
  ●──────●
  1.    2.
          \
           \  3. segment (devam ediyor — imleç burada)
            ●  ← eklemek için tıkla, tamamlamak için Enter/Boşluk
```

Herhangi bir zamanda **Escape** tuşuna basmak tüm yerleştirilen noktaları iptal eder ve komuttan çıkar.

## Koordinat Girişi

Tıklamak yerine herhangi bir köşe için kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Köşeyi yerleştirmek için **Enter** tuşuna basın.

## Açı Kilidi ve Kesin Segment Uzunluğu

Herhangi iki ardışık nokta arasında [Line](./line) komutundakiyle aynı 45°'lik yakalama mantığı uygulanır. Bir eksene kilitlendiğinde:

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Segment uzunluğuna rakam ekler |
| `-` | Negatif uzunluk — eksen boyunca yönü değiştirir (yalnızca ilk karakter) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Sonraki noktayı girilen mesafeye yerleştirir |

Geçerli biriktirilen uzunluk terminal isteminde gerçek zamanlı görüntülenir. Kilitliyken tıklama eksene yansıtılır, bu nedenle yeni köşe tam olarak eksen üzerinde yer alır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini veya açı kilitliyken segment uzunluğunu başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı veya uzunluğu onaylar ya da giriş yoksa ve ≥ 2 nokta varsa çoklu çizgiyi tamamlar |
| `Boşluk` | Çoklu çizgiyi tamamlar (giriş devam etmiyorken Enter ile aynı) |
| `Escape` | Tüm noktaları iptal eder ve çıkar |

## Tutamaç Düzenleme — Köşeler ve Segment Orta Noktaları

Seçili çoklu çizgi iki tür tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|---------|-------|----------|
| **Köşe** | Her yerleştirilen noktada | Sürükleyerek köşeyi taşıyın; tüm bağlı segmentler uzar |
| **Segment ortası** | Her segmentin merkezi | Sürükleyerek segmentin **her iki** uç noktasını birlikte taşıyın, uzunluğunu ve açısını koruyarak |

Segment orta nokta tutamacı çoklu çizgilere özgüdür — tek bir segmentin uzunluğunu değiştirmeden yatay olarak kaydırmanızı sağlar. [Line](./line) komutunda orta nokta tutamacı bunun yerine tüm nesne için Move komutunu etkinleştirir.

Tüm çoklu çizgiyi taşımak için ayrı bir tutamaç yoktur. Tüm yolu taşımak için [Move](./move) komutunu kullanın.

## Çoklu Çizgi Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | Tıklama herhangi bir segmentin algılama alanı içindeyse seçer |
| **Sağa sürükleme** (katı) | Tüm köşelerin çerçeve içinde olması gerekir |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen herhangi bir segment tüm çoklu çizgiyi seçer |

Çoklu çizgi tek bir nesne olduğundan, herhangi bir segmente dokunan çapraz seçim tüm segmentleri seçer.

## Desteklenen Düzenleme Komutları

Çoklu çizgiler tüm yaygın dönüşümleri ve ofseti destekler, ancak kırpma veya uzatmayı **desteklemez** (bunlar yalnızca [Line](./line) içindir):

| Komut | Çoklu çizgiye ne olur |
|-------|----------------------|
| [Move](./move) | Tüm köşeleri eşit kaymaya taşır |
| [Copy](./copy) | Yeni konumda özdeş çoklu çizgi oluşturur |
| [Rotate](./rotate) | Tüm köşeleri seçilen temel nokta etrafında döndürür |
| [Mirror](./mirror) | Tüm köşeleri ayna ekseni boyunca yansıtır |
| [Scale](./scale) | Tüm köşeleri temel noktadan eşit ölçekler |
| [Offset](./offset) | Sabit dik mesafede paralel çoklu çizgi oluşturur |
| [Delete](./delete) | Çoklu çizgiyi çizimden siler |

## Özellikler

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
| Kapalı | Son köşenin birinciye bağlanıp bağlanmadığı |
| Köşe sayısı | Toplam köşe sayısı |
| Köşeler | Tüm köşe koordinatlarının listesi |

## Polyline - Line Karşılaştırması — Ne Zaman Ne Kullanılır

| | Polyline | Line |
|---|---------|------|
| Nesne sayısı | Tüm yol için bir `LWPOLYLINE` | Segment başına bir `LINE` |
| Kapalı şekil | Evet (kapatma bayrağı) | Hayır |
| Trim / Extend | Hayır | Evet — segment bazında |
| Orta nokta tutamacı | Tüm segmenti taşır | Nesne için Move'u etkinleştirir |
| En iyi | Bütün kalan kontürler, ana hatlar, şekiller | İnşaat çizgileri, kırpılacak geometri |

## DXF — LWPOLYLINE Nesnesi

Çoklu çizgiler DXF dosyasında `LWPOLYLINE` nesneleri olarak saklanır. Köşe koordinatları, kapatma bayrağı, renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık dahil tüm özellikler kayıpsız round-trip yapar. [Rectangle](./rectangle) komutuyla çizilen dikdörtgenler de `LWPOLYLINE` (kapalı, dört köşe) olarak saklanır ve DXF seviyesinde ayırt edilemez.

Herhangi bir DXF uyumlu uygulamadan (LibreCAD, FreeCAD vb.) gelen `LWPOLYLINE` nesneleri düzenleyicide tam olarak düzenlenebilir çoklu çizgiler olarak döner.
