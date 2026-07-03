---
sidebar_position: 5
title: Perintah Arc — Menggambar Busur Tiga Titik Menggunakan Metode Lingkaran Luar di KulmanLab CAD
description: Perintah Arc menggambar busur melingkar melalui tepat tiga titik yang diklik menggunakan geometri lingkaran luar. Grip awal dan akhir memungkinkan Anda menyeret titik akhir busur ke sudut dan radius baru setelah penempatan. Dukungan penuh DXF sebagai entitas ARC.
keywords: [perintah busur CAD, busur tiga titik CAD, busur lingkaran luar, menggambar busur CAD, entitas DXF ARC, pengeditan grip busur, kulmanlab]
---

# Arc

Perintah `arc` menggambar busur melingkar melalui tiga titik yang Anda klik. Busur dihitung sebagai lingkaran luar unik yang melewati ketiga titik — tidak perlu menentukan pusat atau radius secara langsung. Busur berjalan dari klik pertama ke klik ketiga, melewati yang kedua.

## Menggambar busur

1. Ketik `arc` di terminal atau klik tombol toolbar **Arc**.
2. **Klik titik pertama** — salah satu ujung busur. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik kedua** — titik yang harus dilewati busur (mengontrol kelengkungan dan arah). Entri koordinat juga berfungsi di sini.
4. **Klik titik ketiga** — ujung lain busur. Busur ditempatkan dan perintah keluar. Entri koordinat juga berfungsi di sini.

```
           ● (klik ke-2 — titik tengah pada kurva)
          / \
         /   \
        ●     ●
     1st       3rd
```

Pratinjau garis menghubungkan dua klik pertama saat Anda memposisikan yang ketiga. Dari klik kedua dan seterusnya, pratinjau busur langsung mengikuti kursor.

> **Titik segaris**: jika ketiga titik berada pada garis lurus, busur tidak dapat dihitung dan tidak ada entitas yang ditempatkan. Pindahkan titik kedua dari garis dan coba lagi.

## Entri koordinat

Pada salah satu dari tiga langkah, Anda dapat mengetik posisi tepat alih-alih mengklik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan titik.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik |
| `Escape` | Buang semua titik yang ditempatkan dan keluar |

## Pengeditan grip — menyesuaikan titik akhir dan radius

Busur yang dipilih memperlihatkan tiga grip:

| Grip | Posisi | Fungsi |
|------|----------|--------------|
| **Center** | Pusat geometri lingkaran luar | Memindahkan seluruh busur; radius dan sudut tidak berubah |
| **Start** | Titik akhir pertama pada busur | Seret untuk memindahkan awal sepanjang lingkaran luar — mengubah sudut awal dan radius |
| **End** | Titik akhir terakhir pada busur | Seret untuk memindahkan akhir sepanjang lingkaran luar — mengubah sudut akhir dan radius |

Menyeret grip awal atau akhir memposisikan ulangnya ke lokasi seret dan menghitung ulang sudut dan radius dari posisi baru tersebut relatif terhadap pusat. Titik akhir yang berlawanan tetap diam.

## Memilih busur

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Memilih jika klik mendarat dekat kurva busur (bukan tali busur) |
| **Seret ke kanan** (ketat) | Titik sampel yang didistribusikan sepanjang busur semuanya harus berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Titik sampel mana pun pada busur yang berada di dalam kotak memilihnya |

## Perintah edit yang didukung

| Perintah | Apa yang terjadi pada busur |
|---------|------------------------|
| [Move](../move/) | Menerjemahkan pusat; radius dan sudut tidak berubah |
| [Copy](../copy/) | Membuat busur identik di posisi baru |
| [Rotate](../rotate/) | Memutar pusat dan menggeser sudut awal/akhir sebesar jumlah rotasi |
| [Mirror](../mirror/) | Memantulkan pusat dan membalik sudut awal/akhir melintasi sumbu cermin |
| [Scale](../scale/) | Menskalakan posisi pusat dan mengalikan radius dengan faktor skala |
| [Offset](../offset/) | Membuat busur konsentris pada radius yang lebih besar atau lebih kecil, rentang sudut yang sama |
| [Delete](../delete/) | Menghapus busur |

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
| Center X / Center Y | Pusat lingkaran luar |
| Radius | Radius lingkaran luar |
| Start Angle | Sudut dalam derajat di mana busur dimulai (diukur dari sumbu X positif) |
| End Angle | Sudut dalam derajat di mana busur berakhir |

## Arc vs Circle — kapan menggunakan yang mana

| | Arc | Circle |
|---|-----|--------|
| Rentang | Sebagian — dari klik pertama ke ketiga | Penuh 360° |
| Metode input | Tiga titik pada kurva | Pusat + radius (klik atau ketik) |
| Input yang diketik | Koordinat X,Y untuk setiap titik | Nilai radius (pusat juga menerima X,Y) |
| Ubah ukuran setelah penempatan | Seret grip awal/akhir | Seret grip kardinal mana saja |
| Terbaik untuk | Fillet, sudut membulat, jalur melengkung | Lubang penuh, fitur bulat |

## DXF — entitas ARC

Busur disimpan sebagai entitas `ARC` dalam file DXF, menyimpan koordinat pusat, radius, sudut awal, dan sudut akhir. Semua properti — termasuk warna, layer, tipe garis, skala tipe garis, dan ketebalan — dapat dipertukarkan tanpa kehilangan data. Aplikasi yang kompatibel dengan DXF mana pun (LibreCAD, FreeCAD, dll.) membacanya sebagai busur standar.
