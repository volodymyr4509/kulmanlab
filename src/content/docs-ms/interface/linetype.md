---
sidebar_position: 2
title: Pemilih Linetype Bar Alat — Kawal Corak Dashes dalam KulmanLab CAD
description: Pemilih linetype dalam bar alat KulmanLab CAD menetapkan corak dash yang digunakan pada semua entiti yang baru dilukis. Menyokong semua linetype yang dimuatkan dari fail DXF semasa ditambah pilihan ByLayer, ByBlock, dan Continuous terbina dalam.
keywords: [CAD linetype, corak dash, garis putus-putus, DXF linetype, ByLayer linetype, kulmanlab]
---

# Linetype

Cip **linetype** dalam bar alat mengawal corak dash yang ditetapkan pada setiap entiti baharu yang anda lukis. Klik padanya untuk membuka dropdown pemilih.

## Pilihan

| Nilai | Maksud |
|-------|--------|
| **From Layer** | Entiti mewarisi linetype yang ditakrifkan pada lapisannya. Ditunjukkan sebagai `ByLayer` dalam DXF. |
| **ByBlock** | Entiti mewarisi linetype blok yang dimilikinya. Tiada kesan visual di luar blok. |
| **Continuous** | Garis padu tidak terputus — tiada corak dash. |
| **Linetype bernama** | Mana-mana linetype yang dimuatkan dari fail DXF semasa (cth. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Dropdown menunjukkan pratonton langsung setiap corak dan rentetan takrifannya. |

## Cara ia digunakan

Linetype yang dipilih digunakan pada setiap entiti yang dicipta selepas perubahan. Ia tidak menjejaskan entiti sedia ada secara retroaktif.

Untuk menukar linetype entiti sedia ada, pilihnya dan edit medan **Linetype** dalam panel sifat, atau gunakan [MatchProperties](../commands/match-properties) untuk menyalinnya dari entiti lain.

## Skala linetype

Setiap entiti juga mempunyai sifat **Linetype Scale** (lalai `1`). Corak dash didarab dengan faktor ini. Nilai `2` menjadikan dashes dua kali lebih panjang; `0.5` menjadikannya separuh panjang. Edit dalam panel sifat selepas memilih entiti.

## Linetype yang tersedia

Dropdown hanya menyenaraikan linetype yang ada dalam fail DXF yang sedang dimuatkan. Fail yang baru dicipta hanya mengandungi `ByLayer`, `ByBlock`, dan `Continuous`. Apabila anda mengimport DXF, semua linetype yang ditakrifkan dalam jadual `$LTYPE` fail menjadi tersedia.

Jika anda memerlukan linetype tertentu (cth. `DASHED2`) yang tidak ada dalam senarai, import fail DXF yang mengandunginya — linetype kemudiannya akan muncul dalam pemilih untuk sesi semasa.

## Keserasian DXF

Nama linetype disimpan sebagai rentetan dalam rekod entiti. `ByLayer` dan `ByBlock` adalah nilai sentinel DXF standard. Semua linetype bernama dan corak dash mereka dipelihara dengan tepat semasa eksport dan pusingan penuh tanpa kehilangan dalam LibreCAD, FreeCAD, dan aplikasi serasi DXF lain.
