---
sidebar_position: 11
title: "Arahan Leader− — Buang Lengan Kepala Anak Panah daripada Pelbagai Pemimpin dalam KulmanLab CAD"
description: "Arahan Leader− membuang satu lengan kepala anak panah dari pelbagai pemimpin yang mempunyai dua atau lebih. Tuding berhampiran lengan yang ingin dibuang — lengan yang paling hampir diserlahkan. Dogleg, teks, dan lengan yang tinggal dipelihara."
keywords: [CAD buang lengan pemimpin, arahan leader-, buang anak panah dari pemimpin, padam lengan pelbagai pemimpin, kulmanlab]
---

# Leader−

Arahan `leader-` membuang satu lengan kepala anak panah daripada pelbagai pemimpin sedia ada. Label teks, dogleg, dan semua lengan yang tinggal dipelihara — hanya lengan yang dipilih dipadam. Pelbagai pemimpin dengan hanya satu lengan tidak boleh dibuang lengannya.

## Membuang lengan

1. Taip `leader-` dalam terminal.
2. **Klik pelbagai pemimpin** yang mempunyai dua atau lebih lengan. Jika pemimpin yang diklik hanya mempunyai satu lengan, terminal menunjukkan ralat dan menunggu pemilihan yang sah.
3. **Gerakkan kursor berhampiran lengan** yang ingin dibuang — lengan yang paling hampir diserlahkan dengan penanda.
4. **Klik** untuk membuang lengan tersebut.

Lengan dibuang dan arahan kekal aktif — anda boleh terus mengklik pemimpin lain (atau yang sama) untuk membuang lebih banyak lengan. Tekan **Enter**, **Space**, atau **Escape** untuk selesai.

```
  Sebelum:                   Selepas:
  ◄── lengan 1               ◄── lengan 1
       \                           \
        ●──── dogleg ──── teks      ●──── dogleg ──── teks
       /
  lengan 2 ──►  ← lengan ini dibuang
```

## Bagaimana lengan yang paling hampir ditentukan

Arahan mengukur jarak tegak lurus dari kursor ke setiap segmen garis lengan (termasuk segmen dari titik lengan terakhir ke dogleg). Lengan dengan jarak terkecil diserlahkan dan akan dibuang semasa diklik.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Selesai membuang lengan |
| `Escape` | Batal dan tetapkan semula |

## Nota

- Pemimpin dengan **hanya satu lengan** dilindungi — anda mesti menambah lengan dahulu sebelum membuang satu.
- Kedudukan dogleg dan kandungan teks sentiasa dipelihara tanpa mengira lengan yang dibuang.

## Arahan berkaitan

| Arahan | Fungsinya |
|--------|-----------|
| [Leader](./leader) | Cipta pelbagai pemimpin baharu dari awal |
| [Leader+](./leader-add) | Tambah lengan pada pelbagai pemimpin sedia ada |
