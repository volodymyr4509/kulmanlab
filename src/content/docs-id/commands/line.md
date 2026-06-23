---
sidebar_position: 1
title: Perintah Line — Menggambar, Merangkai, Memotong dan Memperpanjang Garis di KulmanLab CAD
description: Perintah Line menggambar segmen garis lurus individual yang dapat dirangkai ujung ke ujung. Garis adalah satu-satunya tipe entitas yang dapat dioperasikan oleh Trim dan Extend. Dukungan penuh DXF sebagai entitas LINE.
keywords: [perintah garis CAD, menggambar garis lurus CAD, merangkai segmen garis, potong garis CAD, perpanjang garis CAD, kunci sudut CAD, entitas DXF LINE, kulmanlab]
---

# Line

Perintah `line` menggambar segmen garis lurus individual yang disimpan sebagai entitas `LINE` terpisah dalam model DXF. Setelah setiap segmen, perintah tetap aktif dan menggunakan titik akhir sebagai titik awal baru, sehingga Anda dapat membangun jalur yang terhubung satu segmen per waktu. Tidak seperti [Polyline](./polyline), garis yang dirangkai tetap menjadi entitas independen — masing-masing dapat dipotong, diperpanjang, atau dihapus tanpa memengaruhi tetangganya.

## Menggambar garis

1. Ketik `line` di terminal atau klik tombol toolbar **Line**.
2. **Klik titik awal**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik akhir** — segmen ditempatkan dan titik akhir menjadi titik awal berikutnya. Entri koordinat juga berfungsi di sini.
4. Terus klik (atau ketik) untuk merangkai lebih banyak segmen.
5. Tekan **Enter** atau **Escape** untuk berhenti.

```
  ●──────────●──────────●──────────●
 awal     klik ke-2  klik ke-3   Enter untuk selesai
            (otomatis menjadi awal berikutnya)
```

Hanya perlu satu segmen? Tekan **Enter** atau **Escape** segera setelah langkah 3.

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk titik awal atau titik berikutnya:

1. Ketik nilai X (digit, `.`, atau `-`).
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan titik.

## Penguncian sudut dan input panjang tepat

Saat Anda menggerakkan kursor setelah menempatkan titik, perintah memantau sumbu snap 45° (0°, 45°, 90°, 135°, …). Sudut **terkunci** ketika:

- kursor setidaknya **5 × ukuran grip** dari jangkar, **dan**
- kursor berada dalam **1 ukuran grip** dari jarak tegak lurus ke sumbu terdekat.

Saat terkunci, pratinjau snap ke sumbu dan Anda dapat memasukkan panjang tepat:

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai panjang |
| `-` | Panjang negatif — membalik arah sepanjang sumbu (karakter pertama saja) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Tempatkan titik akhir pada jarak yang diketik |

Nilai yang terakumulasi ditampilkan secara langsung di terminal (mis. `klik titik akhir atau masukkan panjang: 12.5`). Klik saat terkunci dan klik diproyeksikan ke sumbu, sehingga titik akhir selalu tepat berada di atasnya.

Bergerak kembali dekat titik jangkar menonaktifkan kunci.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X, atau jarak saat sudut terkunci |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau panjang yang diketik, atau selesaikan rantai jika tidak ada yang diketik |
| `Escape` | Selesaikan rantai dan keluar |

## Pengeditan grip — meregangkan titik akhir

Sebuah garis yang dipilih menampilkan tiga grip:

| Grip | Posisi | Fungsi |
|------|-------|--------------|
| **Start** | Titik akhir pertama | Seret untuk memposisikan ulang — ujung tetap diam |
| **Midpoint** | Titik tengah garis | Mengaktifkan **Move** untuk seluruh garis |
| **End** | Titik akhir kedua | Seret untuk memposisikan ulang — awal tetap diam |

Meregangkan satu titik akhir tidak pernah memengaruhi titik akhir lainnya. Ini berbeda dari pengeditan grip [Polyline](./polyline), di mana memindahkan vertex membentuk ulang seluruh jalur.

## Memilih garis

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih garis jika klik berada dalam jarak hit-test dari segmen |
| **Seret ke kanan** (ketat) | Garis dipilih hanya jika kedua titik akhir berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Garis dipilih jika ada bagian segmen yang melintasi batas kotak |

## Perintah edit yang didukung

Garis adalah entitas **satu-satunya** yang dapat dioperasikan oleh [Trim](./trim) dan [Extend](./extend). Semua perintah transformasi standar juga berlaku:

| Perintah | Apa yang terjadi pada garis |
|---------|------------------------|
| [Move](./move) | Menerjemahkan kedua titik akhir dengan perpindahan yang sama |
| [Copy](./copy) | Membuat garis identik di posisi baru |
| [Rotate](./rotate) | Memutar kedua titik akhir di sekitar titik dasar yang dipilih |
| [Mirror](./mirror) | Memantulkan kedua titik akhir melintasi sumbu cermin |
| [Scale](./scale) | Menskalakan kedua titik akhir secara seragam dari titik dasar |
| [Offset](./offset) | Membuat garis paralel pada jarak tegak lurus yang tetap |
| [Trim](./trim) | Memotong garis pada perpotongan — **hanya garis** |
| [Extend](./extend) | Meregangkan titik akhir terdekat untuk mencapai batas — **hanya garis** |
| [Delete](./delete) | Menghapus garis dari gambar |

## Properti

Ketika garis dipilih, panel properti menampilkan setiap field yang dibawa oleh rekaman DXF `LINE`:

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
| Start X / Start Y | Koordinat titik akhir pertama |
| End X / End Y | Koordinat titik akhir kedua |

Semua field dapat diedit langsung di panel tanpa menjalankan ulang perintah.

## Line vs Polyline — kapan menggunakan yang mana

| | Line | Polyline |
|---|------|---------|
| Jumlah entitas | Satu `LINE` per segmen | Satu `LWPOLYLINE` untuk seluruh jalur |
| Trim / Extend | Ya — segmen demi segmen | Tidak |
| Bentuk tertutup | Tidak | Ya (flag close) |
| Pengeditan grip | Regangkan titik akhir individual | Pindahkan vertex mana saja di sepanjang jalur |
| Terbaik untuk | Garis konstruksi, segmen tunggal, geometri yang akan dipotong | Kontur, garis luar, bentuk yang dijaga utuh |

## DXF — entitas LINE

Garis disimpan sebagai entitas `LINE` dalam file DXF. Setiap properti — koordinat awal/akhir, warna, layer, tipe garis, skala tipe garis, dan ketebalan — dapat dipertukarkan tanpa kehilangan data. Ketika Anda membuka DXF yang berisi entitas `LINE`, mereka menjadi objek `Line` yang sepenuhnya dapat diedit di editor.

Garis yang digambar di editor juga ditulis sebagai entitas `LINE` saat disimpan, sehingga dapat dibaca oleh LibreCAD, FreeCAD, dan aplikasi lain yang kompatibel dengan DXF.
