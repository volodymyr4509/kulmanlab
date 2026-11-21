---
title: "ObjectSnapSettings Komutu — Kontrol çubuğunun tüm ayarları"
description: "ObjectSnapSettings komutu, kontrol çubuğunun tüm ayarlarını — nesne yakalama, teğet yakalama, açı izleme, pinler, yazılan giriş, kement ve görünüm — tek pencerede açar; her biri listenin yanında küçük bir çizimle açıklanır."
keywords: ["nesne yakalama ayarları CAD", "teğet yakalama CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

`NesneYakalamaAyarları` komutu, kontrol çubuğunun tüm ayarlarını bir arada tutan bir pencere açar. Her ayar listenin yanında küçük bir çizimle açıklanır. Kontrol çubuğundaki dişli düğmesiyle açın ya da `NesneYakalamaAyarları` yazın. Burada bir ayarı değiştirmek, çubuktaki düğmesini çevirmekle aynıdır.

## Ayarlar

### İmlecin düştüğü yer

| Kontrol çubuğu | Ne yapar |
|---|---|
| `Snap` | İmleç en yakın ızgara noktasına atlar, böylece seçtiğiniz noktalar yuvarlak koordinatlara düşer. İmlecin yakınındaki bir nesneye yakalama yine önceliklidir. Izgara aralığı yakınlaştırmayla değişir. |
| `TANG` | Bir noktadan çizgi çizilirken imleci, çizginin bir daireye, yaya, elipse veya eğriye tam değeceği yere getirin; orada yakalanır. Çizgi, Çoklu çizgi ve diğer komutlarda ve bir çizginin ya da çoklu çizginin ucu sürüklenirken çalışır. |

### Çizerken kılavuzlar

| Kontrol çubuğu | Ne yapar |
|---|---|
| `ANGL` | İmleç son noktadan bu açılardan birine yaklaşınca o yönde kilitlenir; bu, kesikli bir ışınla gösterilir. Kilitliyken bir uzunluk yazıp Enter'a basarak noktayı o mesafeye koyun. |
| `Pins` | İmleci bir yakalama noktası üzerinde bir an bekleterek onu iğneleyin. İğnelenmiş nokta yatay ve dikey kılavuz çizgileri yayar; imleç bunlara ve kesiştikleri yerlere yakalanır. |
| `Dist` | Son iğnelenen nokta başlangıç noktası olur: imleç iğneden bir açıya kilitlenince bir uzunluk yazıp Enter'a basarak noktayı ondan o mesafeye koyun. Vektör iğneleri gerekir. |

### Giriş ve seçim

| Kontrol çubuğu | Ne yapar |
|---|---|
| `Rel` | Yazılan bir X,Y noktası, sanki @ ile başlıyormuş gibi son seçilen noktadan ölçülür. Geri tuşu, çizimin kendi koordinatlarındaki bir nokta için @ işaretini siler. Kapalıyken öteleme için @ işaretini kendiniz yazın. |
| `Lasso` | Dikdörtgen yerine istediğinizin etrafına serbest bir halka çizmek için boş alanda basılı tutup sürükleyin. Halkanın içine aldıkları seçilir. |

### Görüntü

| Kontrol çubuğu | Ne yapar |
|---|---|
| `Grid` | Arka plan ızgarasını gösterir. Aralığı yakınlaştırdıkça değişir. Kapatmak ızgaraya yakalamayı durdurmaz. |
| `LWT` | Çizgileri çizgi kalınlıklarıyla çizer, böylece ağır çizgiler daha kalın görünür. Kapalıyken her çizgi ince çizilir, bu da yoğun bir çizimi okumayı kolaylaştırabilir. |

**ANGL**'in adım için kendi satırı vardır: 10°, 20°, 30°, 45° veya 90°'yi seçin ya da **Özel**'ı seçip 1° ile 180° arasında istediğiniz açıyı yazın.

Teğet yakalama, göreli giriş ve kement varsayılan olarak kapalıdır. **Varsayılanlara sıfırla** tüm ayarları başlangıç durumuna döndürür.

---

*İlgili: [Vector Pins](../../interface/vector-pins/), [Mesafe takibi](../../interface/distance-tracking/), [Izgara ve Yakalama](../../interface/grid-snap/), [Koordinat girişi](../../interface/coordinate-entry/)*
