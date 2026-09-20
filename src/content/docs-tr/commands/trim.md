---
title: Trim Komutu — Kesişimlerde Segment Kırpma
description: Trim komutu, imlece en yakın iki komşu kesişim noktası arasındaki Line, Arc, Circle, Ellipse veya Polyline kısmını kaldırır. Önizleme, tıklamadan önce tam olarak hangi segmentin kesileceğini gösterir.
keywords: [CAD trim komutu, çizgiyi kırp CAD, daireyi kırp CAD, yayı kırp CAD, elipsi kırp CAD, çoklu çizgiyi kırp CAD, kesişimde çizgi kes, imleç üzerine gelme kırp önizleme, kulmanlab]
group: edit
order: 8
---

# Trim

`Buda` komutu, iki komşu kesişim noktası arasında kalan [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) veya [Polyline](../polyline/) kısmını kaldırarak nesneyi bir veya daha fazla kalan parçaya böler. Kesilecek segment imleç konumuna göre belirlenir — kaldırılmasını istediğiniz kısmın üzerine gelin ve kırpmak için tıklayın.

## Bir nesneyi kırpma

1. Terminale `Buda` yazın veya araç çubuğundaki **Trim** düğmesine tıklayın.
2. Kaldırmak istediğiniz **segmentin üzerine gelin** — önizleme tam olarak kesilecek kısmı vurgular.
3. O segmenti kaldırmak için **tıklayın**.

Komut, her kırpmanın ardından aktif kalır, böylece aynı nesne üzerinde veya farklı bir nesnede daha fazla segment kesmek için üzerine gelip tıklamaya devam edebilirsiniz. Çıkmak için **Enter**, **Boşluk** veya **Escape** tuşuna basın.

```
  Önce:                     Orta segment kırpıldıktan sonra:

  ──────●──────●──────        ──────●          ●──────
      kesişim  kesişim       (sol kısım)  (sağ kısım)
                                 (orta segment kaldırıldı)
```

## Kırpma Segmentinin Nasıl Belirlendiği

Komut, imleç konumunu üzerine gelinen nesneye yansıtır ve nesnenin diğer nesnelerle tüm kesişim noktalarını bulur. Bu kesişimler nesneyi segmentlere böler — bir Line, Arc veya açık Polyline için, nesnenin kendi uç noktaları ek sabit sınırlar olarak işlev görür. Tam bir Circle veya Ellipse, ya da kapalı bir Polyline (Rectangle dahil), kendi uç noktalarına sahip değildir, bu yüzden kırpılabilmesi için önce en az iki kesişim noktası gerekir. İmleç yansımasını içeren aralığa sahip segment vurgulanır ve tıklamada kaldırılır.

- **Line, Arc ve açık Polyline** — kaldırılan segment, baştaki kısım (ilk kesişimden önce), ortadaki bir kısım (iki kesişim arasında, nesneyi iki parçaya bölerek) veya sondaki kısım (son kesişimden sonra) olabilir.
- **Circle, Ellipse ve kapalı Polyline/Rectangle** — sabit bir başlangıç veya bitiş olmadığından, yalnızca iki *kesişim noktası* arasındaki yay kaldırılabilir. İkiden az kesişim varsa önizleme görünmez ve tıklamak hiçbir şey yapmaz. Şeklin geri kalanı tek kalan parça olur.

## Kırpma Ne Üretir

| Nesne | Kırpma Sonrası Sonuç |
|--------|------------------------|
| Line | En fazla iki daha kısa Line nesnesi |
| Arc | En fazla iki daha kısa Arc nesnesi |
| Circle | Bir [Arc](../arc/) nesnesi — dairenin kapalı şekli ortadan kalkar, bu yüzden kalan parça bir yay olarak saklanır |
| Ellipse | Başlangıç ve bitiş açısına sahip bir Ellipse nesnesi — kalan parça bir Ellipse olarak kalır, artık kısmi bir şekilde |
| Polyline (açık) | En fazla iki daha kısa Polyline nesnesi |
| Polyline (kapalı) / Rectangle | Bir açık Polyline nesnesi — kapalı şekil ortadan kalkar, bu yüzden kalan parça açık olarak saklanır |

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Enter` / `Boşluk` | Trim modundan çıkar |
| `Escape` | Trim modundan çıkar |

## Desteklenen Nesneler

| Nesne | Kırpılabilir mi? |
|--------|----------------|
| Line | Evet |
| Arc | Evet |
| Circle | Evet — 2 veya daha fazla kesişim noktası gerektirir |
| Ellipse | Evet — 2 veya daha fazla kesişim noktası gerektirir |
| Polyline (açık) | Evet |
| Polyline (kapalı) / Rectangle | Evet — 2 veya daha fazla kesişim noktası gerektirir |
| Metin, Spline, Ölçü, Gösterge | Hayır |

**Kesim sınırları** olarak kullanılan nesneler bir Line, Arc, Circle, Ellipse veya Polyline olabilir. Metin, Spline, Ölçü ve Gösterge nesneleri hiçbir zaman kesişim kaydetmez, bu yüzden onlar da sınır olarak işlev göremez.

Bir Polyline'ın **yay segmentleri** (Arc anahtarıyla çizilmiş veya içe aktarılmış) düz segmentleri gibi tam olarak kırpılır — iki kesişim arasındaki yay kısmının üzerine gelin ve tıklayın. Kırpılan kenar eğriliğini korur; yalnızca uzunluğu değişir.

## Trim - Extend Karşılaştırması

| | Trim | Extend |
|---|------|--------|
| Ne yapar | Bir nesnenin segmentini kaldırır | Çizgi ucunu bir sınıra uzatır |
| Tetikleyici | Kesilecek segmentin üzerine gel | Uzatılacak ucun yakınına gel |
| Sonuç | Nesne bölünür veya kısalır | Çizgi ucu sınıra taşınır |
| Desteklenen nesneler | Line, Arc, Circle, Ellipse, Polyline | Line, Arc, Ellipse, Polyline |
