---
title: Linetype-vælger — Styr Stregmønstre i KulmanLab CAD
description: Linetype-vælgeren i KulmanLab CAD-værktøjslinjen sætter stregmønsteret der anvendes på alle nytegnede entiteter. Understøtter alle linetyper indlæst fra den aktuelle DXF-fil plus de indbyggede muligheder ByLayer, ByBlock og Continuous.
keywords: [CAD linetype, stregmønster, stiplet linje, DXF linetype, ByLayer linetype, kulmanlab]
group: interface
order: 3
---

# Linetype

**Linetype**-chippen i værktøjslinjen styrer stregmønsteret der tildeles hver ny entitet du tegner. Klik på den for at åbne rullemenuen.

## Muligheder

| Værdi | Betydning |
|-------|---------|
| **From Layer** | Entiteten arver linetypen defineret på dens lag. Vises som `ByLayer` i DXF. |
| **ByBlock** | Entiteten arver linetypen for den blok, den tilhører. Har ingen synlig effekt uden for en blok. |
| **Continuous** | Massiv, ubrudt linje — intet stregmønster. |
| **Navngivne linetyper** | Enhver linetype indlæst fra den aktuelle DXF-fil (f.eks. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM` osv.). Rullemenuen viser en direkte forhåndsvisning af hvert mønster og dets definitionsstreng. |

## Hvordan det anvendes

Den valgte linetype anvendes på alle entiteter, der oprettes efter ændringen. Den påvirker ikke eksisterende entiteter bagudrettet.

For at ændre linetypen på eksisterende entiteter, markér dem og redigér **Linetype**-feltet i egenskabspanelet, eller brug [MatchProperties](../../commands/match-properties/) til at kopiere den fra en anden entitet.

## Linetype-skala

Hver entitet har også en **Linetype Scale**-egenskab (standard `1`). Stregmønsteret multipliceres med denne faktor. En værdi på `2` gør stregerne dobbelt så lange; `0.5` gør dem halvt så lange. Redigér den i egenskabspanelet efter at have markeret en entitet.

## Tilgængelige linetyper

Rullemenuen viser kun linetyper, der findes i den aktuelt indlæste DXF-fil. En nyoprettet fil indeholder kun `ByLayer`, `ByBlock` og `Continuous`. Når du importerer en DXF, bliver alle linetyper defineret i filens `$LTYPE`-tabel tilgængelige.

Hvis du har brug for en specifik linetype (f.eks. `DASHED2`), der ikke er på listen, importér en DXF-fil, der indeholder den — linetypen vil derefter vises i vælgeren for den aktuelle session.

## DXF-kompatibilitet

Linetype-navne gemmes som strenge i entitetsposter. `ByLayer` og `ByBlock` er standard DXF-sentinelværdier. Alle navngivne linetyper og deres stregmønstre bevares nøjagtigt ved eksport og overlever en fuld rundtur uden tab i LibreCAD, FreeCAD og andre DXF-kompatible applikationer.
