---
sidebar_position: 28
title: Dimension Continue Komutu — KulmanLab CAD'de Ölçü Zinciri Devam Ettir
description: Dimension Continue komutu, önceki ölçünün uç noktasına yeni ölçü ekleyerek zincir ölçü oluşturur. Yeni ölçü çizgisini öncekiyle otomatik hizalar. Her segment DXF'de bağımsız DIMENSION nesnesidir.
keywords: [CAD dimension continue komutu, zincir ölçü CAD, ölçü devam ettirme CAD, temel ölçü CAD, kulmanlab]
---

# Dimension Continue

`dim continue` komutu, önceki ölçünün bittiği yerden başlayan yeni bir ölçü ekler — tek bir ölçü çizgisinde ardışık ölçüler zinciri oluşturur.

## Zinciri Başlatma

Dim Continue, **son yerleştirilen ölçüyü** (Dim Linear veya Dim Aligned) otomatik olarak alır — önceki ölçüye tıklamaya gerek yoktur. Henüz ölçü yoksa önce Dim Linear veya Dim Aligned ile bir tane yerleştirin.

## Zincir Nasıl Devam Ettirilir

1. [Dim Linear](./dim-linear) veya [Dim Aligned](./dim-aligned) ile ilk ölçüyü yerleştirin.
2. `dim continue` yazın veya **Dim Continue** düğmesine basın.
3. **Sonraki yakalama noktasını tıklayın** — öncekinin uç noktasından bu yeni noktaya yeni ölçü eklenir.
4. Zincire daha fazla ölçü eklemek için tıklamaya devam edin.
5. Tamamlamak için **Escape** veya **Enter** tuşuna basın.

## Zincir Ölçü Şeması

```
  ├──── 30 ────┼──── 45 ────┼──── 25 ────┤
  ●             ●            ●            ●
  (1.)         (2.)         (3.)        (4. tıklama)
```

Tüm ölçüler aynı ölçü çizgisinde hizalanır. Her sonraki ölçü, bir öncekinin uç noktasını kendi başlangıç noktası olarak kullanır.

## Önceki Ölçüden Miras Alınanlar

| Öznitelik | Miras alınır mı? |
|-----------|-----------------|
| Yönelim (yatay/dikey) | Evet |
| Ölçü çizgisi yüksekliği | Evet |
| Katman | Evet |
| Metin stili | Evet |

## Ölçüm Yönünü Sabitleme

Temel ölçü Dim Linear ise:
- Yatay zinciri sabitlemek için **H** tuşuna basın.
- Dikey zinciri sabitlemek için **V** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `H` | Yatay yönü sabitler |
| `V` | Dikey yönü sabitler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya zinciri tamamlar |
| `Escape` | Zinciri tamamlar |

## Dim Continue - Yeni Ölçüler Karşılaştırması

| | Dim Continue | Yeni Dim Linear |
|---|-------------|-----------------|
| Başlangıç noktası | Otomatik — öncekinin uç noktası | Elle seçilir |
| Hizalama | Aynı ölçü çizgisiyle otomatik | Elle ayarlanır |
| En iyi | Delik sıraları, eşit aralıklı özellikler | Rastgele yerleştirme |

## DXF — DIMENSION Nesneleri

Zincirdeki her segment DXF'de **bağımsız** `DIMENSION` nesnesi olarak saklanır. Aralarındaki ilişki yalnızca konuma (paylaşılan yakalama noktaları) dayalıdır, gruplama değil.
