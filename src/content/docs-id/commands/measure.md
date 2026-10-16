---
title: "Perintah Measure — baca jarak, panjang, sudut, dan luas di sekitar kursor"
description: "Perintah Measure membaca gambar di sekitar kursor saat Anda menggerakkannya — jarak ke geometri terdekat, panjang atau radius yang ditemuinya, sudut tempat garis bertemu — dan dengan satu klik memberi luas dan keliling area tertutup. Tidak ada yang berubah pada gambar."
keywords: ["perintah ukur CAD", "ukur luas dan keliling CAD", "pengukuran jarak langsung CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Perintah `Ukur` membaca gambar di sekitar kursor saat Anda menggerakkannya, tanpa titik yang perlu dipilih: seberapa jauh geometri terdekat, seberapa panjang atau bulat geometri itu, dan sudut tempat garis bertemu. Klik di dalam area tertutup memberi luas dan kelilingnya. Tidak ada yang berubah pada gambar.

## Mengukur

1. Ketik `Ukur` di terminal atau klik **Measure**, tombol pertama di panel Measure.
2. **Gerakkan kursor.** Dari sana perintah melihat ke kanan, atas, kiri, dan bawah untuk geometri terdekat dan menampilkan yang ditemukannya.
3. **Klik di dalam area tertutup** untuk mengisinya dan membaca luas serta kelilingnya — lihat di bawah.
4. Tekan **Enter**, **Space**, atau **Escape** untuk mengakhiri.

## Yang ditampilkan

- **Jarak melintang** — dari yang ditemui kursor di satu sisi ke yang ditemuinya di sisi lain, horizontal dan vertikal. Jika hanya satu sisi yang ada isinya, jarak dimulai dari kursor. Setiap ujung yang bertemu sesuatu memiliki titik kecil terisi; ujung di kursor tidak.
- **Panjang atau radius** — setiap objek yang dicapai perintah disorot dengan panjangnya, atau radiusnya bila bagian dari lingkaran.
- **Sudut** — tempat dua garis lurus yang dicapai bertemu, sudut di antaranya ditulis; sudut siku-siku ditandai dengan kotak kecil.

Panjang dan sudut ditulis seperti yang ditulis [DimensionStyle](../dimension-style/) saat ini, dengan format satuan dan presisinya.

## Luas dan keliling

Klik di dalam area tertutup mengisinya dan menaruh luas serta kelilingnya di prompt dan riwayat. Wilayah ditemukan seperti [Hatch](../hatch/) menemukannya: garis terpisah yang bertemu ujung ke ujung menutup area seperti polyline, dan apa pun yang tertutup di dalamnya dikecualikan sebagai pulau — tepinya dihitung dalam keliling dan luasnya dikurangkan.

Luas adalah angka biasa dalam satuan gambar persegi — kaki dan inci tidak punya cara menulisnya — sedangkan keliling mengikuti format satuan. Klik di dalam area lain untuk mengukurnya. Jika tidak ada yang tertutup mengelilingi titik, terminal menyebutkan alasannya dengan pesan yang sama seperti Hatch: no boundary found, point is not enclosed, atau boundary is open.

## Perlu diketahui

- Perintah ini mengukur terhadap garis, busur, lingkaran, elips, polyline, dan spline; panjang dan luas akurat, termasuk untuk elips dan spline.
- Objek pada layer yang dibekukan diabaikan; objek pada layer yang dikunci diukur.
- Pada gambar besar ia hanya melihat yang dekat dengan kursor, sehingga tetap responsif.

---

*Terkait: [Distance](../distance/), [Angle](../angle/), dan [Area](../area/) untuk pengukuran antar titik yang Anda pilih, dan [Hatch](../hatch/) untuk cara area tertutup ditemukan.*
