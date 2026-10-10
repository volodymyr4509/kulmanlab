---
title: "Perintah Polygon — gambar poligon beraturan dari pusat atau sisi di KulmanLab CAD"
description: "Perintah Polygon menggambar poligon beraturan dengan 3 hingga 1024 sisi dari pusat dan radius, atau dari satu sisi. Hasilnya LWPOLYLINE tertutup, sehingga semua perintah edit polyline berlaku."
keywords: ["perintah poligon CAD", "gambar poligon beraturan CAD", "segi enam segi delapan segi lima CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Perintah `polygon` menggambar poligon beraturan — semua sisi dan sudut sama — dengan 3 hingga 1024 sisi. Ketik `polygon` di terminal. Hasilnya **`LWPOLYLINE` tertutup**, sehingga setelah ditempatkan ia berperilaku seperti [Polyline](../polyline/) lainnya dan semua edit polyline berlaku.

## Menggambar poligon

1. Ketik `polygon` di terminal lalu masukkan **jumlah sisi** — bilangan bulat dari 3 hingga 1024 — dan tekan **Enter** atau **Space**. Prompt terisi otomatis dengan jumlah terakhir yang dipakai (4 untuk pertama kali); mulai mengetik untuk menggantinya. Nilai lain ditolak dan tetap di prompt untuk diperbaiki.
2. **Klik pusat**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat. Tekan `E` dulu untuk memulai dari sebuah sisi (lihat di bawah).
3. **Klik radius** — poligon ditampilkan langsung — atau ketik radius lalu tekan **Enter** atau **Space**.
4. Poligon ditempatkan dan perintah selesai.

## Opsi

| Opsi | Tombol | Efek |
|---|---|---|
| Edge | `E` | Titik pertama menjadi salah satu ujung sisi, bukan pusat. Pilih ujung kedua; sudut lainnya dibangun berlawanan arah jarum jam, di sebelah kiri sisi dari ujung pertama ke kedua. Tekan `E` lagi untuk kembali ke pusat. |
| Inside | `I` | Aktif secara bawaan dan dipertahankan dari satu poligon ke berikutnya. Aktif: sudut berada pada lingkaran berradius yang diberikan. Nonaktif: poligon berada di luar lingkaran itu, dengan titik tengah tiap sisi di atasnya. |

- Klik menempatkan sudut (Inside aktif) atau titik tengah sisi (Inside nonaktif) tepat di posisi kursor, sehingga kursor juga menentukan orientasi.
- Radius yang diketik tidak punya arah untuk dibidik, jadi poligon diletakkan dengan sisi terbawahnya mendatar — kecuali penguncian sudut aktif, maka ia mengikuti sudut terkunci.
- Setiap opsi ditawarkan pada langkahnya sendiri dan dapat dialihkan bahkan saat angka sedang diketik.

## Referensi keyboard

| Tombol | Aksi |
|---|---|
| `0`–`9`, `.` | Ketik jumlah sisi, radius, koordinat, atau panjang |
| `E` | Aktifkan atau nonaktifkan Edge (langkah titik pertama) |
| `I` | Aktifkan atau nonaktifkan Inside (langkah radius) |
| `Enter` / `Space` | Konfirmasi jumlah sisi atau radius |
| `Escape` | Batal |

## DXF — entitas LWPOLYLINE

Poligon disimpan sebagai `LWPOLYLINE` tertutup dengan satu simpul per sudut; DXF tidak memiliki tipe poligon khusus. Semua properti — koordinat simpul, warna, layer, linetype, skala linetype, dan ketebalan — tersimpan tanpa kehilangan, dan penampil DXF mana pun membacanya sebagai polyline tertutup.
