---
sidebar_position: 3
title: "Perintah Zoom Out — Mengurangi Zoom Viewport sebesar 1.5× per Langkah di KulmanLab CAD"
description: "Perintah Zoom Out membagi tingkat zoom saat ini sebesar 1.5× dan langsung keluar. Dipusatkan pada titik tengah viewport. Gunakan roda gulir untuk zoom out ke arah kursor untuk kontrol yang lebih halus."
keywords: [CAD zoom out, mengurangi zoom viewport, perintah zoom out, gambaran umum CAD, langkah zoom 1.5x, kulmanlab]
---

# Zoom Out

Perintah `zoomout` membagi tingkat zoom saat ini sebesar **1.5×** (setara dengan mengalikan dengan ~0.667) dan langsung keluar, dipusatkan pada titik tengah viewport. Ini adalah kebalikan dari [Zoom In](../zoom-in/).

## Memperkecil

Klik tombol toolbar **Zoom Out** atau ketik `zoomout` di terminal. Zoom diterapkan seketika dan perintah keluar — tidak diperlukan klik pada kanvas.

## Cara langkah 1.5× bekerja

| Zoom saat ini | Setelah satu Zoom Out |
|-------------|-------------------|
| 1.50× | 1.00× |
| 2.25× | 1.50× |
| 10.00× | 6.67× |
| 0.015× | 0.01× (dibatasi) |

Tingkat zoom selalu ditampilkan di **sudut kanan bawah** kanvas. Batas bawah adalah **0.01×**; langkah lebih lanjut tidak melakukan apa-apa.

## Tombol zoom-out vs roda gulir

| | Tombol Zoom Out | Roda gulir |
|---|----------------|-------------|
| Pusat zoom | Titik tengah viewport | Posisi kursor |
| Ukuran langkah | 1.5× per klik | ~1.1× per ketikan |
| Diperlukan aktivasi | Tidak | Tidak — selalu berfungsi |
| Terbaik untuk | Mundur untuk melihat lebih banyak konteks | Zoom-out yang mulus dan ditambatkan pada kursor |

## Referensi keyboard

Tidak ada pintasan keyboard untuk perintah ini. Gunakan roda gulir sebagai gantinya — ini berfungsi kapan saja tanpa mengaktifkan perintah apa pun.

## Perintah tampilan terkait

| Perintah | Fungsi |
|---------|-------------|
| [Zoom In](../zoom-in/) | Mengalikan zoom sebesar 1.5× per langkah |
| [Fit](../fit/) | Mengatur ulang zoom untuk menampilkan semua entitas |
| [Pan](../pan/) | Menggeser viewport tanpa zoom |
