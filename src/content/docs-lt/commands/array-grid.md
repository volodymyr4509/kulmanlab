---
title: Array Grid komanda — objektų kartojimas eilutėmis ir stulpeliais
description: Array Grid komanda sukuria stačiakampį kopijų tinklelį iš pasirinktų objektų — eilučių, stulpelių skaičių ir atstumus tarp jų įveskite tiesiai terminale, taškų rinkti nereikia.
keywords: [CAD masyvo komanda, arraygrid, stačiakampis masyvas CAD, tinklelio raštas CAD, objektų kartojimas CAD, kopijų masyvas CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Komanda `ArrayGrid` sukuria stačiakampį kopijų tinklelį iš pasirinktų objektų — įveskite eilučių skaičių, stulpelių skaičių ir atstumus tarp jų, viską renkant terminale. Pradinis pasirinkimas užima 0 eilutės, 0 stulpelio langelį; kiekvienas kitas langelis yra perkelta kopija.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada kurti masyvą** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `arraygrid` (pakanka ir `arr` — tai nedviprasmiška) arba spustelėkite įrankių juostos mygtuką **Array Grid**.
3. Įveskite **eilučių** skaičių ir paspauskite **Enter**.
4. Įveskite **stulpelių** skaičių ir paspauskite **Enter**.
5. Įveskite **atstumą tarp eilučių** ir paspauskite **Enter**.
6. Įveskite **atstumą tarp stulpelių** ir paspauskite **Enter** — tinklelis sukuriamas iškart.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `arraygrid` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte atskirus objektus, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. Tęskite eilutės → stulpeliai → eilučių atstumas → stulpelių atstumas, kaip aukščiau.

```
  2 eilutės x 3 stulpeliai:

  [B] [B] [B]   <- 1 eilutė (perkeltos kopijos)
  [A] [A] [A]   <- 0 eilutė: pradinis pasirinkimas, kopijos į dešinę
```

> Terminalui pakanka tiek raidžių, kad būtų nedviprasmiška — įvedus `arr` ir paspaudus **Enter**, Array Grid aktyvuojamas tiesiogiai, nes jokia kita komandos pavadinimo pradžia nesutampa su tomis trimis raidėmis (Arc, Area, Align ir Angle išsiskiria anksčiau).

## Eilutės, stulpeliai ir atstumai

| Raginimas | Priima | Pastabos |
|-----------|--------|----------|
| Eilutės | Teigiamus sveikuosius skaičius (1, 2, 3…) | Tik skaitmenys — be kablelio ar ženklo |
| Stulpeliai | Teigiamus sveikuosius skaičius (1, 2, 3…) | Tik skaitmenys — be kablelio ar ženklo |
| Eilučių atstumas | Ženklinį dešimtainį skaičių (pvz., `10`, `-5.5`) | Atstumas tarp eilučių; neigiamas apverčia kryptį |
| Stulpelių atstumas | Ženklinį dešimtainį skaičių (pvz., `10`, `-5.5`) | Atstumas tarp stulpelių; neigiamas apverčia kryptį |

Su 1 eilute ir 1 stulpeliu kopijos nesukuriamos — komanda išeina nepakeitusi brėžinio.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą ir pereina prie eilučių raginimo |
| `0`–`9` | Įveda skaitmenis eilutėms ar stulpeliams |
| `0`–`9`, `.`, `-` | Įveda skaitmenis eilučių/stulpelių atstumui (`-` tik kaip pirmas simbolis) |
| `Backspace` | Ištrina paskutinį dabartinio raginimo simbolį |
| `Enter` | Patvirtina dabartinį raginimą ir pereina prie kito |
| `Escape` | Išvalo įvestas eilučių/stulpelių/atstumų reikšmes ir grįžta į pasirinkimo fazę |

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą į pasirinkimą / iš jo |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelio ribą |
| **Enter** / **Space** | Patvirtina pasirinkimą ir pereina prie eilučių raginimo |

## Po masyvo sukūrimo

Naujos kopijos pridedamos į brėžinį ir komanda išeina — pradinis pasirinkimas išvalomas. Vėl paleiskite **Array Grid** arba pradėkite naują komandą.

## Array Grid ir Copy

| | Array Grid | Copy |
|---|-----------|------|
| Taškų rinkimas | Jokio — eilutės, stulpeliai ir atstumai įvedami | Bazinis taškas ir paskirtis spustelimi (ar įvedami) |
| Sukuriamos kopijos | Eilutės × stulpeliai − 1 | Tiksliai 1 kiekvienam kopijavimo veiksmui |
| Išdėstymas | Taisyklingas stačiakampis tinklelis | Bet kur, bet kokiu poslinkiu |
| Geriausiai tinka | Vieneto kartojimui taisyklingu raštu (skylės, plytelės, tvirtinimo detalės) | Vienam dublikatui savavališkoje vietoje |

## Palaikomi objektai

Array Grid veikia su kiekvienu objekto tipu. Visi objektai viduje įgyvendina `translate(dx, dy)` — tą pačią operaciją, kurią naudoja [Copy](../copy/) ir [Move](../move/), todėl nieko neišskiriama.
