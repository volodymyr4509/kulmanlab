---
title: Filter seleksi — Mempersempit seleksi ganda berdasarkan properti
description: Ketika banyak entitas terpilih, ikon filter di kepala panel properti membuka jendela berisi daftar centang langsung untuk Tipe, Layer, Warna, Ketebalan garis, dan Tipe garis, yang disusun dari apa yang benar-benar ada dalam seleksi, sehingga seleksi besar dan campur aduk bisa dipersempit sebelum penyuntingan massal.
keywords: [filter seleksi, menyaring seleksi CAD, filter faset, mempersempit seleksi, penyuntingan massal CAD, filter panel properti, kulmanlab]
group: interface
order: 7
---

# Filter seleksi

Memilih banyak entitas sekaligus membuka panel properti dalam tampilan seleksi ganda ("Selection (N)"). Sebuah **ikon filter** di sebelah tombol tutup memungkinkan Anda mempersempit seleksi itu berdasarkan properti sebelum menyuntingnya secara massal.

## Membuka filter

1. Pilih beberapa entitas — seret kotak seleksi, klik sambil menekan Shift, atau tekan Ctrl+A.
2. Klik **ikon filter** (corong) di kepala panel properti.
3. Sebuah jendela terbuka di bawah tombol, berisi daftar centang untuk setiap properti yang memang bervariasi di dalam seleksi.

## Faset

Jendela dapat menampilkan hingga lima faset, masing-masing disusun langsung dari seleksi saat ini:

| Faset | Nilai yang ditampilkan |
|-------|------------------------|
| **Tipe** | Nama tipe entitas (Line, Circle, Hatch, …) |
| **Layer** | Nama layer, dengan contoh warna yang sesuai dengan layer itu |
| **Warna** | Indeks warna ACI |
| **Ketebalan garis** | Nilai ketebalan garis |
| **Tipe garis** | Nama tipe garis |

Sebuah faset hanya muncul bila seleksi memang memuat lebih dari satu nilai berbeda untuknya — memilih sepuluh garis yang semuanya berada di layer yang sama tidak akan memunculkan faset Layer, karena mencentangnya tak akan mempersempit apa pun. Entitas yang sama sekali tidak membawa properti tertentu (Hatch dan Text, misalnya, tidak punya ketebalan maupun tipe garis) sekadar tidak dihitung pada faset itu — dan tidak pernah pula tersingkir karenanya.

## Mempersempit seleksi

Centang satu atau lebih nilai pada faset mana pun untuk mempersempit seleksi menjadi entitas yang memenuhi **semua** faset yang tercentang (sebuah entitas harus cocok dengan setidaknya satu nilai tercentang pada *setiap* faset yang Anda sentuh, bukan hanya salah satunya). Kotak centang dan hitungan tiap faset mencerminkan apa yang sudah dipersempit oleh faset *lain* yang tercentang, sehingga sebuah faset tak pernah menyembunyikan pilihannya sendiri yang sudah tercentang — perilaku lazim pencarian berfaset.

Jumlah hasil diperbarui langsung saat Anda mencentang dan melepas centang, dan seleksi di kanvas ikut dipersempit — ini bukan sekadar filter tampilan: entitas yang tak lagi cocok benar-benar dilepas dari seleksi, siap untuk Anda sunting massal tepat pada himpunan bagian yang Anda saring.

## Membersihkan filter

Gunakan kontrol reset pada jendela untuk mengosongkan semua centang dan kembali ke seleksi asli yang utuh, atau tutup jendelanya (ia akan terbuka kembali dengan dasar yang baru saat Anda mengeklik ikon filter pada seleksi lain).

## Terkait

- [Match Properties](../../commands/match-properties/) — menyalin properti dari satu entitas ke entitas lain, setelah Anda mempersempit yang mana saja
- [LayerIsolate](../../commands/layer-isolate/) — alternatif pada tingkat layer bila Anda ingin mengisolasi hanya berdasarkan layer, terlepas dari apa yang sedang terpilih
