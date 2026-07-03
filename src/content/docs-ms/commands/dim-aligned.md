---
sidebar_position: 14
title: Arahan Dimension Aligned — Dimensi Jarak Sebenar pada Mana-Mana Sudut dalam KulmanLab CAD
description: Arahan Dimension Aligned mengukur jarak garis lurus sebenar antara dua titik. Garis dimensi berjalan selari dengan garis p1→p2 pada mana-mana sudut — tidak seperti Dimension Linear yang terhad kepada mendatar atau menegak. Pusingan penuh DXF sebagai entiti DIMENSION.
keywords: [CAD dimensi aligned, dimaligned, dimensi pepenjuru CAD, dimensi jarak sebenar, dimensi bercerun CAD, kulmanlab]
---

# Dimension Aligned

Arahan `dimaligned` meletakkan dimensi yang mengukur **jarak garis lurus sebenar** antara dua titik. Garis dimensi berjalan selari dengan garis yang menghubungkan dua titik, jadi ia boleh berada pada mana-mana sudut. Ini adalah perbezaan utama dari [Dimension Linear](../dim-linear/), yang terhad kepada mendatar atau menegak.

## Anatomi dimensi aligned

```
     ●  p2
    /|
   / |  (garis sambungan 2, berserenjang dengan garis dimensi)
  /  |
 /←5.00→/
/  /
●  /  (garis sambungan 1, berserenjang dengan garis dimensi)
p1
```

- **Garis sambungan** — berserenjang dengan garis dimensi, dilukis dari setiap titik yang diukur.
- **Garis dimensi** — selari dengan p1→p2, diimbangi ke satu sisi oleh kedudukan kursor.
- **Nilai** — jarak Euclidean sebenar `|p1 – p2|`.

## Meletakkan dimensi aligned

1. Taip `dimaligned` dalam terminal atau klik butang bar alat **Dimension Aligned**.
2. **Klik asal garis sambungan pertama** (p1), atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik asal garis sambungan kedua** (p2). Kemasukan koordinat juga berfungsi di sini.
4. **Gerakkan kursor** ke satu sisi untuk menetapkan offset tegak lurus garis dimensi.
5. **Klik** untuk meletakkan, atau taip jarak offset dan tekan **Enter** untuk peletakan tepat.

## Jarak offset bertaip

Taip nombor semasa peletakan untuk menetapkan garis dimensi pada jarak tegak lurus tepat dari garis p1→p2:

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada offset |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` / `Space` | Letakkan pada offset yang ditaip |

Sisi kursor menentukan sisi mana garis dimensi muncul.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X (fasa p1/p2), atau jarak offset (fasa peletakan) |
| `,` | Kunci X dan beralih ke kemasukan Y (fasa p1/p2) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` / `Space` | Sahkan koordinat atau offset yang ditaip |
| `Escape` | Batal |

## Dimension Aligned berbanding Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Sudut garis dimensi | Selari dengan p1→p2 — mana-mana sudut | Sentiasa mendatar atau menegak |
| Mengukur | Jarak Euclidean sebenar | Komponen X atau Y sahaja |
| Kunci orientasi H/V | Tidak | Ya — kekunci `H` dan `V` |
| Terbaik untuk | Ciri pepenjuru, potongan bercerun | Susun atur ortogon, bahagian selaras grid |

## Mengedit label — mod mudah

**Klik dua kali** dimensi aligned yang diletakkan untuk membuka editor teks dalam mod **mudah**. Editor diisi terlebih dahulu dengan nilai yang dirender semasa supaya anda boleh meletakkan kursor dan mengeditnya terus.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | Mengkomit nilai dan menutup editor |
| Berbilang baris | Tidak disokong |

Lihat [Text Editor — mod mudah](../interface/text-editor#simple-mode) untuk rujukan penuh.

## Merantai dimensi

Untuk menambah lebih banyak dimensi yang diteruskan dari garis sambungan kedua yang ini, gunakan [Dimension Continue](../dim-continue/) — ia mengunci ke sudut pengukuran yang sama seperti dimensi aligned ini.

## DXF — entiti DIMENSION (jenis aligned)

Dimensi aligned disimpan sebagai entiti `DIMENSION` dengan `dimType = 1` (aligned). Asal garis sambungan, kedudukan garis dimensi, kedudukan teks, nilai yang diukur, putaran, gaya anak panah, dan semua bendera paparan pusingan penuh tanpa kehilangan.
