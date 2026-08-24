---
title: Perintah ChangePrintArea — Memangkas eksport Print Manager kepada segi empat tepat
description: Perintah ChangePrintArea memilih dua sudut bertentangan pada kanvas untuk menetapkan kawasan yang dieksport oleh Print Manager. Menyokong koordinat X,Y yang ditaip dan snap, serta mengingati kawasan secara berasingan bagi ruang Model dan setiap susun atur.
keywords: [kawasan cetak CAD, pangkas eksport CAD, perintah change print area, pemangkasan print manager, kawasan eksport CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Perintah `ChangePrintArea` menetapkan kawasan segi empat tepat yang dieksport oleh [Print Manager](../print-manager/). Ia berjalan pada kanvas kosong dengan Print Manager tersembunyi dan menerima dua sudut bertentangan — dua klik yang sama seperti [Rectangle](../rectangle/), jadi koordinat yang ditaip dan snap berkelakuan sama.

## Memilih kawasan

1. Taip `ChangePrintArea` dalam terminal, atau klik **Change Area** pada bar sisi Print Manager. Print Manager tersembunyi dan kanvas menjadi interaktif.
2. **Klik sudut pertama**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik sudut bertentangan**, atau taip `X,Y` sekali lagi.

Print Manager dibuka semula dengan kawasan baharu dalam pratonton, yang diubah saiznya kepada nisbah aspek tepat kawasan itu.

Sudut melekat pada cengkaman dan persilangan seperti mana-mana pemilihan titik lain, jadi anda boleh memangkas mengikut geometri yang dilukis dan bukan dengan agakan mata. Susunan dua sudut itu tidak penting: sudut bertentangan menentukan segi empat tepat yang sama.

Tekan `Escape` untuk membatalkan. Tiada apa-apa ditulis, jadi Print Manager dibuka semula dengan kawasan yang sedia ada.

## Di mana kawasan diingati

Pilihan disimpan mengikut konteks, bukan secara global:

| Konteks | Slot |
|---|---|
| Ruang model | Satu slot dikongsi |
| Setiap susun atur | Slotnya sendiri, disimpan berasingan |

Membuka semula Print Manager pada susun atur yang sama — atau pada Model — memulihkan pangkasan terakhir konteks itu dan bukan menetapkannya semula, dan bertukar antara susun atur membiarkan kawasan setiap satu utuh.

Ini disimpan dalam ingatan sahaja. Memuat semula halaman mengosongkan semua kawasan tersimpan, dan Print Manager kembali kepada nilai lalai di bawah.

## Kawasan lalai

Tanpa apa-apa tersimpan bagi konteks semasa, Print Manager dibuka pada:

| Konteks | Lalai |
|---|---|
| Ruang model | Kotak sempadan semua entiti — julat sama yang dizum oleh [Fit](../fit/) |
| Setiap susun atur | Keseluruhan helaian |

## Perintah berkaitan

| Perintah | Fungsinya |
|---|---|
| [Print Manager](../print-manager/) | Tetingkap eksport yang kawasan ini terpakai |
| [Rectangle](../rectangle/) | Pemilihan dua sudut yang sama, tetapi melukis polyline |
| [Fit](../fit/) | Mengezum ke julat yang digunakan ruang Model secara lalai |
