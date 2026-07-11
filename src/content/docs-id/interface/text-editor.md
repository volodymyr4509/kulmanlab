---
title: Text Editor — Mode Kaya dan Sederhana di KulmanLab CAD
description: Editor teks KulmanLab CAD memiliki dua mode — kaya (pemformatan per karakter, multi-baris, bungkus kata untuk Text dan Multileader) dan sederhana (gaya seragam, satu baris untuk entitas dimensi). Chip mode di header menunjukkan mode mana yang aktif.
keywords: [CAD editor teks, MTEXT, tebal miring CAD, pemformatan teks CAD, teks multi-baris CAD, bungkus kata CAD, editor teks kaya, editor teks sederhana, editor teks dimensi, font kustom CAD, unggah ttf CAD, kulmanlab]
group: interface
order: 5
---

# Text Editor

Editor teks terbuka saat Anda menempatkan atau mengklik dua kali entitas yang dapat diedit. **Chip mode** kecil di header — **rich** (warna aksen) atau **simple** (warna redup) — menunjukkan mode mana yang aktif untuk entitas saat ini.

## Mode editor

### Mode kaya

Digunakan oleh: **Text** (label MTEXT) dan anotasi **Multileader**.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Strikethrough | Per karakter (berlaku untuk seleksi, atau seluruh entitas jika tidak ada seleksi) |
| Font dan Height | Penggantian per karakter, atau default seluruh entitas |
| `Enter` | Menyisipkan jeda baris keras |
| `Shift+←/→` | Memperluas atau mempersempit seleksi teks |
| `Home` / `End` | Lompat ke awal/akhir baris keras saat ini |
| Bungkus kata | Didukung melalui grip ubah ukuran lebar referensi |

### Mode sederhana

Digunakan oleh: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editor diisi terlebih dahulu dengan label yang dirender dari dimensi saat ini sehingga Anda dapat memposisikan kursor dan mengedit nilainya langsung.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Font / Height | Tersedia — berlaku untuk **seluruh label** sekaligus |
| Pemformatan per karakter | Tidak didukung |
| `Enter` | **Mengonfirmasi** nilai dan menutup editor (tanpa jeda baris) |
| Multi-baris | Tidak didukung |
| Bungkus kata | Tidak didukung |

## Membuka editor

| Aksi | Hasil |
|--------|--------|
| Perintah `text` → klik posisi | Membuat entitas teks baru dan membuka editor (**kaya**) |
| Klik dua kali entitas **Text** yang ada | Membuka kembali editor dalam mode **kaya** |
| Klik dua kali **Multileader** yang ada | Membuka editor dalam mode **kaya** |
| Klik dua kali entitas **dimensi** | Membuka editor dalam mode **sederhana** |
| `Escape` di dalam editor | Menutup editor dan menyimpan semua perubahan |

## Toolbar

Toolbar mengambang di atas kotak pembatas teks dan tetap terjangkar ke entitas saat Anda pan atau zoom.

### Tebal · Miring · Coret

| Tombol | Pintasan | Fungsi |
|--------|----------|--------------|
| **B** | — | Toggle tebal |
| *I* | — | Toggle miring |
| ~~S~~ | — | Toggle coret |

**Cara toggle diterapkan:**

- **Dengan seleksi teks** — gaya diterapkan tepat pada karakter yang dipilih saja.
- **Tidak ada seleksi, kursor di teks yang ada** — toggle gaya pada seluruh entitas (semua segmen).
- **Teks kosong atau entitas baru** — gaya disimpan pada segmen kosong dan diterapkan ke setiap karakter yang Anda ketik dari saat itu.

Tombol tampak disorot (aktif) ketika setiap karakter dalam seleksi saat ini — atau karakter langsung di sebelah kiri kursor — memiliki gaya tersebut diatur.

### Font

Dropdown mengelompokkan typeface yang tersedia menjadi **Default** (font sans-serif bawaan), **User** (font yang Anda unggah sendiri, jika ada), **Free** (sekumpulan Google Fonts bawaan), dan **System** (font OS umum seperti Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, dan Impact).

- **Dengan seleksi** — mengganti font hanya untuk karakter yang dipilih.
- **Tidak ada seleksi** — menerapkan font ke seluruh entitas.

Dropdown mencerminkan font dari karakter di sebelah kiri kursor ketika tidak ada seleksi.

Tidak terbatas pada daftar bawaan — klik tombol **Font Manager** di toolbar untuk mengunggah file `.ttf` Anda sendiri dan menambahkannya ke grup **User**. Lihat [Font Manager](../../commands/font-manager/) untuk detailnya.

### Tinggi

Field angka mengatur **tinggi cap** (tinggi huruf kapital) dalam satuan gambar.

- **Dengan seleksi** — mengganti tinggi untuk karakter yang dipilih, secara independen dari tinggi dasar entitas.
- **Tidak ada seleksi** — mengubah tinggi dasar entitas (berlaku untuk semua karakter yang tidak memiliki penggantian tinggi individual).

Field mencerminkan tinggi karakter di sebelah kiri kursor. Biarkan kosong untuk menggunakan default entitas.

## Kursor dan navigasi

| Tombol | Aksi |
|-----|--------|
| `←` / `→` | Gerakkan caret satu karakter ke kiri atau kanan |
| `Home` | Lompat ke awal baris keras saat ini |
| `End` | Lompat ke akhir baris keras saat ini |
| `Shift` + `←` / `→` | Perluas atau perkecil seleksi |
| `Backspace` | Hapus karakter di sebelah kiri (atau seleksi) |
| `Delete` | Hapus karakter di sebelah kanan (atau seleksi) |
| `Enter` | Sisipkan jeda baris |
| `Escape` | Tutup editor |

Tinggi kursor secara otomatis cocok dengan tinggi cap dari karakter yang berdekatan, termasuk ukuran yang lebih kecil yang digunakan untuk subskrip dan superskrip.

## Salin, potong, dan tempel

| Tombol | Aksi |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Salin teks yang dipilih |
| `Ctrl+X` / `Cmd+X` | Potong teks yang dipilih |
| `Ctrl+V` / `Cmd+V` | Tempel di kursor |

Menyalin dan memotong memerlukan seleksi teks aktif. Teks yang ditempel selalu berupa teks polos — teks tersebut mengambil format (tebal, miring, font, tinggi) yang sudah ada di kursor, bukan membawa format yang dimilikinya saat disalin.

Dalam **Mode kaya**, jeda baris pada teks yang ditempel dipertahankan. Dalam **Mode sederhana**, jeda baris dihapus, karena label dimensi bersifat satu baris.

## Bungkus kata

Ketika entitas teks memiliki **lebar referensi** yang diatur, baris panjang dibungkus secara lembut pada batas kata untuk muat dalam lebar tersebut.

Untuk mengatur atau mengubah lebar referensi saat entitas dipilih, seret **grip ubah ukuran** — persegi panjang tipis di tepi kiri dan kanan kotak pembatas putus-putus. Konten mengalir ulang secara real time saat Anda menyeret.

Mengatur lebar referensi ke nol (seret grip bersama atau hapus nilai di panel properti) menghapus bungkus kata dan membiarkan baris tumbuh bebas.

## Teks multi-baris

Tekan `Enter` untuk menyisipkan jeda baris keras. Setiap baris keras bersifat independen — `Home` dan `End` menavigasi dalam baris keras saat ini saja.

Jeda baris keras dan pemformatan per karakter disimpan menggunakan format MTEXT dan bertahan melalui round-trip DXF penuh.

## Kompatibilitas DXF

Entitas teks disimpan sebagai **MTEXT** dalam file DXF. Tebal dan miring dikodekan sebagai `\L`, `\K`, `\O`, dan switch font inline (`\f`). Tinggi per karakter dikodekan sebagai `\H`. Semua pemformatan dipertahankan saat diekspor dan dapat dibaca oleh LibreCAD, FreeCAD, dan aplikasi lain yang kompatibel dengan DXF.
