---
title: "Perintah Polygon — lukis poligon sekata dari pusat atau sisi dalam KulmanLab CAD"
description: "Perintah Polygon melukis poligon sekata dengan 3 hingga 1024 sisi daripada pusat dan jejari, atau daripada satu sisi. Hasilnya ialah LWPOLYLINE tertutup, jadi semua perintah suntingan polyline terpakai."
keywords: ["perintah poligon CAD", "lukis poligon sekata CAD", "heksagon oktagon pentagon CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Perintah `polygon` melukis poligon sekata — semua sisi dan sudut sama — dengan 3 hingga 1024 sisi. Taip `polygon` dalam terminal. Hasilnya ialah **`LWPOLYLINE` tertutup**, jadi selepas diletakkan ia berkelakuan seperti [Polyline](../polyline/) lain dan semua suntingan polyline terpakai.

## Melukis poligon

1. Taip `polygon` dalam terminal dan masukkan **bilangan sisi** — nombor bulat dari 3 hingga 1024 — kemudian tekan **Enter** atau **Space**. Gesaan diisi awal dengan bilangan yang terakhir digunakan (4 pada kali pertama); mula menaip untuk menggantikannya. Apa-apa yang lain ditolak dan kekal dalam gesaan untuk dibetulkan.
2. **Klik pusat**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat. Tekan `E` dahulu untuk bermula daripada sisi sebaliknya (lihat di bawah).
3. **Klik jejari** — poligon dipratonton secara langsung — atau taip jejari dan tekan **Enter** atau **Space**.
4. Poligon diletakkan dan perintah tamat.

## Pilihan

| Pilihan | Kekunci | Kesan |
|---|---|---|
| Edge | `E` | Titik pertama menjadi satu hujung sisi dan bukannya pusat. Pilih hujung kedua; bucu lain dibina melawan arah jam, di sebelah kiri sisi dari hujung pertama ke kedua. Tekan `E` sekali lagi untuk kembali ke pusat. |
| Inside | `I` | Hidup secara lalai dan dikekalkan dari satu poligon ke yang seterusnya. Hidup: bucu berada pada bulatan berjejari yang diberi. Mati: poligon berada di luar bulatan itu, dengan titik tengah setiap sisi di atasnya. |

- Klik meletakkan bucu (Inside hidup) atau titik tengah sisi (Inside mati) tepat di kedudukan kursor, jadi kursor juga menetapkan orientasi.
- Jejari yang ditaip tidak mempunyai arah untuk disasarkan, jadi poligon diletakkan dengan sisi paling bawahnya mendatar — melainkan kunci sudut dihidupkan, maka ia mengikut sudut yang dikunci.
- Setiap pilihan ditawarkan pada langkahnya sendiri dan boleh dialih walaupun semasa nombor sedang ditaip.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---|---|
| `0`–`9`, `.` | Taip bilangan sisi, jejari, koordinat atau panjang |
| `E` | Hidupkan atau matikan Edge (langkah titik pertama) |
| `I` | Hidupkan atau matikan Inside (langkah jejari) |
| `Enter` / `Space` | Sahkan bilangan sisi atau jejari |
| `Escape` | Batal |

## DXF — entiti LWPOLYLINE

Poligon disimpan sebagai `LWPOLYLINE` tertutup dengan satu bucu bagi setiap sudut; DXF tidak mempunyai jenis poligon khusus. Semua sifat — koordinat bucu, warna, lapisan, jenis garisan, skala jenis garisan dan ketebalan — dibawa tanpa kehilangan, dan mana-mana pelihat DXF membacanya sebagai polyline tertutup.
