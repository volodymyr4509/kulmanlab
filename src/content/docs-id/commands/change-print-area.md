---
title: Perintah ChangePrintArea — Memangkas ekspor Print Manager menjadi persegi panjang
description: Perintah ChangePrintArea memilih dua sudut berseberangan di kanvas untuk menetapkan wilayah yang diekspor Print Manager. Mendukung koordinat X,Y yang diketik dan snap, serta mengingat area secara terpisah untuk ruang Model dan setiap layout.
keywords: [area cetak CAD, memangkas ekspor CAD, perintah change print area, pemangkasan print manager, wilayah ekspor CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Perintah `ChangePrintArea` menetapkan wilayah persegi panjang yang diekspor [Print Manager](../print-manager/). Perintah ini berjalan di kanvas kosong dengan Print Manager tersembunyi dan menerima dua sudut berseberangan — dua klik yang sama seperti [Rectangle](../rectangle/), sehingga koordinat yang diketik dan snap berperilaku persis sama.

## Memilih area

1. Ketik `ChangePrintArea` di terminal, atau klik **Change Area** di bilah sisi Print Manager. Print Manager tersembunyi dan kanvas menjadi interaktif.
2. **Klik sudut pertama**, atau ketik `X,Y` lalu tekan **Enter** untuk koordinat yang tepat.
3. **Klik sudut yang berseberangan**, atau ketik `X,Y` lagi.

Print Manager terbuka kembali dengan area baru di pratinjau, yang menyesuaikan ukuran ke rasio aspek persis area tersebut.

Sudut-sudut menempel ke grip dan perpotongan seperti pemilihan titik lainnya, sehingga Anda dapat memangkas mengikuti geometri yang digambar, bukan dengan perkiraan mata. Urutan kedua sudut tidak penting: sudut berseberangan menentukan persegi panjang yang sama.

Tekan `Escape` untuk membatalkan. Tidak ada yang ditulis, jadi Print Manager terbuka kembali dengan area yang sudah dimilikinya.

## Di mana area diingat

Pilihan disimpan per konteks, bukan global:

| Konteks | Slot |
|---|---|
| Ruang model | Satu slot bersama |
| Setiap layout | Slot sendiri, disimpan terpisah |

Membuka kembali Print Manager pada layout yang sama — atau pada Model — memulihkan pemangkasan terakhir konteks tersebut alih-alih mengaturnya ulang, dan berpindah antar layout membiarkan area masing-masing tetap utuh.

Ini hanya disimpan di memori. Memuat ulang halaman menghapus semua area tersimpan, dan Print Manager kembali ke nilai bawaan di bawah ini.

## Area bawaan

Tanpa apa pun yang tersimpan untuk konteks saat ini, Print Manager terbuka pada:

| Konteks | Bawaan |
|---|---|
| Ruang model | Kotak pembatas semua entitas — rentang yang sama seperti yang dizoom [Fit](../fit/) |
| Setiap layout | Seluruh lembar |

## Perintah terkait

| Perintah | Fungsinya |
|---|---|
| [Print Manager](../print-manager/) | Jendela ekspor tempat area ini berlaku |
| [Rectangle](../rectangle/) | Pemilihan dua sudut yang sama, tetapi menggambar polyline |
| [Fit](../fit/) | Memperbesar ke rentang yang digunakan ruang Model secara bawaan |
