---
title: Arahan ViewportCopy — Duplikasi Viewport dalam KulmanLab CAD
description: Arahan ViewportCopy menduplikasi viewport yang dipilih ke kedudukan baru dalam susun atur yang sama, mengekalkan tetapan skala dan pandangan model. Menyokong kemasukan koordinat tepat, penguncian sudut, dan input jarak bertaip.
keywords: [salin viewport, duplikasi viewport, salin viewport susun atur, kunci sudut viewport, koordinat tepat viewport, kulmanlab]
---

# ViewportCopy

Arahan `ViewportCopy` menyalin viewport ke kedudukan baru, mengekalkan skala dan pusat model. Hanya tersedia dalam ruang susun atur.

## Menyalin viewport

1. Tukar ke tab susun atur kertas.
2. Pilih viewport dahulu secara pilihan.
3. Taip `ViewportCopy` dalam terminal atau klik butang bar alat **Viewport Copy**.
4. Jika tiada viewport dipra-pilih, **klik viewport** untuk disalin.
5. **Klik titik asas** — rujukan untuk anjakan. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
6. **Klik destinasi** — viewport diletakkan pada offset asas→destinasi. Atau gunakan kemasukan koordinat / kunci sudut.

Selepas meletakkan, arahan kekal aktif — klik destinasi lain untuk meletakkan salinan lain viewport yang sama. Tekan **Enter**, **Space**, atau **Escape** untuk selesai.

## Kemasukan koordinat

Pada langkah titik asas dan destinasi anda boleh menaip koordinat tepat dan bukannya mengklik:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Penguncian sudut dan jarak tepat

Selepas titik asas ditetapkan, arahan snap ke paksi 45° (0°, 45°, 90°, 135°, …) apabila kursor selaras. Semasa dikunci:

- Pratonton snap ke paksi.
- Taip jarak dan tekan **Enter** untuk meletakkan salinan tepat pada offset tersebut sepanjang arah yang dikunci.

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai jarak |
| `-` | Jarak negatif (membalikkan arah; aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan salinan pada jarak yang ditaip |

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X, atau jarak apabila sudut dikunci |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Enter` | Sahkan koordinat atau jarak yang ditaip |
| `Enter` / `Space` | Selesai (apabila tiada input sedang berjalan) |
| `Escape` | Batal dan tetapkan semula |

## Nota

- ViewportCopy hanya tersedia apabila tab susun atur kertas aktif.
- Viewport yang disalin mewarisi skala, pusat model, keadaan terkunci, dan dimensi yang sama seperti asal.
- Untuk mencipta viewport baharu dari awal, gunakan [ViewportRectangle](../viewport-rectangle/).
