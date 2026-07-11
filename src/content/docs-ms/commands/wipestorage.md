---
title: Arahan Wipe Storage — Kosongkan Semua Data Pelayar dalam KulmanLab CAD
description: Arahan wipestorage memadamkan secara kekal semua fail, lapisan, linetype, dan sejarah batal yang disimpan dalam pelayar. Memerlukan menaip YES untuk mengesahkan. Gunakan apabila menetapkan semula pangkalan data tempatan yang rosak atau penuh.
keywords: [CAD padam storan, kosongkan data pelayar CAD, tetapkan semula aplikasi CAD, padamkan fail tempatan CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

Arahan `wipestorage` memadamkan secara kekal **semua data yang disimpan dalam pelayar** untuk KulmanLab CAD — setiap fail yang disimpan, jadual lapisan dan linetype, dan sejarah batal. Halaman dimuat semula secara automatik selepas itu.

:::danger Tidak Boleh Dibatalkan
Tindakan ini tidak boleh dibatalkan. Semua fail yang disimpan dalam pelayar dipadam. Eksport mana-mana lukisan yang ingin anda simpan sebagai fail `.json` atau `.dxf` sebelum menjalankan arahan ini.
:::

## Bila digunakan

- Storan pelayar rosak dan aplikasi gagal memuatkan atau menyimpan fail.
- Anda ingin menetapkan semula sepenuhnya aplikasi ke keadaan bersih.
- Anda beralih pelayar atau peranti dan tidak lagi memerlukan salinan tempatan.

## Cara menjalankannya

1. Taip `wipestorage` dalam terminal dan tekan **Enter**.
2. Terminal memberi gesaan: *Wipe all browser local storage? Type YES to confirm*
3. Taip `YES` (mana-mana huruf besar) dan tekan **Enter**.

Aplikasi memadamkan pangkalan data dan memuat semula halaman. Jika anda menaip selain `YES` dan menekan **Enter**, atau menekan **Escape**, arahan dibatalkan dan tiada yang dipadam.

## Apa yang dipadam

| Data | Dipadam |
|------|---------|
| Semua fail yang disimpan dalam pelayar | Ya |
| Jadual lapisan dan linetype untuk setiap fail | Ya |
| Sejarah Batal / Buat Semula untuk setiap fail | Ya |

Hanya data yang disimpan secara tempatan dalam **pelayar ini** yang terjejas. Fail yang telah anda eksport sebagai `.json` atau `.dxf` tidak disentuh.
