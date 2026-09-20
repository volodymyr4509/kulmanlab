---
title: Perintah Trim — Memotong Segmen di Perpotongan
description: Perintah Trim menghapus bagian dari Line, Arc, Circle, Ellipse, atau Polyline antara dua titik perpotongan yang berdekatan paling dekat dengan kursor. Pratinjau menampilkan dengan tepat segmen mana yang akan dipotong sebelum Anda klik.
keywords: [perintah potong CAD, memotong garis CAD, potong lingkaran CAD, potong busur CAD, potong elips CAD, potong polyline CAD, potong perpotongan garis, pratinjau hover potong, kulmanlab]
group: edit
order: 8
---

# Trim

Perintah `Pangkas` menghapus bagian dari [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/), atau [Polyline](../polyline/) yang terletak di antara dua titik perpotongan yang berdekatan, membagi entitas menjadi satu atau lebih bagian yang tersisa. Segmen yang akan dipotong ditentukan oleh posisi kursor — arahkan kursor ke bagian yang ingin dihapus dan klik untuk memotongnya.

## Memotong entitas

1. Ketik `Pangkas` di terminal atau klik tombol toolbar **Trim**.
2. **Arahkan kursor ke segmen** yang ingin dihapus — pratinjau menyorot tepat bagian yang akan dipotong.
3. **Klik** untuk menghapus segmen tersebut.

Perintah tetap aktif setelah setiap pemotongan, sehingga Anda dapat terus mengarahkan kursor dan mengklik untuk memotong segmen lainnya — pada entitas yang sama atau entitas lain. Tekan **Enter**, **Space**, atau **Escape** untuk keluar.

```
  Sebelum:                     Sesudah memotong segmen tengah:

  ──────●──────●──────        ──────●          ●──────
      potong    potong           (bagian kiri)  (bagian kanan)
                                 (segmen tengah dihapus)
```

## Cara segmen pemotongan ditentukan

Perintah memproyeksikan posisi kursor ke entitas yang di-hover dan menemukan semua titik perpotongan yang dimiliki entitas tersebut dengan entitas lain. Perpotongan ini membagi entitas menjadi segmen — untuk Line, Arc, atau Polyline terbuka, titik akhir entitas itu sendiri berfungsi sebagai batas tetap tambahan. Circle atau Ellipse penuh, atau Polyline tertutup (termasuk Rectangle), tidak memiliki titik akhir sendiri, sehingga diperlukan setidaknya dua titik perpotongan sebelum dapat dipotong sama sekali. Segmen yang intervalnya berisi proyeksi kursor disorot dan akan dihapus saat diklik.

- **Line, Arc, dan Polyline terbuka** — segmen yang dihapus bisa berupa bagian terdepan (sebelum perpotongan pertama), bagian tengah (di antara dua perpotongan, membagi entitas menjadi dua), atau bagian ekor (setelah perpotongan terakhir).
- **Circle, Ellipse, dan Polyline tertutup/Rectangle** — karena tidak ada awal atau akhir yang tetap, hanya busur di antara dua *titik perpotongan* yang dapat dihapus. Jika perpotongan kurang dari dua, tidak ada pratinjau yang muncul dan mengklik tidak melakukan apa-apa. Sisa bentuknya menjadi satu-satunya bagian yang tersisa.

## Hasil pemotongan

| Entitas | Hasil setelah dipotong |
|--------|------------------------|
| Line | Hingga dua entitas Line yang lebih pendek |
| Arc | Hingga dua entitas Arc yang lebih pendek |
| Circle | Satu entitas [Arc](../arc/) — bentuk tertutup lingkaran hilang, sehingga bagian yang tersisa disimpan sebagai busur |
| Ellipse | Satu entitas Ellipse dengan sudut awal dan akhir — bagian yang tersisa tetap berupa Ellipse, sekarang parsial |
| Polyline (terbuka) | Hingga dua entitas Polyline yang lebih pendek |
| Polyline (tertutup) / Rectangle | Satu entitas Polyline terbuka — bentuk tertutup hilang, sehingga bagian yang tersisa disimpan terbuka |

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Keluar dari mode trim |
| `Escape` | Keluar dari mode trim |

## Entitas yang didukung

| Entitas | Dapat dipotong? |
|--------|----------------|
| Line | Ya |
| Arc | Ya |
| Circle | Ya — memerlukan 2 atau lebih titik perpotongan |
| Ellipse | Ya — memerlukan 2 atau lebih titik perpotongan |
| Polyline (terbuka) | Ya |
| Polyline (tertutup) / Rectangle | Ya — memerlukan 2 atau lebih titik perpotongan |
| Text, Spline, Dimension, Leader | Tidak |

Entitas yang digunakan sebagai **batas pemotongan** dapat berupa Line, Arc, Circle, Ellipse, atau Polyline. Entitas Text, Spline, Dimension, dan Leader tidak pernah mencatat perpotongan, sehingga juga tidak dapat berfungsi sebagai batas.

**Segmen busur** Polyline (digambar dengan sakelar Arc, atau diimpor) dipotong persis seperti segmen lurusnya — arahkan kursor ke bagian busur di antara dua perpotongan lalu klik. Tepi yang dipotong mempertahankan kelengkungannya; hanya panjangnya yang berubah.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Fungsi | Menghapus segmen entitas | Meregangkan titik akhir garis ke batas |
| Pemicu | Arahkan kursor ke segmen yang akan dipotong | Arahkan kursor dekat titik akhir yang akan diperpanjang |
| Hasil | Entitas terpecah atau memendek | Titik akhir garis berpindah ke batas |
| Entitas yang didukung | Line, Arc, Circle, Ellipse, Polyline | Line, Arc, Ellipse, Polyline |
