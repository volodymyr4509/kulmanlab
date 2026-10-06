---
title: Perintah Extend — Meregangkan Entitas ke Batas Terdekat
description: Perintah Extend meregangkan titik akhir terdekat dari Line, Arc, Ellipse, atau Polyline terbuka yang di-hover ke perpotongan terdekat dengan entitas lain. Pratinjau langsung menampilkan entitas yang diperpanjang sebelum Anda klik.
keywords: [perintah perpanjang CAD, memperpanjang garis CAD, memperpanjang busur CAD, memperpanjang elips CAD, memperpanjang polyline CAD, meregangkan entitas ke batas, pratinjau hover perpanjang, kulmanlab]
group: edit
order: 9
---

# Extend

Perintah `Perpanjang` meregangkan titik akhir terdekat dari [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/), atau Polyline terbuka yang di-hover ke perpotongan terdekat yang akan terbentuk dengan entitas lain dalam gambar. Arahkan kursor dekat titik akhir yang ingin diperpanjang — pratinjau menampilkan entitas yang diperpanjang — kemudian klik untuk menerapkannya.

Hanya entitas dengan titik akhir sebenarnya yang dapat diperpanjang. [Circle](../circle/) dan Ellipse penuh (360°) selalu berupa bentuk tertutup tanpa titik akhir, sehingga tidak pernah bisa diperpanjang — begitu juga Polyline tertutup atau Rectangle. Ellipse parsial (busur elips) dan Arc memiliki titik akhir dan diperpanjang dengan cara yang sama seperti Line.

## Memperpanjang entitas

1. Ketik `Perpanjang` di terminal atau klik tombol toolbar **Extend**.
2. **Arahkan kursor dekat salah satu ujung** entitas yang ingin diperpanjang — pratinjau menampilkannya diperpanjang ke batas terdekat dalam arah tersebut.
3. **Klik** untuk menerapkan perpanjangan.

Perintah tetap aktif setelah setiap perpanjangan, sehingga Anda dapat terus mengarahkan kursor dan mengklik untuk memperpanjang lebih banyak entitas. Tekan **Enter**, **Space**, atau **Escape** untuk keluar.

```
  Sebelum:                      Sesudah:

  ──────           |           ──────────────|
  (garis pendek)   (batas)     (diperpanjang ke batas)
```

## Cara titik akhir dipilih

Perintah melihat ujung mana yang lebih dekat dengan kursor:

- **Line dan Polyline terbuka** — kursor lebih dekat ke titik akhir memperpanjang ujung ke depan; kursor lebih dekat ke titik awal memperpanjang awal ke belakang.
- **Arc dan Ellipse parsial** — kursor lebih dekat ke salah satu ujung sudut membuat busur tumbuh ke arah tersebut, mengelilingi pusat dan radius yang sama (atau bentuk elips yang sama) hingga mencapai batas berikutnya.

Sinar — atau, untuk Arc dan Ellipse, lingkaran atau kurva dasar entitas itu sendiri — dikirimkan dari ujung yang dipilih, dan **perpotongan terdekat** dengan entitas lain (kecuali entitas itu sendiri dan tipe yang diabaikan) menjadi titik akhir baru.

Jika tidak ditemukan perpotongan dalam arah tersebut, tidak ada pratinjau yang muncul dan mengklik tidak melakukan apa-apa.

## Pengecualian batas

Tipe entitas berikut diabaikan sebagai batas — entitas tidak diperpanjang untuk bertemu dengannya:

- Text / Mtext
- Multileader

Semua tipe lain (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) berfungsi sebagai batas yang valid.

Jika segmen pertama atau terakhir dari sebuah Polyline itu sendiri adalah segmen busur (digambar dengan sakelar Arc), memperpanjangnya membuat busur tumbuh di sepanjang lingkarannya sendiri — sama seperti memperpanjang Arc mandiri — bukan memperlakukannya sebagai segmen lurus.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Keluar dari mode extend |
| `Escape` | Keluar dari mode extend |

## Entitas yang didukung

| Entitas | Dapat diperpanjang? |
|--------|----------------|
| Line | Ya |
| Arc | Ya |
| Ellipse | Ya — hanya jika sudah berupa busur parsial; ellipse penuh tidak memiliki titik akhir |
| Circle | Tidak — selalu berupa bentuk tertutup tanpa titik akhir |
| Polyline (terbuka) | Ya |
| Polyline (tertutup) / Rectangle | Tidak — selalu berupa bentuk tertutup tanpa titik akhir |
| Text, Spline, Dimension, Leader | Tidak |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Fungsi | Meregangkan titik akhir entitas ke batas | Menghapus segmen entitas |
| Pemicu | Arahkan kursor dekat titik akhir yang akan diregangkan | Arahkan kursor ke segmen yang akan dipotong |
| Hasil | Titik akhir berpindah ke luar | Entitas terpecah atau memendek |
| Entitas yang didukung | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
