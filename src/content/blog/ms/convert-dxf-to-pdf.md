---
title: "Cara menukar DXF kepada PDF (pada skala yang betul)"
description: "Tukar DXF kepada PDF secara percuma dalam pelayar — termasuk pada skala tepat seperti 1:50 di atas A3, yang tidak mampu dilakukan laman penukar. Tanpa pemasangan."
keywords: [tukar DXF kepada PDF, DXF ke PDF percuma, DXF PDF dalam talian, DXF PDF skala, cetak DXF ikut skala, penukar DXF PDF, lukisan CAD ke PDF, DXF PDF A3, skala 1:50 PDF, DXF ke PDF tanpa AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Panduan
---

Untuk menukar DXF kepada PDF, buka fail itu dalam editor CAD yang berjalan dalam pelayar dan eksport: tiada apa untuk dipasang, tiada akaun, dan fail kekal pada komputer anda. Jika PDF itu perlu diukur dengan tepat apabila dicetak, anda memerlukan susun atur kertas dan skala yang tepat — dan itulah langkah yang dilangkau sepenuhnya oleh perkhidmatan penukaran.

Perbezaan itulah tujuan seluruh panduan ini. Penukar fail umum memberi anda gambar lukisan anda. PDF berskala pula memberi anda lukisan yang boleh diletakkan pembaris ke atasnya.

## Jalan pantas: sekadar menghasilkan PDF

Apabila anda cuma perlukan sesuatu yang boleh dibaca untuk dihantar:

1. Pergi ke [app.kulmanlab.com](https://app.kulmanlab.com) dan seret `.dxf` anda ke kanvas, atau gunakan butang **Import** dalam panel fail.
2. Klik butang **Print**, atau taip `printmanager`.
3. Tetapkan **Format** kepada **PDF**.
4. Klik **Export**. Fail akan dimuat turun.

Itu sahaja. Pratonton dipaparkan melalui laluan kod dan resolusi yang sama persis dengan fail yang dieksport, jadi apa yang anda lihat itulah yang anda dapat, bukan anggarannya.

Satu perkara berbaloi diketahui: **PDF mengekalkan segala yang ada pada skrin** — dimensi, teks, lorekan, penunjuk — tersusun betul-betul seperti dilukis. Eksport DXF turut membawa kesemuanya, jadi pilihan antara keduanya bukan tentang apa yang kekal. Ia tentang apa yang diperlukan penerima: PDF jika dia hanya perlu membaca atau mencetaknya, DXF jika dia perlu menyuntingnya.

## Jalan yang betul: menukar pada skala tepat

Jika seseorang akan mengukur atau membina berdasarkan ini, "muat pada halaman" tidak memadai. Skala 1:50 bermakna 1 mm di atas kertas ialah 50 mm pada realiti, dan itu hanya benar jika anda menetapkannya dengan sengaja.

1. **Beralih ke susun atur kertas.** Klik tab susun atur di bahagian bawah skrin; butang **+** menambah satu yang baharu. Susun atur ialah ruang kertas; ruang model tiada halaman untuk diskalakan.
2. **Tetapkan helaian.** Taip `pagemanager`, atau klik kanan pada tab susun atur dan pilih **Page Manager**. Pilih saiz kertas (A4, A3, A2, Letter…) dan orientasi.
3. **Letakkan viewport.** Taip `viewportrectangle` dan tentukan dua sudut bertentangan. Viewport ialah tingkap ke arah model anda.
4. **Tetapkan skala.** Dengan viewport aktif, gunakan **pemilih skala** pada bar kawalan. Pilih nisbah piawai atau taip sendiri — ia menerima format nisbah (`1:200`, `5:1`) atau perpuluhan biasa (`0.005`), kemudian Enter.
5. **Eksport.** Print Manager → PDF → Export.

PDF disaiz supaya halaman dicetak pada skala fizikal sebenar. Cetak pada 100% — jangan sekali-kali dengan "muat ke halaman", yang menskala semula segalanya secara senyap dan membatalkan kerja anda — maka ukuran di atas kertas akan tepat.

Jika kemudian anda menukar saiz kertas atau skala, viewport sedia ada akan diskala semula secara berkadar, jadi susun atur tidak berkecai.

## Memilih kualiti

Senarai **Quality** menetapkan DPI yang digunakan untuk memaparkan PDF:

| Quality | DPI | Untuk apa |
|---|---|---|
| Draft | 72 | Semakan pantas, fail terkecil |
| Normal | 150 | Lalai — memadai untuk lampiran A4 |
| Presentation | 300 | Apabila akan ditinjau dari dekat |
| Max | 600 | Format besar, perincian halus |

Ketebalan garis diskala bersama resolusi, jadi garis mengekalkan ketebalan *fizikal* yang sama di atas kertas pada mana-mana tetapan — kualiti lebih tinggi memberi garis lebih tajam, bukan lebih nipis. Pengecualiannya ialah garis rambut (ketebalan `0`), yang menurut kelaziman kekal selebar satu piksel pada setiap peringkat.

## Gaya cetakan

Senarai **Style** menukar dakwat dan halaman sekali gus:

- **Monochrome** — hitam pekat di atas putih, dan inilah tetapan lalai. Inilah yang anda mahukan untuk apa jua yang akan naik ke kertas: lapisan berwarna yang mudah dibaca pada skrin bertukar menjadi kelabu keruh pada pencetak laser.
- **Default** — setiap objek dengan warnanya sendiri, halaman putih.
- **Blueprint** — garis putih di atas biru Prusia pekat, bergaya cetak biru klasik. Untuk pembentangan, bukan untuk bengkel.

## Menukar sebahagian lukisan sahaja

**Change Area** memangkas eksport kepada segi empat tepat yang anda tarik pada kanvas. Ia memangkas fail yang benar-benar dieksport, bukan pratonton semata-mata, dan ia berfungsi pada susun atur mahupun dalam ruang model.

Sudut-sudutnya melekat pada pemegang dan persilangan seperti mana-mana pemilihan titik lain, jadi anda boleh memangkas mengikut geometri yang dilukis dan bukan dengan agakan mata — berguna apabila satu helaian memuatkan empat perincian dan anda hanya mahukan yang ketiga.

## Apa yang ia tidak lakukan

Batasan yang jujur, sebelum anda bergantung padanya:

- **PDF itu ialah imej raster di dalam bekas PDF, bukan vektor.** Pada A4 dengan kualiti Normal ia tidak kelihatan. Pada A1, atau apabila seseorang mengezum jauh ke dalam sesuatu perincian, PDF vektor daripada pakej CAD desktop akan lebih tajam. Naikkan Quality ke Presentation atau Max untuk format besar — namun ia tidak menjadi vektor kerana itu.
- **Tiada apa dihantar ke pencetak fizikal.** Anda mendapat satu fail; mencetaknya ialah tugas pencetak anda.
- **Pelayar desktop sahaja** — Chrome, Firefox, Safari, Edge. Tiada versi mudah alih.
- **2D sahaja, DXF dan bukan DWG.** Jika fail anda `.dwg`, minta penghantar mengeksport DXF.

## Bila perlu guna yang lain

**Penukar fail umum** (CloudConvert, Zamzar dan seumpamanya) memadai jika anda benar-benar hanya perlukan gambar dan tidak kisah pada saiz apa ia dicetak. Ia pantas dan mengendalikan format yang tiada siapa lain baca. Ia tidak akan memberi anda 1:50 di atas A3.

**CAD desktop** — LibreCAD, QCAD, atau AutoCAD jika anda memilikinya — menghasilkan PDF vektor dan merupakan jawapan yang betul bagi lukisan teknikal format besar yang akan dicetak dengan betul dan diteliti.

**Cara ini** pula untuk ruang tengah yang luas: sebuah DXF yang anda perlukan hari ini sebagai PDF beranotasi berskala tepat, tanpa memasang apa-apa.

## Sebelum anda menghantar

- Skala ditetapkan dengan sengaja dalam viewport, bukan dibiarkan pada apa yang kebetulan muat
- Saiz kertas menepati apa yang penerima benar-benar akan cetak
- Quality dinaikkan melebihi Normal jika ia akan dicetak lebih besar daripada A4
- Gaya Monochrome, melainkan anda memang mahukan warna
- PDF dibuka sekali untuk disemak sebelum dilampirkan
- Penerima diberitahu supaya mencetak pada 100%, bukan "muat ke halaman"

Baris terakhir itu menyelamatkan lebih banyak lukisan berskala daripada segala yang lain dalam senarai ini.

---

*Berkaitan: [Print Manager](/ms/docs/commands/print-manager/) untuk semua tetapan eksport, [Page Manager](/ms/docs/commands/page-manager/) untuk saiz kertas dan skala susun atur, [ViewportRectangle](/ms/docs/commands/viewport-rectangle/) untuk meletak dan menskala viewport, dan [Import](/ms/docs/commands/import/) untuk apa yang dibaca KulmanLab daripada DXF.*
