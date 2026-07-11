---
title: Dimension Radius Komutu — KulmanLab CAD'de Yay ve Daire Yarıçaplarını İşaretle
description: Dimension Radius komutu, bir yay veya daire üzerine R önekli yarıçap ölçüsü yerleştirir. Nesneyi tıklayın, ardından ölçü çizgisini merkezden çevreye yönlendirmek için imleci hareket ettirin. DXF'de DIMENSION radius nesneleri olarak tam round-trip.
keywords: [CAD radius dimension, dimradius, daire yarıçapını işaretle, yay yarıçap ölçüsü, R öneki ölçüsü, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

`dimradius` komutu, bir yay veya daire üzerine yarıçap ölçüsü yerleştirir. Ölçü çizgisi merkezden imleç yönünde çevredeki bir noktaya uzanır ve `R <değer>` olarak etiketlenir. Tam çapı ölçmek için [Dimension Diameter](../dim-diameter/) kullanın.

## Yarıçap Ölçüsünün Anatomisi

```
  ● (merkez)
   \
    \  R 5.00
     \
      ●────── metin (imleç tarafı)
   (yay noktası)
```

- **Ölçü çizgisi** — merkezden yay üzerindeki bir noktaya imleç yönünde uzanır; yay üzerinde ok ucu bulunur.
- **Etiket** — `R` sembolü ardından yarıçap değeri.

## Yarıçap Ölçüsü Yerleştirme

1. Terminale `dimradius` yazın veya araç çubuğundaki **Dimension Radius** düğmesine tıklayın.
2. Seçmek için **bir yay veya daireyi tıklayın**.
3. **İmleci hareket ettirerek** ölçü çizgisini yönlendirin — yay noktası imleç yönünü merkezden takip eder.
4. Ölçüyü yerleştirmek için **tıklayın**.

Yalnızca **Yay** ve **Daire** nesneleri seçilebilir. Başka bir nesne türünü tıklamak herhangi bir şey yapmaz.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Escape` | İptal eder |

## Dimension Radius - Dimension Diameter Karşılaştırması

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Ölçtüğü | Yarıçap (merkez ile kenar arası) | Çap (merkez üzerinden kenar ile kenar arası) |
| Ölçü çizgisi | Merkez → yay noktası | Yay noktası → yay noktası (merkez üzerinden) |
| Etiket öneki | `R` | `⌀` |
| Ok uçları | Bir tane (yay noktasında) | İki tane (her iki yay noktasında) |
| En iyi | Eğrisel bir özelliğin bir tarafını işaretleme | Tam dairesel ölçüleri işaretleme |

## Etiketi Düzenleme — simple mode

Yerleştirilen yarıçap ölçüsüne **çift tıklayarak** metin düzenleyiciyi **simple** modda açın. Düzenleyici, geçerli görüntülenen değerle (ör. `R 5.00`) önceden doldurulmuştur; imleci konumlandırıp doğrudan düzenleyebilirsiniz.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Font / Height | **Tüm** etikete aynı anda uygulanır |
| Karakter başına biçimlendirme | Desteklenmez |
| `Enter` | Değeri kaydeder ve düzenleyiciyi kapatır |
| Çok satırlı | Desteklenmez |

Tam referans için [Metin Düzenleyici — simple mode](../../interface/text-editor/#simple-mode) sayfasına bakın.

## DXF — DIMENSION radius nesnesi

Yarıçap ölçüleri, merkez koordinatlarını, yay noktası konumunu ve ölçülen yarıçap değerini saklayan, yarıçap türü geometrisiyle `DIMENSION` nesnesi olarak kaydedilir. Tüm özellikler kayıpsız round-trip yapar.
