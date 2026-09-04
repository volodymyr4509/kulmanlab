---
title: Arahan Hatch — Isi Kawasan dengan Corak
description: Arahan Hatch mengisi rantau yang mengelilingi titik yang diklik dengan corak — sebarang gabungan garis, lengkok, elips, dan spline yang menutup akan mengelilingi rantau, dan sebarang bentuk tertutup di dalamnya kekal sebagai pulau yang tidak diisi.
keywords: [arahan hatch CAD, isi kawasan CAD, corak hatch CAD, ANSI31, isian SOLID, isian sempadan CAD, entiti DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Arahan `hatch` mengisi rantau yang mengelilingi titik yang diklik dengan corak. Sempadan tidak dilukis dahulu — ia berasal daripada apa yang sudah ada pada kanvas, jadi empat [Line](../line/) berasingan yang bertemu hujung ke hujung mengelilingi rantau tepat seperti [Polyline](../polyline/) tertutup, dan sebarang bentuk tertutup di dalamnya menjadi pulau yang tidak disentuh oleh isian.

## Mengisi Kawasan

1. Taip `hatch` dalam terminal atau klik butang **Hatch** pada bar alat (ikon swatch).
2. **Klik satu titik** di dalam rantau yang anda ingin isi.
3. Arahan kekal aktif, jadi teruskan mengklik untuk mengisi lebih banyak kawasan — setiap klik mencipta entiti `Hatch` tersendiri.
4. Tekan **Enter**, **Space**, atau **Escape** apabila selesai.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klik di dalam sempadan
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   luar; bulatan kekal
  └─────────────┘        └─────────────┘   sebagai pulau
```

## Rujukan papan kekunci

| Kekunci | Tindakan |
|-----|--------|
| `Enter` / `Space` | Selesaikan arahan Hatch |
| `Escape` | Selesaikan arahan Hatch (sama seperti Enter/Space) |

## Apa yang Boleh Membentuk Sempadan

Sebarang gabungan jenis entiti ini boleh membentuk sempadan, dalam apa jua gabungan, selagi ia bersambung hujung ke hujung tanpa sebarang jurang:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (sempadan tertutup sendiri)
- [Ellipse](../ellipse/) (tertutup, atau lengkok elips terbuka sebagai sebahagian daripada gelung yang lebih besar)
- [Polyline](../polyline/) (terbuka atau tertutup) dan [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Entiti Text, Multileader, dan Dimension tidak pernah dianggap sebagai sempadan.

## Pulau

Apa sahaja yang tertutup sepenuhnya di dalam rantau yang anda klik — bulatan, poliline tertutup, sempadan hatch lain — menjadi **pulau**: isian berhenti di tepinya dan pulau itu sendiri kekal kosong. Letakkan bentuk tertutup di dalam bentuk tertutup lain dan isian berselang-seli, lubang di dalam isian di dalam lubang, mengikuti peraturan dalam/luar yang sama pada setiap tahap.

## Apabila Pilihan Gagal

Jika titik yang anda klik tidak dikelilingi, atau sempadan mempunyai jurang, terminal menerangkan sebabnya dan bukan senyap tidak melakukan apa-apa:

| Mesej | Maksud |
|-------|--------|
| "no boundary found" | Tiada apa-apa dikesan dalam mana-mana arah dari titik yang diklik — tiada sempadan langsung berdekatan |
| "point is not enclosed" | Terdapat sempadan berdekatan, tetapi bentuk yang dibentuknya tidak mengandungi titik yang anda klik |
| "boundary is open" | Sempadan terdekat mempunyai jurang di suatu tempat — kesan ia dan periksa setiap sambungan tepat |
| "boundary too complex" | Gelung sempadan tidak dapat ditutup dalam had lintasan — biasanya kekusutan entiti bertindih |

Arahan kekal aktif selepas pilihan gagal — baca mesej, betulkan lukisan atau klik di tempat lain, dan cuba lagi.

## Memilih Corak

Setiap hatch baharu bermula diisi dengan `ANSI31` (atau corak apa sahaja yang digunakan oleh hatch *terakhir* yang anda edit) — tiada pemilih corak sebelum melukis. Untuk menggunakan corak yang berbeza:

1. Pilih hatch sedia ada dan buka medan **Pattern**-nya dalam panel sifat — ini membuka pemilih corak, grid swatch bernama yang dikumpulkan mengikut asal setiap corak.
2. Klik corak untuk menggunakannya — isian dikemas kini serta-merta.

Pilihan itu juga menjadi lalai untuk hatch *seterusnya* yang anda cipta dengan arahan `hatch`, dengan cara yang sama seperti memilih lapisan atau warna dibawa ke hadapan. Jadi untuk hatch beberapa kawasan baharu dengan corak tertentu: isi satu kawasan, tetapkan coraknya sekali, kemudian teruskan hatch — setiap isian selepas itu bermula dengan corak tersebut sudah digunakan.

Lihat [Hatch Manager](../hatch-manager/) untuk memuat naik fail corak `.pat` anda sendiri dan menyemak imbas keseluruhan pustaka.

**SOLID** ialah entri biasa dalam senarai corak, bukan kotak semak atau mod berasingan — pilih ia dengan cara yang sama anda akan memilih ANSI31 atau mana-mana corak bernama lain.

## Sifat

| Sifat | Maksud |
|-------|--------|
| Pattern | Nama corak, daripada perbendaharaan kata corak yang dikongsi (lihat [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Menskalakan jarak garis corak — nilai lebih besar meregangkan garis corak lebih jauh |
| Pattern Angle | Memutar corak secara bebas daripada sempadan |
| Origin X / Origin Y | Di mana pengulangan corak itu sendiri berlabuh, dalam koordinat lukisan |

Menggerak, memutar, mengoncang, atau menskalakan hatch membawa penempatan coraknya sekali, jadi isian kekal sejajar dengan sempadan — anda tidak perlu menetapkan semula skala atau sudut selepas transformasi.

## Penyuntingan Grip Sempadan

Hatch yang dipilih memegang sempadannya dengan cara yang sama seperti Polyline memegang bucu-bucunya — satu grip pada setiap sudut di mana dua tepi bertemu, dan satu di tengah setiap tepi (gelung tertutup seperti hatch bulatan atau elips sebaliknya memegang pada empat titik paksinya).

| Grip | Apa yang Dilakukan |
|------|----------------------|
| **Sudut** | Menggerakkan sudut itu. Tepi lurus mengikut dengan tepat; lengkok menyesuaikan semula untuk terus melalui kedua-dua jirannya; tepi elips atau spline hanya boleh mendarat di suatu tempat pada lengkungnya sendiri, jadi sudut melekat pada titik terdekat di atasnya |
| **Tengah tepi — tepi garis, elips, atau spline** | Menggelongsorkan keseluruhan tepi; tepi pada kedua-dua belah dipangkas atau dipanjangkan untuk kekal bersambung dengannya |
| **Tengah tepi — tepi lengkok** | **Melengkokkan** lengkok melalui kursor bukannya menggelongsorkannya — kedua-dua hujung kekal tepat di tempat asalnya, dan tiada apa-apa lagi dalam sempadan bergerak |
| **Pusat** (keseluruhan hatch) | Mengaktifkan [Move](../move/) untuk keseluruhan hatch |

Pratonton seret memaparkan sempadan sebagai garis putus-putus bukannya isian pejal semasa anda menyeret — isian asal kekal kelihatan di bawah sehingga anda lepaskan, kerana pratonton hanya boleh mengecat di atas apa yang sudah ada, tidak pernah membuang apa-apa daripadanya.

## DXF — Entiti HATCH

Hatch **diimport** daripada entiti `HATCH`: KulmanLab membaca geometri sempadan bersama nama, skala, dan sudut corak (kod kumpulan DXF 70/41/52) — ia **tidak** membaca definisi garis corak itu sendiri yang ditulis secara inline dalam fail. Sebaliknya, nama corak dicari dalam pustaka corak KulmanLab sendiri (lalai terbina dalam ditambah apa sahaja yang anda muat naik dalam [Hatch Manager](../hatch-manager/)). Nama yang tiada dalam pustaka anda kembali kepada ANSI31 supaya lukisan masih dibaca sebagai hatched, dan nota dicatat sekali.

Gelung bersempadan spline yang ditulis oleh aplikasi lain (jenis tepi sempadan DXF 4) belum dibaca lagi.

Lorekan **dieksport** ke DXF sebagai entiti `HATCH`. Gelung sempadan keluar bersama nama corak (kod kumpulan 2), bendera isian padat (70), serta sudut dan skala lorekan itu sendiri (52/41) — dan berbeza daripada laluan import, takrif garis corak yang telah dileraikan turut ditulis di dalamnya (78, dengan 53/43/44/45/46/79/49). Ketaksamaan itu disengajakan: KulmanLab boleh mencari nama dalam pustakanya sendiri, tetapi aplikasi yang menerima fail itu mungkin tidak mempunyai corak tersebut, jadi garisnya ikut bersama.

## Arahan Berkaitan

- [Hatch Manager](../hatch-manager/) — semak imbas pustaka corak dan muat naik fail `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — semuanya membawa penempatan corak hatch bersama
- [Delete](../delete/) — memadamkan hatch tanpa menjejaskan entiti yang membentuk sempadannya
