---
title: Align — Flytt, Roter og Skaler Entiteter med Punktpar
description: Align-kommandoen omplasserer markerte entiteter ved hjelp av ett eller to par kilde-/målpunkter, og kombinerer flytting, rotasjon og valgfri jevn skalering i én enkelt operasjon. Fungerer som en kombinert Move + Rotate + Scale.
keywords: [CAD align-kommando, justere entiteter CAD, flytte rotere skalere, punktparjustering, alternativ til desktop-CAD ALIGN, kulmanlab]
group: edit
order: 6
---

# Align

Kommandoen `align` omplasserer markerte entiteter ved hjelp av ett eller to par kilde-/målpunkter. Med ett par oppfører den seg akkurat som [Move](../move/) (kun flytting). Med to par roterer den også markeringen slik at retningen fra kilde til kilde samsvarer med retningen fra mål til mål, og kan valgfritt skalere den slik at kildesegmentets lengde samsvarer med målsegmentets lengde — flytting, rotasjon og skalering i én operasjon.

## To måter å starte på

**Marker først, deretter juster** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `align` i terminalen eller klikk på **Align**-knappen i verktøylinjen.
3. **Klikk det første kildepunktet (S1)**, deretter **klikk det første målpunktet (D1)**.
4. **Klikk det andre kildepunktet (S2)**, eller trykk **Enter** for å bruke kun flytting nå.
5. **Klikk det andre målpunktet (D2)**.
6. Svar på skaleringsspørsmålet: trykk **Y** for å skalere, eller **N** / **Enter** for å beholde opprinnelig størrelse.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `align` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå enkeltentiteter av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. Fortsett med S1 → D1 → S2 → D2 → skaleringsspørsmål som over.

> Terminalen trenger bare nok bokstaver til å være entydig — å skrive `al` og trykke **Enter** aktiverer Align direkte, siden ingen annen kommando starter med de to bokstavene.

## Anatomien til en justering

```
  Kildepunkter (på entitetene):        Målpunkter:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resultat: markeringen flyttes slik at S1 havner på D1, deretter
  roteres den rundt D1 slik at retningen S1→S2 samsvarer med
  retningen D1→D2 — og, hvis du velger å skalere, endres
  størrelsen slik at |S1S2| blir |D1D2|.
```

En levende spøkelsesforhåndsvisning følger markøren i hvert steg: en flytteforhåndsvisning mens D1 plasseres, deretter en rotert (stiplet) forhåndsvisning når D2 posisjoneres.

## Ettpunktsjustering (kun flytting)

Etter at D1 er plassert, trykk **Enter** i stedet for å klikke et andre kildepunkt. Markeringen flyttes med vektoren S1→D1 — ingen rotasjon eller skalering — identisk med en [Move](../move/) som bruker S1 som basispunkt og D1 som mål.

## Topunktsjustering (flytting + rotasjon + valgfri skalering)

Når både S2 og D2 er plassert:

- **Rotasjonsvinkel** — forskjellen mellom målretningen (`D1 → D2`) og kilderetningen (`S1 → S2`).
- **Skaleringsspørsmål** — `scale objects to alignment points? [Yes/No] <N>` vises, med **No** som standard:
  - Trykk **Y** for også å skalere markeringen jevnt rundt D1 slik at avstanden `S1–S2` blir avstanden `D1–D2`.
  - Trykk **N** eller **Enter** for å beholde opprinnelig størrelse — kun flytting og rotasjon brukes.

Å trykke en tast ved skaleringsspørsmålet bruker justeringen umiddelbart — det finnes ikke et separat bekreftelsessteg etter at du har valgt Yes eller No.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering og gå videre til S1-fasen |
| `Enter` (ved S2-steget) | Hopp over rotasjon — bruk kun flytting med S1 og D1 |
| `Y` | Bruk justeringen med skalering |
| `N` / `Enter` (ved skaleringsspørsmålet) | Bruk justeringen uten skalering |
| `Escape` | Mens du plasserer punkter: forkast dem og gå tilbake til markeringsfasen; uten noe markert: avbryt kommandoen |

## Markering under kommandoen

Når kommandoen starter i markeringsfasen:

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på i markeringen |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksens kant |
| **Enter** / **Space** | Bekrefter markeringen og går videre til S1-fasen |

## Etter justeringen

De justerte entitetene forblir markert på sin nye posisjon, og kommandoen avsluttes automatisk — kjør **Align** igjen, eller bytt til [Move](../move/), [Rotate](../rotate/) eller [Scale](../scale/) uten å markere på nytt.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Punktpar | 1 (kun flytting) eller 2 (flytting + rotasjon + skalering) | 1 (kun flytting) |
| Rotasjon | Ja, med et andre punktpar | Nei |
| Skalering | Valgfritt, med et andre punktpar | Nei |
| Best til | Å tilpasse én form til en annen ved hjelp av referansepunkter | Enkel omplassering |

## Støttede entiteter

Align fungerer på alle entitetstyper som støttes av Move, Rotate og Scale — de samme operasjonene `translate`, `rotate` og `scale` som disse kommandoene bruker, blir brukt i rekkefølge, så ingenting er utelatt.
