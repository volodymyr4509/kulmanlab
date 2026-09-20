---
title: Perintah Hatch Manager — Jelajahi dan Unggah Pola .pat
description: Perintah Hatch Manager membuka dialog untuk menjelajahi pola hatch dengan pratinjau swatch langsung, dan untuk mengunggah file pola .pat Anda sendiri. File yang diunggah disimpan di browser dan menggantikan pola bawaan dengan nama yang sama.
keywords: [hatch manager, pola hatch kustom CAD, unggah file pat, acad.pat, pustaka pola hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Perintah `ManajerArsir` membuka dialog untuk menjelajahi pola hatch dengan pratinjau swatch langsung, dan untuk mengunggah file pola `.pat` Anda sendiri untuk digunakan dengan [Hatch](../hatch/).

## Membuka Hatch Manager

Ketik `ManajerArsir` di terminal. Ini terpisah dari pemilih pola yang terbuka saat Anda mengklik chip **Pattern** pada hatch — pemilih memilih pola untuk satu hatch, Hatch Manager adalah tempat Anda menambah atau menghapus file `.pat`.

## Grup Pola

| Grup | Isi |
|------|-----|
| **User** | Pola dari file `.pat` Anda sendiri yang diunggah, dikelompokkan lagi berdasarkan file asal setiap pola (hanya ditampilkan setelah Anda mengunggah satu) |
| **Standard** | `SOLID` ditambah tabel pola gambar ini sendiri — setiap gambar baru dimulai dengan pustaka bawaan yang sama, sama seperti layer dan tipe garisnya |

Klik pola apa pun dalam daftar (atau gunakan `↑`/`↓`) untuk melihat pratinjaunya di sebelah kanan — swatch yang digambar dengan kode yang sama dengan yang digunakan untuk mengisi kanvas, sehingga persis seperti yang akan ditampilkan gambar, ditambah nama, deskripsi, dan jumlah garis pola.

## Mengunggah File Pola Kustom

1. Klik **Add .pat File** di footer dialog.
2. Pilih file `.pat` — format pola hatch standar. Satu file sering mendefinisikan banyak pola bernama sekaligus; semuanya muncul sebagai entri terpisah yang dikelompokkan di bawah nama file tersebut.
3. File yang diunggah disimpan secara permanen di browser (IndexedDB), diurutkan berdasarkan yang paling baru ditambahkan terlebih dahulu, dan dimuat ulang secara otomatis saat berikutnya Anda membuka KulmanLab CAD.

Mengunggah file yang mendefinisikan pola dengan nama yang sama seperti pola bawaan akan **menggantikan** default — ini adalah cara yang didukung untuk mendapatkan definisi pola resmi Autodesk: unggah `acad.pat` asli, dan versi ANSI31 dan nama standar lainnya mengambil alih dari perkiraan KulmanLab sendiri.

Jika gambar merujuk ke nama pola yang tidak ada di pustaka Anda — diimpor dari DXF yang menggunakan pola dari `acad.pat` yang belum Anda unggah — hatch tetap dirender, menggunakan `ANSI31` sebagai pengganti, alih-alih kembali ke isian datar tanpa pola.

## Menghapus File Pola

Klik **×** di sebelah nama file dalam grup **User** untuk menghapusnya beserta setiap pola yang didefinisikannya. Hatch apa pun yang sudah menggunakan salah satu pola tersebut segera kembali ke `ANSI31`. Pola **Standard** bawaan tidak dapat dihapus.

## Referensi Keyboard

| Tombol | Aksi |
|--------|------|
| `↑` / `↓` | Menggerakkan pilihan ke atas atau ke bawah dalam daftar pola |
| `Escape` | Menutup Hatch Manager |

## Perintah Terkait

- [Hatch](../hatch/) — mengisi area yang diklik menggunakan pola yang saat ini dipilih
- [Font Manager](../font-manager/) — pola unggah/jelajah yang sama, untuk font kustom alih-alih pola hatch
