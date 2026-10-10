---
title: "Polygon-kommando — tegn regulære polygoner fra centrum eller kant i KulmanLab CAD"
description: "Polygon-kommandoen tegner en regulær polygon med 3 til 1024 sider ud fra dens centrum og en radius, eller ud fra én kant. Resultatet er en lukket LWPOLYLINE, så alle polylinje-redigeringskommandoer virker på den."
keywords: ["CAD polygon-kommando", "tegn regulær polygon CAD", "sekskant ottekant femkant CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Kommandoen `polygon` tegner en regulær polygon — alle sider og vinkler er ens — med 3 til 1024 sider. Skriv `polygon` i terminalen. Resultatet er en **lukket `LWPOLYLINE`**, så når den er placeret, opfører den sig som enhver anden [Polyline](../polyline/), og alle polylinje-redigeringer gælder.

## Tegn en polygon

1. Skriv `polygon` i terminalen og indtast **antal sider** — et helt tal fra 3 til 1024 — og tryk **Enter** eller **Space**. Prompten er forudfyldt med det sidst brugte antal (4 første gang); begynd at skrive for at erstatte det. Alt andet afvises og bliver stående i prompten, så du kan rette.
2. **Klik på centrum**, eller skriv `X,Y` og tryk **Enter** for en nøjagtig koordinat. Tryk `E` først for i stedet at starte fra en kant (se nedenfor).
3. **Klik på radius** — polygonen vises live — eller skriv radius og tryk **Enter** eller **Space**.
4. Polygonen placeres, og kommandoen afsluttes.

## Valg

| Valg | Tast | Virkning |
|---|---|---|
| Edge | `E` | Det første punkt bliver den ene ende af en kant i stedet for centrum. Vælg den anden ende; de øvrige hjørner dannes mod uret, til venstre for kanten fra første til anden ende. Tryk `E` igen for at gå tilbage til centrum. |
| Inside | `I` | Slået til som standard og bevaret fra polygon til polygon. Til: hjørnerne ligger på cirklen med den angivne radius. Fra: polygonen ligger uden for cirklen, med midten af hver kant på den. |

- Et klik placerer et hjørne (Inside til) eller midten af en kant (Inside fra) præcis, hvor markøren er, så markøren også bestemmer retningen.
- En skrevet radius har intet at sigte langs, så polygonen får sin laveste kant vandret — medmindre vinkellås er slået til, hvor den følger den låste vinkel.
- Hvert valg tilbydes i sit eget trin og kan skiftes, selv mens et tal skrives.

## Tastaturoversigt

| Tast | Handling |
|---|---|
| `0`–`9`, `.` | Skriv antal sider, radius eller en koordinat eller længde |
| `E` | Slå Edge til eller fra (trinnet for første punkt) |
| `I` | Slå Inside til eller fra (radiustrinnet) |
| `Enter` / `Space` | Bekræft antal sider eller radius |
| `Escape` | Annuller |

## DXF — LWPOLYLINE-entitet

En polygon gemmes som en lukket `LWPOLYLINE` med ét knudepunkt pr. hjørne; DXF har ingen dedikeret polygontype. Alle egenskaber — knudepunktskoordinater, farve, lag, linjetype, linjetypeskala og tykkelse — følger med uden tab, og enhver DXF-viser læser den som en lukket polylinje.
