---
title: Arahan Extend — Regangkan Entiti ke Sempadan Terdekat
description: Arahan Extend meregangkan titik akhir terdekat Line, Arc, Ellipse atau Polyline terbuka yang dituding ke persimpangan terdekat dengan entiti lain. Pratonton langsung menunjukkan entiti yang dipanjangkan sebelum anda mengklik.
keywords: [arahan panjang CAD, panjangkan garis CAD, panjangkan lengkok CAD, panjangkan elips CAD, panjangkan polyline CAD, regangkan entiti ke sempadan, pratonton hover panjang, kulmanlab]
group: edit
order: 9
---

# Extend

Arahan `Panjangkan` meregangkan titik akhir terdekat [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) atau Polyline terbuka yang dituding ke persimpangan terdekat yang akan dibentuknya dengan entiti lain dalam lukisan. Tuding berhampiran titik akhir yang ingin dipanjangkan — pratonton menunjukkan entiti yang dipanjangkan — kemudian klik untuk menggunakannya.

Hanya entiti dengan titik akhir sebenar boleh dipanjangkan. [Circle](../circle/) dan Ellipse penuh (360°) sentiasa berbentuk tertutup tanpa titik akhir, jadi tidak boleh dipanjangkan sama sekali — begitu juga Polyline tertutup atau Rectangle. Ellipse separa (lengkok elips) dan Arc mempunyai titik akhir dan dipanjangkan dengan cara yang sama seperti Line.

## Memanjangkan entiti

1. Taip `Panjangkan` dalam terminal atau klik butang bar alat **Extend**.
2. **Tuding berhampiran satu hujung** entiti yang ingin dipanjangkan — pratonton menunjukkannya dilanjutkan ke sempadan terdekat dalam arah tersebut.
3. **Klik** untuk menggunakan pemanjangan.

Arahan kekal aktif selepas setiap pemanjangan, jadi anda boleh terus menuding dan mengklik untuk memanjangkan lebih banyak entiti. Tekan **Enter**, **Space**, atau **Escape** untuk keluar.

```
  Sebelum:                      Selepas:

  ──────           |           ──────────────|
  (garis pendek)   (sempadan)  (dilanjutkan ke sempadan)
```

## Bagaimana titik akhir dipilih

Arahan melihat hujung mana yang lebih hampir dengan kursor:

- **Line dan Polyline terbuka** — kursor lebih hampir titik akhir memanjangkan hujung ke hadapan; kursor lebih hampir titik mula memanjangkan mula ke belakang.
- **Arc dan Ellipse separa** — kursor lebih hampir salah satu hujung sudut menyebabkan lengkok berkembang ke arah itu, mengelilingi pusat dan jejari yang sama (atau bentuk elips yang sama), sehingga mencapai sempadan seterusnya.

Sinaran — atau, untuk Arc dan Ellipse, bulatan atau lengkung asas entiti itu sendiri — dihantar dari hujung yang dipilih, dan **persimpangan terdekat** dengan mana-mana entiti lain (tidak termasuk entiti itu sendiri dan jenis yang diabaikan) menjadi titik akhir baru.

Jika tiada persimpangan ditemui dalam arah tersebut, tiada pratonton muncul dan mengklik tidak membuat apa-apa.

## Pengecualian sempadan

Jenis entiti berikut diabaikan sebagai sempadan — entiti tidak dilanjutkan untuk bertemu dengannya:

- Text / Mtext
- Multileader

Semua jenis lain (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) berfungsi sebagai sempadan yang sah.

Jika segmen pertama atau terakhir Polyline itu sendiri adalah segmen lengkok (dilukis dengan suis Arc), memanjangkannya menyebabkan lengkok itu berkembang sepanjang bulatannya sendiri — sama seperti memanjangkan Arc yang berdiri sendiri — dan bukannya dilayan sebagai segmen lurus.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Enter` / `Space` | Keluar dari mod extend |
| `Escape` | Keluar dari mod extend |

## Entiti yang disokong

| Entiti | Boleh dipanjangkan? |
|--------|---------------------|
| Line | Ya |
| Arc | Ya |
| Ellipse | Ya — hanya jika ia sudah menjadi lengkok separa; elips penuh tiada titik akhir |
| Circle | Tidak — sentiasa bentuk tertutup tanpa titik akhir |
| Polyline (terbuka) | Ya |
| Polyline (tertutup) / Rectangle | Tidak — sentiasa bentuk tertutup tanpa titik akhir |
| Text, Spline, Dimension, Leader | Tidak |

## Extend berbanding Trim

| | Extend | Trim |
|---|--------|------|
| Fungsinya | Meregangkan titik akhir entiti ke sempadan | Membuang segmen entiti |
| Pencetus | Tuding berhampiran titik akhir untuk diregangkan | Tuding ke segmen yang ingin dipotong |
| Hasil | Titik akhir bergerak ke luar | Entiti berpecah atau memendek |
| Entiti yang disokong | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
