---
title: "Perintah PointDivide — letakkan titik pada panjang yang sama di sepanjang objek"
description: "Perintah PointDivide membagi garis, polyline, busur, lingkaran, elips, atau spline menjadi ruas sama panjang dan meletakkan titik di setiap pembagian, dengan pratinjau saat Anda mengetik jumlah ruas."
keywords: ["perintah bagi CAD", "bagi garis menjadi bagian sama CAD", "titik di sepanjang objek CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Perintah `BagiDenganTitik` meletakkan [titik](../point/) yang membagi objek menjadi ruas sama panjang. Objeknya tidak berubah: titik-titik itu entitas baru pada layer dan warna saat ini, berguna untuk snap.

## Membagi objek

1. Ketik `BagiDenganTitik` di terminal atau pilih **Point Divide** dari dropdown array di panel Edit.
2. **Klik objek** — garis, polyline, busur, lingkaran, elips, atau spline. Selain itu ditolak, dan Anda bisa memilih lagi.
3. **Ketik jumlah ruas**, bilangan bulat 2 hingga 32767. Titik dipratinjau pada objek saat Anda mengetik.
4. Tekan **Enter** atau **Space** untuk meletakkannya. Perintah selesai.

## Letak titik

- Jarak diukur sebagai panjang di sepanjang objek, bukan sudut, sehingga elips atau spline dipotong menjadi bagian sama panjang. Ruas busur polyline diikuti sepanjang lengkungnya.
- Pada objek terbuka — garis, polyline terbuka, busur, elips sebagian, atau spline terbuka — titik berada di antara ruas, tidak pernah di ujung: 5 ruas memberi 4 titik.
- Pada objek tertutup — lingkaran, polyline tertutup, elips penuh, atau spline tertutup — titik mengelilingi seluruhnya dari awalnya, yang juga mendapat titik: lingkaran mulai di sudut 0, polyline tertutup di simpul pertamanya. 5 ruas memberi 5 titik.
- Angka di luar 2–32767 ditolak: terminal menyebutkan alasannya dan menghapusnya agar Anda bisa mengetik lagi.

Backspace menghapus digit terakhir. Escape memulai ulang, sehingga Anda bisa memilih objek lain. Enter atau Space sebelum objek dipilih mengakhiri perintah.

---

*Terkait: [Point Interval](../point-interval/) untuk titik berjarak tetap, [Point](../point/) untuk titik tunggal, dan [ArrayPolar](../array-polar/) untuk mengulang objek alih-alih titik.*
