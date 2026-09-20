---
title: Perintah Hatch — Isi Area dengan Pola
description: Perintah Hatch mengisi wilayah yang mengelilingi titik yang diklik dengan pola — kombinasi apa pun dari garis, busur, elips, dan spline yang menutup akan mengelilingi wilayah, dan bentuk tertutup apa pun di dalamnya tetap sebagai pulau yang tidak terisi.
keywords: [perintah hatch CAD, isi area CAD, pola hatch CAD, ANSI31, isian SOLID, isian batas CAD, entitas DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Perintah `Arsir` mengisi wilayah yang mengelilingi titik yang diklik dengan pola. Batas tidak digambar terlebih dahulu — batas berasal dari apa yang sudah ada di kanvas, sehingga empat [Line](../line/) terpisah yang bertemu ujung ke ujung mengelilingi wilayah persis seperti [Polyline](../polyline/) tertutup, dan bentuk tertutup apa pun di dalamnya menjadi pulau yang dibiarkan oleh isian.

## Mengisi Area

1. Ketik `Arsir` di terminal atau klik tombol toolbar **Hatch** (ikon swatch).
2. **Klik sebuah titik** di dalam wilayah yang ingin Anda isi.
3. Perintah tetap aktif, jadi teruslah mengklik untuk mengisi lebih banyak area — setiap klik membuat entitas `Hatch` sendiri.
4. Tekan **Enter**, **Space**, atau **Escape** ketika selesai.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klik di dalam batas
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   luar; lingkaran tetap
  └─────────────┘        └─────────────┘   sebagai pulau
```

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Selesaikan perintah Hatch |
| `Escape` | Selesaikan perintah Hatch (sama seperti Enter/Space) |

## Apa yang Dapat Membentuk Batas

Kombinasi apa pun dari tipe entitas ini dapat membentuk batas, dalam kombinasi apa pun, selama mereka terhubung ujung ke ujung tanpa celah:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (batas tertutupnya sendiri)
- [Ellipse](../ellipse/) (tertutup, atau busur elips terbuka sebagai bagian dari loop yang lebih besar)
- [Polyline](../polyline/) (terbuka atau tertutup) dan [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Entitas Text, Multileader, dan Dimension tidak pernah diperlakukan sebagai batas.

## Pulau

Apa pun yang tertutup sepenuhnya di dalam wilayah yang Anda klik — lingkaran, polyline tertutup, batas hatch lain — menjadi **pulau**: isian berhenti di tepinya dan pulau itu sendiri dibiarkan kosong. Letakkan bentuk tertutup di dalam bentuk tertutup lainnya dan isian berselang-seling, lubang di dalam isian di dalam lubang, mengikuti aturan dalam/luar yang sama di setiap tingkat.

## Ketika Pemilihan Gagal

Jika titik yang Anda klik tidak terkurung, atau batas memiliki celah, terminal menjelaskan alasannya alih-alih tidak melakukan apa pun secara diam-diam:

| Pesan | Arti |
|-------|------|
| "no boundary found" | Tidak ada yang terkena dari arah mana pun dari titik yang diklik — tidak ada batas sama sekali di dekatnya |
| "point is not enclosed" | Ada batas di dekatnya, tetapi bentuk yang dibentuknya tidak berisi titik yang Anda klik |
| "boundary is open" | Batas terdekat memiliki celah di suatu tempat — telusuri dan periksa apakah setiap sambungan tepat |
| "boundary too complex" | Loop batas tidak dapat ditutup dalam batas penelusuran — biasanya kekusutan entitas yang tumpang tindih |

Perintah tetap aktif setelah pemilihan gagal — baca pesannya, perbaiki gambar atau klik di tempat lain, dan coba lagi.

## Memilih Pola

Setiap hatch baru dimulai terisi dengan `ANSI31` (atau pola apa pun yang digunakan oleh hatch *terakhir* yang Anda edit) — tidak ada pemilih pola sebelum menggambar. Untuk menggunakan pola yang berbeda:

1. Pilih hatch yang ada dan buka bidang **Pattern**-nya di panel properti — ini membuka pemilih pola, kisi swatch bernama yang dikelompokkan berdasarkan asal setiap pola.
2. Klik pola untuk menerapkannya — isian diperbarui seketika.

Pilihan itu juga menjadi default untuk hatch *berikutnya* yang Anda buat dengan perintah `Arsir`, dengan cara yang sama seperti memilih layer atau warna terbawa. Jadi untuk meng-hatch beberapa area baru dengan pola tertentu: isi satu area, atur polanya sekali, lalu terus meng-hatch — setiap isian setelahnya sudah dimulai dengan pola tersebut diterapkan.

Lihat [Hatch Manager](../hatch-manager/) untuk mengunggah file pola `.pat` Anda sendiri dan menjelajahi seluruh pustaka.

**SOLID** adalah entri biasa dalam daftar pola, bukan kotak centang atau mode terpisah — pilih dengan cara yang sama seperti Anda akan memilih ANSI31 atau pola bernama lainnya.

## Properti

| Properti | Arti |
|----------|------|
| Pattern | Nama pola, dari kosakata pola bersama (lihat [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Menskalakan jarak antar garis pola — nilai yang lebih besar merenggangkan garis pola lebih jauh |
| Pattern Angle | Memutar pola secara independen dari batas |
| Origin X / Origin Y | Di mana pengulangan pola sendiri berlabuh, dalam koordinat gambar |

Memindahkan, memutar, mencerminkan, atau menskalakan hatch membawa penempatan polanya, sehingga isian tetap sejajar dengan batas — Anda tidak perlu mengatur ulang skala atau sudut setelah transformasi.

## Pengeditan Grip Batas

Hatch yang dipilih memegang batasnya dengan cara yang sama seperti Polyline memegang titik sudutnya — satu grip di setiap sudut tempat dua tepi bertemu, dan satu di tengah setiap tepi (loop tertutup seperti hatch lingkaran atau elips malah memegang di empat titik sumbunya).

| Grip | Yang Dilakukannya |
|------|---------------------|
| **Sudut** | Memindahkan sudut tersebut. Tepi lurus mengikuti dengan tepat; busur menyesuaikan kembali untuk terus melewati kedua tetangganya; tepi elips atau spline hanya dapat mendarat di suatu tempat pada kurvanya sendiri, sehingga sudut menempel ke titik terdekat di atasnya |
| **Tengah tepi — tepi garis, elips, atau spline** | Menggeser seluruh tepi; tepi di kedua sisi dipotong atau diperpanjang agar tetap terhubung dengannya |
| **Tengah tepi — tepi busur** | **Melengkungkan** busur melalui kursor alih-alih menggesernya — kedua ujung tetap persis di tempatnya, dan tidak ada yang lain di batas yang bergerak |
| **Pusat** (seluruh hatch) | Mengaktifkan [Move](../move/) untuk seluruh hatch |

Pratinjau seret menampilkan batas sebagai garis putus-putus alih-alih isian solid saat Anda menyeret — isian asli tetap terlihat di bawahnya hingga Anda melepaskan, karena pratinjau hanya dapat melukis di atas apa yang sudah ada, tidak pernah menghapus apa pun darinya.

## DXF — Entitas HATCH

Hatch **diimpor** dari entitas `HATCH`: KulmanLab membaca geometri batas beserta nama, skala, dan sudut pola (kode grup DXF 70/41/52) — KulmanLab **tidak** membaca definisi garis pola sendiri yang ditulis secara inline dalam file. Sebagai gantinya, nama pola dicari di pustaka pola KulmanLab sendiri (default bawaan ditambah apa pun yang telah Anda unggah di [Hatch Manager](../hatch-manager/)). Nama yang tidak ada di pustaka Anda akan kembali ke ANSI31 sehingga gambar tetap terbaca sebagai hatched, dan catatan dicatat sekali.

Loop yang dibatasi spline yang ditulis oleh aplikasi lain (tipe tepi batas DXF 4) belum dibaca.

Arsiran **diekspor** ke DXF sebagai entitas `HATCH`. Loop batasnya keluar bersama nama pola (kode grup 2), penanda isian padat (70), serta sudut dan skala arsiran itu sendiri (52/41) — dan berbeda dengan jalur impor, definisi garis pola yang sudah diuraikan juga ditulis di dalamnya (78, dengan 53/43/44/45/46/79/49). Ketimpangan itu disengaja: KulmanLab bisa menelusuri nama di pustakanya sendiri, tetapi aplikasi yang menerima berkas mungkin tidak punya pola tersebut, jadi garis-garisnya ikut serta.

## Perintah Terkait

- [Hatch Manager](../hatch-manager/) — jelajahi pustaka pola dan unggah file `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — semuanya membawa penempatan pola hatch bersama mereka
- [Delete](../delete/) — menghapus hatch tanpa memengaruhi entitas yang membentuk batasnya
