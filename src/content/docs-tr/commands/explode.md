---
title: "Explode Komutu — bir polyline'ı veya bloğu parçalarına ayırma"
description: "Explode komutu bir polyline'ı Line ve Arc nesnelerine, bir blok referansını ise bloğunun çizdiği nesnelere yerinde ayırır. Parçalar tam olarak orijinal gibi görünür."
keywords: [CAD explode komutu, polyline patlatma CAD, polyline çizgilere ayırma, polyline'ı line ve arc'a dönüştürme, kulmanlab]
group: edit
order: 19
---

# Explode

`Patlat` komutu bir [Polyline](../polyline/)'ı kendi [Line](../line/) ve [Arc](../arc/) nesnelerine ayırır — segment başına bir tane, tam olarak polyline'ın kendi köşe noktalarının bulunduğu yerde. Parçalar polyline'ın yerini alır ve onun çizgi kalınlığını, rengini, katmanını ve çizgi tipini korur.

Explode, **Polyline** nesneleri ve **blok referansları** ile çalışır.

## Explode kullanımı

Çalıştırmanın iki yolu, [Delete](../delete/) ile aynı desen:

**Önce seç, sonra patlat** — en hızlı yol:

1. Tuval üzerinde bir veya daha fazla polyline seçin.
2. Terminale `Patlat` yazın veya Edit panelinin açılır menüsünden **Explode**'u seçin.

Seçili polyline'lar anında patlatılır — zaten bir şey seçili olduğundan ayrı bir onay adımı yoktur.

**Etkinleştir, sonra seç**:

1. Hiçbir şey seçili değilken `Patlat` yazın veya açılır menüden **Explode**'u seçin.
2. **Polyline'ları veya blok referanslarını seçin** — tıklayarak ekleyip çıkarın ya da alan seçmek için sürükleyin.
3. Seçili polyline'ları onaylamak ve patlatmak için **Enter** veya **Boşluk** tuşuna basın.

Seçim sırasında yalnızca polyline'lar ve blok referansları alınır — bir Line, Circle veya başka bir nesneye tıklamak hiçbir şey yapmaz ve alan sürüklemesi içindeki ya da kesişen diğer her şeyi yok sayar.

## Ortaya ne çıkar

Polyline'ın her segmenti kendi nesnesi haline gelir:

- Bir **düz segment**, bir **Line** olur.
- Bir **yay segmenti** (Polyline'ın [Arc seçeneğinden](../polyline/)), orijinal eğrinin merkezine, yarıçapına ve açıklığına tam olarak uyan bir **Arc** olur.

Ortaya çıkan her Line ve Arc, kaynak polyline'ın **çizgi kalınlığını, rengini, katmanını, çizgi tipini ve çizgi tipi ölçeğini** devralır — geometrinin görünümünde hiçbir şey değişmez, yalnızca artık bağlı tek bir polyline yerine birkaç bağımsız nesne olması değişir.

Bir **blok referansı**, bloğunun çizdiği nesnelere dönüşür ve bunlar referansın gösterdiği yere yerleşir. Bloğun gizli tuttuğu nesneler — dinamik bir bloğun diğer durumları — dışarıda kalır; her öznitelik değeriyle birlikte düz bir Text olur; ByBlock çizilen parçalar referansın rengini, 0 katmanındaki parçalar onun katmanını alır. İç içe bir blok kendi blok referansı olarak çıkar ve onu da ayrıca ayırabilirsiniz. X ve Y'de farklı ölçeklenmiş bir referans alınmaz, çünkü daireleri elipse dönüşmek zorunda kalırdı.

Patlatma, diğer her düzenleme gibi [Undo](../undo/) ile tek adımda geri alınabilir.

## Komut sırasında seçim

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki polyline'ı veya blok referansını seçime ekler ya da çıkarır; başka bir nesneye tıklamak hiçbir şey yapmaz |
| **Sağa sürükleme** (katı) | Yalnızca tamamen kutunun içindeki polyline'ları ve blok referanslarını seçer |
| **Sola sürükleme** (kesişen) | Kutunun sınırını kesen polyline'ları ve blok referanslarını seçer |
| **Enter** / **Space** | Onaylar ve seçimi ayırır |

## Desteklenen Nesneler

| Nesne | Desteklenir |
|--------|-----------|
| Polyline / Rectangle | Evet |
| Blok referansı | Evet, X ve Y'de farklı ölçeklenmemişse |
| Line, Arc, Circle, Ellipse | Hayır — patlatılacak bir şey yok |
| Text, Spline, Dimension, Leader, Hatch | Hayır |
