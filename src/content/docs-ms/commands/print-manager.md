---
title: Pengurus Cetak — Eksport Lukisan sebagai PNG, JPEG, WebP, atau PDF
description: Arahan PrintManager membuka Pengurus Cetak — tetingkap eksport khusus dengan pratonton langsung yang sepadan tepat dengan fail yang dieksport, tetapan Kualiti/DPI, pemilih format, gaya cetak Default/Monochrome/Blueprint, dan pemilihan kawasan pilihan. Menyokong PNG, JPEG, WebP, dan PDF.
keywords: [CAD eksport PNG, CAD eksport PDF, cetak lukisan CAD, pengurus cetak, kualiti cetak DPI, eksport monokrom, gaya cetak blueprint, eksport kulmanlab]
group: file
order: 4
---

# Pengurus Cetak

Arahan `PengurusCetak` membuka **Pengurus Cetak** — tetingkap eksport khusus dengan kanvas pratonton langsung, pemilih format (PNG / JPEG / WebP / PDF), pemilih Style (Default / Monochrome / Blueprint), dan pemangkasan kawasan pilihan. Tiada apa-apa yang dihantar ke pencetak fizikal; output dimuat turun sebagai fail.

## Membuka Pengurus Cetak

Klik butang bar alat **Print** atau taip `PengurusCetak` dalam terminal. Pengurus Cetak terbuka serta-merta menunjukkan pratonton viewport semasa.

Pratonton dipaparkan melalui laluan kod yang tepat sama, pada resolusi piksel yang tepat sama, seperti fail yang akhirnya anda eksport — menukar Quality, Style, atau kawasan eksport serta-merta memaparkan semula pratonton, jadi apa yang anda lihat adalah apa yang dimuat turun, bukan anggarannya.

## Susun atur Pengurus Cetak

Tetingkap mempunyai dua panel:
- **Bar sisi kiri** — semua kawalan eksport.
- **Panel kanan** — kanvas pratonton langsung yang dikemas kini semasa anda menukar tetapan.

### Kawalan bar sisi

| Kawalan | Penerangan |
|---------|------------|
| **Change Area** | Pangkas ke segi empat tepat tersuai pada kanvas (lihat di bawah) — sebenarnya memangkas imej yang dieksport, termasuk pada susun atur dengan ruang kertas, bukan sekadar pratonton pada skrin |
| Dropdown **Quality** | Menetapkan resolusi eksport (lihat di bawah) |
| Dropdown **Style** | Default, Monochrome, atau Blueprint — lihat *Gaya cetak* di bawah. Monochrome secara lalai untuk output cetak yang bersih |
| Dropdown **Format** | PNG, JPEG, WebP, atau PDF |
| Butang **Export** | Jana dan muat turun fail |

## Gaya cetak

Dropdown **Style** mengawal kedua-dua warna dakwat yang digunakan untuk melukis entiti dan latar belakang halaman:

| Style | Dakwat | Latar belakang halaman |
|-------|--------|--------------------------|
| **Default** | Warna asal setiap entiti | Putih |
| **Monochrome** *(lalai)* | Hitam pekat, tanpa mengira warna entiti/lapisan | Putih |
| **Blueprint** | Putih pekat, tanpa mengira warna entiti/lapisan | Biru Prussia gelap, dengan grid rujukan yang samar |

Blueprint menghasilkan semula rupa cetakan seni bina sianotaip tradisional — garisan putih di atas helaian biru gelap. Grid rujukannya bersaiz relatif kepada saiz halaman dan bukan DPI, jadi ia kelihatan pada kepadatan yang sama pada mana-mana tetapan Quality dan bukannya menjadi lebih padat apabila resolusi meningkat.

## Kualiti dan resolusi

Menu lungsur **Quality** menetapkan DPI eksport dirender:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(lalai)* | 150 |
| Presentation | 300 |
| Max | 600 |

Kualiti yang lebih tinggi menghasilkan imej yang lebih besar dan lebih tajam pada saiz fizikal yang sama — ketebalan garis berskala bersama resolusi, jadi garis mengekalkan ketebalan *fizikal* yang sama di atas kertas pada mana-mana tetapan Kualiti, bukannya kelihatan lebih nipis apabila DPI meningkat. Satu pengecualian ialah garis rerambut (ketebalan garis `0`), yang ditakrifkan secara konvensional sebagai "garis paling nipis yang boleh dilukis oleh peranti output" — ia kekal pada lebar tetap 1 piksel pada mana-mana tahap Kualiti, sama seperti kelakuannya pada kanvas langsung.

Menukar Kualiti serta-merta memberikan pratonton semula, jadi anda dapat melihat ketajaman sebenar (dan pertukaran saiz fail) sebelum mengeksport.

## Memilih kawasan eksport tersuai

Secara lalai pratonton menunjukkan kotak sempadan semua entiti dalam ruang Model — julat sama yang dizum oleh [Fit](../fit/) — atau keseluruhan helaian pada susun atur. Untuk mengeksport kawasan tertentu:

1. Klik **Change Area** — Pengurus Cetak disembunyikan dan kanvas menjadi interaktif.
2. **Klik sudut pertama** segi empat tepat eksport.
3. **Klik sudut bertentangan** — Pengurus Cetak dibuka semula dengan kawasan yang dipilih dalam pratonton.

Tekan `Escape` semasa pemilihan kawasan untuk membatalkan dan memulihkan kawasan sebelumnya.

Kanvas pratonton mengubah saiz secara dinamik agar sepadan dengan **nisbah aspek tepat** kawasan yang dipilih, supaya pratonton adalah tepat piksel.

Kawasan yang dipilih diingati secara berasingan bagi ruang Model dan setiap susun atur sehingga anda memuat semula halaman — lihat [ChangePrintArea](../change-print-area/).

## Format eksport

| Format | Terbaik untuk | Nota |
|--------|--------------|------|
| **PNG** | Tanpa kehilangan, garis tajam | Latar belakang halaman Style disepadukan, tiada ketelusan |
| **JPEG** | Fail lebih kecil untuk berkongsi | Kualiti 95%, sedikit mampatan |
| **WebP** | Fail terkecil untuk web | Kualiti 95% yang sama, mampatan lebih baik dari JPEG |
| **PDF** | Dokumen sedia cetak | Imej terbenam dalam bekas PDF pada DPI Quality yang dipilih, bersaiz supaya halaman dicetak pada skala fizikal sebenar |

Fail yang dieksport dinamakan `kulman-<timestamp>.<ext>` dan dimuat turun secara automatik.

## Resolusi dan latar belakang eksport

- **Eksport ruang model / viewport**: dihadkan kepada 2000 × 2000 piksel pada Quality Normal lalai (150 DPI), diskala secara berkadar kepada kawasan yang dipilih; had ini turut berskala dengan Quality — Draft lebih rendah, Presentation dan Max lebih tinggi (sehingga 8000 × 8000 pada Max/600 DPI).
- **Eksport susun atur (ruang kertas)**: bersaiz terus daripada dimensi kertas susun atur pada DPI yang dipilih — cth. helaian A4 (210 × 297 mm) pada Quality Normal dieksport pada kira-kira 1240 × 1754 px — jadi ia tidak tertakluk kepada had 2000 px viewport.
- Latar belakang mengikut **Style** cetak yang dipilih — putih untuk Default dan Monochrome, biru Prussia gelap untuk Blueprint (lihat *Gaya cetak* di atas).
- Lapisan yang ditandai sebagai **tidak dicetak** dikecualikan dari eksport.

## Rujukan papan kekunci

| Kekunci | Tindakan |
|---------|---------|
| `Escape` (semasa pemilihan kawasan) | Batal pemilihan kawasan, pulihkan kawasan sebelumnya |
| `Escape` (dalam Pengurus Cetak) | Tutup Pengurus Cetak |
