---
title: Perintah Circle — Menggambar Lingkaran Berdasarkan Pusat dan Radius di KulmanLab CAD
description: Perintah Circle menempatkan lingkaran dengan mengklik titik pusat lalu mengklik atau mengetik radius. Empat grip kardinal memungkinkan Anda mengubah ukuran radius dengan menyeret tanpa menjalankan ulang perintah. Dukungan penuh DXF sebagai entitas CIRCLE.
keywords: [perintah lingkaran CAD, menggambar lingkaran CAD, input radius lingkaran, ubah ukuran lingkaran grip, entitas DXF CIRCLE, dimradius lingkaran, kulmanlab]
group: shapes
order: 4
---

# Circle

Perintah `circle` menggambar lingkaran yang ditentukan oleh titik pusat dan radius. Setelah pusat diklik, Anda dapat mengatur radius dengan mengklik titik kedua di kanvas atau mengetik angka tepat — kedua opsi tersedia secara bersamaan.

## Menggambar lingkaran

1. Ketik `circle` di terminal atau klik tombol toolbar **Circle**.
2. **Klik titik pusat**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Atur radius — baik dengan:
   - **Mengklik titik mana saja** di kanvas — jarak dari pusat menjadi radius, atau
   - **Mengetik radius** dan menekan **Enter** untuk nilai tepat.

Lingkaran ditempatkan seketika dan perintah keluar.

```
  pusat ●
          \  pratinjau garis radius
           \
            ● ← klik di sini, atau ketik angka
```

Selama fase radius, pratinjau langsung menampilkan lingkaran pada jarak kursor saat ini dan juga menggambar garis radius dari pusat ke titik saat ini.

## Entri koordinat pusat

Alih-alih mengklik, Anda dapat mengetik posisi pusat:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan pusat dan beralih ke input radius.

## Input radius yang diketik

Setelah pusat ditempatkan, mengetik segera membangun nilai radius:

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai radius |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Tempatkan lingkaran pada radius yang diketik |

Nilai yang terakumulasi ditampilkan di prompt terminal (mis. `masukkan radius lingkaran: 25`). Pratinjau memperbarui untuk menampilkan radius yang diketik sementara kursor mengontrol arah penanda garis radius.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X (fase pusat), atau digit radius (fase radius) |
| `,` | Kunci X dan pindah ke entri Y (fase pusat) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau radius yang diketik |
| `Escape` | Batal dan reset |

## Pengeditan grip — mengubah ukuran radius

Lingkaran yang dipilih memperlihatkan lima grip:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Center** | Titik pusat | Memindahkan seluruh lingkaran; radius tidak berubah |
| **Left** | Titik paling kiri (pusat − radius) | Seret untuk mengatur radius baru = jarak ke pusat |
| **Right** | Titik paling kanan (pusat + radius) | Seret untuk mengatur radius baru = jarak ke pusat |
| **Top** | Titik paling atas | Seret untuk mengatur radius baru = jarak ke pusat |
| **Bottom** | Titik paling bawah | Seret untuk mengatur radius baru = jarak ke pusat |

Keempat grip kardinal berperilaku identik — radius baru sama dengan jarak dari pusat ke posisi seret. Pusat tetap diam.

## Memilih lingkaran

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat dekat lingkar |
| **Seret ke kanan** (ketat) | Seluruh kotak pembatas (pusat ± radius) harus berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Bagian mana pun dari lingkar yang melintasi atau menyentuh batas kotak memilih lingkaran |

## Perintah edit yang didukung

| Perintah | Apa yang terjadi pada lingkaran |
|---------|---------------------------|
| [Move](../move/) | Menerjemahkan pusat; radius tidak berubah |
| [Copy](../copy/) | Membuat lingkaran identik di pusat baru |
| [Rotate](../rotate/) | Memutar pusat di sekitar titik dasar; radius tidak berubah |
| [Mirror](../mirror/) | Memantulkan pusat melintasi sumbu cermin; radius tidak berubah |
| [Scale](../scale/) | Menskalakan posisi pusat dan mengalikan radius dengan faktor skala |
| [Offset](../offset/) | Membuat lingkaran konsentris pada radius yang lebih besar atau lebih kecil |
| [Delete](../delete/) | Menghapus lingkaran |

## Properti

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
| Center X / Center Y | Koordinat titik pusat |
| Radius | Radius lingkaran dalam satuan gambar |

## Circle vs Arc — kapan menggunakan yang mana

| | Circle | Arc |
|---|--------|-----|
| Rentang | Penuh 360° | Sebagian — ditentukan oleh sudut awal dan akhir |
| Cara menggambar | Pusat + radius | Tiga titik pada kurva |
| Input yang diketik | Nilai radius | Tidak ada — hanya klik |
| Grip ubah ukuran | 4 titik kardinal | Titik awal dan akhir (sudut + radius) |
| Dimensi | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Terbaik untuk | Lubang penuh, lingkaran baut, fitur bulat | Fillet, kurva sebagian, jalur melengkung |

## DXF — entitas CIRCLE

Lingkaran disimpan sebagai entitas `CIRCLE` dalam file DXF. Koordinat pusat, radius, warna, layer, tipe garis, skala tipe garis, dan ketebalan semuanya dapat dipertukarkan tanpa kehilangan data. Aplikasi yang kompatibel dengan DXF mana pun membacanya sebagai lingkaran standar.
