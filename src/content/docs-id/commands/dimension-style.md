---
title: "Perintah GayaDimensi — membuat dan mengelola gaya dimensi bernama"
description: "Buat dan kelola gaya dimensi CAD untuk panah, garis ekstensi, tanda pusat, teks, presisi, perataan, dan kompatibilitas DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# GayaDimensi

Perintah ini membuka dialog untuk membuat, mengedit, mempratinjau, dan memilih gaya dimensi bernama. Dimensi linear, sejajar, radius, diameter, dan sudut baru menyalin gaya aktif saat dibuat; dimensi yang sudah ada tidak tetap tertaut.

## Membuka dialog

Ketik perintah lokal di terminal atau klik tombol **Gaya Dimensi** pada panel **Anotasi**. Daftar kiri memuat gaya yang terlihat; tanda centang menunjukkan gaya aktif dan pensil digunakan untuk mengganti nama.

## Garis dan panah

**Panah 1 / Panah 2 · Ukuran Panah · Offset Garis Bantu · Perpanjangan Garis Bantu · Tanda Pusat · Ukuran Tanda Pusat**

Atur kedua kepala panah secara terpisah, ukuran panah, offset dan perpanjangan garis ekstensi, serta jenis dan ukuran tanda pusat (`Tidak ada`, `Tanda`, atau `Garis`).

## Teks

**Gaya teks · Font · Tinggi Teks · Teks Berbingkai · Jarak Teks · Lekat Teks · Teks Sejajar · Presisi · Presisi sudut**

Bagian teks mengatur isi cepat dari Gaya Teks, font, tinggi, tebal, miring, bingkai, celah, satu dari sembilan posisi lampiran, perataan mengikuti garis dimensi, serta presisi linear dan sudut. Gaya Teks menyalin nilai satu kali, bukan tautan langsung.

Pratinjau memakai renderer yang sama dengan kanvas. Beralihlah antara contoh linear, radius, diameter, dan sudut untuk memeriksa panah, tanda pusat, posisi teks, presisi, dan bingkai.

## Membuat dan mengelola gaya

**Baru** menggandakan gaya terpilih. `Standard` tidak dapat diganti nama atau dihapus, dan gaya aktif juga tidak dapat dihapus. Nama harus unik, tidak kosong, dan valid untuk DXF. Gaya anotatif impor tetap tersembunyi tetapi dipertahankan.

## Menetapkan gaya aktif

**Tetapkan Aktif** menjadikan gaya terpilih sebagai templat dimensi baru; daftar panel Anotasi menyediakan pilihan yang sama. Nilai disalin saat pembuatan. Dimension Continue mewarisi seluruh tampilan dimensi dasarnya.

## Menyimpan atau membatalkan

**OK** menerapkan penggantian nama, penambahan, penghapusan, properti, dan gaya aktif sekaligus. **Tutup**, klik latar, atau `Escape` membatalkan perubahan.

## Kompatibilitas DXF

KulmanLab mengimpor dan mengekspor rekaman `DIMSTYLE` bernama, termasuk panah terpisah, garis ekstensi, teks, presisi, tanda pusat, bingkai, referensi gaya teks, dan penanda anotatif. Saat impor, override `DSTYLE` khusus entitas memiliki prioritas.

Saat ekspor, `STYLE` rujukan menggunakan tinggi variabel (`40 = 0`) dan menyimpan tinggi terakhir pada grup `42`. Ini mencegah tinggi gaya teks tetap menimpa tinggi teks milik gaya dimensi.

## Perintah terkait

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
