---
sidebar_position: 18
title: Offset Komutu — KulmanLab CAD'de Nesnelerin Paralel Kopyalarını Oluştur
description: Offset komutu, bir çizgi, çoklu çizgi, daire, yay veya elipsin belirli bir mesafede paralel kopyasını oluşturur. Mesafe tıklamalar arasında korunur. Daireler ve yaylar için sıfır yarıçap hataya karşı korunur.
keywords: [CAD offset komutu, paralel çizgi kopyası CAD, nesneleri ofsetle CAD, ofset mesafesi CAD, kulmanlab]
---

# Offset

`offset` komutu, bir nesnenin eşit dik mesafede paralel kopyasını oluşturur. Önce mesafe girilir, ardından nesne tıklanır ve ofset tarafı belirtilir.

## Nasıl Kullanılır

1. Terminale `offset` yazın veya araç çubuğundaki **Offset** düğmesine basın.
2. **Ofset mesafesini girin** ve **Enter** tuşuna basın.
3. Ofseti yapılacak **nesneye tıklayın**.
4. **Tarafı tıklayın** — kopyanın nesnenin hangi tarafına yerleştirileceği.
5. Komut aktif kalır — daha fazla nesneye tıklayın veya çıkmak için **Escape** tuşuna basın.

## Nesne Başına Davranış

| Nesne | Ofset sonucu |
|-------|-------------|
| **Çizgi** | Dik mesafede eşit uzunlukta paralel çizgi |
| **Çoklu çizgi** | Paralel çoklu çizgi — her segment ofsete kayar, köşeler otomatik kesişir |
| **Daire** | Daha büyük veya daha küçük yarıçaplı eşmerkezli daire |
| **Yay** | Aynı açısal kapsama sahip eşmerkezli yay |
| **Elips** | Değiştirilmiş eksen oranıyla paralel elips |

## Sıfır Yarıçap Koruması

**Daireler** ve **Yaylar** için içe ofset yaparken: mesafe yarıçapı aşıyorsa (sonuç negatif yarıçap olacaksa), komut işlemi **yok sayar** ve nesne oluşturmaz.

## Mesafe Korunması

İlk ofset için mesafeyi girdikten sonra **korunur**. Nesneye sonraki tıklama aynı mesafeyi kullanır — tekrar girmenize gerek yoktur. Mesafeyi değiştirmek için yeni değer girin.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Mesafeye rakam ekler |
| `Backspace` | Son karakteri siler |
| `Enter` | Mesafeyi onaylar |
| `Escape` | İptal eder ve çıkar |

## Offset - Copy Karşılaştırması

| | Offset | Copy |
|---|--------|------|
| Kopya konumu | Kesin mesafede paralel | Vektöre göre kaydırılmış |
| Desteklenen türler | Line, Polyline, Circle, Arc, Ellipse | Tüm türler |
| Kopya geometrisi | Farklı olabilir (daireler/elipsler için) | Orijinalle özdeş |
