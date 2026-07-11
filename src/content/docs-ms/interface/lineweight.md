---
title: Pemilih Lineweight Bar Alat — Kawal Lebar Strok dalam KulmanLab CAD
description: Pemilih lineweight dalam bar alat KulmanLab CAD menetapkan lebar strok yang digunakan pada semua entiti yang baru dilukis. Menyokong nilai lineweight DXF standard dari 0.00 mm hingga 2.11 mm ditambah mod ByLayer dan Default.
keywords: [CAD lineweight, lebar strok, lebar garis, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Lineweight

Cip **lineweight** dalam bar alat mengawal lebar strok yang ditetapkan pada setiap entiti baharu yang anda lukis. Klik padanya untuk membuka dropdown pemilih.

## Pilihan

| Nilai | Maksud |
|-------|--------|
| **From Layer** | Entiti mewarisi lineweight yang ditakrifkan pada lapisannya. Lebar sebenar yang ditunjukkan bergantung pada tetapan lapisan. |
| **Default** | Menggunakan lebar lalai aplikasi — dirender sebagai garis nipis (1 px). Tidak mengatasi tetapan lineweight lapisan dalam DXF. |
| **0.00 mm – 2.11 mm** | Lebar tetap yang jelas. Entiti membawa nilai ini tanpa mengira lineweight lapisannya. |

Nilai lineweight DXF standard tersedia: 0.00, 0.05, 0.09, 0.13, 0.15, 0.18, 0.20, 0.25, 0.30, 0.35, 0.40, 0.50, 0.53, 0.60, 0.70, 0.80, 0.90, 1.00, 1.06, 1.20, 1.40, 1.58, 2.00, dan 2.11 mm.

## Cara ia digunakan

Lineweight yang dipilih digunakan pada setiap entiti yang dicipta selepas perubahan. Ia tidak menjejaskan entiti sedia ada secara retroaktif.

Untuk menukar lineweight entiti sedia ada, pilihnya dan edit medan **Lineweight** dalam panel sifat, atau gunakan [MatchProperties](../../commands/match-properties/) untuk menyalinnya dari entiti lain.

## Rendering

Lineweight dirender pada skala **3.78 px setiap mm** (96 dpi). Garis 0.25 mm adalah kira-kira 1 px lebar pada skrin; garis 1.00 mm adalah kira-kira 4 px. Nilai yang sangat nipis (0.00 mm dan negatif) sentiasa dirender sekurang-kurangnya 0.5 px supaya ia kekal kelihatan pada mana-mana paras zum.

## Keserasian DXF

Nilai lineweight disimpan sebagai integer dalam per seratus milimeter (cth. 25 = 0.25 mm) dalam rekod entiti DXF `LWPOLYLINE`, `LINE`, `CIRCLE`, dan lain-lain. **From Layer** disimpan sebagai `-1` dan **Default** sebagai `-3`, sepadan dengan spesifikasi DXF. Fail pusingan penuh tanpa kehilangan dalam mana-mana aplikasi serasi DXF.
