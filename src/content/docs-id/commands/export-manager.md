---
title: Export Manager — Unduh Gambar sebagai DXF atau JSON
description: Unduh gambar saat ini sebagai DXF atau JSON. Keduanya membawa setiap tipe entitas — geometri, teks, dimensi, leader, dan arsiran — berikut layer dan tipe garis.
keywords: [ekspor DXF, ekspor file CAD, unduh DXF browser, simpan DXF online, ekspor JSON CAD, ekspor KulmanLab, unduh file CAD, ekspor DXF, simpan gambar ke file, unduh DXF]
group: file
order: 6
---

# Export Manager

Perintah `exportmanager` mengunduh gambar saat ini ke sistem file Anda. Ada dua format yang tersedia, ditampilkan sebagai kartu berdampingan: **DXF** untuk kompatibilitas dengan alat CAD lain dan **JSON** untuk penyimpanan fidelitas penuh di dalam KulmanLab CAD — setiap kartu mencantumkan persis jenis entitas apa yang dibawa format tersebut.

## Cara mengekspor

1. Klik tombol toolbar **Export** (ikon unduh) di panel file, atau ketik `exportmanager` di terminal.
2. Popup **Export Manager** terbuka menampilkan kartu JSON dan DXF berdampingan, masing-masing mencantumkan apa yang diekspor.
3. Klik kartu untuk memilih format — **JSON** atau **DXF**.
4. Klik tombol **Export \<FORMAT\>**. File akan diunduh secara otomatis ke folder unduhan default Anda.

Tekan `Escape` untuk menutup popup tanpa mengekspor.

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
- Dimensi (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, termasuk pola, skala, sudut, dan titik asalnya
- Layers dan Linetypes

### Ekspor DXF

Setiap jenis entitas disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines (diekspor sebagai `LWPOLYLINE`), Splines
- Text
- Dimensi (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, termasuk pola, skala, sudut, dan titik asalnya
- Layers dan Linetypes

Berkas ditulis sebagai DXF AC1032, jadi gambar yang diekspor dari KulmanLab terbuka dengan anotasinya utuh di perkakas lain yang mendukung DXF, bukan tiba sebagai geometri telanjang.

Apa yang kemudian dilakukan tiap aplikasi penerima terhadapnya tetap berbeda-beda — dukungan DXF tidak sama antar perkakas, dan yang lebih lama bisa mengabaikan entitas yang dibaca yang lebih baru. Kalau sebuah gambar harus tampak identik di mana pun, [Print Manager](../print-manager/) justru menangkapnya sebagai PDF atau gambar.

## Nama file yang diekspor

File yang diunduh dinamai sesuai file gambar saat ini (misalnya `myplan.json`). Ekstensi berubah sesuai format yang dipilih.

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
