---
sidebar_position: 5
title: Vector Pins — KulmanLab CAD'de Sabitlenmiş Noktalardan Geçen Referans Çizgilerine Yakalanma
description: Vector Pins, bir yakalama noktasının üzerinde yarım saniye durarak onu sabitlemenizi, ardından imleci sabitlenmiş noktadan geçen kesikli yatay ve dikey referans çizgileri boyunca izlemenizi sağlar — yapım çizgileri olmadan yeni geometriyi mevcut noktalarla hizalayın.
keywords: [vector pins, nesne yakalama izleme, referans çizgileri, hizalama izleme, yakalama izleme CAD, yapım çizgileri, kulmanlab]
---

# Vector Pins

**Vector Pins**, yapım çizgileri çizmeden yeni geometriyi mevcut noktalarla hizalamanızı sağlayan bir çizim yardımcısıdır. Bir yakalama noktasının üzerinde yarım saniye durarak onu *sabitleyin* — pin, ardından görünmez yatay ve dikey referans çizgileri yansıtır ve imleç yaklaştığında bu çizgilere yakalanır. Masaüstü CAD uygulamalarındaki nesne yakalama izlemenin KulmanLab CAD karşılığıdır.

Özellik, kontrol çubuğundaki **Pins** düğmesiyle (Grid, Snap ve ANGL'nin yanında) kontrol edilir. **Varsayılan olarak açıktır** ve ayar oturumlar arasında korunur.

## Bir noktayı sabitleme

1. Nokta isteyen bir komut başlatın — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) vb.
2. İmleci mevcut geometrinin bir yakalama noktasının üzerine getirin — uç nokta, orta nokta veya merkez işareti.
3. **İmleci 500 ms boyunca sabit tutun.** İşaret, dolu vurgu renkli bir **kareye** dönüşür — nokta artık sabitlenmiştir.
4. İhtiyacınız kadar noktayı sabitlemek için tekrarlayın. Her pin, referans çizgilerini yansıtmaya devam eder.

Sabitleme komut dışında da çalışır: seçili bir nesnenin **tutamacının** üzerinde durmak onu aynı şekilde sabitler.

## Referans çizgileri boyunca izleme

Her sabitlenmiş nokta, tam koordinatlarından geçen iki görünmez referans çizgisi yansıtır — biri **yatay**, biri **dikey**. İmleci hareket ettirdikçe:

- Bir pinin dikey çizgisine **12 px** mesafede imleç ona yakalanır: pinin içinden tüm görünüm boyunca kesikli vurgu renkli bir çizgi çizilir ve **X işareti** yakalanan konumu gösterir. X koordinatınız artık *tam olarak* pinin X'idir.
- Aynısı, pinin Y koordinatı için yatay çizgiye de uygulanır.
- Her iki yönelimden birer çizginin yakınında — hatta **iki farklı pinden** bile — imleç bunların **kesişimine** yakalanır ve her iki kesikli çizgi de gösterilir. Bu, bir noktayı tam olarak (A pininin X'i, B pininin Y'si) konumuna yerleştirir.

```
                    ┆ (kesikli, ■ pininin dikey çizgisi)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← imleç kesişime yakalandı:
                    ┆    X pin B'den, Y pin A'dan
                    ┆
                    ■ pin B
```

Yakalanan koordinatlar doğrudan pinden alınır, bu nedenle hizalama tamdır — yuvarlama veya kayan nokta sapması yoktur.

## Yakalama önceliği

Normal geometri yakalamaları — uç nokta, orta nokta, merkez ve kesişim — pin referans çizgilerine göre **önceliklidir**. İmleç bir nokta yakalamasına referans çizgisinden daha yakınsa, nokta yakalaması kazanır. Pin izleme, geometriler arasındaki boşlukları doldurur; geometrinin kendisine yakalanmayı asla engellemez.

## Açı kilidiyle birleştirme

Vector pins, açı izlemeyle (kontrol çubuğundaki **ANGL** düğmesi) birlikte çalışır. Bir komut imleci açı izleme ışınına kilitlediğinde:

- İmleç kilitli yönle sınırlı kalır.
- Pin yakalama, **kilitli ışının pin referans çizgileriyle kesişimlerini** hedeflemeye geçer (yalnızca ışın başlangıcının önünde).

Bu, *"son noktamdan 45° yönü, şu dairenin merkezinin yüksekliğini nerede keser?"* gibi soruları yanıtlar — açıyı kilitleyin, imleç kesişim noktasına oturur. Işın yakalama, açı kilidi olan her komutta çalışır: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader ve ViewportCopy.

## Pin yaşam döngüsü

Pinler kalıcı işaretler için değil, eldeki işlem için tasarlanmıştır. Tüm pinler şu durumlarda temizlenir:

| Olay | Neden |
|------|-------|
| **Yeni bir komut** başlatıldığında | Her işlem temiz bir referans kümesiyle başlar |
| **Escape** tuşuna basıldığında | Standart her-şeyi-iptal-et davranışı |
| **Pins** düğmesi kapatıldığında | Özelliği kapatmak durumunu da kaldırır |
| **Model ve kağıt alanı** arasında geçişte | Pin koordinatları tek bir alana özgüdür |

Tek bir komut içinde sabitleyebilir, çizebilir, tekrar sabitleyebilir ve devam edebilirsiniz — pinler, Polyline gibi çok noktalı bir komutun her tıklamasında hayatta kalır.

## Tipik iş akışı

Bir dairenin merkezinin tam altından başlayan bir çizgi çizmek:

1. `line` yazın (veya Line düğmesine tıklayın).
2. Dairenin **merkez işaretinin** üzerinde yarım saniye durun — vurgu renkli bir kareye dönüşür.
3. İmleci aşağı hareket ettirin: dairenin dikeyinin yakınında imleç kesikli referans çizgisine kilitlenir.
4. Tıklayın — çizgi tam olarak dairenin X koordinatında başlar.
5. Çizgiye her zamanki gibi devam edin; pin sonraki noktalar için kullanılabilir kalır.

## Notlar

- 500 ms bekleme, imlecin ulaşabildiği her yakalama işaretinde çalışır — komut ortasında beliren yakalama noktaları dahil.
- Zaten sabitlenmiş bir noktanın üzerinde durmak hiçbir şey yapmaz; üzerinde durarak sabitliği kaldırma yoktur. Pinleri **Escape** ile veya **Pins**'i kapatarak temizleyin.
- Referans çizgileri için yakalama mesafesi, normal nokta yakalamanın kullandığı aynı 12 ekran pikselidir; bu nedenle his her yakınlaştırma düzeyinde tutarlıdır.
- Sabitlenmiş noktalar, normal yakalama işaretleri yerine vurgu renkli kareler olarak çizilir.
