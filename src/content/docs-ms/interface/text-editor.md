---
sidebar_position: 4
title: Editor Teks — Mod Kaya dan Mudah dalam KulmanLab CAD
description: Editor teks KulmanLab CAD mempunyai dua mod — kaya (pemformatan setiap aksara, berbilang baris, bungkus perkataan untuk Text dan Multileader) dan mudah (gaya seragam, satu baris untuk entiti dimensi). Cip mod dalam pengepala menunjukkan mod yang aktif.
keywords: [CAD editor teks, MTEXT, tebal italik CAD, pemformatan teks CAD, teks berbilang baris CAD, bungkus perkataan CAD, editor teks kaya, editor teks mudah, editor teks dimensi, fon kustom CAD, muat naik ttf CAD, kulmanlab]
---

# Text Editor

Editor teks terbuka apabila anda meletakkan atau mengklik dua kali entiti yang boleh diedit. **Cip mod** kecil dalam pengepala — **rich** (warna aksen) atau **simple** (warna redup) — menunjukkan mod yang aktif untuk entiti semasa.

## Mod editor

### Mod kaya

Digunakan oleh: **Text** (label MTEXT) dan anotasi **Multileader**.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Strikethrough | Setiap aksara (berlaku pada pemilihan, atau keseluruhan entiti jika tiada pemilihan) |
| Font dan Height | Pengatasan setiap aksara, atau lalai keseluruhan entiti |
| `Enter` | Memasukkan pemecahan baris keras |
| `Shift+←/→` | Memanjangkan atau mengecilkan pemilihan teks |
| `Home` / `End` | Lompat ke awal/akhir baris keras semasa |
| Bungkus perkataan | Disokong melalui grip ubah saiz lebar rujukan |

### Mod mudah

Digunakan oleh: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editor diisi terlebih dahulu dengan label yang dirender dari dimensi semasa supaya anda boleh meletakkan kursor dan mengedit nilainya terus.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Tersedia — berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | **Mengkomit** nilai dan menutup editor (tiada pemecahan baris) |
| Berbilang baris | Tidak disokong |
| Bungkus perkataan | Tidak disokong |

## Membuka editor

| Tindakan | Hasil |
|---------|-------|
| Arahan `text` → klik kedudukan | Mencipta entiti teks baharu dan membuka editor (**kaya**) |
| Klik dua kali entiti **Text** sedia ada | Membuka semula editor dalam mod **kaya** |
| Klik dua kali **Multileader** sedia ada | Membuka editor dalam mod **kaya** |
| Klik dua kali entiti **dimensi** | Membuka editor dalam mod **mudah** |
| `Escape` di dalam editor | Menutup editor dan mengekalkan semua perubahan |

## Bar alat

Bar alat terapung di atas kotak sempadan teks dan kekal berlabuh pada entiti semasa anda pan atau zum.

### Tebal · Italik · Strikethrough

| Butang | Pintasan | Fungsinya |
|--------|----------|-----------|
| **B** | — | Togel tebal |
| *I* | — | Togel italik |
| ~~S~~ | — | Togel strikethrough |

**Cara togel digunakan:**

- **Dengan pemilihan teks** — gaya digunakan tepat pada aksara yang dipilih sahaja.
- **Tiada pemilihan, kursor dalam teks sedia ada** — mengtogelkan gaya pada keseluruhan entiti (semua segmen).
- **Teks kosong atau entiti baharu** — gaya disimpan pada segmen kosong dan digunakan pada setiap aksara yang anda taip dari titik itu seterusnya.

Butang kelihatan diserlahkan (aktif) apabila setiap aksara dalam pemilihan semasa — atau aksara tepat di sebelah kiri kursor — mempunyai gaya tersebut ditetapkan.

### Fon

Dropdown mengumpulkan fon yang tersedia kepada **Default** (fon sans-serif terbina dalam), **User** (fon anda sendiri yang dimuat naik, jika ada), **Free** (satu set Google Fonts terbina dalam), dan **System** (fon OS biasa seperti Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, dan Impact).

- **Dengan pemilihan** — mengatasi fon untuk aksara yang dipilih sahaja.
- **Tiada pemilihan** — menggunakan fon pada keseluruhan entiti.

Dropdown mencerminkan fon aksara di sebelah kiri kursor apabila tiada pemilihan.

Tidak terhad kepada senarai terbina dalam — klik butang **Font Manager** pada bar alat untuk memuat naik fail `.ttf` anda sendiri dan menambahkannya ke kumpulan **User**. Lihat [Font Manager](../../commands/font-manager/) untuk butiran lanjut.

### Ketinggian

Medan nombor menetapkan **ketinggian cap** (ketinggian huruf besar) dalam unit lukisan.

- **Dengan pemilihan** — mengatasi ketinggian untuk aksara yang dipilih, bebas dari ketinggian asas entiti.
- **Tiada pemilihan** — menukar ketinggian asas entiti (terpakai pada semua aksara yang tidak mempunyai pengatasan ketinggian individu).

Medan mencerminkan ketinggian aksara di sebelah kiri kursor. Biarkan kosong untuk menggunakan lalai entiti.

## Kursor dan navigasi

| Kekunci | Tindakan |
|---------|---------|
| `←` / `→` | Gerakkan tanda sisip satu aksara ke kiri atau kanan |
| `Home` | Lompat ke mula baris keras semasa |
| `End` | Lompat ke akhir baris keras semasa |
| `Shift` + `←` / `→` | Panjangkan atau kecilkan pemilihan |
| `Backspace` | Padam aksara di sebelah kiri (atau pemilihan) |
| `Delete` | Padam aksara di sebelah kanan (atau pemilihan) |
| `Enter` | Masukkan pemecahan baris |
| `Escape` | Tutup editor |

Ketinggian kursor secara automatik sepadan dengan ketinggian cap aksara bersebelahan, termasuk saiz yang lebih kecil yang digunakan untuk subskrip dan superskrip.

## Salin, potong, dan tampal

| Kekunci | Tindakan |
|---------|---------|
| `Ctrl+C` / `Cmd+C` | Salin teks yang dipilih |
| `Ctrl+X` / `Cmd+X` | Potong teks yang dipilih |
| `Ctrl+V` / `Cmd+V` | Tampal pada kursor |

Salin dan potong memerlukan pemilihan teks aktif. Teks yang ditampal sentiasa teks biasa — ia menggunakan gaya (tebal, italik, fon, tinggi) yang sudah ada pada kursor, bukannya membawa gaya yang dimilikinya semasa disalin.

Dalam **Mod kaya**, pemecahan baris dalam teks yang ditampal dikekalkan. Dalam **Mod mudah**, pemecahan baris dibuang, kerana label dimensi adalah satu baris.

## Bungkus perkataan

Apabila entiti teks mempunyai **lebar rujukan** yang ditetapkan, baris panjang dibungkus secara lembut pada sempadan perkataan agar muat dalam lebar tersebut.

Untuk menetapkan atau menukar lebar rujukan semasa entiti dipilih, seret **grip ubah saiz** — segi empat tepat nipis di tepi kiri dan kanan kotak sempadan bertitik-titik. Kandungan mengalir semula secara masa nyata semasa anda menyeret.

Menetapkan lebar rujukan ke sifar (seret grip bersama atau padam nilai dalam panel sifat) mengalihkan bungkus perkataan dan membiarkan baris bertumbuh secara bebas.

## Teks berbilang baris

Tekan `Enter` untuk memasukkan pemecahan baris keras. Setiap baris keras adalah bebas — `Home` dan `End` menavigasi dalam baris keras semasa sahaja.

Pemecahan baris keras dan pemformatan setiap aksara disimpan menggunakan format MTEXT dan bertahan dalam pusingan penuh DXF.

## Keserasian DXF

Entiti teks disimpan sebagai **MTEXT** dalam fail DXF. Tebal dan italik dikodkan sebagai `\L`, `\K`, `\O`, dan suis fon inline (`\f`). Ketinggian setiap aksara dikodkan sebagai `\H`. Semua pemformatan dipelihara semasa eksport dan boleh dibaca oleh LibreCAD, FreeCAD, dan aplikasi serasi DXF lain.
