---
sidebar_position: 11
title: "Perintah Leader− — Menghapus Lengan Kepala Panah dari Multileader di KulmanLab CAD"
description: "Perintah Leader− menghapus satu lengan kepala panah dari multileader yang memiliki dua atau lebih. Arahkan kursor dekat lengan yang akan dihapus — lengan terdekat disorot. Dogleg, teks, dan lengan yang tersisa dipertahankan."
keywords: [CAD hapus lengan leader, perintah leader-, hapus panah dari leader, hapus lengan multileader, kulmanlab]
---

# Leader−

Perintah `leader-` menghapus satu lengan kepala panah dari multileader yang ada. Label teks, dogleg, dan semua lengan yang tersisa dipertahankan — hanya lengan yang dipilih yang dihapus. Multileader dengan hanya satu lengan tidak dapat dihapus lengannya.

## Menghapus lengan

1. Ketik `leader-` di terminal.
2. **Klik multileader** yang memiliki dua atau lebih lengan. Jika leader yang diklik hanya memiliki satu lengan, terminal menampilkan error dan menunggu seleksi yang valid.
3. **Gerakkan kursor dekat lengan** yang ingin dihapus — lengan terdekat disorot dengan penanda.
4. **Klik** untuk menghapus lengan tersebut.

Lengan dihapus dan perintah tetap aktif — Anda dapat segera mengklik leader lain (atau yang sama) untuk menghapus lebih banyak lengan. Tekan **Enter**, **Space**, atau **Escape** untuk selesai.

```
  Sebelum:                   Sesudah:
  ◄── lengan 1                 ◄── lengan 1
       \                             \
        ●──── dogleg ──── teks        ●──── dogleg ──── teks
       /
  lengan 2 ──►  ← lengan ini dihapus
```

## Cara lengan terdekat ditentukan

Perintah mengukur jarak tegak lurus dari kursor ke segmen garis setiap lengan (termasuk segmen dari titik lengan terakhir ke dogleg). Lengan dengan jarak terkecil disorot dan akan dihapus saat diklik.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Selesai menghapus lengan |
| `Escape` | Batal dan reset |

## Catatan

- Leader dengan **hanya satu lengan** dilindungi — Anda harus menambahkan lengan terlebih dahulu sebelum menghapus satu.
- Posisi dogleg dan konten teks selalu dipertahankan terlepas dari lengan mana yang dihapus.

## Perintah terkait

| Perintah | Fungsi |
|---------|-------------|
| [Leader](./leader) | Membuat multileader baru dari awal |
| [Leader+](./leader-add) | Menambahkan lengan ke multileader yang ada |
