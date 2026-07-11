---
title: LayerIsolate — Bekukan Semua Lapisan Kecuali yang Dipilih dalam KulmanLab CAD
description: Arahan LayerIsolate membekukan setiap lapisan kecuali yang dimiliki objek yang dipilih, membolehkan anda fokus pada geometri tertentu tanpa memadamkan apa-apa.
keywords: [asingkan lapisan, bekukan lapisan CAD, asingkan lapisan kulmanlab, pengurusan lapisan CAD]
group: layer
order: 3
---

# LayerIsolate

Arahan `LayerIsolate` membekukan setiap lapisan **kecuali** yang dimiliki objek yang dipilih. Gunakannya untuk fokus dengan cepat pada geometri tertentu tanpa menyembunyikan atau memadamkan apa-apa secara kekal — nyahbeku dengan [LayerUnfreezeAll](../layer-unfreeze-all/) apabila selesai.

## Dua cara untuk memulakan

**Pra-pilih, kemudian asingkan** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `LayerIsolate` dalam terminal atau klik butang bar alat **Layer Isolate**.
3. Lapisan entiti yang dipilih kekal kelihatan; semua yang lain dibekukan serta-merta.

**Aktifkan, kemudian pilih**:

1. Taip `LayerIsolate` atau klik butang bar alat.
2. **Pilih objek** — klik entiti individu atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan — pengasingan digunakan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan dan gunakan pengasingan |
| `Escape` | Batal dan kosongkan pemilihan |

## Butiran tingkah laku

- Semua lapisan yang **tidak** diwakili dalam pemilihan ditetapkan kepada dibekukan.
- Lapisan yang **diwakili** kekal tidak dibekukan, walaupun jika ia dibekukan sebelum ini.
- Pemilihan dikosongkan selepas pengasingan digunakan.
- Arahan selesai secara automatik selepas menggunakan.

## Membatalkan pengasingan

Jalankan [LayerUnfreezeAll](../layer-unfreeze-all/) untuk memulihkan semua lapisan kepada kelihatan dalam satu langkah.
