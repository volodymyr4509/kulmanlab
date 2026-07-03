---
sidebar_position: 11
title: Copy Komutu — KulmanLab CAD'de Nesneleri Yeni Konuma Kopyala
description: Copy komutu, seçili nesnelerin öteleme kopyalarını oluşturarak orijinalleri yerinde bırakır. Ön seçimi, açı kilidini ve kesin mesafe girişini destekler. Orijinaller değişmeden kalır.
keywords: [CAD copy komutu, nesneleri kopyala CAD, nesneleri çoğalt CAD, geometriyi klonla CAD, copy açı kilidi, kesin mesafe copy, kulmanlab]
---

# Copy

`copy` komutu, seçili nesnelerin öteleme kopyalarını oluşturur ve bunları temel noktadan hedef noktaya olan kaymaya göre yerleştirir — orijinaller tam olarak yerlerinde kalır. Bu [Move](../move/) komutundan temel farktır: Copy çizime yeni nesneler ekler; Move mevcut nesneleri taşır.

## İki Başlatma Yöntemi

**Önce seç, sonra kopyala** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `copy` yazın veya araç çubuğundaki **Copy** düğmesine basın.
3. **Temel noktayı tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
4. **Hedef noktayı tıklayın** — kopyalar temel→hedef kaymasıyla görünür. Koordinat girişi burada da çalışır.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `copy` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — tek tek nesneleri değiştirmek için tıklayın veya kutu seçimi için sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. **Temel noktayı tıklayın**, ardından **hedef noktayı tıklayın** (her iki adımda koordinat girişi kullanılabilir).

```
  Önce:               Sonra:
  [nesne A]        [nesne A]  ← orijinaller değişmez
  [nesne B]        [nesne B]
                   [kopya A]   ← yeni nesneler
                   [kopya B]
```

Kopyaların önizleme hayaleti, temel noktadan hedef noktaya imleci takip eder.

## Koordinat Girişi

Temel nokta veya hedef nokta adımında tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Açı Kilidi ve Kesin Mesafe

Temel noktayı ayarladıktan sonra, imleç yeterince uzakta ve eksen yakınında olduğunda komut 45°'lik eksen açılarına (0°, 45°, 90°, 135°, …) kilitlenir. Kilitlendiğinde, kopyaları tam olarak bu kaymaya yerleştirmek için mesafeyi yazın ve **Enter** tuşuna basın.

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Mesafe değerine rakam ekler |
| `-` | Negatif mesafe — eksen boyunca yönü değiştirir (yalnızca ilk karakter) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Kopyaları girilen mesafeye yerleştirir |

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar ve temel nokta aşamasına geçer |
| `0`–`9`, `.`, `-` | X koordinatı girişini veya açı kilitliyken mesafeyi başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya girilen mesafeye kopya uygular |
| `Escape` | İptal eder ve sıfırlar |

## Komut Sırasında Nesne Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi seçim durumunu değiştirir |
| **Sağa sürükleme** (katı) | Çerçevenin tamamen içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar |

## Kopyaladıktan Sonra

Orijinaller yerlerinde kalır — yeni kopyalar çizime eklenir ve komut tamamlanır. Kopyalar üzerinde hemen çalışmak için yeni seçimde Copy veya başka bir komut çalıştırın.

## Copy - Move Karşılaştırması

| | Copy | Move |
|---|------|------|
| Orijinaller | Yerinde kalır | Orijinal konumdan kaldırılır |
| Sonuç sayısı | Kopyalanan nesne sayısı kadar artar | Değişmez |
| En iyi | Tekrarlayan geometri, simetrik yerleşimler | Geometriyi yeniden konumlandırma |

## Desteklenen Nesneler

Copy tüm nesne türleriyle çalışır. Tüm nesneler dahili olarak `translate(dx, dy)` uygular, bu nedenle hiçbiri hariç tutulmaz.
