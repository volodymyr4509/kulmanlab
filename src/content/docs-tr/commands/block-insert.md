---
title: "BlockInsert Komutu — Çizimin bloklarından birini yerleştirme"
description: "BlockInsert komutu, çizimin bloklarının önizlemelerinden oluşan bir palet açar. Birini seçin, ölçeğini ve dönüşünü ayarlayın, bir nokta tıklayarak ya da yazarak bir kez veya defalarca yerleştirin."
keywords: ["blok ekle CAD", "blok paleti CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

`BlokEkle` komutu, çizimdeki tüm blokların önizlemelerinden oluşan bir palet açar ve seçtiğinizi yerleştirir. Blokları [Block Create](../block-create/) ile oluşturun ya da blok içeren bir DXF dosyası açın.

## Blok yerleştirme

1. `BlokEkle` yazın veya **Bloklar** panelinde **Blok ekle**'e tıklayın. Palet solda sabitlenir; her blok için bir önizleme karosu bulunur, sayfa başına on iki; karoların altındaki oklar sayfayı çevirir.
2. Karoları ada göre daraltmak için **Blok ara**'e yazın.
3. **Ölçek**'i (0'dan büyük olmalı) ve **Döndürme**'u derece olarak ayarlayın. **Yerleştirmeyi tekrarla** varsayılan olarak açıktır.
4. Bir bloğun karosuna tıklayın. Blok imleci izler: taban noktasından yerleştirmek için tıklayın ya da kesin konum için X,Y yazın. İmleç bir açıya kilitliyken uzunluk yazabilirsiniz.
5. **Yerleştirmeyi tekrarla** açıkken blok, **Escape**'e basana dek sonraki kopya için imleci izlemeyi sürdürür. Kapalıyken komut bir kopyadan sonra biter.

## Bilmekte yarar var

- Bir bloğu silmek için karosundaki çöp kutusuna tıklayın ve onaylayın. Çizimde referansı olan bir blok silinemez: karosunda **Kullanımda, silinemez** yazar.
- Hiç bloğu olmayan bir çizim, palette **Bu çizimde blok yok** gösterir.
- Hiçbir şey yerleştirilmiyorken **Escape** paleti kapatır. Soldaki sabitlenmiş panellerden biridir ve bunlardan aynı anda yalnızca biri gösterilir.

---

*İlgili: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
