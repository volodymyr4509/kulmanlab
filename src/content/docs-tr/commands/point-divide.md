---
title: "PointDivide Komutu — bir nesne boyunca eşit uzunluklarda nokta yerleştirme"
description: "PointDivide komutu bir çizgiyi, polyline'ı, yayı, daireyi, elipsi veya spline'ı eşit uzunlukta parçalara böler ve her bölme yerine bir nokta koyar; parça sayısını yazarken önizleme gösterir."
keywords: ["CAD bölme komutu", "çizgiyi eşit parçalara bölme CAD", "nesne boyunca nokta CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

`NoktaylaBöl` komutu bir nesneyi eşit uzunlukta parçalara bölen [noktalar](../point/) yerleştirir. Nesnenin kendisi değişmez: noktalar geçerli katman ve renkte yeni nesnelerdir, yakalama için kullanışlıdır.

## Bir nesneyi bölme

1. Terminale `NoktaylaBöl` yazın veya Edit panelindeki dizi açılır menüsünden **Point Divide**'ı seçin.
2. **Nesneye tıklayın** — çizgi, polyline, yay, daire, elips veya spline. Başka her şey reddedilir ve yeniden seçebilirsiniz.
3. **Parça sayısını yazın**, 2 ile 32767 arasında bir tam sayı. Yazarken noktalar nesne üzerinde önizlenir.
4. Yerleştirmek için **Enter** veya **Space**'e basın. Komut sona erer.

## Noktalar nereye düşer

- Aralık, açıyla değil nesne boyunca uzunlukla ölçülür; bu yüzden bir elips veya spline eşit uzunlukta parçalara kesilir. Polyline'ın yay parçaları eğrileri boyunca izlenir.
- Açık bir nesnede — çizgi, açık polyline, yay, kısmi elips veya açık spline — noktalar parçaların arasına gelir, asla uçlara değil: 5 parça 4 nokta verir.
- Kapalı bir nesnede — daire, kapalı polyline, tam elips veya kapalı spline — noktalar başlangıcından itibaren tam tur atar ve başlangıç da bir nokta alır: daire 0 açısından, kapalı polyline ilk köşesinden başlar. 5 parça 5 nokta verir.
- 2–32767 dışındaki bir sayı reddedilir: terminal nedenini söyler ve yeniden yazabilmeniz için siler.

Backspace son rakamı siler. Escape baştan başlar, böylece başka bir nesne seçebilirsiniz. Nesne seçilmeden önce Enter veya Space komutu bitirir.

---

*İlgili: sabit aralıkla noktalar için [Point Interval](../point-interval/), tek noktalar için [Point](../point/) ve noktalar yerine nesneleri tekrarlamak için [ArrayPolar](../array-polar/).*
