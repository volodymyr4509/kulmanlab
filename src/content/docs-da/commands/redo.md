---
title: Redo-kommando — Gentag Fortrudte Handlinger i KulmanLab CAD
description: Redo-kommandoen genanvender den seneste handling reverseret af Undo, og bevæger sig fremad gennem historikstakken. Redo er kun tilgængelig efter en Undo og ryddes i det øjeblik en ny tegnehandling udføres.
keywords: [CAD redo-kommando, redo-historik CAD, genanvend handling CAD, fortryd gentag CAD, browser vedvarende redo, kulmanlab]
group: edit
order: 14
---

# Redo

Kommandoen `redo` bevæger sig fremad gennem fortryd-historikken og genanvender handlinger, der blev reverseret af [Undo](../undo/). Redo er kun tilgængelig, når du har trådt tilbage med Undo og endnu ikke har foretaget en ny ændring.

## Sådan gør du om

- Skriv `redo` i terminalen, eller
- Klik på **Redo**-knappen i værktøjslinjen.

Hver kaldelse genanvender én tidligere fortrudt handling. Kald den gentagne gange for at bevæge dig fremad gennem alle tilgængelige gør om-poster.

## Redo-stakkens adfærd

| Detalje | Adfærd |
|--------|-----------|
| Tilgængelig efter | Ét eller flere [Undo](../undo/)-trin |
| Ryddes af | **Enhver ny tegnehandling** — tilføjelse, redigering eller sletning af en entitet |
| Lagring | Browser, pr. fil — overlever sideindlæsning (så længe ingen ny handling blev foretaget før genindlæsning) |
| Maksimal dybde | Op til 20 poster (samme pool som Undo) |

Når en ny entitet tegnes, slettes eller ændres, ryddes gør om-stakken, og de poster kan ikke gendannes. Kun fortrudte handlinger, der ikke er overskrevet af nyt arbejde, kan gøres om.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Retning | Bevæger sig **fremad** gennem fortrudte poster | Bevæger sig **bagud** gennem historikken |
| Tilgængelig når | Efter mindst én Undo, uden ny handling foretaget | Mindst én registreret handling findes |
| Ryddes af | Enhver ny tegnehandling | Ingenting |

Redo-knappen i værktøjslinjen er nedtonet, når der ikke er poster at gøre om. Brug [Undo](../undo/) først for at oprette gør om-poster.
