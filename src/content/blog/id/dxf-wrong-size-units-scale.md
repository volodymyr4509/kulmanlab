---
title: "Kenapa DXF Anda Terbuka dengan Ukuran Salah (dan Cara Memperbaikinya)"
description: "DXF yang terbuka 25,4 kali lebih kecil atau 1000 kali lebih besar adalah ketidakcocokan satuan, bukan berkas rusak. Cara mengenali rasio dan menskalakan ulang."
keywords: [DXF skala salah, DXF ukuran salah, satuan DXF, DXF mm atau inci, DXF terimpor terlalu kecil, faktor skala DXF, DXF 25.4, memperbaiki skala DXF, satuan DXF tidak cocok, menskalakan ulang DXF]
date: 2026-09-04
author: KulmanLab
tag: Panduan
---

Sebuah DXF terbuka dan bagian yang seharusnya selebar 40 mm terukur 1,575. Atau sebuah denah datang sebesar satu blok kota. Berkasnya tidak rusak dan tak seorang pun berbuat salah — gambarnya benar, dan yang hilang di jalan adalah angka yang menyertainya.

Ini layak dipahami sebelum Anda menskalakan apa pun, karena perbaikannya memakan sepuluh detik begitu Anda tahu sedang berhadapan dengan rasio yang mana, dan menebak-nebak adalah cara memotong ukuran yang salah dua kali.

## DXF nyaris tidak membawa satuan

DXF menyimpan koordinat sebagai angka telanjang. Sebuah garis dari `0,0` ke `40,0` panjangnya empat puluh *sesuatu*. Format ini tidak melekatkan satuan pada koordinat, dan memang tidak ada tempat untuk itu — angkanya *adalah* geometrinya.

Yang paling mendekati adalah sebuah variabel kepala bernama `$INSUNITS`, satu kode untuk seluruh berkas: `1` untuk inci, `4` untuk milimeter, `6` untuk meter, dan seterusnya. Dua hal membuatnya lebih lemah daripada kedengarannya. Ia satu nilai untuk satu gambar utuh, jadi tidak bisa menggambarkan berkas yang dirakit dari sumber campuran. Dan ia bersifat anjuran, bukan janji: banyak aplikasi hanya membacanya saat *menyisipkan* satu gambar ke dalam gambar lain, dan mengabaikannya sama sekali ketika Anda sekadar membuka berkas — dengan alasan masuk akal bahwa orang yang membuka sebuah gambar biasanya tahu apa yang ia gambar.

Jadi "40" sampai utuh dan "milimeter" tidak. Setiap DXF berukuran salah yang akan pernah Anda terima adalah kalimat itu.

## Kenali dulu rasionya

Ukur satu bagian yang benar-benar Anda ketahui ukuran aslinya — diameter lubang, tepi pelat, jarak pasang standar. Bagi ukuran yang seharusnya dengan ukuran yang terukur. Hasilnya hampir selalu salah satu dari ini:

| Rasio | Apa yang terjadi |
|---|---|
| **25,4** | Digambar dalam inci, dibaca sebagai milimeter |
| **0,03937** | Digambar dalam milimeter, dibaca sebagai inci |
| **1000** | Digambar dalam meter, dibaca sebagai milimeter |
| **0,001** | Digambar dalam milimeter, dibaca sebagai meter |
| **12** | Kaki dibaca sebagai inci |
| **304,8** | Kaki dibaca sebagai milimeter |

Kalau angka Anda ada di situ, yang Anda hadapi hanyalah ketidakcocokan satuan dan bukan yang lain, dan sisanya memakan satu menit.

Kalau tidak ada — misalnya 1,37, atau 3,2 — berhentilah. Itu bukan masalah satuan, dan menskalakan ulang akan menghasilkan gambar yang salah dengan cara yang jauh lebih sulit dikenali. Lompat ke bagian terakhir.

## Perbaikannya

Anda butuh sesuatu untuk mengukur dan sesuatu untuk menskalakan. Setiap perkakas CAD bisa; berikut caranya di [KulmanLab](https://kulmanlab.com/id/), yang membuka DXF di tab peramban tanpa memasang apa pun:

1. Buka berkasnya — seret ke halaman, atau gunakan [Import](/id/docs/commands/import/).
2. Jalankan [Distance](/id/docs/commands/distance/) dan pilih kedua ujung bagian yang Anda ketahui. Snap penting di sini: tangkap titik ujung yang sebenarnya, bukan sekitar situ, atau Anda memanggang galat Anda sendiri ke dalam faktornya.
3. Bagi. Ukuran yang diketahui ÷ ukuran terukur. Lubang 40 mm yang menunjukkan 1,575 memberi 40 ÷ 1,575 ≈ **25,4**.
4. Pilih semuanya, jalankan [Scale](/id/docs/commands/scale/), tentukan titik basis, lalu ketik faktornya.

Titik basis tetap diam sementara yang lain bergerak, jadi taruh di tempat yang bisa Anda nalar — sudut benda, atau titik asal. Untuk gambar yang sebentar lagi masuk ke pemotongan, titik asal biasanya pilihan yang masuk akal.

Membantu pula bahwa KulmanLab tidak punya pengaturan satuan sendiri. Koordinat hanyalah angka, dan itu persis keadaan yang Anda inginkan pada sebuah gambar saat sedang mencari tahu apa arti angka-angkanya. Tidak ada konversi berjalan di belakang Anda dan tidak ada yang perlu dilawan.

## Periksa perbaikannya sebelum mempercayainya

Ukur bagian *kedua*, di tempat lain dalam gambar, yang ukuran aslinya juga Anda ketahui. Lalu periksa.

Inilah langkah yang orang lewati, dan satu-satunya yang menangkap kasus buruk. Kalau pengukuran kedua kini keluar benar, gambarnya seragam berada di satuan yang salah dan kini seragam di satuan yang benar. Selesai.

Kalau pengukuran kedua *masih* salah, dan salah dengan besaran yang berbeda, ini tak pernah merupakan ketidakcocokan satuan yang sederhana. Anda baru saja menskalakan gambar yang tidak konsisten, dan itu lebih buruk daripada titik awal, karena galatnya bukan lagi rasio bersih yang bisa dikenali siapa pun.

[Area](/id/docs/commands/area/) adalah pendapat kedua yang berguna di sini, terutama pada material lembaran. Luas berskala menurut *kuadrat* faktor, jadi galat panjang 25,4 muncul sebagai galat luas 645 — selisih yang sulit dibantah sendiri.

## Agar tidak terulang

Satuan hilang di antara orang, jadi solusinya pun tinggal di sana.

**Sebutkan satuannya saat mengirim berkas.** Satu baris di pesan. "Semua dimensi dalam mm." Tidak berbiaya apa-apa dan menghapus seluruh masalah.

**Kirimkan sebuah dimensi acuan bersamanya.** Sebutkan satu ukuran nyata — "pelat luarnya selebar 300 mm". Kini penerima bisa memverifikasi berkasnya alih-alih mengira-ira, dan kalau memang ada yang meleset ia membetulkannya dalam semenit tanpa kembali bertanya kepada Anda.

**Bertanyalah, saat Andalah penerimanya.** Kalau berkas datang tanpa satuan yang dinyatakan dan Anda hendak memotong material, satu pesan lebih murah daripada satu lembar yang terbuang.

**Gambarlah dalam satuan yang diharapkan keluarannya.** Pemotongan laser, CNC, dan sebagian besar alur fabrikasi mengharapkan milimeter. Kalau berkasnya menuju ke sana, gambarlah dalam milimeter dan tak tersisa konversi yang bisa keliru. Lihat [menyiapkan DXF untuk pemotongan laser](/id/blog/prepare-dxf-for-laser-cutting/).

## Ketika itu bukan masalah satuan

Kalau rasio Anda bukan konversi satuan yang bersih, kemungkinan penyebabnya berbeda jenis:

- **Gambarnya mencampur skala.** Seseorang menggambar sebagian pada 1:1 lalu menempelkan detail pada 1:5, atau sebuah blok disisipkan dengan faktor skala dan tak pernah dibetulkan. Perbaiki geometri yang bersalah, bukan seluruh berkas.
- **Anda mengukur geometri ruang kertas.** Kop gambar atau bingkai anotasi digambar seukuran lembar, bukan seukuran model. Ukurlah sesuatu yang merupakan bagian dari objek sebenarnya.
- **Anda mengukur benda yang salah.** Lubang nominal 40 mm bisa digambar 39,8 demi suaian, dan panel "300 mm" bisa berukuran 300 sampai sisi luar sebuah takik yang tak terlihat. Pilih bagian dengan tepi yang tak bermakna ganda.

Pada tiap kasus itu jawabannya adalah mencari tahu gambar itu sebenarnya apa, bukan menskalakannya. Gambar yang bagian-bagiannya saling bertentangan akan terus memakan material Anda sampai ada yang membukanya dan melihat.

---

*Terkait: [Distance](/id/docs/commands/distance/) untuk mengukur, [Scale](/id/docs/commands/scale/) untuk perbaikannya, [Area](/id/docs/commands/area/) untuk pendapat kedua, dan [Export Manager](/id/docs/commands/export-manager/) untuk apa yang dibawa tiap format saat Anda mengirimkannya kembali.*
