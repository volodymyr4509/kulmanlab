---
title: Dimension Angular — Ukur Sudut antara Garis, Lengkok dan Bulatan
description: Arahan DimensionAngular meletakkan anotasi dimensi sudut pada garis, lengkok, atau bulatan. Menyokong mod sudut dua garis, rentang lengkok, dan sektor bulatan.
keywords: [dimensi sudut CAD, dimensi sudut, ukur sudut antara garis, DimensionAngular, dimensi lengkok, anotasi sudut, markup sudut CAD, dimensi sudut kulmanlab]
group: markup
order: 9
---

# Dimension Angular

Arahan `DimensionAngular` meletakkan anotasi lengkok **dimensi sudut** pada lukisan. Ia mengukur dan melabel sudut antara dua garis, rentang lengkok, atau sektor bulatan.

## Cara mengaktifkan

Klik butang bar alat **Dimension Angular** dalam panel Markup, atau taip `DimensionAngular` dalam terminal.

## Tiga mod input

Klik pertama menentukan mod yang digunakan:

### Dua garis

1. **Klik garis pertama.** Kedudukan kursor menentukan sisi garis yang digunakan.
2. **Klik garis kedua.** Dua garis mesti bersilang (persimpangan dikira secara automatik; tidak perlu kelihatan pada skrin).
3. **Klik untuk meletakkan** lengkok dimensi. Gerakkan kursor untuk memilih jejari dan sektor sudut mana yang dilabel — anotasi mengikuti kursor ke sisi bucu mana anda berada.

Garis selari tidak boleh membentuk dimensi sudut; arahan mengabaikan klik kedua jika garis tidak bersilang.

### Lengkok

1. **Klik lengkok.** Dimensi dicipta serta-merta dari sudut mula lengkok ke sudut akhirnya, menggunakan pusat lengkok sebagai bucu.
2. **Klik untuk meletakkan** lengkok dimensi pada jejari yang dikehendaki.

### Bulatan

1. **Klik bulatan.** Titik akhir sudut pertama snap ke titik terdekat pada bulatan.
2. **Klik titik kedua** pada bulatan untuk menentukan titik akhir sudut kedua.
3. **Klik untuk meletakkan** lengkok dimensi.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Escape` | Batal dan kembali ke pilihan pertama |

## Butiran tingkah laku

- Lengkok dimensi sentiasa dilukis di sisi bucu di mana anda meletakkannya — gerakkan kursor merentasi bucu untuk beralih ke sudut tambahan.
- Sudut yang diukur ditunjukkan dalam darjah dan dikemas kini secara langsung semasa anda menggerakkan kursor semasa peletakan.
- Anotasi yang dihasilkan adalah entiti `DimensionAngular` penuh yang disimpan pada lapisan semasa. Sifat penampilannya (saiz anak panah, ketinggian teks, panjang garis sambungan) boleh dilaraskan dalam panel Sifat.
- Dimensi sudut disertakan dalam eksport JSON tetapi tidak disokong oleh pengeksport DXF.

## Mengedit label — mod mudah

**Klik dua kali** dimensi sudut yang diletakkan untuk membuka editor teks dalam mod **mudah**. Editor diisi terlebih dahulu dengan nilai yang dirender semasa supaya anda boleh meletakkan kursor dan mengeditnya terus.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | Mengkomit nilai dan menutup editor |
| Berbilang baris | Tidak disokong |

Lihat [Text Editor — mod mudah](../../interface/text-editor/#simple-mode) untuk rujukan penuh.

## Arahan berkaitan

- [Dimension Linear](../dim-linear/) — dimensi mendatar atau menegak
- [Dimension Aligned](../dim-aligned/) — dimensi selaras dengan dua titik
- [Dimension Radius](../dim-radius/) — dimensi jejari untuk lengkok dan bulatan
- [Dimension Diameter](../dim-diameter/) — dimensi diameter untuk bulatan
