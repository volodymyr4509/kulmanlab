---
title: Ellipse — Elips Terputar Berdasarkan Pusat dan Dua Sumbu
description: Perintah Ellipse menggambar elips dalam tiga klik — pusat, titik akhir sumbu pertama (arah mana saja), lalu panjang sumbu kedua. Kedua sumbu selalu tegak lurus. Setiap semi-sumbu memiliki gripnya sendiri untuk pengubahan ukuran independen setelah penempatan. Dukungan penuh DXF sebagai entitas ELLIPSE.
keywords: [perintah elips CAD, menggambar elips CAD, elips terputar CAD, sumbu elips, entitas DXF ELLIPSE, pengeditan grip elips, rasio sumbu, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Perintah `ellipse` menggambar elips menggunakan tiga klik: titik pusat, titik akhir semi-sumbu pertama (utama) pada sudut mana saja, dan panjang semi-sumbu kedua (minor). Kedua sumbu selalu tegak lurus satu sama lain — arah sumbu kedua diturunkan secara otomatis dari yang pertama.

## Menggambar elips

1. Ketik `ellipse` di terminal atau klik tombol toolbar **Ellipse**.
2. **Klik titik pusat**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik akhir sumbu pertama** — menetapkan arah dan panjang semi-sumbu pertama. Entri koordinat juga berfungsi di sini.
4. **Atur panjang sumbu kedua** — gerakkan kursor tegak lurus ke sumbu pertama, lalu klik atau ketik panjang.

```
               ● ← titik akhir sumbu pertama (langkah 3)
              /
  pusat ●  /  ← sumbu pertama (sudut mana saja)
            |
            ● ← kursor di sini menetapkan panjang sumbu kedua (langkah 4)
```

Elips ditempatkan setelah langkah 4 dan perintah keluar.

## Input sumbu — klik, koordinat, atau panjang yang diketik

**Pusat (langkah 2):** klik atau ketik `X,Y` untuk posisi tepat.

**Titik akhir sumbu pertama (langkah 3):** klik, atau ketik `X,Y` untuk koordinat tepat. Penguncian sudut juga snap ke kelipatan 45° — saat terkunci, ketik panjang dan tekan **Enter** untuk menempatkan titik akhir pada jarak tepat tersebut.

**Sumbu kedua (langkah 4):** panjang yang diketik selalu tersedia — tidak perlu kunci sudut. Arahnya sudah tetap tegak lurus ke sumbu pertama; mengetik hanya menetapkan panjang.

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke panjang sumbu (fase sumbu kedua) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Tempatkan titik akhir sumbu pada panjang yang diketik |

## Entri koordinat (pusat dan titik akhir sumbu pertama)

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X (fase pusat/sumbu pertama), atau panjang sumbu saat sudut terkunci |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau panjang yang diketik |
| `Escape` | Batal dan reset |

## Pengeditan grip — pengubahan ukuran sumbu independen

Elips yang dipilih memperlihatkan lima grip:

| Grip | Jumlah | Fungsi |
|------|-------|--------------|
| **Center** | 1 | Memindahkan seluruh elips; kedua sumbu tidak berubah |
| **Titik akhir sumbu utama** | 2 (ujung berlawanan dari sumbu yang lebih panjang) | Seret untuk mengubah ukuran panjang semi-sumbu utama; ukuran absolut sumbu minor tetap konstan |
| **Titik akhir sumbu minor** | 2 (ujung berlawanan dari sumbu yang lebih pendek) | Seret untuk mengubah ukuran panjang semi-sumbu minor; sumbu utama tidak berubah |

Grip sumbu utama dan minor bersifat independen — Anda dapat membentuk ulang elips tanpa menjalankan ulang perintah.

## Memilih elips

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat dekat garis luar elips |
| **Seret ke kanan** (ketat) | Kotak pembatas elips yang sejajar sumbu harus muat sepenuhnya di dalam kotak seleksi |
| **Seret ke kiri** (persilangan) | Bagian mana pun dari garis luar elips yang melintasi batas kotak seleksi memilihnya |

## Perintah edit yang didukung

| Perintah | Apa yang terjadi pada elips |
|---------|-----------------------------|
| [Move](../move/) | Menerjemahkan pusat; kedua sumbu tidak berubah |
| [Copy](../copy/) | Membuat elips identik di pusat baru |
| [Rotate](../rotate/) | Memutar posisi pusat dan vektor sumbu utama dengan sudut yang sama |
| [Mirror](../mirror/) | Memantulkan pusat dan menghitung ulang arah sumbu utama melintasi sumbu cermin |
| [Scale](../scale/) | Menskalakan posisi pusat dan mengalikan panjang kedua semi-sumbu dengan faktor |
| [Offset](../offset/) | Membuat elips konsentris yang di-offset ke luar atau ke dalam dengan jarak tetap |
| [Delete](../delete/) | Menghapus elips |

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
| Center X / Center Y | Pusat elips |
| Major Axis X / Major Axis Y | Vektor dari pusat ke titik akhir sumbu utama (mengkodekan arah dan panjang) |
| Axis Ratio | Rasio semi-sumbu minor terhadap semi-sumbu utama (0 < rasio ≤ 1) |
| Start Angle / End Angle | Sudut parametrik dalam derajat; keduanya 0°/360° untuk elips penuh |

## Ellipse vs Circle — kapan menggunakan yang mana

| | Ellipse | Circle |
|---|---------|--------|
| Sumbu | Dua semi-sumbu independen pada sudut mana saja | Satu radius, simetris |
| Rotasi | Dapat ditempatkan pada sudut mana saja | Tidak ada rotasi |
| Input yang diketik | Panjang per sumbu | Hanya radius |
| Ubah ukuran grip | Utama dan minor secara independen | Keempat titik kardinal secara setara |
| Terbaik untuk | Tampilan miring, fitur oval, lubang perspektif | Fitur bulat simetris |

## DXF — entitas ELLIPSE

Elips disimpan sebagai entitas `ELLIPSE` dalam file DXF. Format menyimpan titik pusat, vektor sumbu utama penuh (arah + panjang), dan rasio sumbu. Rotasi, bentuk, dan semua properti gaya dapat dipertukarkan tanpa kehilangan data. Lingkaran **tidak** disimpan sebagai elips yang terdegenerasi — kedua tipe entitas tetap berbeda dalam model DXF.
