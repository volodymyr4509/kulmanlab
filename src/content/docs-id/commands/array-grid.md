---
title: Perintah Array Grid — Mengulang Entitas dalam Baris dan Kolom
description: Perintah Array Grid membuat kisi persegi panjang berisi salinan dari entitas yang dipilih — ketik jumlah baris, kolom, dan jarak antara keduanya langsung di terminal, tanpa perlu mengklik titik.
keywords: [perintah array CAD, arraygrid, array persegi panjang CAD, pola kisi CAD, mengulang entitas CAD, salin array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Perintah `ArrayGrid` membuat kisi persegi panjang berisi salinan dari entitas yang dipilih — masukkan jumlah baris, jumlah kolom, dan jarak antara keduanya, semua diketik di terminal. Seleksi asli menempati sel baris 0, kolom 0; setiap sel lainnya adalah salinan yang diterjemahkan.

## Dua cara memulai

**Pra-pilih, lalu array** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `arraygrid` di terminal (`arr` saja sudah cukup — tidak ambigu) atau klik tombol toolbar **Array Grid**.
3. Ketik jumlah **baris** dan tekan **Enter**.
4. Ketik jumlah **kolom** dan tekan **Enter**.
5. Ketik **jarak antar baris** dan tekan **Enter**.
6. Ketik **jarak antar kolom** dan tekan **Enter** — kisi langsung dibuat.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `arraygrid` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan entitas individual, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. Lanjutkan dengan baris → kolom → jarak baris → jarak kolom seperti di atas.

```
  2 baris x 3 kolom:

  [B] [B] [B]   <- baris 1 (salinan yang diterjemahkan)
  [A] [A] [A]   <- baris 0: seleksi asli, salinan ke kanan
```

> Terminal hanya memerlukan huruf yang cukup untuk tidak ambigu — mengetik `arr` dan menekan **Enter** langsung mengaktifkan Array Grid, karena tidak ada nama perintah lain yang dimulai dengan tiga huruf tersebut (Arc, Area, Align, dan Angle semuanya menyimpang lebih awal).

## Baris, kolom, dan jarak

| Prompt | Menerima | Catatan |
|--------|----------|---------|
| Baris | Bilangan bulat positif (1, 2, 3…) | Hanya digit — tanpa titik desimal atau tanda |
| Kolom | Bilangan bulat positif (1, 2, 3…) | Hanya digit — tanpa titik desimal atau tanda |
| Jarak baris | Desimal bertanda (mis. `10`, `-5.5`) | Jarak antar baris; negatif membalik arah |
| Jarak kolom | Desimal bertanda (mis. `10`, `-5.5`) | Jarak antar kolom; negatif membalik arah |

Dengan 1 baris dan 1 kolom, tidak ada salinan yang dibuat — perintah keluar tanpa mengubah gambar.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi dan lanjut ke prompt baris |
| `0`–`9` | Masukkan digit untuk baris atau kolom |
| `0`–`9`, `.`, `-` | Masukkan digit untuk jarak baris/kolom (`-` hanya sebagai karakter pertama) |
| `Backspace` | Hapus karakter terakhir yang diketik pada prompt saat ini |
| `Enter` | Konfirmasi prompt saat ini dan lanjut ke berikutnya |
| `Escape` | Hapus nilai baris/kolom/jarak yang diketik dan kembali ke fase seleksi |

## Seleksi selama perintah

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor masuk/keluar dari seleksi |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan batas kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi dan lanjut ke prompt baris |

## Setelah array

Salinan baru ditambahkan ke gambar dan perintah keluar — seleksi asli dihapus. Jalankan **Array Grid** lagi, atau mulai perintah baru.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Pemilihan titik | Tidak ada — baris, kolom, dan jarak diketik | Titik dasar dan tujuan diklik (atau diketik) |
| Salinan yang dibuat | Baris × Kolom − 1 | Tepat 1 per operasi salin |
| Tata letak | Kisi persegi panjang teratur | Di mana saja, dengan offset apa pun |
| Terbaik untuk | Mengulang satu unit dalam pola teratur (lubang, ubin, pengencang) | Satu duplikat tunggal di posisi sembarang |

## Entitas yang didukung

Array Grid bekerja pada setiap tipe entitas. Semua entitas mengimplementasikan `translate(dx, dy)` secara internal — operasi yang sama yang digunakan [Copy](../copy/) dan [Move](../move/) — sehingga tidak ada yang dikecualikan.
