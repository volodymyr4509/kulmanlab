---
title: "Arahan Dimension Diameter — Anotasi Diameter Penuh Bulatan dan Lengkok dalam KulmanLab CAD"
description: "Arahan Dimension Diameter meletakkan dimensi diameter (berprefiks simbol diameter) merentasi lengkok atau bulatan melalui pusat. Gerakkan kursor untuk memutar garis dimensi ke mana-mana sudut. Pusingan penuh DXF sebagai entiti DIMENSION diameter."
keywords: [CAD dimensi diameter, dimdiameter, anotasi diameter bulatan, dimensi diameter lengkok, simbol diameter CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Arahan `dimdiameter` meletakkan dimensi diameter pada lengkok atau bulatan. Garis dimensi merentang diameter penuh — melalui pusat antara dua titik lengkok yang berlawanan secara diametrik — dan berlabel `⌀ <nilai>`. Untuk menganotasi hanya jejari dari pusat ke satu tepi, gunakan [Dimension Radius](../dim-radius/).

## Anatomi dimensi diameter

```
  ●──────────── ⌀ 10.00 ────────────●
  (titik lengkok jauh)              (titik lengkok hampir / sisi teks)
```

- **Garis dimensi** — merentang diameter penuh, dengan kepala anak panah di kedua-dua titik persimpangan lengkok.
- **Titik lengkok hampir** — titik lilitan di sisi kursor (di mana label teks duduk).
- **Titik lengkok jauh** — titik yang berlawanan secara diametrik.
- **Label** — `⌀` diikuti dengan nilai diameter.

## Meletakkan dimensi diameter

1. Taip `dimdiameter` dalam terminal atau klik butang bar alat **Dimension Diameter**.
2. **Klik lengkok atau bulatan** untuk memilihnya.
3. **Gerakkan kursor** untuk memutar garis dimensi ke sudut yang dikehendaki.
4. **Klik** untuk meletakkan dimensi.

Hanya entiti **Arc** dan **Circle** yang boleh dipilih.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Escape` | Batal |

## Dimension Diameter berbanding Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mengukur | Diameter penuh (2 × jejari) | Jejari (pusat ke tepi) |
| Garis dimensi | Tepi → tepi melalui pusat | Pusat → tepi |
| Prefiks label | `⌀` | `R` |
| Kepala anak panah | Dua (di kedua-dua titik lengkok) | Satu (di titik lengkok) |
| Terbaik untuk | Dimensi lubang bulatan atau aci penuh | Menganotasi satu sisi ciri melengkung |

## Mengedit label — mod mudah

**Klik dua kali** dimensi diameter yang diletakkan untuk membuka editor teks dalam mod **mudah**. Editor diisi terlebih dahulu dengan nilai yang dirender semasa (mis. `⌀ 10.00`) supaya anda boleh meletakkan kursor dan mengeditnya terus.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | Mengkomit nilai dan menutup editor |
| Berbilang baris | Tidak disokong |

Lihat [Text Editor — mod mudah](../../interface/text-editor/#simple-mode) untuk rujukan penuh.

## DXF — entiti DIMENSION diameter

Dimensi diameter disimpan sebagai entiti `DIMENSION` dengan geometri jenis diameter, menyimpan kedua-dua kedudukan titik lengkok dan nilai diameter yang diukur (2 × jejari). Semua sifat pusingan penuh tanpa kehilangan.
