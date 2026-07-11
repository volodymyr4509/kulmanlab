---
title: Perintah Pan — Navigasi Viewport dengan Klik-dan-Seret di KulmanLab CAD
description: Perintah Pan memasuki mode seret-untuk-gulir yang persisten. Klik dan seret di mana saja pada kanvas untuk menggeser tampilan tanpa mengubah tingkat zoom. Seret klik tengah berfungsi kapan saja tanpa mengaktifkan Pan.
keywords: [CAD pan viewport, perintah pan, seret untuk navigasi, gulir kanvas CAD, navigasi viewport, kulmanlab]
group: navigate
order: 1
---

# Pan

Perintah `pan` memasuki mode seret-untuk-gulir yang persisten — klik dan seret di mana saja pada kanvas untuk menggeser tampilan. Tingkat zoom tidak berubah. Mode Pan tetap aktif sampai Anda menekan `Escape`, sehingga Anda dapat menyeret beberapa kali dalam satu aktivasi.

## Menggeser tampilan

1. Ketik `pan` di terminal atau klik tombol toolbar **Pan**.
2. **Klik dan seret** di mana saja pada kanvas untuk menggeser tampilan.
3. Lepaskan dan seret lagi sebanyak yang diperlukan.
4. Tekan `Escape` untuk keluar dari mode pan.

## Seret klik tengah — pan tanpa mengaktifkan perintah

Cara tercepat untuk pan: **tahan tombol mouse tengah dan seret** kapan saja, bahkan saat perintah lain aktif. Tidak diperlukan aktivasi perintah. Melepaskan tombol tengah mengembalikan ke kondisi sebelumnya.

## Pan vs kontrol zoom

| Aksi | Efek | Memerlukan mode Pan? |
|--------|--------|-------------------|
| Seret klik kiri (mode Pan) | Menggeser viewport | Ya |
| Seret klik tengah | Menggeser viewport | Tidak — selalu berfungsi |
| Roda gulir | Zoom ke arah kursor | Tidak — selalu berfungsi |
| Klik ganda tombol tengah | Fit semua entitas | Tidak — selalu berfungsi |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Menambah/mengurangi zoom 1.5× | Tidak |
| [Fit](../fit/) | Menampilkan semua entitas dalam tampilan | Tidak |

## Referensi keyboard

| Tombol | Aksi |
|-----|--------|
| `Escape` | Keluar dari mode pan |

## Tips

- Gunakan roda gulir untuk zoom ke area target, kemudian pan untuk menyetel posisi.
- **Klik ganda tombol mouse tengah** memicu [Fit](../fit/) secara instan — cara tercepat untuk mengatur ulang tampilan yang hilang.
- Jika Anda sedang dalam perintah (mis., menempatkan titik akhir garis), seret klik tengah untuk pan tanpa membatalkan perintah.
