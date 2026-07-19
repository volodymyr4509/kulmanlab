---
title: Align — Menerjemahkan, Memutar, Menskala dengan Pasangan Titik
description: Perintah Align memposisikan ulang entitas yang dipilih menggunakan satu atau dua pasang titik sumber/tujuan — menggabungkan translasi, rotasi, dan penskalaan seragam opsional dalam satu operasi. Bekerja seperti gabungan Move + Rotate + Scale.
keywords: [perintah align CAD, meratakan entitas CAD, translasi rotasi skala, perataan pasangan titik, setara ALIGN AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

Perintah `align` memposisikan ulang entitas yang dipilih menggunakan satu atau dua pasang titik sumber/tujuan. Dengan satu pasang, perintah ini berperilaku persis seperti [Move](../move/) (translasi saja). Dengan dua pasang, perintah ini juga memutar seleksi sehingga arah sumber-ke-sumber cocok dengan arah tujuan-ke-tujuan, dan secara opsional dapat menskalakannya sehingga panjang segmen sumber cocok dengan panjang segmen tujuan — translasi, rotasi, dan penskalaan dalam satu operasi.

## Dua cara memulai

**Pra-pilih, lalu ratakan** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `align` di terminal atau klik tombol toolbar **Align**.
3. **Klik titik sumber pertama (S1)**, lalu **klik titik tujuan pertama (D1)**.
4. **Klik titik sumber kedua (S2)**, atau tekan **Enter** untuk langsung menerapkan perataan translasi saja.
5. **Klik titik tujuan kedua (D2)**.
6. Jawab prompt penskalaan: tekan **Y** untuk menskalakan, atau **N** / **Enter** untuk mempertahankan ukuran asli.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `align` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan entitas individual, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. Lanjutkan dengan S1 → D1 → S2 → D2 → prompt penskalaan seperti di atas.

> Terminal hanya memerlukan huruf yang cukup agar tidak ambigu — mengetik `al` dan menekan **Enter** langsung mengaktifkan Align, karena tidak ada nama perintah lain yang dimulai dengan dua huruf tersebut.

## Anatomi sebuah perataan

```
  Titik sumber (pada entitas):         Titik tujuan:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Hasil: seleksi ditranslasikan sehingga S1 mendarat di D1,
  kemudian diputar di sekitar D1 sehingga arah S1→S2 cocok
  dengan arah D1→D2 — dan, jika Anda memilih untuk menskalakan,
  diubah ukurannya sehingga |S1S2| menjadi |D1D2|.
```

Pratinjau bayangan mengikuti kursor di setiap langkah: pratinjau perpindahan saat menempatkan D1, lalu pratinjau berputar (garis putus-putus) setelah D2 sedang diposisikan.

## Perataan satu titik (translasi saja)

Setelah D1 ditempatkan, tekan **Enter** alih-alih mengklik titik sumber kedua. Seleksi ditranslasikan berdasarkan vektor S1→D1 — tanpa rotasi atau penskalaan — identik dengan [Move](../move/) menggunakan S1 sebagai titik dasar dan D1 sebagai tujuan.

## Perataan dua titik (translasi + rotasi + penskalaan opsional)

Setelah S2 dan D2 ditempatkan:

- **Sudut rotasi** — selisih antara arah tujuan (`D1 → D2`) dan arah sumber (`S1 → S2`).
- **Prompt penskalaan** — `scale objects to alignment points? [Yes/No] <N>` muncul, dengan **No** sebagai default:
  - Tekan **Y** untuk juga menskalakan seleksi secara seragam di sekitar D1 sehingga jarak `S1–S2` menjadi jarak `D1–D2`.
  - Tekan **N** atau **Enter** untuk mempertahankan ukuran asli — hanya translasi dan rotasi yang diterapkan.

Menekan tombol apa pun di prompt penskalaan langsung menerapkan perataan — tidak ada langkah konfirmasi terpisah setelah memilih Yes atau No.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi dan lanjut ke fase S1 |
| `Enter` (di langkah S2) | Lewati rotasi — terapkan perataan translasi saja menggunakan S1 dan D1 |
| `Y` | Terapkan perataan dengan penskalaan |
| `N` / `Enter` (di prompt penskalaan) | Terapkan perataan tanpa penskalaan |
| `Escape` | Saat menempatkan titik: membuang titik dan kembali ke fase seleksi; tanpa apa pun yang dipilih: membatalkan perintah |

## Seleksi selama perintah

Ketika perintah dimulai dalam fase seleksi:

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor masuk/keluar dari seleksi |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan batas kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi dan lanjut ke fase S1 |

## Setelah meratakan

Entitas yang diratakan tetap dipilih di posisi barunya, dan perintah berakhir secara otomatis — jalankan **Align** lagi, atau beralih ke [Move](../move/), [Rotate](../rotate/), atau [Scale](../scale/) tanpa memilih ulang.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Pasangan titik | 1 (translasi saja) atau 2 (translasi + rotasi + penskalaan) | 1 (translasi saja) |
| Rotasi | Ya, dengan pasangan titik kedua | Tidak |
| Penskalaan | Opsional, dengan pasangan titik kedua | Tidak |
| Terbaik untuk | Menyesuaikan satu bentuk ke bentuk lain menggunakan titik referensi | Pemosisian ulang sederhana |

## Entitas yang didukung

Align bekerja pada setiap tipe entitas yang didukung oleh Move, Rotate, dan Scale — operasi `translate`, `rotate`, dan `scale` yang sama yang digunakan perintah-perintah tersebut diterapkan secara berurutan, sehingga tidak ada yang dikecualikan.
