---
sidebar_position: 7
title: Arahan Align — Memindah, Memutar dan Menskala Entiti Menggunakan Pasangan Titik dalam KulmanLab CAD
description: Arahan Align meletakkan semula entiti yang dipilih menggunakan satu atau dua pasang titik sumber/destinasi — menggabungkan pergerakan, putaran, dan skala seragam pilihan dalam satu operasi. Berfungsi seperti gabungan Move + Rotate + Scale.
keywords: [arahan align CAD, jajarkan entiti CAD, pindah putar skala, penjajaran pasangan titik, setara ALIGN AutoCAD, kulmanlab]
---

# Align

Arahan `align` meletakkan semula entiti yang dipilih menggunakan satu atau dua pasang titik sumber/destinasi. Dengan satu pasang, ia berkelakuan sama seperti [Move](../move/) (pergerakan sahaja). Dengan dua pasang, ia turut memutar pemilihan supaya arah sumber-ke-sumber sepadan dengan arah destinasi-ke-destinasi, dan boleh secara pilihan menskalakannya supaya panjang segmen sumber sepadan dengan panjang segmen destinasi — pergerakan, putaran, dan skala dalam satu operasi.

## Dua cara untuk memulakan

**Pra-pilih, kemudian jajarkan** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `align` dalam terminal atau klik butang bar alat **Align**.
3. **Klik titik sumber pertama (S1)**, kemudian **klik titik destinasi pertama (D1)**.
4. **Klik titik sumber kedua (S2)**, atau tekan **Enter** untuk terus menggunakan penjajaran pergerakan sahaja.
5. **Klik titik destinasi kedua (D2)**.
6. Jawab gesaan skala: tekan **Y** untuk menskala, atau **N** / **Enter** untuk mengekalkan saiz asal.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `align` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel entiti individu, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. Teruskan dengan S1 → D1 → S2 → D2 → gesaan skala seperti di atas.

> Terminal hanya memerlukan huruf yang cukup untuk tidak jelas — menaip `al` dan menekan **Enter** mengaktifkan Align secara terus, kerana tiada arahan lain bermula dengan dua huruf tersebut.

## Anatomi penjajaran

```
  Titik sumber (pada entiti):          Titik destinasi:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Hasil: pemilihan dipindahkan supaya S1 mendarat pada D1,
  kemudian diputar sekitar D1 supaya arah S1→S2 sepadan dengan
  arah D1→D2 — dan, jika anda memilih untuk menskala, disaiz
  semula supaya |S1S2| menjadi |D1D2|.
```

Pratonton hantu mengikuti kursor pada setiap langkah: pratonton pergerakan semasa meletakkan D1, kemudian pratonton berputar (bergaris putus) sebaik sahaja D2 diletakkan.

## Penjajaran satu titik (pergerakan sahaja)

Selepas D1 diletakkan, tekan **Enter** dan bukannya mengklik titik sumber kedua. Pemilihan dipindahkan mengikut vektor S1→D1 — tanpa putaran atau skala — sama seperti [Move](../move/) menggunakan S1 sebagai titik asas dan D1 sebagai destinasi.

## Penjajaran dua titik (pergerakan + putaran + skala pilihan)

Sebaik sahaja S2 dan D2 kedua-duanya diletakkan:

- **Sudut putaran** — perbezaan antara arah destinasi (`D1 → D2`) dan arah sumber (`S1 → S2`).
- **Gesaan skala** — `scale objects to alignment points? [Yes/No] <N>` muncul, dengan **No** sebagai lalai:
  - Tekan **Y** untuk turut menskala pemilihan secara seragam sekitar D1 supaya jarak `S1–S2` menjadi jarak `D1–D2`.
  - Tekan **N** atau **Enter** untuk mengekalkan saiz asal — hanya pergerakan dan putaran digunakan.

Menekan sebarang kekunci pada gesaan skala menggunakan penjajaran serta-merta — tiada langkah pengesahan berasingan selepas memilih Ya atau Tidak.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan dan maju ke fasa S1 |
| `Enter` (pada langkah S2) | Langkau putaran — gunakan penjajaran pergerakan sahaja menggunakan S1 dan D1 |
| `Y` | Gunakan penjajaran dengan skala |
| `N` / `Enter` (pada gesaan skala) | Gunakan penjajaran tanpa skala |
| `Escape` | Semasa meletakkan titik: buang titik yang diletakkan dan kembali ke fasa pemilihan; tanpa apa-apa yang dipilih: batalkan arahan |

## Pemilihan semasa arahan

Apabila arahan bermula dalam fasa pemilihan:

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor masuk/keluar dari pemilihan |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan sempadan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan dan beralih ke fasa S1 |

## Selepas menjajarkan

Entiti yang dijajarkan kekal dipilih di kedudukan baru, dan arahan berakhir secara automatik — jalankan **Align** lagi, atau tukar ke [Move](../move/), [Rotate](../rotate/), atau [Scale](../scale/) tanpa memilih semula.

## Align berbanding Move

| | Align | Move |
|---|-------|------|
| Pasangan titik | 1 (pergerakan sahaja) atau 2 (pergerakan + putaran + skala) | 1 (pergerakan sahaja) |
| Putaran | Ya, dengan pasangan titik kedua | Tidak |
| Skala | Pilihan, dengan pasangan titik kedua | Tidak |
| Terbaik untuk | Menyesuaikan satu bentuk pada bentuk lain menggunakan titik rujukan | Perletakan semula ringkas |

## Entiti yang disokong

Align berfungsi pada setiap jenis entiti yang disokong oleh Move, Rotate, dan Scale — operasi `translate`, `rotate`, dan `scale` yang sama yang digunakan arahan-arahan tersebut digunakan secara berurutan, jadi tiada yang dikecualikan.
