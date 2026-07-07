---
sidebar_position: 3
title: Arahan Area — Ukur Luas dan Perimeter Poligon dalam KulmanLab CAD
description: Arahan Area mengukur luas tertutup dan perimeter poligon yang ditakrifkan oleh 3 titik yang diklik atau lebih, menggunakan formula shoelace. Menyokong kemasukan arah berkunci sudut dan penonjolan hasil yang berterusan pada kanvas.
keywords: [CAD ukur luas, arahan area, pengiraan luas poligon, ukuran perimeter, formula shoelace, kulmanlab CAD ukuran]
---

# Area

Arahan `area` mengukur luas tertutup dan perimeter poligon yang ditakrifkan oleh tiga titik yang diklik atau lebih, dan mencetak kedua-dua hasil dalam terminal kepada 4 titik perpuluhan. Ia adalah arahan pengukuran ketiga, bersama [Distance](../distance/) (panjang garis lurus) dan [Angle](../angle/) (sudut dalam di bucu).

## Anatomi pengukuran luas

```
  ● titik pertama
   \
    \
     ● titik kedua
      \
       \             (putus-putus) pratonton tepi penutup
        ●───────────────┐
      titik ketiga      │  (putus-putus) pratonton tepi seterusnya ke kursor
                        ✕ kursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Bucu** — setiap titik yang diklik (atau ditaip) menjadi bucu poligon; tepi yang disahkan dilukis dengan garis pejal dan bahagian dalam diisi dengan penonjolan lut sinar.
- **Tepi pratonton** — garis putus-putus menunjukkan tepi yang belum selesai dari bucu terakhir ke kursor, dan tepi penutup dari kursor kembali ke bucu pertama.
- **Tepi penutup** — anda tidak sekali-kali klik semula pada titik pertama; menekan Enter menutup poligon secara automatik.

## Mengukur luas

1. Taip `area` dalam terminal atau klik butang bar alat **Area** (baris bawah panel Measure).
2. **Klik titik pertama**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik setiap bucu tambahan** mengikut urutan sekeliling bentuk. Kemasukan koordinat berfungsi pada setiap langkah.
4. Setelah sekurang-kurangnya **3 titik** diletakkan, tekan **Enter** (tanpa kemasukan koordinat atau jarak yang tertangguh) untuk menutup poligon dan mengira hasilnya.
5. Terminal mencetak `Area: <nilai>  Perimeter: <nilai>`, dan poligon yang ditutup — isian, garis luar, dan pemegang bucu — kekal ditonjolkan pada kanvas.
6. **Klik di mana-mana, tekan mana-mana kekunci, atau tekan `Escape`** untuk menyingkirkan hasil dan menamatkan arahan.

## Kunci sudut dan jarak tepat

Selepas bucu pertama diletakkan, bergerak ke arah salah satu peningkatan penjejakan sudut yang dikonfigurasi (10°, 15°, 20°, 30°, 45°, atau 90°, boleh ditetapkan melalui menu lungsur bar alat) mengunci tepi seterusnya ke arah tersebut:

- Pratonton tepi melekat pada arah yang dikunci, dan penunjuk penjejakan sudut dilukis pada bucu sauh.
- Taip panjang dan tekan **Enter** untuk meletakkan bucu seterusnya tepat pada jarak tersebut sepanjang arah yang dikunci.
- Mengklik semasa dikunci (tanpa panjang yang ditaip) meletakkan bucu pada unjuran kursor ke atas arah yang dikunci.

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah pada nilai panjang tepi |
| `-` | Panjang negatif (sebagai aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan bucu seterusnya pada panjang yang ditaip |

## Menutup poligon

- Enter hanya menutup bentuk selepas **3 bucu atau lebih** diletakkan — dengan kurang daripada itu, ia tiada kesan.
- Tepi dari bucu terakhir kembali ke yang pertama ditambah secara automatik dan dikira dalam kedua-dua luas dan perimeter.
- Titik boleh diletakkan dalam sebarang urutan (mengikut atau melawan arah jam) — hasilnya adalah sama.

## Area berbanding Distance berbanding Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Apa yang diukur | Luas & perimeter poligon tertutup | Panjang garis lurus | Sudut dalam di bucu |
| Bilangan klik | 3 atau lebih, ditutup dengan Enter | 2 | 3 |
| Format hasil | `12.3456  Perimeter: 45.6789` | `12.3456` (unit) | `45.0000°` |
| Pratonton kanvas | Poligon terisi dengan tepi penutup putus-putus | Garis dari titik pertama ke kursor | Dua garis dari bucu ke kursor |
| Selepas hasil | Disingkirkan dengan sebarang input, kemudian arahan tamat | Klik merantai pengukuran baharu | Klik merantai pengukuran baharu |
| Terbaik untuk | Kawasan tertutup, luas bilik atau panel | Panjang jurang atau segmen | Sudut pembukaan antara dua ciri |

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mana-mana bucu:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X, atau kemasukan panjang tepi semasa kunci sudut aktif |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau panjang yang ditaip; dengan 3+ bucu dan tiada kemasukan tertangguh, menutup poligon |
| `Escape` | Semasa memilih bucu: buang titik dan mula semula pada titik pertama; selepas hasil dipaparkan: singkirkan dan tamatkan arahan |

## Nota

- Luas dikira menggunakan formula shoelace dan sentiasa dilaporkan sebagai nilai positif, tanpa mengira urutan klik.
- Poligon yang bersilang sendiri (tepi yang bersilang) masih menghasilkan hasil berangka, tetapi nilainya mungkin tidak sepadan dengan kawasan yang tertutup secara visual — kekalkan urutan klik yang tidak bersilang untuk luas yang bermakna.
- Hasil hanya dipaparkan dalam **terminal dan sebagai penonjolan sementara pada kanvas** — tiada apa yang ditambah secara kekal pada lukisan.
- Berbeza dengan Distance dan Angle, Area **tidak** merantai secara automatik ke pengukuran baharu — selepas menyingkirkan hasil, jalankan `area` semula untuk mengukur poligon lain.
- Ketepatan sentiasa 4 titik perpuluhan untuk kedua-dua luas dan perimeter, dalam unit yang sama seperti koordinat lukisan (tiada penukaran unit).
