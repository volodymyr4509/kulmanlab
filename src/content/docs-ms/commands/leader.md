---
title: "Arahan Leader — Lukis Anotasi Pelbagai Pemimpin dengan Kepala Anak Panah dan Teks dalam KulmanLab CAD"
description: "Arahan Leader melukis anotasi pelbagai pemimpin empat fasa: hujung kepala anak panah, siku dogleg, kedudukan teks, dan label bertaip. Arah teks menyesuaikan secara automatik berdasarkan kedudukan dogleg. Import sahaja dalam DXF — pemimpin tidak ditulis semasa menyimpan."
keywords: [arahan pemimpin CAD, anotasi pelbagai pemimpin, pemimpin CAD, anotasi label anak panah, dogleg pemimpin, arah teks CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Arahan `leader` melukis anotasi pelbagai pemimpin dalam empat langkah: kepala anak panah yang menyentuh ciri, garis pemimpin yang membengkok pada dogleg, sauh teks, dan label bertaip. Daripada semua arahan anotasi, Leader adalah satu-satunya yang termasuk fasa input teks interaktif dengan pratonton kursor berkelip.

## Anatomi pelbagai pemimpin

```
  ◄── hujung kepala anak panah  (langkah 2 — menyentuh ciri)
      \
       \  garis pemimpin
        \
         ●──── dogleg (langkah 3) ──── sauh teks (langkah 4)
                                       Teks label  (langkah 5)
```

- **Hujung kepala anak panah** — hujung runcing yang diletakkan pada ciri yang dianotasi.
- **Dogleg** — siku di mana garis pemimpin membengkok ke arah teks.
- **Sauh teks** — di mana label diletakkan. Teks selaras kiri atau kanan secara automatik.

## Melukis pemimpin

1. Taip `leader` dalam terminal atau klik butang bar alat **Leader**.
2. **Klik hujung kepala anak panah**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik dogleg** — bengkok dalam pemimpin. Sudut dikunci ke gandaan 45°; taip panjang dan tekan **Enter** untuk peletakan tepat. Atau taip `X,Y` untuk memasukkan koordinat mutlak.
4. **Klik kedudukan teks** — di mana label berlabuh. Pilihan yang sama terpakai: klik, kunci sudut + panjang, atau `X,Y`.
5. **Taip teks label** — pratonton kanvas dikemas kini secara langsung dengan kursor berkelip. Tekan **Enter** untuk meletakkan.

## Kemasukan koordinat (semua fasa titik)

Pada mana-mana langkah pemilihan titik (hujung, dogleg, kedudukan teks) anda boleh menaip koordinat tepat dan bukannya mengklik:

1. Taip nilai X (digit, `.`, atau `-`).
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]` mengesahkan X dikunci.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan titik.

## Penguncian sudut (langkah 3 dan 4)

Selepas setiap titik yang diletakkan, arahan snap ke paksi 45° apabila kursor cukup jauh. Semasa dikunci:
- Pratonton snap ke paksi.
- Taip panjang dan tekan **Enter** untuk meletakkan titik seterusnya pada jarak tepat itu.

Penguncian sudut dan kemasukan koordinat adalah saling eksklusif — setelah anda menaip digit tanpa `,` terdahulu, arahan mentafsirkannya sebagai jarak (kunci sudut mesti aktif). Untuk memasukkan koordinat mutlak sebaliknya, mulakan dengan nombor X diikuti koma.

## Pengeditan label teks

Semasa menaip label dalam langkah 5, anda boleh menavigasi dan mengedit teks sebelum meletakkan:

| Kekunci | Tindakan |
|---------|---------|
| Mana-mana aksara boleh cetak | Masukkan pada kedudukan kursor |
| `←` / `→` | Gerakkan kursor ke kiri atau kanan |
| `Backspace` | Padam aksara di sebelah kiri kursor |
| `Delete` | Padam aksara di sebelah kanan kursor |
| `Enter` | Letakkan pemimpin |

## Arah teks automatik

Penjajaran teks menyesuaikan kepada kedudukan kursor relatif kepada dogleg:

| Kedudukan kursor | Arah teks |
|-----------------|-----------|
| Ke **kanan** dogleg | Kiri ke kanan dari sauh teks |
| Ke **kiri** dogleg | Kanan ke kiri (berlabuh di sebelah kanan) |

Tiada pelarasan manual diperlukan — gerakkan kursor ke sisi di mana anda mahu label dan ia selaras dengan betul.

## Rujukan papan kekunci

**Fasa titik (hujung, dogleg, kedudukan teks)**

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula menaip koordinat X (kemudian `,` untuk mengunci X dan masukkan Y) |
| `,` | Sahkan X dan beralih ke kemasukan Y |
| `0`–`9`, `.`, `-` | Bina jarak apabila sudut dikunci |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau jarak yang ditaip |

**Fasa input teks**

| Kekunci | Tindakan |
|---------|---------|
| Aksara boleh cetak | Masukkan pada kursor |
| `←` / `→` | Gerakkan kursor |
| `Backspace` | Padam kiri |
| `Delete` | Padam kanan |
| `Enter` | Letakkan pemimpin |

| Kekunci | Tindakan |
|---------|---------|
| `Escape` | Batal dan tetapkan semula ke langkah 2 |

## Mengedit pemimpin sedia ada

**Klik dua kali** pelbagai pemimpin yang diletakkan untuk membuka semula editor teks dalam mod **kaya**. Dalam mod kaya anda boleh menggunakan tebal, italik, dan pengatasan fon atau ketinggian setiap aksara, serta memasukkan pemecahan baris dengan `Enter`. Tekan **Escape** untuk komit dan tutup.

Lihat [Text Editor — mod kaya](../../interface/text-editor/#rich-mode) untuk rujukan penuh.

## Menambah dan membuang lengan

- Untuk menambah lengan kepala anak panah tambahan pada pemimpin sedia ada: [Leader+](../leader-add/)
- Untuk membuang lengan dari pemimpin yang mempunyai dua atau lebih: [Leader−](../leader-remove/)

## DXF — import sahaja

**Pemimpin adalah import sahaja.** Entiti `MLEADER` dari fail DXF dibaca dan dipaparkan dengan betul, tetapi pemimpin yang dilukis dalam editor **tidak ditulis** semasa menyimpan fail DXF. Gunakan pemimpin untuk anotasi visual; elakkan bergantung padanya untuk aliran kerja pusingan penuh.
