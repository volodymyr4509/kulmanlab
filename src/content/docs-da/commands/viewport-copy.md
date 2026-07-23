---
title: ViewportCopy-kommando — Duplikér en Viewport i KulmanLab CAD
description: ViewportCopy-kommandoen duplikerer en markeret viewport til en ny position i samme layout, og bevarer skala og modelvisningsindstillinger. Understøtter eksakt koordinatindtastning, vinkellås og indtastet afstandsindtastning.
keywords: [viewport-kopi, duplikér viewport, kopiér viewport-layout, vinkellås viewport, eksakt koordinat viewport, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Kommandoen `ViewportCopy` kopierer en viewport til en ny position, og bevarer dens skala og modelcentrum. Kun tilgængelig i layout-rummet.

## Kopiere en viewport

1. Skift til en papirlayout-fane.
2. Klik eventuelt en viewport for at forhåndsmarkere den.
3. Skriv `ViewportCopy` i terminalen eller klik på **Viewport Copy**-knappen i værktøjslinjen.
4. Hvis ingen viewport blev forhåndsmarkeret, **klik viewporten** der skal kopieres.
5. **Klik basispunktet** — referencen for forskydningen. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
6. **Klik målet** — viewporten placeres ved forskydningen basis→mål. Eller brug koordinatindtastning / vinkellås.

Efter placering forbliver kommandoen aktiv — klik et andet mål for at placere en ny kopi af samme viewport. Tryk **Enter**, **Space** eller **Escape** for at afslutte.

## Koordinatindtastning

Ved basispunkt- og måltrinnene kan du indtaste en eksakt koordinat i stedet for at klikke:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Vinkellås og eksakt afstand

Efter at basispunktet er sat, fæstner kommandoen sig til 45°-akser (0°, 45°, 90°, 135° …), når markøren justeres. Mens låst:

- Forhåndsvisningen fæstner sig til aksen.
- Skriv en afstand og tryk **Enter** for at placere kopien ved nøjagtigt den forskydning langs den låste retning.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til afstandsværdien |
| `-` | Negativ afstand (omvender retning; kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér kopi ved indtastet afstand |

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning, eller afstand mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Enter` | Bekræft indtastet koordinat eller afstand |
| `Enter` / `Space` | Afslut (når ingen indtastning er i gang) |
| `Escape` | Annullér og nulstil |

## Bemærkninger

- ViewportCopy er kun tilgængelig, når en papirlayout-fane er aktiv.
- Den kopierede viewport arver samme skala, modelcentrum, låst tilstand og dimensioner som originalen.
- For at oprette en ny viewport fra bunden, brug [ViewportRectangle](../viewport-rectangle/).
