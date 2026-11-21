---
title: "Perintah BlockInsert — Menempatkan blok dari blok-blok gambar"
description: "Perintah BlockInsert membuka palet pratinjau blok-blok gambar. Pilih satu, atur skala dan rotasinya, lalu klik atau ketik titik untuk menempatkannya, sekali atau berulang."
keywords: ["sisipkan blok CAD", "palet blok CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Perintah `SisipkanBlok` membuka palet pratinjau setiap blok dalam gambar dan menempatkan yang Anda pilih. Buat blok dengan [Block Create](../block-create/), atau buka file DXF yang berisi blok.

## Menempatkan blok

1. Ketik `SisipkanBlok` atau klik **Sisipkan blok** di panel **Blok**. Palet merapat di kiri dengan satu ubin pratinjau per blok, dua belas per halaman; panah di bawah ubin membalik halaman.
2. Ketik di **Cari blok** untuk menyaring ubin berdasarkan nama.
3. Atur **Skala** (harus lebih dari 0) dan **Rotasi** dalam derajat. **Ulangi penempatan** aktif secara bawaan.
4. Klik ubin sebuah blok. Blok mengikuti kursor: klik untuk menempatkannya pada titik dasarnya, atau ketik X,Y untuk posisi pasti. Saat kursor terkunci pada sebuah sudut, Anda bisa mengetik panjang.
5. Dengan **Ulangi penempatan** aktif, blok terus mengikuti kursor untuk salinan berikutnya sampai Anda menekan **Escape**. Jika nonaktif, perintah berakhir setelah satu salinan.

## Perlu diketahui

- Untuk menghapus blok, klik tempat sampah pada ubinnya dan konfirmasi. Blok yang punya referensi di gambar tidak bisa dihapus: ubinnya bertuliskan **Sedang dipakai, tidak bisa dihapus**.
- Gambar tanpa blok menampilkan **Gambar ini tidak memiliki blok** di palet.
- **Escape** menutup palet saat tidak ada yang sedang ditempatkan. Palet adalah salah satu panel yang merapat, yang ditampilkan satu per satu di kiri.

---

*Terkait: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
