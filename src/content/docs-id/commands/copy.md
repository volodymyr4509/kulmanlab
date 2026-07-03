---
sidebar_position: 3
title: Perintah Copy — Menduplikasi Entitas di Posisi Baru di KulmanLab CAD
description: Perintah Copy membuat duplikat yang diterjemahkan dari entitas yang dipilih sambil membiarkan aslinya tetap di tempat. Mendukung pra-seleksi, penguncian sudut, dan input jarak tepat. Salinan ditempatkan dan perintah keluar; aslinya tetap tidak berubah.
keywords: [perintah salin CAD, menduplikasi entitas CAD, menyalin objek CAD, mengkloning geometri CAD, kunci sudut salin, jarak tepat salin, kulmanlab]
---

# Copy

Perintah `copy` membuat duplikat yang diterjemahkan dari entitas yang dipilih dan menempatkannya diimbangi dari titik dasar ke tujuan — aslinya tetap persis di tempatnya. Ini adalah satu perbedaan utama dari [Move](../move/): Copy menambahkan entitas baru ke gambar; Move memindahkan entitas yang sudah ada.

## Dua cara memulai

**Pra-pilih, lalu salin** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `copy` di terminal atau klik tombol toolbar **Copy**.
3. **Klik titik dasar**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik tujuan** — duplikat muncul pada offset dasar→tujuan. Entri koordinat juga berfungsi di sini.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `copy` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan entitas individual, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. **Klik titik dasar**, kemudian **klik tujuan** (entri koordinat tersedia di kedua langkah).

```
  Sebelum:               Sesudah:
  [entitas A]            [entitas A]  ← asli tidak disentuh
  [entitas B]            [entitas B]
                        [salinan A] ← entitas baru
                        [salinan B]
```

Pratinjau bayangan salinan mengikuti kursor dari titik dasar ke tujuan.

## Entri koordinat

Pada langkah titik dasar atau tujuan, ketik posisi tepat alih-alih mengklik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Penguncian sudut dan jarak tepat

Setelah titik dasar ditetapkan, perintah snap ke sumbu 45° (0°, 45°, 90°, 135°, …) ketika kursor cukup jauh dan dekat dengan sumbu. Saat terkunci, ketik jarak dan tekan **Enter** untuk menempatkan salinan tepat pada offset tersebut.

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan ke nilai jarak |
| `-` | Jarak negatif — membalik arah sepanjang sumbu (karakter pertama saja) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Tempatkan salinan pada jarak yang diketik |

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi dan beralih ke fase titik dasar |
| `0`–`9`, `.`, `-` | Mulai entri koordinat X, atau jarak saat sudut terkunci |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau terapkan salinan pada jarak yang diketik |
| `Escape` | Batal dan reset |

## Seleksi selama perintah

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor masuk/keluar dari seleksi |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan batas kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi |

## Setelah penyalinan

**Aslinya tetap dipilih** — salinan baru ditambahkan ke gambar tetapi seleksi dihapus dan perintah keluar. Untuk langsung bekerja dengan salinan, jalankan Copy lagi pada seleksi, atau mulai perintah baru.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Aslinya | Tetap di tempat | Dihapus dari posisi asli |
| Jumlah hasil | Bertambah dengan jumlah entitas yang disalin | Tidak berubah |
| Setelah operasi | Aslinya masih dipilih | Entitas yang dipindah dipilih di posisi baru |
| Terbaik untuk | Mengulang geometri, layout simetris | Memposisikan ulang geometri |

## Entitas yang didukung

Copy bekerja pada setiap tipe entitas. Semua entitas mengimplementasikan `translate(dx, dy)` secara internal sehingga tidak ada yang dikecualikan.
