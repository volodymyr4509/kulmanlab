---
title: Spline Fit — Lukis Spline Interpolasi Melalui Titik yang Diklik
description: Arahan Spline Fit melukis spline kubik yang melalui setiap titik yang diklik dengan tepat. Secara dalaman kelengkungan disimpan dengan titik fit dan bucu kawalan yang dikira. Menyeret grip titik fit menginterpolasi semula keseluruhan kelengkungan. Pusingan penuh DXF sebagai entiti SPLINE.
keywords: [arahan spline fit CAD, spline interpolasi CAD, spline melalui titik, lukis kelengkungan halus CAD, titik fit DXF SPLINE, pengeditan grip spline, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Arahan `splinefit` melukis spline kubik yang melalui setiap titik yang anda klik — kelengkungan interpolasi. Tidak seperti [Spline CV](../spline-cv/), di mana kelengkungan hanya tertarik ke arah bucu kawalan, di sini kelengkungan dipaksa untuk menyentuh setiap koordinat yang diklik dengan tepat. Secara dalaman editor memasang bucu kawalan untuk mencapai ini, dan CV tersebut disimpan bersama titik fit dalam fail DXF.

## Melukis spline melalui titik fit

1. Taip `splinefit` dalam terminal atau klik butang bar alat **Spline Fit**.
2. **Klik untuk meletakkan titik fit** — kelengkungan akan melalui setiap satunya. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Tekan **Enter** untuk selesai (sekurang-kurangnya 2 titik diperlukan).

```
  ●──────●──────●──────●  ← kelengkungan melalui tepat setiap klik
  p1     p2     p3     p4
```

Pratonton langsung menunjukkan kelengkungan interpolasi semasa semasa anda menggerakkan kursor, termasuk titik seterusnya yang berpotensi pada kedudukan kursor. Tekan **Escape** untuk membuang semua titik yang diletakkan dan keluar.

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mana-mana titik fit:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan titik fit.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip, atau selesaikan spline jika tiada input sedang berjalan dan ≥ 2 titik wujud |
| `Escape` | Buang semua titik dan keluar |

## Pengeditan grip — membentuk semula melalui titik fit

Fit spline yang dipilih mendedahkan satu grip setiap titik fit:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Titik fit** | Di setiap kedudukan yang diklik | Seret untuk menggerakkan titik fit itu — keseluruhan kelengkungan diinterpolasi semula untuk melalui kedudukan baru |

Menyeret satu grip menginterpolasi semula keseluruhan kelengkungan, bukan hanya segmen bersebelahan. Ini berbeza daripada pengeditan grip poliline, di mana menggerakkan bucu hanya membentuk semula dua segmen bersebelahan.

Tiada grip "gerakkan keseluruhan spline". Untuk menterjemahkan keseluruhan spline, gunakan arahan [Move](../move/).

## Memilih fit spline

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh berhampiran mana-mana titik pada kelengkungan |
| **Seret kanan** (ketat) | Semua titik sampel sepanjang kelengkungan mesti berada di dalam kotak pemilihan |
| **Seret kiri** (silang) | Mana-mana bahagian kelengkungan yang menyilang sempadan kotak pemilihan memilihnya |

## Arahan edit yang disokong

| Arahan | Apa yang berlaku pada spline |
|--------|------------------------------|
| [Move](../move/) | Menterjemahkan semua titik fit dan CV yang dikira semula dengan anjakan yang sama |
| [Copy](../copy/) | Mencipta spline yang sama di kedudukan baru |
| [Rotate](../rotate/) | Memutar semua titik fit di sekitar titik asas yang dipilih |
| [Mirror](../mirror/) | Mencerminkan semua titik fit merentasi paksi cermin |
| [Scale](../scale/) | Mengskala semua titik fit secara seragam dari titik asas |
| [Delete](../delete/) | Membuang spline |

Spline tidak menyokong **Offset**, **Trim**, atau **Extend**.

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
| Degree | Darjah polinomial — sentiasa 3 (kubik) |
| Fit Points | Koordinat semua titik lulus yang diklik |
| Control Vertices | CV yang dikira secara dalaman untuk merender kelengkungan |

## Spline Fit berbanding Spline CV — yang mana digunakan

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kelengkungan melalui titik | Setiap titik yang diklik dengan tepat | Pertama dan terakhir sahaja (dijepit) |
| Kesan edit grip | Titik fit bergerak → keseluruhan kelengkungan diinterpolasi semula | CV bergerak → kelengkungan tertarik ke kedudukan baru |
| Kebolehramalan bentuk | Tinggi — kelengkungan mengikuti klik | Rendah — kelengkungan ketinggalan di belakang CV |
| Terbaik untuk | Kelengkungan yang mesti menyentuh koordinat tertentu | Kelengkungan estetik halus, laluan bebas |

## DXF — entiti SPLINE (bentuk titik fit)

Fit spline disimpan sebagai entiti `SPLINE` dalam fail DXF, menyimpan kedua-dua koordinat titik fit dan bucu kawalan yang dikira. `splineFlag` ditetapkan ke `8` (spline titik fit) supaya aplikasi yang memuatkan semula tahu set titik mana yang dipaparkan sebagai grip boleh edit. Semua sifat — warna, lapisan, linetype, skala linetype, dan ketebalan — pusingan penuh tanpa kehilangan. Aplikasi DXF yang menyokong spline titik fit (LibreCAD, FreeCAD) akan memaparkan titik fit sebagai data boleh edit utama.
