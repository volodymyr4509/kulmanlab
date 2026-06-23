---
sidebar_position: 11
title: Perintah Offset — Membuat Salinan Paralel pada Jarak Tetap di KulmanLab CAD
description: Perintah Offset membuat salinan paralel dari Line, Circle, Arc, Ellipse, atau Polyline pada jarak yang diketik. Jarak dimasukkan sekali dan digunakan ulang untuk beberapa offset. Klik sisi menentukan ke arah mana salinan muncul. Lima tipe entitas didukung.
keywords: [perintah offset CAD, salinan paralel CAD, offset garis CAD, offset lingkaran CAD, offset polyline CAD, offset konsentris, kulmanlab]
---

# Offset

Perintah `offset` membuat salinan paralel dari entitas pada jarak tegak lurus yang tetap. Anda mengetik jarak sekali, kemudian mengklik entitas dan memilih sisi — perintah tetap siap pada jarak yang sama sehingga Anda dapat membuat offset beberapa objek dalam satu sesi.

Tipe entitas yang didukung: **Line, Circle, Arc, Ellipse, Polyline** (termasuk Rectangle).

## Menggunakan offset

1. Ketik `offset` di terminal atau klik tombol toolbar **Offset**.
2. **Ketik jarak offset** dan tekan **Enter** atau **Space**.
3. **Klik entitas** yang akan di-offset — jika entitasnya bukan tipe yang didukung, pesan error muncul dan Anda dapat mengklik entitas lain.
4. **Gerakkan kursor** ke sisi di mana salinan harus muncul — pratinjau langsung mengikuti.
5. **Klik** untuk menempatkan salinan offset.

Setelah setiap penempatan, perintah kembali ke langkah 3 pada **jarak yang sama**, siap untuk offset berikutnya. Tekan **Escape** untuk kembali ke langkah entri jarak.

```
  Jarak: 10

  ─────────────────    ← garis asli
  ─────────────────    ← salinan offset (10 satuan di bawah)
```

## Perilaku offset per entitas

| Entitas | Cara offset dihitung |
|--------|---------------------------|
| **Line** | Garis paralel yang digeser tegak lurus ke arah asli |
| **Circle** | Lingkaran konsentris; klik di luar → radius lebih besar, di dalam → radius lebih kecil |
| **Arc** | Busur konsentris pada radius baru; rentang sudut yang sama dipertahankan |
| **Ellipse** | Kedua semi-sumbu ditingkatkan atau dikurangi sebesar jarak yang sama |
| **Polyline** | Setiap segmen di-offset secara independen; segmen offset yang berdekatan dipertemukan di sudut |

Untuk **Circle**, **Arc**, dan **Ellipse**: jika offset ke dalam mengurangi radius atau semi-sumbu apa pun menjadi nol atau di bawahnya, offset tidak diterapkan.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai jarak |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` / `Space` | Konfirmasi jarak yang diketik dan beralih ke seleksi entitas |
| `Escape` | Reset ke langkah entri jarak |

## Catatan alur kerja

Jarak tetap diatur sampai Anda menekan **Escape**. Ini membuat efisien untuk membuat offset banyak entitas pada jarak yang sama — ketik jarak sekali, kemudian klik dan pilih sisi untuk setiap entitas secara bergiliran.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Perpindahan | Tegak lurus terhadap geometri entitas | Vektor arbitrer (dasar → tujuan) |
| Entitas yang didukung | Line, Circle, Arc, Ellipse, Polyline | Semua tipe entitas |
| Input jarak | Diketik sebelum memilih entitas | Diketik atau diklik setelah memilih |
| Terbaik untuk | Garis paralel, lingkaran konsentris, jalur masuk/keluar | Menempatkan duplikat di posisi arbitrer |
