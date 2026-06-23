---
sidebar_position: 1
title: Grid & Snap — Menyelaraskan Gambar ke Grid Reguler di KulmanLab CAD
description: Toggle Grid dan Snap di KulmanLab CAD menampilkan grid referensi di kanvas dan mengunci gerakan kursor ke titik-titik grid. Jarak grid menyesuaikan secara otomatis dengan tingkat zoom saat ini sehingga selalu menampilkan nilai model yang bulat.
keywords: [CAD grid, snap ke grid, jarak grid, alat bantu menggambar, kulmanlab, titik grid, snap ortogonal]
---

# Grid & Snap

Dua tombol toggle di control bar memungkinkan Anda menampilkan grid referensi dan mengunci kursor ke perpotongannya saat menggambar.

| Tombol | Fungsi |
|--------|-------------|
| **Grid** | Menampilkan grid titik atau garis visual di kanvas |
| **Snap** | Mengunci kursor ke titik grid terdekat ketika tidak ada snap geometri yang lebih dekat |

Kedua toggle bersifat independen — Anda dapat menampilkan grid tanpa snap, snap tanpa menampilkan grid, atau menggunakan keduanya bersama-sama.

## Mengaktifkan grid dan snap

Klik **Grid** atau **Snap** di control bar toolbar. Status aktif disorot. Pengaturan dipertahankan antar sesi.

Ketika **Snap** diaktifkan, grid secara otomatis beralih tampilannya dari garis ke **titik** — titik-titik menandai titik tepat yang akan di-snap oleh kursor.

## Jarak grid adaptif

Jarak grid menyesuaikan secara otomatis saat Anda zoom sehingga garis grid selalu berjarak nyaman di layar (~40 px). Langkahnya selalu berupa angka "bagus" — kelipatan 1, 2, atau 5 pada pangkat sepuluh mana pun:

| Contoh zoom / skala model | Langkah grid |
|---------------------------|-----------|
| Zoom keluar (area luas) | 100, 500, 1000 … |
| Zoom sedang | 10, 20, 50 … |
| Zoom masuk (detail halus) | 1, 2, 5 … |
| Sangat dekat | 0.1, 0.2, 0.5 … |

Ini berarti setiap titik snap mendarat pada koordinat bulat di model space — tidak ada offset floating-point yang terakumulasi.

## Prioritas snap

**Snap titik akhir dan perpotongan selalu lebih diprioritaskan dari grid.** Kursor hanya snap ke titik grid ketika tidak dekat dengan kandidat snap geometri mana pun (titik akhir, titik tengah, pusat, atau perpotongan).

Ini berarti Anda dapat menggambar dengan snap ke grid diaktifkan dan masih snap secara tepat ke geometri yang ada ketika kursor melewati cukup dekat ke geometri tersebut. Grid adalah cadangan, bukan penggantian.

## Mode layout

- **Model space** — titik atau garis mengisi seluruh area kanvas yang terlihat.
- **Layout (paper) space** — titik dipotong ke persegi panjang kertas dan tidak meluas ke luarnya.
- **Di dalam viewport** — grid mengikuti sistem koordinat model pada skala viewport, sehingga titik sejajar dengan satuan model yang sama terlepas dari pembesaran viewport.

## Alur kerja khas

1. Aktifkan **Grid** dan **Snap** sebelum memulai gambar yang memerlukan jarak reguler.
2. Zoom ke tingkat di mana langkah grid sesuai dengan kenaikan yang Anda inginkan (mis. zoom sampai titik berjarak 10 satuan).
3. Gambar — kursor snap ke titik grid secara otomatis. Geometri yang ada masih snap secara normal ketika Anda berada dekat dengannya.
4. Matikan **Snap** ketika Anda memerlukan gerakan kursor bebas atau hanya ingin snap ke geometri.
