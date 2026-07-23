---
title: Distance — Mål Ret Linjeafstand mellem To Punkter
description: Distance-kommandoen måler den euklidiske afstand mellem to klikkede punkter og viser resultatet med 4 decimaler. Klik igen efter resultatet for at kæde en ny måling fra det sidste punkt.
keywords: [CAD mål afstand, distance-kommando, punkt-til-punkt-måling, ret linjeafstand, kulmanlab CAD-måling]
group: measure
order: 1
---

# Distance

Kommandoen `distance` måler den rette (euklidiske) afstand mellem to klikkede punkter og udskriver resultatet i terminalen med 4 decimaler. Det er én af tre målekommandoer — [Angle](../angle/) måler vinkelåbningen ved et toppunkt, og [Area](../area/) måler det omsluttede areal og omkredsen af en polygon.

## Anatomien af en afstandsmåling

```
  ● første punkt
   \
    \  forhåndsvisningslinje (live)
     \
      ● andet punkt    →  terminal: "Distance: 12.3456"
```

- **Første punkt** — oprindelsen af målingen.
- **Andet punkt** — endepunktet; at placere det udskriver resultatet straks.
- **Resultat** — vises i terminalen, ikke placeret på lærredet.

## Måle en afstand

1. Skriv `distance` i terminalen eller klik på **Distance**-knappen i værktøjslinjen.
2. **Klik det første punkt**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik det andet punkt** — den målte afstand vises i terminalen. Koordinatindtastning fungerer også her.
4. **Klik igen** (valgfrit) for at starte en ny måling. Kommandoen forbliver aktiv.

Tryk `Escape` når som helst for at nulstille til trin 2.

## Kæde målinger

Efter at resultatet vises, starter et nyt klik straks den næste måling — det klikkede punkt bliver det nye første punkt. Dette lader dig måle en række afstande uden at genaktivere kommandoen.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Hvad den måler | Ret linjelængde | Indvendig vinkel ved et toppunkt |
| Antal klik | 2 | 3 |
| Resultatformat | `12.3456` (enheder) | `45.0000°` |
| Forhåndsvisning på lærred | Linje fra første punkt til markøren | To linjer fra toppunktet til markøren |
| Bedst til | Længden af et mellemrum eller segment | Åbningsvinkel mellem to elementer |

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for et af punkterne:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat |
| `Escape` | Annullér og nulstil til trin 2 |

## Bemærkninger

- Resultater vises **kun i terminalen** — der tilføjes intet til tegningen.
- Resultatet udtrykkes i de samme enheder som tegningens koordinater (ingen enhedskonvertering).
- Præcisionen er altid 4 decimaler.
