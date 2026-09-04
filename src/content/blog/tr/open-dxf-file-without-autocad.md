---
title: "AutoCAD olmadan DXF dosyası nasıl açılır"
description: "Size bir .dxf dosyası geldi ama AutoCAD'iniz yok mu? Kurulum yapmadan tarayıcınızda ücretsiz açın — masaüstü alternatifleri ve boş çizim sorunlarının çözümleriyle."
keywords: [DXF dosyası açma, AutoCAD olmadan DXF açma, ücretsiz DXF görüntüleyici, DXF online görüntüleme, tarayıcıda DXF açma, bedava DXF viewer, DXF nasıl açılır, DXF dosyası okuma, DXF mi DWG mi, Mac DXF açma]
date: 2026-08-31
author: KulmanLab
tag: Rehber
---

AutoCAD olmadan bir DXF dosyasını açmak için onu tarayıcıda çalışan bir CAD düzenleyicisine sürükleyin — kurulacak bir şey ve açılacak bir hesap yok. LibreCAD ve QCAD gibi ücretsiz masaüstü programları da DXF açar. Bu rehber her iki yolu da ele alıyor ve çizim boş, minicik ya da yazısız açıldığında ne yapılacağını anlatıyor.

Aşağıdaki araçlardan birini biz geliştiriyoruz — [KulmanLab](https://kulmanlab.com/tr/) — dolayısıyla o bölümü taraflı olan kısım, orada sıralanan kısıtlamaları da dürüst olmak zorunda kaldığımız kısım olarak görün.

## DXF dosyası aslında nedir

DXF, *Drawing Exchange Format* (çizim değişim biçimi) anlamına gelir. Autodesk bunu CAD programlarının birbirine çizim aktarabilmesi için oluşturdu ve biçim bilinçli olarak açık ve metin tabanlıdır — bir `.dxf` dosyasını gerçekten bir metin düzenleyicide açıp okuyabilirsiniz.

Seçenekleriniz olmasının nedeni bu açıklıktır. DXF tek bir programa bağlı değildir ve onlarca araç onu okuyabilir.

Aynı nedenle DXF bir resim değildir. İçinde geometri saklanır — çizgiler, yaylar, daireler, katmanlar, ölçüler — pikseller değil. Adını `.jpg` yapmak onu bir resim görüntüleyicide açtırmaz.

## Seçenek 1: tarayıcıda açın

En hızlı yol, çünkü indirilecek bir şey ve kayıt gerektiren bir adım yok.

1. [app.kulmanlab.com](https://app.kulmanlab.com) adresine gidin.
2. `.dxf` dosyanızı doğrudan tuvale sürükleyin — ya da Dosya panelindeki **Import** düğmesini (klasör simgesi) kullanın.
3. Çizim yüklenir ve görünüm ona otomatik olarak sığdırılır.

Dosyanız bilgisayarınızdan hiç çıkmaz. KulmanLab tamamen tarayıcıda çalışır, yani çizim bir sunucuya yüklenmek yerine yerel olarak işlenir.

Oradan kaydırma ve yakınlaştırma yapabilir, katmanları açıp kapatabilir, mesafe ve açı ölçebilir, geometriyi düzenleyebilir ve iletmek üzere yazdırılabilir bir şey isterseniz PDF, PNG, JPEG veya WebP olarak dışa aktarabilirsiniz.

**Bir DXF'ten okuduğu şeyler:** çizgiler, daireler, yaylar, elipsler, çoklu çizgiler, spline'lar, metin, ölçüler, çoklu kılavuz çizgileri ve taramalar; ayrıca dosyanın katman ve çizgi tipi tabloları.

**Geri yazdığı şey:** aynı liste. Bir çizimi düzenleyip dışa aktarın; geometri, biçimlendirmesiyle birlikte metin, ölçüler, kılavuz çizgileri ve taramalar hepsi DXF'e geri döner, katman ve çizgi tipi tabloları da bozulmadan kalır — yani dosya, açıklamalarını yitirmeden gidiş dönüşü tamamlar.

**Nerede yetersiz kaldığı — güvenmeden önce okuyun:**

- **Yalnızca 2B.** 3B katı cisimler veya kafesler içeren bir DXF, bu araç için yanlış dosyadır.
- **Blok yok.** Blok referansları (`INSERT`) işlenmez; tekrar eden blok sembollerinden kurulmuş bir çizim eksik gelir.
- **DXF, DWG değil.** Aşağıdaki DWG bölümüne bakın.
- **Yalnızca masaüstü tarayıcılar** — Chrome, Firefox, Safari ve Edge. Mobil sürüm yok.

Bunlardan biri sizin için belirleyiciyse, aşağıdaki masaüstü araçlarından biri işinizi daha iyi görecektir.

## Seçenek 2: ücretsiz masaüstü programları

Bunu düzenli olarak yapacaksanız ya da dosyanız bir tarayıcı aracının başa çıkamayacağı özellikler kullanıyorsa kurulum zahmete değer.

**LibreCAD** — ücretsiz ve açık kaynaklı, yalnızca 2B, Windows, macOS ve Linux'ta çalışır. Klasik 2B teknik çizime en yakın olanı ve sağlam bir DXF düzenleyicisi.

**QCAD** — LibreCAD'in doğduğu motor. Ücretsiz bir topluluk sürümü ve ek özellikler içeren ücretli bir Pro sürümü var.

**FreeCAD** — ücretsiz ve açık kaynaklı, 3B parametrik modellemeye yönelik ama DXF içe aktarabiliyor. Yalnızca bir 2B çizime bakmak istiyorsanız fazlasıyla ağır ve öğrenme eğrisi dik.

**Autodesk Viewer** — Autodesk'in kendi ücretsiz web görüntüleyicisi. Yalnızca görüntüleme sağlar ve bir Autodesk hesabıyla oturum açmayı gerektirir.

**Inkscape** — CAD değil ama DXF içe aktarır; yalnızca şekilleri görmek ya da SVG'ye dönüştürmek istiyorsanız makul bir seçim.

## "Aslında bu bir DWG, değil mi?"

Çoğu zaman evet. DXF ve DWG'nin ikisi de Autodesk biçimidir ve adlar birbirinin yerine kullanılır, ama aynı şey değillerdir:

| | DXF | DWG |
|---|---|---|
| Biçim | Açık, metin tabanlı | Tescilli, ikili |
| Amaç | Programlar arası değişim | AutoCAD'in yerel biçimi |
| Başka yerlerde destek | Geniş | Sınırlı ve çoğu zaman kusurlu |

Bir görüntüleyici aramaya çıkmadan önce dosyanın gerçek uzantısını kontrol edin. `.dwg` ise yukarıdaki araçlar çoğunlukla işinize yaramaz — yalnızca DXF destekleyen KulmanLab dahil.

Güvenilir çözüm bunun yerine bir DXF edinmektir: dosyayı gönderen kişi onu kendi CAD programında açıp DXF olarak dışa aktarabilir veya *Farklı Kaydet* diyebilir. Neredeyse her masaüstü CAD uygulaması bunu yapabilir ve yaklaşık on saniye sürer. DWG'yi üçüncü taraf bir dönüştürücüyle kendiniz çevirmek mümkün ama daha kayıplıdır — üstelik başkasının çizimini bilinmeyen bir araca emanet etmiş olursunuz.

## Çizim açılıyor ama yanlış görünüyorsa

**Tuval boş.** Genellikle geometri orijinden çok uzaktadır, dolayısıyla görünüm boşluğa bakar. Çizime atlamak için bir *sığdır* veya *sınırlara yakınlaştır* komutu kullanın. Katmanların kapalı olup olmadığını da kontrol edin — bir çizim katmanlarının çoğu dondurulmuş halde gelebilir.

**Her şey mikroskobik ya da saçma derecede büyük.** DXF birimlerini güvenilir biçimde kaydetmez. Aynı çizim milimetre, santimetre, inç veya fit cinsinden hazırlanmış olabilir ve dosya çoğu zaman hangisi olduğunu söylemez. Gerçek boyutunu bildiğiniz bir şeyi ölçüp oradan ölçekleyin.

**Metin eksik ya da değişmiş.** Yazı tipleri DXF içine gömülmez. Çizim, makinenizde bulunmayan bir yazı tipi kullanıyorsa metin başka bir tipe düşer ya da kaybolur. Özgün yazı tipini yüklemek bunu düzeltir.

**Çizimin bazı parçaları gelmemiş.** Dosyadaki bir şey, aracınızın okumadığı bir varlık türünü kullanıyor — genellikle bloklar, 3B katılar veya dosyayı üreten programın yazdığı tescilli uzantılar. Dosyanın bozuk olduğuna karar vermeden önce ikinci bir aracı deneyin.

**Hiçbir şey açılmıyor.** Dosyanın gerçekten DXF olduğunu doğrulayın: düz bir metin düzenleyicide açın. Gerçek bir DXF, okunabilir ASCII grup kodlarıyla ve `SECTION`, `HEADER` gibi bölüm adlarıyla başlar. İkili gürültü görüyorsanız bu bir DWG ya da ikili bir DXF türevidir.

## Hangisini seçmeli

**Sadece bir kez bakmanız mı gerekiyor?** Tarayıcıda açın. Birinin e-postayla gönderdiği tek bir dosyayı okumak için bir CAD paketi kurmak iyi bir takas değil.

**Ölçmek, işaretlemek veya yazdırmak mı gerekiyor?** Tarayıcı araçları bunu rahatlıkla yapar ve gerçek ölçekte PDF'e yazdırmak genellikle tam olarak istenen şeydir.

**Düzenli olarak gerçek teknik çizim işi mi?** LibreCAD veya QCAD kurun. Adanmış masaüstü yazılımı uzun vadede size daha iyi hizmet eder.

**Elinizde DWG mi var?** Gönderenden DXF isteyin. Bu, herhangi bir dönüştürme yolundan daha hızlı ve daha güvenlidir.

---

*İlgili: KulmanLab'in bir DXF'ten neleri okuduğunun tam listesi için [Import](/tr/docs/commands/import/), her dışa aktarma biçiminin neleri taşıdığı için [Export Manager](/tr/docs/commands/export-manager/) ve gerçek fiziksel ölçekte PDF çıktısı için [Print Manager](/tr/docs/commands/print-manager/).*
