---
sidebar_position: 26
title: Dimension Linear Komutu — KulmanLab CAD'de Yatay ve Dikey Ölçüler
description: Dimension Linear komutu, iki nokta arasındaki yatay veya dikey mesafeyi ölçer. Ölçü çizgisi her zaman eksen hizalıdır — yönü kilitlemek için H veya V tuşuna basın ya da imleç konumunun otomatik belirlemesine izin verin. DXF'de DIMENSION nesneleri olarak tam round-trip.
keywords: [CAD dimension linear, yatay ölçü CAD, dikey ölçü CAD, dimlinear, H V yönelim kilidi, ölçü kaydırması, kulmanlab]
---

# Dimension Linear

`dimlinear` komutu, iki uzatma çizgisi başlangıç noktası arasında yatay veya dikey ölçü yerleştirir. Ölçü çizgisi her zaman tam yatay veya tam dikey uzanır — keyfi bir açıda yerleştirilemez. Köşegen bir çizgiye paralel ölçü gerektiğinde [Dimension Aligned](../dim-aligned/) kullanın.

## Doğrusal Ölçünün Anatomisi

```
  |←————— 5.00 —————→|
  |                   |
  ●  (uzatma çizgisi 1)     ●  (uzatma çizgisi 2)
  p1                  p2
```

- **Uzatma çizgileri** — ölçülen her noktadan ölçü çizgisine dik olarak iner.
- **Ölçü çizgisi** — yatay (X mesafesini ölçer) veya dikey (Y mesafesini ölçer).
- **Değer** — seçilen eksen boyunca yansıtılan mesafe; gerçek noktadan noktaya mesafe değil.

## Doğrusal Ölçü Yerleştirme

1. Terminale `dimlinear` yazın veya araç çubuğundaki **Dimension Linear** düğmesine tıklayın.
2. **Birinci uzatma çizgisi başlangıç noktasını tıklayın** (p1) veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **İkinci uzatma çizgisi başlangıç noktasını tıklayın** (p2). Koordinat girişi burada da çalışır.
4. **İmleci hareket ettirerek** ölçü çizgisini konumlandırın. Yönelim, imleç konumundan otomatik olarak algılanır.
5. **Tıklayın** — ya da kesin yerleştirme için kaydırma mesafesi yazıp **Enter** tuşuna basın.

## Otomatik Yönelim Algılama

Hiçbir yönelim zorlanmadığında, komut imleç konumunu ölçülen iki noktaya göre okur:

| İmleç konumu | Algılanan yönelim | Ölçülen |
|-----------------|---------------------|-----------------|
| Noktaların üstünde veya altında | Yatay | p1 ile p2 arasındaki Δ X |
| Noktaların solunda veya sağında | Dikey | p1 ile p2 arasındaki Δ Y |

Yerleştirme aşamasında yatay kilitlemek için **H**, dikey kilitlemek için **V** tuşuna basın. Kilitlendikten sonra imleci hareket ettirseniz bile yönelim değişmez.

## Yazılan Kaydırma Mesafesi

Yerleştirme sırasında bir sayı yazarak ölçü çizgisini ölçülen noktalardan tam mesafeye sabitleyebilirsiniz:

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.` | Kaydırma mesafesine rakam ekler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Yazılan mesafeye yerleştirir |

İmleç tarafı (yatay için üst/alt, dikey için sol/sağ) işareti belirler — ölçü çizgisi imlecin şu anda bulunduğu tarafta görünür.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır (p1/p2 aşamaları) veya kaydırma mesafesi (yerleştirme aşaması) |
| `,` | X'i kilitler ve Y girişine geçer (p1/p2 aşamaları) |
| `H` | Yatay yönelimi kilitler (yalnızca yerleştirme aşamasında) |
| `V` | Dikey yönelimi kilitler (yalnızca yerleştirme aşamasında) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Yazılan koordinatı veya kaydırmayı onaylar |
| `Escape` | İptal eder |

## Dimension Linear - Dimension Aligned Karşılaştırması

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Eksen | Her zaman Y veya D | Ölçülen çizgiye paralel |
| Ölçtüğü | Yalnızca X veya Y bileşeni | Gerçek Öklid mesafesi |
| H/V tuşları | Evet — yönelimi kilitler | Hayır — her zaman p1→p2'yi takip eder |
| En iyi | Dikdörtgensel yerleşimler, kat planları | Köşegen özellikler, açılı kesimler |

## Etiketi Düzenleme — simple mode

Yerleştirilen doğrusal ölçüye **çift tıklayarak** metin düzenleyiciyi **simple** modda açın. Düzenleyici, imleci konumlandırıp doğrudan düzenleyebilmeniz için geçerli görüntülenen değerle önceden doldurulmuştur.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Font / Height | **Tüm** etikete aynı anda uygulanır |
| Karakter başına biçimlendirme | Desteklenmez |
| `Enter` | Değeri kaydeder ve düzenleyiciyi kapatır |
| Çok satırlı | Desteklenmez |

Tam referans için [Metin Düzenleyici — simple mode](../../interface/text-editor/#simple-mode) sayfasına bakın.

## Zincirleme Ölçüler

Son uzatma çizgisinden devam eden ölçüler eklemek için bu ölçüyü yerleştirdikten hemen sonra [Dimension Continue](../dim-continue/) kullanın.

## DXF — DIMENSION nesnesi

Doğrusal ölçüler, `rotationDeg` değeri `0` (yatay) veya `90` (dikey) olarak ayarlanmış `DIMENSION` nesneleri olarak kaydedilir. Uzatma çizgisi başlangıç noktaları, ölçü çizgisi konumu, metin konumu, ölçülen değer, ok stili, metin yüksekliği ve tüm görüntüleme bayrakları kayıpsız round-trip yapar.
