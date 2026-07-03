---
sidebar_position: 1
title: Arahan Move — Terjemahkan Entiti yang Dipilih mengikut Titik Asas dalam KulmanLab CAD
description: Arahan Move menterjemahkan satu atau lebih entiti yang dipilih mengikut titik asas dan destinasi. Menyokong pra-pemilihan, penguncian sudut, dan input jarak tepat. Selepas pindah, entiti kekal dipilih di kedudukan baru. Setiap jenis entiti disokong.
keywords: [arahan pindah CAD, terjemah entiti CAD, pindah objek CAD, kunci sudut pindah, jarak tepat pindah, grip pindah CAD, kulmanlab]
---

# Move

Arahan `move` menterjemahkan entiti yang dipilih dari titik asas ke titik destinasi. Anjakan yang digunakan ke setiap entiti yang dipilih adalah vektor dari asas ke destinasi. Selepas pindah, semua entiti kekal dipilih di kedudukan baru, sedia untuk edit selanjutnya.

## Dua cara untuk memulakan

**Pra-pilih, kemudian pindah** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `move` dalam terminal atau klik butang bar alat **Move**.
3. **Klik titik asas**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik destinasi** — semua entiti yang dipilih bergeser mengikut vektor asas→destinasi. Kemasukan koordinat juga berfungsi di sini.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `move` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel entiti individu, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. **Klik titik asas**, kemudian **klik destinasi** (kemasukan koordinat tersedia di kedua-dua langkah).

```
  Sebelum:                   Selepas:
  ● asas                       → ● destinasi
  [entiti A]                      [entiti A dipindah]
  [entiti B]                      [entiti B dipindah]
```

Pratonton hantu semua entiti yang dipilih mengikuti kursor dari titik asas ke destinasi, menunjukkan hasilnya sebelum anda mengklik.

## Kemasukan koordinat

Pada langkah titik asas atau destinasi, taip kedudukan tepat dan bukannya mengklik:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Penguncian sudut dan jarak tepat

Selepas titik asas ditetapkan, arahan memerhati paksi snap 45° (0°, 45°, 90°, 135°, …). Arah **dikunci** apabila kursor cukup jauh dari asas dan dalam satu lebar grip dari paksi. Semasa dikunci:

- Pratonton hantu snap ke paksi.
- Taip jarak dan tekan **Enter** untuk pindah tepat sejauh itu sepanjang arah yang dikunci.
- Mengklik diunjurkan ke paksi, jadi destinasi sentiasa terletak tepat padanya.

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah pada nilai jarak |
| `-` | Jarak negatif — membalikkan arah sepanjang paksi (aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Gunakan pindah pada jarak yang ditaip |

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan dan maju ke fasa titik asas |
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X, atau jarak apabila sudut dikunci |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau gunakan pindah pada jarak yang ditaip |
| `Escape` | Batal dan tetapkan semula |

## Mengaktifkan Move dari grip

Mengklik **grip titik tengah** [Line](../line/) yang dipilih melancarkan Move secara automatik, dengan titik tengah sudah ditetapkan sebagai titik asas dan fasa pindah aktif. Ini adalah cara terpantas untuk mengubah kedudukan satu garis tanpa melalui langkah pemilihan.

## Pemilihan semasa arahan

Apabila arahan bermula dalam fasa pemilihan:

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor masuk/keluar dari pemilihan |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan sempadan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan dan beralih ke fasa titik asas |

## Selepas pindah

Entiti yang dipindah kekal dipilih di kedudukan baru. Ini bermakna anda boleh serta-merta:
- Jalankan **Move** lagi untuk menolak mereka lebih jauh.
- Jalankan [Copy](../copy/), [Rotate](../rotate/), atau [Scale](../scale/) tanpa memilih semula.
- Tekan **Delete** untuk membuangnya.

## Move berbanding Copy

| | Move | Copy |
|---|------|------|
| Kedudukan asal | Dikosongkan — entiti tidak lagi berada di sana | Dikekalkan — asal kekal di tempat |
| Bilangan hasil | Bilangan entiti yang sama | Satu set tambahan setiap operasi |
| Pemilihan selepas | Entiti yang dipindah dipilih di kedudukan baru | Entiti yang disalin dipilih di kedudukan baru |
| Terbaik untuk | Mengubah kedudukan geometri | Menduplikasi geometri |

## Entiti yang disokong

Move berfungsi pada setiap jenis entiti: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, dan semua yang lain. Semua entiti melaksanakan `translate(dx, dy)` jadi tiada yang dikecualikan.
