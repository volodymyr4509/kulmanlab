---
title: "Cara mengubah DXF menjadi PDF (dengan skala yang benar)"
description: "Ubah DXF jadi PDF gratis di browser — bahkan pada skala persis seperti 1:50 di A3, yang tidak bisa dilakukan situs konverter. Tanpa instalasi dan akun."
keywords: [ubah DXF ke PDF, DXF ke PDF gratis, DXF PDF online, DXF PDF skala, cetak DXF sesuai skala, konverter DXF PDF, gambar CAD ke PDF, DXF PDF A3, skala 1:50 PDF, DXF ke PDF tanpa AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Panduan
---

Untuk mengubah DXF menjadi PDF, buka file itu di editor CAD yang berjalan di browser lalu ekspor: tidak ada yang perlu dipasang, tanpa akun, dan file tetap berada di komputer Anda. Kalau PDF-nya harus bisa diukur dengan benar saat dicetak, Anda butuh tata letak kertas dan skala yang persis — dan justru langkah inilah yang dilewati sepenuhnya oleh layanan konversi.

Perbedaan itulah inti panduan ini. Konverter file umum memberi Anda gambar dari gambar teknik Anda. PDF berskala memberi Anda gambar teknik yang bisa ditempeli penggaris.

## Cara cepat: sekadar membuat PDF

Ketika Anda hanya butuh sesuatu yang terbaca untuk dikirim:

1. Buka [app.kulmanlab.com](https://app.kulmanlab.com) dan seret `.dxf` Anda ke kanvas, atau gunakan tombol **Import** di panel file.
2. Klik tombol **Print**, atau ketik `printmanager`.
3. Setel **Format** ke **PDF**.
4. Klik **Export**. File akan terunduh.

Selesai. Pratinjau dirender melalui jalur kode dan resolusi yang persis sama dengan file yang diekspor, jadi yang Anda lihat itulah yang Anda dapat, bukan perkiraannya.

Satu hal yang layak diketahui: **PDF mempertahankan semua yang ada di layar** — dimensi, teks, arsiran, leader — tertata persis seperti digambar. Ekspor DXF juga membawa semua itu, jadi pilihan di antara keduanya bukan soal apa yang bertahan. Soalnya apa yang dibutuhkan penerima: PDF kalau ia hanya perlu membaca atau mencetaknya, DXF kalau ia harus menyuntingnya.

## Cara yang benar: mengonversi pada skala persis

Kalau ada orang yang akan mengukur atau membuat sesuatu dari gambar ini, "muat dalam satu halaman" tidaklah cukup. Skala 1:50 berarti 1 mm di kertas sama dengan 50 mm pada kenyataan, dan itu hanya berlaku bila Anda menetapkannya dengan sengaja.

1. **Pindah ke tata letak kertas.** Klik tab tata letak di bagian bawah layar; tombol **+** menambah tata letak baru. Tata letak adalah ruang kertas; ruang model tidak punya halaman untuk dijadikan acuan skala.
2. **Tentukan lembarnya.** Ketik `pagemanager`, atau klik kanan tab tata letak lalu pilih **Page Manager**. Pilih ukuran kertas (A4, A3, A2, Letter…) dan orientasi.
3. **Tempatkan viewport.** Ketik `viewportrectangle` lalu tentukan dua sudut yang berseberangan. Viewport adalah jendela ke arah model Anda.
4. **Setel skalanya.** Dengan viewport aktif, gunakan **pemilih skala** di bilah kontrol. Pilih rasio standar atau ketik sendiri — diterima dalam bentuk rasio (`1:200`, `5:1`) maupun desimal biasa (`0.005`), lalu Enter.
5. **Ekspor.** Print Manager → PDF → Export.

PDF diberi ukuran agar halaman tercetak pada skala fisik yang sebenarnya. Cetak pada 100% — jangan sekali-kali dengan "sesuaikan ke halaman", yang diam-diam menskalakan ulang segalanya dan menggagalkan seluruh pekerjaan — maka ukuran di kertas akan tepat.

Jika setelah itu Anda mengubah ukuran kertas atau skala, viewport yang sudah ada akan ikut diskalakan secara proporsional, sehingga tata letaknya tidak berantakan.

## Memilih kualitas

Menu **Quality** menentukan DPI saat PDF dirender:

| Quality | DPI | Untuk apa |
|---|---|---|
| Draft | 72 | Pemeriksaan cepat, file terkecil |
| Normal | 150 | Bawaan — cukup untuk lampiran A4 |
| Presentation | 300 | Saat akan dilihat dari dekat |
| Max | 600 | Format besar, detail halus |

Ketebalan garis ikut menskala bersama resolusi, jadi sebuah garis mempertahankan ketebalan *fisik* yang sama di kertas pada setiap setelan — kualitas lebih tinggi menghasilkan garis lebih tajam, bukan lebih tipis. Pengecualiannya adalah garis rambut (ketebalan `0`), yang menurut konvensi tetap selebar satu piksel di semua tingkat.

## Gaya cetak

Menu **Style** mengubah tinta sekaligus halaman:

- **Monochrome** — hitam pekat di atas putih, dan inilah bawaannya. Ini yang Anda inginkan untuk apa pun yang akan naik ke kertas: layer berwarna yang terbaca bagus di layar berubah menjadi abu-abu keruh pada printer laser.
- **Default** — tiap objek dengan warnanya sendiri, halaman putih.
- **Blueprint** — garis putih di atas biru Prusia pekat, bergaya cetak biru klasik. Untuk presentasi, bukan untuk bengkel.

## Mengonversi sebagian gambar saja

**Change Area** memangkas ekspor menjadi persegi panjang yang Anda tarik di kanvas. Yang dipangkas adalah file yang benar-benar diekspor, bukan sekadar pratinjau, dan ini bekerja baik pada tata letak maupun di ruang model.

Sudut-sudutnya mengunci ke grip dan perpotongan seperti penentuan titik lainnya, jadi Anda bisa memangkas mengikuti geometri yang tergambar alih-alih mengira-ngira — berguna ketika satu lembar memuat empat detail dan Anda hanya butuh yang ketiga.

## Yang tidak bisa dilakukannya

Batasan yang jujur, sebelum Anda mengandalkannya:

- **PDF-nya adalah gambar raster di dalam wadah PDF, bukan vektor.** Pada A4 dengan kualitas Normal hal ini tak terlihat. Pada A1, atau saat seseorang memperbesar detail sangat dekat, PDF vektor dari paket CAD desktop akan lebih tajam. Naikkan Quality ke Presentation atau Max untuk format besar — tapi itu tidak menjadikannya vektor.
- **Tidak ada yang dikirim ke printer fisik.** Anda mendapat sebuah file; mencetaknya adalah urusan printer Anda.
- **Hanya browser desktop** — Chrome, Firefox, Safari, Edge. Tidak ada versi seluler.
- **Hanya 2D, DXF dan bukan DWG.** Kalau file Anda `.dwg`, mintalah pengirimnya mengekspor ke DXF.

## Kapan sebaiknya pakai yang lain

**Konverter file umum** (CloudConvert, Zamzar dan sejenisnya) memadai kalau Anda memang cuma butuh gambar dan tidak peduli seberapa besar ukuran cetaknya. Mereka cepat dan menangani format yang tak dibaca siapa pun. Mereka tidak akan memberi Anda 1:50 di A3.

**CAD desktop** — LibreCAD, QCAD, atau AutoCAD kalau Anda punya — menghasilkan PDF vektor dan merupakan jawaban yang tepat untuk gambar teknik format besar yang akan dicetak dengan benar dan diteliti.

**Cara ini** untuk wilayah tengah yang luas: sebuah DXF yang Anda butuhkan hari ini sebagai PDF beranotasi dengan skala yang benar, tanpa memasang apa pun.

## Sebelum mengirim

- Skala ditetapkan dengan sengaja di viewport, bukan dibiarkan pada apa pun yang kebetulan muat
- Ukuran kertas sesuai dengan yang benar-benar akan dicetak penerima
- Quality dinaikkan di atas Normal bila akan dicetak lebih besar dari A4
- Gaya Monochrome, kecuali Anda memang menginginkan warna
- PDF sudah dibuka sekali untuk diperiksa sebelum dilampirkan
- Penerima diberi tahu untuk mencetak pada 100%, bukan "sesuaikan ke halaman"

Baris terakhir itu menyelamatkan lebih banyak gambar berskala daripada semua hal lain dalam daftar ini.

---

*Terkait: [Print Manager](/id/docs/commands/print-manager/) untuk seluruh setelan ekspor, [Page Manager](/id/docs/commands/page-manager/) untuk ukuran kertas dan skala tata letak, [ViewportRectangle](/id/docs/commands/viewport-rectangle/) untuk menempatkan dan menskalakan viewport, dan [Import](/id/docs/commands/import/) untuk apa saja yang dibaca KulmanLab dari sebuah DXF.*
