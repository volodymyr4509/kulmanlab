---
sidebar_position: 17
title: Extend Komutu — KulmanLab CAD'de Çizgi Ucunu En Yakın Sınıra Uzat
description: Extend komutu, üzerine gelinmiş bir Çizginin en yakın ucunu başka bir nesneyle oluşturacağı en yakın kesişime kadar uzatır. Tıklamadan önce canlı önizleme uzatılmış çizgiyi gösterir. Extend yalnızca Çizgi nesnelerinde çalışır ve Metin, Spline ile Çoklu Göstergeni sınır olarak yok sayar.
keywords: [CAD extend komutu, çizgiyi uzat CAD, çizgiyi sınıra uzat, çizgi ucu uzatma, üzerine gelme uzatma önizlemesi, kulmanlab]
---

# Extend

`extend` komutu, bir [Çizgi](../line/)nin en yakın ucunu, çizimdeki başka bir nesneyle oluşturacağı en yakın kesişime kadar uzatır. Uzatmak istediğiniz ucun yakınına gelin — bir önizleme uzatılmış çizgiyi gösterir — ardından uygulamak için tıklayın.

Extend yalnızca **Çizgi nesnelerinde** çalışır. Çizginin uzandığı sınırlar, Metin, Mtext, Çoklu Gösterge ve Spline dışındaki herhangi bir nesne türü olabilir.

## Çizgi Uzatma

1. Terminale `extend` yazın veya araç çubuğundaki **Extend** düğmesine tıklayın.
2. **Bir çizginin bir ucuna yakın gelin** — önizleme, çizgiyi o yöndeki en yakın sınıra kadar uzatılmış gösterir.
3. Uzatmayı uygulamak için **tıklayın**.

Komut, her uzatmanın ardından aktif kalır, böylece birden fazla çizgiyi sırayla uzatabilirsiniz. Çıkmak için **Escape** tuşuna basın.

```
  Önce:                      Sonra:

  ──────           |           ──────────────|
  (kısa çizgi)     (sınır)  (sınıra uzatıldı)
```

## Uç Nokta Seçim Mantığı

Komut, imlecin hangi uca daha yakın olduğuna bakar:

- İmleç **bitiş noktasına daha yakınsa** → uç, çizgi yönü boyunca ileri uzatılır.
- İmleç **başlangıç noktasına daha yakınsa** → başlangıç, geriye doğru uzatılır (zıt yönde).

Seçilen uç noktadan çizgi yönü boyunca bir ışın yayılır ve bu ışın boyunca herhangi bir başka nesneyle (çizginin kendisi ve yok sayılan türler hariç) oluşan **en yakın kesişim** yeni uç nokta olur.

O yönde kesişim bulunamazsa, önizleme görünmez ve tıklamak hiçbir şey yapmaz.

## Sınır Dışlamaları

Aşağıdaki nesne türleri sınır olarak yok sayılır — bir çizgi bunlarla karşılaşmak için uzanmaz:

- Metin / Mtext
- Çoklu Gösterge
- Spline

Diğer tüm türler (Çizgi, Yay, Daire, Elips, Çoklu Çizgi, Ölçü) geçerli sınır olarak işlev görür.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Escape` | Extend modundan çıkar |

## Desteklenen Nesneler

| Nesne | Uzatılabilir mi? |
|--------|----------------|
| Çizgi | Evet |
| Yay, Daire, Elips | Hayır |
| Çoklu Çizgi / Dikdörtgen | Hayır |
| Metin, Spline, Ölçü, Gösterge | Hayır |

## Extend - Trim Karşılaştırması

| | Extend | Trim |
|---|--------|------|
| Ne yapar | Çizgi ucunu sınıra uzatır | Çizginin bir segmentini kaldırır |
| Tetikleyici | Uzatılacak ucun yakınına gel | Kesilecek segmentin üzerine gel |
| Sonuç | Çizgi ucu dışa doğru hareket eder | Çizgi bölünür veya kısalır |
| Her ikisi | Yalnızca çizgiler | Yalnızca çizgiler |
