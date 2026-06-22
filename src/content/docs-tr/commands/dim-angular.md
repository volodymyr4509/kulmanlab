---
sidebar_position: 31
title: Dimension Angular Komutu — KulmanLab CAD'de Çizgiler ve Yaylar için Açısal Ölçüler
description: Dimension Angular komutu, iki çizgi arasındaki açıyı, yayın açısal kapsamını veya daire segmentini ölçer. Yalnızca JSON formatında saklanır — DXF'de değil.
keywords: [CAD dimension angular komutu, açısal ölçü CAD, çizgiler arasındaki açı ölçüsü, kulmanlab]
---

# Dimension Angular

`dim angular` komutu, iki çizgi arasındaki açıyı veya bir yay ya da dairenin açısal kapsamını ölçer ve görüntüler. Değer derece cinsinden görüntülenir.

> **DXF Notu:** Açısal ölçüler DXF dışa aktarımına **dahil edilmez**. Yalnızca JSON formatında saklanır. Açısal ölçüleri kaydetmek için [Export](./export) komutunu JSON formatında kullanın.

## İki Çizgi

1. Terminale `dim angular` yazın veya **Dim Angular** düğmesine basın.
2. **Birinci çizgiyi tıklayın**.
3. **İkinci çizgiyi tıklayın**.
4. **Metin yerleştirme konumunu tıklayın** — iki çizgi arasında yay ölçü çizgisi çizilir.

Metin için tıklama konumu (kesişimin hangi tarafında) keskin (küçük) veya geniş (büyük) açının ölçülüp ölçülmeyeceğini belirler.

## Yay

1. `dim angular` yazın.
2. **Yayı tıklayın** — ölçü, yayın başlangıç açısından bitiş açısına kadar açısal kapsamı ölçer.
3. **Metin yerleştirme konumunu tıklayın**.

## Daire

1. `dim angular` yazın.
2. **Daireyi tıklayın** — ölçü, merkeze göre tıklanan birinci ve ikinci noktadan olan açıyı ölçer.
3. Açı ölçümünü tanımlamak için **daire üzerindeki ikinci noktayı tıklayın**.
4. **Metin yerleştirme konumunu tıklayın**.

## Dinamik Güncelleme

Yerleştirme sonrasında yakalama noktaları tutamaçlarla taşındığında ölçü değeri gerçek zamanlı olarak güncellenir.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` | İptal eder ve sıfırlar |

## İlgili Komutlar

- [Dim Linear](./dim-linear) — yatay/dikey ölçüler
- [Dim Aligned](./dim-aligned) — eğimli mesafe ölçüleri
- [Angle](./angle) — çizime yerleştirmeden açı ölçer
