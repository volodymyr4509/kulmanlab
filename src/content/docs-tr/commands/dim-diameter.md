---
sidebar_position: 30
title: Dimension Diameter Komutu — KulmanLab CAD'de Daire Çap Ölçüsü
description: Dimension Diameter komutu, bir daire için çap ölçüsü yerleştirir. Daireyi tıklayın, ardından metin konumunu belirtin. Değer Ø önekiyle görüntülenir.
keywords: [CAD dimension diameter komutu, çap ölçüsü CAD, Ø daire ölçüsü, DXF DIMENSION diameter, kulmanlab]
---

# Dimension Diameter

`dim diameter` komutu, bir dairenin çapını gösteren ölçü yerleştirir. Ölçü değeri **Ø** önekiyle görüntülenir (örneğin Ø50).

## Çap Ölçüsü Anatomisi

```
  ●──────●──────●  ← merkez üzerinden geçen ölçü çizgisi
  (uzak yay noktası) (merkez) (yakın yay noktası)
           Ø50
```

Ölçü çizgisi dairenin **merkezinden** geçerek bir yay noktasından diğerine (tıklamaya göre yakın ve uzak) gider.

## Çap Ölçüsü Nasıl Eklenir

1. Terminale `dim diameter` yazın veya **Dim Diameter** düğmesine basın.
2. Seçmek için **daireyi tıklayın**.
3. **Ölçü metni yerleştirme konumunu tıklayın** — ölçü çizgisi dairenin merkezinden geçer.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` | İptal eder ve sıfırlar |

## Dim Diameter - Dim Radius Karşılaştırması

| | Dim Diameter | Dim Radius |
|---|-------------|------------|
| Uygulanır | Yalnızca daireler | Daireler ve yaylar |
| Değer | 2 × yarıçap | Yarıçap |
| Gösterim | Ø | R |
| Ölçü çizgisi | Merkez üzerinden (dairede iki uç) | Merkezden tek uca |

## DXF — DIMENSION Nesnesi

"Diameter" türüyle `DIMENSION` nesnesi olarak saklanır. DXF uyumlu programlarda tam round-trip.
