---
sidebar_position: 16
title: Trim Komutu — KulmanLab CAD'de Çizgileri Sınıra Kırp
description: Trim komutu, üzerine gelindiğinde iki kesişen nesne arasındaki çizgi segmentini kırpar. Kırmızı önizleme neyin silineceğini gösterir. Kesim sınırı olarak herhangi bir nesne türünü destekler, ancak yalnızca çizgiler kırpılabilir.
keywords: [CAD trim komutu, çizgiyi kırp CAD, sınıra kırp, trim çizgi, kesim sınırı CAD, kulmanlab]
---

# Trim

`trim` komutu, iki kesişen nesne arasındaki çizgi segmentini kaldırır. İmleci ilgili segmente götürün — **kırmızı önizleme** görünür — ve kaldırmak için tıklayın.

## Nasıl Kullanılır

1. Terminale `trim` yazın veya araç çubuğundaki **Trim** düğmesine basın.
2. İmleci **iki kesişen nesne arasındaki çizgi segmentine götürün**.
3. **Kırmızı önizleme** neyin silineceğini gösterir.
4. Segmenti silmek için **tıklayın**.

Komut aktif kalır — ek segmentlere götürüp tıklayın. Çıkmak için `Escape` veya `Enter` tuşuna basın.

## Segmentin Nasıl Belirlendiği

Üzerine gelinen çizgi, çizimdeki diğer nesnelerle tüm kesişim noktalarında bölünür. Vurgulanan segment, imleç konumuna en yakın bölünmüş parçadır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` / `Enter` | Trim komutundan çıkar |

## Desteklenen Nesneler

| Rol | Desteklenen tür |
|-----|----------------|
| **Kırpılan nesne** | Yalnızca **Çizgi** |
| **Kesim sınırı** | Herhangi bir nesne türü (Çizgi, Daire, Yay, Çoklu çizgi vb.) |

Yalnızca çizgiler Trim komutuyla kısaltılabilir. Diğer nesne türleri (Daireler, Yaylar, Çoklu çizgiler vb.) kırpılamaz — ancak çizgiler için kesim sınırı olarak kullanılabilirler.

## Trim - Extend Karşılaştırması

| | Trim | Extend |
|---|------|--------|
| Ne yapar | Çizgi segmentini kaldırır | Çizgiyi sınıra uzatır |
| Etkileşim | Üzerine gel + tıkla | Üzerine gel + tıkla |
| Sınır | Herhangi bir nesne türü | Herhangi bir nesne türü (metin ve spline hariç) |
| Üzerinde çalışır | Yalnızca çizgiler | Yalnızca çizgiler |
