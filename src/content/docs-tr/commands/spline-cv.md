---
sidebar_position: 8
title: Spline CV Komutu — KulmanLab CAD'de Kontrol Noktalarıyla Spline Çiz
description: Spline CV komutu, kontrol noktaları (CV) yerleştirerek NURBS spline oluşturur — eğri onlara çekilir, ancak zorunlu olarak üzerinden geçmez. DXF SPLINE nesneleri olarak tam round-trip (splineFlag=9).
keywords: [CAD spline cv komutu, NURBS spline CAD, spline kontrol noktaları, DXF SPLINE nesnesi, kulmanlab]
---

# Spline CV

`spline cv` komutu, **kontrol noktaları** (CV) yerleştirerek NURBS spline oluşturur. Eğri köşelere çekilir, ancak zorunlu olarak üzerinden geçmez — her tıklanan noktadan geçen [Spline Fit](./spline-fit) komutunun aksine.

## CV Spline Çizimi

1. Terminale `spline cv` yazın veya araç çubuğundaki **Spline CV** düğmesine basın.
2. **Birinci kontrol noktasını tıklayın** veya `X,Y` yazıp **Enter** tuşuna basın.
3. **Sonraki noktaları tıklayın** — her tıklamada eğri gerçek zamanlı güncellenir.
4. Tamamlamak için **Enter** veya **Boşluk** tuşuna basın (en az 2 nokta gerekir).

Tüm yerleştirilen noktaları iptal etmek için **Escape** tuşuna basın.

## Koordinat Girişi

Herhangi bir nokta için `X,Y` yazın ve kesin yerleştirme için **Enter** tuşuna basın.

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Koordinatı onaylar / yerleştirmeyi tamamlar |
| `Escape` | İptal eder ve sıfırlar |

## Tutamaç Düzenleme

Her kontrol noktası **tek tutamaç** olarak gösterilir. Eğrinin şeklini değiştirmek için bir noktayı sürükleyin — bitişik segmentler pürüzsüz şekilde güncellenir.

## CV Spline Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Eğriye tıklama** | Spline'ı seçer |
| **Sağa çerçeve** (katı) | Yalnızca tüm sınırlayıcı kutu içerideyse seçer |
| **Sola çerçeve** (çapraz) | Eğri çerçeveyle kesişirse seçer |

## Desteklenen Düzenleme Komutları

| Komut | Ne olur |
|-------|---------|
| [Move](./move) | Tüm CV'leri eşit taşır |
| [Copy](./copy) | Tüm spline'ı kopyalar |
| [Rotate](./rotate) | Tüm CV'leri temel nokta etrafında döndürür |
| [Mirror](./mirror) | Tüm CV'leri yansıtır |
| [Scale](./scale) | Tüm CV'leri temel noktadan ölçekler |
| [Delete](./delete) | Spline'ı siler |

CV spline'lar için Offset, Trim ve Extend **desteklenmez**.

## Özellikler

| Özellik | Değer |
|---------|-------|
| Derece (Degree) | 3 (kübik) |
| Kontrol noktaları | CV nokta listesi |
| Uyum noktaları (Fit Points) | Boş — CV spline'larda kullanılmaz |

## Spline CV - Spline Fit Karşılaştırması

| | Spline CV | Spline Fit |
|---|-----------|-----------|
| Eğri noktalardan geçer | Hayır — çekilir | Evet — interpolasyon yapar |
| Kontrol | Dolaylı (CV aracılığıyla) | Doğrudan (eğrideki noktalar aracılığıyla) |
| Pürüzsüzlük | Genellikle daha pürüzsüz | Yoğun noktalarda salınım olabilir |
| En iyi | Serbest organik şekiller | Belirli noktalardan geçmesi gereken eğriler |

## DXF — SPLINE Nesnesi

`splineFlag=9` (CV spline), kontrol noktaları, düğüm vektörü ve eğri derecesiyle `SPLINE` nesnesi olarak saklanır. Tüm DXF uyumlu programlarda tam round-trip.
