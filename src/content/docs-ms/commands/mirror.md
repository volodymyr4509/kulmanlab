---
title: Arahan Mirror — Cerminkan Entiti Merentasi Paksi Dua Titik dalam KulmanLab CAD
description: Arahan Mirror mencerminkan entiti yang dipilih merentasi garis cermin yang ditakrifkan oleh dua klik. Asal sentiasa disimpan — Mirror mencipta salinan yang dicerminkan baharu. Paksi cermin boleh berada pada mana-mana sudut dan snap ke gandaan 45°.
keywords: [arahan cermin CAD, cermin entiti CAD, simetri cermin CAD, balik objek CAD, paksi cermin CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Arahan `mirror` mencipta salinan entiti yang dipilih yang dicerminkan merentasi paksi dua titik. Asal **sentiasa disimpan** — tidak seperti [Move](../move/) atau [Rotate](../rotate/), Mirror tidak pernah mengubah suai entiti sedia ada; ia hanya menambah yang baharu.

## Dua cara untuk memulakan

**Pra-pilih, kemudian cermin** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `mirror` dalam terminal atau klik butang bar alat **Mirror**.
3. **Klik titik pertama** paksi cermin, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik titik kedua** — salinan yang dicerminkan diletakkan dan arahan keluar. Kemasukan koordinat juga berfungsi di sini.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `mirror` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. **Klik titik pertama**, kemudian **klik titik kedua** paksi cermin (kemasukan koordinat tersedia di kedua-dua langkah).

```
  Asal:          Paksi cermin:        Hasil:
                 |
  [entiti A]    →    |    →    [entiti A] + [A dicerminkan]
                 |
```

Pratonton langsung salinan yang dicerminkan mengikuti kursor semasa anda meletakkan titik paksi kedua.

## Paksi cermin

Paksi adalah garis tak terbatas melalui dua titik yang diklik. Ia boleh berada pada mana-mana sudut:

- Gerakkan kursor hampir ke **paksi snap 45°** (0°, 45°, 90°, 135°, …) dan paksi dikunci ke sudut tersebut — berguna untuk pantulan mendatar, menegak, atau pepenjuru yang bersih.
- Klik jauh dari zon snap untuk paksi sudut bebas.

## Kemasukan koordinat

Pada mana-mana langkah titik paksi, taip kedudukan tepat dan bukannya mengklik:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan |
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat yang ditaip |
| `Escape` | Batal dan tetapkan semula |

## Pemilihan semasa arahan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan |

## Apa yang dicerminkan

Setiap jenis entiti disokong. Geometri dicerminkan merentasi paksi secara matematik:

| Entiti | Apa yang berubah |
|--------|-----------------|
| Line | Kedua-dua titik akhir dicerminkan |
| Circle | Pusat dicerminkan; jejari tidak berubah |
| Arc | Pusat dicerminkan; sudut mula dan akhir dikira semula merentasi paksi |
| Ellipse | Pusat dicerminkan; arah paksi major dibalikkan merentasi paksi |
| Polyline / Rectangle | Setiap bucu dicerminkan |
| Text | Titik sauh dicerminkan; rentetan teks **tidak** dibalikkan |
| Spline | Semua bucu kawalan / titik fit dicerminkan |

## Mirror berbanding Copy

| | Mirror | Copy |
|---|--------|------|
| Asal | Sentiasa disimpan | Sentiasa disimpan |
| Kedudukan entiti baharu | Dicerminkan merentasi paksi | Diimbangi oleh vektor anjakan |
| Terbaik untuk | Reka bentuk simetri, ciri dwisisi | Mengulang geometri dalam mana-mana arah |
