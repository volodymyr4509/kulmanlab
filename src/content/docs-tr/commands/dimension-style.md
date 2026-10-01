---
title: "ÖlçüStili komutu — adlandırılmış ölçü stilleri oluşturma ve yönetme"
description: "Oklar, uzatma çizgileri, merkez işaretleri, metin, hassasiyet, hizalama ve DXF DIMSTYLE için CAD ölçü stilleri oluşturun ve yönetin."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# ÖlçüStili

Komut, adlandırılmış ölçü stillerini oluşturmak, düzenlemek, önizlemek ve seçmek için bir pencere açar. Yeni doğrusal, hizalı, yarıçap, çap ve açısal ölçüler oluşturulurken geçerli stili kopyalar; mevcut ölçüler canlı bağlı kalmaz.

## Pencereyi açma

Yerelleştirilmiş komutu terminale yazın veya **Açıklama** panelindeki **Ölçü Stili** düğmesine tıklayın. Soldaki liste görünür stilleri gösterir; onay işareti geçerli stili belirtir, kalem ise yeniden adlandırır.

## Çizgiler ve oklar

**Ok 1 / Ok 2 · Ok boyutu · Uzatma çizgisi ötelemesi · Uzatma çizgisi taşması · Merkez işareti · Merkez işareti boyutu**

İki ok ucunu ayrı ayrı, ok boyutunu, uzatma çizgisi ofsetini ve uzamasını, ayrıca merkez işareti türünü ve boyutunu (`Yok`, `İşaret` veya `Çizgiler`) ayarlayın.

## Metin

**Metin stili · Yazı tipi · Metin yüksekliği · Metin çerçevesi · Metin boşluğu · Metin bağlantısı · Metin hizalı · Hassasiyet · Açı hassasiyeti**

Metin bölümü; Metin Stili hızlı doldurmasını, yazı tipini, yüksekliği, kalın ve italik biçimi, çerçeveyi, aralığı, dokuz bağlama konumundan birini, ölçü çizgisine hizalamayı ve doğrusal/açısal hassasiyeti yönetir. Metin Stili değerleri bir kez kopyalar; canlı bağlantı değildir.

Önizleme tuvalle aynı çizicileri kullanır. Okları, merkez işaretlerini, metin konumunu, hassasiyeti ve çerçeveleri denetlemek için doğrusal, yarıçap, çap ve açısal örnekler arasında geçiş yapın.

## Stil oluşturma ve yönetme

**Yeni** seçilen stili çoğaltır. `Standard` yeniden adlandırılamaz veya silinemez; geçerli stil de silinemez. Adlar benzersiz, boş olmayan ve DXF için geçerli olmalıdır. İçe aktarılan açıklayıcı stiller gizli kalır ancak korunur.

## Geçerli stili ayarlama

**Geçerli Yap**, seçilen stili yeni ölçüler için şablon yapar; Açıklama panelindeki liste de aynı seçimi sunar. Değerler oluşturma anında kopyalanır. Dimension Continue ise temel ölçünün tüm görünümünü devralır.

## Kaydetme veya vazgeçme

**Tamam** yeniden adlandırma, ekleme, silme, özellik ve geçerli stil seçimini birlikte uygular. **Kapat**, arka plana tıklama veya `Escape` değişiklikleri atar.

## DXF uyumluluğu

KulmanLab; ayrı oklar, uzatma çizgileri, metin, hassasiyet, merkez işaretleri, çerçeve, metin stili başvurusu ve açıklayıcı bayrak dahil adlandırılmış `DIMSTYLE` kayıtlarını içe ve dışa aktarır. İçe aktarmada nesneye özel `DSTYLE` geçersiz kılmaları önceliklidir.

Dışa aktarımda başvurulan `STYLE` değişken yükseklik (`40 = 0`) kullanır ve son yüksekliği grup `42` içinde saklar. Böylece sabit metin stili yüksekliği, ölçü stilinin kendi metin yüksekliğini geçersiz kılmaz.

## İlgili komutlar

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
