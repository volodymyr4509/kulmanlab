---
title: Leader+-kommando — Legg til en Pilspissarm på en Multileader
description: Leader+-kommandoen legger til en ny pilspissarm på en eksisterende multileader. Den nye armen deler dogleg, tekst og all styling med den valgte lederen. To klikk — velg lederen, plasser den nye spissen.
keywords: [CAD legg til lederarm, leader+-kommando, legg til pil på leder, multileader-arm, kulmanlab]
group: markup
order: 2
---

# Leader+

Kommandoen `leader+` legger til en ny pilspissarm på en eksisterende multileader. Den nye armen peker fra lederens eksisterende dogleg til en ny pilspiss du klikker. All styling — dogleg-posisjon, tekst, pilspisstype og størrelse — arves fra den valgte lederen.

## Legge til en arm

1. Skriv `leader+` i terminalen.
2. **Klikk en eksisterende multileader** for å velge den.
3. **Klikk den nye pilspissen**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat. En forhåndsvisningslinje vises fra markøren til lederens dogleg.

Armen plasseres og kommandoen forblir aktiv — du kan umiddelbart klikke en annen leder for å legge til flere armer. Trykk **Enter**, **Space** eller **Escape** for å avslutte.

```
  Før:                            Etter:
  ◄── arm 1                      ◄── arm 1
       \                               \
        ●──── dogleg ──── tekst          ●──── dogleg ──── tekst
                                       /
                                  arm 2 ──►  (ny spiss du klikket)
```

## Koordinatinntasting for spissen

I stedet for å klikke kan du skrive inn en eksakt posisjon:

1. Skriv X-verdien.
2. Trykk `,` — terminalen bekrefter at X er låst.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Begynn å skrive X-koordinat |
| `,` | Lås X og gå til Y-inntasting |
| `Enter` | Bekreft inntastet koordinat og plasser armen |
| `Enter` / `Space` | Avslutt (når ingen inntasting pågår) |
| `Escape` | Avbryt og tilbakestill |

## Merknader

- Kun **Multileader**-entiteter kan markeres — å klikke enhver annen entitetstype gjør ingenting.
- Den nye armen starter ved den eksisterende doglegen; du velger kun hvor pilspissen skal gå.
- Det er ingen grense for hvor mange armer en multileader kan ha.

## Relaterte kommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Leader](../leader/) | Opprett en helt ny multileader fra bunnen av |
| [Leader−](../leader-remove/) | Fjern en arm fra en multileader som har to eller flere |
