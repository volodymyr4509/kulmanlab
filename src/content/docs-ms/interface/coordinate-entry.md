---
title: "Kemasukan koordinat — taip titik tepat, relatif dan polar"
description: "Di mana sahaja perintah meminta titik, taip dan bukan klik: X,Y untuk kedudukan tepat, @X,Y untuk mengukur dari titik terakhir, dan jarak<sudut untuk titik polar. Togol Rel menjadikan setiap titik yang ditaip bermula relatif."
keywords: ["kemasukan koordinat CAD", "koordinat relatif CAD", "koordinat polar CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Kemasukan koordinat

Di mana sahaja perintah meminta titik — permulaan [Line](../../commands/line/), bucu [Rectangle](../../commands/rectangle/), titik asas [Move](../../commands/move/), atau grip yang anda seret — anda boleh menaipnya dan bukan mengklik. Mula taip nombor dan terminal memaparkan apa yang ditaip; tekan **Enter** atau **Space** untuk meletakkan titik.

## Empat cara menulis titik

| Anda taip | Titiknya |
|---|---|
| `100,50` | Pada X 100, Y 50 |
| `@100,50` | 100 pada X dan 50 pada Y dari titik terakhir |
| `100<45` | 100 dari asalan, pada 45° |
| `@100<45` | 100 dari titik terakhir, pada 45° |

Sudut dalam darjah, lawan arah jam dari paksi X, jadi `@50<90` ialah 50 lurus ke atas dan `@50<180` ialah 50 ke kiri. Mana-mana nilai boleh negatif.

## Titik terakhir

`@` mengukur dari titik terakhir yang diklik atau ditaip dalam mana-mana perintah — klik terakhir perintah sebelumnya dikira, begitu juga grip yang baru anda seret. Jika belum ada titik terakhir, `@100,50` dibaca sebagai `100,50`. Titik terakhir dilupakan apabila anda bertukar antara ruang model dan susun atur, dan apabila lukisan dibuka.

## Rel: relatif secara lalai

Togol **Rel** dalam bar kawalan menjadikan setiap titik yang ditaip bermula relatif: sebaik sahaja anda menaip digit pertama, `@` diletakkan di hadapannya, jadi `100,50` menjadi `@100,50`. Tekan **Backspace** pada `@` untuk menjadikan titik itu mutlak. Jika belum ada titik terakhir, tiada `@` ditambah. Rel dimatikan secara lalai dan diingati bersama togol bar kawalan yang lain.

## Kekunci semasa menaip

| Kekunci | Kesan |
|---|---|
| `0`–`9`, `.`, `-` | Taip nombor; `-` hanya di permulaan |
| `@` | Jadikan titik relatif, di permulaan X |
| `,` atau **Space** | Tamatkan X dan teruskan ke Y |
| `<` | Tamatkan X sebagai jarak dan teruskan ke sudutnya |
| **Enter** atau **Space** | Letakkan titik apabila Y ada nilai |
| **←** **→** **Home** **End** | Gerakkan kursor dalam nilai yang ditaip |
| **Backspace** | Padam sebelum kursor; di permulaan Y kosong, kembali ke X |

Titik yang tidak dapat dibaca sebagai nombor kekal dalam terminal untuk anda betulkan. Setiap titik yang ditaip meninggalkan satu baris dalam sejarah terminal seperti yang ditaip — `Ditaip @100<45` — sebelum baris perintah yang menyatakan di mana ia jatuh.

## Titik yang ditaip dan penjejakan sudut

Apabila kursor dikunci pada sinar penjejakan sudut, menaip nombor memberi jarak di sepanjang sinar itu dan bukan X. Menaip `@` dahulu memulakan titik penuh, jadi `@100,50` tetap berfungsi pada sinar yang dikunci.

---

*Berkaitan: [Penjejakan jarak](../distance-tracking/) untuk menaip panjang di sepanjang arah yang dikunci, dan [Vector Pins](../vector-pins/) untuk mengukur dari titik yang dipin.*
