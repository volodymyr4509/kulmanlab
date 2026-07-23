---
title: Ellipse-kommando — Tegn Roterede Ellipser med Centrum og To Akser
description: Ellipse-kommandoen tegner en ellipse med tre klik — centrum, endepunkt for første akse (i en hvilken som helst retning), derefter længden af anden akse. De to akser er altid vinkelrette. Hver halvakse har sit eget greb til uafhængig størrelsesændring efter placering. Fuld DXF-rundtur som ELLIPSE-entiteter.
keywords: [CAD ellipse-kommando, tegn ellipse CAD, roteret ellipse CAD, ellipseakser, ELLIPSE DXF-entitet, ellipsegrep-redigering, akseforhold, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Kommandoen `ellipse` tegner en ellipse med tre klik: et centerpunkt, endepunktet for den første (store) halvakse i en hvilken som helst vinkel, og længden af den anden (lille) halvakse. De to akser er altid vinkelrette på hinanden — retningen af den anden akse udledes automatisk fra den første.

## Tegne en ellipse

1. Skriv `ellipse` i terminalen eller klik på **Ellipse**-knappen i værktøjslinjen.
2. **Klik centerpunktet**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik endepunktet for den første akse** — sætter både retningen og længden af den første halvakse. Koordinatindtastning fungerer også her.
4. **Sæt længden af den anden akse** — flyt markøren vinkelret på den første akse, klik derefter eller skriv en længde.

```
               ● ← endepunkt for første akse (trin 3)
              /
  centrum ●  /  ← første akse (en hvilken som helst vinkel)
            |
            ● ← markøren her sætter længden af anden akse (trin 4)
```

Ellipsen placeres efter trin 4, og kommandoen afsluttes.

## Akseindtastning — klik, koordinat eller indtastet længde

**Centrum (trin 2):** klik eller skriv `X,Y` for en eksakt position.

**Endepunkt for første akse (trin 3):** klik, eller skriv `X,Y` for en eksakt koordinat. Vinkellås fæstner også til 45°-intervaller — mens låst, skriv en længde og tryk **Enter** for at placere endepunktet ved den eksakte afstand.

**Anden akse (trin 4):** indtastet længde er altid tilgængelig — ingen vinkellås nødvendig. Retningen er allerede fast vinkelret på den første akse; indtastning sætter kun længden.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til akselængden (anden akse-fase) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér akseendepunktet ved den indtastede længde |

## Koordinatindtastning (centrum og endepunkt for første akse)

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning (centrum-/første akse-faserne), eller akselængde mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat eller længde |
| `Escape` | Annullér og nulstil |

## Grebredigering — uafhængig størrelsesændring på akserne

En markeret ellipse viser fem greb:

| Greb | Antal | Hvad den gør |
|------|-------|--------------|
| **Centrum** | 1 | Flytter hele ellipsen; begge akser forbliver uændrede |
| **Hovedakse-endepunkter** | 2 (modsatte ender af den længste akse) | Træk for at ændre længden af hovedhalvaksen; den lille akses absolutte størrelse forbliver konstant |
| **Biakse-endepunkter** | 2 (modsatte ender af den korteste akse) | Træk for at ændre længden af bihalvaksen; hovedaksen forbliver uændret |

Hoved- og biakse-grebene er uafhængige — du kan omforme ellipsen uden at køre kommandoen igen.

## Markere ellipser

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander tæt på ellipsens omrids |
| **Træk mod højre** (streng) | Ellipsens akse-justerede afgrænsningsboks skal passe helt inde i markeringsboksen |
| **Træk mod venstre** (krydsning) | Enhver del af ellipsens omrids, der krydser markeringsboksens kant, markerer den |

## Understøttede redigeringskommandoer

| Kommando | Hvad der sker med ellipsen |
|---------|-----------------------------|
| [Move](../move/) | Flytter centrum; begge akser forbliver uændrede |
| [Copy](../copy/) | Opretter en identisk ellipse med et nyt centrum |
| [Rotate](../rotate/) | Roterer centerpositionen og hovedaksevektoren med samme vinkel |
| [Mirror](../mirror/) | Spejler centrum og genberegner hovedakseretningen over spejlaksen |
| [Scale](../scale/) | Skalerer centerpositionen og multiplicerer begge halvakselængder med faktoren |
| [Offset](../offset/) | Opretter en koncentrisk ellipse forskudt udad eller indad med en fast afstand |
| [Delete](../delete/) | Fjerner ellipsen |

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
| Center X / Center Y | Centrum af ellipsen |
| Major Axis X / Major Axis Y | Vektor fra centrum til hovedakseendepunktet (koder både retning og længde) |
| Axis Ratio | Forholdet mellem lille halvakse og stor halvakse (0 < forhold ≤ 1) |
| Start Angle / End Angle | Parametriske vinkler i grader; begge er 0°/360° for en fuld ellipse |

## Ellipse vs Circle — hvad du bør bruge

| | Ellipse | Circle |
|---|---------|--------|
| Akser | To uafhængige halvakser i en hvilken som helst vinkel | Én radius, symmetrisk |
| Rotation | Kan placeres i en hvilken som helst vinkel | Ingen rotation |
| Indtastet input | Længde pr. akse | Kun radius |
| Grebstørrelsesændring | Hoved- og biakse uafhængigt | Alle fire kardinalpunkter ens |
| Bedst til | Skrå visninger, ovale elementer, perspektivhuller | Symmetriske runde elementer |

## DXF — ELLIPSE-entitet

Ellipser gemmes som `ELLIPSE`-entiteter i DXF-filen. Formatet gemmer centerpunktet, den fulde hovedaksevektor (retning + længde) og akseforholdet. Rotation, form og alle stilegenskaber overlever en rundtur uden tab. En cirkel gemmes **ikke** som en degenereret ellipse — de to entitetstyper forbliver adskilte i DXF-modellen.
