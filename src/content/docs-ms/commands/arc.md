---
title: Arc — Lukis Lengkok Tiga Titik dengan Bulatan Circumscribed
description: Arahan Arc melukis lengkok bulatan melalui tepat tiga titik yang diklik menggunakan geometri circumcircle. Grip mula dan akhir membolehkan anda menyeret titik akhir lengkok ke sudut dan jejari baru selepas peletakan. Pusingan penuh DXF sebagai entiti ARC.
keywords: [arahan lengkok CAD, lengkok tiga titik CAD, lengkok circumcircle, lukis lengkok CAD, entiti DXF ARC, pengeditan grip lengkok, kulmanlab]
group: shapes
order: 5
---

# Arc

Arahan `Busur` melukis lengkok bulatan melalui tiga titik yang anda klik. Lengkok dikira sebagai circumcircle unik yang melalui ketiga-tiga titik — tidak perlu menentukan pusat atau jejari secara langsung. Lengkok berjalan dari klik pertama ke klik ketiga, melalui yang kedua.

## Melukis lengkok

1. Taip `Busur` dalam terminal atau klik butang bar alat **Arc**.
2. **Klik titik pertama** — satu hujung lengkok. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik kedua** — titik yang mesti dilalui lengkok (mengawal kelengkungan dan arah). Kemasukan koordinat juga berfungsi di sini.
4. **Klik titik ketiga** — hujung lain lengkok. Lengkok diletakkan dan arahan keluar. Kemasukan koordinat juga berfungsi di sini.

```
           ● (klik ke-2 — titik tengah pada kelengkungan)
          / \
         /   \
        ●     ●
     ke-1       ke-3
```

Pratonton garis menghubungkan dua klik pertama semasa anda meletakkan yang ketiga. Dari klik kedua, pratonton lengkok langsung mengikuti kursor.

> **Titik sejajar**: jika ketiga-tiga titik terletak pada garis lurus, lengkok tidak dapat dikira dan tiada entiti diletakkan. Gerakkan titik kedua jauh dari garis dan cuba lagi.

## Cara lain melukis arka

Tiga titik ialah lalai. Pada sesetengah gesaan terminal menunjukkan pilihan dalam kurungan siku, seperti `[Center=false]` — taip huruf pilihan untuk menghidupkannya (`[Center=true]`) dan taip sekali lagi untuk mematikannya. Digabungkan, ia melukis arka dengan enam cara lagi:

| Kaedah | Hidupkan | Langkah terakhir |
|---|---|---|
| Start, Center, End | `C` | titik akhir |
| Start, Center, Angle | `C`, `A` | sudut |
| Start, Center, Length | `C`, `L` | panjang perentas |
| Start, End, Angle | `E` | sudut |
| Start, End, Direction | `E`, `D` | arah tangen |
| Start, End, Radius | `E`, `R` | jejari |

- Pada langkah terakhir setiap kaedah kecuali Start, Center, End, taip nombor dan tekan **Enter** atau **Space**, atau gerakkan kursor dan klik — kursor dibaca sebagai nombor itu (arah untuk sudut atau arah tangen, jarak untuk panjang perentas atau jejari).
- Sudut positif bergerak melawan arah jam dari permulaan, sudut negatif ikut arah jam. Sudut 0° atau pusingan penuh tidak menghasilkan arka dan terminal memberitahu.
- Panjang perentas atau jejari positif mengambil laluan pendek, negatif laluan panjang. Perentas lebih panjang daripada diameter atau jejari kurang separuh perentas ditolak, dan terminal menyatakan had.
- Start, Center, End hanya menggunakan arah titik akhir dari pusat: arka bergerak melawan arah jam dari permulaan sehingga arah itu bertemu bulatan. Arah tangen ialah arah, dalam darjah dari paksi X, yang arka tinggalkan permulaannya.
- Untuk memilih pusat sebelum titik mula, taip `C` pada gesaan yang paling pertama.
- Huruf pilihan mengikut bahasa antara muka; huruf yang ditunjukkan di sini ialah huruf Inggeris.

## Kemasukan koordinat

Pada mana-mana tiga langkah anda boleh menaip kedudukan tepat dan bukannya mengklik:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan titik.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip |
| `C` `E` `A` `L` `D` `R` | Hidupkan atau matikan pilihan: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Buang semua titik yang diletakkan dan keluar |

## Pengeditan grip — melaraskan titik akhir dan jejari

Lengkok yang dipilih mendedahkan tiga grip:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Pusat** | Pusat geometri circumcircle | Menggerakkan keseluruhan lengkok; jejari dan sudut tidak berubah |
| **Mula** | Titik akhir pertama pada lengkok | Seret untuk menggerakkan mula sepanjang circumcircle — mengubah sudut mula dan jejari |
| **Akhir** | Titik akhir terakhir pada lengkok | Seret untuk menggerakkan akhir sepanjang circumcircle — mengubah sudut akhir dan jejari |

Menyeret grip mula atau akhir mengubah kedudukannya ke lokasi seret dan mengira semula sudut dan jejari dari kedudukan baru relatif kepada pusat. Titik akhir bertentangan kekal tetap.

## Memilih lengkok

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih jika klik jatuh berhampiran kelengkungan lengkok (bukan perentas) |
| **Seret kanan** (ketat) | Titik sampel yang diedarkan sepanjang lengkok mesti semua berada di dalam kotak |
| **Seret kiri** (silang) | Mana-mana titik sampel pada lengkok yang jatuh di dalam kotak memilihnya |

## Arahan edit yang disokong

| Arahan | Apa yang berlaku pada lengkok |
|--------|-----------------------------|
| [Move](../move/) | Menterjemahkan pusat; jejari dan sudut tidak berubah |
| [Copy](../copy/) | Mencipta lengkok yang sama di kedudukan baru |
| [Rotate](../rotate/) | Memutar pusat dan menggeser sudut mula/akhir dengan jumlah putaran |
| [Mirror](../mirror/) | Mencerminkan pusat dan membalikkan sudut mula/akhir merentasi paksi cermin |
| [Scale](../scale/) | Mengskala kedudukan pusat dan mendarab jejari dengan faktor skala |
| [Offset](../offset/) | Mencipta lengkok konsentrik pada jejari lebih besar atau lebih kecil, rentang sudut sama |
| [Delete](../delete/) | Membuang lengkok |

## Sifat

**Umum**

| Sifat | Lalai | Maksud |
|-------|-------|--------|
| Color | 256 (ByLayer) | Indeks warna ACI |
| Layer | `0` | Tugasan lapisan |
| Linetype | ByLayer | Corak linetype bernama |
| Linetype Scale | 1 | Faktor skala pada corak linetype |
| Thickness | 0 | Ketebalan ekstrusi |

**Geometri**

| Sifat | Maksud |
|-------|--------|
| Center X / Center Y | Pusat circumcircle |
| Radius | Jejari circumcircle |
| Start Angle | Sudut dalam darjah di mana lengkok bermula (diukur dari paksi X positif) |
| End Angle | Sudut dalam darjah di mana lengkok berakhir |

## Arc berbanding Circle — bila menggunakan yang mana

| | Arc | Circle |
|---|-----|--------|
| Rentang | Separa — klik pertama ke ketiga | Penuh 360° |
| Kaedah input | Tiga titik pada kelengkungan | Pusat + jejari (klik atau taip) |
| Input bertaip | Koordinat X,Y untuk setiap titik | Nilai jejari (pusat juga menerima X,Y) |
| Ubah saiz selepas peletakan | Seret grip mula/akhir | Seret mana-mana grip kardinal |
| Terbaik untuk | Fillet, sudut membulat, laluan melengkung | Lubang penuh, ciri bulat |

## DXF — entiti ARC

Lengkok disimpan sebagai entiti `ARC` dalam fail DXF, menyimpan koordinat pusat, jejari, sudut mula, dan sudut akhir. Semua sifat — termasuk warna, lapisan, linetype, skala linetype, dan ketebalan — pusingan penuh tanpa kehilangan. Mana-mana aplikasi serasi DXF (LibreCAD, FreeCAD, dll.) membaca ini sebagai lengkok standard.
