---
title: "Koordinačių įvedimas — tikslūs, santykiniai ir poliniai taškai"
description: "Kur komanda prašo taško, įveskite jį užuot spustelėję: X,Y tiksliai padėčiai, @X,Y matuoti nuo paskutinio taško ir atstumas<kampas poliniam taškui. Jungiklis Rel kiekvieną įvestą tašką pradeda kaip santykinį."
keywords: ["koordinačių įvedimas CAD", "santykinės koordinatės CAD", "polinės koordinatės CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinačių įvedimas

Kur komanda prašo taško — [Line](../../commands/line/) pradžios, [Rectangle](../../commands/rectangle/) kampo, [Move](../../commands/move/) bazinio taško ar rankenėlės, kurią tempiate — galite jį įvesti užuot spustelėję. Pradėkite rašyti skaičių, ir terminalas rodys, ką rašote; paspauskite **Enter** arba **Space**, kad padėtumėte tašką.

## Keturi būdai užrašyti tašką

| Įvedate | Taškas yra |
|---|---|
| `100,50` | Ties X 100, Y 50 |
| `@100,50` | 100 pagal X ir 50 pagal Y nuo paskutinio taško |
| `100<45` | 100 nuo pradžios taško, 45° kampu |
| `@100<45` | 100 nuo paskutinio taško, 45° kampu |

Kampai laipsniais, prieš laikrodžio rodyklę nuo X ašies, todėl `@50<90` yra 50 tiesiai aukštyn, o `@50<180` — 50 į kairę. Bet kuri reikšmė gali būti neigiama.

## Paskutinis taškas

`@` matuoja nuo paskutinio taško, spustelėto ar įvesto bet kurioje komandoje — skaičiuojamas paskutinis ankstesnės komandos spustelėjimas ir ką tik nutempta rankenėlė. Kol paskutinio taško nėra, `@100,50` skaitoma kaip `100,50`. Paskutinis taškas pamirštamas pereinant tarp modelio erdvės ir išdėstymo bei atidarant brėžinį.

## Rel: santykinis pagal numatytuosius nustatymus

Valdymo juostos jungiklis **Rel** kiekvieną įvestą tašką pradeda kaip santykinį: vos įvedus pirmą skaitmenį, prieš jį atsiranda `@`, todėl `100,50` tampa `@100,50`. Paspauskite **Backspace** ties `@`, kad tas vienas taškas būtų absoliutus. Kol paskutinio taško nėra, `@` nepridedamas. Rel pagal numatytuosius nustatymus išjungtas ir įsimenamas kartu su kitais valdymo juostos jungikliais.

## Klavišai rašant

| Klavišas | Veiksmas |
|---|---|
| `0`–`9`, `.`, `-` | Įveskite skaičių; `-` tik pradžioje |
| `@` | Padarykite tašką santykinį, X pradžioje |
| `,` arba **Space** | Baikite X ir pereikite prie Y |
| `<` | Baikite X kaip atstumą ir pereikite prie jo kampo |
| **Enter** arba **Space** | Padėkite tašką, kai Y turi reikšmę |
| **←** **→** **Home** **End** | Perkelkite žymeklį rašomoje reikšmėje |
| **Backspace** | Ištrinkite prieš žymeklį; tuščio Y pradžioje grįžkite į X |

Taškas, kurio negalima perskaityti kaip skaičių, lieka terminale, kad jį pataisytumėte. Kiekvienas įvestas taškas palieka terminalo istorijoje eilutę taip, kaip jį įvedėte — `Įvesta @100<45` — prieš komandos eilutę, kur jis atsidūrė.

## Įvesti taškai ir kampo sekimas

Kai žymeklis užrakintas kampo sekimo spindulyje, įvestas skaičius reiškia atstumą išilgai to spindulio, o ne X. Įvedus pirmiausia `@`, pradedamas pilnas taškas, todėl `@100,50` veikia ir užrakintame spindulyje.

---

*Susiję: [Distance Tracking](../distance-tracking/) ilgiui įvesti užrakinta kryptimi ir [Vector Pins](../vector-pins/) matuoti nuo prisegto taško.*
