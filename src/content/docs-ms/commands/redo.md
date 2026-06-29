---
sidebar_position: 2
title: Arahan Redo — Gunakan Semula Tindakan yang Dibatalkan dalam KulmanLab CAD
description: Arahan Redo menggunakan semula tindakan terakhir yang dibalikkan oleh Undo, melangkah ke hadapan melalui tindanan sejarah. Redo hanya tersedia selepas Undo dan dibersihkan serta-merta apabila mana-mana tindakan lukisan baharu dilakukan.
keywords: [arahan buat semula CAD, sejarah buat semula CAD, gunakan semula tindakan CAD, batal buat semula CAD, buat semula berterusan pelayar, kulmanlab]
---

# Redo

Arahan `redo` melangkah ke hadapan melalui sejarah batal, menggunakan semula tindakan yang telah dibalikkan oleh [Undo](./undo). Redo hanya tersedia apabila anda telah melangkah ke belakang dengan Undo dan belum membuat perubahan baharu.

## Cara buat semula

- Taip `redo` dalam terminal, atau
- Klik butang bar alat **Redo**.

Setiap invokasi menggunakan semula satu tindakan yang sebelumnya dibatalkan. Invoke berulang kali untuk melangkah ke hadapan melalui semua entri redo yang tersedia.

## Tingkah laku tindanan redo

| Butiran | Tingkah laku |
|---------|-------------|
| Tersedia selepas | Satu atau lebih langkah [Undo](./undo) |
| Dibersihkan oleh | **Mana-mana tindakan lukisan baharu** — menambah, mengedit, atau memadam entiti |
| Storan | Pelayar, setiap fail — bertahan muat semula halaman (selagi tiada tindakan baharu dibuat sebelum muat semula) |
| Kedalaman maksimum | Sehingga 20 entri (kumpulan yang sama dengan Undo) |

Setelah entiti baru dilukis, dipadam, atau diubah suai, tindanan redo dibersihkan dan entri-entri tersebut tidak dapat dipulihkan. Hanya tindakan yang dibatalkan yang belum digantikan dengan kerja baharu boleh dibuat semula.

## Redo berbanding Undo

| | Redo | Undo |
|---|------|------|
| Arah | Melangkah **ke hadapan** melalui entri yang dibatalkan | Melangkah **ke belakang** melalui sejarah |
| Tersedia apabila | Selepas sekurang-kurangnya satu Undo, tanpa tindakan baharu diambil | Sekurang-kurangnya satu tindakan yang direkodkan wujud |
| Dibersihkan oleh | Mana-mana tindakan lukisan baharu | Tiada |

Butang Redo bar alat dikelabukan apabila tiada entri untuk dibuat semula. Gunakan [Undo](./undo) dahulu untuk mencipta entri redo.
