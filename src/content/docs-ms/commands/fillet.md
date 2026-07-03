---
sidebar_position: 20
title: Arahan Fillet — Bundarkan Sudut antara Dua Garis dalam KulmanLab CAD
description: Arahan Fillet menghubungkan dua entiti Line dengan lengkok tangen berjejari tertentu, memotong setiap garis kembali ke titik tangen. Pratonton lengkok bertitik-titik membantu anda memilih sudut yang betul sebelum mengklik.
keywords: [arahan fillet CAD, bundarkan sudut CAD, lengkok fillet, lengkok tangen dua garis, kulmanlab]
---

# Fillet

Arahan `fillet` membundarkan sudut antara dua entiti [Line](../line/) dengan memasukkan lengkok tangen berjejari tertentu dan memotong setiap garis kembali ke titik di mana lengkok bermula. Hasilnya adalah sudut yang bundar dan beradi yang menghubungkan kedua-dua garis.

Fillet hanya berfungsi pada **entiti Line**.

## Menggunakan fillet

1. Taip `fillet` dalam terminal atau klik butang bar alat **Fillet**.
2. **Taip jejari fillet** dan tekan **Enter**.
3. **Klik garis pertama** — bahagian yang anda klik menentukan sisi mana persimpangan yang dikekalkan.
4. **Tuding ke garis kedua** — pratonton lengkok bertitik-titik menunjukkan fillet yang akan dihasilkan. Gerakkan kursor ke sisi yang ingin anda kekalkan.
5. **Klik** untuk menggunakan. Kedua-dua garis dipotong dan lengkok dimasukkan.

```
  Sebelum:                     Selepas fillet (jejari r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pemilihan sisi untuk garis yang bersilang

Apabila dua garis bersilang antara satu sama lain, fillet digunakan pada sudut yang ditakrifkan oleh kedudukan klik — bahagian setiap garis pada **sisi yang sama dengan kursor** dikekalkan.

- Klik berhampiran satu hujung garis pertama untuk memilih separuh itu.
- Gerakkan kursor ke separuh yang dikehendaki dari garis kedua — pratonton bertitik-titik dikemas kini secara langsung.

## Apa yang arahan cipta

- Titik akhir garis pertama yang paling hampir dengan persimpangan digerakkan ke titik tangen **T1**.
- Titik akhir garis kedua yang paling hampir dengan persimpangan digerakkan ke titik tangen **T2**.
- Entiti Arc baharu dimasukkan dari **T1** ke **T2**, tangen kepada kedua-dua garis.

Lengkok yang dimasukkan mewarisi tetapan lineweight, warna, lapisan, dan linetype semasa.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai jejari |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan jejari yang ditaip dan beralih ke pemilihan garis |
| `Escape` | Batal dan tetapkan semula |

## Entiti yang disokong

| Entiti | Disokong |
|--------|---------|
| Line | Ya — sebagai entiti pertama dan kedua |
| Arc, Circle, Ellipse, Polyline | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Fillet berbanding Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Jenis sudut | Lengkok membulat | Potongan lurus |
| Input | Satu jejari | Dua jarak (d1, d2) |
| Entiti yang dimasukkan | Arc | Line |
| Entiti yang disokong | Garis sahaja | Garis dan Poliline |
