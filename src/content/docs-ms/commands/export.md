---
title: Export — Muat Turun Lukisan sebagai DXF atau JSON dalam KulmanLab CAD
description: Arahan Export memuat turun lukisan semasa ke sistem fail anda. JSON mengekalkan semua entiti termasuk dimensi dan pemimpin; DXF serasi dengan alat CAD lain.
keywords: [eksport DXF, eksport fail CAD, muat turun DXF pelayar, simpan DXF dalam talian, eksport JSON CAD, eksport KulmanLab, muat turun fail CAD, eksport DXF, simpan lukisan ke fail, muat turun DXF]
group: file
order: 5
---

# Export

Arahan **Export** memuat turun lukisan semasa ke sistem fail anda. Dua format tersedia: **DXF** untuk keserasian dengan alat CAD lain dan **JSON** untuk simpanan fideliti penuh dalam KulmanLab CAD.

## Cara mengeksport

1. Klik butang bar alat **Export** (ikon muat turun) dalam panel Fail.
2. Popup **Pengurus Eksport** terbuka.
3. Klik kad format untuk memilih format — **JSON** atau **DXF**.
4. Klik butang **Export**. Fail dimuat turun ke folder muat turun lalai anda secara automatik.

## Memilih format

| Format | Sambungan | Terbaik untuk | Batasan |
|--------|-----------|--------------|---------|
| **JSON** *(natif)* | `.json` | Menyimpan kerja untuk dibuka semula dalam KulmanLab CAD | Tidak serasi dengan alat CAD lain |
| **DXF** | `.dxf` | Berkongsi dengan FreeCAD, LibreCAD, dll. | Dimensi dan pemimpin tidak dieksport |

**Bila menggunakan JSON:** setiap kali anda ingin menyimpan salinan lengkap kerja anda. JSON adalah format natif KulmanLab dan mengekalkan setiap entiti dengan tepat — termasuk dimensi, pemimpin, dan semua data lapisan.

**Bila menggunakan DXF:** apabila anda perlu menyerahkan lukisan kepada seseorang yang menggunakan aplikasi CAD lain. Fail yang dieksport menggunakan format DXF AC1012 dan boleh dibuka dalam kebanyakan alat serasi DXF.

## Apa yang dieksport setiap format

### Eksport JSON

Semua jenis entiti disertakan:

- Garis, bulatan, lengkok, elips, poliline, spline, teks
- Dimensi (linear, aligned, berterusan, jejari, diameter)
- Pelbagai pemimpin
- Definisi lapisan dan jadual linetype

### Eksport DXF

Entiti geometri sahaja disertakan:

- Garis, bulatan, lengkok, elips, poliline (dieksport sebagai `LWPOLYLINE`), spline, teks
- Definisi lapisan dan jadual linetype

**Tidak disertakan dalam DXF:** entiti dimensi dan pelbagai pemimpin. Ini menggunakan struktur data khusus KulmanLab yang tidak dapat diwakili dengan setia dalam DXF standard. Jika lukisan anda mempunyai anotasi, gunakan JSON atau [Print](../print/) untuk menangkapnya secara visual.

## Nama fail yang dieksport

Fail yang dimuat turun dinamakan mengikut fail lukisan semasa (cth. `myplan_May22_14:30:00.json`). Sambungan berubah mengikut format yang dipilih.

## Perbezaan antara Export dan Print

| Ciri | Export | Print |
|------|--------|-------|
| Output | Fail sumber vektor (.dxf / .json) | Imej raster (.png / .jpeg / .webp / .pdf) |
| Boleh diedit dalam alat lain | Ya (DXF) | Tidak |
| Mengekalkan lapisan & linetype | Ya | Tidak (dirender rata) |
| Menangkap dimensi & pemimpin | JSON sahaja | Ya |

Gunakan **Export** apabila anda memerlukan fail yang boleh diedit. Gunakan [Print](../print/) apabila anda memerlukan gambar visual.

## Arahan berkaitan

- [Import](../import/) — buka fail DXF atau JSON
- [Print](../print/) — eksport kanvas sebagai imej PNG, JPEG, WebP, atau PDF
- [Files](../files/) — semak imbas lukisan yang disimpan dalam storan pelayar
