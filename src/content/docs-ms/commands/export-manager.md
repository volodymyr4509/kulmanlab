---
title: Export Manager — Muat Turun Lukisan sebagai DXF atau JSON
description: Muat turun lukisan sebagai DXF atau JSON, menanda mengikut jenis entiti apa yang masuk. Kedua-duanya membawa geometri, teks, dimensi, penunjuk dan lorekan.
keywords: [eksport DXF, eksport fail CAD, muat turun DXF pelayar, simpan DXF dalam talian, eksport JSON CAD, eksport KulmanLab, muat turun fail CAD, eksport DXF, simpan lukisan ke fail, muat turun DXF]
group: file
order: 6
---

# Export Manager

Perintah `PengurusEksport` memuat turun lukisan semasa ke sistem fail anda. Dua format bersebelahan — **DXF** untuk keserasian dengan alat CAD lain dan **JSON** untuk simpanan penuh dalam KulmanLab CAD — dan setiap satu ada senarai semaknya sendiri tentang apa yang dimasukkan ke dalam fail.

## Cara mengeksport

1. Klik butang bar alat **Export** (ikon muat turun) dalam panel fail, atau taip `PengurusEksport` dalam terminal.
2. Tetingkap **Export Manager** terbuka dengan dua lajur, **JSON** dan **DXF**, setiap satu menyenaraikan jenis entiti lukisan dengan kotak tanda dan kiraan.
3. Nyahtanda apa yang anda mahu tinggalkan. Semuanya bertanda pada mulanya.
4. Klik **Export JSON** atau **Export DXF**. Fail dimuat turun ke folder muat turun lalai anda dan tetingkap ditutup.

Tekan `Escape` untuk menutup popup tanpa mengeksport.

## Memilih apa yang dieksport

Kedua-dua lajur menyenaraikan jenis entiti yang sama, setiap satu dengan bilangannya dalam lukisan:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Semuanya bertanda ketika tetingkap dibuka, jadi mengeksport terus memberi anda keseluruhan lukisan. Nyahtanda satu jenis untuk meninggalkannya daripada fail itu sahaja.

- **Dua lajur itu bebas.** Menyahtanda Hatches di bawah DXF tidak mengubah apa yang dihasilkan **Export JSON** — setiap format menyimpan pilihannya sendiri.
- **Jenis yang anda tiada dipaparkan pudar.** Baris yang kiraannya `0` tidak boleh ditanda, jadi senarai itu sekali gus menjadi inventori pantas lukisan.
- **Kiraan itu satu petikan waktu.** Ia diambil ketika tetingkap dibuka dan tidak dikemas kini jika lukisan berubah di belakangnya. Tutup dan buka semula untuk menyegarkannya.
- **Tiada apa dipadam.** Menyahtanda hanya membentuk fail yang dieksport; lukisan itu sendiri tidak disentuh.

**Linear Dimensions** merangkumi dimensi linear, sejajar dan berterusan: satu jenis entiti yang dicipta oleh tiga perintah berbeza. Jejari, diameter dan sudut masing-masing ada barisnya.

Untuk fail potong, nyahtanda Text, empat baris dimensi, Leaders dan Hatches lalu klik **Export DXF** — lihat [menyediakan DXF untuk pemotongan laser](/ms/blog/prepare-dxf-for-laser-cutting/).

## Memilih format

| Format | Sambungan | Terbaik untuk | Batasan |
|--------|-----------|---------------|---------|
| **JSON** *(asli)* | `.json` | Menyimpan kerja untuk dibuka semula dalam KulmanLab CAD | Tidak serasi dengan alat CAD lain |
| **DXF** | `.dxf` | Berkongsi dengan FreeCAD, LibreCAD, dll. | Berapa banyak yang kekal bergantung pada aplikasi penerima |

**Bila menggunakan JSON:** bila-bila masa anda mahu menyimpan salinan lengkap kerja anda. JSON ialah format asli KulmanLab dan mengekalkan setiap entiti dengan tepat — termasuk dimensi, leader, hatch, dan semua data lapisan.

**Bila menggunakan DXF:** apabila anda perlu menyerahkan lukisan kepada seseorang yang menggunakan aplikasi CAD lain. Fail yang dieksport menggunakan format DXF AC1032 dan boleh dibuka dalam kebanyakan alat serasi DXF.

## Apa yang dieksport bagi setiap format

### Eksport JSON

Setiap jenis entiti disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Dimensi (linear, aligned, continued, radius, diameter, sudut)
- Leaders (multileader)
- Hatches, termasuk corak, skala, sudut, dan asalnya
- Layers dan Linetypes

### Eksport DXF

Setiap jenis entiti disertakan:

- Lines, Circles, Arcs, Ellipses, Polylines (dieksport sebagai `LWPOLYLINE`), Splines
- Text
- Dimensi (linear, aligned, continued, radius, diameter, sudut)
- Leaders (multileader)
- Hatches, termasuk corak, skala, sudut, dan asalnya
- Layers dan Linetypes

Fail ditulis sebagai DXF AC1032, jadi lukisan yang dieksport dari KulmanLab dibuka dengan anotasinya utuh dalam alat lain yang menyokong DXF, bukannya tiba sebagai geometri kosong.

Apa yang dilakukan setiap aplikasi penerima terhadapnya masih berbeza-beza — sokongan DXF tidak sama antara alat, dan yang lebih lama mungkin mengabaikan entiti yang dibaca oleh yang lebih baharu. Jika sesebuah lukisan mesti kelihatan serupa di mana-mana, [Print Manager](../print-manager/) merakamnya sebagai PDF atau imej sebaliknya.

## Nama fail yang dieksport

Fail yang dimuat turun dinamakan mengikut fail lukisan semasa (cth. `myplan.json`). Sambungan berubah untuk sepadan dengan format yang dipilih. Lukisan yang tidak pernah dinamakan dieksport sebagai `drawing.dxf` atau `drawing.json`.

## Perbezaan antara Export Manager dan Print Manager

| Ciri | Export Manager | Print Manager |
|------|-----------------|-----------------|
| Output | Fail sumber vektor (.dxf / .json) | Imej raster (.png / .jpeg / .webp / .pdf) |
| Boleh disunting dalam alat lain | Ya (DXF) | Tidak |
| Mengekalkan layers & linetypes | Ya | Tidak (dipaparkan rata) |
| Menangkap dimensi & leader | Ya | Ya |

Gunakan **Export Manager** apabila anda memerlukan fail yang boleh disunting. Gunakan [Print Manager](../print-manager/) apabila anda memerlukan snapshot visual.

## Arahan berkaitan

- [Import](../import/) — buka fail DXF atau JSON
- [Print Manager](../print-manager/) — eksport kanvas sebagai imej PNG, JPEG, WebP, atau PDF
- [File Manager](../file-manager/) — layari lukisan yang disimpan dalam storan pelayar
