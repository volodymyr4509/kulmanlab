---
title: Dimension Aligned-kommando — Sande Afstandsmål i Enhver Vinkel
description: Dimension Aligned-kommandoen måler den sande retlinede afstand mellem to punkter. Mållinjen løber parallelt med linjen p1→p2 i en hvilken som helst vinkel — i modsætning til Dimension Linear, som er begrænset til horisontalt eller vertikalt. Fuld DXF-rundtur som DIMENSION-entiteter.
keywords: [CAD dimension aligned, dimaligned, diagonalt mål CAD, sandt afstandsmål, vinklet mål CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Kommandoen `dimaligned` placerer et mål, der måler den **sande retlinede afstand** mellem to punkter. Mållinjen løber parallelt med linjen, der forbinder de to punkter, så den kan være i en hvilken som helst vinkel. Dette er den centrale forskel fra [Dimension Linear](../dim-linear/), som er begrænset til horisontalt eller vertikalt.

## Anatomien af et justeret mål

```
     ●  p2
    /|
   / |  (hjælpelinje 2, vinkelret på mållinjen)
  /  |
 /←5.00→/
/  /
●  /  (hjælpelinje 1, vinkelret på mållinjen)
p1
```

- **Hjælpelinjer** — vinkelrette på mållinjen, tegnet fra hvert målte punkt.
- **Mållinje** — parallel med p1→p2, forskudt til den ene side efter markørposition.
- **Værdi** — den sande euklidiske afstand `|p1 – p2|`.

## Placere et justeret mål

1. Skriv `dimaligned` i terminalen eller klik på **Dimension Aligned**-knappen i værktøjslinjen.
2. **Klik oprindelsen af den første hjælpelinje** (p1), eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik oprindelsen af den anden hjælpelinje** (p2). Koordinatindtastning fungerer også her.
4. **Flyt markøren** til den ene side for at sætte den vinkelrette forskydning af mållinjen.
5. **Klik** for at placere, eller skriv en forskydningsafstand og tryk **Enter** for præcis placering.

## Indtastet forskydningsafstand

Skriv et tal under placering for at fastgøre mållinjen ved en eksakt vinkelret afstand fra linjen p1→p2:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til forskydningen |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` / `Space` | Placér ved den indtastede forskydning |

Markørsiden afgør, hvilken side mållinjen vises på.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning (p1/p2-faserne), eller forskydningsafstand (placeringsfasen) |
| `,` | Lås X og gå til Y-indtastning (p1/p2-faserne) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` / `Space` | Bekræft indtastet koordinat eller forskydning |
| `Escape` | Annullér |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Mållinjevinkel | Parallel med p1→p2 — enhver vinkel | Altid horisontalt eller vertikalt |
| Måler | Sand euklidisk afstand | Kun X- eller Y-komponent |
| H/V-retningslås | Nej | Ja — `H`- og `V`-tasterne |
| Bedst til | Diagonale elementer, vinklede snit | Ortogonale layouts, gittertilpassede dele |

## Redigere etiketten — simpel tilstand

**Dobbeltklik** et placeret justeret mål for at åbne teksteditoren i **simpel** tilstand. Editoren er forudfyldt med den aktuelle gengivne værdi, så du kan placere markøren og redigere den direkte.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | Bekræfter værdien og lukker editoren |
| Flerlinje | Understøttes ikke |

Se [Tekstredigering — simpel tilstand](../../interface/text-editor/#simple-mode) for den fulde reference.

## Kæde mål

For at tilføje flere mål, der fortsætter fra den anden hjælpelinje til dette, brug [Dimension Continue](../dim-continue/) — den låser til den samme målevinkel som dette justerede mål.

## DXF — DIMENSION-entitet (justeret type)

Justerede mål gemmes som `DIMENSION`-entiteter med `dimType = 1` (aligned). Hjælpelinje-oprindelser, mållinjeposition, tekstposition, målt værdi, rotation, pilstil og alle visningsflag overlever en rundtur uden tab.
