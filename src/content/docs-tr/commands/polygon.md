---
title: "Polygon Komutu — KulmanLab CAD'de merkezden veya kenardan düzgün çokgen çizme"
description: "Polygon komutu, merkezinden ve bir yarıçaptan ya da tek bir kenardan 3 ile 1024 kenarlı düzgün bir çokgen çizer. Sonuç kapalı bir LWPOLYLINE olduğundan tüm polyline düzenleme komutları uygulanır."
keywords: ["CAD çokgen komutu", "düzgün çokgen çizme CAD", "altıgen sekizgen beşgen CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

`polygon` komutu 3 ile 1024 kenarlı düzgün bir çokgen çizer — tüm kenarlar ve açılar eşittir. Terminale `polygon` yazın. Sonuç **kapalı bir `LWPOLYLINE`** olduğundan yerleştirildikten sonra diğer her [Polyline](../polyline/) gibi davranır ve tüm polyline düzenlemeleri geçerlidir.

## Çokgen çizme

1. Terminale `polygon` yazın ve **kenar sayısını** girin — 3 ile 1024 arasında bir tam sayı — ardından **Enter** veya **Space** tuşuna basın. İstem, en son kullandığınız sayıyla önceden doldurulur (ilk seferde 4); değiştirmek için yazmaya başlayın. Başka her şey reddedilir ve düzeltmeniz için istemde kalır.
2. **Merkeze tıklayın** ya da kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın. Bunun yerine bir kenardan başlamak için önce `E` tuşuna basın (aşağıya bakın).
3. **Yarıçapa tıklayın** — çokgen canlı önizlenir — ya da yarıçapı yazıp **Enter** veya **Space** tuşuna basın.
4. Çokgen yerleştirilir ve komut sona erer.

## Seçenekler

| Seçenek | Tuş | Etki |
|---|---|---|
| Edge | `E` | İlk nokta, merkez yerine bir kenarın bir ucu olur. İkinci ucu seçin; kalan köşeler saat yönünün tersine, ilk uçtan ikinciye giden kenarın solunda oluşturulur. Merkeze dönmek için `E` tuşuna tekrar basın. |
| Inside | `I` | Varsayılan olarak açıktır ve bir çokgenden diğerine korunur. Açık: köşeler verilen yarıçaplı daire üzerindedir. Kapalı: çokgen o dairenin dışındadır ve her kenarın ortası daire üzerindedir. |

- Tıklama, bir köşeyi (Inside açık) ya da bir kenarın ortasını (Inside kapalı) tam imlecin olduğu yere koyar; yani imleç yönelimi de belirler.
- Yazılan yarıçapın nişan alacağı bir yön yoktur, bu yüzden çokgen en alt kenarı yatay olacak şekilde durur — açı kilidi açıksa kilitli açıyı izler.
- Her seçenek kendi adımında sunulur ve bir sayı yazılırken bile değiştirilebilir.

## Klavye başvurusu

| Tuş | İşlem |
|---|---|
| `0`–`9`, `.` | Kenar sayısını, yarıçapı, bir koordinatı veya uzunluğu yazma |
| `E` | Edge'i açma veya kapatma (ilk nokta adımı) |
| `I` | Inside'ı açma veya kapatma (yarıçap adımı) |
| `Enter` / `Space` | Kenar sayısını veya yarıçapı onaylama |
| `Escape` | İptal |

## DXF — LWPOLYLINE nesnesi

Çokgen, her köşe için bir tepe noktası olan kapalı bir `LWPOLYLINE` olarak kaydedilir; DXF'te özel bir çokgen türü yoktur. Tüm özellikler — tepe noktası koordinatları, renk, katman, çizgi türü, çizgi türü ölçeği ve kalınlık — kayıpsız aktarılır ve her DXF görüntüleyici onu kapalı bir polyline olarak okur.
