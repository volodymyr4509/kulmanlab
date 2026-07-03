---
title: Perintah ViewportCopy — Menduplikasi Viewport di KulmanLab CAD
description: Perintah ViewportCopy menduplikasi viewport yang dipilih ke posisi baru di layout yang sama, mempertahankan pengaturan skala dan tampilan model. Mendukung entri koordinat tepat, penguncian sudut, dan input jarak yang diketik.
keywords: [viewport copy, duplikat viewport, salin viewport layout, kunci sudut viewport, koordinat tepat viewport, kulmanlab]
---

# ViewportCopy

Perintah `ViewportCopy` menyalin viewport ke posisi baru, mempertahankan skala dan pusat modelnya. Hanya tersedia di layout space.

## Menyalin viewport

1. Beralih ke tab layout kertas.
2. Secara opsional klik viewport untuk memilihnya terlebih dahulu.
3. Ketik `ViewportCopy` di terminal atau klik tombol toolbar **Viewport Copy**.
4. Jika tidak ada viewport yang dipilih sebelumnya, **klik viewport** yang akan disalin.
5. **Klik titik dasar** — referensi untuk perpindahan. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
6. **Klik tujuan** — viewport ditempatkan pada offset dasar→tujuan. Atau gunakan entri koordinat / kunci sudut.

Setelah menempatkan, perintah tetap aktif — klik tujuan lain untuk menempatkan salinan lain dari viewport yang sama. Tekan **Enter**, **Space**, atau **Escape** untuk selesai.

## Entri koordinat

Pada langkah titik dasar dan tujuan, Anda dapat mengetik koordinat tepat alih-alih mengklik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Penguncian sudut dan jarak tepat

Setelah titik dasar ditetapkan, perintah snap ke sumbu 45° (0°, 45°, 90°, 135°, …) ketika kursor sejajar. Saat terkunci:

- Pratinjau snap ke sumbu.
- Ketik jarak dan tekan **Enter** untuk menempatkan salinan tepat pada offset tersebut sepanjang arah yang terkunci.

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai jarak |
| `-` | Jarak negatif (membalik arah; karakter pertama saja) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Tempatkan salinan pada jarak yang diketik |

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X, atau jarak saat sudut terkunci |
| `,` | Kunci X dan pindah ke entri Y |
| `Enter` | Konfirmasi koordinat atau jarak yang diketik |
| `Enter` / `Space` | Selesai (saat tidak ada input yang sedang berlangsung) |
| `Escape` | Batal dan reset |

## Catatan

- ViewportCopy hanya tersedia ketika tab layout kertas aktif.
- Viewport yang disalin mewarisi skala, pusat model, status terkunci, dan dimensi yang sama dari aslinya.
- Untuk membuat viewport baru dari awal, gunakan [ViewportRectangle](../viewport-rectangle/).
