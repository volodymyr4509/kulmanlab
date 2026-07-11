---
title: Perintah Area — Mengukur Luas dan Keliling Poligon di KulmanLab CAD
description: Perintah Area mengukur luas yang tertutup dan keliling poligon yang ditentukan oleh 3 titik yang diklik atau lebih, menggunakan rumus shoelace. Mendukung entri arah dengan kunci sudut dan sorotan hasil yang persisten di kanvas.
keywords: [CAD ukur luas, perintah area, kalkulasi luas poligon, pengukuran keliling, rumus shoelace, pengukuran CAD kulmanlab]
group: measure
order: 3
---

# Area

Perintah `area` mengukur luas yang tertutup dan keliling poligon yang ditentukan oleh tiga titik yang diklik atau lebih, dan mencetak kedua hasil di terminal hingga 4 desimal. Ini adalah perintah pengukuran ketiga, bersama [Distance](../distance/) (panjang garis lurus) dan [Angle](../angle/) (sudut interior pada vertex).

## Anatomi pengukuran luas

```
  ● titik pertama
   \
    \
     ● titik kedua
      \
       \             (putus-putus) pratinjau sisi penutup
        ●───────────────┐
      titik ketiga      │  (putus-putus) pratinjau sisi berikutnya ke kursor
                        ✕ kursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vertex** — setiap titik yang diklik (atau diketik) menjadi vertex poligon; sisi yang telah dikonfirmasi digambar dengan garis solid dan bagian dalam diisi dengan sorotan tembus pandang.
- **Sisi pratinjau** — garis putus-putus menunjukkan sisi yang tertunda dari vertex terakhir ke kursor, dan sisi penutup dari kursor kembali ke vertex pertama.
- **Sisi penutup** — Anda tidak pernah mengklik titik pertama lagi; menekan Enter menutup poligon secara otomatis.

## Mengukur luas

1. Ketik `area` di terminal atau klik tombol toolbar **Area** (baris bawah panel Measure).
2. **Klik titik pertama**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik setiap vertex tambahan** secara berurutan mengelilingi bentuk. Entri koordinat berfungsi di setiap langkah.
4. Setelah setidaknya **3 titik** ditempatkan, tekan **Enter** (tanpa entri koordinat atau jarak yang tertunda) untuk menutup poligon dan menghitung hasilnya.
5. Terminal mencetak `Area: <nilai>  Perimeter: <nilai>`, dan poligon yang tertutup — isian, garis luar, dan grip vertex — tetap disorot di kanvas.
6. **Klik di mana saja, tekan tombol apa saja, atau tekan `Escape`** untuk menghilangkan hasil dan mengakhiri perintah.

## Kunci sudut dan jarak tepat

Setelah vertex pertama ditempatkan, bergerak ke arah salah satu increment pelacakan sudut yang dikonfigurasi (10°, 15°, 20°, 30°, 45°, atau 90°, dapat disetel melalui dropdown toolbar) mengunci sisi berikutnya ke arah tersebut:

- Pratinjau sisi menempel ke arah yang terkunci, dan indikator pelacakan sudut digambar di vertex jangkar.
- Ketik panjang dan tekan **Enter** untuk menempatkan vertex berikutnya tepat pada jarak tersebut sepanjang arah yang terkunci.
- Mengklik saat terkunci (tanpa panjang yang diketik) menempatkan vertex pada proyeksi kursor ke arah yang terkunci.

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.` | Menambahkan ke nilai panjang sisi |
| `-` | Panjang negatif (hanya sebagai karakter pertama) |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Menempatkan vertex berikutnya pada panjang yang diketik |

## Menutup poligon

- Enter hanya menutup bentuk setelah **3 atau lebih** vertex ditempatkan — dengan lebih sedikit, tidak berpengaruh.
- Sisi dari vertex terakhir kembali ke yang pertama ditambahkan secara otomatis dan dihitung baik dalam luas maupun keliling.
- Titik dapat ditempatkan dalam urutan apa pun (searah atau berlawanan arah jarum jam) — hasilnya identik.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Yang diukur | Luas & keliling poligon tertutup | Panjang garis lurus | Sudut interior pada vertex |
| Jumlah klik | 3 atau lebih, ditutup dengan Enter | 2 | 3 |
| Format hasil | `12.3456  Perimeter: 45.6789` | `12.3456` (satuan) | `45.0000°` |
| Pratinjau kanvas | Poligon terisi dengan sisi penutup putus-putus | Garis dari titik pertama ke kursor | Dua garis dari vertex ke kursor |
| Setelah hasil | Dihilangkan dengan input apa pun, lalu perintah berakhir | Klik merantai pengukuran baru | Klik merantai pengukuran baru |
| Terbaik untuk | Wilayah tertutup, luas ruangan atau panel | Panjang celah atau segmen | Sudut pembuka antara dua fitur |

## Entri koordinat

Alih-alih mengklik, ketik posisi tepat untuk vertex mana pun:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk konfirmasi.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Memulai entri koordinat X, atau entri panjang sisi saat kunci sudut aktif |
| `,` | Kunci X dan pindah ke entri Y |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau panjang yang diketik; dengan 3+ vertex dan tanpa entri yang tertunda, menutup poligon |
| `Escape` | Saat memilih vertex: membuang titik dan memulai lagi di titik pertama; setelah hasil ditampilkan: menghilangkannya dan mengakhiri perintah |

## Catatan

- Luas dihitung dengan rumus shoelace dan selalu dilaporkan sebagai nilai positif, terlepas dari urutan klik.
- Poligon yang berpotongan sendiri (sisi yang saling silang) tetap menghasilkan hasil numerik, tetapi nilainya mungkin tidak sesuai dengan wilayah yang tertutup secara visual — pertahankan urutan klik tanpa persilangan untuk luas yang bermakna.
- Hasil hanya ditampilkan di **terminal dan sebagai sorotan sementara di kanvas** — tidak ada yang ditambahkan secara permanen ke gambar.
- Berbeda dengan Distance dan Angle, Area **tidak** secara otomatis merantai ke pengukuran baru — setelah menghilangkan hasil, jalankan `area` lagi untuk mengukur poligon lain.
- Presisi selalu 4 desimal untuk luas maupun keliling, dalam satuan yang sama dengan koordinat gambar (tidak ada konversi satuan).
