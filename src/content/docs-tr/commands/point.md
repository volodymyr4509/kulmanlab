---
title: "Point Komutu — KulmanLab CAD'de çizime nokta yerleştirme"
description: "Point komutu, her tıklamada, yazılan X,Y'de veya kilitli bir yön boyunca mesafede, Enter, Space veya Escape'e kadar bir nokta yerleştirir. Noktalar bir nokta olarak çizilir, geçerli katman ve rengi taşır ve DXF POINT nesneleri olarak gidip gelir."
keywords: ["CAD nokta komutu", "nokta yerleştirme CAD", "DXF POINT nesnesi", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

`Nokta` komutu her seçimde bir nokta yerleştirir ve Enter, Space veya Escape'e basana kadar etkin kalır. Nokta, boyutu olmayan bir konumdur: küçük bir nokta olarak çizilir ve geçerli katmanı ile rengi taşır. Bir `POINT` nesnesi olarak saklanır.

## Nokta yerleştirme

1. Terminale `Nokta` yazın veya Shapes panelindeki son düğme olan **Point**'e tıklayın.
2. Noktanın gideceği yere **tıklayın** ya da kesin konum için `X,Y` yazıp **Enter**'a basın. Her seçim bir nokta yerleştirir ve terminal koordinatlarını günlüğe yazar; komut bir sonraki için etkin kalır.
3. Ya da bir [vektör iğnesinden](../../interface/vector-pins/) yön kilitleyin ve bir mesafe yazın — nokta, onun boyunca tam o kadar uzağa iner.
4. Bitirmek için **Enter**, **Space** veya **Escape**'e basın. Enter ve Space yalnızca hiçbir şey yazılmıyorken bitirir.

## Bir nokta nasıl görünür

Nokta, her yakınlaştırma düzeyinde 1,5 px yarıçaplı bir nokta olarak çizilir; uzaklaştırınca görünür kalır, yakınlaştırınca büyümez. Çizimin nokta stili (`$PDMODE` ve `$PDSIZE`) henüz okunmaz, bu yüzden DXF ne derse desin her nokta bir noktadır.

## Noktaları düzenleme

Seçili noktanın onu taşıyan tek bir tutamacı vardır. Pencere seçimi, nokta pencerenin içindeyse, hangi yönde sürüklenirse sürüklensin onu alır.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) ve [Scale](../scale/) noktalarda diğer her nesnede olduğu gibi çalışır. Özellikler penceresi Position X ve Position Y'yi, ayrıca rengi ve katmanı gösterir.

## DXF — POINT nesnesi

Noktalar DXF'ten konum, renk ve katman (grup kodları 10/20, 62 ve 8) ile `POINT` nesneleri olarak okunur ve oraya yazılır; kaydedilmiş JSON üzerinden de gidip gelir. Eskiden içe aktarmada atlanırdı. [Export Manager](../export-manager/) Points'i kendi satırında listeler, böylece dışa aktarmanın dışında bırakabilirsiniz.

---

*İlgili: aynı koordinat girişi için [Line](../line/), bir yön boyunca belirli mesafede nokta yerleştirmek için [Vector Pins](../../interface/vector-pins/).*
