---
title: FontAdd Command — Unggah Font TTF Kustom dari Terminal
description: Perintah FontAdd membuka pemilih file sistem untuk mengunggah font .ttf, tanpa membuka dialog Font Manager terlebih dahulu. Ini adalah unggahan yang sama dengan yang dipicu tombol "Add Font" di Font Manager, tersedia di sini sebagai perintah terminal tersendiri.
keywords: [perintah font add, perintah fontadd, unggah ttf terminal, font kustom CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Perintah `FontTambah` membuka pemilih file sistem untuk mengunggah font `.ttf` kustom, tanpa membuka dialog [Font Manager](../font-manager/) terlebih dahulu. Ini adalah unggahan yang sama dengan yang dipicu tombol **Add Font** di Font Manager — FontAdd hanyalah jalan langsung ke sana dari terminal.

## Mengunggah font

1. Ketik `FontTambah` di terminal, atau klik **Add Font** di footer dialog [Font Manager](../font-manager/).
2. Pilih file `.ttf` di pemilih sistem. Hanya font TrueType yang didukung — `.otf` dan `.woff`/`.woff2` tidak didukung.

Perintah selesai segera setelah pemilih file terbuka — tidak ada klik atau input terminal lebih lanjut. Font terdaftar dan muncul di grup **User** segera setelah file dipilih.

## Yang terjadi saat mengunggah

- Nama file (tanpa ekstensi) menjadi nama font. Mengunggah `MyFont.ttf` menambahkan font bernama `MyFont`.
- Mengunggah file yang namanya cocok dengan font kustom yang sudah ada akan **menggantikannya**.
- Font disimpan secara permanen di browser (IndexedDB) dan dimuat ulang secara otomatis saat Anda berikutnya membuka KulmanLab CAD — tidak terikat pada gambar saat ini.

## Referensi keyboard

FontAdd tidak memiliki interaksi keyboard sendiri — seluruh perintah terdiri dari dialog pemilih file bawaan browser. Membatalkan dialog tersebut (atau tidak memilih file apa pun) membuat daftar font tidak berubah.

## Perintah terkait

| Perintah | Fungsi |
|---------|-------------|
| [Font Manager](../font-manager/) | Jelajahi, pratinjau, pilih, dan hapus font, termasuk unggahan Anda sendiri |
| [Text](../text/) | Menempatkan label teks yang menjadi target pilihan font |
