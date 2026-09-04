---
title: HatchAdd komutu — terminalden .pat tarama deseni dosyası yükleme
description: HatchAdd komutu, önce Hatch Manager'ı açmadan .pat desen dosyası yüklemek için dosya seçiciyi açar. Dosyanın tanımladığı tüm desenler bir kerede eklenir.
keywords: [hatch add komutu, hatchadd komutu, terminalden pat dosyası yükleme, özel tarama deseni CAD, acad.pat, tarama deseni kütüphanesi, kulmanlab]
group: style
order: 5
---

# HatchAdd

`HatchAdd` komutu, önce [Hatch Manager](../hatch-manager/) penceresini açmadan bir `.pat` tarama deseni dosyası yüklemek için sistemin dosya seçicisini açar. Hatch Manager'daki **Add .pat File** düğmesinin tetiklediği yüklemenin aynısıdır — HatchAdd yalnızca terminalden oraya giden doğrudan bir yoldur.

## Desen dosyası yükleme

1. Terminale `HatchAdd` yazın veya [Hatch Manager](../hatch-manager/) penceresinin altındaki **Add .pat File** düğmesine tıklayın.
2. Sistem seçicisinde bir `.pat` dosyası seçin. Yalnızca standart tarama deseni biçimi kabul edilir.

Komut, dosya seçici açılır açılmaz sona erer — ardından başka istem, tıklama veya terminal girişi gelmez. Dosya seçilir seçilmez desenler kaydedilir ve **User** grubunda görünür.

## Yüklerken ne olur

- **Bir `.pat` dosyası kaptır, tek bir desen değil.** Tek dosya genellikle adlandırılmış birçok desen tanımlar ve hepsi birlikte eklenir. HatchAdd tam burada, bir `.ttf`'nin bir yazı tipi olduğu [FontAdd](../font-add/)'den ayrılır.
- **Dosyanın kendisi saklanmaz.** Bir kez okunur, desenlerine ayrılır ve her desen kendi adıyla tek başına kaydedilir. Bu yüzden sonradan tek bir deseni, onunla birlikte gelenlere dokunmadan kaldırabilirsiniz — ve bu yüzden **User** grubu onları geldikleri dosyaya göre değil, ada göre alfabetik sıralar.
- **Adı mevcut bir desenle aynı olan desen onun yerini alır.** KulmanLab'in kendi yaklaşımlarının üzerine yetkin tanımları koymanın desteklenen yolu budur: gerçek bir `acad.pat` yükleyin, onun `ANSI31` ve diğer standart adlara ait sürümleri devralsın.
- **Desenler çizim başına değil, kullanıcı başına kaydedilir.** Tarayıcıda (IndexedDB) yaşarlar, KulmanLab CAD'i bir sonraki açışınızda kendiliğinden yeniden yüklenirler ve her çizimde kullanılabilirler.
- **Geçerli desen tanımı içermeyen bir dosya hiçbir şey eklemez.** Kütüphane olduğu gibi kalır.

## Klavye Referansı

HatchAdd'in kendine ait klavye etkileşimi yoktur — komutun tamamı tarayıcının yerleşik dosya seçme penceresidir. O pencereyi iptal etmek (ya da dosya seçmemek) desen kütüphanesini değiştirmeden bırakır.

## İlgili Komutlar

| Komut | Ne yapar |
|-------|----------|
| [Hatch Manager](../hatch-manager/) | Desen kütüphanesini canlı örnek önizlemesiyle gezmek ve yüklenmiş desenleri kaldırmak |
| [Hatch](../hatch/) | Kapalı bir bölgeyi kütüphanedeki bir desenle doldurur |
| [FontAdd](../font-add/) | `.ttf` yazı tipleri için aynı doğrudan yükleme kısayolu |
