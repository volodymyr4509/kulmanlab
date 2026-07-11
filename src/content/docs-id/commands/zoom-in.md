---
title: "Perintah Zoom In — Memperbesar Viewport sebesar 1.5× per Langkah di KulmanLab CAD"
description: "Perintah Zoom In mengalikan tingkat zoom saat ini sebesar 1.5× dan langsung keluar. Dipusatkan pada titik tengah viewport. Rentang zoom 0.01–10.000. Gunakan roda gulir untuk zoom ke arah kursor sebagai gantinya."
keywords: [CAD zoom in, memperbesar viewport, perintah zoom CAD, langkah zoom 1.5x, kulmanlab]
group: navigate
order: 2
---

# Zoom In

Perintah `zoomin` mengalikan tingkat zoom saat ini sebesar **1.5×** dan langsung keluar, dipusatkan pada titik tengah viewport. Ini adalah setara toolbar dari satu ketikan roda gulir yang di-zoom ke arah pusat layar, bukan kursor.

## Memperbesar

Klik tombol toolbar **Zoom In** atau ketik `zoomin` di terminal. Zoom diterapkan seketika dan perintah keluar — tidak diperlukan klik pada kanvas.

## Cara langkah 1.5× bekerja

| Zoom saat ini | Setelah satu Zoom In |
|-------------|------------------|
| 1.00× | 1.50× |
| 1.50× | 2.25× |
| 10.00× | 15.00× |
| 6.667× | 10.000× (dibatasi) |

Tingkat zoom selalu ditampilkan di **sudut kanan bawah** kanvas di sebelah label `zoom`. Batas atas adalah **10.000×**; langkah lebih lanjut tidak melakukan apa-apa.

## Tombol zoom-in vs roda gulir

| | Tombol Zoom In | Roda gulir |
|---|--------------|-------------|
| Pusat zoom | Titik tengah viewport | Posisi kursor |
| Ukuran langkah | 1.5× per klik | ~1.1× per ketikan |
| Diperlukan aktivasi | Tidak | Tidak — selalu berfungsi |
| Terbaik untuk | Navigasi kasar | Zoom tepat yang ditargetkan pada kursor |

## Referensi keyboard

Tidak ada pintasan keyboard untuk perintah ini. Gunakan roda gulir sebagai gantinya — ini berfungsi kapan saja tanpa mengaktifkan perintah apa pun.

## Perintah tampilan terkait

| Perintah | Fungsi |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Membagi zoom sebesar 1.5× per langkah |
| [Fit](../fit/) | Mengatur ulang zoom untuk menampilkan semua entitas |
| [Pan](../pan/) | Menggeser viewport tanpa zoom |
