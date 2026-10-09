---
title: Import — Buka Fail DXF atau JSON dalam KulmanLab CAD
description: Gunakan arahan Import untuk membuka fail DXF atau JSON KulmanLab dalam KulmanLab CAD. Menyokong garis, bulatan, lengkok, poliline, spline, teks, dimensi, dan pemimpin.
keywords: [import fail DXF, buka DXF dalam pelayar, import fail CAD dalam talian, buka fail DXF, penampil DXF pelayar, import JSON CAD, import KulmanLab, penampil CAD DXF percuma, muatkan lukisan, DXF ke pelayar]
group: file
order: 1
---

# Import

Arahan **Import** memuatkan lukisan sedia ada dari sistem fail tempatan anda ke dalam KulmanLab CAD. Kedua-dua format **DXF** standard dan format **JSON** natif KulmanLab disokong.

## Cara mengimport fail

1. Klik butang bar alat **Import** (ikon folder) dalam panel Fail di bahagian atas skrin.
2. Pemilih fail pelayar anda terbuka. Navigasi ke fail lukisan anda dan pilihnya.
3. Lukisan dimuatkan ke kanvas serta-merta. Viewport memuatkan semua entiti secara automatik.

Sebagai alternatif, anda boleh seret dan lepas fail terus ke kanvas.

## Format fail yang disokong

| Format | Sambungan | Bila digunakan |
|--------|-----------|----------------|
| **DXF** | `.dxf` | Lukisan dari FreeCAD, LibreCAD, atau alat CAD lain |
| **JSON** *(natif)* | `.json` | Lukisan yang sebelumnya disimpan dari KulmanLab CAD — fideliti penuh |

## Apa yang diimport dari DXF

KulmanLab menghurai jenis entiti DXF berikut:

| Jenis entiti | Kod DXF | Nota |
|-------------|---------|------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |
| Hatch | `HATCH` | Nama, skala, dan sudut corak dibaca; nama yang tiada dalam pustaka corak anda kembali kepada ANSI31. Lihat [Hatch](../hatch/) |

Definisi lapisan dan jadual linetype juga diimport dari fail DXF apabila ada.

Entiti yang menggunakan jenis DXF yang tidak disokong dilangkau secara senyap — baki lukisan masih dimuatkan.

## Penamaan fail dan storan

Fail yang diimport mengekalkan nama asalnya. Jika nama itu sudah digunakan oleh lukisan lain yang disimpan, akhiran gaya Finder/Explorer ditambah secara automatik (`myplan (2)`, `myplan (3)`, …) supaya entri sedia ada tidak pernah ditimpa. Anda boleh menamakan semula fail kemudian daripada [File Manager](../file-manager/#renaming-a-file).

Lukisan disimpan secara automatik ke storan pelayar (IndexedDB) selepas import, jadi ia muncul dalam panel [File Manager](../file-manager/) dan bertahan muat semula halaman.

## Apa yang berlaku pada lukisan semasa

Mengimport menggantikan kanvas semasa. Tiada penggabungan atau penambahan. Jika anda mempunyai perubahan yang belum disimpan, [eksport](../export-manager/) lukisan semasa dahulu.

## Semasa permulaan

KulmanLab membuka semula fail yang paling baru-baru ini diedit secara automatik apabila halaman dimuatkan. Jika tiada fail yang disimpan, lukisan sampel lalai dimuatkan.

## Penyelesaian masalah

| Masalah | Kemungkinan punca | Pembetulan |
|---------|-------------------|-----------|
| Kanvas kosong selepas import | Entiti DXF menggunakan jenis yang tidak disokong (cth. INSERT) | Entiti dilangkau — terminal menyenaraikan setiap jenis yang dilangkau beserta bilangan, contohnya `Could not read INSERT: 12`. Fail yang langsung bukan lukisan sah melaporkan `Could not read <file>: not a valid drawing file` |
| Butang import tidak membuat apa-apa | Pelayar menyekat pemilih fail | Klik butang sekali lagi; sesetengah pelayar memerlukan isyarat pengguna baharu |
| Dimensi kelihatan salah | DXF dari alat yang menulis geometri dimensi bukan standard | Eksport semula dari aplikasi sumber menggunakan versi DXF semasa |

## Arahan berkaitan

- [Export Manager](../export-manager/) — muat turun lukisan semasa sebagai DXF atau JSON
- [File Manager](../file-manager/) — semak imbas dan pulihkan lukisan yang disimpan dalam pelayar
- [New File](../new-file/) — mulakan lukisan kosong
