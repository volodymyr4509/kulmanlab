---
sidebar_position: 3
title: Perintah Rectangle — Menggambar Persegi Panjang Sejajar Sumbu di KulmanLab CAD
description: Perintah Rectangle membuat persegi panjang sejajar sumbu dari dua sudut yang berlawanan. Hasilnya adalah LWPOLYLINE tertutup dengan empat vertex — identik dengan polyline lain setelah ditempatkan, sehingga setiap perintah edit polyline berlaku padanya.
keywords: [perintah persegi panjang CAD, menggambar persegi panjang CAD, persegi panjang sejajar sumbu, polyline tertutup CAD, DXF LWPOLYLINE, pengeditan grip persegi panjang, kulmanlab]
---

# Rectangle

Perintah `rectangle` menggambar persegi panjang sejajar sumbu yang ditentukan oleh dua klik sudut yang berlawanan. Hasilnya disimpan sebagai **`LWPOLYLINE` tertutup** dengan empat vertex — satu di setiap sudut. Tidak ada tipe entitas persegi panjang khusus: setelah dibuat, bentuk berperilaku persis seperti [Polyline](../polyline/) lainnya dan setiap edit polyline berlaku padanya.

## Menggambar persegi panjang

1. Ketik `rectangle` di terminal atau klik tombol toolbar **Rectangle**.
2. **Klik sudut pertama**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik sudut yang berlawanan** — persegi panjang ditempatkan seketika dan perintah keluar. Entri koordinat juga berfungsi di sini.

```
  ● (klik pertama)────────────┐
  |                          |
  |   pratinjau langsung      |
  |   mengikuti kursor        |
  └──────────────────────────● (klik kedua)
```

Dua klik dapat berupa pasangan sudut yang berlawanan secara diagonal mana pun — kiri atas + kanan bawah, atau kiri bawah + kanan atas, dll. Urutan tidak penting.

## Entri koordinat

Pada langkah sudut mana pun, Anda dapat mengetik posisi tepat:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan sudut.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Enter` | Konfirmasi koordinat yang diketik |
| `Escape` | Batal |

Sisi selalu horizontal dan vertikal — tidak ada penguncian sudut untuk perintah persegi panjang.

## Pengeditan grip — membentuk ulang setelah dibuat

Persegi panjang yang dipilih menampilkan grip di setiap vertex dan di titik tengah setiap sisi:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Sudut** | Masing-masing dari 4 vertex | Seret untuk memindahkan vertex tersebut; dua sisi yang berdekatan meregang mengikuti — sudut yang berlawanan tetap diam |
| **Titik tengah sisi** | Titik tengah masing-masing dari 4 sisi | Seret untuk menerjemahkan kedua titik akhir sisi tersebut bersama-sama, menjaga panjang dan sudut sisi |

Menyeret grip sudut mengubah persegi panjang menjadi segi empat yang tidak persegi. Jika Anda hanya perlu persegi panjang dengan ukuran berbeda, seret sudut sambil menjaga sisi kira-kira ortogonal, atau hapus dan gambar yang baru.

## Memilih persegi panjang

Karena persegi panjang adalah polyline, seleksi bekerja dengan cara yang sama:

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat di salah satu dari empat sisi |
| **Seret ke kanan** (ketat) | Keempat vertex harus berada di dalam kotak seleksi |
| **Seret ke kiri** (persilangan) | Sisi mana pun yang melintasi batas kotak memilih seluruh persegi panjang |

## Perintah edit yang didukung

Semua perintah edit polyline berlaku. Trim dan Extend hanya untuk [Line](../line/) dan tidak berfungsi pada persegi panjang:

| Perintah | Apa yang terjadi pada persegi panjang |
|---------|-------------------------------|
| [Move](../move/) | Menerjemahkan keempat vertex dengan perpindahan yang sama |
| [Copy](../copy/) | Membuat persegi panjang identik di posisi baru |
| [Rotate](../rotate/) | Memutar keempat vertex di sekitar titik dasar yang dipilih |
| [Mirror](../mirror/) | Memantulkan keempat vertex melintasi sumbu cermin |
| [Scale](../scale/) | Menskalakan keempat vertex secara seragam dari titik dasar |
| [Offset](../offset/) | Membuat persegi panjang paralel (masuk atau keluar) pada jarak tetap |
| [Delete](../delete/) | Menghapus persegi panjang dari gambar |

## Properti

Ketika persegi panjang dipilih, panel properti menampilkan field yang sama seperti polyline mana pun:

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
| Closed | Selalu `true` untuk persegi panjang |
| Vertex Count | Selalu `4` untuk persegi panjang yang tidak dimodifikasi |
| Vertices | Koordinat keempat sudut |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Cara menggambar | 2 klik (sudut) | Klik setiap vertex | Klik setiap titik akhir |
| Tipe entitas | `LWPOLYLINE` tertutup | `LWPOLYLINE` terbuka atau tertutup | `LINE` per segmen |
| Sisi selalu ortogonal | Ya (saat dibuat) | Tidak | Tidak |
| Trim / Extend | Tidak | Tidak | Ya |
| Terbaik untuk | Kotak, bingkai, area persegi panjang | Garis luar dan jalur bebas | Segmen individual, garis konstruksi |

## DXF — entitas LWPOLYLINE

Persegi panjang disimpan sebagai entitas `LWPOLYLINE` tertutup dengan empat vertex. Semua properti — koordinat vertex, warna, layer, tipe garis, skala tipe garis, dan ketebalan — dapat dipertukarkan tanpa kehilangan data.

Tidak ada tipe `RECTANGLE` khusus dalam DXF. Ketika file dibuka kembali, bentuk muncul sebagai polyline empat vertex tertutup, bukan persegi panjang. Penampil atau editor DXF mana pun yang mendukung `LWPOLYLINE` (LibreCAD, FreeCAD, dll.) akan menampilkannya dengan benar.
