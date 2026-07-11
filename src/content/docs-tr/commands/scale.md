---
title: Scale Komutu — KulmanLab CAD'de Nesneleri Temel Noktaya Göre Eşit Ölçekle
description: Scale komutu, seçili nesneleri temel noktaya göre eşit şekilde büyütür veya küçültür. 1'den büyük faktör büyütür, küçük faktör küçültür. Negatif faktör (-1) ayna görüntüsü gibi davranır.
keywords: [CAD scale komutu, nesneleri ölçekle CAD, ölçek faktörü, eşit ölçekleme CAD, büyüt küçült, kulmanlab]
group: edit
order: 5
---

# Scale

`scale` komutu, seçili nesneleri temel noktaya göre eşit şekilde büyütür veya küçültür — temel noktadan olan tüm mesafeler aynı faktörle çarpılır. Temel nokta yerinde kalır; diğer her şey orantılı olarak hareket eder ve yeniden boyutlandırılır.

## İki Başlatma Yöntemi

**Önce seç, sonra ölçekle** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `scale` yazın veya araç çubuğundaki **Scale** düğmesine basın.
3. **Temel noktayı tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
4. **Faktörü girin ve Enter tuşuna basın** veya faktörü tabandan uzaklıkla belirlemek için **tıklayın**.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `scale` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — tıklayın veya sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. **Temel noktayı tıklayın** (koordinat girişi kullanılabilir), ardından faktörü belirtin.

```
  Önce:          Sonra (2×):      Sonra (0.5×):
  ● [■■■]  →  ● [████████]  →  ● [■]
```

Temel noktayı ayarladıktan sonra canlı önizleme hayaleti imleç faktörünü takip eder.

## Ölçek Faktörü Girişi

Temel noktayı ayarladıktan sonra istediğiniz zaman sayısal faktör girin.

| Giriş | Sonuç |
|-------|-------|
| `2` | İki katına büyütür |
| `0.5` | Yarıya küçültür |
| `1.5` | %50 büyütür |
| `-1` | Temel noktaya göre aynalar (ölçek = 1, yön tersine çevrilir) |

**Tıklamayla faktör** — girilen değer yoksa, tıklama temel noktadan tıklamaya olan mesafeye göre normalleştirilmiş faktörü ayarlar.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar |
| `0`–`9`, `.`, `-` | Temel nokta aşamasında X koordinatı veya faktör değerini başlatır |
| `,` | X'i kilitler ve Y girişine geçer (temel nokta aşaması) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya ölçeği uygular |
| `Escape` | İptal eder ve sıfırlar |

## Komut Sırasında Nesne Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi değiştirir |
| **Sağa sürükleme** (katı) | Tamamen çerçeve içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar |

## Ne Ölçeklenir

| Nesne | Ne değişir |
|-------|-----------|
| Çizgi | Her iki uç nokta tabana göre ölçeklenir |
| Daire | Merkez ölçeklenir; yarıçap faktörle çarpılır |
| Yay | Merkez ölçeklenir; yarıçap faktörle çarpılır |
| Elips | Merkez ölçeklenir; her iki yarıçap faktörle çarpılır |
| Çoklu çizgi / Dikdörtgen | Her köşe tabana göre ölçeklenir |
| Metin | Ekleme noktası ölçeklenir; metin yüksekliği faktörle çarpılır |
| Spline | Tüm kontrol köşeleri / uyum noktaları tabana göre ölçeklenir |
