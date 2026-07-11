---
title: Perintah Polyline — Menggambar Jalur Multi-Segmen sebagai Satu Entitas di KulmanLab CAD
description: Perintah Polyline menggambar sejumlah segmen yang terhubung yang disimpan sebagai satu entitas LWPOLYLINE. Grip vertex dan titik tengah segmen memungkinkan Anda membentuk ulang bagian mana pun dari jalur setelah dibuat. Mendukung offset; tidak mendukung trim atau extend.
keywords: [perintah polyline CAD, menggambar polyline CAD, jalur multi-segmen CAD, DXF LWPOLYLINE, membentuk ulang polyline, grip vertex CAD, offset polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

Perintah `polyline` menggambar jalur terhubung dengan sejumlah segmen lurus, semua disimpan sebagai satu entitas `LWPOLYLINE`. Karena seluruh jalur adalah satu objek, memilihnya memilih setiap segmen sekaligus — pindahkan, putar, atau skalakan seluruh bentuk dalam satu operasi. Ini adalah perbedaan utama dari [Line](../line/) yang dirantai, di mana setiap segmen adalah entitas independen.

Polyline juga bisa **ditutup**: perintah [Rectangle](../rectangle/) menggunakan entitas `LWPOLYLINE` yang sama dengan flag close yang diatur.

## Menggambar polyline

1. Ketik `polyline` di terminal atau klik tombol toolbar **Polyline**.
2. **Klik titik pertama**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik setiap titik berikutnya** — setiap klik menambah segmen. Entri koordinat bekerja di setiap langkah.
4. Tekan **Enter** atau **Space** untuk selesai (membutuhkan setidaknya 2 titik yang ditempatkan).

```
  ●──────●
  1st    2nd
          \
           \  segmen ke-3 (sedang berlangsung — kursor di sini)
            ●  ← klik untuk menambah, Enter/Space untuk selesai
```

Menekan **Escape** kapan saja akan membuang semua titik yang ditempatkan dan keluar dari perintah.

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk vertex mana saja:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan vertex.

## Penguncian sudut dan panjang segmen tepat

Logika snap 45° yang sama seperti perintah [Line](../line/#angle-locking-and-exact-length-input) berlaku antara dua titik berturutan mana pun. Saat terkunci ke sumbu:

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke panjang segmen |
| `-` | Panjang negatif — membalik arah sepanjang sumbu (karakter pertama saja) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Tempatkan titik berikutnya pada jarak yang diketik |

Panjang yang terakumulasi saat ini muncul di prompt terminal secara real time. Mengklik saat terkunci memproyeksikan ke sumbu sehingga vertex baru mendarat tepat di atasnya.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X, atau panjang segmen saat sudut terkunci |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau panjang yang diketik, atau selesaikan polyline jika tidak ada yang diketik dan ≥ 2 titik ada |
| `Space` | Selesaikan polyline (sama dengan Enter saat tidak ada input yang sedang berlangsung) |
| `Escape` | Buang semua titik dan keluar |

## Pengeditan grip — vertex dan titik tengah segmen

Polyline yang dipilih menampilkan dua jenis grip:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Vertex** | Di setiap titik yang ditempatkan | Seret untuk memposisikan ulang vertex tersebut; semua segmen yang terhubung meregang mengikuti |
| **Titik tengah segmen** | Titik tengah setiap segmen | Seret untuk menerjemahkan **kedua** titik akhir segmen tersebut bersama-sama, menjaga panjang dan sudut segmen tetap utuh |

Grip titik tengah segmen unik untuk polyline — memungkinkan Anda menggeser segmen individual ke samping tanpa mengubah panjangnya. Pada [Line](../line/), grip titik tengah justru mengaktifkan perintah Move untuk seluruh entitas.

Tidak ada grip "pindahkan seluruh polyline". Untuk memindahkan seluruh jalur, gunakan perintah [Move](../move/).

## Memilih polyline

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih polyline jika klik mendarat dalam jarak hit-test dari segmen mana pun |
| **Seret ke kanan** (ketat) | Semua vertex harus berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Segmen mana pun yang melintasi batas kotak memilih seluruh polyline |

Karena polyline adalah satu entitas, seleksi persilangan yang menyentuh segmen mana pun memilih semua segmen.

## Perintah edit yang didukung

Polyline mendukung semua transformasi umum dan offset, tetapi **tidak** trim atau extend (itu khusus untuk [Line](../line/)):

| Perintah | Apa yang terjadi pada polyline |
|---------|------------------------------|
| [Move](../move/) | Menerjemahkan semua vertex dengan perpindahan yang sama |
| [Copy](../copy/) | Membuat polyline identik di posisi baru |
| [Rotate](../rotate/) | Memutar semua vertex di sekitar titik dasar yang dipilih |
| [Mirror](../mirror/) | Memantulkan semua vertex melintasi sumbu cermin |
| [Scale](../scale/) | Menskalakan semua vertex secara seragam dari titik dasar |
| [Offset](../offset/) | Membuat polyline paralel pada jarak tegak lurus yang tetap |
| [Delete](../delete/) | Menghapus polyline dari gambar |

## Properti

Ketika polyline dipilih, panel properti menampilkan:

**Umum**

| Properti | Default | Arti |
|----------|---------|---------|
| Color | 256 (ByLayer) | Indeks warna ACI |
| Layer | `0` | Penetapan layer |
| Linetype | ByLayer | Pola tipe garis bernama |
| Linetype Scale | 1 | Faktor skala pada pola tipe garis |
| Thickness | 0 | Ketebalan ekstrusi |

**Geometri**

| Properti | Arti |
|----------|---------|
| Closed | Apakah vertex terakhir terhubung kembali ke vertex pertama |
| Vertex Count | Total jumlah vertex |
| Vertices | Daftar koordinat semua vertex |

## Polyline vs Line — kapan menggunakan yang mana

| | Polyline | Line |
|---|---------|------|
| Jumlah entitas | Satu `LWPOLYLINE` untuk seluruh jalur | Satu `LINE` per segmen |
| Bentuk tertutup | Ya (flag close) | Tidak |
| Trim / Extend | Tidak | Ya — segmen demi segmen |
| Grip titik tengah segmen | Menerjemahkan seluruh segmen | Mengaktifkan Move untuk entitas |
| Terbaik untuk | Garis luar, kontur, bentuk yang dijaga utuh | Garis konstruksi, geometri yang akan dipotong |

## DXF — entitas LWPOLYLINE

Polyline disimpan sebagai entitas `LWPOLYLINE` dalam file DXF. Semua properti — koordinat vertex, flag close, warna, layer, tipe garis, skala tipe garis, dan ketebalan — dapat dipertukarkan tanpa kehilangan data. Persegi panjang yang digambar dengan perintah [Rectangle](../rectangle/) juga disimpan sebagai `LWPOLYLINE` (tertutup, empat vertex) dan tidak dapat dibedakan pada level DXF.

Entitas `LWPOLYLINE` dari aplikasi yang kompatibel dengan DXF mana pun (LibreCAD, FreeCAD, dll.) dibaca kembali sebagai polyline yang sepenuhnya dapat diedit di editor.
