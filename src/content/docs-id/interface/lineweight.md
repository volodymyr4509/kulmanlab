---
sidebar_position: 3
title: Pemilih Lineweight di Toolbar — Mengontrol Lebar Goresan di KulmanLab CAD
description: Pemilih ketebalan garis di toolbar KulmanLab CAD mengatur lebar goresan yang diterapkan ke semua entitas yang baru digambar. Mendukung nilai ketebalan garis DXF standar dari 0.00 mm hingga 2.11 mm ditambah mode ByLayer dan Default.
keywords: [CAD ketebalan garis, lebar goresan, lebar garis, DXF ketebalan garis, ByLayer ketebalan garis, kulmanlab]
---

# Lineweight

Chip **lineweight** di toolbar mengontrol lebar goresan yang ditetapkan ke setiap entitas baru yang Anda gambar. Klik untuk membuka dropdown pemilih.

## Opsi

| Nilai | Arti |
|-------|---------|
| **From Layer** | Entitas mewarisi ketebalan garis yang ditentukan pada layer-nya. Lebar aktual yang ditampilkan bergantung pada pengaturan layer. |
| **Default** | Menggunakan lebar default aplikasi — dirender sebagai garis tipis (1 px). Tidak menggantikan pengaturan ketebalan garis layer dalam DXF. |
| **0.00 mm – 2.11 mm** | Lebar tetap yang eksplisit. Entitas membawa nilai ini terlepas dari ketebalan garis layer-nya. |

Nilai ketebalan garis DXF standar tersedia: 0.00, 0.05, 0.09, 0.13, 0.15, 0.18, 0.20, 0.25, 0.30, 0.35, 0.40, 0.50, 0.53, 0.60, 0.70, 0.80, 0.90, 1.00, 1.06, 1.20, 1.40, 1.58, 2.00, dan 2.11 mm.

## Cara penerapannya

Ketebalan garis yang dipilih diterapkan ke setiap entitas yang dibuat setelah perubahan. Ini tidak secara retroaktif memengaruhi entitas yang ada.

Untuk mengubah ketebalan garis entitas yang ada, pilih mereka dan edit field **Lineweight** di panel properti, atau gunakan [MatchProperties](../commands/match-properties) untuk menyalinnya dari entitas lain.

## Rendering

Ketebalan garis dirender pada skala **3.78 px per mm** (96 dpi). Garis 0.25 mm kira-kira 1 px lebar di layar; garis 1.00 mm kira-kira 4 px. Nilai yang sangat tipis (0.00 mm dan negatif) selalu dirender setidaknya 0.5 px sehingga tetap terlihat pada tingkat zoom mana pun.

## Kompatibilitas DXF

Nilai ketebalan garis disimpan sebagai bilangan bulat dalam seperseratus milimeter (mis. 25 = 0.25 mm) dalam rekaman entitas DXF `LWPOLYLINE`, `LINE`, `CIRCLE`, dan lainnya. **From Layer** disimpan sebagai `-1` dan **Default** sebagai `-3`, sesuai dengan spesifikasi DXF. File dapat dipertukarkan tanpa kehilangan data di aplikasi yang kompatibel dengan DXF mana pun.
