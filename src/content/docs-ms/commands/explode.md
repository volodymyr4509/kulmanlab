---
title: Arahan Explode — Pecahkan Polyline kepada Entiti Line dan Arc
description: Arahan Explode memecahkan polyline di tempatnya kepada entiti Line dan Arc individunya, satu bagi setiap segmen. Setiap kepingan mengekalkan ketebalan garis, warna, lapisan, dan jenis garis polyline sumber. Hanya berfungsi pada entiti Polyline.
keywords: [arahan explode CAD, letupkan polyline CAD, pecahkan polyline kepada garis, tukar polyline kepada line dan arc, kulmanlab]
group: edit
order: 16
---

# Explode

Arahan `Leraikan` memecahkan [Polyline](../polyline/) kepada entiti [Line](../line/) dan [Arc](../arc/) individunya — satu bagi setiap segmen, tepat di lokasi bucu polyline itu sendiri berada. Kepingan tersebut menggantikan polyline di tempatnya dan mengekalkan ketebalan garis, warna, lapisan, dan jenis garisnya.

Explode hanya berfungsi pada entiti **Polyline**.

## Menggunakan explode

Dua cara untuk menjalankannya, corak yang sama seperti [Delete](../delete/):

**Pilih dahulu, kemudian explode** — laluan paling pantas:

1. Pilih satu atau lebih polyline pada kanvas.
2. Taip `Leraikan` dalam terminal, atau klik butang **Explode** pada panel Edit.

Polyline yang dipilih akan di-explode serta-merta — tiada langkah pengesahan berasingan, kerana sesuatu telah dipilih.

**Aktifkan, kemudian pilih**:

1. Taip `Leraikan` atau klik butang bar alat tanpa apa-apa dipilih.
2. **Pilih polyline** — klik untuk togol, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Ruang** untuk mengesahkan dan meng-explode polyline yang dipilih.

Hanya polyline yang diambil semasa pemilihan — mengklik Line, Circle, atau mana-mana entiti lain tidak melakukan apa-apa, dan seretan kawasan mengabaikan segala-galanya kecuali polyline di dalam atau bersilang dengannya.

## Apa yang terhasil

Setiap segmen polyline menjadi entitinya sendiri:

- **Segmen lurus** menjadi **Line**.
- **Segmen lengkok** (daripada [pilihan Arc](../polyline/) Polyline) menjadi **Arc**, sepadan tepat dengan pusat, jejari, dan kayuhan lengkung asal.

Setiap Line dan Arc yang terhasil mewarisi **ketebalan garis, warna, lapisan, jenis garis, dan skala jenis garis** polyline sumber — tiada apa yang berubah pada rupa geometri, hanya bahawa ia kini beberapa entiti bebas dan bukannya satu polyline yang bersambung.

Explode boleh dibuat asal dalam satu langkah dengan [Undo](../undo/), sama seperti sebarang penyuntingan lain.

## Pemilihan semasa arahan

| Kaedah | Kelakuan |
|--------|----------|
| **Klik** | Togol polyline di bawah kursor masuk/keluar pemilihan; mengklik entiti bukan-polyline tidak melakukan apa-apa |
| **Seret ke kanan** (ketat) | Memilih hanya polyline yang sepenuhnya di dalam kotak |
| **Seret ke kiri** (bersilang) | Memilih polyline yang bersilang dengan sempadan kotak |
| **Enter** / **Ruang** | Mengesahkan dan meng-explode polyline yang dipilih |

## Entiti yang disokong

| Entiti | Disokong |
|--------|---------|
| Polyline / Rectangle | Ya |
| Line, Arc, Circle, Ellipse | Tidak — tiada apa untuk di-explode |
| Text, Spline, Dimension, Leader, Hatch | Tidak |
