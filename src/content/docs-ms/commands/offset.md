---
sidebar_position: 11
title: Arahan Offset — Cipta Salinan Selari pada Jarak Tetap dalam KulmanLab CAD
description: Arahan Offset mencipta salinan selari Line, Circle, Arc, Ellipse, atau Polyline pada jarak bertaip. Jarak dimasukkan sekali dan digunakan semula untuk berbilang offset. Klik sisi menentukan arah salinan muncul. Lima jenis entiti disokong.
keywords: [arahan offset CAD, salinan selari CAD, offset garis CAD, offset bulatan CAD, offset poliline CAD, offset konsentrik, kulmanlab]
---

# Offset

Arahan `offset` mencipta salinan selari entiti pada jarak tegak lurus tetap. Anda menaip jarak sekali, kemudian klik entiti dan pilih sisi — arahan kekal sedia pada jarak yang sama supaya anda boleh mengimbangi berbilang objek dalam satu sesi.

Jenis entiti yang disokong: **Line, Circle, Arc, Ellipse, Polyline** (termasuk Rectangle).

## Menggunakan offset

1. Taip `offset` dalam terminal atau klik butang bar alat **Offset**.
2. **Taip jarak offset** dan tekan **Enter** atau **Space**.
3. **Klik entiti** untuk diimbangi — jika entiti bukan jenis yang disokong, mesej ralat muncul dan anda boleh mengklik entiti berbeza.
4. **Gerakkan kursor** ke sisi di mana salinan harus muncul — pratonton langsung mengikuti.
5. **Klik** untuk meletakkan salinan offset.

Selepas setiap peletakan, arahan kembali ke langkah 3 pada **jarak yang sama**, sedia untuk offset seterusnya. Tekan **Escape** untuk tetapkan semula kembali ke langkah kemasukan jarak.

```
  Jarak: 10

  ─────────────────    ← garis asal
  ─────────────────    ← salinan offset (10 unit di bawah)
```

## Tingkah laku offset setiap entiti

| Entiti | Bagaimana offset dikira |
|--------|------------------------|
| **Line** | Garis selari yang digeser tegak lurus kepada arah asal |
| **Circle** | Bulatan konsentrik; klik di luar → jejari lebih besar, dalam → jejari lebih kecil |
| **Arc** | Lengkok konsentrik pada jejari baru; rentang sudut yang sama dipelihara |
| **Ellipse** | Kedua-dua semi-paksi ditambah atau dikurangkan dengan jarak yang sama |
| **Polyline** | Setiap segmen diimbangi secara bebas; segmen offset bersebelahan dimimet di sudut |

Untuk **Circle**, **Arc**, dan **Ellipse**: jika offset ke dalam akan mengurangkan mana-mana jejari atau semi-paksi ke sifar atau di bawah, offset tidak digunakan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai jarak |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` / `Space` | Sahkan jarak yang ditaip dan maju ke pemilihan entiti |
| `Escape` | Tetapkan semula ke langkah kemasukan jarak |

## Nota aliran kerja

Jarak kekal ditetapkan sehingga anda menekan **Escape**. Ini menjadikannya cekap untuk mengimbangi banyak entiti dengan jarak yang sama — taip jarak sekali, kemudian klik dan pilih sisi untuk setiap entiti secara bergilir.

## Offset berbanding Copy

| | Offset | Copy |
|---|--------|------|
| Anjakan | Tegak lurus kepada geometri entiti | Vektor sewenang-wenangnya (asas → destinasi) |
| Entiti yang disokong | Line, Circle, Arc, Ellipse, Polyline | Semua jenis entiti |
| Input jarak | Ditaip sebelum memilih entiti | Ditaip atau diklik selepas memilih |
| Terbaik untuk | Garis selari, bulatan konsentrik, laluan masuk/keluar | Meletakkan duplikat pada kedudukan sewenang-wenangnya |
