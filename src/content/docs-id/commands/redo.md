---
sidebar_position: 2
title: Perintah Redo — Menerapkan Ulang Aksi yang Dibatalkan di KulmanLab CAD
description: Perintah Redo menerapkan ulang aksi terakhir yang dibalik oleh Undo, maju melalui tumpukan riwayat. Redo hanya tersedia setelah Undo dan dihapus pada saat aksi menggambar baru apa pun dilakukan.
keywords: [perintah redo CAD, riwayat redo CAD, menerapkan ulang aksi CAD, undo redo CAD, redo browser persisten, kulmanlab]
---

# Redo

Perintah `redo` maju melalui riwayat undo, menerapkan ulang aksi yang dibalik oleh [Undo](../undo/). Redo hanya tersedia ketika Anda telah mundur dengan Undo dan belum membuat perubahan baru.

## Cara menerapkan ulang

- Ketik `redo` di terminal, atau
- Klik tombol toolbar **Redo**.

Setiap pemanggilan menerapkan ulang satu aksi yang sebelumnya dibatalkan. Panggil berulang kali untuk maju melalui semua entri redo yang tersedia.

## Perilaku tumpukan redo

| Detail | Perilaku |
|--------|-----------|
| Tersedia setelah | Satu atau lebih langkah [Undo](../undo/) |
| Dihapus oleh | **Aksi menggambar baru apa pun** — menambah, mengedit, atau menghapus entitas |
| Penyimpanan | Browser, per file — bertahan setelah halaman dimuat ulang (selama tidak ada aksi baru yang dilakukan sebelum dimuat ulang) |
| Kedalaman maksimum | Hingga 20 entri (pool yang sama dengan Undo) |

Setelah entitas baru digambar, dihapus, atau dimodifikasi, tumpukan redo dihapus dan entri-entri tersebut tidak dapat dipulihkan. Hanya aksi yang dibatalkan yang belum digantikan oleh pekerjaan baru yang dapat di-redo.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Arah | Maju **melalui entri yang dibatalkan** | Mundur **melalui riwayat** |
| Tersedia ketika | Setelah setidaknya satu Undo, tanpa aksi baru yang diambil | Setidaknya satu aksi yang dicatat ada |
| Dihapus oleh | Aksi menggambar baru apa pun | Tidak ada |

Tombol Redo toolbar dinonaktifkan ketika tidak ada entri yang perlu di-redo. Gunakan [Undo](../undo/) terlebih dahulu untuk membuat entri redo.
