---
title: Perintah ViewportRectangle — Membuat Viewport di Layout di KulmanLab CAD
description: Perintah ViewportRectangle membuat viewport di layout kertas dengan memilih dua sudut yang berlawanan. Viewport menampilkan entitas model space pada skala default layout.
keywords: [viewport rectangle, membuat viewport, layout viewport, viewport paper space, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Perintah `ViewportRectangle` membuat viewport baru di layout kertas aktif dengan memilih dua sudut yang berlawanan. Hanya tersedia di layout space.

## Membuat viewport

1. Beralih ke layout kertas menggunakan tab di bagian bawah layar.
2. Ketik `ViewportRectangle` di terminal atau klik tombol toolbar **Viewport Rectangle**.
3. **Klik sudut pertama**, atau ketik `X,Y` dan tekan **Enter** untuk koordinat tepat.
4. **Klik sudut yang berlawanan** — viewport ditempatkan segera. Entri koordinat juga berfungsi di sini.

Viewport baru menampilkan model penuh pada skala default layout. Gunakan roda gulir di dalam viewport untuk memperbesar, atau seret tengah untuk menggeser tampilan model.

## Entri koordinat

Pada langkah sudut mana pun, Anda dapat mengetik koordinat tepat:

1. Ketik nilai X.
2. Tekan `,` — terminal menampilkan `[X], [Y{kursor}]`.
3. Ketik nilai Y.
4. Tekan **Enter** untuk menempatkan titik.

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `0`–`9`, `.`, `-` | Mulai entri koordinat X |
| `,` | Kunci X dan pindah ke entri Y |
| `Enter` | Konfirmasi koordinat yang diketik |
| `Escape` | Batal |

## Mengedit viewport

Setelah menempatkan viewport, klik untuk memilihnya:

- **Seret tepi atau sudut** untuk mengubah ukuran.
- **Seret grip tengah** untuk memindahkannya.
- Gunakan **pemilih skala** di control bar untuk mengatur skala tepat (mis. 1:50). Untuk memasukkan skala yang tidak ada dalam daftar, ketik langsung di bidang input di bagian bawah dropdown — menerima format rasio (`1:200`, `5:1`) atau desimal biasa (`0.005`), kemudian tekan **Enter**.
- Klik kanan viewport dan gunakan **Lock** untuk mencegah perubahan yang tidak disengaja.

## Catatan

- ViewportRectangle hanya tersedia ketika tab layout kertas aktif. Menjalankannya di model space menampilkan pesan error dan keluar.
- Untuk menyalin viewport yang ada, gunakan [ViewportCopy](../viewport-copy/).
