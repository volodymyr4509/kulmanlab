---
title: Angle — Mål Innvendig Vinkel ved et Toppunkt med Tre Punkter
description: Angle-kommandoen måler innvendig vinkel (0°–180°) ved et toppunkt definert av tre klikkede punkter. Klikk første ende, toppunkt, andre ende. Resultatet vises i terminalen med 4 desimaler.
keywords: [CAD vinkelmåling, trepunktsvinkel, innvendig vinkel CAD, mål vinkel-kommando, toppunktsvinkel, kulmanlab]
group: measure
order: 2
---

# Angle

Kommandoen `angle` måler innvendig vinkel ved et toppunkt dannet av to linjesegmenter gjennom tre klikkede punkter. Resultatet — alltid mellom 0° og 180° — vises i terminalen med 4 desimaler. Det er én av tre målekommandoer — [Distance](../distance/) måler rett linjelengde, og [Area](../area/) måler omsluttet areal og omkrets for en polygon.

## Anatomien til en vinkelmåling

```
  ● første punkt (enden av første stråle)
   \
    \  forhåndsvisning av første stråle
     \
      ● toppunkt (steg 3)
     /
    /  forhåndsvisning av andre stråle (til markøren)
   /
  ● tredje punkt  →  terminal: "Angle: 45.0000°"
```

- **Første punkt** — den ene enden av vinkelen (steg 2).
- **Toppunkt** — hjørnet der vinkelen måles (steg 3).
- **Tredje punkt** — den andre enden av vinkelen (steg 4).

## Måle en vinkel

1. Skriv `angle` i terminalen eller klikk på **Angle**-knappen i verktøylinjen.
2. **Klikk det første punktet** — den ene armenden av vinkelen. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk toppunktet** — hjørnet der de to armene møtes. Koordinatinntasting fungerer også her.
4. **Klikk det tredje punktet** — den andre armenden. Koordinatinntasting fungerer også her. Å plassere dette punktet skriver ut resultatet.
5. **Klikk igjen** (valgfritt) for å starte en ny måling fra det klikket som det nye første punktet.

## Konvensjon for innvendig vinkel

Kommandoen beregner vinkelen ved hjelp av skalarproduktet av de to strålene fra toppunktet:

- **Alltid innvendig**: resultatet er den minste vinkelen, mellom 0° og 180°.
- Rekkefølgen du klikker endepunktene i påvirker ikke resultatet — kun toppunktets posisjon betyr noe.
- Kollineære punkter (alle tre på én linje) gir 0° eller 180°.

## Kjede målinger

Etter at resultatet vises, starter et nytt klikk umiddelbart den neste målingen — det klikkede punktet blir det nye første punktet. Kommandoen avsluttes aldri automatisk før du trykker `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Hva den måler | Innvendig vinkel ved et toppunkt | Rett linjelengde |
| Antall klikk | 3 | 2 |
| Resultatformat | `45.0000°` | `12.3456` (enheter) |
| Forhåndsvisning på lerret | To linjer fra toppunktet til begge endene | Linje fra første punkt til markøren |
| Best til | Åpningsvinkel mellom to elementer | Lengden på et mellomrom eller segment |

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for noen av de tre punktene:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft skrevet koordinat |
| `Escape` | Avbryt og gå tilbake til steg 2 |

## Merknader

- Resultater vises **kun i terminalen** — ingenting legges til i tegningen.
- Presisjonen er alltid 4 desimaler i grader.
