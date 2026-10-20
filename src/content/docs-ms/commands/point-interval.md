---
title: "Perintah PointInterval — letak titik pada jarak tetap di sepanjang objek"
description: "Perintah PointInterval meletakkan titik pada jarak yang anda taip di sepanjang garisan, polyline, arka, bulatan, elips atau splin, bermula dari hujung yang anda klik paling hampir, dengan pratonton semasa anda menaip panjangnya."
keywords: ["titik pada selang CAD", "titik pada jarak tetap di garisan CAD", "ukur di sepanjang objek CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Perintah `TitikBerselang` meletakkan [titik](../point/) pada jarak tetap di sepanjang objek, seperti menanda stesen di sepanjang laluan. Objek itu sendiri tidak berubah: titik-titik ialah entiti baharu pada lapisan dan warna semasa, berguna untuk snap.

## Meletakkan titik pada selang

1. Taip `TitikBerselang` dalam terminal atau pilih **Point Interval** daripada juntai bawah tatasusunan dalam panel Edit.
2. **Klik objek berhampiran hujung permulaan** — garisan, polyline, arka, bulatan, elips atau splin. Selain itu ditolak, dan anda boleh memilih semula.
3. **Taip panjang selang.** Titik dipratonton pada objek semasa anda menaip.
4. Tekan **Enter** atau **Space** untuk meletakkannya. Perintah tamat.

## Di mana titik diletakkan

- Titik pertama terletak satu selang dari permulaan dan selebihnya menyusul satu selang di antaranya, diukur di sepanjang objek termasuk lengkung. Tiada titik pada permulaan itu sendiri.
- Pada objek terbuka — garisan, polyline terbuka, arka, sebahagian elips atau splin terbuka — pengukuran bermula dari hujung yang anda klik paling hampir. Baki di hujung jauh tidak ditanda: hujung jauh hanya mendapat titik apabila selang muat dengan tepat.
- Pada objek tertutup — bulatan, polyline tertutup, elips penuh atau splin tertutup — pengukuran bermula dari permulaan objek itu sendiri, di mana-mana pun anda klik: bulatan dari sudut 0 lawan arah jam, polyline tertutup dari bucu pertamanya. Titik berhenti sebelum permulaan.
- Panjang 0 atau kurang, lebih panjang daripada objek, atau yang memberi lebih daripada 32767 titik ditolak: terminal menyatakan sebabnya dan mengosongkannya supaya anda boleh menaip semula.

Backspace memadam aksara terakhir. Escape bermula semula, supaya anda boleh memilih objek lain. Enter atau Space sebelum objek dipilih menamatkan perintah.

---

*Berkaitan: [Point Divide](../point-divide/) untuk membahagikan objek kepada beberapa panjang yang sama, dan [Point](../point/) untuk titik tunggal.*
