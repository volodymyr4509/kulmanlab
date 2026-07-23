---
title: Spline CV — Tegn B-Splines ved at Placere Kontrolpunkter
description: Spline CV-kommandoen tegner en kubisk B-spline ved at placere kontrolpunkter. Kurven trækkes mod punkterne, men går kun gennem det første og sidste (spændte knuder). Hvert CV-greb kan trækkes for at omforme kurven efter placering. Fuld DXF-rundtur som SPLINE-entiteter.
keywords: [CAD spline-kommando, B-spline kontrolpunkter, spændt spline CAD, tegn spline CAD, SPLINE DXF-entitet, spline-grebredigering, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Kommandoen `splinecv` tegner en **kubisk B-spline** ved at placere kontrolpunkter (CV'er). Den resulterende kurve trækkes mod hvert CV, men går ikke gennem dem — undtagen ved det allerførste og sidste punkt, hvor **spændte knuder** forankrer kurven nøjagtigt. Dette giver dig intuitiv formkontrol: træk et punkt for at skubbe kurven mod det uden at tvinge den til at røre hvert punkt.

## Tegne en spline med kontrolpunkter

1. Skriv `splinecv` i terminalen eller klik på **Spline CV**-knappen i værktøjslinjen.
2. **Klik for at placere kontrolpunkter** — hvert klik tilføjer et punkt. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. Tryk **Enter** for at afslutte (mindst 2 punkter kræves).

```
  CV ●         ● CV
      \       /
       \     /    ← kurven trækkes mod CV'erne
        \   /         men går ikke gennem dem
  CV ●   ●   ● CV (start/slut: kurven rører her)
```

Den levende forhåndsvisning opdateres, mens du flytter markøren efter hvert punkt, og viser hvordan splinen vil se ud med det næste punkt ved markørpositionen. Tryk **Escape** for at kassere alle placerede punkter og gå ud.

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for et hvilket som helst kontrolpunkt:

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
| `Enter` | Bekræft indtastet koordinat, eller afslut splinen hvis ingen indtastning er i gang og ≥ 2 punkter findes |
| `Escape` | Kassér alle punkter og gå ud |

## Grebredigering — omforme via kontrolpunkter

En markeret CV-spline viser ét greb pr. kontrolpunkt:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Kontrolpunkt** | Ved hver CV-position | Træk for at flytte det CV — kurven omformes mod den nye position |

Der findes ikke noget "flyt hele splinen"-greb. For at flytte hele splinen, brug [Move](../move/)-kommandoen.

## Markere CV-splines

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander tæt på et hvilket som helst punkt på kurven |
| **Træk mod højre** (streng) | Alle prøvepunkter langs kurven skal ligge inde i markeringsboksen |
| **Træk mod venstre** (krydsning) | Enhver del af kurven der krydser markeringsboksens kant markerer den |

## Understøttede redigeringskommandoer

| Kommando | Hvad der sker med splinen |
|---------|---------------------------|
| [Move](../move/) | Flytter alle kontrolpunkter med samme forskydning |
| [Copy](../copy/) | Opretter en identisk spline på en ny position |
| [Rotate](../rotate/) | Roterer alle CV'er omkring det valgte basispunkt |
| [Mirror](../mirror/) | Spejler alle CV'er over spejlaksen |
| [Scale](../scale/) | Skalerer alle CV'er ensartet fra basispunktet |
| [Delete](../delete/) | Fjerner splinen |

Splines understøtter ikke **Offset**, **Trim** eller **Extend**.

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
| Degree | Polynomiegrad — altid 3 (kubisk) |
| Control Vertices | Koordinater for alle CV'er |
| Fit Points | Tom for CV-splines; kun udfyldt for fit-point-splines |

## Spline CV vs Spline Fit — hvad du bør bruge

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kurven går gennem punkter | Kun første og sidste (spændt) | Nøjagtigt hvert klikket punkt |
| Formkontrol | Træk CV'er mod et område | Flyt fit-punkter kurven skal røre |
| Grebredigeringseffekt | CV flytter → kurven trækkes | Fit-punkt flytter → kurven geninterpoleres |
| Bedst til | Jævne æstetiske kurver, frihåndsbaner | Kurver der skal ramme specifikke koordinater |

## DXF — SPLINE-entitet (kontrolpunktform)

CV-splines gemmes som `SPLINE`-entiteter i DXF-filen, og gemmer graden, knudevektoren og alle kontrolpunktkoordinater. Alle egenskaber — farve, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uden tab. `splineFlag` sættes til `9` (CV-spline), så formen bevares ved genindlæsning. Enhver DXF-applikation der understøtter `SPLINE`-entiteter med CV-data, læser disse korrekt.
