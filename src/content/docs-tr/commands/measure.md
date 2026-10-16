---
title: "Measure Komutu — imlecin çevresindeki mesafeleri, uzunlukları, açıları ve alanları okuyun"
description: "Measure komutu, imleci hareket ettirirken çevresindeki çizimi okur — en yakın geometriye mesafe, karşılaştığı şeyin uzunluğu veya yarıçapı, çizgilerin buluştuğu açı — ve tıklamayla kapalı bir bölgenin alanını ve çevresini verir. Çizimde hiçbir şey değişmez."
keywords: ["CAD ölçüm komutu", "alan ve çevre ölçme CAD", "canlı mesafe ölçümü CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

`measure` komutu, nokta seçmeden imleci hareket ettirirken çevresindeki çizimi okur: en yakın geometriye ne kadar uzak olduğu, o geometrinin ne kadar uzun veya yuvarlak olduğu ve çizgilerin buluştuğu açı. Kapalı bir bölgenin içine tıklamak alanını ve çevresini verir. Çizimde hiçbir şey değişmez.

## Ölçme

1. Terminale `measure` yazın veya Measure panelindeki ilk düğme olan **Measure**'a tıklayın.
2. **İmleci hareket ettirin.** Komut buradan sağa, yukarı, sola ve aşağı en yakın geometriye bakar ve bulduğunu gösterir.
3. **Kapalı bir bölgenin içine tıklayın**; bölge dolar ve alanı ile çevresi okunur — aşağıya bakın.
4. Bitirmek için **Enter**, **Space** veya **Escape** tuşuna basın.

## Neyi gösterir

- **Karşıdan karşıya mesafe** — imlecin bir tarafta karşılaştığı şeyden diğer tarafta karşılaştığı şeye, yatay ve dikey olarak. Yalnızca bir tarafta bir şey varsa mesafe imleçten başlar. Bir şeyle buluşan her ucun küçük dolu bir noktası vardır; imleçteki uçta yoktur.
- **Uzunluk veya yarıçap** — komutun eriştiği her nesne uzunluğuyla, bir dairenin parçasıysa yarıçapıyla vurgulanır.
- **Açı** — erişilen iki doğrunun buluştuğu yerde aralarındaki açı yazılır; dik açı küçük bir kareyle işaretlenir.

Uzunluklar ve açılar, geçerli [DimensionStyle](../dimension-style/)'ın yazdığı gibi, onun birim biçimi ve hassasiyetiyle yazılır.

## Alan ve çevre

Kapalı bir bölgenin içine tıklamak onu doldurur ve alanıyla çevresini isteme ve geçmişe yazar. Bölge, [Hatch](../hatch/)'in bulduğu gibi bulunur: uç uca buluşan ayrı çizgiler tıpkı bir polyline gibi bölgeyi kapatır ve içindeki kapalı her şey ada olarak dışarıda bırakılır — kenarı çevreye sayılır, alanı çıkarılır.

Alan, kare çizim birimlerinde sade bir sayıdır — fit ve inç alanı yazamaz — çevre ise birim biçimini izler. Başka bir bölgeyi ölçmek için içine tıklayın. Noktayı kapalı bir şey çevrelemiyorsa terminal nedenini Hatch ile aynı mesajlarla söyler: no boundary found, point is not enclosed veya boundary is open.

## Bilmekte fayda var

- Çizgilere, yaylara, dairelere, elipslere, polyline'lara ve spline'lara göre ölçer; uzunluklar ve alanlar, elips ve spline'lar için de dahil, kesindir.
- Dondurulmuş katmanlardaki nesneler yok sayılır; kilitli katmanlardaki nesneler ölçülür.
- Büyük bir çizimde yalnızca imlecin yakınındakilere bakar, bu yüzden hızlı kalır.

---

*İlgili: seçtiğiniz noktalar arasındaki ölçümler için [Distance](../distance/), [Angle](../angle/) ve [Area](../area/), kapalı bölgelerin nasıl bulunduğu için [Hatch](../hatch/).*
