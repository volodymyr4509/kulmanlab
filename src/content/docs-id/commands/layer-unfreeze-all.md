---
title: LayerUnfreezeAll — Mencairkan Semua Layer di KulmanLab CAD
description: Perintah LayerUnfreezeAll menghapus flag beku pada setiap layer dalam gambar dalam satu langkah.
keywords: [layer unfreeze, mencairkan semua layer CAD, manajemen layer kulmanlab]
group: layer
order: 4
---

# LayerUnfreezeAll

Perintah `LayerUnfreezeAll` menghapus flag beku pada **setiap layer** dalam gambar secara instan. Tidak diperlukan seleksi atau konfirmasi — perintah berjalan dan selesai dalam satu langkah.

## Penggunaan

Ketik `LayerUnfreezeAll` di terminal atau klik tombol toolbar **Unfreeze All** (ikon matahari). Semua layer yang beku langsung menjadi terlihat.

## Kapan digunakan

Biasanya digunakan setelah [LayerIsolate](../layer-isolate/) untuk memulihkan semua layer ke kondisi terlihat normal.

## Detail perilaku

- Berlaku untuk semua layer terlepas dari kondisi saat ini.
- Tidak memengaruhi flag terkunci atau plot — hanya flag beku yang diubah.
- Perintah selesai segera tanpa prompt.
