---
sidebar_position: 2
title: Arahan Distance — Ukur Jarak Garis Lurus antara Dua Titik dalam KulmanLab CAD
description: Arahan Distance mengukur jarak Euclidean antara dua titik yang diklik dan memaparkan hasilnya kepada 4 titik perpuluhan. Klik lagi selepas keputusan untuk merantai pengukuran baharu dari titik terakhir.
keywords: [CAD ukur jarak, arahan jarak, pengukuran titik ke titik, jarak garis lurus, kulmanlab CAD ukuran]
---

# Distance

Arahan `distance` mengukur jarak garis lurus (Euclidean) antara dua titik yang diklik dan mencetak hasilnya dalam terminal kepada 4 titik perpuluhan. Ia adalah salah satu dari dua arahan pengukuran — [Angle](./angle) mengukur pembukaan sudut pada bucu sebaliknya.

## Anatomi pengukuran jarak

```
  ● titik pertama
   \
    \  garis pratonton (langsung)
     \
      ● titik kedua    →  terminal: "Distance: 12.3456"
```

- **Titik pertama** — asal pengukuran.
- **Titik kedua** — titik akhir; meletakkannya mencetak hasilnya serta-merta.
- **Hasil** — dipaparkan dalam terminal, tidak diletakkan pada kanvas.

## Mengukur jarak

1. Taip `distance` dalam terminal atau klik butang bar alat **Distance**.
2. **Klik titik pertama**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik kedua** — jarak yang diukur muncul dalam terminal. Kemasukan koordinat juga berfungsi di sini.
4. **Klik lagi** (pilihan) untuk memulakan pengukuran baharu. Arahan kekal aktif.

Tekan `Escape` pada bila-bila masa untuk menetapkan semula ke langkah 2.

## Merantai pengukuran

Selepas keputusan ditunjukkan, mengklik serta-merta memulakan pengukuran seterusnya — titik yang diklik menjadi titik pertama baharu. Ini membolehkan anda mengukur urutan jarak tanpa mengaktifkan semula arahan.

## Distance berbanding Angle

| | Distance | Angle |
|---|---------|-------|
| Apa yang diukur | Panjang garis lurus | Sudut dalam di bucu |
| Bilangan klik | 2 | 3 |
| Format hasil | `12.3456` (unit) | `45.0000°` |
| Pratonton kanvas | Garis dari titik pertama ke kursor | Dua garis dari bucu ke kursor |
| Terbaik untuk | Panjang jurang atau segmen | Sudut pembukaan antara dua ciri |

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mana-mana titik:

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
- Keputusan dinyatakan dalam unit yang sama seperti koordinat lukisan (tiada penukaran unit).
- Ketepatan sentiasa 4 titik perpuluhan.
