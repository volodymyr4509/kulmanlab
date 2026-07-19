---
title: Arahan Copy — Duplikasi Entiti ke Kedudukan Baru
description: Arahan Copy mencipta duplikat entiti yang dipilih sambil mengekalkan asal di tempat. Menyokong pra-pemilihan, penguncian sudut, dan input jarak tepat. Salinan diletakkan dan arahan keluar; asal kekal tidak berubah.
keywords: [arahan salin CAD, duplikasi entiti CAD, salin objek CAD, klon geometri CAD, kunci sudut salin, jarak tepat salin, kulmanlab]
group: edit
order: 2
---

# Copy

Arahan `copy` mencipta duplikat entiti yang dipilih dan meletakkannya diimbangi dari titik asas ke destinasi — asal kekal tepat di mana ia berada. Ini adalah satu perbezaan utama dari [Move](../move/): Copy menambah entiti baru ke lukisan; Move memindahkan yang sedia ada.

## Dua cara untuk memulakan

**Pra-pilih, kemudian salin** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `copy` dalam terminal atau klik butang bar alat **Copy**.
3. **Klik titik asas**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik destinasi** — duplikat muncul pada offset asas→destinasi. Kemasukan koordinat juga berfungsi di sini.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `copy` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel entiti individu, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. **Klik titik asas**, kemudian **klik destinasi** (kemasukan koordinat tersedia di kedua-dua langkah).

```
  Sebelum:              Selepas:
  [entiti A]            [entiti A]  ← asal tidak disentuh
  [entiti B]            [entiti B]
                        [salinan A] ← entiti baharu
                        [salinan B]
```

Pratonton hantu salinan mengikuti kursor dari titik asas ke destinasi.

## Kemasukan koordinat

Pada langkah titik asas atau destinasi, taip kedudukan tepat dan bukannya mengklik:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk mengesahkan.

## Penguncian sudut dan jarak tepat

Selepas titik asas ditetapkan, arahan snap ke paksi 45° (0°, 45°, 90°, 135°, …) apabila kursor cukup jauh dan berhampiran paksi. Semasa dikunci, taip jarak dan tekan **Enter** untuk meletakkan salinan tepat pada offset tersebut.

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah pada nilai jarak |
| `-` | Jarak negatif — membalikkan arah sepanjang paksi (aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan salinan pada jarak yang ditaip |

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan dan maju ke fasa titik asas |
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X, atau jarak apabila sudut dikunci |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau gunakan salinan pada jarak yang ditaip |
| `Escape` | Batal dan tetapkan semula |

## Pemilihan semasa arahan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor masuk/keluar dari pemilihan |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan sempadan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan |

## Selepas salinan

**Asal kekal dipilih** — salinan baharu ditambah ke lukisan tetapi pemilihan dikosongkan dan arahan keluar. Untuk bekerja dengan salinan serta-merta, jalankan Copy lagi pada pemilihan, atau mulakan arahan baru.

## Copy berbanding Move

| | Copy | Move |
|---|------|------|
| Asal | Kekal di tempat | Dibuang dari kedudukan asal |
| Bilangan hasil | Bertambah dengan bilangan entiti yang disalin | Tidak berubah |
| Selepas operasi | Asal masih dipilih | Entiti yang dipindah dipilih di kedudukan baru |
| Terbaik untuk | Mengulang geometri, susun atur simetri | Mengubah kedudukan geometri |

## Entiti yang disokong

Copy berfungsi pada setiap jenis entiti. Semua entiti melaksanakan `translate(dx, dy)` secara dalaman jadi tiada yang dikecualikan.
