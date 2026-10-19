---
title: "Perintah Point — letakkan titik pada lukisan dalam KulmanLab CAD"
description: "Perintah Point meletakkan titik pada setiap klik, X,Y yang ditaip atau jarak sepanjang arah yang dikunci, sehingga Enter, Space atau Escape. Titik dilukis sebagai noktah, membawa lapisan dan warna semasa, serta turut dalam DXF sebagai entiti POINT."
keywords: ["perintah titik CAD", "letak titik CAD", "entiti DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Perintah `Titik` meletakkan titik pada setiap pilihan dan kekal aktif sehingga anda menekan Enter, Space atau Escape. Titik ialah kedudukan tanpa saiz: ia dilukis sebagai noktah kecil dan membawa lapisan serta warna semasa. Ia disimpan sebagai entiti `POINT`.

## Meletakkan titik

1. Taip `Titik` dalam terminal atau klik **Point**, butang terakhir dalam panel Shapes.
2. **Klik** di tempat titik akan berada, atau taip `X,Y` dan tekan **Enter** untuk kedudukan tepat. Setiap pilihan meletakkan titik dan terminal merekodkan koordinatnya; perintah kekal aktif untuk yang seterusnya.
3. Atau kunci arah daripada [pin vektor](../../interface/vector-pins/) dan taip jarak — titik jatuh tepat sejauh itu di sepanjangnya.
4. Tekan **Enter**, **Space** atau **Escape** untuk tamat. Enter dan Space hanya menamatkan apabila tiada apa-apa sedang ditaip.

## Rupa titik

Titik dilukis sebagai noktah berjejari 1 px pada setiap tahap zum, jadi ia kekal kelihatan apabila dizum keluar dan tidak membesar apabila dizum masuk. Gaya titik lukisan (`$PDMODE` dan `$PDSIZE`) belum dibaca, jadi setiap titik ialah noktah, apa pun kata DXF.

## Menyunting titik

Titik yang dipilih mempunyai satu grip yang mengalihkannya. Pilihan kotak mengambil titik apabila ia berada di dalam kotak, dalam mana-mana arah seretan.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) dan [Scale](../scale/) berfungsi pada titik seperti pada mana-mana entiti lain. Tetingkap sifat menunjukkan Position X dan Position Y, serta warna dan lapisan.

## DXF — entiti POINT

Titik dibaca daripada dan ditulis ke DXF sebagai entiti `POINT` dengan kedudukan, warna dan lapisan (kod kumpulan 10/20, 62 dan 8), serta turut melalui JSON yang disimpan. Dahulu ia dilangkau semasa import. [Export Manager](../export-manager/) menyenaraikan Points pada barisnya sendiri, jadi anda boleh mengecualikannya daripada eksport.

---

*Berkaitan: [Line](../line/) untuk input koordinat yang sama, dan [Vector Pins](../../interface/vector-pins/) untuk meletakkan titik pada jarak tertentu di sepanjang arah.*
