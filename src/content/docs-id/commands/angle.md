---
sidebar_position: 1
title: Perintah Angle — Mengukur Sudut Interior pada Vertex Menggunakan Tiga Titik di KulmanLab CAD
description: Perintah Angle mengukur sudut interior (0°–180°) pada vertex yang ditentukan oleh tiga titik yang diklik. Klik pertama-ujung, vertex, ujung-kedua. Hasil ditampilkan di terminal hingga 4 desimal.
keywords: [pengukuran sudut CAD, sudut tiga titik, sudut interior CAD, perintah ukur sudut, sudut vertex, kulmanlab]
---

# Angle

Perintah `angle` mengukur sudut interior pada vertex yang dibentuk oleh dua segmen garis melalui tiga titik yang diklik. Hasilnya — selalu antara 0° dan 180° — ditampilkan di terminal hingga 4 desimal. Ini adalah salah satu dari dua perintah pengukuran — [Distance](../distance/) mengukur panjang garis lurus sebagai gantinya.

## Anatomi pengukuran sudut

```
  ● titik pertama (ujung sinar pertama)
   \
    \  pratinjau sinar pertama
     \
      ● vertex (langkah 3)
     /
    /  pratinjau sinar kedua (ke kursor)
   /
  ● titik ketiga  →  terminal: "Angle: 45.0000°"
```

- **Titik pertama** — salah satu ujung sudut (langkah 2).
- **Vertex** — sudut di mana sudut diukur (langkah 3).
- **Titik ketiga** — ujung lain sudut (langkah 4).

## Mengukur sudut

1. Ketik `angle` di terminal atau klik tombol toolbar **Angle**.
2. **Klik titik pertama** — salah satu ujung lengan sudut. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik vertex** — sudut di mana dua lengan bertemu. Entri koordinat juga berfungsi di sini.
4. **Klik titik ketiga** — ujung lengan kedua. Entri koordinat juga berfungsi di sini. Menempatkan titik ini mencetak hasilnya.
5. **Klik lagi** (opsional) untuk memulai pengukuran baru dari klik tersebut sebagai titik pertama baru.

## Konvensi sudut interior

Perintah menghitung sudut menggunakan hasil kali titik dari dua sinar dari vertex:

- **Selalu interior**: hasilnya adalah sudut yang lebih kecil, antara 0° dan 180°.
- Urutan Anda mengklik titik akhir tidak memengaruhi hasilnya — hanya posisi vertex yang penting.
- Titik segaris (ketiga titik pada satu garis) mengembalikan 0° atau 180°.

## Merantai pengukuran

Setelah hasilnya muncul, mengklik segera memulai pengukuran berikutnya — titik yang diklik menjadi titik pertama baru. Perintah tidak pernah keluar secara otomatis sampai Anda menekan `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Yang diukur | Sudut interior pada vertex | Panjang garis lurus |
| Jumlah klik | 3 | 2 |
| Format hasil | `45.0000°` | `12.3456` (satuan) |
| Pratinjau kanvas | Dua garis dari vertex ke kedua ujung | Garis dari titik pertama ke kursor |
| Terbaik untuk | Sudut pembuka antara dua fitur | Panjang celah atau segmen |

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk salah satu dari tiga titik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik |
| `Escape` | Batal dan reset ke langkah 2 |

## Catatan

- Hasil ditampilkan di **terminal saja** — tidak ada yang ditambahkan ke gambar.
- Presisi selalu 4 desimal dalam derajat.
