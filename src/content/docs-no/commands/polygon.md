---
title: "Polygon-kommando — tegn regulære mangekanter fra sentrum eller kant i KulmanLab CAD"
description: "Polygon-kommandoen tegner en regulær mangekant med 3 til 1024 sider ut fra sentrum og en radius, eller ut fra én kant. Resultatet er en lukket LWPOLYLINE, så alle polylinje-redigeringskommandoer gjelder for den."
keywords: ["CAD polygon-kommando", "tegn regulær mangekant CAD", "sekskant åttekant femkant CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Kommandoen `polygon` tegner en regulær mangekant — alle sider og vinkler er like — med 3 til 1024 sider. Skriv `polygon` i terminalen. Resultatet er en **lukket `LWPOLYLINE`**, så når den er plassert, oppfører den seg som enhver annen [Polyline](../polyline/), og alle polylinje-redigeringer gjelder.

## Tegne en polygon

1. Skriv `polygon` i terminalen og oppgi **antall sider** — et helt tall fra 3 til 1024 — og trykk **Enter** eller **Space**. Forespørselen er forhåndsutfylt med sist brukte antall (4 første gang); begynn å skrive for å erstatte det. Alt annet avvises og blir stående i forespørselen for retting.
2. **Klikk på sentrum**, eller skriv `X,Y` og trykk **Enter** for en nøyaktig koordinat. Trykk `E` først for å starte fra en kant i stedet (se nedenfor).
3. **Klikk på radius** — polygonen forhåndsvises live — eller skriv radius og trykk **Enter** eller **Space**.
4. Polygonen plasseres og kommandoen avsluttes.

## Valg

| Valg | Tast | Virkning |
|---|---|---|
| Edge | `E` | Det første punktet blir den ene enden av en kant i stedet for sentrum. Velg den andre enden; de øvrige hjørnene bygges mot klokken, til venstre for kanten fra første til andre ende. Trykk `E` igjen for å gå tilbake til sentrum. |
| Inside | `I` | Slått på som standard og beholdt fra polygon til polygon. På: hjørnene ligger på sirkelen med oppgitt radius. Av: polygonen ligger utenfor sirkelen, med midten av hver kant på den. |

- Et klikk plasserer et hjørne (Inside på) eller midten av en kant (Inside av) nøyaktig der markøren er, så markøren bestemmer også retningen.
- En skrevet radius har ingenting å sikte langs, så polygonen får laveste kant vannrett — med mindre vinkellås er på, da følger den den låste vinkelen.
- Hvert valg tilbys i sitt eget trinn og kan byttes selv mens et tall skrives.

## Tastaturoversikt

| Tast | Handling |
|---|---|
| `0`–`9`, `.` | Skriv antall sider, radius, koordinat eller lengde |
| `E` | Slå Edge på eller av (trinnet for første punkt) |
| `I` | Slå Inside på eller av (radiustrinnet) |
| `Enter` / `Space` | Bekreft antall sider eller radius |
| `Escape` | Avbryt |

## DXF — LWPOLYLINE-entitet

En polygon lagres som en lukket `LWPOLYLINE` med ett knutepunkt per hjørne; DXF har ingen egen polygontype. Alle egenskaper — knutepunktkoordinater, farge, lag, linjetype, linjetypeskala og tykkelse — følger med uten tap, og enhver DXF-viser leser den som en lukket polylinje.
