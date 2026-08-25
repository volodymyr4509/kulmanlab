---
title: Perintah ClipboardPaste — Menampal entiti daripada papan keratan sistem
description: Perintah ClipboardPaste membaca entiti yang ditulis sebelum ini oleh ClipboardCopy daripada papan keratan sistem dan meletakkannya pada titik sisipan yang dipilih, sambil menambah lapisan dan jenis garisan yang tiada dalam lukisan destinasi.
keywords: [tampal papan keratan CAD, menampal entiti antara lukisan, tampal objek CAD, Ctrl+V CAD, tampal antara tab, gabungan lapisan semasa menampal, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Perintah `ClipboardPaste` membaca entiti yang ditulis oleh [ClipboardCopy](../clipboard-copy/) ke **papan keratan sistem** dan meletakkannya dalam lukisan semasa pada titik yang anda pilih. Kerana papan keratannya ialah papan keratan sistem yang sebenar, sumbernya boleh jadi lukisan lain, tab pelayar lain, atau sesi dari awal hari.

## Cara menampal

1. Tekan `Ctrl+V` (`Cmd+V` pada macOS), atau taip `ClipboardPaste` dalam terminal.
2. Gesaan memaparkan **reading clipboard…** sementara pelayar menyerahkan teks papan keratan.
3. Setelah dimuatkan, gesaan bertukar kepada **pick insertion point** dan pratonton geometri mengikut kursor anda.
4. **Klik** untuk meletakkan entiti. Ia ditambah ke lukisan dan kekal dipilih.

Pratonton ditambat oleh **titik rujukan** salinan — sudut kiri bawah sempadan gabungan pilihan asal. Sudut itu berada di bawah kursor anda, jadi susunan relatif antara entiti yang disalin terpelihara dengan tepat.

## Apa yang berlaku semasa menampal

| Langkah | Kelakuan |
|---------|----------|
| **Identiti baharu** | Setiap entiti yang ditampal diberi id baharu, jadi menampal dua kali menghasilkan dua set yang bebas |
| **Peralihan** | Entiti dianjak sebanyak kursor − titik rujukan |
| **Gabungan lapisan** | Setiap lapisan yang dirujuk tetapi tiada dalam lukisan destinasi ditambah mengikut nama |
| **Gabungan jenis garisan** | Setiap jenis garisan yang dirujuk tetapi tiada dalam lukisan destinasi ditambah mengikut nama |
| **Pilihan** | Pilihan terdahulu dikosongkan dan entiti yang ditampal menjadi pilihan |

### Gabungan lapisan dan jenis garisan

Catatan jadual yang tiada akan ditambah; **yang sedia ada dibiarkan sahaja**. Jika papan keratan membawa lapisan bernama `WALLS` berwarna merah sedangkan destinasi sudah mempunyai lapisan `WALLS` berwarna biru, takrifan destinasi yang menang dan entiti yang ditampal menyertainya — jadi ia menjadi biru. Menampal tidak mentakrif semula apa-apa dalam lukisan destinasi.

Ini penting apabila menyalin antara lukisan yang berbeza konvensi lapisannya: semak [Layer Manager](../layer-manager/) selepas menampal antara lukisan jika warnanya bukan seperti yang anda jangkakan.

## Apabila papan keratan tiada apa-apa untuk ditampal

ClipboardPaste hanya menerima muatan yang dihasilkan oleh ClipboardCopy. Apa-apa sahaja yang lain dalam papan keratan — teks biasa, pautan, imej, JSON daripada aplikasi lain — akan ditolak dan terminal melaporkan:

```
Clipboard has no copied entities
```

Jika pelayar menolak akses papan keratan sepenuhnya, mesejnya ialah **Clipboard access denied**. Kedua-duanya menamatkan perintah tanpa mengubah lukisan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|----------|
| `Ctrl+V` / `Cmd+V` | Aktifkan ClipboardPaste |
| `Escape` | Batal — entiti dibuang dan tiada apa-apa ditambah |

Membatalkan semasa fasa pembacaan adalah selamat: jika papan keratan hanya menjawab selepas anda sudah membatalkan atau memulakan perintah lain, hasil yang lewat itu dibuang dan bukannya mengganggu apa yang sedang aktif ketika itu.

## Menyalin antara tab

Aliran kerja lazim antara lukisan:

1. Buka lukisan sumber, pilih geometri, tekan `Ctrl+C`.
2. Beralih ke tab yang satu lagi — atau buka tab kedua aplikasi dan muatkan fail berlainan.
3. Tekan `Ctrl+V` dan klik satu titik sisipan.

Kedua-dua tab mempunyai asal yang sama dan berkongsi papan keratan sistem, jadi tiada apa-apa dimuat naik dan tiada pelayan terlibat. Muatannya kekal sebagai teks JSON dalam papan keratan anda sendiri sepanjang masa.

## Entiti yang disokong

Setiap jenis entiti yang boleh ditulis oleh ClipboardCopy boleh dibaca semula oleh ClipboardPaste — dengan pensirian yang sama seperti yang digunakan oleh format `.json` asli.

## Lihat juga

- [ClipboardCopy](../clipboard-copy/) — menulis pilihan ke papan keratan
- [Copy](../copy/) — menggandakan entiti di dalam lukisan semasa
- [Layer Manager](../layer-manager/) — memeriksa lapisan yang dibawa masuk oleh tampalan
