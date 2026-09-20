---
title: LeaderAdd — Menambahkan Lengan Kepala Panah ke Multileader yang Ada
description: Perintah LeaderAdd menambahkan lengan kepala panah baru ke multileader yang ada. Lengan baru berbagi dogleg, teks, dan semua gaya dari leader yang dipilih. Dua klik — pilih leader, tempatkan ujung baru.
keywords: [CAD tambah lengan leader, perintah leaderadd, tambah panah ke leader, lengan multileader, kulmanlab]
group: markup
order: 2
---

# LeaderAdd

Perintah `PenunjukTambah` menambahkan lengan kepala panah baru ke multileader yang ada. Lengan baru menunjuk dari dogleg leader yang ada ke ujung kepala panah baru yang Anda klik. Semua gaya — posisi dogleg, teks, tipe kepala panah, dan ukuran — diwarisi dari leader yang dipilih.

## Menambahkan lengan

1. Ketik `PenunjukTambah` di terminal.
2. **Klik multileader yang ada** untuk memilihnya.
3. **Klik ujung kepala panah baru**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat. Garis pratinjau ditampilkan dari kursor ke dogleg leader.

Lengan ditempatkan dan perintah tetap aktif — Anda dapat segera mengklik leader lain untuk menambahkan lebih banyak lengan. Tekan **Enter**, **Space**, atau **Escape** untuk selesai.

```
  Sebelum:                        Sesudah:
  ◄── lengan 1                      ◄── lengan 1
       \                               \
        ●──── dogleg ──── teks          ●──── dogleg ──── teks
                                       /
                                  lengan 2 ──►  (ujung baru yang diklik)
```

## Entri koordinat untuk ujung

Alih-alih mengklik, Anda dapat mengetik posisi tepat:

1. Ketik nilai X.
2. Tekan `,` — terminal mengonfirmasi X terkunci.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai mengetik koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Enter` | Konfirmasi koordinat yang diketik dan tempatkan lengan |
| `Enter` / `Space` | Selesai (saat tidak ada input yang sedang berlangsung) |
| `Escape` | Batal dan reset |

## Catatan

- Hanya entitas **Multileader** yang dapat dipilih — mengklik tipe entitas lain tidak melakukan apa-apa.
- Lengan baru berasal dari dogleg yang ada; Anda hanya memilih ke mana ujung kepala panah pergi.
- Tidak ada batas jumlah lengan yang dapat dimiliki multileader.

## Perintah terkait

| Perintah | Fungsi |
|---------|-------------|
| [Leader](../leader/) | Membuat multileader baru dari awal |
| [LeaderRemove](../leader-remove/) | Menghapus lengan dari multileader yang memiliki dua atau lebih |
