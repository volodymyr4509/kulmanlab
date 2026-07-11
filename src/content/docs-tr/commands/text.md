---
title: Text Komutu — KulmanLab CAD'de MTEXT Etiketleri Yerleştir
description: Text komutu, çok satırlı, zengin biçimli MTEXT etiketi yerleştirir. Bir konum tıklayın, açılır düzenleyiciye yazın ve kaydetmek için Escape tuşuna basın. Düzenleyiciyi yeniden açmak için mevcut herhangi bir etikete çift tıklayın.
keywords: [CAD text komutu, MTEXT, metin etiketi yerleştir CAD, metin ek açıklaması CAD, kalın italik CAD, çok satırlı metin CAD, kulmanlab]
group: shapes
order: 7
---

# Text

`text` komutu, çok satırlı metin etiketi yerleştirir. Tuvalde bir konum tıkladıktan sonra **rich** modda bir açılır düzenleyici açılır — içerik yazabilir, karakter başına kalın/italik/üstü çizili uygulayabilir, yazı tiplerini ve yükseklikleri değiştirebilir ve satır sonları ekleyebilirsiniz. Düzenleyiciyi kaydetmek ve kapatmak için **Escape** tuşuna basın.

**rich** ve **simple** modların karşılaştırması dahil tam düzenleyici referansı için [Metin Düzenleyici](../../interface/text-editor/) sayfasına bakın.

## Metin Etiketi Yerleştirme

1. Terminale `text` yazın veya araç çubuğundaki **Text** düğmesine tıklayın.
2. Tuvalde **çıpa konumunu tıklayın**. Ya da tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. Yeni etiketin üzerinde **metin düzenleyici açılır penceresi** açılır. İçeriğinizi yazın.
4. Etiketi kaydetmek ve düzenleyiciyi kapatmak için **Escape** tuşuna basın.

Varsayılan yükseklik **12 çizim birimidir**.

## Mevcut Etiketi Düzenleme

O etiket için düzenleyiciyi yeniden açmak üzere tuvaldeki herhangi bir metin etiketine **çift tıklayın**.

## Çıpa için Koordinat Girişi

Tıklamak yerine tam konum yazın:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Çıpayı yerleştirmek ve düzenleyiciyi açmak için **Enter** tuşuna basın.

## Klavye Referansı

**Çıpa aşaması**

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı onaylar |

**Metin düzenleyici aşaması** (tam referans için [Metin Düzenleyici](../../interface/text-editor/)'ye bakın)

| Tuş | İşlem |
|-----|--------|
| Herhangi bir yazdırılabilir karakter | İmlece ekler |
| `Backspace` / `Delete` | Komşu karakteri veya seçimi siler |
| `Enter` | Satır sonu ekler |
| `←` / `→` | Giriş noktasını taşır |
| `Home` / `End` | Sabit satırın başına/sonuna atlar |
| `Escape` | Kaydeder ve düzenleyiciyi kapatır |

## Tutamaç Düzenleme — Yeniden Konumlandırma

Seçili bir metin etiketi, çıpa noktasında bir tutamaç gösterir:

| Tutamaç | Konum | Ne yapar |
|------|----------|--------------|
| **Çıpa** | Metnin sol altı | Sürükleyerek etiketi yeniden konumlandırır |

## Metin Seçimi

| Yöntem | Davranış |
|--------|-----------|
| **Tıklama** | Tıklama metnin döndürülmüş sınırlayıcı kutusu içine denk gelirse seçer |
| **Sağa sürükleme** (katı) | Sınırlayıcı kutunun dört köşesinin tamamı seçim alanının içinde olmalıdır |
| **Sola sürükleme** (çapraz) | Metin sınırlayıcı kutusu ile seçim alanı arasındaki herhangi bir örtüşme seçer |

## Desteklenen Düzenleme Komutları

| Komut | Metne ne olur |
|---------|--------------------------|
| [Move](../move/) | Çıpa noktasını taşır |
| [Copy](../copy/) | Yeni konumda özdeş etiket oluşturur |
| [Rotate](../rotate/) | Çıpa konumunu döndürür ve Dönüş Derecesine açı ekler |
| [Mirror](../mirror/) | Çıpa noktasını yansıtma ekseni üzerinden yansıtır (metin dizisi ters çevrilmez) |
| [Scale](../scale/) | Çıpa konumunu ölçekler ve yüksekliği ölçek faktörüyle çarpar |
| [Delete](../delete/) | Etiketi kaldırır |

Metin **Offset**, **Trim** veya **Extend**'i desteklemez.

## Özellikler

Bir metin etiketi seçildiğinde özellikler paneli şunları gösterir:

**Genel**

| Özellik | Varsayılan | Anlam |
|----------|---------|---------|
| Renk | 256 (Katmana Göre) | ACI renk dizini |
| Katman | `0` | Katman ataması |

**Geometri**

| Özellik | Anlam |
|----------|---------|
| Konum X / Konum Y | Çıpa noktası koordinatları |
| Yükseklik | Çizim birimlerinde temel metin yüksekliği (varsayılan: **12**) |
| Dönüş Derecesi | Derece cinsinden saat yönünün tersine dönüş |

**Özellikler**

| Özellik | Anlam |
|----------|---------|
| İçerik | Metin dizisi (MTEXT satır içi kodlar korunur) |
| Ek Açıklama Noktası | Hizalama kodu (1 = sol üst … 9 = sağ alt) |

Metnin Çizgi Türü, Çizgi Türü Ölçeği veya Kalınlık özellikleri yoktur.

## DXF — MTEXT nesnesi

Metin etiketleri DXF dosyasında **MTEXT** nesneleri olarak saklanır. Kalın ve italik, `\L`, `\K`, `\O` ve satır içi yazı tipi anahtarları (`\f`) kullanılarak kodlanır. Karakter başına yükseklik `\H` olarak kodlanır. Tüm biçimlendirme tam DXF round-trip'ten geçer ve LibreCAD, FreeCAD ve diğer DXF uyumlu uygulamalar tarafından okunabilir.
