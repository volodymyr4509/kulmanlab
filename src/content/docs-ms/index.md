---
title: KulmanLab CAD — Rujukan Arahan
description: Rujukan arahan KulmanLab CAD — panduan lengkap untuk setiap arahan lukisan, edit, markup, lapisan, ukuran, dan fail dalam KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, arahan CAD, CAD pelayar percuma, editor DXF dalam talian, arahan lukisan, arahan kulmanlab]
---

# KulmanLab CAD — Rujukan Arahan

Selamat datang ke rujukan arahan **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) adalah alat CAD berasaskan pelayar percuma untuk melukis, mengedit, dan mengeksport fail DXF — tiada pemasangan diperlukan. Gunakan bar sisi untuk melayari semua arahan yang tersedia dikelompokkan mengikut panel.

## Bentuk

| Arahan | Fungsinya |
|--------|-----------|
| [Line](./commands/line) | Lukis garis lurus antara dua titik |
| [Polyline](./commands/polyline) | Lukis laluan terbuka berbilang segmen |
| [Rectangle](./commands/rectangle) | Lukis segi empat tepat sejajar paksi |
| [Circle](./commands/circle) | Lukis bulatan mengikut pusat dan jejari |
| [Arc](./commands/arc) | Lukis lengkok melalui tiga titik |
| [Ellipse](./commands/ellipse) | Lukis elips mengikut pusat dan dua paksi |
| [Text](./commands/text) | Letak label teks pada kanvas |
| [Spline CV](./commands/spline-cv) | Lukis spline dengan meletakkan bucu kawalan |
| [Spline Fit](./commands/spline-fit) | Lukis spline yang melalui titik-titik yang diklik |

## Edit

| Arahan | Fungsinya |
|--------|-----------|
| [Move](./commands/move) | Pindahkan entiti yang dipilih ke kedudukan baru |
| [Copy](./commands/copy) | Salin entiti yang dipilih ke kedudukan baru |
| [Rotate](./commands/rotate) | Putarkan entiti yang dipilih di sekitar titik asas |
| [Mirror](./commands/mirror) | Cerminkan entiti yang dipilih merentasi satu garis |
| [Scale](./commands/scale) | Skala entiti yang dipilih di sekitar titik asas |
| [Delete](./commands/delete) | Buang entiti yang dipilih daripada lukisan |
| [Trim](./commands/trim) | Potong segmen garis pada persilangannya |
| [Extend](./commands/extend) | Panjangkan garis ke persimpangan sempadan terdekat |
| [Offset](./commands/offset) | Cipta salinan selari entiti pada jarak tertentu |
| [Fillet](./commands/fillet) | Bundarkan sudut antara dua garis dengan lengkok tangen |
| [Chamfer](./commands/chamfer) | Potong sudut pepenjuru lurus antara dua garis atau poliline |
| [Undo](./commands/undo) | Batal tindakan terakhir |
| [Redo](./commands/redo) | Buat semula tindakan yang dibatalkan |

## Markup

| Arahan | Fungsinya |
|--------|-----------|
| [Leader](./commands/leader) | Lukis anotasi pelbagai pemimpin dengan kepala anak panah dan teks |
| [Leader+](./commands/leader-add) | Tambah lengan tambahan pada pelbagai pemimpin sedia ada |
| [Leader−](./commands/leader-remove) | Buang lengan daripada pelbagai pemimpin sedia ada |
| [Dimension Linear](./commands/dim-linear) | Tambah dimensi mendatar atau menegak |
| [Dimension Aligned](./commands/dim-aligned) | Tambah dimensi yang selaras dengan dua titik |
| [Dimension Continue](./commands/dim-continue) | Rantai dimensi baru dari yang terakhir |
| [Dimension Radius](./commands/dim-radius) | Tambah dimensi jejari pada bulatan atau lengkok |
| [Dimension Diameter](./commands/dim-diameter) | Tambah dimensi diameter pada bulatan |
| [Dimension Angular](./commands/dim-angular) | Tambah dimensi sudut pada dua garis, lengkok, atau bulatan |

## Lapisan

| Arahan | Fungsinya |
|--------|-----------|
| [LayerMakeCurrent](./commands/layer-make-current) | Tetapkan lapisan semasa agar sepadan dengan lapisan entiti yang diklik |
| [LayerMatch](./commands/layer-match) | Tugaskan semula entiti yang dipilih untuk memadankan lapisan entiti sumber |
| [LayerIsolate](./commands/layer-isolate) | Bekukan semua lapisan kecuali lapisan entiti yang dipilih |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all) | Nyahbeku semua lapisan dalam satu langkah |

## Susun Atur

| Arahan | Fungsinya |
|--------|-----------|
| [ViewportRectangle](./commands/viewport-rectangle) | Cipta viewport dalam susun atur kertas dengan memilih dua sudut |
| [ViewportCopy](./commands/viewport-copy) | Duplikasi viewport ke kedudukan baru |
| [PageManager](./commands/page-manager) | Edit saiz kertas dan skala untuk susun atur aktif |

## Navigasi

| Arahan | Fungsinya |
|--------|-----------|
| [Pan](./commands/pan) | Klik dan seret untuk menggerakkan viewport |
| [Zoom In](./commands/zoom-in) | Zum masuk viewport |
| [Zoom Out](./commands/zoom-out) | Zum keluar viewport |
| [Fit](./commands/fit) | Muatkan semua entiti ke dalam viewport |

## Ukur

| Arahan | Fungsinya |
|--------|-----------|
| [Distance](./commands/distance) | Ukur jarak antara dua titik |
| [Angle](./commands/angle) | Ukur sudut antara tiga titik |

## Gaya

| Arahan | Fungsinya |
|--------|-----------|
| [Match Properties](./commands/match-properties) | Salin warna, lapisan, dan sifat lain dari satu entiti ke entiti lain |

## Fail

| Arahan | Fungsinya |
|--------|-----------|
| [Import](./commands/import) | Buka fail lukisan DXF atau JSON |
| [New File](./commands/new-file) | Mulakan lukisan kosong baharu |
| [Files](./commands/files) | Semak imbas dan pulihkan lukisan terkini |
| [Print](./commands/print) | Eksport kawasan lukisan sebagai imej atau PDF |
| [Export](./commands/export) | Muat turun lukisan sebagai DXF atau JSON |
| [WipeStorage](./commands/wipestorage) | Padamkan semua lukisan daripada storan pelayar |

## Pemulihan

Jika aplikasi ranap setiap kali dimulakan (contohnya, selepas bekerja dengan koordinat yang sangat besar), anda boleh memadamkan semua data yang disimpan secara tempatan dengan menambahkan `?reset` pada URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Ini memadamkan semua data daripada pangkalan data tempatan pelayar dan memulakan lukisan kosong baharu. Parameter `?reset` akan hilang dari URL secara automatik. Gunakan ini sebagai jalan terakhir apabila [WipeStorage](./commands/wipestorage) tidak dapat diakses kerana aplikasi tidak dapat dimuatkan sama sekali.

## Cara arahan berfungsi

Setiap arahan mengikuti corak yang sama:

1. **Aktifkan** — klik butang bar alat atau taip nama arahan dalam terminal di bahagian bawah skrin.
2. **Ikuti gesaan** — terminal menunjukkan input yang dijangkakan seterusnya.
3. **Selesai atau batal** — kebanyakan arahan selesai secara automatik selepas input terakhir. Tekan **Escape** pada bila-bila masa untuk membatalkan.

## Memilih objek

Beberapa arahan edit (Move, Copy, Rotate, Mirror, Scale, Delete) berkongsi tingkah laku pemilihan yang sama:

- **Klik** entiti untuk memilih atau menyahpilihnya.
- **Seret ke kanan** (kiri ke kanan) untuk pemilihan ketat — hanya entiti yang sepenuhnya berada di dalam kotak dipilih.
- **Seret ke kiri** (kanan ke kiri) untuk pemilihan silang — mana-mana entiti yang bersilang dengan kotak dipilih.
- Tekan **Enter** atau **Space** untuk mengesahkan pemilihan dan meneruskan ke langkah seterusnya.
