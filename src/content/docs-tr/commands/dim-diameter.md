---
sidebar_position: 30
title: Dimension Diameter Komutu — KulmanLab CAD'de Daire ve Yay Çaplarını İşaretle
description: Dimension Diameter komutu, bir yay veya daire üzerine çap ölçüsü (çap sembolü önekiyle) yerleştirir. İmleci hareket ettirerek ölçü çizgisini herhangi bir açıya döndürün. DXF'de DIMENSION diameter nesneleri olarak tam round-trip.
keywords: [CAD diameter dimension, dimdiameter, daire çapını işaretle, yay çap ölçüsü, çap sembolü CAD, kulmanlab]
---

# Dimension Diameter

`dimdiameter` komutu, bir yay veya daire üzerine çap ölçüsü yerleştirir. Ölçü çizgisi tam çapı kapsar — merkez üzerinden geçerek iki diametrically karşıt yay noktası arasında — ve `⌀ <değer>` olarak etiketlenir. Merkez ile bir kenar arasındaki yarıçapı işaretlemek için [Dimension Radius](../dim-radius/) kullanın.

## Çap Ölçüsünün Anatomisi

```
  ●──────────── ⌀ 10.00 ────────────●
  (uzak yay noktası)              (yakın yay noktası / metin tarafı)
```

- **Ölçü çizgisi** — tam çapı kapsar; her iki yay kesişim noktasında ok uçları bulunur.
- **Yakın yay noktası** — imleç tarafındaki çevre noktası (metin etiketinin bulunduğu yer).
- **Uzak yay noktası** — diametrically karşıt nokta.
- **Etiket** — `⌀` sembolü ardından çap değeri.

## Çap Ölçüsü Yerleştirme

1. Terminale `dimdiameter` yazın veya araç çubuğundaki **Dimension Diameter** düğmesine tıklayın.
2. Seçmek için **bir yay veya daireyi tıklayın**.
3. **İmleci hareket ettirerek** ölçü çizgisini istenen açıya döndürün.
4. Ölçüyü yerleştirmek için **tıklayın**.

Yalnızca **Yay** ve **Daire** nesneleri seçilebilir.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Escape` | İptal eder |

## Dimension Diameter - Dimension Radius Karşılaştırması

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Ölçtüğü | Tam çap (2 × yarıçap) | Yarıçap (merkez ile kenar arası) |
| Ölçü çizgisi | Merkez üzerinden kenar → kenar | Merkez → kenar |
| Etiket öneki | `⌀` | `R` |
| Ok uçları | İki tane (her iki yay noktasında) | Bir tane (yay noktasında) |
| En iyi | Tam dairesel delik veya mil ölçüleri | Eğrisel bir özelliğin bir tarafını işaretleme |

## Etiketi Düzenleme — simple mode

Yerleştirilen çap ölçüsüne **çift tıklayarak** metin düzenleyiciyi **simple** modda açın. Düzenleyici, geçerli görüntülenen değerle (ör. `⌀ 10.00`) önceden doldurulmuştur; imleci konumlandırıp doğrudan düzenleyebilirsiniz.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Font / Height | **Tüm** etikete aynı anda uygulanır |
| Karakter başına biçimlendirme | Desteklenmez |
| `Enter` | Değeri kaydeder ve düzenleyiciyi kapatır |
| Çok satırlı | Desteklenmez |

Tam referans için [Metin Düzenleyici — simple mode](../interface/text-editor#simple-mode) sayfasına bakın.

## DXF — DIMENSION diameter nesnesi

Çap ölçüleri, her iki yay noktası konumunu ve ölçülen çap değerini (2 × yarıçap) saklayan, çap türü geometrisiyle `DIMENSION` nesnesi olarak kaydedilir. Tüm özellikler kayıpsız round-trip yapar.
