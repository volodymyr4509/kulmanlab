---
title: Pelacakan jarak — Mengetik panjang persis dari titik yang disematkan
description: Tombol Dist membuat pin vektor terbaru berperan sebagai jangkar tempat pelacakan sudut mengukur, sehingga Anda bisa mengetik panjang persis dan menempatkan titik pada jarak dan sudut yang tepat dari titik yang sudah ada — termasuk titik pertama sebuah bentuk.
keywords: [masukan jarak CAD, mengetik jarak persis CAD, tombol Dist, pelacakan jarak dari pin, pelacakan polar CAD, masukan jarak langsung, kulmanlab]
group: interface
order: 3
---

# Pelacakan jarak

**Pelacakan jarak** memungkinkan Anda menempatkan titik dengan mengetik panjang persis alih-alih mengeklik. Ia dikendalikan tombol **Dist** di bilah kontrol, di sebelah [Pins](../vector-pins/) dan ANGL, dan **aktif secara bawaan**, dengan pengaturannya bertahan antar sesi.

Yang ditambahkannya sempit tetapi berguna: ia membuat **pin vektor terbaru** berperan sebagai jangkar tempat pelacakan sudut mengukur. Tanpa itu, sebuah perintah hanya bisa mengukur dari titik yang sudah dikumpulkannya sendiri — artinya titik *pertama* sebuah bentuk sama sekali tidak punya acuan untuk diukur.

## Ketiga tombol bekerja bersama

Pelacakan jarak tidak berdiri sendiri. Dua tombol lain harus berada dalam keadaan yang tepat sebelum Anda bisa mengetik panjang:

| Tombol | Peran |
|--------|-------|
| **Pins** | Menyediakan titik acuan. Arahkan kursor ke titik snap selama 500 ms untuk menyematkannya — lihat [Vector Pins](../vector-pins/). |
| **ANGL** | Menyediakan sudut. Pelacakan jarak baru tersedia setelah kursor terkunci pada sudut, jadi ANGL harus disetel ke sebuah langkah (10°, 20°, 30°, 45°, 90°) dan bukan Off. |
| **Dist** | Mengizinkan pin dipakai sebagai jangkar, bukan hanya titik milik perintah itu sendiri. |

Dengan Pins dan Dist menyala tetapi ANGL pada **Off**, tak akan terjadi apa-apa: tidak ada arah terkunci untuk mengukur panjang.

## Bagaimana Pins dan Dist terhubung

Pelacakan jarak tak berarti apa-apa bila pin dimatikan, jadi kedua tombol berjalan seiring:

- **Menyalakan Pins** ikut **menyalakan Dist**.
- **Mematikan Pins** ikut **mematikan Dist**.
- **Menyalakan Dist** menyalakan **Pins** jika belum menyala.
- **Mematikan Dist** membiarkan **Pins tetap menyala**.

Jadi Dist tak pernah aktif selagi Pins nonaktif, tetapi Anda bisa mempertahankan pelacakan pin untuk perataan sambil mematikan pelacakan jarak — berguna bila Anda ingin garis acuan tanpa kursor terkunci ke pin padahal Anda hendak mengunci ke titik terakhir Anda sendiri.

## Menempatkan titik pada jarak persis

1. Nyalakan **Pins** dan **Dist**, lalu setel **ANGL** ke sebuah langkah sudut.
2. Mulai perintah yang meminta titik — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), dan seterusnya.
3. **Sematkan titik acuan**: arahkan kursor ke titik snap yang ada sampai penandanya berubah menjadi kotak penuh.
4. Jauhkan kursor dari pin, kira-kira pada sudut yang Anda inginkan. Ketika mendekati salah satu langkah ANGL, arahnya **terkunci** — indikator pelacakan muncul dari pin.
5. **Ketik panjangnya** lalu tekan **Enter** atau **Space**. Titik ditempatkan tepat sejauh itu dari pin, sepanjang sudut yang terkunci.

Prompt di terminal memberi tahu kapan Anda bisa mengetik. Saat terkunci, isinya:

```
pick start point or enter length: [ ]
```

dan nilai yang Anda ketik muncul di dalam kurung siku.

## Mengapa titik pertama penting

Inilah kasus yang tanpa fitur ini mustahil. Misalkan sebuah garis harus dimulai tepat 250 satuan di sebelah kanan sudut yang sudah ada:

1. Mulai [Line](../../commands/line/).
2. Sematkan sudut yang sudah ada itu.
3. Bergeraklah ke kanan sampai arahnya terkunci pada 0°.
4. Ketik `250`, tekan **Enter**.

Garisnya kini dimulai 250 satuan dari sudut tersebut, tanpa geometri bantu dan tanpa hitung-hitungan. Tanpa Dist, perintah Line belum mengumpulkan titik apa pun, jadi tak ada apa-apa yang bisa dijadikan *acuan pengukuran* bagi panjang yang diketik — Anda hanya bisa mengeklik kira-kira, atau menarik garis bantu lalu menghapusnya kemudian.

Untuk titik **kedua dan seterusnya**, perintah sudah punya jangkarnya sendiri (titik sebelumnya), dan itulah yang dipakai lebih dulu. Pin baru dipertimbangkan sebagai alternatif ketika jangkar Anda sendiri tidak terkunci, jadi menyematkan sesuatu tidak membajak kuncian yang sudah Anda miliki.

## Mengetik membekukan kuncian

Begitu Anda mulai mengetik angka, jangkarnya berhenti berubah. Titik mana pun yang terkunci saat angka pertama masuk tetap menjadi jangkar sampai Anda mengonfirmasi atau mengosongkan isian — menggerakkan tetikus di tengah pengetikan tidak akan diam-diam memindahkan pengukuran ke pin lain atau ke titik milik perintah itu sendiri.

## Rujukan papan ketik

| Tombol | Tindakan |
|--------|----------|
| `0`–`9`, `.` | Menambah ke panjang |
| `-` | Panjang negatif — membalik arah sepanjang sudut terkunci (hanya sebagai karakter pertama) |
| `Backspace` | Menghapus karakter terakhir |
| `Enter` / `Space` | Menempatkan titik pada panjang yang diketik |
| `Escape` | Membatalkan perintah; kuncian dan nilai yang diketik dibersihkan |

Mengetik panjang bersifat opsional. Dengan arah terkunci Anda tetap bisa mengeklik, dan titiknya diproyeksikan ke sudut yang terkunci.

## Di mana berlakunya

Pelacakan jarak tersedia di setiap perintah yang meminta Anda menunjuk titik:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) dan [ViewportCopy](../../commands/viewport-copy/).

## Lihat juga

- [Vector Pins](../vector-pins/) — menyematkan titik dan melacak sepanjang garis acuannya
- [Grid & Snap](../grid-snap/) — alat bantu presisi lainnya di bilah kontrol
- [Distance](../../commands/distance/) — mengukur jarak yang sudah ada alih-alih mengetik yang baru
