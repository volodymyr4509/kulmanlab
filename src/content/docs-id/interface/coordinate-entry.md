---
title: "Entri koordinat — ketik titik pasti, relatif, dan polar"
description: "Di mana pun perintah meminta titik, ketik alih-alih mengklik: X,Y untuk posisi pasti, @X,Y untuk mengukur dari titik terakhir, dan jarak<sudut untuk titik polar. Tombol Rel membuat setiap titik yang diketik dimulai relatif."
keywords: ["entri koordinat CAD", "koordinat relatif CAD", "koordinat polar CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Entri koordinat

Di mana pun perintah meminta titik — awal [Line](../../commands/line/), sudut [Rectangle](../../commands/rectangle/), titik dasar [Move](../../commands/move/), atau grip yang sedang Anda seret — Anda bisa mengetiknya alih-alih mengklik. Mulai ketik angka dan terminal menampilkan yang Anda ketik; tekan **Enter** atau **Space** untuk meletakkan titik.

## Empat cara menulis titik

| Anda ketik | Titiknya |
|---|---|
| `100,50` | Di X 100, Y 50 |
| `@100,50` | 100 di X dan 50 di Y dari titik terakhir |
| `100<45` | 100 dari titik asal, pada 45° |
| `@100<45` | 100 dari titik terakhir, pada 45° |

Sudut dalam derajat, berlawanan arah jarum jam dari sumbu X, jadi `@50<90` adalah 50 lurus ke atas dan `@50<180` adalah 50 ke kiri. Kedua nilai boleh negatif.

## Titik terakhir

`@` mengukur dari titik terakhir yang diklik atau diketik di perintah apa pun — klik terakhir perintah sebelumnya dihitung, begitu pula grip yang baru Anda seret. Jika belum ada titik terakhir, `@100,50` dibaca sebagai `100,50`. Titik terakhir dilupakan saat Anda berpindah antara model space dan layout, dan saat gambar dibuka.

## Rel: relatif secara bawaan

Tombol **Rel** di bilah kontrol membuat setiap titik yang diketik dimulai relatif: begitu Anda mengetik angka pertama, `@` masuk di depannya, sehingga `100,50` menjadi `@100,50`. Tekan **Backspace** di atas `@` untuk menjadikan titik itu absolut. Jika belum ada titik terakhir, `@` tidak ditambahkan. Rel mati secara bawaan dan diingat bersama tombol bilah kontrol lainnya.

## Tombol saat mengetik

| Tombol | Efek |
|---|---|
| `0`–`9`, `.`, `-` | Ketik angkanya; `-` hanya di awal |
| `@` | Jadikan titik relatif, di awal X |
| `,` atau **Space** | Akhiri X dan lanjut ke Y |
| `<` | Akhiri X sebagai jarak dan lanjut ke sudutnya |
| **Enter** atau **Space** | Letakkan titik setelah Y berisi nilai |
| **←** **→** **Home** **End** | Pindahkan kursor di dalam nilai yang diketik |
| **Backspace** | Hapus sebelum kursor; di awal Y yang kosong, kembali ke X |

Titik yang tidak terbaca sebagai angka tetap di terminal untuk Anda perbaiki. Setiap titik yang diketik meninggalkan baris di riwayat terminal persis seperti diketik — `Diketik @100<45` — sebelum baris perintah yang menyebut di mana titik itu jatuh.

## Titik yang diketik dan pelacakan sudut

Saat kursor terkunci pada sinar pelacakan sudut, mengetik angka memberi jarak di sepanjang sinar itu, bukan X. Mengetik `@` lebih dulu memulai titik lengkap, jadi `@100,50` tetap berfungsi pada sinar yang terkunci.

---

*Terkait: [Pelacakan jarak](../distance-tracking/) untuk mengetik panjang di sepanjang arah terkunci, dan [Vector Pins](../vector-pins/) untuk mengukur dari titik yang dipin.*
