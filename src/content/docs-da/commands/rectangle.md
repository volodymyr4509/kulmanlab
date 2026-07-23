---
title: Rectangle-kommando — Tegn Akse-justerede Rektangler
description: Rectangle-kommandoen opretter et akse-justeret rektangel fra to modsatte hjørner. Resultatet er en lukket LWPOLYLINE med fire hjørner — identisk med en hvilken som helst anden polylinje når den er placeret, så hver polylinje-redigeringskommando gælder for den.
keywords: [CAD rectangle-kommando, tegn rektangel CAD, akse-justeret rektangel, lukket polylinje CAD, LWPOLYLINE DXF, rektangel-grebredigering, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Kommandoen `rectangle` tegner et akse-justeret rektangel defineret af to modsatte hjørneklik. Resultatet gemmes som en **lukket `LWPOLYLINE`** med fire hjørner — ét ved hvert hjørne. Der findes ingen dedikeret rektangel-entitetstype: efter oprettelse opfører formen sig præcis som en hvilken som helst anden [Polyline](../polyline/), og hver polylinje-redigering gælder for den.

## Tegne et rektangel

1. Skriv `rectangle` i terminalen eller klik på **Rectangle**-knappen i værktøjslinjen.
2. **Klik det første hjørne**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik det modsatte hjørne** — rektanglet placeres øjeblikkeligt, og kommandoen afsluttes. Koordinatindtastning fungerer også her.

```
  ● (første klik)────────────┐
  |                          |
  |   levende forhåndsvisning følger  |
  |   markøren efter trin 2  |
  └──────────────────────────● (andet klik)
```

De to klik kan være et hvilket som helst par diagonalt modsatte hjørner — øverst til venstre + nederst til højre, eller nederst til venstre + øverst til højre osv. Rækkefølgen er ligegyldig.

## Koordinatindtastning

Ved hvert hjørnetrin kan du indtaste en eksakt position:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere hjørnet.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Enter` | Bekræft indtastet koordinat |
| `Escape` | Annullér |

Siderne er altid horisontale og vertikale — der er ingen vinkellås for rectangle-kommandoen.

## Grebredigering — omforme efter oprettelse

Et markeret rektangel viser greb ved hvert hjørne og ved midtpunktet af hver side:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Hjørne** | Hvert af de 4 hjørner | Træk for at flytte det hjørne; de to tilstødende sider strækker sig for at følge — det modsatte hjørne forbliver fast |
| **Sidemidtpunkt** | Centrum af hver af de 4 sider | Træk for at forskyde begge endepunkter af den side sammen, og bevare sidens længde og vinkel |

At trække et hjørnegreb gør rektanglet til en ikke-rektangulær firkant. Hvis du kun har brug for et rektangel i en anden størrelse, træk et hjørne mens du holder siderne nogenlunde ortogonale, eller slet det og tegn et nyt.

## Markere rektangler

Fordi rektanglet er en polylinje, fungerer markering på samme måde:

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander på en af de fire sider |
| **Træk mod højre** (streng) | Alle fire hjørner skal ligge inde i markeringsboksen |
| **Træk mod venstre** (krydsning) | Enhver side der krydser boksens kant markerer hele rektanglet |

## Understøttede redigeringskommandoer

Alle polylinje-redigeringskommandoer gælder. Trim og Extend er kun for [Line](../line/) og fungerer ikke på rektangler:

| Kommando | Hvad der sker med rektanglet |
|---------|-------------------------------|
| [Move](../move/) | Flytter alle fire hjørner med samme forskydning |
| [Copy](../copy/) | Opretter et identisk rektangel på en ny position |
| [Rotate](../rotate/) | Roterer alle fire hjørner omkring det valgte basispunkt |
| [Mirror](../mirror/) | Spejler alle fire hjørner over spejlaksen |
| [Scale](../scale/) | Skalerer alle fire hjørner ensartet fra basispunktet |
| [Offset](../offset/) | Opretter et parallelt (indad- eller udadgående) rektangel i en fast afstand |
| [Delete](../delete/) | Fjerner rektanglet fra tegningen |

## Egenskaber

Når et rektangel er markeret, viser egenskabspanelet de samme felter som en hvilken som helst polylinje:

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
| Closed | Altid `true` for et rektangel |
| Vertex Count | Altid `4` for et umodificeret rektangel |
| Vertices | Koordinater for alle fire hjørner |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Sådan tegner du | 2 klik (hjørner) | Klik hvert hjørne | Klik hvert endepunkt |
| Entitetstype | Lukket `LWPOLYLINE` | Åben eller lukket `LWPOLYLINE` | `LINE` pr. segment |
| Sider altid ortogonale | Ja (ved oprettelse) | Nej | Nej |
| Trim / Extend | Nej | Nej | Ja |
| Bedst til | Kasser, rammer, rektangulære områder | Vilkårlige omrids og baner | Individuelle segmenter, hjælpelinjer |

## DXF — LWPOLYLINE-entitet

Rektangler gemmes som lukkede `LWPOLYLINE`-entiteter med fire hjørner. Alle egenskaber — hjørnekoordinater, farve, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uden tab.

Der findes ingen dedikeret `RECTANGLE`-type i DXF. Når en fil genåbnes, vises formen som en lukket firehjørne-polylinje i stedet for et rektangel. Enhver DXF-visning eller -editor der understøtter `LWPOLYLINE` (LibreCAD, FreeCAD osv.) vil vise den korrekt.
