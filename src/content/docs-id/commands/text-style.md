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
| Nama | Nama unik; `Standard` tidak dapat diganti |
| Font / Tinggi | Jenis huruf dan tinggi tetap; `0` = ditentukan per teks |
| Tebal / Miring | Pemformatan yang dapat diaktifkan secara terpisah |
| Spasi Baris | Jarak antarbaris |
| Perataan Horizontal | Kiri, tengah, kanan, atau rata kiri-kanan |
| Bingkai | Bingkai persegi panjang untuk teks baru |

**Baru** menggandakan gaya terpilih. **Hapus** tidak dapat menghapus `Standard` atau gaya aktif. **Jadikan aktif** hanya memengaruhi teks yang dibuat setelahnya; teks lama tidak berubah. Nama kosong, duplikat, atau tidak valid untuk DXF membuat **OK** tetap nonaktif. Gaya anotatif hasil impor disembunyikan, tetapi datanya tetap dipertahankan.

## Menyimpan dan DXF

**OK** menyimpan perubahan; **Tutup** atau `Escape` membatalkannya. Gunakan `↑` dan `↓` untuk berpindah dalam daftar. Nama, berkas font, tinggi, tebal, miring, dan penanda anotatif merupakan bagian dari gaya DXF. Bingkai, spasi baris, dan perataan adalah nilai bawaan per teks di KulmanLab, bukan bidang tabel STYLE.

Lihat juga [Text](../text/), [FontManager](../font-manager/), dan [MatchProperties](../match-properties/).
