---
sidebar_position: 4
title: Editor Teks — Pemformatan Teks Kaya dalam KulmanLab CAD
description: Editor teks KulmanLab CAD membolehkan anda meletakkan label MTEXT berbilang baris dengan pemformatan kaya dengan tebal, italik, strikethrough, fon setiap aksara dan pengatasan ketinggian, bungkus perkataan, dan navigasi kursor penuh.
keywords: [CAD editor teks, MTEXT, tebal italik CAD, pemformatan teks CAD, teks berbilang baris CAD, bungkus perkataan CAD, kulmanlab]
---

# Text Editor

Editor teks terbuka setiap kali anda meletakkan label teks baharu dengan arahan `text` atau klik dua kali entiti teks sedia ada. Ia menyokong kandungan berbilang baris, pemformatan setiap aksara, dan bungkus perkataan.

## Membuka editor

| Tindakan | Hasil |
|---------|-------|
| Arahan `text` → klik kedudukan | Mencipta entiti teks baharu dan membuka editor |
| Klik dua kali entiti teks sedia ada | Membuka semula editor untuk entiti tersebut |
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

Dropdown menyenaraikan set taip muka silang platform yang terpilih (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). Pilihan teratas **Arial** adalah lalai.

- **Dengan pemilihan** — mengatasi fon untuk aksara yang dipilih sahaja.
- **Tiada pemilihan** — menggunakan fon pada keseluruhan entiti.

Dropdown mencerminkan fon aksara di sebelah kiri kursor apabila tiada pemilihan.

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

## Bungkus perkataan

Apabila entiti teks mempunyai **lebar rujukan** yang ditetapkan, baris panjang dibungkus secara lembut pada sempadan perkataan agar muat dalam lebar tersebut.

Untuk menetapkan atau menukar lebar rujukan semasa entiti dipilih, seret **grip ubah saiz** — segi empat tepat nipis di tepi kiri dan kanan kotak sempadan bertitik-titik. Kandungan mengalir semula secara masa nyata semasa anda menyeret.

Menetapkan lebar rujukan ke sifar (seret grip bersama atau padam nilai dalam panel sifat) mengalihkan bungkus perkataan dan membiarkan baris bertumbuh secara bebas.

## Teks berbilang baris

Tekan `Enter` untuk memasukkan pemecahan baris keras. Setiap baris keras adalah bebas — `Home` dan `End` menavigasi dalam baris keras semasa sahaja.

Pemecahan baris keras dan pemformatan setiap aksara disimpan menggunakan format MTEXT dan bertahan dalam pusingan penuh DXF.

## Keserasian DXF

Entiti teks disimpan sebagai **MTEXT** dalam fail DXF. Tebal dan italik dikodkan sebagai `\L`, `\K`, `\O`, dan suis fon inline (`\f`). Ketinggian setiap aksara dikodkan sebagai `\H`. Semua pemformatan dipelihara semasa eksport dan boleh dibaca oleh LibreCAD, FreeCAD, dan aplikasi serasi DXF lain.
