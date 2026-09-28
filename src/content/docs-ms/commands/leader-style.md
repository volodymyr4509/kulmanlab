---
title: Perintah GayaPetunjuk — Mengurus gaya garis petunjuk
description: Cipta gaya garis petunjuk CAD dengan mata anak panah, lekatan, jurang, putaran, fon, tinggi dan bingkai teks.
keywords: [gaya garis petunjuk CAD, gaya multileader, MLEADERSTYLE, mata anak panah CAD, lekatan teks, gaya DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Perintah `GayaPetunjuk` membuka pengurus gaya garis petunjuk bernama. Setiap [Penunjuk](../leader/) baharu menyalin tetapan gaya *semasa* ketika dicipta.

## Mengedit gaya

Taip `GayaPetunjuk` atau klik **Gaya Garis Petunjuk** dalam panel anotasi. ✓ menandakan gaya semasa; gunakan pensel di sebelah nama untuk menamakannya semula. Pratonton dikemas kini serta-merta dengan pemapar yang sama seperti lukisan.

| Medan | Fungsi |
|---|---|
| Lekatan Teks | Atas, Tengah, Bawah atau Garis Bawah |
| Mata / Saiz Anak Panah | Simbol dan saiz pada hujung setiap lengan |
| Jurang Pendaratan | Ruang antara pendaratan dengan teks |
| Putaran Teks | Sudut label dalam darjah |
| Gaya teks | Menyalin sekali fon, tinggi, tebal dan condong daripada [TextStyle](../text-style/) |
| Fon / Tinggi Teks | Rupa taip dan tinggi label |
| Tebal / Condong | Pemformatan teks berasingan |
| Teks Berbingkai | Bingkai segi empat tepat di sekeliling label |

**Baharu** menggandakan gaya yang dipilih. `Standard` tidak boleh dinamakan semula atau dipadam; gaya semasa juga tidak boleh dipadam. **Jadikan semasa** hanya mempengaruhi penunjuk yang dicipta selepas itu — objek sedia ada tidak berubah. Nama kosong, berulang atau tidak sah untuk DXF akan menyahaktifkan **OK**. Gaya anotatif yang diimport disembunyikan tetapi dikekalkan.

## Menyimpan dan DXF

KulmanLab mengimport dan mengeksport rekod `MLEADERSTYLE`. Nama, kepala dan saiz anak panah, jarak pendaratan, tinggi, lampiran teks, bingkai dan bendera anotatif dikekalkan sebagai medan gaya. Semasa eksport, kumpulan `342` menunjuk kepada GayaTeks dengan fon, tebal, condong dan tinggi yang sepadan; jika tiada padanan, `Standard` digunakan. Rujukan DXF ini tidak menjadikan salinan sekali dalam aplikasi sebagai pautan langsung. Satu nilai lampiran ditulis pada kedua-dua medan DXF kiri dan kanan.

Lihat juga [Leader](../leader/), [LeaderAdd](../leader-add/) dan [LeaderRemove](../leader-remove/).
