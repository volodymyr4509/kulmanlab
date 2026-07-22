---
title: Arahan Text — Letak Label MTEXT dalam KulmanLab CAD
description: Arahan Text meletakkan label MTEXT berbilang baris dengan pemformatan kaya. Klik kedudukan, taip dalam editor popup, dan tekan Escape untuk komit. Klik dua kali mana-mana label sedia ada untuk membuka semula editor.
keywords: [arahan teks CAD, MTEXT, letak label teks CAD, anotasi teks CAD, tebal italik CAD, teks berbilang baris CAD, kulmanlab]
group: markup
order: 0
---

# Text

Arahan `text` meletakkan label teks berbilang baris. Selepas anda mengklik kedudukan pada kanvas, editor popup terbuka dalam mod **kaya** — anda boleh menaip kandungan, menggunakan tebal/italik/strikethrough setiap aksara, menukar fon dan ketinggian, dan memasukkan pemecahan baris. Tekan **Escape** untuk komit dan tutup editor.

Lihat halaman [Text Editor](../../interface/text-editor/) untuk rujukan editor penuh, termasuk perbandingan mod **kaya** dan **mudah**.

## Meletakkan label teks

1. Taip `text` dalam terminal atau klik butang bar alat **Text**.
2. **Klik kedudukan sauh** pada kanvas. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Popup editor teks** terbuka di atas label baharu. Taip kandungan anda.
4. Tekan **Escape** untuk komit label dan tutup editor.

Ketinggian lalai adalah **12 unit lukisan**.

## Mengedit label sedia ada

**Klik dua kali** mana-mana label teks pada kanvas untuk membuka semula editor untuk label tersebut.

## Kemasukan koordinat untuk sauh

Daripada mengklik, taip kedudukan tepat:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan sauh dan membuka editor.

## Rujukan papan kekunci

**Fasa sauh**

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip |

**Fasa editor teks** (lihat [Text Editor](../../interface/text-editor/) untuk rujukan penuh)

| Kekunci | Tindakan |
|---------|---------|
| Mana-mana aksara boleh cetak | Masukkan pada kursor |
| `Backspace` / `Delete` | Padam aksara bersebelahan atau pemilihan |
| `Enter` | Masukkan pemecahan baris |
| `←` / `→` | Gerakkan tanda sisip |
| `Home` / `End` | Lompat ke mula / akhir baris keras |
| `Escape` | Komit dan tutup editor |

## Pengeditan grip — mengubah kedudukan

Label teks yang dipilih mendedahkan satu grip pada titik sauh:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Sauh** | Bawah-kiri teks | Seret untuk mengubah kedudukan label |

## Memilih teks

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh di dalam kotak sempadan berputar teks |
| **Seret kanan** (ketat) | Keempat-empat sudut kotak sempadan mesti berada di dalam kawasan pemilihan |
| **Seret kiri** (silang) | Mana-mana pertindihan antara kotak sempadan teks dan kawasan pemilihan memilihnya |

## Arahan edit yang disokong

| Arahan | Apa yang berlaku pada teks |
|--------|-----------------------------|
| [Move](../move/) | Menggerakkan titik sauh |
| [Copy](../copy/) | Mencipta label yang sama di kedudukan baru |
| [Rotate](../rotate/) | Memutar kedudukan sauh dan menambah sudut ke Darjah Putaran |
| [Mirror](../mirror/) | Mencerminkan titik sauh merentasi paksi cermin (rentetan teks tidak dibalikkan) |
| [Scale](../scale/) | Mengskala kedudukan sauh dan mendarab ketinggian dengan faktor skala |
| [Delete](../delete/) | Membuang label |

Teks tidak menyokong **Offset**, **Trim**, atau **Extend**.

## Sifat

Apabila label teks dipilih, panel sifat menunjukkan:

**Umum**

| Sifat | Lalai | Maksud |
|-------|-------|--------|
| Color | 256 (ByLayer) | Indeks warna ACI |
| Layer | `0` | Tugasan lapisan |

**Geometri**

| Sifat | Maksud |
|-------|--------|
| Position X / Position Y | Koordinat titik sauh |
| Height | Ketinggian teks asas dalam unit lukisan (lalai: **12**) |
| Rotation Degree | Putaran lawan arah jam dalam darjah |

**Sifat**

| Sifat | Maksud |
|-------|--------|
| Content | Rentetan teks (kod inline MTEXT dipelihara) |
| Attachment Point | Kod penjajaran (1 = atas-kiri … 9 = bawah-kanan) |

Teks tidak mempunyai sifat Linetype, Linetype Scale, atau Thickness.

## DXF — entiti MTEXT

Label teks disimpan sebagai entiti **MTEXT** dalam fail DXF. Tebal dan italik dikodkan menggunakan `\L`, `\K`, `\O`, dan suis fon inline (`\f`). Ketinggian setiap aksara dikodkan sebagai `\H`. Semua pemformatan bertahan dalam pusingan penuh DXF dan boleh dibaca oleh LibreCAD, FreeCAD, dan aplikasi serasi DXF lain.
