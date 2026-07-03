---
sidebar_position: 8
title: Spline CV Komutu — KulmanLab CAD'de Kontrol Noktaları Yerleştirerek B-Spline Çiz
description: Spline CV komutu, kontrol noktaları yerleştirerek kübik B-spline çizer. Eğri köşelere doğru çekilir, ancak yalnızca birinci ve sonuncusundan geçer (sıkıştırılmış düğümler). Her CV tutamacı yerleştirme sonrasında eğriyi yeniden şekillendirmek için sürüklenebilir. DXF'de SPLINE nesneleri olarak tam round-trip.
keywords: [CAD spline komutu, B-spline kontrol noktaları, sıkıştırılmış spline CAD, spline çiz CAD, SPLINE DXF nesnesi, spline tutamaç düzenleme, kulmanlab]
---

# Spline CV

`splinecv` komutu, kontrol noktaları (CV'ler) yerleştirerek **kübik B-spline** çizer. Elde edilen eğri her CV'ye doğru çekilir ancak onlardan geçmez — **sıkıştırılmış düğümlerin** eğriyi tam olarak sabitlediği çok birinci ve son köşe hariç. Bu, sezgisel şekil kontrolü sağlar: eğriyi ona dokundurma zorunda kalmadan bir bölgeye doğru itmek için köşeyi çekin.

## Kontrol Noktalarıyla Spline Çizimi

1. Terminale `splinecv` yazın veya araç çubuğundaki **Spline CV** düğmesine tıklayın.
2. **Kontrol noktaları yerleştirmek için tıklayın** — her tıklama bir köşe ekler. Ya da tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. Bitirmek için **Enter** tuşuna basın (en az 2 köşe gereklidir).

```
  CV ●         ● CV
      \       /
       \     /    ← eğri CV'lere doğru çekilir
        \   /         ama onlardan geçmez
  CV ●   ●   ● CV (başlangıç/bitiş: eğri burada dokunur)
```

Canlı önizleme, her köşenin ardından imleci hareket ettirirken güncellenir; imlecin konumunda bir sonraki noktayla spline'ın nasıl görüneceğini gösterir. Tüm yerleştirilen köşeleri atmak ve çıkmak için **Escape** tuşuna basın.

## Koordinat Girişi

Tıklamak yerine herhangi bir kontrol noktası için tam konumu yazın:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Köşeyi yerleştirmek için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı onaylar veya giriş yapılmıyorsa ve ≥ 2 köşe varsa spline'ı bitirir |
| `Escape` | Tüm köşeleri atar ve çıkar |

## Tutamaç Düzenleme — Kontrol Noktaları Aracılığıyla Yeniden Şekillendirme

Seçili bir CV spline, kontrol noktası başına bir tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|------|----------|--------------|
| **Kontrol noktası** | Her CV konumunda | Sürükleyerek o CV'yi taşır — eğri yeni konuma doğru yeniden şekillenir |

"Tüm spline'ı taşı" tutamacı yoktur. Tüm spline'ı ötelemek için [Move](../move/) komutunu kullanın.

## CV Spline Seçimi

| Yöntem | Davranış |
|--------|-----------|
| **Tıklama** | Tıklama eğri üzerindeki herhangi bir noktaya yakın düşerse seçer |
| **Sağa sürükleme** (katı) | Eğri boyunca tüm örnek noktaları seçim kutusunun içinde olmalıdır |
| **Sola sürükleme** (çapraz) | Seçim kutusu sınırını kesen eğrinin herhangi bir kısmı onu seçer |

## Desteklenen Düzenleme Komutları

| Komut | Spline'a ne olur |
|---------|---------------------------|
| [Move](../move/) | Tüm kontrol noktalarını aynı yer değiştirmeyle ötelemek |
| [Copy](../copy/) | Yeni konumda özdeş spline oluşturur |
| [Rotate](../rotate/) | Tüm CV'leri seçilen temel nokta etrafında döndürür |
| [Mirror](../mirror/) | Tüm CV'leri yansıtma ekseni üzerinden yansıtır |
| [Scale](../scale/) | Tüm CV'leri temel noktadan düzgün şekilde ölçekler |
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
| Kontrol Noktaları | Tüm CV'lerin koordinatları |
| Uyum Noktaları | CV spline'lar için boş; yalnızca uyum noktalı spline'lar için doldurulur |

## Spline CV - Spline Fit Karşılaştırması — Hangisini Kullanmalı

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Eğri noktalardan geçer | Yalnızca birinci ve sonuncu (sıkıştırılmış) | Her tıklanan noktadan tam olarak |
| Şekil kontrolü | CV'leri bir bölgeye doğru çekin | Eğrinin dokunması gereken uyum noktalarını taşıyın |
| Tutamaç düzenleme etkisi | CV hareket eder → eğri çekilir | Uyum noktası hareket eder → eğri yeniden interpolasyon yapar |
| En iyi | Pürüzsüz estetik eğriler, serbest biçimli yollar | Belirli koordinatlara isabet etmesi gereken eğriler |

## DXF — SPLINE nesnesi (kontrol noktası biçimi)

CV spline'lar DXF dosyasında `SPLINE` nesneleri olarak kaydedilir; derece, düğüm vektörü ve tüm kontrol noktası koordinatları saklanır. Tüm özellikler — renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık — kayıpsız round-trip yapar. `splineFlag`, `9` (CV spline) olarak ayarlanır, böylece biçim yeniden yüklemede korunur. CV verisine sahip `SPLINE` nesnelerini destekleyen herhangi bir DXF uygulaması bunları doğru şekilde okur.
