---
title: Perintah Fillet — Membulatkan Sudut dengan Busur Tangen
description: Perintah Fillet membulatkan sudut antara dua segmen Line, Arc, atau Polyline dengan busur tangen berradius tertentu. Membulatkan sudut milik polyline itu sendiri menyisipkan busur langsung ke dalamnya; membulatkan melintasi polyline terbuka menggabungkan kedua sisi menjadi polyline baru.
keywords: [perintah fillet CAD, membulatkan sudut CAD, busur fillet, busur tangen, fillet polyline, fillet busur, kulmanlab]
group: edit
order: 11
---

# Fillet

Perintah `Fillet` membulatkan sudut antara dua segmen [Line](../line/), [Arc](../arc/), atau [Polyline](../polyline/) dengan menyisipkan busur tangen berradius tertentu, memotong (atau menggabungkan) entitas yang dipilih kembali ke titik tersebut.

Fillet bekerja pada entitas **Line, Arc, dan Polyline** — termasuk segmen lurus atau busur milik polyline itu sendiri.

## Menggunakan fillet

1. Ketik `Fillet` di terminal atau klik tombol toolbar **Fillet**.
2. **Ketik radius fillet** dan tekan **Enter**.
3. **Klik garis, busur, atau segmen polyline pertama** — bagian yang Anda klik menentukan sisi mana dari perpotongan mana pun yang dipertahankan.
4. **Arahkan kursor ke entitas kedua** — pratinjau busur putus-putus menampilkan hasil fillet. Gerakkan kursor ke sisi yang ingin Anda pertahankan.
5. **Klik** untuk menerapkan.

```
  Sebelum:                     Sesudah fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pemilihan sisi untuk entitas yang berpotongan

Ketika dua entitas berpotongan, fillet diterapkan pada sudut yang ditentukan oleh posisi klik — bagian dari masing-masing entitas pada **sisi yang sama dengan kursor** dipertahankan.

- Klik dekat salah satu ujung entitas pertama untuk memilih setengah tersebut.
- Gerakkan kursor ke setengah yang diinginkan dari entitas kedua — pratinjau putus-putus diperbarui secara langsung.

## Apa yang dibuat perintah

Hasilnya bergantung pada apa yang Anda pilih:

- **Dua entitas Line/Arc yang berdiri sendiri**, atau pasangan mana pun tanpa polyline terbuka: keduanya dipotong kembali ke titik tangen **T1**/**T2**, dan entitas Arc baru disisipkan di antara keduanya.
- **Dua segmen dari polyline yang sama yang berbagi vertex sudut**: tidak ada entitas baru — fillet menjadi bagian dari polyline itu sendiri. Vertex sudut digantikan oleh dua titik tangen, dan busur di antara keduanya disimpan sebagai nilai bulge dari tepi tersebut — persis seperti sudut polyline yang dibulatkan bolak-balik melalui DXF.
- **Semua hal lain yang melibatkan polyline terbuka** — dua polyline terbuka yang berbeda, atau polyline terbuka dan Line/Arc yang berdiri sendiri: keduanya digabungkan menjadi **satu polyline baru**, dengan setiap sisi dipertahankan hingga titik tangennya dan disatukan oleh busur fillet sebagai segmen bulge tambahan, menggantikan entitas asli.

Busur yang disisipkan atau diperpanjang mewarisi pengaturan ketebalan garis, warna, layer, dan tipe garis saat ini (atau milik polyline itu sendiri, saat digabungkan ke dalamnya).

## Sudut tanpa sudut sebenarnya untuk dibulatkan

Jika dua segmen yang dipilih sudah bertemu secara tangen di vertex bersama — sudut polyline yang lurus, atau garis yang beralih mulus ke segmen busur kelanjutan tangen — maka tidak ada sudut sebenarnya yang dapat dibulatkan oleh lingkaran mana pun. Fillet mendeteksi ini dan menolak dengan pesan `cannot fillet: no tangent circle fits there` alih-alih menggambar loop yang tidak diinginkan.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai radius |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` / `Spasi` | Konfirmasi radius yang diketik dan pindah ke seleksi entitas |
| `Escape` | Batal dan reset |

## Entitas yang didukung

| Entitas | Didukung |
|--------|-----------|
| Line | Ya |
| Arc | Ya |
| Polyline (segmen lurus atau busur) | Ya |
| Circle, Ellipse | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipe sudut | Busur membulat | Potongan lurus |
| Input | Satu radius | Dua jarak (d1, d2) |
| Entitas yang disisipkan | Arc | Line |
| Entitas yang didukung | Line, Arc, dan Polyline (segmen lurus atau busur) | Line dan Polyline (hanya segmen lurus) |
