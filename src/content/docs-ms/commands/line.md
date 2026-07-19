---
title: Arahan Line — Lukis, Rantai, Potong dan Panjangkan Garis
description: Arahan Line melukis segmen garis lurus individu yang boleh dirantai hujung ke hujung. Garis adalah satu-satunya jenis entiti yang Trim dan Extend beroperasi padanya. Pusingan penuh DXF sebagai entiti LINE.
keywords: [arahan garis CAD, lukis garis lurus CAD, rantai segmen garis, potong garis CAD, panjangkan garis CAD, kunci sudut CAD, entiti DXF LINE, kulmanlab]
group: shapes
order: 1
---

# Line

Arahan `line` melukis segmen garis lurus individu yang disimpan sebagai entiti `LINE` berasingan dalam model DXF. Selepas setiap segmen, arahan kekal aktif dan menggunakan semula titik akhir sebagai titik mula baharu, jadi anda boleh membina laluan yang disambungkan satu segmen pada satu masa. Tidak seperti [Polyline](../polyline/), garis yang dirantai kekal sebagai entiti bebas — setiap satunya boleh dipotong, dipanjangkan, atau dipadam tanpa menjejaskan jirannya.

## Melukis garis

1. Taip `line` dalam terminal atau klik butang bar alat **Line**.
2. **Klik titik mula**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik titik akhir** — segmen diletakkan dan titik akhir menjadi titik mula seterusnya. Kemasukan koordinat juga berfungsi di sini.
4. Terus klik (atau taip) untuk merantai lebih banyak segmen.
5. Tekan **Enter** atau **Escape** untuk berhenti.

```
  ●──────────●──────────●──────────●
 mula    klik ke-2  klik ke-3   Enter untuk selesai
            (automatik menjadi mula seterusnya)
```

Hanya perlu satu segmen? Tekan **Enter** atau **Escape** tepat selepas langkah 3.

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mula atau mana-mana titik seterusnya:

1. Taip nilai X (digit, `.`, atau `-`).
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan titik.

## Penguncian sudut dan kemasukan panjang tepat

Semasa anda menggerakkan kursor selepas meletakkan titik, arahan memerhati paksi snap 45° (0°, 45°, 90°, 135°, …). Sudut **dikunci** apabila:

- kursor sekurang-kurangnya **5 × saiz grip** dari sauh, **dan**
- ia berada dalam **1 saiz grip** jarak tegak lurus dari paksi terdekat.

Apabila dikunci, pratonton snap ke paksi dan anda boleh memasukkan panjang tepat:

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada nilai panjang |
| `-` | Panjang negatif — membalikkan arah sepanjang paksi (aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan titik akhir pada jarak yang ditaip |

Nilai yang terkumpul ditunjukkan secara langsung dalam terminal (cth. `click end point or enter length: 12.5`). Klik semasa dikunci dan klik tersebut diunjurkan ke paksi, jadi titik akhir sentiasa terletak tepat padanya.

Menggerak kursor kembali dekat dengan titik sauh akan melepaskan kunci.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X, atau jarak apabila sudut dikunci |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau panjang yang ditaip, atau selesaikan rantai jika tiada yang ditaip |
| `Escape` | Selesaikan rantai dan keluar |

## Pengeditan grip — meregangkan titik akhir

Garis yang dipilih menunjukkan tiga grip:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Mula** | Titik akhir pertama | Seret untuk mengubah kedudukan — hujung kekal tetap |
| **Tengah** | Pusat garis | Mengaktifkan **Move** untuk keseluruhan garis |
| **Akhir** | Titik akhir kedua | Seret untuk mengubah kedudukan — mula kekal tetap |

Meregangkan satu titik akhir tidak pernah menjejaskan yang lain. Ini berbeza daripada pengeditan grip [Polyline](../polyline/), di mana menggerak bucu membentuk semula keseluruhan laluan.

## Memilih garis

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih garis jika klik berada dalam jarak ujian hit segmen |
| **Seret kanan** (ketat) | Garis dipilih hanya jika kedua-dua titik akhir berada di dalam kotak |
| **Seret kiri** (silang) | Garis dipilih jika mana-mana bahagian segmen menyilang sempadan kotak |

## Arahan edit yang disokong

Garis adalah entiti **satu-satunya** yang [Trim](../trim/) dan [Extend](../extend/) beroperasi padanya. Semua arahan transformasi standard juga terpakai:

| Arahan | Apa yang berlaku pada garis |
|--------|-----------------------------|
| [Move](../move/) | Menterjemahkan kedua-dua titik akhir dengan anjakan yang sama |
| [Copy](../copy/) | Mencipta garis yang sama di kedudukan baru |
| [Rotate](../rotate/) | Memutar kedua-dua titik akhir di sekitar titik asas yang dipilih |
| [Mirror](../mirror/) | Mencerminkan kedua-dua titik akhir merentasi paksi cermin |
| [Scale](../scale/) | Mengskala kedua-dua titik akhir secara seragam dari titik asas |
| [Offset](../offset/) | Mencipta garis selari pada jarak tegak lurus tetap |
| [Trim](../trim/) | Memotong garis pada persimpangan — **garis sahaja** |
| [Extend](../extend/) | Meregangkan titik akhir terdekat untuk mencapai sempadan — **garis sahaja** |
| [Delete](../delete/) | Membuang garis daripada lukisan |

## Sifat

Apabila garis dipilih, panel sifat menunjukkan setiap medan yang dibawa rekod `LINE` DXF:

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
| Start X / Start Y | Koordinat titik akhir pertama |
| End X / End Y | Koordinat titik akhir kedua |

Semua medan boleh diedit terus dalam panel tanpa menjalankan semula arahan.

## Line berbanding Polyline — bila menggunakan yang mana

| | Line | Polyline |
|---|------|---------|
| Bilangan entiti | Satu `LINE` setiap segmen | Satu `LWPOLYLINE` untuk keseluruhan laluan |
| Trim / Extend | Ya — segmen demi segmen | Tidak |
| Bentuk tertutup | Tidak | Ya (bendera tutup) |
| Pengeditan grip | Regangkan titik akhir individu | Gerakkan mana-mana bucu sepanjang laluan |
| Terbaik untuk | Garis pembinaan, segmen tunggal, geometri yang akan dipotong | Kontur, garis luar, bentuk yang dikekalkan |

## DXF — entiti LINE

Garis disimpan sebagai entiti `LINE` dalam fail DXF. Setiap sifat — koordinat mula/akhir, warna, lapisan, linetype, skala linetype, dan ketebalan — pusingan penuh tanpa kehilangan. Apabila anda membuka DXF yang mengandungi entiti `LINE`, ia menjadi objek `Line` yang boleh diedit sepenuhnya dalam editor.

Garis yang dilukis dalam editor juga ditulis sebagai entiti `LINE` semasa disimpan, jadi ia boleh dibaca oleh LibreCAD, FreeCAD, dan mana-mana aplikasi yang serasi DXF.
