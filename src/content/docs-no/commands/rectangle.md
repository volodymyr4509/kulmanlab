---
title: Rectangle-kommando — Tegn Akse-justerte Rektangler
description: Rectangle-kommandoen oppretter et akse-justert rektangel fra to motsatte hjørner. Resultatet er en lukket LWPOLYLINE med fire hjørner — identisk med en hvilken som helst annen polylinje når den er plassert, så hver polylinje-redigeringskommando gjelder for den.
keywords: [CAD rectangle-kommando, tegn rektangel CAD, akse-justert rektangel, lukket polylinje CAD, LWPOLYLINE DXF, rektangel-grepredigering, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Kommandoen `rectangle` tegner et akse-justert rektangel definert av to motsatte hjørneklikk. Resultatet lagres som en **lukket `LWPOLYLINE`** med fire hjørner — ett ved hvert hjørne. Det finnes ingen dedikert rektangel-entitetstype: etter opprettelse oppfører formen seg akkurat som en hvilken som helst annen [Polyline](../polyline/), og hver polylinje-redigering gjelder for den.

## Tegne et rektangel

1. Skriv `rectangle` i terminalen eller klikk på **Rectangle**-knappen i verktøylinjen.
2. **Klikk det første hjørnet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk det motsatte hjørnet** — rektangelet plasseres umiddelbart og kommandoen avsluttes. Koordinatinntasting fungerer også her.

```
  ● (første klikk)────────────┐
  |                          |
  |   levende forhåndsvisning følger  |
  |   markøren etter steg 2  |
  └──────────────────────────● (andre klikk)
```

De to klikkene kan være et hvilket som helst par diagonalt motsatte hjørner — øverst til venstre + nederst til høyre, eller nederst til venstre + øverst til høyre osv. Rekkefølgen spiller ingen rolle.

## Koordinatinntasting

Ved hvert hjørnesteg kan du skrive inn en eksakt posisjon:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere hjørnet.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Enter` | Bekreft inntastet koordinat |
| `Escape` | Avbryt |

Sidene er alltid horisontale og vertikale — det finnes ingen vinkellås for rectangle-kommandoen.

## Grep-redigering — omforme etter opprettelse

Et markert rektangel viser grep ved hvert hjørne og ved midtpunktet av hver side:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Hjørne** | Hvert av de 4 hjørnene | Dra for å flytte det hjørnet; de to tilstøtende sidene strekker seg for å følge — det motsatte hjørnet forblir fast |
| **Sidemidtpunkt** | Senter av hver av de 4 sidene | Dra for å forskyve begge endepunktene til den siden sammen, og beholde sidens lengde og vinkel |

Å dra et hjørnegrep gjør rektangelet til en ikke-rektangulær firkant. Hvis du bare trenger et rektangel i en annen størrelse, dra et hjørne mens du holder sidene noenlunde ortogonale, eller slett det og tegn et nytt.

## Markere rektangler

Fordi rektangelet er en polylinje, fungerer markering på samme måte:

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander på en av de fire sidene |
| **Dra til høyre** (streng) | Alle fire hjørner må ligge inni markeringsboksen |
| **Dra til venstre** (krysning) | Enhver side som krysser boksens kant markerer hele rektangelet |

## Støttede redigeringskommandoer

Alle polylinje-redigeringskommandoer gjelder. Trim og Extend er kun for [Line](../line/) og fungerer ikke på rektangler:

| Kommando | Hva som skjer med rektangelet |
|---------|-------------------------------|
| [Move](../move/) | Flytter alle fire hjørner med samme forskyvning |
| [Copy](../copy/) | Oppretter et identisk rektangel på en ny posisjon |
| [Rotate](../rotate/) | Roterer alle fire hjørner rundt det valgte basispunktet |
| [Mirror](../mirror/) | Speilvender alle fire hjørner over speilaksen |
| [Scale](../scale/) | Skalerer alle fire hjørner jevnt fra basispunktet |
| [Offset](../offset/) | Oppretter et parallelt (innoverliggende eller utoverliggende) rektangel i en fast avstand |
| [Delete](../delete/) | Fjerner rektangelet fra tegningen |

## Egenskaper

Når et rektangel er markert, viser egenskapspanelet de samme feltene som en hvilken som helst polylinje:

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
| Closed | Alltid `true` for et rektangel |
| Vertex Count | Alltid `4` for et umodifisert rektangel |
| Vertices | Koordinater for alle fire hjørner |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Hvordan tegne | 2 klikk (hjørner) | Klikk hvert hjørne | Klikk hvert endepunkt |
| Entitetstype | Lukket `LWPOLYLINE` | Åpen eller lukket `LWPOLYLINE` | `LINE` per segment |
| Sider alltid ortogonale | Ja (ved opprettelse) | Nei | Nei |
| Trim / Extend | Nei | Nei | Ja |
| Best til | Bokser, rammer, rektangulære områder | Vilkårlige omriss og baner | Individuelle segmenter, hjelpelinjer |

## DXF — LWPOLYLINE-entitet

Rektangler lagres som lukkede `LWPOLYLINE`-entiteter med fire hjørner. Alle egenskaper — hjørnekoordinater, farge, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uten tap.

Det finnes ingen dedikert `RECTANGLE`-type i DXF. Når en fil åpnes på nytt, vises formen som en lukket firehjørne-polylinje i stedet for et rektangel. Enhver DXF-visning eller -editor som støtter `LWPOLYLINE` (LibreCAD, FreeCAD osv.) vil vise den korrekt.
