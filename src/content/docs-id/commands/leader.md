---
title: Leader — Anotasi Multileader dengan Kepala Panah dan Teks
description: "Perintah Leader menggambar anotasi multileader empat fase: ujung kepala panah, siku dogleg, posisi teks, dan label yang diketik. Arah teks menyesuaikan secara otomatis berdasarkan posisi dogleg. Hanya impor dalam DXF — leader tidak ditulis saat disimpan."
keywords: [perintah leader CAD, anotasi multileader, leader CAD, anotasi label panah, dogleg leader, arah teks CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Perintah `leader` menggambar anotasi multileader dalam empat langkah: kepala panah yang menyentuh fitur, garis leader yang membelok pada dogleg, jangkar teks, dan label yang diketik. Dari semua perintah anotasi, Leader adalah satu-satunya yang menyertakan fase input teks interaktif dengan pratinjau kursor berkedip.

## Anatomi multileader

```
  ◄── ujung kepala panah  (langkah 2 — menyentuh fitur)
      \
       \  garis leader
        \
         ●──── dogleg (langkah 3) ──── jangkar teks (langkah 4)
                                    Teks label  (langkah 5)
```

- **Ujung kepala panah** — ujung runcing yang ditempatkan pada fitur yang dianotasi.
- **Dogleg** — siku di mana garis leader membelok ke arah teks.
- **Jangkar teks** — posisi label. Teks disejajarkan ke kiri atau kanan secara otomatis.

## Menggambar leader

1. Ketik `leader` di terminal atau klik tombol toolbar **Leader**.
2. **Klik ujung kepala panah**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
3. **Klik dogleg** — tikungan di leader. Sudut terkunci ke kelipatan 45°; ketik panjang dan tekan **Enter** untuk penempatan tepat. Atau ketik `X,Y` untuk memasukkan koordinat absolut.
4. **Klik posisi teks** — tempat label dijangkarkan. Opsi yang sama berlaku: klik, kunci sudut + panjang, atau `X,Y`.
5. **Ketik teks label** — pratinjau kanvas diperbarui secara langsung dengan kursor berkedip. Tekan **Enter** untuk menempatkan.

## Entri koordinat (semua fase pengambilan titik)

Pada langkah pengambilan titik mana pun (ujung, dogleg, posisi teks), Anda dapat mengetik koordinat tepat alih-alih mengklik:

1. Ketik nilai X (digit, `.`, atau `-`).
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]` mengonfirmasi X terkunci.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan titik.

## Penguncian sudut (langkah 3 dan 4)

Setelah setiap titik yang ditempatkan, perintah snap ke sumbu 45° ketika kursor cukup jauh. Saat terkunci:
- Pratinjau snap ke sumbu.
- Ketik panjang dan tekan **Enter** untuk menempatkan titik berikutnya pada jarak tepat tersebut.

Penguncian sudut dan entri koordinat bersifat saling eksklusif — setelah Anda mengetik digit tanpa `,` sebelumnya, perintah menginterpretasikannya sebagai jarak (kunci sudut harus aktif). Untuk memasukkan koordinat absolut, mulai dengan angka X diikuti koma.

## Pengeditan label teks

Saat mengetik label di langkah 5, Anda dapat menavigasi dan mengedit teks sebelum menempatkan:

| Tombol | Aksi |
|-----|--------|
| Karakter yang dapat dicetak mana saja | Sisipkan pada posisi kursor |
| `←` / `→` | Gerakkan kursor ke kiri atau kanan |
| `Backspace` | Hapus karakter di sebelah kiri kursor |
| `Delete` | Hapus karakter di sebelah kanan kursor |
| `Enter` | Tempatkan leader |

## Arah teks otomatis

Penyelarasan teks menyesuaikan dengan posisi kursor relatif terhadap dogleg:

| Posisi kursor | Arah teks |
|-----------------|---------------|
| Di sebelah **kanan** dogleg | Kiri-ke-kanan dari jangkar teks |
| Di sebelah **kiri** dogleg | Kanan-ke-kiri (dijangkarkan di sisi kanan) |

Tidak perlu penyesuaian manual — gerakkan kursor ke sisi di mana Anda ingin label dan itu akan disejajarkan dengan benar.

## Referensi keyboard

**Fase titik (ujung, dogleg, posisi teks)**

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai mengetik koordinat X (kemudian `,` untuk mengunci X dan memasukkan Y) |
| `,` | Konfirmasi X dan pindah ke entri Y |
| `0`–`9`, `.`, `-` | Membangun jarak saat sudut terkunci |
| `Backspace` | Hapus karakter terakhir yang diketik |
| `Enter` | Konfirmasi koordinat atau jarak yang diketik |

**Fase input teks**

| Tombol | Aksi |
|-----|--------|
| Karakter yang dapat dicetak | Sisipkan pada kursor |
| `←` / `→` | Gerakkan kursor |
| `Backspace` | Hapus ke kiri |
| `Delete` | Hapus ke kanan |
| `Enter` | Tempatkan leader |

| Tombol | Aksi |
|-----|--------|
| `Escape` | Batal dan reset ke langkah 2 |

## Mengedit leader yang ada

**Klik dua kali** multileader yang ditempatkan untuk membuka kembali editor teks dalam mode **kaya**. Dalam mode kaya Anda dapat menerapkan tebal, miring, dan penggantian font atau tinggi per karakter, serta menyisipkan jeda baris dengan `Enter`. Tekan **Escape** untuk mengonfirmasi dan menutup.

Lihat [Text Editor — mode kaya](../../interface/text-editor/#rich-mode) untuk referensi lengkap.

## Menambah dan menghapus lengan

- Untuk menambahkan lengan kepala panah tambahan ke leader yang ada: [Leader+](../leader-add/)
- Untuk menghapus lengan dari leader yang memiliki dua atau lebih: [Leader−](../leader-remove/)

## DXF — hanya impor

**Leader hanya untuk impor.** Entitas `MLEADER` dari file DXF dibaca dan ditampilkan dengan benar, tetapi leader yang digambar di editor **tidak ditulis** saat menyimpan file DXF. Gunakan leader untuk anotasi visual; hindari mengandalkannya untuk alur kerja round-trip.
