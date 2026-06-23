---
sidebar_position: 6
title: Perintah Delete — Menghapus Entitas dari Gambar di KulmanLab CAD
description: Perintah Delete menghapus entitas yang dipilih secara permanen (dapat dibatalkan). Entitas yang dipilih sebelumnya langsung dihapus tanpa langkah konfirmasi. Tombol Delete berfungsi sebagai pintasan global bahkan tanpa mengaktifkan perintah. Mendukung seleksi klik tunggal dan area.
keywords: [perintah hapus CAD, menghapus entitas CAD, menghapus objek CAD, tombol delete CAD, undo hapus CAD, kulmanlab]
---

# Delete

Perintah `delete` menghapus entitas yang dipilih dari gambar. Penghapusan dicatat dalam riwayat [Undo](./undo) dan dapat dibalik hingga 20 langkah. Tidak ada dialog "konfirmasi hapus" terpisah — konfirmasi adalah satu kali penekanan tombol.

## Dua cara menghapus

**Pra-pilih, lalu hapus** — jalur tercepat:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `delete` di terminal, klik tombol toolbar **Delete**, **atau tekan tombol `Delete`** secara langsung.

Entitas langsung dihapus — tidak ada langkah konfirmasi tambahan.

**Aktifkan, lalu pilih**:

1. Ketik `delete` atau klik tombol toolbar (tanpa ada yang dipilih).
2. **Pilih objek** — klik untuk mengalihkan, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter**, **Space**, atau **Delete** untuk mengonfirmasi dan menghapus entitas yang dipilih.

## Pintasan tombol Delete

Tombol `Delete` pada keyboard bertindak sebagai **pintasan global** — jika ada entitas yang saat ini dipilih, menekannya langsung menghapusnya, bahkan tanpa membuka perintah Delete di terminal. Ini adalah alur kerja penghapusan satu langkah tercepat:

```
Klik entitas → tekan tombol Delete → selesai
```

## Seleksi selama perintah

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor masuk/keluar dari seleksi |
| **Seret ke kanan** (ketat) | Memilih hanya entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Memilih entitas yang berpotongan dengan batas kotak |
| **Enter** / **Space** / **Delete** | Mengonfirmasi dan menghapus entitas yang dipilih |

## Memulihkan entitas yang dihapus

Penghapusan dapat dibatalkan dengan perintah [Undo](./undo) (ketik `undo` atau gunakan tombol toolbar). Hingga **20 langkah** dapat dibalik per file, dan riwayat bertahan setelah halaman dimuat ulang. Jika Anda telah melebihi 20 penghapusan tanpa menyimpan, penghapusan sebelumnya tidak dapat dipulihkan.

## Entitas yang didukung

Delete bekerja pada setiap tipe entitas — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, dan semua lainnya.
