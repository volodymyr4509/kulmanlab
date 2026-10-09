---
title: Perintah ClipboardPaste — Menempel entitas dari papan klip sistem
description: Perintah ClipboardPaste membaca entitas yang sebelumnya ditulis ClipboardCopy dari papan klip sistem dan menempatkannya pada titik sisip yang dipilih, sambil menambahkan layer dan tipe garis yang belum ada di gambar tujuan.
keywords: [tempel papan klip CAD, menempel entitas antar gambar, menempel objek CAD, Ctrl+V CAD, tempel antar tab, penggabungan layer saat menempel, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Perintah `TempelDariPapanKlip` membaca entitas yang ditulis [ClipboardCopy](../clipboard-copy/) ke **papan klip sistem** dan menempatkannya di gambar yang sedang aktif pada titik yang Anda pilih. Karena papan klipnya adalah papan klip sistem yang sebenarnya, sumbernya bisa berupa gambar lain, tab peramban lain, atau sesi dari beberapa jam sebelumnya.

## Cara menempel

1. Tekan `Ctrl+V` (`Cmd+V` di macOS), atau ketik `TempelDariPapanKlip` di terminal.
2. Prompt menampilkan **reading clipboard…** selagi peramban menyerahkan teks papan klip.
3. Setelah dimuat, prompt berubah menjadi **pick insertion point** dan pratinjau geometri mengikuti kursor Anda.
4. **Klik** untuk menempatkan entitas. Entitas ditambahkan ke gambar dan tetap terpilih.

Pratinjau ditambatkan oleh **titik acuan** salinan — sudut kiri bawah batas gabungan dari pilihan aslinya. Sudut itu berada di bawah kursor Anda, sehingga susunan relatif antar entitas yang disalin terjaga persis.

## Apa yang terjadi saat menempel

| Langkah | Perilaku |
|---------|----------|
| **Identitas baru** | Setiap entitas yang ditempel mendapat id baru, jadi menempel dua kali menghasilkan dua kumpulan yang saling bebas |
| **Pergeseran** | Entitas digeser sebesar kursor − titik acuan |
| **Penggabungan layer** | Setiap layer yang dirujuk tetapi belum ada di gambar tujuan ditambahkan berdasarkan nama |
| **Penggabungan tipe garis** | Setiap tipe garis yang dirujuk tetapi belum ada di gambar tujuan ditambahkan berdasarkan nama |
| **Pilihan** | Pilihan sebelumnya dibersihkan dan entitas yang ditempel menjadi pilihan |

### Penggabungan layer dan tipe garis

Entri tabel yang belum ada ditambahkan; **yang sudah ada dibiarkan apa adanya**. Jika papan klip membawa layer bernama `WALLS` berwarna merah sementara gambar tujuan sudah punya layer `WALLS` berwarna biru, definisi gambar tujuan yang menang dan entitas yang ditempel bergabung ke sana — jadi berwarna biru. Menempel tidak mendefinisikan ulang apa pun di gambar tujuan.

Ini penting saat menyalin antar gambar dengan konvensi layer berbeda: periksa [Layer Manager](../layer-manager/) setelah menempel antar gambar jika warnanya tidak seperti yang Anda harapkan.

## Ketika papan klip tidak berisi apa pun untuk ditempel

ClipboardPaste hanya menerima muatan yang dihasilkan ClipboardCopy. Apa pun selain itu di papan klip — teks biasa, sebuah tautan, sebuah gambar, JSON dari aplikasi lain — ditolak dan terminal melaporkan:

```
Clipboard has no copied entities
```

Jika peramban menolak akses papan klip sepenuhnya, pesannya menjadi **Blocked by the browser: allow clipboard in site settings, by the address bar**. Keduanya mengakhiri perintah tanpa mengubah gambar.

## Rujukan papan ketik

| Tombol | Tindakan |
|--------|----------|
| `Ctrl+V` / `Cmd+V` | Mengaktifkan ClipboardPaste |
| `Escape` | Membatalkan — entitas dibuang dan tidak ada yang ditambahkan |

Membatalkan saat fase pembacaan itu aman: jika papan klip baru menjawab setelah Anda membatalkan atau memulai perintah lain, hasil yang terlambat itu dibuang alih-alih mengganggu apa pun yang sedang aktif saat itu.

## Menyalin antar tab

Alur kerja antar gambar yang lazim:

1. Buka gambar sumber, pilih geometrinya, tekan `Ctrl+C`.
2. Pindah ke tab yang lain — atau buka tab kedua aplikasi dan muat berkas berbeda.
3. Tekan `Ctrl+V` lalu klik sebuah titik sisip.

Kedua tab berasal dari asal yang sama dan berbagi papan klip sistem, jadi tidak ada yang diunggah dan tidak ada server yang terlibat. Muatannya tetap berupa teks JSON di papan klip Anda sendiri sepanjang waktu.

## Entitas yang didukung

Setiap jenis entitas yang bisa ditulis ClipboardCopy bisa dibaca kembali oleh ClipboardPaste — dengan serialisasi yang sama seperti yang dipakai format `.json` bawaan.

## Lihat juga

- [ClipboardCopy](../clipboard-copy/) — menulis pilihan ke papan klip
- [Copy](../copy/) — menggandakan entitas di dalam gambar yang sedang aktif
- [Layer Manager](../layer-manager/) — memeriksa layer yang dibawa masuk oleh penempelan
