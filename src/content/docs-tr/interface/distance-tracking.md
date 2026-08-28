---
title: Mesafe takibi — Sabitlenmiş bir noktadan tam uzunluk yazma
description: Dist düğmesi, en son vektör iğnesinin açı takibinin ölçüm yaptığı çıpa olmasını sağlar; böylece tam bir uzunluk yazıp mevcut bir noktadan kesin mesafe ve açıda bir nokta yerleştirirsiniz — bir şeklin ilk noktası dahil.
keywords: [mesafe girişi CAD, tam uzunluk yazma CAD, Dist düğmesi, iğnelerden mesafe takibi, kutupsal takip CAD, doğrudan mesafe girişi, kulmanlab]
group: interface
order: 3
---

# Mesafe takibi

**Mesafe takibi**, tıklamak yerine tam bir uzunluk yazarak nokta yerleştirmenizi sağlar. Kontrol çubuğundaki, [Pins](../vector-pins/) ve ANGL'nin yanındaki **Dist** düğmesiyle denetlenir; **varsayılan olarak açıktır** ve ayar oturumlar arasında korunur.

Kattığı şey dar ama işe yarar: **en son vektör iğnesinin**, açı takibinin ölçüm yaptığı çıpa olmasına izin verir. Bu olmadan bir komut yalnızca kendisinin daha önce topladığı bir noktadan ölçebilir — yani bir şeklin *ilk* noktasının ölçüm yapacağı hiçbir şey yoktur.

## Üç düğme birlikte çalışır

Mesafe takibi kendi başına yetmez. Bir uzunluk yazabilmeniz için diğer iki düğmenin de doğru durumda olması gerekir:

| Düğme | Görevi |
|-------|--------|
| **Pins** | Referans noktasını sağlar. Bir yakalama noktasının üzerinde 500 ms bekleyerek iğneleyin — bkz. [Vector Pins](../vector-pins/). |
| **ANGL** | Açıyı sağlar. Mesafe takibi ancak imleç açıya kilitlendiğinde kullanılabilir hâle gelir; bu yüzden ANGL, Off yerine bir adıma (10°, 20°, 30°, 45°, 90°) ayarlanmış olmalıdır. |
| **Dist** | İğnenin, yalnızca komutun kendi noktası yerine çıpa olarak kullanılmasına izin verir. |

Pins ve Dist açık ama ANGL **Off** durumundaysa hiçbir şey olmaz: uzunluğun ölçüleceği kilitli bir yön yoktur.

## Pins ile Dist nasıl bağlıdır

İğneler kapalıyken mesafe takibinin anlamı kalmaz, bu yüzden iki düğme birlikte hareket eder:

- **Pins'i açmak** **Dist'i de açar**.
- **Pins'i kapatmak** **Dist'i de kapatır**.
- **Dist'i açmak**, henüz açık değilse **Pins'i açar**.
- **Dist'i kapatmak** **Pins'i açık bırakır**.

Yani Dist, Pins kapalıyken hiçbir zaman etkin olamaz; ama hizalama için iğne takibini koruyup mesafe takibini kapatabilirsiniz — kendi son noktanıza kilitlenmek isterken imlecin bir iğneye kilitlenmesini istemeden referans çizgileri istiyorsanız kullanışlıdır.

## Tam mesafede bir nokta yerleştirme

1. **Pins** ve **Dist**'i açın, **ANGL**'yi bir açı adımına ayarlayın.
2. Nokta isteyen bir komut başlatın — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) ve benzeri.
3. **Bir referans noktası iğneleyin**: imleci mevcut bir yakalama noktasının üzerinde, işaret dolu bir kareye dönüşene kadar bekletin.
4. İmleci iğneden, kabaca istediğiniz açıda uzaklaştırın. ANGL adımlarından birine yaklaştığında yön **kilitlenir** — iğneden bir takip göstergesi belirir.
5. **Uzunluğu yazın** ve **Enter** ya da **Space** tuşuna basın. Nokta, kilitli açı boyunca iğneden tam o kadar uzağa yerleştirilir.

Terminaldeki istem, ne zaman yazabileceğinizi söyler. Kilitliyken şöyle görünür:

```
pick start point or enter length: [ ]
```

ve yazdığınız değer köşeli parantezlerin içinde belirir.

## İlk nokta neden önemli

Aksi hâlde imkânsız olacak durum budur. Diyelim ki bir çizginin, mevcut bir köşeden tam 250 birim sağda başlaması gerekiyor:

1. [Line](../../commands/line/) komutunu başlatın.
2. Mevcut köşeyi iğneleyin.
3. Yön 0°'de kilitlenene kadar sağa doğru ilerleyin.
4. `250` yazıp **Enter** tuşuna basın.

Çizgi artık köşeden 250 birim uzakta bir noktadan başlıyor — yardımcı geometri yok, hesap yok. Dist olmadan Line komutu henüz hiçbir nokta toplamamıştır, dolayısıyla yazılan uzunluğun ölçüleceği bir *dayanak* yoktur; yalnızca yaklaşık tıklayabilir ya da bir yardımcı çizgi çizip sonra silebilirdiniz.

**İkinci ve sonraki** noktalarda komutun zaten kendi çıpası (önceki nokta) vardır ve önce o kullanılır. İğneye yalnızca kendi çıpanız kilitli değilken bir seçenek olarak başvurulur; yani bir şeyi iğnelemek, hâlihazırda sahip olduğunuz kilidi gasp etmez.

## Yazmak kilidi dondurur

Rakam yazmaya başladığınız anda çıpa değişmeyi bırakır. İlk rakam geldiğinde hangi nokta kilitliyse, onaylayana veya alanı temizleyene kadar çıpa o kalır — yazarken fareyi oynatmak, ölçümü sessizce başka bir iğneye ya da komutun kendi noktasına kaydırmaz.

## Klavye başvurusu

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Uzunluğa ekler |
| `-` | Negatif uzunluk — kilitli açı boyunca yönü ters çevirir (yalnızca ilk karakter olarak) |
| `Backspace` | Son karakteri siler |
| `Enter` / `Space` | Noktayı yazılan uzunlukta yerleştirir |
| `Escape` | Komutu iptal eder; kilit ve yazılan değer temizlenir |

Uzunluk yazmak isteğe bağlıdır. Yön kilitliyken yine de tıklayabilirsiniz; nokta kilitli açıya izdüşürülür.

## Nerede çalışır

Mesafe takibi, nokta seçmenizi isteyen her komutta kullanılabilir:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) ve [ViewportCopy](../../commands/viewport-copy/).

## Ayrıca bakınız

- [Vector Pins](../vector-pins/) — noktaları iğneleme ve referans çizgileri boyunca takip
- [Grid & Snap](../grid-snap/) — kontrol çubuğundaki diğer hassasiyet yardımcıları
- [Distance](../../commands/distance/) — yeni bir uzunluk yazmak yerine mevcut bir mesafeyi ölçme
