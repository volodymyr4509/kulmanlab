---
sidebar_position: 12
title: Rotate Komutu — KulmanLab CAD'de Nesneleri Temel Nokta Etrafında Döndür
description: Rotate komutu, seçili nesneleri seçilen temel nokta etrafında döndürür. Açı kesin olarak girilebilir veya tıklamayla belirlenebilir — temel noktadan tıklamaya doğru imleç yönü açıyı belirler. DXF koordinatlarında pozitif açılar saat yönünün tersine döner.
keywords: [CAD rotate komutu, nesneleri döndür CAD, dönüş açısı, saat yönünün tersi CAD, açı girişi, kulmanlab]
---

# Rotate

`rotate` komutu, seçili nesneleri temel nokta etrafında döndürür. Dönüş açısını ya derece cinsinden bir sayı girerek ya da tıklamayla belirtirsiniz — açı, temel nokta ile tıklama arasındaki yönden hesaplanır.

## İki Başlatma Yöntemi

**Önce seç, sonra döndür** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `rotate` yazın veya araç çubuğundaki **Rotate** düğmesine basın.
3. **Temel noktayı tıklayın** — dönme merkezi. Ya da kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
4. **Açıyı girin ve Enter tuşuna basın** veya açıyı imleç yönüyle belirlemek için **tıklayın**.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `rotate` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — tıklayın veya sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. **Temel noktayı tıklayın** (koordinat girişi kullanılabilir), ardından açıyı belirtin.

```
  Önce:            Sonra (90° ● etrafında):
                      ╔══╗
  ●  [nesne]  →  ● ║    ║
                      ╚══╝
```

Temel noktayı ayarladıktan sonra döndürülen nesnelerin canlı önizleme hayaleti imleç açısını takip eder.

## Açıyı Ayarlama

**Girilen açı** — temel noktayı ayarladıktan sonra istediğiniz zaman bir sayı (derece cinsinden) girin. Önizleme, Enter'a basmadan önce ayarlamaya devam ederken girilen açıya yapışır.

**Tıklamayla açı** — girilen değer yoksa, tıklama açıyı `atan2(imleçY − temelY, imleçX − temelX)` olarak ayarlar — temel noktadan tıklamaya doğru yön, derece cinsinden.

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Açı değerine rakam ekler |
| `-` | Negatif açı (yalnızca ilk karakter) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen açıda döndürmeyi uygular |

## Açı Yönü

Açılar **DXF kuralını** izler:

- **Pozitif** değerler çizim koordinatlarında **saat yönünün tersine** döndürür (Y ekseni yukarı).
- Ekranda Y ekseni ters çevrildiğinden (aşağı), pozitif açılar **saat yönünde** görünür.

Yaygın değerler: `90` = çeyrek dönüş, `180` = yarım dönüş, `-90` = ters çeyrek dönüş.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar |
| `0`–`9`, `.`, `-` | Temel nokta aşamasında X koordinatı veya açı aşamasında açı değeri girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer (temel nokta aşaması) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya döndürmeyi uygular |
| `Escape` | İptal eder ve sıfırlar |

## Komut Sırasında Nesne Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi değiştirir |
| **Sağa sürükleme** (katı) | Tamamen çerçeve içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar |

## Desteklenen Nesneler

Rotate tüm nesne türleriyle çalışır. Her nesnenin geometrisi temel nokta etrafında döndürülür — örneğin Daire merkezini taşır, yarıçap değişmez; Yay merkezi taşır ve başlangıç/bitiş açılarını dönüş miktarı kadar kaydırır; Metin ekleme noktasını taşır ve Dönüş Açısı özelliğine açıyı ekler.
