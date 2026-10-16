---
title: "Perintah Measure — baca jarak, panjang, sudut dan luas di sekeliling kursor"
description: "Perintah Measure membaca lukisan di sekeliling kursor semasa anda menggerakkannya — jarak ke geometri terdekat, panjang atau jejari yang ditemuinya, sudut tempat garisan bertemu — dan dengan satu klik memberi luas dan perimeter kawasan tertutup. Tiada apa-apa dalam lukisan yang berubah."
keywords: ["perintah ukur CAD", "ukur luas dan perimeter CAD", "pengukuran jarak langsung CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Perintah `Ukur` membaca lukisan di sekeliling kursor semasa anda menggerakkannya, tanpa titik untuk dipilih: sejauh mana geometri terdekat, sepanjang atau sebulat mana geometri itu, dan sudut tempat garisan bertemu. Klik di dalam kawasan tertutup memberi luas dan perimeternya. Tiada apa-apa dalam lukisan yang berubah.

## Mengukur

1. Taip `Ukur` dalam terminal atau klik **Measure**, butang pertama dalam panel Measure.
2. **Gerakkan kursor.** Dari situ perintah melihat ke kanan, atas, kiri dan bawah untuk geometri terdekat dan menunjukkan apa yang ditemuinya.
3. **Klik di dalam kawasan tertutup** untuk mengisinya dan membaca luas serta perimeternya — lihat di bawah.
4. Tekan **Enter**, **Space** atau **Escape** untuk tamat.

## Apa yang ditunjukkan

- **Jarak merentas** — daripada yang ditemui kursor di satu sisi kepada yang ditemuinya di sisi lain, secara mendatar dan menegak. Jika hanya satu sisi mempunyai sesuatu, jarak bermula dari kursor. Setiap hujung yang bertemu sesuatu mempunyai titik kecil berisi; hujung di kursor tidak.
- **Panjang atau jejari** — setiap objek yang dicapai perintah diserlahkan dengan panjangnya, atau jejarinya apabila ia sebahagian daripada bulatan.
- **Sudut** — tempat dua garis lurus yang dicapai bertemu, sudut di antaranya ditulis; sudut tegak ditandakan dengan segi empat kecil.

Panjang dan sudut ditulis seperti yang ditulis oleh [DimensionStyle](../dimension-style/) semasa, dalam format unit dan ketepatannya.

## Luas dan perimeter

Klik di dalam kawasan tertutup mengisinya dan meletakkan luas serta perimeternya dalam gesaan dan sejarah. Kawasan ditemui seperti [Hatch](../hatch/) menemuinya: garisan berasingan yang bertemu hujung ke hujung menutup kawasan sama seperti polyline, dan apa-apa yang tertutup di dalamnya ditinggalkan sebagai pulau — tepinya dikira dalam perimeter dan luasnya ditolak.

Luas ialah nombor biasa dalam unit lukisan persegi — kaki dan inci tiada cara menulisnya — manakala perimeter mengikut format unit. Klik di dalam kawasan lain untuk mengukurnya. Jika tiada apa-apa yang tertutup mengelilingi titik, terminal menyatakan sebabnya dengan mesej yang sama seperti Hatch: no boundary found, point is not enclosed atau boundary is open.

## Perlu diketahui

- Ia mengukur terhadap garisan, arka, bulatan, elips, polyline dan splin; panjang dan luas adalah tepat, termasuk untuk elips dan splin.
- Objek pada lapisan yang dibekukan diabaikan; objek pada lapisan yang dikunci diukur.
- Dalam lukisan besar ia hanya melihat apa yang berhampiran kursor, jadi kekal responsif.

---

*Berkaitan: [Distance](../distance/), [Angle](../angle/) dan [Area](../area/) untuk ukuran antara titik yang anda pilih, dan [Hatch](../hatch/) untuk cara kawasan tertutup ditemui.*
