---
title: Arc-kommando — Tegn Trepunktsbuer med Omskrevet Sirkel-metoden
description: Arc-kommandoen tegner en sirkelbue gjennom nøyaktig tre klikkede punkter ved hjelp av omskrevet sirkel-geometri. Start- og sluttgrep lar deg dra bueendene til en ny vinkel og radius etter plassering. Full DXF-rundtur som ARC-entiteter.
keywords: [CAD arc-kommando, trepunktsbue CAD, omskrevet sirkel bue, tegn bue CAD, ARC DXF-entitet, buegrep-redigering, kulmanlab]
group: shapes
order: 5
---

# Arc

Kommandoen `arc` tegner en sirkelbue gjennom tre punkter du klikker. Buen beregnes som den unike omskrevne sirkelen som går gjennom alle tre punktene — ikke nødvendig å angi et senter eller en radius direkte. Buen går fra det første klikket til det tredje klikket, gjennom det andre.

## Tegne en bue

1. Skriv `arc` i terminalen eller klikk på **Arc**-knappen i verktøylinjen.
2. **Klikk det første punktet** — den ene enden av buen. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk det andre punktet** — et punkt buen må gå gjennom (styrer krumning og retning). Koordinatinntasting fungerer også her.
4. **Klikk det tredje punktet** — den andre enden av buen. Buen plasseres og kommandoen avsluttes. Koordinatinntasting fungerer også her.

```
           ● (2. klikk — midtpunkt på kurven)
          / \
         /   \
        ●     ●
      1.        3.
```

En linjeforhåndsvisning kobler de to første klikkene mens du posisjonerer det tredje. Fra det andre klikket og utover følger en levende bueforhåndsvisning markøren.

> **Kollineære punkter**: hvis alle tre punktene ligger på en rett linje kan ikke buen beregnes, og ingen entitet plasseres. Flytt det andre punktet ut av linjen og prøv igjen.

## Koordinatinntasting

Ved hvert av de tre stegene kan du skrive inn en eksakt posisjon i stedet for å klikke:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere punktet.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft skrevet koordinat |
| `Escape` | Forkast alle plasserte punkter og avslutt |

## Grep-redigering — justere endepunkter og radius

En markert bue viser tre grep:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Senter** | Geometrisk senter av den omskrevne sirkelen | Flytter hele buen; radius og vinkler forblir uendret |
| **Start** | Første endepunkt på buen | Dra for å flytte starten langs den omskrevne sirkelen — endrer både startvinkel og radius |
| **Slutt** | Siste endepunkt på buen | Dra for å flytte slutten langs den omskrevne sirkelen — endrer både sluttvinkel og radius |

Å dra et start- eller sluttgrep flytter det til dra-posisjonen og beregner både vinkelen og radiusen på nytt fra den nye posisjonen relativt til senteret. Det motsatte endepunktet forblir fast.

## Markere buer

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander nær buekurven (ikke korden) |
| **Dra til høyre** (streng) | Prøvepunkter fordelt langs buen må alle ligge inni boksen |
| **Dra til venstre** (krysning) | Ethvert prøvepunkt på buen som havner inni boksen markerer den |

## Støttede redigeringskommandoer

| Kommando | Hva som skjer med buen |
|---------|------------------------|
| [Move](../move/) | Flytter senteret; radius og vinkler forblir uendret |
| [Copy](../copy/) | Oppretter en identisk bue på en ny posisjon |
| [Rotate](../rotate/) | Roterer senteret og forskyver start-/sluttvinkler med rotasjonsmengden |
| [Mirror](../mirror/) | Speilvender senteret og inverterer start-/sluttvinkler over speilaksen |
| [Scale](../scale/) | Skalerer senterposisjonen og multipliserer radiusen med skaleringsfaktoren |
| [Offset](../offset/) | Oppretter en konsentrisk bue med større eller mindre radius, samme vinkelspenn |
| [Delete](../delete/) | Fjerner buen |

## Egenskaper

**Generelt**

| Egenskap | Standard | Betydning |
|----------|---------|---------|
| Farge | 256 (ByLayer) | ACI-fargeindeks |
| Lag | `0` | Lagtilhørighet |
| Linetype | ByLayer | Navngitt strekmønster |
| Linetype Scale | 1 | Skaleringsfaktor for strekmønsteret |
| Thickness | 0 | Ekstruderingstykkelse |

**Geometri**

| Egenskap | Betydning |
|----------|---------|
| Center X / Center Y | Senter av den omskrevne sirkelen |
| Radius | Radius av den omskrevne sirkelen |
| Start Angle | Vinkel i grader der buen begynner (målt fra den positive X-aksen) |
| End Angle | Vinkel i grader der buen slutter |

## Arc vs Circle — hva du bør bruke

| | Arc | Circle |
|---|-----|--------|
| Spenn | Delvis — fra første til tredje klikk | Full 360° |
| Inndatametode | Tre punkter på kurven | Senter + radius (klikk eller skriv) |
| Inntastet verdi | X,Y-koordinat for hvert punkt | Radiusverdi (senter godtar også X,Y) |
| Endre størrelse etter plassering | Dra start-/sluttgrep | Dra et hvilket som helst kardinalgrep |
| Best til | Avrundinger, avrundede hjørner, buede baner | Fullstendige hull, runde elementer |

## DXF — ARC-entitet

Buer lagres som `ARC`-entiteter i DXF-filen, og lagrer senterkoordinater, radius, startvinkel og sluttvinkel. Alle egenskaper — inkludert farge, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uten tap. Enhver DXF-kompatibel applikasjon (LibreCAD, FreeCAD osv.) leser disse som standardbuer.
