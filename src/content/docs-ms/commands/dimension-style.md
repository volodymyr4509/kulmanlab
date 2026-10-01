---
title: "Perintah GayaDimensi — cipta dan urus gaya dimensi bernama"
description: "Cipta dan urus gaya dimensi CAD untuk anak panah, garis sambungan, tanda pusat, teks, ketepatan, penjajaran dan DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# GayaDimensi

Perintah ini membuka dialog untuk mencipta, mengedit, pratonton dan memilih gaya dimensi bernama. Dimensi linear, sejajar, jejari, diameter dan sudut baharu menyalin gaya semasa ketika dicipta; dimensi sedia ada tidak kekal terpaut.

## Membuka dialog

Taip perintah setempat dalam terminal atau klik butang **Gaya Dimensi** pada panel **Anotasi**. Senarai kiri memaparkan gaya yang kelihatan; tanda semak menunjukkan gaya semasa dan pensel menukar namanya.

## Garisan dan anak panah

**Anak Panah 1 / Anak Panah 2 · Saiz Anak Panah · Offset Garis Sambungan · Lanjutan Garis Sambungan · Tanda Pusat · Saiz Tanda Pusat**

Tetapkan dua kepala anak panah secara berasingan, saiz anak panah, ofset dan sambungan garis, serta jenis dan saiz tanda pusat (`Tiada`, `Tanda` atau `Garis`).

## Teks

**Gaya teks · Fon · Tinggi Teks · Teks Berbingkai · Jurang Teks · Lekatan Teks · Teks Sejajar · Ketepatan · Ketepatan sudut**

Bahagian teks mengawal isi pantas daripada Gaya Teks, fon, tinggi, tebal, condong, bingkai, jurang, satu daripada sembilan kedudukan lampiran, penjajaran pada garis dimensi serta ketepatan linear dan sudut. Gaya Teks menyalin nilai sekali sahaja, bukan pautan langsung.

Pratonton menggunakan pemapar yang sama seperti kanvas. Tukar antara sampel linear, jejari, diameter dan sudut untuk menyemak anak panah, tanda pusat, kedudukan teks, ketepatan dan bingkai.

## Mencipta dan mengurus gaya

**Baharu** menduplikasi gaya dipilih. `Standard` tidak boleh dinamakan semula atau dipadam dan gaya semasa juga tidak boleh dipadam. Nama mesti unik, tidak kosong dan sah untuk DXF. Gaya anotatif diimport disembunyikan tetapi dikekalkan.

## Menetapkan gaya semasa

**Tetapkan Semasa** menjadikan gaya dipilih templat dimensi baharu; senarai panel Anotasi menawarkan pilihan yang sama. Nilai disalin semasa penciptaan. Dimension Continue mewarisi seluruh rupa dimensi asas.

## Menyimpan atau membuang

**OK** menerapkan penamaan semula, penambahan, pemadaman, sifat dan gaya semasa bersama-sama. **Tutup**, klik latar atau `Escape` membuang perubahan.

## Keserasian DXF

KulmanLab mengimport dan mengeksport rekod `DIMSTYLE` bernama termasuk anak panah berasingan, garis sambungan, teks, ketepatan, tanda pusat, bingkai, rujukan gaya teks dan bendera anotatif. Semasa import, tindanan `DSTYLE` khusus entiti diberi keutamaan.

Semasa eksport, `STYLE` dirujuk menggunakan tinggi berubah (`40 = 0`) dan menyimpan tinggi terakhir dalam kumpulan `42`. Ini menghalang tinggi gaya teks tetap daripada menindan tinggi teks gaya dimensi.

## Perintah berkaitan

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
