---
title: Copy-kommando — Dupliser Entiteter på en Ny Posisjon
description: Copy-kommandoen oppretter flyttede duplikater av markerte entiteter mens originalene forblir på plass. Støtter forhåndsmarkering, vinkellås og eksakt avstandsinntasting. Kopiene plasseres og kommandoen avsluttes; originalene forblir uendret.
keywords: [CAD copy-kommando, dupliser entiteter CAD, kopier objekter CAD, klon geometri CAD, vinkellås kopi, eksakt avstand kopi, kulmanlab]
group: edit
order: 2
---

# Copy

Kommandoen `copy` oppretter flyttede duplikater av markerte entiteter og plasserer dem forskjøvet fra et basispunkt til et mål — originalene blir liggende akkurat der de er. Dette er den ene sentrale forskjellen fra [Move](../move/): Copy legger til nye entiteter i tegningen; Move flytter eksisterende.

## To måter å starte på

**Marker først, deretter kopier** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `copy` i terminalen eller klikk på **Copy**-knappen i verktøylinjen.
3. **Klikk basispunktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
4. **Klikk målet** — duplikater vises ved forskyvningen fra basispunkt til mål. Koordinatinntasting fungerer også her.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `copy` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå enkeltentiteter av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. **Klikk basispunktet**, deretter **klikk målet** (koordinatinntasting tilgjengelig i begge steg).

```
  Før:                  Etter:
  [entitet A]           [entitet A]  ← originaler urørt
  [entitet B]            [entitet B]
                        [kopi av A] ← nye entiteter
                        [kopi av B]
```

En spøkelsesforhåndsvisning av kopiene følger markøren fra basispunktet til målet.

## Koordinatinntasting

Ved basispunkt- eller målsteget kan du skrive inn en eksakt posisjon i stedet for å klikke:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Vinkellås og eksakt avstand

Etter at basispunktet er satt, festes kommandoen til 45°-akser (0°, 45°, 90°, 135° …) når markøren er langt nok unna og nær aksen. Mens låst, skriv en avstand og trykk **Enter** for å plassere kopiene på nøyaktig den forskyvningen.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til avstandsverdien |
| `-` | Negativ avstand — reverserer retningen langs aksen (kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser kopiene på den inntastede avstanden |

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering og gå videre til basispunkt-fasen |
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting, eller avstand mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft koordinat eller bruk kopi på inntastet avstand |
| `Escape` | Avbryt og tilbakestill |

## Markering under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på i markeringen |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksens kant |
| **Enter** / **Space** | Bekrefter markeringen |

## Etter kopieringen

**Originalene forblir markert** — de nye kopiene legges til i tegningen, men markeringen fjernes og kommandoen avsluttes. For å jobbe med kopiene umiddelbart, kjør Copy igjen på markeringen, eller start en ny kommando.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originaler | Blir på plass | Fjernes fra opprinnelig posisjon |
| Antall resultater | Øker med antall kopierte entiteter | Uendret |
| Etter operasjonen | Originaler fortsatt markert | Flyttede entiteter markert på ny posisjon |
| Best til | Gjenta geometri, symmetriske oppsett | Omplassere geometri |

## Støttede entiteter

Copy fungerer på alle entitetstyper. Alle entiteter implementerer `translate(dx, dy)` internt, så ingen er utelatt.
