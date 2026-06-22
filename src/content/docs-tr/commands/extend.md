---
sidebar_position: 17
title: Extend Komutu — KulmanLab CAD'de Çizgileri Sınıra Uzat
description: Extend komutu, bir çizginin en yakın ucunu en yakın sınır kesişimine kadar uzatır. İmleci çizgi ucuna götürün, vurgulamayı görün ve tıklayın. Sınırlar metin ve spline dışındaki herhangi bir nesne olabilir. Yalnızca çizgilerde çalışır.
keywords: [CAD extend komutu, çizgiyi uzat CAD, çizgiyi sınıra uzat, uzatma sınırı CAD, kulmanlab]
---

# Extend

`extend` komutu, bir çizginin en yakın ucunu sınır nesnesiyle en yakın kesişimine kadar uzatır. İmleci çizginin ucuna götürün — önizleme vurgulanır — ve onaylamak için tıklayın.

## Nasıl Kullanılır

1. Terminale `extend` yazın veya araç çubuğundaki **Extend** düğmesine basın.
2. İmleci **uzatılacak çizginin ucuna götürün**.
3. **Önizleme**, çizgiyi en yakın sınıra kadar uzatılmış gösterir.
4. **Tıklayın** ve onaylayın.

Komut aktif kalır — ek çizgi uçlarına götürüp tıklayın. Çıkmak için `Escape` veya `Enter` tuşuna basın.

## Uç Nokta Seçim Mantığı

İmleç hangi çizgi ucunun uzatılacağını belirler:

- İmleç **bitiş noktasına** daha yakınsa — bitiş noktasından uzatılır.
- İmleç **başlangıç noktasına** daha yakınsa — başlangıç noktasından uzatılır.
- Çizgi, seçilen uçtan **aynı yönde** ilk sınır nesnesine kadar uzatılır.

## Sınır Olarak Yok Sayılan Nesneler

Bazı nesne türleri, uzatma yolunu kesseler bile **sınır sayılmaz**:

| Nesne türü | Sınır mı? |
|------------|-----------|
| Çizgi | Evet |
| Çoklu çizgi | Evet |
| Daire | Evet |
| Yay | Evet |
| Elips | Evet |
| Metin / Mtext | **Hayır** |
| Gösterge (Multileader) | **Hayır** |
| Spline | **Hayır** |

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` / `Enter` | Extend komutundan çıkar |

## Desteklenen Nesneler

| Rol | Desteklenen tür |
|-----|----------------|
| **Uzatılan nesne** | Yalnızca **Çizgi** |
| **Sınır** | Metin, Mtext, Multileader ve Spline dışındaki herhangi bir tür |

## Extend - Trim Karşılaştırması

| | Extend | Trim |
|---|--------|------|
| Ne yapar | Çizgiyi sınıra uzatır | Çizgi segmentini kaldırır |
| Etkileşim | Uca götür + tıkla | Segmente götür + tıkla |
| Sınır | Metin/Spline dışındaki herhangi bir tür | Herhangi bir nesne türü |
| Üzerinde çalışır | Yalnızca çizgiler | Yalnızca çizgiler |
