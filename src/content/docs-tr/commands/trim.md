---
title: Trim Komutu — Kesişimlerde Çizgi Segmentlerini Kırp
description: Trim komutu, imlece en yakın iki komşu kesişim noktası arasındaki Çizgi kısmını kaldırır. Kırmızı imleç üzerine gelme önizlemesi, tıklamadan önce tam olarak hangi segmentin kesileceğini gösterir. Trim yalnızca Çizgi nesnelerinde çalışır — yay, daire veya çoklu çizgide çalışmaz.
keywords: [CAD trim komutu, çizgiyi kırp CAD, kesişimde çizgi kes, imleç üzerine gelme kırp önizleme, yalnızca çizgi kırp, kulmanlab]
group: edit
order: 8
---

# Trim

`trim` komutu, iki komşu kesişim noktası arasında kalan [Çizgi](../line/) kısmını kaldırarak çizgiyi bir veya iki daha kısa segmente böler. Kesilecek segment imleç konumuna göre belirlenir — kaldırılmasını istediğiniz kısmın üzerine gelin ve kırpmak için tıklayın.

Trim yalnızca **Çizgi nesnelerinde** çalışır. Yaylar, daireler, çoklu çizgiler ve diğer nesne türleri için bunun yerine [Delete](../delete/) veya tutamaç düzenlemeyi kullanın.

## Çizgi Kırpma

1. Terminale `trim` yazın veya araç çubuğundaki **Trim** düğmesine tıklayın.
2. Kaldırmak istediğiniz **çizgi segmentinin üzerine gelin** — kırmızı önizleme tam olarak kesilecek kısmı vurgular.
3. O segmenti kaldırmak için **tıklayın**.

Komut, her kırpmanın ardından aktif kalır, böylece daha fazla segment kesmek için üzerine gelip tıklamaya devam edebilirsiniz. Çıkmak için **Escape** tuşuna basın.

```
  Önce:                     Orta segment kırpıldıktan sonra:

  ──────●──────●──────        ──────●          ●──────
      kesişim  kesişim       (sol kısım)  (sağ kısım)
                                 (orta segment kaldırıldı)
```

## Kırpma Segmentinin Nasıl Belirlendiği

Komut, imleç konumunu üzerine gelinen çizgiye yansıtır ve çizginin diğer nesnelerle tüm kesişim noktalarını bulur. Bu kesişim parametreleri çizgiyi segmentlere böler. İmleç yansımasını içeren aralığa sahip segment vurgulanır ve tıklamada kaldırılır.

- İmleç **ilk kesişimden önceyse**: çizginin o baştaki kısmı kaldırılır.
- İmleç **iki kesişim arasındaysa**: o orta kısım kaldırılır; çizgi ikiye bölünür.
- İmleç **son kesişimden sonraysa**: çizginin o sondaki kısmı kaldırılır.
- Çizginin başka herhangi bir nesneyle **kesişimi yoksa**: önizleme görünmez ve tıklamak hiçbir şey yapmaz.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Escape` | Trim modundan çıkar |

## Desteklenen Nesneler

| Nesne | Kırpılabilir mi? |
|--------|----------------|
| Çizgi | Evet |
| Yay, Daire, Elips | Hayır |
| Çoklu Çizgi / Dikdörtgen | Hayır |
| Metin, Spline, Ölçü, Gösterge | Hayır |

**Kesim sınırları** olarak kullanılan nesneler herhangi bir tür olabilir — yalnızca kırpılan nesnenin Çizgi nesnesi olması gerekir.

## Trim - Extend Karşılaştırması

| | Trim | Extend |
|---|------|--------|
| Ne yapar | Çizginin bir segmentini kaldırır | Çizgi ucunu bir sınıra uzatır |
| Tetikleyici | Kesilecek segmentin üzerine gel | Uzatılacak ucun yakınına gel |
| Sonuç | Çizgi bölünür veya kısalır | Çizgi ucu sınıra taşınır |
| Her ikisi | Yalnızca çizgiler | Yalnızca çizgiler |
