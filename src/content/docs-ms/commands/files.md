---
sidebar_position: 3
title: Files — Panel Fail Terkini dalam KulmanLab CAD
description: Arahan Files membuka panel Fail Terkini — semak imbas semua lukisan yang disimpan dalam pelayar anda, pulihkan mana-mana daripadanya ke kanvas, atau padamkan yang tidak diperlukan lagi.
keywords: [fail terkini CAD, sejarah fail pelayar CAD, pulihkan lukisan, buka semula DXF, storan pelayar CAD, fail KulmanLab, lukisan yang disimpan, IndexedDB CAD, urus lukisan]
---

# Files

Arahan **Files** membuka panel **Fail Terkini** — senarai semua lukisan yang telah disimpan ke storan tempatan pelayar anda. Gunakannya untuk membuka semula lukisan sebelumnya atau membuang fail yang tidak diperlukan lagi.

## Cara membuka panel Fail Terkini

Klik butang bar alat **Files** (ikon sejarah) dalam panel Fail di bahagian atas skrin. Panel terbuka di sebelah kiri kanvas.

## Panel Fail Terkini

Setiap entri dalam senarai menunjukkan nama fail dan dua butang tindakan:

| Butang | Tindakan |
|--------|---------|
| ✓ **Restore** | Muatkan lukisan ke kanvas — menggantikan kandungan semasa |
| ✕ **Delete** | Buang fail dari storan pelayar secara kekal |

Jika tiada fail yang disimpan lagi, panel menunjukkan "No files saved".

## Cara fail disimpan

KulmanLab menyimpan lukisan ke **IndexedDB** — pangkalan data dalam pelayar yang berterusan. Ini bermakna:

- Fail bertahan muat semula halaman dan permulaan semula pelayar.
- Fail disimpan **secara tempatan pada peranti anda** — ia tidak dimuat naik ke mana-mana pelayan.
- Setiap pelayar dan peranti mempunyai storan bebas mereka sendiri. Lukisan yang disimpan dalam Chrome pada satu komputer tidak tersedia dalam Firefox atau pada mesin lain.
- Mengosongkan data tapak pelayar akan memadamkan semua fail yang disimpan.

## Pemuatan fail automatik semasa permulaan

Apabila anda membuka KulmanLab CAD, aplikasi memuatkan secara automatik **fail yang paling baru diubah suai** dari storan. Anda tidak perlu membukanya secara manual dari panel Files setiap kali.

## Mengurus storan

Tiada had tetap bilangan lukisan yang boleh anda simpan, tetapi storan pelayar adalah terhad. Jika anda perasan amaran storan, padam fail yang lebih lama dari panel Files.

Untuk membuang semua lukisan yang disimpan sekaligus, gunakan arahan [WipeStorage](./wipestorage).

## Nama fail dan versi

Setiap fail mempunyai cap masa dalam namanya (cth. `myplan_May22_14:30:00.dxf`). Cap masa ini ditambahkan secara automatik apabila anda [mengimport](./import) fail, memastikan mengimport semula fail sumber yang sama mencipta entri baharu dan bukannya menimpa versi sebelumnya.

## Arahan berkaitan

- [Import](./import) — muatkan lukisan dari sistem fail anda ke storan pelayar
- [Export](./export) — muat turun lukisan ke sistem fail anda
- [New File](./new-file) — mulakan lukisan kosong (juga disimpan secara automatik)
- [WipeStorage](./wipestorage) — kosongkan semua fail yang disimpan dari storan pelayar
