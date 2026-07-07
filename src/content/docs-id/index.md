---
title: KulmanLab CAD — Referensi Perintah
description: Referensi perintah KulmanLab CAD — panduan lengkap untuk setiap perintah menggambar, mengedit, markup, layer, pengukuran, dan file di KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, perintah CAD, CAD browser gratis, editor DXF online, perintah menggambar, kulmanlab]
---

# KulmanLab CAD — Referensi Perintah

Selamat datang di referensi perintah **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) adalah alat CAD berbasis browser gratis untuk menggambar, mengedit, dan mengekspor file DXF — tanpa instalasi. Gunakan sidebar untuk menjelajahi semua perintah yang dikelompokkan berdasarkan panel.

## Bentuk

| Perintah | Fungsi |
|---------|-------------|
| [Line](./commands/line/) | Menggambar garis lurus antara dua titik |
| [Polyline](./commands/polyline/) | Menggambar jalur terbuka multi-segmen |
| [Rectangle](./commands/rectangle/) | Menggambar persegi panjang sejajar sumbu |
| [Circle](./commands/circle/) | Menggambar lingkaran berdasarkan pusat dan radius |
| [Arc](./commands/arc/) | Menggambar busur melalui tiga titik |
| [Ellipse](./commands/ellipse/) | Menggambar elips berdasarkan pusat dan dua sumbu |
| [Text](./commands/text/) | Menempatkan label teks pada kanvas |
| [Spline CV](./commands/spline-cv/) | Menggambar spline dengan menempatkan control vertex |
| [Spline Fit](./commands/spline-fit/) | Menggambar spline yang melewati titik-titik yang diklik |

## Edit

| Perintah | Fungsi |
|---------|-------------|
| [Move](./commands/move/) | Memindahkan entitas yang dipilih ke posisi baru |
| [Copy](./commands/copy/) | Menyalin entitas yang dipilih ke posisi baru |
| [Rotate](./commands/rotate/) | Memutar entitas yang dipilih di sekitar titik dasar |
| [Mirror](./commands/mirror/) | Mencerminkan entitas yang dipilih melintasi garis |
| [Scale](./commands/scale/) | Mengubah skala entitas yang dipilih di sekitar titik dasar |
| [Delete](./commands/delete/) | Menghapus entitas yang dipilih dari gambar |
| [Trim](./commands/trim/) | Memotong segmen garis pada perpotongannya |
| [Extend](./commands/extend/) | Memperpanjang garis ke perpotongan batas terdekat |
| [Offset](./commands/offset/) | Membuat salinan paralel dari entitas pada jarak tertentu |
| [Fillet](./commands/fillet/) | Membulatkan sudut antara dua garis dengan busur tangen |
| [Chamfer](./commands/chamfer/) | Memotong sudut diagonal lurus antara dua garis atau polyline |
| [Undo](./commands/undo/) | Membatalkan aksi terakhir |
| [Redo](./commands/redo/) | Mengulangi aksi yang dibatalkan |

## Markup

| Perintah | Fungsi |
|---------|-------------|
| [Leader](./commands/leader/) | Menggambar anotasi multileader dengan kepala panah dan teks |
| [Leader+](./commands/leader-add/) | Menambahkan lengan tambahan ke multileader yang ada |
| [Leader−](./commands/leader-remove/) | Menghapus lengan dari multileader yang ada |
| [Dimension Linear](./commands/dim-linear/) | Menambahkan dimensi horizontal atau vertikal |
| [Dimension Aligned](./commands/dim-aligned/) | Menambahkan dimensi yang sejajar dengan dua titik |
| [Dimension Continue](./commands/dim-continue/) | Merantai dimensi baru dari dimensi terakhir |
| [Dimension Radius](./commands/dim-radius/) | Menambahkan dimensi radius ke lingkaran atau busur |
| [Dimension Diameter](./commands/dim-diameter/) | Menambahkan dimensi diameter ke lingkaran |
| [Dimension Angular](./commands/dim-angular/) | Menambahkan dimensi sudut ke dua garis, busur, atau lingkaran |

## Layer

| Perintah | Fungsi |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Mengatur layer saat ini agar sesuai dengan layer entitas yang diklik |
| [LayerMatch](./commands/layer-match/) | Menetapkan ulang entitas yang dipilih agar sesuai dengan layer entitas sumber |
| [LayerIsolate](./commands/layer-isolate/) | Membekukan semua layer kecuali layer entitas yang dipilih |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Mencairkan semua layer dalam satu langkah |

## Layout

| Perintah | Fungsi |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Membuat viewport di layout kertas dengan memilih dua sudut |
| [ViewportCopy](./commands/viewport-copy/) | Menduplikasi viewport ke posisi baru |
| [PageManager](./commands/page-manager/) | Mengedit ukuran kertas dan skala untuk layout aktif |

## Navigasi

| Perintah | Fungsi |
|---------|-------------|
| [Pan](./commands/pan/) | Klik dan seret untuk memindahkan viewport |
| [Zoom In](./commands/zoom-in/) | Memperbesar tampilan viewport |
| [Zoom Out](./commands/zoom-out/) | Memperkecil tampilan viewport |
| [Fit](./commands/fit/) | Menampilkan semua entitas dalam viewport |

## Ukur

| Perintah | Fungsi |
|---------|-------------|
| [Distance](./commands/distance/) | Mengukur jarak antara dua titik |
| [Angle](./commands/angle/) | Mengukur sudut antara tiga titik |
| [Area](./commands/area/) | Mengukur luas dan keliling poligon |

## Gaya

| Perintah | Fungsi |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Menyalin warna, layer, dan properti lain dari satu entitas ke entitas lainnya |
| [Font Manager](./commands/font-manager/) | Jelajahi, pilih, dan unggah font TTF khusus |

## File

| Perintah | Fungsi |
|---------|-------------|
| [Import](./commands/import/) | Membuka file gambar DXF atau JSON |
| [New File](./commands/new-file/) | Memulai gambar kosong yang baru |
| [Files](./commands/files/) | Menjelajahi dan memulihkan gambar terkini |
| [Print](./commands/print/) | Mengekspor area gambar sebagai gambar atau PDF |
| [Export](./commands/export/) | Mengunduh gambar sebagai DXF atau JSON |
| [WipeStorage](./commands/wipestorage/) | Menghapus semua gambar dari penyimpanan browser |

## Pemulihan

Jika aplikasi mengalami crash setiap kali dijalankan (misalnya, setelah bekerja dengan koordinat yang sangat besar), Anda dapat menghapus semua data yang tersimpan secara lokal dengan menambahkan `?reset` ke URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Ini menghapus semua data dari database lokal browser dan memulai gambar kosong yang baru. Parameter `?reset` akan menghapus dirinya sendiri dari URL secara otomatis. Gunakan ini sebagai upaya terakhir ketika [WipeStorage](./commands/wipestorage/) tidak dapat dijangkau karena aplikasi tidak dapat dimuat sama sekali.

## Cara kerja perintah

Setiap perintah mengikuti pola yang sama:

1. **Aktifkan** — klik tombol toolbar atau ketik nama perintah di terminal di bagian bawah layar.
2. **Ikuti prompt** — terminal menampilkan input apa yang diharapkan selanjutnya.
3. **Selesai atau batal** — sebagian besar perintah selesai secara otomatis setelah input terakhir. Tekan **Escape** kapan saja untuk membatalkan.

## Memilih objek

Beberapa perintah edit (Move, Copy, Rotate, Mirror, Scale, Delete) memiliki perilaku seleksi yang sama:

- **Klik** entitas untuk memilih atau membatalkan pilihan.
- **Seret ke kanan** (kiri ke kanan) untuk seleksi ketat — hanya entitas yang sepenuhnya berada di dalam kotak yang dipilih.
- **Seret ke kiri** (kanan ke kiri) untuk seleksi persilangan — entitas mana pun yang berpotongan dengan kotak dipilih.
- Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi dan melanjutkan ke langkah berikutnya.
