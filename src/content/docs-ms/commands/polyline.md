---
title: Polyline — Lukis Laluan Berbilang Segmen sebagai Entiti Tunggal
description: Arahan Polyline melukis sebarang bilangan segmen yang disambungkan dan disimpan sebagai satu entiti LWPOLYLINE. Grip bucu dan titik tengah segmen membolehkan anda membentuk semula mana-mana bahagian laluan selepas penciptaan. Menyokong offset; tidak menyokong trim atau extend.
keywords: [arahan poliline CAD, lukis poliline CAD, laluan berbilang segmen CAD, DXF LWPOLYLINE, bentuk semula poliline, grip bucu CAD, offset poliline, kulmanlab]
group: shapes
order: 2
---

# Polyline

Arahan `Polyline` melukis laluan bersambung sebarang bilangan segmen lurus atau lengkok, semua disimpan sebagai satu entiti `LWPOLYLINE`. Kerana keseluruhan laluan adalah satu objek, memilihnya memilih setiap segmen sekaligus — gerakkan, putar, atau skala keseluruhan bentuk dalam satu operasi. Ini adalah perbezaan utama dari [Lines](../line/) yang dirantai, di mana setiap segmen adalah entiti bebas.

Poliline juga boleh **ditutup**: arahan [Rectangle](../rectangle/) menggunakan entiti `LWPOLYLINE` yang sama dengan bendera tutup ditetapkan.

## Melukis poliline

1. Taip `Polyline` dalam terminal atau klik butang bar alat **Polyline**.
2. **Klik titik pertama**, atau taip `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik setiap titik seterusnya** — setiap klik menambah segmen. Kemasukan koordinat berfungsi di setiap langkah.
4. Tekan **Enter** atau **Space** untuk selesai (memerlukan sekurang-kurangnya 2 titik diletakkan).

```
  ●──────●
  ke-1   ke-2
          \
           \  segmen ke-3 (sedang berjalan — kursor di sini)
            ●  ← klik untuk tambah, Enter/Space untuk selesai
```

Menekan **Escape** pada bila-bila masa membuang semua titik yang diletakkan dan keluar dari arahan.

## Melukis segmen lengkok

Tekan **A** pada bila-bila masa selepas bucu pertama untuk togol mod Arc — corak pilihan sebaris yang sama yang digunakan oleh pilihan Copy Rotate. Gesaan menunjukkan keadaan semasa sebagai `[Arc=true]` / `[Arc=false]`; menekan **A** sekali lagi menukarnya semula, jadi segmen lurus dan lengkok boleh dicampur dengan bebas dalam satu poliline.

Apabila mod Arc dihidupkan, setiap segmen baharu ialah lengkok kesinambungan tangen — ia bermula secara tangen kepada apa yang datang sejurus sebelumnya (arah segmen garis sebelumnya, atau tangen hujung lengkok sebelumnya); segmen pertama sekali secara lalai menghala ke timur, kerana tiada apa untuk ditangeninya.

## Kemasukan koordinat

Daripada mengklik, taip kedudukan tepat untuk mana-mana bucu:

1. Taip nilai X.
2. Tekan `,` — terminal menunjukkan `[X], [Y{cursor}]`.
3. Taip nilai Y.
4. Tekan **Enter** untuk meletakkan bucu.

## Penguncian sudut dan panjang segmen tepat

Logik snap 45° yang sama seperti arahan [Line](../line/#angle-locking-and-exact-length-input) terpakai antara mana-mana dua titik berturutan. Apabila dikunci ke paksi:

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.` | Tambah digit pada panjang segmen |
| `-` | Panjang negatif — membalikkan arah sepanjang paksi (aksara pertama sahaja) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Letakkan titik seterusnya pada jarak yang ditaip |

Panjang terkumpul semasa muncul dalam gesaan terminal secara masa nyata. Mengklik semasa dikunci diunjurkan ke paksi supaya bucu baru jatuh tepat padanya.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `0`–`9`, `.`, `-` | Mula kemasukan koordinat X, atau panjang segmen apabila sudut dikunci |
| `,` | Kunci X dan beralih ke kemasukan Y |
| `A` | Togol mod Arc untuk segmen seterusnya (selepas bucu pertama, tanpa kemasukan sedang berjalan) |
| `Backspace` | Padam aksara terakhir yang ditaip |
| `Enter` | Sahkan koordinat atau panjang yang ditaip, atau selesaikan poliline jika tiada yang ditaip dan ≥ 2 titik wujud |
| `Space` | Selesaikan poliline (sama seperti Enter apabila tiada input sedang berjalan) |
| `Escape` | Buang semua titik dan keluar |

## Pengeditan grip — bucu dan titik tengah segmen

Poliline yang dipilih menunjukkan dua jenis grip:

| Grip | Kedudukan | Fungsinya |
|------|-----------|-----------|
| **Bucu** | Di setiap titik yang diletakkan | Seret untuk mengubah kedudukan bucu itu; semua segmen yang disambungkan meregang untuk mengikuti |
| **Titik tengah segmen** | Pusat setiap segmen | Seret untuk menterjemahkan **kedua-dua** titik akhir segmen itu bersama-sama, mengekalkan panjang dan sudut segmen |

Grip titik tengah segmen adalah unik untuk poliline — ia membolehkan anda menggeser segmen individu ke sisi tanpa mengubah panjangnya. Pada [Line](../line/), grip titik tengah sebaliknya mengaktifkan arahan Move untuk keseluruhan entiti.

Tiada grip tunggal "gerakkan keseluruhan poliline". Untuk menggerakkan keseluruhan laluan gunakan arahan [Move](../move/).

## Memilih poliline

| Kaedah | Tingkah laku |
|--------|-------------|
| **Klik** | Memilih poliline jika klik jatuh dalam jarak ujian hit mana-mana segmen |
| **Seret kanan** (ketat) | Semua bucu mesti berada di dalam kotak |
| **Seret kiri** (silang) | Mana-mana segmen yang menyilang sempadan kotak memilih keseluruhan poliline |

Kerana poliline adalah satu entiti, pemilihan silang yang menyentuh mana-mana segmen memilih semua segmen.

## Arahan edit yang disokong

Poliline menyokong setiap transformasi umum, ditambah offset, trim, extend, fillet, dan chamfer (untuk chamfer hanya segmen lurus dikira):

| Arahan | Apa yang berlaku pada poliline |
|--------|---------------------------------|
| [Move](../move/) | Menterjemahkan semua bucu dengan anjakan yang sama |
| [Copy](../copy/) | Mencipta poliline yang sama di kedudukan baru |
| [Rotate](../rotate/) | Memutar semua bucu di sekitar titik asas yang dipilih |
| [Mirror](../mirror/) | Mencerminkan semua bucu merentasi paksi cermin |
| [Scale](../scale/) | Mengskala semua bucu secara seragam dari titik asas |
| [Offset](../offset/) | Mencipta poliline selari pada jarak tegak lurus tetap |
| [Trim](../trim/) | Membuang bahagian antara dua persilangan, sama ada segmen lurus atau lengkok |
| [Extend](../extend/) | Memanjangkan segmen pertama atau terakhir ke sempadan seterusnya |
| [Fillet](../fillet/) | Membundarkan sudut antara dua segmen **bersebelahan**, lurus atau lengkok, dengan lengkok tangen yang dimasukkan ke poliline sebagai segmen bulge baharu |
| [Chamfer](../chamfer/) | Memberkas sudut antara dua segmen lurus bersebelahan |
| [Explode](../explode/) | Memecahkan poliline kepada entiti garis dan lengkok berasingan, satu bagi setiap segmen |
| [Delete](../delete/) | Membuang poliline daripada lukisan |

Melakukan fillet pada segmen poliline terhadap sesuatu selain segmen jirannya sendiri tidak lagi kekal sebagai edit ringkas di tempatnya — lihat [Fillet](../fillet/) untuk hasilnya (penggabungan menjadi satu poliline baharu, disatukan oleh lengkok fillet).

## Sifat

Apabila poliline dipilih, panel sifat menunjukkan:

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
| Closed | Sama ada bucu terakhir disambungkan kembali ke yang pertama |
| Vertex Count | Jumlah bilangan bucu |
| Vertices | Senarai koordinat semua bucu |

## Polyline berbanding Line — bila menggunakan yang mana

| | Polyline | Line |
|---|---------|------|
| Bilangan entiti | Satu `LWPOLYLINE` untuk keseluruhan laluan | Satu `LINE` setiap segmen |
| Bentuk tertutup | Ya (bendera tutup) | Tidak |
| Segmen lengkok | Ya, setiap segmen melalui suis `Arc` | Tidak — segmen melengkung memerlukan entiti [Arc](../arc/) berasingan |
| Trim / Extend | Ya | Ya — segmen demi segmen |
| Grip titik tengah segmen | Menterjemahkan keseluruhan segmen | Mengaktifkan Move untuk entiti |
| Terbaik untuk | Garis luar, kontur, bentuk yang dikekalkan | Garis pembinaan, geometri yang akan dipotong |

## DXF — entiti LWPOLYLINE

Poliline disimpan sebagai entiti `LWPOLYLINE` dalam fail DXF. Semua sifat — koordinat bucu, bendera tutup, warna, lapisan, linetype, skala linetype, dan ketebalan — pusingan penuh tanpa kehilangan. Segi empat tepat yang dilukis dengan arahan [Rectangle](../rectangle/) juga disimpan sebagai `LWPOLYLINE` (tertutup, empat bucu) dan tidak dapat dibezakan pada peringkat DXF.

Entiti `LWPOLYLINE` dari mana-mana aplikasi serasi DXF (LibreCAD, FreeCAD, dll.) dibaca semula sebagai poliline yang boleh diedit sepenuhnya dalam editor.
