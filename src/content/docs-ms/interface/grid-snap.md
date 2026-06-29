---
sidebar_position: 1
title: Grid & Snap — Selaraskan Lukisan ke Grid Tetap dalam KulmanLab CAD
description: Togel Grid dan Snap dalam KulmanLab CAD melapisi grid rujukan pada kanvas dan mengunci pergerakan kursor ke titik grid. Jarak grid menyesuaikan secara automatik kepada paras zum semasa supaya ia sentiasa menunjukkan nilai model yang bundar.
keywords: [CAD grid, snap ke grid, jarak grid, bantuan lukisan, kulmanlab, titik grid, snap ortogon]
---

# Grid & Snap

Dua butang togel dalam bar kawalan membolehkan anda melapisi grid rujukan dan mengunci kursor ke persimpangannya semasa melukis.

| Butang | Fungsinya |
|--------|-----------|
| **Grid** | Menunjukkan grid titik atau garis visual pada kanvas |
| **Snap** | Mengunci kursor ke titik grid terdekat apabila tiada snap geometri yang lebih hampir |

Kedua-dua togel adalah bebas — anda boleh menunjukkan grid tanpa mensnap, mensnap tanpa menunjukkan grid, atau menggunakan kedua-duanya bersama.

## Mengaktifkan grid dan snap

Klik **Grid** atau **Snap** dalam bar alat kawalan. Keadaan aktif diserlahkan. Tetapan berterusan merentasi sesi.

Apabila **Snap** diaktifkan, grid secara automatik menukar paparannya dari garis ke **titik** — titik-titik menandakan titik tepat yang akan disnapkan oleh kursor.

## Jarak grid adaptif

Jarak grid menyesuaikan secara automatik semasa anda zum supaya garisan grid sentiasa selesa jaraknya pada skrin (~40 px). Langkahnya sentiasa nombor yang "bagus" — gandaan 1, 2, atau 5 pada mana-mana kuasa sepuluh:

| Contoh zum / skala model | Langkah grid |
|--------------------------|--------------|
| Zum keluar (kawasan besar) | 100, 500, 1000 … |
| Zum sederhana | 10, 20, 50 … |
| Zum masuk (butiran halus) | 1, 2, 5 … |
| Sangat dekat | 0.1, 0.2, 0.5 … |

Ini bermakna setiap titik snap jatuh pada koordinat bundar dalam ruang model — tiada offset titik terapung yang terkumpul.

## Keutamaan snap

**Snap titik akhir dan persimpangan sentiasa mendapat keutamaan berbanding grid.** Kursor snap ke titik grid hanya apabila ia tidak berhampiran mana-mana calon snap geometri (titik akhir, titik tengah, pusat, atau persimpangan).

Ini bermakna anda boleh melukis dengan snap ke grid diaktifkan dan masih snap dengan tepat ke geometri sedia ada apabila kursor cukup hampir dengannya. Grid adalah sandaran, bukan pengatasan.

## Mod susun atur

- **Ruang model** — titik atau garis memenuhi keseluruhan kawasan kanvas yang kelihatan.
- **Ruang susun atur (kertas)** — titik dipotong ke segi empat tepat kertas dan tidak melanjut ke luarnya.
- **Di dalam viewport** — grid mengikuti sistem koordinat model pada skala viewport, supaya titik selaras dengan unit model yang sama tanpa mengira pembesaran viewport.

## Aliran kerja tipikal

1. Hidupkan **Grid** dan **Snap** sebelum memulakan lukisan yang memerlukan jarak tetap.
2. Zum ke paras di mana langkah grid sepadan dengan gandaan yang anda inginkan (cth. zum sehingga titik berjauhan 10 unit).
3. Lukis — kursor snap ke titik grid secara automatik. Geometri sedia ada masih mensnap secara normal apabila anda hampir dengannya.
4. Matikan **Snap** apabila anda memerlukan pergerakan kursor bebas atau ingin mensnap hanya ke geometri.
