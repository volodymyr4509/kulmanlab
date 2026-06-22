---
sidebar_position: 6
title: Ellipse Komutu — KulmanLab CAD'de Merkez ve Eksenlerle Elips Çiz
description: Ellipse komutu, merkezi, birinci eksenin ucunu ve ikinci eksen üzerindeki noktayı tıklayarak elips yerleştirir. Koordinat girişini ve eksen uzunluğunu destekler. DXF ELLIPSE nesneleri olarak tam round-trip.
keywords: [CAD ellipse komutu, elips çiz CAD, DXF ELLIPSE nesnesi, büyük küçük eksen elips CAD, kulmanlab]
---

# Ellipse

`ellipse` komutu, üç nokta tıklanarak elips çizer: merkez, birinci (ana) eksenin ucu ve ikinci (yardımcı) eksenin genişliğini belirleyen nokta. Birinci eksenin eğimi tüm elipsin dönme açısını belirler.

## Elips Çizimi

1. Terminale `ellipse` yazın veya araç çubuğundaki **Ellipse** düğmesine basın.
2. **Merkez noktasını tıklayın** veya `X,Y` yazıp **Enter** tuşuna basın.
3. **Birinci eksenin ucunu tıklayın** — merkezden uzaklık ve açı, ana eksenin uzunluğunu ve yönünü belirler.
4. **İkinci eksen noktasını tıklayın** — merkezden bu tıklamaya olan mesafe, birinci eksene dik boyunca yardımcı eksenin yarı genişliğini ayarlar.

Elips yerleştirilir ve komut tamamlanır.

## Koordinat Girişi

Herhangi bir adım için tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Noktayı yerleştirmek için **Enter** tuşuna basın.

İkinci eksen adımında doğrudan **uzunluk** da girebilirsiniz (tek sayı) — geçerli dik açı boyunca yarı genişlik olarak uygulanır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı veya eksen uzunluğu girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı onaylar |
| `Escape` | İptal eder ve çıkar |

## Tutamaç Düzenleme

Seçili elips **5 tutamaç** gösterir:

| Tutamaç | Konum | Ne yapar |
|---------|-------|----------|
| **Merkez** | Merkez noktası | Tüm elipsi taşır |
| **Ana eksen ucu +** | Ana eksen ucu | Ana eksenin uzunluğunu ve açısını değiştirir |
| **Ana eksen ucu −** | Karşı uç | Diğer ucun bağımsız düzenlenmesi |
| **Yardımcı eksen ucu +** | Yardımcı eksen ucu | İkinci eksenin genişliğini değiştirir |
| **Yardımcı eksen ucu −** | Karşı uç | Bağımsız düzenleme |

## Elips Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Kontür üzerine tıklama** | Elipsi seçer |
| **İçine tıklama** | Seçmez |
| **Sağa çerçeve** (katı) | Yalnızca tüm sınırlayıcı kutu içerideyse seçer |
| **Sola çerçeve** (çapraz) | Kontür çerçeveyle kesişirse seçer |

## Desteklenen Düzenleme Komutları

| Komut | Ne olur |
|-------|---------|
| [Move](./move) | Merkezi taşır |
| [Copy](./copy) | Özdeş elips oluşturur |
| [Rotate](./rotate) | Merkezi ve tüm eksenleri döndürür |
| [Mirror](./mirror) | Elipsi yansıtır |
| [Scale](./scale) | Her iki ekseni eşit ölçekler |
| [Delete](./delete) | Elipsi siler |

Elipsler için Offset, Trim ve Extend **desteklenmez**.

## Özellikler

| Özellik | Değer |
|---------|-------|
| Merkez X / Y | Merkez noktasının koordinatları |
| Eksen ucu X / Y | Merkeze göre ana eksenin uç noktası |
| Oran | Yardımcı eksenin ana eksene oranı (0–1) |

## Ellipse - Circle Karşılaştırması

| | Ellipse | Circle |
|---|---------|--------|
| Eksenler | İki (farklı olabilir) | Bir (yarıçap) |
| Eğim açısı | Ana eksenin yönüyle belirlenir | Her zaman simetrik |
| Düzenleme | 5 tutamaç | 5 tutamaç (merkez + 2 kardinal + 2 kardinal) |

## DXF — ELLIPSE Nesnesi

Elipsler DXF dosyasında tam geometrik tanımla (merkez, ana eksen vektörü, eksen oranı) `ELLIPSE` nesneleri olarak saklanır. Daire DXF'de dejenere bir elips **değildir** — daireler ayrıca `CIRCLE` olarak saklanır.
