---
title: Spline Fit — Tegn Interpolerende Splines gennem Klikkede Punkter
description: Spline Fit-kommandoen tegner en kubisk spline der går gennem nøjagtigt hvert klikket punkt. Internt gemmes kurven med både fit-punkter og beregnede kontrolpunkter. At trække et fit-punkt-greb geninterpolerer hele kurven. Fuld DXF-rundtur som SPLINE-entiteter.
keywords: [CAD spline fit-kommando, interpolerende spline CAD, spline gennem punkter, tegn jævn kurve CAD, SPLINE DXF fit-punkter, spline-grebredigering, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Kommandoen `splinefit` tegner en kubisk spline der går gennem hvert punkt, du klikker — en interpolerende kurve. I modsætning til [Spline CV](../spline-cv/), hvor kurven kun trækkes mod kontrolpunkter, tvinges kurven her til at ramme hver klikket koordinat nøjagtigt. Internt tilpasser editoren kontrolpunkter for at opnå dette, og disse CV'er gemmes sammen med fit-punkterne i DXF-filen.

## Tegne en spline gennem fit-punkter

1. Skriv `splinefit` i terminalen eller klik på **Spline Fit**-knappen i værktøjslinjen.
2. **Klik for at placere fit-punkter** — kurven vil gå gennem hvert af dem. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. Tryk **Enter** for at afslutte (mindst 2 punkter kræves).

```
  ●──────●──────●──────●  ← kurven går nøjagtigt gennem hvert klik
  p1     p2     p3     p4
```

Den levende forhåndsvisning viser den aktuelle interpolerede kurve, mens du flytter markøren, inklusive det potentielle næste punkt ved markørpositionen. Tryk **Escape** for at kassere alle placerede punkter og gå ud.

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for et hvilket som helst fit-punkt:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere fit-punktet.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat, eller afslut splinen hvis ingen indtastning er i gang og ≥ 2 punkter findes |
| `Escape` | Kassér alle punkter og gå ud |

## Grebredigering — omforme via fit-punkter

En markeret fit-spline viser ét greb pr. fit-punkt:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Fit-punkt** | Ved hver klikket position | Træk for at flytte det fit-punkt — hele kurven geninterpoleres for at gå gennem den nye position |

At trække ét greb geninterpolerer hele kurven, ikke kun de tilstødende segmenter. Dette adskiller sig fra polylinje-grebredigering, hvor at flytte et hjørne kun omformer de to tilstødende segmenter.

Der findes ikke noget "flyt hele splinen"-greb. For at flytte hele splinen, brug [Move](../move/)-kommandoen.

## Markere fit-splines

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander tæt på et hvilket som helst punkt på kurven |
| **Træk mod højre** (streng) | Alle prøvepunkter langs kurven skal ligge inde i markeringsboksen |
| **Træk mod venstre** (krydsning) | Enhver del af kurven der krydser markeringsboksens kant markerer den |

## Understøttede redigeringskommandoer

| Kommando | Hvad der sker med splinen |
|---------|---------------------------|
| [Move](../move/) | Flytter alle fit-punkter og genberegnede CV'er med samme forskydning |
| [Copy](../copy/) | Opretter en identisk spline på en ny position |
| [Rotate](../rotate/) | Roterer alle fit-punkter omkring det valgte basispunkt |
| [Mirror](../mirror/) | Spejler alle fit-punkter over spejlaksen |
| [Scale](../scale/) | Skalerer alle fit-punkter ensartet fra basispunktet |
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
| Fit Points | Koordinater for alle klikkede gennemgangspunkter |
| Control Vertices | Internt beregnede CV'er brugt til at gengive kurven |

## Spline Fit vs Spline CV — hvad du bør bruge

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kurven går gennem punkter | Nøjagtigt hvert klikket punkt | Kun første og sidste (spændt) |
| Grebredigeringseffekt | Fit-punkt flytter → hele kurven geninterpoleres | CV flytter → kurven trækkes mod ny position |
| Formforudsigelighed | Høj — kurven følger klikkene | Lavere — kurven halter efter CV'erne |
| Bedst til | Kurver der skal ramme specifikke koordinater | Jævne æstetiske kurver, frihåndsbaner |

## DXF — SPLINE-entitet (fit-punktform)

Fit-splines gemmes som `SPLINE`-entiteter i DXF-filen, og gemmer både fit-punktkoordinaterne og de beregnede kontrolpunkter. `splineFlag` sættes til `8` (fit-point-spline), så en genindlæsende applikation ved, hvilket sæt punkter der skal vises som redigerbare greb. Alle egenskaber — farve, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uden tab. DXF-applikationer der understøtter fit-point-splines (LibreCAD, FreeCAD) vil vise fit-punkterne som den primære redigerbare data.
