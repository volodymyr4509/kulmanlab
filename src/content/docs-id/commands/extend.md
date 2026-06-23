---
sidebar_position: 10
title: Perintah Extend — Meregangkan Titik Akhir Garis ke Batas Terdekat di KulmanLab CAD
description: Perintah Extend meregangkan titik akhir terdekat dari Line yang di-hover ke perpotongan terdekat dengan entitas lain. Pratinjau langsung menampilkan garis yang diperpanjang sebelum Anda klik. Extend hanya bekerja pada entitas Line dan mengabaikan Text, Spline, dan Multileader sebagai batas.
keywords: [perintah perpanjang CAD, memperpanjang garis CAD, meregangkan garis ke batas, perpanjang titik akhir garis, pratinjau hover perpanjang, kulmanlab]
---

# Extend

Perintah `extend` meregangkan titik akhir terdekat dari [Line](./line) ke perpotongan terdekat yang akan terbentuk dengan entitas lain dalam gambar. Arahkan kursor dekat titik akhir yang ingin diperpanjang — pratinjau menampilkan garis yang diperpanjang — kemudian klik untuk menerapkannya.

Extend hanya bekerja pada **entitas Line**. Batas yang dituju garis dapat berupa tipe entitas lain mana pun kecuali Text, Mtext, Multileader, dan Spline.

## Memperpanjang garis

1. Ketik `extend` di terminal atau klik tombol toolbar **Extend**.
2. **Arahkan kursor dekat salah satu ujung garis** — pratinjau menampilkan garis yang diperpanjang ke batas terdekat dalam arah tersebut.
3. **Klik** untuk menerapkan perpanjangan.

Perintah tetap aktif setelah setiap perpanjangan sehingga Anda dapat memperpanjang beberapa garis secara berurutan. Tekan **Escape** untuk keluar.

```
  Sebelum:                      Sesudah:

  ──────           |           ──────────────|
  (garis pendek)   (batas)     (diperpanjang ke batas)
```

## Cara titik akhir dipilih

Perintah melihat titik akhir mana yang lebih dekat dengan kursor:

- Kursor **lebih dekat ke titik akhir** → ujung diperpanjang ke depan sepanjang arah garis.
- Kursor **lebih dekat ke titik awal** → awal diperpanjang ke belakang (dalam arah berlawanan).

Sinar dikirimkan dari titik akhir yang dipilih sepanjang arah garis, dan **perpotongan terdekat** sepanjang sinar tersebut dengan entitas lain (kecuali garis itu sendiri dan tipe yang diabaikan) menjadi titik akhir baru.

Jika tidak ditemukan perpotongan dalam arah tersebut, tidak ada pratinjau yang muncul dan mengklik tidak melakukan apa-apa.

## Pengecualian batas

Tipe entitas berikut diabaikan sebagai batas — garis tidak diperpanjang untuk bertemu dengannya:

- Text / Mtext
- Multileader
- Spline

Semua tipe lain (Line, Arc, Circle, Ellipse, Polyline, Dimension) berfungsi sebagai batas yang valid.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` | Keluar dari mode extend |

## Entitas yang didukung

| Entitas | Dapat diperpanjang? |
|--------|----------------|
| Line | Ya |
| Arc, Circle, Ellipse | Tidak |
| Polyline / Rectangle | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Fungsi | Meregangkan titik akhir garis ke batas | Menghapus segmen garis |
| Pemicu | Arahkan kursor dekat titik akhir yang akan diregangkan | Arahkan kursor ke segmen yang akan dipotong |
| Hasil | Titik akhir garis berpindah ke luar | Garis terpecah atau memendek |
| Keduanya | Hanya garis | Hanya garis |
