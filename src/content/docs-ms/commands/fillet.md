---
title: Arahan Fillet — Bundarkan Sudut dengan Lengkok Tangen
description: Arahan Fillet membundarkan sudut antara dua segmen Line, Arc atau Polyline dengan lengkok tangen berjejari tertentu. Membundarkan sudut milik poliline itu sendiri memasukkan lengkok terus ke dalamnya; membundarkan merentasi poliline terbuka menggabungkan kedua-dua belah menjadi poliline baharu.
keywords: [arahan fillet CAD, bundarkan sudut CAD, lengkok fillet, lengkok tangen, fillet poliline, fillet lengkok, kulmanlab]
group: edit
order: 11
---

# Fillet

Arahan `Fillet` membundarkan sudut antara dua segmen [Line](../line/), [Arc](../arc/) atau [Polyline](../polyline/) dengan memasukkan lengkok tangen berjejari tertentu, memotong (atau menggabungkan) entiti yang dipilih kembali ke titik tersebut.

Fillet berfungsi pada entiti **Line, Arc dan Polyline** — termasuk segmen lurus atau lengkok milik poliline itu sendiri.

## Menggunakan fillet

1. Taip `Fillet` dalam terminal atau klik butang bar alat **Fillet**.
2. **Taip jejari fillet** dan tekan **Enter**.
3. **Klik garis, lengkok atau segmen poliline pertama** — bahagian yang anda klik menentukan sisi mana persimpangan yang dikekalkan.
4. **Tuding ke entiti kedua** — pratonton lengkok bertitik-titik menunjukkan fillet yang akan dihasilkan. Gerakkan kursor ke sisi yang ingin anda kekalkan.
5. **Klik** untuk menggunakan.

```
  Sebelum:                     Selepas fillet (jejari r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pemilihan sisi untuk entiti yang bersilang

Apabila dua entiti bersilang antara satu sama lain, fillet digunakan pada sudut yang ditakrifkan oleh kedudukan klik — bahagian setiap entiti pada **sisi yang sama dengan kursor** dikekalkan.

- Klik berhampiran satu hujung entiti pertama untuk memilih separuh itu.
- Gerakkan kursor ke separuh yang dikehendaki dari entiti kedua — pratonton bertitik-titik dikemas kini secara langsung.

## Apa yang arahan cipta

Hasilnya bergantung pada apa yang anda pilih:

- **Dua entiti Line/Arc yang berdiri sendiri**, atau mana-mana pasangan tanpa poliline terbuka: kedua-duanya dipotong kembali ke titik tangen **T1**/**T2**, dan entiti Arc baharu dimasukkan di antara mereka.
- **Dua segmen daripada poliline yang sama yang berkongsi bucu sudut**: tiada entiti baharu — fillet menjadi sebahagian daripada poliline itu sendiri. Bucu sudut digantikan dengan dua titik tangen, dan lengkok di antara mereka disimpan sebagai nilai bulge tepi tersebut — persis seperti sudut poliline yang dibundarkan pergi dan balik melalui DXF.
- **Semua yang lain yang melibatkan poliline terbuka** — dua poliline terbuka yang berbeza, atau poliline terbuka dan Line/Arc yang berdiri sendiri: kedua-duanya digabungkan menjadi **satu poliline baharu**, dengan setiap belah dikekalkan hingga titik tangennya dan disatukan oleh lengkok fillet sebagai segmen bulge tambahan, menggantikan entiti asal.

Lengkok yang dimasukkan atau dipanjangkan mewarisi tetapan lineweight, warna, lapisan, dan linetype semasa (atau milik poliline itu sendiri, apabila digabungkan ke dalamnya).

## Sudut tanpa sudut sebenar untuk dibundarkan

Jika dua segmen yang dipilih sudah bertemu secara tangen pada bucu bersama — sudut poliline yang lurus, atau garis yang beralih dengan lancar ke segmen lengkok kesinambungan tangen — maka tiada sudut sebenar yang boleh dibundarkan oleh mana-mana bulatan. Fillet mengesan ini dan menolak dengan mesej `cannot fillet: no tangent circle fits there` dan bukannya melukis gelung yang tidak diingini.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai jejari |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` / `Space` | Sahkan jejari yang ditaip dan beralih ke pemilihan entiti |
| `Escape` | Batal dan tetapkan semula |

## Entiti yang disokong

| Entiti | Disokong |
|--------|---------|
| Line | Ya |
| Arc | Ya |
| Polyline (segmen lurus atau lengkok) | Ya |
| Circle, Ellipse | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Fillet berbanding Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Jenis sudut | Lengkok membulat | Potongan lurus |
| Input | Satu jejari | Dua jarak (d1, d2) |
| Entiti yang dimasukkan | Arc | Line |
| Entiti yang disokong | Line, Arc dan Polyline (segmen lurus atau lengkok) | Line dan Polyline (segmen lurus sahaja) |
