---
title: LayerMakeCurrent — objekto sluoksnio padarymas dabartiniu
description: LayerMakeCurrent komanda nustato dabartinį braižymo sluoksnį pagal spustelėto objekto sluoksnį.
keywords: [sluoksnio padarymas dabartiniu, dabartinis sluoksnis CAD, kulmanlab sluoksnių valdymas]
group: layer
order: 2
---

# LayerMakeCurrent

Komanda `LayerMakeCurrent` nustato **dabartinį braižymo sluoksnį** pagal sluoksnį, kuriam priklauso spustelėtas objektas. Nauji objektai tada bus braižomi šiame sluoksnyje automatiškai.

## Naudojimas

1. Terminale įveskite `LayerMakeCurrent` arba spustelėkite įrankių juostos mygtuką **Make Current** (lašintuvo piktograma).
2. **Spustelėkite bet kurį objektą** drobėje.
3. Dabartinis sluoksnis pakeičiamas pagal to objekto sluoksnį. Komanda iškart baigiasi.

## Elgsenos detalės

- Jei spustelėjate ant tuščios drobės (nepataikote į jokį objektą), terminalas parodo `no object found`, o komanda lieka aktyvi, kad galėtumėte bandyti dar kartą.
- Keičiamas tik dabartinio sluoksnio nustatymas — jokie objektai nekeičiami.
- Atnaujintas sluoksnis atsispindi įrankių juostos sluoksnio pasirinkiklyje.
