---
title: Perintah Fit — Membingkai Semua Entitas dalam Viewport dengan Satu Klik di KulmanLab CAD
description: Perintah Fit menghitung kotak pembatas semua entitas dan menyesuaikan zoom dan pan sehingga setiap entitas terlihat dengan margin kecil. Klik ganda tombol mouse tengah memicu Fit tanpa mengaktifkan perintah.
keywords: [CAD fit view, zoom untuk fit, bingkai semua entitas, perintah fit CAD, zoom kotak pembatas, kulmanlab]
group: navigate
order: 4
---

# Fit

Perintah `fit` menghitung kotak pembatas semua entitas dalam gambar dan menyesuaikan tingkat zoom dan posisi pan sehingga setiap entitas terlihat dengan margin kecil. Ini adalah cara tercepat untuk memulihkan tampilan yang hilang atau mengorientasikan diri setelah mengimpor file DXF.

## Menyesuaikan tampilan

Klik tombol toolbar **Fit** atau ketik `fit` di terminal. Tampilan menyesuaikan segera dan perintah keluar — tidak diperlukan interaksi.

**Klik ganda tombol mouse tengah** memicu operasi Fit yang sama kapan saja tanpa mengaktifkan perintah apa pun — pintasan tercepat untuk mengatur ulang tampilan yang hilang di tengah menggambar.

## Cara penyesuaian kotak pembatas bekerja

1. Fit menemukan kotak pembatas yang sejajar sumbu yang meliputi semua entitas (min X, max X, min Y, max Y).
2. Tingkat zoom diatur sehingga dimensi yang lebih tinggi atau lebih lebar mengisi kanvas dengan margin.
3. Tampilan dipusatkan pada titik tengah kotak pembatas.

| Status gambar | Hasil |
|--------------|--------|
| Lebih lebar dari tinggi | Zoom dibatasi oleh lebar |
| Lebih tinggi dari lebar | Zoom dibatasi oleh tinggi |
| Entitas tunggal | Fit di sekitar entitas tersebut saja |
| Gambar kosong | Tampilan tidak berubah |

## Fit vs kontrol zoom manual

| | Fit | Zoom In / Zoom Out | Roda gulir |
|---|-----|--------------------|-------------|
| Dipusatkan pada | Semua entitas | Titik tengah viewport | Kursor |
| Ukuran langkah | Otomatis (satu kali) | 1.5× per langkah | ~1.1× per ketikan |
| Terbaik untuk | Memulihkan tampilan yang hilang, orientasi pasca-impor | Melangkah masuk/keluar dari pusat | Zoom tepat yang ditargetkan pada kursor |

## Referensi keyboard

Tidak ada pintasan keyboard untuk perintah ini. Gunakan pintasan **klik ganda tombol mouse tengah** sebagai gantinya.

## Perintah tampilan terkait

| Perintah | Fungsi |
|---------|-------------|
| [Pan](../pan/) | Menggeser viewport tanpa zoom |
| [Zoom In](../zoom-in/) | Mengalikan zoom sebesar 1.5× per langkah |
| [Zoom Out](../zoom-out/) | Membagi zoom sebesar 1.5× per langkah |
