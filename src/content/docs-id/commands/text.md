---
title: Perintah Text — Menempatkan Label MTEXT di KulmanLab CAD
description: Perintah Text menempatkan label MTEXT multi-baris yang kaya format. Klik posisi, ketik di editor popup, dan tekan Escape untuk mengonfirmasi. Klik dua kali label yang ada untuk membuka kembali editor.
keywords: [perintah teks CAD, MTEXT, menempatkan label teks CAD, anotasi teks CAD, tebal miring CAD, teks multi-baris CAD, kulmanlab]
group: markup
order: 0
---

# Text

Perintah `Teks` menempatkan label teks multi-baris. Setelah Anda mengklik posisi di kanvas, editor popup terbuka dalam mode **kaya** — Anda dapat mengetik konten, menerapkan tebal/miring/garis bawah/coret per karakter, mengubah font dan tinggi, dan menyisipkan jeda baris. Tekan **Escape** untuk mengonfirmasi dan menutup editor.

Lihat halaman [Text Editor](../../interface/text-editor/) untuk referensi editor lengkap, termasuk perbandingan mode **kaya** dan **sederhana**.

## Menempatkan label teks

1. Ketik `Teks` di terminal atau klik tombol toolbar **Text**.
2. **Klik posisi jangkar** di kanvas. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Editor popup teks** terbuka di atas label baru. Ketik konten Anda.
4. Tekan **Escape** untuk mengonfirmasi label dan menutup editor.

Teks baru menyalin font, tinggi, tebal, miring, jarak baris, perataan horizontal, dan bingkai dari [GayaTeks](../text-style/) saat ini. Gaya bawaan `Standard` memakai tinggi **1 unit gambar** dan perataan kiri.

## Mengedit label yang ada

**Klik dua kali** label teks mana pun di kanvas untuk membuka kembali editor untuk label tersebut.

## Entri koordinat untuk jangkar

Alih-alih mengklik, ketik posisi tepat:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan jangkar dan membuka editor.

## Referensi keyboard

**Fase jangkar**

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik |

**Fase editor teks** (lihat [Text Editor](../../interface/text-editor/) untuk referensi lengkap)

| Tombol | Aksi |
|-----|--------|
| Karakter yang dapat dicetak mana saja | Sisipkan pada kursor |
| `Backspace` / `Delete` | Hapus karakter atau seleksi yang berdekatan |
| `Enter` | Sisipkan jeda baris |
| `←` / `→` | Pindahkan caret |
| `Home` / `End` | Lompat ke awal / akhir baris keras |
| `Escape` | Konfirmasi dan tutup editor |

## Pengeditan grip — memposisikan ulang

Label teks yang dipilih memperlihatkan satu grip di titik jangkar:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Anchor** | Kiri bawah teks | Seret untuk memposisikan ulang label |

## Memilih teks

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat dalam kotak pembatas yang diputar dari teks |
| **Seret ke kanan** (ketat) | Keempat sudut kotak pembatas harus berada di dalam area seleksi |
| **Seret ke kiri** (persilangan) | Tumpang tindih mana pun antara kotak pembatas teks dan area seleksi memilihnya |

## Perintah edit yang didukung

| Perintah | Apa yang terjadi pada teks |
|---------|--------------------------|
| [Move](../move/) | Memindahkan titik jangkar |
| [Copy](../copy/) | Membuat label identik di posisi baru |
| [Rotate](../rotate/) | Memutar posisi jangkar dan menambahkan sudut ke Rotation Degree |
| [Mirror](../mirror/) | Memantulkan titik jangkar melintasi sumbu cermin (string teks tidak dibalik) |
| [Scale](../scale/) | Menskalakan posisi jangkar dan mengalikan tinggi dengan faktor skala |
| [Delete](../delete/) | Menghapus label |

Teks tidak mendukung **Offset**, **Trim**, atau **Extend**.

## Properti

Ketika label teks dipilih, panel properti menampilkan:

**Umum**

| Properti | Default | Arti |
|----------|---------|---------|
| Color | 256 (ByLayer) | Indeks warna ACI |
| Layer | `0` | Penetapan layer |

**Geometri**

| Properti | Arti |
|----------|---------|
| Position X / Position Y | Koordinat titik jangkar |
| Height | Tinggi dasar dalam unit gambar, disalin dari GayaTeks saat ini ketika dibuat |
| Rotation Degree | Rotasi berlawanan arah jarum jam dalam derajat |

**Properti**

| Properti | Arti |
|----------|---------|
| Content | String teks (kode inline MTEXT dipertahankan) |
| Attachment Point | Kode penyelarasan (1 = kiri atas … 9 = kanan bawah) |

Teks tidak memiliki properti Linetype, Linetype Scale, atau Thickness.

Bagian **Properties** juga menampilkan perataan horizontal, lebar referensi, jarak baris, dan bingkai.

## DXF — entitas MTEXT

Label disimpan sebagai entitas **MTEXT**. Tebal dan miring memakai `\f`, garis bawah `\L`/`\l`, coret `\K`/`\k`, dan tinggi per karakter memakai `\H`. Lebar referensi, jarak baris, perataan paragraf, rotasi, dan titik lampiran juga dipertahankan. Bingkai diekspor dengan flag bingkai MTEXT dan skala batas yang kompatibel dengan AutoCAD. Lihat [GayaTeks](../text-style/) dan [Pengelola Font](../font-manager/).
