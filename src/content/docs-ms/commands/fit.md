---
sidebar_position: 4
title: Arahan Fit — Bingkaikan Semua Entiti dalam Viewport dengan Satu Klik dalam KulmanLab CAD
description: Arahan Fit mengira kotak sempadan semua entiti dan melaraskan zum dan pan supaya setiap entiti kelihatan dengan margin kecil. Klik dua kali butang tetikus tengah mencetuskan Fit tanpa mengaktifkan arahan.
keywords: [CAD pandangan fit, zum untuk fit, bingkaikan semua entiti, arahan fit CAD, zum kotak sempadan, kulmanlab]
---

# Fit

Arahan `fit` mengira kotak sempadan semua entiti dalam lukisan dan melaraskan paras zum dan kedudukan pan supaya setiap entiti kelihatan dengan margin kecil. Ia adalah cara terpantas untuk memulihkan pandangan yang hilang atau mengorientasi diri selepas mengimport fail DXF.

## Memuatkan pandangan

Klik butang bar alat **Fit** atau taip `fit` dalam terminal. Pandangan menyesuaikan serta-merta dan arahan keluar — tiada interaksi diperlukan.

**Klik dua kali butang tetikus tengah** mencetuskan operasi Fit yang sama pada bila-bila masa tanpa mengaktifkan mana-mana arahan — pintasan terpantas untuk menetapkan semula pandangan yang hilang di pertengahan lukisan.

## Bagaimana fit kotak sempadan berfungsi

1. Fit mencari kotak sempadan sejajar paksi yang melingkungi semua entiti (min X, max X, min Y, max Y).
2. Paras zum ditetapkan supaya dimensi yang lebih tinggi atau lebih lebar memenuhi kanvas dengan margin.
3. Pandangan dipusatkan pada titik tengah kotak sempadan.

| Keadaan lukisan | Hasil |
|----------------|-------|
| Lebih lebar dari tinggi | Zum dikekang oleh lebar |
| Lebih tinggi dari lebar | Zum dikekang oleh tinggi |
| Satu entiti | Muatkan sekitar entiti tersebut sahaja |
| Lukisan kosong | Pandangan tidak berubah |

## Fit berbanding kawalan zum manual

| | Fit | Zoom In / Zoom Out | Roda tatal |
|---|-----|--------------------|------------|
| Berpusat pada | Semua entiti | Titik tengah viewport | Kursor |
| Saiz langkah | Automatik (satu tembakan) | 1.5× setiap langkah | ~1.1× setiap tick |
| Terbaik untuk | Memulihkan pandangan yang hilang, orient selepas import | Melangkah masuk/keluar dari pusat | Zum tepat tertuju pada kursor |

## Rujukan papan kekunci

Tiada pintasan papan kekunci untuk arahan ini. Gunakan pintasan **klik dua kali butang tetikus tengah** sebaliknya.

## Arahan pandangan berkaitan

| Arahan | Fungsinya |
|--------|-----------|
| [Pan](./pan) | Menggeser viewport tanpa zum |
| [Zoom In](./zoom-in) | Mendarab zum dengan 1.5× setiap langkah |
| [Zoom Out](./zoom-out) | Membahagi zum dengan 1.5× setiap langkah |
