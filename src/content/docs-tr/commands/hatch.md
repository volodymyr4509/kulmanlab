---
title: Hatch Komutu — Bir Alanı Desenle Doldurun
description: Hatch komutu, tıklanan bir noktayı çevreleyen bölgeyi bir desenle doldurur — kapanan çizgilerin, yayların, elipslerin ve spline'ların herhangi bir kombinasyonu bir bölgeyi çevreler ve içindeki kapalı herhangi bir şekil doldurulmamış bir ada olarak kalır.
keywords: [CAD hatch komutu, alan doldurma CAD, hatch deseni CAD, ANSI31, SOLID doldurma, sınır doldurma CAD, DXF HATCH nesnesi, kulmanlab]
group: shapes
order: 7
---

# Hatch

`Tarama` komutu, tıklanan bir noktayı çevreleyen bölgeyi bir desenle doldurur. Sınır önce çizilmez — zaten tuval üzerinde olandan gelir, bu yüzden uç uca birleşen dört ayrı [Line](../line/) bir bölgeyi tıpkı kapalı bir [Polyline](../polyline/) gibi çevreler ve içindeki kapalı herhangi bir şekil, doldurmanın dokunmadan bıraktığı bir ada haline gelir.

## Bir Alanı Doldurma

1. Terminale `Tarama` yazın veya araç çubuğundaki **Hatch** düğmesine (örnek simgesi) tıklayın.
2. Doldurmak istediğiniz bölgenin içinde **bir noktaya tıklayın**.
3. Komut etkin kalır, bu yüzden daha fazla alanı doldurmak için tıklamaya devam edin — her tıklama kendi `Hatch` nesnesini oluşturur.
4. İşiniz bittiğinde **Enter**, **Boşluk** veya **Escape** tuşuna basın.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   dış sınırın içine
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   tıklayın; daire bir
  └─────────────┘        └─────────────┘   ada olarak kalır
```

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Enter` / `Space` | Hatch komutunu bitir |
| `Escape` | Hatch komutunu bitir (Enter/Boşluk ile aynı) |

## Sınırı Ne Oluşturabilir

Aşağıdaki nesne türlerinin herhangi bir kombinasyonu, boşluk olmadan uç uca bağlandıkları sürece herhangi bir kombinasyonda sınır oluşturabilir:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (kendi kapalı sınırı)
- [Ellipse](../ellipse/) (kapalı veya daha büyük bir döngünün parçası olarak açık bir eliptik yay)
- [Polyline](../polyline/) (açık veya kapalı) ve [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Text, Multileader ve Dimension nesneleri asla sınır olarak kabul edilmez.

## Adalar

Tıkladığınız bölgenin içinde tamamen kapalı olan her şey — bir daire, kapalı bir polyline, başka bir hatch'in sınırı — bir **ada** haline gelir: dolgu kenarında durur ve adanın kendisi boş kalır. Kapalı bir şekli başka bir kapalı şeklin içine yerleştirin ve dolgu, her seviyede aynı iç/dış kuralını izleyerek, bir doldurmanın içindeki delikte delik olacak şekilde değişir.

## Bir Tıklama Başarısız Olduğunda

Tıkladığınız nokta çevrelenmemişse veya sınırda bir boşluk varsa, terminal sessizce hiçbir şey yapmak yerine nedenini açıklar:

| Mesaj | Anlamı |
|-------|--------|
| "no boundary found" | Tıklanan noktadan hiçbir yönde herhangi bir şeye rastlanmadı — yakınlarda hiç sınır yok |
| "point is not enclosed" | Yakınlarda bir sınır var, ancak oluşturduğu şekil tıkladığınız noktayı içermiyor |
| "boundary is open" | En yakın sınırda bir yerde bir boşluk var — izleyin ve her bağlantının tam olduğunu kontrol edin |
| "boundary too complex" | Sınır döngüsü geçiş sınırı içinde kapatılamadı — genellikle örtüşen nesnelerin bir karmaşası |

Komut, başarısız bir tıklamadan sonra etkin kalır — mesajı okuyun, çizimi düzeltin veya başka bir yere tıklayın ve tekrar deneyin.

## Bir Desen Seçme

Her yeni hatch, `ANSI31` ile dolu olarak başlar (veya *son* düzenlediğiniz hatch'in kullandığı desenle) — çizmeden önce bir desen seçici yoktur. Farklı bir desen kullanmak için:

1. Mevcut bir hatch seçin ve özellikler panelinde **Pattern** alanını açın — bu, her desenin nereden geldiğine göre gruplandırılmış adlı örneklerden oluşan bir ızgara olan desen seçiciyi açar.
2. Uygulamak için bir desene tıklayın — dolgu anında güncellenir.

Bu seçim aynı zamanda `Tarama` komutuyla oluşturduğunuz *bir sonraki* hatch için de varsayılan haline gelir, tıpkı bir katman veya rengin seçilmesinin ileriye taşınması gibi. Bu yüzden belirli bir desenle birkaç yeni alanı hatch'lemek için: bir alanı doldurun, desenini bir kez ayarlayın, ardından hatch'lemeye devam edin — bundan sonraki her dolgu, o desen zaten uygulanmış olarak başlar.

Kendi `.pat` desen dosyalarınızı yüklemek ve tüm kitaplığa göz atmak için [Hatch Manager](../hatch-manager/)'a bakın.

**SOLID**, desen listesinde ayrı bir onay kutusu veya mod değil, sıradan bir girdidir — onu ANSI31'i veya başka herhangi bir adlı deseni seçeceğiniz şekilde seçin.

## Özellikler

| Özellik | Anlamı |
|---------|--------|
| Pattern | Paylaşılan desen kelime dağarcığından desenin adı ([Hatch Manager](../hatch-manager/)'a bakın) |
| Pattern Scale | Desen çizgilerinin aralığını ölçeklendirir — daha büyük değerler desen çizgilerini birbirinden daha uzağa yayar |
| Pattern Angle | Deseni sınırdan bağımsız olarak döndürür |
| Origin X / Origin Y | Desenin kendi tekrarının çizim koordinatlarında nereye sabitlendiği |

Bir hatch'i taşımak, döndürmek, aynalamak veya ölçeklendirmek, desen yerleşimini de beraberinde taşır, bu yüzden dolgu sınırla hizalı kalır — bir dönüşümden sonra ölçeği veya açıyı yeniden ayarlamanıza gerek yoktur.

## Sınırın Tutamaç Düzenlemesi

Seçili bir hatch, sınırını tıpkı bir Polyline'ın köşe noktalarını tuttuğu gibi tutar — iki kenarın buluştuğu her köşede bir tutamaç ve her kenarın ortasında bir tane (bir daire veya elips hatch'i gibi kapalı bir döngü, bunun yerine dört eksen noktasından tutar).

| Tutamaç | Ne Yapar |
|---------|----------|
| **Köşe** | O köşeyi taşır. Düz bir kenar tam olarak takip eder; bir yay, her iki komşusundan geçmeye devam etmek için yeniden uyum sağlar; bir elips veya spline kenarı yalnızca kendi eğrisi üzerinde bir yere inebilir, bu yüzden köşe üzerindeki en yakın noktaya yapışır |
| **Kenar ortası — çizgi, elips veya spline kenarı** | Kenarın tamamını kaydırır; her iki taraftaki kenarlar ona bağlı kalmak için kesilir veya uzatılır |
| **Kenar ortası — yay kenarı** | Kaydırmak yerine yayı imleç üzerinden **büker** — her iki uç da tam olarak oldukları yerde kalır ve sınırda başka hiçbir şey hareket etmez |
| **Merkez** (tüm hatch) | Tüm hatch için [Move](../move/)'u etkinleştirir |

Bir sürükleme önizlemesi, siz sürüklerken sınırı katı bir dolgu yerine kesikli bir çizgi olarak gösterir — bırakana kadar orijinal dolgu altta görünür kalır, çünkü bir önizleme yalnızca zaten var olanın üzerine boyayabilir, asla ondan hiçbir şeyi kaldıramaz.

## DXF — HATCH Nesnesi

Hatch'ler `HATCH` nesnelerinden **içe aktarılır**: KulmanLab, sınır geometrisini desenin adı, ölçeği ve açısıyla birlikte okur (DXF grup kodları 70/41/52) — dosyaya satır içi olarak yazılan desenin kendi çizgi tanımlarını **okumaz**. Bunun yerine, desen adı KulmanLab'ın kendi desen kitaplığında aranır (yerleşik varsayılanlar artı [Hatch Manager](../hatch-manager/)'a yüklediğiniz her şey). Kitaplığınızda olmayan bir ad, çizimin hâlâ hatch'lenmiş olarak okunması için ANSI31'e geri döner ve bir not bir kez günlüğe kaydedilir.

Diğer uygulamalar tarafından yazılan spline sınırlı döngüler (DXF sınır kenar türü 4) henüz okunmuyor.

Taramalar DXF'e `HATCH` varlıkları olarak **aktarılır**. Sınır döngüleri, desen adı (grup kodu 2), dolu doldurma bayrağı (70) ve o taramanın kendi açısı ile ölçeği (52/41) ile birlikte dışarı çıkar — ve içe aktarma yolundan farklı olarak, desenin çözümlenmiş çizgi tanımları da dosyaya yazılır (78, 53/43/44/45/46/79/49 ile). Bu asimetri bilinçlidir: KulmanLab bir adı kendi kütüphanesinde çözebilir, ancak dosyayı alan uygulamada o desen bulunmayabilir, bu yüzden çizgiler onunla birlikte yolculuk eder.

## İlgili Komutlar

- [Hatch Manager](../hatch-manager/) — desen kitaplığına göz atın ve `.pat` dosyaları yükleyin
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — hepsi hatch'in desen yerleşimini beraberinde taşır
- [Delete](../delete/) — sınırını oluşturan nesneleri etkilemeden hatch'i siler
