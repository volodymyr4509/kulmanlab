---
sidebar_position: 5
title: Arc Komutu — KulmanLab CAD'de Çevrel Daire Yöntemiyle Üç Noktalı Yay Çiz
description: Arc komutu, çevrel daire geometrisini kullanarak tam olarak üç tıklanan nokta üzerinden dairesel yay çizer. Başlangıç ve bitiş tutamaçları, yerleştirme sonrasında yayın uç noktalarını yeni açı ve yarıçapa sürüklemeye olanak tanır. DXF ARC nesneleri olarak tam round-trip.
keywords: [CAD arc komutu, üç noktalı yay CAD, çevrel daire yayı, CAD yay çiz, DXF ARC nesnesi, yay tutamaç düzenleme, kulmanlab]
---

# Arc

`arc` komutu, üç tıklanan nokta üzerinden dairesel yay çizer. Yay, üç noktadan da geçen benzersiz çevrel daire olarak hesaplanır — merkez veya yarıçap doğrudan belirtilmez. Yay, ikinci noktadan geçerek birinci tıklamadan üçüncüye gider.

## Yay Çizimi

1. Terminale `arc` yazın veya araç çubuğundaki **Arc** düğmesine basın.
2. **Birinci noktayı tıklayın** — yayın bir ucu. Ya da kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **İkinci noktayı tıklayın** — yayın geçmesi gereken nokta (eğimi ve yönü kontrol eder). Burada koordinat girişi de çalışır.
4. **Üçüncü noktayı tıklayın** — yayın diğer ucu. Yay yerleştirilir ve komut tamamlanır. Burada koordinat girişi de çalışır.

```
           ● (2. tıklama — eğri üzerindeki orta nokta)
          / \
         /   \
        ●     ●
     1.          3.
```

Üçüncüyü konumlandırırken önizleme çizgisi ilk iki tıklamayı birleştirir. İkinci tıklamadan itibaren canlı yay önizlemesi imleci takip eder.

> **Doğrusal noktalar**: Üç nokta da aynı düz çizgi üzerinde yer alıyorsa yay hesaplanamaz ve hiçbir nesne yerleştirilmez. İkinci noktayı çizgiden dışarı taşıyıp tekrar deneyin.

## Koordinat Girişi

Üç adımın herhangi birinde tıklamak yerine kesin konum girebilirsiniz:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Noktayı yerleştirmek için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı onaylar |
| `Escape` | Tüm yerleştirilen noktaları iptal eder ve çıkar |

## Tutamaç Düzenleme — Uç Noktaları ve Yarıçapı Ayarlama

Seçili yay üç tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|---------|-------|----------|
| **Merkez** | Çevrel dairenin geometrik merkezi | Tüm yayı taşır; yarıçap ve açılar değişmez |
| **Başlangıç** | Yayın birinci uç noktası | Başlangıcı çevrel daire boyunca taşımak için sürükleyin — başlangıç açısını ve yarıçapı değiştirir |
| **Bitiş** | Yayın son uç noktası | Bitişi çevrel daire boyunca taşımak için sürükleyin — bitiş açısını ve yarıçapı değiştirir |

Başlangıç veya bitiş tutamacını sürüklemek onu sürükleme konumuna taşır ve açıyı ve yarıçapı bu yeni konumdan merkeze göre yeniden hesaplar. Karşı uç nokta sabit kalır.

## Yay Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | Tıklama yay eğrisinin (kirişin değil) yakınına denk gelirse seçer |
| **Sağa sürükleme** (katı) | Yay boyunca örneklenen noktaların tamamı çerçevenin içinde olmalıdır |
| **Sola sürükleme** (çapraz) | Çerçeve içindeki herhangi bir yay örnek noktası seçer |

## Desteklenen Düzenleme Komutları

| Komut | Yaya ne olur |
|-------|-------------|
| [Move](./move) | Merkezi taşır; yarıçap ve açılar değişmez |
| [Copy](./copy) | Yeni konumda özdeş yay oluşturur |
| [Rotate](./rotate) | Merkezi döndürür ve başlangıç/bitiş açılarını dönüş miktarı kadar kaydırır |
| [Mirror](./mirror) | Merkezi yansıtır ve başlangıç/bitiş açılarını ayna eksenine göre ters çevirir |
| [Scale](./scale) | Merkez konumunu ölçekler ve yarıçapı ölçek faktörüyle çarpar |
| [Offset](./offset) | Daha büyük veya daha küçük yarıçaplı, aynı açısal kapsamlı eşmerkezli yay oluşturur |
| [Delete](./delete) | Yayı siler |

## Özellikler

**Genel**

| Özellik | Varsayılan | Değer |
|---------|-----------|-------|
| Renk | 256 (ByLayer) | ACI renk indeksi |
| Katman | `0` | Katman ataması |
| Çizgi türü | ByLayer | Adlandırılmış çizgi türü deseni |
| Çizgi türü ölçeği | 1 | Çizgi türü deseni ölçek faktörü |
| Kalınlık | 0 | Ekstrüzyon kalınlığı |

**Geometri**

| Özellik | Değer |
|---------|-------|
| Merkez X / Merkez Y | Çevrel dairenin merkezi |
| Yarıçap | Çevrel dairenin yarıçapı |
| Başlangıç açısı | Yayın başladığı açı derece cinsinden (pozitif X ekseninden ölçülür) |
| Bitiş açısı | Yayın sona erdiği açı derece cinsinden |

## Arc - Circle Karşılaştırması — Ne Zaman Ne Kullanılır

| | Arc | Circle |
|---|-----|--------|
| Kapsam | Kısmi — birinci tıklamadan üçüncüye | Tam 360° |
| Giriş yöntemi | Eğri üzerinde üç nokta | Merkez + yarıçap (tıklama veya giriş) |
| Klavye girişi | Her nokta için X,Y koordinatı | Yarıçap değeri (merkez de X,Y kabul eder) |
| Yerleştirme sonrası yeniden boyutlandırma | Başlangıç/bitiş tutamaçlarını sürükle | Herhangi bir kardinal tutamacı sürükle |
| En iyi | Yuvarlamalar, yuvarlak köşeler, yay yolları | Tam delikler, dairesel özellikler |

## DXF — ARC Nesnesi

Yaylar DXF dosyasında merkez koordinatları, yarıçap, başlangıç ve bitiş açılarını içeren `ARC` nesneleri olarak saklanır. Renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık dahil tüm özellikler kayıpsız round-trip yapar. DXF uyumlu herhangi bir uygulama (LibreCAD, FreeCAD vb.) bunları standart yaylar olarak okur.
