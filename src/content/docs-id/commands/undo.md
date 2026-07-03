---
sidebar_position: 1
title: Perintah Undo — Mundur Melalui Riwayat Gambar di KulmanLab CAD
description: Perintah Undo membalik aksi menggambar terakhir satu langkah per waktu. Hingga 20 langkah disimpan per file dan dipertahankan di browser setelah halaman dimuat ulang. Melakukan aksi baru setelah undo menghapus tumpukan redo.
keywords: [perintah undo CAD, riwayat undo CAD, membalik aksi CAD, langkah undo CAD, undo browser persisten, kulmanlab]
---

# Undo

Perintah `undo` membalik perubahan terakhir pada gambar — satu langkah per pemanggilan. Setiap penambahan, penghapusan, atau pengeditan entitas dicatat sebagai entri riwayat terpisah. Undo mundur melalui entri-entri ini dalam urutan terbalik.

## Cara membatalkan

- Ketik `undo` di terminal, atau
- Klik tombol toolbar **Undo**.

Setiap pemanggilan membalik satu aksi yang dicatat. Panggil berulang kali untuk mundur lebih jauh.

## Perilaku riwayat

| Detail | Nilai |
|--------|-------|
| Langkah per file | Hingga **20** |
| Penyimpanan | Browser (IndexedDB / localStorage), per nama file |
| Bertahan setelah halaman dimuat ulang | Ya — riwayat dipulihkan saat Anda membuka kembali file |
| Aksi baru setelah undo | Menghapus semua entri redo di depan posisi saat ini |
| Entri tertua saat penuh | Dihapus untuk memberi ruang bagi perubahan terbaru |

Setiap mutasi entitas dicatat: menggambar entitas baru, menghapus entitas, mengedit titik akhir melalui grip, menerapkan Move, Rotate, Scale, Mirror, Trim, Extend, dan Offset semuanya membuat entri riwayat.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Arah | Mundur **melalui riwayat** | Maju **melalui entri yang dibatalkan** |
| Tersedia ketika | Setidaknya satu aksi yang dicatat ada | Setidaknya satu Undo telah dilakukan dan tidak ada aksi baru yang diambil |
| Dihapus oleh | Tidak ada — riwayat terakumulasi sampai batas 20 langkah | Aksi menggambar baru apa pun |

Gunakan [Redo](../redo/) untuk menerapkan ulang aksi yang dibatalkan. Tombol toolbar dinonaktifkan ketika arah yang bersangkutan tidak tersedia.
