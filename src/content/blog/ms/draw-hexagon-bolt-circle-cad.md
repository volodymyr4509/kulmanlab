---
title: "Cara Melukis Heksagon atau Bulatan Bolt dalam CAD (Polygon dan Tatasusunan Kutub)"
description: "Lukis poligon sekata daripada pusat dan jejari atau daripada satu sisi, kemudian ulang lubang pada bulatan bolt dengan tatasusunan kutub — percuma dalam pelayar anda, dengan nilai yang ditaip dengan tepat."
keywords: [lukis heksagon dalam CAD, poligon sekata CAD, tatasusunan kutub CAD, lukisan bulatan bolt, corak lubang CAD, corak bulat CAD, lukisan nat heksagon, lukis oktagon CAD, diameter bulatan pic PCD, alat poligon CAD percuma]
date: 2026-10-11
author: KulmanLab
tag: Panduan
---

Untuk melukis poligon sekata dalam CAD, nyatakan bilangan sisi, pilih pusat, kemudian jejari — atau pilih satu sisi dan selebihnya mengikut. Untuk melukis bulatan bolt, lukis satu lubang dan ulangnya mengelilingi pusat dengan tatasusunan kutub. Panduan ini melakukan kedua-duanya, dengan nombor yang tepat, dalam pelayar di [app.kulmanlab.com](https://app.kulmanlab.com) — percuma, tanpa pemasangan, dan fail tidak pernah meninggalkan komputer anda.

Kami membina [KulmanLab](https://kulmanlab.com), jadi langkah di bawah menggunakan perintahnya. Idea-ideanya — ukuran antara rata berbanding antara bucu, diameter bulatan pic, sama ada salinan berputar semasa mengelilingi — adalah sama dalam mana-mana program CAD.

## Melukis poligon sekata

Poligon sekata mempunyai sisi dan sudut yang sama: heksagon untuk nat, oktagon untuk papan tanda, pentagon untuk potongan hiasan. Dalam KulmanLab ia ialah perintah **Polygon**.

1. Taip `Poligon` dalam terminal, atau gunakan butang Polygon dalam panel Shapes.
2. Masukkan **bilangan sisi** — mana-mana nombor bulat dari 3 hingga 1024 — dan tekan **Enter**. Gesaan diisi awal dengan bilangan yang anda gunakan kali terakhir.
3. **Klik pusat**, atau taip `X,Y` untuk titik yang tepat.
4. **Klik jejari**, atau taipnya dan tekan **Enter**.

Hasilnya satu polyline tertutup, jadi semua yang boleh dilakukan pada polyline — alih, putar, offset, skala — berfungsi.

### Antara rata atau antara bucu?

Di sinilah orang tersilap. "Jejari" boleh bermaksud dua jarak berbeza, dan heksagon ditentukan dengan salah satunya bergantung pada apa yang anda lukis:

| | Diukur hingga | Kegunaan biasa |
|---|---|---|
| **Inside hidup** (lalai) | Bucu | Bentuk yang mesti muat dalam bulatan tertentu |
| **Inside mati** | Titik tengah setiap sisi | Bentuk dengan lebar antara rata tertentu — nat, kepala bolt, saiz sepana |

Tekan `I` pada gesaan jejari untuk bertukar. Nat heksagon dijual mengikut lebar antara ratanya, jadi gunakan **Inside mati** dan taip *separuhnya*. Untuk nat M8 dengan 13 mm antara rata:

1. `Poligon`, kemudian `6` untuk sisi, kemudian klik atau taip pusat.
2. Tekan `I` untuk mematikan Inside.
3. Taip `6.5` dan tekan **Enter**.

Permukaan rata terletak tepat 13 mm; bucu mencapai 7,51 mm dari pusat, kira-kira 15 mm antara bucu. Jika anda menaip jejari dan bukannya mengklik, poligon terletak dengan sisi paling bawahnya mendatar, rata di bawah. Jika anda mengklik, ia mengambil orientasi daripada tempat anda mengklik.

### Daripada satu sisi

Kadangkala anda tahu panjang sisi, bukan jejari — misalnya meja oktagon dengan sisi 20 mm. Tekan `E` pada gesaan titik pertama untuk bertukar ke mod **Edge**, kemudian pilih dua hujung satu sisi. Bucu yang lain dibina melawan arah jam, di sebelah kiri sisi itu. Menaip `0,0` kemudian `20,0` meletakkan sisi 20 mm di sepanjang paksi X dengan poligon di atasnya.

## Melukis bulatan bolt

Bulatan bolt — "PCD" pada lukisan — ialah cincin lubang berjarak sama mengelilingi pusat. Anda melukis satu lubang dan mengulanginya. Dalam KulmanLab itu ialah **ArrayPolar**.

Ambil enam lubang 6.6 mm pada diameter bulatan pic 50 mm, berpusat pada asalan:

1. **Lukis lubang pertama.** Jalankan `Bulatan`, taip pusat sebagai `25` `,` `0` — separuh PCD di sepanjang paksi X —, tekan **Enter**, kemudian taip jejari `3.3` dan tekan **Enter**.
2. **Pilihnya** dengan mengklik bulatan.
3. **Jalankan tatasusunan kutub.** Taip `LarikPolar`, atau gunakan butang ArrayPolar dalam panel Edit.
4. **Pilih pusat corak** — taip `0,0`.
5. Terminal menunjukkan tatasusunan seperti keadaan sekarang — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — dan lima salinan dipratonton secara langsung. Tekan **Enter** untuk menerima.

Itulah keseluruhan bulatan bolt. Untuk bilangan lain, tekan `I` sebelum mengesahkan dan taip bilangan item — yang asal dikira satu, dan sudut di antaranya dikira untuk anda. Atau tekan `A` dan taip jarak dalam darjah; sudut isian dinyatakan semula supaya sepadan.

Beberapa butiran yang penting:

- **Fill** ialah sudut dari item pertama ke yang terakhir. Lalai 360° menyebarkan item di sekeliling bulatan penuh; nombor lebih kecil menyebarkannya pada lengkok — barisan lubang pada suku pusingan, misalnya. Sudut negatif ikut arah jam.
- **Rotate** menentukan sama ada setiap salinan berputar semasa mengelilingi. Untuk lubang bulat ia tiada bezanya. Untuk alur, gigi atau braket ia berbeza: hidup — setiap salinan menghadap pusat seperti yang asal; mati — setiap salinan mengekalkan orientasi yang asal dan hanya dialihkan ke tempatnya. Tekan `R` untuk bertukar sebelum mengesahkan.
- Tatasusunan mencipta **salinan** — yang asal kekal di tempatnya, dan setiap item ialah entiti biasa yang boleh anda sunting selepas itu.

## Gabungkan semuanya: sebuah bebibir

Lukis heksagon sebagai garis bentuk, bulatan di tengah untuk gerek, dan bulatan bolt untuk lubang pemasangan. Tiga perintah, setiap ukuran ditaip dengan tepat, dan tiada apa-apa untuk diukur dari skrin.

Jika bahagian itu akan ke pemotong laser, padam sebarang bulatan bantu yang anda lukis untuk mencari bulatan pic — ia akan dipotong seperti yang lain — dan semak fail dengan panduan kami tentang [menyediakan DXF untuk pemotongan laser](/ms/blog/prepare-dxf-for-laser-cutting/). Poligon ialah laluan tertutup mengikut binaannya, iaitu sebab paling lazim perkhidmatan pemotongan menolak fail.

## Perkara yang tidak dilakukan ini

- **Poligon sekata sahaja.** Semua sisi sama. Garis bentuk tidak sekata — bentuk dengan beberapa sisi lebih panjang — ialah [polyline](/ms/docs/commands/polyline/) yang anda lukis titik demi titik.
- **2D sahaja.** Ia melukis garis bentuk rata. Ia tidak akan memberi nat yang dimodelkan atau bolt berulir.
- **Pelayar desktop sahaja** — Chrome, Firefox, Safari dan Edge. Tiada versi mudah alih.

---

*Berkaitan: [Polygon](/ms/docs/commands/polygon/) dan [ArrayPolar](/ms/docs/commands/array-polar/) untuk semua pilihan dan kekunci, [Circle](/ms/docs/commands/circle/) untuk menaip jejari yang tepat, dan [ArrayGrid](/ms/docs/commands/array-grid/) untuk mengulang objek dalam baris dan lajur dan bukannya mengelilingi pusat.*
