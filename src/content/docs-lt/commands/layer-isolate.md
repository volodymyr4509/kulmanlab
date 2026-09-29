---
title: LayerIsolate — visų sluoksnių, išskyrus pasirinktus, užšaldymas KulmanLab CAD
description: LayerIsolate komanda užšaldo kiekvieną sluoksnį, išskyrus tuos, kuriuos naudoja pasirinkti objektai, leisdama susikoncentruoti į konkrečią geometriją nieko neištrinant.
keywords: [sluoksnio izoliavimas, sluoksnių užšaldymas CAD, izoliuoti sluoksnį kulmanlab, CAD sluoksnių valdymas]
group: layer
order: 4
---

# LayerIsolate

Komanda `LayerIsolate` užšaldo kiekvieną sluoksnį **išskyrus** tuos, kuriems priklauso pasirinkti objektai. Naudokite ją, kad greitai susikoncentruotumėte į konkrečią geometriją nieko nuolat neslėpdami ir netrindami — baigę atšildykite su [LayerUnfreezeAll](../layer-unfreeze-all/).

## Du būdai pradėti

**Pirmiausia pasirinkti, tada izoliuoti** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `LayerIsolate` arba spustelėkite įrankių juostos mygtuką **Layer Isolate**.
3. Pasirinktų objektų sluoksniai lieka matomi; visi kiti iškart užšaldomi.

**Pirmiausia aktyvuoti, tada pasirinkti**:

1. Įveskite `LayerIsolate` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite atskirus objektus arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte — pritaikomas izoliavimas.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą ir pritaiko izoliavimą |
| `Escape` | Atšaukia ir išvalo pasirinkimą |

## Elgsenos detalės

- Visi sluoksniai, kurie pasirinkime **nėra** atstovaujami, nustatomi kaip užšaldyti.
- Sluoksniai, kurie **yra** atstovaujami, lieka neužšaldyti, net jei anksčiau buvo užšaldyti.
- Pritaikius izoliavimą pasirinkimas išvalomas.
- Komanda po pritaikymo užsibaigia automatiškai.

## Izoliavimo atšaukimas

Paleiskite [LayerUnfreezeAll](../layer-unfreeze-all/), kad vienu žingsniu visus sluoksnius vėl padarytumėte matomus.
