---
sidebar_position: 9
title: Dimension Angular — Mengukur Sudut antara Garis, Busur dan Lingkaran di KulmanLab CAD
description: Perintah DimensionAngular menempatkan anotasi dimensi sudut pada garis, busur, atau lingkaran. Mendukung mode sudut dua garis, rentang busur, dan sektor lingkaran.
keywords: [dimensi sudut CAD, dimensi sudut, mengukur sudut antara garis, DimensionAngular, dimensi busur, anotasi sudut, markup sudut CAD, kulmanlab dimensi sudut]
---

# Dimension Angular

Perintah `DimensionAngular` menempatkan anotasi **dimensi sudut** busur pada gambar. Perintah ini mengukur dan memberi label pada sudut antara dua garis, rentang busur, atau sektor lingkaran.

## Cara mengaktifkan

Klik tombol toolbar **Dimension Angular** di panel Markup, atau ketik `DimensionAngular` di terminal.

## Tiga mode input

Klik pertama menentukan mode yang digunakan:

### Dua garis

1. **Klik garis pertama.** Posisi kursor menentukan sisi garis mana yang digunakan.
2. **Klik garis kedua.** Kedua garis harus berpotongan (perpotongan dihitung secara otomatis; tidak perlu terlihat di layar).
3. **Klik untuk menempatkan** busur dimensi. Gerakkan kursor untuk memilih radius dan sektor sudut mana yang diberi label — anotasi mengikuti kursor ke sisi mana pun dari vertex yang Anda tempati.

Garis paralel tidak dapat membentuk dimensi sudut; perintah mengabaikan klik kedua jika garis tidak berpotongan.

### Busur

1. **Klik busur.** Dimensi langsung dibuat dari sudut awal ke sudut akhir busur, menggunakan pusat busur sebagai vertex.
2. **Klik untuk menempatkan** busur dimensi pada radius yang diinginkan.

### Lingkaran

1. **Klik lingkaran.** Titik akhir sudut pertama menempel ke titik terdekat pada lingkaran.
2. **Klik titik kedua** pada lingkaran untuk menentukan titik akhir sudut kedua.
3. **Klik untuk menempatkan** busur dimensi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` | Batal dan kembali ke pengambilan pertama |

## Detail perilaku

- Busur dimensi selalu digambar di sisi vertex tempat Anda menempatkannya — gerakkan kursor melintasi vertex untuk beralih ke sudut suplemen.
- Sudut yang diukur ditampilkan dalam derajat dan diperbarui secara langsung saat Anda menggerakkan kursor selama penempatan.
- Anotasi yang dihasilkan adalah entitas `DimensionAngular` penuh yang disimpan pada layer saat ini. Properti tampilannya (ukuran panah, tinggi teks, panjang garis ekstensi) dapat disesuaikan di panel Properti.
- Dimensi sudut disertakan dalam ekspor JSON tetapi tidak didukung oleh eksporter DXF.

## Mengedit label — mode sederhana

**Klik dua kali** dimensi sudut yang ditempatkan untuk membuka editor teks dalam mode **sederhana**. Editor diisi terlebih dahulu dengan nilai yang dirender saat ini sehingga Anda dapat memposisikan kursor dan mengeditnya langsung.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Font / Height | Berlaku untuk **seluruh label** sekaligus |
| Pemformatan per karakter | Tidak didukung |
| `Enter` | Mengonfirmasi nilai dan menutup editor |
| Multi-baris | Tidak didukung |

Lihat [Text Editor — mode sederhana](../interface/text-editor#simple-mode) untuk referensi lengkap.

## Perintah terkait

- [Dimension Linear](./dim-linear) — dimensi horizontal atau vertikal
- [Dimension Aligned](./dim-aligned) — dimensi yang sejajar dengan dua titik
- [Dimension Radius](./dim-radius) — dimensi radius untuk busur dan lingkaran
- [Dimension Diameter](./dim-diameter) — dimensi diameter untuk lingkaran
