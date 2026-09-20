---
title: Arahan FontAdd — Muat Naik Fon TTF Kustom dari Terminal
description: Arahan FontAdd membuka pemilih fail sistem untuk memuat naik fon .ttf, tanpa membuka dialog Font Manager terlebih dahulu. Ini adalah muat naik yang sama dengan yang dicetuskan oleh butang "Add Font" dalam Font Manager, tersedia di sini sebagai arahan terminal tersendiri.
keywords: [arahan font add, arahan fontadd, muat naik ttf terminal, fon kustom CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Arahan `FonTambah` membuka pemilih fail sistem untuk memuat naik fon `.ttf` kustom, tanpa membuka dialog [Font Manager](../font-manager/) terlebih dahulu. Ini adalah muat naik yang sama dengan yang dicetuskan oleh butang **Add Font** dalam Font Manager — FontAdd hanyalah laluan terus ke sana dari terminal.

## Memuat naik fon

1. Taip `FonTambah` dalam terminal, atau klik **Add Font** pada footer dialog [Font Manager](../font-manager/).
2. Pilih fail `.ttf` dalam pemilih sistem. Hanya fon TrueType disokong — `.otf` dan `.woff`/`.woff2` tidak disokong.

Arahan selesai sebaik sahaja pemilih fail dibuka — tiada klik atau input terminal lanjut selepas itu. Fon didaftarkan dan muncul dalam kumpulan **User** sebaik sahaja fail dipilih.

## Apa yang berlaku semasa memuat naik

- Nama fail (tanpa sambungan) menjadi nama fon. Memuat naik `MyFont.ttf` menambah fon bernama `MyFont`.
- Memuat naik fail yang namanya sepadan dengan fon kustom sedia ada akan **menggantikannya**.
- Fon disimpan secara kekal dalam pelayar (IndexedDB) dan dimuat semula secara automatik pada kali seterusnya anda membuka KulmanLab CAD — ia tidak terikat kepada lukisan semasa.

## Rujukan papan kekunci

FontAdd tidak mempunyai interaksi papan kekunci tersendiri — keseluruhan arahan terdiri daripada dialog pemilih fail asli pelayar. Membatalkan dialog itu (atau tidak memilih sebarang fail) membiarkan senarai fon tidak berubah.

## Arahan berkaitan

| Arahan | Fungsinya |
|--------|-----------|
| [Font Manager](../font-manager/) | Semak imbas, pratonton, pilih, dan buang fon, termasuk muat naik anda sendiri |
| [Text](../text/) | Meletakkan label teks yang menjadi sasaran pilihan fon |
