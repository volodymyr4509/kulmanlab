---
title: Perintah Dimension Linear — Dimensi Horizontal dan Vertikal
description: Perintah Dimension Linear mengukur jarak horizontal atau vertikal antara dua titik. Garis dimensi selalu sejajar sumbu — tekan H atau V untuk mengunci orientasi, atau biarkan posisi kursor yang memutuskan secara otomatis. Dukungan penuh DXF sebagai entitas DIMENSION.
keywords: [dimensi linear CAD, dimensi horizontal CAD, dimensi vertikal CAD, dimlinear, kunci orientasi H V, offset dimensi, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Perintah `dimlinear` menempatkan dimensi horizontal atau vertikal antara dua asal garis ekstensi. Garis dimensi selalu berjalan secara horizontal atau vertikal sempurna — tidak dapat ditempatkan pada sudut arbitrer. Gunakan [Dimension Aligned](../dim-aligned/) ketika Anda perlu dimensi yang sejajar dengan garis diagonal.

## Anatomi dimensi linear

```
  |←————— 5.00 —————→|
  |                   |
  ●  (garis ekst 1)     ●  (garis ekst 2)
  p1                  p2
```

- **Garis ekstensi** — turun dari setiap titik yang diukur tegak lurus ke garis dimensi.
- **Garis dimensi** — horizontal (mengukur jarak X) atau vertikal (mengukur jarak Y).
- **Nilai** — jarak yang diproyeksikan sepanjang sumbu yang dipilih, bukan jarak titik-ke-titik yang sebenarnya.

## Menempatkan dimensi linear

1. Ketik `dimlinear` di terminal atau klik tombol toolbar **Dimension Linear**.
2. **Klik asal garis ekstensi pertama** (p1), atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik asal garis ekstensi kedua** (p2). Entri koordinat juga berfungsi di sini.
4. **Gerakkan kursor** untuk memposisikan garis dimensi. Orientasi terdeteksi secara otomatis dari posisi kursor.
5. **Klik** untuk menempatkan, atau ketik jarak offset dan tekan **Enter** untuk penempatan tepat.

## Deteksi orientasi otomatis

Ketika tidak ada orientasi yang dipaksakan, perintah membaca posisi kursor relatif terhadap dua titik yang diukur:

| Posisi kursor | Orientasi terdeteksi | Yang diukur |
|-----------------|---------------------|-----------------|
| Di atas atau di bawah titik | Horizontal | Δ X antara p1 dan p2 |
| Di kiri atau kanan titik | Vertikal | Δ Y antara p1 dan p2 |

Tekan **H** untuk mengunci horizontal atau **V** untuk mengunci vertikal kapan saja selama fase penempatan. Setelah terkunci, orientasi tidak berubah saat Anda menggerakkan kursor.

## Jarak offset yang diketik

Ketik angka selama penempatan untuk menetapkan garis dimensi pada jarak tepat dari titik yang diukur:

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke jarak offset |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` / `Space` | Tempatkan pada jarak yang diketik |

Sisi kursor (atas/bawah untuk horizontal, kiri/kanan untuk vertikal) menentukan tanda — garis dimensi muncul di sisi yang saat ini berada kursor.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X (fase p1/p2), atau jarak offset (fase penempatan) |
| `,` | Kunci X dan pindah ke entri Y (fase p1/p2) |
| `H` | Kunci orientasi horizontal (hanya fase penempatan) |
| `V` | Kunci orientasi vertikal (hanya fase penempatan) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` / `Space` | Konfirmasi koordinat atau offset yang diketik |
| `Escape` | Batal |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Sumbu | Selalu H atau V | Sejajar dengan garis yang diukur |
| Mengukur | Hanya komponen X atau Y | Jarak Euclidean yang sebenarnya |
| Tombol H/V | Ya — kunci orientasi | Tidak — selalu mengikuti p1→p2 |
| Terbaik untuk | Layout ortogonal, denah lantai | Fitur diagonal, potongan miring |

## Mengedit label — mode sederhana

**Klik dua kali** dimensi linear yang ditempatkan untuk membuka editor teks dalam mode **sederhana**. Editor diisi terlebih dahulu dengan nilai yang dirender saat ini sehingga Anda dapat memposisikan kursor dan mengeditnya langsung.

| Fitur | Perilaku |
|-------|---------|
| Bold / Italic / Font / Height | Berlaku untuk **seluruh label** sekaligus |
| Pemformatan per karakter | Tidak didukung |
| `Enter` | Mengonfirmasi nilai dan menutup editor |
| Multi-baris | Tidak didukung |

Lihat [Text Editor — mode sederhana](../../interface/text-editor/#simple-mode) untuk referensi lengkap.

## Merantai dimensi

Untuk menambahkan lebih banyak dimensi yang berlanjut dari garis ekstensi terakhir, gunakan [Dimension Continue](../dim-continue/) segera setelah menempatkan yang ini.

## DXF — entitas DIMENSION

Dimensi linear disimpan sebagai entitas `DIMENSION` dengan `rotationDeg` diatur ke `0` (horizontal) atau `90` (vertikal). Asal garis ekstensi, posisi garis dimensi, posisi teks, nilai yang diukur, gaya panah, tinggi teks, dan semua flag tampilan dapat dipertukarkan tanpa kehilangan data.
