---
sidebar_position: 1
title: Izgara ve Yakalama — KulmanLab CAD Arayüz Referansı
description: Izgara görsel referans çizgileri sağlar; Yakalama imleci yakın nesne noktalarına kilitler. Her ikisi de bağımsız olarak etkinleştirilebilir. Desteklenen yakalama türleri — uç nokta, orta nokta, merkez, kesişim, dörtte birlik nokta.
keywords: [CAD ızgara, CAD nesne yakalama, snap CAD, endpoint snap, midpoint snap, kulmanlab]
---

# Izgara ve Yakalama

**Izgara** (Grid) — tuval üzerindeki görsel referans noktaları veya çizgileri. Geometriyi hizalamaya yardımcı olur ancak imleç hareketi üzerinde herhangi bir etkisi yoktur.

**Yakalama** (Snap) — imleç mevcut nesne noktalarına otomatik olarak kilitlenir: uç noktalar, orta noktalar, merkezler, kesişimler ve dörtte birlik noktalar.

## Etkinleştirme ve Devre Dışı Bırakma

| Özellik | Yöntem |
|---------|--------|
| Izgara aç/kapat | **Grid** düğmesine tıklayın veya `G` tuşuna basın |
| Yakalama aç/kapat | **Snap** düğmesine tıklayın veya `S` tuşuna basın |

Izgara ve Yakalama birbirinden bağımsızdır — her ikisini birlikte, birini veya hiçbirini etkinleştiremezsiniz.

## Yakalama Türleri

| Yakalama türü | Simge | Açıklama |
|---------------|-------|----------|
| **Uç nokta** | Kare | Çizgi veya çoklu çizgi segmentinin başlangıç/bitiş noktası |
| **Orta nokta** | Üçgen | Bir segmentin orta noktası |
| **Merkez** | Daire | Daire, yay veya elipsin merkezi |
| **Kesişim** | Çapraz | İki nesnenin kesişme noktası |
| **Dörtte birlik nokta** | Elmas | Daire/yay/elipsin 0°, 90°, 180°, 270° noktaları |

## Yakalama Nasıl Çalışır

Aktif bir çizim veya düzenleme komutu sırasında yakalama etkin olduğunda:

1. İmleci bir nesne noktasına yaklaştırın.
2. **Yakalama işareti** (simge) görünür ve nokta türünü gösterir.
3. İşaret göründüğünde tıklayın — imleç tam olarak yakalama noktasına kilitleniyor.

Yakalama işareti görünmüyorsa imleci biraz daha yavaş hareket ettirin veya nesneye daha da yaklaşın.
