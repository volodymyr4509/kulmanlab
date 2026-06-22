---
sidebar_position: 49
title: Print Komutu — KulmanLab CAD'de Çizimi PNG, JPEG, WebP veya PDF Olarak Dışa Aktar
description: Print komutu, önizleme, format seçimi, tek renkli mod anahtarı ve alan seçimiyle Yazdırma Yöneticisini açar. PNG, JPEG, WebP ve PDF destekler. Maksimum çözünürlük 2000×2000 piksel.
keywords: [CAD PNG dışa aktar, CAD PDF dışa aktar, çizimi yazdır CAD, yazdırma yöneticisi CAD, tek renkli dışa aktarma, kulmanlab]
---

# Print

`print` komutu, önizleme, format seçimi (PNG / JPEG / WebP / PDF), tek renkli mod anahtarı ve isteğe bağlı alan kırpmasıyla özel dışa aktarma penceresi olan **Yazdırma Yöneticisini** açar. Fiziksel yazıcıya hiçbir şey gönderilmez — sonuç dosya olarak indirilir.

## Yazdırma Yöneticisini Açma

Araç çubuğundaki **Print** düğmesine basın veya terminale `print` yazın. Yazdırma Yöneticisi hemen açılır ve geçerli görünümün önizlemesini gösterir.

## Yazdırma Yöneticisi Düzeni

Pencere iki bölmeden oluşur:
- **Sol kenar çubuğu** — tüm dışa aktarma kontrolleri.
- **Sağ bölme** — ayarlar değiştikçe güncellenen önizleme tuvali.

### Kenar Çubuğu Kontrolleri

| Öğe | Açıklama |
|-----|---------|
| **Change Area** | Tuvalde isteğe bağlı dikdörtgene kırpın (aşağıya bakın) |
| **Monochrome** anahtarı | Tüm renkli çizgileri siyaha dönüştürür — temiz baskı için varsayılan olarak açık |
| **Format** listesi | PNG, JPEG, WebP veya PDF |
| **Export** düğmesi | Dosyayı oluşturur ve indirir |

## İsteğe Bağlı Dışa Aktarma Alanı Seçimi

Varsayılan olarak önizleme, Yazdırma Yöneticisi açıldığında tuvalde görünenin tam olarak aynısını gösterir. Belirli bir alanı dışa aktarmak için:

1. **Change Area**'ya tıklayın — Yazdırma Yöneticisi gizlenir ve tuval etkileşimli hale gelir.
2. Dışa aktarma dikdörtgeninin **birinci köşesini tıklayın**.
3. **Karşı köşeyi tıklayın** — Yazdırma Yöneticisi seçilen alanı önizlemede göstererek yeniden açılır.

Alan seçimini iptal etmek ve önceki alana dönmek için `Escape` tuşuna basın.

Önizleme tuvali seçilen alanın **tam en-boy oranına** göre dinamik olarak yeniden boyutlandırılır, bu nedenle önizleme piksel düzeyinde doğrudur.

## Dışa Aktarma Formatları

| Format | En iyi | Notlar |
|--------|--------|-------|
| **PNG** | Kayıpsız, keskin çizgiler | Beyaz arka plan, şeffaflık yok |
| **JPEG** | Göndermek için daha küçük dosya | %95 kalite, hafif sıkıştırma |
| **WebP** | Web için en küçük dosya | Aynı %95 kalite, JPEG'den daha iyi sıkıştırma |
| **PDF** | Baskıya hazır belgeler | 150 DPI'da PDF kapsayıcısına gömülü görüntü |

Dışa aktarılan dosya `kulman-<zaman_damgası>.<uzantı>` olarak adlandırılır ve otomatik indirilir.

## Çözünürlük ve Arka Plan

- Maksimum çözünürlük: **2000 × 2000 piksel**, seçilen alanla orantılı.
- Arka plan her zaman **beyaz**.
- **Yazdırılmaz** olarak işaretlenmiş katmanlar dışa aktarmadan hariç tutulur.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` (alan seçimi sırasında) | Alan seçimini iptal eder, öncekine döner |
| `Escape` (Yazdırma Yöneticisinde) | Yazdırma Yöneticisini kapatır |
