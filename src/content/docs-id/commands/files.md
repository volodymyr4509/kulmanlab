---
title: Files — Panel File Terbaru di KulmanLab CAD
description: Perintah Files membuka panel Recent Files — jelajahi semua gambar yang tersimpan di browser Anda, pulihkan salah satunya ke kanvas, atau hapus yang tidak lagi Anda butuhkan.
keywords: [file terbaru CAD, riwayat file browser CAD, pulihkan gambar, buka kembali DXF, penyimpanan browser CAD, KulmanLab files, gambar tersimpan, IndexedDB CAD, kelola gambar, kulmanlab]
group: file
order: 3
---

# Files

Perintah **Files** membuka panel **Recent Files** — daftar semua gambar yang telah disimpan ke penyimpanan lokal browser Anda. Gunakan untuk membuka kembali gambar sebelumnya atau menghapus file yang tidak lagi Anda butuhkan.

## Cara membuka panel Recent Files

Klik tombol toolbar **Files** (ikon riwayat) di panel File di bagian atas layar. Panel terbuka di sisi kiri kanvas.

## Panel Recent Files

Setiap entri dalam daftar menampilkan nama file dan dua tombol aksi:

| Tombol | Aksi |
|--------|--------|
| ✓ **Restore** | Muat gambar ke kanvas — menggantikan konten saat ini |
| ✕ **Delete** | Hapus file dari penyimpanan browser secara permanen |

Jika belum ada file yang disimpan, panel menampilkan "No files saved".

## Cara file disimpan

KulmanLab menyimpan gambar ke **IndexedDB** — database dalam browser yang persisten. Ini berarti:

- File bertahan setelah halaman dimuat ulang dan browser dimulai ulang.
- File disimpan **secara lokal di perangkat Anda** — tidak diunggah ke server mana pun.
- Setiap browser dan perangkat memiliki penyimpanan independennya sendiri. Gambar yang disimpan di Chrome pada satu komputer tidak tersedia di Firefox atau di komputer lain.
- Menghapus data situs browser akan menghapus semua file yang tersimpan.

## Pemuatan file otomatis saat startup

Ketika Anda membuka KulmanLab CAD, aplikasi secara otomatis memuat **file yang paling baru dimodifikasi** dari penyimpanan. Anda tidak perlu membukanya secara manual dari panel Files setiap kali.

## Mengelola penyimpanan

Tidak ada batas tetap pada jumlah gambar yang dapat Anda simpan, tetapi penyimpanan browser terbatas. Jika Anda melihat peringatan penyimpanan, hapus file lama dari panel Files.

Untuk menghapus semua gambar yang tersimpan sekaligus, gunakan perintah [WipeStorage](../wipestorage/).

## Nama file dan versioning

Setiap file memiliki cap waktu dalam namanya (mis. `myplan_May22_14:30:00.dxf`). Cap waktu ini ditambahkan secara otomatis ketika Anda [mengimpor](../import/) file, memastikan bahwa mengimpor ulang file sumber yang sama membuat entri baru alih-alih menimpa versi sebelumnya.

## Perintah terkait

- [Import](../import/) — muat gambar dari sistem file Anda ke penyimpanan browser
- [Export](../export/) — unduh gambar ke sistem file Anda
- [New File](../new-file/) — mulai gambar kosong (juga disimpan secara otomatis)
- [WipeStorage](../wipestorage/) — hapus semua file yang tersimpan dari penyimpanan browser
