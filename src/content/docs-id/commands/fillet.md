---
title: Perintah Fillet — Membulatkan Sudut antara Dua Garis di KulmanLab CAD
description: Perintah Fillet menghubungkan dua entitas Line dengan busur tangen berradius tertentu, memotong masing-masing garis kembali ke titik tangen. Pratinjau busur putus-putus membantu Anda memilih sudut yang benar sebelum mengklik.
keywords: [perintah fillet CAD, membulatkan sudut CAD, busur fillet, busur tangen dua garis, kulmanlab]
group: edit
order: 11
---

# Fillet

Perintah `fillet` membulatkan sudut antara dua entitas [Line](../line/) dengan menyisipkan busur tangen berradius tertentu dan memotong masing-masing garis kembali ke titik di mana busur dimulai. Hasilnya adalah sudut yang halus dan beradius yang menghubungkan kedua garis.

Fillet hanya bekerja pada **entitas Line**.

## Menggunakan fillet

1. Ketik `fillet` di terminal atau klik tombol toolbar **Fillet**.
2. **Ketik radius fillet** dan tekan **Enter**.
3. **Klik garis pertama** — bagian yang Anda klik menentukan sisi mana dari perpotongan mana pun yang dipertahankan.
4. **Arahkan kursor ke garis kedua** — pratinjau busur putus-putus menampilkan hasil fillet. Gerakkan kursor ke sisi yang ingin Anda pertahankan.
5. **Klik** untuk menerapkan. Kedua garis dipotong dan busur disisipkan.

```
  Sebelum:                     Sesudah fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pemilihan sisi untuk garis yang berpotongan

Ketika dua garis berpotongan, fillet diterapkan pada sudut yang ditentukan oleh posisi klik — bagian dari masing-masing garis pada **sisi yang sama dengan kursor** dipertahankan.

- Klik dekat salah satu ujung garis pertama untuk memilih setengah tersebut.
- Gerakkan kursor ke setengah yang diinginkan dari garis kedua — pratinjau putus-putus diperbarui secara langsung.

## Apa yang dibuat perintah

- Titik akhir garis pertama yang paling dekat ke perpotongan dipindahkan ke titik tangen **T1**.
- Titik akhir garis kedua yang paling dekat ke perpotongan dipindahkan ke titik tangen **T2**.
- Entitas Arc baru disisipkan dari **T1** ke **T2**, tangen terhadap kedua garis.

Busur yang disisipkan mewarisi pengaturan ketebalan garis, warna, layer, dan tipe garis saat ini.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai radius |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi radius yang diketik dan pindah ke seleksi garis |
| `Escape` | Batal dan reset |

## Entitas yang didukung

| Entitas | Didukung |
|--------|-----------|
| Line | Ya — sebagai entitas pertama maupun kedua |
| Arc, Circle, Ellipse, Polyline | Tidak |
| Text, Spline, Dimension, Leader | Tidak |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipe sudut | Busur membulat | Potongan lurus |
| Input | Satu radius | Dua jarak (d1, d2) |
| Entitas yang disisipkan | Arc | Line |
| Entitas yang didukung | Hanya Line | Line dan Polyline |
