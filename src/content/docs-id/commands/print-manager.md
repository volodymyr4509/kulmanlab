---
title: Print Manager — Mengekspor Gambar sebagai PNG, JPEG, WebP, atau PDF
description: Perintah PrintManager membuka Print Manager — jendela ekspor khusus dengan pratinjau langsung yang sama persis dengan file yang diekspor, pengaturan Kualitas/DPI, pemilih format, gaya cetak Default/Monochrome/Blueprint, dan seleksi area opsional. Mendukung PNG, JPEG, WebP, dan PDF.
keywords: [CAD ekspor PNG, CAD ekspor PDF, cetak gambar CAD, print manager, kualitas cetak DPI, ekspor monokrom, gaya cetak blueprint, kulmanlab ekspor]
group: file
order: 4
---

# Print Manager

Perintah `PrintManager` membuka **Print Manager** — jendela ekspor khusus dengan kanvas pratinjau langsung, pemilih format (PNG / JPEG / WebP / PDF), pemilih Style (Default / Monochrome / Blueprint), dan pemotongan area opsional. Tidak ada yang dikirim ke printer fisik; output diunduh sebagai file.

## Membuka Print Manager

Klik tombol toolbar **Print** atau ketik `PrintManager` di terminal. Print Manager langsung terbuka menampilkan pratinjau viewport saat ini.

Pratinjau dirender melalui jalur kode yang persis sama, pada resolusi piksel yang persis sama, seperti file yang akhirnya Anda ekspor — mengubah Quality, Style, atau area ekspor langsung merender ulang pratinjau, jadi apa yang Anda lihat adalah apa yang diunduh, bukan perkiraannya.

## Layout Print Manager

Jendela memiliki dua panel:
- **Sidebar kiri** — semua kontrol ekspor.
- **Panel kanan** — kanvas pratinjau langsung yang diperbarui saat Anda mengubah pengaturan.

### Kontrol sidebar

| Kontrol | Deskripsi |
|---------|-------------|
| **Change Area** | Potong ke persegi panjang kustom pada kanvas (lihat di bawah) — benar-benar memotong gambar yang diekspor, termasuk pada layout dengan ruang kertas, bukan hanya pratinjau di layar |
| Dropdown **Quality** | Menetapkan resolusi ekspor (lihat di bawah) |
| Dropdown **Style** | Default, Monochrome, atau Blueprint — lihat *Gaya cetak* di bawah. Monochrome secara default untuk output cetak yang bersih |
| Dropdown **Format** | PNG, JPEG, WebP, atau PDF |
| Tombol **Export** | Hasilkan dan unduh file |

## Gaya cetak

Dropdown **Style** mengontrol baik warna tinta tempat entitas digambar maupun latar belakang halaman:

| Style | Tinta | Latar belakang halaman |
|-------|-------|--------------------------|
| **Default** | Warna asli setiap entitas | Putih |
| **Monochrome** *(default)* | Hitam pekat, terlepas dari warna entitas/layer | Putih |
| **Blueprint** | Putih pekat, terlepas dari warna entitas/layer | Biru Prusia gelap, dengan kisi referensi yang samar |

Blueprint mereproduksi tampilan cetak arsitektur cyanotype tradisional — garis putih di atas lembar biru gelap. Kisi referensinya diukur relatif terhadap ukuran halaman, bukan DPI, sehingga terlihat dengan kepadatan yang sama pada pengaturan Quality apa pun, alih-alih menjadi lebih padat seiring meningkatnya resolusi.

## Kualitas dan resolusi

Dropdown **Quality** menetapkan DPI tempat ekspor dirender:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(default)* | 150 |
| Presentation | 300 |
| Max | 600 |

Kualitas yang lebih tinggi menghasilkan gambar yang lebih besar dan lebih tajam pada ukuran fisik yang sama — ketebalan garis ikut menskalakan bersama resolusi, sehingga garis mempertahankan ketebalan *fisik* yang sama di atas kertas pada pengaturan Kualitas apa pun, alih-alih terlihat lebih tipis saat DPI meningkat. Satu pengecualian adalah garis rambut (ketebalan garis `0`), yang secara konvensional didefinisikan sebagai "garis paling tipis yang dapat digambar oleh perangkat output" — garis ini tetap pada lebar tetap 1 piksel di setiap tingkat Kualitas, sama seperti perilakunya di kanvas langsung.

Mengubah Kualitas langsung merender ulang pratinjau, sehingga Anda melihat ketajaman sebenarnya (dan trade-off ukuran file) sebelum mengekspor.

## Memilih area ekspor kustom

Secara default pratinjau menampilkan persis apa yang terlihat di kanvas saat Anda membuka Print Manager. Untuk mengekspor wilayah tertentu:

1. Klik **Change Area** — Print Manager tersembunyi dan kanvas menjadi interaktif.
2. **Klik sudut pertama** dari persegi panjang ekspor.
3. **Klik sudut yang berlawanan** — Print Manager terbuka kembali dengan area yang dipilih dalam pratinjau.

Tekan `Escape` selama seleksi area untuk membatalkan dan memulihkan area sebelumnya.

Kanvas pratinjau diubah ukurannya secara dinamis untuk cocok dengan **rasio aspek tepat** dari area yang dipilih, sehingga pratinjau akurat secara piksel.

## Format ekspor

| Format | Terbaik untuk | Catatan |
|--------|----------|-------|
| **PNG** | Lossless, garis tajam | Latar belakang halaman sesuai Style tertanam, tidak ada transparansi |
| **JPEG** | File lebih kecil untuk berbagi | Kualitas 95%, sedikit kompresi |
| **WebP** | File terkecil untuk web | Kualitas 95% yang sama, kompresi lebih baik dari JPEG |
| **PDF** | Dokumen siap cetak | Gambar tertanam dalam wadah PDF pada DPI dari Quality yang dipilih, berukuran agar halaman dicetak pada skala fisik sebenarnya |

File yang diekspor diberi nama `kulman-<cap waktu>.<ekstensi>` dan diunduh secara otomatis.

## Resolusi ekspor dan latar belakang

- **Ekspor model space / viewport**: dibatasi hingga 2000 × 2000 piksel pada Quality Normal default (150 DPI), diskalakan secara proporsional ke area yang dipilih; batas ini juga ikut berskala dengan Quality — Draft lebih rendah, Presentation dan Max lebih tinggi (hingga 8000 × 8000 pada Max/600 DPI).
- **Ekspor layout (ruang kertas)**: berukuran langsung dari dimensi kertas layout pada DPI yang dipilih — misalnya lembar A4 (210 × 297 mm) pada Quality Normal diekspor pada sekitar 1240 × 1754 px — sehingga tidak tunduk pada batas 2000 px viewport.
- Latar belakang mengikuti **Style** cetak yang dipilih — putih untuk Default dan Monochrome, biru Prusia gelap untuk Blueprint (lihat *Gaya cetak* di atas).
- Layer yang ditandai sebagai **non-plotting** dikecualikan dari ekspor.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` (selama seleksi area) | Batalkan seleksi area, pulihkan area sebelumnya |
| `Escape` (di Print Manager) | Tutup Print Manager |
