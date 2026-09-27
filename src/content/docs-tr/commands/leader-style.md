---
title: LiderStili Komutu — Lider stillerini yönetin
description: Ok başı, bağlantı, boşluk, dönüş, yazı tipi, yükseklik ve metin çerçevesi içeren CAD lider stilleri oluşturun.
keywords: [CAD lider stili, çoklu lider stili, MLEADERSTYLE, CAD ok başı, metin bağlantısı, DXF stili, kulmanlab]
group: style
order: 7
---

# LeaderStyle

`LiderStili` komutu adlandırılmış lider stilleri yöneticisini açar. Her yeni [Lider](../leader/) oluşturulurken *geçerli* stilin ayarlarını kopyalar.

## Bir stili düzenleme

`LiderStili` yazın veya açıklama panelindeki **Lider Stili** düğmesine tıklayın. ✓ geçerli stili gösterir; adın yanındaki kalemle stili yeniden adlandırabilirsiniz. Önizleme, çizimle aynı işleyiciyi kullanarak anında güncellenir.

| Alan | İşlev |
|---|---|
| Metin bağlantısı | Üst, Orta, Alt veya Altı çizili |
| Ok başı / Ok boyutu | Her kolun ucundaki simge ve boyutu |
| Yatay çizgi boşluğu | Yatay bölüm ile metin arasındaki boşluk |
| Metin dönüşü | Etiketin derece cinsinden açısı |
| Metin stili | [TextStyle](../text-style/) içinden yazı tipi, yükseklik, kalın ve italik değerlerini bir kez kopyalar |
| Yazı tipi / Metin yüksekliği | Etiketin yazı tipi ve yüksekliği |
| Kalın / İtalik | Bağımsız metin biçimi |
| Metin çerçevesi | Etiketin çevresindeki dikdörtgen çerçeve |

**Yeni** seçili stili çoğaltır. `Standard` yeniden adlandırılamaz veya silinemez; geçerli stil de silinemez. **Geçerli yap** yalnızca daha sonra oluşturulan liderleri etkiler — mevcut nesneler değişmez. Boş, yinelenen veya DXF için geçersiz adlar **Tamam** düğmesini engeller. İçe aktarılan açıklamalı stiller gizlenir ancak korunur.

## Kaydetme ve DXF

**Tamam** tüm değişiklikleri uygular; **Kapat** veya `Escape` değişiklikleri atar. KulmanLab `MLEADERSTYLE` kayıtlarını okur ve yazar. Ad, ok başı ve boyutu, boşluk, yükseklik, bağlantı, çerçeve ve açıklamalı işareti stil alanları olarak saklanır. Dönüş, yazı tipi, kalın ve italik, oluşturma sırasında lidere kopyalanan KulmanLab varsayılanlarıdır.

Ayrıca [Leader](../leader/), [LeaderAdd](../leader-add/) ve [LeaderRemove](../leader-remove/) sayfalarına bakın.
