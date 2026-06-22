---
sidebar_position: 33
title: Angle Komutu — KulmanLab CAD'de İki Çizgi Arasındaki Açıyı Ölç
description: Angle komutu, üç nokta tarafından tanımlanan iki çizgi arasındaki iç açıyı ölçer — zirve noktası ortaktır. Sonuç terminalde 4 ondalık basamak hassasiyetle görüntülenir. Zincir ölçümü ve koordinat girişini destekler.
keywords: [CAD angle komutu, CAD açı ölç, çizgiler arasındaki açı, açı ölçümü, iç açı, kulmanlab]
---

# Angle

`angle` komutu, üç nokta tarafından tanımlanan iki çizgi arasındaki iç açıyı ölçer (zirve noktası ortak köşedir). Sonuç yalnızca terminalde görüntülenir.

## Ölçüm Anatomisi

```
  Nokta 1
   \
    \ ← açı
     ● Zirve Noktası
    /
   /
  Nokta 2
```

Zirve→Nokta1 çizgisinden Zirve→Nokta2 çizgisine olan açı ölçülür.

## İç Açı Kuralı

Angle her zaman skaler çarpım kullanarak iki yön arasındaki **iç açıyı** (0° ile 180° arasında) döndürür:

- Paralel çizgiler (aynı yön): `0.0000°`
- Dik çizgiler: `90.0000°`
- Karşıt yönler (doğrusal): `180.0000°`

Sonuç her zaman negatif değildir ve hiçbir zaman 180°'yi geçmez.

## Zincir Ölçümü

İlk ölçümden sonra komut aktif kalır. Sonraki tıklama aynı zirveden yeni **Nokta 1** olur, böylece yeniden başlatmadan tek köşe etrafında birden fazla açıyı ölçebilirsiniz.

Farklı bir zirveyle yeni bir açı ölçmek için `Escape` tuşuna basın ve `angle` komutunu yeniden çalıştırın.

## Koordinat Girişi

Herhangi bir nokta girişi adımında tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Notlar

- Sonuçlar **yalnızca terminalde** görüntülenir — tuvalde hiçbir ölçü nesnesi oluşturulmaz.
- Hassasiyet: **4 ondalık basamak** (örneğin `37.5000°`).
- Çizimde mevcut çizgiler arasındaki açıyı ölçmek için [Dim Angular](./dim-angular) komutunu kullanın — bu komut açısal ölçüyü doğrudan çizime yerleştirir.
