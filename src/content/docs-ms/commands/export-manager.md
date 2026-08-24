---
title: Export Manager — Muat Turun Lukisan sebagai DXF atau JSON
description: Export Manager memuat turun lukisan semasa sebagai fail DXF atau JSON (asli). Setiap format menyenaraikan dengan tepat jenis entiti yang dibawanya, bersebelahan, supaya anda dapat lihat sebelum memuat turun apa yang ditinggalkan oleh DXF — kini hatch, dimensi, leader, dan teks.
keywords: [eksport DXF, eksport fail CAD, muat turun DXF pelayar, simpan DXF dalam talian, eksport JSON CAD, eksport KulmanLab, muat turun fail CAD, eksport DXF, simpan lukisan ke fail, muat turun DXF]
group: file
order: 6
---

# Export Manager

Arahan `exportmanager` memuat turun lukisan semasa ke sistem fail anda. Dua format tersedia, dipaparkan sebagai kad bersebelahan: **DXF** untuk keserasian dengan alat CAD lain dan **JSON** untuk penyimpanan kesetiaan penuh dalam KulmanLab CAD — setiap kad menyenaraikan dengan tepat jenis entiti yang dibawa oleh format tersebut.

## Cara mengeksport

1. Klik butang bar alat **Export** (ikon muat turun) dalam panel fail, atau taip `exportmanager` dalam terminal.
2. Popup **Export Manager** dibuka menunjukkan kad JSON dan DXF bersebelahan, setiap satu menyenaraikan apa yang dieksport (dan, untuk DXF, apa yang ditinggalkan).
3. Klik kad untuk memilih format — **JSON** atau **DXF**.
4. Klik butang **Export \<FORMAT\>**. Fail dimuat turun secara automatik ke folder muat turun lalai anda.

Tekan `Escape` untuk menutup popup tanpa mengeksport.

## Memilih format

| Format | Sambungan | Terbaik untuk | Batasan |
|--------|-----------|---------------|---------|
| **JSON** *(asli)* | `.json` | Menyimpan kerja untuk dibuka semula dalam KulmanLab CAD | Tidak serasi dengan alat CAD lain |
| **DXF** | `.dxf` | Berkongsi dengan FreeCAD, LibreCAD, dll. | Hatch, dimensi, leader, dan teks tidak dieksport |

**Bila menggunakan JSON:** bila-bila masa anda mahu menyimpan salinan lengkap kerja anda. JSON ialah format asli KulmanLab dan mengekalkan setiap entiti dengan tepat — termasuk dimensi, leader, hatch, dan semua data lapisan.

**Bila menggunakan DXF:** apabila anda perlu menyerahkan lukisan kepada seseorang yang menggunakan aplikasi CAD lain. Fail yang dieksport menggunakan format DXF AC1032 dan boleh dibuka dalam kebanyakan alat serasi DXF.

## Apa yang dieksport bagi setiap format

### Eksport JSON

Setiap jenis entiti disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Dimensi (linear, aligned, continued, radius, diameter)
- Leaders (multileader)
- Hatches, termasuk corak, skala, sudut, dan asalnya
- Layers dan Linetypes

### Eksport DXF

Hanya entiti geometri disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines (dieksport sebagai `LWPOLYLINE`), Splines
- Layers dan Linetypes

**Tidak dieksport ke DXF:** hatch, dimensi, leader, dan teks. Dimensi dan leader menggunakan struktur data khusus KulmanLab yang tidak boleh diwakili dengan setia dalam DXF standard; hatch masih tidak dieksport ke DXF sama sekali, walaupun ia diimport daripadanya; eksport teks juga belum dilaksanakan. Jika lukisan anda mempunyai mana-mana daripada ini, gunakan JSON atau [Print Manager](../print-manager/) untuk menangkapnya.

## Nama fail yang dieksport

Fail yang dimuat turun dinamakan mengikut fail lukisan semasa (cth. `myplan.json`). Sambungan berubah untuk sepadan dengan format yang dipilih.

## Perbezaan antara Export Manager dan Print Manager

| Ciri | Export Manager | Print Manager |
|------|-----------------|-----------------|
| Output | Fail sumber vektor (.dxf / .json) | Imej raster (.png / .jpeg / .webp / .pdf) |
| Boleh disunting dalam alat lain | Ya (DXF) | Tidak |
| Mengekalkan layers & linetypes | Ya | Tidak (dipaparkan rata) |
| Menangkap dimensi & leader | JSON sahaja | Ya |

Gunakan **Export Manager** apabila anda memerlukan fail yang boleh disunting. Gunakan [Print Manager](../print-manager/) apabila anda memerlukan snapshot visual.

## Arahan berkaitan

- [Import](../import/) — buka fail DXF atau JSON
- [Print Manager](../print-manager/) — eksport kanvas sebagai imej PNG, JPEG, WebP, atau PDF
- [File Manager](../file-manager/) — layari lukisan yang disimpan dalam storan pelayar
