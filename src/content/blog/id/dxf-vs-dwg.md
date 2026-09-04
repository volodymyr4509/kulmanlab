---
title: "DXF vs DWG: apa bedanya?"
description: "DWG adalah format asli AutoCAD, DXF format pertukaran yang terbuka. Apa yang benar-benar berbeda, mana yang Anda butuhkan, dan cara memperoleh DXF bila dikirimi DWG."
keywords: [DXF vs DWG, beda DXF dan DWG, DWG atau DXF, apa itu DWG, apa itu DXF, DWG ke DXF, format file CAD, membuka file DWG, format DXF, format CAD mana]
date: 2026-09-02
author: KulmanLab
tag: Panduan
---

DWG adalah format file asli AutoCAD: biner, milik pribadi, dan tidak didokumentasikan oleh Autodesk. DXF adalah format pertukaran yang Autodesk terbitkan supaya program lain bisa membaca gambar yang sama. Geometri yang sama, wadah yang berbeda — dan hanya satu di antaranya yang dirancang untuk menyerahkan file kepada orang di luar perangkat lunak Anda sendiri.

Poin terakhir itulah seluruh perbedaan praktisnya, dan itu pula yang menentukan apa yang sebaiknya Anda minta.

## Versi ringkasnya

| | DXF | DWG |
|---|---|---|
| Kepanjangan | Drawing Exchange Format | Drawing |
| Spesifikasi terbit | Ya, dari Autodesk | Tidak |
| Pengodean | Teks (ada juga varian biner) | Biner |
| Tujuan | Memindahkan gambar antarprogram | Format kerja milik AutoCAD sendiri |
| Ukuran file | Lebih besar | Lebih kecil |
| Dibaca perangkat lunak lain | Sangat luas | Tidak merata, lewat pustaka hasil rekayasa balik |
| Membawa semua kemampuan AutoCAD | Tidak — sebuah himpunan bagian yang terdokumentasi | Ya |

## Mengapa ada dua format sama sekali

Autodesk merilis AutoCAD pada 1982 dengan DWG sebagai format kerjanya. Ia dibangun demi kenyamanan satu program saja: ringkas, biner, dan bebas berubah kapan pun AutoCAD memerlukannya.

Itu membuatnya buruk untuk dikirimkan kepada siapa pun. Maka Autodesk juga menerbitkan DXF — gambar yang sama, ditulis dalam bentuk terdokumentasi dan terbaca yang bisa dijadikan acuan oleh pengembang mana pun. Buka sebuah `.dxf` di editor teks dan Anda akan melihat kode grup serta nama bagian dalam ASCII biasa.

Keduanya diberi versi beriringan. Setiap rilis AutoCAD membawa revisi DWG dan revisi DXF yang bersesuaian; penanda `AC1032` yang kadang terlihat di kepala sebuah file menunjuk, misalnya, ke generasi AutoCAD 2018.

Jadi DXF bukan format yang lebih tua atau lebih rendah. Ia gambar yang sama, sengaja dibuat terbaca.

## Apa yang sungguh berbeda dalam praktik

**Keterbukaan.** Autodesk mendokumentasikan DXF dan tidak mendokumentasikan DWG. Program yang membaca DWG — dan jumlahnya banyak — bersandar pada pustaka yang lahir dari rekayasa balik terhadap formatnya. Itu bekerja baik dan sepenuhnya sah, tetapi berarti dukungan DWG tertinggal dari rilis baru dan berbeda-beda antaraplikasi, sementara dukungan DXF bisa diterapkan siapa saja langsung dari spesifikasinya.

**Ukuran.** DWG biner biasanya jauh lebih kecil daripada gambar yang sama dalam DXF ASCII. Pada proyek besar itu berarti; pada satu komponen tidak.

**Kesetiaan.** DWG menampung segala yang bisa diungkapkan AutoCAD, termasuk jenis objek yang bahkan tak dikenal program lain. DXF mencakup himpunan bagian yang terdokumentasi. Untuk penggambaran 2D biasa — garis, busur, lingkaran, polyline, teks, dimensi, layer — himpunan itu sudah semua yang Anda butuhkan. Untuk model yang bersandar pada objek milik AutoCAD, mengekspor ke DXF akan kehilangan sebagian.

**Luas dukungan.** Praktis setiap perangkat CAD, CAM, dan vektor membaca DXF. Lebih sedikit yang membaca DWG, dan yang membaca pun sering mendukungnya secara kurang lengkap.

## Sebenarnya Anda butuh yang mana?

**Ada yang mengirimi Anda file dan Anda tak bisa membukanya.** Periksa dulu ekstensi yang sebenarnya. Kebanyakan orang menyebut keduanya "DWG", dan separuh waktu yang ada di folder unduhan Anda adalah `.dxf` yang sedari awal bisa Anda buka. Lihat [membuka DXF tanpa AutoCAD](/id/blog/open-dxf-file-without-autocad/).

**Anda mengirim ke potong laser, bengkel CNC, atau pabrikator.** DXF, hampir selalu. Perangkat lunak mesin dan jasa pemotongan dibangun di sekitarnya, dan geometri potong 2D masuk dengan longgar ke dalam himpunan bagian yang terdokumentasi. Lihat [menyiapkan DXF untuk potong laser](/id/blog/prepare-dxf-for-laser-cutting/).

**Anda mengirim ke arsitek atau insinyur yang bekerja di AutoCAD.** Tanyakan. Banyak yang lebih suka DWG karena alur kerja mereka mengharapkannya, dan kalau tidak, mereka membuka DXF dengan baik-baik saja.

**Anda mengarsipkan sesuatu untuk jangka panjang.** DXF. Format teks yang terdokumentasi masih akan terbaca dua puluh tahun lagi oleh siapa pun yang punya spesifikasi dan editor teks. Argumen itulah alasan keberadaan format pertukaran.

**Ada yang cuma ingin melihatnya.** Bukan keduanya — kirim PDF. Lihat [mengubah DXF menjadi PDF](/id/blog/convert-dxf-to-pdf/).

## Cara memperoleh DXF ketika Anda dikirimi DWG

Jalur yang andal adalah meminta. Orang yang mengirim file membukanya di program CAD miliknya lalu melakukan *Save As* atau *Export* → DXF. Butuh sekitar sepuluh detik, setiap aplikasi CAD desktop bisa melakukannya, dan file itu keluar dari perangkat lunak yang membuatnya, bukan dari terkaan pihak ketiga tentangnya.

Kalau bertanya bukan pilihan, konverter memang ada. Dua hal untuk ditimbang: konversi adalah tempat kesetiaan hilang, dan Anda mengunggah gambar milik orang lain ke layanan yang tak Anda kendalikan. Untuk proyek hobi tak masalah. Untuk pekerjaan klien, tanyakan.

Saat meminta, sebaiknya sebutkan versinya. **DXF R12 paling aman** — sangat tua, didukung di mana-mana, dan kalau gambarnya geometri 2D biasa tidak ada yang penting hilang. Perangkat lunak mesin lawas khususnya jauh lebih akrab dengannya.

## Dua hal yang sering disalahpahami

**"DXF itu lossy."** Hanya dalam arti ia tidak membawa jenis objek milik AutoCAD. Garis, busur, lingkaran, polyline, teks, dimensi, dan layer lewat dengan utuh. Untuk pekerjaan penggambaran 2D, kehilangannya biasanya nol.

**"DXF itu format lama."** Ia diberi versi berdampingan dengan DWG sejak 1982 dan masih begitu. Kebingungannya lahir karena R12 begitu luas dipakai sebagai sasaran kompatibilitas sampai orang mengira DXF berhenti di situ.

## Di mana posisi alat ini

[KulmanLab](https://kulmanlab.com/id/) membaca **DXF, bukan DWG**, dan alasannya layak dikatakan alih-alih diperlakukan sebagai kelalaian: DXF terdokumentasi, jadi sebuah implementasi bisa benar cukup dengan membaca spesifikasinya. DWG berarti bergantung pada pustaka hasil rekayasa balik, di dalam browser, untuk format yang berubah menurut jadwal Autodesk.

Kalau file Anda `.dwg`, ini tidak akan membukanya. Kalau `.dxf`, Anda bisa membukanya di tab browser tanpa memasang apa pun: [app.kulmanlab.com](https://app.kulmanlab.com).

Yang ditulis balik adalah keseluruhan gambar — garis, lingkaran, busur, elips, polyline, spline, teks beserta formatnya, dimensi, leader, dan arsiran, berikut layer dan tipe garis. Berkas yang dibuka di sini lalu diekspor kembali keluar dengan anotasinya, bukan tersisa geometri saja.

---

*Terkait: [Import](/id/docs/commands/import/) untuk apa persisnya yang dibaca KulmanLab dari sebuah DXF, dan [Export Manager](/id/docs/commands/export-manager/) untuk isi tiap format ekspor.*
