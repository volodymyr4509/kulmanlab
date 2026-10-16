---
title: "Perintah ArrayPolar — salin objek mengelilingi titik pusat dalam KulmanLab CAD"
description: "Perintah ArrayPolar menyalin objek yang dipilih mengelilingi titik pusat — sejumlah item tersebar pada satu pusingan penuh atau sebahagian daripadanya, dengan salinan yang berputar semasa mengelilingi atau mengekalkan orientasi sendiri."
keywords: ["tatasusunan kutub CAD", "corak bulat CAD", "salin objek mengelilingi titik CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Perintah `ArrayPolar` membuat salinan objek yang dipilih mengelilingi titik pusat, tersebar sekata pada satu pusingan penuh atau sebahagian daripadanya. Yang asal ialah item pertama; setiap item lain ialah salinan yang diputar mengelilingi pusat — atau hanya dialihkan mengelilinginya, jika Rotate dimatikan.

## Membuat tatasusunan kutub

1. Pilih objek, kemudian taip `LarikPolar` dalam terminal atau klik butang **Array Polar** pada bar alat. Jika dimulakan tanpa pilihan, ia meminta anda memilihnya dahulu — tekan **Enter** atau **Space** untuk mengesahkan.
2. **Klik pusat** yang dikelilingi salinan, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Semak tatasusunan. Semua salinan dipratonton secara langsung, dan terminal memaparkan `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — tekan huruf sesuatu pilihan untuk mengubahnya.
4. Tekan **Enter** atau **Space** untuk mencipta salinan. Yang asal kekal di tempatnya dan pilihan dikosongkan.

## Pilihan

| Pilihan | Kekunci | Kesan |
|---|---|---|
| Items | `I` | Berapa banyak item, termasuk yang asal — nombor bulat dari 2 hingga 1024. Bermula pada 6. |
| Angle | `A` | Darjah dari satu item ke item seterusnya, melawan arah jam; sudut negatif ikut arah jam. Sehingga 180°. |
| Fill | `F` | Darjah dari item pertama ke yang terakhir. 360 (lalai) ialah satu pusingan penuh; nombor lebih kecil menyebarkan item pada sebahagiannya. Negatif ikut arah jam. Sehingga 360°. |
| Rotate | `R` | Hidup (lalai): setiap salinan berputar semasa mengelilingi. Mati: setiap salinan dialihkan ke tempatnya dan menghadap arah yang sama dengan yang asal. Beralih serta-merta — tiada nombor untuk ditaip. |

- Angle dan Fill ialah dua cara menyatakan perkara yang sama, jadi mengubah satu menyatakan semula yang lain. Pada pusingan penuh, item terakhir berhenti satu langkah sebelum yang pertama; pada sebahagian pusingan, ia jatuh tepat pada sudut isian.
- Untuk mengubah nombor, tekan huruf pilihannya. Gesaan diisi awal dengan nilai semasa — taip untuk menggantikannya, kemudian tekan **Enter** atau **Space**; mengesahkannya tanpa perubahan membiarkan tatasusunan seperti asal.
- Items hanya menerima nombor bulat; Angle dan Fill menerima perpuluhan dan `-` di awal untuk ikut arah jam. Sudut atau isian 0 ditolak, begitu juga sudut melebihi 180° atau isian melebihi 360° — terminal menyatakan sebabnya.
- Angle yang terlalu kecil untuk memuatkan semua item menggugurkan item yang tiada ruang, dan terminal melaporkan bilangan baharu.
- Berfungsi pada semua jenis entiti: setiap salinan ialah objek asal yang diputar mengelilingi pusat, atau dialihkan, tepat seperti yang dilakukan [Rotate](../rotate/) dan [Move](../move/).

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---|---|
| `Enter` / `Space` | Sahkan pilihan, tatasusunan atau nombor yang ditaip |
| `I` `A` `F` `R` | Ubah Items, Angle atau Fill dengan menaip nombor; togol Rotate |
| `0`–`9`, `.`, `-` | Taip nombor (`.` dan `-` hanya untuk Angle dan Fill, `-` dahulu) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Escape` | Batal |
