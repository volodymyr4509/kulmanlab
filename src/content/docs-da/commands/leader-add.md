---
title: Leader+-kommando — Tilføj en Pilespidsarm på en Multileader
description: Leader+-kommandoen tilføjer en ny pilespidsarm på en eksisterende multileader. Den nye arm deler dogleg, tekst og al styling med den valgte leder. To klik — vælg lederen, placér den nye spids.
keywords: [CAD tilføj lederarm, leader+-kommando, tilføj pil til leder, multileader-arm, kulmanlab]
group: markup
order: 2
---

# Leader+

Kommandoen `leader+` tilføjer en ny pilespidsarm på en eksisterende multileader. Den nye arm peger fra lederens eksisterende dogleg til en ny pilespids, du klikker. Al styling — dogleg-position, tekst, pilespidstype og størrelse — arves fra den valgte leder.

## Tilføje en arm

1. Skriv `leader+` i terminalen.
2. **Klik en eksisterende multileader** for at vælge den.
3. **Klik den nye pilespids**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat. En forhåndsvisningslinje vises fra markøren til lederens dogleg.

Armen placeres, og kommandoen forbliver aktiv — du kan straks klikke en anden leder for at tilføje flere arme. Tryk **Enter**, **Space** eller **Escape** for at afslutte.

```
  Før:                            Efter:
  ◄── arm 1                      ◄── arm 1
       \                               \
        ●──── dogleg ──── tekst          ●──── dogleg ──── tekst
                                       /
                                  arm 2 ──►  (ny spids du klikkede)
```

## Koordinatindtastning for spidsen

I stedet for at klikke kan du indtaste en eksakt position:

1. Skriv X-værdien.
2. Tryk `,` — terminalen bekræfter, at X er låst.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Begynd at skrive X-koordinat |
| `,` | Lås X og gå til Y-indtastning |
| `Enter` | Bekræft indtastet koordinat og placér armen |
| `Enter` / `Space` | Afslut (når ingen indtastning er i gang) |
| `Escape` | Annullér og nulstil |

## Bemærkninger

- Kun **Multileader**-entiteter kan markeres — at klikke enhver anden entitetstype gør ingenting.
- Den nye arm udgår fra den eksisterende dogleg; du vælger kun, hvor pilespidsen skal gå.
- Der er ingen grænse for, hvor mange arme en multileader kan have.

## Relaterede kommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Leader](../leader/) | Opret en helt ny multileader fra bunden |
| [Leader−](../leader-remove/) | Fjern en arm fra en multileader der har to eller flere |
