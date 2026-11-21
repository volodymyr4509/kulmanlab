---
title: "Perintah BlockCreate — Membuat blok dari objek"
description: "Perintah BlockCreate membuat blok bernama dari objek yang dipilih, dengan titik dasar pilihan Anda, dan menggantinya dengan satu referensi ke blok itu. Blok lalu bisa ditempatkan berkali-kali dengan BlockInsert."
keywords: ["buat blok CAD", "blok dari objek CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Perintah `BuatBlok` membuat **blok**: sekelompok objek bernama yang disimpan sekali dalam gambar dan ditempatkan sesering yang Anda mau dengan [Block Insert](../block-insert/). Objek yang dipilih menjadi blok, dan di gambar digantikan satu referensi ke blok itu, jadi tampilannya tidak berubah.

## Membuat blok

1. Pilih objek lebih dulu jika mau, lalu ketik `BuatBlok` atau klik **Buat blok** di panel **Blok**. Sebuah popup terbuka dengan pilihan sudah di dalamnya.
2. Ketik **Nama**. Tidak boleh kosong, tidak boleh memuat salah satu dari `< > / \ " : ; ? * | , =` atau tanda petik balik, dan tidak boleh sama dengan nama blok lain.
3. Klik **Pilih objek** untuk menambah atau mengurangi objek: popup tersembunyi, lalu Anda mengklik objek atau menyeret area. Tekan **Enter** atau **Space** untuk kembali ke popup, tempat **Objek** menunjukkan jumlahnya.
4. Atur **Titik dasar**, titik yang dipakai untuk menempatkan blok: ketik X dan Y-nya, atau klik **Pilih titik** lalu klik di kanvas (atau ketik X,Y di sana). Awalnya 0,0.
5. Klik **OK**. Blok disimpan, objek digantikan satu referensi ke blok itu di titik dasar, dan terminal mencatat nama blok serta jumlah objek di dalamnya.

## Perlu diketahui

- **OK** tetap nonaktif selama ada yang salah, dan pesan di bawah kolom menyebut apa: nama kosong atau tak bisa dipakai, nama yang sudah ada, atau tidak ada objek.
- **Escape** saat memilih objek atau titik dasar kembali ke popup dengan blok seperti semula. **Escape** di popup membatalkan perintah.
- Blok disimpan bersama gambar dan ditulis ke DXF beserta referensinya.

---

*Terkait: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
