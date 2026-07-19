---
title: Distance Komutu — İki Nokta Arasındaki Düz Çizgi Mesafesini Ölç
description: Distance komutu, iki tıklanan nokta arasındaki Öklid mesafesini ölçer ve sonucu terminalde 4 ondalık basamak hassasiyetle görüntüler. Sonucun ardından tekrar tıklayarak son noktadan yeni bir ölçüm zinciri başlatın.
keywords: [CAD mesafe ölç, distance komutu, noktadan noktaya ölçüm, düz çizgi mesafesi, kulmanlab CAD ölçümü]
group: measure
order: 1
---

# Distance

`distance` komutu, iki tıklanan nokta arasındaki düz çizgi (Öklid) mesafesini ölçer ve sonucu terminalde 4 ondalık basamak hassasiyetle yazdırır. Bu komut üç ölçüm komutundan biridir — [Angle](../angle/) köşedeki açısal açılımı ölçer, [Area](../area/) ise bir çokgenin alanını ve çevresini ölçer.

## Mesafe Ölçümünün Anatomisi

```
  ● birinci nokta
   \
    \  önizleme çizgisi (canlı)
     \
      ● ikinci nokta    →  terminal: "Distance: 12.3456"
```

- **Birinci nokta** — ölçümün başlangıç noktası.
- **İkinci nokta** — bitiş noktası; bu noktayı yerleştirmek sonucu anında yazdırır.
- **Sonuç** — terminalde görüntülenir, tuvale yerleştirilmez.

## Mesafe Ölçme

1. Terminale `distance` yazın veya araç çubuğundaki **Distance** düğmesine tıklayın.
2. **Birinci noktayı tıklayın** veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **İkinci noktayı tıklayın** — ölçülen mesafe terminalde görünür. Koordinat girişi burada da çalışır.
4. **Tekrar tıklayın** (isteğe bağlı) yeni bir ölçüm başlatmak için. Komut aktif kalır.

Sıfırlamak için istediğiniz zaman `Escape` tuşuna basın.

## Zincirleme Ölçümler

Sonuç göründükten sonra, hemen tıklamak bir sonraki ölçümü başlatır — tıklanan nokta yeni birinci nokta olur. Bu, komutu yeniden etkinleştirmeden bir dizi mesafeyi ölçmenizi sağlar.

## Distance - Angle Karşılaştırması

| | Distance | Angle |
|---|---------|-------|
| Ne ölçer | Düz çizgi uzunluğu | Köşedeki iç açı |
| Tıklama sayısı | 2 | 3 |
| Sonuç biçimi | `12.3456` (birim) | `45.0000°` |
| Tuval önizlemesi | Birinci noktadan imlece giden çizgi | Köşeden imlece giden iki çizgi |
| En iyi | Boşluk veya segment uzunluğu | İki özellik arasındaki açılma açısı |

## Koordinat Girişi

Tıklamak yerine her iki nokta için de tam konumu yazın:

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
- Sonuç, çizim koordinatlarıyla aynı birimde ifade edilir (yerleşik birim dönüşümü yoktur).
- Hassasiyet her zaman 4 ondalık basamaktır.
