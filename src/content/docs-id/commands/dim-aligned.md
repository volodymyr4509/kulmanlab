---
sidebar_position: 14
title: Perintah Dimension Aligned — Dimensi Jarak Sebenarnya pada Sudut Mana Saja di KulmanLab CAD
description: Perintah Dimension Aligned mengukur jarak garis lurus yang sebenarnya antara dua titik. Garis dimensi berjalan sejajar dengan garis p1→p2 pada sudut mana saja — tidak seperti Dimension Linear yang dibatasi horizontal atau vertikal. Dukungan penuh DXF sebagai entitas DIMENSION.
keywords: [dimensi sejajar CAD, dimaligned, dimensi diagonal CAD, dimensi jarak sebenarnya, dimensi bersudut CAD, kulmanlab]
---

# Dimension Aligned

Perintah `dimaligned` menempatkan dimensi yang mengukur **jarak garis lurus yang sebenarnya** antara dua titik. Garis dimensi berjalan sejajar dengan garis yang menghubungkan dua titik, sehingga dapat berada pada sudut mana saja. Ini adalah perbedaan utama dari [Dimension Linear](../dim-linear/), yang dibatasi horizontal atau vertikal.

## Anatomi dimensi sejajar

```
     ●  p2
    /|
   / |  (garis ekst 2, tegak lurus ke garis dimensi)
  /  |
 /←5.00→/
/  /
●  /  (garis ekst 1, tegak lurus ke garis dimensi)
p1
```

- **Garis ekstensi** — tegak lurus terhadap garis dimensi, digambar dari setiap titik yang diukur.
- **Garis dimensi** — sejajar dengan p1→p2, diimbangi ke satu sisi berdasarkan posisi kursor.
- **Nilai** — jarak Euclidean yang sebenarnya `|p1 – p2|`.

## Menempatkan dimensi sejajar

1. Ketik `dimaligned` di terminal atau klik tombol toolbar **Dimension Aligned**.
2. **Klik asal garis ekstensi pertama** (p1), atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik asal garis ekstensi kedua** (p2). Entri koordinat juga berfungsi di sini.
4. **Gerakkan kursor** ke satu sisi untuk mengatur offset tegak lurus garis dimensi.
5. **Klik** untuk menempatkan, atau ketik jarak offset dan tekan **Enter** untuk penempatan tepat.

## Jarak offset yang diketik

Ketik angka selama penempatan untuk menetapkan garis dimensi pada jarak tegak lurus tepat dari garis p1→p2:

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke offset |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` / `Space` | Tempatkan pada offset yang diketik |

Sisi kursor menentukan sisi mana garis dimensi muncul.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X (fase p1/p2), atau jarak offset (fase penempatan) |
| `,` | Kunci X dan pindah ke entri Y (fase p1/p2) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` / `Space` | Konfirmasi koordinat atau offset yang diketik |
| `Escape` | Batal |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Sudut garis dimensi | Sejajar dengan p1→p2 — sudut mana saja | Selalu horizontal atau vertikal |
| Mengukur | Jarak Euclidean yang sebenarnya | Hanya komponen X atau Y |
| Kunci orientasi H/V | Tidak | Ya — tombol `H` dan `V` |
| Terbaik untuk | Fitur diagonal, potongan miring | Layout ortogonal, bagian sejajar grid |

## Mengedit label — mode sederhana

**Klik dua kali** dimensi sejajar yang ditempatkan untuk membuka editor teks dalam mode **sederhana**. Editor diisi terlebih dahulu dengan nilai yang dirender saat ini sehingga Anda dapat memposisikan kursor dan mengeditnya langsung.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Font / Height | Berlaku untuk **seluruh label** sekaligus |
| Pemformatan per karakter | Tidak didukung |
| `Enter` | Mengonfirmasi nilai dan menutup editor |
| Multi-baris | Tidak didukung |

Lihat [Text Editor — mode sederhana](../../interface/text-editor/#simple-mode) untuk referensi lengkap.

## Merantai dimensi

Untuk menambahkan lebih banyak dimensi yang berlanjut dari garis ekstensi kedua yang ini, gunakan [Dimension Continue](../dim-continue/) — itu terkunci pada sudut pengukuran yang sama dengan dimensi sejajar ini.

## DXF — entitas DIMENSION (tipe sejajar)

Dimensi sejajar disimpan sebagai entitas `DIMENSION` dengan `dimType = 1` (sejajar). Asal garis ekstensi, posisi garis dimensi, posisi teks, nilai yang diukur, rotasi, gaya panah, dan semua flag tampilan dapat dipertukarkan tanpa kehilangan data.
