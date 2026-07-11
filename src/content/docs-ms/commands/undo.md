---
title: Arahan Undo — Langkah Kembali Melalui Sejarah Lukisan dalam KulmanLab CAD
description: Arahan Undo membalikkan tindakan lukisan terakhir satu langkah pada satu masa. Sehingga 20 langkah disimpan setiap fail dan berterusan dalam pelayar merentasi muat semula halaman. Melakukan tindakan baharu selepas mengbatalkan membersihkan tindanan redo.
keywords: [arahan batal CAD, sejarah batal CAD, balikkan tindakan CAD, langkah batal CAD, batal berterusan pelayar, kulmanlab]
group: edit
order: 13
---

# Undo

Arahan `undo` membalikkan perubahan terakhir pada lukisan — satu langkah setiap invokasi. Setiap penambahan, pemadaman, atau edit entiti direkodkan sebagai entri sejarah berasingan. Undo melangkah ke belakang melalui entri-entri ini dalam urutan terbalik.

## Cara membatalkan

- Taip `undo` dalam terminal, atau
- Klik butang bar alat **Undo**.

Setiap invokasi membalikkan satu tindakan yang direkodkan. Invoke berulang kali untuk melangkah lebih jauh ke belakang.

## Tingkah laku sejarah

| Butiran | Nilai |
|---------|-------|
| Langkah setiap fail | Sehingga **20** |
| Storan | Pelayar (IndexedDB / localStorage), setiap nama fail |
| Bertahan muat semula halaman | Ya — sejarah dipulihkan apabila anda membuka semula fail |
| Tindakan baharu selepas batal | Membersihkan semua entri redo di hadapan kedudukan semasa |
| Entri tertua apabila penuh | Digugurkan untuk memberi ruang bagi perubahan terbaharu |

Setiap mutasi entiti direkodkan: melukis entiti baharu, memadam entiti, pengeditan grip titik akhir, menggunakan Move, Rotate, Scale, Mirror, Trim, Extend, dan Offset semua mencipta entri sejarah.

## Undo berbanding Redo

| | Undo | Redo |
|---|------|------|
| Arah | Melangkah **ke belakang** melalui sejarah | Melangkah **ke hadapan** melalui entri yang dibatalkan |
| Tersedia apabila | Sekurang-kurangnya satu tindakan yang direkodkan wujud | Sekurang-kurangnya satu Undo telah dilakukan dan tiada tindakan baharu diambil |
| Dibersihkan oleh | Tiada — sejarah terkumpul sehingga had 20 langkah | Mana-mana tindakan lukisan baharu |

Gunakan [Redo](../redo/) untuk menggunakan semula tindakan yang dibatalkan. Butang bar alat dikelabukan apabila arah masing-masing tidak tersedia.
