---
title: Perintah Explode — Memecah Polyline Menjadi Entitas Line dan Arc
description: Perintah Explode memecah polyline menjadi entitas Line dan Arc individualnya, satu per segmen, di tempat. Setiap bagian mempertahankan ketebalan garis, warna, layer, dan jenis garis dari polyline sumber. Hanya bekerja pada entitas Polyline.
keywords: [perintah explode CAD, ledakkan polyline CAD, pecah polyline menjadi garis, ubah polyline menjadi line dan arc, kulmanlab]
group: edit
order: 16
---

# Explode

Perintah `Uraikan` memecah [Polyline](../polyline/) menjadi entitas [Line](../line/) dan [Arc](../arc/) individualnya — satu per segmen, tepat di tempat titik-titik sudut polyline itu sendiri berada. Bagian-bagian ini menggantikan polyline di tempat dan mempertahankan ketebalan garis, warna, layer, dan jenis garisnya.

Explode hanya bekerja pada entitas **Polyline**.

## Menggunakan explode

Dua cara untuk menjalankannya, pola yang sama seperti [Delete](../delete/):

**Pilih dulu, lalu explode** — jalan tercepat:

1. Pilih satu atau lebih polyline di kanvas.
2. Ketik `Uraikan` di terminal, atau klik tombol **Explode** di panel Edit.

Polyline yang dipilih langsung di-explode — tanpa langkah konfirmasi terpisah, karena sesuatu sudah dipilih.

**Aktifkan, lalu pilih**:

1. Ketik `Uraikan` atau klik tombol toolbar tanpa ada yang dipilih.
2. **Pilih polyline** — klik untuk toggle, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Spasi** untuk mengonfirmasi dan meng-explode polyline yang dipilih.

Hanya polyline yang tertangkap selama pemilihan — mengklik Line, Circle, atau entitas lain tidak melakukan apa pun, dan seretan area mengabaikan semuanya kecuali polyline di dalam atau yang berpotongan dengannya.

## Apa yang dihasilkan

Setiap segmen polyline menjadi entitasnya sendiri:

- **Segmen lurus** menjadi **Line**.
- **Segmen busur** (dari [opsi Arc](../polyline/) Polyline) menjadi **Arc**, sesuai persis dengan pusat, radius, dan sapuan kurva aslinya.

Setiap Line dan Arc yang dihasilkan mewarisi **ketebalan garis, warna, layer, jenis garis, dan skala jenis garis** dari polyline sumber — tidak ada yang berubah dari tampilan geometrinya, hanya saja sekarang menjadi beberapa entitas independen alih-alih satu polyline yang terhubung.

Explode dapat dibatalkan dalam satu langkah dengan [Undo](../undo/), seperti pengeditan lainnya.

## Pemilihan selama perintah

| Metode | Perilaku |
|--------|----------|
| **Klik** | Mengalihkan polyline di bawah kursor masuk/keluar dari pemilihan; mengklik entitas non-polyline tidak melakukan apa pun |
| **Seret ke kanan** (ketat) | Hanya memilih polyline yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (bersilangan) | Memilih polyline yang berpotongan dengan batas kotak |
| **Enter** / **Spasi** | Mengonfirmasi dan meng-explode polyline yang dipilih |

## Entitas yang didukung

| Entitas | Didukung |
|--------|-----------|
| Polyline / Rectangle | Ya |
| Line, Arc, Circle, Ellipse | Tidak — tidak ada yang perlu di-explode |
| Text, Spline, Dimension, Leader, Hatch | Tidak |
