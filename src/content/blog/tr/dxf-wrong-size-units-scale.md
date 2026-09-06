---
title: "DXF'iniz Neden Yanlış Boyutta Açıldı (ve Nasıl Düzeltilir)"
description: "25,4 kat küçük ya da 1000 kat büyük açılan bir DXF bozuk dosya değil, birim uyuşmazlığıdır. Oranı belirleme, yeniden ölçekleme ve düzeltmeyi doğrulama."
keywords: [DXF yanlış ölçek, DXF yanlış boyut, DXF birimleri, DXF mm mi inç mi, DXF çok küçük içe aktarıldı, DXF ölçek katsayısı, DXF 25.4, DXF ölçeğini düzeltme, DXF birim uyuşmazlığı, DXF yeniden ölçekleme]
date: 2026-09-04
author: KulmanLab
tag: Rehber
---

Bir DXF açılıyor ve 40 mm genişliğinde olması gereken parça 1,575 ölçüyor. Ya da bir kat planı bir şehir adası büyüklüğünde geliyor. Dosya bozuk değil, kimse de yanlış bir şey yapmadı — çizim doğru; yolda kaybolan, ona eşlik eden sayıydı.

Herhangi bir şeyi yeniden ölçeklemeden önce bunu anlamakta fayda var: hangi oranla karşı karşıya olduğunuzu bildiğiniz anda düzeltme on saniye sürer, tahmin yürütmek ise yanlış ölçüyü iki kez kesmenin yoludur.

## DXF birimleri neredeyse hiç taşımaz

DXF koordinatları çıplak sayılar olarak saklar. `0,0` noktasından `40,0` noktasına bir çizgi kırk *bir şey* uzunluğundadır. Biçim bir koordinata birim iliştirmez, iliştirecek bir yer de yoktur — sayının kendisi geometridir.

Buna en yakın şey `$INSUNITS` adlı bir başlık değişkenidir: tüm dosya için tek bir kod. `1` inç, `4` milimetre, `6` metre, ve böyle sürer. İki şey onu göründüğünden zayıf kılar. Bütün bir çizim için tek bir değerdir, dolayısıyla karışık kaynaklardan derlenmiş bir dosyayı tarif edemez. Ve bağlayıcı değil, yol göstericidir: birçok uygulama onu yalnızca bir çizimi bir başkasının içine *eklerken* okur, dosyayı düpedüz açtığınızda ise yok sayar — bir çizimi açan kişinin ne çizdiğini genellikle bildiği gibi makul bir gerekçeyle.

Yani "40" sapasağlam yol alır, "milimetre" almaz. Ömrünüz boyunca alacağınız her yanlış boyutlu DXF, işte bu cümledir.

## Önce oranı belirleyin

Gerçek ölçüsünü hakikaten bildiğiniz bir özelliği ölçün: bir delik çapı, bir sac kenarı, standart bir delik aralığı. Olması gereken ölçüyü, ölçülen ölçüye bölün. Sonuç neredeyse her zaman bunlardan biridir:

| Oran | Ne olmuş |
|---|---|
| **25,4** | İnç çizilmiş, milimetre okunuyor |
| **0,03937** | Milimetre çizilmiş, inç okunuyor |
| **1000** | Metre çizilmiş, milimetre okunuyor |
| **0,001** | Milimetre çizilmiş, metre okunuyor |
| **12** | Fit, inç olarak okunuyor |
| **304,8** | Fit, milimetre olarak okunuyor |

Sayınız bu tablodaysa, elinizde yalnızca bir birim uyuşmazlığı vardır ve gerisi bir dakika sürer.

Tabloda yoksa — diyelim 1,37 ya da 3,2 — durun. Bu bir birim sorunu değildir ve yeniden ölçeklemek, yanlışlığı çok daha zor fark edilen bir çizim üretir. Son bölüme geçin.

## Düzeltme

Ölçecek bir şeye ve ölçekleyecek bir şeye ihtiyacınız var. Bunu her CAD aracı yapar; işte hiçbir şey kurmadan bir tarayıcı sekmesinde DXF açan [KulmanLab](https://kulmanlab.com/tr/) ile:

1. Dosyayı açın — sayfaya sürükleyin ya da [Import](/tr/docs/commands/import/) kullanın.
2. [Distance](/tr/docs/commands/distance/) komutunu çalıştırıp bildiğiniz özelliğin iki ucunu seçin. Yakalama burada önemlidir: yakınındaki bir yeri değil, gerçek uç noktaları tutun; yoksa kendi hatanızı katsayının içine pişirirsiniz.
3. Bölün. Bilinen ölçü ÷ ölçülen ölçü. 1,575 gösteren 40 mm'lik bir delik 40 ÷ 1,575 ≈ **25,4** verir.
4. Her şeyi seçin, [Scale](/tr/docs/commands/scale/) komutunu çalıştırın, bir temel nokta seçin ve katsayıyı yazın.

Her şey hareket ederken temel nokta sabit kalır; bu yüzden onu üzerinde akıl yürütebileceğiniz bir yere koyun: parçanın bir köşesine ya da orijine. Birazdan kesime gidecek bir çizimde orijin genellikle makul seçimdir.

KulmanLab'ın kendine ait bir birim ayarının olmaması burada işe yarar. Koordinatlar yalnızca sayıdır — sayılarının ne anlama geldiğini çözerken bir çizimi tam da bu hâlde istersiniz. Arkanızda yürüyen bir dönüşüm yoktur ve savaşacak bir şey de.

## Düzeltmeye güvenmeden önce doğrulayın

Çizimin başka bir yerinde, gerçek ölçüsünü yine bildiğiniz *ikinci* bir özelliği ölçün. Sonra kontrol edin.

İnsanların atladığı adım budur ve kötü durumu yakalayan tek adımdır. İkinci ölçüm artık doğru çıkıyorsa, çizim baştan sona yanlış birimlerdeydi ve şimdi baştan sona doğru birimlerde. Bitti.

İkinci ölçüm *hâlâ* yanlışsa ve farklı bir miktarda yanlışsa, bu hiçbir zaman basit bir birim uyuşmazlığı değildi. Az önce tutarsız bir çizimi ölçeklediniz; bu, başladığınız yerden kötüdür, çünkü hata artık kimsenin fark edebileceği temiz bir oran değildir.

[Area](/tr/docs/commands/area/) burada, özellikle levha malzemede, işe yarar bir ikinci görüştür. Alan katsayının *karesiyle* ölçeklenir; dolayısıyla 25,4'lük bir uzunluk hatası 645'lik bir alan hatası olarak görünür — kendinizi yok saymaya ikna etmesi zor bir sapma.

## Bir dahaki sefere olmasın

Birimler insanlar arasında kaybolur, çözüm de orada yaşar.

**Dosyayı gönderirken birimi söyleyin.** Mesajda tek satır. "Tüm ölçüler mm." Hiçbir maliyeti yok ve sorunun tamamını ortadan kaldırıyor.

**Yanında bir referans ölçü gönderin.** Gerçek bir ölçü verin — "dış plaka 300 mm genişliğinde". Artık alıcı dosyayı varsaymak yerine doğrulayabilir; bir aksilik olduysa da size dönmeden bir dakikada düzeltir.

**Alan taraf sizseniz sorun.** Birimi belirtilmemiş bir dosya geldiyse ve birazdan malzeme keseceksiniz, bir mesaj bir mahvolmuş levhadan ucuzdur.

**Çıktınızın beklediği birimde çizin.** Lazer kesim, CNC ve çoğu üretim akışı milimetre bekler. Dosya oraya gidiyorsa milimetre çizin; yanlış gidecek hiçbir dönüşüm kalmaz. Bkz. [lazer kesim için DXF hazırlama](/tr/blog/prepare-dxf-for-laser-cutting/).

## Birim sorunu olmadığında

Oranınız temiz bir birim dönüşümü değilse, olası nedenler nitelik olarak farklıdır:

- **Çizim ölçekleri karıştırıyor.** Biri bir kısmını 1:1 çizip içine 1:5 bir detay yapıştırmıştır ya da bir blok ölçek katsayısıyla eklenip hiç düzeltilmemiştir. Bütün dosyayı değil, kusurlu geometriyi onarın.
- **Kâğıt alanı geometrisini ölçtünüz.** Antet ya da açıklama çerçevesi model ölçüsünde değil, sayfa ölçüsünde çizilir. Gerçek nesnenin parçası olan bir şeyi ölçün.
- **Yanlış şeyi ölçtünüz.** Anma değeri 40 mm olan bir delik geçme payı için 39,8 çizilmiş olabilir; "300 mm" bir panel de göremediğiniz bir kanalın dışına kadar 300 olabilir. Kenarı tartışmasız bir özellik seçin.

Bunların hepsinde yanıt, çizimi ölçeklemek değil, gerçekte ne olduğunu öğrenmektir. Parçaları birbiriyle çelişen bir çizim, biri açıp bakana kadar size malzeme olarak ödetmeye devam eder.

---

*İlgili: ölçmek için [Distance](/tr/docs/commands/distance/), düzeltmek için [Scale](/tr/docs/commands/scale/), ikinci görüş için [Area](/tr/docs/commands/area/) ve dosyayı geri gönderirken her biçimin neyi taşıdığı için [Export Manager](/tr/docs/commands/export-manager/).*
