---
title: "Leader−-kommando — Fjern en Pilspissarm fra en Multileader"
description: "Leader−-kommandoen fjerner én pilspissarm fra en multileader som har to eller flere. Hold markøren nær armen du vil fjerne — den nærmeste armen uthevet. Doglegen, teksten og de resterende armene bevares."
keywords: [CAD fjern lederarm, leader--kommando, fjern pil fra leder, slett multileader-arm, kulmanlab]
group: markup
order: 3
---

# Leader−

Kommandoen `leader-` fjerner én pilspissarm fra en eksisterende multileader. Tekstetiketten, doglegen og alle gjenværende armer bevares — kun den valgte armen slettes. En multileader med kun én arm kan ikke få armen sin fjernet.

## Fjerne en arm

1. Skriv `leader-` i terminalen.
2. **Klikk en multileader** som har to eller flere armer. Hvis den klikkede lederen kun har én arm, viser terminalen en feilmelding og venter på en gyldig markering.
3. **Flytt markøren nær armen** du vil fjerne — den nærmeste armen uthevet med en markør.
4. **Klikk** for å fjerne den armen.

Armen fjernes og kommandoen forblir aktiv — du kan umiddelbart klikke en annen leder (eller den samme) for å fjerne flere armer. Trykk **Enter**, **Space** eller **Escape** for å avslutte.

```
  Før:                      Etter:
  ◄── arm 1                 ◄── arm 1
       \                          \
        ●──── dogleg ──── tekst     ●──── dogleg ──── tekst
       /
  arm 2 ──►  ← denne armen fjernet
```

## Hvordan den nærmeste armen avgjøres

Kommandoen måler den vinkelrette avstanden fra markøren til hver arms linjesegmenter (inkludert segmentet fra det siste armpunktet til doglegen). Armen med minst avstand uthevet og vil bli fjernet ved klikk.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Avslutt fjerning av armer |
| `Escape` | Avbryt og tilbakestill |

## Merknader

- En leder med **kun én arm** er beskyttet — du må legge til en arm først før du kan fjerne én.
- Dogleg-posisjonen og tekstinnholdet bevares alltid uansett hvilken arm som fjernes.

## Relaterte kommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [Leader](../leader/) | Opprett en ny multileader fra bunnen av |
| [Leader+](../leader-add/) | Legg til en arm på en eksisterende multileader |
