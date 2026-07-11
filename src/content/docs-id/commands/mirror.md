---
title: Perintah Mirror — Memantulkan Entitas Melintasi Sumbu Dua Titik di KulmanLab CAD
description: Perintah Mirror memantulkan entitas yang dipilih melintasi garis cermin yang ditentukan oleh dua klik. Aslinya selalu dipertahankan — Mirror membuat salinan yang dicerminkan yang baru. Sumbu cermin dapat berada pada sudut mana saja dan snap ke kelipatan 45°.
keywords: [perintah cermin CAD, memantulkan entitas CAD, simetri cermin CAD, membalik objek CAD, sumbu cermin CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Perintah `mirror` membuat salinan yang dicerminkan dari entitas yang dipilih, dipantulkan melintasi sumbu dua titik. Aslinya **selalu dipertahankan** — tidak seperti [Move](../move/) atau [Rotate](../rotate/), Mirror tidak pernah memodifikasi entitas yang sudah ada; hanya menambahkan yang baru.

## Dua cara memulai

**Pra-pilih, lalu cermin** — pilih entitas terlebih dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entitas di kanvas.
2. Ketik `mirror` di terminal atau klik tombol toolbar **Mirror**.
3. **Klik titik pertama** dari sumbu cermin, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik titik kedua** — salinan yang dicerminkan ditempatkan dan perintah keluar. Entri koordinat juga berfungsi di sini.

**Aktifkan, lalu pilih** — mulai perintah tanpa ada yang dipilih:

1. Ketik `mirror` atau klik tombol toolbar.
2. **Pilih objek** — klik untuk mengalihkan, atau seret untuk memilih berdasarkan area.
3. Tekan **Enter** atau **Space** untuk mengonfirmasi seleksi.
4. **Klik titik pertama**, kemudian **klik titik kedua** dari sumbu cermin (entri koordinat tersedia di kedua langkah).

```
  Asli:          Sumbu cermin:        Hasil:
                 |
  [entitas A]    →    |    →    [entitas A] + [cerminan A]
                 |
```

Pratinjau langsung dari salinan yang dicerminkan mengikuti kursor saat Anda memposisikan titik sumbu kedua.

## Sumbu cermin

Sumbu adalah garis tak terbatas melalui dua titik yang diklik. Sumbu dapat berada pada sudut mana saja:

- Gerakkan kursor dekat **sumbu snap 45°** (0°, 45°, 90°, 135°, …) dan sumbu terkunci ke sudut tersebut — berguna untuk refleksi horizontal, vertikal, atau diagonal yang bersih.
- Klik menjauh dari zona snap untuk sumbu sudut bebas.

## Entri koordinat

Pada langkah titik sumbu mana pun, ketik posisi tepat alih-alih mengklik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Enter` / `Space` | Konfirmasi seleksi |
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik |
| `Escape` | Batal dan reset |

## Seleksi selama perintah

| Metode | Perilaku |
|--------|-----------|
| **Klik** | Mengalihkan entitas di bawah kursor |
| **Seret ke kanan** (ketat) | Menambahkan entitas yang sepenuhnya berada di dalam kotak |
| **Seret ke kiri** (persilangan) | Menambahkan entitas yang berpotongan dengan kotak |
| **Enter** / **Space** | Mengonfirmasi seleksi |

## Apa yang dicerminkan

Setiap tipe entitas didukung. Geometri dipantulkan melintasi sumbu secara matematis:

| Entitas | Apa yang berubah |
|--------|-------------|
| Line | Kedua titik akhir dipantulkan |
| Circle | Pusat dipantulkan; radius tidak berubah |
| Arc | Pusat dipantulkan; sudut awal dan akhir dihitung ulang melintasi sumbu |
| Ellipse | Pusat dipantulkan; arah sumbu utama dibalik melintasi sumbu |
| Polyline / Rectangle | Setiap vertex dipantulkan |
| Text | Titik jangkar dipantulkan; string teks **tidak** dibalik |
| Spline | Semua control vertex / titik fit dipantulkan |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Aslinya | Selalu dipertahankan | Selalu dipertahankan |
| Posisi entitas baru | Dipantulkan melintasi sumbu | Diimbangi dengan vektor perpindahan |
| Terbaik untuk | Desain simetris, fitur bilateral | Mengulang geometri ke arah mana saja |
