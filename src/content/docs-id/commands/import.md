---
sidebar_position: 1
title: Import — Membuka File DXF atau JSON di KulmanLab CAD
description: Gunakan perintah Import untuk membuka file DXF atau JSON KulmanLab di KulmanLab CAD. Mendukung garis, lingkaran, busur, polyline, spline, teks, dimensi, dan leader.
keywords: [impor file DXF, buka DXF di browser, impor file CAD online, buka file DXF, penampil DXF browser, impor JSON CAD, KulmanLab import, penampil DXF CAD gratis, muat gambar, DXF ke browser, kulmanlab]
---

# Import

Perintah **Import** memuat gambar yang ada dari sistem file lokal Anda ke dalam KulmanLab CAD. Baik format **DXF** standar maupun format **JSON** milik KulmanLab didukung.

## Cara mengimpor file

1. Klik tombol toolbar **Import** (ikon folder) di panel File di bagian atas layar.
2. Pemilih file browser Anda terbuka. Navigasikan ke file gambar Anda dan pilih.
3. Gambar langsung dimuat ke kanvas. Viewport menyesuaikan semua entitas secara otomatis.

Sebagai alternatif, Anda dapat menyeret dan menjatuhkan file langsung ke kanvas.

## Format file yang didukung

| Format | Ekstensi | Kapan digunakan |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Gambar dari FreeCAD, LibreCAD, atau alat CAD lainnya |
| **JSON** *(asli)* | `.json` | Gambar yang sebelumnya disimpan dari KulmanLab CAD — fidelitas penuh |

## Apa yang diimpor dari DXF

KulmanLab mengurai tipe entitas DXF berikut:

| Tipe entitas | Kode DXF | Catatan |
|-------------|----------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |

Definisi layer dan tabel tipe garis juga diimpor dari file DXF jika ada.

Entitas yang menggunakan tipe DXF yang tidak didukung dilewati secara diam-diam — sisa gambar masih dimuat.

## Penamaan file dan penyimpanan

Ketika Anda mengimpor file, cap waktu ditambahkan ke nama file (misalnya `myplan_May22_14:30:00.dxf`). Ini memungkinkan Anda menyimpan beberapa versi gambar yang sama dalam [Recent Files](./files) tanpa tabrakan nama. Jika nama file sudah berisi cap waktu, itu digunakan apa adanya.

Gambar secara otomatis disimpan ke penyimpanan browser (IndexedDB) setelah diimpor, sehingga muncul di panel [Files](./files) dan bertahan setelah halaman dimuat ulang.

## Apa yang terjadi pada gambar saat ini

Mengimpor menggantikan kanvas saat ini. Tidak ada penggabungan atau penambahan. Jika Anda memiliki perubahan yang belum disimpan, [ekspor](./export) gambar saat ini terlebih dahulu.

## Saat startup

KulmanLab secara otomatis membuka kembali file yang terakhir diedit ketika halaman dimuat. Jika tidak ada file yang tersimpan, gambar contoh default dimuat.

## Pemecahan masalah

| Masalah | Kemungkinan penyebab | Perbaikan |
|---------|-------------|-----|
| Kanvas kosong setelah impor | Entitas DXF menggunakan tipe yang tidak didukung (mis. HATCH, INSERT) | Entitas dilewati — periksa pesan "no entities found" di terminal |
| Tombol Import tidak melakukan apa-apa | Browser memblokir pemilih file | Klik tombol sekali lagi; beberapa browser memerlukan gerakan pengguna baru |
| Dimensi terlihat salah | DXF dari alat yang menulis geometri dimensi non-standar | Ekspor ulang dari aplikasi sumber menggunakan versi DXF terkini |

## Perintah terkait

- [Export](./export) — unduh gambar saat ini sebagai DXF atau JSON
- [Files](./files) — jelajahi dan pulihkan gambar yang tersimpan di browser
- [New File](./new-file) — mulai gambar kosong
