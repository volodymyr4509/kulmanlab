---
title: Vector Pins — Lekap Sepanjang Garisan Rujukan Titik Disemat
description: Vector Pins membolehkan anda menyemat titik lekapan dengan menuding kursor padanya selama setengah saat, kemudian menjejaki kursor di sepanjang garisan rujukan mendatar dan menegak bergaris putus yang melalui titik yang disemat — jajarkan geometri baharu dengan titik sedia ada tanpa garisan binaan.
keywords: [vector pins, penjejakan lekapan objek, garisan rujukan, penjejakan penjajaran, penjejakan lekapan CAD, garisan binaan, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** ialah bantuan lukisan yang membolehkan anda menjajarkan geometri baharu dengan titik sedia ada tanpa melukis garisan binaan. Tuding kursor pada titik lekapan selama setengah saat untuk *menyematnya* — pin kemudian mengunjurkan garisan rujukan mendatar dan menegak yang tidak kelihatan, dan kursor melekap padanya setiap kali menghampiri. Ia adalah padanan KulmanLab CAD kepada penjejakan lekapan objek dalam aplikasi CAD desktop.

Ciri ini dikawal oleh togol **Pins** dalam bar kawalan (di sebelah Grid, Snap dan ANGL). Ia **aktif secara lalai**, dan tetapan kekal antara sesi.

## Menyemat titik

1. Mulakan arahan yang meminta titik — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) dan sebagainya.
2. Gerakkan kursor ke atas titik lekapan geometri sedia ada — penanda titik hujung, titik tengah atau pusat.
3. **Tahan kursor pegun selama 500 ms.** Penanda bertukar menjadi **segi empat sama** berisi warna aksen — titik kini disemat.
4. Ulangi untuk menyemat seberapa banyak titik yang diperlukan. Setiap pin terus mengunjurkan garisan rujukannya.

Penyematan juga berfungsi di luar arahan: menuding pada **grip** entiti yang dipilih menyematnya dengan cara yang sama.

## Penjejakan di sepanjang garisan rujukan

Setiap titik yang disemat mengunjurkan dua garisan rujukan tidak kelihatan — satu **mendatar** dan satu **menegak** — melalui koordinat tepatnya. Semasa anda menggerakkan kursor:

- Dalam lingkungan **12 px** dari garisan menegak sesuatu pin, kursor melekap padanya: garisan putus warna aksen dilukis melalui pin merentasi seluruh paparan, dan **penanda X** menunjukkan kedudukan yang dilekap. Koordinat X anda kini *tepat* X pin itu.
- Perkara yang sama terpakai pada garisan mendatar bagi koordinat Y pin.
- Berhampiran satu garisan dari setiap orientasi — walaupun daripada **dua pin berbeza** — kursor melekap pada **persilangannya**, dan kedua-dua garisan putus dipaparkan. Ini meletakkan titik tepat pada (X pin A, Y pin B).

```
                    ┆ (bergaris putus, garisan menegak pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← kursor dilekap pada persilangan:
                    ┆    X daripada pin B, Y daripada pin A
                    ┆
                    ■ pin B
```

Koordinat yang dilekap diambil terus daripada pin, jadi penjajaran adalah tepat — tiada pembundaran atau hanyutan titik terapung.

## Keutamaan lekapan

Lekapan geometri biasa — titik hujung, titik tengah, pusat dan persilangan — **diutamakan** berbanding garisan rujukan pin. Jika kursor lebih dekat dengan lekapan titik daripada garisan rujukan, lekapan titik menang. Penjejakan pin mengisi ruang antara geometri; ia tidak pernah menghalang lekapan pada geometri itu sendiri.

## Menggabungkan dengan kunci sudut

Vector pins berfungsi bersama penjejakan sudut (togol **ANGL** dalam bar kawalan). Apabila arahan telah mengunci kursor pada sinar penjejakan sudut:

- Kursor kekal terikat pada arah yang dikunci.
- Lekapan pin beralih kepada menyasarkan **persilangan sinar yang dikunci dengan garisan rujukan pin** (hanya di hadapan asalan sinar).

Ini menjawab soalan seperti *"di manakah arah 45° dari titik terakhir saya menyilang ketinggian pusat bulatan itu?"* — kunci sudut, dan kursor terkunci pada titik persilangan. Lekapan sinar berfungsi dalam setiap arahan dengan kunci sudut: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader dan ViewportCopy.

## Kitaran hayat pin

Pin dimaksudkan untuk operasi semasa, bukan sebagai penanda kekal. Semua pin dipadamkan apabila:

| Peristiwa | Sebab |
|-----------|-------|
| **Arahan baharu** dilancarkan | Setiap operasi bermula dengan set rujukan yang bersih |
| **Escape** ditekan | Tingkah laku batal-semua yang standard |
| Togol **Pins** dimatikan | Mematikan ciri mengalih keluar keadaannya |
| Bertukar antara **ruang model dan kertas** | Koordinat pin khusus untuk satu ruang |

Dalam satu arahan anda boleh menyemat, melukis, menyemat lagi dan terus bekerja — pin kekal melepasi setiap klik arahan berbilang titik seperti Polyline.

## Aliran kerja tipikal

Melukis garisan yang bermula tepat di bawah pusat bulatan:

1. Taip `line` (atau klik butang Line).
2. Tuding pada **penanda pusat** bulatan selama setengah saat — ia menjadi segi empat sama warna aksen.
3. Gerakkan kursor ke bawah: berhampiran garis menegak bulatan, kursor terkunci pada garisan rujukan bergaris putus.
4. Klik — garisan bermula tepat pada koordinat X bulatan.
5. Teruskan garisan seperti biasa; pin kekal tersedia untuk titik seterusnya.

## Nota

- Tudingan 500 ms berfungsi pada mana-mana penanda lekapan yang boleh dicapai kursor — termasuk titik lekapan yang muncul di tengah arahan.
- Menuding pada titik yang sudah disemat tidak melakukan apa-apa; tiada nyah-semat melalui tudingan. Padamkan pin dengan **Escape** atau dengan mematikan **Pins**.
- Jarak lekapan untuk garisan rujukan ialah 12 piksel skrin yang sama seperti lekapan titik biasa, jadi rasanya konsisten pada mana-mana tahap zum.
- Titik yang disemat dilukis sebagai segi empat sama warna aksen menggantikan penanda lekapan biasanya.
