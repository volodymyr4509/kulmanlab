---
title: "Mengapa DXF Anda Terbuka pada Saiz yang Salah (dan Cara Membaikinya)"
description: "DXF yang terbuka 25.4 kali lebih kecil atau 1000 kali lebih besar ialah ketidakpadanan unit, bukan fail rosak. Cara mengenal pasti nisbah, menskala semula dan menyemak."
keywords: [DXF skala salah, DXF saiz salah, unit DXF, DXF mm atau inci, DXF diimport terlalu kecil, faktor skala DXF, DXF 25.4, membaiki skala DXF, unit DXF tidak padan, menskala semula DXF]
date: 2026-09-04
author: KulmanLab
tag: Panduan
---

Sebuah DXF terbuka dan bahagian yang sepatutnya selebar 40 mm terukur 1.575. Atau sebuah pelan lantai tiba sebesar satu blok bandar. Failnya tidak rosak dan tiada siapa buat silap — lukisannya betul, dan yang hilang di pertengahan jalan ialah nombor yang mengiringinya.

Ini berbaloi difahami sebelum anda menskala semula apa-apa, kerana pembetulannya mengambil sepuluh saat sebaik anda tahu nisbah mana yang dihadapi, dan meneka-neka itulah cara memotong saiz yang salah dua kali.

## DXF hampir tidak membawa unit

DXF menyimpan koordinat sebagai nombor semata-mata. Satu garis dari `0,0` ke `40,0` panjangnya empat puluh *sesuatu*. Format ini tidak melekatkan unit pada koordinat, dan memang tiada tempat untuknya — nombor itulah geometrinya.

Yang paling hampir ialah pemboleh ubah pengepala bernama `$INSUNITS`, satu kod untuk keseluruhan fail: `1` untuk inci, `4` untuk milimeter, `6` untuk meter, dan seterusnya. Dua perkara menjadikannya lebih lemah daripada bunyinya. Ia satu nilai untuk satu lukisan penuh, jadi tidak mampu menggambarkan fail yang dicantum daripada sumber bercampur. Dan ia bersifat nasihat, bukan janji: banyak aplikasi membacanya hanya ketika *menyisipkan* satu lukisan ke dalam lukisan lain, dan mengabaikannya sepenuhnya apabila anda sekadar membuka fail — atas alasan munasabah bahawa orang yang membuka lukisan biasanya tahu apa yang dilukisnya.

Maka "40" tiba dengan utuh dan "milimeter" tidak. Setiap DXF bersaiz salah yang bakal anda terima ialah ayat itu.

## Kenal pasti nisbah dahulu

Ukur satu ciri yang anda benar-benar tahu saiz sebenarnya — diameter lubang, tepi kepingan, jarak pemasangan piawai. Bahagikan saiz yang sepatutnya dengan saiz yang terukur. Hasilnya hampir selalu salah satu daripada ini:

| Nisbah | Apa yang berlaku |
|---|---|
| **25.4** | Dilukis dalam inci, dibaca sebagai milimeter |
| **0.03937** | Dilukis dalam milimeter, dibaca sebagai inci |
| **1000** | Dilukis dalam meter, dibaca sebagai milimeter |
| **0.001** | Dilukis dalam milimeter, dibaca sebagai meter |
| **12** | Kaki dibaca sebagai inci |
| **304.8** | Kaki dibaca sebagai milimeter |

Jika nombor anda ada di situ, anda hanya menghadapi ketidakpadanan unit dan tiada yang lain, dan bakinya mengambil seminit.

Jika tiada — katakan 1.37, atau 3.2 — berhenti. Itu bukan masalah unit, dan menskala semula akan menghasilkan lukisan yang salah dengan cara yang jauh lebih sukar dikesan. Lompat ke bahagian terakhir.

## Pembetulannya

Anda perlukan sesuatu yang mengukur dan sesuatu yang menskala. Mana-mana alat CAD boleh; ini caranya dalam [KulmanLab](https://kulmanlab.com/ms/), yang membuka DXF dalam tab pelayar tanpa memasang apa-apa:

1. Buka failnya — seret ke halaman, atau guna [Import](/ms/docs/commands/import/).
2. Jalankan [Distance](/ms/docs/commands/distance/) dan pilih kedua-dua hujung ciri yang anda tahu. Snap penting di sini: tangkap titik hujung yang sebenar, bukan berdekatannya, kalau tidak anda membakar ralat anda sendiri ke dalam faktor itu.
3. Bahagikan. Saiz diketahui ÷ saiz terukur. Lubang 40 mm yang menunjukkan 1.575 memberi 40 ÷ 1.575 ≈ **25.4**.
4. Pilih semuanya, jalankan [Scale](/ms/docs/commands/scale/), tetapkan titik asas, dan taip faktornya.

Titik asas kekal tetap sementara semua yang lain bergerak, jadi letakkannya di tempat yang boleh anda fikirkan — satu bucu bahagian, atau titik asalan. Bagi lukisan yang bakal dihantar untuk pemotongan, titik asalan biasanya pilihan yang wajar.

Membantu juga bahawa KulmanLab tiada tetapan unitnya sendiri. Koordinat hanyalah nombor, dan itulah tepatnya keadaan yang anda mahukan pada sebuah lukisan sementara anda memikirkan apa makna nombor-nombornya. Tiada penukaran berlaku di belakang anda dan tiada apa untuk dilawan.

## Semak pembetulan sebelum mempercayainya

Ukur ciri *kedua*, di tempat lain dalam lukisan, yang saiz sebenarnya juga anda tahu. Kemudian semak.

Inilah langkah yang orang tinggalkan, dan satu-satunya yang menangkap kes buruk. Jika ukuran kedua kini betul, lukisan itu seragam berada dalam unit yang salah dan kini seragam dalam unit yang betul. Selesai.

Jika ukuran kedua *masih* salah, dan salah dengan jumlah yang berbeza, ini tidak pernah menjadi ketidakpadanan unit yang mudah. Anda baru sahaja menskala lukisan yang tidak konsisten, dan itu lebih buruk daripada tempat anda bermula, kerana ralatnya bukan lagi nisbah bersih yang boleh dikesan sesiapa.

[Area](/ms/docs/commands/area/) ialah pendapat kedua yang berguna di sini, terutamanya pada bahan kepingan. Luas berskala mengikut *kuasa dua* faktor, jadi ralat panjang 25.4 muncul sebagai ralat luas 645 — percanggahan yang sukar dinafikan sendiri.

## Mengelakkannya kali berikutnya

Unit hilang antara manusia, jadi penyelesaiannya juga tinggal di situ.

**Nyatakan unit ketika menghantar fail.** Satu baris dalam mesej. "Semua dimensi dalam mm." Tidak membebankan apa-apa dan menghapuskan seluruh masalah.

**Hantar satu dimensi rujukan bersamanya.** Beritahu satu ukuran sebenar — "plat luar selebar 300 mm". Kini penerima boleh mengesahkan fail itu dan bukan mengandaikannya, dan jika ada yang tersasar dia membetulkannya dalam seminit tanpa kembali kepada anda.

**Bertanyalah, apabila andalah penerimanya.** Jika fail tiba tanpa unit dinyatakan dan anda bakal memotong bahan, satu mesej lebih murah daripada satu kepingan yang rosak.

**Lukis dalam unit yang dijangka oleh keluaran anda.** Pemotongan laser, CNC dan kebanyakan aliran fabrikasi menjangkakan milimeter. Jika fail itu menuju ke sana, lukislah dalam milimeter dan tiada penukaran tertinggal untuk disalahkan. Lihat [menyediakan DXF untuk pemotongan laser](/ms/blog/prepare-dxf-for-laser-cutting/).

## Apabila ia bukan masalah unit

Jika nisbah anda bukan penukaran unit yang bersih, punca yang berkemungkinan adalah berlainan jenis:

- **Lukisan mencampurkan skala.** Seseorang melukis sebahagiannya pada 1:1 lalu menampal butiran pada 1:5, atau sebuah blok disisipkan dengan faktor skala dan tidak pernah dibetulkan. Baiki geometri yang bermasalah, bukan keseluruhan fail.
- **Anda mengukur geometri ruang kertas.** Kepala lukisan atau bingkai anotasi dilukis mengikut saiz helaian, bukan saiz model. Ukurlah sesuatu yang menjadi sebahagian daripada objek sebenar.
- **Anda mengukur benda yang salah.** Lubang nominal 40 mm mungkin dilukis pada 39.8 demi kesesuaian, dan panel "300 mm" mungkin berukuran 300 hingga ke sisi luar sesuatu takuk yang tidak anda lihat. Pilih ciri yang tepinya jelas.

Dalam setiap kes itu jawapannya ialah mencari tahu lukisan itu sebenarnya apa, bukan menskalanya. Lukisan yang bahagian-bahagiannya bercanggah antara satu sama lain akan terus memakan bahan anda sehingga ada orang membukanya dan melihat.

---

*Berkaitan: [Distance](/ms/docs/commands/distance/) untuk mengukur, [Scale](/ms/docs/commands/scale/) untuk pembetulan, [Area](/ms/docs/commands/area/) untuk pendapat kedua, dan [Export Manager](/ms/docs/commands/export-manager/) untuk apa yang dibawa setiap format apabila anda menghantarnya semula.*
