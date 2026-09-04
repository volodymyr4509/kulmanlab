---
title: "Cara menyediakan fail DXF untuk pemotongan laser"
description: "Mengapa perkhidmatan pemotongan menolak fail DXF dan cara membaiki fail anda — kontur tertutup, unit, kerf dan lapisan. Percuma dalam pelayar."
keywords: [DXF pemotongan laser, menyediakan DXF laser, format fail potong laser, DXF ditolak laser, kontur tertutup DXF, kerf potong laser, penyediaan fail laser, unit DXF laser, lapisan potong ukir, editor DXF percuma]
date: 2026-09-02
author: KulmanLab
tag: Panduan
---

Sebuah DXF untuk pemotongan laser memerlukan empat perkara: kontur tertutup, unit yang betul, geometri potongan sahaja — tanpa dimensi, nota atau lorekan — serta lapisan yang memisahkan potongan, guratan dan ukiran. Panduan ini membincangkan setiap satu, dan cara memeriksa fail anda sebelum sesebuah perkhidmatan menolaknya.

Semua ini boleh anda lakukan secara percuma dalam pelayar di [app.kulmanlab.com](https://app.kulmanlab.com): tiada apa untuk dipasang, tiada akaun, dan fail tidak pernah meninggalkan komputer anda. Inilah aliran kerja yang menjadi sebab asal kami membina KulmanLab, jadi batasan yang terpakai pada tugasan CAD lain kebanyakannya tidak terpakai di sini: pemotongan laser bersifat dua dimensi, dan DXF ialah apa yang dikehendaki oleh perkhidmatan pemotongan.

## Mengapa fail ditolak

Lima sebab menjelaskan hampir kesemuanya.

**Kontur terbuka.** Bentuk yang kelihatan tertutup tetapi mempunyai celah sehalus rambut di satu sudut bukanlah suatu kawasan — ia himpunan garis yang tidak bersambung. Mesin pemotong perlu tahu apa yang di dalam dan apa yang di luar, dan kontur terbuka tiada bahagian dalam. Inilah sebab penolakan paling lazim, jauh mengatasi yang lain.

**Unit salah atau kabur.** DXF tidak merekodkan secara boleh dipercayai apa maksud nombornya. Fail yang sama boleh jadi dalam milimeter, sentimeter, inci atau kaki, dan selalunya fail itu tidak menyatakan yang mana. Bahagian yang tiba 25.4 kali lebih besar atau lebih kecil berpunca daripada ini.

**Segala yang bukan geometri.** Dimensi, kepala lukisan, nota, lorekan, garis binaan. Mesin akan dengan rela mencuba memotong catatan anda.

**Garis berganda.** Dua garis serupa bertindih bermakna laser melalui laluan yang sama dua kali: masa terbuang, tepi hangus, dan pada bahan nipis terdapat risiko kebakaran.

**Semuanya pada satu lapisan.** Jika potongan, guratan dan ukiran tidak dipisahkan, perkhidmatan tidak dapat membezakannya dan akan meminta anda menghantar semula.

## Menyediakan fail

Seret fail `.dxf` anda ke kanvas di [app.kulmanlab.com](https://app.kulmanlab.com), atau gunakan butang **Import** dalam panel fail. Lukisan dimuatkan dan paparan dilaraskan kepadanya.

**1. Lihat apa yang sebenarnya ada.** Taip `fit` untuk membawa semuanya ke dalam paparan. Kemudian zum masuk pada setiap sudut pada setiap bahagian — celah tidak kelihatan pada skala lukisan penuh dan amat jelas pada pembesaran sepuluh kali. Pemeriksaan inilah yang menyelamatkan anda daripada e-mel penolakan.

**2. Padamkan apa yang tidak sepatutnya dipotong.** Garis binaan, nota, bingkai, dimensi. `layer-isolate` memaparkan satu lapisan pada satu masa, dan begitulah sisa yang tersembunyi di bawah geometri sebenar ditemui.

**3. Tutup celah.** `trim` memangkas hujung yang terjulur di tempat dua garis bersilang melepasi satu sama lain. Di tempat garis tidak sampai, seret pemegang hujung ke jirannya — pemegang melekat, jadi hujung benar-benar bertemu dan bukan hampir bertemu.

**4. Semak ukuran.** `distance` mengukur antara dua titik, `area` mengukur kawasan tertutup daripada titik yang diklik. Ukur satu ciri yang anda tahu ukuran sebenarnya. Jika tersasar 25.4 kali, fail anda berada dalam sistem unit yang salah.

**5. Asingkan potongan, guratan dan ukiran.** Letakkan setiap operasi pada lapisannya sendiri dengan nama yang jelas: `CUT`, `SCORE`, `ENGRAVE`. Kebanyakan perkhidmatan sama ada meminta ini atau meminta fail berasingan. `layer-manager` menciptanya dan menetapkannya.

Kemudian eksport: **Export** → **DXF**. KulmanLab menulis DXF AC1032 yang ringkas, iaitu apa yang dijangka oleh perkhidmatan pemotongan dan perisian mesin.

## Kerf

Laser membuang bahan sewaktu memotong — lebih kurang 0.1 hingga 0.3 mm bergantung pada mesin, bahan dan ketebalan. Potong segi empat sama 50 mm dan anda mendapat segi empat yang sedikit lebih kecil, dan bahagian yang sepatutnya masuk ketat tidak akan muat.

Dua cara menanganinya:

**Serahkan kepada perkhidmatan.** Kebanyakan perkhidmatan pemotongan membuat pampasan kerf sendiri, dan jika begitu, pampasan daripada pihak anda menjadikan bahagian tersasar ke arah bertentangan. Tanya dahulu sebelum melaraskan apa-apa.

**Buat sendiri.** `offset` menghasilkan salinan selari sesuatu bentuk pada jarak tetap — separuh lebar kerf, ke luar bagi bahagian yang perlu kekal ukurannya, ke dalam bagi lubang. Ia berfungsi pada garis, bulatan, lengkok, elips dan poligaris. Ia mengendalikan satu objek pada satu masa, jadi praktikal untuk segelintir ciri kritikal, bukan untuk kepingan berisi dua ratus bahagian.

Jika toleransi penting, potong satu bahagian ujian sebelum melaburkan bahan.

## Apa yang perlu disemak pada eksport DXF

Berbaloi diketahui sebelum anda bergantung padanya:

- **Anotasi kini turut dieksport — bersihkan sendiri.** Teks, dimensi, penunjuk dan lorekan semuanya masuk ke dalam DXF yang dieksport. Untuk penyerahan biasa itulah yang anda mahu, tetapi bagi fail potong ia bermakna apa sahaja yang anda tinggalkan dalam lukisan benar-benar akan ada dalam fail. Eksport tidak lagi membuangnya diam-diam untuk anda, jadi padamkannya, atau simpan pada lapisan yang anda buang sebelum mengeksport.
- **Teks keluar sebagai `MTEXT`, dan itu bukan geometri yang boleh diukir.** Huruf dieksport dengan formatnya utuh, tetapi banyak perisian mesin mahukan garis luar dan bukan teks hidup pada lapisan ukiran. Semak apa yang diterima perisian anda sebelum merancang ukiran berdasarkannya.
- **Rujukan blok tidak diimport.** Lukisan yang dibina daripada simbol blok berulang masuk dalam keadaan tidak lengkap, jadi semak bilangan bahagian dengan yang asal.

Splin pula *memang* dieksport. Sesetengah perisian mesin mengendalikannya dengan lemah dan lebih gemarkan poligaris — jika begitu keadaannya, lukis semula lengkung sebagai poligaris atau lengkok.

## Amaran tentang automasi

KulmanLab **tiada pemeriksaan awal**. Tiada apa-apa yang mengimbas kontur terbuka, garis berganda atau masalah unit lalu melaporkannya. Pemeriksaan di atas dibuat secara manual: zum masuk, ukur, perhati.

Itu memadai untuk segelintir bahagian dan memenatkan untuk sekeping penuh yang tersusun rapat. Jika anda menghasilkan kepingan secara berkala, alat dengan pengesah automatik lebih sesuai untuk anda — dan bagi bahagian tunggal, iaitu keadaan kebanyakan orang pada kebanyakan masa, memerhati fail dengan teliti menangkap masalah yang sama.

## Sebelum anda menghantar

- Setiap kontur potongan tertutup — sudut diperiksa pada pembesaran tinggi
- Satu ukuran yang diketahui telah diukur dan tepat
- Tiada baki dimensi, nota, bingkai atau geometri binaan
- Tiada garis berganda bertindih
- Potongan, guratan dan ukiran pada lapisan berasingan yang jelas namanya
- Kerf: sama ada digunakan, atau sengaja diserahkan kepada perkhidmatan
- Dieksport sebagai DXF dan dibuka semula sekali untuk memastikan ia betul

Butiran terakhir itu memakan sepuluh saat dan menangkap kejutan eksport sebelum perkhidmatan menemuinya.

---

*Berkaitan: [Import](/ms/docs/commands/import/) untuk apa yang dibaca KulmanLab daripada DXF, [Export Manager](/ms/docs/commands/export-manager/) untuk kandungan tepat setiap format eksport, [Offset](/ms/docs/commands/offset/) untuk pampasan kerf, dan [LayerManager](/ms/docs/commands/layer-manager/) untuk menyediakan lapisan potongan dan ukiran.*
