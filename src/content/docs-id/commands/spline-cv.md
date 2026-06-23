---
sidebar_position: 8
title: Perintah Spline CV — Menggambar B-Spline dengan Menempatkan Control Vertex di KulmanLab CAD
description: Perintah Spline CV menggambar B-spline kubik dengan menempatkan control vertex. Kurva tertarik ke arah vertex tetapi hanya melewati yang pertama dan terakhir (knot yang dijepit). Setiap grip CV dapat diseret untuk membentuk ulang kurva setelah penempatan. Dukungan penuh DXF sebagai entitas SPLINE.
keywords: [perintah spline CAD, B-spline control vertex, spline terjepit CAD, menggambar spline CAD, entitas DXF SPLINE, pengeditan grip spline, kulmanlab]
---

# Spline CV

Perintah `splinecv` menggambar **B-spline kubik** dengan menempatkan control vertex (CV). Kurva yang dihasilkan tertarik ke arah setiap CV tetapi tidak melewatinya — kecuali di vertex pertama dan terakhir, di mana **knot yang dijepit** menjangkarkan kurva tepat. Ini memberikan kontrol bentuk yang intuitif: tarik vertex untuk mendorong kurva ke arahnya tanpa memaksanya menyentuh setiap titik.

## Menggambar spline dengan control vertex

1. Ketik `splinecv` di terminal atau klik tombol toolbar **Spline CV**.
2. **Klik untuk menempatkan control vertex** — setiap klik menambah vertex. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Tekan **Enter** untuk selesai (setidaknya 2 vertex diperlukan).

```
  CV ●         ● CV
      \       /
       \     /    ← kurva tertarik ke arah CV
        \   /         tetapi tidak melewatinya
  CV ●   ●   ● CV (awal/akhir: kurva menyentuh di sini)
```

Pratinjau langsung diperbarui saat Anda menggerakkan kursor setelah setiap vertex, menampilkan bagaimana spline akan terlihat dengan titik berikutnya di posisi kursor. Tekan **Escape** untuk membuang semua vertex yang ditempatkan dan keluar.

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk control vertex mana saja:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan vertex.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik, atau selesaikan spline jika tidak ada input yang sedang berlangsung dan ≥ 2 vertex ada |
| `Escape` | Buang semua vertex dan keluar |

## Pengeditan grip — membentuk ulang melalui control vertex

Spline CV yang dipilih memperlihatkan satu grip per control vertex:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Control vertex** | Di setiap posisi CV | Seret untuk memindahkan CV tersebut — kurva membentuk ulang ke arah posisi baru |

Tidak ada grip "pindahkan seluruh spline". Untuk menerjemahkan seluruh spline, gunakan perintah [Move](./move).

## Memilih spline CV

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat dekat titik mana pun pada kurva |
| **Seret ke kanan** (ketat) | Semua titik sampel sepanjang kurva harus berada di dalam kotak seleksi |
| **Seret ke kiri** (persilangan) | Bagian mana pun dari kurva yang melintasi batas kotak seleksi memilihnya |

## Perintah edit yang didukung

| Perintah | Apa yang terjadi pada spline |
|---------|---------------------------|
| [Move](./move) | Menerjemahkan semua control vertex dengan perpindahan yang sama |
| [Copy](./copy) | Membuat spline identik di posisi baru |
| [Rotate](./rotate) | Memutar semua CV di sekitar titik dasar yang dipilih |
| [Mirror](./mirror) | Memantulkan semua CV melintasi sumbu cermin |
| [Scale](./scale) | Menskalakan semua CV secara seragam dari titik dasar |
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
| Control Vertices | Koordinat semua CV |
| Fit Points | Kosong untuk spline CV; diisi hanya untuk spline titik fit |

## Spline CV vs Spline Fit — mana yang digunakan

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kurva melewati titik | Hanya pertama dan terakhir (dijepit) | Setiap titik yang diklik tepat |
| Kontrol bentuk | Tarik CV ke arah suatu daerah | Pindahkan titik fit yang harus disentuh kurva |
| Efek edit grip | CV bergerak → kurva tertarik | Titik fit bergerak → kurva diinterpolasi ulang |
| Terbaik untuk | Kurva estetis yang mulus, jalur bentuk bebas | Kurva yang harus mengenai koordinat tertentu |

## DXF — entitas SPLINE (bentuk control-vertex)

Spline CV disimpan sebagai entitas `SPLINE` dalam file DXF, menyimpan derajat, vektor knot, dan semua koordinat control vertex. Semua properti — warna, layer, tipe garis, skala tipe garis, dan ketebalan — dapat dipertukarkan tanpa kehilangan data. `splineFlag` diatur ke `9` (spline CV) sehingga bentuknya dipertahankan saat dimuat ulang. Aplikasi DXF mana pun yang mendukung entitas `SPLINE` dengan data CV membacanya dengan benar.
