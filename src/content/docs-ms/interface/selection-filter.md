---
title: Penapis pemilihan — Mempersempit pemilihan berbilang mengikut sifat
description: Apabila banyak entiti dipilih, ikon penapis pada kepala panel sifat membuka tetingkap dengan senarai tanda semak langsung untuk Jenis, Lapisan, Warna, Ketebalan garisan dan Jenis garisan, dibina daripada apa yang benar-benar ada dalam pemilihan, supaya pemilihan besar dan bercampur boleh dipersempit sebelum penyuntingan pukal.
keywords: [penapis pemilihan, menapis pemilihan CAD, penapis faset, mempersempit pemilihan, penyuntingan pukal CAD, penapis panel sifat, kulmanlab]
group: interface
order: 7
---

# Penapis pemilihan

Memilih banyak entiti serentak membuka panel sifat dalam paparan pemilihan berbilang ("Selection (N)"). Sebuah **ikon penapis** di sebelah butang tutup membolehkan anda mempersempit pemilihan itu mengikut sifat sebelum menyuntingnya secara pukal.

## Membuka penapis

1. Pilih beberapa entiti — seret kotak pemilihan, klik sambil menekan Shift, atau tekan Ctrl+A.
2. Klik **ikon penapis** (corong) pada kepala panel sifat.
3. Sebuah tetingkap terbuka di bawah butang itu, dengan senarai tanda semak bagi setiap sifat yang memang berbeza-beza dalam pemilihan.

## Faset

Tetingkap boleh memaparkan sehingga lima faset, setiap satunya dibina secara langsung daripada pemilihan semasa:

| Faset | Nilai yang dipaparkan |
|-------|------------------------|
| **Jenis** | Nama jenis entiti (Line, Circle, Hatch, …) |
| **Lapisan** | Nama lapisan, dengan contoh warna yang sepadan dengan lapisan itu |
| **Warna** | Indeks warna ACI |
| **Ketebalan garisan** | Nilai ketebalan garisan |
| **Jenis garisan** | Nama jenis garisan |

Sesuatu faset hanya muncul jika pemilihan benar-benar mengandungi lebih daripada satu nilai berbeza untuknya — memilih sepuluh garisan yang semuanya berada pada lapisan yang sama tidak akan memaparkan faset Lapisan, kerana menandanya tidak akan mempersempit apa-apa. Entiti yang langsung tidak membawa sesuatu sifat (Hatch dan Text, contohnya, tiada ketebalan mahupun jenis garisan) sekadar tidak dikira dalam faset itu — dan tidak pernah pula disingkirkan olehnya.

## Mempersempit pemilihan

Tandakan satu atau lebih nilai dalam mana-mana faset untuk mempersempit pemilihan kepada entiti yang memenuhi **semua** faset yang ditanda (sesuatu entiti mesti sepadan dengan sekurang-kurangnya satu nilai yang ditanda dalam *setiap* faset yang anda sentuh, bukan hanya satu). Kotak semak dan kiraan setiap faset mencerminkan apa yang telah dipersempit oleh faset *lain* yang ditanda, jadi sesuatu faset tidak pernah menyembunyikan pilihannya sendiri yang sudah ditanda — kelakuan biasa carian berfaset.

Bilangan hasil dikemas kini secara langsung sambil anda menanda dan menyahtanda, dan pemilihan pada kanvas turut dipersempit — ini bukan sekadar penapis paparan: entiti yang tidak lagi sepadan benar-benar dinyahpilih, sedia untuk anda menyunting secara pukal tepat pada subset yang anda tapis.

## Membersihkan penapis

Gunakan kawalan set semula pada tetingkap untuk mengosongkan semua tanda dan kembali kepada pemilihan asal yang penuh, atau tutup tetingkap itu (ia akan dibuka semula dengan asas baharu pada kali seterusnya anda mengklik ikon penapis pada pemilihan lain).

## Berkaitan

- [Match Properties](../../commands/match-properties/) — menyalin sifat daripada satu entiti kepada yang lain, setelah anda mempersempit yang mana satu
- [LayerIsolate](../../commands/layer-isolate/) — alternatif pada peringkat lapisan apabila anda mahu mengasingkan mengikut lapisan sahaja, tanpa mengira apa yang sedang dipilih
