---
title: "ArrayPolar Komutu — KulmanLab CAD'de nesneleri bir merkez etrafında kopyalama"
description: "ArrayPolar komutu seçili nesneleri bir merkez noktası etrafında kopyalar — tam bir tura veya bir kısmına yayılmış belirli sayıda öğe, dönerken dönen veya kendi yönelimini koruyan kopyalarla."
keywords: ["CAD polar dizi", "dairesel desen CAD", "nesneleri bir nokta etrafında kopyalama CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

`ArrayPolar` komutu seçili nesnelerin kopyalarını bir merkez noktası etrafında, tam bir tura veya bir kısmına eşit olarak yayarak oluşturur. Orijinal ilk öğedir; diğer her öğe merkez etrafında döndürülmüş bir kopyadır — Rotate'i kapatırsanız yalnızca etrafında taşınmış.

## Polar dizi oluşturma

1. Nesneleri seçin, ardından terminale `KutupsalDizi` yazın veya araç çubuğundaki **Array Polar** düğmesine tıklayın. Seçim yapmadan başlatılırsa önce onları seçmenizi ister — onaylamak için **Enter** veya **Space** tuşuna basın.
2. Kopyaların etrafında döneceği **merkeze tıklayın** ya da kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. Diziyi gözden geçirin. Tüm kopyalar canlı önizlenir ve terminal `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` gösterir — değiştirmek için bir seçeneğin harfine basın.
4. Kopyaları oluşturmak için **Enter** veya **Space** tuşuna basın. Orijinaller yerinde kalır ve seçim temizlenir.

## Seçenekler

| Seçenek | Tuş | Etki |
|---|---|---|
| Items | `I` | Orijinal dahil kaç öğe olduğu — 2 ile 1024 arasında bir tam sayı. 6 ile başlar. |
| Angle | `A` | Bir öğeden sonrakine derece, saat yönünün tersine; negatif açı saat yönünde ilerler. En çok 180°. |
| Fill | `F` | İlk öğeden sonuncuya derece. 360 (varsayılan) tam bir turdur; daha küçük bir sayı öğeleri bir kısmına yayar. Negatif saat yönünde ilerler. En çok 360°. |
| Rotate | `R` | Açık (varsayılan): her kopya dönerken döner. Kapalı: her kopya yerine taşınır ve orijinalle aynı yöne bakar. Anında geçiş yapar — yazılacak sayı yoktur. |

- Angle ve Fill aynı şeyi söylemenin iki yoludur, bu yüzden birini değiştirmek diğerini yeniden ifade eder. Tam turda son öğe ilkinden bir adım önce durur; turun bir kısmında tam dolgu açısına oturur.
- Bir sayıyı değiştirmek için seçeneğinin harfine basın. İstem, geçerli değerle önceden doldurulur — değiştirmek için yazın, ardından **Enter** veya **Space** tuşuna basın; değişmeden onaylamak diziyi olduğu gibi bırakır.
- Items yalnızca tam sayı alır; Angle ve Fill ondalık ve saat yönü için başta `-` alır. 0 açı veya dolgu reddedilir, 180°'yi aşan açı veya 360°'yi aşan dolgu da — terminal nedenini söyler.
- Tüm öğelerin sığmayacağı kadar küçük bir Angle, yeri olmayanları düşürür ve terminal yeni sayıyı bildirir.
- Her varlık türünde çalışır: her kopya, tıpkı [Rotate](../rotate/) ve [Move](../move/) komutlarının yapacağı gibi, orijinalin merkez etrafında döndürülmüş veya taşınmış halidir.

## Klavye başvurusu

| Tuş | İşlem |
|---|---|
| `Enter` / `Space` | Seçimi, diziyi veya yazılan sayıyı onaylama |
| `I` `A` `F` `R` | Sayı yazarak Items, Angle veya Fill'i değiştirme; Rotate'i açıp kapatma |
| `0`–`9`, `.`, `-` | Sayıyı yazma (`.` ve `-` yalnızca Angle ve Fill için, `-` en başta) |
| `Backspace` | Son yazılan karakteri silme |
| `Escape` | İptal |
