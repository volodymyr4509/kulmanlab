---
title: "Perintah BlockInsert — Meletakkan blok daripada blok lukisan"
description: "Perintah BlockInsert membuka palet pratonton blok lukisan. Pilih satu, tetapkan skala dan putarannya, kemudian klik atau taip titik untuk meletakkannya, sekali atau berulang kali."
keywords: ["sisip blok CAD", "palet blok CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Perintah `SisipBlok` membuka palet pratonton setiap blok dalam lukisan dan meletakkan yang anda pilih. Buat blok dengan [Block Create](../block-create/), atau buka fail DXF yang mempunyai blok.

## Meletakkan blok

1. Taip `SisipBlok` atau klik **Sisip blok** dalam panel **Blok**. Palet melekat di kiri dengan satu jubin pratonton setiap blok, dua belas satu halaman; anak panah di bawah jubin menukar halaman.
2. Taip dalam **Cari blok** untuk menyempitkan jubin mengikut nama.
3. Tetapkan **Skala** (mesti lebih daripada 0) dan **Putaran** dalam darjah. **Ulang penempatan** dihidupkan secara lalai.
4. Klik jubin sesuatu blok. Blok mengikut kursor: klik untuk meletakkannya pada titik asasnya, atau taip X,Y untuk kedudukan tepat. Apabila kursor dikunci pada sudut, anda boleh menaip panjang.
5. Dengan **Ulang penempatan** hidup, blok terus mengikut kursor untuk salinan seterusnya sehingga anda menekan **Escape**. Jika mati, perintah tamat selepas satu salinan.

## Perlu diketahui

- Untuk memadam blok, klik tong sampah pada jubinnya dan sahkan. Blok yang mempunyai rujukan dalam lukisan tidak boleh dipadam: jubinnya menyatakan **Sedang digunakan, tidak boleh dipadam**.
- Lukisan tanpa blok menunjukkan **Lukisan ini tiada blok** dalam palet.
- **Escape** menutup palet apabila tiada apa yang sedang diletakkan. Ia salah satu panel berlabuh, yang dipaparkan satu demi satu di kiri.

---

*Berkaitan: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
