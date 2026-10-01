---
title: "MetinStili Komutu — Metin stillerini yönetin"
description: "Yazı tipi, yükseklik, kalın, italik, satır aralığı, hizalama ve çerçeve içeren CAD metin stilleri oluşturun."
keywords: [CAD metin stili, CAD yazı tipi, metin çerçevesi, metin hizalama, DXF stili, kulmanlab]
group: style
order: 6
---

# TextStyle

`MetinStili` komutu stil yöneticisini açar. Adlandırılmış stiller oluşturun, varsayılanlarını düzenleyin ve *geçerli* stili seçin. Yeni [Metin](../text/) oluşturulurken bu ayarları kopyalar.

## Yöneticiyi kullanma

Terminalde `MetinStili` yazın veya **Açıklama Ekle** panelindeki **Metin stili** düğmesine tıklayın. ✓ geçerli stili gösterir; çift tıklama bir stili geçerli yapar.

| Alan | İşlev |
|---|---|
| Yeniden adlandır | Listedeki adı kalem simgesiyle düzenleyin; `Standard` yeniden adlandırılamaz. |
| Yazı tipi / Yükseklik | Yazı tipi ve zorunlu pozitif yükseklik. Sıfır veya negatif değerler `1` olur; yönetici yalnızca `0` üzerindeki değerleri kabul eder. |
| Kalın / İtalik | Bağımsız biçimlendirme |
| Satır aralığı | Satırlar arasındaki mesafe |
| Yatay hizalama | Sol, orta, sağ veya iki yana yaslı |
| Çerçeve | Yeni metnin çevresinde dikdörtgen |

Önizleme tuvalle aynı oluşturucuyu kullanır ve iki satır gösterir. Yazı tipi, yükseklik, kalın, italik, çerçeve, satır aralığı ve hizalama anında güncellenir; gösterge sığdırma yakınlaştırmasını verir. Yeni stiller varsayılan olarak **sola** hizalanır.

**Yeni** seçili stili çoğaltır. **Sil**, `Standard` veya geçerli stili silemez. **Geçerli yap** yalnızca gelecekteki metni etkiler. Boş, yinelenen veya DXF için geçersiz adlar **OK** düğmesini engeller. İçe aktarılan açıklayıcı stiller gizlidir ancak korunur.

## Kaydetme ve DXF

Ad, yazı tipi dosyaları, kalın, italik ve açıklayıcı bayrak DXF metin stillerinde korunur. KulmanLab STYLE grup `40` değerini `0` (değişken yükseklik), son kullanılan yüksekliği grup `42` olarak yazar; böylece sabit STYLE yüksekliği ölçü stilinin kendi metin yüksekliğini geçersiz kılmaz. Çerçeve, satır aralığı ve yatay hizalama KulmanLab’ın metin başına varsayılanlarıdır, DXF STYLE tablosu alanları değildir.
