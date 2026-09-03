---
title: "DXF dan DWG: apa bezanya?"
description: "DWG ialah format asli AutoCAD, DXF pula format pertukaran terbuka. Apa yang berbeza, yang mana anda perlukan, dan cara mendapatkan DXF apabila dihantar DWG."
keywords: [DXF dan DWG, beza DXF DWG, DWG atau DXF, apa itu DWG, apa itu DXF, DWG ke DXF, format fail CAD, membuka fail DWG, format DXF, format CAD mana]
date: 2026-09-02
author: KulmanLab
tag: Panduan
---

DWG ialah format fail asli AutoCAD: binari, milik persendirian, dan tidak didokumentasikan oleh Autodesk. DXF pula ialah format pertukaran yang diterbitkan Autodesk supaya program lain boleh membaca lukisan yang sama. Geometri yang sama, bekas yang berbeza — dan hanya satu daripadanya direka untuk menyerahkan fail kepada orang di luar perisian anda sendiri.

Perkara terakhir itulah keseluruhan perbezaan praktikalnya, dan itulah yang menentukan apa yang patut anda minta.

## Ringkasnya

| | DXF | DWG |
|---|---|---|
| Singkatan bagi | Drawing Exchange Format | Drawing |
| Spesifikasi diterbitkan | Ya, oleh Autodesk | Tidak |
| Pengekodan | Teks (ada juga varian binari) | Binari |
| Tujuan | Memindahkan lukisan antara program | Format kerja milik AutoCAD sendiri |
| Saiz fail | Lebih besar | Lebih kecil |
| Dibaca oleh perisian lain | Amat meluas | Tidak sekata, melalui pustaka hasil kejuruteraan balikan |
| Membawa segala yang AutoCAD mampu | Tidak — satu subset yang berdokumen | Ya |

## Mengapa wujud dua format

Autodesk mengeluarkan AutoCAD pada 1982 dengan DWG sebagai format kerjanya. Ia dibina untuk keselesaan satu program: padat, binari, dan bebas berubah bila-bila AutoCAD memerlukannya.

Itu menjadikannya benda yang buruk untuk dihantar kepada sesiapa. Maka Autodesk turut menerbitkan DXF — lukisan yang sama, ditulis dalam bentuk berdokumen dan boleh dibaca, yang boleh dijadikan sandaran oleh mana-mana pembangun. Buka sebuah `.dxf` dalam penyunting teks, dan anda akan nampak kod kumpulan serta nama bahagian dalam ASCII biasa.

Kedua-duanya diberi versi seiring. Setiap keluaran AutoCAD membawa semakan DWG dan semakan DXF yang sepadan; penanda `AC1032` yang kadangkala kelihatan pada kepala fail menandakan, contohnya, generasi AutoCAD 2018.

Jadi DXF bukanlah format yang lebih tua atau lebih rendah. Ia lukisan yang sama, sengaja dijadikan boleh dibaca.

## Apa yang benar-benar berbeza dalam amalan

**Keterbukaan.** Autodesk mendokumenkan DXF dan tidak mendokumenkan DWG. Program yang membaca DWG — dan banyak yang membacanya — bersandar pada pustaka yang lahir daripada kejuruteraan balikan terhadap format itu. Ia berfungsi baik dan sah sepenuhnya, tetapi bermakna sokongan DWG ketinggalan di belakang keluaran baharu dan berbeza-beza antara aplikasi, sedangkan sokongan DXF boleh dilaksanakan sesiapa sahaja terus daripada spesifikasi.

**Saiz.** DWG binari lazimnya jauh lebih kecil daripada lukisan yang sama dalam DXF ASCII. Pada projek besar itu penting; pada satu bahagian tidak.

**Kesetiaan.** DWG menyimpan segala yang mampu diungkapkan AutoCAD, termasuk jenis objek yang program lain langsung tiada konsepnya. DXF merangkumi satu subset berdokumen. Untuk lukisan 2D biasa — garis, lengkok, bulatan, poligaris, teks, dimensi, lapisan — subset itu sudah memadai. Bagi model yang bersandar pada objek milik AutoCAD, mengeksport ke DXF akan kehilangan sebahagiannya.

**Keluasan sokongan.** Hampir setiap alat CAD, CAM dan vektor membaca DXF. Lebih sedikit yang membaca DWG, dan yang membacanya pun sering menyokongnya secara kurang lengkap.

## Yang mana sebenarnya anda perlukan?

**Seseorang menghantar fail dan anda tidak dapat membukanya.** Periksa dahulu sambungan fail yang sebenar. Kebanyakan orang menyebut kedua-duanya "DWG", dan separuh masa apa yang ada dalam folder muat turun anda ialah `.dxf` yang memang sudah boleh anda buka. Lihat [membuka DXF tanpa AutoCAD](/ms/blog/open-dxf-file-without-autocad/).

**Anda menghantar kepada pemotongan laser, bengkel CNC atau pembuat.** DXF, hampir selalu. Perisian mesin dan perkhidmatan pemotongan dibina di sekelilingnya, dan geometri potongan 2D duduk dengan selesa dalam subset berdokumen itu. Lihat [menyediakan DXF untuk pemotongan laser](/ms/blog/prepare-dxf-for-laser-cutting/).

**Anda menghantar kepada arkitek atau jurutera yang bekerja dalam AutoCAD.** Tanyalah. Ramai lebih suka DWG kerana aliran kerja mereka menjangkakannya, dan jika tidak, mereka membuka DXF dengan baik sahaja.

**Anda mengarkibkan sesuatu untuk jangka panjang.** DXF. Format teks berdokumen masih boleh dibaca dua puluh tahun lagi oleh sesiapa yang mempunyai spesifikasi dan penyunting teks. Hujah itulah sebab wujudnya format pertukaran.

**Seseorang cuma mahu melihatnya.** Bukan kedua-duanya — hantar PDF. Lihat [menukar DXF kepada PDF](/ms/blog/convert-dxf-to-pdf/).

## Cara mendapatkan DXF apabila anda dihantar DWG

Jalan yang boleh dipercayai ialah meminta. Orang yang menghantar fail itu membukanya dalam program CAD miliknya lalu membuat *Save As* atau *Export* → DXF. Ia mengambil kira-kira sepuluh saat, setiap aplikasi CAD desktop mampu melakukannya, dan fail itu keluar daripada perisian yang menciptanya, bukan daripada tekaan pihak ketiga tentangnya.

Jika bertanya bukan pilihan, penukar memang ada. Dua perkara untuk ditimbang: penukaran itulah tempat kesetiaan hilang, dan anda memuat naik lukisan orang lain ke perkhidmatan yang anda tidak kawal. Untuk projek hobi tidak mengapa. Untuk kerja pelanggan, tanyalah.

Ketika meminta, elok sebut versinya. **DXF R12 paling selamat** — sangat lama, disokong di mana-mana, dan jika lukisan itu geometri 2D biasa, tiada apa yang penting hilang. Perisian mesin lama khususnya jauh lebih serasi dengannya.

## Dua perkara yang orang salah faham

**"DXF hilang maklumat."** Hanya dalam erti ia tidak membawa jenis objek milik AutoCAD. Garis, lengkok, bulatan, poligaris, teks, dimensi dan lapisan menyeberang dengan utuh. Bagi kerja lukisan 2D, kehilangannya lazimnya sifar.

**"DXF ialah format lama."** Ia diberi versi seiring dengan DWG sejak 1982 dan masih begitu. Kekeliruan itu timbul kerana R12 digunakan begitu meluas sebagai sasaran keserasian sehingga orang menyangka DXF berhenti di situ.

## Di mana kedudukan alat ini

[KulmanLab](https://kulmanlab.com/ms/) membaca **DXF, bukan DWG**, dan sebabnya berbaloi dinyatakan dan bukan dianggap kecuaian: DXF berdokumen, jadi sesuatu pelaksanaan boleh menjadi betul hanya dengan membaca spesifikasi. DWG bermakna bergantung pada pustaka hasil kejuruteraan balikan, di dalam pelayar, bagi format yang berubah mengikut jadual Autodesk.

Jika anda ada `.dwg`, ini tidak akan membukanya. Jika anda ada `.dxf`, anda boleh membukanya dalam tab pelayar tanpa memasang apa-apa: [app.kulmanlab.com](https://app.kulmanlab.com).

Apa yang ditulis semula ialah geometri berserta teks — garis, bulatan, lengkok, elips, poligaris, splin dan teks, bersama lapisan dan jenis garis. Lorekan, dimensi dan penunjuk buat masa ini tidak sampai ke dalam DXF yang dieksport.

---

*Berkaitan: [Import](/ms/docs/commands/import/) untuk apa tepatnya yang dibaca KulmanLab daripada DXF, dan [Export Manager](/ms/docs/commands/export-manager/) untuk kandungan setiap format eksport.*
