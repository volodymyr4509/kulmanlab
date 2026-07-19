---
title: Perintah Distance — Mengukur Jarak Garis Lurus antara Dua Titik
description: Perintah Distance mengukur jarak Euclidean antara dua titik yang diklik dan menampilkan hasilnya hingga 4 desimal. Klik lagi setelah hasilnya untuk merantai pengukuran baru dari titik terakhir.
keywords: [CAD ukur jarak, perintah distance, pengukuran titik ke titik, jarak garis lurus, pengukuran CAD kulmanlab]
group: measure
order: 1
---

# Distance

Perintah `distance` mengukur jarak garis lurus (Euclidean) antara dua titik yang diklik dan mencetak hasilnya di terminal hingga 4 desimal. Ini adalah salah satu dari tiga perintah pengukuran — [Angle](../angle/) mengukur bukaan sudut pada vertex, dan [Area](../area/) mengukur luas serta keliling poligon tertutup.

## Anatomi pengukuran jarak

```
  ● titik pertama
   \
    \  garis pratinjau (langsung)
     \
      ● titik kedua    →  terminal: "Distance: 12.3456"
```

- **Titik pertama** — asal pengukuran.
- **Titik kedua** — titik akhir; menempatkannya mencetak hasilnya segera.
- **Hasil** — ditampilkan di terminal, tidak ditempatkan di kanvas.

## Mengukur jarak

1. Ketik `distance` di terminal atau klik tombol toolbar **Distance**.
2. **Klik titik pertama**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik kedua** — jarak yang diukur muncul di terminal. Entri koordinat juga berfungsi di sini.
4. **Klik lagi** (opsional) untuk memulai pengukuran baru. Perintah tetap aktif.

Tekan `Escape` kapan saja untuk reset ke langkah 2.

## Merantai pengukuran

Setelah hasil ditampilkan, mengklik segera memulai pengukuran berikutnya — titik yang diklik menjadi titik pertama baru. Ini memungkinkan Anda mengukur serangkaian jarak tanpa mengaktifkan kembali perintah.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Yang diukur | Panjang garis lurus | Sudut interior pada vertex |
| Jumlah klik | 2 | 3 |
| Format hasil | `12.3456` (satuan) | `45.0000°` |
| Pratinjau kanvas | Garis dari titik pertama ke kursor | Dua garis dari vertex ke kursor |
| Terbaik untuk | Panjang celah atau segmen | Sudut pembuka antara dua fitur |

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk salah satu titik:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat yang diketik |
| `Escape` | Batal dan reset ke langkah 2 |

## Catatan

- Hasil ditampilkan di **terminal saja** — tidak ada yang ditambahkan ke gambar.
- Hasil dinyatakan dalam satuan yang sama dengan koordinat gambar (tidak ada konversi satuan).
- Presisi selalu 4 desimal.
