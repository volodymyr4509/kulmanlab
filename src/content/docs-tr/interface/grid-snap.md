---
title: Izgara ve Yakalama — KulmanLab CAD'de Çizimleri Düzenli Izgaraya Hizala
description: KulmanLab CAD'deki Izgara ve Yakalama geçiş düğmeleri tuvale referans ızgara katmanı ekler ve imleç hareketini ızgara noktalarına kilitler. Izgara aralığı, her zaman yuvarlak model değerleri gösterecek şekilde mevcut yakınlaştırma seviyesine otomatik olarak uyum sağlar.
keywords: [CAD ızgara, ızgaraya yakalama, ızgara aralığı, çizim yardımcıları, kulmanlab, ızgara noktaları, dikdörtgensel yakalama]
group: interface
order: 1
---

# Izgara ve Yakalama

Kontrol çubuğundaki iki geçiş düğmesi, referans ızgara katmanı eklemenizi ve çizim sırasında imleci kesişim noktalarına kilitlemenizi sağlar.

| Düğme | Ne yapar |
|--------|-------------|
| **Grid** | Tuvalde görsel nokta veya çizgi ızgarası gösterir |
| **Snap** | Daha yakın bir geometri yakalama noktası olmadığında imleci en yakın ızgara noktasına kilitler |

İki geçiş bağımsızdır — ızgarayı yakalamadan gösterebilir, ızgarayı göstermeden yakalama yapabilir veya ikisini birlikte kullanabilirsiniz.

## Izgara ve Yakalamayı Etkinleştirme

Kontrol çubuğu araç çubuğunda **Grid** veya **Snap**'e tıklayın. Etkin durum vurgulanır. Ayarlar oturumlar arasında kalıcı olarak korunur.

**Snap** etkinleştirildiğinde, ızgara ekranını otomatik olarak çizgilerden **noktalara** geçirir — noktalar imlecin yakalanacağı tam noktaları işaretler.

## Uyarlamalı Izgara Aralığı

Yakınlaştırdıkça ızgara aralığı otomatik olarak ayarlanır, böylece ızgara çizgileri ekranda her zaman rahat bir mesafede olur (~40 px). Adım her zaman "güzel" bir sayıdır — herhangi bir on kuvvetinde 1, 2 veya 5'in katı:

| Örnek yakınlaştırma / model ölçeği | Izgara adımı |
|---------------------------|-----------|
| Uzaklaştırılmış (geniş alan) | 100, 500, 1000 … |
| Orta yakınlaştırma | 10, 20, 50 … |
| Yakınlaştırılmış (ince ayrıntı) | 1, 2, 5 … |
| Çok yakın | 0,1, 0,2, 0,5 … |

Bu, her yakalama noktasının model uzayında yuvarlak koordinata denk geleceği anlamına gelir — kayan nokta kaymaları birikmez.

## Yakalama Önceliği

**Uç nokta ve kesişim yakalamaları her zaman ızgaradan önce gelir.** İmleç yalnızca herhangi bir geometri yakalama adayına (uç nokta, orta nokta, merkez veya kesişim) yakın olmadığında ızgara noktasına yakalanır.

Bu, ızgaraya yakalama etkinken çizim yapabileceğiniz ve imlecin yeterince yakınından geçtiğinde mevcut geometriye hâlâ kesin olarak yakalanabileceğiniz anlamına gelir. Izgara bir yedektir, geçersiz kılma değil.

## Yerleşim Modu

- **Model uzayı** — noktalar veya çizgiler görünür tuval alanının tamamını doldurur.
- **Yerleşim (kağıt) uzayı** — noktalar kağıt dikdörtgenine kırpılır ve dışına çıkmaz.
- **Görünüm penceresi içinde** — ızgara, görünüm penceresinin ölçeğindeki model koordinat sistemini izler, bu nedenle noktalar görünüm penceresi büyütmesinden bağımsız olarak aynı model birimleriyle hizalanır.

## Tipik İş Akışı

1. Düzenli aralık gerektiren bir çizime başlamadan önce **Grid** ve **Snap**'i açın.
2. Izgara adımının istenen artışınıza eşleştiği seviyeye yakınlaştırın (örneğin noktalar 10 birim arayla olana kadar yakınlaştırın).
3. Çizin — imleç otomatik olarak ızgara noktalarına yakalanır. Yakınında olduğunuzda mevcut geometri yine normal şekilde yakalanır.
4. Serbest imleç hareketi gerektiğinde veya yalnızca geometriye yakalamak istediğinizde **Snap**'i kapatın.
