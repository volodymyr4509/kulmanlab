---
title: "Perintah PointDivide — letak titik pada panjang yang sama di sepanjang objek"
description: "Perintah PointDivide membahagikan garisan, polyline, arka, bulatan, elips atau splin kepada segmen yang sama panjang dan meletakkan titik pada setiap bahagian, dengan pratonton semasa anda menaip bilangan segmen."
keywords: ["perintah bahagi CAD", "bahagi garisan kepada bahagian sama CAD", "titik di sepanjang objek CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Perintah `BahagiDenganTitik` meletakkan [titik](../point/) yang membahagikan objek kepada segmen yang sama panjang. Objek itu sendiri tidak berubah: titik-titik ialah entiti baharu pada lapisan dan warna semasa, berguna untuk snap.

## Membahagikan objek

1. Taip `BahagiDenganTitik` dalam terminal atau pilih **Point Divide** daripada juntai bawah tatasusunan dalam panel Edit.
2. **Klik objek** — garisan, polyline, arka, bulatan, elips atau splin. Selain itu ditolak, dan anda boleh memilih semula.
3. **Taip bilangan segmen**, nombor bulat dari 2 hingga 32767. Titik dipratonton pada objek semasa anda menaip.
4. Tekan **Enter** atau **Space** untuk meletakkannya. Perintah tamat.

## Di mana titik diletakkan

- Jarak diukur sebagai panjang di sepanjang objek, bukan sudut, jadi elips atau splin dipotong kepada kepingan yang sama panjang. Segmen arka polyline diikuti di sepanjang lengkungnya.
- Pada objek terbuka — garisan, polyline terbuka, arka, sebahagian elips atau splin terbuka — titik diletakkan di antara segmen, tidak pernah pada hujung: 5 segmen memberi 4 titik.
- Pada objek tertutup — bulatan, polyline tertutup, elips penuh atau splin tertutup — titik mengelilingi sepenuhnya dari permulaannya, yang juga mendapat titik: bulatan bermula pada sudut 0, polyline tertutup pada bucu pertamanya. 5 segmen memberi 5 titik.
- Nombor di luar 2–32767 ditolak: terminal menyatakan sebabnya dan mengosongkannya supaya anda boleh menaip semula.

Backspace memadam digit terakhir. Escape bermula semula, supaya anda boleh memilih objek lain. Enter atau Space sebelum objek dipilih menamatkan perintah.

---

*Berkaitan: [Point Interval](../point-interval/) untuk titik berjarak tetap, [Point](../point/) untuk titik tunggal, dan [ArrayPolar](../array-polar/) untuk mengulang objek dan bukannya titik.*
