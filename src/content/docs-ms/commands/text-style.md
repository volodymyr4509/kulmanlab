---
title: Perintah GayaTeks — Mengurus gaya teks
description: Cipta gaya teks CAD dengan fon, tinggi, tebal, condong, jarak baris, penjajaran dan bingkai.
keywords: [gaya teks CAD, fon CAD, bingkai teks, penjajaran teks, gaya DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Perintah `GayaTeks` membuka pengurus gaya. Cipta gaya bernama, ubah nilai lalainya dan pilih gaya *semasa*. Setiap [Teks](../text/) baharu menyalin tetapan gaya semasa ketika dicipta.

## Menggunakan pengurus

Taip `GayaTeks` atau klik **Gaya teks** dalam panel anotasi. Tanda ✓ menunjukkan gaya semasa; klik dua kali pada baris untuk menjadikan gaya itu semasa.

| Medan | Fungsi |
|---|---|
| Namakan semula | Gunakan ikon pensel di sebelah nama untuk menyuntingnya dalam senarai; `Standard` tidak boleh dinamakan semula. |
| Fon / Tinggi | Rupa taip dan tinggi positif wajib. Nilai sifar atau negatif menjadi `1`; pengurus hanya menerima nilai melebihi `0`. |
| Tebal / Condong | Pemformatan yang boleh ditogol secara berasingan |
| Jarak Baris | Ruang antara baris teks |
| Penjajaran Mendatar | Kiri, tengah, kanan atau sama rata |
| Bingkai | Bingkai segi empat tepat untuk teks baharu |

Pratonton menggunakan pemapar yang sama dengan kanvas dan menunjukkan dua baris. Fon, tinggi, tebal, condong, bingkai, jarak baris dan penjajaran dikemas kini serta-merta; bacaan menunjukkan zum muat. Gaya baharu menggunakan penjajaran **kiri** secara lalai.

**Baharu** menggandakan gaya yang dipilih. **Padam** tidak boleh membuang `Standard` atau gaya semasa. **Jadikan semasa** hanya mempengaruhi teks yang dicipta selepas itu; teks sedia ada tidak berubah. Nama kosong, berulang atau tidak sah untuk DXF akan menyahaktifkan **OK**. Gaya anotatif yang diimport disembunyikan tetapi datanya dikekalkan.

## Menyimpan dan DXF

**OK** menyimpan perubahan; **Tutup** atau `Escape` membatalkannya. Gunakan `↑` dan `↓` untuk bergerak dalam senarai. Nama, fail fon, tinggi, tebal, condong dan bendera anotatif ialah sebahagian daripada gaya DXF. Bingkai, jarak baris dan penjajaran ialah nilai lalai per teks dalam KulmanLab, bukan medan jadual STYLE.

Lihat juga [Text](../text/), [FontManager](../font-manager/) dan [MatchProperties](../match-properties/).
