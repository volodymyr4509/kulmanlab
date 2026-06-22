---
sidebar_position: 29
title: Dimension Radius Komutu — KulmanLab CAD'de Daire veya Yay Yarıçap Ölçüsü
description: Dimension Radius komutu, bir daire veya yay için yarıçap ölçüsü yerleştirir. Nesneyi tıklayın, ardından metin konumunu belirtin. Değer R önekiyle görüntülenir.
keywords: [CAD dimension radius komutu, yarıçap ölçüsü CAD, R daire ölçüsü, DXF DIMENSION radius, kulmanlab]
---

# Dimension Radius

`dim radius` komutu, bir daire veya yayın yarıçapını gösteren ölçü yerleştirir. Ölçü değeri **R** önekiyle görüntülenir (örneğin R25).

## Yarıçap Ölçüsü Anatomisi

```
             R25
  ┌──────────────→●  ← yay/daire üzerindeki nokta
  ●  (merkez)
```

Ölçü çizgisi daire/yayın merkezinden tıklanan noktaya gider.

## Yarıçap Ölçüsü Nasıl Eklenir

1. Terminale `dim radius` yazın veya **Dim Radius** düğmesine basın.
2. Seçmek için **daire veya yayı tıklayın**.
3. **Ölçü metni yerleştirme konumunu tıklayın** — ölçü çizgisi merkezden tıklanan noktaya çizilir.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` | İptal eder ve sıfırlar |

## Dim Radius - Dim Diameter Karşılaştırması

| | Dim Radius | Dim Diameter |
|---|------------|-------------|
| Ne ölçer | Yarıçap (R) | Çap (Ø = 2R) |
| Uygulanır | Daireler ve yaylar | Yalnızca daireler |
| Değer öneki | R | Ø |
| Ölçü çizgisi | Merkez → daire üzerindeki nokta | Nokta → merkez → karşı nokta |

## DXF — DIMENSION Nesnesi

"Radius" türüyle `DIMENSION` nesnesi olarak saklanır. DXF uyumlu programlarda tam round-trip.
