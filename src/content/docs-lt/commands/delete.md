---
title: Delete komanda — objektų šalinimas iš brėžinio
description: Delete komanda pašalina pasirinktus objektus (galima atšaukti). Iš anksto pasirinkti objektai ištrinami iškart be patvirtinimo žingsnio. Klavišas Delete veikia kaip globalus spartusis klavišas net neaktyvavus komandos. Palaiko pasirinkimą spustelėjimu ir sritimi.
keywords: [CAD delete komanda, objektų šalinimas CAD, CAD objektų trynimas, Delete klavišas CAD, ištrynimo atšaukimas CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Komanda `delete` pašalina pasirinktus objektus iš brėžinio. Ištrynimai įrašomi į [Undo](../undo/) istoriją ir gali būti atšaukti iki 20 žingsnių. Atskiro „patvirtinti ištrynimą" dialogo nėra — patvirtinimas yra vienas klavišo paspaudimas.

## Du būdai ištrinti

**Pirmiausia pasirinkti, tada ištrinti** — greičiausias kelias:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `delete`, spustelėkite įrankių juostos mygtuką **Delete** **arba tiesiog paspauskite klavišą `Delete`**.

Objektai pašalinami iškart — be papildomo patvirtinimo žingsnio.

**Pirmiausia aktyvuoti, tada pasirinkti**:

1. Įveskite `delete` arba spustelėkite įrankių juostos mygtuką (nieko nepasirinkę).
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter**, **Space** arba **Delete**, kad patvirtintumėte ir pašalintumėte pasirinktus objektus.

## Delete klavišo spartusis klavišas

Klaviatūros klavišas `Delete` veikia kaip **globalus spartusis klavišas** — jei šiuo metu pasirinkti kokie nors objektai, jį paspaudus jie iškart ištrinami, net neatvėrus Delete komandos terminale. Tai greičiausias vieno žingsnio ištrynimo procesas:

```
Spustelėti objektą → paspausti Delete → baigta
```

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą į pasirinkimą / iš jo |
| **Tempimas į dešinę** (griežtas) | Pasirenka tik objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Pasirenka objektus, kertančius rėmelio ribą |
| **Enter** / **Space** / **Delete** | Patvirtina ir ištrina pasirinktus objektus |

## Ištrintų objektų atkūrimas

Ištrynimus galima atšaukti komanda [Undo](../undo/) (įveskite `undo` arba naudokite įrankių juostos mygtuką). Kiekvienam failui galima atšaukti iki **20 žingsnių**, o istorija išlieka perkraunant puslapį. Jei viršijote 20 ištrynimų neišsaugoję, ankstesnių ištrynimų atkurti negalima.

## Palaikomi objektai

Delete veikia su kiekvienu objekto tipu — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader ir visais kitais.
