---
title: ViewportRectangle-kommando — Opprett en Viewport i et Layout
description: ViewportRectangle-kommandoen oppretter en viewport i et papirlayout ved å klikke to motsatte hjørner. Viewporten viser modellrom-entitetene i layoutets standardskala.
keywords: [viewport-rektangel, opprett viewport, layout-viewport, papirrom-viewport, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Kommandoen `ViewportRectangle` oppretter en ny viewport i det aktive papirlayoutet ved å klikke to motsatte hjørner. Kun tilgjengelig i layout-rommet.

## Opprette en viewport

1. Bytt til et papirlayout ved hjelp av fanen nederst på skjermen.
2. Skriv `ViewportRectangle` i terminalen eller klikk på **Viewport Rectangle**-knappen i verktøylinjen.
3. **Klikk det første hjørnet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
4. **Klikk det motsatte hjørnet** — viewporten plasseres umiddelbart. Koordinatinntasting fungerer også her.

Den nye viewporten viser hele modellen i layoutets standardskala. Bruk rullehjulet inni viewporten for å zoome, eller midtklikk-dra for å panorere modellvisningen.

## Koordinatinntasting

Ved hvert hjørnesteg kan du skrive inn en eksakt koordinat:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere punktet.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Enter` | Bekreft inntastet koordinat |
| `Escape` | Avbryt |

## Redigere en viewport

Etter å ha plassert en viewport, klikk den for å markere den:

- **Dra kantene eller hjørnene** for å endre størrelse.
- **Dra sentergrepet** for å flytte den.
- Bruk **skalavelgeren** i kontrollinjen for å sette en eksakt skala (f.eks. 1:50). For å skrive inn en skala som ikke er i listen, skriv den direkte inn i tekstfeltet nederst i nedtrekksmenyen — godtar forholdsformat (`1:200`, `5:1`) eller et rent desimaltall (`0.005`), trykk deretter **Enter**.
- Høyreklikk en viewport og bruk **Lock** for å forhindre utilsiktede endringer.

## Merknader

- ViewportRectangle er kun tilgjengelig når en papirlayout-fane er aktiv. Å kjøre den i modellrommet viser en feilmelding og avslutter.
- For å kopiere en eksisterende viewport, bruk [ViewportCopy](../viewport-copy/).
