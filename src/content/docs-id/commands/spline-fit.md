---
sidebar_position: 9
title: Perintah Spline Fit — Menggambar Spline Interpolasi Melalui Titik yang Diklik di KulmanLab CAD
description: Perintah Spline Fit menggambar spline kubik yang melewati setiap titik yang diklik tepat. Secara internal kurva disimpan dengan titik fit dan control vertex yang dihitung. Menyeret grip titik fit menginterpolasi ulang seluruh kurva. Dukungan penuh DXF sebagai entitas SPLINE.
keywords: [perintah spline fit CAD, spline interpolasi CAD, spline melalui titik, menggambar kurva mulus CAD, titik fit DXF SPLINE, pengeditan grip spline, kulmanlab]
---

# Spline Fit

Perintah `splinefit` menggambar spline kubik yang melewati setiap titik yang Anda klik — kurva interpolasi. Tidak seperti [Spline CV](./spline-cv), di mana kurva hanya tertarik ke arah control vertex, di sini kurva dipaksa untuk mengenai setiap koordinat yang diklik tepat. Secara internal editor menyesuaikan control vertex untuk mencapai ini, dan CV tersebut disimpan bersama titik fit dalam file DXF.

## Menggambar spline melalui titik fit

1. Ketik `splinefit` di terminal atau klik tombol toolbar **Spline Fit**.
2. **Klik untuk menempatkan titik fit** — kurva akan melewati setiap titik. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Tekan **Enter** untuk selesai (setidaknya 2 titik diperlukan).

```
  ●──────●──────●──────●  ← kurva melewati tepat setiap klik
  p1     p2     p3     p4
```

Pratinjau langsung menampilkan kurva yang saat ini diinterpolasi saat Anda menggerakkan kursor, termasuk titik prospektif berikutnya di posisi kursor. Tekan **Escape** untuk membuang semua titik yang ditempatkan dan keluar.

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk titik fit mana saja:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan titik fit.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik, atau selesaikan spline jika tidak ada input yang sedang berlangsung dan ≥ 2 titik ada |
| `Escape` | Buang semua titik dan keluar |

## Pengeditan grip — membentuk ulang melalui titik fit

Spline fit yang dipilih memperlihatkan satu grip per titik fit:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Titik fit** | Di setiap posisi yang diklik | Seret untuk memindahkan titik fit tersebut — seluruh kurva diinterpolasi ulang untuk melewati posisi baru |

Menyeret satu grip menyesuaikan ulang seluruh kurva, bukan hanya segmen yang berdekatan. Ini berbeda dari pengeditan grip polyline, di mana memindahkan vertex hanya membentuk ulang dua segmen yang berdekatan.

Tidak ada grip "pindahkan seluruh spline". Untuk menerjemahkan seluruh spline, gunakan perintah [Move](./move).

## Memilih spline fit

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat dekat titik mana pun pada kurva |
| **Seret ke kanan** (ketat) | Semua titik sampel sepanjang kurva harus berada di dalam kotak seleksi |
| **Seret ke kiri** (persilangan) | Bagian mana pun dari kurva yang melintasi batas kotak seleksi memilihnya |

## Perintah edit yang didukung

| Perintah | Apa yang terjadi pada spline |
|---------|---------------------------|
| [Move](./move) | Menerjemahkan semua titik fit dan CV yang dihitung ulang dengan perpindahan yang sama |
| [Copy](./copy) | Membuat spline identik di posisi baru |
| [Rotate](./rotate) | Memutar semua titik fit di sekitar titik dasar yang dipilih |
| [Mirror](./mirror) | Memantulkan semua titik fit melintasi sumbu cermin |
| [Scale](./scale) | Menskalakan semua titik fit secara seragam dari titik dasar |
| [Delete](./delete) | Menghapus spline |

Spline tidak mendukung **Offset**, **Trim**, atau **Extend**.

## Properti

**Umum**

| Properti | Default | Arti |
|----------|---------|---------|
| Color | 256 (ByLayer) | Indeks warna ACI |
| Layer | `0` | Penetapan layer |
| Linetype | ByLayer | Pola tipe garis bernama |
| Linetype Scale | 1 | Faktor skala pada pola tipe garis |
| Thickness | 0 | Ketebalan ekstrusi |

**Geometri**

| Properti | Arti |
|----------|---------|
| Degree | Derajat polinomial — selalu 3 (kubik) |
| Fit Points | Koordinat semua titik pass-through yang diklik |
| Control Vertices | CV yang dihitung secara internal yang digunakan untuk merender kurva |

## Spline Fit vs Spline CV — mana yang digunakan

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kurva melewati titik | Setiap titik yang diklik tepat | Hanya pertama dan terakhir (dijepit) |
| Efek edit grip | Titik fit bergerak → seluruh kurva diinterpolasi ulang | CV bergerak → kurva tertarik ke posisi baru |
| Prediktabilitas bentuk | Tinggi — kurva mengikuti klik | Lebih rendah — kurva tertinggal di belakang CV |
| Terbaik untuk | Kurva yang harus mengenai koordinat tertentu | Kurva estetis yang mulus, jalur bentuk bebas |

## DXF — entitas SPLINE (bentuk titik fit)

Spline fit disimpan sebagai entitas `SPLINE` dalam file DXF, menyimpan koordinat titik fit dan control vertex yang dihitung. `splineFlag` diatur ke `8` (spline titik fit) sehingga aplikasi yang memuat ulang tahu set titik mana yang ditampilkan sebagai grip yang dapat diedit. Semua properti — warna, layer, tipe garis, skala tipe garis, dan ketebalan — dapat dipertukarkan tanpa kehilangan data. Aplikasi DXF yang mendukung spline titik fit (LibreCAD, FreeCAD) akan menampilkan titik fit sebagai data yang dapat diedit utama.
