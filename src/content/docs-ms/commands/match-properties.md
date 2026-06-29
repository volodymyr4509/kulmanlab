---
sidebar_position: 1
title: Match Properties — Salin Sifat Entiti dalam KulmanLab CAD
description: Arahan MatchProperties menyalin warna, lapisan, dan sifat kongsi lain dari entiti sumber ke satu atau lebih entiti sasaran. Memadankan sifat dengan cara yang sama seperti alat CAD desktop.
keywords: [padankan sifat CAD, salin sifat entiti, MATCHPROP, padankan lapisan warna, pindahkan sifat, padankan sifat kulmanlab, cat sifat, salin lapisan CAD]
---

# Match Properties

Arahan `MatchProperties` menyalin **sifat visual dan lapisan** dari entiti sumber ke satu atau lebih entiti sasaran. Hanya sifat yang dikongsi antara jenis entiti sumber dan sasaran yang dipindahkan — geometri tidak pernah berubah.

## Cara mengaktifkan

Klik butang bar alat **Match Properties** (ikon penggelek cat) dalam panel Gaya, atau taip `MatchProperties` dalam terminal.

## Aliran kerja

**Aktifkan dahulu, kemudian pilih sumber:**

1. Taip `MatchProperties` atau klik butang bar alat tanpa apa-apa yang dipra-pilih.
2. **Klik entiti sumber** — yang sifatnya ingin anda salin.
3. **Klik setiap entiti sasaran** untuk menggunakan sifat sumber. Anda boleh mengklik berbilang entiti satu demi satu.
4. Untuk menggunakan pada kumpulan sekaligus, **seret kotak pemilihan** ke atas sasaran.
5. Tekan **Enter** atau **Escape** untuk selesai.

**Pra-pilih sumber, kemudian aktifkan:**

1. Klik satu entiti untuk memilihnya.
2. Aktifkan `MatchProperties`. Entiti yang dipilih digunakan sebagai sumber secara automatik.
3. Klik entiti sasaran atau pilih-seret, kemudian **Enter** atau **Escape** untuk selesai.

## Sifat yang disalin

MatchProperties menyalin sifat yang dimiliki kelas asas kongsi antara sumber dan sasaran. Sekurang-kurangnya, **semua jenis entiti** berkongsi sifat-sifat ini:

| Sifat | Penerangan |
|-------|------------|
| **Color** | Indeks warna entiti (termasuk "By Layer" / "By Block") |
| **Layer** | Lapisan yang dimiliki entiti |

Apabila sumber dan sasaran adalah jenis entiti yang sama (cth. kedua-duanya adalah dimensi), sifat khusus jenis tambahan juga disalin — contohnya ketinggian teks, saiz anak panah, tetapan garis sambungan.

Geometri (koordinat, jejari, panjang, dll.) tidak pernah terjejas.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan kawasan atau selesaikan arahan |
| `Escape` | Selesai menggunakan (jika sumber ditetapkan) atau batal |

## Butiran tingkah laku

- Entiti sumber itu sendiri tidak pernah diubah suai.
- Setiap klik atau pilih-seret menggunakan sifat sumber serta-merta — tiada langkah pengesahan.
- Pemilihan kawasan mengikut peraturan standard: seret **kanan** untuk pemilihan ketat (terlampir sepenuhnya), seret **kiri** untuk pemilihan silang (mana-mana persimpangan).
- Mengklik entiti sumber sebagai sasaran diabaikan.

## Arahan berkaitan

- [LayerMatch](./layer-match) — pindahkan entiti yang dipilih ke lapisan yang sama seperti sumber (hanya sifat lapisan)
- [LayerMakeCurrent](./layer-make-current) — tetapkan lapisan lukisan semasa dari entiti yang diklik
