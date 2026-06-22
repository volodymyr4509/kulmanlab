---
sidebar_position: 9
title: Spline Fit Komutu — KulmanLab CAD'de Seçilen Noktalardan Geçen Spline Çiz
description: Spline Fit komutu, her tıklanan noktadan geçen NURBS spline oluşturur. Bir tutamaç taşındığında tüm eğri interpolasyonu korumak için yeniden hesaplanır. DXF SPLINE nesneleri olarak tam round-trip (splineFlag=8).
keywords: [CAD spline fit komutu, interpolasyon spline CAD, noktalardan geçen eğri CAD, DXF SPLINE nesnesi, kulmanlab]
---

# Spline Fit

`spline fit` komutu, **her tıklanan noktadan geçen** spline oluşturur — eğrinin yalnızca kontrol noktalarına çekildiği [Spline CV](./spline-cv) komutunun aksine. Algoritm verilen noktaları interpolasyon yapan kübik eğri uydurur.

## Noktalardan Geçen Spline Çizimi

1. Terminale `spline fit` yazın veya araç çubuğundaki **Spline Fit** düğmesine basın.
2. **Birinci noktayı tıklayın** veya `X,Y` yazıp **Enter** tuşuna basın.
3. **Sonraki noktaları tıklayın** — her tıklamada eğri güncellenir, yerleştirilen tüm noktalardan geçer.
4. Tamamlamak için **Enter** veya **Boşluk** tuşuna basın (en az 2 nokta gerekir).

İptal etmek için **Escape** tuşuna basın.

## Koordinat Girişi

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Koordinatı onaylar / yerleştirmeyi tamamlar |
| `Escape` | İptal eder ve sıfırlar |

## Tutamaç Düzenleme

Seçili Spline Fit **her uyum noktasında tutamaç** gösterir. Bir noktayı taşımak için sürükleyin — **tüm eğri yeniden hesaplanır** ve tüm noktalardan (yeni taşınan dahil) geçmeye devam eder.

## Fit Spline Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Eğriye tıklama** | Spline'ı seçer |
| **Sağa çerçeve** (katı) | Yalnızca tüm sınırlayıcı kutu içerideyse seçer |
| **Sola çerçeve** (çapraz) | Eğri çerçeveyle kesişirse seçer |

## Desteklenen Düzenleme Komutları

| Komut | Ne olur |
|-------|---------|
| [Move](./move) | Tüm uyum noktalarını eşit taşır |
| [Copy](./copy) | Tüm spline'ı kopyalar |
| [Rotate](./rotate) | Tüm noktaları temel nokta etrafında döndürür |
| [Mirror](./mirror) | Tüm noktaları yansıtır |
| [Scale](./scale) | Tüm noktaları temel noktadan ölçekler |
| [Delete](./delete) | Spline'ı siler |

Fit spline'lar için Offset, Trim ve Extend **desteklenmez**.

## Özellikler

| Özellik | Değer |
|---------|-------|
| Derece (Degree) | 3 (kübik) |
| Uyum noktaları (Fit Points) | Tıklanan nokta listesi |
| Kontrol noktaları | Uyum noktalarından otomatik hesaplanır |

## Spline Fit - Spline CV Karşılaştırması

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Eğri noktalardan geçer | Evet — interpolasyon yapar | Hayır — çekilir |
| Kontrol | Doğrudan (eğrideki noktalar aracılığıyla) | Dolaylı (CV aracılığıyla) |
| Pürüzsüzlük | Yoğun noktalarda salınım olabilir | Genellikle daha pürüzsüz |
| En iyi | Belirli noktalardan geçmesi gereken eğriler | Serbest organik şekiller |

## DXF — SPLINE Nesnesi

`splineFlag=8` (Fit spline) ve uyum noktalarıyla `SPLINE` nesnesi olarak saklanır. Tüm DXF uyumlu programlarda tam round-trip.
