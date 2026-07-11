---
title: LayerMatch — Menetapkan Ulang Layer Entitas agar Sesuai dengan Sumber di KulmanLab CAD
description: Perintah LayerMatch menetapkan ulang layer satu atau lebih entitas target agar sesuai dengan layer entitas sumber yang Anda klik.
keywords: [layer match, cocokkan layer CAD, tetapkan ulang layer kulmanlab, manajemen layer CAD]
group: layer
order: 2
---

# LayerMatch

Perintah `LayerMatch` menetapkan ulang layer entitas yang dipilih agar sesuai dengan layer entitas sumber yang Anda klik. Ini adalah cara tercepat untuk memindahkan sekelompok objek ke layer yang benar tanpa membuka Layer Manager.

## Alur kerja

**Pra-pilih, lalu cocokkan**:

1. Pilih entitas yang layer-nya ingin Anda ubah.
2. Ketik `LayerMatch` atau klik tombol toolbar **Layer Match** (ikon cat).
3. **Klik objek sumber** — yang layer-nya ingin Anda salin.
4. Semua entitas yang dipilih berpindah ke layer objek sumber segera.

**Aktifkan, lalu pilih**:

1. Ketik `LayerMatch` atau klik tombol toolbar tanpa ada yang dipilih.
2. **Pilih objek target** — klik untuk mengalihkan entitas individual atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. **Klik objek sumber** — layer-nya diterapkan ke semua target.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi target dan beralih ke fase pengambilan sumber |
| `Escape` | Reset — kembali ke seleksi target atau batal sepenuhnya |

## Detail perilaku

- Hanya properti `layer` yang diubah — warna, tipe garis, ketebalan garis, dan geometri tidak tersentuh.
- Objek sumber itu sendiri tidak dimodifikasi.
- Perintah selesai setelah sumber diklik.
- Mengklik kanvas kosong selama fase pengambilan sumber tidak melakukan apa-apa.
