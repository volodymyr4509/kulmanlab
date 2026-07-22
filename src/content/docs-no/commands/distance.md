---
title: Distance — Mål Rett Linjeavstand mellom To Punkter
description: Distance-kommandoen måler den euklidske avstanden mellom to klikkede punkter og viser resultatet med 4 desimaler. Klikk igjen etter resultatet for å kjede en ny måling fra det siste punktet.
keywords: [CAD mål avstand, distance-kommando, punkt-til-punkt-måling, rett linjeavstand, kulmanlab CAD-måling]
group: measure
order: 1
---

# Distance

Kommandoen `distance` måler den rette (euklidske) avstanden mellom to klikkede punkter og skriver ut resultatet i terminalen med 4 desimaler. Det er én av tre målekommandoer — [Angle](../angle/) måler vinkelåpningen ved et toppunkt, og [Area](../area/) måler omsluttet areal og omkrets av en polygon.

## Anatomien til en avstandsmåling

```
  ● første punkt
   \
    \  forhåndsvisningslinje (live)
     \
      ● andre punkt    →  terminal: "Distance: 12.3456"
```

- **Første punkt** — opprinnelsen til målingen.
- **Andre punkt** — endepunktet; å plassere det skriver ut resultatet umiddelbart.
- **Resultat** — vises i terminalen, plasseres ikke på lerretet.

## Måle en avstand

1. Skriv `distance` i terminalen eller klikk på **Distance**-knappen i verktøylinjen.
2. **Klikk det første punktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk det andre punktet** — den målte avstanden vises i terminalen. Koordinatinntasting fungerer også her.
4. **Klikk igjen** (valgfritt) for å starte en ny måling. Kommandoen forblir aktiv.

Trykk `Escape` når som helst for å tilbakestille til steg 2.

## Kjede målinger

Etter at resultatet vises, starter et nytt klikk umiddelbart den neste målingen — det klikkede punktet blir det nye første punktet. Dette lar deg måle en rekke avstander uten å reaktivere kommandoen.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Hva den måler | Rett linjelengde | Innvendig vinkel ved et toppunkt |
| Antall klikk | 2 | 3 |
| Resultatformat | `12.3456` (enheter) | `45.0000°` |
| Forhåndsvisning på lerret | Linje fra første punkt til markøren | To linjer fra toppunktet til markøren |
| Best til | Lengden på et mellomrom eller segment | Åpningsvinkel mellom to elementer |

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for et av punktene:

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
| `Enter` | Bekreft inntastet koordinat |
| `Escape` | Avbryt og tilbakestill til steg 2 |

## Merknader

- Resultater vises **kun i terminalen** — ingenting legges til i tegningen.
- Resultatet uttrykkes i samme enheter som tegningens koordinater (ingen enhetskonvertering).
- Presisjonen er alltid 4 desimaler.
