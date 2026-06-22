---
sidebar_position: 33
title: Angle Komutu — KulmanLab CAD'de Üç Nokta ile Köşedeki İç Açıyı Ölç
description: Angle komutu, üç tıklanan nokta tarafından tanımlanan köşedeki iç açıyı (0°–180°) ölçer. Birinci uç, köşe, ikinci uç sırasıyla tıklayın. Sonuç terminalde 4 ondalık basamak hassasiyetle gösterilir.
keywords: [CAD angle komutu, CAD açı ölç, üç noktalı açı, iç açı, açı ölçümü, köşe açısı, kulmanlab]
---

# Angle

`angle` komutu, üç tıklanan nokta aracılığıyla iki çizgi parçasının oluşturduğu köşedeki iç açıyı ölçer. Sonuç — her zaman 0° ile 180° arasında — terminalde 4 ondalık basamak hassasiyetle gösterilir. Bu komut iki ölçüm komutundan biridir; [Distance](./distance) ise düz çizgi uzunluğunu ölçer.

## Açı Ölçümünün Anatomisi

```
  ● birinci nokta (birinci ışının ucu)
   \
    \  birinci ışın önizlemesi
     \
      ● köşe (adım 3)
     /
    /  ikinci ışın önizlemesi (imlece doğru)
   /
  ● üçüncü nokta  →  terminal: "Angle: 45.0000°"
```

- **Birinci nokta** — açının bir kolunun ucu (adım 2).
- **Köşe** — açının ölçüldüğü köşe noktası (adım 3).
- **Üçüncü nokta** — açının diğer kolunun ucu (adım 4).

## Açı Ölçme

1. Terminale `angle` yazın veya araç çubuğundaki **Angle** düğmesine tıklayın.
2. **Birinci noktayı tıklayın** — açının bir kol ucunu seçin. Ya da tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Köşeyi tıklayın** — iki kolun birleştiği köşe noktasını seçin. Koordinat girişi burada da çalışır.
4. **Üçüncü noktayı tıklayın** — ikinci kol ucunu seçin. Bu noktayı yerleştirmek sonucu yazdırır. Koordinat girişi burada da çalışır.
5. **Tekrar tıklayın** (isteğe bağlı) — o tıklama yeni birinci nokta olarak yeni bir ölçüm başlatır.

## İç Açı Kuralı

Komut, köşeden gelen iki ışının iç çarpımını kullanarak açıyı hesaplar:

- **Her zaman iç açı**: sonuç, 0° ile 180° arasındaki küçük açıdır.
- Uç noktalara tıklama sırası sonucu etkilemez — yalnızca köşe konumu önemlidir.
- Doğrusal noktalar (üçü de tek çizgide) 0° veya 180° döndürür.

## Zincirleme Ölçümler

Sonuç göründükten sonra, hemen tıklamak bir sonraki ölçümü başlatır — tıklanan nokta yeni birinci nokta olur. `Escape` tuşuna basana kadar komut hiçbir zaman otomatik olarak çıkmaz.

## Açı - Mesafe Karşılaştırması

| | Açı | Mesafe |
|---|-------|---------|
| Ne ölçer | Köşedeki iç açı | Düz çizgi uzunluğu |
| Tıklama sayısı | 3 | 2 |
| Sonuç biçimi | `45.0000°` | `12.3456` (birim) |
| Tuval önizlemesi | Köşeden her iki uca giden iki çizgi | Birinci noktadan imlece giden çizgi |
| En iyi | İki özellik arasındaki açılma açısı | Boşluk veya segment uzunluğu |

## Koordinat Girişi

Tıklamak yerine üç noktanın herhangi biri için tam konumu yazın:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı onaylar |
| `Escape` | İptal eder ve adım 2'ye sıfırlar |

## Notlar

- Sonuçlar yalnızca **terminalde** gösterilir — çizime hiçbir şey eklenmez.
- Hassasiyet her zaman derece cinsinden 4 ondalık basamaktır.
