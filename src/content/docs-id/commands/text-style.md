---
title: Perintah GayaTeks — Mengelola gaya teks
description: Buat gaya teks CAD dengan font, tinggi, tebal, miring, spasi baris, perataan, dan bingkai.
keywords: [gaya teks CAD, font CAD, bingkai teks, perataan teks, gaya DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Perintah `GayaTeks` membuka pengelola gaya. Buat gaya bernama, ubah nilai bawaannya, dan tentukan gaya *aktif*. Setiap [Teks](../text/) baru menyalin pengaturan gaya aktif saat dibuat.

## Menggunakan pengelola

Ketik `GayaTeks` atau klik **Gaya teks** pada panel anotasi. Tanda ✓ menunjukkan gaya aktif; klik ganda menjadikan gaya lain aktif.

| Bidang | Fungsi |
|---|---|
| Ganti nama | Gunakan pensil di samping nama untuk mengeditnya di daftar; `Standard` tidak dapat diganti namanya. |
| Font / Tinggi | Jenis huruf dan tinggi positif wajib. Nilai nol atau negatif menjadi `1`; pengelola hanya menerima nilai di atas `0`. |
| Tebal / Miring | Pemformatan yang dapat diaktifkan secara terpisah |
| Spasi Baris | Jarak antarbaris |
| Perataan Horizontal | Kiri, tengah, kanan, atau rata kiri-kanan |
| Bingkai | Bingkai persegi panjang untuk teks baru |

Pratinjau memakai perender yang sama dengan kanvas dan menampilkan dua baris. Font, tinggi, tebal, miring, bingkai, jarak baris, dan perataan langsung diperbarui; angka menunjukkan zoom penyesuaian. Gaya baru memakai perataan **kiri** secara default.

**Baru** menggandakan gaya terpilih. **Hapus** tidak dapat menghapus `Standard` atau gaya aktif. **Jadikan aktif** hanya memengaruhi teks yang dibuat setelahnya; teks lama tidak berubah. Nama kosong, duplikat, atau tidak valid untuk DXF membuat **OK** tetap nonaktif. Gaya anotatif hasil impor disembunyikan, tetapi datanya tetap dipertahankan.

## Menyimpan dan DXF

Nama, berkas font, tebal, miring, dan penanda anotatif dipertahankan dalam gaya teks DXF. KulmanLab menulis grup `40` STYLE sebagai `0` (tinggi variabel) dan tinggi terakhir di grup `42`; hal ini mencegah tinggi STYLE tetap menimpa tinggi teks milik gaya dimensi. Bingkai, jarak baris, dan perataan horizontal adalah nilai bawaan per teks KulmanLab, bukan bidang tabel STYLE DXF.
