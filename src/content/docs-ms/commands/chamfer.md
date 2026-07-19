---
title: Arahan Chamfer — Potong Sudut Lurus antara Dua Garis
description: Arahan Chamfer menghubungkan dua entiti Line atau Polyline dengan potongan pepenjuru lurus. Anda menentukan dua jarak — satu sepanjang setiap entiti — dan arahan memotong kedua-duanya kembali ke titik-titik tersebut dan memasukkan garis penyambung.
keywords: [arahan chamfer CAD, chamfer garis CAD, potongan sudut pepenjuru, sudut bevel CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Arahan `chamfer` memotong sudut pepenjuru lurus antara dua entiti [Line](../line/) atau [Polyline](../polyline/). Anda menentukan seberapa jauh untuk dipotong sepanjang setiap entiti (d1 dan d2), dan arahan memotong kedua-dua entiti ke titik-titik tersebut dan memasukkan garis penyambung antara mereka.

Menggunakan jarak yang sama menghasilkan potongan 45° simetri; jarak berbeza menghasilkan bevel asimetri.

Chamfer berfungsi pada entiti **Line dan Polyline**.

## Menggunakan chamfer

1. Taip `chamfer` dalam terminal atau klik butang bar alat **Chamfer**.
2. **Taip jarak chamfer pertama** (d1 — jarak sepanjang entiti pertama) dan tekan **Enter**.
3. **Taip jarak chamfer kedua** (d2 — jarak sepanjang entiti kedua) dan tekan **Enter**.
4. **Klik entiti pertama** — bahagian yang anda klik menentukan sisi mana persimpangan yang dikekalkan.
5. **Tuding ke entiti kedua** — pratonton garis bertitik-titik menunjukkan potongan chamfer yang akan dihasilkan. Gerakkan kursor ke sisi yang ingin anda kekalkan.
6. **Klik** untuk menggunakan. Kedua-dua entiti dipotong dan garis chamfer dimasukkan.

```
  Sebelum (d1=5, d2=8):        Selepas:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Pemilihan sisi

Apabila dua garis bersilang antara satu sama lain, chamfer digunakan pada sudut yang ditakrifkan oleh kedudukan klik — bahagian setiap entiti pada **sisi yang sama dengan kursor** dikekalkan.

- Klik berhampiran satu hujung entiti pertama untuk memilih separuh itu.
- Gerakkan kursor ke separuh yang dikehendaki dari entiti kedua — pratonton bertitik-titik dikemas kini secara langsung.

Untuk Polyline, kedudukan klik menentukan **segmen** poliline mana yang terlibat, dan bucu terdekat pada sisi persimpangan adalah yang dipotong.

## Apa yang arahan cipta

- Titik akhir entiti pertama (atau bucu poliline) yang paling hampir dengan persimpangan digerakkan ke titik **T1**, terletak d1 sepanjang entiti pertama dari persimpangan.
- Titik akhir entiti kedua (atau bucu poliline) yang paling hampir dengan persimpangan digerakkan ke titik **T2**, terletak d2 sepanjang entiti kedua dari persimpangan.
- Entiti Line baharu dimasukkan dari **T1** ke **T2**.

Garis yang dimasukkan mewarisi tetapan lineweight, warna, lapisan, dan linetype semasa.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai jarak semasa |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan jarak yang ditaip dan maju |
| `Escape` | Batal dan tetapkan semula |

## Entiti yang disokong

| Entiti | Disokong |
|--------|---------|
| Line | Ya |
| Polyline / Rectangle | Ya |
| Arc, Circle, Ellipse | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Chamfer berbanding Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Jenis sudut | Potongan lurus | Lengkok membulat |
| Input | Dua jarak (d1, d2) | Satu jejari |
| Entiti yang dimasukkan | Line | Arc |
| Entiti yang disokong | Garis dan Poliline | Garis sahaja |
