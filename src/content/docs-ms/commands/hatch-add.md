---
title: Perintah HatchAdd — muat naik fail corak .pat dari terminal
description: Perintah HatchAdd membuka pemilih fail untuk memuat naik fail corak .pat tanpa membuka Hatch Manager dahulu. Semua corak yang ditakrifkan fail itu ditambah sekali gus.
keywords: [perintah hatch add, perintah hatchadd, muat naik fail pat terminal, corak lorekan tersuai CAD, acad.pat, pustaka corak lorekan, kulmanlab]
group: style
order: 5
---

# HatchAdd

Perintah `HatchAdd` membuka pemilih fail sistem untuk memuat naik fail corak lorekan `.pat`, tanpa membuka dialog [Hatch Manager](../hatch-manager/) dahulu. Ia muat naik yang sama seperti yang dicetuskan butang **Add .pat File** dalam Hatch Manager — HatchAdd cuma jalan terus ke situ dari terminal.

## Memuat naik fail corak

1. Taip `HatchAdd` dalam terminal, atau klik **Add .pat File** di bahagian bawah dialog [Hatch Manager](../hatch-manager/).
2. Pilih fail `.pat` dalam pemilih sistem. Hanya format corak lorekan piawai diterima.

Perintah tamat sebaik sahaja pemilih fail terbuka — tiada gesaan, klik atau input terminal selepas itu. Corak didaftarkan dan muncul dalam kumpulan **User** sebaik fail dipilih.

## Apa yang berlaku semasa memuat naik

- **Fail `.pat` ialah bekas, bukan satu corak.** Satu fail lazimnya mentakrifkan banyak corak bernama, dan semuanya ditambah bersama. Di sinilah HatchAdd berbeza daripada [FontAdd](../font-add/), yang mana satu `.ttf` bermaksud satu fon.
- **Fail itu sendiri tidak disimpan.** Ia dibaca sekali, dipecahkan kepada coraknya, dan setiap corak disimpan sendiri di bawah namanya. Sebab itu anda boleh membuang satu corak kemudian tanpa mengganggu yang datang bersamanya — dan sebab itu kumpulan **User** menyenaraikannya mengikut abjad nama, bukan mengikut fail asalnya.
- **Corak yang namanya sama dengan yang sedia ada akan menggantikannya.** Inilah cara yang disokong untuk memasang takrifan berwibawa di atas anggaran KulmanLab sendiri: muat naik `acad.pat` sebenar, dan versinya bagi `ANSI31` serta nama piawai lain akan mengambil alih.
- **Corak disimpan bagi setiap pengguna, bukan bagi setiap lukisan.** Ia tinggal dalam pelayar (IndexedDB), dimuatkan semula secara automatik pada kali berikutnya anda membuka KulmanLab CAD, dan tersedia dalam setiap lukisan.
- **Fail tanpa takrifan corak yang sah tidak menambah apa-apa.** Pustaka kekal sebagaimana adanya.

## Rujukan papan kekunci

HatchAdd tiada interaksi papan kekunci tersendiri — keseluruhan perintah ialah dialog pemilih fail asli pelayar. Membatalkan dialog itu (atau tidak memilih fail) membiarkan pustaka corak tidak berubah.

## Arahan berkaitan

| Arahan | Fungsinya |
|--------|-----------|
| [Hatch Manager](../hatch-manager/) | Melayari pustaka corak dengan pratonton swatch langsung, dan membuang corak yang dimuat naik |
| [Hatch](../hatch/) | Mengisi kawasan tertutup dengan corak daripada pustaka |
| [FontAdd](../font-add/) | Pintasan muat naik terus yang sama untuk fon `.ttf` |
