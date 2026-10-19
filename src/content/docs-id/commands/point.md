---
title: "Perintah Point — letakkan titik pada gambar di KulmanLab CAD"
description: "Perintah Point meletakkan titik pada setiap klik, X,Y yang diketik, atau jarak sepanjang arah yang dikunci, sampai Enter, Space, atau Escape. Titik digambar sebagai noktah, membawa layer dan warna saat ini, serta ikut dalam DXF sebagai entitas POINT."
keywords: ["perintah titik CAD", "letakkan titik CAD", "entitas DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Perintah `Titik` meletakkan titik pada setiap pilihan dan tetap aktif sampai Anda menekan Enter, Space, atau Escape. Titik adalah posisi tanpa ukuran: ia digambar sebagai noktah kecil dan membawa layer serta warna saat ini. Ia disimpan sebagai entitas `POINT`.

## Meletakkan titik

1. Ketik `Titik` di terminal atau klik **Point**, tombol terakhir di panel Shapes.
2. **Klik** di tempat titik berada, atau ketik `X,Y` lalu tekan **Enter** untuk posisi yang tepat. Setiap pilihan meletakkan sebuah titik dan terminal mencatat koordinatnya; perintah tetap aktif untuk titik berikutnya.
3. Atau kunci arah dari [pin vektor](../../interface/vector-pins/) dan ketik jarak — titik jatuh tepat sejauh itu sepanjang arah tersebut.
4. Tekan **Enter**, **Space**, atau **Escape** untuk mengakhiri. Enter dan Space hanya mengakhiri saat tidak ada yang sedang diketik.

## Tampilan titik

Titik digambar sebagai noktah beradius 1 px pada setiap tingkat zoom, sehingga tetap terlihat saat diperkecil dan tidak membesar saat diperbesar. Gaya titik gambar (`$PDMODE` dan `$PDSIZE`) belum dibaca, jadi setiap titik berupa noktah, apa pun kata DXF.

## Mengedit titik

Titik yang dipilih memiliki satu grip yang memindahkannya. Pilihan kotak mengambil titik saat berada di dalam kotak, ke arah seret mana pun.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), dan [Scale](../scale/) bekerja pada titik seperti pada entitas lain. Jendela properti menampilkan Position X dan Position Y, serta warna dan layer.

## DXF — entitas POINT

Titik dibaca dari dan ditulis ke DXF sebagai entitas `POINT` dengan posisi, warna, dan layer (kode grup 10/20, 62, dan 8), serta ikut melalui JSON yang disimpan. Sebelumnya titik dilewati saat impor. [Export Manager](../export-manager/) mencantumkan Points pada barisnya sendiri, sehingga dapat dikecualikan dari ekspor.

---

*Terkait: [Line](../line/) untuk input koordinat yang sama, dan [Vector Pins](../../interface/vector-pins/) untuk meletakkan titik pada jarak tertentu sepanjang arah.*
