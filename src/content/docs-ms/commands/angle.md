---
sidebar_position: 1
title: Arahan Angle — Ukur Sudut Dalam di Bucu Menggunakan Tiga Titik dalam KulmanLab CAD
description: Arahan Angle mengukur sudut dalam (0°–180°) di bucu yang ditakrifkan oleh tiga titik yang diklik. Klik titik pertama, bucu, titik kedua. Hasilnya ditunjukkan dalam terminal kepada 4 titik perpuluhan.
keywords: [CAD ukuran sudut, sudut tiga titik, sudut dalam CAD, arahan ukur sudut, sudut bucu, kulmanlab]
---

# Angle

Arahan `angle` mengukur sudut dalam di bucu yang dibentuk oleh dua segmen garis melalui tiga titik yang diklik. Hasilnya — sentiasa antara 0° dan 180° — dipaparkan dalam terminal kepada 4 titik perpuluhan. Ia adalah salah satu dari dua arahan pengukuran — [Distance](../distance/) mengukur panjang garis lurus sebaliknya.

## Anatomi pengukuran sudut

```
  ● titik pertama (hujung sinaran pertama)
   \
    \  pratonton sinaran pertama
     \
      ● bucu (langkah 3)
     /
    /  pratonton sinaran kedua (ke kursor)
   /
  ● titik ketiga  →  terminal: "Angle: 45.0000°"
```

- **Titik pertama** — satu hujung sudut (langkah 2).
- **Bucu** — sudut di mana sudut diukur (langkah 3).
- **Titik ketiga** — hujung lain sudut (langkah 4).

## Mengukur sudut

1. Taip `angle` dalam terminal atau klik butang bar alat **Angle**.
2. **Klik titik pertama** — satu hujung lengan sudut. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik bucu** — sudut di mana dua lengan bertemu. Kemasukan koordinat juga berfungsi di sini.
4. **Klik titik ketiga** — hujung lengan kedua. Kemasukan koordinat juga berfungsi di sini. Meletakkan titik ini mencetak hasilnya.
5. **Klik lagi** (pilihan) untuk memulakan pengukuran baharu dari klik tersebut sebagai titik pertama baharu.

## Konvensyen sudut dalam

Arahan mengira sudut menggunakan hasil darab titik dua sinaran dari bucu:

- **Sentiasa dalam**: hasilnya adalah sudut yang lebih kecil, antara 0° dan 180°.
- Urutan anda mengklik titik akhir tidak menjejaskan hasilnya — hanya kedudukan bucu yang penting.
- Titik sejajar (ketiga-tiganya pada satu garis) mengembalikan 0° atau 180°.

## Merantai pengukuran

Selepas keputusan muncul, mengklik serta-merta memulakan pengukuran seterusnya — titik yang diklik menjadi titik pertama baharu. Arahan tidak pernah keluar secara automatik sehingga anda menekan `Escape`.

## Angle berbanding Distance

| | Angle | Distance |
|---|-------|---------|
| Apa yang diukur | Sudut dalam di bucu | Panjang garis lurus |
| Bilangan klik | 3 | 2 |
| Format hasil | `45.0000°` | `12.3456` (unit) |
| Pratonton kanvas | Dua garis dari bucu ke kedua-dua hujung | Garis dari titik pertama ke kursor |
| Terbaik untuk | Sudut pembukaan antara dua ciri | Panjang jurang atau segmen |

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mana-mana tiga titik:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip |
| `Escape` | Batal dan tetapkan semula ke langkah 2 |

## Nota

- Keputusan ditunjukkan dalam **terminal sahaja** — tiada yang ditambah pada lukisan.
- Ketepatan sentiasa 4 titik perpuluhan dalam darjah.
