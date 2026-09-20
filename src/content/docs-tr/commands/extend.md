---
title: Extend Komutu — Nesneyi En Yakın Sınıra Uzatma
description: Extend komutu, üzerine gelinen bir Line, Arc, Ellipse veya açık Polyline'ın en yakın ucunu başka bir nesneyle oluşturacağı en yakın kesişime kadar uzatır. Canlı önizleme, tıklamadan önce uzatılmış nesneyi gösterir.
keywords: [CAD extend komutu, çizgiyi uzat CAD, yayı uzat CAD, elipsi uzat CAD, çoklu çizgiyi uzat CAD, nesneyi sınıra uzat, üzerine gelme uzatma önizlemesi, kulmanlab]
group: edit
order: 9
---

# Extend

`Uzat` komutu, üzerine gelinen bir [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) veya açık [Polyline](../polyline/)'ın en yakın ucunu, çizimdeki başka bir nesneyle oluşturacağı en yakın kesişime kadar uzatır. Uzatmak istediğiniz ucun yakınına gelin — bir önizleme uzatılmış nesneyi gösterir — ardından uygulamak için tıklayın.

Yalnızca gerçek bir ucu olan nesneler uzatılabilir. Bir [Circle](../circle/) ve tam (360°) bir Ellipse her zaman ucu olmayan kapalı şekillerdir, bu yüzden asla uzatılamazlar — kapalı bir Polyline veya Rectangle için de aynı geçerlidir. Kısmi bir Ellipse (eliptik bir yay) ve bir Arc'ın uçları vardır ve tıpkı bir Line gibi uzatılırlar.

## Bir nesneyi uzatma

1. Terminale `Uzat` yazın veya araç çubuğundaki **Extend** düğmesine tıklayın.
2. Uzatmak istediğiniz nesnenin **bir ucunun yakınına gelin** — önizleme, o yöndeki en yakın sınıra kadar uzatılmış halini gösterir.
3. Uzatmayı uygulamak için **tıklayın**.

Komut, her uzatmanın ardından aktif kalır, böylece daha fazla nesneyi uzatmak için üzerine gelip tıklamaya devam edebilirsiniz. Çıkmak için **Enter**, **Boşluk** veya **Escape** tuşuna basın.

```
  Önce:                      Sonra:

  ──────           |           ──────────────|
  (kısa çizgi)     (sınır)  (sınıra uzatıldı)
```

## Uç nokta nasıl seçilir

Komut, imlecin hangi uca daha yakın olduğuna bakar:

- **Line ve açık Polyline** — imleç bitiş noktasına daha yakınsa uç ileri uzatılır; imleç başlangıç noktasına daha yakınsa başlangıç geriye uzatılır.
- **Arc ve kısmi Ellipse** — imleç açısal uçlardan birine daha yakınsa, yay o yönde aynı merkez ve yarıçap (veya aynı elips şekli) etrafında bir sonraki sınıra ulaşana kadar büyür.

Seçilen uçtan bir ışın — Arc ve Ellipse için nesnenin kendi altındaki daire veya eğrisi — yayılır ve başka herhangi bir nesneyle (nesnenin kendisi ve yok sayılan türler hariç) oluşan **en yakın kesişim** yeni uç nokta olur.

O yönde kesişim bulunamazsa, önizleme görünmez ve tıklamak hiçbir şey yapmaz.

## Sınır dışlamaları

Aşağıdaki nesne türleri sınır olarak yok sayılır — bir nesne bunlarla karşılaşmak için uzanmaz:

- Metin / Mtext
- Çoklu Gösterge
- Spline

Diğer tüm türler (Line, Arc, Circle, Ellipse, Polyline, Dimension) geçerli sınır olarak işlev görür.

Bir Polyline'ın ilk veya son segmenti kendisi bir yay segmenti ise (Arc anahtarıyla çizilmiş), onu uzatmak, yayı kendi çemberi boyunca büyütür — bağımsız bir Arc'ı uzatmakla aynı şekilde — düz bir segment gibi ele almak yerine.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Enter` / `Boşluk` | Extend modundan çıkar |
| `Escape` | Extend modundan çıkar |

## Desteklenen Nesneler

| Nesne | Uzatılabilir mi? |
|--------|----------------|
| Line | Evet |
| Arc | Evet |
| Ellipse | Evet — yalnızca zaten kısmi bir yay ise; tam bir elipsin ucu yoktur |
| Circle | Hayır — her zaman ucu olmayan kapalı bir şekildir |
| Polyline (açık) | Evet |
| Polyline (kapalı) / Rectangle | Hayır — her zaman ucu olmayan kapalı bir şekildir |
| Metin, Spline, Ölçü, Gösterge | Hayır |

## Extend - Trim Karşılaştırması

| | Extend | Trim |
|---|--------|------|
| Ne yapar | Bir nesnenin ucunu sınıra uzatır | Bir nesnenin segmentini kaldırır |
| Tetikleyici | Uzatılacak ucun yakınına gel | Kesilecek segmentin üzerine gel |
| Sonuç | Uç nokta dışa doğru hareket eder | Nesne bölünür veya kısalır |
| Desteklenen nesneler | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
