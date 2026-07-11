---
title: Perintah Dimension Radius — Menganotasi Radius Busur dan Lingkaran di KulmanLab CAD
description: Perintah Dimension Radius menempatkan dimensi radial dengan awalan R pada busur atau lingkaran. Klik entitas, kemudian gerakkan kursor untuk mengorientasikan garis dimensi dari pusat ke lingkar. Dukungan penuh DXF sebagai entitas DIMENSION radius.
keywords: [dimensi radius CAD, dimradius, menganotasi radius lingkaran, dimensi radius busur, dimensi awalan R, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Perintah `dimradius` menempatkan dimensi radius pada busur atau lingkaran. Garis dimensi berjalan dari pusat ke titik pada lingkar dalam arah kursor, dilabeli `R <nilai>`. Untuk mengukur diameter penuh sebagai gantinya, gunakan [Dimension Diameter](../dim-diameter/).

## Anatomi dimensi radius

```
  ● (pusat)
   \
    \  R 5.00
     \
      ●────── teks (sisi kursor)
   (titik busur)
```

- **Garis dimensi** — dari pusat melalui titik busur ke arah kursor, dengan kepala panah di busur.
- **Label** — `R` diikuti nilai radius.

## Menempatkan dimensi radius

1. Ketik `dimradius` di terminal atau klik tombol toolbar **Dimension Radius**.
2. **Klik busur atau lingkaran** untuk memilihnya.
3. **Gerakkan kursor** untuk mengorientasikan garis dimensi — titik busur mengikuti arah kursor dari pusat.
4. **Klik** untuk menempatkan dimensi.

Hanya entitas **Arc** dan **Circle** yang dapat dipilih. Mengklik tipe entitas lain tidak melakukan apa-apa.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` | Batal |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mengukur | Radius (pusat ke tepi) | Diameter (tepi ke tepi melalui pusat) |
| Garis dimensi | Pusat → titik busur | Titik busur → titik busur (melalui pusat) |
| Awalan label | `R` | `⌀` |
| Kepala panah | Satu (di titik busur) | Dua (di kedua titik busur) |
| Terbaik untuk | Menganotasi satu sisi fitur melengkung | Menganotasi dimensi lingkaran penuh |

## Mengedit label — mode sederhana

**Klik dua kali** dimensi radius yang ditempatkan untuk membuka editor teks dalam mode **sederhana**. Editor diisi terlebih dahulu dengan nilai yang dirender saat ini (mis. `R 5.00`) sehingga Anda dapat memposisikan kursor dan mengeditnya langsung.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Font / Height | Berlaku untuk **seluruh label** sekaligus |
| Pemformatan per karakter | Tidak didukung |
| `Enter` | Mengonfirmasi nilai dan menutup editor |
| Multi-baris | Tidak didukung |

Lihat [Text Editor — mode sederhana](../../interface/text-editor/#simple-mode) untuk referensi lengkap.

## DXF — entitas DIMENSION radius

Dimensi radius disimpan sebagai entitas `DIMENSION` dengan geometri tipe radius, menyimpan koordinat pusat, posisi titik busur, dan nilai radius yang diukur. Semua properti dapat dipertukarkan tanpa kehilangan data.
