---
title: ViewportRectangle Komutu — KulmanLab CAD'de Kağıt Yerleşiminde Görünüm Penceresi Oluştur
description: ViewportRectangle komutu, aktif kağıt yerleşiminde iki karşıt köşeyi tıklayarak dikdörtgen görünüm penceresi oluşturur. Koordinat girişini destekler. Oluşturduktan sonra tutamaçlarla düzenleyin — köşeler, kenarlar, merkez, ölçek ve kilit.
keywords: [CAD viewport rectangle komutu, yerleşim görünüm penceresi CAD, kağıt yerleşimi CAD, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

`viewport rectangle` komutu, aktif kağıt yerleşiminde iki karşıt köşeyi tıklayarak dikdörtgen görünüm penceresi oluşturur.

> **Not:** ViewportRectangle yalnızca **sayfa uzayında (Layout)** kullanılabilir. Komut model uzayında hata gösteriyorsa sayfa sekmesine geçmeyi deneyin.

## Görünüm Penceresi Oluşturma

1. **Layout** (kağıt uzayı) sekmesine geçin.
2. `viewport rectangle` yazın veya **ViewportRectangle** düğmesine basın.
3. **Birinci köşeyi tıklayın** veya `X,Y` yazıp **Enter** tuşuna basın.
4. **Karşıt köşeyi tıklayın** — görünüm penceresi oluşturulur ve model uzayını görüntüler.

## Koordinat Girişi

1. X yazın, `,` tuşuna basın, Y yazın, **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar |
| `Escape` | İptal eder |

## Oluşturduktan Sonra Görünüm Penceresini Düzenleme

| İşlem | Sonuç |
|-------|-------|
| **Köşeyi sürükle** | Yeniden boyutlandırır (büyütür/küçültür) |
| **Kenarları sürükle** (köşe değil) | Tek eksen boyunca yeniden boyutlandırır |
| **Merkez tutamacını sürükle** | Tüm viewport'u taşır |
| **Ölçek seçimini aç** | Listeden seçin veya özel oran girin (örneğin `1:50`) |
| **Sağ tık → Lock** | Görünüm ölçeğini ve konumunu kilitler/açar |

## ViewportRectangle - ViewportCopy Karşılaştırması

| | ViewportRectangle | ViewportCopy |
|---|------------------|-------------|
| Ne yapar | Yeni görünüm penceresi oluşturur | Mevcut görünüm penceresini kopyalar |
| Giriş | Yeni dikdörtgenin iki köşesi | Mevcut seçim + hedef nokta |
| Sonuç | Yeni bağımsız pencere | Aynı ayarlarla kopya |
