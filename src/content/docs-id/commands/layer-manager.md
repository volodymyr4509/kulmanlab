---
title: LayerManager — Kelola Semua Layer dalam Satu Tabel
description: Perintah LayerManager membuka tabel berisi seluruh layer dalam gambar, memungkinkan Anda menambah layer, menghapus yang tidak terpakai, dan menyunting langsung di barisnya pembekuan, penguncian, pencetakan, warna, ketebalan garis, serta tipe garis tiap layer.
keywords: [pengelola layer, tabel layer CAD, mengelola layer CAD, menambah layer CAD, menghapus layer CAD, membuang layer tak terpakai, bekukan kunci cetak layer, pengelolaan layer kulmanlab]
group: layer
order: 1
---

# LayerManager

Perintah `ManajerLapisan` membuka tabel yang mendaftar setiap layer dalam gambar, dengan pengaturan **Freeze**, **Lock**, **Plot**, **Warna**, **Ketebalan garis**, dan **Tipe garis** yang bisa disunting langsung di barisnya. Ini tempat utama untuk menambah layer, menghapus yang tidak terpakai, dan menyesuaikan perilaku layer yang sudah ada — perintah layer lainnya ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) masing-masing mengerjakan satu hal tanpa membukanya.

## Membuka Layer Manager

- Ketik `ManajerLapisan` di terminal, **atau**
- Klik tombol **Layer Manager** di panel layer.

Dialog terbuka sebagai panel mengambang; tidak ada yang perlu dipilih terlebih dahulu.

## Tabel layer

| Kolom | Yang dikendalikan |
|-------|----------------------|
| Name | Nama layer, ditampilkan hanya-baca di tabel (diatur sekali, saat pembuatan) |
| Freeze | Menyembunyikan entitas layer dan mengecualikannya dari seleksi hingga dicairkan |
| Lock | Mencegah pengeditan entitas pada layer, tanpa menyembunyikannya |
| Plot | Apakah entitas layer disertakan saat mencetak atau mengekspor ke PDF |
| Color | Warna ACI layer — klik contoh warna untuk membuka pemilih warna |
| Lineweight | Ketebalan garis layer — klik chip untuk membuka pemilih ketebalan |
| Linetype | Pola garis putus-putus layer — klik chip untuk membuka pemilih tipe garis |
| ✕ | Menghapus layer bila tidak ada yang memakainya — lihat [Menghapus layer](#menghapus-layer) |

Mengalihkan Freeze, Lock, atau Plot berlaku segera — tidak ada langkah penyimpanan terpisah. Entitas yang diatur ke **ByLayer** untuk warna, ketebalan garis, atau tipe garis (nilai default) mengikuti apa yang Anda atur di sini; entitas dengan override eksplisit mereka sendiri tidak terpengaruh.

## Menambah layer

1. Klik **+ Add Layer** di bagian bawah tabel.
2. Ketik nama dan tekan **Enter** untuk konfirmasi, atau **Escape** untuk batal.

Nama layer dapat berisi huruf, angka, spasi, dan `_`, `-`, `$`. Nama yang kosong, sudah digunakan, atau berisi karakter lain akan ditolak dengan kesalahan inline, dan baris tetap terbuka untuk percobaan lagi.

Layer baru dimulai sebagai **tidak beku, tidak terkunci, dapat diplot**, dengan warna 7 (putih/hitam), ketebalan garis Default, dan tipe garis Continuous — nilai default yang sama yang diberikan [Import](../import/) ke layer `0` dalam gambar kosong.

## Menghapus layer

Setiap baris diakhiri tombol **✕** yang membuang layer dari gambar. Penghapusan berlangsung seketika — tidak ada langkah konfirmasi — tetapi hanya ditawarkan untuk layer yang tidak menjadi sandaran apa pun:

| Keadaan | Status tombol |
|---------|---------------|
| Layer kosong | Aktif — *Delete layer* |
| Layer ditetapkan pada setidaknya satu entitas | Nonaktif — *Cannot delete: assigned to at least one entity* |
| Layer `0` | Tidak ada tombol sama sekali |

**"Sedang dipakai" mencakup seluruh gambar**, bukan cuma yang sedang Anda lihat. Entitas yang berada di sebuah layout (ruang kertas) dihitung persis seperti entitas di ruang model, jadi sebuah layer bisa tampak kosong di layar dan tetap menolak dihapus. Layer yang dibekukan pun sama: membekukan hanya menyembunyikan entitas, tidak melepas penetapannya, sehingga layer beku yang masih memuat entitas tetap tak bisa dihapus.

Layer `0` tidak pernah bisa dihapus. Ia adalah layer cadangan yang dijamin dimiliki setiap gambar, jadi tombolnya sama sekali tidak digambar untuknya alih-alih ditampilkan nonaktif.

### "…is now in use and can't be deleted"

Sesekali ✕ tampak tersedia tetapi klik ditolak dengan spanduk di bagian atas panel:

```
"WALLS" is now in use and can't be deleted
```

Ini bukan kontradiksi. Mencari tahu layer mana yang sedang dipakai berarti menyusuri setiap entitas dalam gambar, jadi hasilnya disimpan di cache dan hanya dibangun ulang ketika jumlah entitas berubah — murah pada ratusan entitas, tidak pada ratusan ribu. Memindahkan entitas yang sudah ada ke sebuah layer tidak mengubah jumlah itu, sehingga status nonaktif pada baris bisa sesaat tertinggal. Klik akan memeriksa ulang dari awal sebelum menghapus apa pun, dan itulah sebabnya penolakan terjadi saat diklik alih-alih layer lenyap sementara sesuatu masih merujuknya.

Tutup spanduk dengan **✕** miliknya sendiri. Layer tidak tersentuh.

## Yang tidak bisa dilakukan di sini

Tabel tidak menunjukkan layer mana yang sedang *aktif*; itu ditetapkan dari daftar turun panel layer atau dengan [LayerMakeCurrent](../layer-make-current/), bukan dari dialog ini. Nama layer pun terkunci saat dibuat — sebuah layer bisa dihapus lalu dibuat ulang, tetapi tidak bisa diganti namanya.

## Referensi keyboard

| Tombol | Aksi |
|--------|------|
| `Enter` | Konfirmasi nama layer baru (saat menambah) |
| `Escape` | Batal menambah layer, atau tutup dialog |

## Perintah terkait

| Perintah | Fungsi |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Mengatur layer saat ini agar sesuai dengan layer entitas yang diklik |
| [LayerMatch](../layer-match/) | Menetapkan ulang entitas yang dipilih agar sesuai dengan layer entitas sumber |
| [LayerIsolate](../layer-isolate/) | Membekukan semua layer kecuali layer entitas yang dipilih |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Mencairkan semua layer dalam satu langkah |
