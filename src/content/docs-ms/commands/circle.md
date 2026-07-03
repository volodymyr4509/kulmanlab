---
sidebar_position: 4
title: Arahan Circle — Lukis Bulatan mengikut Pusat dan Jejari dalam KulmanLab CAD
description: Arahan Circle meletakkan bulatan dengan mengklik titik pusat kemudian mengklik atau menaip jejari. Empat grip kardinal membolehkan anda mengubah saiz jejari dengan menyeret tanpa menjalankan semula arahan. Pusingan penuh DXF sebagai entiti CIRCLE.
keywords: [arahan bulatan CAD, lukis bulatan CAD, input jejari bulatan, grip ubah saiz bulatan, entiti DXF CIRCLE, dimradius bulatan, kulmanlab]
---

# Circle

Arahan `circle` melukis bulatan yang ditakrifkan oleh titik pusat dan jejari. Selepas pusat diklik, anda boleh menetapkan jejari sama ada dengan mengklik titik kedua pada kanvas atau dengan menaip nombor tepat — kedua-dua pilihan aktif pada masa yang sama.

## Melukis bulatan

1. Taip `circle` dalam terminal atau klik butang bar alat **Circle**.
2. **Klik titik pusat**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Tetapkan jejari — sama ada:
   - **Klik mana-mana titik** pada kanvas — jarak dari pusat menjadi jejari, atau
   - **Taip jejari** dan tekan **Enter** untuk nilai tepat.

Bulatan diletakkan serta-merta dan arahan keluar.

```
  pusat ●
          \  pratonton garis jejari
           \
            ● ← klik di sini, atau taip nombor
```

Semasa dalam fasa jejari, pratonton langsung menunjukkan bulatan pada jarak kursor semasa dan juga melukis garis jejari dari pusat ke titik semasa.

## Kemasukan koordinat pusat

Daripada mengklik, anda boleh menaip kedudukan pusat:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan pusat dan meneruskan ke input jejari.

## Input jejari bertaip

Selepas pusat diletakkan, menaip serta-merta membina nilai jejari:

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai jejari |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan bulatan pada jejari yang ditaip |

Nilai yang terkumpul ditunjukkan dalam gesaan terminal (cth. `enter radius of circle: 25`). Pratonton dikemas kini untuk menunjukkan jejari yang ditaip semasa kursor mengawal arah penanda garis jejari.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X (fasa pusat), atau digit jejari (fasa jejari) |
| `,` | Kunci X dan beralih ke kemasukan Y (fasa pusat) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau jejari yang ditaip |
| `Escape` | Batal dan tetapkan semula |

## Pengeditan grip — mengubah saiz jejari

Bulatan yang dipilih mendedahkan lima grip:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Pusat** | Titik pusat | Menggerakkan keseluruhan bulatan; jejari kekal tidak berubah |
| **Kiri** | Titik paling kiri (pusat − jejari) | Seret untuk menetapkan jejari baru = jarak ke pusat |
| **Kanan** | Titik paling kanan (pusat + jejari) | Seret untuk menetapkan jejari baru = jarak ke pusat |
| **Atas** | Titik paling atas | Seret untuk menetapkan jejari baru = jarak ke pusat |
| **Bawah** | Titik paling bawah | Seret untuk menetapkan jejari baru = jarak ke pusat |

Keempat-empat grip kardinal berkelakuan sama — jejari baru bersamaan jarak dari pusat ke kedudukan seret. Pusat kekal tetap.

## Memilih bulatan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh berhampiran lilitan |
| **Seret kanan** (ketat) | Keseluruhan kotak sempadan (pusat ± jejari) mesti berada di dalam kotak |
| **Seret kiri** (silang) | Mana-mana bahagian lilitan yang menyilang atau menyentuh sempadan kotak memilih bulatan |

## Arahan edit yang disokong

| Arahan | Apa yang berlaku pada bulatan |
|--------|-----------------------------|
| [Move](../move/) | Menterjemahkan pusat; jejari tidak berubah |
| [Copy](../copy/) | Mencipta bulatan yang sama di pusat baru |
| [Rotate](../rotate/) | Memutar pusat di sekitar titik asas; jejari tidak berubah |
| [Mirror](../mirror/) | Mencerminkan pusat merentasi paksi cermin; jejari tidak berubah |
| [Scale](../scale/) | Mengskala kedudukan pusat dan mendarab jejari dengan faktor skala |
| [Offset](../offset/) | Mencipta bulatan konsentrik pada jejari lebih besar atau lebih kecil |
| [Delete](../delete/) | Membuang bulatan |

## Sifat

**Umum**

| Sifat | Lalai | Maksud |
|-------|-------|--------|
| Color | 256 (ByLayer) | Indeks warna ACI |
| Layer | `0` | Tugasan lapisan |
| Linetype | ByLayer | Corak linetype bernama |
| Linetype Scale | 1 | Faktor skala pada corak linetype |
| Thickness | 0 | Ketebalan ekstrusi |

**Geometri**

| Sifat | Maksud |
|-------|--------|
| Center X / Center Y | Koordinat titik pusat |
| Radius | Jejari bulatan dalam unit lukisan |

## Circle berbanding Arc — bila menggunakan yang mana

| | Circle | Arc |
|---|--------|-----|
| Rentang | Penuh 360° | Separa — ditakrifkan oleh sudut mula dan akhir |
| Cara melukis | Pusat + jejari | Tiga titik pada kelengkungan |
| Input bertaip | Nilai jejari | Tiada — klik sahaja |
| Grip ubah saiz | 4 titik kardinal | Titik mula dan akhir (sudut + jejari) |
| Pendimensian | Jejari: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Terbaik untuk | Lubang penuh, bulatan bolt, ciri bulat | Fillet, lengkung separa, laluan melengkung |

## DXF — entiti CIRCLE

Bulatan disimpan sebagai entiti `CIRCLE` dalam fail DXF. Koordinat pusat, jejari, warna, lapisan, linetype, skala linetype, dan ketebalan semua pusingan penuh tanpa kehilangan. Mana-mana aplikasi serasi DXF membaca ini sebagai bulatan standard.
