---
title: Export Manager — Unduh Gambar sebagai DXF atau JSON
description: Unduh gambar sebagai DXF atau JSON, mencentang per tipe entitas apa yang ikut. Keduanya membawa geometri, teks, dimensi, leader, dan arsiran, plus layer.
keywords: [ekspor DXF, ekspor file CAD, unduh DXF browser, simpan DXF online, ekspor JSON CAD, ekspor KulmanLab, unduh file CAD, ekspor DXF, simpan gambar ke file, unduh DXF]
group: file
order: 6
---

# Export Manager

Perintah `exportmanager` mengunduh gambar saat ini ke sistem berkas Anda. Dua format berdampingan — **DXF** untuk kompatibilitas dengan perkakas CAD lain dan **JSON** untuk simpanan berfidelitas penuh di dalam KulmanLab CAD — dan masing-masing punya daftar centangnya sendiri tentang apa yang masuk ke berkas.

## Cara mengekspor

1. Klik tombol toolbar **Export** (ikon unduh) di panel file, atau ketik `exportmanager` di terminal.
2. Popup **Export Manager** terbuka dengan dua kolom, **JSON** dan **DXF**, masing-masing mencantumkan tipe entitas gambar dengan kotak centang dan jumlah.
3. Hilangkan centang pada yang ingin Anda tinggalkan. Semuanya tercentang di awal.
4. Klik **Export JSON** atau **Export DXF**. Berkas terunduh ke folder unduhan bawaan dan popup tertutup.

Tekan `Escape` untuk menutup popup tanpa mengekspor.

## Memilih apa yang diekspor

Kedua kolom mencantumkan tipe entitas yang sama, masing-masing dengan jumlahnya di gambar:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Semua tercentang saat popup terbuka, jadi mengekspor langsung memberi Anda seluruh gambar. Hilangkan centang sebuah tipe untuk mengeluarkannya dari berkas itu saja.

- **Kedua kolom saling bebas.** Menghilangkan centang Hatches di DXF tidak mengubah apa yang dihasilkan **Export JSON** — tiap format menyimpan pilihannya sendiri.
- **Tipe yang tidak Anda punya tampil redup.** Baris dengan jumlah `0` tidak bisa dicentang, jadi daftarnya sekaligus menjadi inventaris cepat isi gambar.
- **Jumlahnya adalah cuplikan.** Diambil saat popup terbuka dan tidak diperbarui bila gambar berubah di belakangnya. Tutup dan buka lagi untuk menyegarkan.
- **Tidak ada yang dihapus.** Menghilangkan centang hanya membentuk berkas hasil ekspor; gambarnya sendiri tidak tersentuh.

**Linear Dimensions** mencakup dimensi linear, sejajar, dan berlanjut: satu tipe entitas yang dibuat oleh tiga perintah berbeda. Radius, diameter, dan sudut masing-masing punya barisnya sendiri.

Untuk berkas potong, hilangkan centang Text, keempat baris dimensi, Leaders, dan Hatches lalu klik **Export DXF** — lihat [menyiapkan DXF untuk pemotongan laser](/id/blog/prepare-dxf-for-laser-cutting/).

## Memilih format

| Format | Ekstensi | Terbaik untuk | Batasan |
|--------|----------|---------------|---------|
| **JSON** *(native)* | `.json` | Menyimpan pekerjaan untuk dibuka kembali di KulmanLab CAD | Tidak kompatibel dengan alat CAD lain |
| **DXF** | `.dxf` | Berbagi dengan FreeCAD, LibreCAD, dll. | Seberapa banyak yang bertahan tergantung aplikasi penerima |

**Kapan menggunakan JSON:** kapan pun Anda ingin menyimpan salinan lengkap dari pekerjaan Anda. JSON adalah format native KulmanLab dan menyimpan setiap entitas secara persis — termasuk dimensi, leader, hatch, dan semua data layer.

**Kapan menggunakan DXF:** ketika Anda perlu menyerahkan gambar kepada seseorang yang menggunakan aplikasi CAD lain. File yang diekspor menggunakan format DXF AC1032 dan dapat dibuka di sebagian besar alat yang kompatibel dengan DXF.

## Apa yang diekspor per format

### Ekspor JSON

Setiap jenis entitas disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Dimensi (linear, aligned, continued, radius, diameter, sudut)
- Leaders (multileaders)
- Hatches, termasuk pola, skala, sudut, dan titik asalnya
- Layers dan Linetypes

### Ekspor DXF

Setiap jenis entitas disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines (diekspor sebagai `LWPOLYLINE`), Splines
- Text
- Dimensi (linear, aligned, continued, radius, diameter, sudut)
- Leaders (multileaders)
- Hatches, termasuk pola, skala, sudut, dan titik asalnya
- Layers dan Linetypes

Berkas ditulis sebagai DXF AC1032, jadi gambar yang diekspor dari KulmanLab terbuka dengan anotasinya utuh di perkakas lain yang mendukung DXF, bukan tiba sebagai geometri telanjang.

Apa yang kemudian dilakukan tiap aplikasi penerima terhadapnya tetap berbeda-beda — dukungan DXF tidak sama antar perkakas, dan yang lebih lama bisa mengabaikan entitas yang dibaca yang lebih baru. Kalau sebuah gambar harus tampak identik di mana pun, [Print Manager](../print-manager/) justru menangkapnya sebagai PDF atau gambar.

## Nama file yang diekspor

File yang diunduh dinamai sesuai file gambar saat ini (misalnya `myplan.json`). Ekstensi berubah sesuai format yang dipilih. Gambar yang belum pernah dinamai diekspor sebagai `drawing.dxf` atau `drawing.json`.

## Perbedaan antara Export Manager dan Print Manager

| Fitur | Export Manager | Print Manager |
|-------|-----------------|-----------------|
| Output | File sumber vektor (.dxf / .json) | Gambar raster (.png / .jpeg / .webp / .pdf) |
| Dapat diedit di alat lain | Ya (DXF) | Tidak |
| Mempertahankan layers & linetypes | Ya | Tidak (dirender datar) |
| Menangkap dimensi & leader | Ya | Ya |

Gunakan **Export Manager** ketika Anda memerlukan file yang dapat diedit. Gunakan [Print Manager](../print-manager/) ketika Anda memerlukan snapshot visual.

## Perintah terkait

- [Import](../import/) — buka file DXF atau JSON
- [Print Manager](../print-manager/) — ekspor kanvas sebagai gambar PNG, JPEG, WebP, atau PDF
- [File Manager](../file-manager/) — jelajahi gambar yang disimpan dalam penyimpanan browser
