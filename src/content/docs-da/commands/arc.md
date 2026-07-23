---
title: Arc-kommando — Tegn Trepunktsbuer med Omskrevet Cirkel-metoden
description: Arc-kommandoen tegner en cirkelbue gennem præcis tre klikkede punkter ved hjælp af omskrevet cirkel-geometri. Start- og slutgreb lader dig trække bueenderne til en ny vinkel og radius efter placering. Fuld DXF-rundtur som ARC-entiteter.
keywords: [CAD arc-kommando, trepunktsbue CAD, omskrevet cirkel bue, tegn bue CAD, ARC DXF-entitet, buegrep-redigering, kulmanlab]
group: shapes
order: 5
---

# Arc

Kommandoen `arc` tegner en cirkelbue gennem tre punkter, du klikker. Buen beregnes som den unikke omskrevne cirkel, der går gennem alle tre punkter — ikke nødvendigt at angive et centrum eller en radius direkte. Buen går fra det første klik til det tredje klik, gennem det andet.

## Tegne en bue

1. Skriv `arc` i terminalen eller klik på **Arc**-knappen i værktøjslinjen.
2. **Klik det første punkt** — den ene ende af buen. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik det andet punkt** — et punkt buen skal gå gennem (styrer krumning og retning). Koordinatindtastning fungerer også her.
4. **Klik det tredje punkt** — den anden ende af buen. Buen placeres, og kommandoen afsluttes. Koordinatindtastning fungerer også her.

```
           ● (2. klik — midtpunkt på kurven)
          / \
         /   \
        ●     ●
      1.        3.
```

En linjeforhåndsvisning forbinder de to første klik, mens du positionerer det tredje. Fra det andet klik og fremad følger en levende bueforhåndsvisning markøren.

> **Kollineære punkter**: hvis alle tre punkter ligger på en lige linje, kan buen ikke beregnes, og ingen entitet placeres. Flyt det andet punkt væk fra linjen og prøv igen.

## Koordinatindtastning

Ved hvert af de tre trin kan du indtaste en eksakt position i stedet for at klikke:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere punktet.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat |
| `Escape` | Kassér alle placerede punkter og afslut |

## Grebredigering — justere endepunkter og radius

En markeret bue viser tre greb:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Center** | Geometrisk centrum af den omskrevne cirkel | Flytter hele buen; radius og vinkler forbliver uændrede |
| **Start** | Første endepunkt på buen | Træk for at flytte starten langs den omskrevne cirkel — ændrer både startvinkel og radius |
| **Slut** | Sidste endepunkt på buen | Træk for at flytte slutningen langs den omskrevne cirkel — ændrer både slutvinkel og radius |

At trække et start- eller slutgreb genplacerer det til trækpositionen og genberegner både vinklen og radius fra den nye position i forhold til centrum. Det modsatte endepunkt forbliver fast.

## Markere buer

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander tæt på buekurven (ikke korden) |
| **Træk mod højre** (streng) | Prøvepunkter fordelt langs buen skal alle ligge inde i boksen |
| **Træk mod venstre** (krydsning) | Ethvert prøvepunkt på buen, der falder inde i boksen, markerer den |

## Understøttede redigeringskommandoer

| Kommando | Hvad der sker med buen |
|---------|------------------------|
| [Move](../move/) | Flytter centrum; radius og vinkler forbliver uændrede |
| [Copy](../copy/) | Opretter en identisk bue på en ny position |
| [Rotate](../rotate/) | Roterer centrum og forskyder start-/slutvinkler med rotationsmængden |
| [Mirror](../mirror/) | Spejler centrum og inverterer start-/slutvinkler over spejlaksen |
| [Scale](../scale/) | Skalerer centerpositionen og multiplicerer radius med skaleringsfaktoren |
| [Offset](../offset/) | Opretter en koncentrisk bue med større eller mindre radius, samme vinkelspænd |
| [Delete](../delete/) | Fjerner buen |

## Egenskaber

**Generelt**

| Egenskab | Standard | Betydning |
|----------|---------|---------|
| Farve | 256 (ByLayer) | ACI-farveindeks |
| Lag | `0` | Lagtilhørsforhold |
| Linetype | ByLayer | Navngivet stregmønster |
| Linetype Scale | 1 | Skaleringsfaktor for stregmønsteret |
| Thickness | 0 | Ekstruderingstykkelse |

**Geometri**

| Egenskab | Betydning |
|----------|---------|
| Center X / Center Y | Centrum af den omskrevne cirkel |
| Radius | Radius af den omskrevne cirkel |
| Start Angle | Vinkel i grader hvor buen begynder (målt fra den positive X-akse) |
| End Angle | Vinkel i grader hvor buen slutter |

## Arc vs Circle — hvad du bør bruge

| | Arc | Circle |
|---|-----|--------|
| Spænd | Delvist — fra første til tredje klik | Fuld 360° |
| Inputmetode | Tre punkter på kurven | Centrum + radius (klik eller skriv) |
| Indtastet input | X,Y-koordinat for hvert punkt | Radiusværdi (centrum accepterer også X,Y) |
| Størrelsesændring efter placering | Træk start-/slutgreb | Træk et hvilket som helst kardinalgreb |
| Bedst til | Afrundinger, afrundede hjørner, buede baner | Fulde huller, runde elementer |

## DXF — ARC-entitet

Buer gemmes som `ARC`-entiteter i DXF-filen, og gemmer centerkoordinater, radius, startvinkel og slutvinkel. Alle egenskaber — inklusive farve, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uden tab. Enhver DXF-kompatibel applikation (LibreCAD, FreeCAD osv.) læser disse som standardbuer.
