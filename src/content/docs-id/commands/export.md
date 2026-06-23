---
sidebar_position: 5
title: Export — Mengunduh Gambar sebagai DXF atau JSON di KulmanLab CAD
description: Perintah Export mengunduh gambar saat ini sebagai file DXF atau JSON (asli). JSON mempertahankan semua entitas termasuk dimensi dan leader; DXF kompatibel dengan alat CAD lainnya.
keywords: [ekspor DXF, ekspor file CAD, unduh DXF browser, simpan DXF online, ekspor JSON CAD, KulmanLab export, unduh file CAD, ekspor DXF, simpan gambar ke file, unduh DXF, kulmanlab]
---

# Export

Perintah **Export** mengunduh gambar saat ini ke sistem file Anda. Dua format tersedia: **DXF** untuk kompatibilitas dengan alat CAD lain dan **JSON** untuk penyimpanan fidelitas penuh dalam KulmanLab CAD.

## Cara mengekspor

1. Klik tombol toolbar **Export** (ikon unduh) di panel File.
2. Popup **Export Manager** terbuka.
3. Klik kartu format untuk memilih format — **JSON** atau **DXF**.
4. Klik tombol **Export**. File diunduh ke folder unduhan default Anda secara otomatis.

## Memilih format

| Format | Ekstensi | Terbaik untuk | Keterbatasan |
|--------|-----------|----------|-------------|
| **JSON** *(asli)* | `.json` | Menyimpan pekerjaan untuk dibuka kembali di KulmanLab CAD | Tidak kompatibel dengan alat CAD lain |
| **DXF** | `.dxf` | Berbagi dengan FreeCAD, LibreCAD, dll. | Dimensi dan leader tidak diekspor |

**Kapan menggunakan JSON:** setiap kali Anda ingin menyimpan salinan lengkap pekerjaan Anda. JSON adalah format asli KulmanLab dan mempertahankan setiap entitas secara tepat — termasuk dimensi, leader, dan semua data layer.

**Kapan menggunakan DXF:** ketika Anda perlu menyerahkan gambar ke seseorang yang menggunakan aplikasi CAD lain. File yang diekspor menggunakan format DXF AC1012 dan dapat dibuka di sebagian besar alat yang kompatibel dengan DXF.

## Apa yang diekspor per format

### Ekspor JSON

Semua tipe entitas disertakan:

- Line, circle, arc, ellipse, polyline, spline, text
- Dimensi (linear, sejajar, lanjutan, radius, diameter)
- Multileader
- Definisi layer dan tabel tipe garis

### Ekspor DXF

Entitas geometri saja yang disertakan:

- Line, circle, arc, ellipse, polyline (diekspor sebagai `LWPOLYLINE`), spline, text
- Definisi layer dan tabel tipe garis

**Tidak disertakan dalam DXF:** entitas dimensi dan multileader. Ini menggunakan struktur data spesifik KulmanLab yang tidak dapat direpresentasikan secara akurat dalam DXF standar. Jika gambar Anda memiliki anotasi, gunakan JSON atau [Print](./print) untuk menangkapnya secara visual.

## Nama file yang diekspor

File yang diunduh diberi nama sesuai file gambar saat ini (mis. `myplan_May22_14:30:00.json`). Ekstensi berubah sesuai format yang dipilih.

## Perbedaan antara Export dan Print

| Fitur | Export | Print |
|---------|--------|-------|
| Output | File sumber vektor (.dxf / .json) | Gambar raster (.png / .jpeg / .webp / .pdf) |
| Dapat diedit di alat lain | Ya (DXF) | Tidak |
| Mempertahankan layer & tipe garis | Ya | Tidak (dirender rata) |
| Menangkap dimensi & leader | Hanya JSON | Ya |

Gunakan **Export** ketika Anda membutuhkan file yang dapat diedit. Gunakan [Print](./print) ketika Anda membutuhkan snapshot visual.

## Perintah terkait

- [Import](./import) — buka file DXF atau JSON
- [Print](./print) — ekspor kanvas sebagai gambar PNG, JPEG, WebP, atau PDF
- [Files](./files) — jelajahi gambar yang tersimpan di penyimpanan browser
