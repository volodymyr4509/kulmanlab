---
title: Font Manager Command — Mengunggah dan Mengelola Font TTF Kustom di KulmanLab CAD
description: Perintah Font Manager membuka dialog untuk menjelajahi, melihat pratinjau, dan memilih font, serta untuk mengunggah file .ttf Anda sendiri. Font yang diunggah disimpan di browser dan disematkan berdasarkan nama pada ekspor DXF.
keywords: [font manager, font kustom CAD, unggah ttf, jenis huruf kustom CAD, google fonts CAD, font teks CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Perintah `FontManager` membuka dialog untuk menjelajahi dan memilih font, serta untuk mengunggah file `.ttf` Anda sendiri untuk digunakan pada entitas [Text](../text/) dan [Multileader](../leader/).

## Membuka Font Manager

- Ketik `FontManager` di terminal, **atau**
- Klik tombol **Font Manager** di toolbar [text editor](../../interface/text-editor/).

## Grup font

| Grup | Konten |
|------|--------|
| **Default** | Font sans-serif bawaan — selalu tersedia |
| **User** | Font `.ttf` yang Anda unggah sendiri (hanya ditampilkan setelah Anda menambahkan satu) |
| **Free** | 15 Google Fonts bawaan (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Font OS umum (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klik font mana pun dalam daftar untuk melihat pratinjaunya di sebelah kanan — nama, contoh alfabet, pangram, dan angka.

## Mengunggah font kustom

1. Klik **Add Font** di footer dialog (atau ketik `Font+` di terminal untuk langsung membuka pemilih file).
2. Pilih file `.ttf`. Hanya font TrueType yang didukung — `.otf` dan `.woff`/`.woff2` tidak didukung.
3. Nama file (tanpa ekstensi) menjadi nama font di grup **User**. Misalnya, mengunggah `MyFont.ttf` menambahkan font bernama `MyFont`.

Font yang diunggah disimpan secara permanen di browser (IndexedDB) dan dimuat ulang secara otomatis saat Anda membuka KulmanLab CAD berikutnya.

## Menghapus font kustom

Arahkan kursor ke font di grup **User** dan klik tombol **×** di sebelahnya. Font bawaan (Default, Free, System) tidak dapat dihapus.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `↑` / `↓` | Pindahkan pilihan ke atas atau bawah dalam daftar font |
| `Escape` | Tutup Font Manager |

## Kompatibilitas DXF

Nama font disematkan dalam entitas **MTEXT** yang diekspor sebagai kode pemformatan inline, sehingga file DXF yang melalui round-trip di KulmanLab CAD tetap mempertahankan penetapan fontnya. *File* font kustom tidak disematkan dalam DXF — hanya *nama* fontnya. Jika Anda mengimpor ulang gambar yang mereferensikan font kustom yang belum Anda unggah di perangkat ini, teks dirender dengan font default hingga Anda mengunggah font dengan nama yang sama itu.

## Perintah terkait

- [Text](../text/) — menempatkan label teks yang menjadi target pilihan font
- [Match Properties](../match-properties/) — menyalin tinggi teks, tetapi bukan font, antar entitas
