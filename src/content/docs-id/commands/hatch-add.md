---
title: Perintah HatchAdd — unggah berkas pola .pat dari terminal
description: HatchAdd membuka pemilih berkas untuk mengunggah berkas pola .pat tanpa membuka Hatch Manager dulu. Semua pola yang didefinisikannya ditambahkan sekaligus.
keywords: [perintah hatch add, perintah hatchadd, unggah berkas pat terminal, pola arsiran kustom CAD, acad.pat, pustaka pola arsiran, kulmanlab]
group: style
order: 5
---

# HatchAdd

Perintah `HatchAdd` membuka pemilih berkas sistem untuk mengunggah berkas pola arsiran `.pat`, tanpa membuka dialog [Hatch Manager](../hatch-manager/) lebih dulu. Ini unggahan yang sama dengan yang dipicu tombol **Add .pat File** di Hatch Manager — HatchAdd hanyalah jalan langsung ke sana dari terminal.

## Mengunggah berkas pola

1. Ketik `HatchAdd` di terminal, atau klik **Add .pat File** di bagian bawah dialog [Hatch Manager](../hatch-manager/).
2. Pilih berkas `.pat` di pemilih sistem. Hanya format pola arsiran standar yang diterima.

Perintah selesai begitu pemilih berkas terbuka — tidak ada prompt, klik, atau masukan terminal lagi. Pola-pola terdaftar dan muncul di grup **User** begitu berkas dipilih.

## Yang terjadi saat mengunggah

- **Berkas `.pat` adalah wadah, bukan satu pola.** Satu berkas lazimnya mendefinisikan banyak pola bernama, dan semuanya ditambahkan bersama. Di sinilah HatchAdd berbeda dari [FontAdd](../font-add/), di mana satu `.ttf` berarti satu fon.
- **Berkasnya sendiri tidak disimpan.** Ia dibaca sekali, dipecah menjadi pola-polanya, dan tiap pola disimpan sendiri dengan namanya. Karena itu Anda bisa menghapus satu pola nanti tanpa mengganggu yang datang bersamanya — dan karena itu grup **User** mendaftarkannya menurut abjad nama, bukan menurut berkas asalnya.
- **Pola yang namanya sama dengan pola yang ada akan menggantikannya.** Inilah cara yang didukung untuk memasang definisi otoritatif di atas perkiraan KulmanLab: unggah `acad.pat` sungguhan, dan versinya untuk `ANSI31` serta nama standar lain mengambil alih.
- **Pola disimpan per pengguna, bukan per gambar.** Mereka tinggal di peramban (IndexedDB), dimuat ulang otomatis saat Anda membuka KulmanLab CAD berikutnya, dan tersedia di setiap gambar.
- **Berkas tanpa definisi pola yang sah tidak menambahkan apa pun.** Pustaka tetap persis seperti semula.

## Referensi keyboard

HatchAdd tidak punya interaksi papan ketik sendiri — seluruh perintahnya adalah dialog pemilih berkas bawaan peramban. Membatalkan dialog itu (atau tidak memilih berkas) membiarkan pustaka pola tak berubah.

## Perintah terkait

| Perintah | Fungsi |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Menjelajah pustaka pola dengan pratinjau swatch langsung, dan menghapus pola unggahan |
| [Hatch](../hatch/) | Mengisi wilayah tertutup dengan pola dari pustaka |
| [FontAdd](../font-add/) | Pintasan unggah langsung yang sama untuk fon `.ttf` |
