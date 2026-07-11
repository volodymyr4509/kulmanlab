---
title: Match Properties — Menyalin Properti Entitas di KulmanLab CAD
description: Perintah MatchProperties menyalin warna, layer, dan properti bersama lainnya dari entitas sumber ke satu atau lebih entitas target. Mencocokkan properti dengan cara yang sama seperti alat CAD desktop.
keywords: [match properties CAD, menyalin properti entitas, MATCHPROP, cocokkan layer warna, transfer properti, kulmanlab match properties, cat properti, salin layer CAD]
group: style
order: 1
---

# Match Properties

Perintah `MatchProperties` menyalin **properti visual dan layer** dari entitas sumber ke satu atau lebih entitas target. Hanya properti yang dibagikan antara tipe entitas sumber dan target yang ditransfer — geometri tidak pernah diubah.

## Cara mengaktifkan

Klik tombol toolbar **Match Properties** (ikon roller cat) di panel Style, atau ketik `MatchProperties` di terminal.

## Alur kerja

**Aktifkan terlebih dahulu, kemudian pilih sumber:**

1. Ketik `MatchProperties` atau klik tombol toolbar tanpa ada yang dipilih sebelumnya.
2. **Klik entitas sumber** — yang propertinya ingin Anda salin.
3. **Klik setiap entitas target** untuk menerapkan properti sumber. Anda dapat mengklik beberapa entitas satu per satu.
4. Untuk menerapkan ke grup sekaligus, **seret kotak seleksi** di atas target.
5. Tekan **Enter** atau **Escape** untuk selesai.

**Pra-pilih sumber, kemudian aktifkan:**

1. Klik satu entitas untuk memilihnya.
2. Aktifkan `MatchProperties`. Entitas yang dipilih digunakan sebagai sumber secara otomatis.
3. Klik entitas target atau seret-pilih, kemudian **Enter** atau **Escape** untuk selesai.

## Properti apa yang disalin

MatchProperties menyalin properti yang termasuk dalam kelas dasar bersama antara sumber dan target. Minimal, **semua tipe entitas** berbagi properti ini:

| Properti | Deskripsi |
|----------|-------------|
| **Color** | Indeks warna entitas (termasuk "By Layer" / "By Block") |
| **Layer** | Layer tempat entitas berada |

Ketika sumber dan target adalah tipe entitas yang sama (mis. keduanya dimensi), properti tambahan yang spesifik untuk tipe tersebut juga disalin — misalnya tinggi teks, ukuran panah, pengaturan garis ekstensi.

Geometri (koordinat, radius, panjang, dll.) tidak pernah dipengaruhi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi area atau selesaikan perintah |
| `Escape` | Selesai menerapkan (jika sumber ditetapkan) atau batal |

## Detail perilaku

- Entitas sumber itu sendiri tidak pernah dimodifikasi.
- Setiap klik atau seret-pilih langsung menerapkan properti sumber — tidak ada langkah konfirmasi.
- Seleksi area mengikuti aturan standar: seret **kanan** untuk seleksi ketat (sepenuhnya terlampir), seret **kiri** untuk seleksi persilangan (perpotongan mana pun).
- Mengklik entitas sumber sebagai target diabaikan.
- Untuk entitas dengan teks (**Teks**, **Dimensi**, **Multileader**), hanya tinggi teks yang disalin — font, tebal, miring, dan pengaturan gaya teks lainnya tidak disamakan.

## Perintah terkait

- [LayerMatch](../layer-match/) — memindahkan entitas yang dipilih ke layer yang sama dengan sumber (hanya properti layer)
- [LayerMakeCurrent](../layer-make-current/) — mengatur layer gambar saat ini dari entitas yang diklik
