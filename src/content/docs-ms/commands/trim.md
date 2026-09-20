---
title: Arahan Trim — Potong Segmen di Persimpangan
description: Arahan Trim membuang bahagian Line, Arc, Circle, Ellipse atau Polyline antara dua titik persimpangan bersebelahan yang paling hampir dengan kursor. Pratonton menunjukkan tepat segmen yang akan dipotong sebelum anda mengklik.
keywords: [arahan potong CAD, potong garis CAD, potong bulatan CAD, potong lengkok CAD, potong elips CAD, potong polyline CAD, potong garis persimpangan, pratonton hover potong, kulmanlab]
group: edit
order: 8
---

# Trim

Arahan `Pangkas` membuang bahagian [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) atau [Polyline](../polyline/) yang terletak antara dua titik persimpangan bersebelahan, membelah entiti menjadi satu atau lebih bahagian yang tinggal. Segmen yang dipotong ditentukan oleh kedudukan kursor — tuding ke bahagian yang ingin anda buang dan klik untuk memotongnya.

## Memotong entiti

1. Taip `Pangkas` dalam terminal atau klik butang bar alat **Trim**.
2. **Tuding ke segmen** yang ingin anda buang — pratonton menyerlahkan tepat bahagian yang akan dipotong.
3. **Klik** untuk membuang segmen tersebut.

Arahan kekal aktif selepas setiap potongan, jadi anda boleh terus menuding dan mengklik untuk memotong lebih banyak segmen — pada entiti yang sama atau entiti lain. Tekan **Enter**, **Space**, atau **Escape** untuk keluar.

```
  Sebelum:                     Selepas memotong segmen tengah:

  ──────●──────●──────        ──────●          ●──────
      persimpang  persimpang       (bahagian kiri)  (bahagian kanan)
                               (segmen tengah dibuang)
```

## Bagaimana segmen potong ditentukan

Arahan mengunjurkan kedudukan kursor ke atas entiti yang dituding dan mencari semua titik persimpangan yang ada dengan entiti lain. Persimpangan ini membahagikan entiti kepada segmen — untuk Line, Arc atau Polyline terbuka, titik akhir entiti itu sendiri berfungsi sebagai sempadan tetap tambahan. Circle atau Ellipse penuh, atau Polyline tertutup (termasuk Rectangle), tidak mempunyai titik akhir sendiri, jadi sekurang-kurangnya dua titik persimpangan diperlukan sebelum ia boleh dipotong sama sekali. Segmen yang selangnya mengandungi unjuran kursor diserlahkan dan akan dibuang semasa diklik.

- **Line, Arc dan Polyline terbuka** — segmen yang dibuang boleh menjadi bahagian hadapan (sebelum persimpangan pertama), bahagian tengah (antara dua persimpangan, membahagikan entiti kepada dua), atau bahagian belakang (selepas persimpangan terakhir).
- **Circle, Ellipse dan Polyline tertutup/Rectangle** — kerana tiada permulaan atau penghujung tetap, hanya lengkok antara dua *titik persimpangan* boleh dibuang. Jika persimpangan kurang daripada dua, tiada pratonton ditunjukkan dan mengklik tidak membuat apa-apa. Baki bentuk menjadi satu-satunya bahagian yang tinggal.

## Apa yang dihasilkan oleh pemotongan

| Entiti | Hasil selepas dipotong |
|--------|------------------------|
| Line | Sehingga dua entiti Line yang lebih pendek |
| Arc | Sehingga dua entiti Arc yang lebih pendek |
| Circle | Satu entiti [Arc](../arc/) — bentuk tertutup bulatan hilang, jadi bahagian yang tinggal disimpan sebagai lengkok |
| Ellipse | Satu entiti Ellipse dengan sudut permulaan dan penghujung — bahagian yang tinggal kekal sebagai Ellipse, kini separa |
| Polyline (terbuka) | Sehingga dua entiti Polyline yang lebih pendek |
| Polyline (tertutup) / Rectangle | Satu entiti Polyline terbuka — bentuk tertutup hilang, jadi bahagian yang tinggal disimpan terbuka |

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Keluar dari mod trim |
| `Escape` | Keluar dari mod trim |

## Entiti yang disokong

| Entiti | Boleh dipotong? |
|--------|----------------|
| Line | Ya |
| Arc | Ya |
| Circle | Ya — memerlukan 2 atau lebih titik persimpangan |
| Ellipse | Ya — memerlukan 2 atau lebih titik persimpangan |
| Polyline (terbuka) | Ya |
| Polyline (tertutup) / Rectangle | Ya — memerlukan 2 atau lebih titik persimpangan |
| Text, Spline, Dimension, Leader | Tidak |

Entiti yang digunakan sebagai **sempadan pemotongan** boleh menjadi Line, Arc, Circle, Ellipse atau Polyline. Entiti Text, Spline, Dimension dan Leader tidak pernah mencatat persimpangan, jadi ia juga tidak boleh berfungsi sebagai sempadan.

**Segmen lengkok** Polyline (dilukis dengan suis Arc, atau diimport) dipotong sama seperti segmen lurusnya — tuding kursor ke atas bahagian lengkok antara dua persilangan dan klik. Tepi yang dipotong mengekalkan kelengkungannya; hanya panjangnya berubah.

## Trim berbanding Extend

| | Trim | Extend |
|---|------|--------|
| Fungsinya | Membuang segmen entiti | Meregangkan titik akhir garis ke sempadan |
| Pencetus | Tuding ke segmen yang ingin dipotong | Tuding berhampiran titik akhir untuk dipanjangkan |
| Hasil | Entiti berpecah atau memendek | Titik akhir garis bergerak ke sempadan |
| Entiti yang disokong | Line, Arc, Circle, Ellipse, Polyline | Line, Arc, Ellipse, Polyline |
