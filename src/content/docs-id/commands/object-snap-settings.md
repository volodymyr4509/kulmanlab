---
title: "Perintah ObjectSnapSettings — Semua pengaturan bilah kontrol"
description: "Perintah ObjectSnapSettings membuka satu jendela berisi semua pengaturan bilah kontrol — snap, snap tangen, pelacakan sudut, pin, input ketikan, laso, dan tampilan — masing-masing dijelaskan di samping daftar dengan gambar kecil."
keywords: ["pengaturan snap objek CAD", "snap tangen CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Perintah `PengaturanSnap` membuka satu jendela yang memuat semua pengaturan bilah kontrol. Setiap pengaturan dijelaskan di samping daftar, dengan gambar kecil. Buka dengan tombol roda gigi di bilah kontrol, atau ketik `PengaturanSnap`. Mengubah pengaturan di sini sama dengan menekan tombolnya di bilah.

## Pengaturan

### Tempat kursor mendarat

| Bilah kontrol | Fungsinya |
|---|---|
| `Snap` | Kursor melompat ke titik grid terdekat, sehingga titik yang Anda pilih jatuh di koordinat bulat. Snap ke objek di dekat kursor tetap didahulukan. Jarak grid mengikuti zoom. |
| `TANG` | Saat garis digambar dari sebuah titik, bawa kursor ke dekat tempat garis itu tepat menyentuh lingkaran, busur, elips, atau spline, dan kursor akan snap di sana. Berlaku di Garis, Polilin, dan perintah lain, serta saat menyeret ujung garis atau polilin. |

### Panduan saat menggambar

| Bilah kontrol | Fungsinya |
|---|---|
| `ANGL` | Saat kursor mendekati salah satu sudut ini dari titik terakhir, kursor terkunci ke arah itu, ditunjukkan dengan sinar putus-putus. Selama terkunci, ketik panjang lalu tekan Enter untuk menaruh titik sejauh itu. |
| `Pins` | Diamkan kursor sejenak di atas titik snap untuk menyematkannya. Titik yang disematkan memancarkan garis panduan horizontal dan vertikal, dan kursor snap ke garis itu dan ke titik silangnya. |
| `Dist` | Titik yang terakhir disematkan menjadi titik awal: saat kursor terkunci pada sudut dari pin, ketik panjang lalu tekan Enter untuk menaruh titik sejauh itu darinya. Memerlukan pin vektor. |

### Input dan seleksi

| Bilah kontrol | Fungsinya |
|---|---|
| `Rel` | Titik X,Y yang diketik diukur dari titik terakhir yang dipilih, seolah diawali @. Backspace menghapus @ untuk titik di koordinat gambar itu sendiri. Saat mati, ketik @ sendiri untuk offset. |
| `Lasso` | Tekan dan seret di area kosong untuk menggambar laso bebas di sekitar yang Anda inginkan, alih-alih persegi panjang. Yang tercakup laso akan terpilih. |

### Tampilan

| Bilah kontrol | Fungsinya |
|---|---|
| `Grid` | Menampilkan grid latar. Jaraknya berubah saat zoom. Mematikannya tidak menghentikan snap ke grid. |
| `LWT` | Menggambar garis dengan ketebalannya, sehingga garis yang lebih berat tampak lebih tebal. Saat mati, setiap garis digambar tipis, yang bisa membuat gambar padat lebih mudah dibaca. |

**ANGL** punya baris sendiri untuk langkahnya: pilih 10°, 20°, 30°, 45°, atau 90°, atau pilih **Kustom** dan ketik sudut apa pun dari 1° sampai 180°.

Snap tangen, input relatif, dan laso mati secara bawaan. **Kembalikan ke bawaan** mengembalikan semua pengaturan ke keadaan awal.

---

*Terkait: [Vector Pins](../../interface/vector-pins/), [Pelacakan jarak](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Entri koordinat](../../interface/coordinate-entry/)*
