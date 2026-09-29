---
title: Wipe Storage komanda — visų naršyklės duomenų išvalymas KulmanLab CAD
description: wipestorage komanda visam laikui ištrina visus naršyklėje išsaugotus failus, sluoksnius, linijų tipus ir undo istoriją. Patvirtinimui reikia įvesti YES. Naudokite, kai reikia atstatyti sugadintą ar perpildytą vietinę duomenų bazę.
keywords: [CAD wipe storage, naršyklės duomenų išvalymas CAD, CAD programos atstatymas, vietinių failų ištrynimas CAD, kulmanlab wipestorage]
group: file
order: 7
---

# Wipe Storage

Komanda `wipestorage` visam laikui ištrina **visus naršyklėje saugomus duomenis** KulmanLab CAD — kiekvieną išsaugotą failą, sluoksnių ir linijų tipų lenteles bei undo istoriją. Vėliau puslapis automatiškai perkraunamas.

:::danger Negrįžtama
Šio veiksmo atšaukti negalima. Visi naršyklėje saugomi failai ištrinami. Prieš paleisdami šią komandą, eksportuokite brėžinius, kuriuos norite išsaugoti, kaip `.json` ar `.dxf` failus.
:::

## Kada naudoti

- Naršyklės saugykla sugadinta ir programa nepavyksta įkelti ar išsaugoti failų.
- Norite visiškai atstatyti programą į švarią būseną.
- Keičiate naršykles ar įrenginius ir vietinės kopijos daugiau nebereikia.

## Kaip paleisti

1. Terminale įveskite `wipestorage` ir paspauskite **Enter**.
2. Terminalas klausia: *Wipe all browser local storage? Type YES to confirm*
3. Įveskite `YES` (bet kokia raidžių didžiąja/mažąja) ir paspauskite **Enter**.

Programa ištrina duomenų bazę ir perkrauna puslapį. Jei įvedate ką nors kita nei `YES` ir paspaudžiate **Enter**, arba paspaudžiate **Escape**, komanda atšaukiama ir nieko neištrinama.

## Kas ištrinama

| Duomenys | Ištrinama |
|----------|-----------|
| Visi naršyklėje išsaugoti failai | Taip |
| Kiekvieno failo sluoksnių ir linijų tipų lentelės | Taip |
| Kiekvieno failo undo / redo istorija | Taip |

Paveikiami tik **šioje naršyklėje** vietoje saugomi duomenys. Failai, kuriuos jau eksportavote kaip `.json` ar `.dxf`, nepaliečiami.
