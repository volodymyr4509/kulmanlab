---
title: LayerIsolate — Membekukan Semua Layer Kecuali yang Dipilih di KulmanLab CAD
description: Perintah LayerIsolate membekukan setiap layer kecuali yang digunakan oleh objek yang dipilih, memungkinkan Anda fokus pada geometri tertentu tanpa menghapus apa pun.
keywords: [layer isolate, membekukan layer CAD, isolasi layer kulmanlab, manajemen layer CAD]
group: layer
order: 3
---

# LayerIsolate

Perintah `LayerIsolate` membekukan setiap layer **kecuali** yang dimiliki oleh objek yang dipilih. Gunakan untuk fokus dengan cepat pada geometri tertentu tanpa menyembunyikan atau menghapus apa pun secara permanen — cairkan dengan [LayerUnfreezeAll](../layer-unfreeze-all/) setelah selesai.

## Dua cara memulai

**Pra-pilih, lalu isolasi** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `LayerIsolate` di terminal atau klik tombol toolbar **Layer Isolate**.
3. Layer dari entitas yang dipilih tetap terlihat; semua layer lainnya langsung dibekukan.

**Aktifkan, lalu pilih**:

1. Ketik `LayerIsolate` atau klik tombol toolbar.
2. **Pilih objek** — klik entitas individual atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi — isolasi diterapkan.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi dan terapkan isolasi |
| `Escape` | Batal dan hapus seleksi |

## Detail perilaku

- Semua layer yang **tidak** terwakili dalam seleksi diatur ke beku.
- Layer yang **terwakili** tetap tidak beku, bahkan jika mereka beku sebelumnya.
- Seleksi dihapus setelah isolasi diterapkan.
- Perintah selesai secara otomatis setelah diterapkan.

## Membatalkan isolasi

Jalankan [LayerUnfreezeAll](../layer-unfreeze-all/) untuk memulihkan semua layer ke kondisi terlihat dalam satu langkah.
