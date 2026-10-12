---
title: "Cara Menggambar Segi Enam atau Lingkaran Baut di CAD (Polygon dan Array Polar)"
description: "Gambar poligon beraturan dari pusat dan radius atau dari satu sisi, lalu ulangi lubang pada lingkaran baut dengan array polar — gratis di browser, dengan nilai yang diketik secara tepat."
keywords: [menggambar segi enam di CAD, poligon beraturan CAD, array polar CAD, gambar lingkaran baut, pola lubang CAD, pola melingkar CAD, gambar mur segi enam, menggambar segi delapan CAD, diameter lingkaran jarak bagi PCD, alat poligon CAD gratis]
date: 2026-10-11
author: KulmanLab
tag: Panduan
---

Untuk menggambar poligon beraturan di CAD, tentukan jumlah sisi, pilih pusat, lalu radius — atau pilih satu sisi dan sisanya mengikuti. Untuk menggambar lingkaran baut, gambar satu lubang dan ulangi mengelilingi pusat dengan array polar. Panduan ini melakukan keduanya, dengan angka yang tepat, di browser pada [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, tanpa instalasi, dan berkas tidak pernah meninggalkan komputer Anda.

Kami membuat [KulmanLab](https://kulmanlab.com), jadi langkah-langkah di bawah memakai perintahnya. Gagasannya — ukuran antar sisi versus antar sudut, diameter lingkaran jarak bagi, apakah salinan ikut berputar saat mengelilingi — sama di semua program CAD.

## Menggambar poligon beraturan

Poligon beraturan memiliki sisi dan sudut yang sama: segi enam untuk mur, segi delapan untuk rambu, segi lima untuk potongan dekoratif. Di KulmanLab ini adalah perintah **Polygon**.

1. Ketik `polygon` di terminal, atau gunakan tombol Polygon di panel Shapes.
2. Masukkan **jumlah sisi** — bilangan bulat apa pun dari 3 sampai 1024 — lalu tekan **Enter**. Prompt terisi otomatis dengan jumlah yang terakhir Anda pakai.
3. **Klik pusat**, atau ketik `X,Y` untuk titik yang tepat.
4. **Klik radius**, atau ketik lalu tekan **Enter**.

Hasilnya satu polyline tertutup, sehingga semua yang bisa dilakukan pada polyline — memindah, memutar, offset, menskalakan — berfungsi.

### Antar sisi atau antar sudut?

Di sinilah orang sering tersandung. "Radius" bisa berarti dua jarak yang berbeda, dan segi enam ditentukan dengan salah satunya tergantung apa yang Anda gambar:

| | Diukur sampai | Penggunaan umum |
|---|---|---|
| **Inside aktif** (bawaan) | Sudut-sudutnya | Bentuk yang harus muat di dalam lingkaran tertentu |
| **Inside nonaktif** | Titik tengah setiap sisi | Bentuk dengan lebar antar sisi tertentu — mur, kepala baut, ukuran kunci |

Tekan `I` pada prompt radius untuk beralih. Mur segi enam dijual berdasarkan lebar antar sisinya, jadi gunakan **Inside nonaktif** dan ketik *setengahnya*. Untuk mur M8 dengan lebar antar sisi 13 mm:

1. `polygon`, lalu `6` untuk sisi, lalu klik atau ketik pusat.
2. Tekan `I` untuk menonaktifkan Inside.
3. Ketik `6.5` dan tekan **Enter**.

Sisi-sisinya berjarak tepat 13 mm; sudut-sudutnya berjarak 7,51 mm dari pusat, sekitar 15 mm antar sudut. Jika Anda mengetik radius alih-alih mengeklik, poligon berdiri dengan sisi terbawahnya mendatar, rata di bawah. Jika mengeklik, orientasinya mengikuti tempat Anda mengeklik.

### Dari satu sisi

Kadang Anda tahu panjang sisi, bukan radius — misalnya meja segi delapan dengan sisi 20 mm. Tekan `E` pada prompt titik pertama untuk beralih ke mode **Edge**, lalu pilih dua ujung satu sisi. Sudut lainnya dibangun berlawanan arah jarum jam, di sebelah kiri sisi itu. Mengetik `0,0` lalu `20,0` menempatkan sisi 20 mm di sepanjang sumbu X dengan poligon di atasnya.

## Menggambar lingkaran baut

Lingkaran baut — "PCD" pada gambar teknik — adalah cincin lubang yang berjarak sama mengelilingi sebuah pusat. Anda menggambar satu lubang lalu mengulanginya. Di KulmanLab itu adalah **ArrayPolar**.

Ambil enam lubang 6,6 mm pada diameter lingkaran jarak bagi 50 mm, berpusat di titik asal:

1. **Gambar lubang pertama.** Jalankan `circle`, ketik pusat sebagai `25` `,` `0` — setengah PCD di sepanjang sumbu X —, tekan **Enter**, lalu ketik radius `3.3` dan tekan **Enter**.
2. **Pilih** dengan mengeklik lingkaran.
3. **Jalankan array polar.** Ketik `arraypolar`, atau gunakan tombol ArrayPolar di panel Edit.
4. **Pilih pusat pola** — ketik `0,0`.
5. Terminal menampilkan array seperti saat ini — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — dan lima salinan dipratinjau langsung. Tekan **Enter** untuk menerima.

Itulah seluruh lingkaran baut. Untuk jumlah lain, tekan `I` sebelum konfirmasi dan ketik jumlah item — yang asli dihitung satu, dan sudut di antaranya dihitung otomatis. Atau tekan `A` dan ketik jarak dalam derajat; sudut isian dinyatakan ulang agar sesuai.

Beberapa detail yang penting:

- **Fill** adalah sudut dari item pertama ke terakhir. Bawaan 360° menyebarkan item di seluruh lingkaran; angka lebih kecil menyebarkannya di sebuah busur — misalnya sebaris lubang pada seperempat putaran. Sudut negatif berjalan searah jarum jam.
- **Rotate** menentukan apakah setiap salinan berputar saat mengelilingi. Untuk lubang bulat tidak ada bedanya. Untuk slot, gigi, atau braket ada: aktif — setiap salinan menghadap pusat seperti aslinya; nonaktif — setiap salinan mempertahankan orientasi aslinya dan hanya dipindahkan ke tempatnya. Tekan `R` untuk beralih sebelum konfirmasi.
- Array membuat **salinan** — yang asli tetap di tempatnya, dan setiap item adalah entitas biasa yang bisa Anda edit setelahnya.

## Gabungkan semuanya: sebuah flensa

Gambar segi enam sebagai kontur, lingkaran di tengah sebagai lubang bor, dan lingkaran baut untuk lubang pemasangan. Tiga perintah, setiap ukuran diketik secara tepat, dan tidak ada yang perlu diukur dari layar.

Jika bagian ini akan dikirim ke mesin potong laser, hapus lingkaran bantu yang Anda gambar untuk menemukan lingkaran jarak bagi — ia akan ikut dipotong seperti yang lain — dan periksa berkasnya dengan panduan kami tentang [menyiapkan DXF untuk pemotongan laser](/id/blog/prepare-dxf-for-laser-cutting/). Poligon adalah lintasan tertutup sejak awal, yang merupakan alasan paling umum layanan pemotongan menolak berkas.

## Yang tidak bisa dilakukan ini

- **Hanya poligon beraturan.** Semua sisi sama. Kontur tak beraturan — bentuk dengan beberapa sisi lebih panjang — adalah [polyline](/id/docs/commands/polyline/) yang Anda gambar titik demi titik.
- **Hanya 2D.** Ini menggambar kontur datar. Anda tidak akan mendapat mur ber-model atau baut berulir.
- **Hanya browser desktop** — Chrome, Firefox, Safari, dan Edge. Tidak ada versi seluler.

---

*Terkait: [Polygon](/id/docs/commands/polygon/) dan [ArrayPolar](/id/docs/commands/array-polar/) untuk semua opsi dan tombol, [Circle](/id/docs/commands/circle/) untuk mengetik radius yang tepat, dan [ArrayGrid](/id/docs/commands/array-grid/) untuk mengulang objek dalam baris dan kolom alih-alih mengelilingi pusat.*
