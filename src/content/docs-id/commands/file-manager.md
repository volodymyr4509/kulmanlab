---
title: File Manager — Grid Thumbnail, Ganti Nama & Hapus
description: Perintah FileManager membuka grid thumbnail dari setiap gambar yang tersimpan — klik thumbnail untuk membukanya, ganti nama secara langsung, atau hapus dengan konfirmasi.
keywords: [manajer file CAD, file terbaru CAD, ganti nama gambar, hapus gambar, grid thumbnail CAD, pulihkan gambar, buka kembali DXF, penyimpanan browser CAD, KulmanLab files, gambar tersimpan, IndexedDB CAD, cadangkan gambar CAD]
group: file
order: 3
---

# File Manager

Perintah `ManajerBerkas` membuka **grid thumbnail** dari setiap gambar yang telah disimpan ke penyimpanan lokal browser Anda, diurutkan berdasarkan waktu terakhir disimpan. Gunakan untuk membuka kembali gambar sebelumnya, mengganti namanya, atau menghapusnya.

## Membuka File Manager

- Ketik `ManajerBerkas` di terminal, **atau**
- Klik tombol toolbar **File Manager** (ikon riwayat) di panel File di bagian atas layar.

Panel terbuka di sisi kiri kanvas, dan tertutup secara otomatis segera setelah Anda memulai perintah lain atau [Impor](../import/) file — sehingga panel tidak pernah tertinggal di atas gambar yang belum didaftarkannya. Panel ini terbuka kembali dengan daftar yang baru setiap kali.

## Grid thumbnail

Setiap gambar tersimpan adalah kartu yang menampilkan thumbnail yang dirender langsung, namanya, dan waktu terakhir diperbarui. Thumbnail dihasilkan secara langsung setiap kali panel dibuka — tidak ada yang dirender atau disimpan sebelumnya — sehingga kartu menampilkan ikon placeholder sejenak selagi thumbnail-nya digambar. Placeholder yang sama juga muncul jika pembuatan gagal, atau jika gambar memang belum memiliki entitas apa pun.

| Aksi | Cara |
|--------|-----|
| **Buka** gambar | Klik thumbnail-nya — menggantikan konten kanvas saat ini |
| **Ganti nama** | Klik ikon pensil, atau klik dua kali pada nama |
| **Hapus** | Klik ikon tempat sampah, lalu konfirmasi |

Jika belum ada file yang disimpan, panel menampilkan "No files saved". Jika file lebih banyak daripada yang muat di satu layar, kontrol **Page 1 of N** muncul di bawah grid.

Kartu untuk file yang sedang terbuka di editor ditandai dengan cincin berwarna aksen, dan tidak memiliki **tombol hapus** — menghapus file yang sedang terbuka akan menghapus data tersimpannya sementara kanvas masih menampilkannya, dan pengeditan berikutnya akan langsung menyimpannya kembali. Mengganti nama tetap tersedia.

## Menghapus file

Mengklik ikon tempat sampah tidak langsung menghapus — ini mengaktifkan overlay konfirmasi pada kartu tersebut ("Delete this file?" dengan tombol **Delete** / **Cancel**), karena penghapusan bersifat permanen dan tidak dapat dibatalkan. Mengklik **Cancel**, mengklik ikon tempat sampah kartu lain, atau mengklik di tempat lain pada kartu — semuanya membatalkan konfirmasi yang tertunda tanpa menghapus apa pun.

## Mengganti nama file

Klik ikon pensil (atau klik dua kali pada nama file) untuk mengeditnya secara langsung, lalu tekan **Enter** untuk mengonfirmasi atau **Escape** untuk membatalkan. Penggantian nama ditolak jika nama baru:

- kosong, atau lebih panjang dari 100 karakter,
- sudah digunakan oleh file tersimpan lainnya (tidak peka huruf besar/kecil),
- diakhiri dengan titik, atau
- nama perangkat yang dicadangkan Windows seperti `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, atau `LPT1`–`LPT9`.

Karakter yang tidak valid dalam nama file (`\ / : * ? " < > |`) dihapus secara otomatis saat Anda mengetik. Mengganti nama hanya mengubah label — ini tidak memengaruhi posisi gambar dalam grid, karena itu diurutkan berdasarkan waktu terakhir disimpan, bukan berdasarkan nama.

## Cadangkan pekerjaan Anda — penyimpanan browser tidak permanen

KulmanLab menyimpan gambar ke **IndexedDB**, sebuah database yang terpasang di browser Anda:

- File disimpan **secara lokal di perangkat Anda saja** — tidak ada yang diunggah ke server.
- Setiap browser dan perangkat memiliki penyimpanan independennya sendiri. Gambar yang disimpan di Chrome pada satu komputer tidak akan muncul di Firefox, atau di perangkat lain.
- Penyimpanan ini **dapat terhapus tanpa peringatan** — dengan menghapus data situs atau riwayat penjelajahan, kehabisan ruang disk, menggunakan jendela privat/incognito, menginstal ulang browser atau OS, atau berganti perangkat. Tidak satu pun dari situasi ini memberi Anda kesempatan untuk memulihkan apa yang ada di sana.

**Satu-satunya cara yang andal untuk menjaga keamanan gambar adalah dengan [mengekspornya](../export-manager/) ke penyimpanan Anda sendiri.** Gunakan `.json` (format native KulmanLab) jika memungkinkan — ini menyimpan setiap entitas secara tepat; gunakan `.dxf` jika Anda memerlukan kompatibilitas dengan alat CAD lain. Lakukan ini untuk apa pun yang akan membuat Anda kecewa jika hilang, dan sebelum menghapus data browser, berganti browser atau perangkat, atau menyimpan mesin untuk sementara waktu.

## Pemuatan file otomatis saat startup

Ketika Anda membuka KulmanLab CAD, aplikasi secara otomatis memuat **file yang paling baru dimodifikasi** dari penyimpanan. Anda tidak perlu membukanya secara manual dari File Manager setiap kali.

## Mengelola penyimpanan

Tidak ada batas tetap pada jumlah gambar yang dapat Anda simpan, tetapi penyimpanan browser terbatas. Jika Anda melihat peringatan penyimpanan, hapus file lama dari File Manager — atau lebih baik, ekspor dulu agar tidak ada yang hilang.

Untuk menghapus semua gambar yang tersimpan sekaligus, gunakan perintah [WipeStorage](../wipestorage/).

## Nama file

File baru dan yang diimpor mendapatkan nama sederhana — tidak ada cap waktu yang disertakan. Jika nama tersebut sudah digunakan, akhiran bergaya Finder/Explorer ditambahkan secara otomatis (`plan (2)`, `plan (3)`, …) sehingga tidak ada yang tertimpa. Anda selalu dapat memberi nama yang lebih jelas pada file nanti menggunakan [ganti nama](#mengganti-nama-file).

## Perintah terkait

- [Import](../import/) — muat gambar dari sistem file Anda ke penyimpanan browser
- [Export Manager](../export-manager/) — unduh gambar ke sistem file Anda
- [New File](../new-file/) — mulai gambar kosong (juga disimpan secara otomatis)
- [WipeStorage](../wipestorage/) — hapus semua file yang tersimpan dari penyimpanan browser
