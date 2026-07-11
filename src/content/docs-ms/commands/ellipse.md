---
title: Arahan Ellipse — Lukis Elips Berputar mengikut Pusat dan Dua Paksi dalam KulmanLab CAD
description: Arahan Ellipse melukis elips dalam tiga klik — pusat, titik akhir paksi pertama (mana-mana arah), kemudian panjang paksi kedua. Kedua-dua paksi sentiasa berserenjang. Setiap semi-paksi mempunyai gripnya sendiri untuk mengubah saiz secara bebas selepas peletakan. Pusingan penuh DXF sebagai entiti ELLIPSE.
keywords: [arahan elips CAD, lukis elips CAD, elips berputar CAD, paksi elips, entiti DXF ELLIPSE, pengeditan grip elips, nisbah paksi, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Arahan `ellipse` melukis elips menggunakan tiga klik: titik pusat, titik akhir semi-paksi pertama (major) pada mana-mana sudut, dan panjang semi-paksi kedua (minor). Kedua-dua paksi sentiasa berserenjang antara satu sama lain — arah paksi kedua diperoleh secara automatik dari yang pertama.

## Melukis elips

1. Taip `ellipse` dalam terminal atau klik butang bar alat **Ellipse**.
2. **Klik titik pusat**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik akhir paksi pertama** — menetapkan arah dan panjang semi-paksi pertama. Kemasukan koordinat juga berfungsi di sini.
4. **Tetapkan panjang paksi kedua** — gerakkan kursor serenjang dengan paksi pertama, kemudian klik atau taip panjang.

```
               ● ← titik akhir paksi pertama (langkah 3)
              /
  pusat ●  /  ← paksi pertama (mana-mana sudut)
            |
            ● ← kursor di sini menetapkan panjang paksi kedua (langkah 4)
```

Elips diletakkan selepas langkah 4 dan arahan keluar.

## Input paksi — klik, koordinat, atau panjang bertaip

**Pusat (langkah 2):** klik atau taip `X,Y` untuk kedudukan tepat.

**Titik akhir paksi pertama (langkah 3):** klik, atau taip `X,Y` untuk koordinat tepat. Penguncian sudut juga snap ke gandaan 45° — semasa dikunci, taip panjang dan tekan **Enter** untuk meletakkan titik akhir pada jarak tepat itu.

**Paksi kedua (langkah 4):** panjang bertaip sentiasa tersedia — tiada kunci sudut diperlukan. Arahnya sudah tetap serenjang dengan paksi pertama; menaip hanya menetapkan panjang.

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada panjang paksi (fasa paksi kedua) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan titik akhir paksi pada panjang yang ditaip |

## Kemasukan koordinat (pusat dan titik akhir paksi pertama)

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X (fasa pusat/paksi pertama), atau panjang paksi apabila sudut dikunci |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau panjang yang ditaip |
| `Escape` | Batal dan tetapkan semula |

## Pengeditan grip — pengubahan saiz paksi bebas

Elips yang dipilih mendedahkan lima grip:

| Grip | Bilangan | Fungsinya |
|------|---------|-----------|
| **Pusat** | 1 | Menggerakkan keseluruhan elips; kedua-dua paksi tidak berubah |
| **Titik akhir paksi major** | 2 (hujung bertentangan paksi lebih panjang) | Seret untuk mengubah saiz panjang semi-paksi major; saiz mutlak paksi minor kekal malar |
| **Titik akhir paksi minor** | 2 (hujung bertentangan paksi lebih pendek) | Seret untuk mengubah saiz panjang semi-paksi minor; paksi major tidak berubah |

Grip paksi major dan minor adalah bebas — anda boleh membentuk semula elips tanpa menjalankan semula arahan.

## Memilih elips

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh berhampiran garis luar elips |
| **Seret kanan** (ketat) | Kotak sempadan sejajar paksi elips mesti muat sepenuhnya di dalam kotak pemilihan |
| **Seret kiri** (silang) | Mana-mana bahagian garis luar elips yang menyilang sempadan kotak pemilihan memilihnya |

## Arahan edit yang disokong

| Arahan | Apa yang berlaku pada elips |
|--------|-----------------------------|
| [Move](../move/) | Menterjemahkan pusat; kedua-dua paksi tidak berubah |
| [Copy](../copy/) | Mencipta elips yang sama di pusat baru |
| [Rotate](../rotate/) | Memutar kedudukan pusat dan vektor paksi major dengan sudut yang sama |
| [Mirror](../mirror/) | Mencerminkan pusat dan mengira semula arah paksi major merentasi paksi cermin |
| [Scale](../scale/) | Mengskala kedudukan pusat dan mendarab kedua-dua panjang semi-paksi dengan faktor |
| [Offset](../offset/) | Mencipta elips konsentrik diimbangi ke luar atau ke dalam dengan jarak tetap |
| [Delete](../delete/) | Membuang elips |

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
| Center X / Center Y | Pusat elips |
| Major Axis X / Major Axis Y | Vektor dari pusat ke titik akhir paksi major (mengekod arah dan panjang) |
| Axis Ratio | Nisbah semi-paksi minor kepada semi-paksi major (0 < nisbah ≤ 1) |
| Start Angle / End Angle | Sudut parametrik dalam darjah; kedua-duanya 0°/360° untuk elips penuh |

## Ellipse berbanding Circle — bila menggunakan yang mana

| | Ellipse | Circle |
|---|---------|--------|
| Paksi | Dua semi-paksi bebas pada mana-mana sudut | Satu jejari, simetri |
| Putaran | Boleh diletakkan pada mana-mana sudut | Tiada putaran |
| Input bertaip | Panjang setiap paksi | Jejari sahaja |
| Grip ubah saiz | Major dan minor secara bebas | Keempat-empat titik kardinal sama rata |
| Terbaik untuk | Pandangan serong, ciri bujur, lubang perspektif | Ciri bulat simetri |

## DXF — entiti ELLIPSE

Elips disimpan sebagai entiti `ELLIPSE` dalam fail DXF. Format menyimpan titik pusat, vektor paksi major penuh (arah + panjang), dan nisbah paksi. Putaran, bentuk, dan semua sifat gaya pusingan penuh tanpa kehilangan. Bulatan **tidak** disimpan sebagai elips terdegenerasi — kedua-dua jenis entiti kekal berbeza dalam model DXF.
