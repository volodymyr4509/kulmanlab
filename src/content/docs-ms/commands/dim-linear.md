---
title: Arahan Dimension Linear — Dimensi Mendatar dan Menegak
description: Arahan Dimension Linear mengukur jarak mendatar atau menegak antara dua titik. Garis dimensi sentiasa sejajar paksi — tekan H atau V untuk mengunci orientasi, atau biarkan kedudukan kursor menentukan secara automatik. Pusingan penuh DXF sebagai entiti DIMENSION.
keywords: [CAD dimensi linear, dimensi mendatar CAD, dimensi menegak CAD, dimlinear, kunci orientasi H V, offset dimensi, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Arahan `dimlinear` meletakkan dimensi mendatar atau menegak antara dua asal garis sambungan. Garis dimensi sentiasa berjalan sama ada mendatar atau menegak sepenuhnya — ia tidak boleh diletakkan pada sudut sewenang-wenangnya. Gunakan [Dimension Aligned](../dim-aligned/) apabila anda memerlukan dimensi selari dengan garis pepenjuru.

## Anatomi dimensi linear

```
  |←————— 5.00 —————→|
  |                   |
  ●  (garis sambungan 1)     ●  (garis sambungan 2)
  p1                  p2
```

- **Garis sambungan** — jatuh dari setiap titik yang diukur berserenjang dengan garis dimensi.
- **Garis dimensi** — mendatar (mengukur jarak X) atau menegak (mengukur jarak Y).
- **Nilai** — jarak yang diunjurkan sepanjang paksi yang dipilih, bukan jarak titik ke titik sebenar.

## Meletakkan dimensi linear

1. Taip `dimlinear` dalam terminal atau klik butang bar alat **Dimension Linear**.
2. **Klik asal garis sambungan pertama** (p1), atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik asal garis sambungan kedua** (p2). Kemasukan koordinat juga berfungsi di sini.
4. **Gerakkan kursor** untuk meletakkan garis dimensi. Orientasi dikesan secara automatik dari kedudukan kursor.
5. **Klik** untuk meletakkan, atau taip jarak offset dan tekan **Enter** untuk peletakan tepat.

## Pengesanan orientasi automatik

Apabila tiada orientasi dipaksa, arahan membaca kedudukan kursor relatif kepada dua titik yang diukur:

| Kedudukan kursor | Orientasi yang dikesan | Apa yang diukur |
|-----------------|----------------------|----------------|
| Di atas atau di bawah titik | Mendatar | Δ X antara p1 dan p2 |
| Di kiri atau kanan titik | Menegak | Δ Y antara p1 dan p2 |

Tekan **H** untuk mengunci mendatar atau **V** untuk mengunci menegak pada bila-bila masa semasa fasa peletakan. Setelah dikunci, orientasi tidak berubah semasa anda menggerakkan kursor.

## Jarak offset bertaip

Taip nombor semasa peletakan untuk menetapkan garis dimensi pada jarak tepat dari titik yang diukur:

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada jarak offset |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` / `Space` | Letakkan pada jarak yang ditaip |

Sisi kursor (atas/bawah untuk mendatar, kiri/kanan untuk menegak) menentukan tanda — garis dimensi muncul di sisi di mana kursor kini berada.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X (fasa p1/p2), atau jarak offset (fasa peletakan) |
| `,` | Kunci X dan beralih ke kemasukan Y (fasa p1/p2) |
| `H` | Kunci orientasi mendatar (fasa peletakan sahaja) |
| `V` | Kunci orientasi menegak (fasa peletakan sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` / `Space` | Sahkan koordinat atau offset yang ditaip |
| `Escape` | Batal |

## Dimension Linear berbanding Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Paksi | Sentiasa H atau V | Selari dengan garis yang diukur |
| Mengukur | Komponen X atau Y sahaja | Jarak Euclidean sebenar |
| Kekunci H/V | Ya — kunci orientasi | Tidak — sentiasa mengikuti p1→p2 |
| Terbaik untuk | Susun atur ortogon, pelan lantai | Ciri pepenjuru, potongan bercerun |

## Mengedit label — mod mudah

**Klik dua kali** dimensi linear yang diletakkan untuk membuka editor teks dalam mod **mudah**. Editor diisi terlebih dahulu dengan nilai yang dirender semasa supaya anda boleh meletakkan kursor dan mengeditnya terus.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | Mengkomit nilai dan menutup editor |
| Berbilang baris | Tidak disokong |

Lihat [Text Editor — mod mudah](../../interface/text-editor/#simple-mode) untuk rujukan penuh.

## Merantai dimensi

Untuk menambah lebih banyak dimensi yang diteruskan dari garis sambungan terakhir, gunakan [Dimension Continue](../dim-continue/) serta-merta selepas meletakkan yang ini.

## DXF — entiti DIMENSION

Dimensi linear disimpan sebagai entiti `DIMENSION` dengan `rotationDeg` ditetapkan ke `0` (mendatar) atau `90` (menegak). Asal garis sambungan, kedudukan garis dimensi, kedudukan teks, nilai yang diukur, gaya anak panah, ketinggian teks, dan semua bendera paparan pusingan penuh tanpa kehilangan.
