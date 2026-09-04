---
title: "Cara membuka fail DXF tanpa AutoCAD"
description: "Menerima fail .dxf tetapi tiada AutoCAD? Bukanya secara percuma dalam pelayar tanpa pemasangan — serta alternatif desktop dan penyelesaian bagi lukisan kosong."
keywords: [cara buka fail DXF, buka DXF tanpa AutoCAD, pemapar DXF percuma, lihat DXF dalam talian, buka DXF dalam pelayar, DXF viewer percuma, bagaimana membuka DXF, membaca fail DXF, DXF atau DWG, buka DXF pada Mac]
date: 2026-08-31
author: KulmanLab
tag: Panduan
---

Untuk membuka fail DXF tanpa AutoCAD, seret sahaja fail itu ke dalam editor CAD yang berjalan dalam pelayar — tiada apa-apa untuk dipasang dan tiada akaun untuk dibuka. Program desktop percuma seperti LibreCAD dan QCAD turut membuka DXF. Panduan ini merangkumi kedua-dua jalan, serta apa yang perlu dilakukan apabila lukisan terbuka kosong, terlalu kecil atau kehilangan teksnya.

Kami membangunkan salah satu alat di bawah — [KulmanLab](https://kulmanlab.com/ms/) — jadi anggap bahagian itu sebagai bahagian yang berat sebelah, dan batasan yang disenaraikan di situ sebagai bahagian yang memaksa kami berterus terang.

## Apa sebenarnya fail DXF itu

DXF ialah singkatan bagi *Drawing Exchange Format* (format pertukaran lukisan). Autodesk menciptanya supaya program CAD boleh menghulurkan lukisan antara satu sama lain, dan ia sengaja dibuat terbuka serta berasaskan teks — anda benar-benar boleh membuka `.dxf` dalam editor teks dan membacanya.

Keterbukaan itulah sebabnya anda mempunyai pilihan. DXF tidak terikat kepada mana-mana program tunggal, dan berpuluh alat mampu membacanya.

Ia juga sebabnya DXF bukan sebuah imej. Ia menyimpan geometri — garis, lengkok, bulatan, lapisan, dimensi — bukan piksel. Menukar namanya kepada `.jpg` tidak akan membuatnya terbuka dalam pemapar imej.

## Pilihan 1: buka dalam pelayar

Jalan terpantas, kerana tiada apa-apa untuk dimuat turun dan tiada pendaftaran.

1. Pergi ke [app.kulmanlab.com](https://app.kulmanlab.com).
2. Seret fail `.dxf` anda terus ke atas kanvas — atau gunakan butang **Import** (ikon folder) dalam panel fail.
3. Lukisan dimuatkan dan paparan dilaraskan kepadanya secara automatik.

Fail anda tidak pernah meninggalkan komputer anda. KulmanLab berjalan sepenuhnya dalam pelayar, jadi lukisan dihurai secara setempat dan bukannya dimuat naik ke pelayan.

Dari situ anda boleh mengalih dan mengezum, menghidup dan mematikan lapisan, mengukur jarak dan sudut, menyunting geometri, serta mengeksport ke PDF, PNG, JPEG atau WebP jika anda hanya perlukan sesuatu yang boleh dicetak untuk dihantar.

**Apa yang dibaca daripada DXF:** garis, bulatan, lengkok, elips, poligaris, splin, teks, dimensi, penunjuk berbilang dan lorekan, di samping jadual lapisan dan jenis garis fail tersebut.

**Apa yang ditulis semula:** senarai yang sama. Sunting lukisan lalu eksport, dan geometri, teks berserta formatnya, dimensi, penunjuk serta lorekan semuanya kembali ke dalam DXF, dengan jadual lapisan dan jenis garis utuh — jadi fail itu menyelesaikan perjalanan pergi balik tanpa kehilangan anotasinya.

**Di mana kelemahannya — baca ini sebelum bergantung padanya:**

- **2D sahaja.** DXF yang mengandungi pepejal atau jejaring 3D ialah fail yang salah untuk alat ini.
- **Tiada blok.** Rujukan blok (`INSERT`) tidak dihurai, jadi lukisan yang dibina daripada simbol blok berulang akan masuk secara tidak lengkap.
- **DXF, bukan DWG.** Lihat bahagian DWG di bawah.
- **Pelayar desktop sahaja** — Chrome, Firefox, Safari dan Edge. Tiada versi mudah alih.

Jika mana-mana perkara itu penentu bagi anda, salah satu alat desktop di bawah akan lebih sesuai.

## Pilihan 2: program desktop percuma

Pemasangannya berbaloi jika anda akan melakukan ini dengan kerap, atau jika fail anda menggunakan ciri yang tidak mampu ditangani oleh alat dalam pelayar.

**LibreCAD** — percuma dan sumber terbuka, 2D sahaja, berjalan pada Windows, macOS dan Linux. Paling hampir dengan lukisan kejuruteraan 2D klasik, dan editor DXF yang kukuh.

**QCAD** — enjin asal LibreCAD berkembang daripadanya. Edisi komuniti percuma serta versi Pro berbayar dengan ciri tambahan.

**FreeCAD** — percuma dan sumber terbuka, ditujukan untuk pemodelan parametrik 3D tetapi mampu mengimport DXF. Terlebih jika anda hanya mahu melihat lukisan 2D, dan lengkung pembelajarannya curam.

**Autodesk Viewer** — pemapar web percuma milik Autodesk sendiri. Untuk paparan sahaja, dan memerlukan log masuk dengan akaun Autodesk.

**Inkscape** — bukan CAD, tetapi ia mengimport DXF dan merupakan pilihan munasabah jika yang anda perlukan hanyalah melihat bentuk atau menukarnya kepada SVG.

## "Sebenarnya ia DWG, bukan?"

Selalunya, ya. DXF dan DWG kedua-duanya format Autodesk dan namanya sering bertukar ganti, tetapi ia bukan perkara yang sama:

| | DXF | DWG |
|---|---|---|
| Format | Terbuka, berasaskan teks | Milik persendirian, binari |
| Tujuan | Pertukaran antara program | Format asli AutoCAD |
| Sokongan di tempat lain | Luas | Terhad dan sering tidak sempurna |

Periksa sambungan fail yang sebenar sebelum anda memburu pemapar. Jika ia `.dwg`, alat di atas kebanyakannya tidak membantu — termasuk KulmanLab, yang menyokong DXF sahaja.

Penyelesaian yang boleh dipercayai ialah mendapatkan DXF sebagai ganti: orang yang menghantar fail itu boleh membukanya dalam program CAD mereka dan mengeksport atau *Save As* ke DXF. Hampir setiap aplikasi CAD desktop mampu melakukannya, dan ia mengambil masa kira-kira sepuluh saat. Menukar DWG sendiri dengan penukar pihak ketiga memang boleh, tetapi lebih banyak yang hilang — dan anda mengamanahkan lukisan orang lain kepada alat yang tidak dikenali.

## Apabila lukisan terbuka tetapi kelihatan salah

**Kanvas kosong.** Kebiasaannya geometri terletak jauh daripada titik asalan, jadi paparan menghala ke ruang kosong. Gunakan perintah *fit* atau *zum sempadan* untuk melompat ke lukisan. Periksa juga sama ada lapisan dimatikan — sesebuah lukisan boleh sampai dengan kebanyakan lapisannya dibekukan.

**Semuanya terlalu halus, atau besar tidak masuk akal.** DXF tidak merekodkan unitnya dengan boleh dipercayai. Lukisan yang sama mungkin dibuat dalam milimeter, sentimeter, inci atau kaki, dan fail itu sering tidak menyatakan yang mana satu. Ukur sesuatu yang anda tahu saiz sebenarnya, dan tetapkan skala berdasarkannya.

**Teks hilang atau digantikan.** Fon tidak dibenamkan dalam DXF. Jika lukisan menggunakan fon yang tiada pada mesin anda, teks akan berubah kepada fon lain atau lenyap. Memuatkan fon asal akan menyelesaikannya.

**Sebahagian lukisan tidak masuk.** Sesuatu dalam fail menggunakan jenis entiti yang tidak dibaca oleh alat anda — lazimnya blok, pepejal 3D, atau sambungan milik persendirian yang ditulis oleh program yang menghasilkannya. Cuba alat kedua sebelum membuat kesimpulan bahawa fail itu rosak.

**Tiada apa-apa yang terbuka langsung.** Sahkan bahawa fail itu benar-benar DXF: bukanya dalam editor teks biasa. DXF tulen bermula dengan kod kumpulan ASCII yang boleh dibaca dan nama bahagian seperti `SECTION` dan `HEADER`. Jika anda melihat hingar binari, ia DWG atau varian DXF binari.

## Yang mana perlu dipilih

**Hanya perlu melihatnya, sekali sahaja?** Buka dalam pelayar. Memasang keseluruhan suite CAD untuk membaca satu fail yang dihantar kepada anda bukan pertukaran yang berbaloi.

**Perlu mengukur, menanda atau mencetak?** Alat dalam pelayar mengendalikan ini dengan baik, dan mencetak ke PDF pada skala sebenar lazimnya memang itulah yang dikehendaki.

**Kerja lukisan sebenar, berulang kali?** Pasang LibreCAD atau QCAD. Perisian desktop khusus akan lebih berguna dalam jangka panjang.

**Ada DWG di tangan?** Minta DXF daripada penghantar. Ia lebih pantas dan lebih selamat daripada mana-mana laluan penukaran.

---

*Berkaitan: [Import](/ms/docs/commands/import/) untuk senarai penuh apa yang dibaca KulmanLab daripada DXF, [Export Manager](/ms/docs/commands/export-manager/) untuk kandungan setiap format eksport, dan [Print Manager](/ms/docs/commands/print-manager/) untuk keluaran PDF pada skala fizikal sebenar.*
