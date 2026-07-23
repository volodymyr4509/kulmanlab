---
title: "Leader−-kommando — Fjern en Pilespidsarm fra en Multileader"
description: "Leader−-kommandoen fjerner én pilespidsarm fra en multileader der har to eller flere. Hold markøren nær armen du vil fjerne — den nærmeste arm fremhæves. Doglegen, teksten og de resterende arme bevares."
keywords: [CAD fjern lederarm, leader--kommando, fjern pil fra leder, slet multileader-arm, kulmanlab]
group: markup
order: 3
---

# Leader−

Kommandoen `leader-` fjerner én pilespidsarm fra en eksisterende multileader. Tekstetiketten, doglegen og alle resterende arme bevares — kun den valgte arm slettes. En multileader med kun én arm kan ikke få sin arm fjernet.

## Fjerne en arm

1. Skriv `leader-` i terminalen.
2. **Klik en multileader**, der har to eller flere arme. Hvis den klikkede leder kun har én arm, viser terminalen en fejl og venter på en gyldig markering.
3. **Flyt markøren nær den arm**, du vil fjerne — den nærmeste arm fremhæves med en markør.
4. **Klik** for at fjerne den arm.

Armen fjernes, og kommandoen forbliver aktiv — du kan straks klikke en anden leder (eller den samme) for at fjerne flere arme. Tryk **Enter**, **Space** eller **Escape** for at afslutte.

```
  Før:                      Efter:
  ◄── arm 1                 ◄── arm 1
       \                          \
        ●──── dogleg ──── tekst     ●──── dogleg ──── tekst
       /
  arm 2 ──►  ← denne arm fjernet
```

## Hvordan den nærmeste arm bestemmes

Kommandoen måler den vinkelrette afstand fra markøren til hver arms linjesegmenter (inklusive segmentet fra det sidste armpunkt til doglegen). Armen med den mindste afstand fremhæves og vil blive fjernet ved klik.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Afslut fjernelse af arme |
| `Escape` | Annullér og nulstil |

## Bemærkninger

- En leder med **kun én arm** er beskyttet — du skal tilføje en arm først, før du kan fjerne én.
- Dogleg-positionen og tekstindholdet bevares altid uanset hvilken arm der fjernes.

## Relaterede kommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Leader](../leader/) | Opret en ny multileader fra bunden |
| [Leader+](../leader-add/) | Tilføj en arm på en eksisterende multileader |
