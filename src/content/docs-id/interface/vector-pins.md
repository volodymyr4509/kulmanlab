---
title: Vector Pins — Snap Sepanjang Garis Referensi Titik Disematkan
description: Vector Pins memungkinkan Anda menyematkan titik snap dengan mengarahkan kursor ke atasnya selama setengah detik, lalu melacak kursor di sepanjang garis referensi horizontal dan vertikal putus-putus yang melewati titik yang disematkan — sejajarkan geometri baru dengan titik yang ada tanpa garis konstruksi.
keywords: [vector pins, pelacakan snap objek, garis referensi, pelacakan perataan, pelacakan snap CAD, garis konstruksi, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** adalah alat bantu menggambar yang memungkinkan Anda menyejajarkan geometri baru dengan titik yang ada tanpa menggambar garis konstruksi. Arahkan kursor ke titik snap selama setengah detik untuk *menyematkannya* — pin kemudian memproyeksikan garis referensi horizontal dan vertikal yang tak terlihat, dan kursor menempel padanya setiap kali mendekat. Ini adalah padanan pelacakan snap objek aplikasi CAD desktop di KulmanLab CAD.

Fitur ini dikendalikan oleh tombol **Pins** di bilah kontrol (di samping Grid, Snap, dan ANGL). Fitur ini **aktif secara default**, dan pengaturannya bertahan antar sesi.

## Menyematkan titik

1. Mulai perintah yang meminta titik — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), dan seterusnya.
2. Gerakkan kursor ke titik snap dari geometri yang ada — penanda titik ujung, titik tengah, atau pusat.
3. **Tahan kursor diam selama 500 ms.** Penanda berubah menjadi **persegi** terisi berwarna aksen — titik kini tersemat.
4. Ulangi untuk menyematkan sebanyak yang Anda butuhkan. Setiap pin terus memproyeksikan garis referensinya.

Penyematan juga bekerja di luar perintah: mengarahkan kursor ke **grip** entitas yang dipilih menyematkannya dengan cara yang sama.

## Pelacakan di sepanjang garis referensi

Setiap titik yang disematkan memproyeksikan dua garis referensi tak terlihat — satu **horizontal** dan satu **vertikal** — melalui koordinat persisnya. Saat Anda menggerakkan kursor:

- Dalam jarak **12 px** dari garis vertikal sebuah pin, kursor menempel padanya: garis putus-putus berwarna aksen digambar melalui pin melintasi seluruh tampilan, dan **penanda X** menunjukkan posisi yang tersnap. Koordinat X Anda kini *persis* X milik pin.
- Hal yang sama berlaku untuk garis horizontal bagi koordinat Y pin.
- Di dekat satu garis dari masing-masing orientasi — bahkan dari **dua pin berbeda** — kursor menempel pada **perpotongannya**, dan kedua garis putus-putus ditampilkan. Ini menempatkan titik persis di (X pin A, Y pin B).

```
                    ┆ (putus-putus, garis vertikal pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← kursor tersnap ke perpotongan:
                    ┆    X dari pin B, Y dari pin A
                    ┆
                    ■ pin B
```

Koordinat yang tersnap diambil langsung dari pin, sehingga perataannya persis — tanpa pembulatan atau penyimpangan floating-point.

## Prioritas snap

Snap geometri biasa — titik ujung, titik tengah, pusat, dan perpotongan — **lebih diutamakan** daripada garis referensi pin. Jika kursor lebih dekat ke snap titik daripada ke garis referensi, snap titik menang. Pelacakan pin mengisi celah di antara geometri; ia tidak pernah menghalangi snap ke geometri itu sendiri.

## Menggabungkan dengan kunci sudut

Vector pins bekerja bersama pelacakan sudut (tombol **ANGL** di bilah kontrol). Ketika sebuah perintah telah mengunci kursor pada sinar pelacakan sudut:

- Kursor tetap terbatas pada arah yang terkunci.
- Snap pin beralih menargetkan **perpotongan sinar terkunci dengan garis referensi pin** (hanya di depan titik asal sinar).

Ini menjawab pertanyaan seperti *"di mana arah 45° dari titik terakhir saya memotong ketinggian pusat lingkaran itu?"* — kunci sudutnya, dan kursor terkunci di titik persilangan. Snap sinar bekerja di setiap perintah dengan kunci sudut: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader, dan ViewportCopy.

## Siklus hidup pin

Pin dimaksudkan untuk operasi yang sedang berjalan, bukan sebagai penanda permanen. Semua pin dihapus ketika:

| Peristiwa | Alasan |
|-----------|--------|
| **Perintah baru** dijalankan | Setiap operasi dimulai dengan kumpulan referensi yang bersih |
| **Escape** ditekan | Perilaku standar batalkan-semuanya |
| Tombol **Pins** dimatikan | Mematikan fitur menghapus statusnya |
| Beralih antara **ruang model dan kertas** | Koordinat pin khusus untuk satu ruang |

Dalam satu perintah Anda dapat menyematkan, menggambar, menyematkan lagi, dan terus melanjutkan — pin bertahan di setiap klik perintah multi-titik seperti Polyline.

## Alur kerja umum

Menggambar garis yang dimulai tepat di bawah pusat lingkaran:

1. Ketik `line` (atau klik tombol Line).
2. Arahkan kursor ke **penanda pusat** lingkaran selama setengah detik — berubah menjadi persegi warna aksen.
3. Gerakkan kursor ke bawah: di dekat garis vertikal lingkaran, kursor terkunci pada garis referensi putus-putus.
4. Klik — garis dimulai persis di koordinat X lingkaran.
5. Lanjutkan garis seperti biasa; pin tetap tersedia untuk titik-titik berikutnya.

## Catatan

- Penantian 500 ms bekerja pada penanda snap mana pun yang dapat dijangkau kursor — termasuk titik snap yang muncul di tengah perintah.
- Mengarahkan kursor ke titik yang sudah disematkan tidak melakukan apa pun; tidak ada pelepasan pin lewat hover. Hapus pin dengan **Escape** atau dengan mematikan **Pins**.
- Jarak snap untuk garis referensi sama dengan 12 piksel layar yang digunakan snap titik biasa, sehingga rasanya konsisten di tingkat zoom mana pun.
- Titik yang disematkan digambar sebagai persegi warna aksen menggantikan penanda snap biasanya.
