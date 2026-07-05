---
sidebar_position: 15
title: Perintah Dimension Continue — Merantai Dimensi dari Baseline yang Ada di KulmanLab CAD
description: Perintah Dimension Continue memperpanjang rantai dimensi dari garis ekstensi kedua dimensi terakhir yang ditempatkan. Perintah ini mewarisi sudut, offset, ukuran panah, dan tinggi teks dimensi dasar secara otomatis. Bekerja dengan basis linear maupun sejajar.
keywords: [CAD dimension continue, dimcontinue, merantai dimensi CAD, dimensi baseline, lanjutkan seri dimensi, kulmanlab]
---

# Dimension Continue

Perintah `dimcontinue` merantai dimensi baru dari **garis ekstensi kedua** dimensi yang ada. Setiap segmen baru ditempatkan sepanjang sumbu pengukuran yang sama dan pada offset garis dimensi yang sama dengan basis. Semua properti gaya — ukuran panah, tinggi teks, panjang garis ekstensi — disalin dari basis secara otomatis.

## Tampilan dimensi yang dirantai

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (basis    p3           p4
           ekst2 → awal baru)
```

Setiap persegi panjang adalah entitas `DIMENSION` terpisah. Mereka berbagi posisi garis dimensi dan arah pengukuran yang sama.

## Memulai rantai

1. Ketik `dimcontinue` di terminal atau klik tombol toolbar **Dimension Continue**.
2. **Jika dimensi baru saja ditempatkan** — perintah mengambilnya secara otomatis sebagai basis (tidak perlu klik).
3. **Jika tidak ada dimensi terbaru** — klik dimensi yang ada untuk menggunakannya sebagai basis.
4. **Klik asal garis ekstensi berikutnya** — pratinjau menampilkan dimensi baru saat Anda menggerakkan kursor. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
5. Terus klik (atau ketik) untuk memperpanjang rantai. Setiap dimensi yang ditempatkan secara otomatis menjadi basis baru.
6. Tekan **Enter**, **Space**, atau **Escape** untuk menyelesaikan rantai.

## Apa yang diwarisi dari dimensi basis

| Properti | Diwarisi dari basis |
|----------|---------------------|
| Arah / sudut pengukuran | Ya — terkunci untuk seluruh rantai |
| Offset garis dimensi (jarak dari titik yang diukur) | Ya |
| Ukuran panah | Ya |
| Tinggi teks | Ya |
| Offset dan ekstensi garis ekstensi | Ya |
| Penyelarasan teks | Ya |
| Nama gaya | Ya |
| Color, Layer | Tidak diwarisi — menggunakan layer saat ini |

## Penguncian arah pengukuran

Arah pengukuran rantai **tetap pada sudut dimensi basis**:

- Basis linear (H) → semua kelanjutan mengukur jarak horizontal (Δ X).
- Basis linear (V) → semua kelanjutan mengukur jarak vertikal (Δ Y).
- Basis sejajar pada sudut mana saja → semua kelanjutan mengukur sepanjang sudut yang sama tersebut.

Anda tidak dapat mengubah arah di tengah rantai. Mulai [Dimension Linear](../dim-linear/) atau [Dimension Aligned](../dim-aligned/) baru untuk dimensi ke arah yang berbeda.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik, atau selesaikan rantai jika tidak ada input yang sedang berlangsung |
| `Space` / `Escape` | Selesaikan rantai |

## Dimension Continue vs memulai baru

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Titik awal | Tetap pada ekst2 basis terakhir | Klik di mana saja |
| Sudut | Terkunci ke basis | Bebas |
| Offset | Diwarisi dari basis | Ditetapkan oleh kursor atau diketik |
| Gaya | Diwarisi dari basis | Gaya saat ini |
| Terbaik untuk | Pengukuran kumulatif sepanjang baris | Dimensi pertama atau mengubah arah |

## Mengedit label setelah penempatan — mode sederhana

**Klik dua kali** dimensi mana pun dalam rantai untuk membuka editor teks dalam mode **sederhana**. Setiap segmen bersifat independen dan dapat diedit secara terpisah.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Font / Height | Berlaku untuk **seluruh label** sekaligus |
| Pemformatan per karakter | Tidak didukung |
| `Enter` | Mengonfirmasi nilai dan menutup editor |
| Multi-baris | Tidak didukung |

Lihat [Text Editor — mode sederhana](../../interface/text-editor/#simple-mode) untuk referensi lengkap.

## DXF — entitas DIMENSION

Setiap segmen dalam rantai disimpan sebagai entitas `DIMENSION` independen dalam file DXF. Mereka tidak terhubung dalam file — mereka berbagi properti karena dibuat dari basis yang sama, tetapi masing-masing dapat diedit secara individual setelah penempatan.
