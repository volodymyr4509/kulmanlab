---
title: "Perintah ObjectSnapSettings — Semua tetapan bar kawalan"
description: "Perintah ObjectSnapSettings membuka satu tetingkap dengan semua tetapan bar kawalan — snap, snap tangen, penjejakan sudut, pin, input taipan, laso dan paparan — setiap satu diterangkan di sebelah senarai dengan lukisan kecil."
keywords: ["tetapan snap objek CAD", "snap tangen CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Perintah `TetapanSnap` membuka satu tetingkap yang memuatkan semua tetapan bar kawalan. Setiap tetapan diterangkan di sebelah senarai, dengan lukisan kecil. Bukanya dengan butang gear di bar kawalan, atau taip `TetapanSnap`. Menukar tetapan di sini sama seperti menogol butangnya di bar.

## Tetapan

### Tempat kursor mendarat

| Bar kawalan | Fungsinya |
|---|---|
| `Snap` | Kursor melompat ke titik grid terdekat, jadi titik yang anda pilih jatuh pada koordinat bulat. Snap ke objek berhampiran kursor masih didahulukan. Jarak grid mengikut zum. |
| `TANG` | Semasa garis dilukis dari satu titik, bawa kursor dekat tempat garis itu tepat menyentuh bulatan, lengkok, elips atau spline, dan ia akan snap di situ. Berfungsi dalam Garis, Polilin dan arahan lain, serta semasa menyeret hujung garis atau polilin. |

### Panduan semasa melukis

| Bar kawalan | Fungsinya |
|---|---|
| `ANGL` | Apabila kursor menghampiri salah satu sudut ini dari titik terakhir, ia terkunci ke arah itu, ditunjukkan sebagai sinar putus-putus. Semasa terkunci, taip panjang dan tekan Enter untuk meletakkan titik sejauh itu. |
| `Pins` | Biarkan kursor seketika pada titik snap untuk menyematnya. Titik yang disemat memancarkan garis panduan mendatar dan menegak, dan kursor snap padanya dan pada persilangannya. |
| `Dist` | Titik yang terakhir disemat menjadi titik mula: apabila kursor terkunci pada sudut dari pin, taip panjang dan tekan Enter untuk meletakkan titik sejauh itu daripadanya. Memerlukan pin vektor. |

### Input dan pemilihan

| Bar kawalan | Fungsinya |
|---|---|
| `Rel` | Titik X,Y yang ditaip diukur dari titik terakhir yang dipilih, seolah-olah bermula dengan @. Backspace membuang @ untuk titik dalam koordinat lukisan itu sendiri. Apabila mati, taip @ sendiri untuk ofset. |
| `Lasso` | Tekan dan seret di ruang kosong untuk melukis laso bebas di sekeliling yang anda mahu, bukannya segi empat tepat. Apa yang dirangkumi laso dipilih. |

### Paparan

| Bar kawalan | Fungsinya |
|---|---|
| `Grid` | Memaparkan grid latar. Jaraknya berubah apabila zum. Mematikannya tidak menghentikan snap ke grid. |
| `LWT` | Melukis garis dengan ketebalannya, jadi garis yang lebih berat kelihatan lebih tebal. Apabila mati, setiap garis dilukis nipis, yang boleh menjadikan lukisan padat lebih mudah dibaca. |

**ANGL** mempunyai baris sendiri untuk langkahnya: pilih 10°, 20°, 30°, 45° atau 90°, atau pilih **Tersuai** dan taip sebarang sudut dari 1° hingga 180°.

Snap tangen, input relatif dan laso dimatikan secara lalai. **Set semula ke lalai** mengembalikan semua tetapan kepada keadaan asal.

---

*Berkaitan: [Vector Pins](../../interface/vector-pins/), [Penjejakan jarak](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Kemasukan koordinat](../../interface/coordinate-entry/)*
