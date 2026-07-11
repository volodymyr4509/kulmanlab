---
title: Perintah Print — Mengekspor Gambar sebagai PNG, JPEG, WebP, atau PDF di KulmanLab CAD
description: Perintah Print membuka Print Manager — jendela ekspor khusus dengan pratinjau langsung, pemilih format, toggle monokrom, dan seleksi area opsional. Ekspor hingga 2000×2000 px. Mendukung PNG, JPEG, WebP, dan PDF.
keywords: [CAD ekspor PNG, CAD ekspor PDF, cetak gambar CAD, print manager, ekspor monokrom, kulmanlab ekspor]
group: file
order: 4
---

# Print

Perintah `print` membuka **Print Manager** — jendela ekspor khusus dengan kanvas pratinjau langsung, pemilih format (PNG / JPEG / WebP / PDF), toggle monokrom, dan pemotongan area opsional. Tidak ada yang dikirim ke printer fisik; output diunduh sebagai file.

## Membuka Print Manager

Klik tombol toolbar **Print** atau ketik `print` di terminal. Print Manager langsung terbuka menampilkan pratinjau viewport saat ini.

## Layout Print Manager

Jendela memiliki dua panel:
- **Sidebar kiri** — semua kontrol ekspor.
- **Panel kanan** — kanvas pratinjau langsung yang diperbarui saat Anda mengubah pengaturan.

### Kontrol sidebar

| Kontrol | Deskripsi |
|---------|-------------|
| **Change Area** | Potong ke persegi panjang kustom pada kanvas (lihat di bawah) |
| Toggle **Monochrome** | Ubah semua garis berwarna menjadi hitam — aktif secara default untuk output cetak yang bersih |
| Dropdown **Format** | PNG, JPEG, WebP, atau PDF |
| Tombol **Export** | Hasilkan dan unduh file |

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
| **PNG** | Lossless, garis tajam | Latar belakang putih, tidak ada transparansi |
| **JPEG** | File lebih kecil untuk berbagi | Kualitas 95%, sedikit kompresi |
| **WebP** | File terkecil untuk web | Kualitas 95% yang sama, kompresi lebih baik dari JPEG |
| **PDF** | Dokumen siap cetak | Gambar tertanam pada 150 DPI di dalam wadah PDF |

File yang diekspor diberi nama `kulman-<cap waktu>.<ekstensi>` dan diunduh secara otomatis.

## Resolusi ekspor dan latar belakang

- Resolusi maksimum: **2000 × 2000 piksel**, diskalakan secara proporsional ke area yang dipilih.
- Latar belakang selalu **putih**.
- Layer yang ditandai sebagai **non-plotting** dikecualikan dari ekspor.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` (selama seleksi area) | Batalkan seleksi area, pulihkan area sebelumnya |
| `Escape` (di Print Manager) | Tutup Print Manager |
