---
sidebar_position: 4
title: Text Editor — Pemformatan Teks Kaya di KulmanLab CAD
description: Editor teks KulmanLab CAD memungkinkan Anda menempatkan label MTEXT multi-baris yang kaya format dengan tebal, miring, coret, font per karakter dan penggantian tinggi, bungkus kata, dan navigasi kursor penuh.
keywords: [CAD editor teks, MTEXT, tebal miring CAD, pemformatan teks CAD, teks multi-baris CAD, bungkus kata CAD, kulmanlab]
---

# Text Editor

Editor teks terbuka setiap kali Anda menempatkan label teks baru dengan perintah `text` atau mengklik dua kali entitas teks yang ada. Editor mendukung konten multi-baris, pemformatan per karakter, dan bungkus kata.

## Membuka editor

| Aksi | Hasil |
|--------|--------|
| Perintah `text` → klik posisi | Membuat entitas teks baru dan membuka editor |
| Klik dua kali entitas teks yang ada | Membuka kembali editor untuk entitas tersebut |
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

Dropdown mencantumkan sekumpulan typeface lintas platform yang dikurasi (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). Opsi teratas **Arial** adalah default.

- **Dengan seleksi** — mengganti font hanya untuk karakter yang dipilih.
- **Tidak ada seleksi** — menerapkan font ke seluruh entitas.

Dropdown mencerminkan font dari karakter di sebelah kiri kursor ketika tidak ada seleksi.

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

## Bungkus kata

Ketika entitas teks memiliki **lebar referensi** yang diatur, baris panjang dibungkus secara lembut pada batas kata untuk muat dalam lebar tersebut.

Untuk mengatur atau mengubah lebar referensi saat entitas dipilih, seret **grip ubah ukuran** — persegi panjang tipis di tepi kiri dan kanan kotak pembatas putus-putus. Konten mengalir ulang secara real time saat Anda menyeret.

Mengatur lebar referensi ke nol (seret grip bersama atau hapus nilai di panel properti) menghapus bungkus kata dan membiarkan baris tumbuh bebas.

## Teks multi-baris

Tekan `Enter` untuk menyisipkan jeda baris keras. Setiap baris keras bersifat independen — `Home` dan `End` menavigasi dalam baris keras saat ini saja.

Jeda baris keras dan pemformatan per karakter disimpan menggunakan format MTEXT dan bertahan melalui round-trip DXF penuh.

## Kompatibilitas DXF

Entitas teks disimpan sebagai **MTEXT** dalam file DXF. Tebal dan miring dikodekan sebagai `\L`, `\K`, `\O`, dan switch font inline (`\f`). Tinggi per karakter dikodekan sebagai `\H`. Semua pemformatan dipertahankan saat diekspor dan dapat dibaca oleh LibreCAD, FreeCAD, dan aplikasi lain yang kompatibel dengan DXF.
