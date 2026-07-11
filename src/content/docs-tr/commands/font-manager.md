---
title: Font Manager Komutu — KulmanLab CAD'de Özel TTF Yazı Tiplerini Yükleyin ve Yönetin
description: Font Manager komutu, yazı tiplerine göz atmak, önizlemek ve seçmek için, ayrıca kendi .ttf dosyalarınızı yüklemek için bir iletişim kutusu açar. Yüklenen yazı tipleri tarayıcıda kaydedilir ve DXF dışa aktarımlarında ada göre gömülür.
keywords: [font manager, özel yazı tipi CAD, ttf yükle, özel karakter tipi CAD, google fonts CAD, metin yazı tipi CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

`FontManager` komutu, [Text](../text/) ve [Multileader](../leader/) nesnelerinde kullanmak üzere yazı tiplerine göz atıp seçmek ve kendi `.ttf` dosyalarınızı yüklemek için bir iletişim kutusu açar.

## Font Manager'ı Açma

- Terminale `FontManager` yazın, **veya**
- [Metin düzenleyici](../../interface/text-editor/) araç çubuğundaki **Font Manager** düğmesine tıklayın.

## Yazı Tipi Grupları

| Grup | İçerik |
|------|--------|
| **Default** | Yerleşik sans-serif yazı tipi — her zaman kullanılabilir |
| **User** | Kendi yüklediğiniz `.ttf` yazı tipleri (yalnızca bir tane eklediğinizde görünür) |
| **Free** | 15 paket halinde gelen Google Fonts yazı tipi (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Yaygın işletim sistemi yazı tipleri (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Önizlemesini sağda görmek için listedeki herhangi bir yazı tipine tıklayın — ad, alfabe örneği, bir pangram ve rakamlar.

## Özel Yazı Tipi Yükleme

1. İletişim kutusunun altındaki **Add Font** düğmesine tıklayın (veya dosya seçiciyi doğrudan açmak için terminale `Font+` yazın).
2. Bir `.ttf` dosyası seçin. Yalnızca TrueType yazı tipleri desteklenir — `.otf` ve `.woff`/`.woff2` desteklenmez.
3. Dosya adı (uzantısı olmadan) **User** grubunda yazı tipinin adı olur. Örneğin, `MyFont.ttf` dosyasını yüklemek `MyFont` adlı bir yazı tipi ekler.

Yüklenen yazı tipleri tarayıcıda (IndexedDB) kalıcı olarak kaydedilir ve KulmanLab CAD'i bir sonraki açışınızda otomatik olarak yeniden yüklenir.

## Özel Yazı Tipini Kaldırma

**User** grubundaki bir yazı tipinin üzerine gelin ve yanındaki **×** düğmesine tıklayın. Yerleşik yazı tipleri (Default, Free, System) kaldırılamaz.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `↑` / `↓` | Seçimi yazı tipi listesinde yukarı veya aşağı taşır |
| `Escape` | Font Manager'ı kapatır |

## DXF Uyumluluğu

Yazı tipi adı, dışa aktarılan **MTEXT** nesnelerine satır içi bir biçimlendirme kodu olarak gömülür, bu nedenle KulmanLab CAD üzerinden gidip gelen bir DXF, yazı tipi atamasını korur. Özel yazı tipi *dosyaları* DXF'ye gömülmez — yalnızca yazı tipi *adı* gömülür. Bu cihazda yüklemediğiniz özel bir yazı tipine referans veren bir çizimi yeniden içe aktarırsanız, aynı ada sahip bir yazı tipi yükleyene kadar metin Default yazı tipinde görüntülenir.

## İlgili Komutlar

- [Text](../text/) — yazı tipi seçimlerinin uygulandığı metin etiketlerini yerleştirir
- [Match Properties](../match-properties/) — nesneler arasında metin yüksekliğini kopyalar, ancak yazı tipini kopyalamaz
