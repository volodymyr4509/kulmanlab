---
title: Dimension Continue — Rantai Dimensi dari Garis Asas Sedia Ada
description: Arahan Dimension Continue memanjangkan rantai dimensi dari garis sambungan kedua dimensi terakhir yang diletakkan. Ia mewarisi sudut, offset, saiz anak panah, dan ketinggian teks dimensi asas secara automatik. Berfungsi dengan asas linear dan aligned.
keywords: [CAD dimensi continue, dimcontinue, rantai dimensi CAD, dimensi garis asas, teruskan siri dimensi, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Arahan `dimcontinue` merantai dimensi baharu dari **garis sambungan kedua** dimensi sedia ada. Setiap segmen baharu diletakkan sepanjang paksi pengukuran yang sama dan pada offset garis dimensi yang sama seperti asas. Semua sifat gaya — saiz anak panah, ketinggian teks, panjang garis sambungan — disalin dari asas secara automatik.

## Bagaimana dimensi berantai kelihatan

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (asas    p3           p4
           ext2 → mula baharu)
```

Setiap segi empat tepat adalah entiti `DIMENSION` yang berasingan. Mereka berkongsi kedudukan garis dimensi dan arah pengukuran yang sama.

## Memulakan rantai

1. Taip `dimcontinue` dalam terminal atau klik butang bar alat **Dimension Continue**.
2. **Jika dimensi baru sahaja diletakkan** — arahan mengambilnya secara automatik sebagai asas (tiada klik diperlukan).
3. **Jika tiada dimensi terkini wujud** — klik mana-mana dimensi sedia ada untuk menggunakannya sebagai asas.
4. **Klik asal garis sambungan seterusnya** — pratonton menunjukkan dimensi baharu semasa anda menggerakkan kursor. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
5. Terus mengklik (atau menaip) untuk memanjangkan rantai. Setiap dimensi yang diletakkan menjadi asas baharu secara automatik.
6. Tekan **Enter**, **Space**, atau **Escape** untuk mengakhiri rantai.

## Apa yang diwarisi dari dimensi asas

| Sifat | Diwarisi dari asas |
|-------|-------------------|
| Arah / sudut pengukuran | Ya — dikunci untuk keseluruhan rantai |
| Offset garis dimensi (jarak dari titik yang diukur) | Ya |
| Saiz anak panah | Ya |
| Ketinggian teks | Ya |
| Offset dan sambungan garis sambungan | Ya |
| Penjajaran teks | Ya |
| Nama gaya | Ya |
| Warna, Lapisan | Tidak diwarisi — menggunakan lapisan semasa |

## Penguncian arah pengukuran

Arah pengukuran rantai **ditetapkan ke sudut dimensi asas**:

- Asas Linear (H) → semua kesinambungan mengukur jarak mendatar (Δ X).
- Asas Linear (V) → semua kesinambungan mengukur jarak menegak (Δ Y).
- Asas Aligned pada mana-mana sudut → semua kesinambungan mengukur sepanjang sudut yang sama itu.

Anda tidak boleh menukar arah di tengah rantai. Mulakan [Dimension Linear](../dim-linear/) atau [Dimension Aligned](../dim-aligned/) yang baharu untuk dimensi dalam arah berbeza.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip, atau selesaikan rantai jika tiada input sedang berjalan |
| `Space` / `Escape` | Selesaikan rantai |

## Dimension Continue berbanding memulakan dari awal

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Titik mula | Ditetapkan pada ext2 asas terakhir | Klik di mana-mana |
| Sudut | Dikunci ke asas | Bebas |
| Offset | Diwarisi dari asas | Ditetapkan oleh kursor atau bertaip |
| Gaya | Diwarisi dari asas | Gaya semasa |
| Terbaik untuk | Pengukuran kumulatif sepanjang barisan | Dimensi pertama atau menukar arah |

## Mengedit label selepas peletakan — mod mudah

**Klik dua kali** mana-mana dimensi dalam rantaian untuk membuka editor teks dalam mod **mudah**. Setiap segmen adalah bebas dan boleh diedit secara individu.

| Ciri | Perilaku |
|------|---------|
| Bold / Italic / Font / Height | Berlaku pada **keseluruhan label** sekaligus |
| Pemformatan setiap aksara | Tidak disokong |
| `Enter` | Mengkomit nilai dan menutup editor |
| Berbilang baris | Tidak disokong |

Lihat [Text Editor — mod mudah](../../interface/text-editor/#simple-mode) untuk rujukan penuh.

## DXF — entiti DIMENSION

Setiap segmen dalam rantai disimpan sebagai entiti `DIMENSION` bebas dalam fail DXF. Mereka tidak dipautkan dalam fail — mereka berkongsi sifat kerana dicipta dari asas yang sama, tetapi setiap satunya boleh diedit secara bebas selepas peletakan.
