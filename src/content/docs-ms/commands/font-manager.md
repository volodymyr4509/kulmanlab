---
title: Arahan Font Manager — Muat Naik dan Urus Fon TTF Kustom
description: Arahan Font Manager membuka dialog untuk melayari, pratonton, dan memilih fon, serta untuk memuat naik fail .ttf anda sendiri. Fon yang dimuat naik disimpan dalam pelayar dan disematkan mengikut nama dalam eksport DXF.
keywords: [font manager, fon kustom CAD, muat naik ttf, taip muka kustom CAD, google fonts CAD, fon teks CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Arahan `FontManager` membuka dialog untuk melayari dan memilih fon, serta untuk memuat naik fail `.ttf` anda sendiri untuk digunakan pada entiti [Text](../text/) dan [Multileader](../leader/).

## Membuka Font Manager

- Taip `FontManager` dalam terminal, **atau**
- Klik butang **Font Manager** pada bar alat [text editor](../../interface/text-editor/).

## Kumpulan fon

| Kumpulan | Kandungan |
|----------|-----------|
| **Default** | Fon sans-serif terbina dalam — sentiasa tersedia |
| **User** | Fon `.ttf` yang anda muat naik sendiri (hanya dipaparkan setelah anda menambah satu) |
| **Free** | 15 Google Fonts terbina dalam (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Fon OS biasa (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klik mana-mana fon dalam senarai untuk pratonton di sebelah kanan — nama, sampel abjad, ayat pangram, dan digit.

## Memuat naik fon kustom

1. Klik **Add Font** pada footer dialog (atau taip `Font+` dalam terminal untuk membuka pemilih fail secara terus).
2. Pilih fail `.ttf`. Hanya fon TrueType disokong — `.otf` dan `.woff`/`.woff2` tidak disokong.
3. Nama fail (tanpa sambungan) menjadi nama fon dalam kumpulan **User**. Sebagai contoh, memuat naik `MyFont.ttf` menambah fon bernama `MyFont`.

Fon yang dimuat naik disimpan secara kekal dalam pelayar (IndexedDB) dan dimuat semula secara automatik pada kali seterusnya anda membuka KulmanLab CAD.

## Membuang fon kustom

Tuding ke fon dalam kumpulan **User** dan klik butang **×** di sebelahnya. Fon terbina dalam (Default, Free, System) tidak boleh dibuang.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|----------|
| `↑` / `↓` | Gerakkan pilihan ke atas atau bawah senarai fon |
| `Escape` | Tutup Font Manager |

## Keserasian DXF

Nama fon disematkan dalam entiti **MTEXT** yang dieksport sebagai kod pemformatan sebaris, jadi DXF yang melalui pusingan penuh melalui KulmanLab CAD mengekalkan penetapan fonnya. *Fail* fon kustom tidak disematkan dalam DXF — hanya *nama* fon sahaja. Jika anda mengimport semula lukisan yang merujuk kepada fon kustom yang belum anda muat naik pada peranti ini, teks dipaparkan dalam fon lalai sehingga anda memuat naik fon dengan nama yang sama itu.

## Arahan berkaitan

- [Text](../text/) — meletakkan label teks yang menjadi sasaran pilihan fon
- [Match Properties](../match-properties/) — menyalin ketinggian teks, tetapi bukan fon, antara entiti
