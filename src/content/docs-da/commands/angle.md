---
title: Angle — Mål Indvendig Vinkel ved et Toppunkt med Tre Punkter
description: Angle-kommandoen måler indvendig vinkel (0°–180°) ved et toppunkt defineret af tre klikkede punkter. Klik første ende, toppunkt, anden ende. Resultatet vises i terminalen med 4 decimaler.
keywords: [CAD vinkelmåling, trepunktsvinkel, indvendig vinkel CAD, mål vinkel-kommando, toppunktsvinkel, kulmanlab]
group: measure
order: 2
---

# Angle

Kommandoen `angle` måler den indvendige vinkel ved et toppunkt dannet af to linjesegmenter gennem tre klikkede punkter. Resultatet — altid mellem 0° og 180° — vises i terminalen med 4 decimaler. Det er én af tre målekommandoer — [Distance](../distance/) måler ret linjelængde, og [Area](../area/) måler det omsluttede areal og omkredsen af en polygon.

## Anatomien af en vinkelmåling

```
  ● første punkt (enden af første stråle)
   \
    \  forhåndsvisning af første stråle
     \
      ● toppunkt (trin 3)
     /
    /  forhåndsvisning af anden stråle (til markøren)
   /
  ● tredje punkt  →  terminal: "Angle: 45.0000°"
```

- **Første punkt** — den ene ende af vinklen (trin 2).
- **Toppunkt** — hjørnet hvor vinklen måles (trin 3).
- **Tredje punkt** — den anden ende af vinklen (trin 4).

## Måle en vinkel

1. Skriv `angle` i terminalen eller klik på **Angle**-knappen i værktøjslinjen.
2. **Klik det første punkt** — den ene armende af vinklen. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik toppunktet** — hjørnet hvor de to arme mødes. Koordinatindtastning fungerer også her.
4. **Klik det tredje punkt** — den anden armende. Koordinatindtastning fungerer også her. At placere dette punkt udskriver resultatet.
5. **Klik igen** (valgfrit) for at starte en ny måling fra det klik som det nye første punkt.

## Konvention for indvendig vinkel

Kommandoen beregner vinklen ved hjælp af prikproduktet af de to stråler fra toppunktet:

- **Altid indvendig**: resultatet er den mindste vinkel, mellem 0° og 180°.
- Rækkefølgen du klikker endepunkterne i påvirker ikke resultatet — kun toppunktets position betyder noget.
- Kollineære punkter (alle tre på én linje) giver 0° eller 180°.

## Kæde målinger

Efter at resultatet vises, starter et nyt klik straks den næste måling — det klikkede punkt bliver det nye første punkt. Kommandoen afsluttes aldrig automatisk før du trykker `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Hvad den måler | Indvendig vinkel ved et toppunkt | Ret linjelængde |
| Antal klik | 3 | 2 |
| Resultatformat | `45.0000°` | `12.3456` (enheder) |
| Forhåndsvisning på lærred | To linjer fra toppunktet til begge ender | Linje fra første punkt til markøren |
| Bedst til | Åbningsvinkel mellem to elementer | Længden af et mellemrum eller segment |

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for et af de tre punkter:

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
- Præcisionen er altid 4 decimaler i grader.
