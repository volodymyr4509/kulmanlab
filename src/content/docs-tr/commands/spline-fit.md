---
title: Spline Fit Komutu — KulmanLab CAD'de Tıklanan Noktalardan Geçen İnterpolasyon Spline'ı Çiz
description: Spline Fit komutu, her tıklanan noktadan tam olarak geçen kübik spline çizer. Dahili olarak eğri hem uyum noktalarıyla hem de hesaplanan kontrol noktalarıyla saklanır. Uyum noktası tutamacını sürüklemek tüm eğriyi yeniden interpolasyon yapar. DXF'de SPLINE nesneleri olarak tam round-trip.
keywords: [CAD spline fit komutu, interpolasyon spline CAD, noktalardan geçen spline, pürüzsüz eğri çiz CAD, SPLINE DXF uyum noktaları, spline tutamaç düzenleme, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

`splinefit` komutu, tıkladığınız her noktadan geçen kübik spline çizer — interpolasyon eğrisi. Eğrinin yalnızca kontrol noktalarına doğru çekildiği [Spline CV](../spline-cv/)'nin aksine, burada eğri tıklanan her koordinata tam olarak ulaşmak zorundadır. Dahili olarak düzenleyici bunu sağlamak için kontrol noktaları uydurur ve bu CV'ler DXF dosyasında uyum noktalarının yanında saklanır.

## Uyum Noktalarıyla Spline Çizimi

1. Terminale `splinefit` yazın veya araç çubuğundaki **Spline Fit** düğmesine tıklayın.
2. **Uyum noktaları yerleştirmek için tıklayın** — eğri her birinden geçecek. Ya da tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. Bitirmek için **Enter** tuşuna basın (en az 2 nokta gereklidir).

```
  ●──────●──────●──────●  ← eğri her tıklamadan tam olarak geçer
  p1     p2     p3     p4
```

Canlı önizleme, imleci hareket ettirirken imlecin konumunda bir sonraki olası noktayla mevcut interpolasyon eğrisini gösterir. Tüm yerleştirilen noktaları atmak ve çıkmak için **Escape** tuşuna basın.

## Koordinat Girişi

Tıklamak yerine herhangi bir uyum noktası için tam konumu yazın:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Uyum noktasını yerleştirmek için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı onaylar veya giriş yapılmıyorsa ve ≥ 2 nokta varsa spline'ı bitirir |
| `Escape` | Tüm noktaları atar ve çıkar |

## Tutamaç Düzenleme — Uyum Noktaları Aracılığıyla Yeniden Şekillendirme

Seçili bir uyum spline, uyum noktası başına bir tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|------|----------|--------------|
| **Uyum noktası** | Her tıklanan konumda | Sürükleyerek o uyum noktasını taşır — tüm eğri yeni konumdan geçmek için yeniden interpolasyon yapar |

Bir tutamacı sürüklemek tüm eğriyi yeniden uydurur, yalnızca komşu segmentleri değil. Bu, bir köşeyi taşımanın yalnızca iki komşu segmenti yeniden şekillendirdiği çoklu çizgi tutamaç düzenlemesinden farklıdır.

"Tüm spline'ı taşı" tutamacı yoktur. Tüm spline'ı ötelemek için [Move](../move/) komutunu kullanın.

## Uyum Spline Seçimi

| Yöntem | Davranış |
|--------|-----------|
| **Tıklama** | Tıklama eğri üzerindeki herhangi bir noktaya yakın düşerse seçer |
| **Sağa sürükleme** (katı) | Eğri boyunca tüm örnek noktaları seçim kutusunun içinde olmalıdır |
| **Sola sürükleme** (çapraz) | Seçim kutusu sınırını kesen eğrinin herhangi bir kısmı onu seçer |

## Desteklenen Düzenleme Komutları

| Komut | Spline'a ne olur |
|---------|---------------------------|
| [Move](../move/) | Tüm uyum noktalarını ve yeniden hesaplanan CV'leri aynı yer değiştirmeyle ötelemek |
| [Copy](../copy/) | Yeni konumda özdeş spline oluşturur |
| [Rotate](../rotate/) | Tüm uyum noktalarını seçilen temel nokta etrafında döndürür |
| [Mirror](../mirror/) | Tüm uyum noktalarını yansıtma ekseni üzerinden yansıtır |
| [Scale](../scale/) | Tüm uyum noktalarını temel noktadan düzgün şekilde ölçekler |
| [Delete](../delete/) | Spline'ı kaldırır |

Spline'lar **Offset**, **Trim** veya **Extend**'i desteklemez.

## Özellikler

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
| Derece | Polinom derecesi — her zaman 3 (kübik) |
| Uyum Noktaları | Tüm tıklanan geçiş noktalarının koordinatları |
| Kontrol Noktaları | Eğriyi oluşturmak için dahili olarak hesaplanan CV'ler |

## Spline Fit - Spline CV Karşılaştırması — Hangisini Kullanmalı

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Eğri noktalardan geçer | Her tıklanan noktadan tam olarak | Yalnızca birinci ve sonuncu (sıkıştırılmış) |
| Tutamaç düzenleme etkisi | Uyum noktası hareket eder → tüm eğri yeniden interpolasyon yapar | CV hareket eder → eğri yeni konuma doğru çekilir |
| Şekil öngörülebilirliği | Yüksek — eğri tıklamaları takip eder | Düşük — eğri CV'lerin gerisinde kalır |
| En iyi | Belirli koordinatlara isabet etmesi gereken eğriler | Pürüzsüz estetik eğriler, serbest biçimli yollar |

## DXF — SPLINE nesnesi (uyum noktası biçimi)

Uyum spline'lar DXF dosyasında `SPLINE` nesneleri olarak kaydedilir; hem uyum noktası koordinatları hem de hesaplanan kontrol noktaları saklanır. `splineFlag`, `8` (uyum noktalı spline) olarak ayarlanır, böylece yeniden yüklenen uygulama düzenlenebilir tutamaçlar olarak hangi nokta kümesini görüntüleyeceğini bilir. Tüm özellikler — renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık — kayıpsız round-trip yapar. Uyum noktalı spline'ları destekleyen DXF uygulamaları (LibreCAD, FreeCAD) uyum noktalarını birincil düzenlenebilir veri olarak görüntüler.
