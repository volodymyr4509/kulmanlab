---
title: Perintah ClipboardCopy — Menyalin entiti ke papan keratan sistem
description: Perintah ClipboardCopy menulis entiti terpilih ke papan keratan sistem sebagai teks JSON, bersama lapisan dan jenis garisan yang dirujuknya, supaya boleh ditampal ke lukisan lain atau tab pelayar lain dengan ClipboardPaste.
keywords: [salin papan keratan CAD, menyalin entiti antara lukisan, salin objek CAD ke papan keratan, Ctrl+C CAD, salin antara tab, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Perintah `ClipboardCopy` menulis entiti terpilih ke **papan keratan sistem** anda sebagai teks JSON. Kerana ia menggunakan papan keratan sebenar dan bukan penimbal dalam ingatan, geometri yang disalin terus wujud di luar lukisan: tampalkannya ke fail lain, tab pelayar kedua, atau tetingkap yang anda buka kemudian dengan [ClipboardPaste](../clipboard-paste/).

Inilah bezanya dengan [Copy](../copy/): Copy menggandakan entiti di dalam lukisan semasa dengan satu gerakan, manakala ClipboardCopy meletakkannya di tempat yang boleh diambil semula daripada lukisan yang sama sekali berlainan.

## Dua cara untuk bermula

**Pilih dahulu, kemudian salin** — laluan pantas:

1. Pilih satu atau lebih entiti pada kanvas.
2. Tekan `Ctrl+C` (`Cmd+C` pada macOS), atau taip `ClipboardCopy` dalam terminal.
3. Entiti terus ditulis ke papan keratan dan perintah tamat.

**Aktifkan dahulu, kemudian pilih** — bermula tanpa apa-apa yang dipilih:

1. Tekan `Ctrl+C` atau taip `ClipboardCopy` semasa pilihan kosong.
2. Gesaan memaparkan **pick objects to copy — Enter or Space to confirm**.
3. **Pilih objek** — klik untuk memasukkan atau mengeluarkan entiti satu per satu, atau seret untuk memilih mengikut kawasan.
4. Tekan **Enter** atau **Space** untuk menyalin pilihan dan keluar.

Menekan **Enter** atau **Space** tanpa apa-apa yang dipilih hanya menamatkan perintah tanpa menyentuh papan keratan.

## Apa yang disalin

Muatan papan keratan membawa lebih daripada sekadar geometri, supaya tampalan ke lukisan asing tetap kelihatan betul:

| Bahagian | Tujuan |
|----------|--------|
| **Entiti** | Bentuk bersiri lengkap bagi setiap entiti terpilih |
| **Titik rujukan** | Sudut kiri bawah sempadan gabungan pilihan — yang ditambat ClipboardPaste pada kursor |
| **Lapisan** | Hanya lapisan yang benar-benar dirujuk oleh entiti yang disalin, mengikut nama |
| **Jenis garisan** | Hanya jenis garisan yang benar-benar dirujuk oleh entiti yang disalin, mengikut nama |

Hanya catatan jadual yang *dirujuk* mengiringi salinan — bukan keseluruhan jadual lapisan dan jenis garisan lukisan sumber. Corak lorekan langsung tidak dibungkus dan memang tidak perlu: jadual corak sesebuah lukisan ialah set lalai terbina, manakala fail `.pat` yang anda muat naik berada dalam simpanan setiap pengguna yang sememangnya dikongsi antara tab, jadi lorekan yang ditampal mencari coraknya sendiri.

## Pengesahan

Jika berjaya, terminal melaporkan berapa banyak entiti telah ditulis:

```
3 entities copied to clipboard
```

Jika pelayar menolak akses papan keratan, terminal memaparkan **Copy failed: clipboard access denied** dan tiada apa-apa ditulis. Itu keputusan kebenaran pelayar, bukan ralat lukisan — lihat [Kebenaran papan keratan](#kebenaran-papan-keratan) di bawah.

## Pemilihan semasa perintah berjalan

| Kaedah | Kelakuan |
|--------|----------|
| **Klik** | Memasukkan atau mengeluarkan entiti di bawah kursor daripada pilihan |
| **Seret ke kanan** (ketat) | Menambah entiti yang sepenuhnya berada dalam kotak |
| **Seret ke kiri** (memotong) | Menambah entiti yang memotong sempadan kotak |
| **Enter** / **Space** | Mengesahkan pilihan dan menyalin |

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|----------|
| `Ctrl+C` / `Cmd+C` | Aktifkan ClipboardCopy |
| `Enter` / `Space` | Salin pilihan semasa, atau keluar jika tiada apa-apa dipilih |
| `Escape` | Batal tanpa menyalin |

## Kebenaran papan keratan

Menulis ke papan keratan sistem memerlukan kebenaran pelayar. Pada praktiknya, salinan yang dicetuskan oleh tekanan kekunci diberikan tanpa bertanya dalam pelayar desktop semasa, tetapi halaman yang hilang fokus, atau pelayar dengan tetapan papan keratan yang ketat, boleh menolaknya. Jika mesej akses ditolak muncul, klik sekali pada kanvas untuk mengembalikan fokus kepada halaman dan cuba lagi.

Oleh sebab muatannya ialah teks JSON biasa, apa-apa sahaja yang anda salin selepas itu akan menggantikannya — sebaris teks, satu pautan. Salin semula sebelum menampal jika anda telah menggunakan papan keratan untuk perkara lain di antaranya.

## Entiti yang disokong

ClipboardCopy berfungsi dengan setiap jenis entiti. Entiti disiri dengan mekanisme yang sama seperti eksport `.json` asli, jadi tiada apa-apa yang tercicir di pertengahan jalan.

## Lihat juga

- [ClipboardPaste](../clipboard-paste/) — membaca semula papan keratan dan meletakkan entiti
- [Copy](../copy/) — menggandakan entiti di dalam lukisan semasa
- [Export Manager](../export-manager/) — menyimpan keseluruhan lukisan sebagai DXF atau JSON
