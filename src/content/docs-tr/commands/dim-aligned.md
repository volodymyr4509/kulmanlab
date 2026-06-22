---
sidebar_position: 27
title: Dimension Aligned Komutu — KulmanLab CAD'de Herhangi Bir Açıda Gerçek Mesafe Ölçüleri
description: Dimension Aligned komutu, iki nokta arasındaki gerçek düz çizgi mesafesini ölçer. Ölçü çizgisi, p1→p2 çizgisine paralel olarak herhangi bir açıda uzanır — yalnızca yatay veya dikeyyle sınırlı olan Dimension Linear'den farklıdır. DXF'de DIMENSION nesnesi olarak tam round-trip.
keywords: [CAD dimension aligned, dimaligned, köşegen ölçü CAD, gerçek mesafe ölçüsü, açılı ölçü CAD, kulmanlab]
---

# Dimension Aligned

`dimaligned` komutu, iki nokta arasındaki **gerçek düz çizgi mesafesini** ölçen bir ölçü yerleştirir. Ölçü çizgisi iki noktayı birleştiren çizgiye paralel uzanır, dolayısıyla herhangi bir açıda olabilir. Bu, yalnızca yatay veya dikeyle sınırlı olan [Dimension Linear](./dim-linear)'den temel farkıdır.

## Hizalı Ölçünün Anatomisi

```
     ●  p2
    /|
   / |  (uzatma çizgisi 2, ölçü çizgisine dik)
  /  |
 /←5.00→/
/  /
●  /  (uzatma çizgisi 1, ölçü çizgisine dik)
p1
```

- **Uzatma çizgileri** — ölçü çizgisine dik, ölçülen her noktadan çizilir.
- **Ölçü çizgisi** — p1→p2'ye paralel, imleç konumuna göre bir tarafa kaydırılmış.
- **Değer** — gerçek Öklid mesafesi `|p1 – p2|`.

## Hizalı Ölçü Yerleştirme

1. Terminale `dimaligned` yazın veya araç çubuğundaki **Dimension Aligned** düğmesine tıklayın.
2. **Birinci uzatma çizgisi başlangıç noktasını tıklayın** (p1) veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **İkinci uzatma çizgisi başlangıç noktasını tıklayın** (p2). Koordinat girişi burada da çalışır.
4. **İmleci bir tarafa hareket ettirin** — ölçü çizgisinin dikey kaydırma miktarını ayarlamak için.
5. **Tıklayın** — ya da kesin yerleştirme için kaydırma mesafesi yazıp **Enter** tuşuna basın.

## Yazılan Kaydırma Mesafesi

Yerleştirme sırasında bir sayı yazarak ölçü çizgisini p1→p2 çizgisinden tam dikey mesafeye sabitleyebilirsiniz:

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.` | Kaydırmaya rakam ekler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Yazılan kaydırmaya yerleştirir |

İmleç tarafı, ölçü çizgisinin hangi tarafta görüneceğini belirler.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır (p1/p2 aşamaları) veya kaydırma mesafesi (yerleştirme aşaması) |
| `,` | X'i kilitler ve Y girişine geçer (p1/p2 aşamaları) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Yazılan koordinatı veya kaydırmayı onaylar |
| `Escape` | İptal eder |

## Dimension Aligned - Dimension Linear Karşılaştırması

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Ölçü çizgisi açısı | p1→p2'ye paralel — herhangi bir açı | Her zaman yatay veya dikey |
| Ölçtüğü | Gerçek Öklid mesafesi | Yalnızca X veya Y bileşeni |
| Y/D yönlendirme kilidi | Hayır | Evet — `H` ve `V` tuşları |
| En iyi | Köşegen özellikler, açılı kesimler | Dikdörtgensel yerleşimler, ızgaraya hizalı parçalar |

## Zincirleme Ölçüler

Bu ölçünün ikinci uzatma çizgisinden devam eden ölçüler eklemek için [Dimension Continue](./dim-continue) kullanın — bu hizalı ölçüyle aynı ölçüm açısına kilitlenir.

## DXF — DIMENSION Nesnesi (hizalı tür)

Hizalı ölçüler `dimType = 1` (hizalı) ile `DIMENSION` nesnesi olarak kaydedilir. Uzatma çizgisi başlangıç noktaları, ölçü çizgisi konumu, metin konumu, ölçülen değer, döndürme, ok stili ve tüm görüntüleme bayrakları kayıpsız round-trip yapar.
