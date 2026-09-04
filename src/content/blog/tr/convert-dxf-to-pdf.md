---
title: "DXF'i PDF'e nasıl dönüştürürsünüz (doğru ölçekte)"
description: "DXF'i tarayıcıda ücretsiz PDF'e dönüştürün — A3 üzerinde 1:50 gibi tam ölçekte bile, ki dönüştürücü siteler bunu yapamaz. Kurulum ve hesap gerekmez."
keywords: [DXF PDF dönüştürme, DXF to PDF ücretsiz, DXF PDF online, DXF PDF ölçek, DXF ölçekli yazdırma, DXF PDF çevirici, CAD çizimi PDF, DXF PDF A3, 1:50 ölçek PDF, AutoCAD olmadan DXF PDF]
date: 2026-09-03
author: KulmanLab
tag: Rehber
---

Bir DXF'i PDF'e dönüştürmek için onu tarayıcıda çalışan bir CAD düzenleyicisinde açıp dışa aktarın: kurulacak bir şey yok, hesap yok ve dosya bilgisayarınızda kalıyor. PDF basıldığında doğru ölçülmesi gerekiyorsa bir kâğıt düzeni ve tam bir ölçek gerekir — dönüştürücülerin tamamen atladığı kısım da tam olarak budur.

Bu ayrım bu rehberin tüm meselesi. Genel amaçlı bir dosya dönüştürücü size çiziminizin bir resmini verir. Ölçekli bir PDF ise üzerine cetvel konabilecek bir çizim verir.

## Hızlı yol: sadece bir PDF üretmek

Yalnızca gönderilecek okunur bir şey gerektiğinde:

1. [app.kulmanlab.com](https://app.kulmanlab.com) adresini açın ve `.dxf` dosyanızı tuvale sürükleyin, ya da Dosya panelindeki **Import** düğmesini kullanın.
2. **Print** düğmesine tıklayın veya `printmanager` yazın.
3. **Format**'ı **PDF** yapın.
4. **Export**'a tıklayın. Dosya inmeye başlar.

Bu kadar. Önizleme, dışa aktarılan dosyayla tam olarak aynı kod yolundan ve aynı çözünürlükte işlenir; yani gördüğünüz şey, ona yaklaşık bir şey değil, tam olarak elde edeceğiniz şeydir.

Bilmeye değer bir nokta: **PDF ekrandaki her şeyi korur** — ölçüler, metin, taramalar, kılavuz çizgileri — tam çizildiği düzeniyle. DXF dışa aktarımı da bunların hepsini taşır; dolayısıyla ikisi arasındaki seçim neyin hayatta kaldığıyla ilgili değildir. Alıcının neye ihtiyacı olduğuyla ilgilidir: yalnızca okuyacak ya da yazdıracaksa PDF, düzenleyecekse DXF.

## Doğru yol: tam ölçekte dönüştürmek

Biri bunun üzerinden ölçecek ya da imalat yapacaksa "sayfaya sığıyor" yeterli değildir. 1:50 ölçek, kâğıt üzerindeki 1 mm'nin gerçekte 50 mm olduğu anlamına gelir ve bu ancak siz bilerek ayarlarsanız geçerlidir.

1. **Kâğıt düzenine geçin.** Ekranın altındaki bir düzen sekmesine tıklayın; **+** düğmesi yeni bir tane ekler. Düzenler kâğıt alanıdır; model alanında ölçekleyecek bir sayfa yoktur.
2. **Sayfayı tanımlayın.** `pagemanager` yazın ya da düzen sekmesine sağ tıklayıp **Page Manager**'ı seçin. Kâğıt biçimini (A4, A3, A2, Letter…) ve yönü seçin.
3. **Bir görüntü penceresi yerleştirin.** `viewportrectangle` yazıp karşılıklı iki köşeyi işaretleyin. Görüntü penceresi, modelinize açılan bir penceredir.
4. **Ölçeği ayarlayın.** Görüntü penceresi etkinken kontrol çubuğundaki **ölçek seçiciyi** kullanın. Standart bir oran seçin ya da kendinizinkini yazın — oran biçimini (`1:200`, `5:1`) veya düz bir ondalığı (`0.005`) kabul eder, ardından Enter.
5. **Dışa aktarın.** Print Manager → PDF → Export.

PDF, sayfa gerçek fiziksel ölçekte basılacak şekilde boyutlandırılır. %100'de yazdırın — her şeyi sessizce yeniden ölçekleyip emeğinizi boşa çıkaran "sayfaya sığdır" ile değil — ve kâğıttaki ölçüler doğru çıkar.

Sonradan kâğıt boyutunu veya ölçeği değiştirirseniz mevcut görüntü pencereleri orantılı olarak yeniden ölçeklenir, böylece düzen dağılmaz.

## Kalite seçimi

**Quality** açılır listesi PDF'in hangi DPI'da işleneceğini belirler:

| Quality | DPI | Ne için |
|---|---|---|
| Draft | 72 | Hızlı kontrol, en küçük dosya |
| Normal | 150 | Varsayılan — A4 ekleri için yeterli |
| Presentation | 300 | Yakından bakılacaksa |
| Max | 600 | Büyük format, ince ayrıntı |

Çizgi kalınlıkları çözünürlükle birlikte ölçeklenir, dolayısıyla bir çizgi her ayarda kâğıt üzerinde aynı *fiziksel* kalınlığı korur: daha yüksek kalite daha keskin bir çizgi verir, daha ince değil. İstisna, uzlaşı gereği her seviyede bir piksel kalan kıl çizgidir (kalınlık `0`).

## Baskı stilleri

**Style** açılır listesi mürekkebi ve sayfayı değiştirir:

- **Monochrome** — beyaz üzerine düz siyah, ve varsayılan olan bu. Kâğıda gidecek her şey için isteyeceğiniz budur: ekranda iyi okunan renkli katmanlar lazer yazıcıda çamurlu grilere döner.
- **Default** — her nesne kendi renginde, beyaz sayfa.
- **Blueprint** — koyu Prusya mavisi üzerine beyaz çizgiler, klasik siyanotip görünümünde. Sunum için, atölye için değil.

## Çizimin yalnızca bir bölümünü dönüştürmek

**Change Area**, dışa aktarımı tuval üzerinde seçtiğiniz bir dikdörtgene kırpar. Yalnızca önizlemeyi değil, gerçekten dışa aktarılan dosyayı kırpar ve model alanında olduğu gibi bir düzende de çalışır.

Köşeler, diğer tüm nokta seçimleri gibi tutamaklara ve kesişimlere yapışır; böylece göz kararı yerine çizili geometriye göre kırpabilirsiniz — bir sayfada dört detay varken yalnızca üçüncüsünü istediğinizde işe yarar.

## Bunun yapmadıkları

Güvenmeden önce dürüst sınırlar:

- **PDF, bir PDF kabı içindeki raster görüntüdür, vektör değil.** A4 ve Normal kalitede bu fark edilmez. A1'de ya da biri bir ayrıntıya iyice yakınlaştırdığında, masaüstü bir CAD paketinden çıkan vektör PDF daha keskin olur. Büyük formatlar için Quality'yi Presentation veya Max yapın — ama bu onu vektöre çevirmez.
- **Hiçbir şey fiziksel yazıcıya gitmez.** Bir dosya alırsınız; yazdırmak yazıcınızın işi.
- **Yalnızca masaüstü tarayıcılar** — Chrome, Firefox, Safari, Edge. Mobil sürüm yok.
- **Yalnızca 2B, DWG değil DXF.** Dosyanız `.dwg` ise gönderenden DXF olarak dışa aktarmasını isteyin.

## Ne zaman başka bir şey kullanmalı

**Genel bir dosya dönüştürücü** (CloudConvert, Zamzar ve benzerleri), gerçekten sadece bir resme ihtiyacınız varsa ve hangi boyutta basıldığı umurunuzda değilse uygundur. Hızlıdırlar ve başka kimsenin okumadığı biçimleri okurlar. Size A3 üzerinde 1:50 vermezler.

**Masaüstü CAD** — LibreCAD, QCAD ya da varsa AutoCAD — vektör PDF üretir ve düzgün basılıp titizlikle incelenecek büyük formatlı teknik çizimler için doğru cevaptır.

**Bu ise** geniş orta alan için: bugün, hiçbir şey kurmadan, doğru ölçeklenmiş ve notlandırılmış bir PDF olarak ihtiyacınız olan bir DXF.

## Göndermeden önce

- Ölçek, sığana bırakılmadan görüntü penceresinde bilinçli olarak ayarlandı
- Kâğıt biçimi, alıcının gerçekten basacağı şeye uyuyor
- A4'ten büyük bir şeye gidiyorsa Quality Normal'in üstüne çekildi
- Bilerek renk istemiyorsanız stil Monochrome
- PDF eklemeden önce bir kez açılıp kontrol edildi
- Alıcıya "sayfaya sığdır" ile değil, %100'de yazdırması söylendi

Bu son satır, bu listedeki her şeyden daha fazla ölçekli çizimi kurtarır.

---

*İlgili: Tüm dışa aktarma ayarları için [Print Manager](/tr/docs/commands/print-manager/), kâğıt boyutu ve düzen ölçeği için [Page Manager](/tr/docs/commands/page-manager/), görüntü pencerelerini yerleştirip ölçeklemek için [ViewportRectangle](/tr/docs/commands/viewport-rectangle/) ve KulmanLab'in bir DXF'ten neleri okuduğu için [Import](/tr/docs/commands/import/).*
