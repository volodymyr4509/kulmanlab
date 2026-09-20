---
title: Perintah Rotate — Memutar Entitas di Sekitar Titik Dasar
description: Perintah Rotate memutar entitas yang dipilih di sekitar titik dasar yang dipilih. Sudut dapat diketik secara tepat atau ditetapkan dengan mengklik — arah kursor dari titik dasar ke klik menentukan sudutnya. Sudut positif berlawanan arah jarum jam dalam koordinat DXF.
keywords: [perintah putar CAD, memutar entitas CAD, memutar objek sudut, rotasi berlawanan arah jarum jam CAD, sudut yang diketik putar, kulmanlab]
group: edit
order: 3
---

# Rotate

Perintah `Putar` memutar entitas yang dipilih di sekitar titik dasar. Anda menentukan sudut rotasi dengan mengetik angka dalam derajat atau dengan mengklik — sudutnya dihitung dari arah antara titik dasar dan posisi klik.

## Dua cara memulai

**Pra-pilih, lalu putar** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `Putar` di terminal atau klik tombol toolbar **Rotate**.
3. **Klik titik dasar** — pusat rotasi. Atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Ketik sudut dan tekan Enter**, atau **klik** untuk menetapkan sudut dari arah kursor.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `Putar` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. **Klik titik dasar** (entri koordinat tersedia), kemudian atur sudutnya.

```
  Sebelum:            Sesudah (rotasi 90° di sekitar ●):
                        ╔══╗
  ●  [entitas]    →   ● ║    ║
                        ╚══╝
```

Pratinjau bayangan langsung dari entitas yang diputar mengikuti sudut kursor setelah titik dasar ditetapkan.

## Menetapkan sudut

**Sudut yang diketik** — ketik angka (dalam derajat) kapan saja setelah titik dasar ditempatkan. Pratinjau snap ke sudut yang diketik sementara Anda terus menyesuaikan sebelum menekan Enter.

**Sudut klik** — jika tidak ada nilai yang diketik, mengklik menetapkan sudut sama dengan `atan2(kursorY − dasarY, kursorX − dasarX)` — arah dari titik dasar ke klik, dalam derajat.

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Tambahkan digit ke nilai sudut |
| `-` | Sudut negatif (karakter pertama saja) |
| `C` | Alihkan mode Copy (sebelum mengetik digit apa pun) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Terapkan rotasi pada sudut yang diketik |

## Memutar salinan

Tekan **C** pada prompt sudut — sebelum mengetik digit apa pun — untuk mengalihkan mode **Copy**, pola opsi inline yang sama yang digunakan opsi Arc [Polyline](../polyline/). Prompt menampilkan status saat ini sebagai `[Copy=true]` / `[Copy=false]`, dan menekan **C** lagi akan membaliknya.

Dengan Copy aktif, menerapkan rotasi membiarkan seleksi asli tetap di tempatnya tanpa perubahan dan sebagai gantinya menambahkan salinan baru yang diputar dari setiap entitas yang dipilih. Dengan Copy nonaktif (default), seleksi berputar di tempat seperti biasa.

## Arah sudut

Sudut mengikuti **konvensi DXF**:

- Nilai **positif** memutar **berlawanan arah jarum jam** dalam koordinat gambar (Y-atas).
- Di layar, di mana sumbu Y dibalik (Y-bawah), sudut positif tampak **searah jarum jam**.

Nilai umum: `90` = seperempat putaran, `180` = setengah putaran, `-90` = seperempat putaran berlawanan.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi |
| `0`–`9`, `.`, `-` | Mulai entri koordinat X (fase titik dasar), atau nilai sudut (fase sudut) |
| `,` | Kunci X dan pindah ke entri Y (fase titik dasar) |
| `C` | Alihkan mode Copy (fase sudut, sebelum mengetik digit apa pun) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau terapkan rotasi |
| `Escape` | Batal dan reset |

## Seleksi selama perintah

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi |

## Entitas yang didukung

Rotate bekerja pada setiap tipe entitas. Geometri setiap entitas diputar di sekitar titik dasar — misalnya, Circle memindahkan pusatnya sementara radius tetap sama; Arc memindahkan pusatnya dan menggeser sudut awal dan akhirnya sebesar jumlah rotasi; entitas Text memindahkan titik jangkarnya dan menambahkan sudut ke properti Rotation Degree.
