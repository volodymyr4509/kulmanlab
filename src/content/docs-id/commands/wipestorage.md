---
title: Perintah Wipe Storage — Menghapus Semua Data Browser di KulmanLab CAD
description: Perintah wipestorage secara permanen menghapus semua file, layer, tipe garis, dan riwayat undo yang tersimpan di browser. Memerlukan pengetikan YES untuk konfirmasi. Gunakan saat mengatur ulang database lokal yang rusak atau penuh.
keywords: [CAD wipe storage, hapus data browser CAD, reset aplikasi CAD, hapus file lokal CAD, kulmanlab wipestorage]
---

# Wipe Storage

Perintah `wipestorage` secara permanen menghapus **semua data yang tersimpan di browser** untuk KulmanLab CAD — setiap file yang tersimpan, tabel layer dan tipe garis, dan riwayat undo. Halaman dimuat ulang secara otomatis setelahnya.

:::danger Tidak Dapat Dibatalkan
Tindakan ini tidak dapat dibatalkan. Semua file yang tersimpan di browser dihapus. Ekspor gambar yang ingin Anda pertahankan sebagai file `.json` atau `.dxf` sebelum menjalankan perintah ini.
:::

## Kapan digunakan

- Penyimpanan browser rusak dan aplikasi gagal memuat atau menyimpan file.
- Anda ingin mengatur ulang aplikasi sepenuhnya ke kondisi bersih.
- Anda beralih browser atau perangkat dan tidak lagi memerlukan salinan lokal.

## Cara menjalankannya

1. Ketik `wipestorage` di terminal dan tekan **Enter**.
2. Terminal meminta: *Wipe all browser local storage? Type YES to confirm*
3. Ketik `YES` (kapitalisasi mana pun) dan tekan **Enter**.

Aplikasi menghapus database dan memuat ulang halaman. Jika Anda mengetik sesuatu selain `YES` dan menekan **Enter**, atau menekan **Escape**, perintah dibatalkan dan tidak ada yang dihapus.

## Apa yang dihapus

| Data | Dihapus |
|------|---------|
| Semua file yang tersimpan di browser | Ya |
| Tabel layer dan tipe garis untuk setiap file | Ya |
| Riwayat undo / redo untuk setiap file | Ya |

Hanya data yang tersimpan secara lokal di **browser ini** yang terpengaruh. File yang telah Anda ekspor sebagai `.json` atau `.dxf` tidak tersentuh.
