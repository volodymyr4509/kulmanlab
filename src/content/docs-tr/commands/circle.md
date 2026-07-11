---
title: Circle Komutu — KulmanLab CAD'de Merkez ve Yarıçapla Daire Çiz
description: Circle komutu, merkez noktasını tıklayarak ardından yarıçapı tıklayarak veya girerek daire yerleştirir. Dört kardinal tutamaç, komutu yeniden başlatmadan yarıçapı sürükleyerek değiştirmeye olanak tanır. DXF CIRCLE nesneleri olarak tam round-trip.
keywords: [CAD circle komutu, CAD daire çiz, daire yarıçap girişi, tutamaçla daire yeniden boyutlandır, DXF CIRCLE nesnesi, daire yarıçap ölçüsü, kulmanlab]
group: shapes
order: 4
---

# Circle

`circle` komutu, merkez nokta ve yarıçapla tanımlanmış daire çizer. Merkezi tıkladıktan sonra yarıçapı ya tuvalde ikinci bir noktayı tıklayarak ya da kesin bir sayı girerek ayarlayabilirsiniz — her iki seçenek de aynı anda kullanılabilir.

## Daire Çizimi

1. Terminale `circle` yazın veya araç çubuğundaki **Circle** düğmesine basın.
2. **Merkez noktasını tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. Yarıçapı ayarlayın — ya:
   - Tuvalde **herhangi bir noktayı tıklayın** — merkezden olan mesafe yarıçap olur, ya da
   - **Yarıçapı girin** ve kesin değer için **Enter** tuşuna basın.

Daire hemen yerleştirilir ve komut tamamlanır.

```
  merkez ●
         \  yarıçap çizgisi (önizleme)
          \
           ● ← buraya tıklayın veya sayı girin
```

Yarıçap aşamasında canlı önizleme, imlecin geçerli mesafesinde daireyi gösterir ve merkezden geçerli noktaya bir yarıçap çizgisi çizer.

## Merkez Koordinatı Girişi

Tıklamak yerine merkez konumunu girebilirsiniz:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Merkezi yerleştirmek ve yarıçap girişine geçmek için **Enter** tuşuna basın.

## Klavyeden Yarıçap Girişi

Merkezi yerleştirdikten sonra giriş hemen yarıçap değerini oluşturur:

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Yarıçap değerine rakam ekler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Dairey girilen yarıçapla yerleştirir |

Biriktirilen değer terminal isteminde görüntülenir (örneğin `enter radius of circle: 25`). Yarıçap çizgisi işaretçisinin yönünü kontrol ederken önizleme girilen yarıçapı gösterecek şekilde güncellenir.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır (merkez aşaması) veya yarıçap rakamı (yarıçap aşaması) |
| `,` | X'i kilitler ve Y girişine geçer (merkez aşaması) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı veya yarıçapı onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Tutamaç Düzenleme — Yarıçapı Değiştirme

Seçili daire beş tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|---------|-------|----------|
| **Merkez** | Merkez noktası | Tüm daireyi taşır; yarıçap değişmez |
| **Sol** | En sol nokta (merkez − yarıçap) | Yeni yarıçap = merkezden mesafe olarak ayarlamak için sürükleyin |
| **Sağ** | En sağ nokta (merkez + yarıçap) | Yeni yarıçap = merkezden mesafe olarak ayarlamak için sürükleyin |
| **Üst** | En yüksek nokta | Yeni yarıçap = merkezden mesafe olarak ayarlamak için sürükleyin |
| **Alt** | En alçak nokta | Yeni yarıçap = merkezden mesafe olarak ayarlamak için sürükleyin |

Dört kardinal tutamacın tamamı aynı şekilde davranır — yeni yarıçap, merkezden sürükleme konumuna olan mesafedir. Merkez sabit kalır.

## Daire Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | Tıklama dairenin yakınına denk gelirse seçer |
| **Sağa sürükleme** (katı) | Tüm sınırlayıcı kare (merkez ± yarıçap) çerçevenin içinde olmalıdır |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen veya ona değen dairesel herhangi bir parça seçer |

## Desteklenen Düzenleme Komutları

| Komut | Daireye ne olur |
|-------|----------------|
| [Move](../move/) | Merkezi taşır; yarıçap değişmez |
| [Copy](../copy/) | Yeni merkezde özdeş daire oluşturur |
| [Rotate](../rotate/) | Merkezi temel nokta etrafında döndürür; yarıçap değişmez |
| [Mirror](../mirror/) | Merkezi ayna ekseni boyunca yansıtır; yarıçap değişmez |
| [Scale](../scale/) | Merkez konumunu ölçekler ve yarıçapı ölçek faktörüyle çarpar |
| [Offset](../offset/) | Daha büyük veya daha küçük yarıçaplı eşmerkezli daire oluşturur |
| [Delete](../delete/) | Daireyi siler |

## Özellikler

**Genel**

| Özellik | Varsayılan | Değer |
|---------|-----------|-------|
| Renk | 256 (ByLayer) | ACI renk indeksi |
| Katman | `0` | Katman ataması |
| Çizgi türü | ByLayer | Adlandırılmış çizgi türü deseni |
| Çizgi türü ölçeği | 1 | Çizgi türü deseni ölçek faktörü |
| Kalınlık | 0 | Ekstrüzyon kalınlığı |

**Geometri**

| Özellik | Değer |
|---------|-------|
| Merkez X / Merkez Y | Merkez noktasının koordinatları |
| Yarıçap | Çizim birimlerinde daire yarıçapı |

## Circle - Arc Karşılaştırması — Ne Zaman Ne Kullanılır

| | Circle | Arc |
|---|--------|-----|
| Kapsam | Tam 360° | Kısmi — başlangıç ve bitiş açısıyla tanımlanır |
| Nasıl çizilir | Merkez + yarıçap | Eğri üzerinde üç nokta |
| Klavye girişi | Yarıçap değeri | Yok — yalnızca tıklama |
| Yeniden boyutlandırma tutamacı | 4 kardinal nokta | Başlangıç ve bitiş noktaları (açı + yarıçap) |
| Ölçüler | Yarıçap: [Dim Radius](../dim-radius/) · Çap: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| En iyi | Tam delikler, cıvata delikleri, dairesel özellikler | Yuvarlamalar, kısmi eğriler, yay yolları |

## DXF — CIRCLE Nesnesi

Daireler DXF dosyasında `CIRCLE` nesneleri olarak saklanır. Merkez koordinatları, yarıçap, renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık — hepsi kayıpsız round-trip yapar. DXF uyumlu herhangi bir uygulama bunları standart daireler olarak okur.
