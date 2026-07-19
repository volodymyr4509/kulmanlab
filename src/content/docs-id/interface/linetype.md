---
title: Pemilih Linetype di Toolbar — Mengontrol Pola Garis Putus-Putus
description: Pemilih tipe garis di toolbar KulmanLab CAD mengatur pola garis putus-putus yang diterapkan ke semua entitas yang baru digambar. Mendukung semua tipe garis yang dimuat dari file DXF saat ini ditambah opsi bawaan ByLayer, ByBlock, dan Continuous.
keywords: [CAD tipe garis, pola garis putus, garis putus-putus, DXF tipe garis, ByLayer tipe garis, kulmanlab]
group: interface
order: 3
---

# Linetype

Chip **linetype** di toolbar mengontrol pola garis putus-putus yang ditetapkan ke setiap entitas baru yang Anda gambar. Klik untuk membuka dropdown pemilih.

## Opsi

| Nilai | Arti |
|-------|---------|
| **From Layer** | Entitas mewarisi tipe garis yang ditentukan pada layer-nya. Ditampilkan sebagai `ByLayer` dalam DXF. |
| **ByBlock** | Entitas mewarisi tipe garis dari blok tempatnya berada. Tidak memiliki efek visual di luar blok. |
| **Continuous** | Garis solid tanpa putus — tidak ada pola garis putus. |
| **Tipe garis bernama** | Tipe garis mana pun yang dimuat dari file DXF saat ini (mis. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Dropdown menampilkan pratinjau langsung dari setiap pola dan string definisinya. |

## Cara penerapannya

Tipe garis yang dipilih diterapkan ke setiap entitas yang dibuat setelah perubahan. Ini tidak secara retroaktif memengaruhi entitas yang ada.

Untuk mengubah tipe garis entitas yang ada, pilih mereka dan edit field **Linetype** di panel properti, atau gunakan [MatchProperties](../../commands/match-properties/) untuk menyalinnya dari entitas lain.

## Skala tipe garis

Setiap entitas juga memiliki properti **Linetype Scale** (default `1`). Pola garis putus dikalikan dengan faktor ini. Nilai `2` membuat garis putus dua kali lebih panjang; `0.5` membuatnya setengah panjang. Edit di panel properti setelah memilih entitas.

## Tipe garis yang tersedia

Dropdown hanya mencantumkan tipe garis yang ada dalam file DXF yang sedang dimuat. File yang baru dibuat hanya berisi `ByLayer`, `ByBlock`, dan `Continuous`. Ketika Anda mengimpor DXF, semua tipe garis yang ditentukan dalam tabel `$LTYPE` file menjadi tersedia.

Jika Anda memerlukan tipe garis tertentu (mis. `DASHED2`) yang tidak ada dalam daftar, impor file DXF yang berisinya — tipe garis tersebut kemudian akan muncul dalam pemilih untuk sesi saat ini.

## Kompatibilitas DXF

Nama tipe garis disimpan sebagai string dalam rekaman entitas. `ByLayer` dan `ByBlock` adalah nilai sentinel DXF standar. Semua tipe garis bernama dan pola garis putusnya dipertahankan tepat saat diekspor dan dapat dipertukarkan tanpa kehilangan data di LibreCAD, FreeCAD, dan aplikasi lain yang kompatibel dengan DXF.
