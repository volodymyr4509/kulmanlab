---
title: Arahan Scale — Ubah Saiz Entiti Secara Seragam di Sekitar Titik Asas dalam KulmanLab CAD
description: Arahan Scale mengubah saiz entiti yang dipilih secara seragam dengan faktor bertaip di sekitar titik asas tetap. Faktor sentiasa dimasukkan melalui papan kekunci — tiada klik-untuk-tetapkan-skala. Faktor lebih besar dari 1 membesarkan; kurang dari 1 mengecilkan. Setiap jenis entiti disokong.
keywords: [arahan skala CAD, ubah saiz entiti CAD, skala objek CAD, skala seragam CAD, faktor skala CAD, besarkan kecilkan CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Arahan `scale` mengubah saiz entiti yang dipilih secara seragam di sekitar titik asas. Semua jarak dari titik asas didarab dengan faktor skala — faktor `2` menggandakan semua dimensi, `0.5` mengecilakannya separuh. Faktor sentiasa dimasukkan dengan menaip; tiada klik-untuk-tetapkan-skala.

## Dua cara untuk memulakan

**Pra-pilih, kemudian skala** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `scale` dalam terminal atau klik butang bar alat **Scale**.
3. **Klik titik asas** — titik tetap yang tidak bergerak semasa penskalaan. Atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Taip faktor skala** dan tekan **Enter**.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `scale` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. **Klik titik asas** (kemasukan koordinat tersedia), kemudian taip faktor.

```
  Asas ●                Asas ●
        [entiti]   →          [entiti lebih besar]
  faktor = 2 → jarak dari ● digandakan
```

## Menaip faktor skala

Selepas titik asas diletakkan, terminal menunjukkan `enter scale factor:` dan menunggu input papan kekunci:

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada faktor |
| `-` | Faktor negatif (aksara pertama sahaja — membalikkan kemudian skala) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Gunakan skala pada faktor yang ditaip |

Faktor mestilah bukan sifar. Nilai biasa:

| Faktor | Kesan |
|--------|-------|
| `2` | Menggandakan semua dimensi |
| `0.5` | Mengecilakannya separuh |
| `1.5` | Meningkat 50% |
| `-1` | Mencerminkan merentasi titik asas (bersamaan putaran 180°) |

Tiada pratonton langsung semasa menaip — hasil yang diskala hanya muncul selepas menekan **Enter**.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan |
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X (fasa titik asas), atau faktor skala (fasa faktor) |
| `,` | Kunci X dan beralih ke kemasukan Y (fasa titik asas) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau gunakan skala |
| `Escape` | Batal dan tetapkan semula |

## Pemilihan semasa arahan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan |

## Apa yang diskala

Semua jenis entiti disokong. Setiap entiti mengskala geometrinya relatif kepada titik asas:

| Entiti | Apa yang berubah |
|--------|-----------------|
| Line | Kedua-dua titik akhir diskala jauh dari titik asas |
| Circle | Pusat diskala dari titik asas; jejari didarab dengan faktor |
| Arc | Pusat diskala; jejari didarab dengan faktor; sudut tidak berubah |
| Ellipse | Pusat diskala; kedua-dua panjang semi-paksi didarab dengan faktor |
| Polyline / Rectangle | Setiap bucu diskala dari titik asas |
| Text | Titik sauh diskala; ketinggian didarab dengan faktor |
| Spline | Semua bucu kawalan / titik fit diskala |
