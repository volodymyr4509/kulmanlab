---
title: Perintah Move — Menerjemahkan Entitas yang Dipilih Berdasarkan Titik Dasar di KulmanLab CAD
description: Perintah Move menerjemahkan satu atau lebih entitas yang dipilih berdasarkan titik dasar dan tujuan. Mendukung pra-seleksi, penguncian sudut, dan input jarak tepat. Setelah dipindah, entitas tetap dipilih di posisi baru. Setiap tipe entitas didukung.
keywords: [perintah pindah CAD, menerjemahkan entitas CAD, memindahkan objek CAD, kunci sudut pindah, jarak tepat pindah, grip pindah CAD, kulmanlab]
group: edit
order: 1
---

# Move

Perintah `move` menerjemahkan entitas yang dipilih dari titik dasar ke titik tujuan. Perpindahan yang diterapkan ke setiap entitas yang dipilih adalah vektor dari dasar ke tujuan. Setelah dipindah, semua entitas tetap dipilih di posisi barunya, siap untuk diedit lebih lanjut.

## Dua cara memulai

**Pra-pilih, lalu pindah** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `move` di terminal atau klik tombol toolbar **Move**.
3. **Klik titik dasar**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik tujuan** — semua entitas yang dipilih bergeser berdasarkan vektor dasar→tujuan. Entri koordinat juga berfungsi di sini.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `move` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan entitas individual, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. **Klik titik dasar**, kemudian **klik tujuan** (entri koordinat tersedia di kedua langkah).

```
  Sebelum:                    Sesudah:
  ● dasar                       → ● tujuan
  [entitas A]                      [entitas A dipindah]
  [entitas B]                      [entitas B dipindah]
```

Pratinjau bayangan semua entitas yang dipilih mengikuti kursor dari titik dasar ke tujuan, menampilkan hasil sebelum Anda klik.

## Entri koordinat

Pada langkah titik dasar atau tujuan, ketik posisi tepat alih-alih mengklik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Penguncian sudut dan jarak tepat

Setelah titik dasar ditetapkan, perintah memantau sumbu snap 45° (0°, 45°, 90°, 135°, …). Arah **terkunci** ketika kursor cukup jauh dari dasar dan dalam satu lebar grip dari sumbu. Saat terkunci:

- Pratinjau bayangan snap ke sumbu.
- Ketik jarak dan tekan **Enter** untuk memindahkan tepat sejauh itu sepanjang arah yang terkunci.
- Mengklik memproyeksikan ke sumbu, sehingga tujuan selalu tepat berada di atasnya.

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan ke nilai jarak |
| `-` | Jarak negatif — membalik arah sepanjang sumbu (karakter pertama saja) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Terapkan perpindahan pada jarak yang diketik |

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi dan beralih ke fase titik dasar |
| `0`–`9`, `.`, `-` | Mulai entri koordinat X, atau jarak saat sudut terkunci |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau terapkan perpindahan pada jarak yang diketik |
| `Escape` | Batal dan reset |

## Mengaktifkan Move dari grip

Mengklik **grip titik tengah** dari [Line](../line/) yang dipilih meluncurkan Move secara otomatis, dengan titik tengah sudah ditetapkan sebagai titik dasar dan fase perpindahan aktif. Ini adalah cara tercepat untuk memposisikan ulang satu garis tanpa melalui langkah seleksi.

## Seleksi selama perintah

Ketika perintah dimulai dalam fase seleksi:

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor masuk/keluar dari seleksi |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan batas kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi dan beralih ke fase titik dasar |

## Setelah perpindahan

Entitas yang dipindah tetap dipilih di posisi barunya. Ini berarti Anda dapat segera:
- Menjalankan **Move** lagi untuk menggesernya lebih jauh.
- Menjalankan [Copy](../copy/), [Rotate](../rotate/), atau [Scale](../scale/) tanpa memilih ulang.
- Menekan **Delete** untuk menghapusnya.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Posisi asli | Dikosongkan — entitas tidak lagi ada di sana | Dipertahankan — asli tetap di tempat |
| Jumlah hasil | Jumlah entitas yang sama | Satu set tambahan per operasi |
| Seleksi setelah | Entitas yang dipindah dipilih di posisi baru | Entitas yang disalin dipilih di posisi baru |
| Terbaik untuk | Memposisikan ulang geometri | Menduplikasi geometri |

## Entitas yang didukung

Move bekerja pada setiap tipe entitas: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, dan semua lainnya. Semua entitas mengimplementasikan `translate(dx, dy)` sehingga tidak ada yang dikecualikan.
