---
title: "Perintah Explode — memecah polyline atau blok menjadi bagian-bagiannya"
description: "Perintah Explode memecah polyline menjadi entitas Line dan Arc, atau referensi blok menjadi entitas yang digambar bloknya, di tempat. Potongannya tampak persis seperti aslinya."
keywords: [perintah explode CAD, ledakkan polyline CAD, pecah polyline menjadi garis, ubah polyline menjadi line dan arc, kulmanlab]
group: edit
order: 19
---

# Explode

Perintah `Uraikan` memecah [Polyline](../polyline/) menjadi entitas [Line](../line/) dan [Arc](../arc/) individualnya — satu per segmen, tepat di tempat titik-titik sudut polyline itu sendiri berada. Bagian-bagian ini menggantikan polyline di tempat dan mempertahankan ketebalan garis, warna, layer, dan jenis garisnya.

Explode bekerja pada entitas **Polyline** dan **referensi blok**.

## Menggunakan explode

Dua cara untuk menjalankannya, pola yang sama seperti [Delete](../delete/):

**Pilih dulu, lalu explode** — jalan tercepat:

1. Pilih satu atau lebih polyline di kanvas.
2. Ketik `Uraikan` di terminal, atau pilih **Explode** dari dropdown di panel Edit.

Polyline yang dipilih langsung di-explode — tanpa langkah konfirmasi terpisah, karena sesuatu sudah dipilih.

**Aktifkan, lalu pilih**:

1. Ketik `Uraikan` atau pilih **Explode** dari dropdown tanpa ada yang dipilih.
2. **Pilih polyline atau referensi blok** — klik untuk beralih, atau seret untuk memilih per area.
3. Tekan **Enter** atau **Spasi** untuk mengonfirmasi dan meng-explode polyline yang dipilih.

Selama pemilihan hanya polyline dan referensi blok yang diambil — mengklik Line, Circle, atau entitas lain tidak berbuat apa-apa, dan seret area mengabaikan semua yang lain di dalam atau yang memotongnya.

## Apa yang dihasilkan

Setiap segmen polyline menjadi entitasnya sendiri:

- **Segmen lurus** menjadi **Line**.
- **Segmen busur** (dari [opsi Arc](../polyline/) Polyline) menjadi **Arc**, sesuai persis dengan pusat, radius, dan sapuan kurva aslinya.

Setiap Line dan Arc yang dihasilkan mewarisi **ketebalan garis, warna, layer, jenis garis, dan skala jenis garis** dari polyline sumber — tidak ada yang berubah dari tampilan geometrinya, hanya saja sekarang menjadi beberapa entitas independen alih-alih satu polyline yang terhubung.

**Referensi blok** menjadi entitas yang digambar bloknya, ditempatkan di tempat referensi menampilkannya. Entitas yang disembunyikan blok — keadaan lain dari blok dinamis — ditinggalkan; setiap atribut menjadi Text biasa dengan nilainya; potongan yang digambar ByBlock mengambil warna referensi, dan potongan di layer 0 mengambil layernya. Blok bersarang keluar sebagai referensi blok tersendiri, yang bisa Anda pecah lagi. Referensi dengan skala berbeda di X dan Y tidak diambil, karena lingkarannya harus menjadi elips.

Explode dapat dibatalkan dalam satu langkah dengan [Undo](../undo/), seperti pengeditan lainnya.

## Pemilihan selama perintah

| Metode | Perilaku |
|--------|----------|
| **Klik** | Memasukkan atau mengeluarkan polyline atau referensi blok di bawah kursor dari pilihan; mengklik entitas lain tidak berbuat apa-apa |
| **Seret ke kanan** (ketat) | Hanya memilih polyline dan referensi blok yang sepenuhnya di dalam kotak |
| **Seret ke kiri** (crossing) | Memilih polyline dan referensi blok yang memotong batas kotak |
| **Enter** / **Space** | Mengonfirmasi dan memecah pilihan |

## Entitas yang didukung

| Entitas | Didukung |
|--------|-----------|
| Polyline / Rectangle | Ya |
| Referensi blok | Ya, kecuali skalanya berbeda di X dan Y |
| Line, Arc, Circle, Ellipse | Tidak — tidak ada yang perlu di-explode |
| Text, Spline, Dimension, Leader, Hatch | Tidak |
