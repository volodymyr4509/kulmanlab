---
title: Leader+ — Tambah Lengan Anak Panah pada Multileader Sedia Ada
description: Arahan Leader+ menambah lengan kepala anak panah baharu pada pelbagai pemimpin sedia ada. Lengan baharu berkongsi dogleg, teks, dan semua gaya pemimpin yang dipilih. Dua klik — pilih pemimpin, letakkan hujung baharu.
keywords: [CAD tambah lengan pemimpin, arahan leader+, tambah anak panah ke pemimpin, lengan pelbagai pemimpin, kulmanlab]
group: markup
order: 2
---

# Leader+

Arahan `leader+` menambah lengan kepala anak panah baharu pada pelbagai pemimpin sedia ada. Lengan baharu menunjuk dari dogleg pemimpin sedia ada ke hujung kepala anak panah baharu yang anda klik. Semua gaya — kedudukan dogleg, teks, jenis kepala anak panah, dan saiz — diwarisi dari pemimpin yang dipilih.

## Menambah lengan

1. Taip `leader+` dalam terminal.
2. **Klik pelbagai pemimpin sedia ada** untuk memilihnya.
3. **Klik hujung kepala anak panah baharu**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat. Garis pratonton menunjukkan dari kursor ke dogleg pemimpin.

Lengan diletakkan dan arahan kekal aktif — anda boleh terus mengklik pemimpin lain untuk menambah lebih banyak lengan. Tekan **Enter**, **Space**, atau **Escape** untuk selesai.

```
  Sebelum:                        Selepas:
  ◄── lengan 1                    ◄── lengan 1
       \                                \
        ●──── dogleg ──── teks           ●──── dogleg ──── teks
                                        /
                                   lengan 2 ──►  (hujung baharu yang diklik)
```

## Kemasukan koordinat untuk hujung

Daripada mengklik, anda boleh menaip kedudukan tepat:

1. Taip nilai X.
2. Tekan `,` — terminal mengesahkan X dikunci.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula menaip koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Enter` | Sahkan koordinat yang ditaip dan letakkan lengan |
| `Enter` / `Space` | Selesai (apabila tiada input sedang berjalan) |
| `Escape` | Batal dan tetapkan semula |

## Nota

- Hanya entiti **Multileader** yang boleh dipilih — mengklik mana-mana jenis entiti lain tidak membuat apa-apa.
- Lengan baharu bermula dari dogleg sedia ada; anda hanya memilih ke mana hujung kepala anak panah pergi.
- Tiada had bilangan lengan yang boleh dimiliki pelbagai pemimpin.

## Arahan berkaitan

| Arahan | Fungsinya |
|--------|-----------|
| [Leader](../leader/) | Cipta pelbagai pemimpin baharu dari awal |
| [Leader−](../leader-remove/) | Buang lengan dari pelbagai pemimpin yang mempunyai dua atau lebih |
