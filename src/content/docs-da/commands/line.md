---
title: Line-kommando — Tegn, Kæd, Trim og Forlæng Linjer
description: Line-kommandoen tegner enkeltstående lige linjesegmenter der kan kædes ende-til-ende. Linjer er den eneste entitetstype som Trim og Extend fungerer på. Fuld DXF-rundtur som LINE-entiteter.
keywords: [CAD line-kommando, tegn lige linje CAD, kæd linjesegmenter, trim linje CAD, forlæng linje CAD, vinkellås CAD, DXF LINE-entitet, kulmanlab]
group: shapes
order: 1
---

# Line

Kommandoen `line` tegner enkeltstående lige linjesegmenter gemt som separate `LINE`-entiteter i DXF-modellen. Efter hvert segment forbliver kommandoen aktiv og genbruger endepunktet som et nyt startpunkt, så du kan bygge sammenhængende baner ét segment ad gangen. I modsætning til en [Polyline](../polyline/) forbliver kædede linjer uafhængige entiteter — hver kan trimmes, forlænges eller slettes uden at påvirke naboerne.

## Tegne linjer

1. Skriv `line` i terminalen eller klik på **Line**-knappen i værktøjslinjen.
2. **Klik startpunktet**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik slutpunktet** — segmentet placeres, og endepunktet bliver det næste startpunkt. Koordinatindtastning fungerer også her.
4. Fortsæt med at klikke (eller skrive) for at kæde flere segmenter.
5. Tryk **Enter** eller **Escape** for at stoppe.

```
  ●──────────●──────────●──────────●
 start   2. klik    3. klik    Enter for at afslutte
            (bliver automatisk næste start)
```

Har du kun brug for ét segment? Tryk **Enter** eller **Escape** lige efter trin 3.

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for starten eller et hvilket som helst efterfølgende punkt:

1. Skriv X-værdien (cifre, `.` eller `-`).
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere punktet.

## Vinkellås og eksakt længdeindtastning

Mens du flytter markøren efter at have placeret et punkt, holder kommandoen øje med en 45°-fæsteakse (0°, 45°, 90°, 135° …). Vinklen **låses** når:

- markøren er mindst **5 × grebstørrelsen** fra ankeret, **og**
- den er inden for **1 grebstørrelse** vinkelret afstand fra den nærmeste akse.

Når den er låst, fæstner forhåndsvisningen sig til aksen, og du kan indtaste en eksakt længde:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til længdeværdien |
| `-` | Negativ længde — omvender retningen langs aksen (kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér endepunktet ved den indtastede afstand |

Den akkumulerede værdi vises live i terminalen (f.eks. `click end point or enter length: 12.5`). Klik mens låst, og klikket projiceres på aksen, så endepunktet altid ligger nøjagtigt på den.

At flytte tilbage tæt på ankerpunktet frigør låsen.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning, eller afstand mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat eller længde, eller afslut kæden hvis intet er skrevet |
| `Escape` | Afslut kæden og gå ud |

## Grebredigering — strække endepunkter

En markeret linje viser tre greb:

| Greb | Hvor | Hvad den gør |
|------|-------|--------------|
| **Start** | Første endepunkt | Træk for at genplacere — slutningen forbliver fast |
| **Midtpunkt** | Centrum af linjen | Aktiverer **Move** for hele linjen |
| **Slut** | Andet endepunkt | Træk for at genplacere — starten forbliver fast |

At strække ét endepunkt påvirker aldrig det andet. Dette adskiller sig fra [Polyline](../polyline/)-grebredigering, hvor at flytte et hjørne omformer hele banen.

## Markere linjer

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer linjen, hvis klikket er inden for treffafstand af segmentet |
| **Træk mod højre** (streng) | Linjen markeres kun, hvis begge endepunkter falder inde i boksen |
| **Træk mod venstre** (krydsning) | Linjen markeres, hvis en hvilken som helst del af segmentet krydser boksens kant |

## Understøttede redigeringskommandoer

Linjer er den **eneste** entitet, [Trim](../trim/) og [Extend](../extend/) fungerer på. Alle standard transformationskommandoer gælder også:

| Kommando | Hvad der sker med en linje |
|---------|------------------------|
| [Move](../move/) | Flytter begge endepunkter med samme forskydning |
| [Copy](../copy/) | Opretter en identisk linje på en ny position |
| [Rotate](../rotate/) | Roterer begge endepunkter omkring det valgte basispunkt |
| [Mirror](../mirror/) | Spejler begge endepunkter over spejlaksen |
| [Scale](../scale/) | Skalerer begge endepunkter ensartet fra basispunktet |
| [Offset](../offset/) | Opretter en parallel linje i en fast vinkelret afstand |
| [Trim](../trim/) | Skærer linjen ved skæringspunkter — **kun linjer** |
| [Extend](../extend/) | Strækker det nærmeste endepunkt for at nå en grænse — **kun linjer** |
| [Delete](../delete/) | Fjerner linjen fra tegningen |

## Egenskaber

Når en linje er markeret, viser egenskabspanelet hvert felt DXF `LINE`-posten bærer:

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
| Start X / Start Y | Koordinater for det første endepunkt |
| End X / End Y | Koordinater for det andet endepunkt |

Alle felter kan redigeres direkte i panelet uden at køre kommandoen igen.

## Line vs Polyline — hvad du bør bruge

| | Line | Polyline |
|---|------|---------|
| Antal entiteter | Én `LINE` pr. segment | Én `LWPOLYLINE` for hele banen |
| Trim / Extend | Ja — segment for segment | Nej |
| Lukket form | Nej | Ja (close-flag) |
| Grebredigering | Stræk individuelle endepunkter | Flyt et hvilket som helst hjørne langs banen |
| Bedst til | Hjælpelinjer, enkeltsegmenter, geometri du skal trimme | Konturer, omrids, former du beholder hele |

## DXF — LINE-entitet

Linjer gemmes som `LINE`-entiteter i DXF-filen. Hver egenskab — start-/slutkoordinater, farve, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uden tab. Når du åbner en DXF, der indeholder `LINE`-entiteter, bliver de fuldt redigerbare `Line`-objekter i editoren.

Linjer tegnet i editoren skrives også som `LINE`-entiteter ved gemning, så de kan læses af LibreCAD, FreeCAD og enhver anden DXF-kompatibel applikation.
