---
title: Perintah GayaPetunjuk — Mengelola gaya garis petunjuk
description: Buat gaya garis petunjuk CAD dengan mata panah, lekatan, jarak, rotasi, font, tinggi, dan bingkai teks.
keywords: [gaya garis petunjuk CAD, gaya multileader, MLEADERSTYLE, mata panah CAD, lekat teks, gaya DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Perintah `GayaPetunjuk` membuka pengelola gaya garis petunjuk bernama. Setiap [Penunjuk](../leader/) baru menyalin pengaturan gaya *aktif* saat dibuat.

## Mengedit gaya

Ketik `GayaPetunjuk` atau klik **Gaya Garis Petunjuk** pada panel anotasi. Tanda ✓ menunjukkan gaya aktif; gunakan pensil di samping nama untuk menggantinya. Pratinjau langsung diperbarui dengan perender yang sama seperti gambar.

| Bidang | Fungsi |
|---|---|
| Lekat Teks | Atas, Tengah, Bawah, atau Garis Bawah |
| Mata / Ukuran Panah | Simbol dan ukuran pada ujung setiap lengan |
| Jarak Landasan | Ruang antara landasan dan teks |
| Rotasi Teks | Sudut label dalam derajat |
| Gaya teks | Sekali menyalin font, tinggi, tebal, dan miring dari [TextStyle](../text-style/) |
| Font / Tinggi Teks | Jenis huruf dan tinggi label |
| Tebal / Miring | Pemformatan teks yang terpisah |
| Teks Berbingkai | Bingkai persegi panjang di sekeliling label |

**Baru** menggandakan gaya terpilih. `Standard` tidak dapat diganti nama atau dihapus; gaya aktif juga tidak dapat dihapus. **Jadikan aktif** hanya memengaruhi penunjuk yang dibuat sesudahnya—objek lama tidak berubah. Nama kosong, duplikat, atau tidak valid untuk DXF menonaktifkan **OK**. Gaya anotatif hasil impor disembunyikan, tetapi tetap dipertahankan.

## Menyimpan dan DXF

**OK** menerapkan semua perubahan; **Tutup** atau `Escape` membatalkannya. KulmanLab membaca dan menulis rekaman `MLEADERSTYLE`. Nama, mata dan ukuran panah, jarak, tinggi, lekatan, bingkai, serta penanda anotatif disimpan sebagai bidang gaya. Rotasi, font, tebal, dan miring adalah nilai bawaan KulmanLab yang disalin ke penunjuk saat dibuat.

Lihat juga [Leader](../leader/), [LeaderAdd](../leader-add/), dan [LeaderRemove](../leader-remove/).
