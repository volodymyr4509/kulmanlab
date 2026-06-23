---
sidebar_position: 17
title: "Perintah Dimension Diameter — Menganotasi Diameter Lingkaran dan Busur Penuh di KulmanLab CAD"
description: "Perintah Dimension Diameter menempatkan dimensi diameter (diberi awalan simbol diameter) melintasi busur atau lingkaran melalui pusat. Gerakkan kursor untuk memutar garis dimensi ke sudut mana saja. Dukungan penuh DXF sebagai entitas DIMENSION diameter."
keywords: [dimensi diameter CAD, dimdiameter, menganotasi diameter lingkaran, dimensi diameter busur, simbol diameter CAD, kulmanlab]
---

# Dimension Diameter

Perintah `dimdiameter` menempatkan dimensi diameter pada busur atau lingkaran. Garis dimensi merentang diameter penuh — melewati pusat antara dua titik busur yang berdiametral berlawanan — dan dilabeli `⌀ <nilai>`. Untuk menganotasi hanya radius dari pusat ke satu tepi, gunakan [Dimension Radius](./dim-radius).

## Anatomi dimensi diameter

```
  ●──────────── ⌀ 10.00 ────────────●
  (titik busur jauh)              (titik busur dekat / sisi teks)
```

- **Garis dimensi** — merentang diameter penuh, dengan kepala panah di kedua titik persimpangan busur.
- **Titik busur dekat** — titik lingkar di sisi kursor (tempat label teks berada).
- **Titik busur jauh** — titik yang berdiametral berlawanan.
- **Label** — `⌀` diikuti nilai diameter.

## Menempatkan dimensi diameter

1. Ketik `dimdiameter` di terminal atau klik tombol toolbar **Dimension Diameter**.
2. **Klik busur atau lingkaran** untuk memilihnya.
3. **Gerakkan kursor** untuk memutar garis dimensi ke sudut yang diinginkan.
4. **Klik** untuk menempatkan dimensi.

Hanya entitas **Arc** dan **Circle** yang dapat dipilih.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` | Batal |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mengukur | Diameter penuh (2 × radius) | Radius (pusat ke tepi) |
| Garis dimensi | Tepi → tepi melalui pusat | Pusat → tepi |
| Awalan label | `⌀` | `R` |
| Kepala panah | Dua (di kedua titik busur) | Satu (di titik busur) |
| Terbaik untuk | Dimensi lubang atau poros melingkar penuh | Menganotasi satu sisi fitur melengkung |

## DXF — entitas DIMENSION diameter

Dimensi diameter disimpan sebagai entitas `DIMENSION` dengan geometri tipe diameter, menyimpan kedua posisi titik busur dan nilai diameter yang diukur (2 × radius). Semua properti dapat dipertukarkan tanpa kehilangan data.
