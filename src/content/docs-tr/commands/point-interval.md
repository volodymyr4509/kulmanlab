---
title: "PointInterval Komutu — bir nesne boyunca sabit aralıklarla nokta yerleştirme"
description: "PointInterval komutu bir çizgi, polyline, yay, daire, elips veya spline boyunca yazdığınız aralıkla noktalar yerleştirir; yakınına tıkladığınız uçtan başlar ve uzunluğu yazarken önizleme gösterir."
keywords: ["aralıklı nokta CAD", "çizgi boyunca sabit mesafede nokta CAD", "CAD nesne boyunca ölçme", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

`AralıklıNokta` komutu, bir güzergâh boyunca istasyon işaretler gibi, bir nesne boyunca sabit aralıklarla [noktalar](../point/) yerleştirir. Nesnenin kendisi değişmez: noktalar geçerli katman ve renkte yeni nesnelerdir, yakalama için kullanışlıdır.

## Aralıklarla nokta yerleştirme

1. Terminale `AralıklıNokta` yazın veya Edit panelindeki dizi açılır menüsünden **Point Interval**'ı seçin.
2. **Nesneye başlanacak ucun yakınından tıklayın** — çizgi, polyline, yay, daire, elips veya spline. Başka her şey reddedilir ve yeniden seçebilirsiniz.
3. **Aralık uzunluğunu yazın.** Yazarken noktalar nesne üzerinde önizlenir.
4. Yerleştirmek için **Enter** veya **Space**'e basın. Komut sona erer.

## Noktalar nereye düşer

- İlk nokta başlangıçtan bir aralık içeride, diğerleri birer aralık arayla gelir; eğriler dahil nesne boyunca ölçülür. Başlangıcın kendisine nokta konmaz.
- Açık bir nesnede — çizgi, açık polyline, yay, kısmi elips veya açık spline — ölçüm yakınına tıkladığınız uçtan başlar. Uzak uçta kalan kısım işaretsiz kalır: uzak uç yalnızca aralık tam oturduğunda nokta alır.
- Kapalı bir nesnede — daire, kapalı polyline, tam elips veya kapalı spline — nereye tıklarsanız tıklayın ölçüm nesnenin kendi başlangıcından başlar: daire 0 açısından saat yönünün tersine, kapalı polyline ilk köşesinden. Noktalar başlangıca varmadan durur.
- 0 veya daha küçük, nesneden uzun ya da 32767'den fazla nokta verecek bir uzunluk reddedilir: terminal nedenini söyler ve yeniden yazabilmeniz için siler.

Backspace son karakteri siler. Escape baştan başlar, böylece başka bir nesne seçebilirsiniz. Nesne seçilmeden önce Enter veya Space komutu bitirir.

---

*İlgili: bir nesneyi belirli sayıda eşit uzunluğa bölmek için [Point Divide](../point-divide/) ve tek noktalar için [Point](../point/).*
