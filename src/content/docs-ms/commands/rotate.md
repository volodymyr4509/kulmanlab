---
title: Arahan Rotate — Putar Entiti di Sekitar Titik Asas dalam KulmanLab CAD
description: Arahan Rotate memutar entiti yang dipilih di sekitar titik asas yang dipilih. Sudut boleh ditaip dengan tepat atau ditetapkan dengan mengklik — arah kursor dari titik asas ke klik menentukan sudut. Sudut positif adalah lawan arah jam dalam koordinat DXF.
keywords: [arahan putar CAD, putar entiti CAD, putar objek sudut, putaran lawan arah jam CAD, sudut bertaip putar, kulmanlab]
group: edit
order: 3
---

# Rotate

Arahan `rotate` memutar entiti yang dipilih di sekitar titik asas. Anda menentukan sudut putaran sama ada dengan menaip nombor dalam darjah atau dengan mengklik — sudut dikira dari arah antara titik asas dan kedudukan klik.

## Dua cara untuk memulakan

**Pra-pilih, kemudian putar** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `rotate` dalam terminal atau klik butang bar alat **Rotate**.
3. **Klik titik asas** — pusat putaran. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Taip sudut dan tekan Enter**, atau **klik** untuk menetapkan sudut dari arah kursor.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `rotate` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. **Klik titik asas** (kemasukan koordinat tersedia), kemudian tetapkan sudut.

```
  Sebelum:           Selepas (putaran 90° di sekitar ●):
                        ╔══╗
  ●  [entiti]    →   ● ║    ║
                        ╚══╝
```

Pratonton hantu langsung entiti yang diputar mengikuti sudut kursor selepas titik asas ditetapkan.

## Menetapkan sudut

**Sudut bertaip** — taip nombor (dalam darjah) pada bila-bila masa selepas titik asas diletakkan. Pratonton snap ke sudut yang ditaip semasa anda terus melaraskan sebelum menekan Enter.

**Sudut klik** — jika tiada nilai yang ditaip, mengklik menetapkan sudut bersamaan `atan2(cursorY − baseY, cursorX − baseX)` — arah dari titik asas ke klik, dalam darjah.

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai sudut |
| `-` | Sudut negatif (aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Gunakan putaran pada sudut yang ditaip |

## Arah sudut

Sudut mengikuti **konvensyen DXF**:

- Nilai **positif** memutar **lawan arah jam** dalam koordinat lukisan (Y-atas).
- Pada skrin, di mana paksi Y disongsangkan (Y-bawah), sudut positif kelihatan **searah jam**.

Nilai biasa: `90` = suku pusingan, `180` = separuh pusingan, `-90` = suku pusingan bertentangan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan |
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X (fasa titik asas), atau nilai sudut (fasa sudut) |
| `,` | Kunci X dan beralih ke kemasukan Y (fasa titik asas) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau gunakan putaran |
| `Escape` | Batal dan tetapkan semula |

## Pemilihan semasa arahan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan |

## Entiti yang disokong

Rotate berfungsi pada setiap jenis entiti. Geometri setiap entiti diputar di sekitar titik asas — contohnya, Circle menggerakkan pusatnya sementara jejari kekal sama; Arc menggerakkan pusatnya dan menggeser sudut mula dan akhirnya dengan jumlah putaran; entiti Text menggerakkan titik sauhnya dan menambah sudut ke sifat Darjah Putarannya.
