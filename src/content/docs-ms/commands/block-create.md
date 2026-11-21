---
title: "Perintah BlockCreate — Membuat blok daripada objek"
description: "Perintah BlockCreate membuat blok bernama daripada objek yang dipilih, dengan titik asas pilihan anda, dan menggantikannya dengan satu rujukan kepada blok itu. Blok itu kemudian boleh diletakkan berulang kali dengan BlockInsert."
keywords: ["buat blok CAD", "blok daripada objek CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Perintah `CiptaBlok` membuat **blok**: sekumpulan objek bernama yang disimpan sekali dalam lukisan dan diletakkan sebanyak yang anda mahu dengan [Block Insert](../block-insert/). Objek yang dipilih menjadi blok, dan dalam lukisan ia digantikan satu rujukan kepadanya, jadi rupa tidak berubah.

## Membuat blok

1. Pilih objek dahulu jika mahu, kemudian taip `CiptaBlok` atau klik **Cipta blok** dalam panel **Blok**. Sebuah popup dibuka dengan pilihan sudah di dalamnya.
2. Taip **Nama**. Ia tidak boleh kosong, tidak boleh mengandungi mana-mana aksara `< > / \ " : ; ? * | , =` atau tanda sengkang belakang, dan tidak boleh sama dengan nama blok lain.
3. Klik **Pilih objek** untuk menambah atau mengeluarkan objek: popup disembunyikan, dan anda mengklik objek atau menyeret kawasan. Tekan **Enter** atau **Space** untuk kembali ke popup, tempat **Objek** menunjukkan bilangannya.
4. Tetapkan **Titik asas**, titik yang digunakan untuk meletakkan blok: taip X dan Y-nya, atau klik **Pilih titik** kemudian klik pada kanvas (atau taip X,Y di situ). Ia bermula pada 0,0.
5. Klik **OK**. Blok disimpan, objek memberi laluan kepada satu rujukan kepadanya pada titik asas, dan terminal mencatat nama blok serta bilangan objek di dalamnya.

## Perlu diketahui

- **OK** kekal dinyahaktifkan selagi ada yang salah, dan mesej di bawah medan menyatakan apa: nama kosong atau tidak boleh digunakan, nama yang sudah ada, atau tiada objek.
- **Escape** semasa memilih objek atau titik asas kembali ke popup dengan blok seperti asal. **Escape** dalam popup membatalkan perintah.
- Blok disimpan bersama lukisan dan ditulis ke DXF bersama rujukannya.

---

*Berkaitan: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
