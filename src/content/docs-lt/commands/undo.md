---
title: Undo komanda — žingsnis atgal per braižymo istoriją KulmanLab CAD
description: Undo komanda atšaukia paskutinį braižymo veiksmą po vieną žingsnį. Kiekvienam failui saugoma iki 20 žingsnių, kurie išlieka naršyklėje perkraunant puslapį. Atlikus naują veiksmą po atšaukimo, redo kaminas išvaloma.
keywords: [CAD undo komanda, undo istorija CAD, veiksmo atšaukimas CAD, undo žingsniai CAD, naršyklėje išliekantis undo, kulmanlab]
group: edit
order: 13
---

# Undo

Komanda `undo` atšaukia paskutinį brėžinio pakeitimą — po vieną žingsnį kiekvienam iškvietimui. Kiekvienas objektų pridėjimas, ištrynimas ar redagavimas užfiksuojamas kaip atskiras istorijos įrašas. Undo grįžta per šiuos įrašus atvirkštine tvarka.

## Kaip atšaukti

- Terminale įveskite `undo`, arba
- spustelėkite įrankių juostos mygtuką **Undo**.

Kiekvienas iškvietimas atšaukia vieną užfiksuotą veiksmą. Iškvieskite kelis kartus, kad grįžtumėte toliau.

## Istorijos elgsena

| Detalė | Reikšmė |
|--------|---------|
| Žingsnių kiekvienam failui | Iki **20** |
| Saugykla | Naršyklė (IndexedDB / localStorage), pagal failo pavadinimą |
| Išlieka perkraunant puslapį | Taip — istorija atkuriama vėl atvėrus failą |
| Naujas veiksmas po atšaukimo | Išvalo visus redo įrašus prieš dabartinę padėtį |
| Seniausias įrašas kai pilna | Atmetamas, kad atsirastų vietos naujausiam pakeitimui |

Užfiksuojamas kiekvienas objektų pakeitimas: naujų objektų braižymas, objektų ištrynimas, galų redagavimas rankenėlėmis, Move, Rotate, Scale, Mirror, Trim, Extend ir Offset taikymas — visi sukuria istorijos įrašus.

## Undo ir Redo

| | Undo | Redo |
|---|------|------|
| Kryptis | Juda **atgal** istorija | Juda **pirmyn** atšauktais įrašais |
| Prieinama, kai | Yra bent vienas užfiksuotas veiksmas | Atliktas bent vienas Undo ir neatliktas naujas veiksmas |
| Išvaloma | Niekuo — istorija kaupiasi iki 20 žingsnių ribos | Bet kokiu nauju braižymo veiksmu |

Naudokite [Redo](../redo/), kad pakartotinai pritaikytumėte atšauktą veiksmą. Įrankių juostos mygtukai pilki, kai atitinkama kryptis neprieinama.
