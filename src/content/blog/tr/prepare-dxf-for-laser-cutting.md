---
title: "Lazer kesim için DXF dosyası nasıl hazırlanır"
description: "Kesim firmaları DXF dosyalarını neden geri çevirir ve sizinkini nasıl düzeltirsiniz — kapalı konturlar, birimler, kerf ve katmanlar. Tarayıcıda ücretsiz."
keywords: [lazer kesim için DXF, DXF lazer hazırlama, lazer kesim dosya formatı, DXF reddedildi lazer, kapalı kontur DXF, kerf lazer kesim, lazer dosya hazırlığı, DXF birimleri lazer, kesme kazıma katman, ücretsiz DXF editörü]
date: 2026-09-02
author: KulmanLab
tag: Rehber
---

Lazer kesim için bir DXF'in dört şeye ihtiyacı vardır: kapalı konturlar, doğru birimler, yalnızca kesim geometrisi — ölçü, not veya tarama olmadan — ve kesme, çizme ve kazımayı ayıran katmanlar. Bu rehber her birini ele alıyor ve bir firma dosyanızı geri çevirmeden önce nasıl kontrol edeceğinizi gösteriyor.

Bunların tamamını [app.kulmanlab.com](https://app.kulmanlab.com) adresinde tarayıcıda ücretsiz yapabilirsiniz: kurulacak bir şey yok, hesap yok ve dosya bilgisayarınızdan hiç çıkmıyor. KulmanLab'i başlangıçta tam da bu iş akışı için geliştirdik, bu yüzden diğer CAD işlerinde geçerli olan kısıtlar burada büyük ölçüde geçerli değil: lazer kesim iki boyutludur ve kesim firmalarının istediği şey DXF'tir.

## Dosyalar neden geri çevrilir

Beş neden neredeyse tamamını açıklıyor.

**Açık konturlar.** Kapalı görünen ama bir köşesinde kıl kadar boşluk olan bir şekil bir bölge değil, birbirine bağlanmamış çizgiler yığınıdır. Kesim makineleri neyin içeride neyin dışarıda olduğunu bilmek zorundadır ve açık bir konturun içerisi yoktur. Açık ara en yaygın ret sebebi budur.

**Yanlış veya belirsiz birimler.** DXF, sayılarının ne anlama geldiğini güvenilir biçimde kaydetmez. Aynı dosya milimetre, santimetre, inç veya fit cinsinden olabilir ve çoğu zaman hangisi olduğunu söylemez. 25,4 kat büyük ya da küçük gelen bir parçanın sebebi budur.

**Geometri dışındaki her şey.** Ölçüler, antetler, notlar, taramalar, yardımcı çizgiler. Makine, yazılarınızı da seve seve kesmeye kalkar.

**Çift çizgiler.** Üst üste binmiş iki özdeş çizgi, lazerin aynı yolu iki kez gitmesi demektir: boşa giden süre, yanmış kenarlar ve ince malzemede yangın riski.

**Her şeyin tek katmanda olması.** Kesme, çizme ve kazıma ayrılmamışsa firma bunları ayırt edemez ve dosyayı yeniden göndermenizi ister.

## Dosyayı hazırlamak

`.dxf` dosyanızı [app.kulmanlab.com](https://app.kulmanlab.com) üzerindeki tuvale sürükleyin ya da Dosya panelindeki **Import** düğmesini kullanın. Çizim yüklenir ve görünüm ona göre ayarlanır.

**1. Elinizde gerçekte ne olduğuna bakın.** `fit` yazarak her şeyi görünüme getirin. Ardından her parçanın her köşesini yakınlaştırın — boşluklar tam çizim ölçeğinde görünmez, 10 kat yakınlaştırmada apaçıktır. Sizi ret e-postasından kurtaran kontrol budur.

**2. Kesilmemesi gerekeni silin.** Yardımcı çizgiler, notlar, çerçeveler, ölçüler. `layer-isolate` katmanları teker teker gösterir; gerçek geometrinin altına saklanmış kalıntılar böyle bulunur.

**3. Boşlukları kapatın.** `trim`, iki çizginin birbirini aşarak kesiştiği yerde taşan uçları kısaltır. Çizgilerin kısa kaldığı yerde uç tutamağını komşusuna sürükleyin — tutamaklar yapışır, böylece uçlar neredeyse değil, gerçekten birleşir.

**4. Ölçüleri kontrol edin.** `distance` iki nokta arasını ölçer, `area` tıklanan noktalardan oluşan kapalı bir bölgeyi ölçer. Gerçek ölçüsünü bildiğiniz bir detayı ölçün. Sonuç 25,4 kat sapıyorsa dosyanız yanlış birim sisteminde demektir.

**5. Kesme, çizme ve kazımayı ayırın.** Her işlemi apaçık adlandırılmış kendi katmanına koyun: `CUT`, `SCORE`, `ENGRAVE`. Firmaların çoğu ya bunu ister ya da ayrı dosyalar. `layer-manager` bunları oluşturur ve atar.

Sonra dışa aktarın: **Export** → **DXF**. KulmanLab sade AC1032 DXF yazar; kesim firmalarının ve makine yazılımlarının beklediği tam olarak budur.

## Kerf

Lazer keserken malzeme kaldırır — makineye, malzemeye ve kalınlığa göre kabaca 0,1–0,3 mm. 50 mm'lik bir kare kesin, biraz eksik ölçüde bir kare elde edersiniz ve içine sıkı geçmesi gereken parça oturmaz.

Bunu ele almanın iki yolu var:

**Firmaya bırakın.** Kesim firmalarının çoğu kerf telafisini kendisi uygular; öyleyse sizin de telafi etmeniz parçaları ters yönde hatalı yapar. Bir şeyi değiştirmeden önce sorun.

**Kendiniz yapın.** `offset` bir şeklin sabit mesafede paralel kopyasını üretir — kerf genişliğinin yarısı, ölçüsünü koruması gereken parçalarda dışa, deliklerde içe doğru. Çizgi, daire, yay, elips ve çoklu çizgilerde çalışır. Tek seferde tek nesneye uygulanır, dolayısıyla bir avuç kritik detay için pratiktir, iki yüz parçalık bir levha için değil.

Tolerans önemliyse malzemeyi bağlamadan önce bir deneme parçası kesin.

## DXF dışa aktarımından sağ çıkmayanlar

Buna güvenmeden önce bilmekte fayda var:

- **Metin DXF'e aktarılmaz.** Kazınmış yazı planlıyorsanız dosyada olmayacak. Yazıyı başka bir programda konturlara dönüştürün ya da kazıma katmanı için SVG kabul eden bir firma kullanın.
- **Taramalar ve ölçüler de aktarılmaz.** Bir kesim dosyası için istenen tam olarak budur — ama taranmış bir bölgenin kazınmış dolgu olacağını varsaymayın, çünkü dosyada hiç bulunmayacak.
- **Blok referansları içe aktarılmaz.** Tekrar eden blok sembollerinden kurulmuş bir çizim eksik gelir; parça sayısını orijinaliyle karşılaştırın.

Spline'lar *aktarılır*. Bazı makine yazılımları bunları iyi işlemez ve çoklu çizgileri tercih eder — sizinki öyleyse eğrileri çoklu çizgi ya da yay olarak yeniden çizin.

## Otomasyon konusunda bir uyarı

KulmanLab'de **ön kontrol yoktur**. Hiçbir şey açık kontur, çift çizgi veya birim sorunu arayıp size bildirmez. Yukarıdaki kontroller elle yapılır: yakınlaştır, ölç, bak.

Bu, birkaç parça için sorun değil, tamamen yerleştirilmiş bir levha için ise yorucudur. Düzenli olarak levha üretiyorsanız otomatik doğrulayıcısı olan bir araç size daha iyi hizmet eder — tek tük parçalar içinse, ki çoğu insanın çoğu zaman yaptığı budur, dosyaya dikkatle bakmak aynı sorunları yakalar.

## Göndermeden önce

- Her kesim konturu kapalı — köşeler yüksek yakınlaştırmada kontrol edildi
- Bilinen bir ölçü ölçüldü ve doğru
- Geriye ölçü, not, çerçeve veya yardımcı geometri kalmadı
- Üst üste binmiş çift çizgi yok
- Kesme, çizme ve kazıma ayrı ve açıkça adlandırılmış katmanlarda
- Kerf: ya uygulandı ya da bilinçli olarak firmaya bırakıldı
- DXF olarak aktarıldı ve doğru göründüğünü teyit etmek için bir kez yeniden açıldı

Bu son madde on saniye sürer ve dışa aktarım sürprizlerini firmadan önce yakalar.

---

*İlgili: KulmanLab'in bir DXF'ten neleri okuduğu için [Import](/tr/docs/commands/import/), her biçimin tam olarak neyi taşıdığı için [Export Manager](/tr/docs/commands/export-manager/), kerf telafisi için [Offset](/tr/docs/commands/offset/) ve kesim ile kazıma katmanlarını kurmak için [LayerManager](/tr/docs/commands/layer-manager/).*
