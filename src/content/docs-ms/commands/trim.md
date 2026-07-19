---
title: Arahan Trim — Potong Segmen Garis pada Persimpangan
description: Arahan Trim membuang bahagian Line antara dua titik persimpangan bersebelahan yang paling hampir dengan kursor. Pratonton hover merah menunjukkan tepat segmen yang akan dipotong sebelum anda mengklik. Trim hanya berfungsi pada entiti Line — bukan lengkok, bulatan, atau poliline.
keywords: [arahan potong CAD, potong garis CAD, potong garis persimpangan, pratonton hover potong, garis sahaja potong, kulmanlab]
group: edit
order: 8
---

# Trim

Arahan `trim` membuang bahagian [Line](../line/) yang terletak antara dua titik persimpangan bersebelahan, membelah garis menjadi satu atau dua segmen lebih pendek. Segmen yang dipotong ditentukan oleh kedudukan kursor — tuding ke bahagian yang ingin anda buang dan klik untuk memotongnya.

Trim hanya berfungsi pada **entiti Line**. Untuk lengkok, bulatan, poliline, dan jenis entiti lain gunakan [Delete](../delete/) atau pengeditan grip sebagai gantinya.

## Memotong garis

1. Taip `trim` dalam terminal atau klik butang bar alat **Trim**.
2. **Tuding ke segmen garis** yang ingin anda buang — pratonton merah menyerlahkan tepat bahagian yang akan dipotong.
3. **Klik** untuk membuang segmen tersebut.

Arahan kekal aktif selepas setiap potongan, jadi anda boleh terus menuding dan mengklik untuk memotong lebih banyak segmen. Tekan **Escape** untuk keluar.

```
  Sebelum:                     Selepas memotong segmen tengah:

  ──────●──────●──────        ──────●          ●──────
      persimpang  persimpang       (bahagian kiri)  (bahagian kanan)
                               (segmen tengah dibuang)
```

## Bagaimana segmen potong ditentukan

Arahan mengunjurkan kedudukan kursor ke atas garis yang dituding dan mencari semua titik persimpangan yang ada dengan entiti lain. Parameter persimpangan ini membahagikan garis kepada segmen. Segmen yang selangnya mengandungi unjuran kursor diserlahkan dan akan dibuang semasa diklik.

- Jika kursor berada **sebelum persimpangan pertama**: bahagian hadapan garis itu dibuang.
- Jika kursor berada **antara dua persimpangan**: bahagian tengah itu dibuang; garis berpecah menjadi dua.
- Jika kursor berada **selepas persimpangan terakhir**: bahagian belakang itu dibuang.
- Jika garis **tidak mempunyai persimpangan** dengan mana-mana entiti lain: tiada pratonton ditunjukkan dan mengklik tidak membuat apa-apa.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Escape` | Keluar dari mod trim |

## Entiti yang disokong

| Entiti | Boleh dipotong? |
|--------|----------------|
| Line | Ya |
| Arc, Circle, Ellipse | Tidak |
| Polyline / Rectangle | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

Entiti yang digunakan sebagai **sempadan pemotongan** boleh menjadi mana-mana jenis — hanya garis yang dipotong mestilah entiti Line.

## Trim berbanding Extend

| | Trim | Extend |
|---|------|--------|
| Fungsinya | Membuang segmen garis | Meregangkan titik akhir garis ke sempadan |
| Pencetus | Tuding ke segmen yang ingin dipotong | Tuding berhampiran titik akhir untuk dipanjangkan |
| Hasil | Garis berpecah atau memendek | Titik akhir garis bergerak ke sempadan |
| Kedua-duanya | Garis sahaja | Garis sahaja |
