---
sidebar_position: 7
title: Text Komutu — KulmanLab CAD'de Çizime Metin Etiketleri Yerleştir
description: Text komutu, yakalama noktasını tıklayarak ve içeriği girerek çizime MTEXT yerleştirir. Koordinat girişini, tutamaç düzenlemeyi ve içeriği düzenlemek için çift tıklamayı destekler.
keywords: [CAD text komutu, metin etiketi CAD, MTEXT CAD, çizime metin ekle, DXF MTEXT nesnesi, kulmanlab]
---

# Text

`text` komutu, çizime metin nesnesi (**MTEXT**) yerleştirir. Yakalama noktasını tıklayın, metni girin ve onaylamak için Enter tuşuna basın.

## Metin Yerleştirme

1. Terminale `text` yazın veya araç çubuğundaki **Text** düğmesine basın.
2. **Yakalama noktasını tıklayın** (hizalama temel noktası) veya `X,Y` yazıp **Enter** tuşuna basın.
3. Görüntülenen satır içi düzenleyiciye **metni girin**.
4. Onaylamak ve yerleştirmek için **Enter** tuşuna basın veya metnin dışına tıklayın.

Metin yerleştirmeden iptal etmek için **Escape** tuşuna basın.

## Yakalama Noktası için Koordinat Girişi

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı — Yakalama Noktası Aşaması

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar |
| `Escape` | İptal eder |

## Klavye Referansı — Metin Düzenleyici Aşaması

| Tuş | İşlem |
|-----|-------|
| Herhangi bir karakter | Metne ekler |
| `←` / `→` | İmleci taşır |
| `Backspace` | Soldaki karakteri siler |
| `Delete` | Sağdaki karakteri siler |
| `Enter` | Onaylar ve metni yerleştirir |
| `Escape` | İptal eder |

## Tutamaç Düzenleme

Seçili metin yakalama noktasında **tek tutamaç** gösterir. Metni taşımak için sürükleyin.

## Metin Seçimi

Metnin **sınırlayıcı kutusuna** tıklamak onu seçer (gliflere tıklamanıza gerek yoktur). Kutunun dışına tıklamak seçmez.

## Desteklenen Düzenleme Komutları

| Komut | Ne olur |
|-------|---------|
| [Move](./move) | Yakalama noktasını taşır |
| [Copy](./copy) | Metnin kopyasını oluşturur |
| [Rotate](./rotate) | Metni yakalama noktası etrafında döndürür |
| [Mirror](./mirror) | Metin konumunu yansıtır (dize ters çevrilmez) |
| [Scale](./scale) | Konumu temel noktadan ölçekler |
| [Delete](./delete) | Metni siler |

## Özellikler

| Özellik | Değer |
|---------|-------|
| Renk | Metin rengi |
| Katman | Ait olduğu katman |
| Konum X / Y | Yakalama noktasının koordinatları |
| Yükseklik | Çizim birimlerinde metin yüksekliği |
| Dönüş açısı | Eğim açısı derece cinsinden |
| İçerik | Metin dizisi |
| Yakalama noktası | Sol üst, Orta üst vb. |

## DXF — MTEXT Nesnesi

Metin DXF dosyasında `MTEXT` nesnesi olarak saklanır. İçerik, ekleme noktası, yükseklik, dönüş açısı ve yakalama noktası kayıpsız round-trip yapar.
