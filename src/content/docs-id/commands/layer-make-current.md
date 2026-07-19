---
title: LayerMakeCurrent — Mengatur Layer Entitas sebagai Saat Ini
description: Perintah LayerMakeCurrent mengatur layer gambar saat ini agar sesuai dengan layer entitas yang diklik.
keywords: [layer make current, mengatur layer saat ini CAD, manajemen layer kulmanlab]
group: layer
order: 1
---

# LayerMakeCurrent

Perintah `LayerMakeCurrent` mengatur **layer gambar saat ini** ke layer mana pun yang dimiliki oleh entitas yang diklik. Entitas baru kemudian akan digambar pada layer tersebut secara otomatis.

## Penggunaan

1. Ketik `LayerMakeCurrent` di terminal atau klik tombol toolbar **Make Current** (ikon penetes mata).
2. **Klik entitas mana saja** di kanvas.
3. Layer saat ini diperbarui agar sesuai dengan layer entitas tersebut. Perintah selesai segera.

## Detail perilaku

- Jika Anda mengklik kanvas kosong (tidak ada entitas yang terkena), terminal menampilkan `no object found` dan perintah tetap aktif sehingga Anda dapat mencoba lagi.
- Hanya pengaturan layer saat ini yang diubah — tidak ada entitas yang dimodifikasi.
- Layer yang diperbarui tercermin dalam pemilih layer di toolbar.
