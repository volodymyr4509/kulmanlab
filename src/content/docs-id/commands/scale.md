---
title: Perintah Scale — Mengubah Ukuran Entitas Secara Seragam di Sekitar Titik Dasar di KulmanLab CAD
description: Perintah Scale mengubah ukuran entitas yang dipilih secara seragam berdasarkan faktor yang diketik di sekitar titik dasar yang tetap. Faktor selalu dimasukkan melalui keyboard — tidak ada klik-untuk-mengatur-skala. Faktor lebih besar dari 1 memperbesar; kurang dari 1 memperkecil. Setiap tipe entitas didukung.
keywords: [perintah skala CAD, mengubah ukuran entitas CAD, menskalakan objek CAD, skala seragam CAD, faktor skala CAD, memperbesar memperkecil CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Perintah `scale` mengubah ukuran entitas yang dipilih secara seragam di sekitar titik dasar. Semua jarak dari titik dasar dikalikan dengan faktor skala — faktor `2` menggandakan semua dimensi, `0.5` membagi duanya. Faktor selalu dimasukkan dengan mengetik; tidak ada klik-untuk-mengatur-skala.

## Dua cara memulai

**Pra-pilih, lalu skalakan** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `scale` di terminal atau klik tombol toolbar **Scale**.
3. **Klik titik dasar** — titik tetap yang tidak bergerak selama penskalaan. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Ketik faktor skala** dan tekan **Enter**.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `scale` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. **Klik titik dasar** (entri koordinat tersedia), kemudian ketik faktornya.

```
  Dasar ●                Dasar ●
        [entitas]   →          [entitas lebih besar]
  faktor = 2 → jarak dari ● digandakan
```

## Mengetik faktor skala

Setelah titik dasar ditempatkan, terminal menampilkan `masukkan faktor skala:` dan menunggu input keyboard:

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke faktor |
| `-` | Faktor negatif (karakter pertama saja — membalik lalu menskalakan) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Terapkan skala pada faktor yang diketik |

Faktor harus tidak nol. Nilai umum:

| Faktor | Efek |
|--------|--------|
| `2` | Menggandakan semua dimensi |
| `0.5` | Membagi dua semua dimensi |
| `1.5` | Meningkatkan sebesar 50% |
| `-1` | Mencerminkan di sekitar titik dasar (sama dengan rotasi 180°) |

Tidak ada pratinjau langsung saat mengetik — hasil yang diskalakan hanya muncul setelah menekan **Enter**.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi |
| `0`–`9`, `.`, `-` | Mulai entri koordinat X (fase titik dasar), atau faktor skala (fase faktor) |
| `,` | Kunci X dan pindah ke entri Y (fase titik dasar) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau terapkan skala |
| `Escape` | Batal dan reset |

## Seleksi selama perintah

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi |

## Apa yang diskalakan

Semua tipe entitas didukung. Setiap entitas menskalakan geometrinya relatif terhadap titik dasar:

| Entitas | Apa yang berubah |
|--------|-------------|
| Line | Kedua titik akhir diskalakan menjauh dari titik dasar |
| Circle | Pusat diskalakan dari titik dasar; radius dikalikan dengan faktor |
| Arc | Pusat diskalakan; radius dikalikan dengan faktor; sudut tidak berubah |
| Ellipse | Pusat diskalakan; panjang kedua semi-sumbu dikalikan dengan faktor |
| Polyline / Rectangle | Setiap vertex diskalakan dari titik dasar |
| Text | Titik jangkar diskalakan; tinggi dikalikan dengan faktor |
| Spline | Semua control vertex / titik fit diskalakan |
