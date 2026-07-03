---
sidebar_position: 3
title: Arahan Rectangle — Lukis Segi Empat Tepat Sejajar Paksi dalam KulmanLab CAD
description: Arahan Rectangle mencipta segi empat tepat sejajar paksi daripada dua sudut bertentangan. Hasilnya adalah LWPOLYLINE tertutup dengan empat bucu — sama seperti mana-mana poliline lain selepas dicipta, jadi setiap arahan edit poliline terpakai padanya.
keywords: [arahan segi empat tepat CAD, lukis segi empat tepat CAD, segi empat tepat sejajar paksi, poliline tertutup CAD, DXF LWPOLYLINE, pengeditan grip segi empat tepat, kulmanlab]
---

# Rectangle

Arahan `rectangle` melukis segi empat tepat sejajar paksi yang ditakrifkan oleh dua klik sudut bertentangan. Hasilnya disimpan sebagai **`LWPOLYLINE` tertutup** dengan empat bucu — satu di setiap sudut. Tiada jenis entiti segi empat tepat khusus: selepas dicipta, bentuk berkelakuan persis seperti mana-mana [Polyline](../polyline/) lain dan setiap edit poliline terpakai padanya.

## Melukis segi empat tepat

1. Taip `rectangle` dalam terminal atau klik butang bar alat **Rectangle**.
2. **Klik sudut pertama**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik sudut bertentangan** — segi empat tepat diletakkan serta-merta dan arahan keluar. Kemasukan koordinat juga berfungsi di sini.

```
  ● (klik pertama)────────────┐
  |                           |
  |   pratonton langsung      |
  |   mengikuti kursor        |
  └───────────────────────────● (klik kedua)
```

Dua klik boleh menjadi mana-mana pasangan sudut pepenjuru bertentangan — atas kiri + bawah kanan, atau bawah kiri + atas kanan, dll. Urutan tidak penting.

## Kemasukan koordinat

Pada mana-mana langkah sudut anda boleh menaip kedudukan tepat:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan sudut.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Enter` | Sahkan koordinat yang ditaip |
| `Escape` | Batal |

Sisi sentiasa mendatar dan menegak — tiada penguncian sudut untuk arahan segi empat tepat.

## Pengeditan grip — membentuk semula selepas penciptaan

Segi empat tepat yang dipilih menunjukkan grip di setiap bucu dan di titik tengah setiap sisi:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Sudut** | Setiap daripada 4 bucu | Seret untuk menggerakkan bucu itu; dua sisi bersebelahan meregang untuk mengikuti — sudut bertentangan kekal tetap |
| **Tengah sisi** | Pusat setiap daripada 4 sisi | Seret untuk menterjemahkan kedua-dua titik akhir sisi tersebut bersama-sama, mengekalkan panjang dan sudut sisi |

Menyeret grip sudut mengubah segi empat tepat menjadi sisi empat bukan segi empat tepat. Jika anda hanya memerlukan segi empat tepat dengan saiz berbeza, seret sudut sambil mengekalkan sisi kira-kira ortogon, atau padamkannya dan lukis yang baharu.

## Memilih segi empat tepat

Kerana segi empat tepat adalah poliline, pemilihan berfungsi dengan cara yang sama:

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh pada mana-mana daripada empat sisi |
| **Seret kanan** (ketat) | Keempat-empat bucu mesti berada di dalam kotak pemilihan |
| **Seret kiri** (silang) | Mana-mana sisi yang menyilang sempadan kotak memilih keseluruhan segi empat tepat |

## Arahan edit yang disokong

Semua arahan edit poliline terpakai. Trim dan Extend adalah untuk [Line](../line/) sahaja dan tidak berfungsi pada segi empat tepat:

| Arahan | Apa yang berlaku pada segi empat tepat |
|--------|-----------------------------------------|
| [Move](../move/) | Menterjemahkan keempat-empat bucu dengan anjakan yang sama |
| [Copy](../copy/) | Mencipta segi empat tepat yang sama di kedudukan baru |
| [Rotate](../rotate/) | Memutar keempat-empat bucu di sekitar titik asas yang dipilih |
| [Mirror](../mirror/) | Mencerminkan keempat-empat bucu merentasi paksi cermin |
| [Scale](../scale/) | Mengskala keempat-empat bucu secara seragam dari titik asas |
| [Offset](../offset/) | Mencipta segi empat tepat selari (masuk atau keluar) pada jarak tetap |
| [Delete](../delete/) | Membuang segi empat tepat daripada lukisan |

## Sifat

Apabila segi empat tepat dipilih, panel sifat menunjukkan medan yang sama seperti mana-mana poliline:

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
| Closed | Sentiasa `true` untuk segi empat tepat |
| Vertex Count | Sentiasa `4` untuk segi empat tepat yang tidak diubah suai |
| Vertices | Koordinat keempat-empat sudut |

## Rectangle berbanding Polyline berbanding Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Cara melukis | 2 klik (sudut) | Klik setiap bucu | Klik setiap titik akhir |
| Jenis entiti | `LWPOLYLINE` tertutup | `LWPOLYLINE` terbuka atau tertutup | `LINE` setiap segmen |
| Sisi sentiasa ortogon | Ya (semasa penciptaan) | Tidak | Tidak |
| Trim / Extend | Tidak | Tidak | Ya |
| Terbaik untuk | Kotak, bingkai, kawasan segi empat tepat | Garis luar dan laluan sewenang-wenangnya | Segmen individu, garis pembinaan |

## DXF — entiti LWPOLYLINE

Segi empat tepat disimpan sebagai entiti `LWPOLYLINE` tertutup dengan empat bucu. Semua sifat — koordinat bucu, warna, lapisan, linetype, skala linetype, dan ketebalan — pusingan penuh tanpa kehilangan.

Tiada jenis `RECTANGLE` khusus dalam DXF. Apabila fail dibuka semula, bentuk muncul sebagai poliline empat bucu tertutup dan bukannya segi empat tepat. Mana-mana penampil atau editor DXF yang menyokong `LWPOLYLINE` (LibreCAD, FreeCAD, dll.) akan memaparkannya dengan betul.
