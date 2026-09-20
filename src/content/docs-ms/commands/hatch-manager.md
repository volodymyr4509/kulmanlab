---
title: Arahan Hatch Manager — Semak Imbas dan Muat Naik Corak .pat
description: Arahan Hatch Manager membuka dialog untuk menyemak imbas corak hatch dengan pratonton swatch langsung, dan untuk memuat naik fail corak .pat anda sendiri. Fail yang dimuat naik disimpan dalam pelayar dan mengatasi corak terbina dalam dengan nama yang sama.
keywords: [hatch manager, corak hatch tersuai CAD, muat naik fail pat, acad.pat, pustaka corak hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Arahan `PengurusLorek` membuka dialog untuk menyemak imbas corak hatch dengan pratonton swatch langsung, dan untuk memuat naik fail corak `.pat` anda sendiri untuk digunakan dengan [Hatch](../hatch/).

## Membuka Hatch Manager

Taip `PengurusLorek` dalam terminal. Ini berasingan daripada pemilih corak yang terbuka apabila anda klik cip **Pattern** hatch — pemilih memilih corak untuk satu hatch, Hatch Manager ialah tempat anda menambah atau membuang fail `.pat`.

## Kumpulan Corak

| Kumpulan | Kandungan |
|----------|-----------|
| **User** | Corak daripada fail `.pat` anda sendiri yang dimuat naik, dikumpulkan semula mengikut fail dari mana setiap corak datang (hanya dipaparkan selepas anda memuat naik satu) |
| **Standard** | `SOLID` ditambah jadual corak lukisan ini sendiri — setiap lukisan baharu bermula dengan pustaka terbina dalam yang sama, sama seperti lapisan dan jenis garisnya |

Klik mana-mana corak dalam senarai (atau gunakan `↑`/`↓`) untuk melihat pratontonnya di sebelah kanan — swatch yang dilukis dengan kod yang sama seperti kanvas diisi, jadi ia adalah tepat apa yang lukisan akan tunjukkan, ditambah nama, penerangan, dan bilangan garis corak.

## Memuat Naik Fail Corak Tersuai

1. Klik **Add .pat File** di footer dialog.
2. Pilih fail `.pat` — format corak hatch standard. Satu fail selalunya mentakrifkan banyak corak bernama sekali gus; semuanya muncul sebagai entri berasingan yang dikumpulkan di bawah nama fail itu.
3. Fail yang dimuat naik disimpan secara kekal dalam pelayar (IndexedDB), diisih mengikut yang paling baru ditambah dahulu, dan dimuat semula secara automatik pada kali seterusnya anda membuka KulmanLab CAD.

Memuat naik fail yang mentakrifkan corak dengan nama yang sama seperti yang terbina dalam **mengatasi** lalai — ini adalah cara yang disokong untuk mendapatkan definisi corak rasmi Autodesk: muat naik `acad.pat` sebenar, dan versi ANSI31 dan nama standard lainnya mengambil alih daripada anggaran KulmanLab sendiri.

Jika lukisan merujuk kepada nama corak yang tiada dalam pustaka anda — diimport daripada DXF yang menggunakan corak daripada `acad.pat` yang belum anda muat naik — hatch masih dipaparkan, menggunakan `ANSI31` sebagai gantian, dan bukannya kembali kepada isian rata tanpa corak.

## Membuang Fail Corak

Klik **×** di sebelah nama fail dalam kumpulan **User** untuk membuangnya bersama setiap corak yang ditakrifkannya. Mana-mana hatch yang sudah menggunakan salah satu corak tersebut serta-merta kembali kepada `ANSI31`. Corak **Standard** terbina dalam tidak boleh dibuang.

## Rujukan Papan Kekunci

| Kekunci | Tindakan |
|---------|----------|
| `↑` / `↓` | Gerakkan pilihan ke atas atau bawah dalam senarai corak |
| `Escape` | Tutup Hatch Manager |

## Arahan Berkaitan

- [Hatch](../hatch/) — mengisi kawasan yang diklik menggunakan corak yang dipilih pada masa ini
- [Font Manager](../font-manager/) — corak muat naik/semak imbas yang sama, untuk fon tersuai bukannya corak hatch
