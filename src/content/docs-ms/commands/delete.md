---
title: Arahan Delete — Buang Entiti daripada Lukisan dalam KulmanLab CAD
description: Arahan Delete membuang entiti yang dipilih secara kekal (boleh dibatalkan). Entiti yang dipra-pilih dipadam serta-merta tanpa langkah pengesahan. Kekunci Delete berfungsi sebagai pintasan global walaupun tanpa mengaktifkan arahan. Menyokong pemilihan klik tunggal dan kawasan.
keywords: [arahan padam CAD, buang entiti CAD, padamkan objek CAD, kekunci padam CAD, batal padam CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Arahan `delete` membuang entiti yang dipilih daripada lukisan. Pemadaman direkodkan dalam sejarah [Undo](../undo/) dan boleh diterbalikkan dengan sehingga 20 langkah. Tiada dialog "sahkan padam" yang berasingan — pengesahan adalah satu tekanan kekunci sahaja.

## Dua cara untuk memadam

**Pra-pilih, kemudian padam** — laluan terpantas:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `delete` dalam terminal, klik butang bar alat **Delete**, **atau terus tekan kekunci `Delete`**.

Entiti dibuang serta-merta — tiada langkah pengesahan tambahan.

**Aktifkan, kemudian pilih**:

1. Taip `delete` atau klik butang bar alat (tanpa apa-apa yang dipilih).
2. **Pilih objek** — klik untuk togel, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter**, **Space**, atau **Delete** untuk mengesahkan dan membuang entiti yang dipilih.

## Pintasan kekunci Delete

Kekunci `Delete` pada papan kekunci bertindak sebagai **pintasan global** — jika mana-mana entiti sedang dipilih, menekannya memadamnya serta-merta, walaupun tanpa membuka arahan Delete dalam terminal. Ini adalah aliran kerja pemadaman satu langkah terpantas:

```
Klik entiti → tekan kekunci Delete → selesai
```

## Pemilihan semasa arahan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor masuk/keluar dari pemilihan |
| **Seret kanan** (ketat) | Memilih hanya entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Memilih entiti yang bersilang dengan sempadan kotak |
| **Enter** / **Space** / **Delete** | Mengesahkan dan memadam entiti yang dipilih |

## Memulihkan entiti yang dipadam

Pemadaman boleh dibatalkan dengan arahan [Undo](../undo/) (taip `undo` atau gunakan butang bar alat). Sehingga **20 langkah** boleh diterbalikkan setiap fail, dan sejarah berterusan merentasi muat semula halaman. Jika anda telah melebihi 20 pemadaman tanpa menyimpan, pemadaman lebih awal tidak dapat dipulihkan.

## Entiti yang disokong

Delete berfungsi pada setiap jenis entiti — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, dan semua yang lain.
