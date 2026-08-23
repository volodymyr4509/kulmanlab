---
title: Print Manager — Çizimi PNG, JPEG, WebP veya PDF Olarak Dışa Aktar
description: PrintManager komutu, dışa aktarılan dosyayla tam olarak eşleşen canlı bir önizleme, Kalite/DPI ayarı, format seçimi, Default/Monochrome/Blueprint baskı stili ve isteğe bağlı alan seçimiyle Print Manager'ı açar. PNG, JPEG, WebP ve PDF destekler.
keywords: [CAD PNG dışa aktar, CAD PDF dışa aktar, çizimi yazdır CAD, print manager, baskı kalitesi DPI, tek renkli dışa aktarma, blueprint baskı stili, kulmanlab]
group: file
order: 4
---

# Print Manager

`PrintManager` komutu, önizleme, format seçimi (PNG / JPEG / WebP / PDF), bir Style seçici (Default / Monochrome / Blueprint) ve isteğe bağlı alan kırpmasıyla özel dışa aktarma penceresi olan **Print Manager**'ı açar. Fiziksel yazıcıya hiçbir şey gönderilmez — sonuç dosya olarak indirilir.

## Print Manager'ı Açma

Araç çubuğundaki **Print** düğmesine basın veya terminale `PrintManager` yazın. Print Manager hemen açılır ve geçerli görünümün önizlemesini gösterir.

Önizleme, sonunda dışa aktaracağınız dosyayla tamamen aynı kod yolundan, tamamen aynı piksel çözünürlüğünde render edilir — Quality, Style veya dışa aktarma alanını değiştirmek önizlemeyi hemen yeniden render eder, böylece gördüğünüz şey yaklaşık bir tahmin değil, indirilecek olanın ta kendisidir.

## Print Manager Düzeni

Pencere iki bölmeden oluşur:
- **Sol kenar çubuğu** — tüm dışa aktarma kontrolleri.
- **Sağ bölme** — ayarlar değiştikçe güncellenen önizleme tuvali.

### Kenar Çubuğu Kontrolleri

| Öğe | Açıklama |
|-----|---------|
| **Change Area** | Tuvalde isteğe bağlı dikdörtgene kırpın (aşağıya bakın) — kağıt alanı olan bir düzende bile, yalnızca ekrandaki önizlemeyi değil, dışa aktarılan görüntüyü gerçekten kırpar |
| **Quality** açılır menüsü | Dışa aktarma çözünürlüğünü ayarlar (aşağıya bakın) |
| **Style** açılır menüsü | Default, Monochrome veya Blueprint — aşağıdaki *Baskı stilleri* bölümüne bakın. Temiz baskı çıktısı için varsayılan olarak Monochrome |
| **Format** listesi | PNG, JPEG, WebP veya PDF |
| **Export** düğmesi | Dosyayı oluşturur ve indirir |

## Baskı stilleri

**Style** açılır menüsü hem varlıkların çizildiği mürekkep rengini hem de sayfa arka planını kontrol eder:

| Stil | Mürekkep | Sayfa arka planı |
|------|----------|-------------------|
| **Default** | Her varlığın kendi rengi | Beyaz |
| **Monochrome** *(varsayılan)* | Varlık/katman rengi ne olursa olsun düz siyah | Beyaz |
| **Blueprint** | Varlık/katman rengi ne olursa olsun düz beyaz | Derin Prusya mavisi, hafif bir referans ızgarasıyla |

Blueprint, geleneksel bir siyanotip mimari baskının görünümünü yeniden üretir — koyu mavi bir sayfa üzerinde beyaz çizgiler. Referans ızgarası DPI yerine sayfa boyutuna göre boyutlandırılır, bu nedenle çözünürlük arttıkça yoğunlaşmak yerine herhangi bir Quality ayarında aynı yoğunlukta görünür.

## Kalite ve çözünürlük

**Quality** açılır menüsü, dışa aktarmanın hangi DPI'da render edileceğini belirler:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(varsayılan)* | 150 |
| Presentation | 300 |
| Max | 600 |

Daha yüksek Kalite, aynı fiziksel boyutta daha büyük ve daha net bir görüntü üretir — çizgi kalınlıkları çözünürlükle birlikte ölçeklenir, böylece bir çizgi DPI arttıkça daha ince görünmek yerine herhangi bir Kalite ayarında kağıt üzerinde aynı *fiziksel* kalınlığı korur. Tek istisna, geleneksel olarak "çıktı cihazının çizebileceği en ince çizgi" olarak tanımlanan ince çizgidir (çizgi kalınlığı `0`) — canlı tuvaldeki davranışıyla tamamen aynı şekilde, her Kalite seviyesinde sabit 1 piksel genişliğinde kalır.

Kaliteyi değiştirmek önizlemeyi hemen yeniden render eder, böylece dışa aktarmadan önce gerçek netliği (ve dosya boyutu ödünleşimini) görürsünüz.

## İsteğe Bağlı Dışa Aktarma Alanı Seçimi

Varsayılan olarak önizleme, Print Manager açıldığında tuvalde görünenin tam olarak aynısını gösterir. Belirli bir alanı dışa aktarmak için:

1. **Change Area**'ya tıklayın — Print Manager gizlenir ve tuval etkileşimli hale gelir.
2. Dışa aktarma dikdörtgeninin **birinci köşesini tıklayın**.
3. **Karşı köşeyi tıklayın** — Print Manager seçilen alanı önizlemede göstererek yeniden açılır.

Alan seçimini iptal etmek ve önceki alana dönmek için `Escape` tuşuna basın.

Önizleme tuvali seçilen alanın **tam en-boy oranına** göre dinamik olarak yeniden boyutlandırılır, bu nedenle önizleme piksel düzeyinde doğrudur.

## Dışa Aktarma Formatları

| Format | En iyi | Notlar |
|--------|--------|-------|
| **PNG** | Kayıpsız, keskin çizgiler | Style'ın sayfa arka planı gömülü, şeffaflık yok |
| **JPEG** | Göndermek için daha küçük dosya | %95 kalite, hafif sıkıştırma |
| **WebP** | Web için en küçük dosya | Aynı %95 kalite, JPEG'den daha iyi sıkıştırma |
| **PDF** | Baskıya hazır belgeler | Seçilen Quality'nin DPI'ında PDF kapsayıcısına gömülü, sayfanın gerçek fiziksel ölçekte basılmasını sağlayacak boyutta görüntü |

Dışa aktarılan dosya `kulman-<zaman_damgası>.<uzantı>` olarak adlandırılır ve otomatik indirilir.

## Çözünürlük ve Arka Plan

- **Model uzayı / görünüm dışa aktarma**: varsayılan Normal (150 DPI) Kalitede 2000 × 2000 piksel ile sınırlıdır, seçilen alanla orantılı olarak ölçeklenir; sınır da Quality ile birlikte ölçeklenir — Draft daha düşük, Presentation ve Max daha yüksektir (Max/600 DPI'da 8000 × 8000'e kadar).
- **Düzen (kağıt alanı) dışa aktarma**: seçilen DPI'da düzenin kağıt boyutlarından doğrudan boyutlandırılır — örn. bir A4 sayfası (210 × 297 mm) Normal kalitede yaklaşık 1240 × 1754 px olarak dışa aktarılır — bu nedenle görünümün 2000 px sınırına tabi değildir.
- Arka plan, seçilen baskı **Style**'ını izler — Default ve Monochrome için beyaz, Blueprint için derin Prusya mavisi (yukarıdaki *Baskı stilleri* bölümüne bakın).
- **Yazdırılmaz** olarak işaretlenmiş katmanlar dışa aktarmadan hariç tutulur.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` (alan seçimi sırasında) | Alan seçimini iptal eder, öncekine döner |
| `Escape` (Print Manager'da) | Print Manager'ı kapatır |
