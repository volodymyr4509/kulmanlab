---
title: Redo komanda — atšauktų veiksmų grąžinimas KulmanLab CAD
description: Redo komanda pakartotinai pritaiko paskutinį veiksmą, atšauktą Undo, judėdama pirmyn istorijos kaminu. Redo prieinama tik po Undo ir išvaloma, kai tik atliekamas bet koks naujas braižymo veiksmas.
keywords: [CAD redo komanda, redo istorija CAD, veiksmo grąžinimas CAD, undo redo CAD, naršyklėje išliekantis redo, kulmanlab]
group: edit
order: 14
---

# Redo

Komanda `redo` juda pirmyn atšaukimo istorija, pakartotinai pritaikydama veiksmus, atšauktus [Undo](../undo/). Redo prieinama tik tada, kai grįžote atgal su Undo ir dar neatlikote naujo pakeitimo.

## Kaip grąžinti

- Terminale įveskite `redo`, arba
- spustelėkite įrankių juostos mygtuką **Redo**.

Kiekvienas iškvietimas pakartotinai pritaiko vieną anksčiau atšauktą veiksmą. Iškvieskite kelis kartus, kad judėtumėte pirmyn per visus prieinamus redo įrašus.

## Redo kamino elgsena

| Detalė | Elgsena |
|--------|---------|
| Prieinama po | Vieno ar kelių [Undo](../undo/) žingsnių |
| Išvaloma | **Bet kokiu nauju braižymo veiksmu** — objekto pridėjimu, redagavimu ar ištrynimu |
| Saugykla | Naršyklė, kiekvienam failui atskirai — išlieka perkraunant puslapį (jei prieš perkrovimą nebuvo atliktas naujas veiksmas) |
| Didžiausias gylis | Iki 20 įrašų (tas pats fondas kaip Undo) |

Nubraižius, ištrynus ar pakeitus objektą, redo kaminas išvaloma ir tų įrašų atkurti negalima. Grąžinti galima tik atšauktus veiksmus, kurių nepakeitė naujas darbas.

## Redo ir Undo

| | Redo | Undo |
|---|------|------|
| Kryptis | Juda **pirmyn** atšauktais įrašais | Juda **atgal** istorija |
| Prieinama, kai | Po bent vieno Undo, be naujo veiksmo | Yra bent vienas užfiksuotas veiksmas |
| Išvaloma | Bet kokiu nauju braižymo veiksmu | Niekuo |

Įrankių juostos Redo mygtukas pilkas, kai nėra ką grąžinti. Pirmiausia naudokite [Undo](../undo/), kad sukurtumėte redo įrašus.
