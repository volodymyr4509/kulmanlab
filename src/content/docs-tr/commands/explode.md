---
title: Explode Komutu — Bir Polyline'ı Line ve Arc Nesnelerine Ayırma
description: Explode komutu bir polyline'ı, kendi yerinde, segment başına bir tane olacak şekilde kendi Line ve Arc nesnelerine ayırır. Her parça, kaynak polyline'ın çizgi kalınlığını, rengini, katmanını ve çizgi tipini korur. Yalnızca Polyline nesneleriyle çalışır.
keywords: [CAD explode komutu, polyline patlatma CAD, polyline çizgilere ayırma, polyline'ı line ve arc'a dönüştürme, kulmanlab]
group: edit
order: 16
---

# Explode

`Patlat` komutu bir [Polyline](../polyline/)'ı kendi [Line](../line/) ve [Arc](../arc/) nesnelerine ayırır — segment başına bir tane, tam olarak polyline'ın kendi köşe noktalarının bulunduğu yerde. Parçalar polyline'ın yerini alır ve onun çizgi kalınlığını, rengini, katmanını ve çizgi tipini korur.

Explode yalnızca **Polyline** nesneleriyle çalışır.

## Explode kullanımı

Çalıştırmanın iki yolu, [Delete](../delete/) ile aynı desen:

**Önce seç, sonra patlat** — en hızlı yol:

1. Tuval üzerinde bir veya daha fazla polyline seçin.
2. Terminale `Patlat` yazın veya Edit panelindeki **Explode** düğmesine tıklayın.

Seçili polyline'lar anında patlatılır — zaten bir şey seçili olduğundan ayrı bir onay adımı yoktur.

**Etkinleştir, sonra seç**:

1. Hiçbir şey seçili değilken `Patlat` yazın veya araç çubuğu düğmesine tıklayın.
2. **Polyline'ları seçin** — açmak/kapatmak için tıklayın veya alan seçmek için sürükleyin.
3. Seçili polyline'ları onaylamak ve patlatmak için **Enter** veya **Boşluk** tuşuna basın.

Seçim sırasında yalnızca polyline'lar toplanır — bir Line, Circle veya başka herhangi bir nesneye tıklamak hiçbir şey yapmaz ve alan sürüklemesi, içindeki veya kesişen polyline'lar dışında her şeyi yok sayar.

## Ortaya ne çıkar

Polyline'ın her segmenti kendi nesnesi haline gelir:

- Bir **düz segment**, bir **Line** olur.
- Bir **yay segmenti** (Polyline'ın [Arc seçeneğinden](../polyline/)), orijinal eğrinin merkezine, yarıçapına ve açıklığına tam olarak uyan bir **Arc** olur.

Ortaya çıkan her Line ve Arc, kaynak polyline'ın **çizgi kalınlığını, rengini, katmanını, çizgi tipini ve çizgi tipi ölçeğini** devralır — geometrinin görünümünde hiçbir şey değişmez, yalnızca artık bağlı tek bir polyline yerine birkaç bağımsız nesne olması değişir.

Patlatma, diğer her düzenleme gibi [Undo](../undo/) ile tek adımda geri alınabilir.

## Komut sırasında seçim

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki polyline'ı seçime ekler/çıkarır; polyline olmayan bir nesneye tıklamak hiçbir şey yapmaz |
| **Sağa sürükleme** (katı) | Yalnızca kutunun tamamen içindeki polyline'ları seçer |
| **Sola sürükleme** (kesişen) | Kutu sınırını kesen polyline'ları seçer |
| **Enter** / **Boşluk** | Seçili polyline'ları onaylar ve patlatır |

## Desteklenen Nesneler

| Nesne | Desteklenir |
|--------|-----------|
| Polyline / Rectangle | Evet |
| Line, Arc, Circle, Ellipse | Hayır — patlatılacak bir şey yok |
| Text, Spline, Dimension, Leader, Hatch | Hayır |
