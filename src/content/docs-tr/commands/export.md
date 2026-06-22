---
sidebar_position: 50
title: Export Komutu — KulmanLab CAD'de Çizimi DXF veya JSON Olarak İndir
description: Export komutu, DXF veya JSON format seçimiyle Dışa Aktarma Yöneticisini açar. DXF dosyaları herhangi bir CAD uygulamasında açılır ancak ölçüler ve göstergeler dahil edilmez. JSON tüm çizim durumunu kaydeder.
keywords: [CAD export komutu, DXF dosyası indir tarayıcı, çizimi DXF olarak kaydet, çevrimiçi CAD DXF dışa aktar, kulmanlab]
---

# Export

`export` komutu, çizimi cihazınıza indirmek için format seçimi yapabileceğiniz özel pencere olan **Dışa Aktarma Yöneticisini** açar.

## Dışa Aktarma Yöneticisini Açma

Terminale `export` yazın veya araç çubuğundaki **Export** düğmesine basın. Dışa Aktarma Yöneticisi iki format kartıyla açılır.

## Adım Adım İşlem

1. **Format kartını tıklayın** — JSON veya DXF.
2. Kart vurgulanır — seçilen formatı gösterir.
3. **Export düğmesini tıklayın** — dosya oluşturulur ve indirilir.

## Format Karşılaştırması

| | JSON | DXF |
|---|------|-----|
| **Ölçüler** | Kaydedilir | **Kaydedilmez** |
| **Göstergeler (Leader)** | Kaydedilir | **Kaydedilmez** |
| **Geometri** | Kaydedilir | Kaydedilir (LINE, CIRCLE, ARC, ELLIPSE, LWPOLYLINE, SPLINE, TEXT/MTEXT) |
| **Katmanlar** | Kaydedilir | Kaydedilir |
| **Uyumluluk** | Yalnızca KulmanLab | Herhangi bir CAD programı |
| **Tarayıcılar arası transfer** | Evet (Import ile) | Evet |

## DXF'de Neler Kaydedilir

Format DXF AC1012. Kaydedilen nesneler:

- LINE, CIRCLE, ARC, ELLIPSE, LWPOLYLINE, SPLINE
- TEXT / MTEXT
- Özellikler: renk, katman, çizgi türü, çizgi türü ölçeği, kalınlık
- Katmanlar: adlar, renk, çizgi türü, dondurma/kilitleme durumu

DXF'de **kaydedilmeyenler**:
- Ölçüler (DIMENSION) — JSON kullanın
- Göstergeler (MLEADER) — JSON kullanın

## JSON'da Neler Kaydedilir

JSON **tüm çizim durumunu** kaydeder: tüm geometri, tüm ölçüler, tüm göstergeler, tüm katmanlar ve durumları. Ölçüleri ve göstergeleri kaydetmek için tek format budur.

## Dosya Adı

İndirilen dosya `kulman-<zaman_damgası>.<uzantı>` olarak adlandırılır, örneğin:
- `kulman-2026-01-15_14:32:07.json`
- `kulman-2026-01-15_14:32:07.dxf`

## Export - Print Karşılaştırması

| | Export | Print |
|---|--------|-------|
| Format | DXF veya JSON (vektör verisi) | PNG, JPEG, WebP veya PDF (raster görüntü) |
| Sonuç düzenlenebilir mi | Evet (CAD programlarında) | Hayır |
| En iyi | Programlar arası veri alışverişi | Belgeleme, müşteriye teslim |

## İlgili Komutlar

- [Import](./import) — DXF veya JSON dosyası açar
- [Print](./print) — resim veya PDF olarak kaydeder
- [Files](./files) — tarayıcıda kaydedilen çizimleri yönetir
