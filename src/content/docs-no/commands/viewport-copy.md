---
title: ViewportCopy-kommando — Dupliser en Viewport i KulmanLab CAD
description: ViewportCopy-kommandoen dupliserer en markert viewport til en ny posisjon i samme layout, og bevarer skala og modellvisningsinnstillinger. Støtter eksakt koordinatinntasting, vinkellås og inntastet avstandsinntasting.
keywords: [viewport-kopi, dupliser viewport, kopier viewport-layout, vinkellås viewport, eksakt koordinat viewport, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Kommandoen `ViewportCopy` kopierer en viewport til en ny posisjon, og bevarer skalaen og modellsenteret. Kun tilgjengelig i layout-rommet.

## Kopiere en viewport

1. Bytt til en papirlayout-fane.
2. Klikk eventuelt en viewport for å forhåndsmarkere den.
3. Skriv `ViewportCopy` i terminalen eller klikk på **Viewport Copy**-knappen i verktøylinjen.
4. Hvis ingen viewport ble forhåndsmarkert, **klikk viewporten** som skal kopieres.
5. **Klikk basispunktet** — referansen for forskyvningen. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
6. **Klikk målet** — viewporten plasseres ved forskyvningen basis→mål. Eller bruk koordinatinntasting / vinkellås.

Etter plassering forblir kommandoen aktiv — klikk et annet mål for å plassere en ny kopi av samme viewport. Trykk **Enter**, **Space** eller **Escape** for å avslutte.

## Koordinatinntasting

Ved basispunkt- og målstegene kan du skrive inn en eksakt koordinat i stedet for å klikke:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Vinkellås og eksakt avstand

Etter at basispunktet er satt, festes kommandoen til 45°-akser (0°, 45°, 90°, 135° …) når markøren justeres. Mens låst:

- Forhåndsvisningen festes til aksen.
- Skriv en avstand og trykk **Enter** for å plassere kopien nøyaktig ved den forskyvningen langs den låste retningen.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i avstandsverdien |
| `-` | Negativ avstand (reverserer retning; kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser kopien på den inntastede avstanden |

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting, eller avstand mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `Enter` | Bekreft inntastet koordinat eller avstand |
| `Enter` / `Space` | Avslutt (når ingen inntasting pågår) |
| `Escape` | Avbryt og tilbakestill |

## Merknader

- ViewportCopy er kun tilgjengelig når en papirlayout-fane er aktiv.
- Den kopierte viewporten arver samme skala, modellsenter, låst tilstand og dimensjoner som originalen.
- For å opprette en ny viewport fra bunnen av, bruk [ViewportRectangle](../viewport-rectangle/).
