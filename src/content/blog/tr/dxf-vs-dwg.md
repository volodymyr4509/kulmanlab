---
title: "DXF ve DWG arasındaki fark nedir?"
description: "DWG AutoCAD'in kendi biçimi, DXF ise açık değişim biçimi. Gerçekte ne değişir, hangisi gerekir ve size DWG gönderildiğinde DXF'i nasıl alırsınız."
keywords: [DXF ve DWG farkı, DXF mi DWG mi, DWG nedir, DXF nedir, DWG'den DXF'e, CAD dosya biçimleri, DWG dosyası açma, DXF biçimi, hangi CAD biçimi, DXF DWG karşılaştırma]
date: 2026-09-02
author: KulmanLab
tag: Rehber
---

DWG, AutoCAD'in kendi dosya biçimidir: ikili, tescilli ve Autodesk tarafından belgelenmemiş. DXF ise Autodesk'in, başka programlar da aynı çizimleri okuyabilsin diye yayımladığı değişim biçimidir. Aynı geometri, farklı kap — ve ikisinden yalnızca biri, dosyayı kendi yazılımınızın dışındaki insanlara vermek için tasarlanmıştır.

O son nokta, pratikteki tüm farkın kendisidir ve neyi istemeniz gerektiğine o karar verir.

## Kısaca

| | DXF | DWG |
|---|---|---|
| Açılımı | Drawing Exchange Format | Drawing |
| Yayımlanmış belirtim | Evet, Autodesk tarafından | Hayır |
| Kodlama | Metin (ikili bir türevi de var) | İkili |
| Amaç | Çizimleri programlar arasında taşımak | AutoCAD'in kendi çalışma biçimi |
| Dosya boyutu | Daha büyük | Daha küçük |
| Diğer yazılımlarca okunma | Çok yaygın | Dağınık, tersine mühendislikle yapılmış kütüphaneler üzerinden |
| AutoCAD'in yapabildiği her şeyi taşır | Hayır — belgelenmiş bir alt küme | Evet |

## Neden iki biçim var

Autodesk, AutoCAD'i 1982'de çalışma biçimi DWG olacak şekilde çıkardı. Tek bir programın rahatlığı için kurulmuştur: derli toplu, ikili ve AutoCAD ihtiyaç duyduğunda serbestçe değişebilir.

Bu da onu birine göndermek için kötü bir şey yapar. Böylece Autodesk ayrıca DXF'i yayımladı: aynı çizimin, herhangi bir geliştiricinin karşısına alıp uygulayabileceği belgelenmiş, okunabilir biçimde yazılmış hâli. Bir `.dxf` dosyasını metin düzenleyicide açın; sade ASCII ile grup kodlarını ve bölüm adlarını görürsünüz.

İkisi birlikte sürümlenir. Her AutoCAD sürümü bir DWG revizyonu ve ona karşılık gelen bir DXF revizyonu getirir; dosya başlığında bazen görülen `AC1032` işareti örneğin AutoCAD 2018 kuşağını belirtir.

Yani DXF daha eski ya da daha aşağı bir biçim değildir. Aynı çizimin, bilerek okunabilir kılınmış hâlidir.

## Pratikte gerçekte ne değişir

**Açıklık.** Autodesk DXF'i belgeler, DWG'yi belgelemez. DWG okuyan programlar — ki çoktur — biçimin tersine mühendislikle çözülmesinden doğan kütüphanelere dayanır. Bu iyi çalışır ve tümüyle meşrudur, ama DWG desteğinin yeni sürümlerin gerisinde kalması ve uygulamadan uygulamaya değişmesi anlamına gelir; DXF desteğini ise herkes doğrudan belirtimden uygulayabilir.

**Boyut.** İkili bir DWG, aynı çizimin ASCII DXF hâlinden genellikle epeyce küçüktür. Büyük bir projede bu önemlidir; tek bir parçada değil.

**Sadakat.** DWG, AutoCAD'in ifade edebildiği her şeyi barındırır; başka programların kavram olarak bile bilmediği nesne türleri dâhil. DXF belgelenmiş bir alt kümeyi kapsar. Sıradan 2B teknik çizim için — çizgiler, yaylar, daireler, çoklu çizgiler, metin, ölçüler, katmanlar — bu alt küme ihtiyacınız olan her şeydir. Tescilli AutoCAD nesnelerine yaslanan bir modelde DXF'e aktarım bunların bir kısmını kaybeder.

**Desteğin yaygınlığı.** Neredeyse her CAD, CAM ve vektör aracı DXF okur. DWG okuyanlar daha azdır ve okuyanlar çoğu zaman onu daha eksik destekler.

## Aslında hangisi gerekir?

**Size bir dosya gönderildi ve açamıyorsunuz.** Önce gerçek uzantıya bakın. Çoğu kişi ikisine birden "DWG" der ve indirilenler klasörünüzdeki dosya yarı yarıya ihtimalle zaten açabileceğiniz bir `.dxf`'tir. Bkz. [AutoCAD olmadan DXF açma](/tr/blog/open-dxf-file-without-autocad/).

**Lazer kesime, CNC atölyesine ya da imalatçıya gönderiyorsunuz.** Neredeyse her zaman DXF. Makine yazılımları ve kesim hizmetleri onun etrafında kurulmuştur ve 2B kesim geometrisi belgelenmiş alt kümeye rahatça sığar. Bkz. [lazer kesim için DXF hazırlama](/tr/blog/prepare-dxf-for-laser-cutting/).

**AutoCAD'de çalışan bir mimara ya da mühendise gönderiyorsunuz.** Sorun. Çoğu, iş akışları onu beklediği için DWG'yi tercih eder; etmiyorlarsa DXF'i gayet iyi açarlar.

**Uzun vadede arşivliyorsunuz.** DXF. Belgelenmiş bir metin biçimi, yirmi yıl sonra belirtimi ve bir metin düzenleyicisi olan biri için hâlâ okunabilir olacaktır. Değişim biçimlerinin var olma nedeni tam da budur.

**Biri yalnızca bakmak istiyor.** Hiçbiri — PDF gönderin. Bkz. [DXF'i PDF'e dönüştürme](/tr/blog/convert-dxf-to-pdf/).

## Size DWG gönderildiğinde DXF'i nasıl alırsınız

Güvenilir yol istemektir. Dosyayı gönderen kişi onu kendi CAD programında açar ve *Farklı Kaydet* ya da *Dışa Aktar* → DXF yapar. Yaklaşık on saniye sürer, her masaüstü CAD uygulaması bunu yapabilir ve dosya, üçüncü bir tarafın onun hakkındaki tahmininden değil, onu üreten yazılımdan çıkar.

Sormak seçenek değilse dönüştürücüler var. Tartılacak iki şey: sadakat tam da dönüştürmede kaybolur ve başkasının çizimini kontrol etmediğiniz bir hizmete yüklüyorsunuz. Hobi işi için sorun değil. Müşteri işinde sorun.

İsterken bir sürüm belirtmekte fayda var. **En güvenlisi DXF R12'dir** — çok eskidir, evrensel olarak desteklenir ve çizim sade 2B geometriyse önemli hiçbir şey kaybolmaz. Özellikle eski makine yazılımları onunla çok daha iyi anlaşır.

## İnsanların yanlış bildiği iki şey

**"DXF kayıplıdır."** Yalnızca tescilli AutoCAD nesne türlerini taşımaması anlamında. Çizgiler, yaylar, daireler, çoklu çizgiler, metin, ölçüler ve katmanlar eksiksiz geçer. 2B çizim işinde kayıp genellikle sıfırdır.

**"DXF eski biçimdir."** 1982'den beri DWG'yle yan yana sürümlenir ve hâlâ öyle. Karışıklık, R12'nin uyumluluk hedefi olarak o kadar yaygın kullanılmasından doğar ki insanlar DXF'in orada durduğunu sanır.

## Bu araç nerede duruyor

[KulmanLab](https://kulmanlab.com/tr/) **DXF okur, DWG okumaz** — ve bunu bir eksiklik gibi geçiştirmek yerine nedenini söylemeye değer: DXF belgelenmiştir, dolayısıyla bir uygulama yalnızca belirtimi okuyarak doğru olabilir. DWG ise, Autodesk'in takvimine göre değişen bir biçim için, tarayıcı içinde tersine mühendislikle yapılmış bir kütüphaneye bağımlı olmak demekti.

Elinizde `.dwg` varsa bu onu açmaz. `.dxf` varsa, hiçbir şey kurmadan bir tarayıcı sekmesinde açabilirsiniz: [app.kulmanlab.com](https://app.kulmanlab.com).

Geri yazdığı şey geometri ve metindir — çizgiler, daireler, yaylar, elipsler, çoklu çizgiler, spline'lar ve metin; ayrıca katmanlar ve çizgi tipleri. Taramalar, ölçüler ve kılavuz çizgileri şu an dışa aktarılan DXF'e girmiyor.

---

*İlgili: KulmanLab'in bir DXF'ten tam olarak neleri okuduğu için [Import](/tr/docs/commands/import/), her dışa aktarma biçiminin neleri taşıdığı için [Export Manager](/tr/docs/commands/export-manager/).*
