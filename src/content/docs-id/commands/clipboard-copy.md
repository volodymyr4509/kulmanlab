---
title: Perintah ClipboardCopy — Menyalin entitas ke papan klip sistem
description: Perintah ClipboardCopy menulis entitas terpilih ke papan klip sistem sebagai teks JSON, beserta layer dan tipe garis yang dirujuknya, sehingga dapat ditempel ke gambar lain atau tab peramban lain dengan ClipboardPaste.
keywords: [salin papan klip CAD, menyalin entitas antar gambar, menyalin objek CAD ke papan klip, Ctrl+C CAD, salin antar tab, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Perintah `SalinKePapanKlip` menulis entitas terpilih ke **papan klip sistem** Anda sebagai teks JSON. Karena memakai papan klip yang sebenarnya dan bukan penyangga di memori, geometri yang disalin bertahan di luar gambar: tempelkan ke berkas lain, tab peramban kedua, atau jendela yang Anda buka kemudian dengan [ClipboardPaste](../clipboard-paste/).

Inilah bedanya dengan [Copy](../copy/): Copy menggandakan entitas di dalam gambar yang sedang aktif dalam satu gerakan, sedangkan ClipboardCopy meletakkannya di tempat yang bisa diambil kembali dari gambar yang sama sekali berbeda.

## Dua cara memulai

**Pilih dulu, lalu salin** — jalur cepat:

1. Pilih satu atau beberapa entitas di kanvas.
2. Tekan `Ctrl+C` (`Cmd+C` di macOS), atau ketik `SalinKePapanKlip` di terminal.
3. Entitas langsung ditulis ke papan klip dan perintah selesai.

**Aktifkan dulu, lalu pilih** — memulai tanpa ada yang terpilih:

1. Tekan `Ctrl+C` atau ketik `SalinKePapanKlip` saat pilihan kosong.
2. Prompt menampilkan **pick objects to copy — Enter or Space to confirm**.
3. **Pilih objek** — klik untuk memasukkan atau mengeluarkan entitas satu per satu, atau seret untuk memilih berdasarkan area.
4. Tekan **Enter** atau **Space** untuk menyalin pilihan dan keluar.

Menekan **Enter** atau **Space** saat tidak ada yang terpilih hanya mengakhiri perintah tanpa menyentuh papan klip.

## Apa yang disalin

Muatan papan klip membawa lebih dari sekadar geometri mentah, agar penempelan ke gambar asing tetap tampak benar:

| Bagian | Kegunaan |
|--------|----------|
| **Entitas** | Bentuk terserialisasi lengkap dari setiap entitas terpilih |
| **Titik acuan** | Sudut kiri bawah batas gabungan pilihan — yang ditambatkan ClipboardPaste ke kursor |
| **Layer** | Hanya layer yang benar-benar dirujuk entitas yang disalin, berdasarkan nama |
| **Tipe garis** | Hanya tipe garis yang benar-benar dirujuk entitas yang disalin, berdasarkan nama |

Hanya entri tabel yang *dirujuk* yang ikut bersama salinan — bukan seluruh tabel layer dan tipe garis gambar sumber. Pola arsir sama sekali tidak disertakan dan memang tidak perlu: tabel pola sebuah gambar adalah himpunan bawaan, dan berkas `.pat` apa pun yang Anda unggah tersimpan di penyimpanan per pengguna yang sudah dibagi antar tab, sehingga arsiran yang ditempel menemukan polanya sendiri.

## Konfirmasi

Jika berhasil, terminal melaporkan berapa entitas yang ditulis:

```
3 entities copied to clipboard
```

Jika peramban menolak akses papan klip, terminal menampilkan **Copy failed: clipboard access denied** dan tidak ada yang ditulis. Itu keputusan izin peramban, bukan galat gambar — lihat [Izin papan klip](#izin-papan-klip) di bawah.

## Memilih selama perintah berjalan

| Cara | Perilaku |
|------|----------|
| **Klik** | Memasukkan atau mengeluarkan entitas di bawah kursor dari pilihan |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang seluruhnya berada di dalam kotak |
| **Seret ke kiri** (memotong) | Menambahkan entitas yang memotong batas kotak |
| **Enter** / **Space** | Mengonfirmasi pilihan dan menyalin |

## Rujukan papan ketik

| Tombol | Tindakan |
|--------|----------|
| `Ctrl+C` / `Cmd+C` | Mengaktifkan ClipboardCopy |
| `Enter` / `Space` | Menyalin pilihan saat ini, atau keluar jika tidak ada yang terpilih |
| `Escape` | Membatalkan tanpa menyalin |

## Izin papan klip

Menulis ke papan klip sistem memerlukan izin peramban. Dalam praktiknya, penyalinan yang dipicu penekanan tombol diberikan tanpa bertanya pada peramban desktop masa kini, tetapi halaman yang kehilangan fokus, atau peramban dengan pengaturan papan klip yang ketat, bisa saja menolak. Jika pesan penolakan akses muncul, klik sekali pada kanvas untuk mengembalikan fokus ke halaman lalu coba lagi.

Karena muatannya berupa teks JSON biasa, apa pun yang Anda salin sesudahnya akan menggantikannya — sebaris teks, sebuah tautan. Salin ulang sebelum menempel jika sementara itu Anda memakai papan klip untuk hal lain.

## Entitas yang didukung

ClipboardCopy bekerja pada semua jenis entitas. Entitas diserialisasi dengan mekanisme yang sama dengan ekspor `.json` bawaan, jadi tidak ada yang hilang di perjalanan.

## Lihat juga

- [ClipboardPaste](../clipboard-paste/) — membaca papan klip kembali dan menempatkan entitas
- [Copy](../copy/) — menggandakan entitas di dalam gambar yang sedang aktif
- [Export Manager](../export-manager/) — menyimpan seluruh gambar ke DXF atau JSON
