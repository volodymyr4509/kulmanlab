---
sidebar_position: 21
title: Perintah Chamfer — Memotong Sudut Lurus antara Dua Garis di KulmanLab CAD
description: Perintah Chamfer menghubungkan dua entitas Line atau Polyline dengan potongan diagonal lurus. Anda menentukan dua jarak — satu sepanjang setiap entitas — dan perintah memotong keduanya kembali ke titik-titik tersebut dan menyisipkan garis penghubung.
keywords: [perintah chamfer CAD, chamfer garis CAD, potongan sudut diagonal, sudut bevel CAD, kulmanlab]
---

# Chamfer

Perintah `chamfer` memotong sudut diagonal lurus antara dua entitas [Line](../line/) atau [Polyline](../polyline/). Anda menentukan seberapa jauh ke belakang untuk memotong sepanjang setiap entitas (d1 dan d2), dan perintah memotong kedua entitas ke titik-titik tersebut dan menyisipkan garis penghubung di antara keduanya.

Menggunakan jarak yang sama menghasilkan potongan 45° simetris; jarak yang berbeda menghasilkan bevel asimetris.

Chamfer bekerja pada entitas **Line dan Polyline**.

## Menggunakan chamfer

1. Ketik `chamfer` di terminal atau klik tombol toolbar **Chamfer**.
2. **Ketik jarak chamfer pertama** (d1 — jarak sepanjang entitas pertama) dan tekan **Enter**.
3. **Ketik jarak chamfer kedua** (d2 — jarak sepanjang entitas kedua) dan tekan **Enter**.
4. **Klik entitas pertama** — bagian yang Anda klik menentukan sisi mana dari perpotongan mana pun yang dipertahankan.
5. **Arahkan kursor ke entitas kedua** — pratinjau garis putus-putus menampilkan hasil potongan chamfer. Gerakkan kursor ke sisi yang ingin Anda pertahankan.
6. **Klik** untuk menerapkan. Kedua entitas dipotong dan garis chamfer disisipkan.

```
  Sebelum (d1=5, d2=8):        Sesudah:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Pemilihan sisi

Ketika dua garis berpotongan, chamfer diterapkan pada sudut yang ditentukan oleh posisi klik — bagian dari masing-masing entitas pada **sisi yang sama dengan kursor** dipertahankan.

- Klik dekat salah satu ujung entitas pertama untuk memilih setengah tersebut.
- Gerakkan kursor ke setengah yang diinginkan dari entitas kedua — pratinjau putus-putus diperbarui secara langsung.

Untuk Polyline, posisi klik menentukan **segmen** mana dari polyline yang berpartisipasi, dan vertex terdekat di sisi perpotongan adalah yang dipotong.

## Apa yang dibuat perintah

- Titik akhir (atau vertex polyline) entitas pertama yang paling dekat ke perpotongan dipindahkan ke titik **T1**, terletak d1 sepanjang entitas pertama dari perpotongan.
- Titik akhir (atau vertex polyline) entitas kedua yang paling dekat ke perpotongan dipindahkan ke titik **T2**, terletak d2 sepanjang entitas kedua dari perpotongan.
- Entitas Line baru disisipkan dari **T1** ke **T2**.

Garis yang disisipkan mewarisi pengaturan ketebalan garis, warna, layer, dan tipe garis saat ini.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai jarak saat ini |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi jarak yang diketik dan maju |
| `Escape` | Batal dan reset |

## Entitas yang didukung

| Entitas | Didukung |
|--------|-----------|
| Line | Ya |
| Polyline / Rectangle | Ya |
| Arc, Circle, Ellipse | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Tipe sudut | Potongan lurus | Busur membulat |
| Input | Dua jarak (d1, d2) | Satu radius |
| Entitas yang disisipkan | Line | Arc |
| Entitas yang didukung | Line dan Polyline | Hanya Line |
