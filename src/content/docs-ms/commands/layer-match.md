---
title: LayerMatch — Tugaskan Semula Lapisan Entiti untuk Sepadan dengan Sumber dalam KulmanLab CAD
description: Arahan LayerMatch menugaskan semula lapisan satu atau lebih entiti sasaran agar sepadan dengan lapisan entiti sumber yang anda klik.
keywords: [padankan lapisan, padankan lapisan CAD, tugaskan semula lapisan kulmanlab, pengurusan lapisan CAD]
group: layer
order: 2
---

# LayerMatch

Arahan `LayerMatch` menugaskan semula lapisan entiti yang dipilih agar sepadan dengan lapisan entiti sumber yang anda klik. Ia adalah cara terpantas untuk memindahkan sekumpulan objek ke lapisan yang betul tanpa membuka Pengurus Lapisan.

## Aliran kerja

**Pra-pilih, kemudian padankan**:

1. Pilih entiti yang anda ingin tukar lapisannya.
2. Taip `LayerMatch` atau klik butang bar alat **Layer Match** (ikon cat).
3. **Klik objek sumber** — yang lapisannya anda ingin salin.
4. Semua entiti yang dipilih berpindah ke lapisan objek sumber serta-merta.

**Aktifkan, kemudian pilih**:

1. Taip `LayerMatch` atau klik butang bar alat tanpa apa-apa yang dipilih.
2. **Pilih entiti sasaran** — klik untuk togel entiti individu atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. **Klik objek sumber** — lapisannya digunakan pada semua sasaran.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan sasaran dan maju ke fasa pilihan sumber |
| `Escape` | Tetapkan semula — kembali ke pemilihan sasaran atau batal sepenuhnya |

## Butiran tingkah laku

- Hanya sifat `layer` yang berubah — warna, linetype, lineweight, dan geometri tidak disentuh.
- Objek sumber itu sendiri tidak diubah suai.
- Arahan selesai selepas sumber diklik.
- Mengklik kanvas kosong semasa fasa pilihan sumber tidak membuat apa-apa.
