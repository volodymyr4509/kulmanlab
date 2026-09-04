---
title: "Cara menyiapkan file DXF untuk potong laser"
description: "Kenapa jasa potong menolak file DXF dan cara memperbaiki milik Anda — kontur tertutup, satuan, kerf, dan layer. Gratis di browser, tanpa instalasi."
keywords: [DXF potong laser, menyiapkan DXF laser, format file potong laser, DXF ditolak laser, kontur tertutup DXF, kerf potong laser, menyiapkan file laser, satuan DXF laser, layer potong ukir, editor DXF gratis]
date: 2026-09-02
author: KulmanLab
tag: Panduan
---

DXF untuk potong laser memerlukan empat hal: kontur tertutup, satuan yang benar, hanya geometri potong — tanpa dimensi, catatan, atau arsiran — dan layer yang memisahkan potong, gores, dan ukir. Panduan ini membahas masing-masing, serta cara memeriksa file Anda sebelum ditolak oleh penyedia jasa.

Semua itu bisa Anda kerjakan gratis di browser lewat [app.kulmanlab.com](https://app.kulmanlab.com): tidak ada yang perlu dipasang, tanpa akun, dan file tidak pernah meninggalkan komputer Anda. Inilah alur kerja yang menjadi alasan kami membangun KulmanLab sejak awal, sehingga batasan yang berlaku pada pekerjaan CAD lain sebagian besar tidak berlaku di sini: potong laser itu dua dimensi, dan DXF adalah yang diminta jasa pemotongan.

## Kenapa file ditolak

Lima alasan menjelaskan hampir semuanya.

**Kontur terbuka.** Bentuk yang tampak tertutup tetapi punya celah setipis rambut di salah satu sudut bukanlah sebuah area, melainkan kumpulan garis yang tidak tersambung. Mesin potong harus tahu mana bagian dalam dan mana luar, sedangkan kontur terbuka tidak punya bagian dalam. Ini penyebab penolakan paling umum, jauh di atas yang lain.

**Satuan salah atau tidak jelas.** DXF tidak mencatat secara andal apa arti angka-angkanya. File yang sama bisa dibuat dalam milimeter, sentimeter, inci, atau kaki, dan sering kali file itu tidak menyebutkan yang mana. Komponen yang datang 25,4 kali lebih besar atau lebih kecil disebabkan hal ini.

**Segala hal selain geometri.** Dimensi, kop gambar, catatan, arsiran, garis bantu. Mesin akan dengan senang hati mencoba memotong anotasi Anda.

**Garis ganda.** Dua garis identik yang bertumpuk berarti laser menempuh jalur yang sama dua kali: waktu terbuang, tepi gosong, dan pada material tipis ada risiko kebakaran.

**Semuanya di satu layer.** Bila potong, gores, dan ukir tidak dipisahkan, penyedia jasa tidak dapat membedakannya dan akan meminta Anda mengirim ulang.

## Menyiapkan file

Seret file `.dxf` Anda ke kanvas di [app.kulmanlab.com](https://app.kulmanlab.com), atau gunakan tombol **Import** pada panel file. Gambar termuat dan tampilan menyesuaikan diri.

**1. Lihat apa yang sebenarnya Anda punya.** Ketik `fit` untuk menampilkan semuanya. Lalu perbesar setiap sudut pada setiap komponen — celah tidak terlihat pada skala gambar penuh dan sangat jelas pada perbesaran sepuluh kali. Pemeriksaan inilah yang menyelamatkan Anda dari email penolakan.

**2. Hapus yang tidak boleh dipotong.** Garis bantu, catatan, bingkai, dimensi. `layer-isolate` menampilkan satu layer sekaligus, dan begitulah sisa-sisa yang bersembunyi di bawah geometri sebenarnya ditemukan.

**3. Tutup celahnya.** `trim` memangkas ujung yang menjulur di tempat dua garis saling melewati. Di tempat garis kurang panjang, seret grip ujung ke tetangganya — grip saling mengunci, sehingga ujung benar-benar bertemu, bukan hampir bertemu.

**4. Periksa ukurannya.** `distance` mengukur antara dua titik, `area` mengukur area tertutup dari titik-titik yang diklik. Ukur satu bagian yang Anda tahu dimensi aslinya. Jika melesetnya 25,4 kali, file Anda memakai sistem satuan yang keliru.

**5. Pisahkan potong, gores, dan ukir.** Tempatkan tiap proses pada layer sendiri dengan nama yang jelas: `CUT`, `SCORE`, `ENGRAVE`. Kebanyakan jasa meminta ini atau meminta file terpisah. `layer-manager` membuat dan menetapkannya.

Lalu ekspor: **Export** → **DXF**. KulmanLab menulis DXF AC1032 apa adanya, persis yang diharapkan jasa pemotongan dan perangkat lunak mesin.

## Kerf

Laser mengikis material saat memotong — kira-kira 0,1 sampai 0,3 mm tergantung mesin, material, dan ketebalan. Potong bujur sangkar 50 mm dan Anda mendapat bujur sangkar yang sedikit lebih kecil, sehingga komponen yang seharusnya masuk pres tidak akan muat.

Ada dua cara menanganinya:

**Serahkan pada penyedia jasa.** Sebagian besar jasa pemotongan menerapkan kompensasi kerf sendiri, dan jika demikian, kompensasi dari sisi Anda justru membuat komponen meleset ke arah sebaliknya. Tanyakan dulu sebelum mengubah apa pun.

**Kerjakan sendiri.** `offset` membuat salinan sejajar sebuah bentuk pada jarak tetap — separuh lebar kerf, ke luar untuk komponen yang harus tetap pada ukuran, ke dalam untuk lubang. Bekerja pada garis, lingkaran, busur, elips, dan polyline. Prosesnya satu objek sekaligus, jadi praktis untuk segelintir fitur penting, bukan untuk lembaran berisi dua ratus komponen.

Kalau toleransi itu penting, potong satu benda uji sebelum mengorbankan material.

## Yang perlu dicek pada ekspor DXF

Perlu diketahui sebelum Anda mengandalkannya:

- **Anotasi kini ikut terekspor — bersihkan sendiri.** Teks, dimensi, leader, dan arsiran semuanya masuk ke DXF hasil ekspor. Untuk serah terima biasa itu justru yang Anda mau, tapi untuk berkas potong artinya apa pun yang Anda tinggalkan di gambar benar-benar ada di berkas. Ekspor tidak lagi diam-diam membuangkannya untuk Anda, jadi hapuslah, atau simpan di layer yang Anda buang sebelum mengekspor.
- **Teks keluar sebagai `MTEXT`, dan itu bukan geometri yang bisa digravir.** Huruf terekspor lengkap dengan formatnya, tapi banyak perangkat lunak mesin menginginkan outline alih-alih teks hidup di layer engrave. Cek dulu apa yang diterima milik Anda sebelum merencanakan gravir di atasnya.
- **Referensi blok tidak diimpor.** Gambar yang disusun dari simbol blok berulang masuk dalam keadaan tidak lengkap, jadi cocokkan jumlah komponen dengan aslinya.

Spline *memang* diekspor. Sebagian perangkat lunak mesin menanganinya dengan buruk dan lebih menyukai polyline — kalau punya Anda begitu, gambar ulang kurvanya sebagai polyline atau busur.

## Peringatan soal otomatisasi

KulmanLab **tidak punya pemeriksaan awal**. Tidak ada yang memindai kontur terbuka, garis ganda, atau masalah satuan lalu melaporkannya. Pemeriksaan di atas dilakukan manual: perbesar, ukur, amati.

Itu memadai untuk segelintir komponen dan melelahkan untuk satu lembar penuh yang tersusun rapat. Kalau Anda memproduksi lembaran secara rutin, alat dengan validator otomatis akan lebih cocok — dan untuk komponen satuan, yang merupakan situasi kebanyakan orang pada kebanyakan waktu, memeriksa file dengan teliti menemukan masalah yang sama.

## Sebelum mengirim

- Setiap kontur potong tertutup — sudut diperiksa pada perbesaran tinggi
- Satu dimensi yang diketahui sudah diukur dan benar
- Tidak ada sisa dimensi, catatan, bingkai, atau geometri bantu
- Tidak ada garis ganda yang bertumpuk
- Potong, gores, dan ukir pada layer terpisah dengan nama yang jelas
- Kerf: sudah diterapkan, atau sengaja diserahkan pada penyedia jasa
- Diekspor sebagai DXF dan dibuka ulang sekali untuk memastikan tampilannya benar

Poin terakhir itu memakan sepuluh detik dan menangkap kejutan ekspor sebelum penyedia jasa yang menemukannya.

---

*Terkait: [Import](/id/docs/commands/import/) untuk apa saja yang dibaca KulmanLab dari sebuah DXF, [Export Manager](/id/docs/commands/export-manager/) untuk isi persis tiap format ekspor, [Offset](/id/docs/commands/offset/) untuk kompensasi kerf, dan [LayerManager](/id/docs/commands/layer-manager/) untuk menyiapkan layer potong dan ukir.*
