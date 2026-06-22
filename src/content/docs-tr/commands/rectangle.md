---
sidebar_position: 3
title: Rectangle Komutu — KulmanLab CAD'de Eksenlere Paralel Dikdörtgenler Çiz
description: Rectangle komutu, iki karşıt köşeyi tıklayarak eksenlere paralel dikdörtgen çizer. LWPOLYLINE (kapalı, 4 köşe) olarak saklanır, bu nedenle tutamaç düzenleme davranışı ve DXF round-trip Polyline ile özdeştir.
keywords: [CAD rectangle komutu, dikdörtgen çiz CAD, iki köşeden dikdörtgen, LWPOLYLINE dikdörtgen DXF, kulmanlab]
---

# Rectangle

`rectangle` komutu, iki karşıt köşeyi tıklayarak eksenlere paralel dikdörtgen çizer. Kenarlar her zaman yatay ve dikeydir — döndürülmüş şekiller için [Polyline](./polyline) ve [Rotate](./rotate) komutunu kullanın veya [Line](./line) ile çizin.

Dikdörtgenler dört köşeli kapalı `LWPOLYLINE` nesneleri olarak saklanır — DXF seviyesinde kapalı [Polyline](./polyline) ile ayırt edilemez.

## Dikdörtgen Çizimi

1. Terminale `rectangle` yazın veya araç çubuğundaki **Rectangle** düğmesine basın.
2. **Birinci köşeyi tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Karşıt köşeyi tıklayın** — dikdörtgen yerleştirilir ve komut tamamlanır. Burada koordinat girişi de çalışır.

```
  ●──────────────────●  ← 2. tıklama
  │                  │
  │   önizleme       │
  │                  │
  ●──────────────────  ← 1. tıklama (veya tam tersi)
```

Gerçek zamanlı önizleme, birinci köşeden imleç konumuna dikdörtgeni gösterir. Herhangi bir köşe sırası çalışır — herhangi bir köşeyi önce tıklayabilirsiniz.

## Koordinat Girişi

Kesin yerleştirme için:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Köşeyi yerleştirmek ve sonrakine geçmek için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı onaylar |
| `Escape` | İptal eder ve çıkar |

## Tutamaç Düzenleme

Dikdörtgen kapalı bir çoklu çizgi olduğundan [Polyline](./polyline) ile aynı tutamaçlara sahiptir:

| Tutamaç | Konum | Ne yapar |
|---------|-------|----------|
| **Köşe** | 4 köşenin her biri | Sürükleyerek köşeyi taşıyın — her iki bitişik segment uzar |
| **Segment ortası** | 4 kenarın her birinin merkezi | Sürükleyerek tüm kenarı paralel taşıyın — genişliği veya yüksekliği değiştirir |

> Bir köşeyi sürüklemek artık dikdörtgen şeklini korumaz — bundan sonra genel bir çoklu çizgi haline gelir. Kenarı paralel taşımak için segment orta noktası tutamacını kullanın.

## Dikdörtgen Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Kontür üzerine tıklama** | Dikdörtgeni seçer |
| **İçine tıklama** | Seçmez |
| **Sağa çerçeve** (katı) | Yalnızca tüm dikdörtgen içerideyse seçer |
| **Sola çerçeve** (çapraz) | Kontür çerçeveyle kesişirse seçer |

## Desteklenen Düzenleme Komutları

| Komut | Ne olur |
|-------|---------|
| [Move](./move) | 4 köşenin tamamını taşır |
| [Copy](./copy) | Özdeş dikdörtgen oluşturur |
| [Rotate](./rotate) | 4 köşenin tamamını temel nokta etrafında döndürür |
| [Mirror](./mirror) | 4 köşenin tamamını yansıtır |
| [Scale](./scale) | 4 köşenin tamamını temel noktadan ölçekler |
| [Offset](./offset) | Daha küçük veya daha büyük paralel dikdörtgen oluşturur |
| [Delete](./delete) | Dikdörtgeni siler |

## Rectangle - Polyline - Line Karşılaştırması

| | Rectangle | Polyline | Line |
|---|-----------|----------|------|
| Köşeler | Yalnızca 90° | Herhangi | Herhangi |
| Kapalı | Her zaman | İsteğe bağlı | Hiçbir zaman |
| Offset | Evet | Evet | Evet |
| Trim/Extend | Hayır | Hayır | Evet |
| DXF | LWPOLYLINE (kapalı) | LWPOLYLINE | LINE |

## Özellikler

[Polyline](./polyline) ile aynı alanlar: renk, katman, çizgi türü, çizgi türü ölçeği, kalınlık, kapatma bayrağı, köşeler.

## DXF — LWPOLYLINE Nesnesi

Dikdörtgenler DXF'de 4 köşeli kapalı `LWPOLYLINE` nesneleri olarak saklanır. Diğer CAD programlarında çizilen dikdörtgenler içeren bir DXF dosyası açıldığında, bunlar da kapalı çoklu çizgiler olarak görünür — DXF'de ayrı bir "dikdörtgen" türü yoktur.
