---
title: Lijndikte-werkbalkkiezer — Lijnbreedte beheren in KulmanLab CAD
description: De lijndiktekiezer in de werkbalk van KulmanLab CAD stelt de lijnbreedte in die wordt toegepast op alle nieuw getekende entiteiten. Ondersteunt standaard DXF-lijndiktewaarden van 0,00 mm tot 2,11 mm, plus de modi ByLayer en Standaard.
keywords: [CAD lijndikte, lijnbreedte, streekbreedte, DXF lijndikte, ByLayer lijndikte, kulmanlab]
group: interface
order: 4
---

# Lijndikte

De **lijndikte**-chip in de werkbalk bepaalt de lijnbreedte die wordt toegewezen aan elke nieuwe entiteit die u tekent. Klik erop om de keuzelijst te openen.

## Opties

| Waarde | Betekenis |
|-------|---------|
| **Van laag** | Entiteit erft de lijndikte die is gedefinieerd op de laag. De werkelijk getoonde breedte hangt af van de laaginstelling. |
| **Standaard** | Gebruikt de standaardbreedte van de toepassing — weergegeven als een dunne lijn (1 px). Overschrijft de laaginstelling in DXF niet. |
| **0,00 mm – 2,11 mm** | Een expliciete vaste breedte. De entiteit behoudt deze waarde ongeacht de lijndikte van de laag. |

Standaard DXF-lijndiktewaarden zijn beschikbaar: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 en 2,11 mm.

## Hoe het wordt toegepast

De geselecteerde lijndikte wordt toegepast op elke entiteit die na de wijziging wordt gemaakt. Het heeft geen invloed op bestaande entiteiten met terugwerkende kracht.

Om de lijndikte van bestaande entiteiten te wijzigen, selecteert u deze en bewerkt u het veld **Lijndikte** in het eigenschappenpaneel, of gebruikt u [MatchProperties](../../commands/match-properties/) om deze van een andere entiteit te kopiëren.

## Weergave

Lijndiktes worden weergegeven op een schaal van **3,78 px per mm** (96 dpi). Een lijn van 0,25 mm is op het scherm ongeveer 1 px breed; een lijn van 1,00 mm is ongeveer 4 px. Zeer dunne waarden (0,00 mm en negatieve waarden) worden altijd weergegeven met minimaal 0,5 px, zodat ze op elk zoomniveau zichtbaar blijven.

## DXF-compatibiliteit

Lijndiktewaarden worden opgeslagen als gehele getallen in honderdsten van een millimeter (bijv. 25 = 0,25 mm) in de DXF-records `LWPOLYLINE`, `LINE`, `CIRCLE` en andere entiteiten. **Van laag** wordt opgeslagen als `-1` en **Standaard** als `-3`, in overeenstemming met de DXF-specificatie. Bestanden gaan zonder verlies door een volledige rondgang in elke DXF-compatibele toepassing.
