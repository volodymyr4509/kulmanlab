---
title: File Manager — Grid Thumbnail, Namakan Semula & Padam Lukisan
description: Arahan File Manager membuka grid thumbnail bagi setiap lukisan yang disimpan — klik thumbnail untuk membukanya, namakan semula di tempat, atau padam dengan pengesahan.
keywords: [file manager CAD, fail terkini CAD, namakan semula lukisan, padam lukisan, grid thumbnail CAD, pulihkan lukisan, buka semula DXF, storan pelayar CAD, fail KulmanLab, lukisan yang disimpan, IndexedDB CAD, sandarkan lukisan CAD]
group: file
order: 3
---

# File Manager

Arahan `PengurusFail` membuka **grid thumbnail** bagi setiap lukisan yang telah disimpan ke storan tempatan pelayar anda, disusun mengikut masa ia terakhir disimpan. Gunakannya untuk membuka semula lukisan sebelumnya, menamakannya semula, atau memadamkannya.

## Membuka File Manager

- Taip `PengurusFail` dalam terminal, **atau**
- Klik butang bar alat **File Manager** (ikon sejarah) dalam panel Fail di bahagian atas skrin.

Panel terbuka di sebelah kiri kanvas, dan tertutup secara automatik sebaik sahaja anda memulakan arahan lain atau [mengimport](../import/) sesuatu fail — jadi ia tidak pernah berlengah-lengah di atas lukisan yang belum lagi disenaraikannya. Ia dibuka semula dengan senarai terkini setiap kali.

## Grid thumbnail

Setiap lukisan yang disimpan adalah satu kad yang menunjukkan thumbnail yang dirender secara langsung, namanya, dan bila ia terakhir dikemas kini. Thumbnail dijana serta-merta setiap kali panel dibuka — tiada apa yang dirender atau disimpan lebih awal — jadi sesuatu kad akan menunjukkan ikon ruang letak seketika sementara thumbnailnya sedang dilukis. Ikon ruang letak yang sama juga muncul jika penjanaan gagal, atau jika lukisan itu memang belum mempunyai sebarang entiti.

| Tindakan | Cara |
|--------|-----|
| **Buka** lukisan | Klik thumbnailnya — menggantikan kandungan kanvas semasa |
| **Namakan semula** | Klik ikon pensel, atau klik dua kali pada nama |
| **Padam** | Klik ikon tong sampah, kemudian sahkan |

Jika tiada fail yang disimpan lagi, panel menunjukkan "No files saved". Dengan lebih banyak fail daripada yang boleh dimuatkan pada satu skrin, kawalan **Page 1 of N** muncul di bawah grid.

Kad bagi fail yang sedang dibuka dalam editor ditandakan dengan gelang berwarna aksen, dan **tiada butang padam** — memadam fail yang sedang dibuka akan memusnahkan data yang disimpannya sedangkan kanvas masih menunjukkannya, dan suntingan seterusnya hanya akan menyimpannya semula. Menamakannya semula masih tersedia.

## Memadam fail

Mengklik ikon tong sampah tidak terus memadam — ia mengaktifkan lapisan pengesahan pada kad tersebut ("Delete this file?" dengan butang **Delete** / **Cancel**), memandangkan pemadaman adalah kekal dan tidak boleh dibatalkan. Mengklik **Cancel**, mengklik ikon tong sampah pada kad lain, atau mengklik di tempat lain pada kad tersebut semuanya membatalkan pengesahan yang belum selesai tanpa memadam apa-apa.

## Menamakan semula fail

Klik ikon pensel (atau klik dua kali pada nama fail) untuk mengeditnya di tempat, kemudian tekan **Enter** untuk mengesahkan atau **Escape** untuk membatalkan. Penamaan semula ditolak jika nama baharu:

- kosong, atau lebih panjang daripada 100 aksara,
- sudah digunakan oleh fail lain yang disimpan (tidak sensitif huruf besar/kecil),
- berakhir dengan titik, atau
- nama peranti terperuntuk Windows seperti `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, atau `LPT1`–`LPT9`.

Aksara yang tidak sah dalam nama fail (`\ / : * ? " < > |`) dibuang secara automatik semasa anda menaip. Menamakan semula hanya menukar label — ia tidak menjejaskan kedudukan lukisan dalam grid, kerana itu disusun mengikut masa ia terakhir disimpan, bukan mengikut nama.

## Sandarkan kerja anda — storan pelayar tidak kekal

KulmanLab menyimpan lukisan ke **IndexedDB**, pangkalan data yang terbina dalam pelayar anda:

- Fail disimpan **secara tempatan pada peranti anda sahaja** — tiada apa yang dimuat naik ke mana-mana pelayan.
- Setiap pelayar dan peranti mempunyai storan bebas mereka sendiri. Lukisan yang disimpan dalam Chrome pada satu komputer tidak muncul dalam Firefox, atau pada mesin lain.
- Storan ini **boleh dikosongkan tanpa amaran** — dengan mengosongkan data tapak atau sejarah pelayaran, kehabisan ruang cakera, menggunakan tetingkap peribadi/inkognito, memasang semula pelayar atau OS, atau menukar peranti. Tiada satu pun daripada situasi ini memberi anda peluang untuk memulihkan apa yang ada di sana.

**Satu-satunya cara yang boleh diharap untuk memastikan lukisan anda selamat ialah [mengeksportnya](../export-manager/) ke storan anda sendiri.** Gunakan `.json` (format natif KulmanLab) apabila boleh — ia mengekalkan setiap entiti dengan tepat; gunakan `.dxf` apabila anda memerlukan keserasian dengan alat CAD lain. Lakukan ini untuk apa-apa yang anda akan kecewa jika hilang, dan sebelum mengosongkan data pelayar, menukar pelayar atau peranti, atau menyimpan mesin untuk seketika.

## Pemuatan fail automatik semasa permulaan

Apabila anda membuka KulmanLab CAD, aplikasi secara automatik memuatkan **fail yang paling baru diubah suai** daripada storan. Anda tidak perlu membukanya secara manual daripada File Manager setiap kali.

## Mengurus storan

Tiada had tetap bagi bilangan lukisan yang boleh anda simpan, tetapi storan pelayar adalah terhad. Jika anda perasan amaran storan, padam fail yang lebih lama daripada File Manager — atau lebih baik, eksport dahulu supaya tiada apa yang hilang.

Untuk membuang semua lukisan yang disimpan sekaligus, gunakan arahan [WipeStorage](../wipestorage/).

## Nama fail

Fail baharu dan fail yang diimport mendapat nama biasa — tiada cap masa dibenamkan. Jika nama itu sudah digunakan, akhiran gaya Finder/Explorer ditambah secara automatik (`plan (2)`, `plan (3)`, …) supaya tiada apa yang ditimpa. Anda sentiasa boleh memberikan fail nama yang lebih jelas kemudian menggunakan [namakan semula](#renaming-a-file).

## Arahan berkaitan

- [Import](../import/) — muatkan lukisan daripada sistem fail anda ke storan pelayar
- [Export Manager](../export-manager/) — muat turun lukisan ke sistem fail anda
- [New File](../new-file/) — mulakan lukisan kosong (turut disimpan secara automatik)
- [WipeStorage](../wipestorage/) — kosongkan semua fail yang disimpan daripada storan pelayar
