---
title: Fillet Komutu — Teğet Yayla Köşe Yuvarlama
description: Fillet komutu, iki Çizgi, Yay veya Çoklu Çizgi segmenti arasındaki köşeyi belirtilen yarıçapta bir teğet yayla yuvarlar. Bir çoklu çizginin kendi köşesini yuvarlamak yayı doğrudan içine ekler; açık bir çoklu çizgi üzerinden yuvarlama ise her iki tarafı yeni bir çoklu çizgide birleştirir.
keywords: [CAD fillet komutu, köşe yuvarlama CAD, fillet yayı, teğet yay, çoklu çizgi fillet, yay fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

`Yuvarla` komutu, iki [Çizgi](../line/), [Yay](../arc/) veya [Çoklu Çizgi](../polyline/) segmenti arasındaki köşeyi, verilen yarıçapta bir teğet yay ekleyerek yuvarlar ve seçilen nesneleri bu noktaya kadar kırpar (veya birleştirir).

Fillet, **Çizgi, Yay ve Çoklu Çizgi** nesneleri üzerinde çalışır — bir çoklu çizginin kendi düz veya yay segmentleri dahil.

## Fillet Nasıl Kullanılır

1. Terminale `Yuvarla` yazın veya araç çubuğundaki **Fillet** düğmesine basın.
2. **Fillet yarıçapını girin** ve **Enter** tuşuna basın.
3. **Birinci çizgi, yay veya çoklu çizgi segmentini tıklayın** — tıkladığınız kısım, herhangi bir kesişimin hangi tarafının korunacağını belirler.
4. **İkinci nesnenin üzerine gelin** — kesik çizgili yay önizlemesi ortaya çıkacak filleti gösterir. İmleci korumak istediğiniz tarafa doğru hareket ettirin.
5. **Tıklayın** — uygulanır.

```
  Önce:                       Fillet sonrası (yarıçap r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Kesişen Nesneler için Taraf Seçimi

İki nesne kesiştiğinde, fillet tıklama konumlarıyla tanımlanan köşeye uygulanır — her nesnenin **imleçle aynı taraftaki** kısmı korunur.

- Birinci nesnenin bir ucuna yakın tıklayarak o yarıyı seçin.
- İmleci ikinci nesnenin istenen yarısına getirin — kesik çizgili önizleme canlı olarak güncellenir.

## Komutun Oluşturduğu

Sonuç, ne seçtiğinize bağlıdır:

- **İki bağımsız Çizgi/Yay nesnesi**, veya açık bir çoklu çizgi içermeyen herhangi bir çift: her ikisi de **T1**/**T2** teğet noktalarına kadar kırpılır ve aralarına yeni bir Yay nesnesi eklenir.
- **Bir köşe noktasını paylaşan aynı çoklu çizginin iki segmenti**: yeni nesne yok — fillet çoklu çizginin kendisinin bir parçası olur. Köşe noktası iki teğet noktasıyla değiştirilir ve aralarındaki yay, o kenarın bulge değeri olarak saklanır — yuvarlatılmış bir çoklu çizgi köşesinin DXF üzerinden gidip gelmesiyle tamamen aynı şekilde.
- **Açık bir çoklu çizgi içeren diğer her durum** — iki farklı açık çoklu çizgi, veya açık bir çoklu çizgi ve bağımsız bir Çizgi/Yay: her ikisi de **tek bir yeni çoklu çizgide** birleştirilir; her taraf kendi teğet noktasına kadar korunur ve fillet yayı bir bulge segmenti daha olarak aralarına eklenerek orijinal nesnelerin yerini alır.

Eklenen veya uzatılan yay, mevcut çizgi kalınlığı, renk, katman ve çizgi türü ayarlarını devralır (ya da bir çoklu çizgiye dahil olduğunda onun kendi ayarlarını).

## Yuvarlanacak Gerçek Açısı Olmayan Köşeler

Seçilen iki segment paylaşılan bir köşe noktasında zaten teğetsel olarak birleşiyorsa — düz bir çoklu çizgi köşesi, veya teğetsel devam eden bir yay segmentine yumuşakça geçen bir çizgi — bir dairenin yuvarlayabileceği gerçek bir köşe yoktur. Fillet bunu algılar ve istenmeyen bir döngü çizmek yerine `cannot fillet: no tangent circle fits there` mesajıyla reddeder.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Yarıçap değerine rakam ekler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Girilen yarıçapı onaylar ve nesne seçimine geçer |
| `Escape` | İptal eder ve sıfırlar |

## Desteklenen Nesneler

| Nesne | Desteklenir |
|--------|-----------|
| Çizgi | Evet |
| Yay | Evet |
| Çoklu Çizgi (düz veya yay segmenti) | Evet |
| Daire, Elips | Hayır |
| Metin, Spline, Ölçü, Gösterge | Hayır |

## Fillet - Chamfer Karşılaştırması

| | Fillet | Chamfer |
|---|--------|---------|
| Köşe türü | Yuvarlatılmış yay | Düz kesim |
| Giriş | Tek yarıçap | İki mesafe (d1, d2) |
| Eklenen nesne | Yay | Çizgi |
| Desteklenen nesneler | Çizgiler, Yaylar ve Çoklu Çizgiler (düz veya yay segmentleri) | Çizgiler ve Çoklu Çizgiler (yalnızca düz segmentler) |
