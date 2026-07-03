---
sidebar_position: 7
title: Perintah Trim — Memotong Segmen Garis pada Perpotongan di KulmanLab CAD
description: Perintah Trim menghapus bagian dari Line antara dua titik perpotongan yang berdekatan paling dekat dengan kursor. Pratinjau hover merah menampilkan dengan tepat segmen mana yang akan dipotong sebelum Anda klik. Trim hanya bekerja pada entitas Line — bukan busur, lingkaran, atau polyline.
keywords: [perintah potong CAD, memotong garis CAD, potong perpotongan garis, pratinjau hover potong, potong hanya garis, kulmanlab]
---

# Trim

Perintah `trim` menghapus bagian dari [Line](../line/) yang terletak di antara dua titik perpotongan yang berdekatan, memisahkan garis menjadi satu atau dua segmen yang lebih pendek. Segmen yang akan dipotong ditentukan oleh posisi kursor — arahkan kursor ke bagian yang ingin dihapus dan klik untuk memotongnya.

Trim hanya bekerja pada **entitas Line**. Untuk busur, lingkaran, polyline, dan tipe entitas lainnya, gunakan [Delete](../delete/) atau pengeditan grip.

## Memotong garis

1. Ketik `trim` di terminal atau klik tombol toolbar **Trim**.
2. **Arahkan kursor ke segmen garis** yang ingin dihapus — pratinjau merah menyorot tepat bagian yang akan dipotong.
3. **Klik** untuk menghapus segmen tersebut.

Perintah tetap aktif setelah setiap pemotongan, sehingga Anda dapat terus mengarahkan kursor dan mengklik untuk memotong segmen lainnya. Tekan **Escape** untuk keluar.

```
  Sebelum:                     Sesudah memotong segmen tengah:

  ──────●──────●──────        ──────●          ●──────
      potong    potong           (bagian kiri)  (bagian kanan)
                                 (segmen tengah dihapus)
```

## Cara segmen pemotongan ditentukan

Perintah memproyeksikan posisi kursor ke garis yang di-hover dan menemukan semua titik perpotongan yang dimiliki garis tersebut dengan entitas lain. Parameter perpotongan ini membagi garis menjadi segmen. Segmen yang intervalnya berisi proyeksi kursor disorot dan akan dihapus saat diklik.

- Jika kursor berada **sebelum perpotongan pertama**: bagian terdepan garis dihapus.
- Jika kursor berada **di antara dua perpotongan**: bagian tengah dihapus; garis terpecah menjadi dua.
- Jika kursor berada **setelah perpotongan terakhir**: bagian ekor dihapus.
- Jika garis **tidak memiliki perpotongan** dengan entitas lain: tidak ada pratinjau yang ditampilkan dan mengklik tidak melakukan apa-apa.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` | Keluar dari mode trim |

## Entitas yang didukung

| Entitas | Dapat dipotong? |
|--------|----------------|
| Line | Ya |
| Arc, Circle, Ellipse | Tidak |
| Polyline / Rectangle | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

Entitas yang digunakan sebagai **batas pemotongan** dapat berupa tipe apa pun — hanya garis yang dipotong yang harus berupa entitas Line.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Fungsi | Menghapus segmen garis | Meregangkan titik akhir garis ke batas |
| Pemicu | Arahkan kursor ke segmen yang akan dipotong | Arahkan kursor dekat titik akhir yang akan diperpanjang |
| Hasil | Garis terpecah atau memendek | Titik akhir garis berpindah ke batas |
| Keduanya | Hanya garis | Hanya garis |
