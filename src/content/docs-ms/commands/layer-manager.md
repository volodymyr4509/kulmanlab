---
title: LayerManager — Urus Semua Lapisan dalam Satu Jadual
description: Perintah LayerManager membuka jadual semua lapisan dalam lukisan, membolehkan anda menambah lapisan, memadam yang tidak digunakan, serta menyunting terus dalam barisnya tetapan beku, kunci, cetak, warna, ketebalan garisan dan jenis garisan bagi setiap satu.
keywords: [pengurus lapisan, jadual lapisan CAD, urus lapisan CAD, tambah lapisan CAD, padam lapisan CAD, buang lapisan tidak digunakan, bekukan kunci cetak lapisan, pengurusan lapisan kulmanlab]
group: layer
order: 1
---

# LayerManager

Perintah `LayerManager` membuka jadual yang menyenaraikan setiap lapisan dalam lukisan, dengan tetapan **Freeze**, **Lock**, **Plot**, **Warna**, **Ketebalan garisan** dan **Jenis garisan** boleh disunting terus di dalam barisnya. Ia tempat utama untuk menambah lapisan, memadam yang tidak digunakan dan melaraskan kelakuan lapisan sedia ada — perintah lapisan yang lain ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) masing-masing melakukan satu perkara tanpa membukanya.

## Membuka Layer Manager

- Taip `LayerManager` dalam terminal, **atau**
- Klik butang **Layer Manager** pada panel lapisan.

Dialog dibuka sebagai panel terapung; tiada apa yang perlu dipilih terlebih dahulu.

## Jadual lapisan

| Lajur | Apa yang dikawal |
|-------|---------------------|
| Name | Nama lapisan, dipaparkan hanya-baca dalam jadual (ditetapkan sekali, semasa penciptaan) |
| Freeze | Menyembunyikan entiti lapisan dan mengecualikannya daripada pemilihan sehingga dinyahbeku |
| Lock | Menghalang penyuntingan entiti pada lapisan, tanpa menyembunyikannya |
| Plot | Sama ada entiti lapisan disertakan semasa mencetak atau eksport ke PDF |
| Color | Warna ACI lapisan — klik contoh untuk membuka pemilih warna |
| Lineweight | Ketebalan garis lapisan — klik chip untuk membuka pemilih ketebalan |
| Linetype | Corak garis putus lapisan — klik chip untuk membuka pemilih jenis garis |
| ✕ | Memadam lapisan apabila tiada apa-apa menggunakannya — lihat [Memadam lapisan](#memadam-lapisan) |

Menogol Freeze, Lock, atau Plot berkuat kuasa serta-merta — tiada langkah simpan berasingan. Entiti yang ditetapkan kepada **ByLayer** untuk warna, ketebalan garis, atau jenis garis (nilai lalai) mengikut apa yang anda tetapkan di sini; entiti dengan pengatasan eksplisit mereka sendiri tidak terjejas.

## Menambah lapisan

1. Klik **+ Add Layer** di bahagian bawah jadual.
2. Taip nama dan tekan **Enter** untuk mengesahkan, atau **Escape** untuk membatalkan.

Nama lapisan boleh mengandungi huruf, nombor, ruang, dan `_`, `-`, `$`. Nama yang kosong, sudah digunakan, atau mengandungi aksara lain akan ditolak dengan ralat sebaris, dan baris kekal terbuka untuk cubaan lain.

Lapisan baharu bermula sebagai **tidak dibekukan, tidak dikunci, boleh diplot**, dengan warna 7 (putih/hitam), ketebalan garis Default, dan jenis garis Continuous — nilai lalai yang sama yang [Import](../import/) berikan kepada lapisan `0` dalam lukisan kosong.

## Memadam lapisan

Setiap baris berakhir dengan butang **✕** yang mengeluarkan lapisan daripada lukisan. Pemadaman berlaku serta-merta — tiada langkah pengesahan — tetapi hanya ditawarkan bagi lapisan yang tiada apa-apa bergantung padanya:

| Keadaan | Keadaan butang |
|---------|----------------|
| Lapisan kosong | Aktif — *Delete layer* |
| Lapisan diberikan kepada sekurang-kurangnya satu entiti | Dilumpuhkan — *Cannot delete: assigned to at least one entity* |
| Lapisan `0` | Tiada butang langsung |

**"Sedang digunakan" merangkumi keseluruhan lukisan**, bukan hanya apa yang sedang anda lihat. Entiti yang berada pada susun atur (ruang kertas) dikira sama seperti entiti dalam ruang model, jadi sesuatu lapisan boleh kelihatan kosong pada skrin namun tetap enggan dipadam. Lapisan yang dibekukan tidak berbeza: pembekuan menyembunyikan entiti tetapi tidak menarik balik penetapannya, jadi lapisan beku yang memuatkan entiti kekal tidak boleh dipadam.

Lapisan `0` tidak boleh dipadam sama sekali. Ia lapisan sandaran yang pasti dimiliki setiap lukisan, jadi butangnya langsung tidak dilukis, bukannya dipaparkan dalam keadaan dilumpuhkan.

### "…is now in use and can't be deleted"

Ada kalanya ✕ kelihatan tersedia tetapi klik ditolak dengan sepanduk di bahagian atas panel:

```
"WALLS" is now in use and can't be deleted
```

Ini bukan percanggahan. Untuk mengetahui lapisan mana yang sedang digunakan, setiap entiti dalam lukisan perlu diperiksa, jadi hasilnya disimpan dalam cache dan hanya dibina semula apabila bilangan entiti berubah — murah pada ratusan entiti, tidak pada ratusan ribu. Memindahkan entiti sedia ada ke sesuatu lapisan tidak mengubah bilangan itu, jadi keadaan dilumpuhkan pada baris boleh ketinggalan seketika. Klik akan memeriksa semula dari awal sebelum memadam apa-apa, dan itulah sebabnya penolakan berlaku ketika diklik, bukannya lapisan hilang sedangkan sesuatu masih merujuknya.

Tutup sepanduk dengan **✕** miliknya sendiri. Lapisan kekal tidak tersentuh.

## Apa yang tidak boleh dilakukan di sini

Jadual tidak menunjukkan lapisan mana yang *semasa*; itu ditetapkan daripada senarai juntai bawah panel lapisan atau dengan [LayerMakeCurrent](../layer-make-current/), bukan daripada dialog ini. Nama lapisan juga ditetapkan semasa penciptaan — sesuatu lapisan boleh dipadam dan dicipta semula, tetapi tidak boleh dinamakan semula.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|----------|
| `Enter` | Sahkan nama lapisan baharu (semasa menambah) |
| `Escape` | Batalkan penambahan lapisan, atau tutup dialog |

## Arahan berkaitan

| Arahan | Fungsinya |
|--------|-----------|
| [LayerMakeCurrent](../layer-make-current/) | Tetapkan lapisan semasa agar sepadan dengan lapisan entiti yang diklik |
| [LayerMatch](../layer-match/) | Tugaskan semula entiti yang dipilih untuk memadankan lapisan entiti sumber |
| [LayerIsolate](../layer-isolate/) | Bekukan semua lapisan kecuali lapisan entiti yang dipilih |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Nyahbeku semua lapisan dalam satu langkah |
