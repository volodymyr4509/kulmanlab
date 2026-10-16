---
title: "Perintah ArrayPolar — salin objek mengelilingi titik pusat di KulmanLab CAD"
description: "Perintah ArrayPolar menyalin objek terpilih mengelilingi sebuah titik pusat — sejumlah item tersebar pada satu putaran penuh atau sebagian darinya, dengan salinan yang berputar saat mengelilingi atau mempertahankan orientasinya sendiri."
keywords: ["array polar CAD", "pola melingkar CAD", "salin objek mengelilingi titik CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Perintah `ArrayPolar` membuat salinan objek terpilih mengelilingi titik pusat, tersebar merata pada satu putaran penuh atau sebagian darinya. Aslinya adalah item pertama; setiap item lain adalah salinan yang diputar terhadap pusat — atau hanya dipindahkan mengelilinginya, jika Rotate dimatikan.

## Membuat array polar

1. Pilih objek, lalu ketik `LarikMelingkar` di terminal atau klik tombol **Array Polar** di toolbar. Jika dimulai tanpa pilihan, perintah meminta Anda memilihnya dulu — tekan **Enter** atau **Space** untuk konfirmasi.
2. **Klik pusat** yang dikelilingi salinan, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. Tinjau array. Semua salinan dipratinjau langsung, dan terminal menampilkan `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — tekan huruf sebuah opsi untuk mengubahnya.
4. Tekan **Enter** atau **Space** untuk membuat salinan. Objek asli tetap di tempatnya dan pilihan dihapus.

## Opsi

| Opsi | Tombol | Efek |
|---|---|---|
| Items | `I` | Berapa banyak item, termasuk yang asli — bilangan bulat 2 hingga 1024. Dimulai dari 6. |
| Angle | `A` | Derajat dari satu item ke item berikutnya, berlawanan arah jarum jam; sudut negatif searah jarum jam. Hingga 180°. |
| Fill | `F` | Derajat dari item pertama ke terakhir. 360 (bawaan) adalah satu putaran penuh; angka lebih kecil menyebarkan item pada sebagian putaran. Negatif searah jarum jam. Hingga 360°. |
| Rotate | `R` | Aktif (bawaan): setiap salinan berputar saat mengelilingi. Nonaktif: setiap salinan dipindahkan ke tempatnya dan menghadap arah yang sama dengan aslinya. Beralih seketika — tidak ada angka untuk diketik. |

- Angle dan Fill adalah dua cara menyatakan hal yang sama, jadi mengubah salah satunya menyatakan ulang yang lain. Pada putaran penuh, item terakhir berhenti satu langkah sebelum yang pertama; pada sebagian putaran, ia jatuh tepat di sudut isian.
- Untuk mengubah angka, tekan huruf opsinya. Prompt terisi otomatis dengan nilai saat ini — ketik untuk menggantinya, lalu tekan **Enter** atau **Space**; konfirmasi tanpa perubahan membiarkan array seperti semula.
- Items hanya menerima bilangan bulat; Angle dan Fill menerima desimal dan `-` di awal untuk searah jarum jam. Sudut atau isian 0 ditolak, begitu pula sudut di atas 180° atau isian di atas 360° — terminal menjelaskan alasannya.
- Angle yang terlalu kecil untuk memuat semua item menjatuhkan item yang tidak kebagian tempat, dan terminal melaporkan jumlah barunya.
- Berfungsi pada semua tipe entitas: setiap salinan adalah objek asli yang diputar terhadap pusat, atau dipindahkan, persis seperti yang dilakukan [Rotate](../rotate/) dan [Move](../move/).

## Referensi keyboard

| Tombol | Aksi |
|---|---|
| `Enter` / `Space` | Konfirmasi pilihan, array, atau angka yang diketik |
| `I` `A` `F` `R` | Ubah Items, Angle, atau Fill dengan mengetik angka; alihkan Rotate |
| `0`–`9`, `.`, `-` | Ketik angka (`.` dan `-` hanya untuk Angle dan Fill, `-` di awal) |
| `Backspace` | Hapus karakter yang terakhir diketik |
| `Escape` | Batal |
