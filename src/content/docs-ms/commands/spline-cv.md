---
sidebar_position: 8
title: Arahan Spline CV — Lukis B-Spline dengan Meletakkan Bucu Kawalan dalam KulmanLab CAD
description: Arahan Spline CV melukis B-spline kubik dengan meletakkan bucu kawalan. Kelengkungan tertarik ke arah bucu tetapi hanya melalui yang pertama dan terakhir (simpul yang dijepit). Setiap grip CV boleh diseret untuk membentuk semula kelengkungan selepas peletakan. Pusingan penuh DXF sebagai entiti SPLINE.
keywords: [arahan spline CAD, bucu kawalan B-spline, spline dijepit CAD, lukis spline CAD, entiti DXF SPLINE, pengeditan grip spline, kulmanlab]
---

# Spline CV

Arahan `splinecv` melukis **B-spline kubik** dengan meletakkan bucu kawalan (CV). Kelengkungan yang dihasilkan tertarik ke arah setiap CV tetapi tidak melaluinya — kecuali di bucu pertama dan terakhir, di mana **simpul yang dijepit** menambat kelengkungan dengan tepat. Ini memberikan kawalan bentuk yang intuitif: tarik bucu untuk menolak kelengkungan ke arahnya tanpa memaksanya menyentuh setiap titik.

## Melukis spline mengikut bucu kawalan

1. Taip `splinecv` dalam terminal atau klik butang bar alat **Spline CV**.
2. **Klik untuk meletakkan bucu kawalan** — setiap klik menambah bucu. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Tekan **Enter** untuk selesai (sekurang-kurangnya 2 bucu diperlukan).

```
  CV ●         ● CV
      \       /
       \     /    ← kelengkungan ditarik ke arah CV
        \   /         tetapi tidak melaluinya
  CV ●   ●   ● CV (mula/akhir: kelengkungan menyentuh di sini)
```

Pratonton langsung dikemas kini semasa anda menggerakkan kursor selepas setiap bucu, menunjukkan bagaimana spline akan kelihatan dengan titik seterusnya pada kedudukan kursor. Tekan **Escape** untuk membuang semua bucu yang diletakkan dan keluar.

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mana-mana bucu kawalan:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan bucu.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip, atau selesaikan spline jika tiada input sedang berjalan dan ≥ 2 bucu wujud |
| `Escape` | Buang semua bucu dan keluar |

## Pengeditan grip — membentuk semula melalui bucu kawalan

CV spline yang dipilih mendedahkan satu grip setiap bucu kawalan:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Bucu kawalan** | Di setiap kedudukan CV | Seret untuk menggerakkan CV itu — kelengkungan membentuk semula ke arah kedudukan baru |

Tiada grip "gerakkan keseluruhan spline". Untuk menterjemahkan keseluruhan spline, gunakan arahan [Move](./move).

## Memilih CV spline

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh berhampiran mana-mana titik pada kelengkungan |
| **Seret kanan** (ketat) | Semua titik sampel sepanjang kelengkungan mesti berada di dalam kotak pemilihan |
| **Seret kiri** (silang) | Mana-mana bahagian kelengkungan yang menyilang sempadan kotak pemilihan memilihnya |

## Arahan edit yang disokong

| Arahan | Apa yang berlaku pada spline |
|--------|------------------------------|
| [Move](./move) | Menterjemahkan semua bucu kawalan dengan anjakan yang sama |
| [Copy](./copy) | Mencipta spline yang sama di kedudukan baru |
| [Rotate](./rotate) | Memutar semua CV di sekitar titik asas yang dipilih |
| [Mirror](./mirror) | Mencerminkan semua CV merentasi paksi cermin |
| [Scale](./scale) | Mengskala semua CV secara seragam dari titik asas |
| [Delete](./delete) | Membuang spline |

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
| Control Vertices | Koordinat semua CV |
| Fit Points | Kosong untuk CV spline; hanya diisi untuk spline titik fit |

## Spline CV berbanding Spline Fit — yang mana digunakan

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kelengkungan melalui titik | Pertama dan terakhir sahaja (dijepit) | Setiap titik yang diklik dengan tepat |
| Kawalan bentuk | Tarik CV ke arah kawasan | Gerakkan titik fit yang mesti disentuh kelengkungan |
| Kesan edit grip | CV bergerak → kelengkungan tertarik | Titik fit bergerak → kelengkungan diinterpolasi semula |
| Terbaik untuk | Kelengkungan estetik halus, laluan bebas | Kelengkungan yang mesti menyentuh koordinat tertentu |

## DXF — entiti SPLINE (bentuk bucu kawalan)

CV spline disimpan sebagai entiti `SPLINE` dalam fail DXF, menyimpan darjah, vektor simpul, dan semua koordinat bucu kawalan. Semua sifat — warna, lapisan, linetype, skala linetype, dan ketebalan — pusingan penuh tanpa kehilangan. `splineFlag` ditetapkan ke `9` (CV spline) supaya bentuk dipelihara semasa dimuat semula. Mana-mana aplikasi DXF yang menyokong entiti `SPLINE` dengan data CV membaca ini dengan betul.
