---
title: "Perintah PointInterval — letakkan titik berjarak tetap di sepanjang objek"
description: "Perintah PointInterval meletakkan titik dengan jarak yang Anda ketik di sepanjang garis, polyline, busur, lingkaran, elips, atau spline, mulai dari ujung yang Anda klik paling dekat, dengan pratinjau saat Anda mengetik panjangnya."
keywords: ["titik berinterval CAD", "titik berjarak tetap pada garis CAD", "ukur di sepanjang objek CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Perintah `TitikBerjarak` meletakkan [titik](../point/) berjarak tetap di sepanjang objek, seperti menandai stasiun di sepanjang jalur. Objeknya tidak berubah: titik-titik itu entitas baru pada layer dan warna saat ini, berguna untuk snap.

## Meletakkan titik berinterval

1. Ketik `TitikBerjarak` di terminal atau pilih **Point Interval** dari dropdown array di panel Edit.
2. **Klik objek di dekat ujung awal** — garis, polyline, busur, lingkaran, elips, atau spline. Selain itu ditolak, dan Anda bisa memilih lagi.
3. **Ketik panjang interval.** Titik dipratinjau pada objek saat Anda mengetik.
4. Tekan **Enter** atau **Space** untuk meletakkannya. Perintah selesai.

## Letak titik

- Titik pertama berada satu interval dari awal dan sisanya menyusul dengan jarak satu interval, diukur di sepanjang objek termasuk lengkungan. Tidak ada titik di awal itu sendiri.
- Pada objek terbuka — garis, polyline terbuka, busur, elips sebagian, atau spline terbuka — pengukuran dimulai dari ujung yang Anda klik paling dekat. Sisa di ujung jauh tidak ditandai: ujung jauh hanya mendapat titik jika intervalnya pas tepat.
- Pada objek tertutup — lingkaran, polyline tertutup, elips penuh, atau spline tertutup — pengukuran dimulai dari awal objek itu sendiri, di mana pun Anda klik: lingkaran dari sudut 0 berlawanan arah jarum jam, polyline tertutup dari simpul pertamanya. Titik berhenti sebelum awal.
- Panjang 0 atau kurang, lebih panjang dari objek, atau yang menghasilkan lebih dari 32767 titik ditolak: terminal menyebutkan alasannya dan menghapusnya agar Anda bisa mengetik lagi.

Backspace menghapus karakter terakhir. Escape memulai ulang, sehingga Anda bisa memilih objek lain. Enter atau Space sebelum objek dipilih mengakhiri perintah.

---

*Terkait: [Point Divide](../point-divide/) untuk membagi objek menjadi sejumlah panjang yang sama, dan [Point](../point/) untuk titik tunggal.*
