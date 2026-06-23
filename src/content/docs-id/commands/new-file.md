---
sidebar_position: 2
title: New File — Memulai Gambar Kosong di KulmanLab CAD
description: Perintah New File membersihkan kanvas dan membuka gambar kosong yang baru. Nama file dengan cap waktu dibuat secara otomatis dan disimpan ke penyimpanan browser.
keywords: [file CAD baru, gambar baru, kanvas kosong CAD, buat gambar baru online, mulai DXF baru, KulmanLab new file, reset kanvas, hapus gambar, kulmanlab]
---

# New File

Perintah **New File** membersihkan kanvas dan memulai gambar kosong yang baru. Nama file unik dengan cap waktu dibuat secara otomatis.

## Cara membuat file baru

Klik tombol toolbar **New File** (ikon halaman baru) di panel File. Kanvas langsung dibersihkan — tidak ada prompt atau dialog konfirmasi.

## Apa yang ada dalam file baru

File yang baru dibuat dimulai dengan:

- **Tidak ada entitas** di kanvas.
- **Satu layer default** bernama `0` dengan warna putih dan tipe garis `Continuous`.
- **Nama file yang dihasilkan** dalam format `kulman-Mon01_HH:MM:SS.dxf` (mis. `kulman-May22_14:30:00.dxf`).

File secara otomatis disimpan ke penyimpanan browser dan muncul dalam [Recent Files](./files).

## Peringatan — pekerjaan yang belum disimpan akan dibuang

Mengklik **New File** membuang semua entitas di kanvas saat ini tanpa peringatan. Jika Anda ingin menyimpan gambar saat ini, [ekspor](./export) terlebih dahulu.

## Kapan menggunakan New File vs Import

| Situasi | Tindakan yang disarankan |
|-----------|-------------------|
| Memulai gambar dari awal | **New File** |
| Membuka file DXF atau JSON yang ada | [Import](./import) |
| Menyalin gambar untuk bekerja pada varian | [Ekspor](./export) file saat ini, kemudian [Impor](./import) salinannya |

## Perintah terkait

- [Import](./import) — buka gambar DXF atau JSON yang ada
- [Export](./export) — unduh gambar sebelum memulai yang baru
- [Files](./files) — pulihkan gambar sebelumnya dari penyimpanan browser
