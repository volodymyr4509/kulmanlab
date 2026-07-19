---
title: Arahan ViewportRectangle — Cipta Viewport dalam Susun Atur
description: Arahan ViewportRectangle mencipta viewport dalam susun atur kertas dengan memilih dua sudut bertentangan. Viewport menunjukkan entiti ruang model pada skala lalai susun atur.
keywords: [viewport rectangle, cipta viewport, viewport susun atur, viewport ruang kertas, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Arahan `ViewportRectangle` mencipta viewport baharu dalam susun atur kertas aktif dengan memilih dua sudut bertentangan. Hanya tersedia dalam ruang susun atur.

## Mencipta viewport

1. Tukar ke susun atur kertas menggunakan tab di bahagian bawah skrin.
2. Taip `ViewportRectangle` dalam terminal atau klik butang bar alat **Viewport Rectangle**.
3. **Klik sudut pertama**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik sudut bertentangan** — viewport diletakkan serta-merta. Kemasukan koordinat juga berfungsi di sini.

Viewport baharu menunjukkan model penuh pada skala lalai susun atur. Gunakan roda tatal di dalam viewport untuk zum, atau seret tengah untuk menggerakkan pandangan model.

## Kemasukan koordinat

Pada mana-mana langkah sudut anda boleh menaip koordinat tepat:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan titik.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Enter` | Sahkan koordinat yang ditaip |
| `Escape` | Batal |

## Mengedit viewport

Selepas meletakkan viewport, klik padanya untuk memilih:

- **Seret tepi atau sudut** untuk mengubah saiz.
- **Seret grip pusat** untuk menggerakkannya.
- Gunakan **pemilih skala** dalam bar kawalan untuk menetapkan skala tepat (cth. 1:50). Untuk memasukkan skala yang tidak ada dalam senarai, taipnya terus dalam medan input di bahagian bawah dropdown — menerima format nisbah (`1:200`, `5:1`) atau perpuluhan biasa (`0.005`), kemudian tekan **Enter**.
- Klik kanan viewport dan gunakan **Lock** untuk mencegah perubahan tidak sengaja.

## Nota

- ViewportRectangle hanya tersedia apabila tab susun atur kertas aktif. Menjalankannya dalam ruang model menunjukkan mesej ralat dan keluar.
- Untuk menyalin viewport sedia ada, gunakan [ViewportCopy](../viewport-copy/).
