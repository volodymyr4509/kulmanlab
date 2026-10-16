---
title: "CAD'de Altıgen veya Cıvata Dairesi Nasıl Çizilir (Polygon ve Polar Dizi)"
description: "Merkezden ve yarıçaptan ya da tek bir kenardan düzgün çokgen çizin, ardından delikleri polar diziyle bir cıvata dairesi üzerinde tekrarlayın — tarayıcınızda ücretsiz, tam olarak yazdığınız değerlerle."
keywords: [CAD'de altıgen çizme, düzgün çokgen CAD, polar dizi CAD, cıvata dairesi çizimi, delik deseni CAD, dairesel desen CAD, altıgen somun çizimi, CAD'de sekizgen çizme, hatve dairesi çapı PCD, ücretsiz çokgen aracı CAD]
date: 2026-10-11
author: KulmanLab
tag: Rehber
---

CAD'de düzgün bir çokgen çizmek için kenar sayısını verin, merkezi seçin, ardından bir yarıçap girin — ya da bir kenar seçin, gerisi kendiliğinden gelsin. Cıvata dairesi çizmek için bir delik çizin ve polar diziyle merkez etrafında tekrarlayın. Bu rehber ikisini de kesin sayılarla, tarayıcıda [app.kulmanlab.com](https://app.kulmanlab.com) adresinde yapar — ücretsiz, kurulumsuz ve dosya bilgisayarınızdan asla çıkmaz.

[KulmanLab](https://kulmanlab.com)'ı biz geliştiriyoruz, bu yüzden aşağıdaki adımlar onun komutlarını kullanır. Fikirler — alın ölçüsüne karşı köşe ölçüsü, hatve dairesi çapı, kopyaların dönerken dönüp dönmediği — her CAD programında aynıdır.

## Düzgün çokgen çizme

Düzgün çokgenin kenarları ve açıları eşittir: somun için altıgen, tabela için sekizgen, süs kesimi için beşgen. KulmanLab'da bu **Polygon** komutudur.

1. Terminale `Çokgen` yazın ya da Shapes panelindeki Polygon düğmesini kullanın.
2. **Kenar sayısını** girin — 3 ile 1024 arasında herhangi bir tam sayı — ve **Enter**'a basın. İstem, en son kullandığınız sayıyla önceden doldurulur.
3. **Merkeze tıklayın** ya da kesin bir nokta için `X,Y` yazın.
4. **Yarıçapa tıklayın** ya da yazıp **Enter**'a basın.

Sonuç tek bir kapalı polilayndır; bir polilayn ile yapabildiğiniz her şey — taşıma, döndürme, ofset, ölçekleme — çalışır.

### Alın ölçüsü mü, köşe ölçüsü mü?

İnsanlar burada takılır. "Yarıçap" iki farklı uzaklık anlamına gelebilir ve altıgen, ne çizdiğinize göre birine ya da diğerine göre belirtilir:

| | Ölçülen yer | Tipik kullanım |
|---|---|---|
| **Inside açık** (varsayılan) | Köşeler | Verilen bir çemberin içine sığması gereken şekil |
| **Inside kapalı** | Her kenarın ortası | Belirli bir alın ölçüsü olan şekil — somunlar, cıvata başları, anahtar ölçüleri |

Geçiş için yarıçap isteminde `I` tuşuna basın. Altıgen somun alın ölçüsüyle satılır; bu yüzden **Inside kapalı** kullanın ve onun *yarısını* yazın. Alın ölçüsü 13 mm olan bir M8 somun için:

1. `Çokgen`, sonra kenarlar için `6`, sonra merkezi tıklayın ya da yazın.
2. Inside'ı kapatmak için `I` tuşuna basın.
3. `6.5` yazın ve **Enter**'a basın.

Yüzeyler tam olarak 13 mm arayla durur; köşeler merkezden 7,51 mm uzaklığa ulaşır, yani köşeler arası yaklaşık 15 mm. Tıklamak yerine yarıçapı yazarsanız çokgen en alt kenarı yatay, düz olarak durur. Tıklarsanız yönelimini tıkladığınız yerden alır.

### Tek bir kenardan

Bazen yarıçapı değil, kenar uzunluğunu bilirsiniz — örneğin kenarları 20 mm olan sekizgen bir masa tablası. İlk nokta isteminde `E` tuşuna basarak **Edge** moduna geçin ve bir kenarın iki ucunu seçin. Kalan köşeler saat yönünün tersine, o kenarın solunda oluşturulur. `0,0` ve ardından `20,0` yazmak, X ekseni boyunca 20 mm'lik bir kenar koyar; çokgen onun üstündedir.

## Cıvata dairesi çizme

Cıvata dairesi — çizimlerde "PCD" — bir merkez etrafında eşit aralıklı deliklerden oluşan halkadır. Bir delik çizer ve tekrarlarsınız. KulmanLab'da bu **ArrayPolar**'dır.

Başlangıç noktasında ortalanmış, 50 mm hatve dairesi çapında altı adet 6,6 mm delik alalım:

1. **İlk deliği çizin.** `Daire` komutunu çalıştırın, merkezi `25` `,` `0` olarak yazın — X ekseni boyunca PCD'nin yarısı —, **Enter**'a basın, ardından yarıçap olarak `3.3` yazıp **Enter**'a basın.
2. **Daireye tıklayarak seçin.**
3. **Polar diziyi çalıştırın.** `KutupsalDizi` yazın ya da Edit panelindeki ArrayPolar düğmesini kullanın.
4. **Desenin merkezini seçin** — `0,0` yazın.
5. Terminal diziyi olduğu gibi gösterir — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — ve beş kopya canlı önizlenir. Kabul etmek için **Enter**'a basın.

Cıvata dairesinin tamamı bu. Farklı bir sayı için onaylamadan önce `I` tuşuna basıp öğe sayısını yazın — orijinal bir sayılır ve aralarındaki açı sizin için hesaplanır. Ya da `A` tuşuna basıp bunun yerine derece cinsinden aralığı yazın; dolgu açısı buna uyacak şekilde yeniden ifade edilir.

Önemli birkaç ayrıntı:

- **Fill**, ilk öğeden sonuncuya olan açıdır. Varsayılan 360° öğeleri tüm daireye yayar; daha küçük bir sayı onları bir yaya yayar — örneğin çeyrek turluk bir delik sırası. Negatif açı saat yönünde ilerler.
- **Rotate**, her kopyanın dönerken dönüp dönmeyeceğine karar verir. Yuvarlak delikler için fark etmez. Bir yuva, diş ya da braket için eder: açık — her kopya orijinal gibi merkeze bakar; kapalı — her kopya orijinalin yönelimini korur ve yalnızca yerine taşınır. Onaylamadan önce değiştirmek için `R` tuşuna basın.
- Dizi **kopyalar** oluşturur — orijinal olduğu yerde kalır ve her öğe sonradan düzenleyebileceğiniz sıradan bir varlıktır.

## Hepsini birleştirin: bir flanş

Dış hat için altıgen, orta delik için ortada bir daire ve montaj delikleri için bir cıvata dairesi çizin. Üç komut, her ölçü tam olarak yazılmış ve ekrandan ölçülecek hiçbir şey yok.

Parça lazer kesiciye gidecekse, hatve dairesini bulmak için çizdiğiniz yardımcı daireyi silin — diğer her şey gibi o da kesilirdi — ve dosyayı [lazer kesim için DXF hazırlama](/tr/blog/prepare-dxf-for-laser-cutting/) rehberimizle kontrol edin. Çokgen, yapısı gereği kapalı bir yoldur; kesim hizmetlerinin dosyaları reddetmesinin en yaygın nedeni budur.

## Bunun yapmadıkları

- **Yalnızca düzgün çokgenler.** Tüm kenarlar eşittir. Düzensiz bir dış hat — bazı kenarları daha uzun bir şekil — nokta nokta çizdiğiniz bir [polilayn](/tr/docs/commands/polyline/)dır.
- **Yalnızca 2D.** Düz dış hatlar çizer. Modellenmiş bir somun ya da dişli cıvata vermez.
- **Yalnızca masaüstü tarayıcılar** — Chrome, Firefox, Safari ve Edge. Mobil sürüm yoktur.

---

*İlgili: tüm seçenekler ve tuşlar için [Polygon](/tr/docs/commands/polygon/) ve [ArrayPolar](/tr/docs/commands/array-polar/), kesin yarıçaplar yazmak için [Circle](/tr/docs/commands/circle/) ve nesneleri bir merkez etrafında değil satır ve sütunlarda tekrarlamak için [ArrayGrid](/tr/docs/commands/array-grid/).*
