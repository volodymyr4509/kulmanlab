---
sidebar_position: 20
title: Chamfer Komutu — KulmanLab CAD'de İki Çizgi Arasına Düz Pah Kes
description: Chamfer komutu, iki Çizgi veya Çoklu Çizgi nesnesini düz köşegen bir kesimle birleştirir. İki mesafe belirtirsiniz — her nesne boyunca birer tane — komut her ikisini de bu noktalara kadar kırpar ve birleştirici bir çizgi ekler.
keywords: [CAD chamfer komutu, chamfer çizgi CAD, köşegen köşe kesimi, pah kes CAD, kulmanlab]
---

# Chamfer

`chamfer` komutu, iki [Çizgi](./line) veya [Çoklu Çizgi](./polyline) nesnesi arasında düz köşegen bir pah keser. Her nesne boyunca ne kadar geri kesileceğini (d1 ve d2) belirtirsiniz; komut her iki nesneyi de bu noktalara kadar kırpar ve aralarına birleştirici bir çizgi ekler.

Eşit mesafeler kullanmak simetrik 45° pah üretir; farklı mesafeler asimetrik bir pah oluşturur.

Chamfer, **Çizgi ve Çoklu Çizgi** nesneleri üzerinde çalışır.

## Chamfer Nasıl Kullanılır

1. Terminale `chamfer` yazın veya araç çubuğundaki **Chamfer** düğmesine tıklayın.
2. **Birinci pah mesafesini girin** (d1 — birinci nesne boyunca mesafe) ve **Enter** tuşuna basın.
3. **İkinci pah mesafesini girin** (d2 — ikinci nesne boyunca mesafe) ve **Enter** tuşuna basın.
4. **Birinci nesneyi tıklayın** — tıkladığınız kısım, herhangi bir kesişimin hangi tarafının korunduğunu belirler.
5. **İkinci nesnenin üzerine gelin** — kesik çizgili önizleme oluşan pah kesimini gösterir. İmleci korumak istediğiniz tarafa doğru hareket ettirin.
6. **Tıklayın** — her iki nesne kırpılır ve pah çizgisi eklenir.

```
  Önce (d1=5, d2=8):            Sonra:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Taraf Seçimi

İki çizgi birbirini kestiğinde, pah tıklama konumlarıyla tanımlanan köşeye uygulanır — her nesnenin **imleçle aynı taraftaki** kısmı korunur.

- Birinci nesnenin bir ucuna yakın tıklayarak o yarıyı seçin.
- İmleci ikinci nesnenin istenen yarısına getirin — kesik çizgili önizleme canlı olarak güncellenir.

Çoklu Çizgilerde, tıklama konumu çoklu çizginin hangi **segmentinin** katılacağını belirler; kesişim tarafındaki en yakın köşe noktası kırpılır.

## Komutun Oluşturduğu Nesneler

- Birinci nesnenin kesişime en yakın uç noktası (veya çoklu çizgi köşe noktası), kesişimden birinci nesne boyunca d1 mesafesindeki **T1** noktasına taşınır.
- İkinci nesnenin kesişime en yakın uç noktası (veya çoklu çizgi köşe noktası), kesişimden ikinci nesne boyunca d2 mesafesindeki **T2** noktasına taşınır.
- **T1**'den **T2**'ye yeni bir Çizgi nesnesi eklenir.

Eklenen çizgi mevcut çizgi kalınlığı, renk, katman ve çizgi türü ayarlarını devralır.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.` | Mevcut mesafe değerine rakam ekler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan mesafeyi onaylar ve ilerler |
| `Escape` | İptal eder ve sıfırlar |

## Desteklenen Nesneler

| Nesne | Desteklenir |
|--------|-----------|
| Çizgi | Evet |
| Çoklu Çizgi / Dikdörtgen | Evet |
| Yay, Daire, Elips | Hayır |
| Metin, Spline, Ölçü, Gösterge | Hayır |

## Chamfer - Fillet Karşılaştırması

| | Chamfer | Fillet |
|---|---------|--------|
| Köşe türü | Düz kesim | Yuvarlatılmış yay |
| Giriş | İki mesafe (d1, d2) | Tek yarıçap |
| Eklenen nesne | Çizgi | Yay |
| Desteklenen nesneler | Çizgiler ve Çoklu Çizgiler | Yalnızca Çizgiler |
