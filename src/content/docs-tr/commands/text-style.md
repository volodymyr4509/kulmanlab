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
| Ad | Benzersiz ad; `Standard` yeniden adlandırılamaz |
| Yazı tipi / Yükseklik | Yazı tipi ve sabit yükseklik; `0` = metne göre |
| Kalın / İtalik | Bağımsız biçimlendirme |
| Satır aralığı | Satırlar arasındaki mesafe |
| Yatay hizalama | Sol, orta, sağ veya iki yana yaslı |
| Çerçeve | Yeni metnin çevresinde dikdörtgen |

**Yeni** seçili stili çoğaltır. **Sil**, `Standard` veya geçerli stili silemez. **Geçerli yap** yalnızca gelecekteki metni etkiler. Boş, yinelenen veya DXF için geçersiz adlar **OK** düğmesini engeller. İçe aktarılan açıklayıcı stiller gizlidir ancak korunur.

## Kaydetme ve DXF

**OK** kaydeder; **Kapat** veya `Escape` iptal eder. `↑` ve `↓` listede ilerler. Ad, yazı tipi dosyaları, yükseklik, kalın, italik ve açıklayıcı bayrağı DXF stiline aittir. Çerçeve, satır aralığı ve hizalama KulmanLab'ın metin başına varsayılanlarıdır; STYLE tablosu alanı değildir.

Ayrıca bkz. [Text](../text/), [FontManager](../font-manager/) ve [MatchProperties](../match-properties/).
