---
title: Arahan Array Grid — Mengulang Entiti dalam Baris dan Lajur
description: Arahan Array Grid mencipta grid segi empat tepat salinan daripada entiti yang dipilih — taip bilangan baris, lajur, dan jarak antara keduanya terus dalam terminal, tanpa perlu klik sebarang titik.
keywords: [arahan array CAD, arraygrid, array segi empat tepat CAD, corak grid CAD, mengulang entiti CAD, salin array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Arahan `ArrayGrid` mencipta grid segi empat tepat salinan daripada entiti yang dipilih — masukkan bilangan baris, bilangan lajur, dan jarak antara keduanya, semuanya ditaip dalam terminal. Pemilihan asal menduduki sel baris 0, lajur 0; setiap sel lain adalah salinan yang dianjakkan.

## Dua cara untuk memulakan

**Pra-pilih, kemudian array** — pilih entiti dahulu, kemudian aktifkan:

1. Pilih satu atau lebih entiti pada kanvas.
2. Taip `arraygrid` dalam terminal (`arr` sahaja sudah memadai — tidak jelas) atau klik butang bar alat **Array Grid**.
3. Taip bilangan **baris** dan tekan **Enter**.
4. Taip bilangan **lajur** dan tekan **Enter**.
5. Taip **jarak antara baris** dan tekan **Enter**.
6. Taip **jarak antara lajur** dan tekan **Enter** — grid dicipta serta-merta.

**Aktifkan, kemudian pilih** — mulakan arahan tanpa apa-apa yang dipilih:

1. Taip `arraygrid` atau klik butang bar alat.
2. **Pilih objek** — klik untuk togel entiti individu, atau seret untuk memilih mengikut kawasan.
3. Tekan **Enter** atau **Space** untuk mengesahkan pemilihan.
4. Teruskan dengan baris → lajur → jarak baris → jarak lajur seperti di atas.

```
  2 baris x 3 lajur:

  [B] [B] [B]   <- baris 1 (salinan yang dianjakkan)
  [A] [A] [A]   <- baris 0: pemilihan asal, salinan ke kanan
```

> Terminal hanya memerlukan huruf yang mencukupi untuk menjadi jelas — menaip `arr` dan menekan **Enter** mengaktifkan Array Grid secara terus, kerana tiada nama arahan lain bermula dengan tiga huruf tersebut (Arc, Area, Align, dan Angle semuanya berbeza lebih awal).

## Baris, lajur, dan jarak

| Gesaan | Menerima | Nota |
|--------|----------|------|
| Baris | Nombor bulat positif (1, 2, 3…) | Digit sahaja — tiada titik perpuluhan atau tanda |
| Lajur | Nombor bulat positif (1, 2, 3…) | Digit sahaja — tiada titik perpuluhan atau tanda |
| Jarak baris | Perpuluhan bertanda (cth. `10`, `-5.5`) | Jarak antara baris; negatif membalikkan arah |
| Jarak lajur | Perpuluhan bertanda (cth. `10`, `-5.5`) | Jarak antara lajur; negatif membalikkan arah |

Dengan 1 baris dan 1 lajur, tiada salinan dicipta — arahan keluar tanpa mengubah lukisan.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Sahkan pemilihan dan maju ke gesaan baris |
| `0`–`9` | Masukkan digit untuk baris atau lajur |
| `0`–`9`, `.`, `-` | Masukkan digit untuk jarak baris/lajur (`-` hanya sebagai aksara pertama) |
| `Backspace` | Padam aksara terakhir yang ditaip bagi gesaan semasa |
| `Enter` | Sahkan gesaan semasa dan maju ke seterusnya |
| `Escape` | Kosongkan nilai baris/lajur/jarak yang ditaip dan kembali ke fasa pemilihan |

## Pemilihan semasa arahan

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Togel entiti di bawah kursor masuk/keluar dari pemilihan |
| **Seret kanan** (ketat) | Menambah entiti sepenuhnya di dalam kotak |
| **Seret kiri** (silang) | Menambah entiti yang bersilang dengan sempadan kotak |
| **Enter** / **Space** | Mengesahkan pemilihan dan maju ke gesaan baris |

## Selepas array

Salinan baharu ditambah ke lukisan dan arahan keluar — pemilihan asal dikosongkan. Jalankan **Array Grid** sekali lagi, atau mulakan arahan baru.

## Array Grid berbanding Copy

| | Array Grid | Copy |
|---|-----------|------|
| Pemilihan titik | Tiada — baris, lajur, dan jarak ditaip | Titik asas dan destinasi diklik (atau ditaip) |
| Salinan dicipta | Baris × Lajur − 1 | Tepat 1 setiap operasi salin |
| Susun atur | Grid segi empat tepat teratur | Di mana-mana, pada sebarang offset |
| Terbaik untuk | Mengulang satu unit dalam corak teratur (lubang, jubin, alat pengikat) | Satu duplikat tunggal pada kedudukan sembarangan |

## Entiti yang disokong

Array Grid berfungsi pada setiap jenis entiti. Semua entiti melaksanakan `translate(dx, dy)` secara dalaman — operasi yang sama digunakan oleh [Copy](../copy/) dan [Move](../move/) — jadi tiada yang dikecualikan.
