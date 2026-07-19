---
title: Arahan Dimension Radius — Anotasi Jejari Lengkok dan Bulatan
description: Arahan Dimension Radius meletakkan dimensi radial berprefiks R pada lengkok atau bulatan. Klik entiti, kemudian gerakkan kursor untuk mengorientasikan garis dimensi dari pusat ke lilitan. Pusingan penuh DXF sebagai entiti DIMENSION jejari.
keywords: [CAD dimensi jejari, dimradius, anotasi jejari bulatan, dimensi jejari lengkok, dimensi prefiks R, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Arahan `dimradius` meletakkan dimensi jejari pada lengkok atau bulatan. Garis dimensi berjalan dari pusat ke titik pada lilitan dalam arah kursor, berlabel `R <nilai>`. Untuk mendimensikan diameter penuh sebaliknya, gunakan [Dimension Diameter](../dim-diameter/).

## Anatomi dimensi jejari

```
  ● (pusat)
   \
    \  R 5.00
     \
      ●────── teks (sisi kursor)
   (titik lengkok)
```

- **Garis dimensi** — dari pusat melalui titik lengkok ke arah kursor, dengan kepala anak panah di lengkok.
- **Label** — `R` diikuti dengan nilai jejari.

## Meletakkan dimensi jejari

1. Taip `dimradius` dalam terminal atau klik butang bar alat **Dimension Radius**.
2. **Klik lengkok atau bulatan** untuk memilihnya.
3. **Gerakkan kursor** untuk mengorientasikan garis dimensi — titik lengkok mengikuti arah kursor dari pusat.
4. **Klik** untuk meletakkan dimensi.

Hanya entiti **Arc** dan **Circle** yang boleh dipilih. Mengklik mana-mana jenis entiti lain tidak membuat apa-apa.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Escape` | Batal |

## Dimension Radius berbanding Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mengukur | Jejari (pusat ke tepi) | Diameter (tepi ke tepi melalui pusat) |
| Garis dimensi | Pusat → titik lengkok | Titik lengkok → titik lengkok (melalui pusat) |
| Prefiks label | `R` | `⌀` |
| Kepala anak panah | Satu (di titik lengkok) | Dua (di kedua-dua titik lengkok) |
| Terbaik untuk | Menganotasi satu sisi ciri melengkung | Menganotasi dimensi bulatan penuh |

## Mengedit label — mod mudah

**Klik dua kali** dimensi jejari yang diletakkan untuk membuka editor teks dalam mod **mudah**. Editor diisi terlebih dahulu dengan nilai yang dirender semasa (mis. `R 5.00`) supaya anda boleh meletakkan kursor dan mengeditnya terus.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | Mengkomit nilai dan menutup editor |
| Berbilang baris | Tidak disokong |

Lihat [Text Editor — mod mudah](../../interface/text-editor/#simple-mode) untuk rujukan penuh.

## DXF — entiti DIMENSION jejari

Dimensi jejari disimpan sebagai entiti `DIMENSION` dengan geometri jenis jejari, menyimpan koordinat pusat, kedudukan titik lengkok, dan nilai jejari yang diukur. Semua sifat pusingan penuh tanpa kehilangan.
