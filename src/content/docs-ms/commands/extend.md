---
sidebar_position: 10
title: Arahan Extend — Regangkan Titik Akhir Garis ke Sempadan Terdekat dalam KulmanLab CAD
description: Arahan Extend meregangkan titik akhir terdekat Line yang dituding ke persimpangan terdekat dengan entiti lain. Pratonton langsung menunjukkan garis yang dipanjangkan sebelum anda mengklik. Extend hanya berfungsi pada entiti Line dan mengabaikan Text, Spline, dan Multileader sebagai sempadan.
keywords: [arahan panjang CAD, panjangkan garis CAD, regangkan garis ke sempadan, titik akhir garis panjang, pratonton hover panjang, kulmanlab]
---

# Extend

Arahan `extend` meregangkan titik akhir terdekat [Line](../line/) ke persimpangan terdekat yang akan dibentuknya dengan entiti lain dalam lukisan. Tuding berhampiran titik akhir yang ingin dipanjangkan — pratonton menunjukkan garis yang dipanjangkan — kemudian klik untuk menggunakannya.

Extend hanya berfungsi pada **entiti Line**. Sempadan yang dilanjutkan garis boleh menjadi mana-mana jenis entiti lain kecuali Text, Mtext, Multileader, dan Spline.

## Memanjangkan garis

1. Taip `extend` dalam terminal atau klik butang bar alat **Extend**.
2. **Tuding berhampiran satu hujung garis** — pratonton menunjukkan garis yang dilanjutkan ke sempadan terdekat dalam arah tersebut.
3. **Klik** untuk menggunakan pemanjangan.

Arahan kekal aktif selepas setiap pemanjangan supaya anda boleh memanjangkan berbilang garis secara berurutan. Tekan **Escape** untuk keluar.

```
  Sebelum:                      Selepas:

  ──────           |           ──────────────|
  (garis pendek)   (sempadan)  (dilanjutkan ke sempadan)
```

## Bagaimana titik akhir dipilih

Arahan melihat titik akhir mana yang lebih hampir dengan kursor:

- Kursor **lebih hampir ke titik akhir** → hujung dilanjutkan ke hadapan sepanjang arah garis.
- Kursor **lebih hampir ke titik mula** → mula dilanjutkan ke belakang (dalam arah bertentangan).

Sinaran dihantar dari titik akhir yang dipilih sepanjang arah garis, dan **persimpangan terdekat** sepanjang sinaran itu dengan mana-mana entiti lain (tidak termasuk garis itu sendiri dan jenis yang diabaikan) menjadi titik akhir baru.

Jika tiada persimpangan ditemui dalam arah tersebut, tiada pratonton muncul dan mengklik tidak membuat apa-apa.

## Pengecualian sempadan

Jenis entiti berikut diabaikan sebagai sempadan — garis tidak dilanjutkan untuk bertemu dengannya:

- Text / Mtext
- Multileader
- Spline

Semua jenis lain (Line, Arc, Circle, Ellipse, Polyline, Dimension) berfungsi sebagai sempadan yang sah.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Escape` | Keluar dari mod extend |

## Entiti yang disokong

| Entiti | Boleh dipanjangkan? |
|--------|---------------------|
| Line | Ya |
| Arc, Circle, Ellipse | Tidak |
| Polyline / Rectangle | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Extend berbanding Trim

| | Extend | Trim |
|---|--------|------|
| Fungsinya | Meregangkan titik akhir garis ke sempadan | Membuang segmen garis |
| Pencetus | Tuding berhampiran titik akhir untuk diregangkan | Tuding ke segmen yang ingin dipotong |
| Hasil | Titik akhir garis bergerak ke luar | Garis berpecah atau memendek |
| Kedua-duanya | Garis sahaja | Garis sahaja |
