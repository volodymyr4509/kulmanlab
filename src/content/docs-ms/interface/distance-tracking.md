---
title: Penjejakan jarak — Menaip panjang tepat dari titik yang disemat
description: Suis Dist membenarkan pin vektor terbaharu bertindak sebagai sauh yang diukur oleh penjejakan sudut, supaya anda boleh menaip panjang yang tepat dan meletakkan titik pada jarak dan sudut yang jitu daripada titik sedia ada — termasuk titik pertama sesuatu bentuk.
keywords: [input jarak CAD, menaip jarak tepat CAD, suis Dist, penjejakan jarak dari pin, penjejakan polar CAD, input jarak terus, kulmanlab]
group: interface
order: 3
---

# Penjejakan jarak

**Penjejakan jarak** membolehkan anda meletakkan titik dengan menaip panjang yang tepat dan bukan dengan mengklik. Ia dikawal oleh suis **Dist** pada bar kawalan, di sebelah [Pins](../vector-pins/) dan ANGL, dan **hidup secara lalai**, dengan tetapannya kekal antara sesi.

Apa yang ditambahnya sempit tetapi berguna: ia membenarkan **pin vektor terbaharu** bertindak sebagai sauh yang diukur oleh penjejakan sudut. Tanpanya, sesuatu perintah hanya boleh mengukur daripada titik yang telah dikumpulkannya sendiri — bermakna titik *pertama* sesuatu bentuk langsung tiada apa-apa untuk diukur daripadanya.

## Ketiga-tiga suis bekerja bersama

Penjejakan jarak tidak berdiri sendiri. Dua suis lain mesti berada dalam keadaan yang betul sebelum anda boleh menaip panjang:

| Suis | Peranan |
|------|---------|
| **Pins** | Membekalkan titik rujukan. Tuding kursor pada satu titik snap selama 500 ms untuk menyematnya — lihat [Vector Pins](../vector-pins/). |
| **ANGL** | Membekalkan sudut. Penjejakan jarak hanya tersedia setelah kursor terkunci pada sudut, jadi ANGL mesti ditetapkan pada satu langkah (10°, 20°, 30°, 45°, 90°) dan bukan Off. |
| **Dist** | Membenarkan pin digunakan sebagai sauh, bukan hanya titik milik perintah itu sendiri. |

Dengan Pins dan Dist dihidupkan tetapi ANGL pada **Off**, tiada apa-apa akan berlaku: tiada arah terkunci untuk mengukur panjang.

## Bagaimana Pins dan Dist terikat

Penjejakan jarak tidak bermakna apabila pin dimatikan, jadi kedua-dua suis bergerak seiring:

- **Menghidupkan Pins** turut **menghidupkan Dist**.
- **Mematikan Pins** turut **mematikan Dist**.
- **Menghidupkan Dist** menghidupkan **Pins** jika belum hidup.
- **Mematikan Dist** membiarkan **Pins tetap hidup**.

Jadi Dist tidak pernah aktif semasa Pins tidak aktif, tetapi anda boleh mengekalkan penjejakan pin untuk penjajaran sambil mematikan penjejakan jarak — berguna apabila anda mahukan garis rujukan tanpa kursor terkunci pada pin sedangkan anda berhasrat mengunci pada titik terakhir anda sendiri.

## Meletakkan titik pada jarak yang tepat

1. Hidupkan **Pins** dan **Dist**, dan tetapkan **ANGL** pada satu langkah sudut.
2. Mulakan perintah yang meminta titik — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) dan seterusnya.
3. **Sematkan titik rujukan**: tuding kursor pada titik snap sedia ada sehingga penanda bertukar menjadi segi empat penuh.
4. Jauhkan kursor daripada pin, lebih kurang pada sudut yang anda mahu. Apabila ia menghampiri salah satu langkah ANGL, arah itu **terkunci** — penunjuk penjejakan muncul daripada pin.
5. **Taip panjangnya** dan tekan **Enter** atau **Space**. Titik itu diletakkan tepat sejauh itu daripada pin, sepanjang sudut yang terkunci.

Gesaan pada terminal memberitahu bila anda boleh menaip. Semasa terkunci ia berbunyi:

```
pick start point or enter length: [ ]
```

dan nilai yang anda taip muncul di dalam kurungan.

## Mengapa titik pertama penting

Inilah kes yang jika tidak, mustahil dilakukan. Katakan satu garis perlu bermula tepat 250 unit di sebelah kanan sudut sedia ada:

1. Mulakan [Line](../../commands/line/).
2. Sematkan sudut sedia ada itu.
3. Gerak ke kanan sehingga arah terkunci pada 0°.
4. Taip `250`, tekan **Enter**.

Garis itu kini bermula 250 unit daripada sudut tersebut, tanpa geometri bantuan dan tanpa mengira. Tanpa Dist, perintah Line belum mengumpul sebarang titik, jadi tiada apa-apa *untuk mengukur* panjang yang ditaip — anda hanya boleh mengklik secara anggaran, atau melukis garis bantuan dan memadamkannya kemudian.

Bagi titik **kedua dan seterusnya**, perintah sudah mempunyai sauhnya sendiri (titik sebelumnya) dan itulah yang digunakan dahulu. Pin dirujuk sebagai pilihan lain hanya apabila sauh anda sendiri tidak terkunci, jadi menyemat sesuatu tidak merampas kuncian yang sudah anda ada.

## Menaip membekukan kuncian

Sebaik sahaja anda mula menaip digit, sauh berhenti berubah. Titik mana pun yang terkunci ketika digit pertama masuk kekal menjadi sauh sehingga anda mengesahkan atau mengosongkan medan — menggerakkan tetikus di pertengahan taipan tidak akan senyap-senyap memindahkan ukuran ke pin lain atau ke titik milik perintah itu.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|----------|
| `0`–`9`, `.` | Menambah pada panjang |
| `-` | Panjang negatif — membalikkan arah sepanjang sudut terkunci (sebagai aksara pertama sahaja) |
| `Backspace` | Memadam aksara terakhir |
| `Enter` / `Space` | Meletakkan titik pada panjang yang ditaip |
| `Escape` | Membatalkan perintah; kuncian dan nilai yang ditaip dikosongkan |

Menaip panjang adalah pilihan. Dengan arah terkunci anda masih boleh mengklik, dan titik itu diunjurkan ke sudut yang terkunci.

## Di mana ia berfungsi

Penjejakan jarak tersedia dalam setiap perintah yang meminta anda memilih titik:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) dan [ViewportCopy](../../commands/viewport-copy/).

## Lihat juga

- [Vector Pins](../vector-pins/) — menyemat titik dan menjejak sepanjang garis rujukannya
- [Grid & Snap](../grid-snap/) — alat bantu kejituan lain pada bar kawalan
- [Distance](../../commands/distance/) — mengukur jarak sedia ada dan bukan menaip yang baharu
