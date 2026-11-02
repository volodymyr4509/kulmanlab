---
title: "Perintah Explode — pecahkan polyline atau blok kepada bahagiannya"
description: "Perintah Explode memecahkan polyline kepada entiti Line dan Arc, atau rujukan blok kepada entiti yang dilukis bloknya, di tempatnya. Kepingannya kelihatan tepat seperti asal."
keywords: [arahan explode CAD, letupkan polyline CAD, pecahkan polyline kepada garis, tukar polyline kepada line dan arc, kulmanlab]
group: edit
order: 19
---

# Explode

Arahan `Leraikan` memecahkan [Polyline](../polyline/) kepada entiti [Line](../line/) dan [Arc](../arc/) individunya — satu bagi setiap segmen, tepat di lokasi bucu polyline itu sendiri berada. Kepingan tersebut menggantikan polyline di tempatnya dan mengekalkan ketebalan garis, warna, lapisan, dan jenis garisnya.

Explode berfungsi pada entiti **Polyline** dan **rujukan blok**.

## Menggunakan explode

Dua cara untuk menjalankannya, corak yang sama seperti [Delete](../delete/):

**Pilih dahulu, kemudian explode** — laluan paling pantas:

1. Pilih satu atau lebih polyline pada kanvas.
2. Taip `Leraikan` dalam terminal, atau pilih **Explode** daripada juntai bawah dalam panel Edit.

Polyline yang dipilih akan di-explode serta-merta — tiada langkah pengesahan berasingan, kerana sesuatu telah dipilih.

**Aktifkan, kemudian pilih**:

1. Taip `Leraikan` atau pilih **Explode** daripada juntai bawah tanpa apa-apa dipilih.
2. **Pilih polyline atau rujukan blok** — klik untuk menogol, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Ruang** untuk mengesahkan dan meng-explode polyline yang dipilih.

Semasa pemilihan hanya polyline dan rujukan blok diambil — mengklik Line, Circle atau entiti lain tidak berbuat apa-apa, dan seretan kawasan mengabaikan semua yang lain di dalam atau yang merentasinya.

## Apa yang terhasil

Setiap segmen polyline menjadi entitinya sendiri:

- **Segmen lurus** menjadi **Line**.
- **Segmen lengkok** (daripada [pilihan Arc](../polyline/) Polyline) menjadi **Arc**, sepadan tepat dengan pusat, jejari, dan kayuhan lengkung asal.

Setiap Line dan Arc yang terhasil mewarisi **ketebalan garis, warna, lapisan, jenis garis, dan skala jenis garis** polyline sumber — tiada apa yang berubah pada rupa geometri, hanya bahawa ia kini beberapa entiti bebas dan bukannya satu polyline yang bersambung.

**Rujukan blok** menjadi entiti yang dilukis bloknya, diletakkan di tempat rujukan memaparkannya. Entiti yang disembunyikan blok — keadaan lain blok dinamik — ditinggalkan; setiap atribut menjadi Text biasa dengan nilainya; kepingan yang dilukis ByBlock mengambil warna rujukan, dan kepingan pada lapisan 0 mengambil lapisannya. Blok bersarang keluar sebagai rujukan blok tersendiri, yang boleh anda pecahkan pula. Rujukan yang diskala berbeza pada X dan Y tidak diambil, kerana bulatannya terpaksa menjadi elips.

Explode boleh dibuat asal dalam satu langkah dengan [Undo](../undo/), sama seperti sebarang penyuntingan lain.

## Pemilihan semasa arahan

| Kaedah | Kelakuan |
|--------|----------|
| **Klik** | Memasukkan atau mengeluarkan polyline atau rujukan blok di bawah kursor daripada pilihan; mengklik entiti lain tidak berbuat apa-apa |
| **Seret ke kanan** (ketat) | Memilih hanya polyline dan rujukan blok yang sepenuhnya di dalam kotak |
| **Seret ke kiri** (silang) | Memilih polyline dan rujukan blok yang memotong sempadan kotak |
| **Enter** / **Space** | Mengesahkan dan memecahkan pilihan |

## Entiti yang disokong

| Entiti | Disokong |
|--------|---------|
| Polyline / Rectangle | Ya |
| Rujukan blok | Ya, kecuali diskala berbeza pada X dan Y |
| Line, Arc, Circle, Ellipse | Tidak — tiada apa untuk di-explode |
| Text, Spline, Dimension, Leader, Hatch | Tidak |
